(function(global){"use strict";
const VERSION="connected_7_routes_v11_patch1_v1_r3d2c";
const R108_OVERLAY={"R002":{"status":"APPROVED","node_path":["NODE_0053","NODE_0010"],"fare_snapshot":27800,"access":true},"R003":{"status":"APPROVED","node_path":["NODE_0174","NODE_0053","NODE_0010"],"fare_snapshot":34600,"access":true},"R006":{"status":"APPROVED","node_path":["NODE_0204","NODE_0053","NODE_0010"],"fare_snapshot":31000,"access":true},"R010":{"status":"APPROVED","node_path":["NODE_0176","NODE_0053","NODE_0010"],"fare_snapshot":30700,"access":true},"R012":{"status":"APPROVED","node_path":["NODE_0195","NODE_0053","NODE_0010"],"fare_snapshot":30200,"access":true},"R017":{"status":"APPROVED","node_path":["NODE_0189","NODE_0053","NODE_0010"],"fare_snapshot":37300,"access":true},"R020":{"status":"APPROVED","node_path":["NODE_0201","NODE_0053","NODE_0010"],"fare_snapshot":33600,"access":true},"R022":{"status":"APPROVED","node_path":["NODE_0177","NODE_0053","NODE_0010"],"fare_snapshot":37100,"access":true},"R023":{"status":"APPROVED","node_path":["NODE_0179","NODE_0053","NODE_0010"],"fare_snapshot":35600,"access":true},"R027":{"status":"APPROVED","node_path":["NODE_0178","NODE_0177","NODE_0010"],"fare_snapshot":34300,"access":true},"R050":{"status":"APPROVED","node_path":["NODE_0202","NODE_0010"],"fare_snapshot":42800,"access":true},"R059":{"status":"APPROVED","node_path":["NODE_0192","NODE_0010"],"fare_snapshot":51200,"access":true},"R071":{"status":"APPROVED","node_path":["NODE_0199","NODE_0177","NODE_0010"],"fare_snapshot":43400,"access":true},"R075":{"status":"APPROVED","node_path":["NODE_0191","NODE_0053","NODE_0010"],"fare_snapshot":36500,"access":true},"R078":{"status":"APPROVED","node_path":["NODE_0166","NODE_0177","NODE_0010"],"fare_snapshot":40400,"access":true},"R081":{"status":"APPROVED","node_path":["NODE_0197","NODE_0184","NODE_0037"],"fare_snapshot":40100,"access":false},"R084":{"status":"APPROVED","node_path":["NODE_0182","NODE_0184","NODE_0037"],"fare_snapshot":36900,"access":false},"R088":{"status":"APPROVED","node_path":["NODE_0167","NODE_0184","NODE_0037"],"fare_snapshot":40300,"access":false},"R091":{"status":"APPROVED","node_path":["NODE_0169","NODE_0162","NODE_0010"],"fare_snapshot":31800,"access":true},"R094":{"status":"APPROVED","node_path":["NODE_0591","NODE_0162","NODE_0010"],"fare_snapshot":33500,"access":true},"R095":{"status":"APPROVED","node_path":["NODE_0184","NODE_0037"],"fare_snapshot":29000,"access":false},"R096":{"status":"APPROVED","node_path":["NODE_0187","NODE_0037"],"fare_snapshot":35500,"access":false},"R098":{"status":"APPROVED","node_path":["NODE_0171","NODE_0010"],"fare_snapshot":34200,"access":true}};

const R214_OVERLAY={"R010":{"route_key":"R214_OVERLAY:R010","node_path":["NODE_0176","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0176","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":20700,"grade_snapshot":"시외일반 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R002":{"route_key":"753aead2e16147c45bc5","node_path":["NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":24900,"grade_snapshot":"고속우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R003":{"route_key":"6a53a9c8a18a3095b0b9","node_path":["NODE_0174","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0174","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":29700,"grade_snapshot":"시외우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R006":{"route_key":"c1ff924f0883912824bf","node_path":["NODE_0204","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0204","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":28100,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R012":{"route_key":"9044f2c470f63522d9a7","node_path":["NODE_0195","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0195","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":26900,"grade_snapshot":"단일시외 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R017":{"route_key":"de50013d8bf0f6d9b007","node_path":["NODE_0189","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0189","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":34400,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R020":{"route_key":"2c6d7efc552d050363a2","node_path":["NODE_0201","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0201","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":30700,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R022":{"route_key":"7d8cd78eeaac7ed4a217","node_path":["NODE_0177","NODE_0046","NODE_0650","NODE_0462"],"segments":[["NODE_0177","NODE_0046"],["NODE_0046","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":32800,"grade_snapshot":"고속우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R023":{"route_key":"d8ddc13e9c8d8e174fe2","node_path":["NODE_0179","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0179","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":32700,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R027":{"route_key":"3eb981276c4d79650545","node_path":["NODE_0178","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0178","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":34200,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R050":{"route_key":"46557559edd83bdf2e96","node_path":["NODE_0202","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0202","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":41800,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R059":{"route_key":"a98b84a3fb2e6beea7f2","node_path":["NODE_0192","NODE_0184","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0192","NODE_0184"],["NODE_0184","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":51400,"grade_snapshot":"시외일반 + 시외우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R071":{"route_key":"146fc10a7a47545a7225","node_path":["NODE_0199","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0199","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":44800,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R075":{"route_key":"06cc58485e1ac92cac16","node_path":["NODE_0191","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0191","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":33600,"grade_snapshot":"시외일반 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R078":{"route_key":"c7df890c25c01b41c242","node_path":["NODE_0166","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0166","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":40100,"grade_snapshot":"시외우등 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R081":{"route_key":"7396c918fd6eb74713e4","node_path":["NODE_0197","NODE_0184","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0197","NODE_0184"],["NODE_0184","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":39300,"grade_snapshot":"시외일반 + 시외우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R084":{"route_key":"07cbe88054de215de549","node_path":["NODE_0182","NODE_0184","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0182","NODE_0184"],["NODE_0184","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":36100,"grade_snapshot":"시외일반 + 시외우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R088":{"route_key":"2d776b6b48d4a6dcc2ee","node_path":["NODE_0167","NODE_0184","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0167","NODE_0184"],["NODE_0184","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":39500,"grade_snapshot":"시외우등 + 시외우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R091":{"route_key":"2b0ec562166baecf32be","node_path":["NODE_0169","NODE_0053","NODE_0047","NODE_0650","NODE_0462"],"segments":[["NODE_0169","NODE_0053"],["NODE_0053","NODE_0047"],["NODE_0047","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":30400,"grade_snapshot":"시외일반 + 고속우등 + 좌석","direct":false,"transfers":2,"hub_transfer":true},"R094":{"route_key":"783198922dcb96351104","node_path":["NODE_0591","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0591","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":17700,"grade_snapshot":"시외일반 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R095":{"route_key":"70ad8c304b81ffcd36fc","node_path":["NODE_0184","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0184","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":28200,"grade_snapshot":"시외우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R096":{"route_key":"0f39b7d3e41ba01ccf51","node_path":["NODE_0187","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0187","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":34900,"grade_snapshot":"시외우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true},"R098":{"route_key":"c41fa838f10e54b63e5b","node_path":["NODE_0171","NODE_0273","NODE_0650","NODE_0462"],"segments":[["NODE_0171","NODE_0273"],["NODE_0273","NODE_0650","hub_transfer"],["NODE_0650","NODE_0462"]],"fare_snapshot":28000,"grade_snapshot":"시외우등 + 좌석","direct":false,"transfers":1,"hub_transfer":true}};
const LATEST_PENDING_PAIRS=new Set(["R010__R248"]);
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
function axisLabelForMaterialized(m){const p=(m&&m.op)||(m&&m.dp)||(m&&m.originAxis)||(m&&m.destinationAxis)||null;const raw=nz((p&&p.axis&&p.axis.label)||(p&&p.parent_label)||(p&&p.label));if(raw){let head=raw.split(/[·]/)[0].trim().replace(/\bR\d+\b/g,"").trim();head=head.replace(/권$/,"").trim();if(head)return`${head}축`;}const role=nz(p&&p.role_id);return role?`${role}축`:"경로";}

function nodeLabel(db,nid){const n=(db.routes.nodes||{})[nid]||{};return n.display_name||nid;}
function nodeCoord(db,nid){const n=(db.routes.nodes||{})[nid]||{};const lat=Number(n.lat),lng=Number(n.lng);return Number.isFinite(lat)&&Number.isFinite(lng)?{lat,lng,name:n.display_name||nid,node_id:nid}:null;}
function haversineKm(a,b){if(!a||!b)return null;const rad=x=>x*Math.PI/180,R=6371.0088;const p1=rad(Number(a.lat)),p2=rad(Number(b.lat)),dp=rad(Number(b.lat)-Number(a.lat)),dl=rad(Number(b.lng)-Number(a.lng));if(![p1,p2,dp,dl].every(Number.isFinite))return null;const h=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 2*R*Math.asin(Math.min(1,Math.sqrt(h)));}
function gyeonggiDistanceFare(km){const base=1650;if(!(Number.isFinite(km)&&km>10))return base;const capped=Math.min(km,40);const steps=Math.ceil((capped-10)/5)+(km>40?1:0);return Math.min(2350,base+Math.max(0,steps)*100);}
function landTargetRecord(d,profile){const sid=nz(profile&&profile.target_search_id);return sid?((d.connected.land_access_targets||{})[sid]||null):null;}
function buildLandAccessPlan(d,profile,c,side){if(!profile||nz(profile.mode)!=="land_parent_bridge")return null;const target=landTargetRecord(d,profile)||{};const targetLabel=nz(profile.target_label||target.label);const parentLabel=nz((profile.axis||{}).from&&side==="destination"?(profile.axis||{}).from:(profile.axis||{}).to)||nz(profile.parent_label)||"접근허브";const path=[...(c&&c.node_path||[])];const terminalNode=side==="origin"?path[0]:path[path.length-1];const terminal=nodeCoord(d,terminalNode);const ta=target.target_anchor||{};const targetCoord=(Number.isFinite(Number(ta.lat))&&Number.isFinite(Number(ta.lng)))?{lat:Number(ta.lat),lng:Number(ta.lng),name:nz(ta.name)||targetLabel,node_id:nz(ta.node_id)}:null;const km=haversineKm(terminal,targetCoord);const distanceAvailable=Number.isFinite(km);const one=distanceAvailable?gyeonggiDistanceFare(km):1650;const terminalName=nz(terminal&&terminal.name)||nodeLabel(d,terminalNode);const displayRoute=side==="origin"?`${targetLabel} → ${terminalName}`:`${terminalName} → ${targetLabel}`;return{side,mode:"JOINT_ZONE_CHOICES",lv4:parentLabel,lv5:targetLabel,oneway:one,recommended_oneway:one,displayRoute,distanceFare:true,distanceMethod:"HAVERSINE_GPS",distanceKm:distanceAvailable?km:null,distanceKmRounded:distanceAvailable?Math.round(km):null,distanceAvailable,sourceLabel:"경기도 시내버스 기본요금 · 거리 기준 가산",source:"경기도 시내버스 기본요금 · 거리 기준 가산",accessType:"OFFICIAL_DISTANCE_FARE",terminalNodeId:terminalNode||null,terminalName,targetAnchorNodeId:nz(ta.node_id)||null,targetAnchorName:nz(ta.name)||targetLabel,fallbackUsed:!distanceAvailable};}

function regionLabel(db,nid){const n=(db.routes.nodes||{})[nid]||{};let a=nz(n.admin_area);if(!a)return nodeLabel(db,nid);
  if(/^서울/.test(a))return"서울";if(/^부산/.test(a))return"부산";if(/^대구/.test(a))return"대구";if(/^인천/.test(a))return"인천";if(/^광주/.test(a))return"광주";if(/^대전/.test(a))return"대전";if(/^울산/.test(a))return"울산";if(/^세종/.test(a))return"세종";
  a=a.replace(/^(전남|전북|경기|경남|경북|충남|충북|강원|제주)/,"");return a||nodeLabel(db,nid);
}
function addIndex(map,name,id){for(const a of aliases(name)){if(a&&!map[a])map[a]=id;}}
function buildIndexes(c){const names={},scopeOrigins=new Set();
  for(const [k,r] of Object.entries(c.routes||{})){if(!r)continue;const oid=nz(r.origin_search_id||k.split("__")[0]),did=nz(r.destination_search_id||k.split("__")[1]);if(oid){scopeOrigins.add(oid);addIndex(names,r.origin,oid);}if(did)addIndex(names,r.destination,did);}
  for(const [sid,t] of Object.entries(c.access_targets||{}))addIndex(names,t&&t.label,sid);
  for(const [sid,t] of Object.entries(c.land_access_targets||{}))addIndex(names,t&&t.label,sid);
  for(const e of Object.values(((c.runtime_bridge||{}).pair_index)||{})){if(e&&e.origin_search_id){scopeOrigins.add(e.origin_search_id);addIndex(names,e.origin_label,e.origin_search_id);}if(e&&e.destination_search_id)addIndex(names,e.destination_label,e.destination_search_id);}
  return{names,scopeOrigins};
}
async function db(){if(!DBP)DBP=Promise.all([
  fetch("./connected_7_repair_runtime_v1.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("connected_7.json "+r.status);return r.json();}),
  fetch("./routes.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("routes.json "+r.status);return r.json();}),
  fetch("./transfer_cost_v1.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("transfer_cost_v1.json "+r.status);return r.json();})
]).then(([connected,routes,transfer])=>{const d={connected,routes,transfer};d.idx=buildIndexes(connected);return d;});return DBP;}
function sidFor(d,name){for(const a of aliases(name)){if(d.idx.names[a])return d.idx.names[a];}return null;}
function targetAxes(d,sid,side){const t=(d.connected.access_targets||{})[sid];if(t&&Array.isArray(t.axes))return[...t.axes].sort((a,b)=>Number(a.order||0)-Number(b.order||0));const lt=(d.connected.land_access_targets||{})[sid];const key=side==="origin"?"origin_axes":"destination_axes";return lt&&Array.isArray(lt[key])?[...lt[key]].sort((a,b)=>Number(a.order||0)-Number(b.order||0)):[];}
function accessProfile(d,ref){return ref?(d.connected.access_profiles||{})[ref]||null:null;}
function isJeonnamGwangjuIslandTarget(d,sid){const t=(d.connected.access_targets||{})[sid];if(!t||sid==="R210"||nz(t.label)==="울릉")return false;for(const a of t.axes||[]){for(const ref of [a&&a.origin_access_ref,a&&a.destination_access_ref]){const p=accessProfile(d,ref),mode=nz(p&&p.axis&&p.axis.mode).toLowerCase();if(mode==="ferry"||mode==="dosun")return true;}}return false;}
function placeKey(v){let s=compact(v).replace(/\([^)]*\)/g,"");for(let i=0;i<3;i++)s=s.replace(/(종합버스터미널|공용버스터미널|시외버스터미널|버스터미널|연안여객선터미널|여객선터미널|정류장|정류소|선착장|항)$/g,"");return s;}
function findPlaceNode(d,name){const raw=nz(name),key=placeKey(raw);if(!key)return null;const strictMarine=/연안|여객/.test(raw),wantsPort=/항|선착장/.test(raw);const hits=[];for(const [nid,n] of Object.entries((d.routes&&d.routes.nodes)||{})){const label=nz(n&&n.display_name),nk=placeKey(label);if(!nk||nk!==key)continue;if(strictMarine&&!/연안|여객/.test(label))continue;let score=0;if(wantsPort&&/항|선착장/.test(label))score+=4;if(/정류장|정류소/.test(label))score+=1;if(/버스터미널/.test(label))score-=2;hits.push({node_id:nid,label:label||nid,lat:Number(n.lat),lng:Number(n.lng),score});}hits.sort((a,b)=>b.score-a.score);return hits[0]||null;}
function parentNodeForSid(d,sid){const count=new Map();const add=nid=>{if(!nid)return;count.set(nid,(count.get(nid)||0)+1);};for(const r of Object.values((d.connected&&d.connected.routes)||{})){if(!r)continue;const p=r.primary||{},path=Array.isArray(p.node_path)?p.node_path:[];if(nz(r.origin_search_id)===sid&&path.length)add(path[0]);if(nz(r.destination_search_id)===sid&&path.length)add(path[path.length-1]);}let out=null,max=-1;for(const [nid,c] of count){if(c>max){out=nid;max=c;}}return out;}
const PORT_ACCESS_TEMP_BASE_FARE=1250;
const PORT_ACCESS_TEMP_BASE_SOURCE="광주 일반 시내버스 기본요금 임시 참고값";
const PORT_ACCESS_JN_PARENT_SIDS=new Set(["R017","R022","R050","R059","R071","R081","R088","R096"]);
const PORT_ACCESS_GATEWAY_COORDS=Object.freeze({"목포 연안여객선터미널":[34.7818,126.3844],"목포항":[34.781,126.3833],"목포 북항":[34.8,126.3667],"암태 남강항":[34.8315,126.1558],"땅끝항":[34.3005,126.5402],"우수영항":[34.58,126.3167],"완도항":[34.3148,126.7594],"화흥포항":[34.3168,126.6875],"약산 당목항":[34.4002,126.9189],"이목항":[34.1956,126.5683],"여수항":[34.7371,127.7303],"국동항":[34.7283,127.7264],"돌산 군내리항":[34.6167,127.7167],"녹동항":[34.5167,127.1333],"고흥 녹동항":[34.5167,127.1333],"거금도 오천항":[34.3942,127.1856],"진도항":[34.3639,126.1344],"쉬미항":[34.4842,126.2058],"향화도항":[35.1762,126.3533],"계마항":[35.4227,126.4103],"회진(노력)항":[34.4289,126.9189],"포항 영일만항":[36.1166666667,129.4333333333]});
const PORT_ACCESS_FARE_NODE=Object.freeze({"땅끝항":"NODE_0628","우수영항":"NODE_0630","진도항":"NODE_0625","녹동항":"NODE_0168","고흥 녹동항":"NODE_0168","완도항":"NODE_0193","화흥포항":"NODE_0664","약산 당목항":"NODE_0615"});
function portGatewayName(profile,side){const ax=profile&&profile.axis||{},direct=nz(ax.land_gateway);if(direct)return direct;const path=Array.isArray(profile&&profile.access_path)?profile.access_path.filter(Boolean):[];if(path.length)return nz(side==="origin"?path[path.length-1]:path[0]);return nz(ax.from);}
function portGatewayCoord(d,gateway,gatewayNode){const row=PORT_ACCESS_GATEWAY_COORDS[gateway];if(row&&Number.isFinite(Number(row[0]))&&Number.isFinite(Number(row[1])))return{lat:Number(row[0]),lng:Number(row[1])};return gatewayNode?nodeCoord(d,gatewayNode.node_id):null;}
function buildPortAccessAudit(d,profile,side){if(!profile)return null;const ax=profile.axis||{},mode=nz(ax.mode).toLowerCase();if(mode!=="ferry"&&mode!=="dosun")return null;const gateway=portGatewayName(profile,side);if(!gateway)return null;const parentSid=nz(profile.parent_search_id||profile.role_id),parentNode=parentNodeForSid(d,parentSid);let gatewayNode=findPlaceNode(d,gateway);const mappedNode=PORT_ACCESS_FARE_NODE[gateway];if(mappedNode&&(d.routes.nodes||{})[mappedNode])gatewayNode={node_id:mappedNode,label:gateway,lat:Number((d.routes.nodes[mappedNode]||{}).lat),lng:Number((d.routes.nodes[mappedNode]||{}).lng),score:99};const base={side,mode:"PORT_LAND_ACCESS_AUDIT",parent_search_id:parentSid,gateway,threshold_km:12,sea_fare_included:false,sea_fare_policy:"실비/기타교통비 분리"};if(!parentNode)return{...base,status:"REVIEW_PARENT_NODE_UNRESOLVED",candidate:false,parent_node_id:null,gateway_node_id:gatewayNode&&gatewayNode.node_id||null};const a=nodeCoord(d,parentNode),b=portGatewayCoord(d,gateway,gatewayNode),km=haversineKm(a,b);const fareNodeId=gatewayNode&&gatewayNode.node_id||mappedNode||null;const fromNode=fareNodeId?(side==="origin"?fareNodeId:parentNode):null,toNode=fareNodeId?(side==="origin"?parentNode:fareNodeId):null;const route=fromNode&&toNode?pairFareRoute(d,fromNode,toNode):null,hit=currentFare(route,"pre");const common={...base,parent_node_id:parentNode,parent_label:nodeLabel(d,parentNode),gateway_node_id:fareNodeId,gateway_label:gateway,distance_km:Number.isFinite(km)?km:null,distance_km_rounded:Number.isFinite(km)?Math.round(km*10)/10:null,route_key:fromNode&&toNode?`${fromNode}>${toNode}`:null};if(parentSid==="R059")return{...common,status:"WANDO_RURAL_FREE",candidate:false,amount:0,sourceLabel:"완도 농어촌버스 무료 정책"};if(hit)return{...common,status:"CANDIDATE_TRUSTED_FARE",candidate:true,amount:Number(hit.fare),grade:hit.label||hit.grade,sourceLabel:hit.sourceLabel||"routes.json",sources:hit.sources||[],fare_status:hit.status||null,recommendation_basis:"ACTUAL_DB_FARE_FIRST"};if(!Number.isFinite(km))return{...common,status:"REVIEW_DISTANCE_UNRESOLVED",candidate:false,amount:null,sourceLabel:"축_항구정보.xlsx 좌표 확인 필요"};if(km<12)return{...common,status:"BELOW_12KM",candidate:false,amount:null,sourceLabel:"12km 미만 관내 일비 우선"};if(PORT_ACCESS_JN_PARENT_SIDS.has(parentSid))return{...common,status:"CANDIDATE_TEMP_BASE_FARE",candidate:true,amount:PORT_ACCESS_TEMP_BASE_FARE,sourceLabel:PORT_ACCESS_TEMP_BASE_SOURCE,recommendation_basis:"NO_DB_FARE_12KM_PLUS_TEMP_BASE"};return{...common,status:"REVIEW_NO_TRUSTED_FARE",candidate:true,amount:null,sourceLabel:"routes.json trusted fare 없음"};}
function transferRecord(d,fromNode,toNode){const segs=(d.transfer&&d.transfer.segments)||{};const direct=segs[`${fromNode}>${toNode}`];if(direct)return{...direct,reverse:false};const rev=segs[`${toNode}>${fromNode}`];return rev?{...rev,reverse:true,from_node_id:toNode,to_node_id:fromNode,from_name:nodeLabel(d,toNode),to_name:nodeLabel(d,fromNode)}:null;}
function pairFareRoute(d,a,b){const direct=(d.routes.routes||{})[`${a}>${b}`];if(direct)return direct;const seongju=(a==="NODE_0650"&&b==="NODE_0462")||(a==="NODE_0462"&&b==="NODE_0650");if(!seongju)return null;return{active:true,from_node:a,to_node:b,from_name:nodeLabel(d,a),to_name:nodeLabel(d,b),authority:"SEONGJU_250_CURRENT",grades:{intercity_single:{label:"좌석",current_fare:2000,status:"PASS",evidence:[{provider:"SEONGJU_250",amount:2000,sources:["성주군 공식 노선 + 2024-12-14 단일요금 시행"]}]}}};}
function latestPendingDecision(fromSid,toSid){const f=`${fromSid}__${toSid}`,r=`${toSid}__${fromSid}`;if(LATEST_PENDING_PAIRS.has(f))return{key:f,reverse:false};if(LATEST_PENDING_PAIRS.has(r))return{key:r,reverse:true};return null;}
function repairPairDecision(d,fromSid,toSid){const fkey=`${fromSid}__${toSid}`,rkey=`${toSid}__${fromSid}`;if(fkey==="R023__R032"||rkey==="R023__R032")return null;const idx=((d.connected.runtime_bridge||{}).pair_index||{});let entry=idx[fkey];if(entry)return{entry,reverse:false,key:fkey};entry=idx[rkey];return entry?{entry,reverse:true,key:rkey}:null;}
function repairPendingProfile(d,decision,side){const e=decision&&decision.entry||{},a=e.access||{};if(!a.target_search_id)return null;const target=(d.connected.land_access_targets||{})[a.target_search_id]||{};const reverse=!!decision.reverse;const mainTerminal=nz(a.mainline_terminal_node_id);const parentNode=nz(a.parent_node_id);const transferRequired=!!(a.transfer_required||(mainTerminal&&parentNode&&mainTerminal!==parentNode));const targetLabel=nz(a.target_label||target.label||e.destination_label||a.target_search_id);const parentLabel=nz(a.parent_label)||"접근허브";let transferFrom=mainTerminal,transferTo=parentNode;if(reverse){transferFrom=parentNode;transferTo=mainTerminal;}return{mode:"repair_access_pending",side,target_search_id:a.target_search_id,target_label:targetLabel,parent_search_id:a.parent_search_id,parent_node_id:parentNode,parent_label:parentLabel,mainline_terminal_node_id:mainTerminal,transfer_required:transferRequired,transfer_from_node_id:transferFrom||null,transfer_to_node_id:transferTo||null,fare_pending:true,fare_included:false,source:"Route Repair 1.0.7 pair-aware bridge",linked_via_search_id:e.linked_via_search_id||null,linked_via_label:e.linked_via_label||null};}
function repairSyntheticCore(decision){const e=decision&&decision.entry||{},m=e.mainline||{};if(!Array.isArray(m.node_path))return null;const primary={route_key:nz(m.route_key)||`REPAIR_BRIDGE:${decision.key}`,node_path:[...m.node_path],segments:(m.segments||[]).map(v=>Array.isArray(v)?[...v]:v),fare_snapshot:Number(m.fare_snapshot||0),grade_snapshot:nz(m.grade_snapshot),direct:!!m.direct,transfers:Math.max(0,(m.node_path||[]).length-2),hub_transfer:false};return{rec:{origin_search_id:e.origin_search_id,destination_search_id:e.destination_search_id,status:"APPROVED_REPAIR_BRIDGE",primary,alternates:[]},reverse:!!decision.reverse};}
function repairResolvePlans(d,fromSid,toSid,decision){const e=decision&&decision.entry||{},kind=nz(e.route_kind);if(kind==="HOLD")return[];if(kind==="CORE"){const core=coreRecord(d,fromSid,toSid);return core?[{fromParent:fromSid,toParent:toSid,...core,repairDecision:decision}]:[];}if(kind==="ACCESS"||kind==="ACCESS_LINK"){const core=repairSyntheticCore(decision);if(!core)return[];const p=repairPendingProfile(d,decision,decision.reverse?"origin":"destination");return[{fromParent:decision.reverse?(e.access||{}).parent_search_id:fromSid,toParent:decision.reverse?toSid:(e.access||{}).parent_search_id,...core,...(decision.reverse?{originProfile:p,originAxis:p}:{destinationProfile:p,destinationAxis:p}),repairDecision:decision}];}return null;}
function routeOptions(rec){if(!rec)return[];const out=[];if(rec.primary)out.push({kind:"PRIMARY",c:rec.primary});for(const a of rec.alternates||[])out.push({kind:"ALT",c:a});return out;}
function reverseSegments(segs){return[...(segs||[])].reverse().map(x=>{if(!Array.isArray(x))return x;return x.length>2?[x[1],x[0],x[2]]:[x[1],x[0]];});}
function normalizeCandidate(c,reverse){if(!c)return null;const x={...c,node_path:[...(c.node_path||[])],segments:(c.segments||[]).map(v=>Array.isArray(v)?[...v]:v)};if(reverse){x.node_path.reverse();x.segments=reverseSegments(x.segments);const oa=x.origin_entry_axis;x.origin_entry_axis=x.destination_entry_axis;x.destination_entry_axis=oa;}return x;}
function fareCandidate(d,c,gradePreference="pre"){const segRows=[],grades=[];let total=0;
  for(const raw of c.segments||[]){if(!Array.isArray(raw)||raw.length<2)continue;const [a,b,typ0]=raw,typ=typ0||"fare";
    if(typ!=="fare"){segRows.push({from_node:a,to_node:b,segment_type:typ,amount:0,grade:"관내이동"});continue;}
    const route=pairFareRoute(d,a,b);const hit=currentFare(route,gradePreference);if(!hit)return null;total+=hit.fare;grades.push(hit.label);segRows.push({from_node:a,to_node:b,segment_type:"fare",amount:hit.fare,grade:hit.label,grade_key:hit.grade,review_pending:!!hit.reviewPending,sourceLabel:hit.sourceLabel,sources:hit.sources,evidence:hit.evidence,route});
  }
  return{total,grades,segments:segRows,reviewPending:segRows.some(x=>x&&x.review_pending),gradePreference};
}
function coreRecord(d,fromSid,toSid){
  if(fromSid&&toSid&&fromSid===toSid){
    return{rec:{
      origin_search_id:fromSid,destination_search_id:toSid,status:"IDENTITY_PARENT",
      primary:{route_key:`IDENTITY:${fromSid}`,node_path:[],segments:[],fare_snapshot:0,grade_snapshot:"",direct:true,transfers:0,hub_transfer:false},
      alternates:[]
    },reverse:false,identity:true};
  }
  if(d.idx.scopeOrigins.has(fromSid)){const r=(d.connected.routes||{})[`${fromSid}__${toSid}`];if(r)return{rec:r,reverse:false};}
  if(d.idx.scopeOrigins.has(toSid)){const r=(d.connected.routes||{})[`${toSid}__${fromSid}`];if(r)return{rec:r,reverse:true};}
  return null;
}
function resolvePlanLegacy(d,fromSid,toSid){
  const fa=targetAxes(d,fromSid,"origin"),ta=targetAxes(d,toSid,"destination"),fromTarget=fa.length>0,toTarget=ta.length>0;
  const tries=[];
  if(!fromTarget&&!toTarget)tries.push({fromParent:fromSid,toParent:toSid});
  else if(fromTarget&&!toTarget)for(const a of fa)tries.push({fromParent:a.parent_search_id,toParent:toSid,originRef:a.origin_access_ref,originAxis:a,axisOrder:[Number(a.order||0)]});
  else if(!fromTarget&&toTarget)for(const a of ta)tries.push({fromParent:fromSid,toParent:a.parent_search_id,destinationRef:a.destination_access_ref,destinationAxis:a,axisOrder:[Number(a.order||0)]});
  else for(const a of fa)for(const b of ta)tries.push({fromParent:a.parent_search_id,toParent:b.parent_search_id,originRef:a.origin_access_ref,destinationRef:b.destination_access_ref,originAxis:a,destinationAxis:b,axisOrder:[Number(a.order||0),Number(b.order||0)]});
  tries.sort((a,b)=>(Number(a.fromParent!==a.toParent)-Number(b.fromParent!==b.toParent))||JSON.stringify(a.axisOrder||[]).localeCompare(JSON.stringify(b.axisOrder||[])));
  for(const t of tries){if(!t.fromParent||!t.toParent)continue;const core=coreRecord(d,t.fromParent,t.toParent);if(core)return{...t,...core};}
  return null;
}
function resolvePlansLegacy(d,fromSid,toSid){
  const fa=targetAxes(d,fromSid,"origin"),ta=targetAxes(d,toSid,"destination"),fromTarget=fa.length>0,toTarget=ta.length>0;
  const tries=[];
  if(!fromTarget&&!toTarget)tries.push({fromParent:fromSid,toParent:toSid});
  else if(fromTarget&&!toTarget)for(const a of fa)tries.push({fromParent:a.parent_search_id,toParent:toSid,originRef:a.origin_access_ref,originAxis:a,axisOrder:[Number(a.order||0)]});
  else if(!fromTarget&&toTarget)for(const a of ta)tries.push({fromParent:fromSid,toParent:a.parent_search_id,destinationRef:a.destination_access_ref,destinationAxis:a,axisOrder:[Number(a.order||0)]});
  else for(const a of fa)for(const b of ta)tries.push({fromParent:a.parent_search_id,toParent:b.parent_search_id,originRef:a.origin_access_ref,destinationRef:b.destination_access_ref,originAxis:a,destinationAxis:b,axisOrder:[Number(a.order||0),Number(b.order||0)]});
  tries.sort((a,b)=>(Number(a.fromParent!==a.toParent)-Number(b.fromParent!==b.toParent))||JSON.stringify(a.axisOrder||[]).localeCompare(JSON.stringify(b.axisOrder||[])));
  const out=[];
  for(const t of tries){if(!t.fromParent||!t.toParent)continue;const core=coreRecord(d,t.fromParent,t.toParent);if(core)out.push({...t,...core});}
  return out;
}
function resolvePlans(d,fromSid,toSid){const decision=repairPairDecision(d,fromSid,toSid);if(decision){const plans=repairResolvePlans(d,fromSid,toSid,decision);return Array.isArray(plans)?plans:[];}return resolvePlansLegacy(d,fromSid,toSid);}
function resolvePlan(d,fromSid,toSid){const plans=resolvePlans(d,fromSid,toSid);return plans.length?plans[0]:null;}
function accessSegments(profile){if(!profile)return[];const out=[];for(const s of profile.local_segments||[])out.push({from:nz(s.from_name),to:nz(s.to_name),gen:Number(s.amount||0),pre:Number(s.amount||0),sourceLabel:"Connected 7 access",kind:"access",fare_counted:false});
  const ax=profile.axis||{};if(nz(ax.mode).toLowerCase()==="ferry"){out.push({from:nz(ax.from)||"선착장",to:nz(ax.to)||"선착장",gen:0,pre:0,sourceLabel:"여객선 실비 별도",kind:"ferry",fare_counted:false,note:nz(ax.sea_route)||"여객선 실비 입력"});}
  return out;
}
function routeParts(db,c,originLabel,destLabel,op,dp){const parts=[];if(op&&Array.isArray(op.access_path))parts.push(...op.access_path);const path=c.node_path||[];if(!op&&originLabel)parts.push(originLabel);for(let i=0;i<path.length;i++){if(!op&&i===0)continue;if(!dp&&i===path.length-1)continue;const m=regionLabel(db,path[i]);if(m&&parts[parts.length-1]!==m)parts.push(m);}if(!dp&&destLabel&&parts[parts.length-1]!==destLabel)parts.push(destLabel);if(dp&&Array.isArray(dp.access_path)){for(const p of dp.access_path)if(p&&parts[parts.length-1]!==p)parts.push(p);}return parts;}
function terminalParts(db,c,op,dp){const parts=[];if(op&&Array.isArray(op.access_path))parts.push(...op.access_path);for(const n of c.node_path||[]){const x=nodeLabel(db,n);if(x&&parts[parts.length-1]!==x)parts.push(x);}if(dp&&Array.isArray(dp.access_path))for(const p of dp.access_path)if(p&&parts[parts.length-1]!==p)parts.push(p);return parts;}
function makeAreaSegments(d,c,fare,op,dp,originLabel,destLabel){const out=[];if(op)out.push(...accessSegments(op));const core=fare.segments||[];for(let i=0;i<core.length;i++){const s=core[i];if(s.segment_type!=="fare"){out.push({from:nodeLabel(d,s.from_node),to:nodeLabel(d,s.to_node),gen:0,pre:0,sourceLabel:"",terminalFrom:nodeLabel(d,s.from_node),terminalTo:nodeLabel(d,s.to_node),from_node:s.from_node,to_node:s.to_node,kind:"hub_transfer",segment_type:"hub_transfer",note:"환승"});continue;}const r=s.route||{};const fromDisplay=(!op&&i===0&&originLabel)?originLabel:regionLabel(d,s.from_node);const toDisplay=(!dp&&i===core.length-1&&destLabel)?destLabel:regionLabel(d,s.to_node);out.push({from:fromDisplay,to:toDisplay,gen:s.amount,pre:s.amount,sourceLabel:s.sourceLabel||"routes.json",source:s.sourceLabel||"routes.json",sources:Array.isArray(s.sources)?s.sources:[],evidence:Array.isArray(s.evidence)?s.evidence:[],terminalFrom:r.from_name||nodeLabel(d,s.from_node),terminalTo:r.to_name||nodeLabel(d,s.to_node),from_node:s.from_node,to_node:s.to_node,route_key:`${s.from_node}>${s.to_node}`,kind:"bus",fareClass:s.grade,grade:s.grade_key,authority:r.authority||"ROUTES_2GEN"});}if(dp)out.push(...accessSegments(dp));return out;}
function materializeOption(d,plan,opt,originLabel,destLabel,op,dp,gradePreference="pre"){const c=normalizeCandidate(opt.c,plan.reverse);const fare=fareCandidate(d,c,gradePreference);if(!fare)return null;const rp=routeParts(d,c,originLabel,destLabel,op,dp),tp=terminalParts(d,c,op,dp),segs=makeAreaSegments(d,c,fare,op,dp,originLabel,destLabel);return{choice:opt.kind,c,fare,op,dp,routeParts:rp,terminalParts:tp,segments:segs};}
function materialize(d,plan,originLabel,destLabel,gradePreference="pre"){const op=plan.originProfile||accessProfile(d,plan.originRef),dp=plan.destinationProfile||accessProfile(d,plan.destinationRef),opts=routeOptions(plan.rec),valid=[];for(const opt of opts){const m=materializeOption(d,plan,opt,originLabel,destLabel,op,dp,gradePreference);if(m){m._opt=opt;m.originAxis=plan.originAxis||null;m.destinationAxis=plan.destinationAxis||null;valid.push(m);}}if(!valid.length)return null;const selected=valid[0];selected.repairDecision=plan.repairDecision||null;
  selected.gradePair=gradeChoiceBundle(d,selected);
  selected.alternates=valid.slice(1).map(x=>{const sourceLabels=[...new Set((x.segments||[]).map(s=>s&&s.sourceLabel).filter(Boolean))];return{choice:x.choice,routeKey:x.c.route_key,nodePath:x.c.node_path,routeLabel:x.routeParts.join(" → "),terminalRouteLabel:x.terminalParts.join(" → "),fare:Number(x.fare.total||0),gradeProfile:x.fare.grades,sourceLabel:sourceLabels.join(" · "),sources:sourceLabels,areaSegments:x.segments};});return selected;}
function result(d,m,origin,dest){
  const total=Number(m.fare.total||0),route=m.routeParts.join(" → "),terminal=m.terminalParts.join(" → ");
  const mainSources=[...new Set((m.segments||[]).map(s=>s&&s.sourceLabel).filter(Boolean))];
  const gp=m.gradePair||gradeChoiceBundle(d,m);const genTotal=Number(gp.gen||total),preTotal=Number(gp.pre||total),gradeSelectable=!!gp.selectable;
  const landPlans=[buildLandAccessPlan(d,m.op,m.c,"origin"),buildLandAccessPlan(d,m.dp,m.c,"destination")].filter(Boolean);
  const portAccessAudits=[buildPortAccessAudit(d,m.op,"origin"),buildPortAccessAudit(d,m.dp,"destination")].filter(Boolean);
  const portAccessCandidates=portAccessAudits.filter(x=>x&&x.candidate);
  const repairAccessPlans=[m.op,m.dp].filter(p=>p&&nz(p.mode)==="repair_access_pending").map(p=>{
    const mainNode=p.mainline_terminal_node_id||null,parentNode=p.parent_node_id||null;
    const transfer=p.transfer_required?transferRecord(d,p.transfer_from_node_id,p.transfer_to_node_id):null;
    const transferView=p.transfer_required?{
      kind:"transfer",from_node_id:p.transfer_from_node_id||null,to_node_id:p.transfer_to_node_id||null,
      from_label:nodeLabel(d,p.transfer_from_node_id),to_label:nodeLabel(d,p.transfer_to_node_id),
      fare:transfer&&transfer.fare!=null?Number(transfer.fare):null,
      fare_display:!!(transfer&&transfer.fare_display),display_label:"환승",
      display_value:transfer?(transfer.display_value||"환승"):"환승",
      fare_mode:transfer&&transfer.fare_mode||"PENDING",source:transfer&&transfer.source||"transfer_cost_v2",
      selectable:true,segment_key:`transfer:${p.transfer_from_node_id||""}>${p.transfer_to_node_id||""}`,
      included_in_main_fare:false,included_in_expense:false
    }:null;
    return{side:p.side,mode:"REPAIR_ACCESS_PENDING",
      mainline_end:{node_id:mainNode,label:nodeLabel(d,mainNode)},
      access_parent:{search_id:p.parent_search_id||null,node_id:parentNode,label:p.parent_label||"접근허브",node_label:nodeLabel(d,parentNode)},
      access_target:{search_id:p.target_search_id||null,label:p.target_label||""},
      transfer_required:!!p.transfer_required,transfer_from_node_id:p.transfer_from_node_id||null,transfer_to_node_id:p.transfer_to_node_id||null,
      transfer:transferView,fare_pending:true,fare_included:false,linked_via_search_id:p.linked_via_search_id||null,linked_via_label:p.linked_via_label||null,source:p.source};
  });
  const choiceByPair=new Map((gp.segments||[]).map(x=>[`${x.from_node}>${x.to_node}`,x]));
  const areaSegments=(m.segments||[]).map(seg=>{const ch=seg&&seg.from_node&&seg.to_node?choiceByPair.get(`${seg.from_node}>${seg.to_node}`):null;return ch?{...seg,gen:ch.gen,pre:ch.pre,gradeSelectable:true,gradeDefault:"pre",genLabel:ch.genLabel,preLabel:ch.preLabel,genGrade:ch.genGrade,preGrade:ch.preGrade}:seg;});
  const uiGradeSegments=(gp.segments||[]).map(ch=>{const areaIndex=areaSegments.findIndex(seg=>seg&&seg.from_node===ch.from_node&&seg.to_node===ch.to_node);return{...ch,segmentIndex:areaIndex>=0?areaIndex:ch.segmentIndex};});
  const gradeSegmentOverride=gradeSelectable?{gen:genTotal,pre:preTotal,fixedExtra:0,from:origin,to:dest,source:mainSources.join(" · ")||"routes.json",sourceLabel:mainSources.join(" · ")||"routes.json",fareType:"구간별 일반/우등",runtime:true,r5WholeRouteGradeTotal:true,segmentGen:(uiGradeSegments[0]?Number(uiGradeSegments[0].gen||0):genTotal),segmentPre:(uiGradeSegments[0]?Number(uiGradeSegments[0].pre||0):preTotal),gradeChoiceSegments:uiGradeSegments}:null;
  const routeTransferComponents=areaSegments.filter(seg=>seg&&seg.kind==="hub_transfer"&&seg.from_node&&seg.to_node).map(seg=>{const tr=transferRecord(d,seg.from_node,seg.to_node);const fromLabel=nodeLabel(d,seg.from_node),toLabel=nodeLabel(d,seg.to_node);const fare=tr&&tr.fare!=null?Number(tr.fare):null;return{kind:"transfer",from_node_id:seg.from_node,to_node_id:seg.to_node,from_label:fromLabel,to_label:toLabel,fare,fare_display:!!(tr&&tr.fare_display),display_label:"추천요금",display_value:tr?(tr.display_value||"환승"):"환승",fare_mode:tr&&tr.fare_mode||"PENDING",fare_role:"recommended",recommended_fare:true,quick_eligible:!!(tr&&tr.fare_display),source:tr&&tr.source||"transfer_cost_v1",selectable:true,segment_key:`transfer:${seg.from_node}>${seg.to_node}`,included_in_main_fare:false,included_in_expense:false};});
   const transferComponents=[...routeTransferComponents,...repairAccessPlans.map(p=>p.transfer).filter(Boolean)].filter((x,i,a)=>x&&i===a.findIndex(y=>y&&y.segment_key===x.segment_key));
  const accessComponents=repairAccessPlans.map(p=>({kind:"access",side:p.side,from:p.side==="origin"?p.access_target.label:(p.access_parent.node_label||p.access_parent.label),to:p.side==="origin"?(p.access_parent.node_label||p.access_parent.label):p.access_target.label,fare:null,fare_pending:true,display_label:"접근비용",selectable:true,segment_key:`access:${p.side}:${p.access_parent.node_id||""}>${p.access_target.search_id||p.access_target.label||""}`,included_in_main_fare:false,included_in_expense:false,source:p.source}));
  const fareComponents={
    main:areaSegments.filter(seg=>seg&&seg.kind!=="hub_transfer").map(seg=>({kind:"main",from:seg.from,to:seg.to,fare:m.fare.gradePreference==="gen"?Number(seg.gen||0):Number(seg.pre||seg.gen||0),gen:Number(seg.gen||0),pre:Number(seg.pre||0)||null,grade_preference:m.fare.gradePreference,source:seg.sourceLabel||seg.source||"routes.json",segment_key:`${seg.from_node||seg.from}>${seg.to_node||seg.to}`})),
    port_access:portAccessCandidates.map(p=>({kind:"port_access",side:p.side,from:p.side==="origin"?p.gateway_label:p.parent_label,to:p.side==="origin"?p.parent_label:p.gateway_label,fare:p.amount==null?null:Number(p.amount),fare_pending:p.amount==null,display_label:"추천요금",fare_role:"recommended",recommended_fare:p.amount==null?null:Number(p.amount),quick_eligible:p.parent_search_id!=="R059",policy:p.parent_search_id==="R059"?"WANDO_RURAL_FREE_EXCLUDE_QUICK":(p.status==="CANDIDATE_TRUSTED_FARE"?"PORT_ACTUAL_DB_FARE_FIRST":"PORT_12KM_PLUS_TEMP_BASE"),selectable:p.parent_search_id!=="R059",segment_key:`port:${p.side}:${p.parent_node_id}>${p.gateway_node_id||p.gateway}`,included_in_main_fare:false,included_in_expense:false,source:p.sourceLabel||"routes.json",distance_km:p.distance_km_rounded,threshold_km:p.threshold_km,status:p.status,recommendation_basis:p.recommendation_basis||null})),transfer:transferComponents,access:accessComponents
  };
  return{routeLabel:route,mainRouteLabel:route,displayRouteLabel:route,dr:route,terminalRouteLabel:terminal,gen:genTotal,pre:preTotal,cost:total,partialRoute:false,needsManualFare:false,gradeSelectable,gradeDefault:"pre",runtimeFareOverride:gradeSelectable?{gen:genTotal,pre:preTotal,area_pair_key:"CONNECTED_7",source:mainSources.join(" · ")||"routes.json",sourceLabel:mainSources.join(" · ")||"routes.json",fare_type:"구간별 일반/우등"}:null,gradeSegmentOverride,areaSegments,sources:mainSources.length?mainSources:["routes.json"],areaMethod:"Connected 7 selected NODE path + routes.json current trusted fare",fareAuthority:"routes.json",connectedChoice:m.choice,connectedAlternates:Array.isArray(m.alternates)?m.alternates:[],fareExcludesFerry:true,...(landPlans.length?{ybezAccessPlan:landPlans[0],ybezAccessPlans:landPlans}:{}),...(portAccessAudits.length?{portAccessAudits,portAccessCandidates}:{}),...(repairAccessPlans.length?{repairAccessPending:true,repairAccessPlan:repairAccessPlans[0],repairAccessPlans}:{}),...((transferComponents.length||accessComponents.length||portAccessCandidates.length)?{fare_components:fareComponents}:{}),__connectedRuntime:{version:VERSION,scopeId:7,scopeLabel:"전남광주",origin,destination:dest,routeKey:m.c.route_key,nodePath:m.c.node_path,currentFare:total,gradePreference:m.fare.gradePreference,gradeProfile:m.fare.grades,choice:m.choice,alternateCount:Array.isArray(m.alternates)?m.alternates.length:0,originAccess:m.op||null,destinationAccess:m.dp||null,landAccessPlans:landPlans,portAccessAudits,portAccessCandidates,repairPairKind:nz(m.repairDecision&&m.repairDecision.entry&&m.repairDecision.entry.route_kind)||null,repairPairKey:m.repairDecision&&m.repairDecision.key||null,repairPairReverse:!!(m.repairDecision&&m.repairDecision.reverse),repairAccessPlans}};
}

function r214OverlayResult(d,fromSid,toSid,origin,dest,gradePreference){
  const reverse=fromSid==="R214"&&toSid!=="R214";
  const scopeSid=reverse?toSid:fromSid;
  const hits=(toSid==="R214"||fromSid==="R214");
  if(!hits)return null;
  const ov=R214_OVERLAY[scopeSid];if(!ov)return null;
  const c={...ov,node_path:[...(ov.node_path||[])],segments:(ov.segments||[]).map(v=>Array.isArray(v)?[...v]:v)};
  const fakePlan={reverse};
  const m=materializeOption(d,fakePlan,{kind:"PRIMARY",c},origin,dest,null,null,gradePreference);
  if(!m)return{error:"R214_PAIR_FARE_NOT_TRUSTED",scopeSid};
  m.choice="R214_LATEST";m.gradePair=gradeChoiceBundle(d,m);m.alternates=[];
  m.repairDecision={key:`${scopeSid}__R214`,reverse,entry:{route_kind:"CORE",origin_search_id:scopeSid,destination_search_id:"R214"}};
  const core=result(d,m,origin,dest);
  core.connectedAxisOptionId=`axis:r214-latest:${scopeSid}:${reverse?"rev":"fwd"}`;
  core.connectedAxisLabel="성주 대구북부축";core.connectedAxisOptions=[];core.connectedAxisSelectedId=core.connectedAxisOptionId;
  core.__r214LatestOverlay=true;core.__r214SavedFare=Number(ov.fare_snapshot||0);
  return{core,scopeSid,reverse};
}
function r108OverlayResult(d,fromSid,toSid,origin,dest,gradePreference){
  const reverse=fromSid==="R108"&&toSid!=="R108";
  const scopeSid=reverse?toSid:fromSid;
  const hitsR108=(toSid==="R108"||fromSid==="R108");
  if(!hitsR108)return null;
  const ov=R108_OVERLAY[scopeSid];
  if(!ov)return null;
  if(ov.status!=="APPROVED")return{pending:true,scopeSid,status:ov.status||"PENDING"};
  let nodePath=[...(ov.node_path||[])];
  if(reverse)nodePath.reverse();
  const segments=[];
  for(let i=0;i<nodePath.length-1;i++)segments.push([nodePath[i],nodePath[i+1],"fare"]);
  const c={route_key:`R108_OVERLAY:${scopeSid}${reverse?":REV":""}`,node_path:nodePath,segments,
    fare_snapshot:Number(ov.fare_snapshot||0),grade_snapshot:"LATEST_ROUTE_REPAIR_R108",direct:nodePath.length===2,transfers:Math.max(0,nodePath.length-2),hub_transfer:false};
  let op=null,dp=null;
  if(ov.access){
    const p={mode:"repair_access_pending",side:reverse?"origin":"destination",target_search_id:"R108",target_label:"화성",
      parent_search_id:"R107",parent_node_id:"NODE_0010",parent_label:"수원",mainline_terminal_node_id:"NODE_0010",
      transfer_required:false,transfer_from_node_id:null,transfer_to_node_id:null,fare_pending:true,fare_included:false,
      source:"Route Repair R108 latest save 2026-09-17"};
    if(reverse)op=p; else dp=p;
  }
  const fakePlan={reverse:false};
  const m=materializeOption(d,fakePlan,{kind:"PRIMARY",c},origin,dest,op,dp,gradePreference);
  if(!m)return{error:"R108_OVERLAY_FARE_NOT_TRUSTED",scopeSid};
  m.choice="R108_LATEST";m.gradePair=gradeChoiceBundle(d,m);m.alternates=[];
  m.repairDecision={key:`${scopeSid}__R108`,reverse,entry:{route_kind:ov.access?"ACCESS":"CORE",origin_search_id:scopeSid,destination_search_id:"R108"}};
  const core=result(d,m,origin,dest);
  core.connectedAxisOptionId=`axis:r108-latest:${scopeSid}:${reverse?"rev":"fwd"}`;
  core.connectedAxisLabel=ov.access?"수원축":"화성직행";
  core.connectedAxisOptions=[];
  core.connectedAxisSelectedId=core.connectedAxisOptionId;
  core.__r108LatestOverlay=true;
  core.__r108SavedFare=Number(ov.fare_snapshot||0);
  return{core,scopeSid,reverse};
}


/* R3-D2A: 지도(R033)·임자(R035) 후보축 분리
   - 실제 C7 direct authority가 존재할 때만 목포/광주 직행축 생성
   - 목포 농어촌버스형은 목포까지의 검증 본선 + 기존 농어촌버스 실비입력 leg만 제공
   - direct 축은 legacy ISLAND_DB의 농어촌버스 leg를 명시적으로 비워 서로 섞이지 않게 함
   - R035 direct authority는 NODE_0185(임자대광)만 인정; NODE_0641은 별도 audit 대상 */
const D2A_TARGETS=Object.freeze({
  R033:Object.freeze({label:"지도",target_node:"NODE_0186",direct:Object.freeze({
    R022:Object.freeze({hub_label:"목포",hub_node:"NODE_0177",node_path:Object.freeze(["NODE_0177","NODE_0186"]),fare:11800,label:"목포 직행축"}),
    R002:Object.freeze({hub_label:"광주",hub_node:"NODE_0053",node_path:Object.freeze(["NODE_0053","NODE_0186"]),fare:14700,label:"광주 직행축"})
  })}),
  R035:Object.freeze({label:"임자",target_node:"NODE_0185",direct:Object.freeze({
    R022:Object.freeze({hub_label:"목포",hub_node:"NODE_0177",node_path:Object.freeze(["NODE_0177","NODE_0185"]),fare:10700,label:"목포 직행축"}),
    R002:Object.freeze({hub_label:"광주",hub_node:"NODE_0053",node_path:Object.freeze(["NODE_0053","NODE_0185"]),fare:14600,label:"광주 직행축"})
  })})
});
const D2A_SHINAN_LOCAL_SIDS=new Set(["R032","R033","R034","R035","R036","R037","R038","R039","R040","R041","R042","R043","R044","R045","R046","R047","R048","R049"]);
function d2aSamePath(a,b){return Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every((x,i)=>x===b[i]);}
function d2aFirstMaterialized(d,fromSid,toSid,originLabel,destLabel,gradePreference){
  const plans=resolvePlans(d,fromSid,toSid);
  for(const plan of plans){const mat=materialize(d,plan,originLabel,destLabel,gradePreference);if(mat)return{plan,mat};}
  return null;
}
function d2aCanonicalDirectRecord(d,hubSid,destSid){
  const spec=D2A_TARGETS[destSid]&&D2A_TARGETS[destSid].direct&&D2A_TARGETS[destSid].direct[hubSid];
  if(!spec)return null;
  const rec=(d.connected.routes||{})[`${hubSid}__${destSid}`];
  const primary=rec&&rec.primary;
  if(!rec||!primary||!d2aSamePath(primary.node_path,spec.node_path))return null;
  if(primary.direct!==true&&primary.node_path.length!==2)return null;
  const route=pairFareRoute(d,spec.node_path[0],spec.node_path[1]);
  const hit=currentFare(route,"gen")||currentFare(route,"pre");
  if(!hit||Number(hit.fare||0)!==Number(spec.fare))return null;
  return{rec,spec};
}
function d2aCleanAxisFields(core){
  return{...core,
    islandLegs:[],islandRouteLabel:"",islandHubBase:false,isShipOnlyRoute:false,
    accessExtraEnabled:false,accessExtraHint:"",areaSpecial:false,surcharge:0,shipCost:0,
    manualTransportOnly:false,manualTransportLabel:null,manualFareLabel:null,
    connectedAxisReferenceOnly:false};
}
function d2aBuildDirectAxis(d,fromSid,destSid,hubSid,originLabel,destLabel,gradePreference){
  const gate=d2aCanonicalDirectRecord(d,hubSid,destSid);if(!gate)return null;
  const main=d2aFirstMaterialized(d,fromSid,hubSid,originLabel,gate.spec.hub_label,gradePreference);if(!main)return null;
  const directPlan={fromParent:hubSid,toParent:destSid,rec:gate.rec,reverse:false};
  const direct=materialize(d,directPlan,gate.spec.hub_label,destLabel,gradePreference);if(!direct)return null;
  const a=[...(main.mat.c.node_path||[])],b=[...(direct.c.node_path||[])];
  let nodePath;
  if(!a.length)nodePath=b;
  else{
    if(!b.length||a[a.length-1]!==b[0])return null;
    nodePath=[...a,...b.slice(1)];
  }
  const segments=[...(main.mat.c.segments||[]),...(direct.c.segments||[])];
  const c={route_key:`R3D2A:${fromSid}:${hubSid}:${destSid}`,node_path:nodePath,segments,
    fare_snapshot:0,grade_snapshot:"R3-D2A canonical direct axis",direct:nodePath.length===2,
    transfers:Math.max(0,nodePath.length-2),hub_transfer:segments.some(x=>Array.isArray(x)&&x[2]==="hub_transfer")};
  const m=materializeOption(d,{reverse:false},{kind:"PRIMARY",c},originLabel,destLabel,main.mat.op||null,null,gradePreference);
  if(!m)return null;
  m.choice=`R3D2A_${hubSid}_DIRECT`;m.repairDecision=main.plan.repairDecision||null;m.gradePair=gradeChoiceBundle(d,m);m.alternates=[];
  let core=result(d,m,originLabel,destLabel);
  core=d2aCleanAxisFields(core);
  core.connectedAxisOptionId=`axis:r3d2a:${destSid}:${hubSid}:direct`;
  core.connectedAxisLabel=gate.spec.label;
  core.connectedAxisSelectedId=core.connectedAxisOptionId;
  core.__r3d2aAxisMode=hubSid==="R022"?"MOKPO_DIRECT":"GWANGJU_DIRECT";
  core.__r3d2aCanonicalAuthority={hub_search_id:hubSid,destination_search_id:destSid,node_path:[...gate.spec.node_path],fare:Number(gate.spec.fare)};
  return core;
}
function d2aBuildManualAxis(d,fromSid,destSid,originLabel,destLabel,gradePreference){
  const target=D2A_TARGETS[destSid];if(!target)return null;
  const main=d2aFirstMaterialized(d,fromSid,"R022",originLabel,"목포",gradePreference);if(!main)return null;
  main.mat.gradePair=gradeChoiceBundle(d,main.mat);main.mat.alternates=[];
  let core=result(d,main.mat,originLabel,"목포");
  const baseLabel=nz(core.displayRouteLabel||core.mainRouteLabel||core.routeLabel||"목포");
  const fullLabel=baseLabel.split(/\s*→\s*/).map(x=>x.trim()).filter(Boolean).some(x=>x===destLabel)
    ?baseLabel:`${baseLabel} → ${destLabel}`;
  const ruralLeg={kind:"rural",label:"농어촌버스",route:`목포→${destLabel}`,fare:null,source:"실비 입력",role:"dest",free:false,manualCost:true};
  core={...d2aCleanAxisFields(core),
    routeLabel:fullLabel,displayRouteLabel:fullLabel,dr:fullLabel.replace(/\s*→\s*/g,"→"),
    mainRouteLabel:baseLabel,islandLegs:[ruralLeg],
    islandRouteLabel:`목포↔${destLabel} 농어촌버스 왕복 총 실비 입력`,
    needsManualFare:false,manualFareLabel:"농어촌버스 요금 입력",
    connectedAxisOptionId:`axis:r3d2a:${destSid}:R022:rural`,
    connectedAxisLabel:"목포 농어촌버스축",
    connectedAxisReferenceOnly:false,
    __r3d2aAxisMode:"MOKPO_RURAL_MANUAL"};
  const rt={...(core.__connectedRuntime||{})};
  core.__connectedRuntime={...rt,destination:destLabel,currentFare:Number(core.pre||core.gen||core.cost||0),
    destinationAccess:{mode:"r3d2a_rural_manual",side:"destination",target_search_id:destSid,target_label:destLabel,
      parent_search_id:"R022",parent_node_id:"NODE_0177",parent_label:"목포",fare_pending:true,fare_included:false,
      source:"R3-D2A user-entered rural bus axis"}};
  core.connectedAxisSelectedId=core.connectedAxisOptionId;
  return core;
}
function d2aSelectedHubFromCurrent(chosen,fromSid){
  if(fromSid==="R002")return"R002";
  if(fromSid==="R022")return"R022";
  const path=(chosen&&chosen.core&&chosen.core.__connectedRuntime&&chosen.core.__connectedRuntime.nodePath)||[];
  const mokpo=path.lastIndexOf("NODE_0177"),gwangju=path.lastIndexOf("NODE_0053");
  if(mokpo>=0||gwangju>=0)return mokpo>=gwangju?"R022":"R002";
  return null;
}
function d2aExpandAxes(d,fromSid,toSid,originLabel,destLabel,gradePreference,chosen){
  if(!D2A_TARGETS[toSid]||D2A_SHINAN_LOCAL_SIDS.has(fromSid))return null;
  const manual=d2aBuildManualAxis(d,fromSid,toSid,originLabel,destLabel,gradePreference);
  const mokpo=d2aBuildDirectAxis(d,fromSid,toSid,"R022",originLabel,destLabel,gradePreference);
  const gwangju=fromSid==="R022"?null:d2aBuildDirectAxis(d,fromSid,toSid,"R002",originLabel,destLabel,gradePreference);
  const options=[manual,mokpo,gwangju].filter(Boolean);
  const dedup=[],seen=new Set();
  for(const x of options){const id=nz(x&&x.connectedAxisOptionId);if(!id||seen.has(id))continue;seen.add(id);dedup.push(x);}
  if(!dedup.length)return null;
  // R3-D2C: 지도/임자 연륙지는 농어촌버스 수기입력형을 최초 기본 선택으로 고정한다.
  // 직행 후보는 그대로 보존하며 사용자가 클릭하면 기존 selectConnectedAxis 흐름으로 전환된다.
  let selected=manual||mokpo||gwangju;
  if(!selected)return null;
  const selectedId=selected.connectedAxisOptionId;
  const normalized=dedup.map(x=>({...x,connectedAxisOptions:dedup,connectedAxisReferenceOptions:[],connectedAxisAllOptions:[],
    connectedAxisSelectedId:selectedId,connectedAxisReferenceOnly:false}));
  selected=normalized.find(x=>x.connectedAxisOptionId===selectedId)||normalized[0];
  return{...selected,connectedAxisOptions:normalized,connectedAxisReferenceOptions:[],connectedAxisAllOptions:[],
    connectedAxisSelectedId:selectedId,__r3d2aAxes:true};
}

async function runCandidate(input={}){try{const d=await db(),origin=nz(input.origin),dest=nz(input.destination),gradePreference=input.gradePreference==="gen"?"gen":"pre",fromSid=sidFor(d,origin),toSid=sidFor(d,dest);if(!fromSid||!toSid||fromSid===toSid)return{promote:false,fallback:true,reason:"CONNECTED_7_ID_NOT_FOUND",version:VERSION};if(isJeonnamGwangjuIslandTarget(d,fromSid)&&isJeonnamGwangjuIslandTarget(d,toSid))return{promote:false,fallback:true,reason:"ISLAND_PAIR_LEGACY_ORDERED_PATH",version:VERSION};const pending=latestPendingDecision(fromSid,toSid);if(pending)return{promote:false,fallback:false,blocked:true,reason:"ROUTE_REPAIR_PENDING",repairPairKey:pending.key,repairPairReverse:!!pending.reverse,version:VERSION};const r214=r214OverlayResult(d,fromSid,toSid,origin,dest,gradePreference);if(r214&&r214.error)return{promote:false,fallback:false,blocked:true,reason:r214.error,repairPairKey:`${r214.scopeSid}__R214`,version:VERSION};if(r214&&r214.core)return{promote:true,fallback:false,reason:r214.reverse?"R214_LATEST_REVERSED":"R214_LATEST_SELECTED",result:r214.core,version:VERSION};const r108=r108OverlayResult(d,fromSid,toSid,origin,dest,gradePreference);if(r108&&r108.pending)return{promote:false,fallback:false,blocked:true,reason:"R108_LATEST_PENDING",repairPairKey:`${r108.scopeSid}__R108`,version:VERSION};if(r108&&r108.error)return{promote:false,fallback:false,blocked:true,reason:r108.error,repairPairKey:`${r108.scopeSid}__R108`,version:VERSION};if(r108&&r108.core)return{promote:true,fallback:false,reason:r108.reverse?"R108_LATEST_REVERSED":"R108_LATEST_SELECTED",result:r108.core,version:VERSION};const repairDecision=repairPairDecision(d,fromSid,toSid);if(repairDecision&&nz(repairDecision.entry&&repairDecision.entry.route_kind)==="HOLD")return{promote:false,fallback:false,blocked:true,reason:"ROUTE_REPAIR_HOLD",repairPairKey:repairDecision.key,repairPairReverse:!!repairDecision.reverse,holdKind:repairDecision.entry.hold_kind||"REPAIR_HOLD",version:VERSION};const plans=resolvePlans(d,fromSid,toSid);if(!plans.length){const d2aFallback=d2aExpandAxes(d,fromSid,toSid,origin,dest,gradePreference,null);if(d2aFallback)return{promote:true,fallback:false,reason:"CONNECTED_7_D2A_AXES",result:d2aFallback,version:VERSION};return{promote:false,fallback:true,reason:repairDecision?"ROUTE_REPAIR_PAIR_UNRESOLVED":"CONNECTED_7_NO_SELECTED_ROUTE",repairPairKey:repairDecision&&repairDecision.key||null,version:VERSION};}const viable=[];for(const plan of plans){const mat=materialize(d,plan,origin,dest,gradePreference);if(mat)viable.push({plan,mat});}if(!viable.length){const d2aFallback=d2aExpandAxes(d,fromSid,toSid,origin,dest,gradePreference,null);if(d2aFallback)return{promote:true,fallback:false,reason:"CONNECTED_7_D2A_AXES",result:d2aFallback,version:VERSION};return{promote:false,fallback:true,reason:"CONNECTED_7_ROUTE_FARE_NOT_TRUSTED",version:VERSION};}
  const built=viable.map(({plan,mat},idx)=>{const core=result(d,mat,origin,dest);const id=`axis:${nz(plan.originRef)||"-"}:${nz(plan.destinationRef)||"-"}:${nz(mat.c&&mat.c.route_key)||idx}`;return{plan,mat,core:{...core,connectedAxisOptionId:id,connectedAxisLabel:axisLabelForMaterialized(mat)}};});
  const unique=[];const seen=new Set();for(const x of built){const k=`${x.core.connectedAxisLabel}|${x.core.terminalRouteLabel}|${x.core.gen}|${x.core.pre}`;if(seen.has(k))continue;seen.add(k);unique.push(x);}const chosen=unique[0];
  const axisOptions=unique.map(x=>x.core);const islandMultiAxis=axisOptions.length>1&&(isJeonnamGwangjuIslandTarget(d,fromSid)||isJeonnamGwangjuIslandTarget(d,toSid));const allAxisOptions=islandMultiAxis?axisOptions.map((x,i)=>({...x,connectedAxisReferenceOnly:i>0})):axisOptions;const referenceOptions=islandMultiAxis?allAxisOptions.slice(1):[];const finalResult={...chosen.core,connectedAxisOptions:islandMultiAxis?[]:(axisOptions.length>1?axisOptions:[]),connectedAxisReferenceOptions:referenceOptions,connectedAxisAllOptions:islandMultiAxis?allAxisOptions:[],connectedAxisSelectedId:chosen.core.connectedAxisOptionId};
  const d2aResult=d2aExpandAxes(d,fromSid,toSid,origin,dest,gradePreference,chosen);
  return{promote:true,fallback:false,reason:chosen.plan.reverse?"CONNECTED_7_REVERSED":"CONNECTED_7_SELECTED",result:d2aResult||finalResult,version:VERSION};}catch(e){return{promote:false,fallback:true,reason:"CONNECTED_7_EXEC_ERROR",error:String(e&&e.message||e),version:VERSION};}}
global.YBEZConnectedRuntime={VERSION,runCandidate,getState:async()=>{const d=await db();return{ready:true,version:VERSION,scopeId:d.connected.connected_scope_id,scopeLabel:d.connected.connected_scope_label,coreRoutes:Object.keys(d.connected.routes||{}).length,accessTargets:Object.keys(d.connected.access_targets||{}).length,landAccessTargets:Object.keys(d.connected.land_access_targets||{}).length,directionalFares:Object.keys(d.routes.routes||{}).length,pairOverlayR214:Object.keys(R214_OVERLAY).length,pendingPairs:LATEST_PENDING_PAIRS.size};},reset:()=>{DBP=null;},_debug:{currentFare,exactGeneralFare,exactPreferredFare,segmentGradeChoice,gradeChoiceBundle,sidFor,resolvePlan,resolvePlans,materialize}};
})(typeof window!=="undefined"?window:globalThis);
