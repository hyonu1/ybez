(function(global){"use strict";
const VERSION="connected_7_routes_v4_segment_grade_axis";
const GRADE_ORDER=["express_deluxe","intercity_deluxe","express_normal","intercity_normal","intercity_single"];
const GRADE_ORDER_GEN=["express_normal","intercity_normal","intercity_single","express_deluxe","intercity_deluxe"];
const GRADE_LABEL={express_deluxe:"고속우등",intercity_deluxe:"시외우등",express_normal:"고속일반",intercity_normal:"시외일반",intercity_single:"단일시외"};
let DBP=null;
const nz=v=>String(v==null?"":v).trim();
const compact=s=>nz(s).replace(/\s+/g,"");
function aliases(name){const raw=nz(name), out=new Set([raw,compact(raw)]);if(!raw)return out;
  const swaps=[
    [/광주유스퀘어|유스퀘어\(광주\)|광주종합버스터미널/g,"광주"],
    [/센트럴시티터미널|서울고속버스터미널|서울고속|서울경부/g,"서울"],
    [/동서울종합터미널|동서울터미널/g,"서울"],
    [/부산종합버스터미널/g,"부산"],[/부산서부버스터미널|부산서부사상|사상터미널/g,"부산서부사상"],
    [/동대구터미널|서대구고속버스터미널/g,"대구"],
    [/신안교육청/g,"목포"]
  ];
  for(const [re,to] of swaps){if(re.test(raw)){out.add(to);out.add(compact(to));}}
  return out;
}
function statusUsable(s){s=nz(s);return !!s&&!new Set(["NO_FARE","RAW_ONLY"]).has(s);}
function normSourceLabel(v){const t=nz(v);if(!t)return"";const low=t.toLowerCase();if(low==="bustago")return"BUSTAGO";if(low==="kobus")return"KOBUS";if(low==="tmoney"||low==="tmoneygo")return"TMONEY";if(low==="jne2026"||low==="jne2026_anchor"||/jne_official/i.test(t))return"JNE2026";if(low==="asamaru")return"ASAMARU";return t;}
function fareSourceInfo(route,row,fare){const evs=Array.isArray(row&&row.evidence)?row.evidence:[];const matched=evs.filter(e=>Number(e&&e.amount||0)===Number(fare||0));const pick=matched.length?matched:evs;const src=[];const add=v=>{const x=normSourceLabel(v);if(x&&!src.includes(x))src.push(x);};
  for(const e of pick){if(!e)continue;add(e.provider);for(const x of e.sources||[])add(x);}
  if(!src.length){for(const x of (((route||{}).provider_route_evidence||{}).providers||[]))add(x);}
  if(!src.length){for(const x of (((route||{}).legacy_snapshot||{}).sources||[]))add(x);}
  if(!src.length)add((route||{}).authority);
  return{sourceLabel:src.join(" · ")||"routes.json",sources:src,evidence:pick};}
function fareHitForKeys(route,keys=[]){if(!route||route.active!==true)return null;const grades=route.grades||{};
  for(let i=0;i<keys.length;i++){const g=keys[i],row=grades[g]||{},fare=Number(row.current_fare||0);if(fare>0&&statusUsable(row.status)){const si=fareSourceInfo(route,row,fare);return{grade:g,label:row.label||GRADE_LABEL[g]||g,fare,rank:i+1,status:row.status,reviewPending:nz(row.status).startsWith("REVIEW"),...si};}}
  return null;
}
function currentFare(route,gradePreference="pre"){const order=gradePreference==="gen"?GRADE_ORDER_GEN:GRADE_ORDER;return fareHitForKeys(route,order);}
function isGeneralGrade(g){return g==="express_normal"||g==="intercity_normal"||g==="intercity_single";}
function isPreferredGrade(g){return g==="express_deluxe"||g==="intercity_deluxe";}
/* P5-2B: intercity_single은 일반/우등 선택쌍의 "일반" 후보가 아니다.
   단일시외 fallback 자체는 GRADE_ORDER / currentFare에 그대로 남겨 둔다. */
function exactGeneralFare(route){return fareHitForKeys(route,["express_normal","intercity_normal"]);}
function exactPreferredFare(route){return fareHitForKeys(route,["express_deluxe","intercity_deluxe"]);}
function segmentGradeChoice(d,seg,index){if(!seg||seg.segment_type!=="fare")return null;const route=seg.route||(d.routes.routes||{})[`${seg.from_node}>${seg.to_node}`];if(!route)return null;
  const gen=exactGeneralFare(route),pre=exactPreferredFare(route);if(!gen||!pre||Number(gen.fare||0)<=0||Number(pre.fare||0)<=0||Number(gen.fare)===Number(pre.fare))return null;
  const src=[...new Set([...(gen.sources||[]),...(pre.sources||[]),gen.sourceLabel,pre.sourceLabel].filter(Boolean))];
  return{segmentIndex:index,from:regionLabel(d,seg.from_node),to:regionLabel(d,seg.to_node),terminalFrom:route.from_name||nodeLabel(d,seg.from_node),terminalTo:route.to_name||nodeLabel(d,seg.to_node),from_node:seg.from_node,to_node:seg.to_node,gen:Number(gen.fare),pre:Number(pre.fare),genLabel:gen.label||GRADE_LABEL[gen.grade]||"일반",preLabel:pre.label||GRADE_LABEL[pre.grade]||"우등",genGrade:gen.grade,preGrade:pre.grade,sourceLabel:src.join(" · ")||gen.sourceLabel||pre.sourceLabel||"routes.json",sources:src};
}
function gradeChoiceBundle(d,m){const rows=(m&&m.fare&&m.fare.segments)||[];const choices=[];let genTotal=0,preTotal=0;
  for(let i=0;i<rows.length;i++){const seg=rows[i];if(!seg||seg.segment_type!=="fare")continue;const choice=segmentGradeChoice(d,seg,i);if(choice){choices.push(choice);genTotal+=choice.gen;preTotal+=choice.pre;}else{const fixed=Number(seg.amount||0);genTotal+=fixed;preTotal+=fixed;}}
  const selectable=choices.length>0;return{gen:Number(genTotal||0),pre:Number(preTotal||0),selectable,segments:choices};
}
function axisLabelForMaterialized(m){const p=(m&&m.op)||(m&&m.dp)||null;const raw=nz(p&&p.axis&&p.axis.label);if(raw){let head=raw.split(/[·]/)[0].trim().replace(/\bR\d+\b/g,"").trim();head=head.replace(/권$/,"").trim();if(head)return`${head}축`;}const role=nz(p&&p.role_id);return role?`${role}축`:"경로";}

function nodeLabel(db,nid){const n=(db.routes.nodes||{})[nid]||{};return n.display_name||nid;}
function regionLabel(db,nid){const n=(db.routes.nodes||{})[nid]||{};let a=nz(n.admin_area);if(!a)return nodeLabel(db,nid);
  if(/^서울/.test(a))return"서울";if(/^부산/.test(a))return"부산";if(/^대구/.test(a))return"대구";if(/^인천/.test(a))return"인천";if(/^광주/.test(a))return"광주";if(/^대전/.test(a))return"대전";if(/^울산/.test(a))return"울산";if(/^세종/.test(a))return"세종";
  a=a.replace(/^(전남|전북|경기|경남|경북|충남|충북|강원|제주)/,"");return a||nodeLabel(db,nid);
}
function addIndex(map,name,id){for(const a of aliases(name)){if(a&&!map[a])map[a]=id;}}
function buildIndexes(c){const names={},scopeOrigins=new Set();
  for(const [k,r] of Object.entries(c.routes||{})){if(!r)continue;const oid=nz(r.origin_search_id||k.split("__")[0]),did=nz(r.destination_search_id||k.split("__")[1]);if(oid){scopeOrigins.add(oid);addIndex(names,r.origin,oid);}if(did)addIndex(names,r.destination,did);}
  for(const [sid,t] of Object.entries(c.access_targets||{}))addIndex(names,t&&t.label,sid);
  return{names,scopeOrigins};
}
async function db(){if(!DBP)DBP=Promise.all([
  fetch("./connected_7.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("connected_7.json "+r.status);return r.json();}),
  fetch("./routes.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("routes.json "+r.status);return r.json();})
]).then(([connected,routes])=>{const d={connected,routes};d.idx=buildIndexes(connected);return d;});return DBP;}
function sidFor(d,name){for(const a of aliases(name)){if(d.idx.names[a])return d.idx.names[a];}return null;}
function targetAxes(d,sid){const t=(d.connected.access_targets||{})[sid];return t&&Array.isArray(t.axes)?[...t.axes].sort((a,b)=>Number(a.order||0)-Number(b.order||0)):[];}
function accessProfile(d,ref){return ref?(d.connected.access_profiles||{})[ref]||null:null;}
function routeOptions(rec){if(!rec)return[];const out=[];if(rec.primary)out.push({kind:"PRIMARY",c:rec.primary});for(const a of rec.alternates||[])out.push({kind:"ALT",c:a});return out;}
function reverseSegments(segs){return[...(segs||[])].reverse().map(x=>{if(!Array.isArray(x))return x;return x.length>2?[x[1],x[0],x[2]]:[x[1],x[0]];});}
function normalizeCandidate(c,reverse){if(!c)return null;const x={...c,node_path:[...(c.node_path||[])],segments:(c.segments||[]).map(v=>Array.isArray(v)?[...v]:v)};if(reverse){x.node_path.reverse();x.segments=reverseSegments(x.segments);const oa=x.origin_entry_axis;x.origin_entry_axis=x.destination_entry_axis;x.destination_entry_axis=oa;}return x;}
function fareCandidate(d,c,gradePreference="pre"){const segRows=[],grades=[];let total=0;
  for(const raw of c.segments||[]){if(!Array.isArray(raw)||raw.length<2)continue;const [a,b,typ0]=raw,typ=typ0||"fare";
    if(typ!=="fare"){segRows.push({from_node:a,to_node:b,segment_type:typ,amount:0,grade:"관내이동"});continue;}
    const route=(d.routes.routes||{})[`${a}>${b}`];const hit=currentFare(route,gradePreference);if(!hit)return null;total+=hit.fare;grades.push(hit.label);segRows.push({from_node:a,to_node:b,segment_type:"fare",amount:hit.fare,grade:hit.label,grade_key:hit.grade,review_pending:!!hit.reviewPending,sourceLabel:hit.sourceLabel,sources:hit.sources,evidence:hit.evidence,route});
  }
  return{total,grades,segments:segRows,reviewPending:segRows.some(x=>x&&x.review_pending),gradePreference};
}
function coreRecord(d,fromSid,toSid){
  if(d.idx.scopeOrigins.has(fromSid)){const r=(d.connected.routes||{})[`${fromSid}__${toSid}`];if(r)return{rec:r,reverse:false};}
  if(d.idx.scopeOrigins.has(toSid)){const r=(d.connected.routes||{})[`${toSid}__${fromSid}`];if(r)return{rec:r,reverse:true};}
  return null;
}
function resolvePlan(d,fromSid,toSid){
  const fa=targetAxes(d,fromSid),ta=targetAxes(d,toSid),fromTarget=fa.length>0,toTarget=ta.length>0;
  const tries=[];
  if(!fromTarget&&!toTarget)tries.push({fromParent:fromSid,toParent:toSid});
  else if(fromTarget&&!toTarget)for(const a of fa)tries.push({fromParent:a.parent_search_id,toParent:toSid,originRef:a.origin_access_ref,axisOrder:[Number(a.order||0)]});
  else if(!fromTarget&&toTarget)for(const a of ta)tries.push({fromParent:fromSid,toParent:a.parent_search_id,destinationRef:a.destination_access_ref,axisOrder:[Number(a.order||0)]});
  else for(const a of fa)for(const b of ta)tries.push({fromParent:a.parent_search_id,toParent:b.parent_search_id,originRef:a.origin_access_ref,destinationRef:b.destination_access_ref,axisOrder:[Number(a.order||0),Number(b.order||0)]});
  tries.sort((a,b)=>JSON.stringify(a.axisOrder||[]).localeCompare(JSON.stringify(b.axisOrder||[])));
  for(const t of tries){if(!t.fromParent||!t.toParent)continue;const core=coreRecord(d,t.fromParent,t.toParent);if(core)return{...t,...core};}
  return null;
}
function resolvePlans(d,fromSid,toSid){
  const fa=targetAxes(d,fromSid),ta=targetAxes(d,toSid),fromTarget=fa.length>0,toTarget=ta.length>0;
  const tries=[];
  if(!fromTarget&&!toTarget)tries.push({fromParent:fromSid,toParent:toSid});
  else if(fromTarget&&!toTarget)for(const a of fa)tries.push({fromParent:a.parent_search_id,toParent:toSid,originRef:a.origin_access_ref,axisOrder:[Number(a.order||0)]});
  else if(!fromTarget&&toTarget)for(const a of ta)tries.push({fromParent:fromSid,toParent:a.parent_search_id,destinationRef:a.destination_access_ref,axisOrder:[Number(a.order||0)]});
  else for(const a of fa)for(const b of ta)tries.push({fromParent:a.parent_search_id,toParent:b.parent_search_id,originRef:a.origin_access_ref,destinationRef:b.destination_access_ref,axisOrder:[Number(a.order||0),Number(b.order||0)]});
  tries.sort((a,b)=>JSON.stringify(a.axisOrder||[]).localeCompare(JSON.stringify(b.axisOrder||[])));
  const out=[];
  for(const t of tries){if(!t.fromParent||!t.toParent)continue;const core=coreRecord(d,t.fromParent,t.toParent);if(core)out.push({...t,...core});}
  return out;
}
function accessSegments(profile){if(!profile)return[];const out=[];for(const s of profile.local_segments||[])out.push({from:nz(s.from_name),to:nz(s.to_name),gen:Number(s.amount||0),pre:Number(s.amount||0),sourceLabel:"Connected 7 access",kind:"access",fare_counted:false});
  const ax=profile.axis||{};if(nz(ax.mode).toLowerCase()==="ferry"){out.push({from:nz(ax.from)||"선착장",to:nz(ax.to)||"선착장",gen:0,pre:0,sourceLabel:"여객선 실비 별도",kind:"ferry",fare_counted:false,note:nz(ax.sea_route)||"여객선 실비 입력"});}
  return out;
}
function routeParts(db,c,originLabel,destLabel,op,dp){const parts=[];if(op&&Array.isArray(op.access_path))parts.push(...op.access_path);const path=c.node_path||[];if(!op&&originLabel)parts.push(originLabel);for(let i=0;i<path.length;i++){if(!op&&i===0)continue;if(!dp&&i===path.length-1)continue;const m=regionLabel(db,path[i]);if(m&&parts[parts.length-1]!==m)parts.push(m);}if(!dp&&destLabel&&parts[parts.length-1]!==destLabel)parts.push(destLabel);if(dp&&Array.isArray(dp.access_path)){for(const p of dp.access_path)if(p&&parts[parts.length-1]!==p)parts.push(p);}return parts;}
function terminalParts(db,c,op,dp){const parts=[];if(op&&Array.isArray(op.access_path))parts.push(...op.access_path);for(const n of c.node_path||[]){const x=nodeLabel(db,n);if(x&&parts[parts.length-1]!==x)parts.push(x);}if(dp&&Array.isArray(dp.access_path))for(const p of dp.access_path)if(p&&parts[parts.length-1]!==p)parts.push(p);return parts;}
function makeAreaSegments(d,c,fare,op,dp,originLabel,destLabel){const out=[];if(op)out.push(...accessSegments(op));const core=fare.segments||[];for(let i=0;i<core.length;i++){const s=core[i];if(s.segment_type!=="fare"){out.push({from:nodeLabel(d,s.from_node),to:nodeLabel(d,s.to_node),gen:0,pre:0,sourceLabel:"",terminalFrom:nodeLabel(d,s.from_node),terminalTo:nodeLabel(d,s.to_node),from_node:s.from_node,to_node:s.to_node,kind:"hub_transfer",segment_type:"hub_transfer",note:"환승"});continue;}const r=s.route||{};const fromDisplay=(!op&&i===0&&originLabel)?originLabel:regionLabel(d,s.from_node);const toDisplay=(!dp&&i===core.length-1&&destLabel)?destLabel:regionLabel(d,s.to_node);out.push({from:fromDisplay,to:toDisplay,gen:s.amount,pre:s.amount,sourceLabel:s.sourceLabel||"routes.json",source:s.sourceLabel||"routes.json",sources:Array.isArray(s.sources)?s.sources:[],evidence:Array.isArray(s.evidence)?s.evidence:[],terminalFrom:r.from_name||nodeLabel(d,s.from_node),terminalTo:r.to_name||nodeLabel(d,s.to_node),from_node:s.from_node,to_node:s.to_node,route_key:`${s.from_node}>${s.to_node}`,kind:"bus",fareClass:s.grade,grade:s.grade_key,authority:r.authority||"ROUTES_2GEN"});}if(dp)out.push(...accessSegments(dp));return out;}
function materializeOption(d,plan,opt,originLabel,destLabel,op,dp,gradePreference="pre"){const c=normalizeCandidate(opt.c,plan.reverse);const fare=fareCandidate(d,c,gradePreference);if(!fare)return null;const rp=routeParts(d,c,originLabel,destLabel,op,dp),tp=terminalParts(d,c,op,dp),segs=makeAreaSegments(d,c,fare,op,dp,originLabel,destLabel);return{choice:opt.kind,c,fare,op,dp,routeParts:rp,terminalParts:tp,segments:segs};}
function materialize(d,plan,originLabel,destLabel,gradePreference="pre"){const op=accessProfile(d,plan.originRef),dp=accessProfile(d,plan.destinationRef),opts=routeOptions(plan.rec),valid=[];for(const opt of opts){const m=materializeOption(d,plan,opt,originLabel,destLabel,op,dp,gradePreference);if(m){m._opt=opt;valid.push(m);}}if(!valid.length)return null;const selected=valid[0];
  selected.gradePair=gradeChoiceBundle(d,selected);
  selected.alternates=valid.slice(1).map(x=>{const sourceLabels=[...new Set((x.segments||[]).map(s=>s&&s.sourceLabel).filter(Boolean))];return{choice:x.choice,routeKey:x.c.route_key,nodePath:x.c.node_path,routeLabel:x.routeParts.join(" → "),terminalRouteLabel:x.terminalParts.join(" → "),fare:Number(x.fare.total||0),gradeProfile:x.fare.grades,sourceLabel:sourceLabels.join(" · "),sources:sourceLabels,areaSegments:x.segments};});return selected;}
function result(d,m,origin,dest){const total=Number(m.fare.total||0),route=m.routeParts.join(" → "),terminal=m.terminalParts.join(" → ");const mainSources=[...new Set((m.segments||[]).map(s=>s&&s.sourceLabel).filter(Boolean))];const gp=m.gradePair||gradeChoiceBundle(d,m);const genTotal=Number(gp.gen||total),preTotal=Number(gp.pre||total),gradeSelectable=!!gp.selectable;
  const choiceByPair=new Map((gp.segments||[]).map(x=>[`${x.from_node}>${x.to_node}`,x]));
  const areaSegments=(m.segments||[]).map(seg=>{const ch=seg&&seg.from_node&&seg.to_node?choiceByPair.get(`${seg.from_node}>${seg.to_node}`):null;return ch?{...seg,gen:ch.gen,pre:ch.pre,gradeSelectable:true,gradeDefault:"pre",genLabel:ch.genLabel,preLabel:ch.preLabel,genGrade:ch.genGrade,preGrade:ch.preGrade}:seg;});
  const uiGradeSegments=(gp.segments||[]).map(ch=>{const areaIndex=areaSegments.findIndex(seg=>seg&&seg.from_node===ch.from_node&&seg.to_node===ch.to_node);return{...ch,segmentIndex:areaIndex>=0?areaIndex:ch.segmentIndex};});
  const gradeSegmentOverride=gradeSelectable?{gen:genTotal,pre:preTotal,fixedExtra:0,from:origin,to:dest,source:mainSources.join(" · ")||"routes.json",sourceLabel:mainSources.join(" · ")||"routes.json",fareType:"구간별 일반/우등",runtime:true,r5WholeRouteGradeTotal:true,segmentGen:(uiGradeSegments[0]?Number(uiGradeSegments[0].gen||0):genTotal),segmentPre:(uiGradeSegments[0]?Number(uiGradeSegments[0].pre||0):preTotal),gradeChoiceSegments:uiGradeSegments}:null;
  return{routeLabel:route,mainRouteLabel:route,displayRouteLabel:route,dr:route,terminalRouteLabel:terminal,gen:genTotal,pre:preTotal,cost:total,partialRoute:false,needsManualFare:false,gradeSelectable,gradeDefault:"pre",runtimeFareOverride:gradeSelectable?{gen:genTotal,pre:preTotal,area_pair_key:"CONNECTED_7",source:mainSources.join(" · ")||"routes.json",sourceLabel:mainSources.join(" · ")||"routes.json",fare_type:"구간별 일반/우등"}:null,gradeSegmentOverride,areaSegments,sources:mainSources.length?mainSources:["routes.json"],areaMethod:"Connected 7 selected NODE path + routes.json current trusted fare",fareAuthority:"routes.json",connectedChoice:m.choice,connectedAlternates:Array.isArray(m.alternates)?m.alternates:[],fareExcludesFerry:true,__connectedRuntime:{version:VERSION,scopeId:7,scopeLabel:"전남광주",origin,destination:dest,routeKey:m.c.route_key,nodePath:m.c.node_path,currentFare:total,gradePreference:m.fare.gradePreference,gradeProfile:m.fare.grades,choice:m.choice,alternateCount:Array.isArray(m.alternates)?m.alternates.length:0,originAccess:m.op||null,destinationAccess:m.dp||null}};}
async function runCandidate(input={}){try{const d=await db(),origin=nz(input.origin),dest=nz(input.destination),gradePreference=input.gradePreference==="gen"?"gen":"pre",fromSid=sidFor(d,origin),toSid=sidFor(d,dest);if(!fromSid||!toSid||fromSid===toSid)return{promote:false,fallback:true,reason:"CONNECTED_7_ID_NOT_FOUND",version:VERSION};const plans=resolvePlans(d,fromSid,toSid);if(!plans.length)return{promote:false,fallback:true,reason:"CONNECTED_7_NO_SELECTED_ROUTE",version:VERSION};const viable=[];for(const plan of plans){const mat=materialize(d,plan,origin,dest,gradePreference);if(mat)viable.push({plan,mat});}if(!viable.length)return{promote:false,fallback:true,reason:"CONNECTED_7_ROUTE_FARE_NOT_TRUSTED",version:VERSION};
  const built=viable.map(({plan,mat},idx)=>{const core=result(d,mat,origin,dest);const id=`axis:${nz(plan.originRef)||"-"}:${nz(plan.destinationRef)||"-"}:${nz(mat.c&&mat.c.route_key)||idx}`;return{plan,mat,core:{...core,connectedAxisOptionId:id,connectedAxisLabel:axisLabelForMaterialized(mat)}};});
  const unique=[];const seen=new Set();for(const x of built){const k=`${x.core.connectedAxisLabel}|${x.core.terminalRouteLabel}|${x.core.gen}|${x.core.pre}`;if(seen.has(k))continue;seen.add(k);unique.push(x);}const chosen=unique[0];
  const axisOptions=unique.map(x=>x.core);const finalResult={...chosen.core,connectedAxisOptions:axisOptions.length>1?axisOptions:[],connectedAxisSelectedId:chosen.core.connectedAxisOptionId};
  return{promote:true,fallback:false,reason:chosen.plan.reverse?"CONNECTED_7_REVERSED":"CONNECTED_7_SELECTED",result:finalResult,version:VERSION};}catch(e){return{promote:false,fallback:true,reason:"CONNECTED_7_EXEC_ERROR",error:String(e&&e.message||e),version:VERSION};}}
global.YBEZConnectedRuntime={VERSION,runCandidate,getState:async()=>{const d=await db();return{ready:true,version:VERSION,scopeId:d.connected.connected_scope_id,scopeLabel:d.connected.connected_scope_label,coreRoutes:Object.keys(d.connected.routes||{}).length,accessTargets:Object.keys(d.connected.access_targets||{}).length,directionalFares:Object.keys(d.routes.routes||{}).length};},reset:()=>{DBP=null;},_debug:{currentFare,exactGeneralFare,exactPreferredFare,segmentGradeChoice,gradeChoiceBundle,sidFor,resolvePlan,resolvePlans,materialize}};
})(typeof window!=="undefined"?window:globalThis);
