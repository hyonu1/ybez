(function(global){"use strict";
const VERSION="connected_runtime_compat_v1";
const legacy=new Map();
function nz(v){return String(v==null?"":v).trim();}
function legacySummary(v){if(!v||typeof v!=="object")return null;return {
 routeLabel:v.routeLabel||v.dr||null,gen:+v.gen||0,pre:+v.pre||0,cost:+v.cost||0,
 partialRoute:!!v.partialRoute,needsManualFare:!!v.needsManualFare
};}
function attachLegacyResult(v,m={}){const k=nz(m.calcKey);const s=legacySummary(v);if(k)legacy.set(k,s);
 global.__YBEZ_CONNECTED_LEGACY_LAST__={calcKey:k,value:s,ts:new Date().toISOString()};return s;}
global.YBEZConnectedShadow={VERSION,bootstrap:async()=>true,run:async()=>({status:"RUNTIME_CANDIDATE"}),
 attachLegacyResult,getState:()=>({ready:true,mode:"runtime_candidate",legacy_count:legacy.size})};
})(typeof window!=="undefined"?window:globalThis);
