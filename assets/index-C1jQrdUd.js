(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();function ox(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var kv={exports:{}},Io={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Fv;function lx(){if(Fv)return Io;Fv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=r,Io.jsxs=r,Io}var Ov;function cx(){return Ov||(Ov=1,kv.exports=lx()),kv.exports}var B=cx(),zv={exports:{}},ot={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Bv;function ux(){if(Bv)return ot;Bv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function _(L,Q,ge){this.props=L,this.context=Q,this.refs=C,this.updater=ge||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=_.prototype;function A(L,Q,ge){this.props=L,this.context=Q,this.refs=C,this.updater=ge||b}var I=A.prototype=new y;I.constructor=A,x(I,_.prototype),I.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function O(L,Q,ge,be,Ne,Xe){return ge=Xe.ref,{$$typeof:s,type:L,key:Q,ref:ge!==void 0?ge:null,props:Xe}}function M(L,Q){return O(L.type,Q,void 0,void 0,void 0,L.props)}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function ue(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return Q[ge]})}var V=/\/+/g;function J(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?ue(""+L.key):Q.toString(36)}function oe(){}function le(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(oe,oe):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ne(L,Q,ge,be,Ne){var Xe=typeof L;(Xe==="undefined"||Xe==="boolean")&&(L=null);var $=!1;if(L===null)$=!0;else switch(Xe){case"bigint":case"string":case"number":$=!0;break;case"object":switch(L.$$typeof){case s:case e:$=!0;break;case v:return $=L._init,ne($(L._payload),Q,ge,be,Ne)}}if($)return Ne=Ne(L),$=be===""?"."+J(L,0):be,N(Ne)?(ge="",$!=null&&(ge=$.replace(V,"$&/")+"/"),ne(Ne,Q,ge,"",function(et){return et})):Ne!=null&&(P(Ne)&&(Ne=M(Ne,ge+(Ne.key==null||L&&L.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+$)),Q.push(Ne)),1;$=0;var Ee=be===""?".":be+":";if(N(L))for(var Se=0;Se<L.length;Se++)be=L[Se],Xe=Ee+J(be,Se),$+=ne(be,Q,ge,Xe,Ne);else if(Se=g(L),typeof Se=="function")for(L=Se.call(L),Se=0;!(be=L.next()).done;)be=be.value,Xe=Ee+J(be,Se++),$+=ne(be,Q,ge,Xe,Ne);else if(Xe==="object"){if(typeof L.then=="function")return ne(le(L),Q,ge,be,Ne);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return $}function U(L,Q,ge){if(L==null)return L;var be=[],Ne=0;return ne(L,be,"","",function(Xe){return Q.call(ge,Xe,Ne++)}),be}function H(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var ce=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function _e(){}return ot.Children={map:U,forEach:function(L,Q,ge){U(L,function(){Q.apply(this,arguments)},ge)},count:function(L){var Q=0;return U(L,function(){Q++}),Q},toArray:function(L){return U(L,function(Q){return Q})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ot.Component=_,ot.Fragment=r,ot.Profiler=l,ot.PureComponent=A,ot.StrictMode=a,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ot.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ot.cache=function(L){return function(){return L.apply(null,arguments)}},ot.cloneElement=function(L,Q,ge){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var be=x({},L.props),Ne=L.key,Xe=void 0;if(Q!=null)for($ in Q.ref!==void 0&&(Xe=void 0),Q.key!==void 0&&(Ne=""+Q.key),Q)!k.call(Q,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Q.ref===void 0||(be[$]=Q[$]);var $=arguments.length-2;if($===1)be.children=ge;else if(1<$){for(var Ee=Array($),Se=0;Se<$;Se++)Ee[Se]=arguments[Se+2];be.children=Ee}return O(L.type,Ne,void 0,void 0,Xe,be)},ot.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ot.createElement=function(L,Q,ge){var be,Ne={},Xe=null;if(Q!=null)for(be in Q.key!==void 0&&(Xe=""+Q.key),Q)k.call(Q,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ne[be]=Q[be]);var $=arguments.length-2;if($===1)Ne.children=ge;else if(1<$){for(var Ee=Array($),Se=0;Se<$;Se++)Ee[Se]=arguments[Se+2];Ne.children=Ee}if(L&&L.defaultProps)for(be in $=L.defaultProps,$)Ne[be]===void 0&&(Ne[be]=$[be]);return O(L,Xe,void 0,void 0,null,Ne)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(L){return{$$typeof:p,render:L}},ot.isValidElement=P,ot.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:H}},ot.memo=function(L,Q){return{$$typeof:h,type:L,compare:Q===void 0?null:Q}},ot.startTransition=function(L){var Q=F.T,ge={};F.T=ge;try{var be=L(),Ne=F.S;Ne!==null&&Ne(ge,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(_e,ce)}catch(Xe){ce(Xe)}finally{F.T=Q}},ot.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ot.use=function(L){return F.H.use(L)},ot.useActionState=function(L,Q,ge){return F.H.useActionState(L,Q,ge)},ot.useCallback=function(L,Q){return F.H.useCallback(L,Q)},ot.useContext=function(L){return F.H.useContext(L)},ot.useDebugValue=function(){},ot.useDeferredValue=function(L,Q){return F.H.useDeferredValue(L,Q)},ot.useEffect=function(L,Q,ge){var be=F.H;if(typeof ge=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(L,Q)},ot.useId=function(){return F.H.useId()},ot.useImperativeHandle=function(L,Q,ge){return F.H.useImperativeHandle(L,Q,ge)},ot.useInsertionEffect=function(L,Q){return F.H.useInsertionEffect(L,Q)},ot.useLayoutEffect=function(L,Q){return F.H.useLayoutEffect(L,Q)},ot.useMemo=function(L,Q){return F.H.useMemo(L,Q)},ot.useOptimistic=function(L,Q){return F.H.useOptimistic(L,Q)},ot.useReducer=function(L,Q,ge){return F.H.useReducer(L,Q,ge)},ot.useRef=function(L){return F.H.useRef(L)},ot.useState=function(L){return F.H.useState(L)},ot.useSyncExternalStore=function(L,Q,ge){return F.H.useSyncExternalStore(L,Q,ge)},ot.useTransition=function(){return F.H.useTransition()},ot.version="19.1.0",ot}var Hv;function Yh(){return Hv||(Hv=1,zv.exports=ux()),zv.exports}var de=Yh();const dx=ox(de);var gf={exports:{}},ko={},Vv={exports:{}},Gv={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var jv;function fx(){return jv||(jv=1,(function(s){function e(U,H){var ce=U.length;U.push(H);e:for(;0<ce;){var _e=ce-1>>>1,L=U[_e];if(0<l(L,H))U[_e]=H,U[ce]=L,ce=_e;else break e}}function r(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var H=U[0],ce=U.pop();if(ce!==H){U[0]=ce;e:for(var _e=0,L=U.length,Q=L>>>1;_e<Q;){var ge=2*(_e+1)-1,be=U[ge],Ne=ge+1,Xe=U[Ne];if(0>l(be,ce))Ne<L&&0>l(Xe,be)?(U[_e]=Xe,U[Ne]=ce,_e=Ne):(U[_e]=be,U[ge]=ce,_e=ge);else if(Ne<L&&0>l(Xe,ce))U[_e]=Xe,U[Ne]=ce,_e=Ne;else break e}}return H}function l(U,H){var ce=U.sortIndex-H.sortIndex;return ce!==0?ce:U.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,S=null,g=3,b=!1,x=!1,C=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var H=r(h);H!==null;){if(H.callback===null)a(h);else if(H.startTime<=U)a(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=r(h)}}function F(U){if(C=!1,N(U),!x)if(r(m)!==null)x=!0,k||(k=!0,J());else{var H=r(h);H!==null&&ne(F,H.startTime-U)}}var k=!1,O=-1,M=5,P=-1;function ue(){return _?!0:!(s.unstable_now()-P<M)}function V(){if(_=!1,k){var U=s.unstable_now();P=U;var H=!0;try{e:{x=!1,C&&(C=!1,A(O),O=-1),b=!0;var ce=g;try{t:{for(N(U),S=r(m);S!==null&&!(S.expirationTime>U&&ue());){var _e=S.callback;if(typeof _e=="function"){S.callback=null,g=S.priorityLevel;var L=_e(S.expirationTime<=U);if(U=s.unstable_now(),typeof L=="function"){S.callback=L,N(U),H=!0;break t}S===r(m)&&a(m),N(U)}else a(m);S=r(m)}if(S!==null)H=!0;else{var Q=r(h);Q!==null&&ne(F,Q.startTime-U),H=!1}}break e}finally{S=null,g=ce,b=!1}H=void 0}}finally{H?J():k=!1}}}var J;if(typeof I=="function")J=function(){I(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,le=oe.port2;oe.port1.onmessage=V,J=function(){le.postMessage(null)}}else J=function(){y(V,0)};function ne(U,H){O=y(function(){U(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ce=g;g=H;try{return U()}finally{g=ce}},s.unstable_requestPaint=function(){_=!0},s.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ce=g;g=U;try{return H()}finally{g=ce}},s.unstable_scheduleCallback=function(U,H,ce){var _e=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?_e+ce:_e):ce=_e,U){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ce+L,U={id:v++,callback:H,priorityLevel:U,startTime:ce,expirationTime:L,sortIndex:-1},ce>_e?(U.sortIndex=ce,e(h,U),r(m)===null&&U===r(h)&&(C?(A(O),O=-1):C=!0,ne(F,ce-_e))):(U.sortIndex=L,e(m,U),x||b||(x=!0,k||(k=!0,J()))),U},s.unstable_shouldYield=ue,s.unstable_wrapCallback=function(U){var H=g;return function(){var ce=g;g=H;try{return U.apply(this,arguments)}finally{g=ce}}}})(Gv)),Gv}var Wv;function hx(){return Wv||(Wv=1,Vv.exports=fx()),Vv.exports}var vf={exports:{}},An={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Xv;function px(){if(Xv)return An;Xv=1;var s=Yh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,An.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},An.flushSync=function(m){var h=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=h,a.p=v,a.d.f()}},An.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},An.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},An.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,S=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:b}):v==="script"&&a.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},An.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},An.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,S=p(v,h.crossOrigin);a.d.L(m,v,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},An.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},An.requestFormReset=function(m){a.d.r(m)},An.unstable_batchedUpdates=function(m,h){return m(h)},An.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.1.0",An}var qv;function mx(){if(qv)return vf.exports;qv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vf.exports=px(),vf.exports}/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Kv;function gx(){if(Kv)return ko;Kv=1;var s=hx(),e=Yh(),r=mx();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var i=t,o=n;;){var u=i.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){i=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===i)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(a(188))}if(i.return!==o.return)i=u,o=f;else{for(var E=!1,T=u.child;T;){if(T===i){E=!0,i=u,o=f;break}if(T===o){E=!0,o=u,i=f;break}T=T.sibling}if(!E){for(T=f.child;T;){if(T===i){E=!0,i=f,o=u;break}if(T===o){E=!0,o=f,i=u;break}T=T.sibling}if(!E)throw Error(a(189))}}if(i.alternate!==o)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case _:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case I:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case M:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}var ne=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},_e=[],L=-1;function Q(t){return{current:t}}function ge(t){0>L||(t.current=_e[L],_e[L]=null,L--)}function be(t,n){L++,_e[L]=t.current,t.current=n}var Ne=Q(null),Xe=Q(null),$=Q(null),Ee=Q(null);function Se(t,n){switch(be($,n),be(Xe,t),be(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=uv(n),t=dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ge(Ne),be(Ne,t)}function et(){ge(Ne),ge(Xe),ge($)}function Ze(t){t.memoizedState!==null&&be(Ee,t);var n=Ne.current,i=dv(n,t.type);n!==i&&(be(Xe,t),be(Ne,i))}function ze(t){Xe.current===t&&(ge(Ne),ge(Xe)),Ee.current===t&&(ge(Ee),Po._currentValue=ce)}var Mt=Object.prototype.hasOwnProperty,wt=s.unstable_scheduleCallback,at=s.unstable_cancelCallback,nn=s.unstable_shouldYield,Zt=s.unstable_requestPaint,Ut=s.unstable_now,G=s.unstable_getCurrentPriorityLevel,Xt=s.unstable_ImmediatePriority,yt=s.unstable_UserBlockingPriority,Tt=s.unstable_NormalPriority,We=s.unstable_LowPriority,D=s.unstable_IdlePriority,w=s.log,X=s.unstable_setDisableYieldValue,me=null,he=null;function pe(t){if(typeof w=="function"&&X(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(me,t)}catch{}}var Ie=Math.clz32?Math.clz32:qe,Ce=Math.log,Ye=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Ce(t)/Ye|0)|0}var Me=256,Te=4194304;function je(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Be(t,n,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=je(o):(E&=T,E!==0?u=je(E):i||(i=T&~t,i!==0&&(u=je(i))))):(T=o&~f,T!==0?u=je(T):E!==0?u=je(E):i||(i=o&~t,i!==0&&(u=je(i)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,i=n&-n,f>=i||f===32&&(i&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Pe(){var t=Te;return Te<<=1,(Te&62914560)===0&&(Te=4194304),t}function Ae(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,n,i,o,u,f){var E=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var T=t.entanglements,z=t.expirationTimes,ee=t.hiddenUpdates;for(i=E&~i;0<i;){var ve=31-Ie(i),xe=1<<ve;T[ve]=0,z[ve]=-1;var ie=ee[ve];if(ie!==null)for(ee[ve]=null,ve=0;ve<ie.length;ve++){var ae=ie[ve];ae!==null&&(ae.lane&=-536870913)}i&=~xe}o!==0&&fe(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(E&~n))}function fe(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|i&4194090}function He(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var o=31-Ie(i),u=1<<o;u&n|t[o]&n&&(t[o]|=n),i&=~u}}function Qe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xt(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function hr(t,n){var i=H.p;try{return H.p=t,n()}finally{H.p=i}}var gn=Math.random().toString(36).slice(2),dn="__reactFiber$"+gn,vn="__reactProps$"+gn,wi="__reactContainer$"+gn,Ia="__reactEvents$"+gn,sl="__reactListeners$"+gn,Gr="__reactHandles$"+gn,ka="__reactResources$"+gn,Ti="__reactMarker$"+gn;function Fa(t){delete t[dn],delete t[vn],delete t[Ia],delete t[sl],delete t[Gr]}function pr(t){var n=t[dn];if(n)return n;for(var i=t.parentNode;i;){if(n=i[wi]||i[dn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=mv(t);t!==null;){if(i=t[dn])return i;t=mv(t)}return n}t=i,i=t.parentNode}return null}function jr(t){if(t=t[dn]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function wr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Wr(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(t){t[Ti]=!0}var ol=new Set,ll={};function Xr(t,n){Ai(t,n),Ai(t+"Capture",n)}function Ai(t,n){for(ll[t]=n,t=0;t<n.length;t++)ol.add(n[t])}var pu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cl={},R={};function q(t){return Mt.call(R,t)?!0:Mt.call(cl,t)?!1:pu.test(t)?R[t]=!0:(cl[t]=!0,!1)}function se(t,n,i){if(q(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function te(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function Y(t,n,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+o)}}var Re,Le;function ke(t){if(Re===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Re=n&&n[1]||"",Le=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+t+Le}var Oe=!1;function $e(t,n){if(!t||Oe)return"";Oe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ae){var ie=ae}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ae){ie=ae}t.call(xe.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),E=f[0],T=f[1];if(E&&T){var z=E.split(`
`),ee=T.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ee.length)for(o=z.length-1,u=ee.length-1;1<=o&&0<=u&&z[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ee[u]){var ve=`
`+z[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?ke(i):""}function st(t){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return $e(t.type,!1);case 11:return $e(t.type.render,!1);case 1:return $e(t.type,!0);case 31:return ke("Activity");default:return""}}function dt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Pt(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,f=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,f.call(this,E)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function It(t){t._valueTracker||(t._valueTracker=Kt(t))}function Rt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return t&&(o=Pt(t)?t.checked?"true":"false":t.value),t=o,t!==i?(n.setValue(t),!0):!1}function Bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Je=/[\n"\\]/g;function Gt(t){return t.replace(Je,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function mr(t,n,i,o,u,f,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ve(n)):t.value!==""+Ve(n)&&(t.value=""+Ve(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?kn(t,E,Ve(n)):i!=null?kn(t,E,Ve(i)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ve(T):t.removeAttribute("name")}function In(t,n,i,o,u,f,E,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||i!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;i=i!=null?""+Ve(i):"",n=n!=null?""+Ve(n):i,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function kn(t,n,i){n==="number"&&Bt(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Fn(t,n,i,o){if(t=t.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<t.length;i++)u=n.hasOwnProperty("$"+t[i].value),t[i].selected!==u&&(t[i].selected=u),u&&o&&(t[i].defaultSelected=!0)}else{for(i=""+Ve(i),n=null,u=0;u<t.length;u++){if(t[u].value===i){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function qr(t,n,i){if(n!=null&&(n=""+Ve(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Ve(i):""}function Ct(t,n,i,o){if(n==null){if(o!=null){if(i!=null)throw Error(a(92));if(ne(o)){if(1<o.length)throw Error(a(93));o=o[0]}i=o}i==null&&(i=""),n=i}i=Ve(n),t.defaultValue=i,o=t.textContent,o===i&&o!==""&&o!==null&&(t.value=o)}function jt(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Tr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yt(t,n,i){var o=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,i):typeof i!="number"||i===0||Tr.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Ri(t,n,i){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&i[u]!==o&&Yt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Yt(t,f,n[f])}function Ar(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return sy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,za=null;function fp(t){var n=jr(t);if(n&&(t=n.stateNode)){var i=t[vn]||null;e:switch(t=n.stateNode,n.type){case"input":if(mr(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==t&&o.form===t.form){var u=o[vn]||null;if(!u)throw Error(a(90));mr(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<i.length;n++)o=i[n],o.form===t.form&&Rt(o)}break e;case"textarea":qr(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Fn(t,!!i.multiple,n,!1)}}}var vu=!1;function hp(t,n,i){if(vu)return t(n,i);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(Oa!==null||za!==null)&&(Jl(),Oa&&(n=Oa,t=za,za=Oa=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function Vs(t,n){var i=t.stateNode;if(i===null)return null;var o=i[vn]||null;if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(a(231,n,typeof i));return i}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Kr)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{_u=!1}var Ci=null,yu=null,fl=null;function pp(){if(fl)return fl;var t,n=yu,i=n.length,o,u="value"in Ci?Ci.value:Ci.textContent,f=u.length;for(t=0;t<i&&n[t]===u[t];t++);var E=i-t;for(o=1;o<=E&&n[i-o]===u[f-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function mp(){return!1}function On(t){function n(i,o,u,f,E){this._reactName=i,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(i=t[T],this[T]=i?i(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:mp,this.isPropagationStopped=mp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=On(sa),js=v({},sa,{view:0,detail:0}),oy=On(js),bu,xu,Ws,gl=v({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(bu=t.screenX-Ws.screenX,xu=t.screenY-Ws.screenY):xu=bu=0,Ws=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),gp=On(gl),ly=v({},gl,{dataTransfer:0}),cy=On(ly),uy=v({},js,{relatedTarget:0}),Su=On(uy),dy=v({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=On(dy),hy=v({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=On(hy),my=v({},sa,{data:0}),vp=On(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_y[t])?!!n[t]:!1}function Eu(){return yy}var by=v({},js,{key:function(t){if(t.key){var n=gy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=On(by),Sy=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=On(Sy),Ey=v({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),My=On(Ey),wy=v({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=On(wy),Ay=v({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=On(Ay),Cy=v({},sa,{newState:0,oldState:0}),Py=On(Cy),Ny=[9,13,27,32],Mu=Kr&&"CompositionEvent"in window,Xs=null;Kr&&"documentMode"in document&&(Xs=document.documentMode);var Ly=Kr&&"TextEvent"in window&&!Xs,yp=Kr&&(!Mu||Xs&&8<Xs&&11>=Xs),bp=" ",xp=!1;function Sp(t,n){switch(t){case"keyup":return Ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ba=!1;function Dy(t,n){switch(t){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(xp=!0,bp);case"textInput":return t=n.data,t===bp&&xp?null:t;default:return null}}function Uy(t,n){if(Ba)return t==="compositionend"||!Mu&&Sp(t,n)?(t=pp(),fl=yu=Ci=null,Ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Iy[t.type]:n==="textarea"}function wp(t,n,i,o){Oa?za?za.push(o):za=[o]:Oa=o,n=nc(n,"onChange"),0<n.length&&(i=new ml("onChange","change",null,i,o),t.push({event:i,listeners:n}))}var qs=null,Ks=null;function ky(t){av(t,0)}function vl(t){var n=wr(t);if(Rt(n))return t}function Tp(t,n){if(t==="change")return n}var Ap=!1;if(Kr){var wu;if(Kr){var Tu="oninput"in document;if(!Tu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Tu=typeof Rp.oninput=="function"}wu=Tu}else wu=!1;Ap=wu&&(!document.documentMode||9<document.documentMode)}function Cp(){qs&&(qs.detachEvent("onpropertychange",Pp),Ks=qs=null)}function Pp(t){if(t.propertyName==="value"&&vl(Ks)){var n=[];wp(n,Ks,t,gu(t)),hp(ky,n)}}function Fy(t,n,i){t==="focusin"?(Cp(),qs=n,Ks=i,qs.attachEvent("onpropertychange",Pp)):t==="focusout"&&Cp()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Ks)}function zy(t,n){if(t==="click")return vl(n)}function By(t,n){if(t==="input"||t==="change")return vl(n)}function Hy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Hy;function Ys(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var u=i[o];if(!Mt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,n){var i=Np(t);t=0;for(var o;i;){if(i.nodeType===3){if(o=t+i.textContent.length,t<=n&&o>=n)return{node:i,offset:n-t};t=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Np(i)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Bt(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Bt(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vy=Kr&&"documentMode"in document&&11>=document.documentMode,Ha=null,Ru=null,Js=null,Cu=!1;function Ip(t,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Cu||Ha==null||Ha!==Bt(o)||(o=Ha,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Ys(Js,o)||(Js=o,o=nc(Ru,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,i),t.push({event:n,listeners:o}),n.target=Ha)))}function oa(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Va={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},Pu={},kp={};Kr&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function la(t){if(Pu[t])return Pu[t];if(!Va[t])return t;var n=Va[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in kp)return Pu[t]=n[i];return t}var Fp=la("animationend"),Op=la("animationiteration"),zp=la("animationstart"),Gy=la("transitionrun"),jy=la("transitionstart"),Wy=la("transitioncancel"),Bp=la("transitionend"),Hp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function gr(t,n){Hp.set(t,n),Xr(n,[t])}var Vp=new WeakMap;function er(t,n){if(typeof t=="object"&&t!==null){var i=Vp.get(t);return i!==void 0?i:(n={value:t,source:n,stack:dt(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:dt(n)}}var tr=[],Ga=0,Lu=0;function _l(){for(var t=Ga,n=Lu=Ga=0;n<t;){var i=tr[n];tr[n++]=null;var o=tr[n];tr[n++]=null;var u=tr[n];tr[n++]=null;var f=tr[n];if(tr[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}f!==0&&Gp(i,u,f)}}function yl(t,n,i,o){tr[Ga++]=t,tr[Ga++]=n,tr[Ga++]=i,tr[Ga++]=o,Lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Du(t,n,i,o){return yl(t,n,i,o),bl(t)}function ja(t,n){return yl(t,null,null,n),bl(t)}function Gp(t,n,i){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i);for(var u=!1,f=t.return;f!==null;)f.childLanes|=i,o=f.alternate,o!==null&&(o.childLanes|=i),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ie(i),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=i|536870912),f):null}function bl(t){if(50<So)throw So=0,zd=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wa={};function Xy(t,n,i,o){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,i,o){return new Xy(t,n,i,o)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yr(t,n){var i=t.alternate;return i===null?(i=Wn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function jp(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,i,o,u,f){var E=0;if(o=t,typeof t=="function")Uu(t)&&(E=1);else if(typeof t=="string")E=Kb(t,i,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Wn(31,i,n,u),t.elementType=P,t.lanes=f,t;case x:return ca(i.children,u,f,n);case C:E=8,u|=24;break;case _:return t=Wn(12,i,n,u|2),t.elementType=_,t.lanes=f,t;case F:return t=Wn(13,i,n,u),t.elementType=F,t.lanes=f,t;case k:return t=Wn(19,i,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case I:E=10;break e;case A:E=9;break e;case N:E=11;break e;case O:E=14;break e;case M:E=16,o=null;break e}E=29,i=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Wn(E,i,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ca(t,n,i,o){return t=Wn(7,t,o,n),t.lanes=i,t}function Iu(t,n,i){return t=Wn(6,t,null,n),t.lanes=i,t}function ku(t,n,i){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xa=[],qa=0,Sl=null,El=0,nr=[],rr=0,ua=null,Jr=1,Qr="";function da(t,n){Xa[qa++]=El,Xa[qa++]=Sl,Sl=t,El=n}function Wp(t,n,i){nr[rr++]=Jr,nr[rr++]=Qr,nr[rr++]=ua,ua=t;var o=Jr;t=Qr;var u=32-Ie(o)-1;o&=~(1<<u),i+=1;var f=32-Ie(n)+u;if(30<f){var E=u-u%5;f=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Jr=1<<32-Ie(n)+u|i<<u|o,Qr=f+t}else Jr=1<<f|i<<u|o,Qr=t}function Fu(t){t.return!==null&&(da(t,1),Wp(t,1,0))}function Ou(t){for(;t===Sl;)Sl=Xa[--qa],Xa[qa]=null,El=Xa[--qa],Xa[qa]=null;for(;t===ua;)ua=nr[--rr],nr[rr]=null,Qr=nr[--rr],nr[rr]=null,Jr=nr[--rr],nr[rr]=null}var Nn=null,$t=null,At=!1,fa=null,Rr=!1,zu=Error(a(519));function ha(t){var n=Error(a(418,""));throw $s(er(n,t)),zu}function Xp(t){var n=t.stateNode,i=t.type,o=t.memoizedProps;switch(n[dn]=t,n[vn]=o,i){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(i=0;i<Mo.length;i++)mt(Mo[i],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),It(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Ct(n,o.value,o.defaultValue,o.children),It(n)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||o.suppressHydrationWarning===!0||cv(n.textContent,i)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=rc),n=!0):n=!1,n||ha(t)}function qp(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 13:Rr=!1;return;case 27:case 3:Rr=!0;return;default:Nn=Nn.return}}function Qs(t){if(t!==Nn)return!1;if(!At)return qp(t),At=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||tf(t.type,t.memoizedProps)),i=!i),i&&$t&&ha(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){$t=_r(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Wi(t.type)?(t=sf,sf=null,$t=t):$t=n):$t=Nn?_r(t.stateNode.nextSibling):null;return!0}function Zs(){$t=Nn=null,At=!1}function Kp(){var t=fa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),fa=null),t}function $s(t){fa===null?fa=[t]:fa.push(t)}var Bu=Q(null),pa=null,Zr=null;function Pi(t,n,i){be(Bu,n._currentValue),n._currentValue=i}function $r(t){t._currentValue=Bu.current,ge(Bu)}function Hu(t,n,i){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===i)break;t=t.return}}function Vu(t,n,i,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var E=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=i,T=f.alternate,T!==null&&(T.lanes|=i),Hu(f.return,i,t),o||(E=null);break e}f=T.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(a(341));E.lanes|=i,f=E.alternate,f!==null&&(f.lanes|=i),Hu(E,i,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function eo(t,n,i,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var T=u.type;jn(u.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ee.current){if(E=u.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Vu(n,t,i,o),n.flags|=262144}function Ml(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ma(t){pa=t,Zr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Yp(pa,t)}function wl(t,n){return pa===null&&ma(t),Yp(t,n)}function Yp(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Zr===null){if(t===null)throw Error(a(308));Zr=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zr=Zr.next=n;return i}var qy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Ky=s.unstable_scheduleCallback,Yy=s.unstable_NormalPriority,fn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new qy,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Ky(Yy,function(){t.controller.abort()})}var no=null,ju=0,Ka=0,Ya=null;function Jy(t,n){if(no===null){var i=no=[];ju=0,Ka=Xd(),Ya={status:"pending",value:void 0,then:function(o){i.push(o)}}}return ju++,n.then(Jp,Jp),n}function Jp(){if(--ju===0&&no!==null){Ya!==null&&(Ya.status="fulfilled");var t=no;no=null,Ka=0,Ya=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qy(t,n){var i=[],o={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<i.length;u++)(0,i[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),o}var Qp=U.S;U.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jy(t,n),Qp!==null&&Qp(t,n)};var ga=Q(null);function Wu(){var t=ga.current;return t!==null?t:Vt.pooledCache}function Tl(t,n){n===null?be(ga,ga.current):be(ga,n.pool)}function Zp(){var t=Wu();return t===null?null:{parent:fn._currentValue,pool:t}}var ro=Error(a(460)),$p=Error(a(474)),Al=Error(a(542)),Xu={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rl(){}function tm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Rl,Rl),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(Rl,Rl);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw io=n,ro}}var io=null;function nm(){if(io===null)throw Error(a(459));var t=io;return io=null,t}function rm(t){if(t===ro||t===Al)throw Error(a(483))}var Ni=!1;function qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Li(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Di(t,n,i){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),Gp(t,null,i),n}return yl(t,o,n,i),bl(t)}function ao(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,He(t,i)}}function Yu(t,n){var i=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var u=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var E={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};f===null?u=f=E:f=f.next=E,i=i.next}while(i!==null);f===null?u=f=n:f=f.next=n}else u=f=n;i={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Ju=!1;function so(){if(Ju){var t=Ya;if(t!==null)throw t}}function oo(t,n,i,o){Ju=!1;var u=t.updateQueue;Ni=!1;var f=u.firstBaseUpdate,E=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,ee=z.next;z.next=null,E===null?f=ee:E.next=ee,E=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,T=ve.lastBaseUpdate,T!==E&&(T===null?ve.firstBaseUpdate=ee:T.next=ee,ve.lastBaseUpdate=z))}if(f!==null){var xe=u.baseState;E=0,ve=ee=z=null,T=f;do{var ie=T.lane&-536870913,ae=ie!==T.lane;if(ae?(_t&ie)===ie:(o&ie)===ie){ie!==0&&ie===Ka&&(Ju=!0),ve!==null&&(ve=ve.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var rt=t,tt=T;ie=n;var Ot=i;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){xe=rt.call(Ot,xe,ie);break e}xe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ie=typeof rt=="function"?rt.call(Ot,xe,ie):rt,ie==null)break e;xe=v({},xe,ie);break e;case 2:Ni=!0}}ie=T.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ve===null?(ee=ve=ae,z=xe):ve=ve.next=ae,E|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ae=T,T=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);ve===null&&(z=xe),u.baseState=z,u.firstBaseUpdate=ee,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Hi|=E,t.lanes=E,t.memoizedState=xe}}function im(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function am(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)im(i[t],n)}var Ja=Q(null),Cl=Q(0);function sm(t,n){t=oi,be(Cl,t),be(Ja,n),oi=t|n.baseLanes}function Qu(){be(Cl,oi),be(Ja,Ja.current)}function Zu(){oi=Cl.current,ge(Ja),ge(Cl)}var Ui=0,ft=null,kt=null,ln=null,Pl=!1,Qa=!1,va=!1,Nl=0,lo=0,Za=null,Zy=0;function an(){throw Error(a(321))}function $u(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!jn(t[i],n[i]))return!1;return!0}function ed(t,n,i,o,u,f){return Ui=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?Gm:jm,va=!1,f=i(o,u),va=!1,Qa&&(f=lm(n,i,o,u)),om(t),f}function om(t){U.H=Fl;var n=kt!==null&&kt.next!==null;if(Ui=0,ln=kt=ft=null,Pl=!1,lo=0,Za=null,n)throw Error(a(300));t===null||_n||(t=t.dependencies,t!==null&&Ml(t)&&(_n=!0))}function lm(t,n,i,o){ft=t;var u=0;do{if(Qa&&(Za=null),lo=0,Qa=!1,25<=u)throw Error(a(301));if(u+=1,ln=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=ab,f=n(i,o)}while(Qa);return f}function $y(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ft.flags|=1024),n}function td(){var t=Nl!==0;return Nl=0,t}function nd(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function rd(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}Ui=0,ln=kt=ft=null,Qa=!1,lo=Nl=0,Za=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ft.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(kt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=ln===null?ft.memoizedState:ln.next;if(n!==null)ln=n,kt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},ln===null?ft.memoizedState=ln=t:ln=ln.next=t}return ln}function id(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Za===null&&(Za=[]),t=tm(Za,t,n),n=ft,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Gm:jm),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===I)return Tn(t)}throw Error(a(438,String(t)))}function ad(t){var n=null,i=ft.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=id(),ft.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),o=0;o<t;o++)i[o]=ue;return n.index++,i}function ei(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=cn();return sd(n,kt,t)}function sd(t,n,i){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var E=u.next;u.next=f.next,f.next=E}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=E=null,z=null,ee=n,ve=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(_t&xe)===xe:(Ui&xe)===xe){var ie=ee.revertLane;if(ie===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===Ka&&(ve=!0);else if((Ui&ie)===ie){ee=ee.next,ie===Ka&&(ve=!0);continue}else xe={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},z===null?(T=z=xe,E=f):z=z.next=xe,ft.lanes|=ie,Hi|=ie;xe=ee.action,va&&i(f,xe),f=ee.hasEagerState?ee.eagerState:i(f,xe)}else ie={lane:xe,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},z===null?(T=z=ie,E=f):z=z.next=ie,ft.lanes|=xe,Hi|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(z===null?E=f:z.next=T,!jn(f,t.memoizedState)&&(_n=!0,ve&&(i=Ya,i!==null)))throw i;t.memoizedState=f,t.baseState=E,t.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function od(t){var n=cn(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var o=i.dispatch,u=i.pending,f=n.memoizedState;if(u!==null){i.pending=null;var E=u=u.next;do f=t(f,E.action),E=E.next;while(E!==u);jn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,o]}function cm(t,n,i){var o=ft,u=cn(),f=At;if(f){if(i===void 0)throw Error(a(407));i=i()}else i=n();var E=!jn((kt||u).memoizedState,i);E&&(u.memoizedState=i,_n=!0),u=u.queue;var T=fm.bind(null,o,u,t);if(uo(2048,8,T,[t]),u.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,$a(9,Ul(),dm.bind(null,o,u,i,n),null),Vt===null)throw Error(a(349));f||(Ui&124)!==0||um(o,n,i)}return i}function um(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=ft.updateQueue,n===null?(n=id(),ft.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function dm(t,n,i,o){n.value=i,n.getSnapshot=o,hm(n)&&pm(t)}function fm(t,n,i){return i(function(){hm(n)&&pm(t)})}function hm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!jn(t,i)}catch{return!0}}function pm(t){var n=ja(t,2);n!==null&&Jn(n,t,2)}function ld(t){var n=zn();if(typeof t=="function"){var i=t;if(t=i(),va){pe(!0);try{i()}finally{pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:t},n}function mm(t,n,i,o){return t.baseState=i,sd(t,kt,typeof o=="function"?o:ei)}function eb(t,n,i,o,u){if(kl(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};U.T!==null?i(!0):f.isTransition=!1,o(f),i=n.pending,i===null?(f.next=n.pending=f,gm(n,f)):(f.next=i.next,n.pending=i.next=f)}}function gm(t,n){var i=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=U.T,E={};U.T=E;try{var T=i(u,o),z=U.S;z!==null&&z(E,T),vm(t,n,T)}catch(ee){cd(t,n,ee)}finally{U.T=f}}else try{f=i(u,o),vm(t,n,f)}catch(ee){cd(t,n,ee)}}function vm(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){_m(t,n,o)},function(o){return cd(t,n,o)}):_m(t,n,i)}function _m(t,n,i){n.status="fulfilled",n.value=i,ym(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,gm(t,i)))}function cd(t,n,i){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=i,ym(n),n=n.next;while(n!==o)}t.action=null}function ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bm(t,n){return n}function xm(t,n){if(At){var i=Vt.formState;if(i!==null){e:{var o=ft;if(At){if($t){t:{for(var u=$t,f=Rr;u.nodeType!==8;){if(!f){u=null;break t}if(u=_r(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=_r(u.nextSibling),o=u.data==="F!";break e}}ha(o)}o=!1}o&&(n=i[0])}}return i=zn(),i.memoizedState=i.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},i.queue=o,i=Bm.bind(null,ft,o),o.dispatch=i,o=ld(!1),f=pd.bind(null,ft,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,i=eb.bind(null,ft,u,f,i),u.dispatch=i,o.memoizedState=t,[n,i,!1]}function Sm(t){var n=cn();return Em(n,kt,t)}function Em(t,n,i){if(n=sd(t,n,bm)[0],t=Dl(ei)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(E){throw E===ro?Al:E}else o=n;n=cn();var u=n.queue,f=u.dispatch;return i!==n.memoizedState&&(ft.flags|=2048,$a(9,Ul(),tb.bind(null,u,i),null)),[o,f,t]}function tb(t,n){t.action=n}function Mm(t){var n=cn(),i=kt;if(i!==null)return Em(n,i,t);cn(),n=n.memoizedState,i=cn();var o=i.queue.dispatch;return i.memoizedState=t,[n,o,!1]}function $a(t,n,i,o){return t={tag:t,create:i,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=id(),ft.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(o=i.next,i.next=t,t.next=o,n.lastEffect=t),t}function Ul(){return{destroy:void 0,resource:void 0}}function wm(){return cn().memoizedState}function Il(t,n,i,o){var u=zn();o=o===void 0?null:o,ft.flags|=t,u.memoizedState=$a(1|n,Ul(),i,o)}function uo(t,n,i,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&$u(o,kt.memoizedState.deps)?u.memoizedState=$a(n,f,i,o):(ft.flags|=t,u.memoizedState=$a(1|n,f,i,o))}function Tm(t,n){Il(8390656,8,t,n)}function Am(t,n){uo(2048,8,t,n)}function Rm(t,n){return uo(4,2,t,n)}function Cm(t,n){return uo(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,i){i=i!=null?i.concat([t]):null,uo(4,4,Pm.bind(null,n,t),i)}function ud(){}function Lm(t,n){var i=cn();n=n===void 0?null:n;var o=i.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(i.memoizedState=[t,n],t)}function Dm(t,n){var i=cn();n=n===void 0?null:n;var o=i.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=t(),va){pe(!0);try{t()}finally{pe(!1)}}return i.memoizedState=[o,n],o}function dd(t,n,i){return i===void 0||(Ui&1073741824)!==0?t.memoizedState=n:(t.memoizedState=i,t=kg(),ft.lanes|=t,Hi|=t,i)}function Um(t,n,i,o){return jn(i,n)?i:Ja.current!==null?(t=dd(t,i,o),jn(t,n)||(_n=!0),t):(Ui&42)===0?(_n=!0,t.memoizedState=i):(t=kg(),ft.lanes|=t,Hi|=t,n)}function Im(t,n,i,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var E=U.T,T={};U.T=T,pd(t,!1,n,i);try{var z=u(),ee=U.S;if(ee!==null&&ee(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ve=Qy(z,o);fo(t,n,ve,Yn(t))}else fo(t,n,o,Yn(t))}catch(xe){fo(t,n,{then:function(){},status:"rejected",reason:xe},Yn())}finally{H.p=f,U.T=E}}function nb(){}function fd(t,n,i,o){if(t.tag!==5)throw Error(a(476));var u=km(t).queue;Im(t,u,n,ce,i===null?nb:function(){return Fm(t),i(o)})}function km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:ce},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=km(t).next.queue;fo(t,n,{},Yn())}function hd(){return Tn(Po)}function Om(){return cn().memoizedState}function zm(){return cn().memoizedState}function rb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=Yn();t=Li(i);var o=Di(n,t,i);o!==null&&(Jn(o,n,i),ao(o,n,i)),n={cache:Gu()},t.payload=n;return}n=n.return}}function ib(t,n,i){var o=Yn();i={lane:o,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},kl(t)?Hm(n,i):(i=Du(t,n,i,o),i!==null&&(Jn(i,t,o),Vm(i,n,o)))}function Bm(t,n,i){var o=Yn();fo(t,n,i,o)}function fo(t,n,i,o){var u={lane:o,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(kl(t))Hm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var E=n.lastRenderedState,T=f(E,i);if(u.hasEagerState=!0,u.eagerState=T,jn(T,E))return yl(t,n,u,0),Vt===null&&_l(),!1}catch{}finally{}if(i=Du(t,n,u,o),i!==null)return Jn(i,t,o),Vm(i,n,o),!0}return!1}function pd(t,n,i,o){if(o={lane:2,revertLane:Xd(),action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(a(479))}else n=Du(t,i,o,2),n!==null&&Jn(n,t,2)}function kl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Hm(t,n){Qa=Pl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Vm(t,n,i){if((i&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,He(t,i)}}var Fl={readContext:Tn,use:Ll,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Gm={readContext:Tn,use:Ll,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Tm,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Il(4194308,4,Pm.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var i=zn();n=n===void 0?null:n;var o=t();if(va){pe(!0);try{t()}finally{pe(!1)}}return i.memoizedState=[o,n],o},useReducer:function(t,n,i){var o=zn();if(i!==void 0){var u=i(n);if(va){pe(!0);try{i(n)}finally{pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=ib.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=ld(t);var n=t.queue,i=Bm.bind(null,ft,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:ud,useDeferredValue:function(t,n){var i=zn();return dd(i,t,n)},useTransition:function(){var t=ld(!1);return t=Im.bind(null,ft,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var o=ft,u=zn();if(At){if(i===void 0)throw Error(a(407));i=i()}else{if(i=n(),Vt===null)throw Error(a(349));(_t&124)!==0||um(o,n,i)}u.memoizedState=i;var f={value:i,getSnapshot:n};return u.queue=f,Tm(fm.bind(null,o,f,t),[t]),o.flags|=2048,$a(9,Ul(),dm.bind(null,o,f,i,n),null),i},useId:function(){var t=zn(),n=Vt.identifierPrefix;if(At){var i=Qr,o=Jr;i=(o&~(1<<32-Ie(o)-1)).toString(32)+i,n="«"+n+"R"+i,i=Nl++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Zy++,n="«"+n+"r"+i.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:hd,useFormState:xm,useActionState:xm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=pd.bind(null,ft,!0,i),i.dispatch=n,[t,n]},useMemoCache:ad,useCacheRefresh:function(){return zn().memoizedState=rb.bind(null,ft)}},jm={readContext:Tn,use:Ll,useCallback:Lm,useContext:Tn,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Dm,useReducer:Dl,useRef:wm,useState:function(){return Dl(ei)},useDebugValue:ud,useDeferredValue:function(t,n){var i=cn();return Um(i,kt.memoizedState,t,n)},useTransition:function(){var t=Dl(ei)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:hd,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var i=cn();return mm(i,kt,t,n)},useMemoCache:ad,useCacheRefresh:zm},ab={readContext:Tn,use:Ll,useCallback:Lm,useContext:Tn,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Dm,useReducer:od,useRef:wm,useState:function(){return od(ei)},useDebugValue:ud,useDeferredValue:function(t,n){var i=cn();return kt===null?dd(i,t,n):Um(i,kt.memoizedState,t,n)},useTransition:function(){var t=od(ei)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:hd,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var i=cn();return kt!==null?mm(i,kt,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:ad,useCacheRefresh:zm},es=null,ho=0;function Ol(t){var n=ho;return ho+=1,es===null&&(es=[]),tm(es,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===S?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wm(t){var n=t._init;return n(t._payload)}function Xm(t){function n(K,j){if(t){var Z=K.deletions;Z===null?(K.deletions=[j],K.flags|=16):Z.push(j)}}function i(K,j){if(!t)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Yr(K,j),K.index=0,K.sibling=null,K}function f(K,j,Z){return K.index=Z,t?(Z=K.alternate,Z!==null?(Z=Z.index,Z<j?(K.flags|=67108866,j):Z):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function E(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function T(K,j,Z,ye){return j===null||j.tag!==6?(j=Iu(Z,K.mode,ye),j.return=K,j):(j=u(j,Z),j.return=K,j)}function z(K,j,Z,ye){var Ge=Z.type;return Ge===x?ve(K,j,Z.props.children,ye,Z.key):j!==null&&(j.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===M&&Wm(Ge)===j.type)?(j=u(j,Z.props),po(j,Z),j.return=K,j):(j=xl(Z.type,Z.key,Z.props,null,K.mode,ye),po(j,Z),j.return=K,j)}function ee(K,j,Z,ye){return j===null||j.tag!==4||j.stateNode.containerInfo!==Z.containerInfo||j.stateNode.implementation!==Z.implementation?(j=ku(Z,K.mode,ye),j.return=K,j):(j=u(j,Z.children||[]),j.return=K,j)}function ve(K,j,Z,ye,Ge){return j===null||j.tag!==7?(j=ca(Z,K.mode,ye,Ge),j.return=K,j):(j=u(j,Z),j.return=K,j)}function xe(K,j,Z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Iu(""+j,K.mode,Z),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case g:return Z=xl(j.type,j.key,j.props,null,K.mode,Z),po(Z,j),Z.return=K,Z;case b:return j=ku(j,K.mode,Z),j.return=K,j;case M:var ye=j._init;return j=ye(j._payload),xe(K,j,Z)}if(ne(j)||J(j))return j=ca(j,K.mode,Z,null),j.return=K,j;if(typeof j.then=="function")return xe(K,Ol(j),Z);if(j.$$typeof===I)return xe(K,wl(K,j),Z);zl(K,j)}return null}function ie(K,j,Z,ye){var Ge=j!==null?j.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ge!==null?null:T(K,j,""+Z,ye);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case g:return Z.key===Ge?z(K,j,Z,ye):null;case b:return Z.key===Ge?ee(K,j,Z,ye):null;case M:return Ge=Z._init,Z=Ge(Z._payload),ie(K,j,Z,ye)}if(ne(Z)||J(Z))return Ge!==null?null:ve(K,j,Z,ye,null);if(typeof Z.then=="function")return ie(K,j,Ol(Z),ye);if(Z.$$typeof===I)return ie(K,j,wl(K,Z),ye);zl(K,Z)}return null}function ae(K,j,Z,ye,Ge){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return K=K.get(Z)||null,T(j,K,""+ye,Ge);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case g:return K=K.get(ye.key===null?Z:ye.key)||null,z(j,K,ye,Ge);case b:return K=K.get(ye.key===null?Z:ye.key)||null,ee(j,K,ye,Ge);case M:var ht=ye._init;return ye=ht(ye._payload),ae(K,j,Z,ye,Ge)}if(ne(ye)||J(ye))return K=K.get(Z)||null,ve(j,K,ye,Ge,null);if(typeof ye.then=="function")return ae(K,j,Z,Ol(ye),Ge);if(ye.$$typeof===I)return ae(K,j,Z,wl(j,ye),Ge);zl(j,ye)}return null}function rt(K,j,Z,ye){for(var Ge=null,ht=null,Ke=j,nt=j=0,bn=null;Ke!==null&&nt<Z.length;nt++){Ke.index>nt?(bn=Ke,Ke=null):bn=Ke.sibling;var St=ie(K,Ke,Z[nt],ye);if(St===null){Ke===null&&(Ke=bn);break}t&&Ke&&St.alternate===null&&n(K,Ke),j=f(St,j,nt),ht===null?Ge=St:ht.sibling=St,ht=St,Ke=bn}if(nt===Z.length)return i(K,Ke),At&&da(K,nt),Ge;if(Ke===null){for(;nt<Z.length;nt++)Ke=xe(K,Z[nt],ye),Ke!==null&&(j=f(Ke,j,nt),ht===null?Ge=Ke:ht.sibling=Ke,ht=Ke);return At&&da(K,nt),Ge}for(Ke=o(Ke);nt<Z.length;nt++)bn=ae(Ke,K,nt,Z[nt],ye),bn!==null&&(t&&bn.alternate!==null&&Ke.delete(bn.key===null?nt:bn.key),j=f(bn,j,nt),ht===null?Ge=bn:ht.sibling=bn,ht=bn);return t&&Ke.forEach(function(Ji){return n(K,Ji)}),At&&da(K,nt),Ge}function tt(K,j,Z,ye){if(Z==null)throw Error(a(151));for(var Ge=null,ht=null,Ke=j,nt=j=0,bn=null,St=Z.next();Ke!==null&&!St.done;nt++,St=Z.next()){Ke.index>nt?(bn=Ke,Ke=null):bn=Ke.sibling;var Ji=ie(K,Ke,St.value,ye);if(Ji===null){Ke===null&&(Ke=bn);break}t&&Ke&&Ji.alternate===null&&n(K,Ke),j=f(Ji,j,nt),ht===null?Ge=Ji:ht.sibling=Ji,ht=Ji,Ke=bn}if(St.done)return i(K,Ke),At&&da(K,nt),Ge;if(Ke===null){for(;!St.done;nt++,St=Z.next())St=xe(K,St.value,ye),St!==null&&(j=f(St,j,nt),ht===null?Ge=St:ht.sibling=St,ht=St);return At&&da(K,nt),Ge}for(Ke=o(Ke);!St.done;nt++,St=Z.next())St=ae(Ke,K,nt,St.value,ye),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?nt:St.key),j=f(St,j,nt),ht===null?Ge=St:ht.sibling=St,ht=St);return t&&Ke.forEach(function(sx){return n(K,sx)}),At&&da(K,nt),Ge}function Ot(K,j,Z,ye){if(typeof Z=="object"&&Z!==null&&Z.type===x&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case g:e:{for(var Ge=Z.key;j!==null;){if(j.key===Ge){if(Ge=Z.type,Ge===x){if(j.tag===7){i(K,j.sibling),ye=u(j,Z.props.children),ye.return=K,K=ye;break e}}else if(j.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===M&&Wm(Ge)===j.type){i(K,j.sibling),ye=u(j,Z.props),po(ye,Z),ye.return=K,K=ye;break e}i(K,j);break}else n(K,j);j=j.sibling}Z.type===x?(ye=ca(Z.props.children,K.mode,ye,Z.key),ye.return=K,K=ye):(ye=xl(Z.type,Z.key,Z.props,null,K.mode,ye),po(ye,Z),ye.return=K,K=ye)}return E(K);case b:e:{for(Ge=Z.key;j!==null;){if(j.key===Ge)if(j.tag===4&&j.stateNode.containerInfo===Z.containerInfo&&j.stateNode.implementation===Z.implementation){i(K,j.sibling),ye=u(j,Z.children||[]),ye.return=K,K=ye;break e}else{i(K,j);break}else n(K,j);j=j.sibling}ye=ku(Z,K.mode,ye),ye.return=K,K=ye}return E(K);case M:return Ge=Z._init,Z=Ge(Z._payload),Ot(K,j,Z,ye)}if(ne(Z))return rt(K,j,Z,ye);if(J(Z)){if(Ge=J(Z),typeof Ge!="function")throw Error(a(150));return Z=Ge.call(Z),tt(K,j,Z,ye)}if(typeof Z.then=="function")return Ot(K,j,Ol(Z),ye);if(Z.$$typeof===I)return Ot(K,j,wl(K,Z),ye);zl(K,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,j!==null&&j.tag===6?(i(K,j.sibling),ye=u(j,Z),ye.return=K,K=ye):(i(K,j),ye=Iu(Z,K.mode,ye),ye.return=K,K=ye),E(K)):i(K,j)}return function(K,j,Z,ye){try{ho=0;var Ge=Ot(K,j,Z,ye);return es=null,Ge}catch(Ke){if(Ke===ro||Ke===Al)throw Ke;var ht=Wn(29,Ke,null,K.mode);return ht.lanes=ye,ht.return=K,ht}finally{}}}var ts=Xm(!0),qm=Xm(!1),ir=Q(null),ti=null;function Ii(t){var n=t.alternate;be(hn,hn.current&1),be(ir,t),ti===null&&(n===null||Ja.current!==null||n.memoizedState!==null)&&(ti=t)}function Km(t){if(t.tag===22){if(be(hn,hn.current),be(ir,t),ti===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ti=t)}}else ki()}function ki(){be(hn,hn.current),be(ir,ir.current)}function ni(t){ge(ir),ti===t&&(ti=null),ge(hn)}var hn=Q(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||af(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function md(t,n,i,o){n=t.memoizedState,i=i(o,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var gd={enqueueSetState:function(t,n,i){t=t._reactInternals;var o=Yn(),u=Li(o);u.payload=n,i!=null&&(u.callback=i),n=Di(t,u,o),n!==null&&(Jn(n,t,o),ao(n,t,o))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var o=Yn(),u=Li(o);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=Di(t,u,o),n!==null&&(Jn(n,t,o),ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=Yn(),o=Li(i);o.tag=2,n!=null&&(o.callback=n),n=Di(t,o,i),n!==null&&(Jn(n,t,i),ao(n,t,i))}};function Ym(t,n,i,o,u,f,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,E):n.prototype&&n.prototype.isPureReactComponent?!Ys(i,o)||!Ys(u,f):!0}function Jm(t,n,i,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==t&&gd.enqueueReplaceState(n,n.state,null)}function _a(t,n){var i=n;if("ref"in n){i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var u in t)i[u]===void 0&&(i[u]=t[u])}return i}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qm(t){Hl(t)}function Zm(t){console.error(t)}function $m(t){Hl(t)}function Vl(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function eg(t,n,i){try{var o=t.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vd(t,n,i){return i=Li(i),i.tag=3,i.payload={element:null},i.callback=function(){Vl(t,n)},i}function tg(t){return t=Li(t),t.tag=3,t}function ng(t,n,i,o){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){eg(n,i,o)}}var E=i.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){eg(n,i,o),typeof u!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function sb(t,n,i,o,u){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=i.alternate,n!==null&&eo(n,i,u,!0),i=ir.current,i!==null){switch(i.tag){case 13:return ti===null?Hd():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=u,o===Xu?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([o]):n.add(o),Gd(t,o,u)),!1;case 22:return i.flags|=65536,o===Xu?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([o]):i.add(o)),Gd(t,o,u)),!1}throw Error(a(435,i.tag))}return Gd(t,o,u),Hd(),!1}if(At)return n=ir.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(a(422),{cause:o}),$s(er(t,i)))):(o!==zu&&(n=Error(a(423),{cause:o}),$s(er(n,i))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=er(o,i),u=vd(t.stateNode,o,u),Yu(t,u),en!==4&&(en=2)),!1;var f=Error(a(520),{cause:o});if(f=er(f,i),xo===null?xo=[f]:xo.push(f),en!==4&&(en=2),n===null)return!0;o=er(o,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=u&-u,i.lanes|=t,t=vd(i.stateNode,o,t),Yu(i,t),!1;case 1:if(n=i.type,f=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vi===null||!Vi.has(f))))return i.flags|=65536,u&=-u,i.lanes|=u,u=tg(u),ng(u,t,i,o),Yu(i,u),!1}i=i.return}while(i!==null);return!1}var rg=Error(a(461)),_n=!1;function Sn(t,n,i,o){n.child=t===null?qm(n,null,i,o):ts(n,t.child,i,o)}function ig(t,n,i,o,u){i=i.render;var f=n.ref;if("ref"in o){var E={};for(var T in o)T!=="ref"&&(E[T]=o[T])}else E=o;return ma(n),o=ed(t,n,i,E,f,u),T=td(),t!==null&&!_n?(nd(t,n,u),ri(t,n,u)):(At&&T&&Fu(n),n.flags|=1,Sn(t,n,o,u),n.child)}function ag(t,n,i,o,u){if(t===null){var f=i.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=f,sg(t,n,f,o,u)):(t=xl(i.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!wd(t,u)){var E=f.memoizedProps;if(i=i.compare,i=i!==null?i:Ys,i(E,o)&&t.ref===n.ref)return ri(t,n,u)}return n.flags|=1,t=Yr(f,o),t.ref=n.ref,t.return=n,n.child=t}function sg(t,n,i,o,u){if(t!==null){var f=t.memoizedProps;if(Ys(f,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=f,wd(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,ri(t,n,u)}return _d(t,n,i,o,u)}function og(t,n,i){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|i:i,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return lg(t,n,o,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Qu(),Km(n);else return n.lanes=n.childLanes=536870912,lg(t,n,f!==null?f.baseLanes|i:i,i)}else f!==null?(Tl(n,f.cachePool),sm(n,f),ki(),n.memoizedState=null):(t!==null&&Tl(n,null),Qu(),ki());return Sn(t,n,u,i),n.child}function lg(t,n,i,o){var u=Wu();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:i,cachePool:u},t!==null&&Tl(n,null),Qu(),Km(n),t!==null&&eo(t,n,o,!0),null}function Gl(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function _d(t,n,i,o,u){return ma(n),i=ed(t,n,i,o,void 0,u),o=td(),t!==null&&!_n?(nd(t,n,u),ri(t,n,u)):(At&&o&&Fu(n),n.flags|=1,Sn(t,n,i,u),n.child)}function cg(t,n,i,o,u,f){return ma(n),n.updateQueue=null,i=lm(n,o,i,u),om(t),o=td(),t!==null&&!_n?(nd(t,n,f),ri(t,n,f)):(At&&o&&Fu(n),n.flags|=1,Sn(t,n,i,f),n.child)}function ug(t,n,i,o,u){if(ma(n),n.stateNode===null){var f=Wa,E=i.contextType;typeof E=="object"&&E!==null&&(f=Tn(E)),f=new i(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},qu(n),E=i.contextType,f.context=typeof E=="object"&&E!==null?Tn(E):Wa,f.state=n.memoizedState,E=i.getDerivedStateFromProps,typeof E=="function"&&(md(n,i,E,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&gd.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,z=_a(i,T);f.props=z;var ee=f.context,ve=i.contextType;E=Wa,typeof ve=="object"&&ve!==null&&(E=Tn(ve));var xe=i.getDerivedStateFromProps;ve=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ee!==E)&&Jm(n,f,o,E),Ni=!1;var ie=n.memoizedState;f.state=ie,oo(n,o,f,u),so(),ee=n.memoizedState,T||ie!==ee||Ni?(typeof xe=="function"&&(md(n,i,xe,o),ee=n.memoizedState),(z=Ni||Ym(n,i,z,o,ie,ee,E))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=E,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),E=n.memoizedProps,ve=_a(i,E),f.props=ve,xe=n.pendingProps,ie=f.context,ee=i.contextType,z=Wa,typeof ee=="object"&&ee!==null&&(z=Tn(ee)),T=i.getDerivedStateFromProps,(ee=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==xe||ie!==z)&&Jm(n,f,o,z),Ni=!1,ie=n.memoizedState,f.state=ie,oo(n,o,f,u),so();var ae=n.memoizedState;E!==xe||ie!==ae||Ni||t!==null&&t.dependencies!==null&&Ml(t.dependencies)?(typeof T=="function"&&(md(n,i,T,o),ae=n.memoizedState),(ve=Ni||Ym(n,i,ve,o,ie,ae,z)||t!==null&&t.dependencies!==null&&Ml(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ae,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ae,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=z,o=ve):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=ts(n,t.child,null,u),n.child=ts(n,null,i,u)):Sn(t,n,i,u),n.memoizedState=f.state,t=n.child):t=ri(t,n,u),t}function dg(t,n,i,o){return Zs(),n.flags|=256,Sn(t,n,i,o),n.child}var yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(t){return{baseLanes:t,cachePool:Zp()}}function xd(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ar),t}function fg(t,n,i){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,E;if((E=f)||(E=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ii(n):ki(),At){var T=$t,z;if(z=T){e:{for(z=T,T=Rr;z.nodeType!==8;){if(!T){T=null;break e}if(z=_r(z.nextSibling),z===null){T=null;break e}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:ua!==null?{id:Jr,overflow:Qr}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,Nn=n,$t=null,z=!0):z=!1}z||ha(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return af(T)?n.lanes=32:n.lanes=536870912,null;ni(n)}return T=o.children,o=o.fallback,u?(ki(),u=n.mode,T=jl({mode:"hidden",children:T},u),o=ca(o,u,i,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=bd(i),u.childLanes=xd(t,E,i),n.memoizedState=yd,o):(Ii(n),Sd(n,T))}if(z=t.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(Ii(n),n.flags&=-257,n=Ed(t,n,i)):n.memoizedState!==null?(ki(),n.child=t.child,n.flags|=128,n=null):(ki(),u=o.fallback,T=n.mode,o=jl({mode:"visible",children:o.children},T),u=ca(u,T,i,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ts(n,t.child,null,i),o=n.child,o.memoizedState=bd(i),o.childLanes=xd(t,E,i),n.memoizedState=yd,n=u);else if(Ii(n),af(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var ee=E.dgst;E=ee,o=Error(a(419)),o.stack="",o.digest=E,$s({value:o,source:null,stack:null}),n=Ed(t,n,i)}else if(_n||eo(t,n,i,!1),E=(i&t.childLanes)!==0,_n||E){if(E=Vt,E!==null&&(o=i&-i,o=(o&42)!==0?1:Qe(o),o=(o&(E.suspendedLanes|i))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,ja(t,o),Jn(E,t,o),rg;T.data==="$?"||Hd(),n=Ed(t,n,i)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=_r(T.nextSibling),Nn=n,At=!0,fa=null,Rr=!1,t!==null&&(nr[rr++]=Jr,nr[rr++]=Qr,nr[rr++]=ua,Jr=t.id,Qr=t.overflow,ua=n),n=Sd(n,o.children),n.flags|=4096);return n}return u?(ki(),u=o.fallback,T=n.mode,z=t.child,ee=z.sibling,o=Yr(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ee!==null?u=Yr(ee,u):(u=ca(u,T,i,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=t.child.memoizedState,T===null?T=bd(i):(z=T.cachePool,z!==null?(ee=fn._currentValue,z=z.parent!==ee?{parent:ee,pool:ee}:z):z=Zp(),T={baseLanes:T.baseLanes|i,cachePool:z}),u.memoizedState=T,u.childLanes=xd(t,E,i),n.memoizedState=yd,o):(Ii(n),i=t.child,t=i.sibling,i=Yr(i,{mode:"visible",children:o.children}),i.return=n,i.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=i,n.memoizedState=null,i)}function Sd(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ed(t,n,i){return ts(n,t.child,null,i),t=Sd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hg(t,n,i){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Hu(t.return,n,i)}function Md(t,n,i,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=i,f.tailMode=u)}function pg(t,n,i){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(t,n,o.children,i),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hg(t,i,n);else if(t.tag===19)hg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(hn,o),u){case"forwards":for(i=n.child,u=null;i!==null;)t=i.alternate,t!==null&&Bl(t)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),Md(n,!1,u,i,f);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=i,i=u,u=t}Md(n,!0,i,null,f);break;case"together":Md(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ri(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Hi|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(eo(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,i=Yr(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Yr(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function wd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ml(t)))}function ob(t,n,i){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Pi(n,fn,t.memoizedState.cache),Zs();break;case 27:case 5:Ze(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Pi(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ii(n),n.flags|=128,null):(i&n.child.childLanes)!==0?fg(t,n,i):(Ii(n),t=ri(t,n,i),t!==null?t.sibling:null);Ii(n);break;case 19:var u=(t.flags&128)!==0;if(o=(i&n.childLanes)!==0,o||(eo(t,n,i,!1),o=(i&n.childLanes)!==0),u){if(o)return pg(t,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,og(t,n,i);case 24:Pi(n,fn,t.memoizedState.cache)}return ri(t,n,i)}function mg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!wd(t,i)&&(n.flags&128)===0)return _n=!1,ob(t,n,i);_n=(t.flags&131072)!==0}else _n=!1,At&&(n.flags&1048576)!==0&&Wp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Uu(o)?(t=_a(o,t),n.tag=1,n=ug(null,n,o,t,i)):(n.tag=0,n=_d(null,n,o,t,i));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=ig(null,n,o,t,i);break e}else if(u===O){n.tag=14,n=ag(null,n,o,t,i);break e}}throw n=le(o)||o,Error(a(306,n,""))}}return n;case 0:return _d(t,n,n.type,n.pendingProps,i);case 1:return o=n.type,u=_a(o,n.pendingProps),ug(t,n,o,u,i);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),oo(n,o,null,i);var E=n.memoizedState;if(o=E.cache,Pi(n,fn,o),o!==f.cache&&Vu(n,[fn],i,!0),so(),o=E.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=dg(t,n,o,i);break e}else if(o!==u){u=er(Error(a(424)),n),$s(u),n=dg(t,n,o,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=_r(t.firstChild),Nn=n,At=!0,fa=null,Rr=!0,i=qm(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Zs(),o===u){n=ri(t,n,i);break e}Sn(t,n,o,i)}n=n.child}return n;case 26:return Gl(t,n),t===null?(i=yv(n.type,null,n.pendingProps,null))?n.memoizedState=i:At||(i=n.type,t=n.pendingProps,o=ic($.current).createElement(i),o[dn]=n,o[vn]=t,Mn(o,i,t),rn(o),n.stateNode=o):n.memoizedState=yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ze(n),t===null&&At&&(o=n.stateNode=gv(n.type,n.pendingProps,$.current),Nn=n,Rr=!0,u=$t,Wi(n.type)?(sf=u,$t=_r(o.firstChild)):$t=u),Sn(t,n,n.pendingProps.children,i),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=$t)&&(o=Ib(o,n.type,n.pendingProps,Rr),o!==null?(n.stateNode=o,Nn=n,$t=_r(o.firstChild),Rr=!1,u=!0):u=!1),u||ha(n)),Ze(n),u=n.type,f=n.pendingProps,E=t!==null?t.memoizedProps:null,o=f.children,tf(u,f)?o=null:E!==null&&tf(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=ed(t,n,$y,null,null,i),Po._currentValue=u),Gl(t,n),Sn(t,n,o,i),n.child;case 6:return t===null&&At&&((t=i=$t)&&(i=kb(i,n.pendingProps,Rr),i!==null?(n.stateNode=i,Nn=n,$t=null,t=!0):t=!1),t||ha(n)),null;case 13:return fg(t,n,i);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ts(n,null,o,i):Sn(t,n,o,i),n.child;case 11:return ig(t,n,n.type,n.pendingProps,i);case 7:return Sn(t,n,n.pendingProps,i),n.child;case 8:return Sn(t,n,n.pendingProps.children,i),n.child;case 12:return Sn(t,n,n.pendingProps.children,i),n.child;case 10:return o=n.pendingProps,Pi(n,n.type,o.value),Sn(t,n,o.children,i),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ma(n),u=Tn(u),o=o(u),n.flags|=1,Sn(t,n,o,i),n.child;case 14:return ag(t,n,n.type,n.pendingProps,i);case 15:return sg(t,n,n.type,n.pendingProps,i);case 19:return pg(t,n,i);case 31:return o=n.pendingProps,i=n.mode,o={mode:o.mode,children:o.children},t===null?(i=jl(o,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=Yr(t.child,o),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return og(t,n,i);case 24:return ma(n),o=Tn(fn),t===null?(u=Wu(),u===null&&(u=Vt,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=i),u=f),n.memoizedState={parent:o,cache:u},qu(n),Pi(n,fn,u)):((t.lanes&i)!==0&&(Ku(t,n),oo(n,null,null,i),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pi(n,fn,o)):(o=f.cache,Pi(n,fn,o),o!==u.cache&&Vu(n,[fn],i,!0))),Sn(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ii(t){t.flags|=4}function gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mv(n)){if(n=ir.current,n!==null&&((_t&4194048)===_t?ti!==null:(_t&62914560)!==_t&&(_t&536870912)===0||n!==ti))throw io=Xu,$p;t.flags|=8192}}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,as|=n)}function mo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,o=0;if(n)for(var u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=i,n}function lb(t,n,i){var o=n.pendingProps;switch(Ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return i=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$r(fn),et(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kp())),Jt(n),null;case 26:return i=n.memoizedState,t===null?(ii(n),i!==null?(Jt(n),gg(n,i)):(Jt(n),n.flags&=-16777217)):i?i!==t.memoizedState?(ii(n),Jt(n),gg(n,i)):(Jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ii(n),Jt(n),n.flags&=-16777217),null;case 27:ze(n),i=$.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ii(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}t=Ne.current,Qs(n)?Xp(n):(t=gv(u,o,i),n.stateNode=t,ii(n))}return Jt(n),null;case 5:if(ze(n),i=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ii(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}if(t=Ne.current,Qs(n))Xp(n);else{switch(u=ic($.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(i,{is:o.is}):u.createElement(i)}}t[dn]=n,t[vn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Mn(t,i,o),i){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ii(n)}}return Jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ii(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=$.current,Qs(n)){if(t=n.stateNode,i=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||cv(t.nodeValue,i)),t||ha(n)}else t=ic(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[dn]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Kp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}if(ni(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=o!==null,t=t!==null&&t.memoizedState!==null,i){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return i!==t&&i&&(n.child.flags|=8192),Wl(n,n.updateQueue),Jt(n),null;case 4:return et(),t===null&&Jd(n.stateNode.containerInfo),Jt(n),null;case 10:return $r(n.type),Jt(n),null;case 19:if(ge(hn),u=n.memoizedState,u===null)return Jt(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)mo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Bl(t),f!==null){for(n.flags|=128,mo(u,!1),t=f.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)jp(i,t),i=i.sibling;return be(hn,hn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Ut()>Kl&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Bl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!At)return Jt(n),null}else 2*Ut()-u.renderingStartTime>Kl&&i!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ut(),n.sibling=null,t=hn.current,be(hn,o?t&1|2:t&1),n):(Jt(n),null);case 22:case 23:return ni(n),Zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(i&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),i=n.updateQueue,i!==null&&Wl(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048),t!==null&&ge(ga),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),$r(fn),Jt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function cb(t,n){switch(Ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $r(fn),et(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ge(hn),null;case 4:return et(),null;case 10:return $r(n.type),null;case 22:case 23:return ni(n),Zu(),t!==null&&ge(ga),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $r(fn),null;case 25:return null;default:return null}}function vg(t,n){switch(Ou(n),n.tag){case 3:$r(fn),et();break;case 26:case 27:case 5:ze(n);break;case 4:et();break;case 13:ni(n);break;case 19:ge(hn);break;case 10:$r(n.type);break;case 22:case 23:ni(n),Zu(),t!==null&&ge(ga);break;case 24:$r(fn)}}function go(t,n){try{var i=n.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&t)===t){o=void 0;var f=i.create,E=i.inst;o=f(),E.destroy=o}i=i.next}while(i!==u)}}catch(T){Ht(n,n.return,T)}}function Fi(t,n,i){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var E=o.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,u=n;var z=i,ee=T;try{ee()}catch(ve){Ht(u,z,ve)}}}o=o.next}while(o!==f)}}catch(ve){Ht(n,n.return,ve)}}function _g(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{am(n,i)}catch(o){Ht(t,t.return,o)}}}function yg(t,n,i){i.props=_a(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(o){Ht(t,n,o)}}function vo(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof i=="function"?t.refCleanup=i(o):i.current=o}}catch(u){Ht(t,n,u)}}function Cr(t,n){var i=t.ref,o=t.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){Ht(t,n,u)}else i.current=null}function bg(t){var n=t.type,i=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break e;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(u){Ht(t,t.return,u)}}function Td(t,n,i){try{var o=t.stateNode;Pb(o,t.type,i,n),o[vn]=n}catch(u){Ht(t,t.return,u)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wi(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=rc));else if(o!==4&&(o===27&&Wi(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Rd(t,n,i),t=t.sibling;t!==null;)Rd(t,n,i),t=t.sibling}function Xl(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(o!==4&&(o===27&&Wi(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Xl(t,n,i),t=t.sibling;t!==null;)Xl(t,n,i),t=t.sibling}function Sg(t){var n=t.stateNode,i=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,i),n[dn]=t,n[vn]=i}catch(f){Ht(t,t.return,f)}}var ai=!1,sn=!1,Cd=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function ub(t,n){if(t=t.containerInfo,$d=uc,t=Up(t),Au(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var E=0,T=-1,z=-1,ee=0,ve=0,xe=t,ie=null;t:for(;;){for(var ae;xe!==i||u!==0&&xe.nodeType!==3||(T=E+u),xe!==f||o!==0&&xe.nodeType!==3||(z=E+o),xe.nodeType===3&&(E+=xe.nodeValue.length),(ae=xe.firstChild)!==null;)ie=xe,xe=ae;for(;;){if(xe===t)break t;if(ie===i&&++ee===u&&(T=E),ie===f&&++ve===o&&(z=E),(ae=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=ae}i=T===-1||z===-1?null:{start:T,end:z}}else i=null}i=i||{start:0,end:0}}else i=null;for(ef={focusedElem:t,selectionRange:i},uc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,i=n,u=f.memoizedProps,f=f.memoizedState,o=i.stateNode;try{var rt=_a(i.type,u,i.elementType===i.type);t=o.getSnapshotBeforeUpdate(rt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(i,i.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)rf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function Mg(t,n,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(t,i),o&4&&go(5,i);break;case 1:if(Oi(t,i),o&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(E){Ht(i,i.return,E)}else{var u=_a(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ht(i,i.return,E)}}o&64&&_g(i),o&512&&vo(i,i.return);break;case 3:if(Oi(t,i),o&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{am(t,n)}catch(E){Ht(i,i.return,E)}}break;case 27:n===null&&o&4&&Sg(i);case 26:case 5:Oi(t,i),n===null&&o&4&&bg(i),o&512&&vo(i,i.return);break;case 12:Oi(t,i);break;case 13:Oi(t,i),o&4&&Ag(t,i),o&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=yb.bind(null,i),Fb(t,i))));break;case 22:if(o=i.memoizedState!==null||ai,!o){n=n!==null&&n.memoizedState!==null||sn,u=ai;var f=sn;ai=o,(sn=n)&&!f?zi(t,i,(i.subtreeFlags&8772)!==0):Oi(t,i),ai=u,sn=f}break;case 30:break;default:Oi(t,i)}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Fa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Wt=null,Bn=!1;function si(t,n,i){for(i=i.child;i!==null;)Tg(t,n,i),i=i.sibling}function Tg(t,n,i){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(me,i)}catch{}switch(i.tag){case 26:sn||Cr(i,n),si(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:sn||Cr(i,n);var o=Wt,u=Bn;Wi(i.type)&&(Wt=i.stateNode,Bn=!1),si(t,n,i),To(i.stateNode),Wt=o,Bn=u;break;case 5:sn||Cr(i,n);case 6:if(o=Wt,u=Bn,Wt=null,si(t,n,i),Wt=o,Bn=u,Wt!==null)if(Bn)try{(Wt.nodeType===9?Wt.body:Wt.nodeName==="HTML"?Wt.ownerDocument.body:Wt).removeChild(i.stateNode)}catch(f){Ht(i,n,f)}else try{Wt.removeChild(i.stateNode)}catch(f){Ht(i,n,f)}break;case 18:Wt!==null&&(Bn?(t=Wt,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Uo(t)):pv(Wt,i.stateNode));break;case 4:o=Wt,u=Bn,Wt=i.stateNode.containerInfo,Bn=!0,si(t,n,i),Wt=o,Bn=u;break;case 0:case 11:case 14:case 15:sn||Fi(2,i,n),sn||Fi(4,i,n),si(t,n,i);break;case 1:sn||(Cr(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"&&yg(i,n,o)),si(t,n,i);break;case 21:si(t,n,i);break;case 22:sn=(o=sn)||i.memoizedState!==null,si(t,n,i),sn=o;break;default:si(t,n,i)}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(i){Ht(n,n.return,i)}}function db(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Eg),n;default:throw Error(a(435,t.tag))}}function Pd(t,n){var i=db(t);n.forEach(function(o){var u=bb.bind(null,t,o);i.has(o)||(i.add(o),o.then(u,u))})}function Xn(t,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var u=i[o],f=t,E=n,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Wi(T.type)){Wt=T.stateNode,Bn=!1;break e}break;case 5:Wt=T.stateNode,Bn=!1;break e;case 3:case 4:Wt=T.stateNode.containerInfo,Bn=!0;break e}T=T.return}if(Wt===null)throw Error(a(160));Tg(f,E,u),Wt=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rg(n,t),n=n.sibling}var vr=null;function Rg(t,n){var i=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),qn(t),o&4&&(Fi(3,t,t.return),go(3,t),Fi(5,t,t.return));break;case 1:Xn(n,t),qn(t),o&512&&(sn||i===null||Cr(i,i.return)),o&64&&ai&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var u=vr;if(Xn(n,t),qn(t),o&512&&(sn||i===null||Cr(i,i.return)),o&4){var f=i!==null?i.memoizedState:null;if(o=t.memoizedState,i===null)if(o===null)if(t.stateNode===null){e:{o=t.type,i=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ti]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,o,i),f[dn]=t,rn(f),o=f;break e;case"link":var E=Sv("link","href",u).get(o+(i.href||""));if(E){for(var T=0;T<E.length;T++)if(f=E[T],f.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&f.getAttribute("rel")===(i.rel==null?null:i.rel)&&f.getAttribute("title")===(i.title==null?null:i.title)&&f.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){E.splice(T,1);break t}}f=u.createElement(o),Mn(f,o,i),u.head.appendChild(f);break;case"meta":if(E=Sv("meta","content",u).get(o+(i.content||""))){for(T=0;T<E.length;T++)if(f=E[T],f.getAttribute("content")===(i.content==null?null:""+i.content)&&f.getAttribute("name")===(i.name==null?null:i.name)&&f.getAttribute("property")===(i.property==null?null:i.property)&&f.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&f.getAttribute("charset")===(i.charSet==null?null:i.charSet)){E.splice(T,1);break t}}f=u.createElement(o),Mn(f,o,i),u.head.appendChild(f);break;default:throw Error(a(468,o))}f[dn]=t,rn(f),o=f}t.stateNode=o}else Ev(u,t.type,t.stateNode);else t.stateNode=xv(u,o,t.memoizedProps);else f!==o?(f===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):f.count--,o===null?Ev(u,t.type,t.stateNode):xv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Td(t,t.memoizedProps,i.memoizedProps)}break;case 27:Xn(n,t),qn(t),o&512&&(sn||i===null||Cr(i,i.return)),i!==null&&o&4&&Td(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Xn(n,t),qn(t),o&512&&(sn||i===null||Cr(i,i.return)),t.flags&32){u=t.stateNode;try{jt(u,"")}catch(ae){Ht(t,t.return,ae)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Td(t,u,i!==null?i.memoizedProps:u)),o&1024&&(Cd=!0);break;case 6:if(Xn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,i=t.stateNode;try{i.nodeValue=o}catch(ae){Ht(t,t.return,ae)}}break;case 3:if(oc=null,u=vr,vr=ac(n.containerInfo),Xn(n,t),vr=u,qn(t),o&4&&i!==null&&i.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ae){Ht(t,t.return,ae)}Cd&&(Cd=!1,Cg(t));break;case 4:o=vr,vr=ac(t.stateNode.containerInfo),Xn(n,t),qn(t),vr=o;break;case 12:Xn(n,t),qn(t);break;case 13:Xn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(kd=Ut()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pd(t,o)));break;case 22:u=t.memoizedState!==null;var z=i!==null&&i.memoizedState!==null,ee=ai,ve=sn;if(ai=ee||u,sn=ve||z,Xn(n,t),sn=ve,ai=ee,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(i===null||z||ai||sn||ya(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){z=i=n;try{if(f=z.stateNode,u)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=z.stateNode;var xe=z.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Ht(z,z.return,ae)}}}else if(n.tag===6){if(i===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ae){Ht(z,z.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,Pd(t,i))));break;case 19:Xn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pd(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var i,o=t.return;o!==null;){if(xg(o)){i=o;break}o=o.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var u=i.stateNode,f=Ad(t);Xl(t,f,u);break;case 5:var E=i.stateNode;i.flags&32&&(jt(E,""),i.flags&=-33);var T=Ad(t);Xl(t,T,E);break;case 3:case 4:var z=i.stateNode.containerInfo,ee=Ad(t);Rd(t,ee,z);break;default:throw Error(a(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function ya(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fi(4,n,n.return),ya(n);break;case 1:Cr(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&yg(n,n.return,i),ya(n);break;case 27:To(n.stateNode);case 26:case 5:Cr(n,n.return),ya(n);break;case 22:n.memoizedState===null&&ya(n);break;case 30:ya(n);break;default:ya(n)}t=t.sibling}}function zi(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,E=f.flags;switch(f.tag){case 0:case 11:case 15:zi(u,f,i),go(4,f);break;case 1:if(zi(u,f,i),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ht(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)im(z[u],T)}catch(ee){Ht(o,o.return,ee)}}i&&E&64&&_g(f),vo(f,f.return);break;case 27:Sg(f);case 26:case 5:zi(u,f,i),i&&o===null&&E&4&&bg(f),vo(f,f.return);break;case 12:zi(u,f,i);break;case 13:zi(u,f,i),i&&E&4&&Ag(u,f);break;case 22:f.memoizedState===null&&zi(u,f,i),vo(f,f.return);break;case 30:break;default:zi(u,f,i)}n=n.sibling}}function Nd(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&to(i))}function Ld(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Pr(t,n,i,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(t,n,i,o),n=n.sibling}function Pg(t,n,i,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pr(t,n,i,o),u&2048&&go(9,n);break;case 1:Pr(t,n,i,o);break;case 3:Pr(t,n,i,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Pr(t,n,i,o),t=n.stateNode;try{var f=n.memoizedProps,E=f.id,T=f.onPostCommit;typeof T=="function"&&T(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ht(n,n.return,z)}}else Pr(t,n,i,o);break;case 13:Pr(t,n,i,o);break;case 23:break;case 22:f=n.stateNode,E=n.alternate,n.memoizedState!==null?f._visibility&2?Pr(t,n,i,o):_o(t,n):f._visibility&2?Pr(t,n,i,o):(f._visibility|=2,ns(t,n,i,o,(n.subtreeFlags&10256)!==0)),u&2048&&Nd(E,n);break;case 24:Pr(t,n,i,o),u&2048&&Ld(n.alternate,n);break;default:Pr(t,n,i,o)}}function ns(t,n,i,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,E=n,T=i,z=o,ee=E.flags;switch(E.tag){case 0:case 11:case 15:ns(f,E,T,z,u),go(8,E);break;case 23:break;case 22:var ve=E.stateNode;E.memoizedState!==null?ve._visibility&2?ns(f,E,T,z,u):_o(f,E):(ve._visibility|=2,ns(f,E,T,z,u)),u&&ee&2048&&Nd(E.alternate,E);break;case 24:ns(f,E,T,z,u),u&&ee&2048&&Ld(E.alternate,E);break;default:ns(f,E,T,z,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,o=n,u=o.flags;switch(o.tag){case 22:_o(i,o),u&2048&&Nd(o.alternate,o);break;case 24:_o(i,o),u&2048&&Ld(o.alternate,o);break;default:_o(i,o)}n=n.sibling}}var yo=8192;function rs(t){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 26:rs(t),t.flags&yo&&t.memoizedState!==null&&Jb(vr,t.memoizedState,t.memoizedProps);break;case 5:rs(t);break;case 3:case 4:var n=vr;vr=ac(t.stateNode.containerInfo),rs(t),vr=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=yo,yo=16777216,rs(t),yo=n):rs(t));break;default:rs(t)}}function Lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];yn=o,Ug(o,t)}Lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Fi(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):bo(t);break;default:bo(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];yn=o,Ug(o,t)}Lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fi(8,n,n.return),ql(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function Ug(t,n){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Fi(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,yn=o;else e:for(i=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(wg(o),o===i){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var fb={getCacheForType:function(t){var n=Tn(fn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i}},hb=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Vt=null,pt=null,_t=0,Lt=0,Kn=null,Bi=!1,is=!1,Dd=!1,oi=0,en=0,Hi=0,ba=0,Ud=0,ar=0,as=0,xo=null,Hn=null,Id=!1,kd=0,Kl=1/0,Yl=null,Vi=null,En=0,Gi=null,ss=null,os=0,Fd=0,Od=null,Ig=null,So=0,zd=null;function Yn(){if((Nt&2)!==0&&_t!==0)return _t&-_t;if(U.T!==null){var t=Ka;return t!==0?t:Xd()}return xt()}function kg(){ar===0&&(ar=(_t&536870912)===0||At?W():536870912);var t=ir.current;return t!==null&&(t.flags|=32),ar}function Jn(t,n,i){(t===Vt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),ji(t,_t,ar,!1)),Fe(t,i),((Nt&2)===0||t!==Vt)&&(t===Vt&&((Nt&2)===0&&(ba|=i),en===4&&ji(t,_t,ar,!1)),Nr(t))}function Fg(t,n,i){if((Nt&6)!==0)throw Error(a(327));var o=!i&&(n&124)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?gb(t,n):Vd(t,n,!0),f=o;do{if(u===0){is&&!o&&ji(t,n,0,!1);break}else{if(i=t.current.alternate,f&&!pb(i)){u=Vd(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var T=t;u=xo;var z=T.current.memoizedState.isDehydrated;if(z&&(ls(T,E).flags|=256),E=Vd(T,E,!1),E!==2){if(Dd&&!z){T.errorRecoveryDisabledLanes|=f,ba|=f,u=4;break e}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=E}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),ji(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ji(o,n,ar,!Bi);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=kd+300-Ut(),10<u)){if(ji(o,n,ar,!Bi),Be(o,0,!0)!==0)break e;o.timeoutHandle=fv(Og.bind(null,o,i,Hn,Yl,Id,n,ar,ba,as,Bi,f,2,-0,0),u);break e}Og(o,i,Hn,Yl,Id,n,ar,ba,as,Bi,f,0,-0,0)}}break}while(!0);Nr(t)}function Og(t,n,i,o,u,f,E,T,z,ee,ve,xe,ie,ae){if(t.timeoutHandle=-1,xe=n.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:Yb},Ng(n),xe=Qb(),xe!==null)){t.cancelPendingCommit=xe(Wg.bind(null,t,n,f,i,o,u,E,T,z,ve,1,ie,ae)),ji(t,f,E,!ee);return}Wg(t,n,f,i,o,u,E,T,z)}function pb(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var u=i[o],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(t,n,i,o){n&=~Ud,n&=~ba,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ie(u),E=1<<f;o[f]=-1,u&=~E}i!==0&&fe(t,i,n)}function Jl(){return(Nt&6)===0?(Eo(0),!1):!0}function Bd(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,Zr=pa=null,rd(t),es=null,ho=0,t=pt;for(;t!==null;)vg(t.alternate,t),t=t.return;pt=null}}function ls(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,Lb(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Bd(),Vt=t,pt=i=Yr(t.current,null),_t=n,Lt=0,Kn=null,Bi=!1,is=Ue(t,n),Dd=!1,as=ar=Ud=ba=Hi=en=0,Hn=xo=null,Id=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),f=1<<u;n|=t[u],o&=~f}return oi=n,_l(),i}function zg(t,n){ft=null,U.H=Fl,n===ro||n===Al?(n=nm(),Lt=3):n===$p?(n=nm(),Lt=4):Lt=n===rg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pt===null&&(en=1,Vl(t,er(n,t.current)))}function Bg(){var t=U.H;return U.H=Fl,t===null?Fl:t}function Hg(){var t=U.A;return U.A=fb,t}function Hd(){en=4,Bi||(_t&4194048)!==_t&&ir.current!==null||(is=!0),(Hi&134217727)===0&&(ba&134217727)===0||Vt===null||ji(Vt,_t,ar,!1)}function Vd(t,n,i){var o=Nt;Nt|=2;var u=Bg(),f=Hg();(Vt!==t||_t!==n)&&(Yl=null,ls(t,n)),n=!1;var E=en;e:do try{if(Lt!==0&&pt!==null){var T=pt,z=Kn;switch(Lt){case 8:Bd(),E=6;break e;case 3:case 2:case 9:case 6:ir.current===null&&(n=!0);var ee=Lt;if(Lt=0,Kn=null,cs(t,T,z,ee),i&&is){E=0;break e}break;default:ee=Lt,Lt=0,Kn=null,cs(t,T,z,ee)}}mb(),E=en;break}catch(ve){zg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,Zr=pa=null,Nt=o,U.H=u,U.A=f,pt===null&&(Vt=null,_t=0,_l()),E}function mb(){for(;pt!==null;)Vg(pt)}function gb(t,n){var i=Nt;Nt|=2;var o=Bg(),u=Hg();Vt!==t||_t!==n?(Yl=null,Kl=Ut()+500,ls(t,n)):is=Ue(t,n);e:do try{if(Lt!==0&&pt!==null){n=pt;var f=Kn;t:switch(Lt){case 1:Lt=0,Kn=null,cs(t,n,f,1);break;case 2:case 9:if(em(f)){Lt=0,Kn=null,Gg(n);break}n=function(){Lt!==2&&Lt!==9||Vt!==t||(Lt=7),Nr(t)},f.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:em(f)?(Lt=0,Kn=null,Gg(n)):(Lt=0,Kn=null,cs(t,n,f,7));break;case 5:var E=null;switch(pt.tag){case 26:E=pt.memoizedState;case 5:case 27:var T=pt;if(!E||Mv(E)){Lt=0,Kn=null;var z=T.sibling;if(z!==null)pt=z;else{var ee=T.return;ee!==null?(pt=ee,Ql(ee)):pt=null}break t}}Lt=0,Kn=null,cs(t,n,f,5);break;case 6:Lt=0,Kn=null,cs(t,n,f,6);break;case 8:Bd(),en=6;break e;default:throw Error(a(462))}}vb();break}catch(ve){zg(t,ve)}while(!0);return Zr=pa=null,U.H=o,U.A=u,Nt=i,pt!==null?0:(Vt=null,_t=0,_l(),en)}function vb(){for(;pt!==null&&!nn();)Vg(pt)}function Vg(t){var n=mg(t.alternate,t,oi);t.memoizedProps=t.pendingProps,n===null?Ql(t):pt=n}function Gg(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=cg(i,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=cg(i,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:rd(n);default:vg(i,n),n=pt=jp(n,oi),n=mg(i,n,oi)}t.memoizedProps=t.pendingProps,n===null?Ql(t):pt=n}function cs(t,n,i,o){Zr=pa=null,rd(n),es=null,ho=0;var u=n.return;try{if(sb(t,u,n,i,_t)){en=1,Vl(t,er(i,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;en=1,Vl(t,er(i,t.current)),pt=null;return}n.flags&32768?(At||o===1?t=!0:is||(_t&536870912)!==0?t=!1:(Bi=t=!0,(o===2||o===9||o===3||o===6)&&(o=ir.current,o!==null&&o.tag===13&&(o.flags|=16384))),jg(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){jg(n,Bi);return}t=n.return;var i=lb(n.alternate,n,oi);if(i!==null){pt=i;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);en===0&&(en=5)}function jg(t,n){do{var i=cb(t.alternate,t);if(i!==null){i.flags&=32767,pt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=i}while(t!==null);en=6,pt=null}function Wg(t,n,i,o,u,f,E,T,z){t.cancelPendingCommit=null;do Zl();while(En!==0);if((Nt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Lu,we(t,i,f,E,T,z),t===Vt&&(pt=Vt=null,_t=0),ss=n,Gi=t,os=i,Fd=f,Od=u,Ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(Tt,function(){return Jg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=H.p,H.p=2,E=Nt,Nt|=4;try{ub(t,n,i)}finally{Nt=E,H.p=u,U.T=o}}En=1,Xg(),qg(),Kg()}}function Xg(){if(En===1){En=0;var t=Gi,n=ss,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=U.T,U.T=null;var o=H.p;H.p=2;var u=Nt;Nt|=4;try{Rg(n,t);var f=ef,E=Up(t.containerInfo),T=f.focusedElem,z=f.selectionRange;if(E!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(z!==null&&Au(T)){var ee=z.start,ve=z.end;if(ve===void 0&&(ve=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(ve,T.value.length);else{var xe=T.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),rt=T.textContent.length,tt=Math.min(z.start,rt),Ot=z.end===void 0?tt:Math.min(z.end,rt);!ae.extend&&tt>Ot&&(E=Ot,Ot=tt,tt=E);var K=Lp(T,tt),j=Lp(T,Ot);if(K&&j&&(ae.rangeCount!==1||ae.anchorNode!==K.node||ae.anchorOffset!==K.offset||ae.focusNode!==j.node||ae.focusOffset!==j.offset)){var Z=xe.createRange();Z.setStart(K.node,K.offset),ae.removeAllRanges(),tt>Ot?(ae.addRange(Z),ae.extend(j.node,j.offset)):(Z.setEnd(j.node,j.offset),ae.addRange(Z))}}}}for(xe=[],ae=T;ae=ae.parentNode;)ae.nodeType===1&&xe.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var ye=xe[T];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}uc=!!$d,ef=$d=null}finally{Nt=u,H.p=o,U.T=i}}t.current=n,En=2}}function qg(){if(En===2){En=0;var t=Gi,n=ss,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=U.T,U.T=null;var o=H.p;H.p=2;var u=Nt;Nt|=4;try{Mg(t,n.alternate,n)}finally{Nt=u,H.p=o,U.T=i}}En=3}}function Kg(){if(En===4||En===3){En=0,Zt();var t=Gi,n=ss,i=os,o=Ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,ss=Gi=null,Yg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Vi=null),qt(i),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=H.p,H.p=2,U.T=null;try{for(var f=t.onRecoverableError,E=0;E<o.length;E++){var T=o[E];f(T.value,{componentStack:T.stack})}}finally{U.T=n,H.p=u}}(os&3)!==0&&Zl(),Nr(t),u=t.pendingLanes,(i&4194090)!==0&&(u&42)!==0?t===zd?So++:(So=0,zd=t):So=0,Eo(0)}}function Yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Zl(t){return Xg(),qg(),Kg(),Jg()}function Jg(){if(En!==5)return!1;var t=Gi,n=Fd;Fd=0;var i=qt(os),o=U.T,u=H.p;try{H.p=32>i?32:i,U.T=null,i=Od,Od=null;var f=Gi,E=os;if(En=0,ss=Gi=null,os=0,(Nt&6)!==0)throw Error(a(331));var T=Nt;if(Nt|=4,Dg(f.current),Pg(f,f.current,E,i),Nt=T,Eo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(me,f)}catch{}return!0}finally{H.p=u,U.T=o,Yg(t,n)}}function Qg(t,n,i){n=er(i,n),n=vd(t.stateNode,n,2),t=Di(t,n,2),t!==null&&(Fe(t,2),Nr(t))}function Ht(t,n,i){if(t.tag===3)Qg(t,t,i);else for(;n!==null;){if(n.tag===3){Qg(n,t,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vi===null||!Vi.has(o))){t=er(i,t),i=tg(2),o=Di(n,i,2),o!==null&&(ng(i,o,n,t),Fe(o,2),Nr(o));break}}n=n.return}}function Gd(t,n,i){var o=t.pingCache;if(o===null){o=t.pingCache=new hb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(i)||(Dd=!0,u.add(i),t=_b.bind(null,t,n,i),n.then(t,t))}function _b(t,n,i){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Vt===t&&(_t&i)===i&&(en===4||en===3&&(_t&62914560)===_t&&300>Ut()-kd?(Nt&2)===0&&ls(t,0):Ud|=i,as===_t&&(as=0)),Nr(t)}function Zg(t,n){n===0&&(n=Pe()),t=ja(t,n),t!==null&&(Fe(t,n),Nr(t))}function yb(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Zg(t,i)}function bb(t,n){var i=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(i=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Zg(t,i)}function xb(t,n){return wt(t,n)}var $l=null,us=null,jd=!1,ec=!1,Wd=!1,xa=0;function Nr(t){t!==us&&t.next===null&&(us===null?$l=us=t:us=us.next=t),ec=!0,jd||(jd=!0,Eb())}function Eo(t,n){if(!Wd&&ec){Wd=!0;do for(var i=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var E=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Ie(42|t)+1)-1,f&=u&~(E&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(i=!0,nv(o,f))}else f=_t,f=Be(o,o===Vt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(i=!0,nv(o,f));o=o.next}while(i);Wd=!1}}function Sb(){$g()}function $g(){ec=jd=!1;var t=0;xa!==0&&(Nb()&&(t=xa),xa=0);for(var n=Ut(),i=null,o=$l;o!==null;){var u=o.next,f=ev(o,n);f===0?(o.next=null,i===null?$l=u:i.next=u,u===null&&(us=i)):(i=o,(t!==0||(f&3)!==0)&&(ec=!0)),o=u}Eo(t)}function ev(t,n){for(var i=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var E=31-Ie(f),T=1<<E,z=u[E];z===-1?((T&i)===0||(T&o)!==0)&&(u[E]=ut(T,n)):z<=n&&(t.expiredLanes|=T),f&=~T}if(n=Vt,i=_t,i=Be(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,i===0||t===n&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&at(o),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ue(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(o!==null&&at(o),qt(i)){case 2:case 8:i=yt;break;case 32:i=Tt;break;case 268435456:i=D;break;default:i=Tt}return o=tv.bind(null,t),i=wt(i,o),t.callbackPriority=n,t.callbackNode=i,n}return o!==null&&o!==null&&at(o),t.callbackPriority=2,t.callbackNode=null,2}function tv(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Zl()&&t.callbackNode!==i)return null;var o=_t;return o=Be(t,t===Vt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Fg(t,o,n),ev(t,Ut()),t.callbackNode!=null&&t.callbackNode===i?tv.bind(null,t):null)}function nv(t,n){if(Zl())return null;Fg(t,n,!0)}function Eb(){Db(function(){(Nt&6)!==0?wt(Xt,Sb):$g()})}function Xd(){return xa===0&&(xa=W()),xa}function rv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function iv(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function Mb(t,n,i,o,u){if(n==="submit"&&i&&i.stateNode===u){var f=rv((u[vn]||null).action),E=o.submitter;E&&(n=(n=E[vn]||null)?rv(n.formAction):E.getAttribute("formAction"),n!==null&&(f=n,E=null));var T=new ml("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xa!==0){var z=E?iv(u,E):new FormData(u);fd(i,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=E?iv(u,E):new FormData(u),fd(i,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var qd=0;qd<Nu.length;qd++){var Kd=Nu[qd],wb=Kd.toLowerCase(),Tb=Kd[0].toUpperCase()+Kd.slice(1);gr(wb,"on"+Tb)}gr(Fp,"onAnimationEnd"),gr(Op,"onAnimationIteration"),gr(zp,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Gy,"onTransitionRun"),gr(jy,"onTransitionStart"),gr(Wy,"onTransitionCancel"),gr(Bp,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function av(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var o=t[i],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var E=o.length-1;0<=E;E--){var T=o[E],z=T.instance,ee=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ee;try{f(u)}catch(ve){Hl(ve)}u.currentTarget=null,f=z}else for(E=0;E<o.length;E++){if(T=o[E],z=T.instance,ee=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ee;try{f(u)}catch(ve){Hl(ve)}u.currentTarget=null,f=z}}}}function mt(t,n){var i=n[Ia];i===void 0&&(i=n[Ia]=new Set);var o=t+"__bubble";i.has(o)||(sv(n,t,2,!1),i.add(o))}function Yd(t,n,i){var o=0;n&&(o|=4),sv(i,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[tc]){t[tc]=!0,ol.forEach(function(i){i!=="selectionchange"&&(Ab.has(i)||Yd(i,!1,t),Yd(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Yd("selectionchange",!1,n))}}function sv(t,n,i,o){switch(Pv(n)){case 2:var u=ex;break;case 8:u=tx;break;default:u=df}i=u.bind(null,n,i,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,i,{capture:!0,passive:u}):t.addEventListener(n,i,!0):u!==void 0?t.addEventListener(n,i,{passive:u}):t.addEventListener(n,i,!1)}function Qd(t,n,i,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var T=o.stateNode.containerInfo;if(T===u)break;if(E===4)for(E=o.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;T!==null;){if(E=pr(T),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){o=f=E;continue e}T=T.parentNode}}o=o.return}hp(function(){var ee=f,ve=gu(i),xe=[];e:{var ie=Hp.get(t);if(ie!==void 0){var ae=ml,rt=t;switch(t){case"keypress":if(hl(i)===0)break e;case"keydown":case"keyup":ae=xy;break;case"focusin":rt="focus",ae=Su;break;case"focusout":rt="blur",ae=Su;break;case"beforeblur":case"afterblur":ae=Su;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=My;break;case Fp:case Op:case zp:ae=fy;break;case Bp:ae=Ty;break;case"scroll":case"scrollend":ae=oy;break;case"wheel":ae=Ry;break;case"copy":case"cut":case"paste":ae=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=_p;break;case"toggle":case"beforetoggle":ae=Py}var tt=(n&4)!==0,Ot=!tt&&(t==="scroll"||t==="scrollend"),K=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var j=ee,Z;j!==null;){var ye=j;if(Z=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||Z===null||K===null||(ye=Vs(j,K),ye!=null&&tt.push(wo(j,ye,Z))),Ot)break;j=j.return}0<tt.length&&(ie=new ae(ie,rt,null,i,ve),xe.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&i!==mu&&(rt=i.relatedTarget||i.fromElement)&&(pr(rt)||rt[wi]))break e;if((ae||ie)&&(ie=ve.window===ve?ve:(ie=ve.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(rt=i.relatedTarget||i.toElement,ae=ee,rt=rt?pr(rt):null,rt!==null&&(Ot=c(rt),tt=rt.tag,rt!==Ot||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ae=null,rt=ee),ae!==rt)){if(tt=gp,ye="onMouseLeave",K="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(tt=_p,ye="onPointerLeave",K="onPointerEnter",j="pointer"),Ot=ae==null?ie:wr(ae),Z=rt==null?ie:wr(rt),ie=new tt(ye,j+"leave",ae,i,ve),ie.target=Ot,ie.relatedTarget=Z,ye=null,pr(ve)===ee&&(tt=new tt(K,j+"enter",rt,i,ve),tt.target=Z,tt.relatedTarget=Ot,ye=tt),Ot=ye,ae&&rt)t:{for(tt=ae,K=rt,j=0,Z=tt;Z;Z=ds(Z))j++;for(Z=0,ye=K;ye;ye=ds(ye))Z++;for(;0<j-Z;)tt=ds(tt),j--;for(;0<Z-j;)K=ds(K),Z--;for(;j--;){if(tt===K||K!==null&&tt===K.alternate)break t;tt=ds(tt),K=ds(K)}tt=null}else tt=null;ae!==null&&ov(xe,ie,ae,tt,!1),rt!==null&&Ot!==null&&ov(xe,Ot,rt,tt,!0)}}e:{if(ie=ee?wr(ee):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ge=Tp;else if(Mp(ie))if(Ap)Ge=By;else{Ge=Oy;var ht=Fy}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Ar(ee.elementType)&&(Ge=Tp):Ge=zy;if(Ge&&(Ge=Ge(t,ee))){wp(xe,Ge,i,ve);break e}ht&&ht(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&kn(ie,"number",ie.value)}switch(ht=ee?wr(ee):window,t){case"focusin":(Mp(ht)||ht.contentEditable==="true")&&(Ha=ht,Ru=ee,Js=null);break;case"focusout":Js=Ru=Ha=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Ip(xe,i,ve);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":Ip(xe,i,ve)}var Ke;if(Mu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ba?Sp(t,i)&&(nt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(nt="onCompositionStart");nt&&(yp&&i.locale!=="ko"&&(Ba||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ba&&(Ke=pp()):(Ci=ve,yu="value"in Ci?Ci.value:Ci.textContent,Ba=!0)),ht=nc(ee,nt),0<ht.length&&(nt=new vp(nt,t,null,i,ve),xe.push({event:nt,listeners:ht}),Ke?nt.data=Ke:(Ke=Ep(i),Ke!==null&&(nt.data=Ke)))),(Ke=Ly?Dy(t,i):Uy(t,i))&&(nt=nc(ee,"onBeforeInput"),0<nt.length&&(ht=new vp("onBeforeInput","beforeinput",null,i,ve),xe.push({event:ht,listeners:nt}),ht.data=Ke)),Mb(xe,t,ee,i,ve)}av(xe,n)})}function wo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function nc(t,n){for(var i=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(t,i),u!=null&&o.unshift(wo(t,u,f)),u=Vs(t,n),u!=null&&o.push(wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ov(t,n,i,o,u){for(var f=n._reactName,E=[];i!==null&&i!==o;){var T=i,z=T.alternate,ee=T.stateNode;if(T=T.tag,z!==null&&z===o)break;T!==5&&T!==26&&T!==27||ee===null||(z=ee,u?(ee=Vs(i,f),ee!=null&&E.unshift(wo(i,ee,z))):u||(ee=Vs(i,f),ee!=null&&E.push(wo(i,ee,z)))),i=i.return}E.length!==0&&t.push({event:n,listeners:E})}var Rb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(Cb,"")}function cv(t,n){return n=lv(n),lv(t)===n}function rc(){}function Ft(t,n,i,o,u,f){switch(i){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||jt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&jt(t,""+o);break;case"className":te(t,"class",o);break;case"tabIndex":te(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":te(t,i,o);break;case"style":Ri(t,o,f);break;case"data":if(n!=="object"){te(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=dl(""+o),t.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(i==="formAction"?(n!=="input"&&Ft(t,n,"name",u.name,u,null),Ft(t,n,"formEncType",u.formEncType,u,null),Ft(t,n,"formMethod",u.formMethod,u,null),Ft(t,n,"formTarget",u.formTarget,u,null)):(Ft(t,n,"encType",u.encType,u,null),Ft(t,n,"method",u.method,u,null),Ft(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=dl(""+o),t.setAttribute(i,o);break;case"onClick":o!=null&&(t.onclick=rc);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=i}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}i=dl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""+o):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":o===!0?t.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,o):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(i,o):t.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(i):t.setAttribute(i,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),se(t,"popover",o);break;case"xlinkActuate":Y(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Y(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Y(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Y(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Y(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Y(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Y(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Y(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Y(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ul.get(i)||i,se(t,i,o))}}function Zd(t,n,i,o,u,f){switch(i){case"style":Ri(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=i}}break;case"children":typeof o=="string"?jt(t,o):(typeof o=="number"||typeof o=="bigint")&&jt(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),n=i.slice(2,u?i.length-7:void 0),f=t[vn]||null,f=f!=null?f[i]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,o,u);break e}i in t?t[i]=o:o===!0?t.setAttribute(i,""):se(t,i,o)}}}function Mn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in i)if(i.hasOwnProperty(f)){var E=i[f];if(E!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(t,n,f,E,i,null)}}u&&Ft(t,n,"srcSet",i.srcSet,i,null),o&&Ft(t,n,"src",i.src,i,null);return;case"input":mt("invalid",t);var T=f=E=u=null,z=null,ee=null;for(o in i)if(i.hasOwnProperty(o)){var ve=i[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":E=ve;break;case"checked":z=ve;break;case"defaultChecked":ee=ve;break;case"value":f=ve;break;case"defaultValue":T=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,n));break;default:Ft(t,n,o,ve,i,null)}}In(t,f,T,z,ee,E,u,!1),It(t);return;case"select":mt("invalid",t),o=E=f=null;for(u in i)if(i.hasOwnProperty(u)&&(T=i[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":E=T;break;case"multiple":o=T;default:Ft(t,n,u,T,i,null)}n=f,i=E,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):i!=null&&Fn(t,!!o,i,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(E in i)if(i.hasOwnProperty(E)&&(T=i[E],T!=null))switch(E){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ft(t,n,E,T,i,null)}Ct(t,o,u,f),It(t);return;case"option":for(z in i)if(i.hasOwnProperty(z)&&(o=i[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ft(t,n,z,o,i,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Mo.length;o++)mt(Mo[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in i)if(i.hasOwnProperty(ee)&&(o=i[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(t,n,ee,o,i,null)}return;default:if(Ar(n)){for(ve in i)i.hasOwnProperty(ve)&&(o=i[ve],o!==void 0&&Zd(t,n,ve,o,i,void 0));return}}for(T in i)i.hasOwnProperty(T)&&(o=i[T],o!=null&&Ft(t,n,T,o,i,null))}function Pb(t,n,i,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,E=null,T=null,z=null,ee=null,ve=null;for(ae in i){var xe=i[ae];if(i.hasOwnProperty(ae)&&xe!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":z=xe;default:o.hasOwnProperty(ae)||Ft(t,n,ae,null,o,xe)}}for(var ie in o){var ae=o[ie];if(xe=i[ie],o.hasOwnProperty(ie)&&(ae!=null||xe!=null))switch(ie){case"type":f=ae;break;case"name":u=ae;break;case"checked":ee=ae;break;case"defaultChecked":ve=ae;break;case"value":E=ae;break;case"defaultValue":T=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,n));break;default:ae!==xe&&Ft(t,n,ie,ae,o,xe)}}mr(t,E,T,z,ee,ve,f,u);return;case"select":ae=E=T=ie=null;for(f in i)if(z=i[f],i.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ae=z;default:o.hasOwnProperty(f)||Ft(t,n,f,null,o,z)}for(u in o)if(f=o[u],z=i[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":ie=f;break;case"defaultValue":T=f;break;case"multiple":E=f;default:f!==z&&Ft(t,n,u,f,o,z)}n=T,i=E,o=ae,ie!=null?Fn(t,!!i,ie,!1):!!o!=!!i&&(n!=null?Fn(t,!!i,n,!0):Fn(t,!!i,i?[]:"",!1));return;case"textarea":ae=ie=null;for(T in i)if(u=i[T],i.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(t,n,T,null,o,u)}for(E in o)if(u=o[E],f=i[E],o.hasOwnProperty(E)&&(u!=null||f!=null))switch(E){case"value":ie=u;break;case"defaultValue":ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&Ft(t,n,E,u,o,f)}qr(t,ie,ae);return;case"option":for(var rt in i)if(ie=i[rt],i.hasOwnProperty(rt)&&ie!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Ft(t,n,rt,null,o,ie)}for(z in o)if(ie=o[z],ae=i[z],o.hasOwnProperty(z)&&ie!==ae&&(ie!=null||ae!=null))switch(z){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ft(t,n,z,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in i)ie=i[tt],i.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Ft(t,n,tt,null,o,ie);for(ee in o)if(ie=o[ee],ae=i[ee],o.hasOwnProperty(ee)&&ie!==ae&&(ie!=null||ae!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,n));break;default:Ft(t,n,ee,ie,o,ae)}return;default:if(Ar(n)){for(var Ot in i)ie=i[Ot],i.hasOwnProperty(Ot)&&ie!==void 0&&!o.hasOwnProperty(Ot)&&Zd(t,n,Ot,void 0,o,ie);for(ve in o)ie=o[ve],ae=i[ve],!o.hasOwnProperty(ve)||ie===ae||ie===void 0&&ae===void 0||Zd(t,n,ve,ie,o,ae);return}}for(var K in i)ie=i[K],i.hasOwnProperty(K)&&ie!=null&&!o.hasOwnProperty(K)&&Ft(t,n,K,null,o,ie);for(xe in o)ie=o[xe],ae=i[xe],!o.hasOwnProperty(xe)||ie===ae||ie==null&&ae==null||Ft(t,n,xe,ie,o,ae)}var $d=null,ef=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nf=null;function Nb(){var t=window.event;return t&&t.type==="popstate"?t===nf?!1:(nf=t,!0):(nf=null,!1)}var fv=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(Ub)}:fv;function Ub(t){setTimeout(function(){throw t})}function Wi(t){return t==="head"}function pv(t,n){var i=n,o=0,u=0;do{var f=i.nextSibling;if(t.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"){if(0<o&&8>o){i=o;var E=t.ownerDocument;if(i&1&&To(E.documentElement),i&2&&To(E.body),i&4)for(i=E.head,To(i),E=i.firstChild;E;){var T=E.nextSibling,z=E.nodeName;E[Ti]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||i.removeChild(E),E=T}}if(u===0){t.removeChild(f),Uo(n);return}u--}else i==="$"||i==="$?"||i==="$!"?u++:o=i.charCodeAt(0)-48;else o=0;i=f}while(i);Uo(n)}function rf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":rf(i),Fa(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Ib(t,n,i,o){for(;t.nodeType===1;){var u=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ti])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence")||f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_r(t.nextSibling),t===null)break}return null}function kb(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_r(t.nextSibling),t===null))return null;return t}function af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Fb(t,n){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")n();else{var o=function(){n(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _r(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var sf=null;function mv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}function gv(t,n,i){switch(n=ic(i),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fa(t)}var sr=new Map,vv=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var li=H.d;H.d={f:Ob,r:zb,D:Bb,C:Hb,L:Vb,m:Gb,X:Wb,S:jb,M:Xb};function Ob(){var t=li.f(),n=Jl();return t||n}function zb(t){var n=jr(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):li.r(t)}var fs=typeof document>"u"?null:document;function _v(t,n,i){var o=fs;if(o&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),vv.has(u)||(vv.add(u),t={rel:t,crossOrigin:i,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",t),rn(n),o.head.appendChild(n)))}}function Bb(t){li.D(t),_v("dns-prefetch",t,null)}function Hb(t,n){li.C(t,n),_v("preconnect",t,n)}function Vb(t,n,i){li.L(t,n,i);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+Gt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+Gt(i.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ps(t)}sr.has(f)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),sr.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Mn(n,"link",t),rn(n),o.head.appendChild(n)))}}function Gb(t,n){li.m(t,n);var i=fs;if(i&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(t)}if(!sr.has(f)&&(t=v({rel:"modulepreload",href:t},n),sr.set(f,t),i.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ro(f)))return}o=i.createElement("link"),Mn(o,"link",t),rn(o),i.head.appendChild(o)}}}function jb(t,n,i){li.S(t,n,i);var o=fs;if(o&&t){var u=Wr(o).hoistableStyles,f=hs(t);n=n||"default";var E=u.get(f);if(!E){var T={loading:0,preload:null};if(E=o.querySelector(Ao(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=sr.get(f))&&of(t,i);var z=E=o.createElement("link");rn(z),Mn(z,"link",t),z._p=new Promise(function(ee,ve){z.onload=ee,z.onerror=ve}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,sc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:T},u.set(f,E)}}}function Wb(t,n){li.X(t,n);var i=fs;if(i&&t){var o=Wr(i).hoistableScripts,u=ps(t),f=o.get(u);f||(f=i.querySelector(Ro(u)),f||(t=v({src:t,async:!0},n),(n=sr.get(u))&&lf(t,n),f=i.createElement("script"),rn(f),Mn(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Xb(t,n){li.M(t,n);var i=fs;if(i&&t){var o=Wr(i).hoistableScripts,u=ps(t),f=o.get(u);f||(f=i.querySelector(Ro(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=sr.get(u))&&lf(t,n),f=i.createElement("script"),rn(f),Mn(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function yv(t,n,i,o){var u=(u=$.current)?ac(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=hs(i.href),i=Wr(u).hoistableStyles,o=i.get(n),o||(o={type:"style",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=hs(i.href);var f=Wr(u).hoistableStyles,E=f.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,E),(f=u.querySelector(Ao(t)))&&!f._p&&(E.instance=f,E.state.loading=5),sr.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},sr.set(t,i),f||qb(u,t,i,E.state))),n&&o===null)throw Error(a(528,""));return E}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(i),i=Wr(u).hoistableScripts,o=i.get(n),o||(o={type:"script",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function hs(t){return'href="'+Gt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function qb(t,n,i,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",i),rn(n),t.head.appendChild(n))}function ps(t){return'[src="'+Gt(t)+'"]'}function Ro(t){return"script[async]"+t}function xv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Gt(i.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),rn(o),Mn(o,"style",u),sc(o,i.precedence,t),n.instance=o;case"stylesheet":u=hs(i.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,rn(f),f;o=bv(i),(u=sr.get(u))&&of(o,u),f=(t.ownerDocument||t).createElement("link"),rn(f);var E=f;return E._p=new Promise(function(T,z){E.onload=T,E.onerror=z}),Mn(f,"link",o),n.state.loading|=4,sc(f,i.precedence,t),n.instance=f;case"script":return f=ps(i.src),(u=t.querySelector(Ro(f)))?(n.instance=u,rn(u),u):(o=i,(u=sr.get(f))&&(o=v({},i),lf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),rn(u),Mn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,i.precedence,t));return n.instance}function sc(t,n,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,E=0;E<o.length;E++){var T=o[E];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function Sv(t,n,i){if(oc===null){var o=new Map,u=oc=new Map;u.set(i,o)}else u=oc,o=u.get(i),o||(o=new Map,u.set(i,o));if(o.has(t))return o;for(o.set(t,null),i=i.getElementsByTagName(t),u=0;u<i.length;u++){var f=i[u];if(!(f[Ti]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(n)||"";E=t+E;var T=o.get(E);T?T.push(f):o.set(E,[f])}}return o}function Ev(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function Kb(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Co=null;function Yb(){}function Jb(t,n,i){if(Co===null)throw Error(a(475));var o=Co;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(i.href),f=t.querySelector(Ao(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=lc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,rn(f);return}f=t.ownerDocument||t,i=bv(i),(u=sr.get(u))&&of(i,u),f=f.createElement("link"),rn(f);var E=f;E._p=new Promise(function(T,z){E.onload=T,E.onerror=z}),Mn(f,"link",i),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=lc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Qb(){if(Co===null)throw Error(a(475));var t=Co;return t.stylesheets&&t.count===0&&cf(t,t.stylesheets),0<t.count?function(n){var i=setTimeout(function(){if(t.stylesheets&&cf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)cf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function cf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(Zb,t),cc=null,lc.call(t))}function Zb(t,n){if(!(n.state.loading&4)){var i=cc.get(t);if(i)var o=i.get(null);else{i=new Map,cc.set(t,i);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var E=u[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(i.set(E.dataset.precedence,E),o=E)}o&&i.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),f=i.get(E)||o,f===o&&i.set(null,u),i.set(E,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:I,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $b(t,n,i,o,u,f,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function wv(t,n,i,o,u,f,E,T,z,ee,ve,xe){return t=new $b(t,n,i,E,T,z,ee,xe),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=Gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:i,cache:n},qu(f),t}function Tv(t){return t?(t=Wa,t):Wa}function Av(t,n,i,o,u,f){u=Tv(u),o.context===null?o.context=u:o.pendingContext=u,o=Li(n),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=Di(t,o,n),i!==null&&(Jn(i,t,n),ao(i,t,n))}function Rv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function uf(t,n){Rv(t,n),(t=t.alternate)&&Rv(t,n)}function Cv(t){if(t.tag===13){var n=ja(t,67108864);n!==null&&Jn(n,t,67108864),uf(t,67108864)}}var uc=!0;function ex(t,n,i,o){var u=U.T;U.T=null;var f=H.p;try{H.p=2,df(t,n,i,o)}finally{H.p=f,U.T=u}}function tx(t,n,i,o){var u=U.T;U.T=null;var f=H.p;try{H.p=8,df(t,n,i,o)}finally{H.p=f,U.T=u}}function df(t,n,i,o){if(uc){var u=ff(o);if(u===null)Qd(t,n,o,dc,i),Nv(t,o);else if(rx(u,t,n,i,o))o.stopPropagation();else if(Nv(t,o),n&4&&-1<nx.indexOf(t)){for(;u!==null;){var f=jr(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=je(f.pendingLanes);if(E!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var z=1<<31-Ie(E);T.entanglements[1]|=z,E&=~z}Nr(f),(Nt&6)===0&&(Kl=Ut()+500,Eo(0))}}break;case 13:T=ja(f,2),T!==null&&Jn(T,f,2),Jl(),uf(f,2)}if(f=ff(o),f===null&&Qd(t,n,o,dc,i),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qd(t,n,o,null,i)}}function ff(t){return t=gu(t),hf(t)}var dc=null;function hf(t){if(dc=null,t=pr(t),t!==null){var n=c(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Xt:return 2;case yt:return 8;case Tt:case We:return 32;case D:return 268435456;default:return 32}default:return 32}}var pf=!1,Xi=null,qi=null,Ki=null,No=new Map,Lo=new Map,Yi=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(t,n){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Do(t,n,i,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=jr(n),n!==null&&Cv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function rx(t,n,i,o,u){switch(n){case"focusin":return Xi=Do(Xi,t,n,i,o,u),!0;case"dragenter":return qi=Do(qi,t,n,i,o,u),!0;case"mouseover":return Ki=Do(Ki,t,n,i,o,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Do(No.get(f)||null,t,n,i,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Do(Lo.get(f)||null,t,n,i,o,u)),!0}return!1}function Lv(t){var n=pr(t.target);if(n!==null){var i=c(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,hr(t.priority,function(){if(i.tag===13){var o=Yn();o=Qe(o);var u=ja(i,o);u!==null&&Jn(u,i,o),uf(i,o)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=ff(t.nativeEvent);if(i===null){i=t.nativeEvent;var o=new i.constructor(i.type,i);mu=o,i.target.dispatchEvent(o),mu=null}else return n=jr(i),n!==null&&Cv(n),t.blockedOn=i,!1;n.shift()}return!0}function Dv(t,n,i){fc(t)&&i.delete(n)}function ix(){pf=!1,Xi!==null&&fc(Xi)&&(Xi=null),qi!==null&&fc(qi)&&(qi=null),Ki!==null&&fc(Ki)&&(Ki=null),No.forEach(Dv),Lo.forEach(Dv)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,pf||(pf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ix)))}var pc=null;function Uv(t){pc!==t&&(pc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var i=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(hf(o||i)===null)continue;break}var f=jr(i);f!==null&&(t.splice(n,3),n-=3,fd(f,{pending:!0,data:u,method:i.method,action:o},o,u))}}))}function Uo(t){function n(z){return hc(z,t)}Xi!==null&&hc(Xi,t),qi!==null&&hc(qi,t),Ki!==null&&hc(Ki,t),No.forEach(n),Lo.forEach(n);for(var i=0;i<Yi.length;i++){var o=Yi[i];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Yi.length&&(i=Yi[0],i.blockedOn===null);)Lv(i),i.blockedOn===null&&Yi.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var u=i[o],f=i[o+1],E=u[vn]||null;if(typeof f=="function")E||Uv(i);else if(E){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,E=f[vn]||null)T=E.formAction;else if(hf(u)!==null)continue}else T=E.action;typeof T=="function"?i[o+1]=T:(i.splice(o,3),o-=3),Uv(i)}}}function mf(t){this._internalRoot=t}mc.prototype.render=mf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var i=n.current,o=Yn();Av(i,o,t,n,null,null)},mc.prototype.unmount=mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Av(t.current,2,null,t,null,null),Jl(),n[wi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=xt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Yi.length&&n!==0&&n<Yi[i].priority;i++);Yi.splice(i,0,t),i===0&&Lv(t)}};var Iv=e.version;if(Iv!=="19.1.0")throw Error(a(527,Iv,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ax={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{me=gc.inject(ax),he=gc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(a(299));var i=!1,o="",u=Qm,f=Zm,E=$m,T=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=wv(t,1,!1,null,null,i,o,u,f,E,T,null),t[wi]=n.current,Jd(t),new mf(n)},ko.hydrateRoot=function(t,n,i){if(!l(t))throw Error(a(299));var o=!1,u="",f=Qm,E=Zm,T=$m,z=null,ee=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(E=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(z=i.unstable_transitionCallbacks),i.formState!==void 0&&(ee=i.formState)),n=wv(t,1,!0,n,i??null,o,u,f,E,T,z,ee),n.context=Tv(null),i=n.current,o=Yn(),o=Qe(o),u=Li(o),u.callback=null,Di(i,u,o),i=o,n.current.lanes=i,Fe(n,i),Nr(n),t[wi]=n.current,Jd(t),new mc(n)},ko.version="19.1.0",ko}var Yv;function vx(){if(Yv)return gf.exports;Yv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gf.exports=gx(),gf.exports}var _x=vx(),Fo={},Jv;function yx(){if(Jv)return Fo;Jv=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=d,Fo.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function d(g,b){const x=new c,C=g.length;if(C<2)return x;const _=(b==null?void 0:b.decode)||v;let y=0;do{const A=g.indexOf("=",y);if(A===-1)break;const I=g.indexOf(";",y),N=I===-1?C:I;if(A>N){y=g.lastIndexOf(";",A-1)+1;continue}const F=p(g,y,A),k=m(g,A,F),O=g.slice(F,k);if(x[O]===void 0){let M=p(g,A+1,N),P=m(g,N,M);const ue=_(g.slice(M,P));x[O]=ue}y=N+1}while(y<C);return x}function p(g,b,x){do{const C=g.charCodeAt(b);if(C!==32&&C!==9)return b}while(++b<x);return x}function m(g,b,x){for(;b>x;){const C=g.charCodeAt(--b);if(C!==32&&C!==9)return b+1}return x}function h(g,b,x){const C=(x==null?void 0:x.encode)||encodeURIComponent;if(!s.test(g))throw new TypeError(`argument name is invalid: ${g}`);const _=C(b);if(!e.test(_))throw new TypeError(`argument val is invalid: ${b}`);let y=g+"="+_;if(!x)return y;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);y+="; Max-Age="+x.maxAge}if(x.domain){if(!r.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);y+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);y+="; Path="+x.path}if(x.expires){if(!S(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);y+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(y+="; HttpOnly"),x.secure&&(y+="; Secure"),x.partitioned&&(y+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":y+="; Priority=Low";break;case"medium":y+="; Priority=Medium";break;case"high":y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":y+="; SameSite=Strict";break;case"lax":y+="; SameSite=Lax";break;case"none":y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return y}function v(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function S(g){return l.call(g)==="[object Date]"}return Fo}yx();var Qv="popstate";function bx(s={}){function e(l,c){let{pathname:d="/",search:p="",hash:m=""}=Ua(l.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),eh("",{pathname:d,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(l,c){let d=l.document.querySelector("base"),p="";if(d&&d.getAttribute("href")){let m=l.location.href,h=m.indexOf("#");p=h===-1?m:m.slice(0,h)}return p+"#"+(typeof c=="string"?c:Yo(c))}function a(l,c){Mr(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Sx(e,r,a,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Mr(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function Zv(s,e){return{usr:s.state,key:s.key,idx:e}}function eh(s,e,r=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ua(e):e,state:r,key:e&&e.key||a||xx()}}function Yo({pathname:s="/",search:e="",hash:r=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(s+=r.charAt(0)==="#"?r:"#"+r),s}function Ua(s){let e={};if(s){let r=s.indexOf("#");r>=0&&(e.hash=s.substring(r),s=s.substring(0,r));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function Sx(s,e,r,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,d=l.history,p="POP",m=null,h=v();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function v(){return(d.state||{idx:null}).idx}function S(){p="POP";let _=v(),y=_==null?null:_-h;h=_,m&&m({action:p,location:C.location,delta:y})}function g(_,y){p="PUSH";let A=eh(C.location,_,y);r&&r(A,_),h=v()+1;let I=Zv(A,h),N=C.createHref(A);try{d.pushState(I,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}c&&m&&m({action:p,location:C.location,delta:1})}function b(_,y){p="REPLACE";let A=eh(C.location,_,y);r&&r(A,_),h=v();let I=Zv(A,h),N=C.createHref(A);d.replaceState(I,"",N),c&&m&&m({action:p,location:C.location,delta:0})}function x(_){return Ex(_)}let C={get action(){return p},get location(){return s(l,d)},listen(_){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Qv,S),m=_,()=>{l.removeEventListener(Qv,S),m=null}},createHref(_){return e(l,_)},createURL:x,encodeLocation(_){let y=x(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:b,go(_){return d.go(_)}};return C}function Ex(s,e=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(r,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Yo(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function a0(s,e,r="/"){return Mx(s,e,r,!1)}function Mx(s,e,r,a){let l=typeof e=="string"?Ua(e):e,c=yi(l.pathname||"/",r);if(c==null)return null;let d=s0(s);wx(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=kx(c);p=Ux(d[m],h,a)}return p}function s0(s,e=[],r=[],a=""){let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Qt(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let h=gi([a,m.relativePath]),v=r.concat(m);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),s0(c.children,e,v,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:Lx(h,c.index),routesMeta:v})};return s.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of o0(c.path))l(c,d,m)}),e}function o0(s){let e=s.split("/");if(e.length===0)return[];let[r,...a]=e,l=r.endsWith("?"),c=r.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let d=o0(a.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function wx(s){s.sort((e,r)=>e.score!==r.score?r.score-e.score:Dx(e.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Tx=/^:[\w-]+$/,Ax=3,Rx=2,Cx=1,Px=10,Nx=-2,$v=s=>s==="*";function Lx(s,e){let r=s.split("/"),a=r.length;return r.some($v)&&(a+=Nx),e&&(a+=Rx),r.filter(l=>!$v(l)).reduce((l,c)=>l+(Tx.test(c)?Ax:c===""?Cx:Px),a)}function Dx(s,e){return s.length===e.length&&s.slice(0,-1).every((r,a)=>r===e[a])?s[s.length-1]-e[e.length-1]:0}function Ux(s,e,r=!1){let{routesMeta:a}=s,l={},c="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],h=p===a.length-1,v=c==="/"?e:e.slice(c.length)||"/",S=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),g=m.route;if(!S&&h&&r&&!a[a.length-1].route.index&&(S=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!S)return null;Object.assign(l,S.params),d.push({params:l,pathname:gi([c,S.pathname]),pathnameBase:Bx(gi([c,S.pathnameBase])),route:g}),S.pathnameBase!=="/"&&(c=gi([c,S.pathnameBase]))}return d}function $c(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,a]=Ix(s.path,s.caseSensitive,s.end),l=e.match(r);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:a.reduce((m,{paramName:h,isOptional:v},S)=>{if(h==="*"){let b=p[S]||"";d=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const g=p[S];return v&&!g?m[h]=void 0:m[h]=(g||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:s}}function Ix(s,e=!1,r=!0){Mr(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function kx(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mr(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function yi(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,a=s.charAt(r);return a&&a!=="/"?null:s.slice(r)||"/"}function Fx(s,e="/"){let{pathname:r,search:a="",hash:l=""}=typeof s=="string"?Ua(s):s;return{pathname:r?r.startsWith("/")?r:Ox(r,e):e,search:Hx(a),hash:Vx(l)}}function Ox(s,e){let r=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function _f(s,e,r,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zx(s){return s.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function l0(s){let e=zx(s);return e.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase)}function c0(s,e,r,a=!1){let l;typeof s=="string"?l=Ua(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),_f("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),_f("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),_f("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=r;else{let S=e.length-1;if(!a&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),S-=1;l.pathname=g.join("/")}p=S>=0?e[S]:"/"}let m=Fx(l,p),h=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var gi=s=>s.join("/").replace(/\/\/+/g,"/"),Bx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Vx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Gx(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var jx=["GET",...u0];new Set(jx);var Fs=de.createContext(null);Fs.displayName="DataRouter";var lu=de.createContext(null);lu.displayName="DataRouterState";var d0=de.createContext({isTransitioning:!1});d0.displayName="ViewTransition";var Wx=de.createContext(new Map);Wx.displayName="Fetchers";var Xx=de.createContext(null);Xx.displayName="Await";var Hr=de.createContext(null);Hr.displayName="Navigation";var $o=de.createContext(null);$o.displayName="Location";var Mi=de.createContext({outlet:null,matches:[],isDataRoute:!1});Mi.displayName="Route";var Jh=de.createContext(null);Jh.displayName="RouteError";function qx(s,{relative:e}={}){Qt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=de.useContext(Hr),{hash:l,pathname:c,search:d}=tl(s,{relative:e}),p=c;return r!=="/"&&(p=c==="/"?r:gi([r,c])),a.createHref({pathname:p,search:d,hash:l})}function el(){return de.useContext($o)!=null}function Vr(){return Qt(el(),"useLocation() may be used only in the context of a <Router> component."),de.useContext($o).location}var f0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function h0(s){de.useContext(Hr).static||de.useLayoutEffect(s)}function p0(){let{isDataRoute:s}=de.useContext(Mi);return s?sS():Kx()}function Kx(){Qt(el(),"useNavigate() may be used only in the context of a <Router> component.");let s=de.useContext(Fs),{basename:e,navigator:r}=de.useContext(Hr),{matches:a}=de.useContext(Mi),{pathname:l}=Vr(),c=JSON.stringify(l0(a)),d=de.useRef(!1);return h0(()=>{d.current=!0}),de.useCallback((p,m={})=>{if(Mr(d.current,f0),!d.current)return;if(typeof p=="number"){r.go(p);return}let h=c0(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:gi([e,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[e,r,c,l,s])}de.createContext(null);function tl(s,{relative:e}={}){let{matches:r}=de.useContext(Mi),{pathname:a}=Vr(),l=JSON.stringify(l0(r));return de.useMemo(()=>c0(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function Yx(s,e){return m0(s,e)}function m0(s,e,r,a){var l;Qt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=de.useContext(Hr),{matches:d}=de.useContext(Mi),p=d[d.length-1],m=p?p.params:{},h=p?p.pathname:"/",v=p?p.pathnameBase:"/",S=p&&p.route;{let A=S&&S.path||"";g0(h,!S||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let g=Vr(),b;if(e){let A=typeof e=="string"?Ua(e):e;Qt(v==="/"||((l=A.pathname)==null?void 0:l.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=g;let x=b.pathname||"/",C=x;if(v!=="/"){let A=v.replace(/^\//,"").split("/");C="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=a0(s,{pathname:C});Mr(S||_!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Mr(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=eS(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:gi([v,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?v:gi([v,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,r,a);return e&&y?de.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},y):y}function Jx(){let s=aS(),e=Gx(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:c},"ErrorBoundary")," or"," ",de.createElement("code",{style:c},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),r?de.createElement("pre",{style:l},r):null,d)}var Qx=de.createElement(Jx,null),Zx=class extends de.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?de.createElement(Mi.Provider,{value:this.props.routeContext},de.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $x({routeContext:s,match:e,children:r}){let a=de.useContext(Fs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Mi.Provider,{value:s},r)}function eS(s,e=[],r=null,a=null){if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r==null?void 0:r.errors;if(c!=null){let m=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);Qt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,p=-1;if(r)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:v,errors:S}=r,g=h.route.loader&&!v.hasOwnProperty(h.route.id)&&(!S||S[h.route.id]===void 0);if(h.route.lazy||g){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,h,v)=>{let S,g=!1,b=null,x=null;r&&(S=c&&h.route.id?c[h.route.id]:void 0,b=h.route.errorElement||Qx,d&&(p<0&&v===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,x=null):p===v&&(g=!0,x=h.route.hydrateFallbackElement||null)));let C=e.concat(l.slice(0,v+1)),_=()=>{let y;return S?y=b:g?y=x:h.route.Component?y=de.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=m,de.createElement($x,{match:h,routeContext:{outlet:m,matches:C,isDataRoute:r!=null},children:y})};return r&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?de.createElement(Zx,{location:r.location,revalidation:r.revalidation,component:b,error:S,children:_(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):_()},null)}function Qh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tS(s){let e=de.useContext(Fs);return Qt(e,Qh(s)),e}function nS(s){let e=de.useContext(lu);return Qt(e,Qh(s)),e}function rS(s){let e=de.useContext(Mi);return Qt(e,Qh(s)),e}function Zh(s){let e=rS(s),r=e.matches[e.matches.length-1];return Qt(r.route.id,`${s} can only be used on routes that contain a unique "id"`),r.route.id}function iS(){return Zh("useRouteId")}function aS(){var s;let e=de.useContext(Jh),r=nS("useRouteError"),a=Zh("useRouteError");return e!==void 0?e:(s=r.errors)==null?void 0:s[a]}function sS(){let{router:s}=tS("useNavigate"),e=Zh("useNavigate"),r=de.useRef(!1);return h0(()=>{r.current=!0}),de.useCallback(async(a,l={})=>{Mr(r.current,f0),r.current&&(typeof a=="number"?s.navigate(a):await s.navigate(a,{fromRouteId:e,...l}))},[s,e])}var e_={};function g0(s,e,r){!e&&!e_[s]&&(e_[s]=!0,Mr(!1,r))}de.memo(oS);function oS({routes:s,future:e,state:r}){return m0(s,void 0,r,e)}function v0(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lS({basename:s="/",children:e=null,location:r,navigationType:a="POP",navigator:l,static:c=!1}){Qt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),p=de.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof r=="string"&&(r=Ua(r));let{pathname:m="/",search:h="",hash:v="",state:S=null,key:g="default"}=r,b=de.useMemo(()=>{let x=yi(m,d);return x==null?null:{location:{pathname:x,search:h,hash:v,state:S,key:g},navigationType:a}},[d,m,h,v,S,g,a]);return Mr(b!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:de.createElement(Hr.Provider,{value:p},de.createElement($o.Provider,{children:e,value:b}))}function cS({children:s,location:e}){return Yx(th(s),e)}function th(s,e=[]){let r=[];return de.Children.forEach(s,(a,l)=>{if(!de.isValidElement(a))return;let c=[...e,l];if(a.type===de.Fragment){r.push.apply(r,th(a.props.children,c));return}Qt(a.type===v0,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=th(a.props.children,c)),r.push(d)}),r}var Wc="get",Xc="application/x-www-form-urlencoded";function cu(s){return s!=null&&typeof s.tagName=="string"}function uS(s){return cu(s)&&s.tagName.toLowerCase()==="button"}function dS(s){return cu(s)&&s.tagName.toLowerCase()==="form"}function fS(s){return cu(s)&&s.tagName.toLowerCase()==="input"}function hS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function pS(s,e){return s.button===0&&(!e||e==="_self")&&!hS(s)}var vc=null;function mS(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var gS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yf(s){return s!=null&&!gS.has(s)?(Mr(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xc}"`),null):s}function vS(s,e){let r,a,l,c,d;if(dS(s)){let p=s.getAttribute("action");a=p?yi(p,e):null,r=s.getAttribute("method")||Wc,l=yf(s.getAttribute("enctype"))||Xc,c=new FormData(s)}else if(uS(s)||fS(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(a=m?yi(m,e):null,r=s.getAttribute("formmethod")||p.getAttribute("method")||Wc,l=yf(s.getAttribute("formenctype"))||yf(p.getAttribute("enctype"))||Xc,c=new FormData(p,s),!mS()){let{name:h,type:v,value:S}=s;if(v==="image"){let g=h?`${h}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else h&&c.append(h,S)}}else{if(cu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Wc,a=null,l=Xc,d=s}return c&&l==="text/plain"&&(d=c,c=void 0),{action:a,method:r.toLowerCase(),encType:l,formData:c,body:d}}function $h(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function _S(s,e){if(s.id in e)return e[s.id];try{let r=await import(s.module);return e[s.id]=r,r}catch(r){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function bS(s,e,r){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await _S(c,r);return d.links?d.links():[]}return[]}));return MS(a.flat(1).filter(yS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t_(s,e,r,a,l,c){let d=(m,h)=>r[h]?m.route.id!==r[h].route.id:!0,p=(m,h)=>{var v;return r[h].pathname!==m.pathname||((v=r[h].route.path)==null?void 0:v.endsWith("*"))&&r[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>d(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var v;let S=a.routes[m.route.id];if(!S||!S.hasLoader)return!1;if(d(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xS(s,e,{includeHydrateFallback:r}={}){return SS(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function SS(s){return[...new Set(s)]}function ES(s){let e={},r=Object.keys(s).sort();for(let a of r)e[a]=s[a];return e}function MS(s,e){let r=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(ES(l));return r.has(c)||(r.add(c),a.push({key:c,link:l})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wS=new Set([100,101,204,205]);function TS(s,e){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname="_root.data":e&&yi(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function _0(){let s=de.useContext(Fs);return $h(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function AS(){let s=de.useContext(lu);return $h(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ep=de.createContext(void 0);ep.displayName="FrameworkContext";function y0(){let s=de.useContext(ep);return $h(s,"You must render this element inside a <HydratedRouter> element"),s}function RS(s,e){let r=de.useContext(ep),[a,l]=de.useState(!1),[c,d]=de.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:S}=e,g=de.useRef(null);de.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let C=y=>{y.forEach(A=>{d(A.isIntersecting)})},_=new IntersectionObserver(C,{threshold:.5});return g.current&&_.observe(g.current),()=>{_.disconnect()}}},[s]),de.useEffect(()=>{if(a){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[a]);let b=()=>{l(!0)},x=()=>{l(!1),d(!1)};return r?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Oo(p,b),onBlur:Oo(m,x),onMouseEnter:Oo(h,b),onMouseLeave:Oo(v,x),onTouchStart:Oo(S,b)}]:[!1,g,{}]}function Oo(s,e){return r=>{s&&s(r),r.defaultPrevented||e(r)}}function CS({page:s,...e}){let{router:r}=_0(),a=de.useMemo(()=>a0(r.routes,s,r.basename),[r.routes,s,r.basename]);return a?de.createElement(NS,{page:s,matches:a,...e}):null}function PS(s){let{manifest:e,routeModules:r}=y0(),[a,l]=de.useState([]);return de.useEffect(()=>{let c=!1;return bS(s,e,r).then(d=>{c||l(d)}),()=>{c=!0}},[s,e,r]),a}function NS({page:s,matches:e,...r}){let a=Vr(),{manifest:l,routeModules:c}=y0(),{basename:d}=_0(),{loaderData:p,matches:m}=AS(),h=de.useMemo(()=>t_(s,e,m,l,a,"data"),[s,e,m,l,a]),v=de.useMemo(()=>t_(s,e,m,l,a,"assets"),[s,e,m,l,a]),S=de.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let x=new Set,C=!1;if(e.forEach(y=>{var A;let I=l.routes[y.route.id];!I||!I.hasLoader||(!h.some(N=>N.route.id===y.route.id)&&y.route.id in p&&(A=c[y.route.id])!=null&&A.shouldRevalidate||I.hasClientLoader?C=!0:x.add(y.route.id))}),x.size===0)return[];let _=TS(s,d);return C&&x.size>0&&_.searchParams.set("_routes",e.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[_.pathname+_.search]},[d,p,a,l,h,e,s,c]),g=de.useMemo(()=>xS(v,l),[v,l]),b=PS(v);return de.createElement(de.Fragment,null,S.map(x=>de.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),g.map(x=>de.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),b.map(({key:x,link:C})=>de.createElement("link",{key:x,...C})))}function LS(...s){return e=>{s.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var b0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b0&&(window.__reactRouterVersion="7.6.2")}catch{}function DS({basename:s,children:e,window:r}){let a=de.useRef();a.current==null&&(a.current=bx({window:r,v5Compat:!0}));let l=a.current,[c,d]=de.useState({action:l.action,location:l.location}),p=de.useCallback(m=>{de.startTransition(()=>d(m))},[d]);return de.useLayoutEffect(()=>l.listen(p),[l,p]),de.createElement(lS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eu=de.forwardRef(function({onClick:s,discover:e="render",prefetch:r="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:h,viewTransition:v,...S},g){let{basename:b}=de.useContext(Hr),x=typeof m=="string"&&x0.test(m),C,_=!1;if(typeof m=="string"&&x&&(C=m,b0))try{let M=new URL(window.location.href),P=m.startsWith("//")?new URL(M.protocol+m):new URL(m),ue=yi(P.pathname,b);P.origin===M.origin&&ue!=null?m=ue+P.search+P.hash:_=!0}catch{Mr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=qx(m,{relative:a}),[A,I,N]=RS(r,S),F=FS(m,{replace:c,state:d,target:p,preventScrollReset:h,relative:a,viewTransition:v});function k(M){s&&s(M),M.defaultPrevented||F(M)}let O=de.createElement("a",{...S,...N,href:C||y,onClick:_||l?s:k,ref:LS(g,I),target:p,"data-discover":!x&&e==="render"?"true":void 0});return A&&!x?de.createElement(de.Fragment,null,O,de.createElement(CS,{page:y})):O});eu.displayName="Link";var US=de.forwardRef(function({"aria-current":s="page",caseSensitive:e=!1,className:r="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...m},h){let v=tl(c,{relative:m.relative}),S=Vr(),g=de.useContext(lu),{navigator:b,basename:x}=de.useContext(Hr),C=g!=null&&VS(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,y=S.pathname,A=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;e||(y=y.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&x&&(A=yi(A,x)||A);const I=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let N=y===_||!a&&y.startsWith(_)&&y.charAt(I)==="/",F=A!=null&&(A===_||!a&&A.startsWith(_)&&A.charAt(_.length)==="/"),k={isActive:N,isPending:F,isTransitioning:C},O=N?s:void 0,M;typeof r=="function"?M=r(k):M=[r,N?"active":null,F?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return de.createElement(eu,{...m,"aria-current":O,className:M,ref:h,style:P,to:c,viewTransition:d},typeof p=="function"?p(k):p)});US.displayName="NavLink";var IS=de.forwardRef(({discover:s="render",fetcherKey:e,navigate:r,reloadDocument:a,replace:l,state:c,method:d=Wc,action:p,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:S,...g},b)=>{let x=BS(),C=HS(p,{relative:h}),_=d.toLowerCase()==="get"?"get":"post",y=typeof p=="string"&&x0.test(p),A=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let N=I.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||d;x(N||I.currentTarget,{fetcherKey:e,method:F,navigate:r,replace:l,state:c,relative:h,preventScrollReset:v,viewTransition:S})};return de.createElement("form",{ref:b,method:_,action:C,onSubmit:a?m:A,...g,"data-discover":!y&&s==="render"?"true":void 0})});IS.displayName="Form";function kS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S0(s){let e=de.useContext(Fs);return Qt(e,kS(s)),e}function FS(s,{target:e,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:d}={}){let p=p0(),m=Vr(),h=tl(s,{relative:c});return de.useCallback(v=>{if(pS(v,e)){v.preventDefault();let S=r!==void 0?r:Yo(m)===Yo(h);p(s,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[m,p,h,r,a,e,s,l,c,d])}var OS=0,zS=()=>`__${String(++OS)}__`;function BS(){let{router:s}=S0("useSubmit"),{basename:e}=de.useContext(Hr),r=iS();return de.useCallback(async(a,l={})=>{let{action:c,method:d,encType:p,formData:m,body:h}=vS(a,e);if(l.navigate===!1){let v=l.fetcherKey||zS();await s.fetch(v,r,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||d,formEncType:l.encType||p,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||d,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,r])}function HS(s,{relative:e}={}){let{basename:r}=de.useContext(Hr),a=de.useContext(Mi);Qt(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...tl(s||".",{relative:e})},d=Vr();if(s==null){c.search=d.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(h=>h==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let h=p.toString();c.search=h?`?${h}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:gi([r,c.pathname])),Yo(c)}function VS(s,e={}){let r=de.useContext(d0);Qt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=S0("useViewTransitionState"),l=tl(s,{relative:e.relative});if(!r.isTransitioning)return!1;let c=yi(r.currentLocation.pathname,a)||r.currentLocation.pathname,d=yi(r.nextLocation.pathname,a)||r.nextLocation.pathname;return $c(l.pathname,d)!=null||$c(l.pathname,c)!=null}[...wS];const GS=()=>{const{pathname:s}=Vr();return de.useEffect(()=>{s==="/"&&window.scrollTo(0,0)},[s]),null},jS=[{id:"home",path:"/"},{id:"services",path:"/"},{id:"philosophy",path:"/"},{id:"work",path:"/projects"},{id:"reviews",path:"/reviews"},{id:"skills",path:"/reviews"},{id:"contact",path:"/contact"}],WS=96;function n_(){const s=window.scrollY+WS;let e="/";for(const{id:r,path:a}of jS){const l=document.getElementById(r);l&&window.scrollY+l.getBoundingClientRect().top<=s&&(e=a)}return e}function XS(){const[s,e]=de.useState(n_);return de.useEffect(()=>{let r=0;const a=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{e(n_())})};a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);const l=new ResizeObserver(a);return l.observe(document.documentElement),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",a),window.removeEventListener("resize",a),l.disconnect()}},[]),s}const qS=[{path:"/",label:"Home"},{path:"/projects",label:"Work"},{path:"/reviews",label:"Reviews"},{path:"/contact",label:"Contact"}],KS=()=>{const s=Vr(),e=XS(),[r,a]=de.useState(!1),[l,c]=de.useState(!0);return de.useEffect(()=>{a(!1)},[s.pathname]),de.useEffect(()=>{const d=document.querySelector(".hero--3d");if(!d){c(!1);return}const p=()=>{const m=d.getBoundingClientRect().bottom;c(m>48)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[s.pathname]),B.jsx("header",{className:`header${l?" header--dark":""}`,children:B.jsxs("div",{className:"header__inner container",children:[B.jsxs(eu,{to:"/",className:"header__brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[B.jsx("span",{className:"header__brand-name",children:"Taliba Sadiq"}),B.jsx("span",{className:"header__brand-tag",children:"Software Architect & AI Engineer"})]}),B.jsxs("button",{className:`header__burger${r?" header__burger--open":""}`,onClick:()=>a(d=>!d),"aria-label":r?"Close menu":"Open menu","aria-expanded":r,children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]}),B.jsx("nav",{className:`header__nav${r?" header__nav--open":""}`,"aria-label":"Main navigation",children:B.jsx("ul",{className:"header__list",children:qS.map(({path:d,label:p})=>{const m=e===d;return B.jsx("li",{children:B.jsx(eu,{to:d,className:`header__link ${m?"header__link--active":""}`,"aria-current":m?"page":void 0,onClick:()=>{a(!1),d==="/"&&s.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:p})},d)})})})]})})},r_="",YS="https://api.web3forms.com/submit",JS=()=>{const[s,e]=de.useState("idle"),[r,a]=de.useState(""),[l,c]=de.useState(!1),d=de.useCallback(async p=>{if(p.preventDefault(),a(""),!r_.trim()){e("error"),a("Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com).");return}const m=p.currentTarget,h=new FormData(m),v=String(h.get("name")||"").trim(),S=String(h.get("email")||"").trim(),g=String(h.get("company")||"").trim(),b=String(h.get("phone")||"").trim(),x=String(h.get("project_type")||"").trim(),C=String(h.get("timeline")||"").trim(),_=String(h.get("budget")||"").trim(),y=String(h.get("details")||"").trim();if(String(h.get("botcheck")||"").trim())return;if(!v||!S||!y){a("Please fill in your name, email, and project details.");return}const A=[g&&`Company / org: ${g}`,b&&`Phone: ${b}`,x&&`Project type: ${x}`,C&&`Timeline: ${C}`,_&&`Budget / engagement: ${_}`,"","Project details:",y].filter(Boolean).join(`
`);e("sending");try{const I=await fetch(YS,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:r_,name:v,email:S,...b?{phone:b}:{},subject:`Portfolio inquiry: ${x||"Project"} (${v})`,message:A})}),N=await I.json().catch(()=>({}));I.ok&&N.success!==!1?(e("success"),m.reset()):(e("error"),a(N.message||"Something went wrong. Please try again in a moment."))}catch{e("error"),a("Network error. Check your connection and try again.")}},[]);return B.jsx("section",{id:"contact",className:"section section--contact contact-section contact-shell reveal","aria-labelledby":"contact-heading",children:B.jsxs("div",{className:"container contact-shell__inner",children:[B.jsxs("header",{className:"contact-shell__intro",children:[B.jsx("p",{className:"contact-shell__eyebrow",children:"Contact"}),B.jsx("h2",{id:"contact-heading",className:"contact-shell__title",children:"Let's build something together"}),B.jsx("p",{className:"contact-shell__lead",children:"Have a product that needs architecture, AI integration, or full-stack development? Tell me what you're working on. I'll reply within one business day."}),B.jsxs("ul",{className:"contact-shell__trust",children:[B.jsx("li",{children:"Specific questions get faster answers"}),B.jsx("li",{children:"Mention in the details if you need an NDA first"}),B.jsx("li",{children:"Project inquiries only (no recruiter blasts)"})]})]}),B.jsx("div",{className:"contact-form-panel",children:s==="success"?B.jsxs("div",{className:"contact-form-panel__success",role:"status",children:[B.jsx("p",{className:"contact-form-panel__success-icon","aria-hidden":"true",children:"✓"}),B.jsx("h3",{className:"contact-form-panel__success-title",children:"Message sent"}),B.jsx("p",{className:"contact-form-panel__success-text",children:"Your note is in my inbox. I'll reply in the same thread."}),B.jsx("button",{type:"button",className:"btn btn--primary contact-form-panel__reset",onClick:()=>e("idle"),children:"Send another message"})]}):B.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[B.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Name *"}),B.jsx("input",{className:"contact-form__input",name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your name"})]}),B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Email *"}),B.jsx("input",{className:"contact-form__input",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"you@company.com"})]})]}),B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"What are you working on? *"}),B.jsx("textarea",{className:"contact-form__textarea",name:"details",required:!0,rows:5,placeholder:"Stack, goals, constraints, and what done looks like."})]}),!l&&B.jsx("button",{type:"button",className:"contact-form__toggle",onClick:()=>c(!0),children:"+ Add more details (company, timeline, budget…)"}),l&&B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Company / organization"}),B.jsx("input",{className:"contact-form__input",name:"company",type:"text",autoComplete:"organization",placeholder:"Optional"})]}),B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Phone (optional)"}),B.jsx("input",{className:"contact-form__input",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"+1 ..."})]})]}),B.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Project type"}),B.jsxs("select",{className:"contact-form__input contact-form__select",name:"project_type",defaultValue:"",children:[B.jsx("option",{value:"",children:"Select..."}),B.jsx("option",{value:"New build: web app",children:"New build: web app"}),B.jsx("option",{value:"New build: marketing site",children:"New build: marketing site"}),B.jsx("option",{value:"New build: mobile app",children:"New build: mobile app"}),B.jsx("option",{value:"New build: mobile & web",children:"New build: mobile & web"}),B.jsx("option",{value:"Refactor / stabilize codebase",children:"Refactor / stabilize codebase"}),B.jsx("option",{value:"Performance / reliability",children:"Performance / reliability"}),B.jsx("option",{value:"Architecture / technical review",children:"Architecture / technical review"}),B.jsx("option",{value:"AI / product integration",children:"AI / product integration"}),B.jsx("option",{value:"Other",children:"Other"})]})]}),B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Ideal timeline"}),B.jsxs("select",{className:"contact-form__input contact-form__select",name:"timeline",defaultValue:"",children:[B.jsx("option",{value:"",children:"Optional"}),B.jsx("option",{value:"Planning phase / TBD",children:"Planning phase / TBD"}),B.jsx("option",{value:"Rush (under 2 weeks)",children:"Rush (under 2 weeks)"}),B.jsx("option",{value:"2-4 weeks",children:"2-4 weeks"}),B.jsx("option",{value:"1-3 months",children:"1-3 months"}),B.jsx("option",{value:"3-6 months",children:"3-6 months"}),B.jsx("option",{value:"6+ months or ongoing",children:"6+ months or ongoing"}),B.jsx("option",{value:"Flexible / open schedule",children:"Flexible / open schedule"})]})]})]}),B.jsxs("label",{className:"contact-form__field",children:[B.jsx("span",{className:"contact-form__label",children:"Budget / engagement (optional)"}),B.jsx("input",{className:"contact-form__input",name:"budget",type:"text",placeholder:"e.g. fixed scope, monthly retainer, TBD"})]})]}),B.jsxs("label",{className:"contact-form__hp","aria-hidden":"true",children:[B.jsx("span",{children:"Leave empty"}),B.jsx("input",{type:"text",name:"botcheck",tabIndex:-1,autoComplete:"off"})]}),s==="error"&&r&&B.jsx("p",{className:"contact-form__error",role:"alert",children:r}),B.jsx("button",{type:"submit",className:"btn btn--primary contact-form__submit",disabled:s==="sending",children:s==="sending"?"Sending...":"Send message"})]})})]})})};function QS(){de.useEffect(()=>{const s=document.querySelectorAll(".reveal");if(!s.length)return;const e=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("reveal--visible"),e.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return s.forEach(r=>e.observe(r)),()=>e.disconnect()},[])}const ZS={"/projects":"work","/about":"home","/reviews":"reviews","/contact":"contact"};function $S(){const s=Vr(),e=p0();QS();const r=de.useCallback((a,l)=>{const c=document.getElementById(a);c?c.scrollIntoView({behavior:"smooth"}):e(l)},[e]);return de.useLayoutEffect(()=>{var a;const l=ZS[s.pathname];l&&((a=document.getElementById(l))==null||a.scrollIntoView({behavior:"smooth"}))},[s.pathname]),{scrollTo:r}}/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const tp="183",e1=0,i_=1,t1=2,qc=1,n1=2,qo=3,aa=0,Gn=1,pi=2,vi=0,Ps=1,tu=2,a_=3,s_=4,r1=5,Ca=100,i1=101,a1=102,s1=103,o1=104,l1=200,c1=201,u1=202,d1=203,nh=204,rh=205,f1=206,h1=207,p1=208,m1=209,g1=210,v1=211,_1=212,y1=213,b1=214,ih=0,ah=1,sh=2,Ls=3,oh=4,lh=5,ch=6,uh=7,E0=0,x1=1,S1=2,Fr=0,M0=1,w0=2,T0=3,A0=4,R0=5,C0=6,P0=7,N0=300,Da=301,Ds=302,bf=303,xf=304,uu=306,dh=1e3,mi=1001,fh=1002,wn=1003,E1=1004,_c=1005,Pn=1006,Sf=1007,Na=1008,ur=1009,L0=1010,D0=1011,Jo=1012,np=1013,zr=1014,Ir=1015,bi=1016,rp=1017,ip=1018,Qo=1020,U0=35902,I0=35899,k0=1021,F0=1022,Er=1023,xi=1026,La=1027,O0=1028,ap=1029,Us=1030,sp=1031,op=1033,Kc=33776,Yc=33777,Jc=33778,Qc=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,_h=37492,yh=37496,bh=37488,xh=37489,Sh=37490,Eh=37491,Mh=37808,wh=37809,Th=37810,Ah=37811,Rh=37812,Ch=37813,Ph=37814,Nh=37815,Lh=37816,Dh=37817,Uh=37818,Ih=37819,kh=37820,Fh=37821,Oh=36492,zh=36494,Bh=36495,Hh=36283,Vh=36284,Gh=36285,jh=36286,M1=3200,w1=0,T1=1,ra="",lr="srgb",Is="srgb-linear",nu="linear",Dt="srgb",ms=7680,o_=519,A1=512,R1=513,C1=514,lp=515,P1=516,N1=517,cp=518,L1=519,l_=35044,c_="300 es",kr=2e3,ru=2001;function D1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function iu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function U1(){const s=iu("canvas");return s.style.display="block",s}const u_={};function d_(...s){const e="THREE."+s.shift();console.log(e,...s)}function z0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const r=s[1];r&&r.isStackTrace?s[0]+=" "+r.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=z0(s);const e="THREE."+s.shift();{const r=s[0];r&&r.isStackTrace?console.warn(r.getError(e)):console.warn(e,...s)}}function Et(...s){s=z0(s);const e="THREE."+s.shift();{const r=s[0];r&&r.isStackTrace?console.error(r.getError(e)):console.error(e,...s)}}function au(...s){const e=s.join(" ");e in u_||(u_[e]=!0,it(...s))}function I1(s,e,r){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,r);break;default:a()}}setTimeout(c,r)})}const k1={[ih]:ah,[sh]:ch,[oh]:uh,[Ls]:lh,[ah]:ih,[ch]:sh,[uh]:oh,[lh]:Ls};class Os{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(r)===-1&&a[e].push(r)}hasEventListener(e,r){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(r)!==-1}removeEventListener(e,r){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(r);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const r=this._listeners;if(r===void 0)return;const a=r[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ef=Math.PI/180,Wh=180/Math.PI;function nl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[r&63|128]+Rn[r>>8&255]+"-"+Rn[r>>16&255]+Rn[r>>24&255]+Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]).toLowerCase()}function gt(s,e,r){return Math.max(e,Math.min(r,s))}function F1(s,e){return(s%e+e)%e}function Mf(s,e,r){return(1-r)*s+r*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class zt{constructor(e=0,r=0){zt.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,a=this.y,l=e.elements;return this.x=l[0]*r+l[3]*a+l[6],this.y=l[1]*r+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=gt(this.x,e.x,r.x),this.y=gt(this.y,e.y,r.y),this}clampScalar(e,r){return this.x=gt(this.x,e,r),this.y=gt(this.y,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y;return r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const a=Math.cos(r),l=Math.sin(r),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*l+e.x,this.y=c*l+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(e=0,r=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=a,this._w=l}static slerpFlat(e,r,a,l,c,d,p){let m=a[l+0],h=a[l+1],v=a[l+2],S=a[l+3],g=c[d+0],b=c[d+1],x=c[d+2],C=c[d+3];if(S!==C||m!==g||h!==b||v!==x){let _=m*g+h*b+v*x+S*C;_<0&&(g=-g,b=-b,x=-x,C=-C,_=-_);let y=1-p;if(_<.9995){const A=Math.acos(_),I=Math.sin(A);y=Math.sin(y*A)/I,p=Math.sin(p*A)/I,m=m*y+g*p,h=h*y+b*p,v=v*y+x*p,S=S*y+C*p}else{m=m*y+g*p,h=h*y+b*p,v=v*y+x*p,S=S*y+C*p;const A=1/Math.sqrt(m*m+h*h+v*v+S*S);m*=A,h*=A,v*=A,S*=A}}e[r]=m,e[r+1]=h,e[r+2]=v,e[r+3]=S}static multiplyQuaternionsFlat(e,r,a,l,c,d){const p=a[l],m=a[l+1],h=a[l+2],v=a[l+3],S=c[d],g=c[d+1],b=c[d+2],x=c[d+3];return e[r]=p*x+v*S+m*b-h*g,e[r+1]=m*x+v*g+h*S-p*b,e[r+2]=h*x+v*b+p*g-m*S,e[r+3]=v*x-p*S-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,a,l){return this._x=e,this._y=r,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const a=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(a/2),v=p(l/2),S=p(c/2),g=m(a/2),b=m(l/2),x=m(c/2);switch(d){case"XYZ":this._x=g*v*S+h*b*x,this._y=h*b*S-g*v*x,this._z=h*v*x+g*b*S,this._w=h*v*S-g*b*x;break;case"YXZ":this._x=g*v*S+h*b*x,this._y=h*b*S-g*v*x,this._z=h*v*x-g*b*S,this._w=h*v*S+g*b*x;break;case"ZXY":this._x=g*v*S-h*b*x,this._y=h*b*S+g*v*x,this._z=h*v*x+g*b*S,this._w=h*v*S-g*b*x;break;case"ZYX":this._x=g*v*S-h*b*x,this._y=h*b*S+g*v*x,this._z=h*v*x-g*b*S,this._w=h*v*S+g*b*x;break;case"YZX":this._x=g*v*S+h*b*x,this._y=h*b*S+g*v*x,this._z=h*v*x-g*b*S,this._w=h*v*S-g*b*x;break;case"XZY":this._x=g*v*S-h*b*x,this._y=h*b*S-g*v*x,this._z=h*v*x+g*b*S,this._w=h*v*S+g*b*x;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const a=r/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,a=r[0],l=r[4],c=r[8],d=r[1],p=r[5],m=r[9],h=r[2],v=r[6],S=r[10],g=a+p+S;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(a>p&&a>S){const b=2*Math.sqrt(1+a-p-S);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>S){const b=2*Math.sqrt(1+p-a-S);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+S-a-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let a=e.dot(r)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,r){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,r/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const a=e._x,l=e._y,c=e._z,d=e._w,p=r._x,m=r._y,h=r._z,v=r._w;return this._x=a*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-a*h,this._z=c*v+d*h+a*m-l*p,this._w=d*v-a*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,r){let a=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(a=-a,l=-l,c=-c,d=-d,p=-p);let m=1-r;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,r=Math.sin(r*h)/v,this._x=this._x*m+a*r,this._y=this._y*m+l*r,this._z=this._z*m+c*r,this._w=this._w*m+d*r,this._onChangeCallback()}else this._x=this._x*m+a*r,this._y=this._y*m+l*r,this._z=this._z*m+c*r,this._w=this._w*m+d*r,this.normalize();return this}slerpQuaternions(e,r,a){return this.copy(e).slerp(r,a)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(r),c*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,r=0,a=0){re.prototype.isVector3=!0,this.x=e,this.y=r,this.z=a}set(e,r,a){return a===void 0&&(a=this.z),this.x=e,this.y=r,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(f_.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*r+c[3]*a+c[6]*l,this.y=c[1]*r+c[4]*a+c[7]*l,this.z=c[2]*r+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,a=this.y,l=this.z,c=e.elements,d=1/(c[3]*r+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*r+c[4]*a+c[8]*l+c[12])*d,this.y=(c[1]*r+c[5]*a+c[9]*l+c[13])*d,this.z=(c[2]*r+c[6]*a+c[10]*l+c[14])*d,this}applyQuaternion(e){const r=this.x,a=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*a),v=2*(p*r-c*l),S=2*(c*a-d*r);return this.x=r+m*h+d*S-p*v,this.y=a+m*v+p*h-c*S,this.z=l+m*S+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*r+c[4]*a+c[8]*l,this.y=c[1]*r+c[5]*a+c[9]*l,this.z=c[2]*r+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=gt(this.x,e.x,r.x),this.y=gt(this.y,e.y,r.y),this.z=gt(this.z,e.z,r.z),this}clampScalar(e,r){return this.x=gt(this.x,e,r),this.y=gt(this.y,e,r),this.z=gt(this.z,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const a=e.x,l=e.y,c=e.z,d=r.x,p=r.y,m=r.z;return this.x=l*m-c*p,this.y=c*d-a*m,this.z=a*p-l*d,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const a=e.dot(this)/r;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return r*r+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,a){const l=Math.sin(r)*e;return this.x=l*Math.sin(a),this.y=Math.cos(r)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,a){return this.x=e*Math.sin(r),this.y=a,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=a,this.z=l,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,a=Math.sqrt(1-r*r);return this.x=a*Math.cos(e),this.y=r,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wf=new re,f_=new zs;class lt{constructor(e,r,a,l,c,d,p,m,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,a,l,c,d,p,m,h)}set(e,r,a,l,c,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=r,v[4]=c,v[5]=m,v[6]=a,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this}extractBasis(e,r,a){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,l=r.elements,c=this.elements,d=a[0],p=a[3],m=a[6],h=a[1],v=a[4],S=a[7],g=a[2],b=a[5],x=a[8],C=l[0],_=l[3],y=l[6],A=l[1],I=l[4],N=l[7],F=l[2],k=l[5],O=l[8];return c[0]=d*C+p*A+m*F,c[3]=d*_+p*I+m*k,c[6]=d*y+p*N+m*O,c[1]=h*C+v*A+S*F,c[4]=h*_+v*I+S*k,c[7]=h*y+v*N+S*O,c[2]=g*C+b*A+x*F,c[5]=g*_+b*I+x*k,c[8]=g*y+b*N+x*O,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return r*d*v-r*p*h-a*c*v+a*p*m+l*c*h-l*d*m}invert(){const e=this.elements,r=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],S=v*d-p*h,g=p*m-v*c,b=h*c-d*m,x=r*S+a*g+l*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/x;return e[0]=S*C,e[1]=(l*h-v*a)*C,e[2]=(p*a-l*d)*C,e[3]=g*C,e[4]=(v*r-l*m)*C,e[5]=(l*c-p*r)*C,e[6]=b*C,e[7]=(a*m-h*r)*C,e[8]=(d*r-a*c)*C,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,a,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(a*m,a*h,-a*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+r,0,0,1),this}scale(e,r){return this.premultiply(Tf.makeScale(e,r)),this}rotate(e){return this.premultiply(Tf.makeRotation(-e)),this}translate(e,r){return this.premultiply(Tf.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,a,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,a=e.elements;for(let l=0;l<9;l++)if(r[l]!==a[l])return!1;return!0}fromArray(e,r=0){for(let a=0;a<9;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tf=new lt,h_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O1(){const s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Dt&&(l.r=_i(l.r),l.g=_i(l.g),l.b=_i(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Dt&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ra?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return au("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return au("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Is]:{primaries:e,whitePoint:a,transfer:nu,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:lr},outputColorSpaceConfig:{drawingBufferColorSpace:lr}},[lr]:{primaries:e,whitePoint:a,transfer:Dt,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:lr}}}),s}const bt=O1();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class z1{static getDataURL(e,r="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{gs===void 0&&(gs=iu("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=gs}return a.toDataURL(r)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=iu("canvas");r.width=e.width,r.height=e.height;const a=r.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_i(c[d]/255)*255;return a.putImageData(l,0,0),r}else if(e.data){const r=e.data.slice(0);for(let a=0;a<r.length;a++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[a]=Math.floor(_i(r[a]/255)*255):r[a]=_i(r[a]);return{data:r,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B1=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const r=this.data;return typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement?e.set(r.videoWidth,r.videoHeight,0):typeof VideoFrame<"u"&&r instanceof VideoFrame?e.set(r.displayHeight,r.displayWidth,0):r!==null?e.set(r.width,r.height,r.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Af(l[d].image)):c.push(Af(l[d]))}else c=Af(l);a.url=c}return r||(e.images[this.uuid]=a),a}}function Af(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?z1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let H1=0;const Rf=new re;class Dn extends Os{constructor(e=Dn.DEFAULT_IMAGE,r=Dn.DEFAULT_MAPPING,a=mi,l=mi,c=Pn,d=Na,p=Er,m=ur,h=Dn.DEFAULT_ANISOTROPY,v=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=nl(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const r in e){const a=e[r];if(a===void 0){it(`Texture.setValues(): parameter '${r}' has value of undefined.`);continue}const l=this[r];if(l===void 0){it(`Texture.setValues(): property '${r}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[r]=a}}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),r||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=N0;Dn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,r=0,a=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=r,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,a,l){return this.x=e,this.y=r,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,a=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*r+d[4]*a+d[8]*l+d[12]*c,this.y=d[1]*r+d[5]*a+d[9]*l+d[13]*c,this.z=d[2]*r+d[6]*a+d[10]*l+d[14]*c,this.w=d[3]*r+d[7]*a+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,a,l,c;const d=e.elements,p=d[0],m=d[4],h=d[8],v=d[1],S=d[5],g=d[9],b=d[2],x=d[6],C=d[10];if(Math.abs(m-v)<.01&&Math.abs(h-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(h+b)<.1&&Math.abs(g+x)<.1&&Math.abs(p+S+C-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const y=(p+1)/2,A=(S+1)/2,I=(C+1)/2,N=(m+v)/4,F=(h+b)/4,k=(g+x)/4;return y>A&&y>I?y<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(y),l=N/a,c=F/a):A>I?A<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),a=N/l,c=k/l):I<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),a=F/c,l=k/c),this.set(a,l,c,r),this}let _=Math.sqrt((x-g)*(x-g)+(h-b)*(h-b)+(v-m)*(v-m));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(h-b)/_,this.z=(v-m)/_,this.w=Math.acos((p+S+C-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=gt(this.x,e.x,r.x),this.y=gt(this.y,e.y,r.y),this.z=gt(this.z,e.z,r.z),this.w=gt(this.w,e.w,r.w),this}clampScalar(e,r){return this.x=gt(this.x,e,r),this.y=gt(this.y,e,r),this.z=gt(this.z,e,r),this.w=gt(this.w,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this.w=e.w+(r.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V1 extends Os{constructor(e=1,r=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=a.depth,this.scissor=new on(0,0,e,r),this.scissorTest=!1,this.viewport=new on(0,0,e,r),this.textures=[];const l={width:e,height:r,depth:a.depth},c=new Dn(l),d=a.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const r={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(r.mapping=e.mapping),e.wrapS!==void 0&&(r.wrapS=e.wrapS),e.wrapT!==void 0&&(r.wrapT=e.wrapT),e.wrapR!==void 0&&(r.wrapR=e.wrapR),e.magFilter!==void 0&&(r.magFilter=e.magFilter),e.minFilter!==void 0&&(r.minFilter=e.minFilter),e.format!==void 0&&(r.format=e.format),e.type!==void 0&&(r.type=e.type),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(r.colorSpace=e.colorSpace),e.flipY!==void 0&&(r.flipY=e.flipY),e.generateMipmaps!==void 0&&(r.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(r.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(r)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,r,a=1){if(this.width!==e||this.height!==r||this.depth!==a){this.width=e,this.height=r,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=r,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++){this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const l=Object.assign({},e.textures[r].image);this.textures[r].source=new up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends V1{constructor(e=1,r=1,a={}){super(e,r,a),this.isWebGLRenderTarget=!0}}class B0 extends Dn{constructor(e=null,r=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:a,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G1 extends Dn{constructor(e=null,r=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:a,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e,r,a,l,c,d,p,m,h,v,S,g,b,x,C,_){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,a,l,c,d,p,m,h,v,S,g,b,x,C,_)}set(e,r,a,l,c,d,p,m,h,v,S,g,b,x,C,_){const y=this.elements;return y[0]=e,y[4]=r,y[8]=a,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=h,y[6]=v,y[10]=S,y[14]=g,y[3]=b,y[7]=x,y[11]=C,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],r[9]=a[9],r[10]=a[10],r[11]=a[11],r[12]=a[12],r[13]=a[13],r[14]=a[14],r[15]=a[15],this}copyPosition(e){const r=this.elements,a=e.elements;return r[12]=a[12],r[13]=a[13],r[14]=a[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,a){return this.determinant()===0?(e.set(1,0,0),r.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,r,a){return this.set(e.x,r.x,a.x,0,e.y,r.y,a.y,0,e.z,r.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const r=this.elements,a=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),c=1/vs.setFromMatrixColumn(e,1).length(),d=1/vs.setFromMatrixColumn(e,2).length();return r[0]=a[0]*l,r[1]=a[1]*l,r[2]=a[2]*l,r[3]=0,r[4]=a[4]*c,r[5]=a[5]*c,r[6]=a[6]*c,r[7]=0,r[8]=a[8]*d,r[9]=a[9]*d,r[10]=a[10]*d,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,a=e.x,l=e.y,c=e.z,d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=d*v,b=d*S,x=p*v,C=p*S;r[0]=m*v,r[4]=-m*S,r[8]=h,r[1]=b+x*h,r[5]=g-C*h,r[9]=-p*m,r[2]=C-g*h,r[6]=x+b*h,r[10]=d*m}else if(e.order==="YXZ"){const g=m*v,b=m*S,x=h*v,C=h*S;r[0]=g+C*p,r[4]=x*p-b,r[8]=d*h,r[1]=d*S,r[5]=d*v,r[9]=-p,r[2]=b*p-x,r[6]=C+g*p,r[10]=d*m}else if(e.order==="ZXY"){const g=m*v,b=m*S,x=h*v,C=h*S;r[0]=g-C*p,r[4]=-d*S,r[8]=x+b*p,r[1]=b+x*p,r[5]=d*v,r[9]=C-g*p,r[2]=-d*h,r[6]=p,r[10]=d*m}else if(e.order==="ZYX"){const g=d*v,b=d*S,x=p*v,C=p*S;r[0]=m*v,r[4]=x*h-b,r[8]=g*h+C,r[1]=m*S,r[5]=C*h+g,r[9]=b*h-x,r[2]=-h,r[6]=p*m,r[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*h,x=p*m,C=p*h;r[0]=m*v,r[4]=C-g*S,r[8]=x*S+b,r[1]=S,r[5]=d*v,r[9]=-p*v,r[2]=-h*v,r[6]=b*S+x,r[10]=g-C*S}else if(e.order==="XZY"){const g=d*m,b=d*h,x=p*m,C=p*h;r[0]=m*v,r[4]=-S,r[8]=h*v,r[1]=g*S+C,r[5]=d*v,r[9]=b*S-x,r[2]=x*S-b,r[6]=p*v,r[10]=C*S+g}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j1,e,W1)}lookAt(e,r,a){const l=this.elements;return Qn.subVectors(e,r),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Qi.crossVectors(a,Qn),Qi.lengthSq()===0&&(Math.abs(a.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Qi.crossVectors(a,Qn)),Qi.normalize(),yc.crossVectors(Qn,Qi),l[0]=Qi.x,l[4]=yc.x,l[8]=Qn.x,l[1]=Qi.y,l[5]=yc.y,l[9]=Qn.y,l[2]=Qi.z,l[6]=yc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,l=r.elements,c=this.elements,d=a[0],p=a[4],m=a[8],h=a[12],v=a[1],S=a[5],g=a[9],b=a[13],x=a[2],C=a[6],_=a[10],y=a[14],A=a[3],I=a[7],N=a[11],F=a[15],k=l[0],O=l[4],M=l[8],P=l[12],ue=l[1],V=l[5],J=l[9],oe=l[13],le=l[2],ne=l[6],U=l[10],H=l[14],ce=l[3],_e=l[7],L=l[11],Q=l[15];return c[0]=d*k+p*ue+m*le+h*ce,c[4]=d*O+p*V+m*ne+h*_e,c[8]=d*M+p*J+m*U+h*L,c[12]=d*P+p*oe+m*H+h*Q,c[1]=v*k+S*ue+g*le+b*ce,c[5]=v*O+S*V+g*ne+b*_e,c[9]=v*M+S*J+g*U+b*L,c[13]=v*P+S*oe+g*H+b*Q,c[2]=x*k+C*ue+_*le+y*ce,c[6]=x*O+C*V+_*ne+y*_e,c[10]=x*M+C*J+_*U+y*L,c[14]=x*P+C*oe+_*H+y*Q,c[3]=A*k+I*ue+N*le+F*ce,c[7]=A*O+I*V+N*ne+F*_e,c[11]=A*M+I*J+N*U+F*L,c[15]=A*P+I*oe+N*H+F*Q,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],S=e[6],g=e[10],b=e[14],x=e[3],C=e[7],_=e[11],y=e[15],A=m*b-h*g,I=p*b-h*S,N=p*g-m*S,F=d*b-h*v,k=d*g-m*v,O=d*S-p*v;return r*(C*A-_*I+y*N)-a*(x*A-_*F+y*k)+l*(x*I-C*F+y*O)-c*(x*N-C*k+_*O)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=r,l[14]=a),this}invert(){const e=this.elements,r=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],S=e[9],g=e[10],b=e[11],x=e[12],C=e[13],_=e[14],y=e[15],A=r*p-a*d,I=r*m-l*d,N=r*h-c*d,F=a*m-l*p,k=a*h-c*p,O=l*h-c*m,M=v*C-S*x,P=v*_-g*x,ue=v*y-b*x,V=S*_-g*C,J=S*y-b*C,oe=g*y-b*_,le=A*oe-I*J+N*V+F*ue-k*P+O*M;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/le;return e[0]=(p*oe-m*J+h*V)*ne,e[1]=(l*J-a*oe-c*V)*ne,e[2]=(C*O-_*k+y*F)*ne,e[3]=(g*k-S*O-b*F)*ne,e[4]=(m*ue-d*oe-h*P)*ne,e[5]=(r*oe-l*ue+c*P)*ne,e[6]=(_*N-x*O-y*I)*ne,e[7]=(v*O-g*N+b*I)*ne,e[8]=(d*J-p*ue+h*M)*ne,e[9]=(a*ue-r*J-c*M)*ne,e[10]=(x*k-C*N+y*A)*ne,e[11]=(S*N-v*k-b*A)*ne,e[12]=(p*P-d*V-m*M)*ne,e[13]=(r*V-a*P+l*M)*ne,e[14]=(C*I-x*F-_*A)*ne,e[15]=(v*F-S*I+g*A)*ne,this}scale(e){const r=this.elements,a=e.x,l=e.y,c=e.z;return r[0]*=a,r[4]*=l,r[8]*=c,r[1]*=a,r[5]*=l,r[9]*=c,r[2]*=a,r[6]*=l,r[10]*=c,r[3]*=a,r[7]*=l,r[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,a,l))}makeTranslation(e,r,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,a,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,r,-a,0,0,a,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,0,a,0,0,1,0,0,-a,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,0,a,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const a=Math.cos(r),l=Math.sin(r),c=1-a,d=e.x,p=e.y,m=e.z,h=c*d,v=c*p;return this.set(h*d+a,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+a,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+a,0,0,0,0,1),this}makeScale(e,r,a){return this.set(e,0,0,0,0,r,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,r,a,l,c,d){return this.set(1,a,c,0,e,1,d,0,r,l,1,0,0,0,0,1),this}compose(e,r,a){const l=this.elements,c=r._x,d=r._y,p=r._z,m=r._w,h=c+c,v=d+d,S=p+p,g=c*h,b=c*v,x=c*S,C=d*v,_=d*S,y=p*S,A=m*h,I=m*v,N=m*S,F=a.x,k=a.y,O=a.z;return l[0]=(1-(C+y))*F,l[1]=(b+N)*F,l[2]=(x-I)*F,l[3]=0,l[4]=(b-N)*k,l[5]=(1-(g+y))*k,l[6]=(_+A)*k,l[7]=0,l[8]=(x+I)*O,l[9]=(_-A)*O,l[10]=(1-(g+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,r,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return a.set(1,1,1),r.identity(),this;let d=vs.set(l[0],l[1],l[2]).length();const p=vs.set(l[4],l[5],l[6]).length(),m=vs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),yr.copy(this);const h=1/d,v=1/p,S=1/m;return yr.elements[0]*=h,yr.elements[1]*=h,yr.elements[2]*=h,yr.elements[4]*=v,yr.elements[5]*=v,yr.elements[6]*=v,yr.elements[8]*=S,yr.elements[9]*=S,yr.elements[10]*=S,r.setFromRotationMatrix(yr),a.x=d,a.y=p,a.z=m,this}makePerspective(e,r,a,l,c,d,p=kr,m=!1){const h=this.elements,v=2*c/(r-e),S=2*c/(a-l),g=(r+e)/(r-e),b=(a+l)/(a-l);let x,C;if(m)x=c/(d-c),C=d*c/(d-c);else if(p===kr)x=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===ru)x=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,r,a,l,c,d,p=kr,m=!1){const h=this.elements,v=2/(r-e),S=2/(a-l),g=-(r+e)/(r-e),b=-(a+l)/(a-l);let x,C;if(m)x=1/(d-c),C=d/(d-c);else if(p===kr)x=-2/(d-c),C=-(d+c)/(d-c);else if(p===ru)x=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=x,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const r=this.elements,a=e.elements;for(let l=0;l<16;l++)if(r[l]!==a[l])return!1;return!0}fromArray(e,r=0){for(let a=0;a<16;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e[r+9]=a[9],e[r+10]=a[10],e[r+11]=a[11],e[r+12]=a[12],e[r+13]=a[13],e[r+14]=a[14],e[r+15]=a[15],e}}const vs=new re,yr=new tn,j1=new re(0,0,0),W1=new re(1,1,1),Qi=new re,yc=new re,Qn=new re,m_=new tn,g_=new zs;class Si{constructor(e=0,r=0,a=0,l=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,a,l=this._order){return this._x=e,this._y=r,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,a=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],S=l[2],g=l[6],b=l[10];switch(r){case"XYZ":this._y=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-gt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,a){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,r,a)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X1=0;const v_=new re,_s=new zs,ci=new tn,bc=new re,Bo=new re,q1=new re,K1=new zs,__=new re(1,0,0),y_=new re(0,1,0),b_=new re(0,0,1),x_={type:"added"},Y1={type:"removed"},ys={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Un extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new re,r=new Si,a=new zs,l=new re(1,1,1);function c(){a.setFromEuler(r,!1)}function d(){r.setFromQuaternion(a,void 0,!1)}r._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new lt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return _s.setFromAxisAngle(e,r),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,r){return _s.setFromAxisAngle(e,r),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,r){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,r,a){e.isVector3?bc.copy(e):bc.set(e,r,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Bo,bc,this.up):ci.lookAt(bc,Bo,this.up),this.quaternion.setFromRotationMatrix(ci),l&&(ci.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ci),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),ys.child=e,this.dispatchEvent(ys),ys.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Y1),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let a=0,l=this.children.length;a<l;a++){const c=this.children[a].getObjectByProperty(e,r);if(c!==void 0)return c}}getObjectsByProperty(e,r,a=[]){this[e]===r&&a.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,r,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,K1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const r=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=r-c[0]*r-c[4]*a-c[8]*l,c[13]+=a-c[1]*r-c[5]*a-c[9]*l,c[14]+=l-c[2]*r-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateMatrixWorld(e)}updateWorldMatrix(e,r){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",a={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(r){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),S=d(e.shapes),g=d(e.skeletons),b=d(e.animations),x=d(e.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),h.length>0&&(a.textures=h),v.length>0&&(a.images=v),S.length>0&&(a.shapes=S),g.length>0&&(a.skeletons=g),b.length>0&&(a.animations=b),x.length>0&&(a.nodes=x)}return a.object=l,a;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Un.DEFAULT_UP=new re(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const a of e.hand.values())this._getHandJoint(r,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,a){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const _=r.getJointPose(C,a),y=this._getHandJoint(h,C);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=v.position.distanceTo(S.position),b=.02,x=.005;h.inputState.pinching&&g>b+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=r.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=r.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const a=new xc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[r.jointName]=a,e.add(a)}return e.joints[r.jointName]}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Nf(s,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?s+(e-s)*6*r:r<1/2?e:r<2/3?s+(e-s)*6*(2/3-r):s}class vt{constructor(e,r,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,a)}set(e,r,a){if(r===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,r,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=lr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,r),this}setRGB(e,r,a,l=bt.workingColorSpace){return this.r=e,this.g=r,this.b=a,bt.colorSpaceToWorking(this,l),this}setHSL(e,r,a,l=bt.workingColorSpace){if(e=F1(e,1),r=gt(r,0,1),a=gt(a,0,1),r===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+r):a+r-a*r,d=2*a-c;this.r=Nf(d,c,e+1/3),this.g=Nf(d,c,e),this.b=Nf(d,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,r=lr){function a(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,r);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,r);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,r);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,r);if(d===6)return this.setHex(parseInt(c,16),r);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=lr){const a=V0[e.toLowerCase()];return a!==void 0?this.setHex(a,r):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lr){return bt.workingToColorSpace(Cn.copy(this),e),Math.round(gt(Cn.r*255,0,255))*65536+Math.round(gt(Cn.g*255,0,255))*256+Math.round(gt(Cn.b*255,0,255))}getHexString(e=lr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=bt.workingColorSpace){bt.workingToColorSpace(Cn.copy(this),r);const a=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(a,l,c),p=Math.min(a,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=v<=.5?S/(d+p):S/(2-d-p),d){case a:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-a)/S+2;break;case c:m=(a-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,r=bt.workingColorSpace){return bt.workingToColorSpace(Cn.copy(this),r),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=lr){bt.workingToColorSpace(Cn.copy(this),e);const r=Cn.r,a=Cn.g,l=Cn.b;return e!==lr?`color(${e} ${r.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,r,a){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+r,Zi.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,a){return this.r=e.r+(r.r-e.r)*a,this.g=e.g+(r.g-e.g)*a,this.b=e.b+(r.b-e.b)*a,this}lerpHSL(e,r){this.getHSL(Zi),e.getHSL(Sc);const a=Mf(Zi.h,Sc.h,r),l=Mf(Zi.s,Sc.s,r),c=Mf(Zi.l,Sc.l,r);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*r+c[3]*a+c[6]*l,this.g=c[1]*r+c[4]*a+c[7]*l,this.b=c[2]*r+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new vt;vt.NAMES=V0;class Q1 extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}const br=new re,ui=new re,Lf=new re,di=new re,bs=new re,xs=new re,S_=new re,Df=new re,Uf=new re,If=new re,kf=new on,Ff=new on,Of=new on;class Sr{constructor(e=new re,r=new re,a=new re){this.a=e,this.b=r,this.c=a}static getNormal(e,r,a,l){l.subVectors(a,r),br.subVectors(e,r),l.cross(br);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,r,a,l,c){br.subVectors(l,r),ui.subVectors(a,r),Lf.subVectors(e,r);const d=br.dot(br),p=br.dot(ui),m=br.dot(Lf),h=ui.dot(ui),v=ui.dot(Lf),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,b=(h*m-p*v)*g,x=(d*v-p*m)*g;return c.set(1-b-x,x,b)}static containsPoint(e,r,a,l){return this.getBarycoord(e,r,a,l,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,r,a,l,c,d,p,m){return this.getBarycoord(e,r,a,l,di)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,di.x),m.addScaledVector(d,di.y),m.addScaledVector(p,di.z),m)}static getInterpolatedAttribute(e,r,a,l,c,d){return kf.setScalar(0),Ff.setScalar(0),Of.setScalar(0),kf.fromBufferAttribute(e,r),Ff.fromBufferAttribute(e,a),Of.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(kf,c.x),d.addScaledVector(Ff,c.y),d.addScaledVector(Of,c.z),d}static isFrontFacing(e,r,a,l){return br.subVectors(a,r),ui.subVectors(e,r),br.cross(ui).dot(l)<0}set(e,r,a){return this.a.copy(e),this.b.copy(r),this.c.copy(a),this}setFromPointsAndIndices(e,r,a,l){return this.a.copy(e[r]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,r,a,l){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return br.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),br.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Sr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,a,l,c){return Sr.getInterpolation(e,this.a,this.b,this.c,r,a,l,c)}containsPoint(e){return Sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const a=this.a,l=this.b,c=this.c;let d,p;bs.subVectors(l,a),xs.subVectors(c,a),Df.subVectors(e,a);const m=bs.dot(Df),h=xs.dot(Df);if(m<=0&&h<=0)return r.copy(a);Uf.subVectors(e,l);const v=bs.dot(Uf),S=xs.dot(Uf);if(v>=0&&S<=v)return r.copy(l);const g=m*S-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),r.copy(a).addScaledVector(bs,d);If.subVectors(e,c);const b=bs.dot(If),x=xs.dot(If);if(x>=0&&b<=x)return r.copy(c);const C=b*h-m*x;if(C<=0&&h>=0&&x<=0)return p=h/(h-x),r.copy(a).addScaledVector(xs,p);const _=v*x-b*S;if(_<=0&&S-v>=0&&b-x>=0)return S_.subVectors(c,l),p=(S-v)/(S-v+(b-x)),r.copy(l).addScaledVector(S_,p);const y=1/(_+C+g);return d=C*y,p=g*y,r.copy(a).addScaledVector(bs,d).addScaledVector(xs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new re(1/0,1/0,1/0),r=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r+=3)this.expandByPoint(xr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,a=e.count;r<a;r++)this.expandByPoint(xr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const a=xr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(r===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,xr):xr.fromBufferAttribute(c,d),xr.applyMatrix4(e.matrixWorld),this.expandByPoint(xr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ec.copy(a.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,a;return e.normal.x>0?(r=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),r<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Mc.subVectors(this.max,Ho),Ss.subVectors(e.a,Ho),Es.subVectors(e.b,Ho),Ms.subVectors(e.c,Ho),$i.subVectors(Es,Ss),ea.subVectors(Ms,Es),Sa.subVectors(Ss,Ms);let r=[0,-$i.z,$i.y,0,-ea.z,ea.y,0,-Sa.z,Sa.y,$i.z,0,-$i.x,ea.z,0,-ea.x,Sa.z,0,-Sa.x,-$i.y,$i.x,0,-ea.y,ea.x,0,-Sa.y,Sa.x,0];return!zf(r,Ss,Es,Ms,Mc)||(r=[1,0,0,0,1,0,0,0,1],!zf(r,Ss,Es,Ms,Mc))?!1:(wc.crossVectors($i,ea),r=[wc.x,wc.y,wc.z],zf(r,Ss,Es,Ms,Mc))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new re,new re,new re,new re,new re,new re,new re,new re],xr=new re,Ec=new rl,Ss=new re,Es=new re,Ms=new re,$i=new re,ea=new re,Sa=new re,Ho=new re,Mc=new re,wc=new re,Ea=new re;function zf(s,e,r,a,l){for(let c=0,d=s.length-3;c<=d;c+=3){Ea.fromArray(s,c);const p=l.x*Math.abs(Ea.x)+l.y*Math.abs(Ea.y)+l.z*Math.abs(Ea.z),m=e.dot(Ea),h=r.dot(Ea),v=a.dot(Ea);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const un=new re,Tc=new zt;let Z1=0;class dr{constructor(e,r,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=a,this.usage=l_,this.updateRanges=[],this.gpuType=Ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,a){e*=this.itemSize,a*=r.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=r.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,a=this.count;r<a;r++)Tc.fromBufferAttribute(this,r),Tc.applyMatrix3(e),this.setXY(r,Tc.x,Tc.y);else if(this.itemSize===3)for(let r=0,a=this.count;r<a;r++)un.fromBufferAttribute(this,r),un.applyMatrix3(e),this.setXYZ(r,un.x,un.y,un.z);return this}applyMatrix4(e){for(let r=0,a=this.count;r<a;r++)un.fromBufferAttribute(this,r),un.applyMatrix4(e),this.setXYZ(r,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let r=0,a=this.count;r<a;r++)un.fromBufferAttribute(this,r),un.applyNormalMatrix(e),this.setXYZ(r,un.x,un.y,un.z);return this}transformDirection(e){for(let r=0,a=this.count;r<a;r++)un.fromBufferAttribute(this,r),un.transformDirection(e),this.setXYZ(r,un.x,un.y,un.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let a=this.array[e*this.itemSize+r];return this.normalized&&(a=zo(a,this.array)),a}setComponent(e,r,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+r]=a,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=zo(r,this.array)),r}setX(e,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=zo(r,this.array)),r}setY(e,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=zo(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=zo(r,this.array)),r}setW(e,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,a){return e*=this.itemSize,this.normalized&&(r=Vn(r,this.array),a=Vn(a,this.array)),this.array[e+0]=r,this.array[e+1]=a,this}setXYZ(e,r,a,l){return e*=this.itemSize,this.normalized&&(r=Vn(r,this.array),a=Vn(a,this.array),l=Vn(l,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,r,a,l,c){return e*=this.itemSize,this.normalized&&(r=Vn(r,this.array),a=Vn(a,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class G0 extends dr{constructor(e,r,a){super(new Uint16Array(e),r,a)}}class j0 extends dr{constructor(e,r,a){super(new Uint32Array(e),r,a)}}class fr extends dr{constructor(e,r,a){super(new Float32Array(e),r,a)}}const $1=new rl,Vo=new re,Bf=new re;class il{constructor(e=new re,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const a=this.center;r!==void 0?a.copy(r):$1.setFromPoints(e).getCenter(a);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const a=this.center.distanceToSquared(e);return r.copy(e),a>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const r=Vo.lengthSq();if(r>this.radius*this.radius){const a=Math.sqrt(r),l=(a-this.radius)*.5;this.center.addScaledVector(Vo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Bf)),this.expandByPoint(Vo.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eE=0;const or=new tn,Hf=new Un,ws=new re,Zn=new rl,Go=new rl,xn=new re;class $n extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D1(e)?j0:G0)(e,1):this.index=e,this}setIndirect(e,r=0){return this.indirect=e,this.indirectOffset=r,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,a=0){this.groups.push({start:e,count:r,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,r,a){return or.makeTranslation(e,r,a),this.applyMatrix4(or),this}scale(e,r,a){return or.makeScale(e,r,a),this.applyMatrix4(or),this}lookAt(e){return Hf.lookAt(e),Hf.updateMatrix(),this.applyMatrix4(Hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const r=this.getAttribute("position");if(r===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new fr(a,3))}else{const a=Math.min(e.length,r.count);for(let l=0;l<a;l++){const c=e[l];r.setXYZ(l,c.x,c.y,c.z||0)}e.length>r.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let a=0,l=r.length;a<l;a++){const c=r[a];Zn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const a=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),r)for(let c=0,d=r.length;c<d;c++){const p=r[c];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(Zn.min,Go.min),Zn.expandByPoint(xn),xn.addVectors(Zn.max,Go.max),Zn.expandByPoint(xn)):(Zn.expandByPoint(Go.min),Zn.expandByPoint(Go.max))}Zn.getCenter(a);let l=0;for(let c=0,d=e.count;c<d;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(xn));if(r)for(let c=0,d=r.length;c<d;c++){const p=r[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)xn.fromBufferAttribute(p,h),m&&(ws.fromBufferAttribute(e,h),xn.add(ws)),l=Math.max(l,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=r.position,l=r.normal,c=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dr(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let M=0;M<a.count;M++)p[M]=new re,m[M]=new re;const h=new re,v=new re,S=new re,g=new zt,b=new zt,x=new zt,C=new re,_=new re;function y(M,P,ue){h.fromBufferAttribute(a,M),v.fromBufferAttribute(a,P),S.fromBufferAttribute(a,ue),g.fromBufferAttribute(c,M),b.fromBufferAttribute(c,P),x.fromBufferAttribute(c,ue),v.sub(h),S.sub(h),b.sub(g),x.sub(g);const V=1/(b.x*x.y-x.x*b.y);isFinite(V)&&(C.copy(v).multiplyScalar(x.y).addScaledVector(S,-b.y).multiplyScalar(V),_.copy(S).multiplyScalar(b.x).addScaledVector(v,-x.x).multiplyScalar(V),p[M].add(C),p[P].add(C),p[ue].add(C),m[M].add(_),m[P].add(_),m[ue].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let M=0,P=A.length;M<P;++M){const ue=A[M],V=ue.start,J=ue.count;for(let oe=V,le=V+J;oe<le;oe+=3)y(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const I=new re,N=new re,F=new re,k=new re;function O(M){F.fromBufferAttribute(l,M),k.copy(F);const P=p[M];I.copy(P),I.sub(F.multiplyScalar(F.dot(P))).normalize(),N.crossVectors(k,P);const ue=N.dot(m[M])<0?-1:1;d.setXYZW(M,I.x,I.y,I.z,ue)}for(let M=0,P=A.length;M<P;++M){const ue=A[M],V=ue.start,J=ue.count;for(let oe=V,le=V+J;oe<le;oe+=3)O(e.getX(oe+0)),O(e.getX(oe+1)),O(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new dr(new Float32Array(r.count*3),3),this.setAttribute("normal",a);else for(let g=0,b=a.count;g<b;g++)a.setXYZ(g,0,0,0);const l=new re,c=new re,d=new re,p=new re,m=new re,h=new re,v=new re,S=new re;if(e)for(let g=0,b=e.count;g<b;g+=3){const x=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,C),d.fromBufferAttribute(r,_),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(a,x),m.fromBufferAttribute(a,C),h.fromBufferAttribute(a,_),p.add(v),m.add(v),h.add(v),a.setXYZ(x,p.x,p.y,p.z),a.setXYZ(C,m.x,m.y,m.z),a.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,b=r.count;g<b;g+=3)l.fromBufferAttribute(r,g+0),c.fromBufferAttribute(r,g+1),d.fromBufferAttribute(r,g+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),a.setXYZ(g+0,v.x,v.y,v.z),a.setXYZ(g+1,v.x,v.y,v.z),a.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),xn.normalize(),e.setXYZ(r,xn.x,xn.y,xn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,S=p.normalized,g=new h.constructor(m.length*v);let b=0,x=0;for(let C=0,_=m.length;C<_;C++){p.isInterleavedBufferAttribute?b=m[C]*p.data.stride+p.offset:b=m[C]*v;for(let y=0;y<v;y++)g[x++]=h[b++]}return new dr(g,v,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new $n,a=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,a);r.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,S=h.length;v<S;v++){const g=h[v],b=e(g,a);m.push(b)}r.morphAttributes[p]=m}r.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const a=this.attributes;for(const m in a){const h=a[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let S=0,g=h.length;S<g;S++){const b=h[S];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(r))}const c=e.morphAttributes;for(const h in c){const v=[],S=c[h];for(let g=0,b=S.length;g<b;g++)v.push(S[g].clone(r));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tE=0;class Bs extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Ps,this.side=aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=rh,this.blendEquation=Ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const a=e[r];if(a===void 0){it(`Material: parameter '${r}' has value of undefined.`);continue}const l=this[r];if(l===void 0){it(`Material: '${r}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[r]=a}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(a.blending=this.blending),this.side!==aa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==nh&&(a.blendSrc=this.blendSrc),this.blendDst!==rh&&(a.blendDst=this.blendDst),this.blendEquation!==Ca&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(r){const c=l(e.textures),d=l(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let a=null;if(r!==null){const l=r.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=r[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hi=new re,Vf=new re,Ac=new re,ta=new re,Gf=new re,Rc=new re,jf=new re;class dp{constructor(e=new re,r=new re(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const a=r.dot(this.direction);return a<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=hi.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,r),hi.distanceToSquared(e))}distanceSqToSegment(e,r,a,l){Vf.copy(e).add(r).multiplyScalar(.5),Ac.copy(r).sub(e).normalize(),ta.copy(this.origin).sub(Vf);const c=e.distanceTo(r)*.5,d=-this.direction.dot(Ac),p=ta.dot(this.direction),m=-ta.dot(Ac),h=ta.lengthSq(),v=Math.abs(1-d*d);let S,g,b,x;if(v>0)if(S=d*m-p,g=d*p-m,x=c*v,S>=0)if(g>=-x)if(g<=x){const C=1/v;S*=C,g*=C,b=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;else g<=-x?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+h):g<=x?(S=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Vf).addScaledVector(Ac,g),b}intersectSphere(e,r){hi.subVectors(e.center,this.origin);const a=hi.dot(this.direction),l=hi.dot(hi)-a*a,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=a-d,m=a+d;return m<0?null:p<0?this.at(m,r):this.at(p,r)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/r;return a>=0?a:null}intersectPlane(e,r){const a=this.distanceToPlane(e);return a===null?null:this.at(a,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let a,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(a=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(a=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),a>d||c>l||((c>a||isNaN(a))&&(a=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),a>m||p>l)||((p>a||a!==a)&&(a=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,r)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,r,a,l,c){Gf.subVectors(r,e),Rc.subVectors(a,e),jf.crossVectors(Gf,Rc);let d=this.direction.dot(jf),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ta.subVectors(this.origin,e);const m=p*this.direction.dot(Rc.crossVectors(ta,Rc));if(m<0)return null;const h=p*this.direction.dot(Gf.cross(ta));if(h<0||m+h>d)return null;const v=-p*ta.dot(jf);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W0 extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const E_=new tn,Ma=new dp,Cc=new il,M_=new re,Pc=new re,Nc=new re,Lc=new re,Wf=new re,Dc=new re,w_=new re,Uc=new re;class Ei extends Un{constructor(e=new $n,r=new W0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,r){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;r.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Dc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],S=c[m];v!==0&&(Wf.fromBufferAttribute(S,e),d?Dc.addScaledVector(Wf,v):Dc.addScaledVector(Wf.sub(r),v))}r.add(Dc)}return r}raycast(e,r){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Cc.copy(a.boundingSphere),Cc.applyMatrix4(c),Ma.copy(e.ray).recast(e.near),!(Cc.containsPoint(Ma.origin)===!1&&(Ma.intersectSphere(Cc,M_)===null||Ma.origin.distanceToSquared(M_)>(e.far-e.near)**2))&&(E_.copy(c).invert(),Ma.copy(e.ray).applyMatrix4(E_),!(a.boundingBox!==null&&Ma.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,r,Ma)))}_computeIntersections(e,r,a){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let x=0,C=g.length;x<C;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,b.start),I=Math.min(p.count,Math.min(_.start+_.count,b.start+b.count));for(let N=A,F=I;N<F;N+=3){const k=p.getX(N),O=p.getX(N+1),M=p.getX(N+2);l=Ic(this,y,e,a,h,v,S,k,O,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,r.push(l))}}else{const x=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let _=x,y=C;_<y;_+=3){const A=p.getX(_),I=p.getX(_+1),N=p.getX(_+2);l=Ic(this,d,e,a,h,v,S,A,I,N),l&&(l.faceIndex=Math.floor(_/3),r.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let x=0,C=g.length;x<C;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,b.start),I=Math.min(m.count,Math.min(_.start+_.count,b.start+b.count));for(let N=A,F=I;N<F;N+=3){const k=N,O=N+1,M=N+2;l=Ic(this,y,e,a,h,v,S,k,O,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,r.push(l))}}else{const x=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let _=x,y=C;_<y;_+=3){const A=_,I=_+1,N=_+2;l=Ic(this,d,e,a,h,v,S,A,I,N),l&&(l.faceIndex=Math.floor(_/3),r.push(l))}}}}function nE(s,e,r,a,l,c,d,p){let m;if(e.side===Gn?m=a.intersectTriangle(d,c,l,!0,p):m=a.intersectTriangle(l,c,d,e.side===aa,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(s.matrixWorld);const h=r.ray.origin.distanceTo(Uc);return h<r.near||h>r.far?null:{distance:h,point:Uc.clone(),object:s}}function Ic(s,e,r,a,l,c,d,p,m,h){s.getVertexPosition(p,Pc),s.getVertexPosition(m,Nc),s.getVertexPosition(h,Lc);const v=nE(s,e,r,a,Pc,Nc,Lc,w_);if(v){const S=new re;Sr.getBarycoord(w_,Pc,Nc,Lc,S),l&&(v.uv=Sr.getInterpolatedAttribute(l,p,m,h,S,new zt)),c&&(v.uv1=Sr.getInterpolatedAttribute(c,p,m,h,S,new zt)),d&&(v.normal=Sr.getInterpolatedAttribute(d,p,m,h,S,new re),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Sr.getNormal(Pc,Nc,Lc,g.normal),v.face=g,v.barycoord=S}return v}class rE extends Dn{constructor(e=null,r=1,a=1,l,c,d,p,m,h=wn,v=wn,S,g){super(null,d,p,m,h,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:r,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xf=new re,iE=new re,aE=new lt;class Ra{constructor(e=new re(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,a,l){return this.normal.set(e,r,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,a){const l=Xf.subVectors(a,r).cross(iE.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const a=e.delta(Xf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:r.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const r=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return r<0&&a>0||a<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const a=r||aE.getNormalMatrix(e),l=this.coplanarPoint(Xf).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wa=new il,sE=new zt(.5,.5),kc=new re;class X0{constructor(e=new Ra,r=new Ra,a=new Ra,l=new Ra,c=new Ra,d=new Ra){this.planes=[e,r,a,l,c,d]}set(e,r,a,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(r),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const r=this.planes;for(let a=0;a<6;a++)r[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,r=kr,a=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],S=c[5],g=c[6],b=c[7],x=c[8],C=c[9],_=c[10],y=c[11],A=c[12],I=c[13],N=c[14],F=c[15];if(l[0].setComponents(h-d,b-v,y-x,F-A).normalize(),l[1].setComponents(h+d,b+v,y+x,F+A).normalize(),l[2].setComponents(h+p,b+S,y+C,F+I).normalize(),l[3].setComponents(h-p,b-S,y-C,F-I).normalize(),a)l[4].setComponents(m,g,_,N).normalize(),l[5].setComponents(h-m,b-g,y-_,F-N).normalize();else if(l[4].setComponents(h-m,b-g,y-_,F-N).normalize(),r===kr)l[5].setComponents(h+m,b+g,y+_,F+N).normalize();else if(r===ru)l[5].setComponents(m,g,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),wa.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wa)}intersectsSprite(e){wa.center.set(0,0,0);const r=sE.distanceTo(e.center);return wa.radius=.7071067811865476+r,wa.applyMatrix4(e.matrixWorld),this.intersectsSphere(wa)}intersectsSphere(e){const r=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(r[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const r=this.planes;for(let a=0;a<6;a++){const l=r[a];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let a=0;a<6;a++)if(r[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q0 extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new re,ou=new re,T_=new tn,jo=new dp,Fc=new il,qf=new re,A_=new re;class oE extends Un{constructor(e=new $n,r=new q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,a=[0];for(let l=1,c=r.count;l<c;l++)su.fromBufferAttribute(r,l-1),ou.fromBufferAttribute(r,l),a[l]=a[l-1],a[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new fr(a,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;T_.copy(l).invert(),jo.copy(e.ray).applyMatrix4(T_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=a.index,S=a.attributes.position;if(v!==null){const g=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let x=g,C=b-1;x<C;x+=h){const _=v.getX(x),y=v.getX(x+1),A=Oc(this,e,jo,m,_,y,x);A&&r.push(A)}if(this.isLineLoop){const x=v.getX(b-1),C=v.getX(g),_=Oc(this,e,jo,m,x,C,b-1);_&&r.push(_)}}else{const g=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let x=g,C=b-1;x<C;x+=h){const _=Oc(this,e,jo,m,x,x+1,x);_&&r.push(_)}if(this.isLineLoop){const x=Oc(this,e,jo,m,b-1,g,b-1);x&&r.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Oc(s,e,r,a,l,c,d){const p=s.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),r.distanceSqToSegment(su,ou,qf,A_)>a)return;qf.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(qf);if(!(m<e.near||m>e.far))return{distance:m,point:A_.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const R_=new re,C_=new re;class lE extends oE{constructor(e,r){super(e,r),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,a=[];for(let l=0,c=r.count;l<c;l+=2)R_.fromBufferAttribute(r,l),C_.fromBufferAttribute(r,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+R_.distanceTo(C_);e.setAttribute("lineDistance",new fr(a,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K0 extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new tn,Xh=new dp,zc=new il,Bc=new re;class cE extends Un{constructor(e=new $n,r=new K0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),zc.copy(a.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;P_.copy(l).invert(),Xh.copy(e.ray).applyMatrix4(P_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=a.index,v=a.attributes.position;if(h!==null){const S=Math.max(0,d.start),g=Math.min(h.count,d.start+d.count);for(let b=S,x=g;b<x;b++){const C=h.getX(b);Bc.fromBufferAttribute(v,C),N_(Bc,C,m,l,e,r,this)}}else{const S=Math.max(0,d.start),g=Math.min(v.count,d.start+d.count);for(let b=S,x=g;b<x;b++)Bc.fromBufferAttribute(v,b),N_(Bc,b,m,l,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function N_(s,e,r,a,l,c,d){const p=Xh.distanceSqToPoint(s);if(p<r){const m=new re;Xh.closestPointToPoint(s,m),m.applyMatrix4(a);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Y0 extends Dn{constructor(e=[],r=Da,a,l,c,d,p,m,h,v){super(e,r,a,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends Dn{constructor(e,r,a=zr,l,c,d,p=wn,m=wn,h,v=xi,S=1){if(v!==xi&&v!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:r,depth:S};super(g,l,c,d,p,m,v,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class uE extends Zo{constructor(e,r=zr,a=Da,l,c,d=wn,p=wn,m,h=xi){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,r,a,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends $n{constructor(e=1,r=1,a=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:a,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],S=[];let g=0,b=0;x("z","y","x",-1,-1,a,r,e,d,c,0),x("z","y","x",1,-1,a,r,-e,d,c,1),x("x","z","y",1,1,e,a,r,l,d,2),x("x","z","y",1,-1,e,a,-r,l,d,3),x("x","y","z",1,-1,e,r,a,l,c,4),x("x","y","z",-1,-1,e,r,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new fr(h,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(S,2));function x(C,_,y,A,I,N,F,k,O,M,P){const ue=N/O,V=F/M,J=N/2,oe=F/2,le=k/2,ne=O+1,U=M+1;let H=0,ce=0;const _e=new re;for(let L=0;L<U;L++){const Q=L*V-oe;for(let ge=0;ge<ne;ge++){const be=ge*ue-J;_e[C]=be*A,_e[_]=Q*I,_e[y]=le,h.push(_e.x,_e.y,_e.z),_e[C]=0,_e[_]=0,_e[y]=k>0?1:-1,v.push(_e.x,_e.y,_e.z),S.push(ge/O),S.push(1-L/M),H+=1}}for(let L=0;L<M;L++)for(let Q=0;Q<O;Q++){const ge=g+Q+ne*L,be=g+Q+ne*(L+1),Ne=g+(Q+1)+ne*(L+1),Xe=g+(Q+1)+ne*L;m.push(ge,be,Xe),m.push(be,Ne,Xe),ce+=6}p.addGroup(b,ce,P),b+=ce,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends $n{constructor(e=1,r=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:a,heightSegments:l};const c=e/2,d=r/2,p=Math.floor(a),m=Math.floor(l),h=p+1,v=m+1,S=e/p,g=r/m,b=[],x=[],C=[],_=[];for(let y=0;y<v;y++){const A=y*g-d;for(let I=0;I<h;I++){const N=I*S-c;x.push(N,-A,0),C.push(0,0,1),_.push(I/p),_.push(1-y/m)}}for(let y=0;y<m;y++)for(let A=0;A<p;A++){const I=A+h*y,N=A+h*(y+1),F=A+1+h*(y+1),k=A+1+h*y;b.push(I,N,k),b.push(N,F,k)}this.setIndex(b),this.setAttribute("position",new fr(x,3)),this.setAttribute("normal",new fr(C,3)),this.setAttribute("uv",new fr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}function ks(s){const e={};for(const r in s){e[r]={};for(const a in s[r]){const l=s[r][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][a]=null):e[r][a]=l.clone():Array.isArray(l)?e[r][a]=l.slice():e[r][a]=l}}return e}function Ln(s){const e={};for(let r=0;r<s.length;r++){const a=ks(s[r]);for(const l in a)e[l]=a[l]}return e}function dE(s){const e=[];for(let r=0;r<s.length;r++)e.push(s[r].clone());return e}function Q0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const fE={clone:ks,merge:Ln};var hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=dE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?r.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?r.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?r.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?r.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?r.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?r.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?r.uniforms[l]={type:"m4",value:c.toArray()}:r.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(r.extensions=a),r}}class mE extends Br{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gE extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vE extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hc=new re,Vc=new zs,Lr=new re;class Z0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=kr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Lr),Lr.x===1&&Lr.y===1&&Lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Lr.set(1,1,1)).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorld.decompose(Hc,Vc,Lr),Lr.x===1&&Lr.y===1&&Lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const na=new re,L_=new zt,D_=new zt;class cr extends Z0{constructor(e=50,r=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,a){na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(na.x,na.y).multiplyScalar(-e/na.z),na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(na.x,na.y).multiplyScalar(-e/na.z)}getViewSize(e,r){return this.getViewBounds(e,L_,D_),r.subVectors(D_,L_)}setViewOffset(e,r,a,l,c,d){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Ef*.5*this.fov)/this.zoom,a=2*r,l=this.aspect*a,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,r-=d.offsetY*a/h,l*=d.width/m,a*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,r,r-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}class $0 extends Z0{constructor(e=-1,r=1,a=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=a,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,a,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,d=a+e,p=l+r,m=l-r;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ts=-90,As=1;class _E extends Un{constructor(e,r,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new cr(Ts,As,e,r);l.layers=this.layers,this.add(l);const c=new cr(Ts,As,e,r);c.layers=this.layers,this.add(c);const d=new cr(Ts,As,e,r);d.layers=this.layers,this.add(d);const p=new cr(Ts,As,e,r);p.layers=this.layers,this.add(p);const m=new cr(Ts,As,e,r);m.layers=this.layers,this.add(m);const h=new cr(Ts,As,e,r);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[a,l,c,d,p,m]=r;for(const h of r)this.remove(h);if(e===kr)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of r)this.add(h),h.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,c),e.setRenderTarget(a,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,d),e.setRenderTarget(a,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,p),e.setRenderTarget(a,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,m),e.setRenderTarget(a,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,h),a.texture.generateMipmaps=C,e.setRenderTarget(a,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(r,v),e.setRenderTarget(S,g,b),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}}class yE extends cr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function U_(s,e,r,a){const l=bE(a);switch(r){case k0:return s*e;case O0:return s*e/l.components*l.byteLength;case ap:return s*e/l.components*l.byteLength;case Us:return s*e*2/l.components*l.byteLength;case sp:return s*e*2/l.components*l.byteLength;case F0:return s*e*3/l.components*l.byteLength;case Er:return s*e*4/l.components*l.byteLength;case op:return s*e*4/l.components*l.byteLength;case Kc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(s,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(s,8)*Math.max(e,8)/2;case vh:case _h:case bh:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yh:case Sh:case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oh:case zh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hh:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function bE(s){switch(s){case ur:case L0:return{byteLength:1,components:1};case Jo:case D0:case bi:return{byteLength:2,components:1};case rp:case ip:return{byteLength:2,components:4};case zr:case np:case Ir:return{byteLength:4,components:1};case U0:case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function ey(){let s=null,e=!1,r=null,a=null;function l(c,d){r(c,d),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&r!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){r=c},setContext:function(c){s=c}}}function xE(s){const e=new WeakMap;function r(p,m){const h=p.array,v=p.usage,S=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function a(p,m,h){const v=m.array,S=m.updateRanges;if(s.bindBuffer(h,p),S.length===0)s.bufferSubData(h,0,v);else{S.sort((b,x)=>b.start-x.start);let g=0;for(let b=1;b<S.length;b++){const x=S[g],C=S[b];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++g,S[g]=C)}S.length=g+1;for(let b=0,x=S.length;b<x;b++){const C=S[b];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,r(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$w=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:SE,alphahash_pars_fragment:EE,alphamap_fragment:ME,alphamap_pars_fragment:wE,alphatest_fragment:TE,alphatest_pars_fragment:AE,aomap_fragment:RE,aomap_pars_fragment:CE,batching_pars_vertex:PE,batching_vertex:NE,begin_vertex:LE,beginnormal_vertex:DE,bsdfs:UE,iridescence_fragment:IE,bumpmap_pars_fragment:kE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:BE,color_fragment:HE,color_pars_fragment:VE,color_pars_vertex:GE,color_vertex:jE,common:WE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:qE,displacementmap_pars_vertex:KE,displacementmap_vertex:YE,emissivemap_fragment:JE,emissivemap_pars_fragment:QE,colorspace_fragment:ZE,colorspace_pars_fragment:$E,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:pM,envmap_vertex:iM,fog_vertex:aM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:fM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:vM,lights_phong_pars_fragment:_M,lights_physical_fragment:yM,lights_physical_pars_fragment:bM,lights_fragment_begin:xM,lights_fragment_maps:SM,lights_fragment_end:EM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:AM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:PM,map_particle_pars_fragment:NM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:DM,morphinstance_vertex:UM,morphcolor_vertex:IM,morphnormal_vertex:kM,morphtarget_pars_vertex:FM,morphtarget_vertex:OM,normal_fragment_begin:zM,normal_fragment_maps:BM,normal_pars_fragment:HM,normal_pars_vertex:VM,normal_vertex:GM,normalmap_pars_fragment:jM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:KM,opaque_fragment:YM,packing:JM,premultiplied_alpha_fragment:QM,project_vertex:ZM,dithering_fragment:$M,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:iw,shadowmap_vertex:aw,shadowmask_pars_fragment:sw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:fw,tonemapping_fragment:hw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:vw,uv_pars_vertex:_w,uv_vertex:yw,worldpos_vertex:bw,background_vert:xw,background_frag:Sw,backgroundCube_vert:Ew,backgroundCube_frag:Mw,cube_vert:ww,cube_frag:Tw,depth_vert:Aw,depth_frag:Rw,distance_vert:Cw,distance_frag:Pw,equirect_vert:Nw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:Iw,meshbasic_frag:kw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:zw,meshmatcap_frag:Bw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:jw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:qw,meshtoon_frag:Kw,points_vert:Yw,points_frag:Jw,shadow_vert:Qw,shadow_frag:Zw,sprite_vert:$w,sprite_frag:eT},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ur={basic:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Ln([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Ln([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Ln([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Ln([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Ln([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Ln([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Ln([De.common,De.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Ln([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ur.physical={uniforms:Ln([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Gc={r:0,b:0,g:0},Ta=new Si,tT=new tn;function nT(s,e,r,a,l,c){const d=new vt(0);let p=l===!0?0:1,m,h,v=null,S=0,g=null;function b(A){let I=A.isScene===!0?A.background:null;if(I&&I.isTexture){const N=A.backgroundBlurriness>0;I=e.get(I,N)}return I}function x(A){let I=!1;const N=b(A);N===null?_(d,p):N&&N.isColor&&(_(N,1),I=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(A,I){const N=b(I);N&&(N.isCubeTexture||N.mapping===uu)?(h===void 0&&(h=new Ei(new al(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:ks(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ta.copy(I.backgroundRotation),Ta.x*=-1,Ta.y*=-1,Ta.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ta.y*=-1,Ta.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Ta)),h.material.toneMapped=bt.getTransfer(N.colorSpace)!==Dt,(v!==N||S!==N.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,S=N.version,g=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ei(new du(2,2),new Br({name:"BackgroundMaterial",uniforms:ks(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=bt.getTransfer(N.colorSpace)!==Dt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,g=s.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,I){A.getRGB(Gc,Q0(s)),r.buffers.color.setClear(Gc.r,Gc.g,Gc.b,I,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,I=1){d.set(A),p=I,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,_(d,p)},render:x,addToRenderList:C,dispose:y}}function rT(s,e){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,d=!1;function p(V,J,oe,le,ne){let U=!1;const H=S(V,le,oe,J);c!==H&&(c=H,h(c.object)),U=b(V,le,oe,ne),U&&x(V,le,oe,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,N(V,J,oe,le),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function S(V,J,oe,le){const ne=le.wireframe===!0;let U=a[J.id];U===void 0&&(U={},a[J.id]=U);const H=V.isInstancedMesh===!0?V.id:0;let ce=U[H];ce===void 0&&(ce={},U[H]=ce);let _e=ce[oe.id];_e===void 0&&(_e={},ce[oe.id]=_e);let L=_e[ne];return L===void 0&&(L=g(m()),_e[ne]=L),L}function g(V){const J=[],oe=[],le=[];for(let ne=0;ne<r;ne++)J[ne]=0,oe[ne]=0,le[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:oe,attributeDivisors:le,object:V,attributes:{},index:null}}function b(V,J,oe,le){const ne=c.attributes,U=J.attributes;let H=0;const ce=oe.getAttributes();for(const _e in ce)if(ce[_e].location>=0){const L=ne[_e];let Q=U[_e];if(Q===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==le}function x(V,J,oe,le){const ne={},U=J.attributes;let H=0;const ce=oe.getAttributes();for(const _e in ce)if(ce[_e].location>=0){let L=U[_e];L===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(L=V.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),ne[_e]=Q,H++}c.attributes=ne,c.attributesNum=H,c.index=le}function C(){const V=c.newAttributes;for(let J=0,oe=V.length;J<oe;J++)V[J]=0}function _(V){y(V,0)}function y(V,J){const oe=c.newAttributes,le=c.enabledAttributes,ne=c.attributeDivisors;oe[V]=1,le[V]===0&&(s.enableVertexAttribArray(V),le[V]=1),ne[V]!==J&&(s.vertexAttribDivisor(V,J),ne[V]=J)}function A(){const V=c.newAttributes,J=c.enabledAttributes;for(let oe=0,le=J.length;oe<le;oe++)J[oe]!==V[oe]&&(s.disableVertexAttribArray(oe),J[oe]=0)}function I(V,J,oe,le,ne,U,H){H===!0?s.vertexAttribIPointer(V,J,oe,ne,U):s.vertexAttribPointer(V,J,oe,le,ne,U)}function N(V,J,oe,le){C();const ne=le.attributes,U=oe.getAttributes(),H=J.defaultAttributeValues;for(const ce in U){const _e=U[ce];if(_e.location>=0){let L=ne[ce];if(L===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const Q=L.normalized,ge=L.itemSize,be=e.get(L);if(be===void 0)continue;const Ne=be.buffer,Xe=be.type,$=be.bytesPerElement,Ee=Xe===s.INT||Xe===s.UNSIGNED_INT||L.gpuType===np;if(L.isInterleavedBufferAttribute){const Se=L.data,et=Se.stride,Ze=L.offset;if(Se.isInstancedInterleavedBuffer){for(let ze=0;ze<_e.locationSize;ze++)y(_e.location+ze,Se.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ze=0;ze<_e.locationSize;ze++)_(_e.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ze=0;ze<_e.locationSize;ze++)I(_e.location+ze,ge/_e.locationSize,Xe,Q,et*$,(Ze+ge/_e.locationSize*ze)*$,Ee)}else{if(L.isInstancedBufferAttribute){for(let Se=0;Se<_e.locationSize;Se++)y(_e.location+Se,L.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Se=0;Se<_e.locationSize;Se++)_(_e.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Se=0;Se<_e.locationSize;Se++)I(_e.location+Se,ge/_e.locationSize,Xe,Q,ge*$,ge/_e.locationSize*Se*$,Ee)}}else if(H!==void 0){const Q=H[ce];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(_e.location,Q);break;case 3:s.vertexAttrib3fv(_e.location,Q);break;case 4:s.vertexAttrib4fv(_e.location,Q);break;default:s.vertexAttrib1fv(_e.location,Q)}}}}A()}function F(){P();for(const V in a){const J=a[V];for(const oe in J){const le=J[oe];for(const ne in le){const U=le[ne];for(const H in U)v(U[H].object),delete U[H];delete le[ne]}}delete a[V]}}function k(V){if(a[V.id]===void 0)return;const J=a[V.id];for(const oe in J){const le=J[oe];for(const ne in le){const U=le[ne];for(const H in U)v(U[H].object),delete U[H];delete le[ne]}}delete a[V.id]}function O(V){for(const J in a){const oe=a[J];for(const le in oe){const ne=oe[le];if(ne[V.id]===void 0)continue;const U=ne[V.id];for(const H in U)v(U[H].object),delete U[H];delete ne[V.id]}}}function M(V){for(const J in a){const oe=a[J],le=V.isInstancedMesh===!0?V.id:0,ne=oe[le];if(ne!==void 0){for(const U in ne){const H=ne[U];for(const ce in H)v(H[ce].object),delete H[ce];delete ne[U]}delete oe[le],Object.keys(oe).length===0&&delete a[J]}}}function P(){ue(),d=!0,c!==l&&(c=l,h(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:ue,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfObject:M,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:_,disableUnusedAttributes:A}}function iT(s,e,r){let a;function l(h){a=h}function c(h,v){s.drawArrays(a,h,v),r.update(v,a,1)}function d(h,v,S){S!==0&&(s.drawArraysInstanced(a,h,v,S),r.update(v,a,S))}function p(h,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,v,0,S);let g=0;for(let b=0;b<S;b++)g+=v[b];r.update(g,a,1)}function m(h,v,S,g){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<h.length;x++)d(h[x],v[x],g[x]);else{b.multiDrawArraysInstancedWEBGL(a,h,0,v,0,g,0,S);let x=0;for(let C=0;C<S;C++)x+=v[C]*g[C];r.update(x,a,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function aT(s,e,r,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Er&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const M=O===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ur&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ir&&!M)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp";const v=m(h);v!==h&&(it("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const S=r.logarithmicDepthBuffer===!0,g=r.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),k=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:A,maxVaryings:I,maxFragmentUniforms:N,maxSamples:F,samples:k}}function sT(s){const e=this;let r=null,a=0,l=!1,c=!1;const d=new Ra,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const b=S.length!==0||g||a!==0||l;return l=g,a=S.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){r=v(S,g,0)},this.setState=function(S,g,b){const x=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,y=s.get(S);if(!l||x===null||x.length===0||c&&!_)c?v(null):h();else{const A=c?0:a,I=A*4;let N=y.clippingState||null;m.value=N,N=v(x,g,I,b);for(let F=0;F!==I;++F)N[F]=r[F];y.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==r&&(m.value=r,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(S,g,b,x){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=m.value,x!==!0||_===null){const y=b+C*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(_===null||_.length<y)&&(_=new Float32Array(y));for(let I=0,N=b;I!==C;++I,N+=4)d.copy(S[I]).applyMatrix4(A,p),d.normal.toArray(_,N),_[N+3]=d.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const ia=4,I_=[.125,.215,.35,.446,.526,.582],Pa=20,oT=256,Wo=new $0,k_=new vt;let Kf=null,Yf=0,Jf=0,Qf=!1;const lT=new re;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,r=0,a=.1,l=100,c={}){const{size:d=256,position:p=lT}=c;Kf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,p),r>0&&this._blur(m,0,0,r),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,Yf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Da||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=r||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,a={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:bi,format:Er,colorSpace:Is,depthBuffer:!1},l=O_(e,r,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,r,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cT(c)),this._blurMaterial=dT(c,e,r),this._ggxMaterial=uT(c,e,r)}return l}_compileMaterial(e){const r=new Ei(new $n,e);this._renderer.compile(r,Wo)}_sceneToCubeUV(e,r,a,l,c){const d=new cr(90,1,r,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],h=this._renderer,v=h.autoClear,S=h.toneMapping;h.getClearColor(k_),h.toneMapping=Fr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(l),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new al,new W0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,b=g.material;let x=!1;const C=e.background;C?C.isColor&&(b.color.copy(C),e.background=null,x=!0):(b.color.copy(k_),x=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+m[_],c.y,c.z)):y===1?(d.up.set(0,0,p[_]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+m[_],c.z)):(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+m[_]));const A=this._cubeSize;Rs(l,y*A,_>2?A:0,A,A),h.setRenderTarget(l),x&&h.render(g,d),h.render(e,d)}h.toneMapping=S,h.autoClear=v,e.background=C}_textureToCubeUV(e,r){const a=this._renderer,l=e.mapping===Da||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Rs(r,0,0,3*m,2*m),a.setRenderTarget(r),a.render(d,Wo)}_applyPMREM(e){const r=this._renderer,a=r.autoClear;r.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);r.autoClear=a}_applyGGXFilter(e,r,a){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[a];p.material=d;const m=d.uniforms,h=a/(this._lodMeshes.length-1),v=r/(this._lodMeshes.length-1),S=Math.sqrt(h*h-v*v),g=0+h*1.25,b=S*g,{_lodMax:x}=this,C=this._sizeLods[a],_=3*C*(a>x-ia?a-x+ia:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=x-r,Rs(c,_,y,3*C,2*C),l.setRenderTarget(c),l.render(p,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=x-a,Rs(e,_,y,3*C,2*C),l.setRenderTarget(e),l.render(p,Wo)}_blur(e,r,a,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,r,a,l,"latitudinal",c),this._halfBlur(d,e,a,a,l,"longitudinal",c)}_halfBlur(e,r,a,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,b=this._sizeLods[a]-1,x=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Pa-1),C=c/x,_=isFinite(c)?1+Math.floor(v*C):Pa;_>Pa&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Pa}`);const y=[];let A=0;for(let O=0;O<Pa;++O){const M=O/C,P=Math.exp(-M*M/2);y.push(P),O===0?A+=P:O<_&&(A+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/A;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=x,g.mipInt.value=I-a;const N=this._sizeLods[l],F=3*N*(l>I-ia?l-I+ia:0),k=4*(this._cubeSize-N);Rs(r,F,k,3*N,2*N),m.setRenderTarget(r),m.render(S,Wo)}}function cT(s){const e=[],r=[],a=[];let l=s;const c=s-ia+1+I_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-ia?m=I_[d-s+ia-1]:d===0&&(m=0),r.push(m);const h=1/(p-2),v=-h,S=1+h,g=[v,v,S,v,S,S,v,v,S,S,v,S],b=6,x=6,C=3,_=2,y=1,A=new Float32Array(C*x*b),I=new Float32Array(_*x*b),N=new Float32Array(y*x*b);for(let k=0;k<b;k++){const O=k%3*2/3-1,M=k>2?0:-1,P=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];A.set(P,C*x*k),I.set(g,_*x*k);const ue=[k,k,k,k,k,k];N.set(ue,y*x*k)}const F=new $n;F.setAttribute("position",new dr(A,C)),F.setAttribute("uv",new dr(I,_)),F.setAttribute("faceIndex",new dr(N,y)),a.push(new Ei(F,null)),l>ia&&l--}return{lodMeshes:a,sizeLods:e,sigmas:r}}function O_(s,e,r){const a=new Or(s,e,r);return a.texture.mapping=uu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Rs(s,e,r,a,l){s.viewport.set(e,r,a,l),s.scissor.set(e,r,a,l)}function uT(s,e,r){return new Br({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function dT(s,e,r){const a=new Float32Array(Pa),l=new re(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Pa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function z_(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function B_(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ty extends Or{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Y0(l),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Br({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Gn,blending:vi});c.uniforms.tEquirect.value=r;const d=new Ei(l,c),p=r.minFilter;return r.minFilter===Na&&(r.minFilter=Pn),new _E(1,10,this).update(e,d),r.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,r=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(r,a,l);e.setRenderTarget(c)}}function fT(s){let e=new WeakMap,r=new WeakMap,a=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===bf||b===xf)if(e.has(g)){const x=e.get(g).texture;return p(x,g.mapping)}else{const x=g.image;if(x&&x.height>0){const C=new ty(x.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,x=b===bf||b===xf,C=b===Da||b===Ds;if(x||C){let _=r.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new F_(s)),_=x?a.fromEquirectangular(g,_):a.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,r.set(g,_),_.texture;if(_!==void 0)return _.texture;{const A=g.image;return x&&A&&A.height>0||C&&A&&m(A)?(a===null&&(a=new F_(s)),_=x?a.fromEquirectangular(g):a.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,r.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function p(g,b){return b===bf?g.mapping=Da:b===xf&&(g.mapping=Ds),g}function m(g){let b=0;const x=6;for(let C=0;C<x;C++)g[C]!==void 0&&b++;return b===x}function h(g){const b=g.target;b.removeEventListener("dispose",h);const x=e.get(b);x!==void 0&&(e.delete(b),x.dispose())}function v(g){const b=g.target;b.removeEventListener("dispose",v);const x=r.get(b);x!==void 0&&(r.delete(b),x.dispose())}function S(){e=new WeakMap,r=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:S}}function hT(s){const e={};function r(a){if(e[a]!==void 0)return e[a];const l=s.getExtension(a);return e[a]=l,l}return{has:function(a){return r(a)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(a){const l=r(a);return l===null&&au("WebGLRenderer: "+a+" extension not supported."),l}}}function pT(s,e,r,a){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,r.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,r.memory.geometries++),g}function m(S){const g=S.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function h(S){const g=[],b=S.index,x=S.attributes.position;let C=0;if(x===void 0)return;if(b!==null){const A=b.array;C=b.version;for(let I=0,N=A.length;I<N;I+=3){const F=A[I+0],k=A[I+1],O=A[I+2];g.push(F,k,k,O,O,F)}}else{const A=x.array;C=x.version;for(let I=0,N=A.length/3-1;I<N;I+=3){const F=I+0,k=I+1,O=I+2;g.push(F,k,k,O,O,F)}}const _=new(x.count>=65535?j0:G0)(g,1);_.version=C;const y=c.get(S);y&&e.remove(y),c.set(S,_)}function v(S){const g=c.get(S);if(g){const b=S.index;b!==null&&g.version<b.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function mT(s,e,r){let a;function l(g){a=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,b){s.drawElements(a,b,c,g*d),r.update(b,a,1)}function h(g,b,x){x!==0&&(s.drawElementsInstanced(a,b,c,g*d,x),r.update(b,a,x))}function v(g,b,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,g,0,x);let C=0;for(let _=0;_<x;_++)C+=b[_];r.update(C,a,1)}function S(g,b,x,C){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)h(g[y]/d,b[y],C[y]);else{_.multiDrawElementsInstancedWEBGL(a,b,0,c,g,0,C,0,x);let y=0;for(let A=0;A<x;A++)y+=b[A]*C[A];r.update(y,a,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function gT(s){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,p){switch(r.calls++,d){case s.TRIANGLES:r.triangles+=p*(c/3);break;case s.LINES:r.lines+=p*(c/2);break;case s.LINE_STRIP:r.lines+=p*(c-1);break;case s.LINE_LOOP:r.lines+=p*c;break;case s.POINTS:r.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:l,update:a}}function vT(s,e,r){const a=new WeakMap,l=new on;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=a.get(p);if(g===void 0||g.count!==S){let b=function(){M.dispose(),a.delete(p),p.removeEventListener("dispose",b)};g!==void 0&&g.texture.dispose();const x=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let N=0;x===!0&&(N=1),C===!0&&(N=2),_===!0&&(N=3);let F=p.attributes.position.count*N,k=1;F>e.maxTextureSize&&(k=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*k*4*S),M=new B0(O,F,k,S);M.type=Ir,M.needsUpdate=!0;const P=N*4;for(let ue=0;ue<S;ue++){const V=y[ue],J=A[ue],oe=I[ue],le=F*k*4*ue;for(let ne=0;ne<V.count;ne++){const U=ne*P;x===!0&&(l.fromBufferAttribute(V,ne),O[le+U+0]=l.x,O[le+U+1]=l.y,O[le+U+2]=l.z,O[le+U+3]=0),C===!0&&(l.fromBufferAttribute(J,ne),O[le+U+4]=l.x,O[le+U+5]=l.y,O[le+U+6]=l.z,O[le+U+7]=0),_===!0&&(l.fromBufferAttribute(oe,ne),O[le+U+8]=l.x,O[le+U+9]=l.y,O[le+U+10]=l.z,O[le+U+11]=oe.itemSize===4?l.w:1)}}g={count:S,texture:M,size:new zt(F,k)},a.set(p,g),p.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,r);else{let b=0;for(let C=0;C<h.length;C++)b+=h[C];const x=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",x),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,r),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function _T(s,e,r,a,l){let c=new WeakMap;function d(h){const v=l.render.frame,S=h.geometry,g=e.get(h,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(r.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&r.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),r.remove(v.instanceMatrix),v.instanceColor!==null&&r.remove(v.instanceColor)}return{update:d,dispose:p}}const yT={[M0]:"LINEAR_TONE_MAPPING",[w0]:"REINHARD_TONE_MAPPING",[T0]:"CINEON_TONE_MAPPING",[A0]:"ACES_FILMIC_TONE_MAPPING",[C0]:"AGX_TONE_MAPPING",[P0]:"NEUTRAL_TONE_MAPPING",[R0]:"CUSTOM_TONE_MAPPING"};function bT(s,e,r,a,l){const c=new Or(e,r,{type:s,depthBuffer:a,stencilBuffer:l}),d=new Or(e,r,{type:bi,depthBuffer:!1,stencilBuffer:!1}),p=new $n;p.setAttribute("position",new fr([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new fr([0,2,0,0,2,0],2));const m=new mE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ei(p,m),v=new $0(-1,1,1,-1,0,1);let S=null,g=null,b=!1,x,C=null,_=[],y=!1;this.setSize=function(A,I){c.setSize(A,I),d.setSize(A,I);for(let N=0;N<_.length;N++){const F=_[N];F.setSize&&F.setSize(A,I)}},this.setEffects=function(A){_=A,y=_.length>0&&_[0].isRenderPass===!0;const I=c.width,N=c.height;for(let F=0;F<_.length;F++){const k=_[F];k.setSize&&k.setSize(I,N)}},this.begin=function(A,I){if(b||A.toneMapping===Fr&&_.length===0)return!1;if(C=I,I!==null){const N=I.width,F=I.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&A.setRenderTarget(c),x=A.toneMapping,A.toneMapping=Fr,!0},this.hasRenderPass=function(){return y},this.end=function(A,I){A.toneMapping=x,b=!0;let N=c,F=d;for(let k=0;k<_.length;k++){const O=_[k];if(O.enabled!==!1&&(O.render(A,F,N,I),O.needsSwap!==!1)){const M=N;N=F,F=M}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},bt.getTransfer(S)===Dt&&(m.defines.SRGB_TRANSFER="");const k=yT[g];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(C),A.render(h,v),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const ny=new Dn,qh=new Zo(1,1),ry=new B0,iy=new G1,ay=new Y0,H_=[],V_=[],G_=new Float32Array(16),j_=new Float32Array(9),W_=new Float32Array(4);function Hs(s,e,r){const a=s[0];if(a<=0||a>0)return s;const l=e*r;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){a.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=r,s[d].toArray(c,p)}return c}function pn(s,e){if(s.length!==e.length)return!1;for(let r=0,a=s.length;r<a;r++)if(s[r]!==e[r])return!1;return!0}function mn(s,e){for(let r=0,a=e.length;r<a;r++)s[r]=e[r]}function hu(s,e){let r=V_[e];r===void 0&&(r=new Int32Array(e),V_[e]=r);for(let a=0;a!==e;++a)r[a]=s.allocateTextureUnit();return r}function xT(s,e){const r=this.cache;r[0]!==e&&(s.uniform1f(this.addr,e),r[0]=e)}function ST(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(pn(r,e))return;s.uniform2fv(this.addr,e),mn(r,e)}}function ET(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(pn(r,e))return;s.uniform3fv(this.addr,e),mn(r,e)}}function MT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(pn(r,e))return;s.uniform4fv(this.addr,e),mn(r,e)}}function wT(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(pn(r,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(r,e)}else{if(pn(r,a))return;W_.set(a),s.uniformMatrix2fv(this.addr,!1,W_),mn(r,a)}}function TT(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(pn(r,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(r,e)}else{if(pn(r,a))return;j_.set(a),s.uniformMatrix3fv(this.addr,!1,j_),mn(r,a)}}function AT(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(pn(r,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(r,e)}else{if(pn(r,a))return;G_.set(a),s.uniformMatrix4fv(this.addr,!1,G_),mn(r,a)}}function RT(s,e){const r=this.cache;r[0]!==e&&(s.uniform1i(this.addr,e),r[0]=e)}function CT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(pn(r,e))return;s.uniform2iv(this.addr,e),mn(r,e)}}function PT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(pn(r,e))return;s.uniform3iv(this.addr,e),mn(r,e)}}function NT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(pn(r,e))return;s.uniform4iv(this.addr,e),mn(r,e)}}function LT(s,e){const r=this.cache;r[0]!==e&&(s.uniform1ui(this.addr,e),r[0]=e)}function DT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(pn(r,e))return;s.uniform2uiv(this.addr,e),mn(r,e)}}function UT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(pn(r,e))return;s.uniform3uiv(this.addr,e),mn(r,e)}}function IT(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(pn(r,e))return;s.uniform4uiv(this.addr,e),mn(r,e)}}function kT(s,e,r){const a=this.cache,l=r.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(qh.compareFunction=r.isReversedDepthBuffer()?cp:lp,c=qh):c=ny,r.setTexture2D(e||c,l)}function FT(s,e,r){const a=this.cache,l=r.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),r.setTexture3D(e||iy,l)}function OT(s,e,r){const a=this.cache,l=r.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),r.setTextureCube(e||ay,l)}function zT(s,e,r){const a=this.cache,l=r.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),r.setTexture2DArray(e||ry,l)}function BT(s){switch(s){case 5126:return xT;case 35664:return ST;case 35665:return ET;case 35666:return MT;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return PT;case 35669:case 35673:return NT;case 5125:return LT;case 36294:return DT;case 36295:return UT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return zT}}function HT(s,e){s.uniform1fv(this.addr,e)}function VT(s,e){const r=Hs(e,this.size,2);s.uniform2fv(this.addr,r)}function GT(s,e){const r=Hs(e,this.size,3);s.uniform3fv(this.addr,r)}function jT(s,e){const r=Hs(e,this.size,4);s.uniform4fv(this.addr,r)}function WT(s,e){const r=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,r)}function XT(s,e){const r=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,r)}function qT(s,e){const r=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,r)}function KT(s,e){s.uniform1iv(this.addr,e)}function YT(s,e){s.uniform2iv(this.addr,e)}function JT(s,e){s.uniform3iv(this.addr,e)}function QT(s,e){s.uniform4iv(this.addr,e)}function ZT(s,e){s.uniform1uiv(this.addr,e)}function $T(s,e){s.uniform2uiv(this.addr,e)}function eA(s,e){s.uniform3uiv(this.addr,e)}function tA(s,e){s.uniform4uiv(this.addr,e)}function nA(s,e,r){const a=this.cache,l=e.length,c=hu(r,l);pn(a,c)||(s.uniform1iv(this.addr,c),mn(a,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=qh:d=ny;for(let p=0;p!==l;++p)r.setTexture2D(e[p]||d,c[p])}function rA(s,e,r){const a=this.cache,l=e.length,c=hu(r,l);pn(a,c)||(s.uniform1iv(this.addr,c),mn(a,c));for(let d=0;d!==l;++d)r.setTexture3D(e[d]||iy,c[d])}function iA(s,e,r){const a=this.cache,l=e.length,c=hu(r,l);pn(a,c)||(s.uniform1iv(this.addr,c),mn(a,c));for(let d=0;d!==l;++d)r.setTextureCube(e[d]||ay,c[d])}function aA(s,e,r){const a=this.cache,l=e.length,c=hu(r,l);pn(a,c)||(s.uniform1iv(this.addr,c),mn(a,c));for(let d=0;d!==l;++d)r.setTexture2DArray(e[d]||ry,c[d])}function sA(s){switch(s){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return jT;case 35674:return WT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return YT;case 35668:case 35672:return JT;case 35669:case 35673:return QT;case 5125:return ZT;case 36294:return $T;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}class oA{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.type=r.type,this.setValue=BT(r.type)}}class lA{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=sA(r.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,a){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,r[p.id],a)}}}const Zf=/(\w+)(\])?(\[|\.)?/g;function X_(s,e){s.seq.push(e),s.map[e.id]=e}function uA(s,e,r){const a=s.name,l=a.length;for(Zf.lastIndex=0;;){const c=Zf.exec(a),d=Zf.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){X_(r,h===void 0?new oA(p,s,e):new lA(p,s,e));break}else{let v=r.map[p];v===void 0&&(v=new cA(p),X_(r,v)),r=v}}}class Zc{constructor(e,r){this.seq=[],this.map={};const a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let d=0;d<a;++d){const p=e.getActiveUniform(r,d),m=e.getUniformLocation(r,p.name);uA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,r,a,l){const c=this.map[r];c!==void 0&&c.setValue(e,a,l)}setOptional(e,r,a){const l=r[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,r,a,l){for(let c=0,d=r.length;c!==d;++c){const p=r[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,r){const a=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in r&&a.push(d)}return a}}function q_(s,e,r){const a=s.createShader(e);return s.shaderSource(a,r),s.compileShader(a),a}const dA=37297;let fA=0;function hA(s,e){const r=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,r.length);for(let d=l;d<c;d++){const p=d+1;a.push(`${p===e?">":" "} ${p}: ${r[d]}`)}return a.join(`
`)}const K_=new lt;function pA(s){bt._getMatrix(K_,bt.workingColorSpace,s);const e=`mat3( ${K_.elements.map(r=>r.toFixed(4))} )`;switch(bt.getTransfer(s)){case nu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Y_(s,e,r){const a=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return r.toUpperCase()+`

`+l+`

`+hA(s.getShaderSource(e),d)}else return l}function mA(s,e){const r=pA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}const gA={[M0]:"Linear",[w0]:"Reinhard",[T0]:"Cineon",[A0]:"ACESFilmic",[C0]:"AgX",[P0]:"Neutral",[R0]:"Custom"};function vA(s,e){const r=gA[e];return r===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const jc=new re;function _A(){bt.getLuminanceCoefficients(jc);const s=jc.x.toFixed(4),e=jc.y.toFixed(4),r=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function bA(s){const e=[];for(const r in s){const a=s[r];a!==!1&&e.push("#define "+r+" "+a)}return e.join(`
`)}function xA(s,e){const r={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),r[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return r}function Ko(s){return s!==""}function J_(s,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(SA,MA)}const EA=new Map;function MA(s,e){let r=ct[e];if(r===void 0){const a=EA.get(e);if(a!==void 0)r=ct[a],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Kh(r)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(s){return s.replace(wA,TA)}function TA(s,e,r,a){let l="";for(let c=parseInt(e);c<parseInt(r);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AA={[qc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function RA(s){return AA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CA={[Da]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function PA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":CA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[Ds]:"ENVMAP_MODE_REFRACTION"};function LA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DA={[E0]:"ENVMAP_BLENDING_MULTIPLY",[x1]:"ENVMAP_BLENDING_MIX",[S1]:"ENVMAP_BLENDING_ADD"};function UA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DA[s.combine]||"ENVMAP_BLENDING_NONE"}function IA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:a,maxMip:r}}function kA(s,e,r,a){const l=s.getContext(),c=r.defines;let d=r.vertexShader,p=r.fragmentShader;const m=RA(r),h=PA(r),v=LA(r),S=UA(r),g=IA(r),b=yA(r),x=bA(c),C=l.createProgram();let _,y,A=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(_=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Ko).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Ko).join(`
`),y.length>0&&(y+=`
`)):(_=[$_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+v:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+m:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),y=[$_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+v:"",r.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas||r.batchingColor?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+m:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Fr?"#define TONE_MAPPING":"",r.toneMapping!==Fr?ct.tonemapping_pars_fragment:"",r.toneMapping!==Fr?vA("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,mA("linearToOutputTexel",r.outputColorSpace),_A(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ko).join(`
`)),d=Kh(d),d=J_(d,r),d=Q_(d,r),p=Kh(p),p=J_(p,r),p=Q_(p,r),d=Z_(d),p=Z_(p),r.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",r.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=A+_+d,N=A+y+p,F=q_(l,l.VERTEX_SHADER,I),k=q_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,F),l.attachShader(C,k),r.index0AttributeName!==void 0?l.bindAttribLocation(C,0,r.index0AttributeName):r.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(V){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",oe=l.getShaderInfoLog(F)||"",le=l.getShaderInfoLog(k)||"",ne=J.trim(),U=oe.trim(),H=le.trim();let ce=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,F,k);else{const L=Y_(l,F,"vertex"),Q=Y_(l,k,"fragment");Et("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ne+`
`+L+`
`+Q)}else ne!==""?it("WebGLProgram: Program Info Log:",ne):(U===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:U,prefix:_},fragmentShader:{log:H,prefix:y}})}l.deleteShader(F),l.deleteShader(k),M=new Zc(l,C),P=xA(l,C)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let ue=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(C,dA)),ue},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=k,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(r),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const a of r)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let a=r.get(e);return a===void 0&&(a=new Set,r.set(e,a)),a}_getShaderStage(e){const r=this.shaderCache;let a=r.get(e);return a===void 0&&(a=new zA(e),r.set(e,a)),a}}class zA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function BA(s,e,r,a,l,c){const d=new H0,p=new OA,m=new Set,h=[],v=new Map,S=a.logarithmicDepthBuffer;let g=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return m.add(M),M===0?"uv":`uv${M}`}function C(M,P,ue,V,J){const oe=V.fog,le=J.geometry,ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,H=e.get(M.envMap||ne,U),ce=H&&H.mapping===uu?H.image.height:null,_e=b[M.type];M.precision!==null&&(g=a.getMaxPrecision(M.precision),g!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const L=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Q=L!==void 0?L.length:0;let ge=0;le.morphAttributes.position!==void 0&&(ge=1),le.morphAttributes.normal!==void 0&&(ge=2),le.morphAttributes.color!==void 0&&(ge=3);let be,Ne,Xe,$;if(_e){const xt=Ur[_e];be=xt.vertexShader,Ne=xt.fragmentShader}else be=M.vertexShader,Ne=M.fragmentShader,p.update(M),Xe=p.getVertexShaderID(M),$=p.getFragmentShaderID(M);const Ee=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),et=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,ze=!!M.map,Mt=!!M.matcap,wt=!!H,at=!!M.aoMap,nn=!!M.lightMap,Zt=!!M.bumpMap,Ut=!!M.normalMap,G=!!M.displacementMap,Xt=!!M.emissiveMap,yt=!!M.metalnessMap,Tt=!!M.roughnessMap,We=M.anisotropy>0,D=M.clearcoat>0,w=M.dispersion>0,X=M.iridescence>0,me=M.sheen>0,he=M.transmission>0,pe=We&&!!M.anisotropyMap,Ie=D&&!!M.clearcoatMap,Ce=D&&!!M.clearcoatNormalMap,Ye=D&&!!M.clearcoatRoughnessMap,qe=X&&!!M.iridescenceMap,Me=X&&!!M.iridescenceThicknessMap,Te=me&&!!M.sheenColorMap,je=me&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ue=!!M.specularColorMap,ut=!!M.specularIntensityMap,W=he&&!!M.transmissionMap,Pe=he&&!!M.thicknessMap,Ae=!!M.gradientMap,Fe=!!M.alphaMap,we=M.alphaTest>0,fe=!!M.alphaHash,He=!!M.extensions;let Qe=Fr;M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Qe=s.toneMapping);const qt={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:Ne,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Is,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:Mt,envMap:wt,envMapMode:wt&&H.mapping,envMapCubeUVHeight:ce,aoMap:at,lightMap:nn,bumpMap:Zt,normalMap:Ut,displacementMap:G,emissiveMap:Xt,normalMapObjectSpace:Ut&&M.normalMapType===T1,normalMapTangentSpace:Ut&&M.normalMapType===w1,metalnessMap:yt,roughnessMap:Tt,anisotropy:We,anisotropyMap:pe,clearcoat:D,clearcoatMap:Ie,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:w,iridescence:X,iridescenceMap:qe,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Te,sheenRoughnessMap:je,specularMap:Be,specularColorMap:Ue,specularIntensityMap:ut,transmission:he,transmissionMap:W,thicknessMap:Pe,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===Ps&&M.alphaToCoverage===!1,alphaMap:Fe,alphaTest:we,alphaHash:fe,combine:M.combine,mapUv:ze&&x(M.map.channel),aoMapUv:at&&x(M.aoMap.channel),lightMapUv:nn&&x(M.lightMap.channel),bumpMapUv:Zt&&x(M.bumpMap.channel),normalMapUv:Ut&&x(M.normalMap.channel),displacementMapUv:G&&x(M.displacementMap.channel),emissiveMapUv:Xt&&x(M.emissiveMap.channel),metalnessMapUv:yt&&x(M.metalnessMap.channel),roughnessMapUv:Tt&&x(M.roughnessMap.channel),anisotropyMapUv:pe&&x(M.anisotropyMap.channel),clearcoatMapUv:Ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(M.sheenRoughnessMap.channel),specularMapUv:Be&&x(M.specularMap.channel),specularColorMapUv:Ue&&x(M.specularColorMap.channel),specularIntensityMapUv:ut&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:Pe&&x(M.thicknessMap.channel),alphaMapUv:Fe&&x(M.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ut||We),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(ze||Fe),fog:!!oe,useFog:M.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||le.attributes.normal===void 0&&Ut===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&ue.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:Xt&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===Gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function _(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ue in M.defines)P.push(ue),P.push(M.defines[ue]);return M.isRawShaderMaterial===!1&&(y(P,M),A(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function y(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function A(M,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),M.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),M.push(d.mask)}function I(M){const P=b[M.type];let ue;if(P){const V=Ur[P];ue=fE.clone(V.uniforms)}else ue=M.uniforms;return ue}function N(M,P){let ue=v.get(P);return ue!==void 0?++ue.usedTimes:(ue=new kA(s,P,M,l),h.push(ue),v.set(P,ue)),ue}function F(M){if(--M.usedTimes===0){const P=h.indexOf(M);h[P]=h[h.length-1],h.pop(),v.delete(M.cacheKey),M.destroy()}}function k(M){p.remove(M)}function O(){p.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:I,acquireProgram:N,releaseProgram:F,releaseShaderCache:k,programs:h,dispose:O}}function HA(){let s=new WeakMap;function e(d){return s.has(d)}function r(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function a(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:r,remove:a,update:l,dispose:c}}function VA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function t0(){const s=[];let e=0;const r=[],a=[],l=[];function c(){e=0,r.length=0,a.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,x,C,_,y){let A=s[e];return A===void 0?(A={id:g.id,object:g,geometry:b,material:x,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:y},s[e]=A):(A.id=g.id,A.object=g,A.geometry=b,A.material=x,A.materialVariant=d(g),A.groupOrder=C,A.renderOrder=g.renderOrder,A.z=_,A.group=y),e++,A}function m(g,b,x,C,_,y){const A=p(g,b,x,C,_,y);x.transmission>0?a.push(A):x.transparent===!0?l.push(A):r.push(A)}function h(g,b,x,C,_,y){const A=p(g,b,x,C,_,y);x.transmission>0?a.unshift(A):x.transparent===!0?l.unshift(A):r.unshift(A)}function v(g,b){r.length>1&&r.sort(g||VA),a.length>1&&a.sort(b||e0),l.length>1&&l.sort(b||e0)}function S(){for(let g=e,b=s.length;g<b;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:r,transmissive:a,transparent:l,init:c,push:m,unshift:h,finish:S,sort:v}}function GA(){let s=new WeakMap;function e(a,l){const c=s.get(a);let d;return c===void 0?(d=new t0,s.set(a,[d])):l>=c.length?(d=new t0,c.push(d)):d=c[l],d}function r(){s=new WeakMap}return{get:e,dispose:r}}function jA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new re,color:new vt};break;case"SpotLight":r={position:new re,direction:new re,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new re,color:new vt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new re,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":r={color:new vt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=r,r}}}function WA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=r,r}}}let XA=0;function qA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KA(s){const e=new jA,r=WA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new re);const l=new re,c=new tn,d=new tn;function p(h){let v=0,S=0,g=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let b=0,x=0,C=0,_=0,y=0,A=0,I=0,N=0,F=0,k=0,O=0;h.sort(qA);for(let P=0,ue=h.length;P<ue;P++){const V=h[P],J=V.color,oe=V.intensity,le=V.distance;let ne=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Us?ne=V.shadow.map.texture:ne=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*oe,S+=J.g*oe,g+=J.b*oe;else if(V.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(V.sh.coefficients[U],oe);O++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ce=r.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,a.directionalShadow[b]=ce,a.directionalShadowMap[b]=ne,a.directionalShadowMatrix[b]=V.shadow.matrix,A++}a.directional[b]=U,b++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(J).multiplyScalar(oe),U.distance=le,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,a.spot[C]=U;const H=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&k++),a.spotLightMatrix[C]=H.matrix,V.castShadow){const ce=r.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,a.spotShadow[C]=ce,a.spotShadowMap[C]=ne,N++}C++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(J).multiplyScalar(oe),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),a.rectArea[_]=U,_++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const H=V.shadow,ce=r.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,ce.shadowCameraNear=H.camera.near,ce.shadowCameraFar=H.camera.far,a.pointShadow[x]=ce,a.pointShadowMap[x]=ne,a.pointShadowMatrix[x]=V.shadow.matrix,I++}a.point[x]=U,x++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(oe),U.groundColor.copy(V.groundColor).multiplyScalar(oe),a.hemi[y]=U,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=De.LTC_FLOAT_1,a.rectAreaLTC2=De.LTC_FLOAT_2):(a.rectAreaLTC1=De.LTC_HALF_1,a.rectAreaLTC2=De.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=S,a.ambient[2]=g;const M=a.hash;(M.directionalLength!==b||M.pointLength!==x||M.spotLength!==C||M.rectAreaLength!==_||M.hemiLength!==y||M.numDirectionalShadows!==A||M.numPointShadows!==I||M.numSpotShadows!==N||M.numSpotMaps!==F||M.numLightProbes!==O)&&(a.directional.length=b,a.spot.length=C,a.rectArea.length=_,a.point.length=x,a.hemi.length=y,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=N+F-k,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=k,a.numLightProbes=O,M.directionalLength=b,M.pointLength=x,M.spotLength=C,M.rectAreaLength=_,M.hemiLength=y,M.numDirectionalShadows=A,M.numPointShadows=I,M.numSpotShadows=N,M.numSpotMaps=F,M.numLightProbes=O,a.version=XA++)}function m(h,v){let S=0,g=0,b=0,x=0,C=0;const _=v.matrixWorldInverse;for(let y=0,A=h.length;y<A;y++){const I=h[y];if(I.isDirectionalLight){const N=a.directional[S];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),S++}else if(I.isSpotLight){const N=a.spot[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),b++}else if(I.isRectAreaLight){const N=a.rectArea[x];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),d.identity(),c.copy(I.matrixWorld),c.premultiply(_),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),x++}else if(I.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),g++}else if(I.isHemisphereLight){const N=a.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(_),C++}}}return{setup:p,setupView:m,state:a}}function n0(s){const e=new KA(s),r=[],a=[];function l(v){h.camera=v,r.length=0,a.length=0}function c(v){r.push(v)}function d(v){a.push(v)}function p(){e.setup(r)}function m(v){e.setupView(r,v)}const h={lightsArray:r,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function YA(s){let e=new WeakMap;function r(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new n0(s),e.set(l,[p])):c>=d.length?(p=new n0(s),d.push(p)):p=d[c],p}function a(){e=new WeakMap}return{get:r,dispose:a}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],$A=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],r0=new tn,Xo=new re,$f=new re;function eR(s,e,r){let a=new X0;const l=new zt,c=new zt,d=new on,p=new gE,m=new vE,h={},v=r.maxTextureSize,S={[aa]:Gn,[Gn]:aa,[pi]:pi},g=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:JA,fragmentShader:QA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const x=new $n;x.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ei(x,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let y=this.type;this.render=function(k,O,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;this.type===n1&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const P=s.getRenderTarget(),ue=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),J=s.state;J.setBlending(vi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const oe=y!==this.type;oe&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ne=>ne.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ne=k.length;le<ne;le++){const U=k[le],H=U.shadow;if(H===void 0){it("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ce=H.getFrameExtents();l.multiply(ce),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ce.x),l.x=c.x*ce.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ce.y),l.y=c.y*ce.y,H.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||oe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(U.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Or(l.x,l.y,{format:Us,type:bi,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Zo(l.x,l.y,Ir),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=xi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else U.isPointLight?(H.map=new ty(l.x),H.map.depthTexture=new uE(l.x,zr)):(H.map=new Or(l.x,l.y),H.map.depthTexture=new Zo(l.x,l.y,zr)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=xi,this.type===qc?(H.map.depthTexture.compareFunction=_e?cp:lp,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn);H.camera.updateProjectionMatrix()}const L=H.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<L;Q++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(H.map),s.clear());const ge=H.getViewport(Q);d.set(c.x*ge.x,c.y*ge.y,c.x*ge.z,c.y*ge.w),J.viewport(d)}if(U.isPointLight){const ge=H.camera,be=H.matrix,Ne=U.distance||ge.far;Ne!==ge.far&&(ge.far=Ne,ge.updateProjectionMatrix()),Xo.setFromMatrixPosition(U.matrixWorld),ge.position.copy(Xo),$f.copy(ge.position),$f.add(ZA[Q]),ge.up.copy($A[Q]),ge.lookAt($f),ge.updateMatrixWorld(),be.makeTranslation(-Xo.x,-Xo.y,-Xo.z),r0.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),H._frustum.setFromProjectionMatrix(r0,ge.coordinateSystem,ge.reversedDepth)}else H.updateMatrices(U);a=H.getFrustum(),N(O,M,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&A(H,M),H.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(P,ue,V)};function A(k,O){const M=e.update(C);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,b.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Or(l.x,l.y,{format:Us,type:bi})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,M,g,C,null),b.uniforms.shadow_pass.value=k.mapPass.texture,b.uniforms.resolution.value=k.mapSize,b.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,M,b,C,null)}function I(k,O,M,P){let ue=null;const V=M.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=M.isPointLight===!0?m:p,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=ue.uuid,oe=O.uuid;let le=h[J];le===void 0&&(le={},h[J]=le);let ne=le[oe];ne===void 0&&(ne=ue.clone(),le[oe]=ne,O.addEventListener("dispose",F)),ue=ne}if(ue.visible=O.visible,ue.wireframe=O.wireframe,P===qo?ue.side=O.shadowSide!==null?O.shadowSide:O.side:ue.side=O.shadowSide!==null?O.shadowSide:S[O.side],ue.alphaMap=O.alphaMap,ue.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ue.map=O.map,ue.clipShadows=O.clipShadows,ue.clippingPlanes=O.clippingPlanes,ue.clipIntersection=O.clipIntersection,ue.displacementMap=O.displacementMap,ue.displacementScale=O.displacementScale,ue.displacementBias=O.displacementBias,ue.wireframeLinewidth=O.wireframeLinewidth,ue.linewidth=O.linewidth,M.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const J=s.properties.get(ue);J.light=M}return ue}function N(k,O,M,P,ue){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&ue===qo)&&(!k.frustumCulled||a.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,k.matrixWorld);const J=e.update(k),oe=k.material;if(Array.isArray(oe)){const le=J.groups;for(let ne=0,U=le.length;ne<U;ne++){const H=le[ne],ce=oe[H.materialIndex];if(ce&&ce.visible){const _e=I(k,ce,P,ue);k.onBeforeShadow(s,k,O,M,J,_e,H),s.renderBufferDirect(M,null,J,_e,k,H),k.onAfterShadow(s,k,O,M,J,_e,H)}}}else if(oe.visible){const le=I(k,oe,P,ue);k.onBeforeShadow(s,k,O,M,J,le,null),s.renderBufferDirect(M,null,J,le,k,null),k.onAfterShadow(s,k,O,M,J,le,null)}}const V=k.children;for(let J=0,oe=V.length;J<oe;J++)N(V[J],O,M,P,ue)}function F(k){k.target.removeEventListener("dispose",F);for(const O in h){const M=h[O],P=k.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function tR(s,e){function r(){let W=!1;const Pe=new on;let Ae=null;const Fe=new on(0,0,0,0);return{setMask:function(we){Ae!==we&&!W&&(s.colorMask(we,we,we,we),Ae=we)},setLocked:function(we){W=we},setClear:function(we,fe,He,Qe,qt){qt===!0&&(we*=Qe,fe*=Qe,He*=Qe),Pe.set(we,fe,He,Qe),Fe.equals(Pe)===!1&&(s.clearColor(we,fe,He,Qe),Fe.copy(Pe))},reset:function(){W=!1,Ae=null,Fe.set(-1,0,0,0)}}}function a(){let W=!1,Pe=!1,Ae=null,Fe=null,we=null;return{setReversed:function(fe){if(Pe!==fe){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=fe;const Qe=we;we=null,this.setClear(Qe)}},getReversed:function(){return Pe},setTest:function(fe){fe?Ee(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(fe){Ae!==fe&&!W&&(s.depthMask(fe),Ae=fe)},setFunc:function(fe){if(Pe&&(fe=k1[fe]),Fe!==fe){switch(fe){case ih:s.depthFunc(s.NEVER);break;case ah:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=fe}},setLocked:function(fe){W=fe},setClear:function(fe){we!==fe&&(we=fe,Pe&&(fe=1-fe),s.clearDepth(fe))},reset:function(){W=!1,Ae=null,Fe=null,we=null,Pe=!1}}}function l(){let W=!1,Pe=null,Ae=null,Fe=null,we=null,fe=null,He=null,Qe=null,qt=null;return{setTest:function(xt){W||(xt?Ee(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(xt){Pe!==xt&&!W&&(s.stencilMask(xt),Pe=xt)},setFunc:function(xt,hr,gn){(Ae!==xt||Fe!==hr||we!==gn)&&(s.stencilFunc(xt,hr,gn),Ae=xt,Fe=hr,we=gn)},setOp:function(xt,hr,gn){(fe!==xt||He!==hr||Qe!==gn)&&(s.stencilOp(xt,hr,gn),fe=xt,He=hr,Qe=gn)},setLocked:function(xt){W=xt},setClear:function(xt){qt!==xt&&(s.clearStencil(xt),qt=xt)},reset:function(){W=!1,Pe=null,Ae=null,Fe=null,we=null,fe=null,He=null,Qe=null,qt=null}}}const c=new r,d=new a,p=new l,m=new WeakMap,h=new WeakMap;let v={},S={},g=new WeakMap,b=[],x=null,C=!1,_=null,y=null,A=null,I=null,N=null,F=null,k=null,O=new vt(0,0,0),M=0,P=!1,ue=null,V=null,J=null,oe=null,le=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ce)[1]),U=H>=1):ce.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),U=H>=2);let _e=null,L={};const Q=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),be=new on().fromArray(Q),Ne=new on().fromArray(ge);function Xe(W,Pe,Ae,Fe){const we=new Uint8Array(4),fe=s.createTexture();s.bindTexture(W,fe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Ae;He++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return fe}const $={};$[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(s.DEPTH_TEST),d.setFunc(Ls),Zt(!1),Ut(i_),Ee(s.CULL_FACE),at(vi);function Ee(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Se(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function et(W,Pe){return S[W]!==Pe?(s.bindFramebuffer(W,Pe),S[W]=Pe,W===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Pe),W===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(W,Pe){let Ae=b,Fe=!1;if(W){Ae=g.get(Pe),Ae===void 0&&(Ae=[],g.set(Pe,Ae));const we=W.textures;if(Ae.length!==we.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,He=we.length;fe<He;fe++)Ae[fe]=s.COLOR_ATTACHMENT0+fe;Ae.length=we.length,Fe=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Ae)}function ze(W){return x!==W?(s.useProgram(W),x=W,!0):!1}const Mt={[Ca]:s.FUNC_ADD,[i1]:s.FUNC_SUBTRACT,[a1]:s.FUNC_REVERSE_SUBTRACT};Mt[s1]=s.MIN,Mt[o1]=s.MAX;const wt={[l1]:s.ZERO,[c1]:s.ONE,[u1]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[g1]:s.SRC_ALPHA_SATURATE,[p1]:s.DST_COLOR,[f1]:s.DST_ALPHA,[d1]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[m1]:s.ONE_MINUS_DST_COLOR,[h1]:s.ONE_MINUS_DST_ALPHA,[v1]:s.CONSTANT_COLOR,[_1]:s.ONE_MINUS_CONSTANT_COLOR,[y1]:s.CONSTANT_ALPHA,[b1]:s.ONE_MINUS_CONSTANT_ALPHA};function at(W,Pe,Ae,Fe,we,fe,He,Qe,qt,xt){if(W===vi){C===!0&&(Se(s.BLEND),C=!1);return}if(C===!1&&(Ee(s.BLEND),C=!0),W!==r1){if(W!==_||xt!==P){if((y!==Ca||N!==Ca)&&(s.blendEquation(s.FUNC_ADD),y=Ca,N=Ca),xt)switch(W){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFunc(s.ONE,s.ONE);break;case a_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case s_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case a_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",W);break}A=null,I=null,F=null,k=null,O.set(0,0,0),M=0,_=W,P=xt}return}we=we||Pe,fe=fe||Ae,He=He||Fe,(Pe!==y||we!==N)&&(s.blendEquationSeparate(Mt[Pe],Mt[we]),y=Pe,N=we),(Ae!==A||Fe!==I||fe!==F||He!==k)&&(s.blendFuncSeparate(wt[Ae],wt[Fe],wt[fe],wt[He]),A=Ae,I=Fe,F=fe,k=He),(Qe.equals(O)===!1||qt!==M)&&(s.blendColor(Qe.r,Qe.g,Qe.b,qt),O.copy(Qe),M=qt),_=W,P=!1}function nn(W,Pe){W.side===pi?Se(s.CULL_FACE):Ee(s.CULL_FACE);let Ae=W.side===Gn;Pe&&(Ae=!Ae),Zt(Ae),W.blending===Ps&&W.transparent===!1?at(vi):at(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(W){ue!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),ue=W)}function Ut(W){W!==e1?(Ee(s.CULL_FACE),W!==V&&(W===i_?s.cullFace(s.BACK):W===t1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),V=W}function G(W){W!==J&&(U&&s.lineWidth(W),J=W)}function Xt(W,Pe,Ae){W?(Ee(s.POLYGON_OFFSET_FILL),(oe!==Pe||le!==Ae)&&(oe=Pe,le=Ae,d.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,Ae))):Se(s.POLYGON_OFFSET_FILL)}function yt(W){W?Ee(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Tt(W){W===void 0&&(W=s.TEXTURE0+ne-1),_e!==W&&(s.activeTexture(W),_e=W)}function We(W,Pe,Ae){Ae===void 0&&(_e===null?Ae=s.TEXTURE0+ne-1:Ae=_e);let Fe=L[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},L[Ae]=Fe),(Fe.type!==W||Fe.texture!==Pe)&&(_e!==Ae&&(s.activeTexture(Ae),_e=Ae),s.bindTexture(W,Pe||$[W]),Fe.type=W,Fe.texture=Pe)}function D(){const W=L[_e];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function me(){try{s.texSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function he(){try{s.texSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function Ce(){try{s.texStorage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Ye(){try{s.texStorage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function qe(){try{s.texImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Me(){try{s.texImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function Te(W){be.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function je(W){Ne.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function Be(W,Pe){let Ae=h.get(Pe);Ae===void 0&&(Ae=new WeakMap,h.set(Pe,Ae));let Fe=Ae.get(W);Fe===void 0&&(Fe=s.getUniformBlockIndex(Pe,W.name),Ae.set(W,Fe))}function Ue(W,Pe){const Ae=h.get(Pe).get(W);m.get(Pe)!==Ae&&(s.uniformBlockBinding(Pe,Ae,W.__bindingPointIndex),m.set(Pe,Ae))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},_e=null,L={},S={},g=new WeakMap,b=[],x=null,C=!1,_=null,y=null,A=null,I=null,N=null,F=null,k=null,O=new vt(0,0,0),M=0,P=!1,ue=null,V=null,J=null,oe=null,le=null,be.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Se,bindFramebuffer:et,drawBuffers:Ze,useProgram:ze,setBlending:at,setMaterial:nn,setFlipSided:Zt,setCullFace:Ut,setLineWidth:G,setPolygonOffset:Xt,setScissorTest:yt,activeTexture:Tt,bindTexture:We,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:qe,texImage3D:Me,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:me,texSubImage3D:he,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ie,scissor:Te,viewport:je,reset:ut}}function nR(s,e,r,a,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,v=new WeakMap;let S;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,w){return b?new OffscreenCanvas(D,w):iu("canvas")}function C(D,w,X){let me=1;const he=We(D);if((he.width>X||he.height>X)&&(me=X/Math.max(he.width,he.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(me*he.width),Ie=Math.floor(me*he.height);S===void 0&&(S=x(pe,Ie));const Ce=w?x(pe,Ie):S;return Ce.width=pe,Ce.height=Ie,Ce.getContext("2d").drawImage(D,0,0,pe,Ie),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+pe+"x"+Ie+")."),Ce}else return"data"in D&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function _(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function A(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(D,w,X,me,he=!1){if(D!==null){if(s[D]!==void 0)return s[D];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=w;if(w===s.RED&&(X===s.FLOAT&&(pe=s.R32F),X===s.HALF_FLOAT&&(pe=s.R16F),X===s.UNSIGNED_BYTE&&(pe=s.R8)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(pe=s.R8UI),X===s.UNSIGNED_SHORT&&(pe=s.R16UI),X===s.UNSIGNED_INT&&(pe=s.R32UI),X===s.BYTE&&(pe=s.R8I),X===s.SHORT&&(pe=s.R16I),X===s.INT&&(pe=s.R32I)),w===s.RG&&(X===s.FLOAT&&(pe=s.RG32F),X===s.HALF_FLOAT&&(pe=s.RG16F),X===s.UNSIGNED_BYTE&&(pe=s.RG8)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(pe=s.RG8UI),X===s.UNSIGNED_SHORT&&(pe=s.RG16UI),X===s.UNSIGNED_INT&&(pe=s.RG32UI),X===s.BYTE&&(pe=s.RG8I),X===s.SHORT&&(pe=s.RG16I),X===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),X===s.UNSIGNED_INT&&(pe=s.RGB32UI),X===s.BYTE&&(pe=s.RGB8I),X===s.SHORT&&(pe=s.RGB16I),X===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),X===s.UNSIGNED_INT&&(pe=s.RGBA32UI),X===s.BYTE&&(pe=s.RGBA8I),X===s.SHORT&&(pe=s.RGBA16I),X===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const Ie=he?nu:bt.getTransfer(me);X===s.FLOAT&&(pe=s.RGBA32F),X===s.HALF_FLOAT&&(pe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(pe=Ie===Dt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(D,w){let X;return D?w===null||w===zr||w===Qo?X=s.DEPTH24_STENCIL8:w===Ir?X=s.DEPTH32F_STENCIL8:w===Jo&&(X=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zr||w===Qo?X=s.DEPTH_COMPONENT24:w===Ir?X=s.DEPTH_COMPONENT32F:w===Jo&&(X=s.DEPTH_COMPONENT16),X}function F(D,w){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function k(D){const w=D.target;w.removeEventListener("dispose",k),M(w),w.isVideoTexture&&v.delete(w)}function O(D){const w=D.target;w.removeEventListener("dispose",O),ue(w)}function M(D){const w=a.get(D);if(w.__webglInit===void 0)return;const X=D.source,me=g.get(X);if(me){const he=me[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&P(D),Object.keys(me).length===0&&g.delete(X)}a.remove(D)}function P(D){const w=a.get(D);s.deleteTexture(w.__webglTexture);const X=D.source,me=g.get(X);delete me[w.__cacheKey],d.memory.textures--}function ue(D){const w=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let he=0;he<w.__webglFramebuffer[me].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[me][he]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=D.textures;for(let me=0,he=X.length;me<he;me++){const pe=a.get(X[me]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),d.memory.textures--),a.remove(X[me])}a.remove(D)}let V=0;function J(){V=0}function oe(){const D=V;return D>=l.maxTextures&&it("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function le(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ne(D,w){const X=a.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){const me=D.image;if(me===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,D,w);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);r.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function U(D,w){const X=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){$(X,D,w);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);r.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function H(D,w){const X=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){$(X,D,w);return}r.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function ce(D,w){const X=a.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){Ee(X,D,w);return}r.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const _e={[dh]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[fh]:s.MIRRORED_REPEAT},L={[wn]:s.NEAREST,[E1]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Sf]:s.LINEAR_MIPMAP_NEAREST,[Na]:s.LINEAR_MIPMAP_LINEAR},Q={[A1]:s.NEVER,[L1]:s.ALWAYS,[R1]:s.LESS,[lp]:s.LEQUAL,[C1]:s.EQUAL,[cp]:s.GEQUAL,[P1]:s.GREATER,[N1]:s.NOTEQUAL};function ge(D,w){if(w.type===Ir&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===Sf||w.magFilter===_c||w.magFilter===Na||w.minFilter===Pn||w.minFilter===Sf||w.minFilter===_c||w.minFilter===Na)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,_e[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,_e[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,_e[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==_c&&w.minFilter!==Na||w.type===Ir&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function be(D,w){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let he=g.get(me);he===void 0&&(he={},g.set(me,he));const pe=le(w);if(pe!==D.__cacheKey){he[pe]===void 0&&(he[pe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,X=!0),he[pe].usedTimes++;const Ie=he[D.__cacheKey];Ie!==void 0&&(he[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&P(w)),D.__cacheKey=pe,D.__webglTexture=he[pe].texture}return X}function Ne(D,w,X){return Math.floor(Math.floor(D/X)/w)}function Xe(D,w,X,me){const he=D.updateRanges;if(he.length===0)r.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,X,me,w.data);else{he.sort((qe,Me)=>qe.start-Me.start);let pe=0;for(let qe=1;qe<he.length;qe++){const Me=he[pe],Te=he[qe],je=Me.start+Me.count,Be=Ne(Te.start,w.width,4),Ue=Ne(Me.start,w.width,4);Te.start<=je+1&&Be===Ue&&Ne(Te.start+Te.count-1,w.width,4)===Be?Me.count=Math.max(Me.count,Te.start+Te.count-Me.start):(++pe,he[pe]=Te)}he.length=pe+1;const Ie=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let qe=0,Me=he.length;qe<Me;qe++){const Te=he[qe],je=Math.floor(Te.start/4),Be=Math.ceil(Te.count/4),Ue=je%w.width,ut=Math.floor(je/w.width),W=Be;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,ut),r.texSubImage2D(s.TEXTURE_2D,0,Ue,ut,W,1,X,me,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function $(D,w,X){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const he=be(D,w),pe=w.source;r.bindTexture(me,D.__webglTexture,s.TEXTURE0+X);const Ie=a.get(pe);if(pe.version!==Ie.__version||he===!0){r.activeTexture(s.TEXTURE0+X);const Ce=bt.getPrimaries(bt.workingColorSpace),Ye=w.colorSpace===ra?null:bt.getPrimaries(w.colorSpace),qe=w.colorSpace===ra||Ce===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Me=C(w.image,!1,l.maxTextureSize);Me=Tt(w,Me);const Te=c.convert(w.format,w.colorSpace),je=c.convert(w.type);let Be=I(w.internalFormat,Te,je,w.colorSpace,w.isVideoTexture);ge(me,w);let Ue;const ut=w.mipmaps,W=w.isVideoTexture!==!0,Pe=Ie.__version===void 0||he===!0,Ae=pe.dataReady,Fe=F(w,Me);if(w.isDepthTexture)Be=N(w.format===La,w.type),Pe&&(W?r.texStorage2D(s.TEXTURE_2D,1,Be,Me.width,Me.height):r.texImage2D(s.TEXTURE_2D,0,Be,Me.width,Me.height,0,Te,je,null));else if(w.isDataTexture)if(ut.length>0){W&&Pe&&r.texStorage2D(s.TEXTURE_2D,Fe,Be,ut[0].width,ut[0].height);for(let we=0,fe=ut.length;we<fe;we++)Ue=ut[we],W?Ae&&r.texSubImage2D(s.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,je,Ue.data):r.texImage2D(s.TEXTURE_2D,we,Be,Ue.width,Ue.height,0,Te,je,Ue.data);w.generateMipmaps=!1}else W?(Pe&&r.texStorage2D(s.TEXTURE_2D,Fe,Be,Me.width,Me.height),Ae&&Xe(w,Me,Te,je)):r.texImage2D(s.TEXTURE_2D,0,Be,Me.width,Me.height,0,Te,je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Pe&&r.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Be,ut[0].width,ut[0].height,Me.depth);for(let we=0,fe=ut.length;we<fe;we++)if(Ue=ut[we],w.format!==Er)if(Te!==null)if(W){if(Ae)if(w.layerUpdates.size>0){const He=U_(Ue.width,Ue.height,w.format,w.type);for(const Qe of w.layerUpdates){const qt=Ue.data.subarray(Qe*He/Ue.data.BYTES_PER_ELEMENT,(Qe+1)*He/Ue.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,Qe,Ue.width,Ue.height,1,Te,qt)}w.clearLayerUpdates()}else r.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Me.depth,Te,Ue.data)}else r.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Be,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&r.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Me.depth,Te,je,Ue.data):r.texImage3D(s.TEXTURE_2D_ARRAY,we,Be,Ue.width,Ue.height,Me.depth,0,Te,je,Ue.data)}else{W&&Pe&&r.texStorage2D(s.TEXTURE_2D,Fe,Be,ut[0].width,ut[0].height);for(let we=0,fe=ut.length;we<fe;we++)Ue=ut[we],w.format!==Er?Te!==null?W?Ae&&r.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,Ue.data):r.compressedTexImage2D(s.TEXTURE_2D,we,Be,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&r.texSubImage2D(s.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,je,Ue.data):r.texImage2D(s.TEXTURE_2D,we,Be,Ue.width,Ue.height,0,Te,je,Ue.data)}else if(w.isDataArrayTexture)if(W){if(Pe&&r.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Be,Me.width,Me.height,Me.depth),Ae)if(w.layerUpdates.size>0){const we=U_(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const He=Me.data.subarray(fe*we/Me.data.BYTES_PER_ELEMENT,(fe+1)*we/Me.data.BYTES_PER_ELEMENT);r.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Te,je,He)}w.clearLayerUpdates()}else r.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,je,Me.data)}else r.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Me.width,Me.height,Me.depth,0,Te,je,Me.data);else if(w.isData3DTexture)W?(Pe&&r.texStorage3D(s.TEXTURE_3D,Fe,Be,Me.width,Me.height,Me.depth),Ae&&r.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,je,Me.data)):r.texImage3D(s.TEXTURE_3D,0,Be,Me.width,Me.height,Me.depth,0,Te,je,Me.data);else if(w.isFramebufferTexture){if(Pe)if(W)r.texStorage2D(s.TEXTURE_2D,Fe,Be,Me.width,Me.height);else{let we=Me.width,fe=Me.height;for(let He=0;He<Fe;He++)r.texImage2D(s.TEXTURE_2D,He,Be,we,fe,0,Te,je,null),we>>=1,fe>>=1}}else if(ut.length>0){if(W&&Pe){const we=We(ut[0]);r.texStorage2D(s.TEXTURE_2D,Fe,Be,we.width,we.height)}for(let we=0,fe=ut.length;we<fe;we++)Ue=ut[we],W?Ae&&r.texSubImage2D(s.TEXTURE_2D,we,0,0,Te,je,Ue):r.texImage2D(s.TEXTURE_2D,we,Be,Te,je,Ue);w.generateMipmaps=!1}else if(W){if(Pe){const we=We(Me);r.texStorage2D(s.TEXTURE_2D,Fe,Be,we.width,we.height)}Ae&&r.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,je,Me)}else r.texImage2D(s.TEXTURE_2D,0,Be,Te,je,Me);_(w)&&y(me),Ie.__version=pe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,X){if(w.image.length!==6)return;const me=be(D,w),he=w.source;r.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const pe=a.get(he);if(he.version!==pe.__version||me===!0){r.activeTexture(s.TEXTURE0+X);const Ie=bt.getPrimaries(bt.workingColorSpace),Ce=w.colorSpace===ra?null:bt.getPrimaries(w.colorSpace),Ye=w.colorSpace===ra||Ie===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!qe&&!Me?Te[fe]=C(w.image[fe],!0,l.maxCubemapSize):Te[fe]=Me?w.image[fe].image:w.image[fe],Te[fe]=Tt(w,Te[fe]);const je=Te[0],Be=c.convert(w.format,w.colorSpace),Ue=c.convert(w.type),ut=I(w.internalFormat,Be,Ue,w.colorSpace),W=w.isVideoTexture!==!0,Pe=pe.__version===void 0||me===!0,Ae=he.dataReady;let Fe=F(w,je);ge(s.TEXTURE_CUBE_MAP,w);let we;if(qe){W&&Pe&&r.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,je.width,je.height);for(let fe=0;fe<6;fe++){we=Te[fe].mipmaps;for(let He=0;He<we.length;He++){const Qe=we[He];w.format!==Er?Be!==null?W?Ae&&r.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,Qe.width,Qe.height,Be,Qe.data):r.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ut,Qe.width,Qe.height,0,Qe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,Qe.width,Qe.height,Be,Ue,Qe.data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ut,Qe.width,Qe.height,0,Be,Ue,Qe.data)}}}else{if(we=w.mipmaps,W&&Pe){we.length>0&&Fe++;const fe=We(Te[0]);r.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){W?Ae&&r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,Be,Ue,Te[fe].data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Te[fe].width,Te[fe].height,0,Be,Ue,Te[fe].data);for(let He=0;He<we.length;He++){const Qe=we[He].image[fe].image;W?Ae&&r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Qe.width,Qe.height,Be,Ue,Qe.data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ut,Qe.width,Qe.height,0,Be,Ue,Qe.data)}}else{W?Ae&&r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Ue,Te[fe]):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Be,Ue,Te[fe]);for(let He=0;He<we.length;He++){const Qe=we[He];W?Ae&&r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Be,Ue,Qe.image[fe]):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ut,Be,Ue,Qe.image[fe])}}}_(w)&&y(s.TEXTURE_CUBE_MAP),pe.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Se(D,w,X,me,he,pe){const Ie=c.convert(X.format,X.colorSpace),Ce=c.convert(X.type),Ye=I(X.internalFormat,Ie,Ce,X.colorSpace),qe=a.get(w),Me=a.get(X);if(Me.__renderTarget=w,!qe.__hasExternalTextures){const Te=Math.max(1,w.width>>pe),je=Math.max(1,w.height>>pe);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?r.texImage3D(he,pe,Ye,Te,je,w.depth,0,Ie,Ce,null):r.texImage2D(he,pe,Ye,Te,je,0,Ie,Ce,null)}r.bindFramebuffer(s.FRAMEBUFFER,D),Xt(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,he,Me.__webglTexture,0,G(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,he,Me.__webglTexture,pe),r.bindFramebuffer(s.FRAMEBUFFER,null)}function et(D,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,he=me&&me.isDepthTexture?me.type:null,pe=N(w.stencilBuffer,he),Ie=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(w)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(w),pe,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(w),pe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,D)}else{const me=w.textures;for(let he=0;he<me.length;he++){const pe=me[he],Ie=c.convert(pe.format,pe.colorSpace),Ce=c.convert(pe.type),Ye=I(pe.internalFormat,Ie,Ce,pe.colorSpace);Xt(w)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(w),Ye,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(w),Ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(D,w,X){const me=w.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=a.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),r.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ge(s.TEXTURE_CUBE_MAP,w.depthTexture);const qe=c.convert(w.depthTexture.format),Me=c.convert(w.depthTexture.type);let Te;w.depthTexture.format===xi?Te=s.DEPTH_COMPONENT24:w.depthTexture.format===La&&(Te=s.DEPTH24_STENCIL8);for(let je=0;je<6;je++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Te,w.width,w.height,0,qe,Me,null)}}else ne(w.depthTexture,0);const pe=he.__webglTexture,Ie=G(w),Ce=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,Ye=w.depthTexture.format===La?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===xi)Xt(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Ce,pe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Ce,pe,0);else if(w.depthTexture.format===La)Xt(w)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Ce,pe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Ce,pe,0);else throw new Error("Unknown depthTexture format")}function ze(D){const w=a.get(D),X=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",he)};me.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let me=0;me<6;me++)Ze(w.__webglFramebuffer[me],D,me);else{const me=D.texture.mipmaps;me&&me.length>0?Ze(w.__webglFramebuffer[0],D,0):Ze(w.__webglFramebuffer,D,0)}else if(X){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(r.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),et(w.__webglDepthbuffer[me],D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,pe)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?r.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):r.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),et(w.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,pe)}}r.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(D,w,X){const me=a.get(D);w!==void 0&&Se(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ze(D)}function wt(D){const w=D.texture,X=a.get(D),me=a.get(w);D.addEventListener("dispose",O);const he=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ie=he.length>1;if(Ie||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,d.memory.textures++),pe){X.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<w.mipmaps.length;Ye++)X.__webglFramebuffer[Ce][Ye]=s.createFramebuffer()}else X.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)X.__webglFramebuffer[Ce]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let Ce=0,Ye=he.length;Ce<Ye;Ce++){const qe=a.get(he[Ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&Xt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],r.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ce=0;Ce<he.length;Ce++){const Ye=he[Ce];X.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Ce]);const qe=c.convert(Ye.format,Ye.colorSpace),Me=c.convert(Ye.type),Te=I(Ye.internalFormat,qe,Me,Ye.colorSpace,D.isXRRenderTarget===!0),je=G(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Te,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,X.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),et(X.__webglDepthRenderbuffer,D,!0)),r.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){r.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ge(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ye=0;Ye<w.mipmaps.length;Ye++)Se(X.__webglFramebuffer[Ce][Ye],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else Se(X.__webglFramebuffer[Ce],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);_(w)&&y(s.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ie){for(let Ce=0,Ye=he.length;Ce<Ye;Ce++){const qe=he[Ce],Me=a.get(qe);let Te=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),r.bindTexture(Te,Me.__webglTexture),ge(Te,qe),Se(X.__webglFramebuffer,D,qe,s.COLOR_ATTACHMENT0+Ce,Te,0),_(qe)&&y(Te)}r.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),r.bindTexture(Ce,me.__webglTexture),ge(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Ye=0;Ye<w.mipmaps.length;Ye++)Se(X.__webglFramebuffer[Ye],D,w,s.COLOR_ATTACHMENT0,Ce,Ye);else Se(X.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Ce,0);_(w)&&y(Ce),r.unbindTexture()}D.depthBuffer&&ze(D)}function at(D){const w=D.textures;for(let X=0,me=w.length;X<me;X++){const he=w[X];if(_(he)){const pe=A(D),Ie=a.get(he).__webglTexture;r.bindTexture(pe,Ie),y(pe),r.unbindTexture()}}}const nn=[],Zt=[];function Ut(D){if(D.samples>0){if(Xt(D)===!1){const w=D.textures,X=D.width,me=D.height;let he=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=a.get(D),Ce=w.length>1;if(Ce)for(let qe=0;qe<w.length;qe++)r.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),r.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);r.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ye=D.texture.mipmaps;Ye&&Ye.length>0?r.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):r.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[qe]);const Me=a.get(w[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,X,me,0,0,X,me,he,s.NEAREST),m===!0&&(nn.length=0,Zt.length=0,nn.push(s.COLOR_ATTACHMENT0+qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nn.push(pe),Zt.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nn))}if(r.bindFramebuffer(s.READ_FRAMEBUFFER,null),r.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let qe=0;qe<w.length;qe++){r.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[qe]);const Me=a.get(w[qe]).__webglTexture;r.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,Me,0)}r.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Xt(D){const w=a.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(D){const w=d.render.frame;v.get(D)!==w&&(v.set(D,w),D.update())}function Tt(D,w){const X=D.colorSpace,me=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Is&&X!==ra&&(bt.getTransfer(X)===Dt?(me!==Er||he!==ur)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",X)),w}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=ce,this.rebindTextures=Mt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return r.buffers.depth.getReversed()}}function rR(s,e){function r(a,l=ra){let c;const d=bt.getTransfer(l);if(a===ur)return s.UNSIGNED_BYTE;if(a===rp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===ip)return s.UNSIGNED_SHORT_5_5_5_1;if(a===U0)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===I0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===L0)return s.BYTE;if(a===D0)return s.SHORT;if(a===Jo)return s.UNSIGNED_SHORT;if(a===np)return s.INT;if(a===zr)return s.UNSIGNED_INT;if(a===Ir)return s.FLOAT;if(a===bi)return s.HALF_FLOAT;if(a===k0)return s.ALPHA;if(a===F0)return s.RGB;if(a===Er)return s.RGBA;if(a===xi)return s.DEPTH_COMPONENT;if(a===La)return s.DEPTH_STENCIL;if(a===O0)return s.RED;if(a===ap)return s.RED_INTEGER;if(a===Us)return s.RG;if(a===sp)return s.RG_INTEGER;if(a===op)return s.RGBA_INTEGER;if(a===Kc||a===Yc||a===Jc||a===Qc)if(d===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===hh||a===ph||a===mh||a===gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vh||a===_h||a===yh||a===bh||a===xh||a===Sh||a===Eh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===vh||a===_h)return d===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===yh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===bh)return c.COMPRESSED_R11_EAC;if(a===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Sh)return c.COMPRESSED_RG11_EAC;if(a===Eh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Mh||a===wh||a===Th||a===Ah||a===Rh||a===Ch||a===Ph||a===Nh||a===Lh||a===Dh||a===Uh||a===Ih||a===kh||a===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Mh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Th)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ah)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Rh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ch)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ph)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Lh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Dh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Uh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ih)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Oh||a===zh||a===Bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Oh)return d===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Hh||a===Vh||a===Gh||a===jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Hh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Qo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:r}}const iR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r){if(this.texture===null){const a=new J0(e.texture);(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,a=new Br({vertexShader:iR,fragmentShader:aR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Ei(new du(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends Os{constructor(e,r){super();const a=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,S=null,g=null,b=null,x=null;const C=typeof XRWebGLBinding<"u",_=new sR,y={},A=r.getContextAttributes();let I=null,N=null;const F=[],k=[],O=new zt;let M=null;const P=new cr;P.viewport=new on;const ue=new cr;ue.viewport=new on;const V=[P,ue],J=new yE;let oe=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Pf,F[$]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Pf,F[$]=Ee),Ee.getGripSpace()},this.getHand=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Pf,F[$]=Ee),Ee.getHandSpace()};function ne($){const Ee=k.indexOf($.inputSource);if(Ee===-1)return;const Se=F[Ee];Se!==void 0&&(Se.update($.inputSource,$.frame,h||d),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){l.removeEventListener("select",ne),l.removeEventListener("selectstart",ne),l.removeEventListener("selectend",ne),l.removeEventListener("squeeze",ne),l.removeEventListener("squeezestart",ne),l.removeEventListener("squeezeend",ne),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",H);for(let $=0;$<F.length;$++){const Ee=k[$];Ee!==null&&(k[$]=null,F[$].disconnect(Ee))}oe=null,le=null,_.reset();for(const $ in y)delete y[$];e.setRenderTarget(I),b=null,g=null,S=null,l=null,N=null,Xe.stop(),a.isPresenting=!1,e.setPixelRatio(M),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,a.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,a.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,r)),S},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",ne),l.addEventListener("selectstart",ne),l.addEventListener("selectend",ne),l.addEventListener("squeeze",ne),l.addEventListener("squeezestart",ne),l.addEventListener("squeezeend",ne),l.addEventListener("end",U),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await r.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Se=null,et=null;A.depth&&(et=A.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,Ee=A.stencil?La:xi,Se=A.stencil?Qo:zr);const Ze={colorFormat:r.RGBA8,depthFormat:et,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ze),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Or(g.textureWidth,g.textureHeight,{format:Er,type:ur,depthTexture:new Zo(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,r,Ee),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Or(b.framebufferWidth,b.framebufferHeight,{format:Er,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Xe.setContext(l),Xe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H($){for(let Ee=0;Ee<$.removed.length;Ee++){const Se=$.removed[Ee],et=k.indexOf(Se);et>=0&&(k[et]=null,F[et].disconnect(Se))}for(let Ee=0;Ee<$.added.length;Ee++){const Se=$.added[Ee];let et=k.indexOf(Se);if(et===-1){for(let ze=0;ze<F.length;ze++)if(ze>=k.length){k.push(Se),et=ze;break}else if(k[ze]===null){k[ze]=Se,et=ze;break}if(et===-1)break}const Ze=F[et];Ze&&Ze.connect(Se)}}const ce=new re,_e=new re;function L($,Ee,Se){ce.setFromMatrixPosition(Ee.matrixWorld),_e.setFromMatrixPosition(Se.matrixWorld);const et=ce.distanceTo(_e),Ze=Ee.projectionMatrix.elements,ze=Se.projectionMatrix.elements,Mt=Ze[14]/(Ze[10]-1),wt=Ze[14]/(Ze[10]+1),at=(Ze[9]+1)/Ze[5],nn=(Ze[9]-1)/Ze[5],Zt=(Ze[8]-1)/Ze[0],Ut=(ze[8]+1)/ze[0],G=Mt*Zt,Xt=Mt*Ut,yt=et/(-Zt+Ut),Tt=yt*-Zt;if(Ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ze[10]===-1)$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const We=Mt+yt,D=wt+yt,w=G-Tt,X=Xt+(et-Tt),me=at*wt/D*We,he=nn*wt/D*We;$.projectionMatrix.makePerspective(w,X,me,he,We,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,Ee){Ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let Ee=$.near,Se=$.far;_.texture!==null&&(_.depthNear>0&&(Ee=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),J.near=ue.near=P.near=Ee,J.far=ue.far=P.far=Se,(oe!==J.near||le!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),oe=J.near,le=J.far),J.layers.mask=$.layers.mask|6,P.layers.mask=J.layers.mask&-5,ue.layers.mask=J.layers.mask&-3;const et=$.parent,Ze=J.cameras;Q(J,et);for(let ze=0;ze<Ze.length;ze++)Q(Ze[ze],et);Ze.length===2?L(J,P,ue):J.projectionMatrix.copy(P.projectionMatrix),ge($,J,et)};function ge($,Ee,Se){Se===null?$.matrix.copy(Ee.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(Ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function($){return y[$]};let be=null;function Ne($,Ee){if(v=Ee.getViewerPose(h||d),x=Ee,v!==null){const Se=v.views;b!==null&&(e.setRenderTargetFramebuffer(N,b.framebuffer),e.setRenderTarget(N));let et=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,et=!0);for(let ze=0;ze<Se.length;ze++){const Mt=Se[ze];let wt=null;if(b!==null)wt=b.getViewport(Mt);else{const nn=S.getViewSubImage(g,Mt);wt=nn.viewport,ze===0&&(e.setRenderTargetTextures(N,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(N))}let at=V[ze];at===void 0&&(at=new cr,at.layers.enable(ze),at.viewport=new on,V[ze]=at),at.matrix.fromArray(Mt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Mt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(wt.x,wt.y,wt.width,wt.height),ze===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),et===!0&&J.cameras.push(at)}const Ze=l.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=a.getBinding();const ze=S.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&_.init(ze,l.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),S=a.getBinding();for(let ze=0;ze<Se.length;ze++){const Mt=Se[ze].camera;if(Mt){let wt=y[Mt];wt||(wt=new J0,y[Mt]=wt);const at=S.getCameraImage(Mt);wt.sourceTexture=at}}}}for(let Se=0;Se<F.length;Se++){const et=k[Se],Ze=F[Se];et!==null&&Ze!==void 0&&Ze.update(et,Ee,h||d)}be&&be($,Ee),Ee.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Ee}),x=null}const Xe=new ey;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Aa=new Si,lR=new tn;function cR(s,e){function r(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function a(_,y){y.color.getRGB(_.fogColor.value,Q0(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function l(_,y,A,I,N){y.isMeshBasicMaterial?c(_,y):y.isMeshLambertMaterial?(c(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(_,y),S(_,y)):y.isMeshPhongMaterial?(c(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(_,y),g(_,y),y.isMeshPhysicalMaterial&&b(_,y,N)):y.isMeshMatcapMaterial?(c(_,y),x(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),C(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(d(_,y),y.isLineDashedMaterial&&p(_,y)):y.isPointsMaterial?m(_,y,A,I):y.isSpriteMaterial?h(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,r(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,r(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,r(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Gn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,r(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Gn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,r(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,r(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,r(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const A=e.get(y),I=A.envMap,N=A.envMapRotation;I&&(_.envMap.value=I,Aa.copy(N),Aa.x*=-1,Aa.y*=-1,Aa.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Aa.y*=-1,Aa.z*=-1),_.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(Aa)),_.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,r(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,r(y.aoMap,_.aoMapTransform))}function d(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,r(y.map,_.mapTransform))}function p(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function m(_,y,A,I){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*A,_.scale.value=I*.5,y.map&&(_.map.value=y.map,r(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,r(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,r(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,r(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function S(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,r(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,r(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function b(_,y,A){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,r(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,r(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,r(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,r(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,r(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Gn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,r(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,r(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,r(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,r(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,r(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,r(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,r(y.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,y){y.matcap&&(_.matcap.value=y.matcap)}function C(_,y){const A=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function uR(s,e,r,a){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,I){const N=I.program;a.uniformBlockBinding(A,N)}function h(A,I){let N=l[A.id];N===void 0&&(x(A),N=v(A),l[A.id]=N,A.addEventListener("dispose",_));const F=I.program;a.updateUBOMapping(A,F);const k=e.render.frame;c[A.id]!==k&&(g(A),c[A.id]=k)}function v(A){const I=S();A.__bindingPointIndex=I;const N=s.createBuffer(),F=A.__size,k=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,F,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const I=l[A.id],N=A.uniforms,F=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let k=0,O=N.length;k<O;k++){const M=Array.isArray(N[k])?N[k]:[N[k]];for(let P=0,ue=M.length;P<ue;P++){const V=M[P];if(b(V,k,P,F)===!0){const J=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let ne=0;ne<oe.length;ne++){const U=oe[ne],H=C(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,J+le,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):(U.toArray(V.__data,le),le+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(A,I,N,F){const k=A.value,O=I+"_"+N;if(F[O]===void 0)return typeof k=="number"||typeof k=="boolean"?F[O]=k:F[O]=k.clone(),!0;{const M=F[O];if(typeof k=="number"||typeof k=="boolean"){if(M!==k)return F[O]=k,!0}else if(M.equals(k)===!1)return M.copy(k),!0}return!1}function x(A){const I=A.uniforms;let N=0;const F=16;for(let O=0,M=I.length;O<M;O++){const P=Array.isArray(I[O])?I[O]:[I[O]];for(let ue=0,V=P.length;ue<V;ue++){const J=P[ue],oe=Array.isArray(J.value)?J.value:[J.value];for(let le=0,ne=oe.length;le<ne;le++){const U=oe[le],H=C(U),ce=N%F,_e=ce%H.boundary,L=ce+_e;N+=_e,L!==0&&F-L<H.storage&&(N+=F-L),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=H.storage}}}const k=N%F;return k>0&&(N+=F-k),A.__size=N,A.__cache={},this}function C(A){const I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",A),I}function _(A){const I=A.target;I.removeEventListener("dispose",_);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function y(){for(const A in l)s.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:y}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dr=null;function fR(){return Dr===null&&(Dr=new rE(dR,16,16,Us,bi),Dr.name="DFG_LUT",Dr.minFilter=Pn,Dr.magFilter=Pn,Dr.wrapS=mi,Dr.wrapT=mi,Dr.generateMipmaps=!1,Dr.needsUpdate=!0),Dr}class hR{constructor(e={}){const{canvas:r=U1(),context:a=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=ur}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=d;const C=b,_=new Set([op,sp,ap]),y=new Set([ur,zr,Jo,Qo,rp,ip]),A=new Uint32Array(4),I=new Int32Array(4);let N=null,F=null;const k=[],O=[];let M=null;this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let ue=!1;this._outputColorSpace=lr;let V=0,J=0,oe=null,le=-1,ne=null;const U=new on,H=new on;let ce=null;const _e=new vt(0);let L=0,Q=r.width,ge=r.height,be=1,Ne=null,Xe=null;const $=new on(0,0,Q,ge),Ee=new on(0,0,Q,ge);let Se=!1;const et=new X0;let Ze=!1,ze=!1;const Mt=new tn,wt=new re,at=new on,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Ut(){return oe===null?be:1}let G=a;function Xt(R,q){return r.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${tp}`),r.addEventListener("webglcontextlost",He,!1),r.addEventListener("webglcontextrestored",Qe,!1),r.addEventListener("webglcontextcreationerror",qt,!1),G===null){const q="webgl2";if(G=Xt(q,R),G===null)throw Xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Et("WebGLRenderer: "+R.message),R}let yt,Tt,We,D,w,X,me,he,pe,Ie,Ce,Ye,qe,Me,Te,je,Be,Ue,ut,W,Pe,Ae,Fe;function we(){yt=new hT(G),yt.init(),Pe=new rR(G,yt),Tt=new aT(G,yt,e,Pe),We=new tR(G,yt),Tt.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),D=new gT(G),w=new HA,X=new nR(G,yt,We,w,Tt,Pe,D),me=new fT(P),he=new xE(G),Ae=new rT(G,he),pe=new pT(G,he,D,Ae),Ie=new _T(G,pe,he,Ae,D),Ue=new vT(G,Tt,X),Te=new sT(w),Ce=new BA(P,me,yt,Tt,Ae,Te),Ye=new cR(P,w),qe=new GA,Me=new YA(yt),Be=new nT(P,me,We,Ie,x,m),je=new eR(P,Ie,Tt),Fe=new uR(G,D,Tt,We),ut=new iT(G,yt,D),W=new mT(G,yt,D),D.programs=Ce.programs,P.capabilities=Tt,P.extensions=yt,P.properties=w,P.renderLists=qe,P.shadowMap=je,P.state=We,P.info=D}we(),C!==ur&&(M=new bT(C,r.width,r.height,l,c));const fe=new oR(P,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(R){R!==void 0&&(be=R,this.setSize(Q,ge,!1))},this.getSize=function(R){return R.set(Q,ge)},this.setSize=function(R,q,se=!0){if(fe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,ge=q,r.width=Math.floor(R*be),r.height=Math.floor(q*be),se===!0&&(r.style.width=R+"px",r.style.height=q+"px"),M!==null&&M.setSize(r.width,r.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Q*be,ge*be).floor()},this.setDrawingBufferSize=function(R,q,se){Q=R,ge=q,be=se,r.width=Math.floor(R*se),r.height=Math.floor(q*se),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===ur){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,se,te){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,se,te),We.viewport(U.copy($).multiplyScalar(be).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,q,se,te){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,q,se,te),We.scissor(H.copy(Ee).multiplyScalar(be).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){We.setScissorTest(Se=R)},this.setOpaqueSort=function(R){Ne=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,se=!0){let te=0;if(R){let Y=!1;if(oe!==null){const Re=oe.texture.format;Y=_.has(Re)}if(Y){const Re=oe.texture.type,Le=y.has(Re),ke=Be.getClearColor(),Oe=Be.getClearAlpha(),$e=ke.r,st=ke.g,dt=ke.b;Le?(A[0]=$e,A[1]=st,A[2]=dt,A[3]=Oe,G.clearBufferuiv(G.COLOR,0,A)):(I[0]=$e,I[1]=st,I[2]=dt,I[3]=Oe,G.clearBufferiv(G.COLOR,0,I))}else te|=G.COLOR_BUFFER_BIT}q&&(te|=G.DEPTH_BUFFER_BIT),se&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",He,!1),r.removeEventListener("webglcontextrestored",Qe,!1),r.removeEventListener("webglcontextcreationerror",qt,!1),Be.dispose(),qe.dispose(),Me.dispose(),w.dispose(),me.dispose(),Ie.dispose(),Ae.dispose(),Fe.dispose(),Ce.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ia),fe.removeEventListener("sessionend",sl),Gr.stop()};function He(R){R.preventDefault(),d_("WebGLRenderer: Context Lost."),ue=!0}function Qe(){d_("WebGLRenderer: Context Restored."),ue=!1;const R=D.autoReset,q=je.enabled,se=je.autoUpdate,te=je.needsUpdate,Y=je.type;we(),D.autoReset=R,je.enabled=q,je.autoUpdate=se,je.needsUpdate=te,je.type=Y}function qt(R){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const q=R.target;q.removeEventListener("dispose",xt),hr(q)}function hr(R){gn(R),w.remove(R)}function gn(R){const q=w.get(R).programs;q!==void 0&&(q.forEach(function(se){Ce.releaseProgram(se)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,se,te,Y,Re){q===null&&(q=nn);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=ol(R,q,se,te,Y);We.setMaterial(te,Le);let Oe=se.index,$e=1;if(te.wireframe===!0){if(Oe=pe.getWireframeAttribute(se),Oe===void 0)return;$e=2}const st=se.drawRange,dt=se.attributes.position;let Ve=st.start*$e,Pt=(st.start+st.count)*$e;Re!==null&&(Ve=Math.max(Ve,Re.start*$e),Pt=Math.min(Pt,(Re.start+Re.count)*$e)),Oe!==null?(Ve=Math.max(Ve,0),Pt=Math.min(Pt,Oe.count)):dt!=null&&(Ve=Math.max(Ve,0),Pt=Math.min(Pt,dt.count));const Kt=Pt-Ve;if(Kt<0||Kt===1/0)return;Ae.setup(Y,te,ke,se,Oe);let It,Rt=ut;if(Oe!==null&&(It=he.get(Oe),Rt=W,Rt.setIndex(It)),Y.isMesh)te.wireframe===!0?(We.setLineWidth(te.wireframeLinewidth*Ut()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(Y.isLine){let Bt=te.linewidth;Bt===void 0&&(Bt=1),We.setLineWidth(Bt*Ut()),Y.isLineSegments?Rt.setMode(G.LINES):Y.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else Y.isPoints?Rt.setMode(G.POINTS):Y.isSprite&&Rt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)au("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Bt=Y._multiDrawStarts,Je=Y._multiDrawCounts,Gt=Y._multiDrawCount,mr=Oe?he.get(Oe).bytesPerElement:1,In=w.get(te).currentProgram.getUniforms();for(let kn=0;kn<Gt;kn++)In.setValue(G,"_gl_DrawID",kn),Rt.render(Bt[kn]/mr,Je[kn])}else if(Y.isInstancedMesh)Rt.renderInstances(Ve,Kt,Y.count);else if(se.isInstancedBufferGeometry){const Bt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Je=Math.min(se.instanceCount,Bt);Rt.renderInstances(Ve,Kt,Je)}else Rt.render(Ve,Kt)};function dn(R,q,se){R.transparent===!0&&R.side===pi&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,wr(R,q,se),R.side=aa,R.needsUpdate=!0,wr(R,q,se),R.side=pi):wr(R,q,se)}this.compile=function(R,q,se=null){se===null&&(se=R),F=Me.get(se),F.init(q),O.push(F),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(F.pushLight(Y),Y.castShadow&&F.pushShadow(Y))}),R!==se&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(F.pushLight(Y),Y.castShadow&&F.pushShadow(Y))}),F.setupLights();const te=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const ke=Re[Le];dn(ke,se,Y),te.add(ke)}else dn(Re,se,Y),te.add(Re)}),F=O.pop(),te},this.compileAsync=function(R,q,se=null){const te=this.compile(R,q,se);return new Promise(Y=>{function Re(){if(te.forEach(function(Le){w.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Y(R);return}setTimeout(Re,10)}yt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let vn=null;function wi(R){vn&&vn(R)}function Ia(){Gr.stop()}function sl(){Gr.start()}const Gr=new ey;Gr.setAnimationLoop(wi),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(R){vn=R,fe.setAnimationLoop(R),R===null?Gr.stop():Gr.start()},fe.addEventListener("sessionstart",Ia),fe.addEventListener("sessionend",sl),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const se=fe.enabled===!0&&fe.isPresenting===!0,te=M!==null&&(oe===null||se)&&M.begin(P,oe);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(q),q=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,q,oe),F=Me.get(R,O.length),F.init(q),O.push(F),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),et.setFromProjectionMatrix(Mt,kr,q.reversedDepth),ze=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,ze),N=qe.get(R,k.length),N.init(),k.push(N),fe.enabled===!0&&fe.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&ka(Re,q,-1/0,P.sortObjects)}ka(R,q,0,P.sortObjects),N.finish(),P.sortObjects===!0&&N.sort(Ne,Xe),Zt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Zt&&Be.addToRenderList(N,R),this.info.render.frame++,Ze===!0&&Te.beginShadows();const Y=F.state.shadowsArray;if(je.render(Y,R,q),Ze===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&M.hasRenderPass())===!1){const Re=N.opaque,Le=N.transmissive;if(F.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Le.length>0)for(let Oe=0,$e=ke.length;Oe<$e;Oe++){const st=ke[Oe];Fa(Re,Le,R,st)}Zt&&Be.render(R);for(let Oe=0,$e=ke.length;Oe<$e;Oe++){const st=ke[Oe];Ti(N,R,st,st.viewport)}}else Le.length>0&&Fa(Re,Le,R,q),Zt&&Be.render(R),Ti(N,R,q)}oe!==null&&J===0&&(X.updateMultisampleRenderTarget(oe),X.updateRenderTargetMipmap(oe)),te&&M.end(P),R.isScene===!0&&R.onAfterRender(P,R,q),Ae.resetDefaultState(),le=-1,ne=null,O.pop(),O.length>0?(F=O[O.length-1],Ze===!0&&Te.setGlobalState(P.clippingPlanes,F.state.camera)):F=null,k.pop(),k.length>0?N=k[k.length-1]:N=null};function ka(R,q,se,te){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){te&&at.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const Re=Ie.update(R),Le=R.material;Le.visible&&N.push(R,Re,Le,se,at.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const Re=Ie.update(R),Le=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),at.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),at.copy(Re.boundingSphere.center)),at.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Le)){const ke=Re.groups;for(let Oe=0,$e=ke.length;Oe<$e;Oe++){const st=ke[Oe],dt=Le[st.materialIndex];dt&&dt.visible&&N.push(R,Re,dt,se,at.z,st)}}else Le.visible&&N.push(R,Re,Le,se,at.z,null)}}const Y=R.children;for(let Re=0,Le=Y.length;Re<Le;Re++)ka(Y[Re],q,se,te)}function Ti(R,q,se,te){const{opaque:Y,transmissive:Re,transparent:Le}=R;F.setupLightsView(se),Ze===!0&&Te.setGlobalState(P.clippingPlanes,se),te&&We.viewport(U.copy(te)),Y.length>0&&pr(Y,q,se),Re.length>0&&pr(Re,q,se),Le.length>0&&pr(Le,q,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Fa(R,q,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[te.id]===void 0){const dt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[te.id]=new Or(1,1,{generateMipmaps:!0,type:dt?bi:ur,minFilter:Na,samples:Math.max(4,Tt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Y=F.state.transmissionRenderTarget[te.id],Re=te.viewport||U;Y.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Le=P.getRenderTarget(),ke=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Y),P.getClearColor(_e),L=P.getClearAlpha(),L<1&&P.setClearColor(16777215,.5),P.clear(),Zt&&Be.render(se);const $e=P.toneMapping;P.toneMapping=Fr;const st=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),F.setupLightsView(te),Ze===!0&&Te.setGlobalState(P.clippingPlanes,te),pr(R,se,te),X.updateMultisampleRenderTarget(Y),X.updateRenderTargetMipmap(Y),yt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ve=0,Pt=q.length;Ve<Pt;Ve++){const Kt=q[Ve],{object:It,geometry:Rt,material:Bt,group:Je}=Kt;if(Bt.side===pi&&It.layers.test(te.layers)){const Gt=Bt.side;Bt.side=Gn,Bt.needsUpdate=!0,jr(It,se,te,Rt,Bt,Je),Bt.side=Gt,Bt.needsUpdate=!0,dt=!0}}dt===!0&&(X.updateMultisampleRenderTarget(Y),X.updateRenderTargetMipmap(Y))}P.setRenderTarget(Le,ke,Oe),P.setClearColor(_e,L),st!==void 0&&(te.viewport=st),P.toneMapping=$e}function pr(R,q,se){const te=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Re=R.length;Y<Re;Y++){const Le=R[Y],{object:ke,geometry:Oe,group:$e}=Le;let st=Le.material;st.allowOverride===!0&&te!==null&&(st=te),ke.layers.test(se.layers)&&jr(ke,q,se,Oe,st,$e)}}function jr(R,q,se,te,Y,Re){R.onBeforeRender(P,q,se,te,Y,Re),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(P,q,se,te,R,Re),Y.transparent===!0&&Y.side===pi&&Y.forceSinglePass===!1?(Y.side=Gn,Y.needsUpdate=!0,P.renderBufferDirect(se,q,te,Y,R,Re),Y.side=aa,Y.needsUpdate=!0,P.renderBufferDirect(se,q,te,Y,R,Re),Y.side=pi):P.renderBufferDirect(se,q,te,Y,R,Re),R.onAfterRender(P,q,se,te,Y,Re)}function wr(R,q,se){q.isScene!==!0&&(q=nn);const te=w.get(R),Y=F.state.lights,Re=F.state.shadowsArray,Le=Y.state.version,ke=Ce.getParameters(R,Y.state,Re,q,se),Oe=Ce.getProgramCacheKey(ke);let $e=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=me.get(R.envMap||te.environment,st),te.envMapRotation=te.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",xt),$e=new Map,te.programs=$e);let dt=$e.get(Oe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===Le)return rn(R,ke),dt}else ke.uniforms=Ce.getUniforms(R),R.onBeforeCompile(ke,P),dt=Ce.acquireProgram(ke,Oe),$e.set(Oe,dt),te.uniforms=ke.uniforms;const Ve=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),rn(R,ke),te.needsLights=Xr(R),te.lightsStateVersion=Le,te.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=dt,te.uniformsList=null,dt}function Wr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Zc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function rn(R,q){const se=w.get(R);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function ol(R,q,se,te,Y){q.isScene!==!0&&(q=nn),X.resetTextureUnits();const Re=q.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,ke=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Is,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,$e=me.get(te.envMap||Le,Oe),st=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,dt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,Kt=!!se.morphAttributes.color;let It=Fr;te.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(It=P.toneMapping);const Rt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Bt=Rt!==void 0?Rt.length:0,Je=w.get(te),Gt=F.state.lights;if(Ze===!0&&(ze===!0||R!==ne)){const Yt=R===ne&&te.id===le;Te.setState(te,R,Yt)}let mr=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==ke||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==$e||te.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==st||Je.vertexTangents!==dt||Je.morphTargets!==Ve||Je.morphNormals!==Pt||Je.morphColors!==Kt||Je.toneMapping!==It||Je.morphTargetsCount!==Bt)&&(mr=!0):(mr=!0,Je.__version=te.version);let In=Je.currentProgram;mr===!0&&(In=wr(te,q,Y));let kn=!1,Fn=!1,qr=!1;const Ct=In.getUniforms(),jt=Je.uniforms;if(We.useProgram(In.program)&&(kn=!0,Fn=!0,qr=!0),te.id!==le&&(le=te.id,Fn=!0),kn||ne!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",R.projectionMatrix),Ct.setValue(G,"viewMatrix",R.matrixWorldInverse);const Yt=Ct.map.cameraPosition;Yt!==void 0&&Yt.setValue(G,wt.setFromMatrixPosition(R.matrixWorld)),Tt.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,Fn=!0,qr=!0)}if(Je.needsLights&&(Gt.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",Gt.state.directionalShadowMap,X),Gt.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",Gt.state.spotShadowMap,X),Gt.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",Gt.state.pointShadowMap,X)),Y.isSkinnedMesh){Ct.setOptional(G,Y,"bindMatrix"),Ct.setOptional(G,Y,"bindMatrixInverse");const Yt=Y.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Yt.boneTexture,X))}Y.isBatchedMesh&&(Ct.setOptional(G,Y,"batchingTexture"),Ct.setValue(G,"batchingTexture",Y._matricesTexture,X),Ct.setOptional(G,Y,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",Y._indirectTexture,X),Ct.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",Y._colorsTexture,X));const Tr=se.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Ue.update(Y,se,In),(Fn||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,Ct.setValue(G,"receiveShadow",Y.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(jt.envMapIntensity.value=q.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=fR()),Fn&&(Ct.setValue(G,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&ll(jt,qr),Re&&te.fog===!0&&Ye.refreshFogUniforms(jt,Re),Ye.refreshMaterialUniforms(jt,te,be,ge,F.state.transmissionRenderTarget[R.id]),Zc.upload(G,Wr(Je),jt,X)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Zc.upload(G,Wr(Je),jt,X),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(G,"center",Y.center),Ct.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Ct.setValue(G,"normalMatrix",Y.normalMatrix),Ct.setValue(G,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Yt=te.uniformsGroups;for(let Ri=0,Ar=Yt.length;Ri<Ar;Ri++){const ul=Yt[Ri];Fe.update(ul,In),Fe.bind(ul,In)}}return In}function ll(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Xr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(R,q,se){const te=w.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),w.get(R.texture).__webglTexture=q,w.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const se=w.get(R);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Ai=G.createFramebuffer();this.setRenderTarget=function(R,q=0,se=0){oe=R,V=q,J=se;let te=null,Y=!1,Re=!1;if(R){const Le=w.get(R);if(Le.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(G.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(R.viewport),H.copy(R.scissor),ce=R.scissorTest,We.viewport(U),We.scissor(H),We.setScissorTest(ce),le=-1;return}else if(Le.__webglFramebuffer===void 0)X.setupRenderTarget(R);else if(Le.__hasExternalTextures)X.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&w.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);const Oe=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Oe[q])?te=Oe[q][se]:te=Oe[q],Y=!0):R.samples>0&&X.useMultisampledRTT(R)===!1?te=w.get(R).__webglMultisampledFramebuffer:Array.isArray(Oe)?te=Oe[se]:te=Oe,U.copy(R.viewport),H.copy(R.scissor),ce=R.scissorTest}else U.copy($).multiplyScalar(be).floor(),H.copy(Ee).multiplyScalar(be).floor(),ce=Se;if(se!==0&&(te=Ai),We.bindFramebuffer(G.FRAMEBUFFER,te)&&We.drawBuffers(R,te),We.viewport(U),We.scissor(H),We.setScissorTest(ce),Y){const Le=w.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,se)}else if(Re){const Le=q;for(let ke=0;ke<R.textures.length;ke++){const Oe=w.get(R.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,Oe.__webglTexture,se,Le)}}else if(R!==null&&se!==0){const Le=w.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Le.__webglTexture,se)}le=-1},this.readRenderTargetPixels=function(R,q,se,te,Y,Re,Le,ke=0){if(!(R&&R.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){We.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const $e=R.textures[ke],st=$e.format,dt=$e.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!Tt.textureFormatReadable(st)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(dt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-te&&se>=0&&se<=R.height-Y&&G.readPixels(q,se,te,Y,Pe.convert(st),Pe.convert(dt),Re)}finally{const $e=oe!==null?w.get(oe).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,se,te,Y,Re,Le,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(q>=0&&q<=R.width-te&&se>=0&&se<=R.height-Y){We.bindFramebuffer(G.FRAMEBUFFER,Oe);const $e=R.textures[ke],st=$e.format,dt=$e.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!Tt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(q,se,te,Y,Pe.convert(st),Pe.convert(dt),0);const Pt=oe!==null?w.get(oe).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Pt);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await I1(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer(Ve),G.deleteSync(Kt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,se=0){const te=Math.pow(2,-se),Y=Math.floor(R.image.width*te),Re=Math.floor(R.image.height*te),Le=q!==null?q.x:0,ke=q!==null?q.y:0;X.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Le,ke,Y,Re),We.unbindTexture()};const pu=G.createFramebuffer(),cl=G.createFramebuffer();this.copyTextureToTexture=function(R,q,se=null,te=null,Y=0,Re=0){let Le,ke,Oe,$e,st,dt,Ve,Pt,Kt;const It=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(se!==null)Le=se.max.x-se.min.x,ke=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,st=se.min.y,dt=se.isBox3?se.min.z:0;else{const jt=Math.pow(2,-Y);Le=Math.floor(It.width*jt),ke=Math.floor(It.height*jt),R.isDataArrayTexture?Oe=It.depth:R.isData3DTexture?Oe=Math.floor(It.depth*jt):Oe=1,$e=0,st=0,dt=0}te!==null?(Ve=te.x,Pt=te.y,Kt=te.z):(Ve=0,Pt=0,Kt=0);const Rt=Pe.convert(q.format),Bt=Pe.convert(q.type);let Je;q.isData3DTexture?(X.setTexture3D(q,0),Je=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(X.setTexture2DArray(q,0),Je=G.TEXTURE_2D_ARRAY):(X.setTexture2D(q,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Gt=G.getParameter(G.UNPACK_ROW_LENGTH),mr=G.getParameter(G.UNPACK_IMAGE_HEIGHT),In=G.getParameter(G.UNPACK_SKIP_PIXELS),kn=G.getParameter(G.UNPACK_SKIP_ROWS),Fn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$e),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,dt);const qr=R.isDataArrayTexture||R.isData3DTexture,Ct=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const jt=w.get(R),Tr=w.get(q),Yt=w.get(jt.__renderTarget),Ri=w.get(Tr.__renderTarget);We.bindFramebuffer(G.READ_FRAMEBUFFER,Yt.__webglFramebuffer),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ar=0;Ar<Oe;Ar++)qr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(R).__webglTexture,Y,dt+Ar),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Re,Kt+Ar)),G.blitFramebuffer($e,st,Le,ke,Ve,Pt,Le,ke,G.DEPTH_BUFFER_BIT,G.NEAREST);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||w.has(R)){const jt=w.get(R),Tr=w.get(q);We.bindFramebuffer(G.READ_FRAMEBUFFER,pu),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,cl);for(let Yt=0;Yt<Oe;Yt++)qr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.__webglTexture,Y,dt+Yt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jt.__webglTexture,Y),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tr.__webglTexture,Re,Kt+Yt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tr.__webglTexture,Re),Y!==0?G.blitFramebuffer($e,st,Le,ke,Ve,Pt,Le,ke,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(Je,Re,Ve,Pt,Kt+Yt,$e,st,Le,ke):G.copyTexSubImage2D(Je,Re,Ve,Pt,$e,st,Le,ke);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Je,Re,Ve,Pt,Kt,Le,ke,Oe,Rt,Bt,It.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,Re,Ve,Pt,Kt,Le,ke,Oe,Rt,It.data):G.texSubImage3D(Je,Re,Ve,Pt,Kt,Le,ke,Oe,Rt,Bt,It):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Ve,Pt,Le,ke,Rt,Bt,It.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Ve,Pt,It.width,It.height,Rt,It.data):G.texSubImage2D(G.TEXTURE_2D,Re,Ve,Pt,Le,ke,Rt,Bt,It);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mr),G.pixelStorei(G.UNPACK_SKIP_PIXELS,In),G.pixelStorei(G.UNPACK_SKIP_ROWS,kn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fn),Re===0&&q.generateMipmaps&&G.generateMipmap(Je),We.unbindTexture()},this.initRenderTarget=function(R){w.get(R).__webglFramebuffer===void 0&&X.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){V=0,J=0,oe=null,We.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),r.unpackColorSpace=bt._getUnpackColorSpace()}}const pR=160,mR=70,i0=1.6,gR=()=>{const s=de.useRef(null);return de.useEffect(()=>{const e=s.current;if(!e)return;const r=window.innerWidth<768,a=r?mR:pR,l=new Q1,c=new cr(60,e.clientWidth/e.clientHeight,.1,100);c.position.z=5;const d=new hR({antialias:!0,alpha:!0});d.setSize(e.clientWidth,e.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(d.domElement);const p=[new vt("#b8456e"),new vt("#9d7fb8"),new vt("#e8a090"),new vt("#d4a0b8"),new vt("#ffffff")],m=[],h=new Float32Array(a*3),v=new Float32Array(a*3);for(let k=0;k<a;k++){const O=(Math.random()-.5)*9,M=(Math.random()-.5)*6,P=(Math.random()-.5)*4;m.push({x:O,y:M,z:P,bx:O,by:M,bz:P,vx:(Math.random()-.5)*.004,vy:(Math.random()-.5)*.004,vz:(Math.random()-.5)*.002});const ue=p[Math.floor(Math.random()*p.length)];v[k*3]=ue.r,v[k*3+1]=ue.g,v[k*3+2]=ue.b,h[k*3]=O,h[k*3+1]=M,h[k*3+2]=P}const S=new $n;S.setAttribute("position",new dr(h,3)),S.setAttribute("color",new dr(v,3));const g=new K0({size:r?.045:.035,vertexColors:!0,transparent:!0,opacity:.85,blending:tu,depthWrite:!1});l.add(new cE(S,g));const b=new $n,x=new q0({transparent:!0,opacity:.12,color:12076398,blending:tu,depthWrite:!1}),C=new lE(b,x);l.add(C);const _={x:0,y:0},y=k=>{const O=e.getBoundingClientRect();_.x=((k.clientX-O.left)/O.width-.5)*2,_.y=-((k.clientY-O.top)/O.height-.5)*2};e.addEventListener("mousemove",y);const A=()=>{const k=e.clientWidth,O=e.clientHeight;c.aspect=k/O,c.updateProjectionMatrix(),d.setSize(k,O)};window.addEventListener("resize",A);let I=!0,N=0;const F=()=>{if(!I)return;requestAnimationFrame(F),N++;const k=S.getAttribute("position");for(let O=0;O<a;O++){const M=m[O];M.x+=M.vx,M.y+=M.vy,M.z+=M.vz,M.vx+=(M.bx-M.x)*8e-4,M.vy+=(M.by-M.y)*8e-4,M.vz+=(M.bz-M.z)*4e-4,M.x+=_.x*.003,M.y+=_.y*.003,M.vx*=.992,M.vy*=.992,M.vz*=.992,k.array[O*3]=M.x,k.array[O*3+1]=M.y,k.array[O*3+2]=M.z}if(k.needsUpdate=!0,N%3===0){const O=[];for(let M=0;M<a;M++)for(let P=M+1;P<a;P++){const ue=m[M].x-m[P].x,V=m[M].y-m[P].y,J=m[M].z-m[P].z;ue*ue+V*V+J*J<i0*i0&&O.push(m[M].x,m[M].y,m[M].z,m[P].x,m[P].y,m[P].z)}b.setAttribute("position",new fr(O,3))}l.rotation.y=Math.sin(Date.now()*8e-5)*.12,l.rotation.x=Math.cos(Date.now()*6e-5)*.05,d.render(l,c)};return requestAnimationFrame(F),()=>{I=!1,e.removeEventListener("mousemove",y),window.removeEventListener("resize",A),d.dispose(),S.dispose(),g.dispose(),b.dispose(),x.dispose(),e.contains(d.domElement)&&e.removeChild(d.domElement)}},[]),B.jsx("div",{ref:s,className:"hero-canvas"})},vR=({words:s,typeSpeed:e=80,deleteSpeed:r=40,pause:a=2200,className:l})=>{const[c,d]=de.useState(""),[p,m]=de.useState(0),[h,v]=de.useState(!1);return de.useEffect(()=>{const S=s[p],g=setTimeout(()=>{h?(d(S.slice(0,c.length-1)),c.length-1===0&&(v(!1),m(b=>(b+1)%s.length))):(d(S.slice(0,c.length+1)),c.length+1===S.length&&setTimeout(()=>v(!0),a))},h?r:e);return()=>clearTimeout(g)},[c,h,p,s,e,r,a]),B.jsxs("span",{className:l,children:[c,B.jsx("span",{className:"typing-cursor","aria-hidden":"true"})]})},_R="/assets/avatar-C2VzNt0k.png",yR=["Software Architect","AI Engineer","Full Stack Developer","Mobile App Developer"],bR=({scrollTo:s})=>B.jsxs("section",{className:"section section--home hero hero--3d",id:"home","aria-labelledby":"hero-heading",children:[B.jsx(gR,{}),B.jsxs("div",{className:"container hero__centered",children:[B.jsx("img",{src:_R,alt:"Taliba Sadiq",className:"hero__avatar",draggable:!1}),B.jsx("p",{className:"hero__eyebrow hero__eyebrow--glow",children:"Available for projects"}),B.jsx("h1",{id:"hero-heading",className:"hero__title hero__title--3d",children:"Taliba Sadiq"}),B.jsx("p",{className:"hero__typing-wrap",children:B.jsx(vR,{words:yR,className:"hero__typing"})}),B.jsx("p",{className:"hero__intro hero__intro--3d",children:"I build software that holds up under real use: scalable systems, intelligent features, and code that keeps working as your product grows. Not just launch-day demos, but lasting solutions."}),B.jsxs("div",{className:"hero__actions hero__actions--center",children:[B.jsx("button",{type:"button",className:"btn btn--primary btn--glow",onClick:()=>s("work","/projects"),children:"See my work"}),B.jsx("button",{type:"button",className:"btn btn--ghost btn--ghost-dark",onClick:()=>s("contact","/contact"),children:"Let's talk"})]})]})]}),xR=[{title:"A product outgrowing its structure",body:"The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds."},{title:"A codebase that's becoming fragile",body:"People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick."},{title:"A prototype that needs to grow up",body:"The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features."},{title:"AI that needs to actually work",body:"Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable."}],SR=()=>B.jsx("section",{className:"section section--philosophy reveal",id:"philosophy","aria-labelledby":"philosophy-heading",children:B.jsxs("div",{className:"container",children:[B.jsxs("div",{className:"philosophy__head",children:[B.jsx("span",{className:"section__label",children:"When I get involved"}),B.jsx("h2",{id:"philosophy-heading",className:"philosophy__title",children:"I focus on what happens after launch"}),B.jsx("p",{className:"philosophy__lead",children:"First demos are easy. I focus on the hard part: more features, team changes, and someone new opening the repo. Good structure is what keeps you from rewriting everything twice."})]}),B.jsx("div",{className:"pillars__grid",children:xR.map((s,e)=>B.jsxs("div",{className:"pillar-card reveal reveal--delay-1",children:[B.jsx("p",{className:"pillar-card__num",children:String(e+1).padStart(2,"0")}),B.jsx("h3",{className:"pillar-card__title",children:s.title}),B.jsx("p",{children:s.body})]},s.title))}),B.jsxs("div",{className:"philosophy__closing reveal",children:[B.jsxs("p",{className:"philosophy__closing-text",children:["What I bring is ",B.jsx("strong",{children:"clarity"}),". Clear structure, clear decisions, and systems that are easier to build on as they grow."]}),B.jsxs("div",{className:"philosophy__traits",children:[B.jsx("span",{className:"philosophy__trait",children:"Clear Communicator"}),B.jsx("span",{className:"philosophy__trait",children:"Detail Oriented"}),B.jsx("span",{className:"philosophy__trait",children:"Solution Oriented"})]})]})]})}),ER=[{quote:"She's great and really helpful.",name:"Steve C.",role:"Founder, Zenius"},{quote:"Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",name:"A. M.",role:"CTO, B2B SaaS"},{quote:"Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",name:"R. K.",role:"Founder, edtech"}],MR=({scrollTo:s})=>B.jsx("section",{className:"section section--reviews section--testimonials reveal",id:"reviews","aria-labelledby":"reviews-heading",children:B.jsxs("div",{className:"container",children:[B.jsxs("div",{className:"testimonials__head",children:[B.jsx("h2",{id:"reviews-heading",className:"testimonials__title",children:"Kind words from collaborators"}),B.jsx("p",{className:"testimonials__lead",children:"What founders and teams say about working together."})]}),B.jsx("ul",{className:"testimonials__list",role:"list",children:ER.map(e=>B.jsxs("li",{className:"testimonial-item",children:[B.jsx("blockquote",{className:"testimonial-item__quote",children:B.jsx("p",{children:e.quote})}),B.jsxs("footer",{className:"testimonial-item__cite",children:[B.jsx("span",{className:"testimonial-item__name",children:e.name}),B.jsx("span",{className:"testimonial-item__role",children:e.role})]})]},`${e.name}-${e.role}`))}),B.jsx("div",{className:"testimonials__cta",children:B.jsx("button",{type:"button",className:"btn btn--primary",onClick:()=>s("contact","/contact"),children:"Start a conversation"})})]})}),wR=[{title:"Architecture & Scalable Systems",desc:"Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",tags:["System Design","Scalability","Refactoring","API Design","Microservices"]},{title:"Full-Stack Web & Mobile",desc:"End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",tags:["React","Next.js","Node.js","React Native","TypeScript","PostgreSQL"]},{title:"AI Integration & Automation",desc:"GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",tags:["OpenAI API","Claude","Prompt Engineering","AI Agents","Automation"]}],TR=()=>B.jsx("section",{className:"section section--services reveal",id:"services","aria-labelledby":"services-heading",children:B.jsxs("div",{className:"container",children:[B.jsx("span",{className:"section__label",children:"What I do"}),B.jsx("h2",{id:"services-heading",className:"section__heading",children:"Three things I do really well"}),B.jsx("p",{className:"section__lead",children:"Architecture, full-stack development, and AI integration. I bring clarity to complex problems and build systems that are easier to grow."}),B.jsx("div",{className:"services__grid",children:wR.map(s=>B.jsxs("div",{className:"service-card reveal reveal--delay-1",children:[B.jsx("h3",{className:"service-card__title",children:s.title}),B.jsx("p",{className:"service-card__desc",children:s.desc}),B.jsx("div",{className:"service-card__tags",children:s.tags.map(e=>B.jsx("span",{className:"service-card__tag",children:e},e))})]},s.title))})]})}),Cs={ai:["OpenAI / GPT API","Claude / Anthropic","Gemini","Generative AI","Prompt Engineering","AI Agents","Chatbot Development","AI Model Integration","Machine Learning","Automation Workflows"],frontend:["React","Next.js","Angular","Vue.js","Nuxt.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","SASS / SCSS","CSS Grid","Responsive Design","Figma","Webflow","Elementor"],backend:["Node.js","Express","REST APIs","GraphQL","FastAPI","Laravel","PHP","Python","API Integration","Payment Gateway (Stripe)","Twilio API","Authentication & Authorization","WebSockets"],mobile:["React Native","Hybrid Apps","iOS","Android","Offline Functionality","In-App Purchases","Mobile UI/UX"],cloud:["AWS","Google Cloud","Microsoft Azure","Docker","Vercel","Netlify","Firebase","Supabase","CI/CD","GitHub Actions","Website Security"],databases:["PostgreSQL","MongoDB","MySQL","Microsoft SQL Server","Firebase Realtime DB","Prisma","Mongoose","Database Modeling"]},AR=()=>B.jsx("section",{className:"section section--skills skills-showcase reveal",id:"skills","aria-labelledby":"skills-heading",children:B.jsxs("div",{className:"container",children:[B.jsx("span",{className:"section__label",children:"Toolkit"}),B.jsx("h2",{id:"skills-heading",className:"skills-showcase__title",children:"Technologies I work with"}),B.jsx("p",{className:"skills-showcase__lead",children:"AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven't listed it yet. Ask me."}),B.jsxs("div",{className:"skills-showcase__grid",children:[B.jsxs("div",{className:"skill-category skill-category--highlight",children:[B.jsx("h3",{className:"skill-category__title",children:"AI & Intelligence"}),B.jsx("div",{className:"skill-category__tags",children:Cs.ai.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]}),B.jsxs("div",{className:"skill-category",children:[B.jsx("h3",{className:"skill-category__title",children:"Frontend"}),B.jsx("div",{className:"skill-category__tags",children:Cs.frontend.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]}),B.jsxs("div",{className:"skill-category",children:[B.jsx("h3",{className:"skill-category__title",children:"Backend & APIs"}),B.jsx("div",{className:"skill-category__tags",children:Cs.backend.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]}),B.jsxs("div",{className:"skill-category",children:[B.jsx("h3",{className:"skill-category__title",children:"Mobile"}),B.jsx("div",{className:"skill-category__tags",children:Cs.mobile.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]}),B.jsxs("div",{className:"skill-category",children:[B.jsx("h3",{className:"skill-category__title",children:"Cloud & DevOps"}),B.jsx("div",{className:"skill-category__tags",children:Cs.cloud.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]}),B.jsxs("div",{className:"skill-category",children:[B.jsx("h3",{className:"skill-category__title",children:"Databases"}),B.jsx("div",{className:"skill-category__tags",children:Cs.databases.map(s=>B.jsx("span",{className:"skill-tag",children:s},s))})]})]})]})}),RR="/assets/zenius-CLULWNXe.png",CR="/assets/news-explorer-DyPTQ1wK.png",PR="/assets/tmi-worldwide-BRvVfm9i.png",NR="/assets/time-keeper-C6TL0-3m.png",LR="/assets/portfolio-84NHyYwe.png",DR="/assets/expense-tracker-mvEoxdIL.png",UR="/assets/girly-blog-BlvHH-Oe.png",IR=[{title:"Zenius",types:["AI & product","Full-stack web"],description:"Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",link:"https://zenius.ia.br",screenshot:RR,tech:["React","TypeScript","AI / LLM integration","Node.js","REST & real-time APIs","Voice / video","Security & privacy","Responsive UI","Performance","Accessibility"]},{title:"News Explorer",types:["Full-stack web","APIs & auth"],description:"Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",link:"https://jazzmine-flora.github.io/news-explorer/",screenshot:CR,tech:["React","Node.js","Express","MongoDB","REST","Auth","News API"]},{title:"TMI Worldwide",types:["Design refresh","Marketing site"],description:"Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",link:"https://tmi-world-welcome.lovable.app/",screenshot:PR,tech:["React","Vite","SPA","Responsive UI","Marketing / brand"]},{title:"Time Keeper",types:["Web app","Product UX"],description:"Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",link:"https://time-keeper-crafted.lovable.app/",screenshot:NR,tech:["React","Vite","SPA","Responsive UI","Product UI"]},{title:"My Portfolio",types:["Portfolio site","Design & deploy"],description:"Single-page site: React, TypeScript, Vite, and HashRouter for GitHub Pages. Copy and styles hand-tuned.",link:"https://jazzmine-flora.github.io",screenshot:LR,tech:["React","TypeScript","Vite","React Router","Three.js","React Icons","GitHub Actions"]},{title:"Expense Tracker",types:["Web app","Dashboards & data"],description:"Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",link:"https://jazzmine-flora.github.io/expense-tracker/",screenshot:DR,tech:["React","TypeScript","Node.js","Express","MongoDB","Charts"]},{title:"Girls Blog",types:["Full-stack web","Blog & CMS"],description:"Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",link:"https://girly-blogspot.vercel.app/",screenshot:UR,tech:["React","Node.js","Express","MongoDB","Auth"]}],kR=()=>B.jsx("section",{className:"section section--work projects-page projects-page--premium reveal",id:"work","aria-labelledby":"work-heading",children:B.jsxs("div",{className:"container",children:[B.jsx("span",{className:"section__label",children:"Portfolio"}),B.jsx("h2",{id:"work-heading",className:"projects__title",children:"Selected work"}),B.jsx("p",{className:"projects__lead",children:"Full-stack products, AI features, and scalable systems."}),B.jsx("div",{className:"projects__grid",children:IR.map(s=>B.jsxs("article",{className:"project-card",children:[s.screenshot?B.jsx("div",{className:"project-card__thumb-wrap",children:B.jsx("img",{src:s.screenshot,alt:`${s.title} site preview`,className:"project-card__thumb",loading:"lazy",decoding:"async"})}):B.jsx("div",{className:"project-card__thumb-wrap project-card__thumb-wrap--placeholder","aria-hidden":!0,children:B.jsx("span",{className:"project-card__thumb-placeholder",children:"Preview unavailable"})}),B.jsxs("div",{className:"project-card__body",children:[B.jsx("ul",{className:"project-card__type-list",role:"list","aria-label":"Project types",children:s.types.map((e,r)=>B.jsx("li",{className:`project-card__type-chip${r===0?" project-card__type-chip--primary":""}`,children:e},`${s.title}-type-${r}`))}),B.jsxs("div",{className:"project-card__about",children:[B.jsx("h3",{className:"project-card__title",children:s.title}),B.jsx("p",{className:"project-card__desc",children:s.description})]}),B.jsx("div",{className:"project-card__tech",children:s.tech.map(e=>B.jsx("span",{className:"project-card__tag",children:e},e))})]}),B.jsxs("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"project-card__link",children:["View project ",B.jsx("span",{className:"project-card__arrow","aria-hidden":!0,children:"→"})]})]},s.title))})]})}),FR=()=>{const{scrollTo:s}=$S();return B.jsxs("div",{className:"homepage homepage--studio page-content",children:[B.jsx(bR,{scrollTo:s}),B.jsx(TR,{}),B.jsx(SR,{}),B.jsx(kR,{}),B.jsx(AR,{}),B.jsx(MR,{scrollTo:s}),B.jsx(JS,{})]})},OR=({className:s,title:e})=>B.jsxs("svg",{className:s,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?B.jsx("title",{children:e}):null,B.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z"})]}),zR=({className:s,title:e})=>B.jsxs("svg",{className:s,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?B.jsx("title",{children:e}):null,B.jsx("path",{d:"M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"})]}),BR=()=>B.jsx("footer",{className:"footer",children:B.jsxs("div",{className:"footer__inner container",children:[B.jsxs("div",{className:"footer__social","aria-label":"Social links",children:[B.jsxs("a",{href:"https://www.linkedin.com/in/taliba-sadiq",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"LinkedIn",children:[B.jsx(zR,{className:"footer__icon",title:"LinkedIn"}),B.jsx("span",{children:"LinkedIn"})]}),B.jsxs("a",{href:"https://github.com/Jazzmine-Flora",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"GitHub",children:[B.jsx(OR,{className:"footer__icon",title:"GitHub"}),B.jsx("span",{children:"GitHub"})]})]}),B.jsxs("p",{className:"footer__copy",children:["Copyright © ",new Date().getFullYear()," Taliba Sadiq. All rights reserved."]})]})});function HR(){de.useEffect(()=>{const s=d=>{d.preventDefault()},e=d=>{d.preventDefault()},r=d=>{d.preventDefault()},a=d=>{const p=d.target;((p==null?void 0:p.tagName)==="IMG"||p!=null&&p.closest("img"))&&d.preventDefault()},l=d=>{d.preventDefault()},c=d=>{const p=d.ctrlKey||d.metaKey;p&&(d.key==="s"||d.key==="S")&&d.preventDefault(),p&&(d.key==="c"||d.key==="C")&&d.preventDefault(),p&&(d.key==="x"||d.key==="X")&&d.preventDefault(),p&&(d.key==="a"||d.key==="A")&&d.preventDefault(),p&&(d.key==="u"||d.key==="U")&&d.preventDefault()};return document.addEventListener("contextmenu",s),document.addEventListener("copy",e,!0),document.addEventListener("cut",r,!0),document.addEventListener("dragstart",a,!0),document.addEventListener("selectstart",l,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("contextmenu",s),document.removeEventListener("copy",e,!0),document.removeEventListener("cut",r,!0),document.removeEventListener("dragstart",a,!0),document.removeEventListener("selectstart",l,!0),document.removeEventListener("keydown",c)}},[])}const VR=()=>(HR(),B.jsxs(B.Fragment,{children:[B.jsx(GS,{}),B.jsx(KS,{}),B.jsx("main",{children:B.jsx(cS,{children:B.jsx(v0,{path:"*",element:B.jsx(FR,{})})})}),B.jsx(BR,{})]})),GR=document.getElementById("root"),jR=_x.createRoot(GR);jR.render(B.jsx(dx.StrictMode,{children:B.jsx(DS,{children:B.jsx(VR,{})})}));
