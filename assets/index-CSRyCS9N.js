(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();function sx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kv={exports:{}},Ds={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Fv;function lx(){if(Fv)return Ds;Fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:i,key:d,ref:l!==void 0?l:null,props:c}}return Ds.Fragment=e,Ds.jsx=n,Ds.jsxs=n,Ds}var Ov;function cx(){return Ov||(Ov=1,kv.exports=lx()),kv.exports}var z=cx(),Bv={exports:{}},st={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var zv;function ux(){if(zv)return st;zv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,R={};function _(L,Q,ge){this.props=L,this.context=Q,this.refs=R,this.updater=ge||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=_.prototype;function A(L,Q,ge){this.props=L,this.context=Q,this.refs=R,this.updater=ge||b}var D=A.prototype=new y;D.constructor=A,x(D,_.prototype),D.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function O(L,Q,ge,be,Ne,Xe){return ge=Xe.ref,{$$typeof:o,type:L,key:Q,ref:ge!==void 0?ge:null,props:Xe}}function E(L,Q){return O(L.type,Q,void 0,void 0,void 0,L.props)}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ue(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return Q[ge]})}var V=/\/+/g;function J(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?ue(""+L.key):Q.toString(36)}function se(){}function le(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(se,se):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function re(L,Q,ge,be,Ne){var Xe=typeof L;(Xe==="undefined"||Xe==="boolean")&&(L=null);var K=!1;if(L===null)K=!0;else switch(Xe){case"bigint":case"string":case"number":K=!0;break;case"object":switch(L.$$typeof){case o:case e:K=!0;break;case v:return K=L._init,re(K(L._payload),Q,ge,be,Ne)}}if(K)return Ne=Ne(L),K=be===""?"."+J(L,0):be,N(Ne)?(ge="",K!=null&&(ge=K.replace(V,"$&/")+"/"),re(Ne,Q,ge,"",function(et){return et})):Ne!=null&&(P(Ne)&&(Ne=E(Ne,ge+(Ne.key==null||L&&L.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+K)),Q.push(Ne)),1;K=0;var Me=be===""?".":be+":";if(N(L))for(var Se=0;Se<L.length;Se++)be=L[Se],Xe=Me+J(be,Se),K+=re(be,Q,ge,Xe,Ne);else if(Se=g(L),typeof Se=="function")for(L=Se.call(L),Se=0;!(be=L.next()).done;)be=be.value,Xe=Me+J(be,Se++),K+=re(be,Q,ge,Xe,Ne);else if(Xe==="object"){if(typeof L.then=="function")return re(le(L),Q,ge,be,Ne);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return K}function U(L,Q,ge){if(L==null)return L;var be=[],Ne=0;return re(L,be,"","",function(Xe){return Q.call(ge,Xe,Ne++)}),be}function H(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var ce=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function _e(){}return st.Children={map:U,forEach:function(L,Q,ge){U(L,function(){Q.apply(this,arguments)},ge)},count:function(L){var Q=0;return U(L,function(){Q++}),Q},toArray:function(L){return U(L,function(Q){return Q})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},st.Component=_,st.Fragment=n,st.Profiler=l,st.PureComponent=A,st.StrictMode=i,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},st.cache=function(L){return function(){return L.apply(null,arguments)}},st.cloneElement=function(L,Q,ge){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var be=x({},L.props),Ne=L.key,Xe=void 0;if(Q!=null)for(K in Q.ref!==void 0&&(Xe=void 0),Q.key!==void 0&&(Ne=""+Q.key),Q)!k.call(Q,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&Q.ref===void 0||(be[K]=Q[K]);var K=arguments.length-2;if(K===1)be.children=ge;else if(1<K){for(var Me=Array(K),Se=0;Se<K;Se++)Me[Se]=arguments[Se+2];be.children=Me}return O(L.type,Ne,void 0,void 0,Xe,be)},st.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},st.createElement=function(L,Q,ge){var be,Ne={},Xe=null;if(Q!=null)for(be in Q.key!==void 0&&(Xe=""+Q.key),Q)k.call(Q,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ne[be]=Q[be]);var K=arguments.length-2;if(K===1)Ne.children=ge;else if(1<K){for(var Me=Array(K),Se=0;Se<K;Se++)Me[Se]=arguments[Se+2];Ne.children=Me}if(L&&L.defaultProps)for(be in K=L.defaultProps,K)Ne[be]===void 0&&(Ne[be]=K[be]);return O(L,Xe,void 0,void 0,null,Ne)},st.createRef=function(){return{current:null}},st.forwardRef=function(L){return{$$typeof:p,render:L}},st.isValidElement=P,st.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:H}},st.memo=function(L,Q){return{$$typeof:f,type:L,compare:Q===void 0?null:Q}},st.startTransition=function(L){var Q=F.T,ge={};F.T=ge;try{var be=L(),Ne=F.S;Ne!==null&&Ne(ge,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(_e,ce)}catch(Xe){ce(Xe)}finally{F.T=Q}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(L){return F.H.use(L)},st.useActionState=function(L,Q,ge){return F.H.useActionState(L,Q,ge)},st.useCallback=function(L,Q){return F.H.useCallback(L,Q)},st.useContext=function(L){return F.H.useContext(L)},st.useDebugValue=function(){},st.useDeferredValue=function(L,Q){return F.H.useDeferredValue(L,Q)},st.useEffect=function(L,Q,ge){var be=F.H;if(typeof ge=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(L,Q)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(L,Q,ge){return F.H.useImperativeHandle(L,Q,ge)},st.useInsertionEffect=function(L,Q){return F.H.useInsertionEffect(L,Q)},st.useLayoutEffect=function(L,Q){return F.H.useLayoutEffect(L,Q)},st.useMemo=function(L,Q){return F.H.useMemo(L,Q)},st.useOptimistic=function(L,Q){return F.H.useOptimistic(L,Q)},st.useReducer=function(L,Q,ge){return F.H.useReducer(L,Q,ge)},st.useRef=function(L){return F.H.useRef(L)},st.useState=function(L){return F.H.useState(L)},st.useSyncExternalStore=function(L,Q,ge){return F.H.useSyncExternalStore(L,Q,ge)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var Hv;function $f(){return Hv||(Hv=1,Bv.exports=ux()),Bv.exports}var de=$f();const dx=sx(de);var mh={exports:{}},ks={},Vv={exports:{}},Gv={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Wv;function hx(){return Wv||(Wv=1,(function(o){function e(U,H){var ce=U.length;U.push(H);e:for(;0<ce;){var _e=ce-1>>>1,L=U[_e];if(0<l(L,H))U[_e]=H,U[ce]=L,ce=_e;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],ce=U.pop();if(ce!==H){U[0]=ce;e:for(var _e=0,L=U.length,Q=L>>>1;_e<Q;){var ge=2*(_e+1)-1,be=U[ge],Ne=ge+1,Xe=U[Ne];if(0>l(be,ce))Ne<L&&0>l(Xe,be)?(U[_e]=Xe,U[Ne]=ce,_e=Ne):(U[_e]=be,U[ge]=ce,_e=ge);else if(Ne<L&&0>l(Xe,ce))U[_e]=Xe,U[Ne]=ce,_e=Ne;else break e}}return H}function l(U,H){var ce=U.sortIndex-H.sortIndex;return ce!==0?ce:U.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],f=[],v=1,S=null,g=3,b=!1,x=!1,R=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var H=n(f);H!==null;){if(H.callback===null)i(f);else if(H.startTime<=U)i(f),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(f)}}function F(U){if(R=!1,N(U),!x)if(n(m)!==null)x=!0,k||(k=!0,J());else{var H=n(f);H!==null&&re(F,H.startTime-U)}}var k=!1,O=-1,E=5,P=-1;function ue(){return _?!0:!(o.unstable_now()-P<E)}function V(){if(_=!1,k){var U=o.unstable_now();P=U;var H=!0;try{e:{x=!1,R&&(R=!1,A(O),O=-1),b=!0;var ce=g;try{t:{for(N(U),S=n(m);S!==null&&!(S.expirationTime>U&&ue());){var _e=S.callback;if(typeof _e=="function"){S.callback=null,g=S.priorityLevel;var L=_e(S.expirationTime<=U);if(U=o.unstable_now(),typeof L=="function"){S.callback=L,N(U),H=!0;break t}S===n(m)&&i(m),N(U)}else i(m);S=n(m)}if(S!==null)H=!0;else{var Q=n(f);Q!==null&&re(F,Q.startTime-U),H=!1}}break e}finally{S=null,g=ce,b=!1}H=void 0}}finally{H?J():k=!1}}}var J;if(typeof D=="function")J=function(){D(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=V,J=function(){le.postMessage(null)}}else J=function(){y(V,0)};function re(U,H){O=y(function(){U(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ce=g;g=H;try{return U()}finally{g=ce}},o.unstable_requestPaint=function(){_=!0},o.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ce=g;g=U;try{return H()}finally{g=ce}},o.unstable_scheduleCallback=function(U,H,ce){var _e=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?_e+ce:_e):ce=_e,U){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ce+L,U={id:v++,callback:H,priorityLevel:U,startTime:ce,expirationTime:L,sortIndex:-1},ce>_e?(U.sortIndex=ce,e(f,U),n(m)===null&&U===n(f)&&(R?(A(O),O=-1):R=!0,re(F,ce-_e))):(U.sortIndex=L,e(m,U),x||b||(x=!0,k||(k=!0,J()))),U},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(U){var H=g;return function(){var ce=g;g=H;try{return U.apply(this,arguments)}finally{g=ce}}}})(Gv)),Gv}var jv;function fx(){return jv||(jv=1,Vv.exports=hx()),Vv.exports}var gh={exports:{}},Tr={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Xv;function px(){if(Xv)return Tr;Xv=1;var o=$f();function e(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,f,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:f,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return Tr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tr.createPortal=function(m,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return c(m,f,null,v)},Tr.flushSync=function(m){var f=d.T,v=i.p;try{if(d.T=null,i.p=2,m)return m()}finally{d.T=f,i.p=v,i.d.f()}},Tr.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,i.d.C(m,f))},Tr.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},Tr.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var v=f.as,S=p(v,f.crossOrigin),g=typeof f.integrity=="string"?f.integrity:void 0,b=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?i.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:b}):v==="script"&&i.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:b,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},Tr.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=p(f.as,f.crossOrigin);i.d.M(m,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&i.d.M(m)},Tr.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,S=p(v,f.crossOrigin);i.d.L(m,v,{crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},Tr.preloadModule=function(m,f){if(typeof m=="string")if(f){var v=p(f.as,f.crossOrigin);i.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else i.d.m(m)},Tr.requestFormReset=function(m){i.d.r(m)},Tr.unstable_batchedUpdates=function(m,f){return m(f)},Tr.useFormState=function(m,f,v){return d.H.useFormState(m,f,v)},Tr.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tr.version="19.1.0",Tr}var qv;function mx(){if(qv)return gh.exports;qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gh.exports=px(),gh.exports}/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Yv;function gx(){if(Yv)return ks;Yv=1;var o=fx(),e=$f(),n=mx();function i(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(i(188))}function m(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,s=r;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),t;if(h===s)return p(u),r;h=h.sibling}throw Error(i(188))}if(a.return!==s.return)a=u,s=h;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,s=h;break}if(T===s){M=!0,s=u,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,s=u;break}if(T===s){M=!0,s=h,a=u;break}T=T.sibling}if(!M)throw Error(i(189))}}if(a.alternate!==s)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function f(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=f(t),r!==null)return r;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case _:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case N:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case E:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}var re=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},_e=[],L=-1;function Q(t){return{current:t}}function ge(t){0>L||(t.current=_e[L],_e[L]=null,L--)}function be(t,r){L++,_e[L]=t.current,t.current=r}var Ne=Q(null),Xe=Q(null),K=Q(null),Me=Q(null);function Se(t,r){switch(be(K,r),be(Xe,t),be(Ne,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=uv(r),t=dv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ge(Ne),be(Ne,t)}function et(){ge(Ne),ge(Xe),ge(K)}function Ze(t){t.memoizedState!==null&&be(Me,t);var r=Ne.current,a=dv(r,t.type);r!==a&&(be(Xe,t),be(Ne,a))}function Be(t){Xe.current===t&&(ge(Ne),ge(Xe)),Me.current===t&&(ge(Me),Ps._currentValue=ce)}var Et=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,it=o.unstable_cancelCallback,rr=o.unstable_shouldYield,Zt=o.unstable_requestPaint,Ut=o.unstable_now,G=o.unstable_getCurrentPriorityLevel,Xt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,je=o.unstable_LowPriority,I=o.unstable_IdlePriority,w=o.log,X=o.unstable_setDisableYieldValue,me=null,fe=null;function pe(t){if(typeof w=="function"&&X(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(me,t)}catch{}}var De=Math.clz32?Math.clz32:qe,Re=Math.log,$e=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Re(t)/$e|0)|0}var Ee=256,Te=4194304;function We(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ze(t,r,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~h,s!==0?u=We(s):(M&=T,M!==0?u=We(M):a||(a=T&~t,a!==0&&(u=We(a))))):(T=s&~h,T!==0?u=We(T):M!==0?u=We(M):a||(a=s&~t,a!==0&&(u=We(a)))),u===0?0:r!==0&&r!==u&&(r&h)===0&&(h=u&-u,a=r&-r,h>=a||h===32&&(a&4194048)!==0)?r:u}function Ue(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function ut(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Pe(){var t=Te;return Te<<=1,(Te&62914560)===0&&(Te=4194304),t}function Ae(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Fe(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,r,a,s,u,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=M&~a;0<a;){var ve=31-De(a),xe=1<<ve;T[ve]=0,B[ve]=-1;var ae=ee[ve];if(ae!==null)for(ee[ve]=null,ve=0;ve<ae.length;ve++){var ie=ae[ve];ie!==null&&(ie.lane&=-536870913)}a&=~xe}s!==0&&he(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~r))}function he(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var s=31-De(r);t.entangledLanes|=r,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function He(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var s=31-De(a),u=1<<s;u&r|t[s]&r&&(t[s]|=r),a&=~u}}function Qe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xt(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function fn(t,r){var a=H.p;try{return H.p=t,r()}finally{H.p=a}}var mr=Math.random().toString(36).slice(2),ur="__reactFiber$"+mr,gr="__reactProps$"+mr,wa="__reactContainer$"+mr,Di="__reactEvents$"+mr,ol="__reactListeners$"+mr,Gn="__reactHandles$"+mr,ki="__reactResources$"+mr,Ta="__reactMarker$"+mr;function Fi(t){delete t[ur],delete t[gr],delete t[Di],delete t[ol],delete t[Gn]}function pn(t){var r=t[ur];if(r)return r;for(var a=t.parentNode;a;){if(r=a[wa]||a[ur]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=mv(t);t!==null;){if(a=t[ur])return a;t=mv(t)}return r}t=a,a=t.parentNode}return null}function Wn(t){if(t=t[ur]||t[wa]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function wn(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(i(33))}function jn(t){var r=t[ki];return r||(r=t[ki]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function nr(t){t[Ta]=!0}var sl=new Set,ll={};function Xn(t,r){Aa(t,r),Aa(t+"Capture",r)}function Aa(t,r){for(ll[t]=r,t=0;t<r.length;t++)sl.add(r[t])}var pu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cl={},C={};function q(t){return Et.call(C,t)?!0:Et.call(cl,t)?!1:pu.test(t)?C[t]=!0:(cl[t]=!0,!1)}function oe(t,r,a){if(q(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var s=r.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function te(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function $(t,r,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+s)}}var Ce,Le;function ke(t){if(Ce===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Ce=r&&r[1]||"",Le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+t+Le}var Oe=!1;function Ke(t,r){if(!t||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(r){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ie){var ae=ie}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ie){ae=ie}t.call(xe.prototype)}}else{try{throw Error()}catch(ie){ae=ie}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ie){if(ie&&ae&&typeof ie.stack=="string")return[ie.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var B=M.split(`
`),ee=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===ee.length)for(s=B.length-1,u=ee.length-1;1<=s&&0<=u&&B[s]!==ee[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==ee[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==ee[u]){var ve=`
`+B[s].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=s&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ke(a):""}function ot(t){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return Ke(t.type,!1);case 11:return Ke(t.type.render,!1);case 1:return Ke(t.type,!0);case 31:return ke("Activity");default:return""}}function dt(t){try{var r="";do r+=ot(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Yt(t){var r=Pt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),s=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(M){s=""+M,h.call(this,M)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Dt(t){t._valueTracker||(t._valueTracker=Yt(t))}function Ct(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),s="";return t&&(s=Pt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(r.setValue(t),!0):!1}function zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Je=/[\n"\\]/g;function Gt(t){return t.replace(Je,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function mn(t,r,a,s,u,h,M,T){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),r!=null?M==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+Ve(r)):t.value!==""+Ve(r)&&(t.value=""+Ve(r)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),r!=null?Dr(t,M,Ve(r)):a!=null?Dr(t,M,Ve(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ve(T):t.removeAttribute("name")}function Ur(t,r,a,s,u,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),r!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||r!=null))return;a=a!=null?""+Ve(a):"",r=r!=null?""+Ve(r):a,T||r===t.value||(t.value=r),t.defaultValue=r}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dr(t,r,a){r==="number"&&zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function kr(t,r,a,s){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function qn(t,r,a){if(r!=null&&(r=""+Ve(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+Ve(a):""}function Rt(t,r,a,s){if(r==null){if(s!=null){if(a!=null)throw Error(i(92));if(re(s)){if(1<s.length)throw Error(i(93));s=s[0]}a=s}a==null&&(a=""),r=a}a=Ve(r),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Wt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(t,r,a){var s=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":s?t.setProperty(r,a):typeof a!="number"||a===0||Tn.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function Ca(t,r,a){if(r!=null&&typeof r!="object")throw Error(i(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||r!=null&&r.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in r)s=r[u],r.hasOwnProperty(u)&&a[u]!==s&&$t(t,u,s)}else for(var h in r)r.hasOwnProperty(h)&&$t(t,h,r[h])}function An(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return oy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oi=null,Bi=null;function hp(t){var r=Wn(t);if(r&&(t=r.stateNode)){var a=t[gr]||null;e:switch(t=r.stateNode,r.type){case"input":if(mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var s=a[r];if(s!==t&&s.form===t.form){var u=s[gr]||null;if(!u)throw Error(i(90));mn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<a.length;r++)s=a[r],s.form===t.form&&Ct(s)}break e;case"textarea":qn(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&kr(t,!!a.multiple,r,!1)}}}var vu=!1;function fp(t,r,a){if(vu)return t(r,a);vu=!0;try{var s=t(r);return s}finally{if(vu=!1,(Oi!==null||Bi!==null)&&(Jl(),Oi&&(r=Oi,t=Bi,Bi=Oi=null,hp(r),t)))for(r=0;r<t.length;r++)hp(t[r])}}function Go(t,r){var a=t.stateNode;if(a===null)return null;var s=a[gr]||null;if(s===null)return null;a=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Yn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{_u=!1}var Ra=null,yu=null,hl=null;function pp(){if(hl)return hl;var t,r=yu,a=r.length,s,u="value"in Ra?Ra.value:Ra.textContent,h=u.length;for(t=0;t<a&&r[t]===u[t];t++);var M=a-t;for(s=1;s<=M&&r[a-s]===u[h-s];s++);return hl=u.slice(t,1<s?1-s:void 0)}function fl(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function mp(){return!1}function Fr(t){function r(a,s,u,h,M){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:mp,this.isPropagationStopped=mp,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),r}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Fr(oi),jo=v({},oi,{view:0,detail:0}),sy=Fr(jo),bu,xu,Xo,gl=v({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(bu=t.screenX-Xo.screenX,xu=t.screenY-Xo.screenY):xu=bu=0,Xo=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),gp=Fr(gl),ly=v({},gl,{dataTransfer:0}),cy=Fr(ly),uy=v({},jo,{relatedTarget:0}),Su=Fr(uy),dy=v({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Fr(dy),fy=v({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=Fr(fy),my=v({},oi,{data:0}),vp=Fr(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=_y[t])?!!r[t]:!1}function Mu(){return yy}var by=v({},jo,{key:function(t){if(t.key){var r=gy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=Fr(by),Sy=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Fr(Sy),My=v({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Ey=Fr(My),wy=v({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Fr(wy),Ay=v({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=Fr(Ay),Ry=v({},oi,{newState:0,oldState:0}),Py=Fr(Ry),Ny=[9,13,27,32],Eu=Yn&&"CompositionEvent"in window,qo=null;Yn&&"documentMode"in document&&(qo=document.documentMode);var Ly=Yn&&"TextEvent"in window&&!qo,yp=Yn&&(!Eu||qo&&8<qo&&11>=qo),bp=" ",xp=!1;function Sp(t,r){switch(t){case"keyup":return Ny.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function Iy(t,r){switch(t){case"compositionend":return Mp(r);case"keypress":return r.which!==32?null:(xp=!0,bp);case"textInput":return t=r.data,t===bp&&xp?null:t;default:return null}}function Uy(t,r){if(zi)return t==="compositionend"||!Eu&&Sp(t,r)?(t=pp(),hl=yu=Ra=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yp&&r.locale!=="ko"?null:r.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Dy[t.type]:r==="textarea"}function wp(t,r,a,s){Oi?Bi?Bi.push(s):Bi=[s]:Oi=s,r=rc(r,"onChange"),0<r.length&&(a=new ml("onChange","change",null,a,s),t.push({event:a,listeners:r}))}var Yo=null,$o=null;function ky(t){iv(t,0)}function vl(t){var r=wn(t);if(Ct(r))return t}function Tp(t,r){if(t==="change")return r}var Ap=!1;if(Yn){var wu;if(Yn){var Tu="oninput"in document;if(!Tu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Tu=typeof Cp.oninput=="function"}wu=Tu}else wu=!1;Ap=wu&&(!document.documentMode||9<document.documentMode)}function Rp(){Yo&&(Yo.detachEvent("onpropertychange",Pp),$o=Yo=null)}function Pp(t){if(t.propertyName==="value"&&vl($o)){var r=[];wp(r,$o,t,gu(t)),fp(ky,r)}}function Fy(t,r,a){t==="focusin"?(Rp(),Yo=r,$o=a,Yo.attachEvent("onpropertychange",Pp)):t==="focusout"&&Rp()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl($o)}function By(t,r){if(t==="click")return vl(r)}function zy(t,r){if(t==="input"||t==="change")return vl(r)}function Hy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Gr=typeof Object.is=="function"?Object.is:Hy;function Jo(t,r){if(Gr(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),s=Object.keys(r);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Et.call(r,u)||!Gr(t[u],r[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,r){var a=Np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=r&&s>=r)return{node:a,offset:r-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Ip(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ip(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=zt(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=zt(t.document)}return r}function Au(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var Vy=Yn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Cu=null,Qo=null,Ru=!1;function Dp(t,r,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||Hi==null||Hi!==zt(s)||(s=Hi,"selectionStart"in s&&Au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qo&&Jo(Qo,s)||(Qo=s,s=rc(Cu,"onSelect"),0<s.length&&(r=new ml("onSelect","select",null,r,a),t.push({event:r,listeners:s}),r.target=Hi)))}function si(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Vi={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},Pu={},kp={};Yn&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function li(t){if(Pu[t])return Pu[t];if(!Vi[t])return t;var r=Vi[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in kp)return Pu[t]=r[a];return t}var Fp=li("animationend"),Op=li("animationiteration"),Bp=li("animationstart"),Gy=li("transitionrun"),Wy=li("transitionstart"),jy=li("transitioncancel"),zp=li("transitionend"),Hp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function gn(t,r){Hp.set(t,r),Xn(r,[t])}var Vp=new WeakMap;function Kr(t,r){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(r={value:t,source:r,stack:dt(r)},Vp.set(t,r),r)}return{value:t,source:r,stack:dt(r)}}var en=[],Gi=0,Lu=0;function _l(){for(var t=Gi,r=Lu=Gi=0;r<t;){var a=en[r];en[r++]=null;var s=en[r];en[r++]=null;var u=en[r];en[r++]=null;var h=en[r];if(en[r++]=null,s!==null&&u!==null){var M=s.pending;M===null?u.next=u:(u.next=M.next,M.next=u),s.pending=u}h!==0&&Gp(a,u,h)}}function yl(t,r,a,s){en[Gi++]=t,en[Gi++]=r,en[Gi++]=a,en[Gi++]=s,Lu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Iu(t,r,a,s){return yl(t,r,a,s),bl(t)}function Wi(t,r){return yl(t,null,null,r),bl(t)}function Gp(t,r,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&r!==null&&(u=31-De(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[r]:s.push(r),r.lane=a|536870912),h):null}function bl(t){if(50<Ss)throw Ss=0,Bd=null,Error(i(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var ji={};function Xy(t,r,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(t,r,a,s){return new Xy(t,r,a,s)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $n(t,r){var a=t.alternate;return a===null?(a=Wr(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wp(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function xl(t,r,a,s,u,h){var M=0;if(s=t,typeof t=="function")Uu(t)&&(M=1);else if(typeof t=="string")M=Yb(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Wr(31,a,r,u),t.elementType=P,t.lanes=h,t;case x:return ci(a.children,u,h,r);case R:M=8,u|=24;break;case _:return t=Wr(12,a,r,u|2),t.elementType=_,t.lanes=h,t;case F:return t=Wr(13,a,r,u),t.elementType=F,t.lanes=h,t;case k:return t=Wr(19,a,r,u),t.elementType=k,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case D:M=10;break e;case A:M=9;break e;case N:M=11;break e;case O:M=14;break e;case E:M=16,s=null;break e}M=29,a=Error(i(130,t===null?"null":typeof t,"")),s=null}return r=Wr(M,a,r,u),r.elementType=t,r.type=s,r.lanes=h,r}function ci(t,r,a,s){return t=Wr(7,t,s,r),t.lanes=a,t}function Du(t,r,a){return t=Wr(6,t,null,r),t.lanes=a,t}function ku(t,r,a){return r=Wr(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Xi=[],qi=0,Sl=null,Ml=0,tn=[],rn=0,ui=null,Jn=1,Qn="";function di(t,r){Xi[qi++]=Ml,Xi[qi++]=Sl,Sl=t,Ml=r}function jp(t,r,a){tn[rn++]=Jn,tn[rn++]=Qn,tn[rn++]=ui,ui=t;var s=Jn;t=Qn;var u=32-De(s)-1;s&=~(1<<u),a+=1;var h=32-De(r)+u;if(30<h){var M=u-u%5;h=(s&(1<<M)-1).toString(32),s>>=M,u-=M,Jn=1<<32-De(r)+u|a<<u|s,Qn=h+t}else Jn=1<<h|a<<u|s,Qn=t}function Fu(t){t.return!==null&&(di(t,1),jp(t,1,0))}function Ou(t){for(;t===Sl;)Sl=Xi[--qi],Xi[qi]=null,Ml=Xi[--qi],Xi[qi]=null;for(;t===ui;)ui=tn[--rn],tn[rn]=null,Qn=tn[--rn],tn[rn]=null,Jn=tn[--rn],tn[rn]=null}var Pr=null,Kt=null,At=!1,hi=null,Cn=!1,Bu=Error(i(519));function fi(t){var r=Error(i(418,""));throw es(Kr(r,t)),Bu}function Xp(t){var r=t.stateNode,a=t.type,s=t.memoizedProps;switch(r[ur]=t,r[gr]=s,a){case"dialog":mt("cancel",r),mt("close",r);break;case"iframe":case"object":case"embed":mt("load",r);break;case"video":case"audio":for(a=0;a<Es.length;a++)mt(Es[a],r);break;case"source":mt("error",r);break;case"img":case"image":case"link":mt("error",r),mt("load",r);break;case"details":mt("toggle",r);break;case"input":mt("invalid",r),Ur(r,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Dt(r);break;case"select":mt("invalid",r);break;case"textarea":mt("invalid",r),Rt(r,s.value,s.defaultValue,s.children),Dt(r)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||s.suppressHydrationWarning===!0||cv(r.textContent,a)?(s.popover!=null&&(mt("beforetoggle",r),mt("toggle",r)),s.onScroll!=null&&mt("scroll",r),s.onScrollEnd!=null&&mt("scrollend",r),s.onClick!=null&&(r.onclick=nc),r=!0):r=!1,r||fi(t)}function qp(t){for(Pr=t.return;Pr;)switch(Pr.tag){case 5:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:Pr=Pr.return}}function Zo(t){if(t!==Pr)return!1;if(!At)return qp(t),At=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||th(t.type,t.memoizedProps)),a=!a),a&&Kt&&fi(t),qp(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){Kt=_n(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}Kt=null}}else r===27?(r=Kt,ja(t.type)?(t=ih,ih=null,Kt=t):Kt=r):Kt=Pr?_n(t.stateNode.nextSibling):null;return!0}function Ko(){Kt=Pr=null,At=!1}function Yp(){var t=hi;return t!==null&&(zr===null?zr=t:zr.push.apply(zr,t),hi=null),t}function es(t){hi===null?hi=[t]:hi.push(t)}var zu=Q(null),pi=null,Zn=null;function Pa(t,r,a){be(zu,r._currentValue),r._currentValue=a}function Kn(t){t._currentValue=zu.current,ge(zu)}function Hu(t,r,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),t===a)break;t=t.return}}function Vu(t,r,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=u;for(var B=0;B<r.length;B++)if(T.context===r[B]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),Hu(h.return,a,t),s||(M=null);break e}h=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(i(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Hu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ts(t,r,a,s){t=null;for(var u=r,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(i(387));if(M=M.memoizedProps,M!==null){var T=u.type;Gr(u.pendingProps.value,M.value)||(t!==null?t.push(T):t=[T])}}else if(u===Me.current){if(M=u.alternate,M===null)throw Error(i(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ps):t=[Ps])}u=u.return}t!==null&&Vu(r,t,a,s),r.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Gr(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mi(t){pi=t,Zn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wr(t){return $p(pi,t)}function wl(t,r){return pi===null&&mi(t),$p(t,r)}function $p(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Zn===null){if(t===null)throw Error(i(308));Zn=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Zn=Zn.next=r;return a}var qy=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},Yy=o.unstable_scheduleCallback,$y=o.unstable_NormalPriority,dr={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new qy,data:new Map,refCount:0}}function rs(t){t.refCount--,t.refCount===0&&Yy($y,function(){t.controller.abort()})}var ns=null,Wu=0,Yi=0,$i=null;function Jy(t,r){if(ns===null){var a=ns=[];Wu=0,Yi=Xd(),$i={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wu++,r.then(Jp,Jp),r}function Jp(){if(--Wu===0&&ns!==null){$i!==null&&($i.status="fulfilled");var t=ns;ns=null,Yi=0,$i=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Qy(t,r){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=r;for(var u=0;u<a.length;u++)(0,a[u])(r)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Qp=U.S;U.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Jy(t,r),Qp!==null&&Qp(t,r)};var gi=Q(null);function ju(){var t=gi.current;return t!==null?t:Vt.pooledCache}function Tl(t,r){r===null?be(gi,gi.current):be(gi,r.pool)}function Zp(){var t=ju();return t===null?null:{parent:dr._currentValue,pool:t}}var as=Error(i(460)),Kp=Error(i(474)),Al=Error(i(542)),Xu={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function tm(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(Cl,Cl),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,nm(t),t;default:if(typeof r.status=="string")r.then(Cl,Cl);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=r,t.status="pending",t.then(function(s){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=s}},function(s){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=s}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,nm(t),t}throw is=r,as}}var is=null;function rm(){if(is===null)throw Error(i(459));var t=is;return is=null,t}function nm(t){if(t===as||t===Al)throw Error(i(483))}var Na=!1;function qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,r,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var u=s.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),s.pending=r,r=bl(t),Gp(t,null,a),r}return yl(t,s,r,a),bl(t)}function os(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var s=r.lanes;s&=t.pendingLanes,a|=s,r.lanes=a,He(t,a)}}function $u(t,r){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=r:h=h.next=r}else u=h=r;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var Ju=!1;function ss(){if(Ju){var t=$i;if(t!==null)throw t}}function ls(t,r,a,s){Ju=!1;var u=t.updateQueue;Na=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,ee=B.next;B.next=null,M===null?h=ee:M.next=ee,M=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,T=ve.lastBaseUpdate,T!==M&&(T===null?ve.firstBaseUpdate=ee:T.next=ee,ve.lastBaseUpdate=B))}if(h!==null){var xe=u.baseState;M=0,ve=ee=B=null,T=h;do{var ae=T.lane&-536870913,ie=ae!==T.lane;if(ie?(_t&ae)===ae:(s&ae)===ae){ae!==0&&ae===Yi&&(Ju=!0),ve!==null&&(ve=ve.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var nt=t,tt=T;ae=r;var Ot=a;switch(tt.tag){case 1:if(nt=tt.payload,typeof nt=="function"){xe=nt.call(Ot,xe,ae);break e}xe=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=tt.payload,ae=typeof nt=="function"?nt.call(Ot,xe,ae):nt,ae==null)break e;xe=v({},xe,ae);break e;case 2:Na=!0}}ae=T.callback,ae!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ae]:ie.push(ae))}else ie={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ve===null?(ee=ve=ie,B=xe):ve=ve.next=ie,M|=ae;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);ve===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=ve,h===null&&(u.shared.lanes=0),Ha|=M,t.lanes=M,t.memoizedState=xe}}function am(t,r){if(typeof t!="function")throw Error(i(191,t));t.call(r)}function im(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)am(a[t],r)}var Ji=Q(null),Rl=Q(0);function om(t,r){t=sa,be(Rl,t),be(Ji,r),sa=t|r.baseLanes}function Qu(){be(Rl,sa),be(Ji,Ji.current)}function Zu(){sa=Rl.current,ge(Ji),ge(Rl)}var Ua=0,ht=null,kt=null,sr=null,Pl=!1,Qi=!1,vi=!1,Nl=0,cs=0,Zi=null,Zy=0;function ar(){throw Error(i(321))}function Ku(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Gr(t[a],r[a]))return!1;return!0}function ed(t,r,a,s,u,h){return Ua=h,ht=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,U.H=t===null||t.memoizedState===null?Gm:Wm,vi=!1,h=a(s,u),vi=!1,Qi&&(h=lm(r,a,s,u)),sm(t),h}function sm(t){U.H=Fl;var r=kt!==null&&kt.next!==null;if(Ua=0,sr=kt=ht=null,Pl=!1,cs=0,Zi=null,r)throw Error(i(300));t===null||vr||(t=t.dependencies,t!==null&&El(t)&&(vr=!0))}function lm(t,r,a,s){ht=t;var u=0;do{if(Qi&&(Zi=null),cs=0,Qi=!1,25<=u)throw Error(i(301));if(u+=1,sr=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=ib,h=r(a,s)}while(Qi);return h}function Ky(){var t=U.H,r=t.useState()[0];return r=typeof r.then=="function"?us(r):r,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ht.flags|=1024),r}function td(){var t=Nl!==0;return Nl=0,t}function rd(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function nd(t){if(Pl){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Pl=!1}Ua=0,sr=kt=ht=null,Qi=!1,cs=Nl=0,Zi=null}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sr===null?ht.memoizedState=sr=t:sr=sr.next=t,sr}function lr(){if(kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var r=sr===null?ht.memoizedState:sr.next;if(r!==null)sr=r,kt=t;else{if(t===null)throw ht.alternate===null?Error(i(467)):Error(i(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},sr===null?ht.memoizedState=sr=t:sr=sr.next=t}return sr}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(t){var r=cs;return cs+=1,Zi===null&&(Zi=[]),t=tm(Zi,t,r),r=ht,(sr===null?r.memoizedState:sr.next)===null&&(r=r.alternate,U.H=r===null||r.memoizedState===null?Gm:Wm),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return us(t);if(t.$$typeof===D)return wr(t)}throw Error(i(438,String(t)))}function id(t){var r=null,a=ht.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(r={data:s.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=ad(),ht.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),s=0;s<t;s++)a[s]=ue;return r.index++,a}function ea(t,r){return typeof r=="function"?r(t):r}function Il(t){var r=lr();return od(r,kt,t)}function od(t,r,a){var s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}r.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{r=u.next;var T=M=null,B=null,ee=r,ve=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(_t&xe)===xe:(Ua&xe)===xe){var ae=ee.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===Yi&&(ve=!0);else if((Ua&ae)===ae){ee=ee.next,ae===Yi&&(ve=!0);continue}else xe={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(T=B=xe,M=h):B=B.next=xe,ht.lanes|=ae,Ha|=ae;xe=ee.action,vi&&a(h,xe),h=ee.hasEagerState?ee.eagerState:a(h,xe)}else ae={lane:xe,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(T=B=ae,M=h):B=B.next=ae,ht.lanes|=xe,Ha|=xe;ee=ee.next}while(ee!==null&&ee!==r);if(B===null?M=h:B.next=T,!Gr(h,t.memoizedState)&&(vr=!0,ve&&(a=$i,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=B,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function sd(t){var r=lr(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=r.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Gr(h,r.memoizedState)||(vr=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),a.lastRenderedState=h}return[h,s]}function cm(t,r,a){var s=ht,u=lr(),h=At;if(h){if(a===void 0)throw Error(i(407));a=a()}else a=r();var M=!Gr((kt||u).memoizedState,a);M&&(u.memoizedState=a,vr=!0),u=u.queue;var T=hm.bind(null,s,u,t);if(ds(2048,8,T,[t]),u.getSnapshot!==r||M||sr!==null&&sr.memoizedState.tag&1){if(s.flags|=2048,Ki(9,Ul(),dm.bind(null,s,u,a,r),null),Vt===null)throw Error(i(349));h||(Ua&124)!==0||um(s,r,a)}return a}function um(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=ht.updateQueue,r===null?(r=ad(),ht.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function dm(t,r,a,s){r.value=a,r.getSnapshot=s,fm(r)&&pm(t)}function hm(t,r,a){return a(function(){fm(r)&&pm(t)})}function fm(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Gr(t,a)}catch{return!0}}function pm(t){var r=Wi(t,2);r!==null&&$r(r,t,2)}function ld(t){var r=Or();if(typeof t=="function"){var a=t;if(t=a(),vi){pe(!0);try{a()}finally{pe(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},r}function mm(t,r,a,s){return t.baseState=a,od(t,kt,typeof s=="function"?s:ea)}function eb(t,r,a,s,u){if(kl(t))throw Error(i(485));if(t=r.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};U.T!==null?a(!0):h.isTransition=!1,s(h),a=r.pending,a===null?(h.next=r.pending=h,gm(r,h)):(h.next=a.next,r.pending=a.next=h)}}function gm(t,r){var a=r.action,s=r.payload,u=t.state;if(r.isTransition){var h=U.T,M={};U.T=M;try{var T=a(u,s),B=U.S;B!==null&&B(M,T),vm(t,r,T)}catch(ee){cd(t,r,ee)}finally{U.T=h}}else try{h=a(u,s),vm(t,r,h)}catch(ee){cd(t,r,ee)}}function vm(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){_m(t,r,s)},function(s){return cd(t,r,s)}):_m(t,r,a)}function _m(t,r,a){r.status="fulfilled",r.value=a,ym(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,gm(t,a)))}function cd(t,r,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do r.status="rejected",r.reason=a,ym(r),r=r.next;while(r!==s)}t.action=null}function ym(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function bm(t,r){return r}function xm(t,r){if(At){var a=Vt.formState;if(a!==null){e:{var s=ht;if(At){if(Kt){t:{for(var u=Kt,h=Cn;u.nodeType!==8;){if(!h){u=null;break t}if(u=_n(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Kt=_n(u.nextSibling),s=u.data==="F!";break e}}fi(s)}s=!1}s&&(r=a[0])}}return a=Or(),a.memoizedState=a.baseState=r,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:r},a.queue=s,a=zm.bind(null,ht,s),s.dispatch=a,s=ld(!1),h=pd.bind(null,ht,!1,s.queue),s=Or(),u={state:r,dispatch:null,action:t,pending:null},s.queue=u,a=eb.bind(null,ht,u,h,a),u.dispatch=a,s.memoizedState=t,[r,a,!1]}function Sm(t){var r=lr();return Mm(r,kt,t)}function Mm(t,r,a){if(r=od(t,r,bm)[0],t=Il(ea)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var s=us(r)}catch(M){throw M===as?Al:M}else s=r;r=lr();var u=r.queue,h=u.dispatch;return a!==r.memoizedState&&(ht.flags|=2048,Ki(9,Ul(),tb.bind(null,u,a),null)),[s,h,t]}function tb(t,r){t.action=r}function Em(t){var r=lr(),a=kt;if(a!==null)return Mm(r,a,t);lr(),r=r.memoizedState,a=lr();var s=a.queue.dispatch;return a.memoizedState=t,[r,s,!1]}function Ki(t,r,a,s){return t={tag:t,create:a,deps:s,inst:r,next:null},r=ht.updateQueue,r===null&&(r=ad(),ht.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,r.lastEffect=t),t}function Ul(){return{destroy:void 0,resource:void 0}}function wm(){return lr().memoizedState}function Dl(t,r,a,s){var u=Or();s=s===void 0?null:s,ht.flags|=t,u.memoizedState=Ki(1|r,Ul(),a,s)}function ds(t,r,a,s){var u=lr();s=s===void 0?null:s;var h=u.memoizedState.inst;kt!==null&&s!==null&&Ku(s,kt.memoizedState.deps)?u.memoizedState=Ki(r,h,a,s):(ht.flags|=t,u.memoizedState=Ki(1|r,h,a,s))}function Tm(t,r){Dl(8390656,8,t,r)}function Am(t,r){ds(2048,8,t,r)}function Cm(t,r){return ds(4,2,t,r)}function Rm(t,r){return ds(4,4,t,r)}function Pm(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nm(t,r,a){a=a!=null?a.concat([t]):null,ds(4,4,Pm.bind(null,r,t),a)}function ud(){}function Lm(t,r){var a=lr();r=r===void 0?null:r;var s=a.memoizedState;return r!==null&&Ku(r,s[1])?s[0]:(a.memoizedState=[t,r],t)}function Im(t,r){var a=lr();r=r===void 0?null:r;var s=a.memoizedState;if(r!==null&&Ku(r,s[1]))return s[0];if(s=t(),vi){pe(!0);try{t()}finally{pe(!1)}}return a.memoizedState=[s,r],s}function dd(t,r,a){return a===void 0||(Ua&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=kg(),ht.lanes|=t,Ha|=t,a)}function Um(t,r,a,s){return Gr(a,r)?a:Ji.current!==null?(t=dd(t,a,s),Gr(t,r)||(vr=!0),t):(Ua&42)===0?(vr=!0,t.memoizedState=a):(t=kg(),ht.lanes|=t,Ha|=t,r)}function Dm(t,r,a,s,u){var h=H.p;H.p=h!==0&&8>h?h:8;var M=U.T,T={};U.T=T,pd(t,!1,r,a);try{var B=u(),ee=U.S;if(ee!==null&&ee(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ve=Qy(B,s);hs(t,r,ve,Yr(t))}else hs(t,r,s,Yr(t))}catch(xe){hs(t,r,{then:function(){},status:"rejected",reason:xe},Yr())}finally{H.p=h,U.T=M}}function rb(){}function hd(t,r,a,s){if(t.tag!==5)throw Error(i(476));var u=km(t).queue;Dm(t,u,r,ce,a===null?rb:function(){return Fm(t),a(s)})}function km(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ce},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Fm(t){var r=km(t).next.queue;hs(t,r,{},Yr())}function fd(){return wr(Ps)}function Om(){return lr().memoizedState}function Bm(){return lr().memoizedState}function nb(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=Yr();t=La(a);var s=Ia(r,t,a);s!==null&&($r(s,r,a),os(s,r,a)),r={cache:Gu()},t.payload=r;return}r=r.return}}function ab(t,r,a){var s=Yr();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?Hm(r,a):(a=Iu(t,r,a,s),a!==null&&($r(a,t,s),Vm(a,r,s)))}function zm(t,r,a){var s=Yr();hs(t,r,a,s)}function hs(t,r,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))Hm(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var M=r.lastRenderedState,T=h(M,a);if(u.hasEagerState=!0,u.eagerState=T,Gr(T,M))return yl(t,r,u,0),Vt===null&&_l(),!1}catch{}finally{}if(a=Iu(t,r,u,s),a!==null)return $r(a,t,s),Vm(a,r,s),!0}return!1}function pd(t,r,a,s){if(s={lane:2,revertLane:Xd(),action:s,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(r)throw Error(i(479))}else r=Iu(t,a,s,2),r!==null&&$r(r,t,2)}function kl(t){var r=t.alternate;return t===ht||r!==null&&r===ht}function Hm(t,r){Qi=Pl=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Vm(t,r,a){if((a&4194048)!==0){var s=r.lanes;s&=t.pendingLanes,a|=s,r.lanes=a,He(t,a)}}var Fl={readContext:wr,use:Ll,useCallback:ar,useContext:ar,useEffect:ar,useImperativeHandle:ar,useLayoutEffect:ar,useInsertionEffect:ar,useMemo:ar,useReducer:ar,useRef:ar,useState:ar,useDebugValue:ar,useDeferredValue:ar,useTransition:ar,useSyncExternalStore:ar,useId:ar,useHostTransitionStatus:ar,useFormState:ar,useActionState:ar,useOptimistic:ar,useMemoCache:ar,useCacheRefresh:ar},Gm={readContext:wr,use:Ll,useCallback:function(t,r){return Or().memoizedState=[t,r===void 0?null:r],t},useContext:wr,useEffect:Tm,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Pm.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Dl(4194308,4,t,r)},useInsertionEffect:function(t,r){Dl(4,2,t,r)},useMemo:function(t,r){var a=Or();r=r===void 0?null:r;var s=t();if(vi){pe(!0);try{t()}finally{pe(!1)}}return a.memoizedState=[s,r],s},useReducer:function(t,r,a){var s=Or();if(a!==void 0){var u=a(r);if(vi){pe(!0);try{a(r)}finally{pe(!1)}}}else u=r;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=ab.bind(null,ht,t),[s.memoizedState,t]},useRef:function(t){var r=Or();return t={current:t},r.memoizedState=t},useState:function(t){t=ld(t);var r=t.queue,a=zm.bind(null,ht,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:ud,useDeferredValue:function(t,r){var a=Or();return dd(a,t,r)},useTransition:function(){var t=ld(!1);return t=Dm.bind(null,ht,t.queue,!0,!1),Or().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var s=ht,u=Or();if(At){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Vt===null)throw Error(i(349));(_t&124)!==0||um(s,r,a)}u.memoizedState=a;var h={value:a,getSnapshot:r};return u.queue=h,Tm(hm.bind(null,s,h,t),[t]),s.flags|=2048,Ki(9,Ul(),dm.bind(null,s,h,a,r),null),a},useId:function(){var t=Or(),r=Vt.identifierPrefix;if(At){var a=Qn,s=Jn;a=(s&~(1<<32-De(s)-1)).toString(32)+a,r="«"+r+"R"+a,a=Nl++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=Zy++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:fd,useFormState:xm,useActionState:xm,useOptimistic:function(t){var r=Or();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=pd.bind(null,ht,!0,a),a.dispatch=r,[t,r]},useMemoCache:id,useCacheRefresh:function(){return Or().memoizedState=nb.bind(null,ht)}},Wm={readContext:wr,use:Ll,useCallback:Lm,useContext:wr,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Im,useReducer:Il,useRef:wm,useState:function(){return Il(ea)},useDebugValue:ud,useDeferredValue:function(t,r){var a=lr();return Um(a,kt.memoizedState,t,r)},useTransition:function(){var t=Il(ea)[0],r=lr().memoizedState;return[typeof t=="boolean"?t:us(t),r]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:fd,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,r){var a=lr();return mm(a,kt,t,r)},useMemoCache:id,useCacheRefresh:Bm},ib={readContext:wr,use:Ll,useCallback:Lm,useContext:wr,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Im,useReducer:sd,useRef:wm,useState:function(){return sd(ea)},useDebugValue:ud,useDeferredValue:function(t,r){var a=lr();return kt===null?dd(a,t,r):Um(a,kt.memoizedState,t,r)},useTransition:function(){var t=sd(ea)[0],r=lr().memoizedState;return[typeof t=="boolean"?t:us(t),r]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:fd,useFormState:Em,useActionState:Em,useOptimistic:function(t,r){var a=lr();return kt!==null?mm(a,kt,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:id,useCacheRefresh:Bm},eo=null,fs=0;function Ol(t){var r=fs;return fs+=1,eo===null&&(eo=[]),tm(eo,t,r)}function ps(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Bl(t,r){throw r.$$typeof===S?Error(i(525)):(t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function jm(t){var r=t._init;return r(t._payload)}function Xm(t){function r(Y,W){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[W],Y.flags|=16):Z.push(W)}}function a(Y,W){if(!t)return null;for(;W!==null;)r(Y,W),W=W.sibling;return null}function s(Y){for(var W=new Map;Y!==null;)Y.key!==null?W.set(Y.key,Y):W.set(Y.index,Y),Y=Y.sibling;return W}function u(Y,W){return Y=$n(Y,W),Y.index=0,Y.sibling=null,Y}function h(Y,W,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<W?(Y.flags|=67108866,W):Z):(Y.flags|=67108866,W)):(Y.flags|=1048576,W)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,W,Z,ye){return W===null||W.tag!==6?(W=Du(Z,Y.mode,ye),W.return=Y,W):(W=u(W,Z),W.return=Y,W)}function B(Y,W,Z,ye){var Ge=Z.type;return Ge===x?ve(Y,W,Z.props.children,ye,Z.key):W!==null&&(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===E&&jm(Ge)===W.type)?(W=u(W,Z.props),ps(W,Z),W.return=Y,W):(W=xl(Z.type,Z.key,Z.props,null,Y.mode,ye),ps(W,Z),W.return=Y,W)}function ee(Y,W,Z,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=ku(Z,Y.mode,ye),W.return=Y,W):(W=u(W,Z.children||[]),W.return=Y,W)}function ve(Y,W,Z,ye,Ge){return W===null||W.tag!==7?(W=ci(Z,Y.mode,ye,Ge),W.return=Y,W):(W=u(W,Z),W.return=Y,W)}function xe(Y,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Du(""+W,Y.mode,Z),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case g:return Z=xl(W.type,W.key,W.props,null,Y.mode,Z),ps(Z,W),Z.return=Y,Z;case b:return W=ku(W,Y.mode,Z),W.return=Y,W;case E:var ye=W._init;return W=ye(W._payload),xe(Y,W,Z)}if(re(W)||J(W))return W=ci(W,Y.mode,Z,null),W.return=Y,W;if(typeof W.then=="function")return xe(Y,Ol(W),Z);if(W.$$typeof===D)return xe(Y,wl(Y,W),Z);Bl(Y,W)}return null}function ae(Y,W,Z,ye){var Ge=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ge!==null?null:T(Y,W,""+Z,ye);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case g:return Z.key===Ge?B(Y,W,Z,ye):null;case b:return Z.key===Ge?ee(Y,W,Z,ye):null;case E:return Ge=Z._init,Z=Ge(Z._payload),ae(Y,W,Z,ye)}if(re(Z)||J(Z))return Ge!==null?null:ve(Y,W,Z,ye,null);if(typeof Z.then=="function")return ae(Y,W,Ol(Z),ye);if(Z.$$typeof===D)return ae(Y,W,wl(Y,Z),ye);Bl(Y,Z)}return null}function ie(Y,W,Z,ye,Ge){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Y=Y.get(Z)||null,T(W,Y,""+ye,Ge);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case g:return Y=Y.get(ye.key===null?Z:ye.key)||null,B(W,Y,ye,Ge);case b:return Y=Y.get(ye.key===null?Z:ye.key)||null,ee(W,Y,ye,Ge);case E:var ft=ye._init;return ye=ft(ye._payload),ie(Y,W,Z,ye,Ge)}if(re(ye)||J(ye))return Y=Y.get(Z)||null,ve(W,Y,ye,Ge,null);if(typeof ye.then=="function")return ie(Y,W,Z,Ol(ye),Ge);if(ye.$$typeof===D)return ie(Y,W,Z,wl(W,ye),Ge);Bl(W,ye)}return null}function nt(Y,W,Z,ye){for(var Ge=null,ft=null,Ye=W,rt=W=0,yr=null;Ye!==null&&rt<Z.length;rt++){Ye.index>rt?(yr=Ye,Ye=null):yr=Ye.sibling;var St=ae(Y,Ye,Z[rt],ye);if(St===null){Ye===null&&(Ye=yr);break}t&&Ye&&St.alternate===null&&r(Y,Ye),W=h(St,W,rt),ft===null?Ge=St:ft.sibling=St,ft=St,Ye=yr}if(rt===Z.length)return a(Y,Ye),At&&di(Y,rt),Ge;if(Ye===null){for(;rt<Z.length;rt++)Ye=xe(Y,Z[rt],ye),Ye!==null&&(W=h(Ye,W,rt),ft===null?Ge=Ye:ft.sibling=Ye,ft=Ye);return At&&di(Y,rt),Ge}for(Ye=s(Ye);rt<Z.length;rt++)yr=ie(Ye,Y,rt,Z[rt],ye),yr!==null&&(t&&yr.alternate!==null&&Ye.delete(yr.key===null?rt:yr.key),W=h(yr,W,rt),ft===null?Ge=yr:ft.sibling=yr,ft=yr);return t&&Ye.forEach(function(Ja){return r(Y,Ja)}),At&&di(Y,rt),Ge}function tt(Y,W,Z,ye){if(Z==null)throw Error(i(151));for(var Ge=null,ft=null,Ye=W,rt=W=0,yr=null,St=Z.next();Ye!==null&&!St.done;rt++,St=Z.next()){Ye.index>rt?(yr=Ye,Ye=null):yr=Ye.sibling;var Ja=ae(Y,Ye,St.value,ye);if(Ja===null){Ye===null&&(Ye=yr);break}t&&Ye&&Ja.alternate===null&&r(Y,Ye),W=h(Ja,W,rt),ft===null?Ge=Ja:ft.sibling=Ja,ft=Ja,Ye=yr}if(St.done)return a(Y,Ye),At&&di(Y,rt),Ge;if(Ye===null){for(;!St.done;rt++,St=Z.next())St=xe(Y,St.value,ye),St!==null&&(W=h(St,W,rt),ft===null?Ge=St:ft.sibling=St,ft=St);return At&&di(Y,rt),Ge}for(Ye=s(Ye);!St.done;rt++,St=Z.next())St=ie(Ye,Y,rt,St.value,ye),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?rt:St.key),W=h(St,W,rt),ft===null?Ge=St:ft.sibling=St,ft=St);return t&&Ye.forEach(function(ox){return r(Y,ox)}),At&&di(Y,rt),Ge}function Ot(Y,W,Z,ye){if(typeof Z=="object"&&Z!==null&&Z.type===x&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case g:e:{for(var Ge=Z.key;W!==null;){if(W.key===Ge){if(Ge=Z.type,Ge===x){if(W.tag===7){a(Y,W.sibling),ye=u(W,Z.props.children),ye.return=Y,Y=ye;break e}}else if(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===E&&jm(Ge)===W.type){a(Y,W.sibling),ye=u(W,Z.props),ps(ye,Z),ye.return=Y,Y=ye;break e}a(Y,W);break}else r(Y,W);W=W.sibling}Z.type===x?(ye=ci(Z.props.children,Y.mode,ye,Z.key),ye.return=Y,Y=ye):(ye=xl(Z.type,Z.key,Z.props,null,Y.mode,ye),ps(ye,Z),ye.return=Y,Y=ye)}return M(Y);case b:e:{for(Ge=Z.key;W!==null;){if(W.key===Ge)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){a(Y,W.sibling),ye=u(W,Z.children||[]),ye.return=Y,Y=ye;break e}else{a(Y,W);break}else r(Y,W);W=W.sibling}ye=ku(Z,Y.mode,ye),ye.return=Y,Y=ye}return M(Y);case E:return Ge=Z._init,Z=Ge(Z._payload),Ot(Y,W,Z,ye)}if(re(Z))return nt(Y,W,Z,ye);if(J(Z)){if(Ge=J(Z),typeof Ge!="function")throw Error(i(150));return Z=Ge.call(Z),tt(Y,W,Z,ye)}if(typeof Z.then=="function")return Ot(Y,W,Ol(Z),ye);if(Z.$$typeof===D)return Ot(Y,W,wl(Y,Z),ye);Bl(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,W!==null&&W.tag===6?(a(Y,W.sibling),ye=u(W,Z),ye.return=Y,Y=ye):(a(Y,W),ye=Du(Z,Y.mode,ye),ye.return=Y,Y=ye),M(Y)):a(Y,W)}return function(Y,W,Z,ye){try{fs=0;var Ge=Ot(Y,W,Z,ye);return eo=null,Ge}catch(Ye){if(Ye===as||Ye===Al)throw Ye;var ft=Wr(29,Ye,null,Y.mode);return ft.lanes=ye,ft.return=Y,ft}finally{}}}var to=Xm(!0),qm=Xm(!1),nn=Q(null),ta=null;function Da(t){var r=t.alternate;be(hr,hr.current&1),be(nn,t),ta===null&&(r===null||Ji.current!==null||r.memoizedState!==null)&&(ta=t)}function Ym(t){if(t.tag===22){if(be(hr,hr.current),be(nn,t),ta===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(ta=t)}}else ka()}function ka(){be(hr,hr.current),be(nn,nn.current)}function ra(t){ge(nn),ta===t&&(ta=null),ge(hr)}var hr=Q(0);function zl(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ah(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function md(t,r,a,s){r=t.memoizedState,a=a(s,r),a=a==null?r:v({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gd={enqueueSetState:function(t,r,a){t=t._reactInternals;var s=Yr(),u=La(s);u.payload=r,a!=null&&(u.callback=a),r=Ia(t,u,s),r!==null&&($r(r,t,s),os(r,t,s))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var s=Yr(),u=La(s);u.tag=1,u.payload=r,a!=null&&(u.callback=a),r=Ia(t,u,s),r!==null&&($r(r,t,s),os(r,t,s))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Yr(),s=La(a);s.tag=2,r!=null&&(s.callback=r),r=Ia(t,s,a),r!==null&&($r(r,t,a),os(r,t,a))}};function $m(t,r,a,s,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,M):r.prototype&&r.prototype.isPureReactComponent?!Jo(a,s)||!Jo(u,h):!0}function Jm(t,r,a,s){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,s),r.state!==t&&gd.enqueueReplaceState(r,r.state,null)}function _i(t,r){var a=r;if("ref"in r){a={};for(var s in r)s!=="ref"&&(a[s]=r[s])}if(t=t.defaultProps){a===r&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qm(t){Hl(t)}function Zm(t){console.error(t)}function Km(t){Hl(t)}function Vl(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(s){setTimeout(function(){throw s})}}function eg(t,r,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vd(t,r,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,r)},a}function tg(t){return t=La(t),t.tag=3,t}function rg(t,r,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){eg(r,a,s)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){eg(r,a,s),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ob(t,r,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(r=a.alternate,r!==null&&ts(r,a,u,!0),a=nn.current,a!==null){switch(a.tag){case 13:return ta===null?Hd():a.alternate===null&&er===0&&(er=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Xu?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([s]):r.add(s),Gd(t,s,u)),!1;case 22:return a.flags|=65536,s===Xu?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([s]):a.add(s)),Gd(t,s,u)),!1}throw Error(i(435,a.tag))}return Gd(t,s,u),Hd(),!1}if(At)return r=nn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=u,s!==Bu&&(t=Error(i(422),{cause:s}),es(Kr(t,a)))):(s!==Bu&&(r=Error(i(423),{cause:s}),es(Kr(r,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Kr(s,a),u=vd(t.stateNode,s,u),$u(t,u),er!==4&&(er=2)),!1;var h=Error(i(520),{cause:s});if(h=Kr(h,a),xs===null?xs=[h]:xs.push(h),er!==4&&(er=2),r===null)return!0;s=Kr(s,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vd(a.stateNode,s,t),$u(a,t),!1;case 1:if(r=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Va===null||!Va.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tg(u),rg(u,t,a,s),$u(a,u),!1}a=a.return}while(a!==null);return!1}var ng=Error(i(461)),vr=!1;function xr(t,r,a,s){r.child=t===null?qm(r,null,a,s):to(r,t.child,a,s)}function ag(t,r,a,s,u){a=a.render;var h=r.ref;if("ref"in s){var M={};for(var T in s)T!=="ref"&&(M[T]=s[T])}else M=s;return mi(r),s=ed(t,r,a,M,h,u),T=td(),t!==null&&!vr?(rd(t,r,u),na(t,r,u)):(At&&T&&Fu(r),r.flags|=1,xr(t,r,s,u),r.child)}function ig(t,r,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Uu(h)&&h.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=h,og(t,r,h,s,u)):(t=xl(a.type,null,s,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!wd(t,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jo,a(M,s)&&t.ref===r.ref)return na(t,r,u)}return r.flags|=1,t=$n(h,s),t.ref=r.ref,t.return=r,r.child=t}function og(t,r,a,s,u){if(t!==null){var h=t.memoizedProps;if(Jo(h,s)&&t.ref===r.ref)if(vr=!1,r.pendingProps=s=h,wd(t,u))(t.flags&131072)!==0&&(vr=!0);else return r.lanes=t.lanes,na(t,r,u)}return _d(t,r,a,s,u)}function sg(t,r,a){var s=r.pendingProps,u=s.children,h=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((r.flags&128)!==0){if(s=h!==null?h.baseLanes|a:a,t!==null){for(u=r.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;r.childLanes=h&~s}else r.childLanes=0,r.child=null;return lg(t,r,s,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(r,h!==null?h.cachePool:null),h!==null?om(r,h):Qu(),Ym(r);else return r.lanes=r.childLanes=536870912,lg(t,r,h!==null?h.baseLanes|a:a,a)}else h!==null?(Tl(r,h.cachePool),om(r,h),ka(),r.memoizedState=null):(t!==null&&Tl(r,null),Qu(),ka());return xr(t,r,u,a),r.child}function lg(t,r,a,s){var u=ju();return u=u===null?null:{parent:dr._currentValue,pool:u},r.memoizedState={baseLanes:a,cachePool:u},t!==null&&Tl(r,null),Qu(),Ym(r),t!==null&&ts(t,r,s,!0),null}function Gl(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function _d(t,r,a,s,u){return mi(r),a=ed(t,r,a,s,void 0,u),s=td(),t!==null&&!vr?(rd(t,r,u),na(t,r,u)):(At&&s&&Fu(r),r.flags|=1,xr(t,r,a,u),r.child)}function cg(t,r,a,s,u,h){return mi(r),r.updateQueue=null,a=lm(r,s,a,u),sm(t),s=td(),t!==null&&!vr?(rd(t,r,h),na(t,r,h)):(At&&s&&Fu(r),r.flags|=1,xr(t,r,a,h),r.child)}function ug(t,r,a,s,u){if(mi(r),r.stateNode===null){var h=ji,M=a.contextType;typeof M=="object"&&M!==null&&(h=wr(M)),h=new a(s,h),r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=gd,r.stateNode=h,h._reactInternals=r,h=r.stateNode,h.props=s,h.state=r.memoizedState,h.refs={},qu(r),M=a.contextType,h.context=typeof M=="object"&&M!==null?wr(M):ji,h.state=r.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(md(r,a,M,s),h.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&gd.enqueueReplaceState(h,h.state,null),ls(r,s,h,u),ss(),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308),s=!0}else if(t===null){h=r.stateNode;var T=r.memoizedProps,B=_i(a,T);h.props=B;var ee=h.context,ve=a.contextType;M=ji,typeof ve=="object"&&ve!==null&&(M=wr(ve));var xe=a.getDerivedStateFromProps;ve=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||ee!==M)&&Jm(r,h,s,M),Na=!1;var ae=r.memoizedState;h.state=ae,ls(r,s,h,u),ss(),ee=r.memoizedState,T||ae!==ee||Na?(typeof xe=="function"&&(md(r,a,xe,s),ee=r.memoizedState),(B=Na||$m(r,a,B,s,ae,ee,M))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=ee),h.props=s,h.state=ee,h.context=M,s=B):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{h=r.stateNode,Yu(t,r),M=r.memoizedProps,ve=_i(a,M),h.props=ve,xe=r.pendingProps,ae=h.context,ee=a.contextType,B=ji,typeof ee=="object"&&ee!==null&&(B=wr(ee)),T=a.getDerivedStateFromProps,(ee=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==xe||ae!==B)&&Jm(r,h,s,B),Na=!1,ae=r.memoizedState,h.state=ae,ls(r,s,h,u),ss();var ie=r.memoizedState;M!==xe||ae!==ie||Na||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof T=="function"&&(md(r,a,T,s),ie=r.memoizedState),(ve=Na||$m(r,a,ve,s,ae,ie,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ie,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ie,B)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=ie),h.props=s,h.state=ie,h.context=B,s=ve):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(r.flags|=1024),s=!1)}return h=s,Gl(t,r),s=(r.flags&128)!==0,h||s?(h=r.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),r.flags|=1,t!==null&&s?(r.child=to(r,t.child,null,u),r.child=to(r,null,a,u)):xr(t,r,a,u),r.memoizedState=h.state,t=r.child):t=na(t,r,u),t}function dg(t,r,a,s){return Ko(),r.flags|=256,xr(t,r,a,s),r.child}var yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(t){return{baseLanes:t,cachePool:Zp()}}function xd(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=an),t}function hg(t,r,a){var s=r.pendingProps,u=!1,h=(r.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(hr.current&2)!==0),M&&(u=!0,r.flags&=-129),M=(r.flags&32)!==0,r.flags&=-33,t===null){if(At){if(u?Da(r):ka(),At){var T=Kt,B;if(B=T){e:{for(B=T,T=Cn;B.nodeType!==8;){if(!T){T=null;break e}if(B=_n(B.nextSibling),B===null){T=null;break e}}T=B}T!==null?(r.memoizedState={dehydrated:T,treeContext:ui!==null?{id:Jn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},B=Wr(18,null,null,0),B.stateNode=T,B.return=r,r.child=B,Pr=r,Kt=null,B=!0):B=!1}B||fi(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ah(T)?r.lanes=32:r.lanes=536870912,null;ra(r)}return T=s.children,s=s.fallback,u?(ka(),u=r.mode,T=Wl({mode:"hidden",children:T},u),s=ci(s,u,a,null),T.return=r,s.return=r,T.sibling=s,r.child=T,u=r.child,u.memoizedState=bd(a),u.childLanes=xd(t,M,a),r.memoizedState=yd,s):(Da(r),Sd(r,T))}if(B=t.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(h)r.flags&256?(Da(r),r.flags&=-257,r=Md(t,r,a)):r.memoizedState!==null?(ka(),r.child=t.child,r.flags|=128,r=null):(ka(),u=s.fallback,T=r.mode,s=Wl({mode:"visible",children:s.children},T),u=ci(u,T,a,null),u.flags|=2,s.return=r,u.return=r,s.sibling=u,r.child=s,to(r,t.child,null,a),s=r.child,s.memoizedState=bd(a),s.childLanes=xd(t,M,a),r.memoizedState=yd,r=u);else if(Da(r),ah(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var ee=M.dgst;M=ee,s=Error(i(419)),s.stack="",s.digest=M,es({value:s,source:null,stack:null}),r=Md(t,r,a)}else if(vr||ts(t,r,a,!1),M=(a&t.childLanes)!==0,vr||M){if(M=Vt,M!==null&&(s=a&-a,s=(s&42)!==0?1:Qe(s),s=(s&(M.suspendedLanes|a))!==0?0:s,s!==0&&s!==B.retryLane))throw B.retryLane=s,Wi(t,s),$r(M,t,s),ng;T.data==="$?"||Hd(),r=Md(t,r,a)}else T.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=B.treeContext,Kt=_n(T.nextSibling),Pr=r,At=!0,hi=null,Cn=!1,t!==null&&(tn[rn++]=Jn,tn[rn++]=Qn,tn[rn++]=ui,Jn=t.id,Qn=t.overflow,ui=r),r=Sd(r,s.children),r.flags|=4096);return r}return u?(ka(),u=s.fallback,T=r.mode,B=t.child,ee=B.sibling,s=$n(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,ee!==null?u=$n(ee,u):(u=ci(u,T,a,null),u.flags|=2),u.return=r,s.return=r,s.sibling=u,r.child=s,s=u,u=r.child,T=t.child.memoizedState,T===null?T=bd(a):(B=T.cachePool,B!==null?(ee=dr._currentValue,B=B.parent!==ee?{parent:ee,pool:ee}:B):B=Zp(),T={baseLanes:T.baseLanes|a,cachePool:B}),u.memoizedState=T,u.childLanes=xd(t,M,a),r.memoizedState=yd,s):(Da(r),a=t.child,t=a.sibling,a=$n(a,{mode:"visible",children:s.children}),a.return=r,a.sibling=null,t!==null&&(M=r.deletions,M===null?(r.deletions=[t],r.flags|=16):M.push(t)),r.child=a,r.memoizedState=null,a)}function Sd(t,r){return r=Wl({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Wl(t,r){return t=Wr(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Md(t,r,a){return to(r,t.child,null,a),t=Sd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function fg(t,r,a){t.lanes|=r;var s=t.alternate;s!==null&&(s.lanes|=r),Hu(t.return,r,a)}function Ed(t,r,a,s,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=u)}function pg(t,r,a){var s=r.pendingProps,u=s.revealOrder,h=s.tail;if(xr(t,r,s.children,a),s=hr.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,a,r);else if(t.tag===19)fg(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(be(hr,s),u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Ed(r,!1,u,a,h);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ed(r,!0,a,null,h);break;case"together":Ed(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function na(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Ha|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(ts(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=$n(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=$n(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function wd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function sb(t,r,a){switch(r.tag){case 3:Se(r,r.stateNode.containerInfo),Pa(r,dr,t.memoizedState.cache),Ko();break;case 27:case 5:Ze(r);break;case 4:Se(r,r.stateNode.containerInfo);break;case 10:Pa(r,r.type,r.memoizedProps.value);break;case 13:var s=r.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(r),r.flags|=128,null):(a&r.child.childLanes)!==0?hg(t,r,a):(Da(r),t=na(t,r,a),t!==null?t.sibling:null);Da(r);break;case 19:var u=(t.flags&128)!==0;if(s=(a&r.childLanes)!==0,s||(ts(t,r,a,!1),s=(a&r.childLanes)!==0),u){if(s)return pg(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(hr,hr.current),s)break;return null;case 22:case 23:return r.lanes=0,sg(t,r,a);case 24:Pa(r,dr,t.memoizedState.cache)}return na(t,r,a)}function mg(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)vr=!0;else{if(!wd(t,a)&&(r.flags&128)===0)return vr=!1,sb(t,r,a);vr=(t.flags&131072)!==0}else vr=!1,At&&(r.flags&1048576)!==0&&jp(r,Ml,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var s=r.elementType,u=s._init;if(s=u(s._payload),r.type=s,typeof s=="function")Uu(s)?(t=_i(s,t),r.tag=1,r=ug(null,r,s,t,a)):(r.tag=0,r=_d(null,r,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===N){r.tag=11,r=ag(null,r,s,t,a);break e}else if(u===O){r.tag=14,r=ig(null,r,s,t,a);break e}}throw r=le(s)||s,Error(i(306,r,""))}}return r;case 0:return _d(t,r,r.type,r.pendingProps,a);case 1:return s=r.type,u=_i(s,r.pendingProps),ug(t,r,s,u,a);case 3:e:{if(Se(r,r.stateNode.containerInfo),t===null)throw Error(i(387));s=r.pendingProps;var h=r.memoizedState;u=h.element,Yu(t,r),ls(r,s,null,a);var M=r.memoizedState;if(s=M.cache,Pa(r,dr,s),s!==h.cache&&Vu(r,[dr],a,!0),ss(),s=M.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:M.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=dg(t,r,s,a);break e}else if(s!==u){u=Kr(Error(i(424)),r),es(u),r=dg(t,r,s,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=_n(t.firstChild),Pr=r,At=!0,hi=null,Cn=!0,a=qm(r,null,s,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ko(),s===u){r=na(t,r,a);break e}xr(t,r,s,a)}r=r.child}return r;case 26:return Gl(t,r),t===null?(a=yv(r.type,null,r.pendingProps,null))?r.memoizedState=a:At||(a=r.type,t=r.pendingProps,s=ac(K.current).createElement(a),s[ur]=r,s[gr]=t,Mr(s,a,t),nr(s),r.stateNode=s):r.memoizedState=yv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Ze(r),t===null&&At&&(s=r.stateNode=gv(r.type,r.pendingProps,K.current),Pr=r,Cn=!0,u=Kt,ja(r.type)?(ih=u,Kt=_n(s.firstChild)):Kt=u),xr(t,r,r.pendingProps.children,a),Gl(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&At&&((u=s=Kt)&&(s=Db(s,r.type,r.pendingProps,Cn),s!==null?(r.stateNode=s,Pr=r,Kt=_n(s.firstChild),Cn=!1,u=!0):u=!1),u||fi(r)),Ze(r),u=r.type,h=r.pendingProps,M=t!==null?t.memoizedProps:null,s=h.children,th(u,h)?s=null:M!==null&&th(u,M)&&(r.flags|=32),r.memoizedState!==null&&(u=ed(t,r,Ky,null,null,a),Ps._currentValue=u),Gl(t,r),xr(t,r,s,a),r.child;case 6:return t===null&&At&&((t=a=Kt)&&(a=kb(a,r.pendingProps,Cn),a!==null?(r.stateNode=a,Pr=r,Kt=null,t=!0):t=!1),t||fi(r)),null;case 13:return hg(t,r,a);case 4:return Se(r,r.stateNode.containerInfo),s=r.pendingProps,t===null?r.child=to(r,null,s,a):xr(t,r,s,a),r.child;case 11:return ag(t,r,r.type,r.pendingProps,a);case 7:return xr(t,r,r.pendingProps,a),r.child;case 8:return xr(t,r,r.pendingProps.children,a),r.child;case 12:return xr(t,r,r.pendingProps.children,a),r.child;case 10:return s=r.pendingProps,Pa(r,r.type,s.value),xr(t,r,s.children,a),r.child;case 9:return u=r.type._context,s=r.pendingProps.children,mi(r),u=wr(u),s=s(u),r.flags|=1,xr(t,r,s,a),r.child;case 14:return ig(t,r,r.type,r.pendingProps,a);case 15:return og(t,r,r.type,r.pendingProps,a);case 19:return pg(t,r,a);case 31:return s=r.pendingProps,a=r.mode,s={mode:s.mode,children:s.children},t===null?(a=Wl(s,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=$n(t.child,s),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return sg(t,r,a);case 24:return mi(r),s=wr(dr),t===null?(u=ju(),u===null&&(u=Vt,h=Gu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),r.memoizedState={parent:s,cache:u},qu(r),Pa(r,dr,u)):((t.lanes&a)!==0&&(Yu(t,r),ls(r,null,null,a),ss()),u=t.memoizedState,h=r.memoizedState,u.parent!==s?(u={parent:s,cache:s},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),Pa(r,dr,s)):(s=h.cache,Pa(r,dr,s),s!==u.cache&&Vu(r,[dr],a,!0))),xr(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function aa(t){t.flags|=4}function gg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(r)){if(r=nn.current,r!==null&&((_t&4194048)===_t?ta!==null:(_t&62914560)!==_t&&(_t&536870912)===0||r!==ta))throw is=Xu,Kp;t.flags|=8192}}function jl(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Pe():536870912,t.lanes|=r,io|=r)}function ms(t,r){if(!At)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,r}function lb(t,r,a){var s=r.pendingProps;switch(Ou(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return Jt(r),null;case 3:return a=r.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Kn(dr),et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zo(r)?aa(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Yp())),Jt(r),null;case 26:return a=r.memoizedState,t===null?(aa(r),a!==null?(Jt(r),gg(r,a)):(Jt(r),r.flags&=-16777217)):a?a!==t.memoizedState?(aa(r),Jt(r),gg(r,a)):(Jt(r),r.flags&=-16777217):(t.memoizedProps!==s&&aa(r),Jt(r),r.flags&=-16777217),null;case 27:Be(r),a=K.current;var u=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==s&&aa(r);else{if(!s){if(r.stateNode===null)throw Error(i(166));return Jt(r),null}t=Ne.current,Zo(r)?Xp(r):(t=gv(u,s,a),r.stateNode=t,aa(r))}return Jt(r),null;case 5:if(Be(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==s&&aa(r);else{if(!s){if(r.stateNode===null)throw Error(i(166));return Jt(r),null}if(t=Ne.current,Zo(r))Xp(r);else{switch(u=ac(K.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[ur]=r,t[gr]=s;e:for(u=r.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break e;for(;u.sibling===null;){if(u.return===null||u.return===r)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r.stateNode=t;e:switch(Mr(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(r)}}return Jt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==s&&aa(r);else{if(typeof s!="string"&&r.stateNode===null)throw Error(i(166));if(t=K.current,Zo(r)){if(t=r.stateNode,a=r.memoizedProps,s=null,u=Pr,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[ur]=r,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||cv(t.nodeValue,a)),t||fi(r)}else t=ac(t).createTextNode(s),t[ur]=r,r.stateNode=t}return Jt(r),null;case 13:if(s=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zo(r),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(i(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[ur]=r}else Ko(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),u=!1}else u=Yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return r.flags&256?(ra(r),r):(ra(r),null)}if(ra(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=r.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),jl(r,r.updateQueue),Jt(r),null;case 4:return et(),t===null&&Jd(r.stateNode.containerInfo),Jt(r),null;case 10:return Kn(r.type),Jt(r),null;case 19:if(ge(hr),u=r.memoizedState,u===null)return Jt(r),null;if(s=(r.flags&128)!==0,h=u.rendering,h===null)if(s)ms(u,!1);else{if(er!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(h=zl(t),h!==null){for(r.flags|=128,ms(u,!1),t=h.updateQueue,r.updateQueue=t,jl(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)Wp(a,t),a=a.sibling;return be(hr,hr.current&1|2),r.child}t=t.sibling}u.tail!==null&&Ut()>Yl&&(r.flags|=128,s=!0,ms(u,!1),r.lanes=4194304)}else{if(!s)if(t=zl(h),t!==null){if(r.flags|=128,s=!0,t=t.updateQueue,r.updateQueue=t,jl(r,t),ms(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!At)return Jt(r),null}else 2*Ut()-u.renderingStartTime>Yl&&a!==536870912&&(r.flags|=128,s=!0,ms(u,!1),r.lanes=4194304);u.isBackwards?(h.sibling=r.child,r.child=h):(t=u.last,t!==null?t.sibling=h:r.child=h,u.last=h)}return u.tail!==null?(r=u.tail,u.rendering=r,u.tail=r.sibling,u.renderingStartTime=Ut(),r.sibling=null,t=hr.current,be(hr,s?t&1|2:t&1),r):(Jt(r),null);case 22:case 23:return ra(r),Zu(),s=r.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(r.flags|=8192):s&&(r.flags|=8192),s?(a&536870912)!==0&&(r.flags&128)===0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),a=r.updateQueue,a!==null&&jl(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==a&&(r.flags|=2048),t!==null&&ge(gi),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Kn(dr),Jt(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function cb(t,r){switch(Ou(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Kn(dr),et(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Be(r),null;case 13:if(ra(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Ko()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ge(hr),null;case 4:return et(),null;case 10:return Kn(r.type),null;case 22:case 23:return ra(r),Zu(),t!==null&&ge(gi),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Kn(dr),null;case 25:return null;default:return null}}function vg(t,r){switch(Ou(r),r.tag){case 3:Kn(dr),et();break;case 26:case 27:case 5:Be(r);break;case 4:et();break;case 13:ra(r);break;case 19:ge(hr);break;case 10:Kn(r.type);break;case 22:case 23:ra(r),Zu(),t!==null&&ge(gi);break;case 24:Kn(dr)}}function gs(t,r){try{var a=r.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,M=a.inst;s=h(),M.destroy=s}a=a.next}while(a!==u)}}catch(T){Ht(r,r.return,T)}}function Fa(t,r,a){try{var s=r.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var M=s.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=r;var B=a,ee=T;try{ee()}catch(ve){Ht(u,B,ve)}}}s=s.next}while(s!==h)}}catch(ve){Ht(r,r.return,ve)}}function _g(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{im(r,a)}catch(s){Ht(t,t.return,s)}}}function yg(t,r,a){a.props=_i(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ht(t,r,s)}}function vs(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ht(t,r,u)}}function Rn(t,r){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ht(t,r,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,r,u)}else a.current=null}function bg(t){var r=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Td(t,r,a){try{var s=t.stateNode;Pb(s,t.type,a,r),s[gr]=r}catch(u){Ht(t,t.return,u)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,r,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=nc));else if(s!==4&&(s===27&&ja(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for(Cd(t,r,a),t=t.sibling;t!==null;)Cd(t,r,a),t=t.sibling}function Xl(t,r,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(s!==4&&(s===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,r,a),t=t.sibling;t!==null;)Xl(t,r,a),t=t.sibling}function Sg(t){var r=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=r.attributes;u.length;)r.removeAttributeNode(u[0]);Mr(r,s,a),r[ur]=t,r[gr]=a}catch(h){Ht(t,t.return,h)}}var ia=!1,ir=!1,Rd=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,_r=null;function ub(t,r){if(t=t.containerInfo,Kd=uc,t=Up(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,T=-1,B=-1,ee=0,ve=0,xe=t,ae=null;t:for(;;){for(var ie;xe!==a||u!==0&&xe.nodeType!==3||(T=M+u),xe!==h||s!==0&&xe.nodeType!==3||(B=M+s),xe.nodeType===3&&(M+=xe.nodeValue.length),(ie=xe.firstChild)!==null;)ae=xe,xe=ie;for(;;){if(xe===t)break t;if(ae===a&&++ee===u&&(T=M),ae===h&&++ve===s&&(B=M),(ie=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=ie}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(eh={focusedElem:t,selectionRange:a},uc=!1,_r=r;_r!==null;)if(r=_r,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,_r=t;else for(;_r!==null;){switch(r=_r,h=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=r,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var nt=_i(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(nt,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)nh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=r.sibling,t!==null){t.return=r.return,_r=t;break}_r=r.return}}function Eg(t,r,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(t,a),s&4&&gs(5,a);break;case 1:if(Oa(t,a),s&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(M){Ht(a,a.return,M)}else{var u=_i(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(u,r,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(a,a.return,M)}}s&64&&_g(a),s&512&&vs(a,a.return);break;case 3:if(Oa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{im(t,r)}catch(M){Ht(a,a.return,M)}}break;case 27:r===null&&s&4&&Sg(a);case 26:case 5:Oa(t,a),r===null&&s&4&&bg(a),s&512&&vs(a,a.return);break;case 12:Oa(t,a);break;case 13:Oa(t,a),s&4&&Ag(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=yb.bind(null,a),Fb(t,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){r=r!==null&&r.memoizedState!==null||ir,u=ia;var h=ir;ia=s,(ir=r)&&!h?Ba(t,a,(a.subtreeFlags&8772)!==0):Oa(t,a),ia=u,ir=h}break;case 30:break;default:Oa(t,a)}}function wg(t){var r=t.alternate;r!==null&&(t.alternate=null,wg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Fi(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Br=!1;function oa(t,r,a){for(a=a.child;a!==null;)Tg(t,r,a),a=a.sibling}function Tg(t,r,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:ir||Rn(a,r),oa(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ir||Rn(a,r);var s=jt,u=Br;ja(a.type)&&(jt=a.stateNode,Br=!1),oa(t,r,a),Ts(a.stateNode),jt=s,Br=u;break;case 5:ir||Rn(a,r);case 6:if(s=jt,u=Br,jt=null,oa(t,r,a),jt=s,Br=u,jt!==null)if(Br)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(h){Ht(a,r,h)}else try{jt.removeChild(a.stateNode)}catch(h){Ht(a,r,h)}break;case 18:jt!==null&&(Br?(t=jt,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Us(t)):pv(jt,a.stateNode));break;case 4:s=jt,u=Br,jt=a.stateNode.containerInfo,Br=!0,oa(t,r,a),jt=s,Br=u;break;case 0:case 11:case 14:case 15:ir||Fa(2,a,r),ir||Fa(4,a,r),oa(t,r,a);break;case 1:ir||(Rn(a,r),s=a.stateNode,typeof s.componentWillUnmount=="function"&&yg(a,r,s)),oa(t,r,a);break;case 21:oa(t,r,a);break;case 22:ir=(s=ir)||a.memoizedState!==null,oa(t,r,a),ir=s;break;default:oa(t,r,a)}}function Ag(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Us(t)}catch(a){Ht(r,r.return,a)}}function db(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Mg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Mg),r;default:throw Error(i(435,t.tag))}}function Pd(t,r){var a=db(t);r.forEach(function(s){var u=bb.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function jr(t,r){var a=r.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,M=r,T=M;e:for(;T!==null;){switch(T.tag){case 27:if(ja(T.type)){jt=T.stateNode,Br=!1;break e}break;case 5:jt=T.stateNode,Br=!1;break e;case 3:case 4:jt=T.stateNode.containerInfo,Br=!0;break e}T=T.return}if(jt===null)throw Error(i(160));Tg(h,M,u),jt=null,Br=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Cg(r,t),r=r.sibling}var vn=null;function Cg(t,r){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jr(r,t),Xr(t),s&4&&(Fa(3,t,t.return),gs(3,t),Fa(5,t,t.return));break;case 1:jr(r,t),Xr(t),s&512&&(ir||a===null||Rn(a,a.return)),s&64&&ia&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=vn;if(jr(r,t),Xr(t),s&512&&(ir||a===null||Rn(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ta]||h[ur]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),Mr(h,s,a),h[ur]=t,nr(h),s=h;break e;case"link":var M=Sv("link","href",u).get(s+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break t}}h=u.createElement(s),Mr(h,s,a),u.head.appendChild(h);break;case"meta":if(M=Sv("meta","content",u).get(s+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break t}}h=u.createElement(s),Mr(h,s,a),u.head.appendChild(h);break;default:throw Error(i(468,s))}h[ur]=t,nr(h),s=h}t.stateNode=s}else Mv(u,t.type,t.stateNode);else t.stateNode=xv(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?Mv(u,t.type,t.stateNode):xv(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Td(t,t.memoizedProps,a.memoizedProps)}break;case 27:jr(r,t),Xr(t),s&512&&(ir||a===null||Rn(a,a.return)),a!==null&&s&4&&Td(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jr(r,t),Xr(t),s&512&&(ir||a===null||Rn(a,a.return)),t.flags&32){u=t.stateNode;try{Wt(u,"")}catch(ie){Ht(t,t.return,ie)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Td(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Rd=!0);break;case 6:if(jr(r,t),Xr(t),s&4){if(t.stateNode===null)throw Error(i(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ie){Ht(t,t.return,ie)}}break;case 3:if(sc=null,u=vn,vn=ic(r.containerInfo),jr(r,t),vn=u,Xr(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Us(r.containerInfo)}catch(ie){Ht(t,t.return,ie)}Rd&&(Rd=!1,Rg(t));break;case 4:s=vn,vn=ic(t.stateNode.containerInfo),jr(r,t),Xr(t),vn=s;break;case 12:jr(r,t),Xr(t);break;case 13:jr(r,t),Xr(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kd=Ut()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pd(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=ia,ve=ir;if(ia=ee||u,ir=ve||B,jr(r,t),ir=ve,ia=ee,Xr(t),s&8192)e:for(r=t.stateNode,r._visibility=u?r._visibility&-2:r._visibility|1,u&&(a===null||B||ia||ir||yi(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){B=a=r;try{if(h=B.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=B.stateNode;var xe=B.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ie){Ht(B,B.return,ie)}}}else if(r.tag===6){if(a===null){B=r;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ie){Ht(B,B.return,ie)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pd(t,a))));break;case 19:jr(r,t),Xr(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pd(t,s)));break;case 30:break;case 21:break;default:jr(r,t),Xr(t)}}function Xr(t){var r=t.flags;if(r&2){try{for(var a,s=t.return;s!==null;){if(xg(s)){a=s;break}s=s.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var u=a.stateNode,h=Ad(t);Xl(t,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Wt(M,""),a.flags&=-33);var T=Ad(t);Xl(t,T,M);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=Ad(t);Cd(t,ee,B);break;default:throw Error(i(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Rg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Oa(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Eg(t,r.alternate,r),r=r.sibling}function yi(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Fa(4,r,r.return),yi(r);break;case 1:Rn(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&yg(r,r.return,a),yi(r);break;case 27:Ts(r.stateNode);case 26:case 5:Rn(r,r.return),yi(r);break;case 22:r.memoizedState===null&&yi(r);break;case 30:yi(r);break;default:yi(r)}t=t.sibling}}function Ba(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var s=r.alternate,u=t,h=r,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ba(u,h,a),gs(4,h);break;case 1:if(Ba(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ht(s,s.return,ee)}if(s=h,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)am(B[u],T)}catch(ee){Ht(s,s.return,ee)}}a&&M&64&&_g(h),vs(h,h.return);break;case 27:Sg(h);case 26:case 5:Ba(u,h,a),a&&s===null&&M&4&&bg(h),vs(h,h.return);break;case 12:Ba(u,h,a);break;case 13:Ba(u,h,a),a&&M&4&&Ag(u,h);break;case 22:h.memoizedState===null&&Ba(u,h,a),vs(h,h.return);break;case 30:break;default:Ba(u,h,a)}r=r.sibling}}function Nd(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rs(a))}function Ld(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&rs(t))}function Pn(t,r,a,s){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pg(t,r,a,s),r=r.sibling}function Pg(t,r,a,s){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Pn(t,r,a,s),u&2048&&gs(9,r);break;case 1:Pn(t,r,a,s);break;case 3:Pn(t,r,a,s),u&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&rs(t)));break;case 12:if(u&2048){Pn(t,r,a,s),t=r.stateNode;try{var h=r.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(r,r.return,B)}}else Pn(t,r,a,s);break;case 13:Pn(t,r,a,s);break;case 23:break;case 22:h=r.stateNode,M=r.alternate,r.memoizedState!==null?h._visibility&2?Pn(t,r,a,s):_s(t,r):h._visibility&2?Pn(t,r,a,s):(h._visibility|=2,ro(t,r,a,s,(r.subtreeFlags&10256)!==0)),u&2048&&Nd(M,r);break;case 24:Pn(t,r,a,s),u&2048&&Ld(r.alternate,r);break;default:Pn(t,r,a,s)}}function ro(t,r,a,s,u){for(u=u&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var h=t,M=r,T=a,B=s,ee=M.flags;switch(M.tag){case 0:case 11:case 15:ro(h,M,T,B,u),gs(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?ro(h,M,T,B,u):_s(h,M):(ve._visibility|=2,ro(h,M,T,B,u)),u&&ee&2048&&Nd(M.alternate,M);break;case 24:ro(h,M,T,B,u),u&&ee&2048&&Ld(M.alternate,M);break;default:ro(h,M,T,B,u)}r=r.sibling}}function _s(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,s=r,u=s.flags;switch(s.tag){case 22:_s(a,s),u&2048&&Nd(s.alternate,s);break;case 24:_s(a,s),u&2048&&Ld(s.alternate,s);break;default:_s(a,s)}r=r.sibling}}var ys=8192;function no(t){if(t.subtreeFlags&ys)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 26:no(t),t.flags&ys&&t.memoizedState!==null&&Jb(vn,t.memoizedState,t.memoizedProps);break;case 5:no(t);break;case 3:case 4:var r=vn;vn=ic(t.stateNode.containerInfo),no(t),vn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ys,ys=16777216,no(t),ys=r):no(t));break;default:no(t)}}function Lg(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function bs(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];_r=s,Ug(s,t)}Lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:bs(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:bs(t);break;case 12:bs(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,ql(t)):bs(t);break;default:bs(t)}}function ql(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];_r=s,Ug(s,t)}Lg(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Fa(8,r,r.return),ql(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,ql(r));break;default:ql(r)}t=t.sibling}}function Ug(t,r){for(;_r!==null;){var a=_r;switch(a.tag){case 0:case 11:case 15:Fa(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_r=s;else e:for(a=t;_r!==null;){s=_r;var u=s.sibling,h=s.return;if(wg(s),s===a){_r=null;break e}if(u!==null){u.return=h,_r=u;break e}_r=h}}}var hb={getCacheForType:function(t){var r=wr(dr),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},fb=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Vt=null,pt=null,_t=0,Lt=0,qr=null,za=!1,ao=!1,Id=!1,sa=0,er=0,Ha=0,bi=0,Ud=0,an=0,io=0,xs=null,zr=null,Dd=!1,kd=0,Yl=1/0,$l=null,Va=null,Sr=0,Ga=null,oo=null,so=0,Fd=0,Od=null,Dg=null,Ss=0,Bd=null;function Yr(){if((Nt&2)!==0&&_t!==0)return _t&-_t;if(U.T!==null){var t=Yi;return t!==0?t:Xd()}return xt()}function kg(){an===0&&(an=(_t&536870912)===0||At?j():536870912);var t=nn.current;return t!==null&&(t.flags|=32),an}function $r(t,r,a){(t===Vt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Wa(t,_t,an,!1)),Fe(t,a),((Nt&2)===0||t!==Vt)&&(t===Vt&&((Nt&2)===0&&(bi|=a),er===4&&Wa(t,_t,an,!1)),Nn(t))}function Fg(t,r,a){if((Nt&6)!==0)throw Error(i(327));var s=!a&&(r&124)===0&&(r&t.expiredLanes)===0||Ue(t,r),u=s?gb(t,r):Vd(t,r,!0),h=s;do{if(u===0){ao&&!s&&Wa(t,r,0,!1);break}else{if(a=t.current.alternate,h&&!pb(a)){u=Vd(t,r,!1),h=!1;continue}if(u===2){if(h=r,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){r=M;e:{var T=t;u=xs;var B=T.current.memoizedState.isDehydrated;if(B&&(lo(T,M).flags|=256),M=Vd(T,M,!1),M!==2){if(Id&&!B){T.errorRecoveryDisabledLanes|=h,bi|=h,u=4;break e}h=zr,zr=u,h!==null&&(zr===null?zr=h:zr.push.apply(zr,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){lo(t,0),Wa(t,r,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Wa(s,r,an,!za);break e;case 2:zr=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(u=kd+300-Ut(),10<u)){if(Wa(s,r,an,!za),ze(s,0,!0)!==0)break e;s.timeoutHandle=hv(Og.bind(null,s,a,zr,$l,Dd,r,an,bi,io,za,h,2,-0,0),u);break e}Og(s,a,zr,$l,Dd,r,an,bi,io,za,h,0,-0,0)}}break}while(!0);Nn(t)}function Og(t,r,a,s,u,h,M,T,B,ee,ve,xe,ae,ie){if(t.timeoutHandle=-1,xe=r.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Rs={stylesheets:null,count:0,unsuspend:$b},Ng(r),xe=Qb(),xe!==null)){t.cancelPendingCommit=xe(jg.bind(null,t,r,h,a,s,u,M,T,B,ve,1,ae,ie)),Wa(t,h,M,!ee);return}jg(t,r,h,a,s,u,M,T,B)}function pb(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!Gr(h(),u))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wa(t,r,a,s){r&=~Ud,r&=~bi,t.suspendedLanes|=r,t.pingedLanes&=~r,s&&(t.warmLanes|=r),s=t.expirationTimes;for(var u=r;0<u;){var h=31-De(u),M=1<<h;s[h]=-1,u&=~M}a!==0&&he(t,a,r)}function Jl(){return(Nt&6)===0?(Ms(0),!1):!0}function zd(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,Zn=pi=null,nd(t),eo=null,fs=0,t=pt;for(;t!==null;)vg(t.alternate,t),t=t.return;pt=null}}function lo(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Lb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),zd(),Vt=t,pt=a=$n(t.current,null),_t=r,Lt=0,qr=null,za=!1,ao=Ue(t,r),Id=!1,io=an=Ud=bi=Ha=er=0,zr=xs=null,Dd=!1,(r&8)!==0&&(r|=r&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=r;0<s;){var u=31-De(s),h=1<<u;r|=t[u],s&=~h}return sa=r,_l(),a}function Bg(t,r){ht=null,U.H=Fl,r===as||r===Al?(r=rm(),Lt=3):r===Kp?(r=rm(),Lt=4):Lt=r===ng?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,qr=r,pt===null&&(er=1,Vl(t,Kr(r,t.current)))}function zg(){var t=U.H;return U.H=Fl,t===null?Fl:t}function Hg(){var t=U.A;return U.A=hb,t}function Hd(){er=4,za||(_t&4194048)!==_t&&nn.current!==null||(ao=!0),(Ha&134217727)===0&&(bi&134217727)===0||Vt===null||Wa(Vt,_t,an,!1)}function Vd(t,r,a){var s=Nt;Nt|=2;var u=zg(),h=Hg();(Vt!==t||_t!==r)&&($l=null,lo(t,r)),r=!1;var M=er;e:do try{if(Lt!==0&&pt!==null){var T=pt,B=qr;switch(Lt){case 8:zd(),M=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(r=!0);var ee=Lt;if(Lt=0,qr=null,co(t,T,B,ee),a&&ao){M=0;break e}break;default:ee=Lt,Lt=0,qr=null,co(t,T,B,ee)}}mb(),M=er;break}catch(ve){Bg(t,ve)}while(!0);return r&&t.shellSuspendCounter++,Zn=pi=null,Nt=s,U.H=u,U.A=h,pt===null&&(Vt=null,_t=0,_l()),M}function mb(){for(;pt!==null;)Vg(pt)}function gb(t,r){var a=Nt;Nt|=2;var s=zg(),u=Hg();Vt!==t||_t!==r?($l=null,Yl=Ut()+500,lo(t,r)):ao=Ue(t,r);e:do try{if(Lt!==0&&pt!==null){r=pt;var h=qr;t:switch(Lt){case 1:Lt=0,qr=null,co(t,r,h,1);break;case 2:case 9:if(em(h)){Lt=0,qr=null,Gg(r);break}r=function(){Lt!==2&&Lt!==9||Vt!==t||(Lt=7),Nn(t)},h.then(r,r);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:em(h)?(Lt=0,qr=null,Gg(r)):(Lt=0,qr=null,co(t,r,h,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var T=pt;if(!M||Ev(M)){Lt=0,qr=null;var B=T.sibling;if(B!==null)pt=B;else{var ee=T.return;ee!==null?(pt=ee,Ql(ee)):pt=null}break t}}Lt=0,qr=null,co(t,r,h,5);break;case 6:Lt=0,qr=null,co(t,r,h,6);break;case 8:zd(),er=6;break e;default:throw Error(i(462))}}vb();break}catch(ve){Bg(t,ve)}while(!0);return Zn=pi=null,U.H=s,U.A=u,Nt=a,pt!==null?0:(Vt=null,_t=0,_l(),er)}function vb(){for(;pt!==null&&!rr();)Vg(pt)}function Vg(t){var r=mg(t.alternate,t,sa);t.memoizedProps=t.pendingProps,r===null?Ql(t):pt=r}function Gg(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=cg(a,r,r.pendingProps,r.type,void 0,_t);break;case 11:r=cg(a,r,r.pendingProps,r.type.render,r.ref,_t);break;case 5:nd(r);default:vg(a,r),r=pt=Wp(r,sa),r=mg(a,r,sa)}t.memoizedProps=t.pendingProps,r===null?Ql(t):pt=r}function co(t,r,a,s){Zn=pi=null,nd(r),eo=null,fs=0;var u=r.return;try{if(ob(t,u,r,a,_t)){er=1,Vl(t,Kr(a,t.current)),pt=null;return}}catch(h){if(u!==null)throw pt=u,h;er=1,Vl(t,Kr(a,t.current)),pt=null;return}r.flags&32768?(At||s===1?t=!0:ao||(_t&536870912)!==0?t=!1:(za=t=!0,(s===2||s===9||s===3||s===6)&&(s=nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Wg(r,t)):Ql(r)}function Ql(t){var r=t;do{if((r.flags&32768)!==0){Wg(r,za);return}t=r.return;var a=lb(r.alternate,r,sa);if(a!==null){pt=a;return}if(r=r.sibling,r!==null){pt=r;return}pt=r=t}while(r!==null);er===0&&(er=5)}function Wg(t,r){do{var a=cb(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);er=6,pt=null}function jg(t,r,a,s,u,h,M,T,B){t.cancelPendingCommit=null;do Zl();while(Sr!==0);if((Nt&6)!==0)throw Error(i(327));if(r!==null){if(r===t.current)throw Error(i(177));if(h=r.lanes|r.childLanes,h|=Lu,we(t,a,h,M,T,B),t===Vt&&(pt=Vt=null,_t=0),oo=r,Ga=t,so=a,Fd=h,Od=u,Dg=s,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(Tt,function(){return Jg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,u=H.p,H.p=2,M=Nt,Nt|=4;try{ub(t,r,a)}finally{Nt=M,H.p=u,U.T=s}}Sr=1,Xg(),qg(),Yg()}}function Xg(){if(Sr===1){Sr=0;var t=Ga,r=oo,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=H.p;H.p=2;var u=Nt;Nt|=4;try{Cg(r,t);var h=eh,M=Up(t.containerInfo),T=h.focusedElem,B=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&Ip(T.ownerDocument.documentElement,T)){if(B!==null&&Au(T)){var ee=B.start,ve=B.end;if(ve===void 0&&(ve=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(ve,T.value.length);else{var xe=T.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var ie=ae.getSelection(),nt=T.textContent.length,tt=Math.min(B.start,nt),Ot=B.end===void 0?tt:Math.min(B.end,nt);!ie.extend&&tt>Ot&&(M=Ot,Ot=tt,tt=M);var Y=Lp(T,tt),W=Lp(T,Ot);if(Y&&W&&(ie.rangeCount!==1||ie.anchorNode!==Y.node||ie.anchorOffset!==Y.offset||ie.focusNode!==W.node||ie.focusOffset!==W.offset)){var Z=xe.createRange();Z.setStart(Y.node,Y.offset),ie.removeAllRanges(),tt>Ot?(ie.addRange(Z),ie.extend(W.node,W.offset)):(Z.setEnd(W.node,W.offset),ie.addRange(Z))}}}}for(xe=[],ie=T;ie=ie.parentNode;)ie.nodeType===1&&xe.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var ye=xe[T];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}uc=!!Kd,eh=Kd=null}finally{Nt=u,H.p=s,U.T=a}}t.current=r,Sr=2}}function qg(){if(Sr===2){Sr=0;var t=Ga,r=oo,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=H.p;H.p=2;var u=Nt;Nt|=4;try{Eg(t,r.alternate,r)}finally{Nt=u,H.p=s,U.T=a}}Sr=3}}function Yg(){if(Sr===4||Sr===3){Sr=0,Zt();var t=Ga,r=oo,a=so,s=Dg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Sr=5:(Sr=0,oo=Ga=null,$g(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),qt(a),r=r.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(me,r,void 0,(r.current.flags&128)===128)}catch{}if(s!==null){r=U.T,u=H.p,H.p=2,U.T=null;try{for(var h=t.onRecoverableError,M=0;M<s.length;M++){var T=s[M];h(T.value,{componentStack:T.stack})}}finally{U.T=r,H.p=u}}(so&3)!==0&&Zl(),Nn(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Bd?Ss++:(Ss=0,Bd=t):Ss=0,Ms(0)}}function $g(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,rs(r)))}function Zl(t){return Xg(),qg(),Yg(),Jg()}function Jg(){if(Sr!==5)return!1;var t=Ga,r=Fd;Fd=0;var a=qt(so),s=U.T,u=H.p;try{H.p=32>a?32:a,U.T=null,a=Od,Od=null;var h=Ga,M=so;if(Sr=0,oo=Ga=null,so=0,(Nt&6)!==0)throw Error(i(331));var T=Nt;if(Nt|=4,Ig(h.current),Pg(h,h.current,M,a),Nt=T,Ms(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(me,h)}catch{}return!0}finally{H.p=u,U.T=s,$g(t,r)}}function Qg(t,r,a){r=Kr(a,r),r=vd(t.stateNode,r,2),t=Ia(t,r,2),t!==null&&(Fe(t,2),Nn(t))}function Ht(t,r,a){if(t.tag===3)Qg(t,t,a);else for(;r!==null;){if(r.tag===3){Qg(r,t,a);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Va===null||!Va.has(s))){t=Kr(a,t),a=tg(2),s=Ia(r,a,2),s!==null&&(rg(a,s,r,t),Fe(s,2),Nn(s));break}}r=r.return}}function Gd(t,r,a){var s=t.pingCache;if(s===null){s=t.pingCache=new fb;var u=new Set;s.set(r,u)}else u=s.get(r),u===void 0&&(u=new Set,s.set(r,u));u.has(a)||(Id=!0,u.add(a),t=_b.bind(null,t,r,a),r.then(t,t))}function _b(t,r,a){var s=t.pingCache;s!==null&&s.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Vt===t&&(_t&a)===a&&(er===4||er===3&&(_t&62914560)===_t&&300>Ut()-kd?(Nt&2)===0&&lo(t,0):Ud|=a,io===_t&&(io=0)),Nn(t)}function Zg(t,r){r===0&&(r=Pe()),t=Wi(t,r),t!==null&&(Fe(t,r),Nn(t))}function yb(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Zg(t,a)}function bb(t,r){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(i(314))}s!==null&&s.delete(r),Zg(t,a)}function xb(t,r){return wt(t,r)}var Kl=null,uo=null,Wd=!1,ec=!1,jd=!1,xi=0;function Nn(t){t!==uo&&t.next===null&&(uo===null?Kl=uo=t:uo=uo.next=t),ec=!0,Wd||(Wd=!0,Mb())}function Ms(t,r){if(!jd&&ec){jd=!0;do for(var a=!1,s=Kl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var M=s.suspendedLanes,T=s.pingedLanes;h=(1<<31-De(42|t)+1)-1,h&=u&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,rv(s,h))}else h=_t,h=ze(s,s===Vt?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Ue(s,h)||(a=!0,rv(s,h));s=s.next}while(a);jd=!1}}function Sb(){Kg()}function Kg(){ec=Wd=!1;var t=0;xi!==0&&(Nb()&&(t=xi),xi=0);for(var r=Ut(),a=null,s=Kl;s!==null;){var u=s.next,h=ev(s,r);h===0?(s.next=null,a===null?Kl=u:a.next=u,u===null&&(uo=a)):(a=s,(t!==0||(h&3)!==0)&&(ec=!0)),s=u}Ms(t)}function ev(t,r){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-De(h),T=1<<M,B=u[M];B===-1?((T&a)===0||(T&s)!==0)&&(u[M]=ut(T,r)):B<=r&&(t.expiredLanes|=T),h&=~T}if(r=Vt,a=_t,a=ze(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===r&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&it(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(s!==null&&it(s),qt(a)){case 2:case 8:a=yt;break;case 32:a=Tt;break;case 268435456:a=I;break;default:a=Tt}return s=tv.bind(null,t),a=wt(a,s),t.callbackPriority=r,t.callbackNode=a,r}return s!==null&&s!==null&&it(s),t.callbackPriority=2,t.callbackNode=null,2}function tv(t,r){if(Sr!==0&&Sr!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var s=_t;return s=ze(t,t===Vt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Fg(t,s,r),ev(t,Ut()),t.callbackNode!=null&&t.callbackNode===a?tv.bind(null,t):null)}function rv(t,r){if(Zl())return null;Fg(t,r,!0)}function Mb(){Ib(function(){(Nt&6)!==0?wt(Xt,Sb):Kg()})}function Xd(){return xi===0&&(xi=j()),xi}function nv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function av(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function Eb(t,r,a,s,u){if(r==="submit"&&a&&a.stateNode===u){var h=nv((u[gr]||null).action),M=s.submitter;M&&(r=(r=M[gr]||null)?nv(r.formAction):M.getAttribute("formAction"),r!==null&&(h=r,M=null));var T=new ml("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(xi!==0){var B=M?av(u,M):new FormData(u);hd(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=M?av(u,M):new FormData(u),hd(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var qd=0;qd<Nu.length;qd++){var Yd=Nu[qd],wb=Yd.toLowerCase(),Tb=Yd[0].toUpperCase()+Yd.slice(1);gn(wb,"on"+Tb)}gn(Fp,"onAnimationEnd"),gn(Op,"onAnimationIteration"),gn(Bp,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(Gy,"onTransitionRun"),gn(Wy,"onTransitionStart"),gn(jy,"onTransitionCancel"),gn(zp,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es));function iv(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(r)for(var M=s.length-1;0<=M;M--){var T=s[M],B=T.instance,ee=T.currentTarget;if(T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=ee;try{h(u)}catch(ve){Hl(ve)}u.currentTarget=null,h=B}else for(M=0;M<s.length;M++){if(T=s[M],B=T.instance,ee=T.currentTarget,T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=ee;try{h(u)}catch(ve){Hl(ve)}u.currentTarget=null,h=B}}}}function mt(t,r){var a=r[Di];a===void 0&&(a=r[Di]=new Set);var s=t+"__bubble";a.has(s)||(ov(r,t,2,!1),a.add(s))}function $d(t,r,a){var s=0;r&&(s|=4),ov(a,t,s,r)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[tc]){t[tc]=!0,sl.forEach(function(a){a!=="selectionchange"&&(Ab.has(a)||$d(a,!1,t),$d(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[tc]||(r[tc]=!0,$d("selectionchange",!1,r))}}function ov(t,r,a,s){switch(Pv(r)){case 2:var u=ex;break;case 8:u=tx;break;default:u=uh}a=u.bind(null,r,a,t),u=void 0,!_u||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Qd(t,r,a,s,u){var h=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var T=s.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=s.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=pn(T),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){s=h=M;continue e}T=T.parentNode}}s=s.return}fp(function(){var ee=h,ve=gu(a),xe=[];e:{var ae=Hp.get(t);if(ae!==void 0){var ie=ml,nt=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":ie=xy;break;case"focusin":nt="focus",ie=Su;break;case"focusout":nt="blur",ie=Su;break;case"beforeblur":case"afterblur":ie=Su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Ey;break;case Fp:case Op:case Bp:ie=hy;break;case zp:ie=Ty;break;case"scroll":case"scrollend":ie=sy;break;case"wheel":ie=Cy;break;case"copy":case"cut":case"paste":ie=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=_p;break;case"toggle":case"beforetoggle":ie=Py}var tt=(r&4)!==0,Ot=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var W=ee,Z;W!==null;){var ye=W;if(Z=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||Z===null||Y===null||(ye=Go(W,Y),ye!=null&&tt.push(ws(W,ye,Z))),Ot)break;W=W.return}0<tt.length&&(ae=new ie(ae,nt,null,a,ve),xe.push({event:ae,listeners:tt}))}}if((r&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ae&&a!==mu&&(nt=a.relatedTarget||a.fromElement)&&(pn(nt)||nt[wa]))break e;if((ie||ae)&&(ae=ve.window===ve?ve:(ae=ve.ownerDocument)?ae.defaultView||ae.parentWindow:window,ie?(nt=a.relatedTarget||a.toElement,ie=ee,nt=nt?pn(nt):null,nt!==null&&(Ot=c(nt),tt=nt.tag,nt!==Ot||tt!==5&&tt!==27&&tt!==6)&&(nt=null)):(ie=null,nt=ee),ie!==nt)){if(tt=gp,ye="onMouseLeave",Y="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(tt=_p,ye="onPointerLeave",Y="onPointerEnter",W="pointer"),Ot=ie==null?ae:wn(ie),Z=nt==null?ae:wn(nt),ae=new tt(ye,W+"leave",ie,a,ve),ae.target=Ot,ae.relatedTarget=Z,ye=null,pn(ve)===ee&&(tt=new tt(Y,W+"enter",nt,a,ve),tt.target=Z,tt.relatedTarget=Ot,ye=tt),Ot=ye,ie&&nt)t:{for(tt=ie,Y=nt,W=0,Z=tt;Z;Z=ho(Z))W++;for(Z=0,ye=Y;ye;ye=ho(ye))Z++;for(;0<W-Z;)tt=ho(tt),W--;for(;0<Z-W;)Y=ho(Y),Z--;for(;W--;){if(tt===Y||Y!==null&&tt===Y.alternate)break t;tt=ho(tt),Y=ho(Y)}tt=null}else tt=null;ie!==null&&sv(xe,ae,ie,tt,!1),nt!==null&&Ot!==null&&sv(xe,Ot,nt,tt,!0)}}e:{if(ae=ee?wn(ee):window,ie=ae.nodeName&&ae.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ae.type==="file")var Ge=Tp;else if(Ep(ae))if(Ap)Ge=zy;else{Ge=Oy;var ft=Fy}else ie=ae.nodeName,!ie||ie.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&An(ee.elementType)&&(Ge=Tp):Ge=By;if(Ge&&(Ge=Ge(t,ee))){wp(xe,Ge,a,ve);break e}ft&&ft(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Dr(ae,"number",ae.value)}switch(ft=ee?wn(ee):window,t){case"focusin":(Ep(ft)||ft.contentEditable==="true")&&(Hi=ft,Cu=ee,Qo=null);break;case"focusout":Qo=Cu=Hi=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Dp(xe,a,ve);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":Dp(xe,a,ve)}var Ye;if(Eu)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else zi?Sp(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(yp&&a.locale!=="ko"&&(zi||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&zi&&(Ye=pp()):(Ra=ve,yu="value"in Ra?Ra.value:Ra.textContent,zi=!0)),ft=rc(ee,rt),0<ft.length&&(rt=new vp(rt,t,null,a,ve),xe.push({event:rt,listeners:ft}),Ye?rt.data=Ye:(Ye=Mp(a),Ye!==null&&(rt.data=Ye)))),(Ye=Ly?Iy(t,a):Uy(t,a))&&(rt=rc(ee,"onBeforeInput"),0<rt.length&&(ft=new vp("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ft,listeners:rt}),ft.data=Ye)),Eb(xe,t,ee,a,ve)}iv(xe,r)})}function ws(t,r,a){return{instance:t,listener:r,currentTarget:a}}function rc(t,r){for(var a=r+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Go(t,a),u!=null&&s.unshift(ws(t,u,h)),u=Go(t,r),u!=null&&s.push(ws(t,u,h))),t.tag===3)return s;t=t.return}return[]}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sv(t,r,a,s,u){for(var h=r._reactName,M=[];a!==null&&a!==s;){var T=a,B=T.alternate,ee=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||ee===null||(B=ee,u?(ee=Go(a,h),ee!=null&&M.unshift(ws(a,ee,B))):u||(ee=Go(a,h),ee!=null&&M.push(ws(a,ee,B)))),a=a.return}M.length!==0&&t.push({event:r,listeners:M})}var Cb=/\r\n?/g,Rb=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(Cb,`
`).replace(Rb,"")}function cv(t,r){return r=lv(r),lv(t)===r}function nc(){}function Ft(t,r,a,s,u,h){switch(a){case"children":typeof s=="string"?r==="body"||r==="textarea"&&s===""||Wt(t,s):(typeof s=="number"||typeof s=="bigint")&&r!=="body"&&Wt(t,""+s);break;case"className":te(t,"class",s);break;case"tabIndex":te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":te(t,a,s);break;case"style":Ca(t,s,h);break;case"data":if(r!=="object"){te(t,"data",s);break}case"src":case"href":if(s===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=dl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(r!=="input"&&Ft(t,r,"name",u.name,u,null),Ft(t,r,"formEncType",u.formEncType,u,null),Ft(t,r,"formMethod",u.formMethod,u,null),Ft(t,r,"formTarget",u.formTarget,u,null)):(Ft(t,r,"encType",u.encType,u,null),Ft(t,r,"method",u.method,u,null),Ft(t,r,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=dl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=nc);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(i(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(i(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=dl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":mt("beforetoggle",t),mt("toggle",t),oe(t,"popover",s);break;case"xlinkActuate":$(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":$(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":$(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":$(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":$(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":$(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":$(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":$(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":$(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oe(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ul.get(a)||a,oe(t,a,s))}}function Zd(t,r,a,s,u,h){switch(a){case"style":Ca(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(i(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(i(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Wt(t,s):(typeof s=="number"||typeof s=="bigint")&&Wt(t,""+s);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),r=a.slice(2,u?a.length-7:void 0),h=t[gr]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(r,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):oe(t,a,s)}}}function Mr(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Ft(t,r,h,M,a,null)}}u&&Ft(t,r,"srcSet",a.srcSet,a,null),s&&Ft(t,r,"src",a.src,a,null);return;case"input":mt("invalid",t);var T=h=M=u=null,B=null,ee=null;for(s in a)if(a.hasOwnProperty(s)){var ve=a[s];if(ve!=null)switch(s){case"name":u=ve;break;case"type":M=ve;break;case"checked":B=ve;break;case"defaultChecked":ee=ve;break;case"value":h=ve;break;case"defaultValue":T=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(i(137,r));break;default:Ft(t,r,s,ve,a,null)}}Ur(t,h,T,B,ee,M,u,!1),Dt(t);return;case"select":mt("invalid",t),s=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":s=T;default:Ft(t,r,u,T,a,null)}r=h,a=M,t.multiple=!!s,r!=null?kr(t,!!s,r,!1):a!=null&&kr(t,!!s,a,!0);return;case"textarea":mt("invalid",t),h=u=s=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":s=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(91));break;default:Ft(t,r,M,T,a,null)}Rt(t,s,u,h),Dt(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(t,r,B,s,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(s=0;s<Es.length;s++)mt(Es[s],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(s=a[ee],s!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Ft(t,r,ee,s,a,null)}return;default:if(An(r)){for(ve in a)a.hasOwnProperty(ve)&&(s=a[ve],s!==void 0&&Zd(t,r,ve,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ft(t,r,T,s,a,null))}function Pb(t,r,a,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,T=null,B=null,ee=null,ve=null;for(ie in a){var xe=a[ie];if(a.hasOwnProperty(ie)&&xe!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":B=xe;default:s.hasOwnProperty(ie)||Ft(t,r,ie,null,s,xe)}}for(var ae in s){var ie=s[ae];if(xe=a[ae],s.hasOwnProperty(ae)&&(ie!=null||xe!=null))switch(ae){case"type":h=ie;break;case"name":u=ie;break;case"checked":ee=ie;break;case"defaultChecked":ve=ie;break;case"value":M=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(i(137,r));break;default:ie!==xe&&Ft(t,r,ae,ie,s,xe)}}mn(t,M,T,B,ee,ve,h,u);return;case"select":ie=M=T=ae=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ie=B;default:s.hasOwnProperty(h)||Ft(t,r,h,null,s,B)}for(u in s)if(h=s[u],B=a[u],s.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":ae=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==B&&Ft(t,r,u,h,s,B)}r=T,a=M,s=ie,ae!=null?kr(t,!!a,ae,!1):!!s!=!!a&&(r!=null?kr(t,!!a,r,!0):kr(t,!!a,a?[]:"",!1));return;case"textarea":ie=ae=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(t,r,T,null,s,u)}for(M in s)if(u=s[M],h=a[M],s.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ae=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(i(91));break;default:u!==h&&Ft(t,r,M,u,s,h)}qn(t,ae,ie);return;case"option":for(var nt in a)if(ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!s.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Ft(t,r,nt,null,s,ae)}for(B in s)if(ae=s[B],ie=a[B],s.hasOwnProperty(B)&&ae!==ie&&(ae!=null||ie!=null))switch(B){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Ft(t,r,B,ae,s,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!s.hasOwnProperty(tt)&&Ft(t,r,tt,null,s,ae);for(ee in s)if(ae=s[ee],ie=a[ee],s.hasOwnProperty(ee)&&ae!==ie&&(ae!=null||ie!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(i(137,r));break;default:Ft(t,r,ee,ae,s,ie)}return;default:if(An(r)){for(var Ot in a)ae=a[Ot],a.hasOwnProperty(Ot)&&ae!==void 0&&!s.hasOwnProperty(Ot)&&Zd(t,r,Ot,void 0,s,ae);for(ve in s)ae=s[ve],ie=a[ve],!s.hasOwnProperty(ve)||ae===ie||ae===void 0&&ie===void 0||Zd(t,r,ve,ae,s,ie);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!s.hasOwnProperty(Y)&&Ft(t,r,Y,null,s,ae);for(xe in s)ae=s[xe],ie=a[xe],!s.hasOwnProperty(xe)||ae===ie||ae==null&&ie==null||Ft(t,r,xe,ae,s,ie)}var Kd=null,eh=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function th(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rh=null;function Nb(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(Ub)}:hv;function Ub(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function pv(t,r){var a=r,s=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<s&&8>s){a=s;var M=t.ownerDocument;if(a&1&&Ts(M.documentElement),a&2&&Ts(M.body),a&4)for(a=M.head,Ts(a),M=a.firstChild;M;){var T=M.nextSibling,B=M.nodeName;M[Ta]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){t.removeChild(h),Us(r);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=h}while(a);Us(r)}function nh(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Fi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Db(t,r,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ta])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence")||h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=_n(t.nextSibling),t===null)break}return null}function kb(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_n(t.nextSibling),t===null))return null;return t}function ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Fb(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var s=function(){r(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function _n(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var ih=null;function mv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function gv(t,r,a){switch(r=ac(a),t){case"html":if(t=r.documentElement,!t)throw Error(i(452));return t;case"head":if(t=r.head,!t)throw Error(i(453));return t;case"body":if(t=r.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Ts(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Fi(t)}var on=new Map,vv=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=H.d;H.d={f:Ob,r:Bb,D:zb,C:Hb,L:Vb,m:Gb,X:jb,S:Wb,M:Xb};function Ob(){var t=la.f(),r=Jl();return t||r}function Bb(t){var r=Wn(t);r!==null&&r.tag===5&&r.type==="form"?Fm(r):la.r(t)}var fo=typeof document>"u"?null:document;function _v(t,r,a){var s=fo;if(s&&typeof r=="string"&&r){var u=Gt(r);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),vv.has(u)||(vv.add(u),t={rel:t,crossOrigin:a,href:r},s.querySelector(u)===null&&(r=s.createElement("link"),Mr(r,"link",t),nr(r),s.head.appendChild(r)))}}function zb(t){la.D(t),_v("dns-prefetch",t,null)}function Hb(t,r){la.C(t,r),_v("preconnect",t,r)}function Vb(t,r,a){la.L(t,r,a);var s=fo;if(s&&t&&r){var u='link[rel="preload"][as="'+Gt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var h=u;switch(r){case"style":h=po(t);break;case"script":h=mo(t)}on.has(h)||(t=v({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),on.set(h,t),s.querySelector(u)!==null||r==="style"&&s.querySelector(As(h))||r==="script"&&s.querySelector(Cs(h))||(r=s.createElement("link"),Mr(r,"link",t),nr(r),s.head.appendChild(r)))}}function Gb(t,r){la.m(t,r);var a=fo;if(a&&t){var s=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Gt(s)+'"][href="'+Gt(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=mo(t)}if(!on.has(h)&&(t=v({rel:"modulepreload",href:t},r),on.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cs(h)))return}s=a.createElement("link"),Mr(s,"link",t),nr(s),a.head.appendChild(s)}}}function Wb(t,r,a){la.S(t,r,a);var s=fo;if(s&&t){var u=jn(s).hoistableStyles,h=po(t);r=r||"default";var M=u.get(h);if(!M){var T={loading:0,preload:null};if(M=s.querySelector(As(h)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":r},a),(a=on.get(h))&&oh(t,a);var B=M=s.createElement("link");nr(B),Mr(B,"link",t),B._p=new Promise(function(ee,ve){B.onload=ee,B.onerror=ve}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oc(M,r,s)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(h,M)}}}function jb(t,r){la.X(t,r);var a=fo;if(a&&t){var s=jn(a).hoistableScripts,u=mo(t),h=s.get(u);h||(h=a.querySelector(Cs(u)),h||(t=v({src:t,async:!0},r),(r=on.get(u))&&sh(t,r),h=a.createElement("script"),nr(h),Mr(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function Xb(t,r){la.M(t,r);var a=fo;if(a&&t){var s=jn(a).hoistableScripts,u=mo(t),h=s.get(u);h||(h=a.querySelector(Cs(u)),h||(t=v({src:t,async:!0,type:"module"},r),(r=on.get(u))&&sh(t,r),h=a.createElement("script"),nr(h),Mr(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function yv(t,r,a,s){var u=(u=K.current)?ic(u):null;if(!u)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=po(a.href),a=jn(u).hoistableStyles,s=a.get(r),s||(s={type:"style",instance:null,count:0,state:null},a.set(r,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=po(a.href);var h=jn(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(As(t)))&&!h._p&&(M.instance=h,M.state.loading=5),on.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},on.set(t,a),h||qb(u,t,a,M.state))),r&&s===null)throw Error(i(528,""));return M}if(r&&s!==null)throw Error(i(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=mo(a),a=jn(u).hoistableScripts,s=a.get(r),s||(s={type:"script",instance:null,count:0,state:null},a.set(r,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function po(t){return'href="'+Gt(t)+'"'}function As(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function qb(t,r,a,s){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?s.loading=1:(r=t.createElement("link"),s.preload=r,r.addEventListener("load",function(){return s.loading|=1}),r.addEventListener("error",function(){return s.loading|=2}),Mr(r,"link",a),nr(r),t.head.appendChild(r))}function mo(t){return'[src="'+Gt(t)+'"]'}function Cs(t){return"script[async]"+t}function xv(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var s=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(s)return r.instance=s,nr(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nr(s),Mr(s,"style",u),oc(s,a.precedence,t),r.instance=s;case"stylesheet":u=po(a.href);var h=t.querySelector(As(u));if(h)return r.state.loading|=4,r.instance=h,nr(h),h;s=bv(a),(u=on.get(u))&&oh(s,u),h=(t.ownerDocument||t).createElement("link"),nr(h);var M=h;return M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),Mr(h,"link",s),r.state.loading|=4,oc(h,a.precedence,t),r.instance=h;case"script":return h=mo(a.src),(u=t.querySelector(Cs(h)))?(r.instance=u,nr(u),u):(s=a,(u=on.get(h))&&(s=v({},a),sh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),nr(u),Mr(u,"link",s),t.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(s=r.instance,r.state.loading|=4,oc(s,a.precedence,t));return r.instance}function oc(t,r,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,M=0;M<s.length;M++){var T=s[M];if(T.dataset.precedence===r)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function oh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function sh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var sc=null;function Sv(t,r,a){if(sc===null){var s=new Map,u=sc=new Map;u.set(a,s)}else u=sc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ta]||h[ur]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(r)||"";M=t+M;var T=s.get(M);T?T.push(h):s.set(M,[h])}}return s}function Mv(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function Yb(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rs=null;function $b(){}function Jb(t,r,a){if(Rs===null)throw Error(i(475));var s=Rs;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=po(a.href),h=t.querySelector(As(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=lc.bind(s),t.then(s,s)),r.state.loading|=4,r.instance=h,nr(h);return}h=t.ownerDocument||t,a=bv(a),(u=on.get(u))&&oh(a,u),h=h.createElement("link"),nr(h);var M=h;M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),Mr(h,"link",a),r.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(s.count++,r=lc.bind(s),t.addEventListener("load",r),t.addEventListener("error",r))}}function Qb(){if(Rs===null)throw Error(i(475));var t=Rs;return t.stylesheets&&t.count===0&&lh(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&lh(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function lh(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,r.forEach(Zb,t),cc=null,lc.call(t))}function Zb(t,r){if(!(r.state.loading&4)){var a=cc.get(t);if(a)var s=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),s=M)}s&&a.set(null,s)}u=r.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||s,h===s&&a.set(null,u),a.set(M,u),this.count++,s=lc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),r.state.loading|=4}}var Ps={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Kb(t,r,a,s,u,h,M,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function wv(t,r,a,s,u,h,M,T,B,ee,ve,xe){return t=new Kb(t,r,a,M,T,B,ee,xe),r=1,h===!0&&(r|=24),h=Wr(3,null,null,r),t.current=h,h.stateNode=t,r=Gu(),r.refCount++,t.pooledCache=r,r.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:r},qu(h),t}function Tv(t){return t?(t=ji,t):ji}function Av(t,r,a,s,u,h){u=Tv(u),s.context===null?s.context=u:s.pendingContext=u,s=La(r),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=Ia(t,s,r),a!==null&&($r(a,t,r),os(a,t,r))}function Cv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function ch(t,r){Cv(t,r),(t=t.alternate)&&Cv(t,r)}function Rv(t){if(t.tag===13){var r=Wi(t,67108864);r!==null&&$r(r,t,67108864),ch(t,67108864)}}var uc=!0;function ex(t,r,a,s){var u=U.T;U.T=null;var h=H.p;try{H.p=2,uh(t,r,a,s)}finally{H.p=h,U.T=u}}function tx(t,r,a,s){var u=U.T;U.T=null;var h=H.p;try{H.p=8,uh(t,r,a,s)}finally{H.p=h,U.T=u}}function uh(t,r,a,s){if(uc){var u=dh(s);if(u===null)Qd(t,r,s,dc,a),Nv(t,s);else if(nx(u,t,r,a,s))s.stopPropagation();else if(Nv(t,s),r&4&&-1<rx.indexOf(t)){for(;u!==null;){var h=Wn(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=We(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var B=1<<31-De(M);T.entanglements[1]|=B,M&=~B}Nn(h),(Nt&6)===0&&(Yl=Ut()+500,Ms(0))}}break;case 13:T=Wi(h,2),T!==null&&$r(T,h,2),Jl(),ch(h,2)}if(h=dh(s),h===null&&Qd(t,r,s,dc,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else Qd(t,r,s,null,a)}}function dh(t){return t=gu(t),hh(t)}var dc=null;function hh(t){if(dc=null,t=pn(t),t!==null){var r=c(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=d(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return dc=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Xt:return 2;case yt:return 8;case Tt:case je:return 32;case I:return 268435456;default:return 32}default:return 32}}var fh=!1,Xa=null,qa=null,Ya=null,Ns=new Map,Ls=new Map,$a=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(t,r){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Ns.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(r.pointerId)}}function Is(t,r,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Wn(r),r!==null&&Rv(r)),t):(t.eventSystemFlags|=s,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function nx(t,r,a,s,u){switch(r){case"focusin":return Xa=Is(Xa,t,r,a,s,u),!0;case"dragenter":return qa=Is(qa,t,r,a,s,u),!0;case"mouseover":return Ya=Is(Ya,t,r,a,s,u),!0;case"pointerover":var h=u.pointerId;return Ns.set(h,Is(Ns.get(h)||null,t,r,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Ls.set(h,Is(Ls.get(h)||null,t,r,a,s,u)),!0}return!1}function Lv(t){var r=pn(t.target);if(r!==null){var a=c(r);if(a!==null){if(r=a.tag,r===13){if(r=d(a),r!==null){t.blockedOn=r,fn(t.priority,function(){if(a.tag===13){var s=Yr();s=Qe(s);var u=Wi(a,s);u!==null&&$r(u,a,s),ch(a,s)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=dh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);mu=s,a.target.dispatchEvent(s),mu=null}else return r=Wn(a),r!==null&&Rv(r),t.blockedOn=a,!1;r.shift()}return!0}function Iv(t,r,a){hc(t)&&a.delete(r)}function ax(){fh=!1,Xa!==null&&hc(Xa)&&(Xa=null),qa!==null&&hc(qa)&&(qa=null),Ya!==null&&hc(Ya)&&(Ya=null),Ns.forEach(Iv),Ls.forEach(Iv)}function fc(t,r){t.blockedOn===r&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ax)))}var pc=null;function Uv(t){pc!==t&&(pc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var r=0;r<t.length;r+=3){var a=t[r],s=t[r+1],u=t[r+2];if(typeof s!="function"){if(hh(s||a)===null)continue;break}var h=Wn(a);h!==null&&(t.splice(r,3),r-=3,hd(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Us(t){function r(B){return fc(B,t)}Xa!==null&&fc(Xa,t),qa!==null&&fc(qa,t),Ya!==null&&fc(Ya,t),Ns.forEach(r),Ls.forEach(r);for(var a=0;a<$a.length;a++){var s=$a[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Lv(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],M=u[gr]||null;if(typeof h=="function")M||Uv(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[gr]||null)T=M.formAction;else if(hh(u)!==null)continue}else T=M.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Uv(a)}}}function ph(t){this._internalRoot=t}mc.prototype.render=ph.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));var a=r.current,s=Yr();Av(a,s,t,r,null,null)},mc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Av(t.current,2,null,t,null,null),Jl(),r[wa]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var r=xt();t={blockedOn:null,target:t,priority:r};for(var a=0;a<$a.length&&r!==0&&r<$a[a].priority;a++);$a.splice(a,0,t),a===0&&Lv(t)}};var Dv=e.version;if(Dv!=="19.1.0")throw Error(i(527,Dv,"19.1.0"));H.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=m(r),t=t!==null?f(t):null,t=t===null?null:t.stateNode,t};var ix={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{me=gc.inject(ix),fe=gc}catch{}}return ks.createRoot=function(t,r){if(!l(t))throw Error(i(299));var a=!1,s="",u=Qm,h=Zm,M=Km,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(h=r.onCaughtError),r.onRecoverableError!==void 0&&(M=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=wv(t,1,!1,null,null,a,s,u,h,M,T,null),t[wa]=r.current,Jd(t),new ph(r)},ks.hydrateRoot=function(t,r,a){if(!l(t))throw Error(i(299));var s=!1,u="",h=Qm,M=Zm,T=Km,B=null,ee=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(ee=a.formState)),r=wv(t,1,!0,r,a??null,s,u,h,M,T,B,ee),r.context=Tv(null),a=r.current,s=Yr(),s=Qe(s),u=La(s),u.callback=null,Ia(a,u,s),a=s,r.current.lanes=a,Fe(r,a),Nn(r),t[wa]=r.current,Jd(t),new mc(r)},ks.version="19.1.0",ks}var $v;function vx(){if($v)return mh.exports;$v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=gx(),mh.exports}var _x=vx(),Fs={},Jv;function yx(){if(Jv)return Fs;Jv=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.parse=d,Fs.serialize=f;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function d(g,b){const x=new c,R=g.length;if(R<2)return x;const _=(b==null?void 0:b.decode)||v;let y=0;do{const A=g.indexOf("=",y);if(A===-1)break;const D=g.indexOf(";",y),N=D===-1?R:D;if(A>N){y=g.lastIndexOf(";",A-1)+1;continue}const F=p(g,y,A),k=m(g,A,F),O=g.slice(F,k);if(x[O]===void 0){let E=p(g,A+1,N),P=m(g,N,E);const ue=_(g.slice(E,P));x[O]=ue}y=N+1}while(y<R);return x}function p(g,b,x){do{const R=g.charCodeAt(b);if(R!==32&&R!==9)return b}while(++b<x);return x}function m(g,b,x){for(;b>x;){const R=g.charCodeAt(--b);if(R!==32&&R!==9)return b+1}return x}function f(g,b,x){const R=(x==null?void 0:x.encode)||encodeURIComponent;if(!o.test(g))throw new TypeError(`argument name is invalid: ${g}`);const _=R(b);if(!e.test(_))throw new TypeError(`argument val is invalid: ${b}`);let y=g+"="+_;if(!x)return y;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);y+="; Max-Age="+x.maxAge}if(x.domain){if(!n.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);y+="; Domain="+x.domain}if(x.path){if(!i.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);y+="; Path="+x.path}if(x.expires){if(!S(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);y+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(y+="; HttpOnly"),x.secure&&(y+="; Secure"),x.partitioned&&(y+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":y+="; Priority=Low";break;case"medium":y+="; Priority=Medium";break;case"high":y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":y+="; SameSite=Strict";break;case"lax":y+="; SameSite=Lax";break;case"none":y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return y}function v(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function S(g){return l.call(g)==="[object Date]"}return Fs}yx();var Qv="popstate";function bx(o={}){function e(l,c){let{pathname:d="/",search:p="",hash:m=""}=Ui(l.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),Kh("",{pathname:d,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(l,c){let d=l.document.querySelector("base"),p="";if(d&&d.getAttribute("href")){let m=l.location.href,f=m.indexOf("#");p=f===-1?m:m.slice(0,f)}return p+"#"+(typeof c=="string"?c:$s(c))}function i(l,c){En(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Sx(e,n,i,o)}function Qt(o,e){if(o===!1||o===null||typeof o>"u")throw new Error(e)}function En(o,e){if(!o){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function Zv(o,e){return{usr:o.state,key:o.key,idx:e}}function Kh(o,e,n=null,i){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof e=="string"?Ui(e):e,state:n,key:e&&e.key||i||xx()}}function $s({pathname:o="/",search:e="",hash:n=""}){return e&&e!=="?"&&(o+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(o+=n.charAt(0)==="#"?n:"#"+n),o}function Ui(o){let e={};if(o){let n=o.indexOf("#");n>=0&&(e.hash=o.substring(n),o=o.substring(0,n));let i=o.indexOf("?");i>=0&&(e.search=o.substring(i),o=o.substring(0,i)),o&&(e.pathname=o)}return e}function Sx(o,e,n,i={}){let{window:l=document.defaultView,v5Compat:c=!1}=i,d=l.history,p="POP",m=null,f=v();f==null&&(f=0,d.replaceState({...d.state,idx:f},""));function v(){return(d.state||{idx:null}).idx}function S(){p="POP";let _=v(),y=_==null?null:_-f;f=_,m&&m({action:p,location:R.location,delta:y})}function g(_,y){p="PUSH";let A=Kh(R.location,_,y);n&&n(A,_),f=v()+1;let D=Zv(A,f),N=R.createHref(A);try{d.pushState(D,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}c&&m&&m({action:p,location:R.location,delta:1})}function b(_,y){p="REPLACE";let A=Kh(R.location,_,y);n&&n(A,_),f=v();let D=Zv(A,f),N=R.createHref(A);d.replaceState(D,"",N),c&&m&&m({action:p,location:R.location,delta:0})}function x(_){return Mx(_)}let R={get action(){return p},get location(){return o(l,d)},listen(_){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Qv,S),m=_,()=>{l.removeEventListener(Qv,S),m=null}},createHref(_){return e(l,_)},createURL:x,encodeLocation(_){let y=x(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:b,go(_){return d.go(_)}};return R}function Mx(o,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(n,"No window.location.(origin|href) available to create URL");let i=typeof o=="string"?o:$s(o);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function i0(o,e,n="/"){return Ex(o,e,n,!1)}function Ex(o,e,n,i){let l=typeof e=="string"?Ui(e):e,c=ya(l.pathname||"/",n);if(c==null)return null;let d=o0(o);wx(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let f=kx(c);p=Ux(d[m],f,i)}return p}function o0(o,e=[],n=[],i=""){let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Qt(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let f=ga([i,m.relativePath]),v=n.concat(m);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),o0(c.children,e,v,f)),!(c.path==null&&!c.index)&&e.push({path:f,score:Lx(f,c.index),routesMeta:v})};return o.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of s0(c.path))l(c,d,m)}),e}function s0(o){let e=o.split("/");if(e.length===0)return[];let[n,...i]=e,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(i.length===0)return l?[c,""]:[c];let d=s0(i.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>o.startsWith("/")&&m===""?"/":m)}function wx(o){o.sort((e,n)=>e.score!==n.score?n.score-e.score:Ix(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var Tx=/^:[\w-]+$/,Ax=3,Cx=2,Rx=1,Px=10,Nx=-2,Kv=o=>o==="*";function Lx(o,e){let n=o.split("/"),i=n.length;return n.some(Kv)&&(i+=Nx),e&&(i+=Cx),n.filter(l=>!Kv(l)).reduce((l,c)=>l+(Tx.test(c)?Ax:c===""?Rx:Px),i)}function Ix(o,e){return o.length===e.length&&o.slice(0,-1).every((n,i)=>n===e[i])?o[o.length-1]-e[e.length-1]:0}function Ux(o,e,n=!1){let{routesMeta:i}=o,l={},c="/",d=[];for(let p=0;p<i.length;++p){let m=i[p],f=p===i.length-1,v=c==="/"?e:e.slice(c.length)||"/",S=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},v),g=m.route;if(!S&&f&&n&&!i[i.length-1].route.index&&(S=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!S)return null;Object.assign(l,S.params),d.push({params:l,pathname:ga([c,S.pathname]),pathnameBase:zx(ga([c,S.pathnameBase])),route:g}),S.pathnameBase!=="/"&&(c=ga([c,S.pathnameBase]))}return d}function Kc(o,e){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[n,i]=Dx(o.path,o.caseSensitive,o.end),l=e.match(n);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:i.reduce((m,{paramName:f,isOptional:v},S)=>{if(f==="*"){let b=p[S]||"";d=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const g=p[S];return v&&!g?m[f]=void 0:m[f]=(g||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:o}}function Dx(o,e=!1,n=!0){En(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let i=[],l="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(i.push({paramName:"*"}),l+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":o!==""&&o!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function kx(o){try{return o.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return En(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),o}}function ya(o,e){if(e==="/")return o;if(!o.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=o.charAt(n);return i&&i!=="/"?null:o.slice(n)||"/"}function Fx(o,e="/"){let{pathname:n,search:i="",hash:l=""}=typeof o=="string"?Ui(o):o;return{pathname:n?n.startsWith("/")?n:Ox(n,e):e,search:Hx(i),hash:Vx(l)}}function Ox(o,e){let n=e.replace(/\/+$/,"").split("/");return o.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vh(o,e,n,i){return`Cannot include a '${o}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bx(o){return o.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function l0(o){let e=Bx(o);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function c0(o,e,n,i=!1){let l;typeof o=="string"?l=Ui(o):(l={...o},Qt(!l.pathname||!l.pathname.includes("?"),vh("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),vh("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),vh("#","search","hash",l)));let c=o===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=n;else{let S=e.length-1;if(!i&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),S-=1;l.pathname=g.join("/")}p=S>=0?e[S]:"/"}let m=Fx(l,p),f=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(f||v)&&(m.pathname+="/"),m}var ga=o=>o.join("/").replace(/\/\/+/g,"/"),zx=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Vx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Gx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var Wx=["GET",...u0];new Set(Wx);var Oo=de.createContext(null);Oo.displayName="DataRouter";var lu=de.createContext(null);lu.displayName="DataRouterState";var d0=de.createContext({isTransitioning:!1});d0.displayName="ViewTransition";var jx=de.createContext(new Map);jx.displayName="Fetchers";var Xx=de.createContext(null);Xx.displayName="Await";var Hn=de.createContext(null);Hn.displayName="Navigation";var Ks=de.createContext(null);Ks.displayName="Location";var Ea=de.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var Jf=de.createContext(null);Jf.displayName="RouteError";function qx(o,{relative:e}={}){Qt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=de.useContext(Hn),{hash:l,pathname:c,search:d}=tl(o,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:ga([n,c])),i.createHref({pathname:p,search:d,hash:l})}function el(){return de.useContext(Ks)!=null}function Vn(){return Qt(el(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(Ks).location}var h0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function f0(o){de.useContext(Hn).static||de.useLayoutEffect(o)}function p0(){let{isDataRoute:o}=de.useContext(Ea);return o?oS():Yx()}function Yx(){Qt(el(),"useNavigate() may be used only in the context of a <Router> component.");let o=de.useContext(Oo),{basename:e,navigator:n}=de.useContext(Hn),{matches:i}=de.useContext(Ea),{pathname:l}=Vn(),c=JSON.stringify(l0(i)),d=de.useRef(!1);return f0(()=>{d.current=!0}),de.useCallback((p,m={})=>{if(En(d.current,h0),!d.current)return;if(typeof p=="number"){n.go(p);return}let f=c0(p,JSON.parse(c),l,m.relative==="path");o==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ga([e,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[e,n,c,l,o])}de.createContext(null);function tl(o,{relative:e}={}){let{matches:n}=de.useContext(Ea),{pathname:i}=Vn(),l=JSON.stringify(l0(n));return de.useMemo(()=>c0(o,JSON.parse(l),i,e==="path"),[o,l,i,e])}function $x(o,e){return m0(o,e)}function m0(o,e,n,i){var l;Qt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=de.useContext(Hn),{matches:d}=de.useContext(Ea),p=d[d.length-1],m=p?p.params:{},f=p?p.pathname:"/",v=p?p.pathnameBase:"/",S=p&&p.route;{let A=S&&S.path||"";g0(f,!S||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let g=Vn(),b;if(e){let A=typeof e=="string"?Ui(e):e;Qt(v==="/"||((l=A.pathname)==null?void 0:l.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=g;let x=b.pathname||"/",R=x;if(v!=="/"){let A=v.replace(/^\//,"").split("/");R="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=i0(o,{pathname:R});En(S||_!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),En(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=eS(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:ga([v,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?v:ga([v,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,n,i);return e&&y?de.createElement(Ks.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},y):y}function Jx(){let o=iS(),e=Gx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),n=o instanceof Error?o.stack:null,i="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:i},c={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",o),d=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:c},"ErrorBoundary")," or"," ",de.createElement("code",{style:c},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:l},n):null,d)}var Qx=de.createElement(Jx,null),Zx=class extends de.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,e){return e.location!==o.location||e.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:e.error,location:e.location,revalidation:o.revalidation||e.revalidation}}componentDidCatch(o,e){console.error("React Router caught the following error during render",o,e)}render(){return this.state.error!==void 0?de.createElement(Ea.Provider,{value:this.props.routeContext},de.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kx({routeContext:o,match:e,children:n}){let i=de.useContext(Oo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Ea.Provider,{value:o},n)}function eS(o,e=[],n=null,i=null){if(o==null){if(!n)return null;if(n.errors)o=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)o=n.matches;else return null}let l=o,c=n==null?void 0:n.errors;if(c!=null){let m=l.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);Qt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,p=-1;if(n)for(let m=0;m<l.length;m++){let f=l[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(p=m),f.route.id){let{loaderData:v,errors:S}=n,g=f.route.loader&&!v.hasOwnProperty(f.route.id)&&(!S||S[f.route.id]===void 0);if(f.route.lazy||g){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,f,v)=>{let S,g=!1,b=null,x=null;n&&(S=c&&f.route.id?c[f.route.id]:void 0,b=f.route.errorElement||Qx,d&&(p<0&&v===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,x=null):p===v&&(g=!0,x=f.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,v+1)),_=()=>{let y;return S?y=b:g?y=x:f.route.Component?y=de.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=m,de.createElement(Kx,{match:f,routeContext:{outlet:m,matches:R,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?de.createElement(Zx,{location:n.location,revalidation:n.revalidation,component:b,error:S,children:_(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):_()},null)}function Qf(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tS(o){let e=de.useContext(Oo);return Qt(e,Qf(o)),e}function rS(o){let e=de.useContext(lu);return Qt(e,Qf(o)),e}function nS(o){let e=de.useContext(Ea);return Qt(e,Qf(o)),e}function Zf(o){let e=nS(o),n=e.matches[e.matches.length-1];return Qt(n.route.id,`${o} can only be used on routes that contain a unique "id"`),n.route.id}function aS(){return Zf("useRouteId")}function iS(){var o;let e=de.useContext(Jf),n=rS("useRouteError"),i=Zf("useRouteError");return e!==void 0?e:(o=n.errors)==null?void 0:o[i]}function oS(){let{router:o}=tS("useNavigate"),e=Zf("useNavigate"),n=de.useRef(!1);return f0(()=>{n.current=!0}),de.useCallback(async(i,l={})=>{En(n.current,h0),n.current&&(typeof i=="number"?o.navigate(i):await o.navigate(i,{fromRouteId:e,...l}))},[o,e])}var e_={};function g0(o,e,n){!e&&!e_[o]&&(e_[o]=!0,En(!1,n))}de.memo(sS);function sS({routes:o,future:e,state:n}){return m0(o,void 0,n,e)}function v0(o){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lS({basename:o="/",children:e=null,location:n,navigationType:i="POP",navigator:l,static:c=!1}){Qt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=o.replace(/^\/*/,"/"),p=de.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof n=="string"&&(n=Ui(n));let{pathname:m="/",search:f="",hash:v="",state:S=null,key:g="default"}=n,b=de.useMemo(()=>{let x=ya(m,d);return x==null?null:{location:{pathname:x,search:f,hash:v,state:S,key:g},navigationType:i}},[d,m,f,v,S,g,i]);return En(b!=null,`<Router basename="${d}"> is not able to match the URL "${m}${f}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:de.createElement(Hn.Provider,{value:p},de.createElement(Ks.Provider,{children:e,value:b}))}function cS({children:o,location:e}){return $x(ef(o),e)}function ef(o,e=[]){let n=[];return de.Children.forEach(o,(i,l)=>{if(!de.isValidElement(i))return;let c=[...e,l];if(i.type===de.Fragment){n.push.apply(n,ef(i.props.children,c));return}Qt(i.type===v0,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=ef(i.props.children,c)),n.push(d)}),n}var jc="get",Xc="application/x-www-form-urlencoded";function cu(o){return o!=null&&typeof o.tagName=="string"}function uS(o){return cu(o)&&o.tagName.toLowerCase()==="button"}function dS(o){return cu(o)&&o.tagName.toLowerCase()==="form"}function hS(o){return cu(o)&&o.tagName.toLowerCase()==="input"}function fS(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function pS(o,e){return o.button===0&&(!e||e==="_self")&&!fS(o)}var vc=null;function mS(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var gS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _h(o){return o!=null&&!gS.has(o)?(En(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xc}"`),null):o}function vS(o,e){let n,i,l,c,d;if(dS(o)){let p=o.getAttribute("action");i=p?ya(p,e):null,n=o.getAttribute("method")||jc,l=_h(o.getAttribute("enctype"))||Xc,c=new FormData(o)}else if(uS(o)||hS(o)&&(o.type==="submit"||o.type==="image")){let p=o.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=o.getAttribute("formaction")||p.getAttribute("action");if(i=m?ya(m,e):null,n=o.getAttribute("formmethod")||p.getAttribute("method")||jc,l=_h(o.getAttribute("formenctype"))||_h(p.getAttribute("enctype"))||Xc,c=new FormData(p,o),!mS()){let{name:f,type:v,value:S}=o;if(v==="image"){let g=f?`${f}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else f&&c.append(f,S)}}else{if(cu(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=jc,i=null,l=Xc,d=o}return c&&l==="text/plain"&&(d=c,c=void 0),{action:i,method:n.toLowerCase(),encType:l,formData:c,body:d}}function Kf(o,e){if(o===!1||o===null||typeof o>"u")throw new Error(e)}async function _S(o,e){if(o.id in e)return e[o.id];try{let n=await import(o.module);return e[o.id]=n,n}catch(n){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yS(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function bS(o,e,n){let i=await Promise.all(o.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await _S(c,n);return d.links?d.links():[]}return[]}));return ES(i.flat(1).filter(yS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t_(o,e,n,i,l,c){let d=(m,f)=>n[f]?m.route.id!==n[f].route.id:!0,p=(m,f)=>{var v;return n[f].pathname!==m.pathname||((v=n[f].route.path)==null?void 0:v.endsWith("*"))&&n[f].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,f)=>d(m,f)||p(m,f)):c==="data"?e.filter((m,f)=>{var v;let S=i.routes[m.route.id];if(!S||!S.hasLoader)return!1;if(d(m,f)||p(m,f))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(o,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xS(o,e,{includeHydrateFallback:n}={}){return SS(o.map(i=>{let l=e.routes[i.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function SS(o){return[...new Set(o)]}function MS(o){let e={},n=Object.keys(o).sort();for(let i of n)e[i]=o[i];return e}function ES(o,e){let n=new Set;return new Set(e),o.reduce((i,l)=>{let c=JSON.stringify(MS(l));return n.has(c)||(n.add(c),i.push({key:c,link:l})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wS=new Set([100,101,204,205]);function TS(o,e){let n=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return n.pathname==="/"?n.pathname="_root.data":e&&ya(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function _0(){let o=de.useContext(Oo);return Kf(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function AS(){let o=de.useContext(lu);return Kf(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ep=de.createContext(void 0);ep.displayName="FrameworkContext";function y0(){let o=de.useContext(ep);return Kf(o,"You must render this element inside a <HydratedRouter> element"),o}function CS(o,e){let n=de.useContext(ep),[i,l]=de.useState(!1),[c,d]=de.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:f,onMouseLeave:v,onTouchStart:S}=e,g=de.useRef(null);de.useEffect(()=>{if(o==="render"&&d(!0),o==="viewport"){let R=y=>{y.forEach(A=>{d(A.isIntersecting)})},_=new IntersectionObserver(R,{threshold:.5});return g.current&&_.observe(g.current),()=>{_.disconnect()}}},[o]),de.useEffect(()=>{if(i){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[i]);let b=()=>{l(!0)},x=()=>{l(!1),d(!1)};return n?o!=="intent"?[c,g,{}]:[c,g,{onFocus:Os(p,b),onBlur:Os(m,x),onMouseEnter:Os(f,b),onMouseLeave:Os(v,x),onTouchStart:Os(S,b)}]:[!1,g,{}]}function Os(o,e){return n=>{o&&o(n),n.defaultPrevented||e(n)}}function RS({page:o,...e}){let{router:n}=_0(),i=de.useMemo(()=>i0(n.routes,o,n.basename),[n.routes,o,n.basename]);return i?de.createElement(NS,{page:o,matches:i,...e}):null}function PS(o){let{manifest:e,routeModules:n}=y0(),[i,l]=de.useState([]);return de.useEffect(()=>{let c=!1;return bS(o,e,n).then(d=>{c||l(d)}),()=>{c=!0}},[o,e,n]),i}function NS({page:o,matches:e,...n}){let i=Vn(),{manifest:l,routeModules:c}=y0(),{basename:d}=_0(),{loaderData:p,matches:m}=AS(),f=de.useMemo(()=>t_(o,e,m,l,i,"data"),[o,e,m,l,i]),v=de.useMemo(()=>t_(o,e,m,l,i,"assets"),[o,e,m,l,i]),S=de.useMemo(()=>{if(o===i.pathname+i.search+i.hash)return[];let x=new Set,R=!1;if(e.forEach(y=>{var A;let D=l.routes[y.route.id];!D||!D.hasLoader||(!f.some(N=>N.route.id===y.route.id)&&y.route.id in p&&(A=c[y.route.id])!=null&&A.shouldRevalidate||D.hasClientLoader?R=!0:x.add(y.route.id))}),x.size===0)return[];let _=TS(o,d);return R&&x.size>0&&_.searchParams.set("_routes",e.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[_.pathname+_.search]},[d,p,i,l,f,e,o,c]),g=de.useMemo(()=>xS(v,l),[v,l]),b=PS(v);return de.createElement(de.Fragment,null,S.map(x=>de.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),g.map(x=>de.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),b.map(({key:x,link:R})=>de.createElement("link",{key:x,...R})))}function LS(...o){return e=>{o.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var b0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b0&&(window.__reactRouterVersion="7.6.2")}catch{}function IS({basename:o,children:e,window:n}){let i=de.useRef();i.current==null&&(i.current=bx({window:n,v5Compat:!0}));let l=i.current,[c,d]=de.useState({action:l.action,location:l.location}),p=de.useCallback(m=>{de.startTransition(()=>d(m))},[d]);return de.useLayoutEffect(()=>l.listen(p),[l,p]),de.createElement(lS,{basename:o,children:e,location:c.location,navigationType:c.action,navigator:l})}var x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eu=de.forwardRef(function({onClick:o,discover:e="render",prefetch:n="none",relative:i,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:f,viewTransition:v,...S},g){let{basename:b}=de.useContext(Hn),x=typeof m=="string"&&x0.test(m),R,_=!1;if(typeof m=="string"&&x&&(R=m,b0))try{let E=new URL(window.location.href),P=m.startsWith("//")?new URL(E.protocol+m):new URL(m),ue=ya(P.pathname,b);P.origin===E.origin&&ue!=null?m=ue+P.search+P.hash:_=!0}catch{En(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=qx(m,{relative:i}),[A,D,N]=CS(n,S),F=FS(m,{replace:c,state:d,target:p,preventScrollReset:f,relative:i,viewTransition:v});function k(E){o&&o(E),E.defaultPrevented||F(E)}let O=de.createElement("a",{...S,...N,href:R||y,onClick:_||l?o:k,ref:LS(g,D),target:p,"data-discover":!x&&e==="render"?"true":void 0});return A&&!x?de.createElement(de.Fragment,null,O,de.createElement(RS,{page:y})):O});eu.displayName="Link";var US=de.forwardRef(function({"aria-current":o="page",caseSensitive:e=!1,className:n="",end:i=!1,style:l,to:c,viewTransition:d,children:p,...m},f){let v=tl(c,{relative:m.relative}),S=Vn(),g=de.useContext(lu),{navigator:b,basename:x}=de.useContext(Hn),R=g!=null&&VS(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,y=S.pathname,A=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;e||(y=y.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&x&&(A=ya(A,x)||A);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let N=y===_||!i&&y.startsWith(_)&&y.charAt(D)==="/",F=A!=null&&(A===_||!i&&A.startsWith(_)&&A.charAt(_.length)==="/"),k={isActive:N,isPending:F,isTransitioning:R},O=N?o:void 0,E;typeof n=="function"?E=n(k):E=[n,N?"active":null,F?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return de.createElement(eu,{...m,"aria-current":O,className:E,ref:f,style:P,to:c,viewTransition:d},typeof p=="function"?p(k):p)});US.displayName="NavLink";var DS=de.forwardRef(({discover:o="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:l,state:c,method:d=jc,action:p,onSubmit:m,relative:f,preventScrollReset:v,viewTransition:S,...g},b)=>{let x=zS(),R=HS(p,{relative:f}),_=d.toLowerCase()==="get"?"get":"post",y=typeof p=="string"&&x0.test(p),A=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let N=D.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||d;x(N||D.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:l,state:c,relative:f,preventScrollReset:v,viewTransition:S})};return de.createElement("form",{ref:b,method:_,action:R,onSubmit:i?m:A,...g,"data-discover":!y&&o==="render"?"true":void 0})});DS.displayName="Form";function kS(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S0(o){let e=de.useContext(Oo);return Qt(e,kS(o)),e}function FS(o,{target:e,replace:n,state:i,preventScrollReset:l,relative:c,viewTransition:d}={}){let p=p0(),m=Vn(),f=tl(o,{relative:c});return de.useCallback(v=>{if(pS(v,e)){v.preventDefault();let S=n!==void 0?n:$s(m)===$s(f);p(o,{replace:S,state:i,preventScrollReset:l,relative:c,viewTransition:d})}},[m,p,f,n,i,e,o,l,c,d])}var OS=0,BS=()=>`__${String(++OS)}__`;function zS(){let{router:o}=S0("useSubmit"),{basename:e}=de.useContext(Hn),n=aS();return de.useCallback(async(i,l={})=>{let{action:c,method:d,encType:p,formData:m,body:f}=vS(i,e);if(l.navigate===!1){let v=l.fetcherKey||BS();await o.fetch(v,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:f,formMethod:l.method||d,formEncType:l.encType||p,flushSync:l.flushSync})}else await o.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:f,formMethod:l.method||d,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[o,e,n])}function HS(o,{relative:e}={}){let{basename:n}=de.useContext(Hn),i=de.useContext(Ea);Qt(i,"useFormAction must be used inside a RouteContext");let[l]=i.matches.slice(-1),c={...tl(o||".",{relative:e})},d=Vn();if(o==null){c.search=d.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(f=>f==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let f=p.toString();c.search=f?`?${f}`:""}}return(!o||o===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ga([n,c.pathname])),$s(c)}function VS(o,e={}){let n=de.useContext(d0);Qt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=S0("useViewTransitionState"),l=tl(o,{relative:e.relative});if(!n.isTransitioning)return!1;let c=ya(n.currentLocation.pathname,i)||n.currentLocation.pathname,d=ya(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Kc(l.pathname,d)!=null||Kc(l.pathname,c)!=null}[...wS];const GS=()=>{const{pathname:o}=Vn();return de.useEffect(()=>{o==="/"&&window.scrollTo(0,0)},[o]),null},WS=[{id:"home",path:"/"},{id:"services",path:"/"},{id:"philosophy",path:"/"},{id:"work",path:"/projects"},{id:"reviews",path:"/reviews"},{id:"skills",path:"/reviews"},{id:"contact",path:"/contact"}],jS=96;function r_(){const o=window.scrollY+jS;let e="/";for(const{id:n,path:i}of WS){const l=document.getElementById(n);l&&window.scrollY+l.getBoundingClientRect().top<=o&&(e=i)}return e}function XS(){const[o,e]=de.useState(r_);return de.useEffect(()=>{let n=0;const i=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{e(r_())})};i(),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i);const l=new ResizeObserver(i);return l.observe(document.documentElement),()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",i),window.removeEventListener("resize",i),l.disconnect()}},[]),o}const qS=[{path:"/",label:"Home"},{path:"/projects",label:"Work"},{path:"/reviews",label:"Reviews"},{path:"/contact",label:"Contact"}],YS=()=>{const o=Vn(),e=XS(),[n,i]=de.useState(!1),[l,c]=de.useState(!0);return de.useEffect(()=>{i(!1)},[o.pathname]),de.useEffect(()=>{const d=document.querySelector(".hero--3d");if(!d){c(!1);return}const p=()=>{const m=d.getBoundingClientRect().bottom;c(m>48)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[o.pathname]),z.jsx("header",{className:`header${l?" header--dark":""}`,children:z.jsxs("div",{className:"header__inner container",children:[z.jsxs(eu,{to:"/",className:"header__brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[z.jsx("span",{className:"header__brand-name",children:"Taliba Sadiq"}),z.jsx("span",{className:"header__brand-tag",children:"Software Architect & AI Engineer"})]}),z.jsxs("button",{className:`header__burger${n?" header__burger--open":""}`,onClick:()=>i(d=>!d),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[z.jsx("span",{}),z.jsx("span",{}),z.jsx("span",{})]}),z.jsx("nav",{className:`header__nav${n?" header__nav--open":""}`,"aria-label":"Main navigation",children:z.jsx("ul",{className:"header__list",children:qS.map(({path:d,label:p})=>{const m=e===d;return z.jsx("li",{children:z.jsx(eu,{to:d,className:`header__link ${m?"header__link--active":""}`,"aria-current":m?"page":void 0,onClick:()=>{i(!1),d==="/"&&o.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:p})},d)})})})]})})},n_="",$S="https://api.web3forms.com/submit",JS=()=>{const[o,e]=de.useState("idle"),[n,i]=de.useState(""),[l,c]=de.useState(!1),d=de.useCallback(async p=>{if(p.preventDefault(),i(""),!n_.trim()){e("error"),i("Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com).");return}const m=p.currentTarget,f=new FormData(m),v=String(f.get("name")||"").trim(),S=String(f.get("email")||"").trim(),g=String(f.get("company")||"").trim(),b=String(f.get("phone")||"").trim(),x=String(f.get("project_type")||"").trim(),R=String(f.get("timeline")||"").trim(),_=String(f.get("budget")||"").trim(),y=String(f.get("details")||"").trim();if(String(f.get("botcheck")||"").trim())return;if(!v||!S||!y){i("Please fill in your name, email, and project details.");return}const A=[g&&`Company / org: ${g}`,b&&`Phone: ${b}`,x&&`Project type: ${x}`,R&&`Timeline: ${R}`,_&&`Budget / engagement: ${_}`,"","Project details:",y].filter(Boolean).join(`
`);e("sending");try{const D=await fetch($S,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:n_,name:v,email:S,...b?{phone:b}:{},subject:`Portfolio inquiry: ${x||"Project"} (${v})`,message:A})}),N=await D.json().catch(()=>({}));D.ok&&N.success!==!1?(e("success"),m.reset()):(e("error"),i(N.message||"Something went wrong. Please try again in a moment."))}catch{e("error"),i("Network error. Check your connection and try again.")}},[]);return z.jsx("section",{id:"contact",className:"section section--contact contact-section contact-shell reveal","aria-labelledby":"contact-heading",children:z.jsxs("div",{className:"container contact-shell__inner",children:[z.jsxs("header",{className:"contact-shell__intro",children:[z.jsx("p",{className:"contact-shell__eyebrow",children:"Contact"}),z.jsx("h2",{id:"contact-heading",className:"contact-shell__title",children:"Let's build something together"}),z.jsx("p",{className:"contact-shell__lead",children:"Have a product that needs architecture, AI integration, or full-stack development? Tell me what you're working on. I'll reply within one business day."}),z.jsxs("ul",{className:"contact-shell__trust",children:[z.jsx("li",{children:"Specific questions get faster answers"}),z.jsx("li",{children:"Mention in the details if you need an NDA first"}),z.jsx("li",{children:"Project inquiries only (no recruiter blasts)"})]})]}),z.jsx("div",{className:"contact-form-panel",children:o==="success"?z.jsxs("div",{className:"contact-form-panel__success",role:"status",children:[z.jsx("p",{className:"contact-form-panel__success-icon","aria-hidden":"true",children:"✓"}),z.jsx("h3",{className:"contact-form-panel__success-title",children:"Message sent"}),z.jsx("p",{className:"contact-form-panel__success-text",children:"Your note is in my inbox. I'll reply in the same thread."}),z.jsx("button",{type:"button",className:"btn btn--primary contact-form-panel__reset",onClick:()=>e("idle"),children:"Send another message"})]}):z.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Name *"}),z.jsx("input",{className:"contact-form__input",name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your name"})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Email *"}),z.jsx("input",{className:"contact-form__input",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"you@company.com"})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"What are you working on? *"}),z.jsx("textarea",{className:"contact-form__textarea",name:"details",required:!0,rows:5,placeholder:"Stack, goals, constraints, and what done looks like."})]}),!l&&z.jsx("button",{type:"button",className:"contact-form__toggle",onClick:()=>c(!0),children:"+ Add more details (company, timeline, budget…)"}),l&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Company / organization"}),z.jsx("input",{className:"contact-form__input",name:"company",type:"text",autoComplete:"organization",placeholder:"Optional"})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Phone (optional)"}),z.jsx("input",{className:"contact-form__input",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"+1 ..."})]})]}),z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Project type"}),z.jsxs("select",{className:"contact-form__input contact-form__select",name:"project_type",defaultValue:"",children:[z.jsx("option",{value:"",children:"Select..."}),z.jsx("option",{value:"New build: web app",children:"New build: web app"}),z.jsx("option",{value:"New build: marketing site",children:"New build: marketing site"}),z.jsx("option",{value:"New build: mobile app",children:"New build: mobile app"}),z.jsx("option",{value:"New build: mobile & web",children:"New build: mobile & web"}),z.jsx("option",{value:"Refactor / stabilize codebase",children:"Refactor / stabilize codebase"}),z.jsx("option",{value:"Performance / reliability",children:"Performance / reliability"}),z.jsx("option",{value:"Architecture / technical review",children:"Architecture / technical review"}),z.jsx("option",{value:"AI / product integration",children:"AI / product integration"}),z.jsx("option",{value:"Other",children:"Other"})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Ideal timeline"}),z.jsxs("select",{className:"contact-form__input contact-form__select",name:"timeline",defaultValue:"",children:[z.jsx("option",{value:"",children:"Optional"}),z.jsx("option",{value:"Planning phase / TBD",children:"Planning phase / TBD"}),z.jsx("option",{value:"Rush (under 2 weeks)",children:"Rush (under 2 weeks)"}),z.jsx("option",{value:"2-4 weeks",children:"2-4 weeks"}),z.jsx("option",{value:"1-3 months",children:"1-3 months"}),z.jsx("option",{value:"3-6 months",children:"3-6 months"}),z.jsx("option",{value:"6+ months or ongoing",children:"6+ months or ongoing"}),z.jsx("option",{value:"Flexible / open schedule",children:"Flexible / open schedule"})]})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Budget / engagement (optional)"}),z.jsx("input",{className:"contact-form__input",name:"budget",type:"text",placeholder:"e.g. fixed scope, monthly retainer, TBD"})]})]}),z.jsxs("label",{className:"contact-form__hp","aria-hidden":"true",children:[z.jsx("span",{children:"Leave empty"}),z.jsx("input",{type:"text",name:"botcheck",tabIndex:-1,autoComplete:"off"})]}),o==="error"&&n&&z.jsx("p",{className:"contact-form__error",role:"alert",children:n}),z.jsx("button",{type:"submit",className:"btn btn--primary contact-form__submit",disabled:o==="sending",children:o==="sending"?"Sending...":"Send message"})]})})]})})};function QS(){de.useEffect(()=>{const o=document.querySelectorAll(".reveal");if(!o.length)return;const e=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("reveal--visible"),e.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return o.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const ZS={"/projects":"work","/about":"home","/reviews":"reviews","/contact":"contact"};function KS(){const o=Vn(),e=p0();QS();const n=de.useCallback((i,l)=>{const c=document.getElementById(i);c?c.scrollIntoView({behavior:"smooth"}):e(l)},[e]);return de.useLayoutEffect(()=>{var i;const l=ZS[o.pathname];l&&((i=document.getElementById(l))==null||i.scrollIntoView({behavior:"smooth"}))},[o.pathname]),{scrollTo:n}}/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const tp="183",e1=0,a_=1,t1=2,qc=1,r1=2,qs=3,ii=0,Vr=1,pa=2,va=0,No=1,tu=2,i_=3,o_=4,n1=5,Ri=100,a1=101,i1=102,o1=103,s1=104,l1=200,c1=201,u1=202,d1=203,tf=204,rf=205,h1=206,f1=207,p1=208,m1=209,g1=210,v1=211,_1=212,y1=213,b1=214,nf=0,af=1,of=2,Io=3,sf=4,lf=5,cf=6,uf=7,M0=0,x1=1,S1=2,Fn=0,E0=1,w0=2,T0=3,A0=4,C0=5,R0=6,P0=7,N0=300,Ii=301,Uo=302,yh=303,bh=304,uu=306,df=1e3,ma=1001,hf=1002,Er=1003,M1=1004,_c=1005,Rr=1006,xh=1007,Ni=1008,un=1009,L0=1010,I0=1011,Js=1012,rp=1013,Bn=1014,Dn=1015,ba=1016,np=1017,ap=1018,Qs=1020,U0=35902,D0=35899,k0=1021,F0=1022,Mn=1023,xa=1026,Li=1027,O0=1028,ip=1029,Do=1030,op=1031,sp=1033,Yc=33776,$c=33777,Jc=33778,Qc=33779,ff=35840,pf=35841,mf=35842,gf=35843,vf=36196,_f=37492,yf=37496,bf=37488,xf=37489,Sf=37490,Mf=37491,Ef=37808,wf=37809,Tf=37810,Af=37811,Cf=37812,Rf=37813,Pf=37814,Nf=37815,Lf=37816,If=37817,Uf=37818,Df=37819,kf=37820,Ff=37821,Of=36492,Bf=36494,zf=36495,Hf=36283,Vf=36284,Gf=36285,Wf=36286,E1=3200,w1=0,T1=1,ni="",ln="srgb",ko="srgb-linear",ru="linear",It="srgb",go=7680,s_=519,A1=512,C1=513,R1=514,lp=515,P1=516,N1=517,cp=518,L1=519,l_=35044,c_="300 es",kn=2e3,nu=2001;function I1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function U1(){const o=au("canvas");return o.style.display="block",o}const u_={};function d_(...o){const e="THREE."+o.shift();console.log(e,...o)}function B0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function at(...o){o=B0(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...o)}}function Mt(...o){o=B0(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...o)}}function iu(...o){const e=o.join(" ");e in u_||(u_[e]=!0,at(...o))}function D1(o,e,n){return new Promise(function(i,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:i()}}setTimeout(c,n)})}const k1={[nf]:af,[of]:cf,[sf]:uf,[Io]:lf,[af]:nf,[cf]:of,[uf]:sf,[lf]:Io};class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const l=i[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const l=i.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ar=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,jf=180/Math.PI;function rl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ar[o&255]+Ar[o>>8&255]+Ar[o>>16&255]+Ar[o>>24&255]+"-"+Ar[e&255]+Ar[e>>8&255]+"-"+Ar[e>>16&15|64]+Ar[e>>24&255]+"-"+Ar[n&63|128]+Ar[n>>8&255]+"-"+Ar[n>>16&255]+Ar[n>>24&255]+Ar[i&255]+Ar[i>>8&255]+Ar[i>>16&255]+Ar[i>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function F1(o,e){return(o%e+e)%e}function Mh(o,e,n){return(1-n)*o+n*e}function Bs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hr(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,n=0){Bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6],this.y=l[1]*n+l[4]*i+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),l=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*i-d*l+e.x,this.y=c*l+d*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,n=0,i=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=l}static slerpFlat(e,n,i,l,c,d,p){let m=i[l+0],f=i[l+1],v=i[l+2],S=i[l+3],g=c[d+0],b=c[d+1],x=c[d+2],R=c[d+3];if(S!==R||m!==g||f!==b||v!==x){let _=m*g+f*b+v*x+S*R;_<0&&(g=-g,b=-b,x=-x,R=-R,_=-_);let y=1-p;if(_<.9995){const A=Math.acos(_),D=Math.sin(A);y=Math.sin(y*A)/D,p=Math.sin(p*A)/D,m=m*y+g*p,f=f*y+b*p,v=v*y+x*p,S=S*y+R*p}else{m=m*y+g*p,f=f*y+b*p,v=v*y+x*p,S=S*y+R*p;const A=1/Math.sqrt(m*m+f*f+v*v+S*S);m*=A,f*=A,v*=A,S*=A}}e[n]=m,e[n+1]=f,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,i,l,c,d){const p=i[l],m=i[l+1],f=i[l+2],v=i[l+3],S=c[d],g=c[d+1],b=c[d+2],x=c[d+3];return e[n]=p*x+v*S+m*b-f*g,e[n+1]=m*x+v*g+f*S-p*b,e[n+2]=f*x+v*b+p*g-m*S,e[n+3]=v*x-p*S-m*g-f*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,l){return this._x=e,this._y=n,this._z=i,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,f=p(i/2),v=p(l/2),S=p(c/2),g=m(i/2),b=m(l/2),x=m(c/2);switch(d){case"XYZ":this._x=g*v*S+f*b*x,this._y=f*b*S-g*v*x,this._z=f*v*x+g*b*S,this._w=f*v*S-g*b*x;break;case"YXZ":this._x=g*v*S+f*b*x,this._y=f*b*S-g*v*x,this._z=f*v*x-g*b*S,this._w=f*v*S+g*b*x;break;case"ZXY":this._x=g*v*S-f*b*x,this._y=f*b*S+g*v*x,this._z=f*v*x+g*b*S,this._w=f*v*S-g*b*x;break;case"ZYX":this._x=g*v*S-f*b*x,this._y=f*b*S+g*v*x,this._z=f*v*x-g*b*S,this._w=f*v*S+g*b*x;break;case"YZX":this._x=g*v*S+f*b*x,this._y=f*b*S+g*v*x,this._z=f*v*x-g*b*S,this._w=f*v*S-g*b*x;break;case"XZY":this._x=g*v*S-f*b*x,this._y=f*b*S-g*v*x,this._z=f*v*x+g*b*S,this._w=f*v*S+g*b*x;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,l=Math.sin(i);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],l=n[4],c=n[8],d=n[1],p=n[5],m=n[9],f=n[2],v=n[6],S=n[10],g=i+p+S;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-f)*b,this._z=(d-l)*b}else if(i>p&&i>S){const b=2*Math.sqrt(1+i-p-S);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+f)/b}else if(p>S){const b=2*Math.sqrt(1+p-i-S);this._w=(c-f)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+S-i-p);this._w=(d-l)/b,this._x=(c+f)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const l=Math.min(1,n/i);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,l=e._y,c=e._z,d=e._w,p=n._x,m=n._y,f=n._z,v=n._w;return this._x=i*v+d*p+l*f-c*m,this._y=l*v+d*m+c*p-i*f,this._z=c*v+d*f+i*m-l*p,this._w=d*v-i*p-l*m-c*f,this._onChangeCallback(),this}slerp(e,n){let i=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(i=-i,l=-l,c=-c,d=-d,p=-p);let m=1-n;if(p<.9995){const f=Math.acos(p),v=Math.sin(f);m=Math.sin(m*f)/v,n=Math.sin(n*f)/v,this._x=this._x*m+i*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this._onChangeCallback()}else this._x=this._x*m+i*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),l=Math.sqrt(1-i),c=Math.sqrt(i);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(h_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*i+c[6]*l,this.y=c[1]*n+c[4]*i+c[7]*l,this.z=c[2]*n+c[5]*i+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,l=this.z,c=e.elements,d=1/(c[3]*n+c[7]*i+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*i+c[8]*l+c[12])*d,this.y=(c[1]*n+c[5]*i+c[9]*l+c[13])*d,this.z=(c[2]*n+c[6]*i+c[10]*l+c[14])*d,this}applyQuaternion(e){const n=this.x,i=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,f=2*(d*l-p*i),v=2*(p*n-c*l),S=2*(c*i-d*n);return this.x=n+m*f+d*S-p*v,this.y=i+m*v+p*f-c*S,this.z=l+m*S+c*v-d*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*i+c[8]*l,this.y=c[1]*n+c[5]*i+c[9]*l,this.z=c[2]*n+c[6]*i+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,l=e.y,c=e.z,d=n.x,p=n.y,m=n.z;return this.x=l*m-c*p,this.y=c*d-i*m,this.z=i*p-l*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,l=this.z-e.z;return n*n+i*i+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const l=Math.sin(n)*e;return this.x=l*Math.sin(i),this.y=Math.cos(n)*e,this.z=l*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new ne,h_=new zo;class lt{constructor(e,n,i,l,c,d,p,m,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,l,c,d,p,m,f)}set(e,n,i,l,c,d,p,m,f){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=n,v[4]=c,v[5]=m,v[6]=i,v[7]=d,v[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,l=n.elements,c=this.elements,d=i[0],p=i[3],m=i[6],f=i[1],v=i[4],S=i[7],g=i[2],b=i[5],x=i[8],R=l[0],_=l[3],y=l[6],A=l[1],D=l[4],N=l[7],F=l[2],k=l[5],O=l[8];return c[0]=d*R+p*A+m*F,c[3]=d*_+p*D+m*k,c[6]=d*y+p*N+m*O,c[1]=f*R+v*A+S*F,c[4]=f*_+v*D+S*k,c[7]=f*y+v*N+S*O,c[2]=g*R+b*A+x*F,c[5]=g*_+b*D+x*k,c[8]=g*y+b*N+x*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8];return n*d*v-n*p*f-i*c*v+i*p*m+l*c*f-l*d*m}invert(){const e=this.elements,n=e[0],i=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8],S=v*d-p*f,g=p*m-v*c,b=f*c-d*m,x=n*S+i*g+l*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/x;return e[0]=S*R,e[1]=(l*f-v*i)*R,e[2]=(p*i-l*d)*R,e[3]=g*R,e[4]=(v*n-l*m)*R,e[5]=(l*c-p*n)*R,e[6]=b*R,e[7]=(i*m-f*n)*R,e[8]=(d*n-i*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,l,c,d,p){const m=Math.cos(c),f=Math.sin(c);return this.set(i*m,i*f,-i*(m*d+f*p)+d+e,-l*f,l*m,-l*(-f*d+m*p)+p+n,0,0,1),this}scale(e,n){return this.premultiply(wh.makeScale(e,n)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,n){return this.premultiply(wh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let l=0;l<9;l++)if(n[l]!==i[l])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new lt,f_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O1(){const o={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Lo(l.r),l.g=Lo(l.g),l.b=Lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ni?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return iu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return iu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[ko]:{primaries:e,whitePoint:i,transfer:ru,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:It,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),o}const bt=O1();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vo;class B1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vo===void 0&&(vo=au("canvas")),vo.width=e.width,vo.height=e.height;const l=vo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),i=vo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=au("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const l=i.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return i.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_a(n[i]/255)*255):n[i]=_a(n[i]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z1=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Th(l[d].image)):c.push(Th(l[d]))}else c=Th(l);i.url=c}return n||(e.images[this.uuid]=i),i}}function Th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?B1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let H1=0;const Ah=new ne;class Lr extends Bo{constructor(e=Lr.DEFAULT_IMAGE,n=Lr.DEFAULT_MAPPING,i=ma,l=ma,c=Rr,d=Ni,p=Mn,m=un,f=Lr.DEFAULT_ANISOTROPY,v=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=rl(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=f,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&i&&l.isVector2&&i.isVector2||l&&i&&l.isVector3&&i.isVector3||l&&i&&l.isMatrix3&&i.isMatrix3?l.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lr.DEFAULT_IMAGE=null;Lr.DEFAULT_MAPPING=N0;Lr.DEFAULT_ANISOTROPY=1;class or{constructor(e=0,n=0,i=0,l=1){or.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,l){return this.x=e,this.y=n,this.z=i,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*i+d[8]*l+d[12]*c,this.y=d[1]*n+d[5]*i+d[9]*l+d[13]*c,this.z=d[2]*n+d[6]*i+d[10]*l+d[14]*c,this.w=d[3]*n+d[7]*i+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,l,c;const d=e.elements,p=d[0],m=d[4],f=d[8],v=d[1],S=d[5],g=d[9],b=d[2],x=d[6],R=d[10];if(Math.abs(m-v)<.01&&Math.abs(f-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(f+b)<.1&&Math.abs(g+x)<.1&&Math.abs(p+S+R-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(p+1)/2,A=(S+1)/2,D=(R+1)/2,N=(m+v)/4,F=(f+b)/4,k=(g+x)/4;return y>A&&y>D?y<.01?(i=0,l=.707106781,c=.707106781):(i=Math.sqrt(y),l=N/i,c=F/i):A>D?A<.01?(i=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),i=N/l,c=k/l):D<.01?(i=.707106781,l=.707106781,c=0):(c=Math.sqrt(D),i=F/c,l=k/c),this.set(i,l,c,n),this}let _=Math.sqrt((x-g)*(x-g)+(f-b)*(f-b)+(v-m)*(v-m));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(f-b)/_,this.z=(v-m)/_,this.w=Math.acos((p+S+R-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V1 extends Bo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new or(0,0,e,n),this.scissorTest=!1,this.viewport=new or(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:i.depth},c=new Lr(l),d=i.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=i,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends V1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z0 extends Lr{constructor(e=null,n=1,i=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:l},this.magFilter=Er,this.minFilter=Er,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G1 extends Lr{constructor(e=null,n=1,i=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:l},this.magFilter=Er,this.minFilter=Er,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e,n,i,l,c,d,p,m,f,v,S,g,b,x,R,_){tr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,l,c,d,p,m,f,v,S,g,b,x,R,_)}set(e,n,i,l,c,d,p,m,f,v,S,g,b,x,R,_){const y=this.elements;return y[0]=e,y[4]=n,y[8]=i,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=f,y[6]=v,y[10]=S,y[14]=g,y[3]=b,y[7]=x,y[11]=R,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tr().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,l=1/_o.setFromMatrixColumn(e,0).length(),c=1/_o.setFromMatrixColumn(e,1).length(),d=1/_o.setFromMatrixColumn(e,2).length();return n[0]=i[0]*l,n[1]=i[1]*l,n[2]=i[2]*l,n[3]=0,n[4]=i[4]*c,n[5]=i[5]*c,n[6]=i[6]*c,n[7]=0,n[8]=i[8]*d,n[9]=i[9]*d,n[10]=i[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,l=e.y,c=e.z,d=Math.cos(i),p=Math.sin(i),m=Math.cos(l),f=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=d*v,b=d*S,x=p*v,R=p*S;n[0]=m*v,n[4]=-m*S,n[8]=f,n[1]=b+x*f,n[5]=g-R*f,n[9]=-p*m,n[2]=R-g*f,n[6]=x+b*f,n[10]=d*m}else if(e.order==="YXZ"){const g=m*v,b=m*S,x=f*v,R=f*S;n[0]=g+R*p,n[4]=x*p-b,n[8]=d*f,n[1]=d*S,n[5]=d*v,n[9]=-p,n[2]=b*p-x,n[6]=R+g*p,n[10]=d*m}else if(e.order==="ZXY"){const g=m*v,b=m*S,x=f*v,R=f*S;n[0]=g-R*p,n[4]=-d*S,n[8]=x+b*p,n[1]=b+x*p,n[5]=d*v,n[9]=R-g*p,n[2]=-d*f,n[6]=p,n[10]=d*m}else if(e.order==="ZYX"){const g=d*v,b=d*S,x=p*v,R=p*S;n[0]=m*v,n[4]=x*f-b,n[8]=g*f+R,n[1]=m*S,n[5]=R*f+g,n[9]=b*f-x,n[2]=-f,n[6]=p*m,n[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*f,x=p*m,R=p*f;n[0]=m*v,n[4]=R-g*S,n[8]=x*S+b,n[1]=S,n[5]=d*v,n[9]=-p*v,n[2]=-f*v,n[6]=b*S+x,n[10]=g-R*S}else if(e.order==="XZY"){const g=d*m,b=d*f,x=p*m,R=p*f;n[0]=m*v,n[4]=-S,n[8]=f*v,n[1]=g*S+R,n[5]=d*v,n[9]=b*S-x,n[2]=x*S-b,n[6]=p*v,n[10]=R*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,j1)}lookAt(e,n,i){const l=this.elements;return Jr.subVectors(e,n),Jr.lengthSq()===0&&(Jr.z=1),Jr.normalize(),Qa.crossVectors(i,Jr),Qa.lengthSq()===0&&(Math.abs(i.z)===1?Jr.x+=1e-4:Jr.z+=1e-4,Jr.normalize(),Qa.crossVectors(i,Jr)),Qa.normalize(),yc.crossVectors(Jr,Qa),l[0]=Qa.x,l[4]=yc.x,l[8]=Jr.x,l[1]=Qa.y,l[5]=yc.y,l[9]=Jr.y,l[2]=Qa.z,l[6]=yc.z,l[10]=Jr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,l=n.elements,c=this.elements,d=i[0],p=i[4],m=i[8],f=i[12],v=i[1],S=i[5],g=i[9],b=i[13],x=i[2],R=i[6],_=i[10],y=i[14],A=i[3],D=i[7],N=i[11],F=i[15],k=l[0],O=l[4],E=l[8],P=l[12],ue=l[1],V=l[5],J=l[9],se=l[13],le=l[2],re=l[6],U=l[10],H=l[14],ce=l[3],_e=l[7],L=l[11],Q=l[15];return c[0]=d*k+p*ue+m*le+f*ce,c[4]=d*O+p*V+m*re+f*_e,c[8]=d*E+p*J+m*U+f*L,c[12]=d*P+p*se+m*H+f*Q,c[1]=v*k+S*ue+g*le+b*ce,c[5]=v*O+S*V+g*re+b*_e,c[9]=v*E+S*J+g*U+b*L,c[13]=v*P+S*se+g*H+b*Q,c[2]=x*k+R*ue+_*le+y*ce,c[6]=x*O+R*V+_*re+y*_e,c[10]=x*E+R*J+_*U+y*L,c[14]=x*P+R*se+_*H+y*Q,c[3]=A*k+D*ue+N*le+F*ce,c[7]=A*O+D*V+N*re+F*_e,c[11]=A*E+D*J+N*U+F*L,c[15]=A*P+D*se+N*H+F*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],f=e[13],v=e[2],S=e[6],g=e[10],b=e[14],x=e[3],R=e[7],_=e[11],y=e[15],A=m*b-f*g,D=p*b-f*S,N=p*g-m*S,F=d*b-f*v,k=d*g-m*v,O=d*S-p*v;return n*(R*A-_*D+y*N)-i*(x*A-_*F+y*k)+l*(x*D-R*F+y*O)-c*(x*N-R*k+_*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8],S=e[9],g=e[10],b=e[11],x=e[12],R=e[13],_=e[14],y=e[15],A=n*p-i*d,D=n*m-l*d,N=n*f-c*d,F=i*m-l*p,k=i*f-c*p,O=l*f-c*m,E=v*R-S*x,P=v*_-g*x,ue=v*y-b*x,V=S*_-g*R,J=S*y-b*R,se=g*y-b*_,le=A*se-D*J+N*V+F*ue-k*P+O*E;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/le;return e[0]=(p*se-m*J+f*V)*re,e[1]=(l*J-i*se-c*V)*re,e[2]=(R*O-_*k+y*F)*re,e[3]=(g*k-S*O-b*F)*re,e[4]=(m*ue-d*se-f*P)*re,e[5]=(n*se-l*ue+c*P)*re,e[6]=(_*N-x*O-y*D)*re,e[7]=(v*O-g*N+b*D)*re,e[8]=(d*J-p*ue+f*E)*re,e[9]=(i*ue-n*J-c*E)*re,e[10]=(x*k-R*N+y*A)*re,e[11]=(S*N-v*k-b*A)*re,e[12]=(p*P-d*V-m*E)*re,e[13]=(n*V-i*P+l*E)*re,e[14]=(R*D-x*F-_*A)*re,e[15]=(v*F-S*D+g*A)*re,this}scale(e){const n=this.elements,i=e.x,l=e.y,c=e.z;return n[0]*=i,n[4]*=l,n[8]*=c,n[1]*=i,n[5]*=l,n[9]*=c,n[2]*=i,n[6]*=l,n[10]*=c,n[3]*=i,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,l))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),l=Math.sin(n),c=1-i,d=e.x,p=e.y,m=e.z,f=c*d,v=c*p;return this.set(f*d+i,f*p-l*m,f*m+l*p,0,f*p+l*m,v*p+i,v*m-l*d,0,f*m-l*p,v*m+l*d,c*m*m+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,l,c,d){return this.set(1,i,c,0,e,1,d,0,n,l,1,0,0,0,0,1),this}compose(e,n,i){const l=this.elements,c=n._x,d=n._y,p=n._z,m=n._w,f=c+c,v=d+d,S=p+p,g=c*f,b=c*v,x=c*S,R=d*v,_=d*S,y=p*S,A=m*f,D=m*v,N=m*S,F=i.x,k=i.y,O=i.z;return l[0]=(1-(R+y))*F,l[1]=(b+N)*F,l[2]=(x-D)*F,l[3]=0,l[4]=(b-N)*k,l[5]=(1-(g+y))*k,l[6]=(_+A)*k,l[7]=0,l[8]=(x+D)*O,l[9]=(_-A)*O,l[10]=(1-(g+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,i){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return i.set(1,1,1),n.identity(),this;let d=_o.set(l[0],l[1],l[2]).length();const p=_o.set(l[4],l[5],l[6]).length(),m=_o.set(l[8],l[9],l[10]).length();c<0&&(d=-d),yn.copy(this);const f=1/d,v=1/p,S=1/m;return yn.elements[0]*=f,yn.elements[1]*=f,yn.elements[2]*=f,yn.elements[4]*=v,yn.elements[5]*=v,yn.elements[6]*=v,yn.elements[8]*=S,yn.elements[9]*=S,yn.elements[10]*=S,n.setFromRotationMatrix(yn),i.x=d,i.y=p,i.z=m,this}makePerspective(e,n,i,l,c,d,p=kn,m=!1){const f=this.elements,v=2*c/(n-e),S=2*c/(i-l),g=(n+e)/(n-e),b=(i+l)/(i-l);let x,R;if(m)x=c/(d-c),R=d*c/(d-c);else if(p===kn)x=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===nu)x=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return f[0]=v,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=S,f[9]=b,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,l,c,d,p=kn,m=!1){const f=this.elements,v=2/(n-e),S=2/(i-l),g=-(n+e)/(n-e),b=-(i+l)/(i-l);let x,R;if(m)x=1/(d-c),R=d/(d-c);else if(p===kn)x=-2/(d-c),R=-(d+c)/(d-c);else if(p===nu)x=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return f[0]=v,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=S,f[9]=0,f[13]=b,f[2]=0,f[6]=0,f[10]=x,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let l=0;l<16;l++)if(n[l]!==i[l])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _o=new ne,yn=new tr,W1=new ne(0,0,0),j1=new ne(1,1,1),Qa=new ne,yc=new ne,Jr=new ne,m_=new tr,g_=new zo;class Sa{constructor(e=0,n=0,i=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,l=this._order){return this._x=e,this._y=n,this._z=i,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],f=l[5],v=l[9],S=l[2],g=l[6],b=l[10];switch(n){case"XYZ":this._y=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,f)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-d,f)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-gt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,f));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,f),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X1=0;const v_=new ne,yo=new zo,ca=new tr,bc=new ne,zs=new ne,q1=new ne,Y1=new zo,__=new ne(1,0,0),y_=new ne(0,1,0),b_=new ne(0,0,1),x_={type:"added"},$1={type:"removed"},bo={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Ir extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ir.DEFAULT_UP.clone();const e=new ne,n=new Sa,i=new zo,l=new ne(1,1,1);function c(){i.setFromEuler(n,!1)}function d(){n.setFromQuaternion(i,void 0,!1)}n._onChange(c),i._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tr},normalMatrix:{value:new lt}}),this.matrix=new tr,this.matrixWorld=new tr,this.matrixAutoUpdate=Ir.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,n){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bc.copy(e):bc.set(e,n,i);const l=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(zs,bc,this.up):ca.lookAt(bc,zs,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(ca),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),bo.child=e,this.dispatchEvent(bo),bo.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($1),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,l=this.children.length;i<l;i++){const c=this.children[i].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,l=n.length;i<l;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,l=n.length;i<l;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*i-c[8]*l,c[13]+=i-c[1]*n-c[5]*i-c[9]*l,c[14]+=l-c[2]*n-c[6]*i-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,l=n.length;i<l;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let f=0,v=m.length;f<v;f++){const S=m[f];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,f=this.material.length;m<f;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(n){const p=d(e.geometries),m=d(e.materials),f=d(e.textures),v=d(e.images),S=d(e.shapes),g=d(e.skeletons),b=d(e.animations),x=d(e.nodes);p.length>0&&(i.geometries=p),m.length>0&&(i.materials=m),f.length>0&&(i.textures=f),v.length>0&&(i.images=v),S.length>0&&(i.shapes=S),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),x.length>0&&(i.nodes=x)}return i.object=l,i;function d(p){const m=[];for(const f in p){const v=p[f];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const l=e.children[i];this.add(l.clone())}return this}}Ir.DEFAULT_UP=new ne(0,1,0);Ir.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends Ir{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){d=!0;for(const R of e.hand.values()){const _=n.getJointPose(R,i),y=this._getHandJoint(f,R);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=f.joints["index-finger-tip"],S=f.joints["thumb-tip"],g=v.position.distanceTo(S.position),b=.02,x=.005;f.inputState.pinching&&g>b+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=b-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,i),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=n.getPose(e.targetRaySpace,i),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),f!==null&&(f.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ph(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,l=bt.workingColorSpace){return this.r=e,this.g=n,this.b=i,bt.colorSpaceToWorking(this,l),this}setHSL(e,n,i,l=bt.workingColorSpace){if(e=F1(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const c=i<=.5?i*(1+n):i+n-i*n,d=2*i-c;this.r=Ph(d,c,e+1/3),this.g=Ph(d,c,e),this.b=Ph(d,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,n=ln){function i(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=V0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return bt.workingToColorSpace(Cr.copy(this),e),Math.round(gt(Cr.r*255,0,255))*65536+Math.round(gt(Cr.g*255,0,255))*256+Math.round(gt(Cr.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Cr.copy(this),n);const i=Cr.r,l=Cr.g,c=Cr.b,d=Math.max(i,l,c),p=Math.min(i,l,c);let m,f;const v=(p+d)/2;if(p===d)m=0,f=0;else{const S=d-p;switch(f=v<=.5?S/(d+p):S/(2-d-p),d){case i:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-i)/S+2;break;case c:m=(i-l)/S+4;break}m/=6}return e.h=m,e.s=f,e.l=v,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Cr.copy(this),n),e.r=Cr.r,e.g=Cr.g,e.b=Cr.b,e}getStyle(e=ln){bt.workingToColorSpace(Cr.copy(this),e);const n=Cr.r,i=Cr.g,l=Cr.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(l*255)})`}offsetHSL(e,n,i){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+n,Za.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Za),e.getHSL(Sc);const i=Mh(Za.h,Sc.h,n),l=Mh(Za.s,Sc.s,n),c=Mh(Za.l,Sc.l,n);return this.setHSL(i,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*i+c[6]*l,this.g=c[1]*n+c[4]*i+c[7]*l,this.b=c[2]*n+c[5]*i+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cr=new vt;vt.NAMES=V0;class Q1 extends Ir{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const bn=new ne,ua=new ne,Nh=new ne,da=new ne,xo=new ne,So=new ne,S_=new ne,Lh=new ne,Ih=new ne,Uh=new ne,Dh=new or,kh=new or,Fh=new or;class Sn{constructor(e=new ne,n=new ne,i=new ne){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,l){l.subVectors(i,n),bn.subVectors(e,n),l.cross(bn);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,i,l,c){bn.subVectors(l,n),ua.subVectors(i,n),Nh.subVectors(e,n);const d=bn.dot(bn),p=bn.dot(ua),m=bn.dot(Nh),f=ua.dot(ua),v=ua.dot(Nh),S=d*f-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,b=(f*m-p*v)*g,x=(d*v-p*m)*g;return c.set(1-b-x,x,b)}static containsPoint(e,n,i,l){return this.getBarycoord(e,n,i,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,n,i,l,c,d,p,m){return this.getBarycoord(e,n,i,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(p,da.z),m)}static getInterpolatedAttribute(e,n,i,l,c,d){return Dh.setScalar(0),kh.setScalar(0),Fh.setScalar(0),Dh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Dh,c.x),d.addScaledVector(kh,c.y),d.addScaledVector(Fh,c.z),d}static isFrontFacing(e,n,i,l){return bn.subVectors(i,n),ua.subVectors(e,n),bn.cross(ua).dot(l)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,l){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,i,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),bn.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,l,c){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,l,c)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,l=this.b,c=this.c;let d,p;xo.subVectors(l,i),So.subVectors(c,i),Lh.subVectors(e,i);const m=xo.dot(Lh),f=So.dot(Lh);if(m<=0&&f<=0)return n.copy(i);Ih.subVectors(e,l);const v=xo.dot(Ih),S=So.dot(Ih);if(v>=0&&S<=v)return n.copy(l);const g=m*S-v*f;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),n.copy(i).addScaledVector(xo,d);Uh.subVectors(e,c);const b=xo.dot(Uh),x=So.dot(Uh);if(x>=0&&b<=x)return n.copy(c);const R=b*f-m*x;if(R<=0&&f>=0&&x<=0)return p=f/(f-x),n.copy(i).addScaledVector(So,p);const _=v*x-b*S;if(_<=0&&S-v>=0&&b-x>=0)return S_.subVectors(c,l),p=(S-v)/(S-v+(b-x)),n.copy(l).addScaledVector(S_,p);const y=1/(_+R+g);return d=R*y,p=g*y,n.copy(i).addScaledVector(xo,d).addScaledVector(So,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const c=i.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,xn):xn.fromBufferAttribute(c,d),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mc.copy(i.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ec.subVectors(this.max,Hs),Mo.subVectors(e.a,Hs),Eo.subVectors(e.b,Hs),wo.subVectors(e.c,Hs),Ka.subVectors(Eo,Mo),ei.subVectors(wo,Eo),Si.subVectors(Mo,wo);let n=[0,-Ka.z,Ka.y,0,-ei.z,ei.y,0,-Si.z,Si.y,Ka.z,0,-Ka.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-Ka.y,Ka.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!Oh(n,Mo,Eo,wo,Ec)||(n=[1,0,0,0,1,0,0,0,1],!Oh(n,Mo,Eo,wo,Ec))?!1:(wc.crossVectors(Ka,ei),n=[wc.x,wc.y,wc.z],Oh(n,Mo,Eo,wo,Ec))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],xn=new ne,Mc=new nl,Mo=new ne,Eo=new ne,wo=new ne,Ka=new ne,ei=new ne,Si=new ne,Hs=new ne,Ec=new ne,wc=new ne,Mi=new ne;function Oh(o,e,n,i,l){for(let c=0,d=o.length-3;c<=d;c+=3){Mi.fromArray(o,c);const p=l.x*Math.abs(Mi.x)+l.y*Math.abs(Mi.y)+l.z*Math.abs(Mi.z),m=e.dot(Mi),f=n.dot(Mi),v=i.dot(Mi);if(Math.max(-Math.max(m,f,v),Math.min(m,f,v))>p)return!1}return!0}const cr=new ne,Tc=new Bt;let Z1=0;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=l_,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[i+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(e),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cr.fromBufferAttribute(this,n),cr.applyMatrix3(e),this.setXYZ(n,cr.x,cr.y,cr.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cr.fromBufferAttribute(this,n),cr.applyMatrix4(e),this.setXYZ(n,cr.x,cr.y,cr.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cr.fromBufferAttribute(this,n),cr.applyNormalMatrix(e),this.setXYZ(n,cr.x,cr.y,cr.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cr.fromBufferAttribute(this,n),cr.transformDirection(e),this.setXYZ(n,cr.x,cr.y,cr.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Hr(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Hr(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Hr(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Hr(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Hr(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Hr(n,this.array),i=Hr(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,l){return e*=this.itemSize,this.normalized&&(n=Hr(n,this.array),i=Hr(i,this.array),l=Hr(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=l,this}setXYZW(e,n,i,l,c){return e*=this.itemSize,this.normalized&&(n=Hr(n,this.array),i=Hr(i,this.array),l=Hr(l,this.array),c=Hr(c,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class G0 extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W0 extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hn extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const K1=new nl,Vs=new ne,Bh=new ne;class al{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):K1.setFromPoints(e).getCenter(i);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,i.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),l=(i-this.radius)*.5;this.center.addScaledVector(Vs,l/i),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Bh)),this.expandByPoint(Vs.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eM=0;const sn=new tr,zh=new Ir,To=new ne,Qr=new nl,Gs=new nl,br=new ne;class Zr extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?W0:G0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const c=new lt().getNormalMatrix(e);i.applyNormalMatrix(c),i.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,n,i){return sn.makeTranslation(e,n,i),this.applyMatrix4(sn),this}scale(e,n,i){return sn.makeScale(e,n,i),this.applyMatrix4(sn),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];i.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,n.count);for(let l=0;l<i;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,l=n.length;i<l;i++){const c=n[i];Qr.setFromBufferAttribute(c),this.morphTargetsRelative?(br.addVectors(this.boundingBox.min,Qr.min),this.boundingBox.expandByPoint(br),br.addVectors(this.boundingBox.max,Qr.max),this.boundingBox.expandByPoint(br)):(this.boundingBox.expandByPoint(Qr.min),this.boundingBox.expandByPoint(Qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(Qr.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const p=n[c];Gs.setFromBufferAttribute(p),this.morphTargetsRelative?(br.addVectors(Qr.min,Gs.min),Qr.expandByPoint(br),br.addVectors(Qr.max,Gs.max),Qr.expandByPoint(br)):(Qr.expandByPoint(Gs.min),Qr.expandByPoint(Gs.max))}Qr.getCenter(i);let l=0;for(let c=0,d=e.count;c<d;c++)br.fromBufferAttribute(e,c),l=Math.max(l,i.distanceToSquared(br));if(n)for(let c=0,d=n.length;c<d;c++){const p=n[c],m=this.morphTargetsRelative;for(let f=0,v=p.count;f<v;f++)br.fromBufferAttribute(p,f),m&&(To.fromBufferAttribute(e,f),br.add(To)),l=Math.max(l,i.distanceToSquared(br))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<i.count;E++)p[E]=new ne,m[E]=new ne;const f=new ne,v=new ne,S=new ne,g=new Bt,b=new Bt,x=new Bt,R=new ne,_=new ne;function y(E,P,ue){f.fromBufferAttribute(i,E),v.fromBufferAttribute(i,P),S.fromBufferAttribute(i,ue),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,P),x.fromBufferAttribute(c,ue),v.sub(f),S.sub(f),b.sub(g),x.sub(g);const V=1/(b.x*x.y-x.x*b.y);isFinite(V)&&(R.copy(v).multiplyScalar(x.y).addScaledVector(S,-b.y).multiplyScalar(V),_.copy(S).multiplyScalar(b.x).addScaledVector(v,-x.x).multiplyScalar(V),p[E].add(R),p[P].add(R),p[ue].add(R),m[E].add(_),m[P].add(_),m[ue].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let E=0,P=A.length;E<P;++E){const ue=A[E],V=ue.start,J=ue.count;for(let se=V,le=V+J;se<le;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new ne,N=new ne,F=new ne,k=new ne;function O(E){F.fromBufferAttribute(l,E),k.copy(F);const P=p[E];D.copy(P),D.sub(F.multiplyScalar(F.dot(P))).normalize(),N.crossVectors(k,P);const ue=N.dot(m[E])<0?-1:1;d.setXYZW(E,D.x,D.y,D.z,ue)}for(let E=0,P=A.length;E<P;++E){const ue=A[E],V=ue.start,J=ue.count;for(let se=V,le=V+J;se<le;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);const l=new ne,c=new ne,d=new ne,p=new ne,m=new ne,f=new ne,v=new ne,S=new ne;if(e)for(let g=0,b=e.count;g<b;g+=3){const x=e.getX(g+0),R=e.getX(g+1),_=e.getX(g+2);l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,_),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(i,x),m.fromBufferAttribute(i,R),f.fromBufferAttribute(i,_),p.add(v),m.add(v),f.add(v),i.setXYZ(x,p.x,p.y,p.z),i.setXYZ(R,m.x,m.y,m.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let g=0,b=n.count;g<b;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),d.fromBufferAttribute(n,g+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),i.setXYZ(g+0,v.x,v.y,v.z),i.setXYZ(g+1,v.x,v.y,v.z),i.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)br.fromBufferAttribute(e,n),br.normalize(),e.setXYZ(n,br.x,br.y,br.z)}toNonIndexed(){function e(p,m){const f=p.array,v=p.itemSize,S=p.normalized,g=new f.constructor(m.length*v);let b=0,x=0;for(let R=0,_=m.length;R<_;R++){p.isInterleavedBufferAttribute?b=m[R]*p.data.stride+p.offset:b=m[R]*v;for(let y=0;y<v;y++)g[x++]=f[b++]}return new dn(g,v,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,i=this.index.array,l=this.attributes;for(const p in l){const m=l[p],f=e(m,i);n.setAttribute(p,f)}const c=this.morphAttributes;for(const p in c){const m=[],f=c[p];for(let v=0,S=f.length;v<S;v++){const g=f[v],b=e(g,i);m.push(b)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const f=d[p];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const f in m)m[f]!==void 0&&(e[f]=m[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const m in i){const f=i[m];e.data.attributes[m]=f.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const f=this.morphAttributes[m],v=[];for(let S=0,g=f.length;S<g;S++){const b=f[S];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const l=e.attributes;for(const f in l){const v=l[f];this.setAttribute(f,v.clone(n))}const c=e.morphAttributes;for(const f in c){const v=[],S=c[f];for(let g=0,b=S.length;g<b;g++)v.push(S[g].clone(n));this.morphAttributes[f]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let f=0,v=d.length;f<v;f++){const S=d[f];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tM=0;class Ho extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=No,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=rf,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(i):l&&l.isVector3&&i&&i.isVector3?l.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tf&&(i.blendSrc=this.blendSrc),this.blendDst!==rf&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(n){const c=l(e.textures),d=l(e.images);c.length>0&&(i.textures=c),d.length>0&&(i.images=d)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const l=n.length;i=new Array(l);for(let c=0;c!==l;++c)i[c]=n[c].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fa=new ne,Hh=new ne,Ac=new ne,ti=new ne,Vh=new ne,Cc=new ne,Gh=new ne;class dp{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(e))}distanceSqToSegment(e,n,i,l){Hh.copy(e).add(n).multiplyScalar(.5),Ac.copy(n).sub(e).normalize(),ti.copy(this.origin).sub(Hh);const c=e.distanceTo(n)*.5,d=-this.direction.dot(Ac),p=ti.dot(this.direction),m=-ti.dot(Ac),f=ti.lengthSq(),v=Math.abs(1-d*d);let S,g,b,x;if(v>0)if(S=d*m-p,g=d*p-m,x=c*v,S>=0)if(g>=-x)if(g<=x){const R=1/v;S*=R,g*=R,b=S*(S+d*g+2*p)+g*(d*S+g+2*m)+f}else g=c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+f;else g=-c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+f;else g<=-x?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+f):g<=x?(S=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+f):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+f);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Hh).addScaledVector(Ac,g),b}intersectSphere(e,n){fa.subVectors(e.center,this.origin);const i=fa.dot(this.direction),l=fa.dot(fa)-i*i,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=i-d,m=i+d;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,l,c,d,p,m;const f=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,l=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,l=(e.min.x-g.x)*f),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),i>d||c>l||((c>i||isNaN(i))&&(i=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),i>m||p>l)||((p>i||i!==i)&&(i=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(i>=0?i:l,n)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,n,i,l,c){Vh.subVectors(n,e),Cc.subVectors(i,e),Gh.crossVectors(Vh,Cc);let d=this.direction.dot(Gh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ti.subVectors(this.origin,e);const m=p*this.direction.dot(Cc.crossVectors(ti,Cc));if(m<0)return null;const f=p*this.direction.dot(Vh.cross(ti));if(f<0||m+f>d)return null;const v=-p*ti.dot(Gh);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0 extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=M0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const M_=new tr,Ei=new dp,Rc=new al,E_=new ne,Pc=new ne,Nc=new ne,Lc=new ne,Wh=new ne,Ic=new ne,w_=new ne,Uc=new ne;class Ma extends Ir{constructor(e=new Zr,n=new j0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=i.length;l<c;l++){const d=i[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const i=this.geometry,l=i.attributes.position,c=i.morphAttributes.position,d=i.morphTargetsRelative;n.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,f=c.length;m<f;m++){const v=p[m],S=c[m];v!==0&&(Wh.fromBufferAttribute(S,e),d?Ic.addScaledVector(Wh,v):Ic.addScaledVector(Wh.sub(n),v))}n.add(Ic)}return n}raycast(e,n){const i=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(c),Ei.copy(e.ray).recast(e.near),!(Rc.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Rc,E_)===null||Ei.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(M_.copy(c).invert(),Ei.copy(e.ray).applyMatrix4(M_),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ei)))}_computeIntersections(e,n,i){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,f=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let x=0,R=g.length;x<R;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,b.start),D=Math.min(p.count,Math.min(_.start+_.count,b.start+b.count));for(let N=A,F=D;N<F;N+=3){const k=p.getX(N),O=p.getX(N+1),E=p.getX(N+2);l=Dc(this,y,e,i,f,v,S,k,O,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,n.push(l))}}else{const x=Math.max(0,b.start),R=Math.min(p.count,b.start+b.count);for(let _=x,y=R;_<y;_+=3){const A=p.getX(_),D=p.getX(_+1),N=p.getX(_+2);l=Dc(this,d,e,i,f,v,S,A,D,N),l&&(l.faceIndex=Math.floor(_/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let x=0,R=g.length;x<R;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,b.start),D=Math.min(m.count,Math.min(_.start+_.count,b.start+b.count));for(let N=A,F=D;N<F;N+=3){const k=N,O=N+1,E=N+2;l=Dc(this,y,e,i,f,v,S,k,O,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,n.push(l))}}else{const x=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let _=x,y=R;_<y;_+=3){const A=_,D=_+1,N=_+2;l=Dc(this,d,e,i,f,v,S,A,D,N),l&&(l.faceIndex=Math.floor(_/3),n.push(l))}}}}function rM(o,e,n,i,l,c,d,p){let m;if(e.side===Vr?m=i.intersectTriangle(d,c,l,!0,p):m=i.intersectTriangle(l,c,d,e.side===ii,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(o.matrixWorld);const f=n.ray.origin.distanceTo(Uc);return f<n.near||f>n.far?null:{distance:f,point:Uc.clone(),object:o}}function Dc(o,e,n,i,l,c,d,p,m,f){o.getVertexPosition(p,Pc),o.getVertexPosition(m,Nc),o.getVertexPosition(f,Lc);const v=rM(o,e,n,i,Pc,Nc,Lc,w_);if(v){const S=new ne;Sn.getBarycoord(w_,Pc,Nc,Lc,S),l&&(v.uv=Sn.getInterpolatedAttribute(l,p,m,f,S,new Bt)),c&&(v.uv1=Sn.getInterpolatedAttribute(c,p,m,f,S,new Bt)),d&&(v.normal=Sn.getInterpolatedAttribute(d,p,m,f,S,new ne),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:f,normal:new ne,materialIndex:0};Sn.getNormal(Pc,Nc,Lc,g.normal),v.face=g,v.barycoord=S}return v}class nM extends Lr{constructor(e=null,n=1,i=1,l,c,d,p,m,f=Er,v=Er,S,g){super(null,d,p,m,f,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new ne,aM=new ne,iM=new lt;class Ci{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,l){return this.normal.set(e,n,i),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const l=jh.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jh),l=this.normal.dot(i);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(e.start).addScaledVector(i,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iM.getNormalMatrix(e),l=this.coplanarPoint(jh).applyMatrix4(e),c=this.normal.applyMatrix3(i).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new al,oM=new Bt(.5,.5),kc=new ne;class X0{constructor(e=new Ci,n=new Ci,i=new Ci,l=new Ci,c=new Ci,d=new Ci){this.planes=[e,n,i,l,c,d]}set(e,n,i,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(i),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kn,i=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],f=c[3],v=c[4],S=c[5],g=c[6],b=c[7],x=c[8],R=c[9],_=c[10],y=c[11],A=c[12],D=c[13],N=c[14],F=c[15];if(l[0].setComponents(f-d,b-v,y-x,F-A).normalize(),l[1].setComponents(f+d,b+v,y+x,F+A).normalize(),l[2].setComponents(f+p,b+S,y+R,F+D).normalize(),l[3].setComponents(f-p,b-S,y-R,F-D).normalize(),i)l[4].setComponents(m,g,_,N).normalize(),l[5].setComponents(f-m,b-g,y-_,F-N).normalize();else if(l[4].setComponents(f-m,b-g,y-_,F-N).normalize(),n===kn)l[5].setComponents(f+m,b+g,y+_,F+N).normalize();else if(n===nu)l[5].setComponents(m,g,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const n=oM.distanceTo(e.center);return wi.radius=.7071067811865476+n,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const n=this.planes,i=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(i)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const l=n[i];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q0 extends Ho{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new ne,su=new ne,T_=new tr,Ws=new dp,Fc=new al,Xh=new ne,A_=new ne;class sM extends Ir{constructor(e=new Zr,n=new q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let l=1,c=n.count;l<c;l++)ou.fromBufferAttribute(n,l-1),su.fromBufferAttribute(n,l),i[l]=i[l-1],i[l]+=ou.distanceTo(su);e.setAttribute("lineDistance",new hn(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;T_.copy(l).invert(),Ws.copy(e.ray).applyMatrix4(T_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,f=this.isLineSegments?2:1,v=i.index,S=i.attributes.position;if(v!==null){const g=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let x=g,R=b-1;x<R;x+=f){const _=v.getX(x),y=v.getX(x+1),A=Oc(this,e,Ws,m,_,y,x);A&&n.push(A)}if(this.isLineLoop){const x=v.getX(b-1),R=v.getX(g),_=Oc(this,e,Ws,m,x,R,b-1);_&&n.push(_)}}else{const g=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let x=g,R=b-1;x<R;x+=f){const _=Oc(this,e,Ws,m,x,x+1,x);_&&n.push(_)}if(this.isLineLoop){const x=Oc(this,e,Ws,m,b-1,g,b-1);x&&n.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=i.length;l<c;l++){const d=i[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Oc(o,e,n,i,l,c,d){const p=o.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),su.fromBufferAttribute(p,c),n.distanceSqToSegment(ou,su,Xh,A_)>i)return;Xh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Xh);if(!(m<e.near||m>e.far))return{distance:m,point:A_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const C_=new ne,R_=new ne;class lM extends sM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let l=0,c=n.count;l<c;l+=2)C_.fromBufferAttribute(n,l),R_.fromBufferAttribute(n,l+1),i[l]=l===0?0:i[l-1],i[l+1]=i[l]+C_.distanceTo(R_);e.setAttribute("lineDistance",new hn(i,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new tr,Xf=new dp,Bc=new al,zc=new ne;class cM extends Ir{constructor(e=new Zr,n=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;P_.copy(l).invert(),Xf.copy(e.ray).applyMatrix4(P_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,f=i.index,v=i.attributes.position;if(f!==null){const S=Math.max(0,d.start),g=Math.min(f.count,d.start+d.count);for(let b=S,x=g;b<x;b++){const R=f.getX(b);zc.fromBufferAttribute(v,R),N_(zc,R,m,l,e,n,this)}}else{const S=Math.max(0,d.start),g=Math.min(v.count,d.start+d.count);for(let b=S,x=g;b<x;b++)zc.fromBufferAttribute(v,b),N_(zc,b,m,l,e,n,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=i.length;l<c;l++){const d=i[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function N_(o,e,n,i,l,c,d){const p=Xf.distanceSqToPoint(o);if(p<n){const m=new ne;Xf.closestPointToPoint(o,m),m.applyMatrix4(i);const f=l.ray.origin.distanceTo(m);if(f<l.near||f>l.far)return;c.push({distance:f,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class $0 extends Lr{constructor(e=[],n=Ii,i,l,c,d,p,m,f,v){super(e,n,i,l,c,d,p,m,f,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zs extends Lr{constructor(e,n,i=Bn,l,c,d,p=Er,m=Er,f,v=xa,S=1){if(v!==xa&&v!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,l,c,d,p,m,v,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uM extends Zs{constructor(e,n=Bn,i=Ii,l,c,d=Er,p=Er,m,f=xa){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,n,i,l,c,d,p,m,f),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends Lr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends Zr{constructor(e=1,n=1,i=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],f=[],v=[],S=[];let g=0,b=0;x("z","y","x",-1,-1,i,n,e,d,c,0),x("z","y","x",1,-1,i,n,-e,d,c,1),x("x","z","y",1,1,e,i,n,l,d,2),x("x","z","y",1,-1,e,i,-n,l,d,3),x("x","y","z",1,-1,e,n,i,l,c,4),x("x","y","z",-1,-1,e,n,-i,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(f,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(S,2));function x(R,_,y,A,D,N,F,k,O,E,P){const ue=N/O,V=F/E,J=N/2,se=F/2,le=k/2,re=O+1,U=E+1;let H=0,ce=0;const _e=new ne;for(let L=0;L<U;L++){const Q=L*V-se;for(let ge=0;ge<re;ge++){const be=ge*ue-J;_e[R]=be*A,_e[_]=Q*D,_e[y]=le,f.push(_e.x,_e.y,_e.z),_e[R]=0,_e[_]=0,_e[y]=k>0?1:-1,v.push(_e.x,_e.y,_e.z),S.push(ge/O),S.push(1-L/E),H+=1}}for(let L=0;L<E;L++)for(let Q=0;Q<O;Q++){const ge=g+Q+re*L,be=g+Q+re*(L+1),Ne=g+(Q+1)+re*(L+1),Xe=g+(Q+1)+re*L;m.push(ge,be,Xe),m.push(be,Ne,Xe),ce+=6}p.addGroup(b,ce,P),b+=ce,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Zr{constructor(e=1,n=1,i=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:l};const c=e/2,d=n/2,p=Math.floor(i),m=Math.floor(l),f=p+1,v=m+1,S=e/p,g=n/m,b=[],x=[],R=[],_=[];for(let y=0;y<v;y++){const A=y*g-d;for(let D=0;D<f;D++){const N=D*S-c;x.push(N,-A,0),R.push(0,0,1),_.push(D/p),_.push(1-y/m)}}for(let y=0;y<m;y++)for(let A=0;A<p;A++){const D=A+f*y,N=A+f*(y+1),F=A+1+f*(y+1),k=A+1+f*y;b.push(D,N,k),b.push(N,F,k)}this.setIndex(b),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(R,3)),this.setAttribute("uv",new hn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fo(o){const e={};for(const n in o){e[n]={};for(const i in o[n]){const l=o[n][i];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=l.clone():Array.isArray(l)?e[n][i]=l.slice():e[n][i]=l}}return e}function Nr(o){const e={};for(let n=0;n<o.length;n++){const i=Fo(o[n]);for(const l in i)e[l]=i[l]}return e}function dM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Q0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const hM={clone:Fo,merge:Nr};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?n.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[l]={type:"m4",value:c.toArray()}:n.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const l in this.extensions)this.extensions[l]===!0&&(i[l]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mM extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gM extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hc=new ne,Vc=new zo,Ln=new ne;class Z0 extends Ir{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tr,this.projectionMatrix=new tr,this.projectionMatrixInverse=new tr,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Hc,Vc,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new ne,L_=new Bt,I_=new Bt;class cn extends Z0{constructor(e=50,n=1,i=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,n){return this.getViewBounds(e,L_,I_),n.subVectors(I_,L_)}setViewOffset(e,n,i,l,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sh*.5*this.fov)/this.zoom,i=2*n,l=this.aspect*i,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,f=d.fullHeight;c+=d.offsetX*l/m,n-=d.offsetY*i/f,l*=d.width/m,i*=d.height/f}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class K0 extends Z0{constructor(e=-1,n=1,i=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=i-e,d=i+e,p=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=f*this.view.offsetX,d=c+f*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=-90,Co=1;class _M extends Ir{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new cn(Ao,Co,e,n);l.layers=this.layers,this.add(l);const c=new cn(Ao,Co,e,n);c.layers=this.layers,this.add(c);const d=new cn(Ao,Co,e,n);d.layers=this.layers,this.add(d);const p=new cn(Ao,Co,e,n);p.layers=this.layers,this.add(p);const m=new cn(Ao,Co,e,n);m.layers=this.layers,this.add(m);const f=new cn(Ao,Co,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,l,c,d,p,m]=n;for(const f of n)this.remove(f);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,f,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const R=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(i,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(i,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(i,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),i.texture.generateMipmaps=R,e.setRenderTarget(i,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(S,g,b),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class yM extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function U_(o,e,n,i){const l=bM(i);switch(n){case k0:return o*e;case O0:return o*e/l.components*l.byteLength;case ip:return o*e/l.components*l.byteLength;case Do:return o*e*2/l.components*l.byteLength;case op:return o*e*2/l.components*l.byteLength;case F0:return o*e*3/l.components*l.byteLength;case Mn:return o*e*4/l.components*l.byteLength;case sp:return o*e*4/l.components*l.byteLength;case Yc:case $c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(o,16)*Math.max(e,8)/4;case ff:case mf:return Math.max(o,8)*Math.max(e,8)/2;case vf:case _f:case bf:case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yf:case Sf:case Mf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Of:case Bf:case zf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hf:case Vf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gf:case Wf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bM(o){switch(o){case un:case L0:return{byteLength:1,components:1};case Js:case I0:case ba:return{byteLength:2,components:1};case np:case ap:return{byteLength:2,components:4};case Bn:case rp:case Dn:return{byteLength:4,components:1};case U0:case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function ey(){let o=null,e=!1,n=null,i=null;function l(c,d){n(c,d),i=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(i=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function xM(o){const e=new WeakMap;function n(p,m){const f=p.array,v=p.usage,S=f.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,f,v),p.onUploadCallback();let b;if(f instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)b=o.HALF_FLOAT;else if(f instanceof Uint16Array)p.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)b=o.SHORT;else if(f instanceof Uint32Array)b=o.UNSIGNED_INT;else if(f instanceof Int32Array)b=o.INT;else if(f instanceof Int8Array)b=o.BYTE;else if(f instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:p.version,size:S}}function i(p,m,f){const v=m.array,S=m.updateRanges;if(o.bindBuffer(f,p),S.length===0)o.bufferSubData(f,0,v);else{S.sort((b,x)=>b.start-x.start);let g=0;for(let b=1;b<S.length;b++){const x=S[g],R=S[b];R.start<=x.start+x.count+1?x.count=Math.max(x.count,R.start+R.count-x.start):(++g,S[g]=R)}S.length=g+1;for(let b=0,x=S.length;b<x;b++){const R=S[b];o.bufferSubData(f,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const f=e.get(p);if(f===void 0)e.set(p,n(p,m));else if(f.version<p.version){if(f.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,p,m),f.version=p.version}}return{get:l,remove:c,update:d}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
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
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
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
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jM=`#define PI 3.141592653589793
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
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qM=`vec3 transformedNormal = objectNormal;
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
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
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
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
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
#endif`,bE=`uniform sampler2D dfgLUT;
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
}`,xE=`
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NE=`#if defined( USE_POINTS_UV )
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
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
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
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ow=`float getShadowMask() {
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
}`,sw=`#ifdef USE_SKINNING
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
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
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
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cw=`#if DEPTH_PACKING == 3200
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
}`,Rw=`#define DISTANCE
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
}`,Iw=`uniform float scale;
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
}`,Dw=`#include <common>
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
}`,Bw=`#define MATCAP
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
}`,zw=`#define MATCAP
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
}`,Ww=`#define PHONG
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
}`,jw=`#define STANDARD
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
}`,Yw=`#define TOON
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
}`,$w=`uniform float size;
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
}`,Kw=`uniform float rotation;
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
}`,ct={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:wM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:PM,batching_vertex:NM,begin_vertex:LM,beginnormal_vertex:IM,bsdfs:UM,iridescence_fragment:DM,bumpmap_pars_fragment:kM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:zM,color_fragment:HM,color_pars_fragment:VM,color_pars_vertex:GM,color_vertex:WM,common:jM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:qM,displacementmap_pars_vertex:YM,displacementmap_vertex:$M,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:rE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:pE,envmap_vertex:aE,fog_vertex:iE,fog_pars_vertex:oE,fog_fragment:sE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:hE,lights_pars_begin:fE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:_E,lights_physical_fragment:yE,lights_physical_pars_fragment:bE,lights_fragment_begin:xE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:CE,map_pars_fragment:RE,map_particle_fragment:PE,map_particle_pars_fragment:NE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:IE,morphinstance_vertex:UE,morphcolor_vertex:DE,morphnormal_vertex:kE,morphtarget_pars_vertex:FE,morphtarget_vertex:OE,normal_fragment_begin:BE,normal_fragment_maps:zE,normal_pars_fragment:HE,normal_pars_vertex:VE,normal_vertex:GE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:$E,packing:JE,premultiplied_alpha_fragment:QE,project_vertex:ZE,dithering_fragment:KE,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:aw,shadowmap_vertex:iw,shadowmask_pars_fragment:ow,skinbase_vertex:sw,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:hw,tonemapping_fragment:fw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:vw,uv_pars_vertex:_w,uv_vertex:yw,worldpos_vertex:bw,background_vert:xw,background_frag:Sw,backgroundCube_vert:Mw,backgroundCube_frag:Ew,cube_vert:ww,cube_frag:Tw,depth_vert:Aw,depth_frag:Cw,distance_vert:Rw,distance_frag:Pw,equirect_vert:Nw,equirect_frag:Lw,linedashed_vert:Iw,linedashed_frag:Uw,meshbasic_vert:Dw,meshbasic_frag:kw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:Bw,meshmatcap_frag:zw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:Ww,meshphysical_vert:jw,meshphysical_frag:Xw,meshtoon_vert:qw,meshtoon_frag:Yw,points_vert:$w,points_frag:Jw,shadow_vert:Qw,shadow_frag:Zw,sprite_vert:Kw,sprite_frag:eT},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Un={basic:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Nr([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Nr([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Nr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Nr([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Nr([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Nr([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Nr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Nr([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Nr([Ie.common,Ie.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Nr([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Un.physical={uniforms:Nr([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Gc={r:0,b:0,g:0},Ti=new Sa,tT=new tr;function rT(o,e,n,i,l,c){const d=new vt(0);let p=l===!0?0:1,m,f,v=null,S=0,g=null;function b(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const N=A.backgroundBlurriness>0;D=e.get(D,N)}return D}function x(A){let D=!1;const N=b(A);N===null?_(d,p):N&&N.isColor&&(_(N,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(o.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function R(A,D){const N=b(D);N&&(N.isCubeTexture||N.mapping===uu)?(f===void 0&&(f=new Ma(new il(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Fo(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Ti.copy(D.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Ti)),f.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,(v!==N||S!==N.version||g!==o.toneMapping)&&(f.material.needsUpdate=!0,v=N,S=N.version,g=o.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ma(new du(2,2),new zn({name:"BackgroundMaterial",uniforms:Fo(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,g=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,D){A.getRGB(Gc,Q0(o)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,c)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,D=1){d.set(A),p=D,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,_(d,p)},render:x,addToRenderList:R,dispose:y}}function nT(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},l=g(null);let c=l,d=!1;function p(V,J,se,le,re){let U=!1;const H=S(V,le,se,J);c!==H&&(c=H,f(c.object)),U=b(V,le,se,re),U&&x(V,le,se,re),re!==null&&e.update(re,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,N(V,J,se,le),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return o.createVertexArray()}function f(V){return o.bindVertexArray(V)}function v(V){return o.deleteVertexArray(V)}function S(V,J,se,le){const re=le.wireframe===!0;let U=i[J.id];U===void 0&&(U={},i[J.id]=U);const H=V.isInstancedMesh===!0?V.id:0;let ce=U[H];ce===void 0&&(ce={},U[H]=ce);let _e=ce[se.id];_e===void 0&&(_e={},ce[se.id]=_e);let L=_e[re];return L===void 0&&(L=g(m()),_e[re]=L),L}function g(V){const J=[],se=[],le=[];for(let re=0;re<n;re++)J[re]=0,se[re]=0,le[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:le,object:V,attributes:{},index:null}}function b(V,J,se,le){const re=c.attributes,U=J.attributes;let H=0;const ce=se.getAttributes();for(const _e in ce)if(ce[_e].location>=0){const L=re[_e];let Q=U[_e];if(Q===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==le}function x(V,J,se,le){const re={},U=J.attributes;let H=0;const ce=se.getAttributes();for(const _e in ce)if(ce[_e].location>=0){let L=U[_e];L===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(L=V.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),re[_e]=Q,H++}c.attributes=re,c.attributesNum=H,c.index=le}function R(){const V=c.newAttributes;for(let J=0,se=V.length;J<se;J++)V[J]=0}function _(V){y(V,0)}function y(V,J){const se=c.newAttributes,le=c.enabledAttributes,re=c.attributeDivisors;se[V]=1,le[V]===0&&(o.enableVertexAttribArray(V),le[V]=1),re[V]!==J&&(o.vertexAttribDivisor(V,J),re[V]=J)}function A(){const V=c.newAttributes,J=c.enabledAttributes;for(let se=0,le=J.length;se<le;se++)J[se]!==V[se]&&(o.disableVertexAttribArray(se),J[se]=0)}function D(V,J,se,le,re,U,H){H===!0?o.vertexAttribIPointer(V,J,se,re,U):o.vertexAttribPointer(V,J,se,le,re,U)}function N(V,J,se,le){R();const re=le.attributes,U=se.getAttributes(),H=J.defaultAttributeValues;for(const ce in U){const _e=U[ce];if(_e.location>=0){let L=re[ce];if(L===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const Q=L.normalized,ge=L.itemSize,be=e.get(L);if(be===void 0)continue;const Ne=be.buffer,Xe=be.type,K=be.bytesPerElement,Me=Xe===o.INT||Xe===o.UNSIGNED_INT||L.gpuType===rp;if(L.isInterleavedBufferAttribute){const Se=L.data,et=Se.stride,Ze=L.offset;if(Se.isInstancedInterleavedBuffer){for(let Be=0;Be<_e.locationSize;Be++)y(_e.location+Be,Se.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Be=0;Be<_e.locationSize;Be++)_(_e.location+Be);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Be=0;Be<_e.locationSize;Be++)D(_e.location+Be,ge/_e.locationSize,Xe,Q,et*K,(Ze+ge/_e.locationSize*Be)*K,Me)}else{if(L.isInstancedBufferAttribute){for(let Se=0;Se<_e.locationSize;Se++)y(_e.location+Se,L.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Se=0;Se<_e.locationSize;Se++)_(_e.location+Se);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Se=0;Se<_e.locationSize;Se++)D(_e.location+Se,ge/_e.locationSize,Xe,Q,ge*K,ge/_e.locationSize*Se*K,Me)}}else if(H!==void 0){const Q=H[ce];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(_e.location,Q);break;case 3:o.vertexAttrib3fv(_e.location,Q);break;case 4:o.vertexAttrib4fv(_e.location,Q);break;default:o.vertexAttrib1fv(_e.location,Q)}}}}A()}function F(){P();for(const V in i){const J=i[V];for(const se in J){const le=J[se];for(const re in le){const U=le[re];for(const H in U)v(U[H].object),delete U[H];delete le[re]}}delete i[V]}}function k(V){if(i[V.id]===void 0)return;const J=i[V.id];for(const se in J){const le=J[se];for(const re in le){const U=le[re];for(const H in U)v(U[H].object),delete U[H];delete le[re]}}delete i[V.id]}function O(V){for(const J in i){const se=i[J];for(const le in se){const re=se[le];if(re[V.id]===void 0)continue;const U=re[V.id];for(const H in U)v(U[H].object),delete U[H];delete re[V.id]}}}function E(V){for(const J in i){const se=i[J],le=V.isInstancedMesh===!0?V.id:0,re=se[le];if(re!==void 0){for(const U in re){const H=re[U];for(const ce in H)v(H[ce].object),delete H[ce];delete re[U]}delete se[le],Object.keys(se).length===0&&delete i[J]}}}function P(){ue(),d=!0,c!==l&&(c=l,f(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:ue,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:_,disableUnusedAttributes:A}}function aT(o,e,n){let i;function l(f){i=f}function c(f,v){o.drawArrays(i,f,v),n.update(v,i,1)}function d(f,v,S){S!==0&&(o.drawArraysInstanced(i,f,v,S),n.update(v,i,S))}function p(f,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,v,0,S);let g=0;for(let b=0;b<S;b++)g+=v[b];n.update(g,i,1)}function m(f,v,S,g){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<f.length;x++)d(f[x],v[x],g[x]);else{b.multiDrawArraysInstancedWEBGL(i,f,0,v,0,g,0,S);let x=0;for(let R=0;R<S;R++)x+=v[R]*g[R];n.update(x,i,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function iT(o,e,n,i){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Mn&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const E=O===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==un&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Dn&&!E)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const v=m(f);v!==f&&(at("WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),_=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),k=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:f,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:x,maxTextureSize:R,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:N,maxSamples:F,samples:k}}function oT(o){const e=this;let n=null,i=0,l=!1,c=!1;const d=new Ci,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const b=S.length!==0||g||i!==0||l;return l=g,i=S.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){n=v(S,g,0)},this.setState=function(S,g,b){const x=S.clippingPlanes,R=S.clipIntersection,_=S.clipShadows,y=o.get(S);if(!l||x===null||x.length===0||c&&!_)c?v(null):f();else{const A=c?0:i,D=A*4;let N=y.clippingState||null;m.value=N,N=v(x,g,D,b);for(let F=0;F!==D;++F)N[F]=n[F];y.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function f(){m.value!==n&&(m.value=n,m.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function v(S,g,b,x){const R=S!==null?S.length:0;let _=null;if(R!==0){if(_=m.value,x!==!0||_===null){const y=b+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(_===null||_.length<y)&&(_=new Float32Array(y));for(let D=0,N=b;D!==R;++D,N+=4)d.copy(S[D]).applyMatrix4(A,p),d.normal.toArray(_,N),_[N+3]=d.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}const ai=4,D_=[.125,.215,.35,.446,.526,.582],Pi=20,sT=256,js=new K0,k_=new vt;let qh=null,Yh=0,$h=0,Jh=!1;const lT=new ne;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,l=100,c={}){const{size:d=256,position:p=lT}=c;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,i,l,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,$h),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ii||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rr,minFilter:Rr,generateMipmaps:!1,type:ba,format:Mn,colorSpace:ko,depthBuffer:!1},l=O_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,n,i);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cT(c)),this._blurMaterial=dT(c,e,n),this._ggxMaterial=uT(c,e,n)}return l}_compileMaterial(e){const n=new Ma(new Zr,e);this._renderer.compile(n,js)}_sceneToCubeUV(e,n,i,l,c){const d=new cn(90,1,n,i),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,v=f.autoClear,S=f.toneMapping;f.getClearColor(k_),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(l),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ma(new il,new j0({name:"PMREM.Background",side:Vr,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,b=g.material;let x=!1;const R=e.background;R?R.isColor&&(b.color.copy(R),e.background=null,x=!0):(b.color.copy(k_),x=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+m[_],c.y,c.z)):y===1?(d.up.set(0,0,p[_]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+m[_],c.z)):(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+m[_]));const A=this._cubeSize;Ro(l,y*A,_>2?A:0,A,A),f.setRenderTarget(l),x&&f.render(g,d),f.render(e,d)}f.toneMapping=S,f.autoClear=v,e.background=R}_textureToCubeUV(e,n){const i=this._renderer,l=e.mapping===Ii||e.mapping===Uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ro(n,0,0,3*m,2*m),i.setRenderTarget(n),i.render(d,js)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=i}_applyGGXFilter(e,n,i){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[i];p.material=d;const m=d.uniforms,f=i/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),S=Math.sqrt(f*f-v*v),g=0+f*1.25,b=S*g,{_lodMax:x}=this,R=this._sizeLods[i],_=3*R*(i>x-ai?i-x+ai:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=x-n,Ro(c,_,y,3*R,2*R),l.setRenderTarget(c),l.render(p,js),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=x-i,Ro(e,_,y,3*R,2*R),l.setRenderTarget(e),l.render(p,js)}_blur(e,n,i,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,i,l,"latitudinal",c),this._halfBlur(d,e,i,i,l,"longitudinal",c)}_halfBlur(e,n,i,l,c,d,p){const m=this._renderer,f=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=f;const g=f.uniforms,b=this._sizeLods[i]-1,x=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Pi-1),R=c/x,_=isFinite(c)?1+Math.floor(v*R):Pi;_>Pi&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Pi}`);const y=[];let A=0;for(let O=0;O<Pi;++O){const E=O/R,P=Math.exp(-E*E/2);y.push(P),O===0?A+=P:O<_&&(A+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/A;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=x,g.mipInt.value=D-i;const N=this._sizeLods[l],F=3*N*(l>D-ai?l-D+ai:0),k=4*(this._cubeSize-N);Ro(n,F,k,3*N,2*N),m.setRenderTarget(n),m.render(S,js)}}function cT(o){const e=[],n=[],i=[];let l=o;const c=o-ai+1+D_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ai?m=D_[d-o+ai-1]:d===0&&(m=0),n.push(m);const f=1/(p-2),v=-f,S=1+f,g=[v,v,S,v,S,S,v,v,S,S,v,S],b=6,x=6,R=3,_=2,y=1,A=new Float32Array(R*x*b),D=new Float32Array(_*x*b),N=new Float32Array(y*x*b);for(let k=0;k<b;k++){const O=k%3*2/3-1,E=k>2?0:-1,P=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];A.set(P,R*x*k),D.set(g,_*x*k);const ue=[k,k,k,k,k,k];N.set(ue,y*x*k)}const F=new Zr;F.setAttribute("position",new dn(A,R)),F.setAttribute("uv",new dn(D,_)),F.setAttribute("faceIndex",new dn(N,y)),i.push(new Ma(F,null)),l>ai&&l--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function O_(o,e,n){const i=new On(o,e,n);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(o,e,n,i,l){o.viewport.set(e,n,i,l),o.scissor.set(e,n,i,l)}function uT(o,e,n){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function dT(o,e,n){const i=new Float32Array(Pi),l=new ne(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function B_(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function z_(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class ty extends On{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},l=[i,i,i,i,i,i];this.texture=new $0(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new zn({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vr,blending:va});c.uniforms.tEquirect.value=n;const d=new Ma(l,c),p=n.minFilter;return n.minFilter===Ni&&(n.minFilter=Rr),new _M(1,10,this).update(e,d),n.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,i=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,i,l);e.setRenderTarget(c)}}function hT(o){let e=new WeakMap,n=new WeakMap,i=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===yh||b===bh)if(e.has(g)){const x=e.get(g).texture;return p(x,g.mapping)}else{const x=g.image;if(x&&x.height>0){const R=new ty(x.height);return R.fromEquirectangularTexture(o,g),e.set(g,R),g.addEventListener("dispose",f),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,x=b===yh||b===bh,R=b===Ii||b===Uo;if(x||R){let _=n.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return i===null&&(i=new F_(o)),_=x?i.fromEquirectangular(g,_):i.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const A=g.image;return x&&A&&A.height>0||R&&A&&m(A)?(i===null&&(i=new F_(o)),_=x?i.fromEquirectangular(g):i.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function p(g,b){return b===yh?g.mapping=Ii:b===bh&&(g.mapping=Uo),g}function m(g){let b=0;const x=6;for(let R=0;R<x;R++)g[R]!==void 0&&b++;return b===x}function f(g){const b=g.target;b.removeEventListener("dispose",f);const x=e.get(b);x!==void 0&&(e.delete(b),x.dispose())}function v(g){const b=g.target;b.removeEventListener("dispose",v);const x=n.get(b);x!==void 0&&(n.delete(b),x.dispose())}function S(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:S}}function fT(o){const e={};function n(i){if(e[i]!==void 0)return e[i];const l=o.getExtension(i);return e[i]=l,l}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const l=n(i);return l===null&&iu("WebGLRenderer: "+i+" extension not supported."),l}}}function pT(o,e,n,i){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,n.memory.geometries++),g}function m(S){const g=S.attributes;for(const b in g)e.update(g[b],o.ARRAY_BUFFER)}function f(S){const g=[],b=S.index,x=S.attributes.position;let R=0;if(x===void 0)return;if(b!==null){const A=b.array;R=b.version;for(let D=0,N=A.length;D<N;D+=3){const F=A[D+0],k=A[D+1],O=A[D+2];g.push(F,k,k,O,O,F)}}else{const A=x.array;R=x.version;for(let D=0,N=A.length/3-1;D<N;D+=3){const F=D+0,k=D+1,O=D+2;g.push(F,k,k,O,O,F)}}const _=new(x.count>=65535?W0:G0)(g,1);_.version=R;const y=c.get(S);y&&e.remove(y),c.set(S,_)}function v(S){const g=c.get(S);if(g){const b=S.index;b!==null&&g.version<b.version&&f(S)}else f(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function mT(o,e,n){let i;function l(g){i=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,b){o.drawElements(i,b,c,g*d),n.update(b,i,1)}function f(g,b,x){x!==0&&(o.drawElementsInstanced(i,b,c,g*d,x),n.update(b,i,x))}function v(g,b,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,b,0,c,g,0,x);let R=0;for(let _=0;_<x;_++)R+=b[_];n.update(R,i,1)}function S(g,b,x,R){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)f(g[y]/d,b[y],R[y]);else{_.multiDrawElementsInstancedWEBGL(i,b,0,c,g,0,R,0,x);let y=0;for(let A=0;A<x;A++)y+=b[A]*R[A];n.update(y,i,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=f,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function gT(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(c,d,p){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=p*(c/3);break;case o.LINES:n.lines+=p*(c/2);break;case o.LINE_STRIP:n.lines+=p*(c-1);break;case o.LINE_LOOP:n.lines+=p*c;break;case o.POINTS:n.points+=p*c;break;default:Mt("WebGLInfo: Unknown draw mode:",d);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:i}}function vT(o,e,n){const i=new WeakMap,l=new or;function c(d,p,m){const f=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=i.get(p);if(g===void 0||g.count!==S){let b=function(){E.dispose(),i.delete(p),p.removeEventListener("dispose",b)};g!==void 0&&g.texture.dispose();const x=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let N=0;x===!0&&(N=1),R===!0&&(N=2),_===!0&&(N=3);let F=p.attributes.position.count*N,k=1;F>e.maxTextureSize&&(k=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*k*4*S),E=new z0(O,F,k,S);E.type=Dn,E.needsUpdate=!0;const P=N*4;for(let ue=0;ue<S;ue++){const V=y[ue],J=A[ue],se=D[ue],le=F*k*4*ue;for(let re=0;re<V.count;re++){const U=re*P;x===!0&&(l.fromBufferAttribute(V,re),O[le+U+0]=l.x,O[le+U+1]=l.y,O[le+U+2]=l.z,O[le+U+3]=0),R===!0&&(l.fromBufferAttribute(J,re),O[le+U+4]=l.x,O[le+U+5]=l.y,O[le+U+6]=l.z,O[le+U+7]=0),_===!0&&(l.fromBufferAttribute(se,re),O[le+U+8]=l.x,O[le+U+9]=l.y,O[le+U+10]=l.z,O[le+U+11]=se.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new Bt(F,k)},i.set(p,g),p.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,n);else{let b=0;for(let R=0;R<f.length;R++)b+=f[R];const x=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",x),m.getUniforms().setValue(o,"morphTargetInfluences",f)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function _T(o,e,n,i,l){let c=new WeakMap;function d(f){const v=l.render.frame,S=f.geometry,g=e.get(f,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),f.isInstancedMesh&&(f.hasEventListener("dispose",m)===!1&&f.addEventListener("dispose",m),c.get(f)!==v&&(n.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,o.ARRAY_BUFFER),c.set(f,v))),f.isSkinnedMesh){const b=f.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return g}function p(){c=new WeakMap}function m(f){const v=f.target;v.removeEventListener("dispose",m),i.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:d,dispose:p}}const yT={[E0]:"LINEAR_TONE_MAPPING",[w0]:"REINHARD_TONE_MAPPING",[T0]:"CINEON_TONE_MAPPING",[A0]:"ACES_FILMIC_TONE_MAPPING",[R0]:"AGX_TONE_MAPPING",[P0]:"NEUTRAL_TONE_MAPPING",[C0]:"CUSTOM_TONE_MAPPING"};function bT(o,e,n,i,l){const c=new On(e,n,{type:o,depthBuffer:i,stencilBuffer:l}),d=new On(e,n,{type:ba,depthBuffer:!1,stencilBuffer:!1}),p=new Zr;p.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new mM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ma(p,m),v=new K0(-1,1,1,-1,0,1);let S=null,g=null,b=!1,x,R=null,_=[],y=!1;this.setSize=function(A,D){c.setSize(A,D),d.setSize(A,D);for(let N=0;N<_.length;N++){const F=_[N];F.setSize&&F.setSize(A,D)}},this.setEffects=function(A){_=A,y=_.length>0&&_[0].isRenderPass===!0;const D=c.width,N=c.height;for(let F=0;F<_.length;F++){const k=_[F];k.setSize&&k.setSize(D,N)}},this.begin=function(A,D){if(b||A.toneMapping===Fn&&_.length===0)return!1;if(R=D,D!==null){const N=D.width,F=D.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&A.setRenderTarget(c),x=A.toneMapping,A.toneMapping=Fn,!0},this.hasRenderPass=function(){return y},this.end=function(A,D){A.toneMapping=x,b=!0;let N=c,F=d;for(let k=0;k<_.length;k++){const O=_[k];if(O.enabled!==!1&&(O.render(A,F,N,D),O.needsSwap!==!1)){const E=N;N=F,F=E}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},bt.getTransfer(S)===It&&(m.defines.SRGB_TRANSFER="");const k=yT[g];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(R),A.render(f,v),R=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const ry=new Lr,qf=new Zs(1,1),ny=new z0,ay=new G1,iy=new $0,H_=[],V_=[],G_=new Float32Array(16),W_=new Float32Array(9),j_=new Float32Array(4);function Vo(o,e,n){const i=o[0];if(i<=0||i>0)return o;const l=e*n;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){i.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=n,o[d].toArray(c,p)}return c}function fr(o,e){if(o.length!==e.length)return!1;for(let n=0,i=o.length;n<i;n++)if(o[n]!==e[n])return!1;return!0}function pr(o,e){for(let n=0,i=e.length;n<i;n++)o[n]=e[n]}function fu(o,e){let n=V_[e];n===void 0&&(n=new Int32Array(e),V_[e]=n);for(let i=0;i!==e;++i)n[i]=o.allocateTextureUnit();return n}function xT(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ST(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fr(n,e))return;o.uniform2fv(this.addr,e),pr(n,e)}}function MT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fr(n,e))return;o.uniform3fv(this.addr,e),pr(n,e)}}function ET(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fr(n,e))return;o.uniform4fv(this.addr,e),pr(n,e)}}function wT(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(fr(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),pr(n,e)}else{if(fr(n,i))return;j_.set(i),o.uniformMatrix2fv(this.addr,!1,j_),pr(n,i)}}function TT(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(fr(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),pr(n,e)}else{if(fr(n,i))return;W_.set(i),o.uniformMatrix3fv(this.addr,!1,W_),pr(n,i)}}function AT(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(fr(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),pr(n,e)}else{if(fr(n,i))return;G_.set(i),o.uniformMatrix4fv(this.addr,!1,G_),pr(n,i)}}function CT(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function RT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fr(n,e))return;o.uniform2iv(this.addr,e),pr(n,e)}}function PT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fr(n,e))return;o.uniform3iv(this.addr,e),pr(n,e)}}function NT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fr(n,e))return;o.uniform4iv(this.addr,e),pr(n,e)}}function LT(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function IT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fr(n,e))return;o.uniform2uiv(this.addr,e),pr(n,e)}}function UT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fr(n,e))return;o.uniform3uiv(this.addr,e),pr(n,e)}}function DT(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fr(n,e))return;o.uniform4uiv(this.addr,e),pr(n,e)}}function kT(o,e,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(o.uniform1i(this.addr,l),i[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(qf.compareFunction=n.isReversedDepthBuffer()?cp:lp,c=qf):c=ry,n.setTexture2D(e||c,l)}function FT(o,e,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(o.uniform1i(this.addr,l),i[0]=l),n.setTexture3D(e||ay,l)}function OT(o,e,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(o.uniform1i(this.addr,l),i[0]=l),n.setTextureCube(e||iy,l)}function BT(o,e,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(o.uniform1i(this.addr,l),i[0]=l),n.setTexture2DArray(e||ny,l)}function zT(o){switch(o){case 5126:return xT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return NT;case 5125:return LT;case 36294:return IT;case 36295:return UT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(o,e){o.uniform1fv(this.addr,e)}function VT(o,e){const n=Vo(e,this.size,2);o.uniform2fv(this.addr,n)}function GT(o,e){const n=Vo(e,this.size,3);o.uniform3fv(this.addr,n)}function WT(o,e){const n=Vo(e,this.size,4);o.uniform4fv(this.addr,n)}function jT(o,e){const n=Vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function XT(o,e){const n=Vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function qT(o,e){const n=Vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function YT(o,e){o.uniform1iv(this.addr,e)}function $T(o,e){o.uniform2iv(this.addr,e)}function JT(o,e){o.uniform3iv(this.addr,e)}function QT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function eA(o,e){o.uniform3uiv(this.addr,e)}function tA(o,e){o.uniform4uiv(this.addr,e)}function rA(o,e,n){const i=this.cache,l=e.length,c=fu(n,l);fr(i,c)||(o.uniform1iv(this.addr,c),pr(i,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=qf:d=ry;for(let p=0;p!==l;++p)n.setTexture2D(e[p]||d,c[p])}function nA(o,e,n){const i=this.cache,l=e.length,c=fu(n,l);fr(i,c)||(o.uniform1iv(this.addr,c),pr(i,c));for(let d=0;d!==l;++d)n.setTexture3D(e[d]||ay,c[d])}function aA(o,e,n){const i=this.cache,l=e.length,c=fu(n,l);fr(i,c)||(o.uniform1iv(this.addr,c),pr(i,c));for(let d=0;d!==l;++d)n.setTextureCube(e[d]||iy,c[d])}function iA(o,e,n){const i=this.cache,l=e.length,c=fu(n,l);fr(i,c)||(o.uniform1iv(this.addr,c),pr(i,c));for(let d=0;d!==l;++d)n.setTexture2DArray(e[d]||ny,c[d])}function oA(o){switch(o){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return WT;case 35674:return jT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return $T;case 35668:case 35672:return JT;case 35669:case 35673:return QT;case 5125:return ZT;case 36294:return KT;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oA(n.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,n[p.id],i)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function X_(o,e){o.seq.push(e),o.map[e.id]=e}function uA(o,e,n){const i=o.name,l=i.length;for(Qh.lastIndex=0;;){const c=Qh.exec(i),d=Qh.lastIndex;let p=c[1];const m=c[2]==="]",f=c[3];if(m&&(p=p|0),f===void 0||f==="["&&d+2===l){X_(n,f===void 0?new sA(p,o,e):new lA(p,o,e));break}else{let v=n.map[p];v===void 0&&(v=new cA(p),X_(n,v)),n=v}}}class Zc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let d=0;d<i;++d){const p=e.getActiveUniform(n,d),m=e.getUniformLocation(n,p.name);uA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,i,l){const c=this.map[n];c!==void 0&&c.setValue(e,i,l)}setOptional(e,n,i){const l=n[i];l!==void 0&&this.setValue(e,i,l)}static upload(e,n,i,l){for(let c=0,d=n.length;c!==d;++c){const p=n[c],m=i[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,n){const i=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in n&&i.push(d)}return i}}function q_(o,e,n){const i=o.createShader(e);return o.shaderSource(i,n),o.compileShader(i),i}const dA=37297;let hA=0;function fA(o,e){const n=o.split(`
`),i=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=l;d<c;d++){const p=d+1;i.push(`${p===e?">":" "} ${p}: ${n[d]}`)}return i.join(`
`)}const Y_=new lt;function pA(o){bt._getMatrix(Y_,bt.workingColorSpace,o);const e=`mat3( ${Y_.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(o)){case ru:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function $_(o,e,n){const i=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+fA(o.getShaderSource(e),d)}else return l}function mA(o,e){const n=pA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gA={[E0]:"Linear",[w0]:"Reinhard",[T0]:"Cineon",[A0]:"ACESFilmic",[R0]:"AgX",[P0]:"Neutral",[C0]:"Custom"};function vA(o,e){const n=gA[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wc=new ne;function _A(){bt.getLuminanceCoefficients(Wc);const o=Wc.x.toFixed(4),e=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function bA(o){const e=[];for(const n in o){const i=o[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(o,e){const n={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),n[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return n}function Ys(o){return o!==""}function J_(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(o){return o.replace(SA,EA)}const MA=new Map;function EA(o,e){let n=ct[e];if(n===void 0){const i=MA.get(e);if(i!==void 0)n=ct[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yf(n)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(o){return o.replace(wA,TA)}function TA(o,e,n,i){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AA={[qc]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function CA(o){return AA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[Ii]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function PA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":RA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[Uo]:"ENVMAP_MODE_REFRACTION"};function LA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IA={[M0]:"ENVMAP_BLENDING_MULTIPLY",[x1]:"ENVMAP_BLENDING_MIX",[S1]:"ENVMAP_BLENDING_ADD"};function UA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":IA[o.combine]||"ENVMAP_BLENDING_NONE"}function DA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kA(o,e,n,i){const l=o.getContext(),c=n.defines;let d=n.vertexShader,p=n.fragmentShader;const m=CA(n),f=PA(n),v=LA(n),S=UA(n),g=DA(n),b=yA(n),x=bA(c),R=l.createProgram();let _,y,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ys).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ys).join(`
`),y.length>0&&(y+=`
`)):(_=[K_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),y=[K_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fn?"#define TONE_MAPPING":"",n.toneMapping!==Fn?ct.tonemapping_pars_fragment:"",n.toneMapping!==Fn?vA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),_A(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ys).join(`
`)),d=Yf(d),d=J_(d,n),d=Q_(d,n),p=Yf(p),p=J_(p,n),p=Q_(p,n),d=Z_(d),p=Z_(p),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",n.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=A+_+d,N=A+y+p,F=q_(l,l.VERTEX_SHADER,D),k=q_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,F),l.attachShader(R,k),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",se=l.getShaderInfoLog(F)||"",le=l.getShaderInfoLog(k)||"",re=J.trim(),U=se.trim(),H=le.trim();let ce=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,k);else{const L=$_(l,F,"vertex"),Q=$_(l,k,"fragment");Mt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+L+`
`+Q)}else re!==""?at("WebGLProgram: Program Info Log:",re):(U===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ce,programLog:re,vertexShader:{log:U,prefix:_},fragmentShader:{log:H,prefix:y}})}l.deleteShader(F),l.deleteShader(k),E=new Zc(l,R),P=xA(l,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let ue=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(R,dA)),ue},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=k,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(i),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BA(e),n.set(e,i)),i}}class BA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function zA(o,e,n,i,l,c){const d=new H0,p=new OA,m=new Set,f=[],v=new Map,S=i.logarithmicDepthBuffer;let g=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,P,ue,V,J){const se=V.fog,le=J.geometry,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||re,U),ce=H&&H.mapping===uu?H.image.height:null,_e=b[E.type];E.precision!==null&&(g=i.getMaxPrecision(E.precision),g!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Q=L!==void 0?L.length:0;let ge=0;le.morphAttributes.position!==void 0&&(ge=1),le.morphAttributes.normal!==void 0&&(ge=2),le.morphAttributes.color!==void 0&&(ge=3);let be,Ne,Xe,K;if(_e){const xt=Un[_e];be=xt.vertexShader,Ne=xt.fragmentShader}else be=E.vertexShader,Ne=E.fragmentShader,p.update(E),Xe=p.getVertexShaderID(E),K=p.getFragmentShaderID(E);const Me=o.getRenderTarget(),Se=o.state.buffers.depth.getReversed(),et=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,Be=!!E.map,Et=!!E.matcap,wt=!!H,it=!!E.aoMap,rr=!!E.lightMap,Zt=!!E.bumpMap,Ut=!!E.normalMap,G=!!E.displacementMap,Xt=!!E.emissiveMap,yt=!!E.metalnessMap,Tt=!!E.roughnessMap,je=E.anisotropy>0,I=E.clearcoat>0,w=E.dispersion>0,X=E.iridescence>0,me=E.sheen>0,fe=E.transmission>0,pe=je&&!!E.anisotropyMap,De=I&&!!E.clearcoatMap,Re=I&&!!E.clearcoatNormalMap,$e=I&&!!E.clearcoatRoughnessMap,qe=X&&!!E.iridescenceMap,Ee=X&&!!E.iridescenceThicknessMap,Te=me&&!!E.sheenColorMap,We=me&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ue=!!E.specularColorMap,ut=!!E.specularIntensityMap,j=fe&&!!E.transmissionMap,Pe=fe&&!!E.thicknessMap,Ae=!!E.gradientMap,Fe=!!E.alphaMap,we=E.alphaTest>0,he=!!E.alphaHash,He=!!E.extensions;let Qe=Fn;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=o.toneMapping);const qt={shaderID:_e,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:Ne,defines:E.defines,customVertexShaderID:Xe,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,outputColorSpace:Me===null?o.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ko,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:Et,envMap:wt,envMapMode:wt&&H.mapping,envMapCubeUVHeight:ce,aoMap:it,lightMap:rr,bumpMap:Zt,normalMap:Ut,displacementMap:G,emissiveMap:Xt,normalMapObjectSpace:Ut&&E.normalMapType===T1,normalMapTangentSpace:Ut&&E.normalMapType===w1,metalnessMap:yt,roughnessMap:Tt,anisotropy:je,anisotropyMap:pe,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:Re,clearcoatRoughnessMap:$e,dispersion:w,iridescence:X,iridescenceMap:qe,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:ze,specularColorMap:Ue,specularIntensityMap:ut,transmission:fe,transmissionMap:j,thicknessMap:Pe,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===No&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:we,alphaHash:he,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:it&&x(E.aoMap.channel),lightMapUv:rr&&x(E.lightMap.channel),bumpMapUv:Zt&&x(E.bumpMap.channel),normalMapUv:Ut&&x(E.normalMap.channel),displacementMapUv:G&&x(E.displacementMap.channel),emissiveMapUv:Xt&&x(E.emissiveMap.channel),metalnessMapUv:yt&&x(E.metalnessMap.channel),roughnessMapUv:Tt&&x(E.roughnessMap.channel),anisotropyMapUv:pe&&x(E.anisotropyMap.channel),clearcoatMapUv:De&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(E.sheenRoughnessMap.channel),specularMapUv:ze&&x(E.specularMap.channel),specularColorMapUv:Ue&&x(E.specularColorMap.channel),specularIntensityMapUv:ut&&x(E.specularIntensityMap.channel),transmissionMapUv:j&&x(E.transmissionMap.channel),thicknessMapUv:Pe&&x(E.thicknessMap.channel),alphaMapUv:Fe&&x(E.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ut||je),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(Be||Fe),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||le.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:Xt&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pa,flipSided:E.side===Vr,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function _(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ue in E.defines)P.push(ue),P.push(E.defines[ue]);return E.isRawShaderMaterial===!1&&(y(P,E),A(P,E),P.push(o.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function y(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function A(E,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),E.push(d.mask)}function D(E){const P=b[E.type];let ue;if(P){const V=Un[P];ue=hM.clone(V.uniforms)}else ue=E.uniforms;return ue}function N(E,P){let ue=v.get(P);return ue!==void 0?++ue.usedTimes:(ue=new kA(o,P,E,l),f.push(ue),v.set(P,ue)),ue}function F(E){if(--E.usedTimes===0){const P=f.indexOf(E);f[P]=f[f.length-1],f.pop(),v.delete(E.cacheKey),E.destroy()}}function k(E){p.remove(E)}function O(){p.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:F,releaseShaderCache:k,programs:f,dispose:O}}function HA(){let o=new WeakMap;function e(d){return o.has(d)}function n(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function i(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:n,remove:i,update:l,dispose:c}}function VA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function e0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function t0(){const o=[];let e=0;const n=[],i=[],l=[];function c(){e=0,n.length=0,i.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,x,R,_,y){let A=o[e];return A===void 0?(A={id:g.id,object:g,geometry:b,material:x,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:y},o[e]=A):(A.id=g.id,A.object=g,A.geometry=b,A.material=x,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=_,A.group=y),e++,A}function m(g,b,x,R,_,y){const A=p(g,b,x,R,_,y);x.transmission>0?i.push(A):x.transparent===!0?l.push(A):n.push(A)}function f(g,b,x,R,_,y){const A=p(g,b,x,R,_,y);x.transmission>0?i.unshift(A):x.transparent===!0?l.unshift(A):n.unshift(A)}function v(g,b){n.length>1&&n.sort(g||VA),i.length>1&&i.sort(b||e0),l.length>1&&l.sort(b||e0)}function S(){for(let g=e,b=o.length;g<b;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:l,init:c,push:m,unshift:f,finish:S,sort:v}}function GA(){let o=new WeakMap;function e(i,l){const c=o.get(i);let d;return c===void 0?(d=new t0,o.set(i,[d])):l>=c.length?(d=new t0,c.push(d)):d=c[l],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function WA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new vt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function jA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let XA=0;function qA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YA(o){const e=new WA,n=jA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new ne);const l=new ne,c=new tr,d=new tr;function p(f){let v=0,S=0,g=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let b=0,x=0,R=0,_=0,y=0,A=0,D=0,N=0,F=0,k=0,O=0;f.sort(qA);for(let P=0,ue=f.length;P<ue;P++){const V=f[P],J=V.color,se=V.intensity,le=V.distance;let re=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Do?re=V.shadow.map.texture:re=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*se,S+=J.g*se,g+=J.b*se;else if(V.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(V.sh.coefficients[U],se);O++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ce=n.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,i.directionalShadow[b]=ce,i.directionalShadowMap[b]=re,i.directionalShadowMatrix[b]=V.shadow.matrix,A++}i.directional[b]=U,b++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(J).multiplyScalar(se),U.distance=le,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,i.spot[R]=U;const H=V.shadow;if(V.map&&(i.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&k++),i.spotLightMatrix[R]=H.matrix,V.castShadow){const ce=n.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,i.spotShadow[R]=ce,i.spotShadowMap[R]=re,N++}R++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(J).multiplyScalar(se),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),i.rectArea[_]=U,_++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const H=V.shadow,ce=n.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,ce.shadowCameraNear=H.camera.near,ce.shadowCameraFar=H.camera.far,i.pointShadow[x]=ce,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=V.shadow.matrix,D++}i.point[x]=U,x++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(se),U.groundColor.copy(V.groundColor).multiplyScalar(se),i.hemi[y]=U,y++}}_>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=S,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==b||E.pointLength!==x||E.spotLength!==R||E.rectAreaLength!==_||E.hemiLength!==y||E.numDirectionalShadows!==A||E.numPointShadows!==D||E.numSpotShadows!==N||E.numSpotMaps!==F||E.numLightProbes!==O)&&(i.directional.length=b,i.spot.length=R,i.rectArea.length=_,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=N+F-k,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=O,E.directionalLength=b,E.pointLength=x,E.spotLength=R,E.rectAreaLength=_,E.hemiLength=y,E.numDirectionalShadows=A,E.numPointShadows=D,E.numSpotShadows=N,E.numSpotMaps=F,E.numLightProbes=O,i.version=XA++)}function m(f,v){let S=0,g=0,b=0,x=0,R=0;const _=v.matrixWorldInverse;for(let y=0,A=f.length;y<A;y++){const D=f[y];if(D.isDirectionalLight){const N=i.directional[S];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),S++}else if(D.isSpotLight){const N=i.spot[b];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),b++}else if(D.isRectAreaLight){const N=i.rectArea[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),d.identity(),c.copy(D.matrixWorld),c.premultiply(_),d.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),x++}else if(D.isPointLight){const N=i.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const N=i.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(_),R++}}}return{setup:p,setupView:m,state:i}}function r0(o){const e=new YA(o),n=[],i=[];function l(v){f.camera=v,n.length=0,i.length=0}function c(v){n.push(v)}function d(v){i.push(v)}function p(){e.setup(n)}function m(v){e.setupView(n,v)}const f={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:f,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function $A(o){let e=new WeakMap;function n(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new r0(o),e.set(l,[p])):c>=d.length?(p=new r0(o),d.push(p)):p=d[c],p}function i(){e=new WeakMap}return{get:n,dispose:i}}const JA=`void main() {
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
}`,ZA=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],KA=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],n0=new tr,Xs=new ne,Zh=new ne;function eC(o,e,n){let i=new X0;const l=new Bt,c=new Bt,d=new or,p=new gM,m=new vM,f={},v=n.maxTextureSize,S={[ii]:Vr,[Vr]:ii,[pa]:pa},g=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:JA,fragmentShader:QA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const x=new Zr;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ma(x,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let y=this.type;this.render=function(k,O,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;this.type===r1&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const P=o.getRenderTarget(),ue=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(va),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const se=y!==this.type;se&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(re=>re.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,re=k.length;le<re;le++){const U=k[le],H=U.shadow;if(H===void 0){at("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ce=H.getFrameExtents();l.multiply(ce),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ce.x),l.x=c.x*ce.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ce.y),l.y=c.y*ce.y,H.mapSize.y=c.y));const _e=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qs){if(U.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new On(l.x,l.y,{format:Do,type:ba,minFilter:Rr,magFilter:Rr,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Zs(l.x,l.y,Dn),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=xa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Er,H.map.depthTexture.magFilter=Er}else U.isPointLight?(H.map=new ty(l.x),H.map.depthTexture=new uM(l.x,Bn)):(H.map=new On(l.x,l.y),H.map.depthTexture=new Zs(l.x,l.y,Bn)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=xa,this.type===qc?(H.map.depthTexture.compareFunction=_e?cp:lp,H.map.depthTexture.minFilter=Rr,H.map.depthTexture.magFilter=Rr):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Er,H.map.depthTexture.magFilter=Er);H.camera.updateProjectionMatrix()}const L=H.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<L;Q++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Q),o.clear();else{Q===0&&(o.setRenderTarget(H.map),o.clear());const ge=H.getViewport(Q);d.set(c.x*ge.x,c.y*ge.y,c.x*ge.z,c.y*ge.w),J.viewport(d)}if(U.isPointLight){const ge=H.camera,be=H.matrix,Ne=U.distance||ge.far;Ne!==ge.far&&(ge.far=Ne,ge.updateProjectionMatrix()),Xs.setFromMatrixPosition(U.matrixWorld),ge.position.copy(Xs),Zh.copy(ge.position),Zh.add(ZA[Q]),ge.up.copy(KA[Q]),ge.lookAt(Zh),ge.updateMatrixWorld(),be.makeTranslation(-Xs.x,-Xs.y,-Xs.z),n0.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),H._frustum.setFromProjectionMatrix(n0,ge.coordinateSystem,ge.reversedDepth)}else H.updateMatrices(U);i=H.getFrustum(),N(O,E,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===qs&&A(H,E),H.needsUpdate=!1}y=this.type,_.needsUpdate=!1,o.setRenderTarget(P,ue,V)};function A(k,O){const E=e.update(R);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,b.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new On(l.x,l.y,{format:Do,type:ba})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(O,null,E,g,R,null),b.uniforms.shadow_pass.value=k.mapPass.texture,b.uniforms.resolution.value=k.mapSize,b.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(O,null,E,b,R,null)}function D(k,O,E,P){let ue=null;const V=E.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=E.isPointLight===!0?m:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=ue.uuid,se=O.uuid;let le=f[J];le===void 0&&(le={},f[J]=le);let re=le[se];re===void 0&&(re=ue.clone(),le[se]=re,O.addEventListener("dispose",F)),ue=re}if(ue.visible=O.visible,ue.wireframe=O.wireframe,P===qs?ue.side=O.shadowSide!==null?O.shadowSide:O.side:ue.side=O.shadowSide!==null?O.shadowSide:S[O.side],ue.alphaMap=O.alphaMap,ue.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ue.map=O.map,ue.clipShadows=O.clipShadows,ue.clippingPlanes=O.clippingPlanes,ue.clipIntersection=O.clipIntersection,ue.displacementMap=O.displacementMap,ue.displacementScale=O.displacementScale,ue.displacementBias=O.displacementBias,ue.wireframeLinewidth=O.wireframeLinewidth,ue.linewidth=O.linewidth,E.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const J=o.properties.get(ue);J.light=E}return ue}function N(k,O,E,P,ue){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&ue===qs)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,k.matrixWorld);const J=e.update(k),se=k.material;if(Array.isArray(se)){const le=J.groups;for(let re=0,U=le.length;re<U;re++){const H=le[re],ce=se[H.materialIndex];if(ce&&ce.visible){const _e=D(k,ce,P,ue);k.onBeforeShadow(o,k,O,E,J,_e,H),o.renderBufferDirect(E,null,J,_e,k,H),k.onAfterShadow(o,k,O,E,J,_e,H)}}}else if(se.visible){const le=D(k,se,P,ue);k.onBeforeShadow(o,k,O,E,J,le,null),o.renderBufferDirect(E,null,J,le,k,null),k.onAfterShadow(o,k,O,E,J,le,null)}}const V=k.children;for(let J=0,se=V.length;J<se;J++)N(V[J],O,E,P,ue)}function F(k){k.target.removeEventListener("dispose",F);for(const O in f){const E=f[O],P=k.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function tC(o,e){function n(){let j=!1;const Pe=new or;let Ae=null;const Fe=new or(0,0,0,0);return{setMask:function(we){Ae!==we&&!j&&(o.colorMask(we,we,we,we),Ae=we)},setLocked:function(we){j=we},setClear:function(we,he,He,Qe,qt){qt===!0&&(we*=Qe,he*=Qe,He*=Qe),Pe.set(we,he,He,Qe),Fe.equals(Pe)===!1&&(o.clearColor(we,he,He,Qe),Fe.copy(Pe))},reset:function(){j=!1,Ae=null,Fe.set(-1,0,0,0)}}}function i(){let j=!1,Pe=!1,Ae=null,Fe=null,we=null;return{setReversed:function(he){if(Pe!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const Qe=we;we=null,this.setClear(Qe)}},getReversed:function(){return Pe},setTest:function(he){he?Me(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(he){Ae!==he&&!j&&(o.depthMask(he),Ae=he)},setFunc:function(he){if(Pe&&(he=k1[he]),Fe!==he){switch(he){case nf:o.depthFunc(o.NEVER);break;case af:o.depthFunc(o.ALWAYS);break;case of:o.depthFunc(o.LESS);break;case Io:o.depthFunc(o.LEQUAL);break;case sf:o.depthFunc(o.EQUAL);break;case lf:o.depthFunc(o.GEQUAL);break;case cf:o.depthFunc(o.GREATER);break;case uf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Fe=he}},setLocked:function(he){j=he},setClear:function(he){we!==he&&(we=he,Pe&&(he=1-he),o.clearDepth(he))},reset:function(){j=!1,Ae=null,Fe=null,we=null,Pe=!1}}}function l(){let j=!1,Pe=null,Ae=null,Fe=null,we=null,he=null,He=null,Qe=null,qt=null;return{setTest:function(xt){j||(xt?Me(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(xt){Pe!==xt&&!j&&(o.stencilMask(xt),Pe=xt)},setFunc:function(xt,fn,mr){(Ae!==xt||Fe!==fn||we!==mr)&&(o.stencilFunc(xt,fn,mr),Ae=xt,Fe=fn,we=mr)},setOp:function(xt,fn,mr){(he!==xt||He!==fn||Qe!==mr)&&(o.stencilOp(xt,fn,mr),he=xt,He=fn,Qe=mr)},setLocked:function(xt){j=xt},setClear:function(xt){qt!==xt&&(o.clearStencil(xt),qt=xt)},reset:function(){j=!1,Pe=null,Ae=null,Fe=null,we=null,he=null,He=null,Qe=null,qt=null}}}const c=new n,d=new i,p=new l,m=new WeakMap,f=new WeakMap;let v={},S={},g=new WeakMap,b=[],x=null,R=!1,_=null,y=null,A=null,D=null,N=null,F=null,k=null,O=new vt(0,0,0),E=0,P=!1,ue=null,V=null,J=null,se=null,le=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const ce=o.getParameter(o.VERSION);ce.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ce)[1]),U=H>=1):ce.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),U=H>=2);let _e=null,L={};const Q=o.getParameter(o.SCISSOR_BOX),ge=o.getParameter(o.VIEWPORT),be=new or().fromArray(Q),Ne=new or().fromArray(ge);function Xe(j,Pe,Ae,Fe){const we=new Uint8Array(4),he=o.createTexture();o.bindTexture(j,he),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<Ae;He++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,Fe,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(Pe+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return he}const K={};K[o.TEXTURE_2D]=Xe(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Xe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Xe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Xe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Me(o.DEPTH_TEST),d.setFunc(Io),Zt(!1),Ut(a_),Me(o.CULL_FACE),it(va);function Me(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function Se(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function et(j,Pe){return S[j]!==Pe?(o.bindFramebuffer(j,Pe),S[j]=Pe,j===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Pe),j===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(j,Pe){let Ae=b,Fe=!1;if(j){Ae=g.get(Pe),Ae===void 0&&(Ae=[],g.set(Pe,Ae));const we=j.textures;if(Ae.length!==we.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let he=0,He=we.length;he<He;he++)Ae[he]=o.COLOR_ATTACHMENT0+he;Ae.length=we.length,Fe=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Fe=!0);Fe&&o.drawBuffers(Ae)}function Be(j){return x!==j?(o.useProgram(j),x=j,!0):!1}const Et={[Ri]:o.FUNC_ADD,[a1]:o.FUNC_SUBTRACT,[i1]:o.FUNC_REVERSE_SUBTRACT};Et[o1]=o.MIN,Et[s1]=o.MAX;const wt={[l1]:o.ZERO,[c1]:o.ONE,[u1]:o.SRC_COLOR,[tf]:o.SRC_ALPHA,[g1]:o.SRC_ALPHA_SATURATE,[p1]:o.DST_COLOR,[h1]:o.DST_ALPHA,[d1]:o.ONE_MINUS_SRC_COLOR,[rf]:o.ONE_MINUS_SRC_ALPHA,[m1]:o.ONE_MINUS_DST_COLOR,[f1]:o.ONE_MINUS_DST_ALPHA,[v1]:o.CONSTANT_COLOR,[_1]:o.ONE_MINUS_CONSTANT_COLOR,[y1]:o.CONSTANT_ALPHA,[b1]:o.ONE_MINUS_CONSTANT_ALPHA};function it(j,Pe,Ae,Fe,we,he,He,Qe,qt,xt){if(j===va){R===!0&&(Se(o.BLEND),R=!1);return}if(R===!1&&(Me(o.BLEND),R=!0),j!==n1){if(j!==_||xt!==P){if((y!==Ri||N!==Ri)&&(o.blendEquation(o.FUNC_ADD),y=Ri,N=Ri),xt)switch(j){case No:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tu:o.blendFunc(o.ONE,o.ONE);break;case i_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case o_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Mt("WebGLState: Invalid blending: ",j);break}else switch(j){case No:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case i_:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case o_:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",j);break}A=null,D=null,F=null,k=null,O.set(0,0,0),E=0,_=j,P=xt}return}we=we||Pe,he=he||Ae,He=He||Fe,(Pe!==y||we!==N)&&(o.blendEquationSeparate(Et[Pe],Et[we]),y=Pe,N=we),(Ae!==A||Fe!==D||he!==F||He!==k)&&(o.blendFuncSeparate(wt[Ae],wt[Fe],wt[he],wt[He]),A=Ae,D=Fe,F=he,k=He),(Qe.equals(O)===!1||qt!==E)&&(o.blendColor(Qe.r,Qe.g,Qe.b,qt),O.copy(Qe),E=qt),_=j,P=!1}function rr(j,Pe){j.side===pa?Se(o.CULL_FACE):Me(o.CULL_FACE);let Ae=j.side===Vr;Pe&&(Ae=!Ae),Zt(Ae),j.blending===No&&j.transparent===!1?it(va):it(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Xt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(j){ue!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),ue=j)}function Ut(j){j!==e1?(Me(o.CULL_FACE),j!==V&&(j===a_?o.cullFace(o.BACK):j===t1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),V=j}function G(j){j!==J&&(U&&o.lineWidth(j),J=j)}function Xt(j,Pe,Ae){j?(Me(o.POLYGON_OFFSET_FILL),(se!==Pe||le!==Ae)&&(se=Pe,le=Ae,d.getReversed()&&(Pe=-Pe),o.polygonOffset(Pe,Ae))):Se(o.POLYGON_OFFSET_FILL)}function yt(j){j?Me(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function Tt(j){j===void 0&&(j=o.TEXTURE0+re-1),_e!==j&&(o.activeTexture(j),_e=j)}function je(j,Pe,Ae){Ae===void 0&&(_e===null?Ae=o.TEXTURE0+re-1:Ae=_e);let Fe=L[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},L[Ae]=Fe),(Fe.type!==j||Fe.texture!==Pe)&&(_e!==Ae&&(o.activeTexture(Ae),_e=Ae),o.bindTexture(j,Pe||K[j]),Fe.type=j,Fe.texture=Pe)}function I(){const j=L[_e];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function X(){try{o.compressedTexImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function me(){try{o.texSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function fe(){try{o.texSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function pe(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function De(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Re(){try{o.texStorage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function $e(){try{o.texStorage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function qe(){try{o.texImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ee(){try{o.texImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Te(j){be.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),be.copy(j))}function We(j){Ne.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Ne.copy(j))}function ze(j,Pe){let Ae=f.get(Pe);Ae===void 0&&(Ae=new WeakMap,f.set(Pe,Ae));let Fe=Ae.get(j);Fe===void 0&&(Fe=o.getUniformBlockIndex(Pe,j.name),Ae.set(j,Fe))}function Ue(j,Pe){const Ae=f.get(Pe).get(j);m.get(Pe)!==Ae&&(o.uniformBlockBinding(Pe,Ae,j.__bindingPointIndex),m.set(Pe,Ae))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_e=null,L={},S={},g=new WeakMap,b=[],x=null,R=!1,_=null,y=null,A=null,D=null,N=null,F=null,k=null,O=new vt(0,0,0),E=0,P=!1,ue=null,V=null,J=null,se=null,le=null,be.set(0,0,o.canvas.width,o.canvas.height),Ne.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Me,disable:Se,bindFramebuffer:et,drawBuffers:Ze,useProgram:Be,setBlending:it,setMaterial:rr,setFlipSided:Zt,setCullFace:Ut,setLineWidth:G,setPolygonOffset:Xt,setScissorTest:yt,activeTexture:Tt,bindTexture:je,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:qe,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:$e,texSubImage2D:me,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:De,scissor:Te,viewport:We,reset:ut}}function rC(o,e,n,i,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Bt,v=new WeakMap;let S;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return b?new OffscreenCanvas(I,w):au("canvas")}function R(I,w,X){let me=1;const fe=je(I);if((fe.width>X||fe.height>X)&&(me=X/Math.max(fe.width,fe.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(me*fe.width),De=Math.floor(me*fe.height);S===void 0&&(S=x(pe,De));const Re=w?x(pe,De):S;return Re.width=pe,Re.height=De,Re.getContext("2d").drawImage(I,0,0,pe,De),at("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+De+")."),Re}else return"data"in I&&at("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function _(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(I,w,X,me,fe=!1){if(I!==null){if(o[I]!==void 0)return o[I];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=w;if(w===o.RED&&(X===o.FLOAT&&(pe=o.R32F),X===o.HALF_FLOAT&&(pe=o.R16F),X===o.UNSIGNED_BYTE&&(pe=o.R8)),w===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(pe=o.R8UI),X===o.UNSIGNED_SHORT&&(pe=o.R16UI),X===o.UNSIGNED_INT&&(pe=o.R32UI),X===o.BYTE&&(pe=o.R8I),X===o.SHORT&&(pe=o.R16I),X===o.INT&&(pe=o.R32I)),w===o.RG&&(X===o.FLOAT&&(pe=o.RG32F),X===o.HALF_FLOAT&&(pe=o.RG16F),X===o.UNSIGNED_BYTE&&(pe=o.RG8)),w===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(pe=o.RG8UI),X===o.UNSIGNED_SHORT&&(pe=o.RG16UI),X===o.UNSIGNED_INT&&(pe=o.RG32UI),X===o.BYTE&&(pe=o.RG8I),X===o.SHORT&&(pe=o.RG16I),X===o.INT&&(pe=o.RG32I)),w===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),X===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),X===o.UNSIGNED_INT&&(pe=o.RGB32UI),X===o.BYTE&&(pe=o.RGB8I),X===o.SHORT&&(pe=o.RGB16I),X===o.INT&&(pe=o.RGB32I)),w===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),X===o.UNSIGNED_INT&&(pe=o.RGBA32UI),X===o.BYTE&&(pe=o.RGBA8I),X===o.SHORT&&(pe=o.RGBA16I),X===o.INT&&(pe=o.RGBA32I)),w===o.RGB&&(X===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),X===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),w===o.RGBA){const De=fe?ru:bt.getTransfer(me);X===o.FLOAT&&(pe=o.RGBA32F),X===o.HALF_FLOAT&&(pe=o.RGBA16F),X===o.UNSIGNED_BYTE&&(pe=De===It?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(I,w){let X;return I?w===null||w===Bn||w===Qs?X=o.DEPTH24_STENCIL8:w===Dn?X=o.DEPTH32F_STENCIL8:w===Js&&(X=o.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bn||w===Qs?X=o.DEPTH_COMPONENT24:w===Dn?X=o.DEPTH_COMPONENT32F:w===Js&&(X=o.DEPTH_COMPONENT16),X}function F(I,w){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Er&&I.minFilter!==Rr?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function k(I){const w=I.target;w.removeEventListener("dispose",k),E(w),w.isVideoTexture&&v.delete(w)}function O(I){const w=I.target;w.removeEventListener("dispose",O),ue(w)}function E(I){const w=i.get(I);if(w.__webglInit===void 0)return;const X=I.source,me=g.get(X);if(me){const fe=me[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&P(I),Object.keys(me).length===0&&g.delete(X)}i.remove(I)}function P(I){const w=i.get(I);o.deleteTexture(w.__webglTexture);const X=I.source,me=g.get(X);delete me[w.__cacheKey],d.memory.textures--}function ue(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let fe=0;fe<w.__webglFramebuffer[me].length;fe++)o.deleteFramebuffer(w.__webglFramebuffer[me][fe]);else o.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)o.deleteFramebuffer(w.__webglFramebuffer[me]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=I.textures;for(let me=0,fe=X.length;me<fe;me++){const pe=i.get(X[me]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),i.remove(X[me])}i.remove(I)}let V=0;function J(){V=0}function se(){const I=V;return I>=l.maxTextures&&at("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),V+=1,I}function le(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function re(I,w){const X=i.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const me=I.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,I,w);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+w)}function U(I,w){const X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){K(X,I,w);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+w)}function H(I,w){const X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){K(X,I,w);return}n.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+w)}function ce(I,w){const X=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){Me(X,I,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+w)}const _e={[df]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[hf]:o.MIRRORED_REPEAT},L={[Er]:o.NEAREST,[M1]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[Rr]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Ni]:o.LINEAR_MIPMAP_LINEAR},Q={[A1]:o.NEVER,[L1]:o.ALWAYS,[C1]:o.LESS,[lp]:o.LEQUAL,[R1]:o.EQUAL,[cp]:o.GEQUAL,[P1]:o.GREATER,[N1]:o.NOTEQUAL};function ge(I,w){if(w.type===Dn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rr||w.magFilter===xh||w.magFilter===_c||w.magFilter===Ni||w.minFilter===Rr||w.minFilter===xh||w.minFilter===_c||w.minFilter===Ni)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,_e[w.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,_e[w.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,_e[w.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,L[w.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Er||w.minFilter!==_c&&w.minFilter!==Ni||w.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function be(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let fe=g.get(me);fe===void 0&&(fe={},g.set(me,fe));const pe=le(w);if(pe!==I.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,X=!0),fe[pe].usedTimes++;const De=fe[I.__cacheKey];De!==void 0&&(fe[I.__cacheKey].usedTimes--,De.usedTimes===0&&P(w)),I.__cacheKey=pe,I.__webglTexture=fe[pe].texture}return X}function Ne(I,w,X){return Math.floor(Math.floor(I/X)/w)}function Xe(I,w,X,me){const fe=I.updateRanges;if(fe.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,X,me,w.data);else{fe.sort((qe,Ee)=>qe.start-Ee.start);let pe=0;for(let qe=1;qe<fe.length;qe++){const Ee=fe[pe],Te=fe[qe],We=Ee.start+Ee.count,ze=Ne(Te.start,w.width,4),Ue=Ne(Ee.start,w.width,4);Te.start<=We+1&&ze===Ue&&Ne(Te.start+Te.count-1,w.width,4)===ze?Ee.count=Math.max(Ee.count,Te.start+Te.count-Ee.start):(++pe,fe[pe]=Te)}fe.length=pe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Re=o.getParameter(o.UNPACK_SKIP_PIXELS),$e=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let qe=0,Ee=fe.length;qe<Ee;qe++){const Te=fe[qe],We=Math.floor(Te.start/4),ze=Math.ceil(Te.count/4),Ue=We%w.width,ut=Math.floor(We/w.width),j=ze;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,ut),n.texSubImage2D(o.TEXTURE_2D,0,Ue,ut,j,1,X,me,w.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Re),o.pixelStorei(o.UNPACK_SKIP_ROWS,$e)}}function K(I,w,X){let me=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=o.TEXTURE_3D);const fe=be(I,w),pe=w.source;n.bindTexture(me,I.__webglTexture,o.TEXTURE0+X);const De=i.get(pe);if(pe.version!==De.__version||fe===!0){n.activeTexture(o.TEXTURE0+X);const Re=bt.getPrimaries(bt.workingColorSpace),$e=w.colorSpace===ni?null:bt.getPrimaries(w.colorSpace),qe=w.colorSpace===ni||Re===$e?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ee=R(w.image,!1,l.maxTextureSize);Ee=Tt(w,Ee);const Te=c.convert(w.format,w.colorSpace),We=c.convert(w.type);let ze=D(w.internalFormat,Te,We,w.colorSpace,w.isVideoTexture);ge(me,w);let Ue;const ut=w.mipmaps,j=w.isVideoTexture!==!0,Pe=De.__version===void 0||fe===!0,Ae=pe.dataReady,Fe=F(w,Ee);if(w.isDepthTexture)ze=N(w.format===Li,w.type),Pe&&(j?n.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Te,We,null));else if(w.isDataTexture)if(ut.length>0){j&&Pe&&n.texStorage2D(o.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let we=0,he=ut.length;we<he;we++)Ue=ut[we],j?Ae&&n.texSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,We,Ue.data):n.texImage2D(o.TEXTURE_2D,we,ze,Ue.width,Ue.height,0,Te,We,Ue.data);w.generateMipmaps=!1}else j?(Pe&&n.texStorage2D(o.TEXTURE_2D,Fe,ze,Ee.width,Ee.height),Ae&&Xe(w,Ee,Te,We)):n.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Te,We,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){j&&Pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,ze,ut[0].width,ut[0].height,Ee.depth);for(let we=0,he=ut.length;we<he;we++)if(Ue=ut[we],w.format!==Mn)if(Te!==null)if(j){if(Ae)if(w.layerUpdates.size>0){const He=U_(Ue.width,Ue.height,w.format,w.type);for(const Qe of w.layerUpdates){const qt=Ue.data.subarray(Qe*He/Ue.data.BYTES_PER_ELEMENT,(Qe+1)*He/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,Qe,Ue.width,Ue.height,1,Te,qt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,we,ze,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Ee.depth,Te,We,Ue.data):n.texImage3D(o.TEXTURE_2D_ARRAY,we,ze,Ue.width,Ue.height,Ee.depth,0,Te,We,Ue.data)}else{j&&Pe&&n.texStorage2D(o.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let we=0,he=ut.length;we<he;we++)Ue=ut[we],w.format!==Mn?Te!==null?j?Ae&&n.compressedTexSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,Ue.data):n.compressedTexImage2D(o.TEXTURE_2D,we,ze,Ue.width,Ue.height,0,Ue.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&n.texSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Te,We,Ue.data):n.texImage2D(o.TEXTURE_2D,we,ze,Ue.width,Ue.height,0,Te,We,Ue.data)}else if(w.isDataArrayTexture)if(j){if(Pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,ze,Ee.width,Ee.height,Ee.depth),Ae)if(w.layerUpdates.size>0){const we=U_(Ee.width,Ee.height,w.format,w.type);for(const he of w.layerUpdates){const He=Ee.data.subarray(he*we/Ee.data.BYTES_PER_ELEMENT,(he+1)*we/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Te,We,He)}w.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,We,Ee.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Te,We,Ee.data);else if(w.isData3DTexture)j?(Pe&&n.texStorage3D(o.TEXTURE_3D,Fe,ze,Ee.width,Ee.height,Ee.depth),Ae&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,We,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Te,We,Ee.data);else if(w.isFramebufferTexture){if(Pe)if(j)n.texStorage2D(o.TEXTURE_2D,Fe,ze,Ee.width,Ee.height);else{let we=Ee.width,he=Ee.height;for(let He=0;He<Fe;He++)n.texImage2D(o.TEXTURE_2D,He,ze,we,he,0,Te,We,null),we>>=1,he>>=1}}else if(ut.length>0){if(j&&Pe){const we=je(ut[0]);n.texStorage2D(o.TEXTURE_2D,Fe,ze,we.width,we.height)}for(let we=0,he=ut.length;we<he;we++)Ue=ut[we],j?Ae&&n.texSubImage2D(o.TEXTURE_2D,we,0,0,Te,We,Ue):n.texImage2D(o.TEXTURE_2D,we,ze,Te,We,Ue);w.generateMipmaps=!1}else if(j){if(Pe){const we=je(Ee);n.texStorage2D(o.TEXTURE_2D,Fe,ze,we.width,we.height)}Ae&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,We,Ee)}else n.texImage2D(o.TEXTURE_2D,0,ze,Te,We,Ee);_(w)&&y(me),De.__version=pe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Me(I,w,X){if(w.image.length!==6)return;const me=be(I,w),fe=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+X);const pe=i.get(fe);if(fe.version!==pe.__version||me===!0){n.activeTexture(o.TEXTURE0+X);const De=bt.getPrimaries(bt.workingColorSpace),Re=w.colorSpace===ni?null:bt.getPrimaries(w.colorSpace),$e=w.colorSpace===ni||De===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let he=0;he<6;he++)!qe&&!Ee?Te[he]=R(w.image[he],!0,l.maxCubemapSize):Te[he]=Ee?w.image[he].image:w.image[he],Te[he]=Tt(w,Te[he]);const We=Te[0],ze=c.convert(w.format,w.colorSpace),Ue=c.convert(w.type),ut=D(w.internalFormat,ze,Ue,w.colorSpace),j=w.isVideoTexture!==!0,Pe=pe.__version===void 0||me===!0,Ae=fe.dataReady;let Fe=F(w,We);ge(o.TEXTURE_CUBE_MAP,w);let we;if(qe){j&&Pe&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,We.width,We.height);for(let he=0;he<6;he++){we=Te[he].mipmaps;for(let He=0;He<we.length;He++){const Qe=we[He];w.format!==Mn?ze!==null?j?Ae&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Qe.width,Qe.height,ze,Qe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ut,Qe.width,Qe.height,0,Qe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Qe.width,Qe.height,ze,Ue,Qe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ut,Qe.width,Qe.height,0,ze,Ue,Qe.data)}}}else{if(we=w.mipmaps,j&&Pe){we.length>0&&Fe++;const he=je(Te[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){j?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Te[he].width,Te[he].height,ze,Ue,Te[he].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Te[he].width,Te[he].height,0,ze,Ue,Te[he].data);for(let He=0;He<we.length;He++){const Qe=we[He].image[he].image;j?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Qe.width,Qe.height,ze,Ue,Qe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ut,Qe.width,Qe.height,0,ze,Ue,Qe.data)}}else{j?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,Ue,Te[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,ze,Ue,Te[he]);for(let He=0;He<we.length;He++){const Qe=we[He];j?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,ze,Ue,Qe.image[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ut,ze,Ue,Qe.image[he])}}}_(w)&&y(o.TEXTURE_CUBE_MAP),pe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Se(I,w,X,me,fe,pe){const De=c.convert(X.format,X.colorSpace),Re=c.convert(X.type),$e=D(X.internalFormat,De,Re,X.colorSpace),qe=i.get(w),Ee=i.get(X);if(Ee.__renderTarget=w,!qe.__hasExternalTextures){const Te=Math.max(1,w.width>>pe),We=Math.max(1,w.height>>pe);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?n.texImage3D(fe,pe,$e,Te,We,w.depth,0,De,Re,null):n.texImage2D(fe,pe,$e,Te,We,0,De,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,I),Xt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,fe,Ee.__webglTexture,0,G(w)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,fe,Ee.__webglTexture,pe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function et(I,w,X){if(o.bindRenderbuffer(o.RENDERBUFFER,I),w.depthBuffer){const me=w.depthTexture,fe=me&&me.isDepthTexture?me.type:null,pe=N(w.stencilBuffer,fe),De=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xt(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(w),pe,w.width,w.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(w),pe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,pe,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,I)}else{const me=w.textures;for(let fe=0;fe<me.length;fe++){const pe=me[fe],De=c.convert(pe.format,pe.colorSpace),Re=c.convert(pe.type),$e=D(pe.internalFormat,De,Re,pe.colorSpace);Xt(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(w),$e,w.width,w.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(w),$e,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,$e,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ze(I,w,X){const me=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=i.get(w.depthTexture);if(fe.__renderTarget=w,(!fe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ge(o.TEXTURE_CUBE_MAP,w.depthTexture);const qe=c.convert(w.depthTexture.format),Ee=c.convert(w.depthTexture.type);let Te;w.depthTexture.format===xa?Te=o.DEPTH_COMPONENT24:w.depthTexture.format===Li&&(Te=o.DEPTH24_STENCIL8);for(let We=0;We<6;We++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Te,w.width,w.height,0,qe,Ee,null)}}else re(w.depthTexture,0);const pe=fe.__webglTexture,De=G(w),Re=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+X:o.TEXTURE_2D,$e=w.depthTexture.format===Li?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===xa)Xt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$e,Re,pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,$e,Re,pe,0);else if(w.depthTexture.format===Li)Xt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$e,Re,pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,$e,Re,pe,0);else throw new Error("Unknown depthTexture format")}function Be(I){const w=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",fe)};me.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=me}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let me=0;me<6;me++)Ze(w.__webglFramebuffer[me],I,me);else{const me=I.texture.mipmaps;me&&me.length>0?Ze(w.__webglFramebuffer[0],I,0):Ze(w.__webglFramebuffer,I,0)}else if(X){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=o.createRenderbuffer(),et(w.__webglDepthbuffer[me],I,!1);else{const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,pe)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),et(w.__webglDepthbuffer,I,!1);else{const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,pe)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(I,w,X){const me=i.get(I);w!==void 0&&Se(me.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&Be(I)}function wt(I){const w=I.texture,X=i.get(I),me=i.get(w);I.addEventListener("dispose",O);const fe=I.textures,pe=I.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=w.version,d.memory.textures++),pe){X.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Re]=[];for(let $e=0;$e<w.mipmaps.length;$e++)X.__webglFramebuffer[Re][$e]=o.createFramebuffer()}else X.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)X.__webglFramebuffer[Re]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(De)for(let Re=0,$e=fe.length;Re<$e;Re++){const qe=i.get(fe[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&Xt(I)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Re=0;Re<fe.length;Re++){const $e=fe[Re];X.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[Re]);const qe=c.convert($e.format,$e.colorSpace),Ee=c.convert($e.type),Te=D($e.internalFormat,qe,Ee,$e.colorSpace,I.isXRRenderTarget===!0),We=G(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Te,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,X.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),et(X.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){n.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ge(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)Se(X.__webglFramebuffer[Re][$e],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e);else Se(X.__webglFramebuffer[Re],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(w)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let Re=0,$e=fe.length;Re<$e;Re++){const qe=fe[Re],Ee=i.get(qe);let Te=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Te,Ee.__webglTexture),ge(Te,qe),Se(X.__webglFramebuffer,I,qe,o.COLOR_ATTACHMENT0+Re,Te,0),_(qe)&&y(Te)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,me.__webglTexture),ge(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)Se(X.__webglFramebuffer[$e],I,w,o.COLOR_ATTACHMENT0,Re,$e);else Se(X.__webglFramebuffer,I,w,o.COLOR_ATTACHMENT0,Re,0);_(w)&&y(Re),n.unbindTexture()}I.depthBuffer&&Be(I)}function it(I){const w=I.textures;for(let X=0,me=w.length;X<me;X++){const fe=w[X];if(_(fe)){const pe=A(I),De=i.get(fe).__webglTexture;n.bindTexture(pe,De),y(pe),n.unbindTexture()}}}const rr=[],Zt=[];function Ut(I){if(I.samples>0){if(Xt(I)===!1){const w=I.textures,X=I.width,me=I.height;let fe=o.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=i.get(I),Re=w.length>1;if(Re)for(let qe=0;qe<w.length;qe++)n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const $e=I.texture.mipmaps;$e&&$e.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,De.__webglColorRenderbuffer[qe]);const Ee=i.get(w[qe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,X,me,0,0,X,me,fe,o.NEAREST),m===!0&&(rr.length=0,Zt.length=0,rr.push(o.COLOR_ATTACHMENT0+qe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rr.push(pe),Zt.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Zt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,rr))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<w.length;qe++){n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,De.__webglColorRenderbuffer[qe]);const Ee=i.get(w[qe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,Ee,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const w=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function G(I){return Math.min(l.maxSamples,I.samples)}function Xt(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(I){const w=d.render.frame;v.get(I)!==w&&(v.set(I,w),I.update())}function Tt(I,w){const X=I.colorSpace,me=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ko&&X!==ni&&(bt.getTransfer(X)===It?(me!==Mn||fe!==un)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",X)),w}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=se,this.resetTextureUnits=J,this.setTexture2D=re,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=ce,this.rebindTextures=Et,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nC(o,e){function n(i,l=ni){let c;const d=bt.getTransfer(l);if(i===un)return o.UNSIGNED_BYTE;if(i===np)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return o.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===D0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===L0)return o.BYTE;if(i===I0)return o.SHORT;if(i===Js)return o.UNSIGNED_SHORT;if(i===rp)return o.INT;if(i===Bn)return o.UNSIGNED_INT;if(i===Dn)return o.FLOAT;if(i===ba)return o.HALF_FLOAT;if(i===k0)return o.ALPHA;if(i===F0)return o.RGB;if(i===Mn)return o.RGBA;if(i===xa)return o.DEPTH_COMPONENT;if(i===Li)return o.DEPTH_STENCIL;if(i===O0)return o.RED;if(i===ip)return o.RED_INTEGER;if(i===Do)return o.RG;if(i===op)return o.RG_INTEGER;if(i===sp)return o.RGBA_INTEGER;if(i===Yc||i===$c||i===Jc||i===Qc)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(i===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(i===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===pf||i===mf||i===gf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(i===ff)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vf||i===_f||i===yf||i===bf||i===xf||i===Sf||i===Mf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(i===vf||i===_f)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(i===yf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(i===bf)return c.COMPRESSED_R11_EAC;if(i===xf)return c.COMPRESSED_SIGNED_R11_EAC;if(i===Sf)return c.COMPRESSED_RG11_EAC;if(i===Mf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===Lf||i===If||i===Uf||i===Df||i===kf||i===Ff)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(i===Ef)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Af)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===If)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Df)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ff)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Of||i===Bf||i===zf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(i===Of)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===Wf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(i===Hf)return c.COMPRESSED_RED_RGTC1_EXT;if(i===Vf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:n}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new J0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new zn({vertexShader:aC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ma(new du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends Bo{constructor(e,n){super();const i=this;let l=null,c=1,d=null,p="local-floor",m=1,f=null,v=null,S=null,g=null,b=null,x=null;const R=typeof XRWebGLBinding<"u",_=new oC,y={},A=n.getContextAttributes();let D=null,N=null;const F=[],k=[],O=new Bt;let E=null;const P=new cn;P.viewport=new or;const ue=new cn;ue.viewport=new or;const V=[P,ue],J=new yM;let se=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Me=F[K];return Me===void 0&&(Me=new Rh,F[K]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(K){let Me=F[K];return Me===void 0&&(Me=new Rh,F[K]=Me),Me.getGripSpace()},this.getHand=function(K){let Me=F[K];return Me===void 0&&(Me=new Rh,F[K]=Me),Me.getHandSpace()};function re(K){const Me=k.indexOf(K.inputSource);if(Me===-1)return;const Se=F[Me];Se!==void 0&&(Se.update(K.inputSource,K.frame,f||d),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",H);for(let K=0;K<F.length;K++){const Me=k[K];Me!==null&&(k[K]=null,F[K].disconnect(Me))}se=null,le=null,_.reset();for(const K in y)delete y[K];e.setRenderTarget(D),b=null,g=null,S=null,l=null,N=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){p=K,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||d},this.setReferenceSpace=function(K){f=K},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,n)),S},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",U),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Se=null,et=null;A.depth&&(et=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=A.stencil?Li:xa,Se=A.stencil?Qs:Bn);const Ze={colorFormat:n.RGBA8,depthFormat:et,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ze),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new On(g.textureWidth,g.textureHeight,{format:Mn,type:un,depthTexture:new Zs(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,n,Me),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new On(b.framebufferWidth,b.framebufferHeight,{format:Mn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),f=null,d=await l.requestReferenceSpace(p),Xe.setContext(l),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(K){for(let Me=0;Me<K.removed.length;Me++){const Se=K.removed[Me],et=k.indexOf(Se);et>=0&&(k[et]=null,F[et].disconnect(Se))}for(let Me=0;Me<K.added.length;Me++){const Se=K.added[Me];let et=k.indexOf(Se);if(et===-1){for(let Be=0;Be<F.length;Be++)if(Be>=k.length){k.push(Se),et=Be;break}else if(k[Be]===null){k[Be]=Se,et=Be;break}if(et===-1)break}const Ze=F[et];Ze&&Ze.connect(Se)}}const ce=new ne,_e=new ne;function L(K,Me,Se){ce.setFromMatrixPosition(Me.matrixWorld),_e.setFromMatrixPosition(Se.matrixWorld);const et=ce.distanceTo(_e),Ze=Me.projectionMatrix.elements,Be=Se.projectionMatrix.elements,Et=Ze[14]/(Ze[10]-1),wt=Ze[14]/(Ze[10]+1),it=(Ze[9]+1)/Ze[5],rr=(Ze[9]-1)/Ze[5],Zt=(Ze[8]-1)/Ze[0],Ut=(Be[8]+1)/Be[0],G=Et*Zt,Xt=Et*Ut,yt=et/(-Zt+Ut),Tt=yt*-Zt;if(Me.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(yt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ze[10]===-1)K.projectionMatrix.copy(Me.projectionMatrix),K.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const je=Et+yt,I=wt+yt,w=G-Tt,X=Xt+(et-Tt),me=it*wt/I*je,fe=rr*wt/I*je;K.projectionMatrix.makePerspective(w,X,me,fe,je,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,Me){Me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let Me=K.near,Se=K.far;_.texture!==null&&(_.depthNear>0&&(Me=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),J.near=ue.near=P.near=Me,J.far=ue.far=P.far=Se,(se!==J.near||le!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),se=J.near,le=J.far),J.layers.mask=K.layers.mask|6,P.layers.mask=J.layers.mask&-5,ue.layers.mask=J.layers.mask&-3;const et=K.parent,Ze=J.cameras;Q(J,et);for(let Be=0;Be<Ze.length;Be++)Q(Ze[Be],et);Ze.length===2?L(J,P,ue):J.projectionMatrix.copy(P.projectionMatrix),ge(K,J,et)};function ge(K,Me,Se){Se===null?K.matrix.copy(Me.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(Me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Me.projectionMatrix),K.projectionMatrixInverse.copy(Me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(K){return y[K]};let be=null;function Ne(K,Me){if(v=Me.getViewerPose(f||d),x=Me,v!==null){const Se=v.views;b!==null&&(e.setRenderTargetFramebuffer(N,b.framebuffer),e.setRenderTarget(N));let et=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,et=!0);for(let Be=0;Be<Se.length;Be++){const Et=Se[Be];let wt=null;if(b!==null)wt=b.getViewport(Et);else{const rr=S.getViewSubImage(g,Et);wt=rr.viewport,Be===0&&(e.setRenderTargetTextures(N,rr.colorTexture,rr.depthStencilTexture),e.setRenderTarget(N))}let it=V[Be];it===void 0&&(it=new cn,it.layers.enable(Be),it.viewport=new or,V[Be]=it),it.matrix.fromArray(Et.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Et.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(wt.x,wt.y,wt.width,wt.height),Be===0&&(J.matrix.copy(it.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),et===!0&&J.cameras.push(it)}const Ze=l.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=i.getBinding();const Be=S.getDepthInformation(Se[0]);Be&&Be.isValid&&Be.texture&&_.init(Be,l.renderState)}if(Ze&&Ze.includes("camera-access")&&R){e.state.unbindTexture(),S=i.getBinding();for(let Be=0;Be<Se.length;Be++){const Et=Se[Be].camera;if(Et){let wt=y[Et];wt||(wt=new J0,y[Et]=wt);const it=S.getCameraImage(Et);wt.sourceTexture=it}}}}for(let Se=0;Se<F.length;Se++){const et=k[Se],Ze=F[Se];et!==null&&Ze!==void 0&&Ze.update(et,Me,f||d)}be&&be(K,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),x=null}const Xe=new ey;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Ai=new Sa,lC=new tr;function cC(o,e){function n(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function i(_,y){y.color.getRGB(_.fogColor.value,Q0(o)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function l(_,y,A,D,N){y.isMeshBasicMaterial?c(_,y):y.isMeshLambertMaterial?(c(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(_,y),S(_,y)):y.isMeshPhongMaterial?(c(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(_,y),g(_,y),y.isMeshPhysicalMaterial&&b(_,y,N)):y.isMeshMatcapMaterial?(c(_,y),x(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),R(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(d(_,y),y.isLineDashedMaterial&&p(_,y)):y.isPointsMaterial?m(_,y,A,D):y.isSpriteMaterial?f(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,n(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,n(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Vr&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,n(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Vr&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,n(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,n(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const A=e.get(y),D=A.envMap,N=A.envMapRotation;D&&(_.envMap.value=D,Ai.copy(N),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),_.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Ai)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,_.aoMapTransform))}function d(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,n(y.map,_.mapTransform))}function p(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function m(_,y,A,D){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*A,_.scale.value=D*.5,y.map&&(_.map.value=y.map,n(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function f(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,n(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function S(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function b(_,y,A){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vr&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,y){y.matcap&&(_.matcap.value=y.matcap)}function R(_,y){const A=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function uC(o,e,n,i){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const N=D.program;i.uniformBlockBinding(A,N)}function f(A,D){let N=l[A.id];N===void 0&&(x(A),N=v(A),l[A.id]=N,A.addEventListener("dispose",_));const F=D.program;i.updateUBOMapping(A,F);const k=e.render.frame;c[A.id]!==k&&(g(A),c[A.id]=k)}function v(A){const D=S();A.__bindingPointIndex=D;const N=o.createBuffer(),F=A.__size,k=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,N),N}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=l[A.id],N=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let k=0,O=N.length;k<O;k++){const E=Array.isArray(N[k])?N[k]:[N[k]];for(let P=0,ue=E.length;P<ue;P++){const V=E[P];if(b(V,k,P,F)===!0){const J=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let re=0;re<se.length;re++){const U=se[re],H=R(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,J+le,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):(U.toArray(V.__data,le),le+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(A,D,N,F){const k=A.value,O=D+"_"+N;if(F[O]===void 0)return typeof k=="number"||typeof k=="boolean"?F[O]=k:F[O]=k.clone(),!0;{const E=F[O];if(typeof k=="number"||typeof k=="boolean"){if(E!==k)return F[O]=k,!0}else if(E.equals(k)===!1)return E.copy(k),!0}return!1}function x(A){const D=A.uniforms;let N=0;const F=16;for(let O=0,E=D.length;O<E;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let ue=0,V=P.length;ue<V;ue++){const J=P[ue],se=Array.isArray(J.value)?J.value:[J.value];for(let le=0,re=se.length;le<re;le++){const U=se[le],H=R(U),ce=N%F,_e=ce%H.boundary,L=ce+_e;N+=_e,L!==0&&F-L<H.storage&&(N+=F-L),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=H.storage}}}const k=N%F;return k>0&&(N+=F-k),A.__size=N,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",A),D}function _(A){const D=A.target;D.removeEventListener("dispose",_);const N=d.indexOf(D.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function y(){for(const A in l)o.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:f,dispose:y}}const dC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function hC(){return In===null&&(In=new nM(dC,16,16,Do,ba),In.name="DFG_LUT",In.minFilter=Rr,In.magFilter=Rr,In.wrapS=ma,In.wrapT=ma,In.generateMipmaps=!1,In.needsUpdate=!0),In}class fC{constructor(e={}){const{canvas:n=U1(),context:i=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:f=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=un}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=d;const R=b,_=new Set([sp,op,ip]),y=new Set([un,Bn,Js,Qs,np,ap]),A=new Uint32Array(4),D=new Int32Array(4);let N=null,F=null;const k=[],O=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let ue=!1;this._outputColorSpace=ln;let V=0,J=0,se=null,le=-1,re=null;const U=new or,H=new or;let ce=null;const _e=new vt(0);let L=0,Q=n.width,ge=n.height,be=1,Ne=null,Xe=null;const K=new or(0,0,Q,ge),Me=new or(0,0,Q,ge);let Se=!1;const et=new X0;let Ze=!1,Be=!1;const Et=new tr,wt=new ne,it=new or,rr={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Ut(){return se===null?be:1}let G=i;function Xt(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:f,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",Qe,!1),n.addEventListener("webglcontextcreationerror",qt,!1),G===null){const q="webgl2";if(G=Xt(q,C),G===null)throw Xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Mt("WebGLRenderer: "+C.message),C}let yt,Tt,je,I,w,X,me,fe,pe,De,Re,$e,qe,Ee,Te,We,ze,Ue,ut,j,Pe,Ae,Fe;function we(){yt=new fT(G),yt.init(),Pe=new nC(G,yt),Tt=new iT(G,yt,e,Pe),je=new tC(G,yt),Tt.reversedDepthBuffer&&g&&je.buffers.depth.setReversed(!0),I=new gT(G),w=new HA,X=new rC(G,yt,je,w,Tt,Pe,I),me=new hT(P),fe=new xM(G),Ae=new nT(G,fe),pe=new pT(G,fe,I,Ae),De=new _T(G,pe,fe,Ae,I),Ue=new vT(G,Tt,X),Te=new oT(w),Re=new zA(P,me,yt,Tt,Ae,Te),$e=new cC(P,w),qe=new GA,Ee=new $A(yt),ze=new rT(P,me,je,De,x,m),We=new eC(P,De,Tt),Fe=new uC(G,I,Tt,je),ut=new aT(G,yt,I),j=new mT(G,yt,I),I.programs=Re.programs,P.capabilities=Tt,P.extensions=yt,P.properties=w,P.renderLists=qe,P.shadowMap=We,P.state=je,P.info=I}we(),R!==un&&(E=new bT(R,n.width,n.height,l,c));const he=new sC(P,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(C){C!==void 0&&(be=C,this.setSize(Q,ge,!1))},this.getSize=function(C){return C.set(Q,ge)},this.setSize=function(C,q,oe=!0){if(he.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,ge=q,n.width=Math.floor(C*be),n.height=Math.floor(q*be),oe===!0&&(n.style.width=C+"px",n.style.height=q+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Q*be,ge*be).floor()},this.setDrawingBufferSize=function(C,q,oe){Q=C,ge=q,be=oe,n.width=Math.floor(C*oe),n.height=Math.floor(q*oe),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(R===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,q,oe,te){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,q,oe,te),je.viewport(U.copy(K).multiplyScalar(be).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,q,oe,te){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,q,oe,te),je.scissor(H.copy(Me).multiplyScalar(be).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){je.setScissorTest(Se=C)},this.setOpaqueSort=function(C){Ne=C},this.setTransparentSort=function(C){Xe=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,oe=!0){let te=0;if(C){let $=!1;if(se!==null){const Ce=se.texture.format;$=_.has(Ce)}if($){const Ce=se.texture.type,Le=y.has(Ce),ke=ze.getClearColor(),Oe=ze.getClearAlpha(),Ke=ke.r,ot=ke.g,dt=ke.b;Le?(A[0]=Ke,A[1]=ot,A[2]=dt,A[3]=Oe,G.clearBufferuiv(G.COLOR,0,A)):(D[0]=Ke,D[1]=ot,D[2]=dt,D[3]=Oe,G.clearBufferiv(G.COLOR,0,D))}else te|=G.COLOR_BUFFER_BIT}q&&(te|=G.DEPTH_BUFFER_BIT),oe&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",qt,!1),ze.dispose(),qe.dispose(),Ee.dispose(),w.dispose(),me.dispose(),De.dispose(),Ae.dispose(),Fe.dispose(),Re.dispose(),he.dispose(),he.removeEventListener("sessionstart",Di),he.removeEventListener("sessionend",ol),Gn.stop()};function He(C){C.preventDefault(),d_("WebGLRenderer: Context Lost."),ue=!0}function Qe(){d_("WebGLRenderer: Context Restored."),ue=!1;const C=I.autoReset,q=We.enabled,oe=We.autoUpdate,te=We.needsUpdate,$=We.type;we(),I.autoReset=C,We.enabled=q,We.autoUpdate=oe,We.needsUpdate=te,We.type=$}function qt(C){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const q=C.target;q.removeEventListener("dispose",xt),fn(q)}function fn(C){mr(C),w.remove(C)}function mr(C){const q=w.get(C).programs;q!==void 0&&(q.forEach(function(oe){Re.releaseProgram(oe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,oe,te,$,Ce){q===null&&(q=rr);const Le=$.isMesh&&$.matrixWorld.determinant()<0,ke=sl(C,q,oe,te,$);je.setMaterial(te,Le);let Oe=oe.index,Ke=1;if(te.wireframe===!0){if(Oe=pe.getWireframeAttribute(oe),Oe===void 0)return;Ke=2}const ot=oe.drawRange,dt=oe.attributes.position;let Ve=ot.start*Ke,Pt=(ot.start+ot.count)*Ke;Ce!==null&&(Ve=Math.max(Ve,Ce.start*Ke),Pt=Math.min(Pt,(Ce.start+Ce.count)*Ke)),Oe!==null?(Ve=Math.max(Ve,0),Pt=Math.min(Pt,Oe.count)):dt!=null&&(Ve=Math.max(Ve,0),Pt=Math.min(Pt,dt.count));const Yt=Pt-Ve;if(Yt<0||Yt===1/0)return;Ae.setup($,te,ke,oe,Oe);let Dt,Ct=ut;if(Oe!==null&&(Dt=fe.get(Oe),Ct=j,Ct.setIndex(Dt)),$.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Ut()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if($.isLine){let zt=te.linewidth;zt===void 0&&(zt=1),je.setLineWidth(zt*Ut()),$.isLineSegments?Ct.setMode(G.LINES):$.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else $.isPoints?Ct.setMode(G.POINTS):$.isSprite&&Ct.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)iu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const zt=$._multiDrawStarts,Je=$._multiDrawCounts,Gt=$._multiDrawCount,mn=Oe?fe.get(Oe).bytesPerElement:1,Ur=w.get(te).currentProgram.getUniforms();for(let Dr=0;Dr<Gt;Dr++)Ur.setValue(G,"_gl_DrawID",Dr),Ct.render(zt[Dr]/mn,Je[Dr])}else if($.isInstancedMesh)Ct.renderInstances(Ve,Yt,$.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Je=Math.min(oe.instanceCount,zt);Ct.renderInstances(Ve,Yt,Je)}else Ct.render(Ve,Yt)};function ur(C,q,oe){C.transparent===!0&&C.side===pa&&C.forceSinglePass===!1?(C.side=Vr,C.needsUpdate=!0,wn(C,q,oe),C.side=ii,C.needsUpdate=!0,wn(C,q,oe),C.side=pa):wn(C,q,oe)}this.compile=function(C,q,oe=null){oe===null&&(oe=C),F=Ee.get(oe),F.init(q),O.push(F),oe.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),C!==oe&&C.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const te=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){const ke=Ce[Le];ur(ke,oe,$),te.add(ke)}else ur(Ce,oe,$),te.add(Ce)}),F=O.pop(),te},this.compileAsync=function(C,q,oe=null){const te=this.compile(C,q,oe);return new Promise($=>{function Ce(){if(te.forEach(function(Le){w.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){$(C);return}setTimeout(Ce,10)}yt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let gr=null;function wa(C){gr&&gr(C)}function Di(){Gn.stop()}function ol(){Gn.start()}const Gn=new ey;Gn.setAnimationLoop(wa),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(C){gr=C,he.setAnimationLoop(C),C===null?Gn.stop():Gn.start()},he.addEventListener("sessionstart",Di),he.addEventListener("sessionend",ol),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const oe=he.enabled===!0&&he.isPresenting===!0,te=E!==null&&(se===null||oe)&&E.begin(P,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,q,se),F=Ee.get(C,O.length),F.init(q),O.push(F),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),et.setFromProjectionMatrix(Et,kn,q.reversedDepth),Be=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,Be),N=qe.get(C,k.length),N.init(),k.push(N),he.enabled===!0&&he.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&ki(Ce,q,-1/0,P.sortObjects)}ki(C,q,0,P.sortObjects),N.finish(),P.sortObjects===!0&&N.sort(Ne,Xe),Zt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Zt&&ze.addToRenderList(N,C),this.info.render.frame++,Ze===!0&&Te.beginShadows();const $=F.state.shadowsArray;if(We.render($,C,q),Ze===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&E.hasRenderPass())===!1){const Ce=N.opaque,Le=N.transmissive;if(F.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Le.length>0)for(let Oe=0,Ke=ke.length;Oe<Ke;Oe++){const ot=ke[Oe];Fi(Ce,Le,C,ot)}Zt&&ze.render(C);for(let Oe=0,Ke=ke.length;Oe<Ke;Oe++){const ot=ke[Oe];Ta(N,C,ot,ot.viewport)}}else Le.length>0&&Fi(Ce,Le,C,q),Zt&&ze.render(C),Ta(N,C,q)}se!==null&&J===0&&(X.updateMultisampleRenderTarget(se),X.updateRenderTargetMipmap(se)),te&&E.end(P),C.isScene===!0&&C.onAfterRender(P,C,q),Ae.resetDefaultState(),le=-1,re=null,O.pop(),O.length>0?(F=O[O.length-1],Ze===!0&&Te.setGlobalState(P.clippingPlanes,F.state.camera)):F=null,k.pop(),k.length>0?N=k[k.length-1]:N=null};function ki(C,q,oe,te){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||et.intersectsSprite(C)){te&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);const Ce=De.update(C),Le=C.material;Le.visible&&N.push(C,Ce,Le,oe,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||et.intersectsObject(C))){const Ce=De.update(C),Le=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),it.copy(Ce.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(Le)){const ke=Ce.groups;for(let Oe=0,Ke=ke.length;Oe<Ke;Oe++){const ot=ke[Oe],dt=Le[ot.materialIndex];dt&&dt.visible&&N.push(C,Ce,dt,oe,it.z,ot)}}else Le.visible&&N.push(C,Ce,Le,oe,it.z,null)}}const $=C.children;for(let Ce=0,Le=$.length;Ce<Le;Ce++)ki($[Ce],q,oe,te)}function Ta(C,q,oe,te){const{opaque:$,transmissive:Ce,transparent:Le}=C;F.setupLightsView(oe),Ze===!0&&Te.setGlobalState(P.clippingPlanes,oe),te&&je.viewport(U.copy(te)),$.length>0&&pn($,q,oe),Ce.length>0&&pn(Ce,q,oe),Le.length>0&&pn(Le,q,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Fi(C,q,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[te.id]===void 0){const dt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[te.id]=new On(1,1,{generateMipmaps:!0,type:dt?ba:un,minFilter:Ni,samples:Math.max(4,Tt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const $=F.state.transmissionRenderTarget[te.id],Ce=te.viewport||U;$.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const Le=P.getRenderTarget(),ke=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget($),P.getClearColor(_e),L=P.getClearAlpha(),L<1&&P.setClearColor(16777215,.5),P.clear(),Zt&&ze.render(oe);const Ke=P.toneMapping;P.toneMapping=Fn;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),F.setupLightsView(te),Ze===!0&&Te.setGlobalState(P.clippingPlanes,te),pn(C,oe,te),X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($),yt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ve=0,Pt=q.length;Ve<Pt;Ve++){const Yt=q[Ve],{object:Dt,geometry:Ct,material:zt,group:Je}=Yt;if(zt.side===pa&&Dt.layers.test(te.layers)){const Gt=zt.side;zt.side=Vr,zt.needsUpdate=!0,Wn(Dt,oe,te,Ct,zt,Je),zt.side=Gt,zt.needsUpdate=!0,dt=!0}}dt===!0&&(X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($))}P.setRenderTarget(Le,ke,Oe),P.setClearColor(_e,L),ot!==void 0&&(te.viewport=ot),P.toneMapping=Ke}function pn(C,q,oe){const te=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ce=C.length;$<Ce;$++){const Le=C[$],{object:ke,geometry:Oe,group:Ke}=Le;let ot=Le.material;ot.allowOverride===!0&&te!==null&&(ot=te),ke.layers.test(oe.layers)&&Wn(ke,q,oe,Oe,ot,Ke)}}function Wn(C,q,oe,te,$,Ce){C.onBeforeRender(P,q,oe,te,$,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(P,q,oe,te,C,Ce),$.transparent===!0&&$.side===pa&&$.forceSinglePass===!1?($.side=Vr,$.needsUpdate=!0,P.renderBufferDirect(oe,q,te,$,C,Ce),$.side=ii,$.needsUpdate=!0,P.renderBufferDirect(oe,q,te,$,C,Ce),$.side=pa):P.renderBufferDirect(oe,q,te,$,C,Ce),C.onAfterRender(P,q,oe,te,$,Ce)}function wn(C,q,oe){q.isScene!==!0&&(q=rr);const te=w.get(C),$=F.state.lights,Ce=F.state.shadowsArray,Le=$.state.version,ke=Re.getParameters(C,$.state,Ce,q,oe),Oe=Re.getProgramCacheKey(ke);let Ke=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const ot=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=me.get(C.envMap||te.environment,ot),te.envMapRotation=te.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",xt),Ke=new Map,te.programs=Ke);let dt=Ke.get(Oe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===Le)return nr(C,ke),dt}else ke.uniforms=Re.getUniforms(C),C.onBeforeCompile(ke,P),dt=Re.acquireProgram(ke,Oe),Ke.set(Oe,dt),te.uniforms=ke.uniforms;const Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),nr(C,ke),te.needsLights=Xn(C),te.lightsStateVersion=Le,te.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=dt,te.uniformsList=null,dt}function jn(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function nr(C,q){const oe=w.get(C);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function sl(C,q,oe,te,$){q.isScene!==!0&&(q=rr),X.resetTextureUnits();const Ce=q.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,ke=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ko,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=me.get(te.envMap||Le,Oe),ot=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!oe.morphAttributes.position,Pt=!!oe.morphAttributes.normal,Yt=!!oe.morphAttributes.color;let Dt=Fn;te.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Dt=P.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Ct!==void 0?Ct.length:0,Je=w.get(te),Gt=F.state.lights;if(Ze===!0&&(Be===!0||C!==re)){const $t=C===re&&te.id===le;Te.setState(te,C,$t)}let mn=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==ke||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==Ke||te.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==dt||Je.morphTargets!==Ve||Je.morphNormals!==Pt||Je.morphColors!==Yt||Je.toneMapping!==Dt||Je.morphTargetsCount!==zt)&&(mn=!0):(mn=!0,Je.__version=te.version);let Ur=Je.currentProgram;mn===!0&&(Ur=wn(te,q,$));let Dr=!1,kr=!1,qn=!1;const Rt=Ur.getUniforms(),Wt=Je.uniforms;if(je.useProgram(Ur.program)&&(Dr=!0,kr=!0,qn=!0),te.id!==le&&(le=te.id,kr=!0),Dr||re!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",C.projectionMatrix),Rt.setValue(G,"viewMatrix",C.matrixWorldInverse);const $t=Rt.map.cameraPosition;$t!==void 0&&$t.setValue(G,wt.setFromMatrixPosition(C.matrixWorld)),Tt.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,kr=!0,qn=!0)}if(Je.needsLights&&(Gt.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",Gt.state.directionalShadowMap,X),Gt.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",Gt.state.spotShadowMap,X),Gt.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",Gt.state.pointShadowMap,X)),$.isSkinnedMesh){Rt.setOptional(G,$,"bindMatrix"),Rt.setOptional(G,$,"bindMatrixInverse");const $t=$.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Rt.setValue(G,"boneTexture",$t.boneTexture,X))}$.isBatchedMesh&&(Rt.setOptional(G,$,"batchingTexture"),Rt.setValue(G,"batchingTexture",$._matricesTexture,X),Rt.setOptional(G,$,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",$._indirectTexture,X),Rt.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",$._colorsTexture,X));const Tn=oe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ue.update($,oe,Ur),(kr||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Rt.setValue(G,"receiveShadow",$.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(Wt.envMapIntensity.value=q.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=hC()),kr&&(Rt.setValue(G,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&ll(Wt,qn),Ce&&te.fog===!0&&$e.refreshFogUniforms(Wt,Ce),$e.refreshMaterialUniforms(Wt,te,be,ge,F.state.transmissionRenderTarget[C.id]),Zc.upload(G,jn(Je),Wt,X)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Zc.upload(G,jn(Je),Wt,X),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(G,"center",$.center),Rt.setValue(G,"modelViewMatrix",$.modelViewMatrix),Rt.setValue(G,"normalMatrix",$.normalMatrix),Rt.setValue(G,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const $t=te.uniformsGroups;for(let Ca=0,An=$t.length;Ca<An;Ca++){const ul=$t[Ca];Fe.update(ul,Ur),Fe.bind(ul,Ur)}}return Ur}function ll(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Xn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,q,oe){const te=w.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),w.get(C.texture).__webglTexture=q,w.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const oe=w.get(C);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(C,q=0,oe=0){se=C,V=q,J=oe;let te=null,$=!1,Ce=!1;if(C){const Le=w.get(C);if(Le.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(C.viewport),H.copy(C.scissor),ce=C.scissorTest,je.viewport(U),je.scissor(H),je.setScissorTest(ce),le=-1;return}else if(Le.__webglFramebuffer===void 0)X.setupRenderTarget(C);else if(Le.__hasExternalTextures)X.rebindTextures(C,w.get(C.texture).__webglTexture,w.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ke=C.depthTexture;if(Le.__boundDepthTexture!==Ke){if(Ke!==null&&w.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);const Oe=w.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[q])?te=Oe[q][oe]:te=Oe[q],$=!0):C.samples>0&&X.useMultisampledRTT(C)===!1?te=w.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?te=Oe[oe]:te=Oe,U.copy(C.viewport),H.copy(C.scissor),ce=C.scissorTest}else U.copy(K).multiplyScalar(be).floor(),H.copy(Me).multiplyScalar(be).floor(),ce=Se;if(oe!==0&&(te=Aa),je.bindFramebuffer(G.FRAMEBUFFER,te)&&je.drawBuffers(C,te),je.viewport(U),je.scissor(H),je.setScissorTest(ce),$){const Le=w.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,oe)}else if(Ce){const Le=q;for(let ke=0;ke<C.textures.length;ke++){const Oe=w.get(C.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,Oe.__webglTexture,oe,Le)}}else if(C!==null&&oe!==0){const Le=w.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Le.__webglTexture,oe)}le=-1},this.readRenderTargetPixels=function(C,q,oe,te,$,Ce,Le,ke=0){if(!(C&&C.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){je.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Ke=C.textures[ke],ot=Ke.format,dt=Ke.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!Tt.textureFormatReadable(ot)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(dt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-te&&oe>=0&&oe<=C.height-$&&G.readPixels(q,oe,te,$,Pe.convert(ot),Pe.convert(dt),Ce)}finally{const Ke=se!==null?w.get(se).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,q,oe,te,$,Ce,Le,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(q>=0&&q<=C.width-te&&oe>=0&&oe<=C.height-$){je.bindFramebuffer(G.FRAMEBUFFER,Oe);const Ke=C.textures[ke],ot=Ke.format,dt=Ke.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!Tt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),G.readPixels(q,oe,te,$,Pe.convert(ot),Pe.convert(dt),0);const Pt=se!==null?w.get(se).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Pt);const Yt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await D1(G,Yt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.deleteBuffer(Ve),G.deleteSync(Yt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,oe=0){const te=Math.pow(2,-oe),$=Math.floor(C.image.width*te),Ce=Math.floor(C.image.height*te),Le=q!==null?q.x:0,ke=q!==null?q.y:0;X.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Le,ke,$,Ce),je.unbindTexture()};const pu=G.createFramebuffer(),cl=G.createFramebuffer();this.copyTextureToTexture=function(C,q,oe=null,te=null,$=0,Ce=0){let Le,ke,Oe,Ke,ot,dt,Ve,Pt,Yt;const Dt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(oe!==null)Le=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,ot=oe.min.y,dt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-$);Le=Math.floor(Dt.width*Wt),ke=Math.floor(Dt.height*Wt),C.isDataArrayTexture?Oe=Dt.depth:C.isData3DTexture?Oe=Math.floor(Dt.depth*Wt):Oe=1,Ke=0,ot=0,dt=0}te!==null?(Ve=te.x,Pt=te.y,Yt=te.z):(Ve=0,Pt=0,Yt=0);const Ct=Pe.convert(q.format),zt=Pe.convert(q.type);let Je;q.isData3DTexture?(X.setTexture3D(q,0),Je=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(X.setTexture2DArray(q,0),Je=G.TEXTURE_2D_ARRAY):(X.setTexture2D(q,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Gt=G.getParameter(G.UNPACK_ROW_LENGTH),mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ur=G.getParameter(G.UNPACK_SKIP_PIXELS),Dr=G.getParameter(G.UNPACK_SKIP_ROWS),kr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,dt);const qn=C.isDataArrayTexture||C.isData3DTexture,Rt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Wt=w.get(C),Tn=w.get(q),$t=w.get(Wt.__renderTarget),Ca=w.get(Tn.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,$t.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ca.__webglFramebuffer);for(let An=0;An<Oe;An++)qn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(C).__webglTexture,$,dt+An),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Ce,Yt+An)),G.blitFramebuffer(Ke,ot,Le,ke,Ve,Pt,Le,ke,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||w.has(C)){const Wt=w.get(C),Tn=w.get(q);je.bindFramebuffer(G.READ_FRAMEBUFFER,pu),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,cl);for(let $t=0;$t<Oe;$t++)qn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.__webglTexture,$,dt+$t):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,$),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ce,Yt+$t):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ce),$!==0?G.blitFramebuffer(Ke,ot,Le,ke,Ve,Pt,Le,ke,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(Je,Ce,Ve,Pt,Yt+$t,Ke,ot,Le,ke):G.copyTexSubImage2D(Je,Ce,Ve,Pt,Ke,ot,Le,ke);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Je,Ce,Ve,Pt,Yt,Le,ke,Oe,Ct,zt,Dt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,Ce,Ve,Pt,Yt,Le,ke,Oe,Ct,Dt.data):G.texSubImage3D(Je,Ce,Ve,Pt,Yt,Le,ke,Oe,Ct,zt,Dt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Le,ke,Ct,zt,Dt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Dt.width,Dt.height,Ct,Dt.data):G.texSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Le,ke,Ct,zt,Dt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ur),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dr),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kr),Ce===0&&q.generateMipmaps&&G.generateMipmap(Je),je.unbindTexture()},this.initRenderTarget=function(C){w.get(C).__webglFramebuffer===void 0&&X.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){V=0,J=0,se=null,je.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const pC=160,mC=70,a0=1.6,gC=()=>{const o=de.useRef(null);return de.useEffect(()=>{const e=o.current;if(!e)return;const n=window.innerWidth<768,i=n?mC:pC,l=new Q1,c=new cn(60,e.clientWidth/e.clientHeight,.1,100);c.position.z=5;const d=new fC({antialias:!0,alpha:!0});d.setSize(e.clientWidth,e.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(d.domElement);const p=[new vt("#b8456e"),new vt("#9d7fb8"),new vt("#e8a090"),new vt("#d4a0b8"),new vt("#ffffff")],m=[],f=new Float32Array(i*3),v=new Float32Array(i*3);for(let k=0;k<i;k++){const O=(Math.random()-.5)*9,E=(Math.random()-.5)*6,P=(Math.random()-.5)*4;m.push({x:O,y:E,z:P,bx:O,by:E,bz:P,vx:(Math.random()-.5)*.004,vy:(Math.random()-.5)*.004,vz:(Math.random()-.5)*.002});const ue=p[Math.floor(Math.random()*p.length)];v[k*3]=ue.r,v[k*3+1]=ue.g,v[k*3+2]=ue.b,f[k*3]=O,f[k*3+1]=E,f[k*3+2]=P}const S=new Zr;S.setAttribute("position",new dn(f,3)),S.setAttribute("color",new dn(v,3));const g=new Y0({size:n?.045:.035,vertexColors:!0,transparent:!0,opacity:.85,blending:tu,depthWrite:!1});l.add(new cM(S,g));const b=new Zr,x=new q0({transparent:!0,opacity:.12,color:12076398,blending:tu,depthWrite:!1}),R=new lM(b,x);l.add(R);const _={x:0,y:0},y=k=>{const O=e.getBoundingClientRect();_.x=((k.clientX-O.left)/O.width-.5)*2,_.y=-((k.clientY-O.top)/O.height-.5)*2};e.addEventListener("mousemove",y);const A=()=>{const k=e.clientWidth,O=e.clientHeight;c.aspect=k/O,c.updateProjectionMatrix(),d.setSize(k,O)};window.addEventListener("resize",A);let D=!0,N=0;const F=()=>{if(!D)return;requestAnimationFrame(F),N++;const k=S.getAttribute("position");for(let O=0;O<i;O++){const E=m[O];E.x+=E.vx,E.y+=E.vy,E.z+=E.vz,E.vx+=(E.bx-E.x)*8e-4,E.vy+=(E.by-E.y)*8e-4,E.vz+=(E.bz-E.z)*4e-4,E.x+=_.x*.003,E.y+=_.y*.003,E.vx*=.992,E.vy*=.992,E.vz*=.992,k.array[O*3]=E.x,k.array[O*3+1]=E.y,k.array[O*3+2]=E.z}if(k.needsUpdate=!0,N%3===0){const O=[];for(let E=0;E<i;E++)for(let P=E+1;P<i;P++){const ue=m[E].x-m[P].x,V=m[E].y-m[P].y,J=m[E].z-m[P].z;ue*ue+V*V+J*J<a0*a0&&O.push(m[E].x,m[E].y,m[E].z,m[P].x,m[P].y,m[P].z)}b.setAttribute("position",new hn(O,3))}l.rotation.y=Math.sin(Date.now()*8e-5)*.12,l.rotation.x=Math.cos(Date.now()*6e-5)*.05,d.render(l,c)};return requestAnimationFrame(F),()=>{D=!1,e.removeEventListener("mousemove",y),window.removeEventListener("resize",A),d.dispose(),S.dispose(),g.dispose(),b.dispose(),x.dispose(),e.contains(d.domElement)&&e.removeChild(d.domElement)}},[]),z.jsx("div",{ref:o,className:"hero-canvas"})},vC=({words:o,typeSpeed:e=80,deleteSpeed:n=40,pause:i=2200,className:l})=>{const[c,d]=de.useState(""),[p,m]=de.useState(0),[f,v]=de.useState(!1);return de.useEffect(()=>{const S=o[p],g=setTimeout(()=>{f?(d(S.slice(0,c.length-1)),c.length-1===0&&(v(!1),m(b=>(b+1)%o.length))):(d(S.slice(0,c.length+1)),c.length+1===S.length&&setTimeout(()=>v(!0),i))},f?n:e);return()=>clearTimeout(g)},[c,f,p,o,e,n,i]),z.jsxs("span",{className:l,children:[c,z.jsx("span",{className:"typing-cursor","aria-hidden":"true"})]})},_C="/assets/avatar-C2VzNt0k.png",yC=["Software Architect","AI Engineer","Full Stack Developer","Mobile App Developer"],bC=({scrollTo:o})=>z.jsxs("section",{className:"section section--home hero hero--3d",id:"home","aria-labelledby":"hero-heading",children:[z.jsx(gC,{}),z.jsxs("div",{className:"container hero__centered",children:[z.jsx("img",{src:_C,alt:"Taliba Sadiq",className:"hero__avatar",draggable:!1}),z.jsx("p",{className:"hero__eyebrow hero__eyebrow--glow",children:"Available for projects"}),z.jsx("h1",{id:"hero-heading",className:"hero__title hero__title--3d",children:"Taliba Sadiq"}),z.jsx("p",{className:"hero__typing-wrap",children:z.jsx(vC,{words:yC,className:"hero__typing"})}),z.jsx("p",{className:"hero__intro hero__intro--3d",children:"I build software that holds up under real use: scalable systems, intelligent features, and code that keeps working as your product grows. Not just launch-day demos, but lasting solutions."}),z.jsxs("div",{className:"hero__actions hero__actions--center",children:[z.jsx("button",{type:"button",className:"btn btn--primary btn--glow",onClick:()=>o("work","/projects"),children:"See my work"}),z.jsx("button",{type:"button",className:"btn btn--ghost btn--ghost-dark",onClick:()=>o("contact","/contact"),children:"Let's talk"})]})]})]}),xC=[{title:"A product outgrowing its structure",body:"The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds."},{title:"A codebase that's becoming fragile",body:"People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick."},{title:"A prototype that needs to grow up",body:"The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features."},{title:"AI that needs to actually work",body:"Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable."}],SC=()=>z.jsx("section",{className:"section section--philosophy reveal",id:"philosophy","aria-labelledby":"philosophy-heading",children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"philosophy__head",children:[z.jsx("span",{className:"section__label",children:"When I get involved"}),z.jsx("h2",{id:"philosophy-heading",className:"philosophy__title",children:"I focus on what happens after launch"}),z.jsx("p",{className:"philosophy__lead",children:"First demos are easy. I focus on the hard part: more features, team changes, and someone new opening the repo. Good structure is what keeps you from rewriting everything twice."})]}),z.jsx("div",{className:"pillars__grid",children:xC.map((o,e)=>z.jsxs("div",{className:"pillar-card reveal reveal--delay-1",children:[z.jsx("p",{className:"pillar-card__num",children:String(e+1).padStart(2,"0")}),z.jsx("h3",{className:"pillar-card__title",children:o.title}),z.jsx("p",{children:o.body})]},o.title))}),z.jsxs("div",{className:"philosophy__closing reveal",children:[z.jsxs("p",{className:"philosophy__closing-text",children:["What I bring is ",z.jsx("strong",{children:"clarity"}),". Clear structure, clear decisions, and systems that are easier to build on as they grow."]}),z.jsxs("div",{className:"philosophy__traits",children:[z.jsx("span",{className:"philosophy__trait",children:"Clear Communicator"}),z.jsx("span",{className:"philosophy__trait",children:"Detail Oriented"}),z.jsx("span",{className:"philosophy__trait",children:"Solution Oriented"})]})]})]})}),MC=[{quote:"She's great and really helpful.",name:"Steve C.",role:"Founder, Zenius"},{quote:"Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",name:"A. M.",role:"CTO, B2B SaaS"},{quote:"Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",name:"R. K.",role:"Founder, edtech"}],EC=({scrollTo:o})=>z.jsx("section",{className:"section section--reviews section--testimonials reveal",id:"reviews","aria-labelledby":"reviews-heading",children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"testimonials__head",children:[z.jsx("h2",{id:"reviews-heading",className:"testimonials__title",children:"Kind words from collaborators"}),z.jsx("p",{className:"testimonials__lead",children:"What founders and teams say about working together."})]}),z.jsx("ul",{className:"testimonials__list",role:"list",children:MC.map(e=>z.jsxs("li",{className:"testimonial-item",children:[z.jsx("blockquote",{className:"testimonial-item__quote",children:z.jsx("p",{children:e.quote})}),z.jsxs("footer",{className:"testimonial-item__cite",children:[z.jsx("span",{className:"testimonial-item__name",children:e.name}),z.jsx("span",{className:"testimonial-item__role",children:e.role})]})]},`${e.name}-${e.role}`))}),z.jsx("div",{className:"testimonials__cta",children:z.jsx("button",{type:"button",className:"btn btn--primary",onClick:()=>o("contact","/contact"),children:"Start a conversation"})})]})}),wC=[{title:"Architecture & Scalable Systems",desc:"Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",tags:["System Design","Scalability","Refactoring","API Design","Microservices"]},{title:"Full-Stack Web & Mobile",desc:"End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",tags:["React","Next.js","Node.js","React Native","TypeScript","PostgreSQL"]},{title:"AI Integration & Automation",desc:"GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",tags:["OpenAI API","Claude","Prompt Engineering","AI Agents","Automation"]}],TC=()=>z.jsx("section",{className:"section section--services reveal",id:"services","aria-labelledby":"services-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"What I do"}),z.jsx("h2",{id:"services-heading",className:"section__heading",children:"Three things I do really well"}),z.jsx("p",{className:"section__lead",children:"Architecture, full-stack development, and AI integration. I bring clarity to complex problems and build systems that are easier to grow."}),z.jsx("div",{className:"services__grid",children:wC.map(o=>z.jsxs("div",{className:"service-card reveal reveal--delay-1",children:[z.jsx("h3",{className:"service-card__title",children:o.title}),z.jsx("p",{className:"service-card__desc",children:o.desc}),z.jsx("div",{className:"service-card__tags",children:o.tags.map(e=>z.jsx("span",{className:"service-card__tag",children:e},e))})]},o.title))})]})}),Po={ai:["OpenAI / GPT API","Claude / Anthropic","Gemini","Generative AI","Prompt Engineering","AI Agents","Chatbot Development","AI Model Integration","Machine Learning","Automation Workflows"],frontend:["React","Next.js","Angular","Vue.js","Nuxt.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","SASS / SCSS","CSS Grid","Responsive Design","Figma","Webflow","Elementor"],backend:["Node.js","Express","REST APIs","GraphQL","FastAPI","Laravel","PHP","Python","API Integration","Payment Gateway (Stripe)","Twilio API","Authentication & Authorization","WebSockets"],mobile:["React Native","Hybrid Apps","iOS","Android","Offline Functionality","In-App Purchases","Mobile UI/UX"],cloud:["AWS","Google Cloud","Microsoft Azure","Docker","Vercel","Netlify","Firebase","Supabase","CI/CD","GitHub Actions","Website Security"],databases:["PostgreSQL","MongoDB","MySQL","Microsoft SQL Server","Firebase Realtime DB","Prisma","Mongoose","Database Modeling"]},AC=()=>z.jsx("section",{className:"section section--skills skills-showcase reveal",id:"skills","aria-labelledby":"skills-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"Toolkit"}),z.jsx("h2",{id:"skills-heading",className:"skills-showcase__title",children:"Technologies I work with"}),z.jsx("p",{className:"skills-showcase__lead",children:"AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven't listed it yet. Ask me."}),z.jsxs("div",{className:"skills-showcase__grid",children:[z.jsxs("div",{className:"skill-category skill-category--highlight",children:[z.jsx("h3",{className:"skill-category__title",children:"AI & Intelligence"}),z.jsx("div",{className:"skill-category__tags",children:Po.ai.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Frontend"}),z.jsx("div",{className:"skill-category__tags",children:Po.frontend.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Backend & APIs"}),z.jsx("div",{className:"skill-category__tags",children:Po.backend.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Mobile"}),z.jsx("div",{className:"skill-category__tags",children:Po.mobile.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Cloud & DevOps"}),z.jsx("div",{className:"skill-category__tags",children:Po.cloud.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Databases"}),z.jsx("div",{className:"skill-category__tags",children:Po.databases.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]})]})]})}),CC="/assets/zenius-CLULWNXe.png",RC="/assets/news-explorer-DyPTQ1wK.png",PC="/assets/tmi-worldwide-BRvVfm9i.png",NC="/assets/time-keeper-C6TL0-3m.png",LC="/assets/portfolio-84NHyYwe.png",IC="/assets/expense-tracker-mvEoxdIL.png",UC="/assets/girly-blog-BlvHH-Oe.png",DC=[{title:"Zenius",types:["AI & product","Full-stack web"],description:"Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",link:"https://zenius.ia.br",screenshot:CC,tech:["React","TypeScript","AI / LLM integration","Node.js","REST & real-time APIs","Voice / video","Security & privacy","Responsive UI","Performance","Accessibility"]},{title:"News Explorer",types:["Full-stack web","APIs & auth"],description:"Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",link:"https://jazzmine-flora.github.io/news-explorer/",screenshot:RC,tech:["React","Node.js","Express","MongoDB","REST","Auth","News API"]},{title:"TMI Worldwide",types:["Design refresh","Marketing site"],description:"Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",link:"https://tmi-world-welcome.lovable.app/",screenshot:PC,tech:["React","Vite","SPA","Responsive UI","Marketing / brand"]},{title:"Time Keeper",types:["Web app","Product UX"],description:"Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",link:"https://time-keeper-crafted.lovable.app/",screenshot:NC,tech:["React","Vite","SPA","Responsive UI","Product UI"]},{title:"My Portfolio",types:["Portfolio site","Design & deploy"],description:"Single-page site: React, TypeScript, Vite, and HashRouter for GitHub Pages. Copy and styles hand-tuned.",link:"https://jazzmine-flora.github.io",screenshot:LC,tech:["React","TypeScript","Vite","React Router","Three.js","React Icons","GitHub Actions"]},{title:"Expense Tracker",types:["Web app","Dashboards & data"],description:"Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",link:"https://jazzmine-flora.github.io/expense-tracker/",screenshot:IC,tech:["React","TypeScript","Node.js","Express","MongoDB","Charts"]},{title:"Girls Blog",types:["Full-stack web","Blog & CMS"],description:"Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",link:"https://girly-blogspot.vercel.app/",screenshot:UC,tech:["React","Node.js","Express","MongoDB","Auth"]}],kC=()=>z.jsx("section",{className:"section section--work projects-page projects-page--premium reveal",id:"work","aria-labelledby":"work-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"Portfolio"}),z.jsx("h2",{id:"work-heading",className:"projects__title",children:"Selected work"}),z.jsx("p",{className:"projects__lead",children:"Full-stack products, AI features, and scalable systems."}),z.jsx("div",{className:"projects__grid",children:DC.map(o=>z.jsxs("article",{className:"project-card",children:[o.screenshot?z.jsx("div",{className:"project-card__thumb-wrap",children:z.jsx("img",{src:o.screenshot,alt:`${o.title} site preview`,className:"project-card__thumb",loading:"lazy",decoding:"async"})}):z.jsx("div",{className:"project-card__thumb-wrap project-card__thumb-wrap--placeholder","aria-hidden":!0,children:z.jsx("span",{className:"project-card__thumb-placeholder",children:"Preview unavailable"})}),z.jsxs("div",{className:"project-card__body",children:[z.jsx("ul",{className:"project-card__type-list",role:"list","aria-label":"Project types",children:o.types.map((e,n)=>z.jsx("li",{className:`project-card__type-chip${n===0?" project-card__type-chip--primary":""}`,children:e},`${o.title}-type-${n}`))}),z.jsxs("div",{className:"project-card__about",children:[z.jsx("h3",{className:"project-card__title",children:o.title}),z.jsx("p",{className:"project-card__desc",children:o.description})]}),z.jsx("div",{className:"project-card__tech",children:o.tech.map(e=>z.jsx("span",{className:"project-card__tag",children:e},e))})]}),z.jsxs("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"project-card__link",children:["View project ",z.jsx("span",{className:"project-card__arrow","aria-hidden":!0,children:"→"})]})]},o.title))})]})}),FC=()=>{const{scrollTo:o}=KS();return z.jsxs("div",{className:"homepage homepage--studio page-content",children:[z.jsx(bC,{scrollTo:o}),z.jsx(TC,{}),z.jsx(SC,{}),z.jsx(kC,{}),z.jsx(AC,{}),z.jsx(EC,{scrollTo:o}),z.jsx(JS,{})]})},OC=({className:o,title:e})=>z.jsxs("svg",{className:o,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?z.jsx("title",{children:e}):null,z.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z"})]}),BC=({className:o,title:e})=>z.jsxs("svg",{className:o,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?z.jsx("title",{children:e}):null,z.jsx("path",{d:"M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"})]}),zC=()=>z.jsx("footer",{className:"footer",children:z.jsxs("div",{className:"footer__inner container",children:[z.jsxs("div",{className:"footer__social","aria-label":"Social links",children:[z.jsxs("a",{href:"https://www.linkedin.com/in/taliba-sadiq",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"LinkedIn",children:[z.jsx(BC,{className:"footer__icon",title:"LinkedIn"}),z.jsx("span",{children:"LinkedIn"})]}),z.jsxs("a",{href:"https://github.com/Jazzmine-Flora",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"GitHub",children:[z.jsx(OC,{className:"footer__icon",title:"GitHub"}),z.jsx("span",{children:"GitHub"})]})]}),z.jsxs("p",{className:"footer__copy",children:["Copyright © ",new Date().getFullYear()," Taliba Sadiq. All rights reserved."]})]})});function HC(){de.useEffect(()=>{const o=d=>{d.preventDefault()},e=d=>{d.preventDefault()},n=d=>{d.preventDefault()},i=d=>{const p=d.target;((p==null?void 0:p.tagName)==="IMG"||p!=null&&p.closest("img"))&&d.preventDefault()},l=d=>{d.preventDefault()},c=d=>{const p=d.ctrlKey||d.metaKey;p&&(d.key==="s"||d.key==="S")&&d.preventDefault(),p&&(d.key==="c"||d.key==="C")&&d.preventDefault(),p&&(d.key==="x"||d.key==="X")&&d.preventDefault(),p&&(d.key==="a"||d.key==="A")&&d.preventDefault(),p&&(d.key==="u"||d.key==="U")&&d.preventDefault()};return document.addEventListener("contextmenu",o),document.addEventListener("copy",e,!0),document.addEventListener("cut",n,!0),document.addEventListener("dragstart",i,!0),document.addEventListener("selectstart",l,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("contextmenu",o),document.removeEventListener("copy",e,!0),document.removeEventListener("cut",n,!0),document.removeEventListener("dragstart",i,!0),document.removeEventListener("selectstart",l,!0),document.removeEventListener("keydown",c)}},[])}const VC=()=>(HC(),z.jsxs(z.Fragment,{children:[z.jsx(GS,{}),z.jsx(YS,{}),z.jsx("main",{children:z.jsx(cS,{children:z.jsx(v0,{path:"*",element:z.jsx(FC,{})})})}),z.jsx(zC,{})]})),GC=document.getElementById("root"),WC=_x.createRoot(GC);WC.render(z.jsx(dx.StrictMode,{children:z.jsx(IS,{children:z.jsx(VC,{})})}));
