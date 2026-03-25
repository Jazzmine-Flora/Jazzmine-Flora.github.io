(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();function sx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kv={exports:{}},Ds={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Fv;function lx(){if(Fv)return Ds;Fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Ds.Fragment=e,Ds.jsx=i,Ds.jsxs=i,Ds}var Ov;function cx(){return Ov||(Ov=1,kv.exports=lx()),kv.exports}var z=cx(),Bv={exports:{}},st={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var zv;function ux(){if(zv)return st;zv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,R={};function _(L,K,ge){this.props=L,this.context=K,this.refs=R,this.updater=ge||S}_.prototype.isReactComponent={},_.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=_.prototype;function A(L,K,ge){this.props=L,this.context=K,this.refs=R,this.updater=ge||S}var D=A.prototype=new y;D.constructor=A,x(D,_.prototype),D.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function O(L,K,ge,Se,Ne,qe){return ge=qe.ref,{$$typeof:o,type:L,key:K,ref:ge!==void 0?ge:null,props:qe}}function E(L,K){return O(L.type,K,void 0,void 0,void 0,L.props)}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ue(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return K[ge]})}var V=/\/+/g;function J(L,K){return typeof L=="object"&&L!==null&&L.key!=null?ue(""+L.key):K.toString(36)}function se(){}function le(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(se,se):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function re(L,K,ge,Se,Ne){var qe=typeof L;(qe==="undefined"||qe==="boolean")&&(L=null);var Q=!1;if(L===null)Q=!0;else switch(qe){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(L.$$typeof){case o:case e:Q=!0;break;case v:return Q=L._init,re(Q(L._payload),K,ge,Se,Ne)}}if(Q)return Ne=Ne(L),Q=Se===""?"."+J(L,0):Se,N(Ne)?(ge="",Q!=null&&(ge=Q.replace(V,"$&/")+"/"),re(Ne,K,ge,"",function(et){return et})):Ne!=null&&(P(Ne)&&(Ne=E(Ne,ge+(Ne.key==null||L&&L.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+Q)),K.push(Ne)),1;Q=0;var Me=Se===""?".":Se+":";if(N(L))for(var be=0;be<L.length;be++)Se=L[be],qe=Me+J(Se,be),Q+=re(Se,K,ge,qe,Ne);else if(be=g(L),typeof be=="function")for(L=be.call(L),be=0;!(Se=L.next()).done;)Se=Se.value,qe=Me+J(Se,be++),Q+=re(Se,K,ge,qe,Ne);else if(qe==="object"){if(typeof L.then=="function")return re(le(L),K,ge,Se,Ne);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Q}function U(L,K,ge){if(L==null)return L;var Se=[],Ne=0;return re(L,Se,"","",function(qe){return K.call(ge,qe,Ne++)}),Se}function H(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var ce=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function _e(){}return st.Children={map:U,forEach:function(L,K,ge){U(L,function(){K.apply(this,arguments)},ge)},count:function(L){var K=0;return U(L,function(){K++}),K},toArray:function(L){return U(L,function(K){return K})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=A,st.StrictMode=a,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},st.cache=function(L){return function(){return L.apply(null,arguments)}},st.cloneElement=function(L,K,ge){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Se=x({},L.props),Ne=L.key,qe=void 0;if(K!=null)for(Q in K.ref!==void 0&&(qe=void 0),K.key!==void 0&&(Ne=""+K.key),K)!k.call(K,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&K.ref===void 0||(Se[Q]=K[Q]);var Q=arguments.length-2;if(Q===1)Se.children=ge;else if(1<Q){for(var Me=Array(Q),be=0;be<Q;be++)Me[be]=arguments[be+2];Se.children=Me}return O(L.type,Ne,void 0,void 0,qe,Se)},st.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},st.createElement=function(L,K,ge){var Se,Ne={},qe=null;if(K!=null)for(Se in K.key!==void 0&&(qe=""+K.key),K)k.call(K,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ne[Se]=K[Se]);var Q=arguments.length-2;if(Q===1)Ne.children=ge;else if(1<Q){for(var Me=Array(Q),be=0;be<Q;be++)Me[be]=arguments[be+2];Ne.children=Me}if(L&&L.defaultProps)for(Se in Q=L.defaultProps,Q)Ne[Se]===void 0&&(Ne[Se]=Q[Se]);return O(L,qe,void 0,void 0,null,Ne)},st.createRef=function(){return{current:null}},st.forwardRef=function(L){return{$$typeof:p,render:L}},st.isValidElement=P,st.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:H}},st.memo=function(L,K){return{$$typeof:f,type:L,compare:K===void 0?null:K}},st.startTransition=function(L){var K=F.T,ge={};F.T=ge;try{var Se=L(),Ne=F.S;Ne!==null&&Ne(ge,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(_e,ce)}catch(qe){ce(qe)}finally{F.T=K}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(L){return F.H.use(L)},st.useActionState=function(L,K,ge){return F.H.useActionState(L,K,ge)},st.useCallback=function(L,K){return F.H.useCallback(L,K)},st.useContext=function(L){return F.H.useContext(L)},st.useDebugValue=function(){},st.useDeferredValue=function(L,K){return F.H.useDeferredValue(L,K)},st.useEffect=function(L,K,ge){var Se=F.H;if(typeof ge=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(L,K)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(L,K,ge){return F.H.useImperativeHandle(L,K,ge)},st.useInsertionEffect=function(L,K){return F.H.useInsertionEffect(L,K)},st.useLayoutEffect=function(L,K){return F.H.useLayoutEffect(L,K)},st.useMemo=function(L,K){return F.H.useMemo(L,K)},st.useOptimistic=function(L,K){return F.H.useOptimistic(L,K)},st.useReducer=function(L,K,ge){return F.H.useReducer(L,K,ge)},st.useRef=function(L){return F.H.useRef(L)},st.useState=function(L){return F.H.useState(L)},st.useSyncExternalStore=function(L,K,ge){return F.H.useSyncExternalStore(L,K,ge)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var Hv;function Zf(){return Hv||(Hv=1,Bv.exports=ux()),Bv.exports}var de=Zf();const dx=sx(de);var mh={exports:{}},ks={},Vv={exports:{}},Gv={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Wv;function hx(){return Wv||(Wv=1,(function(o){function e(U,H){var ce=U.length;U.push(H);e:for(;0<ce;){var _e=ce-1>>>1,L=U[_e];if(0<l(L,H))U[_e]=H,U[ce]=L,ce=_e;else break e}}function i(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var H=U[0],ce=U.pop();if(ce!==H){U[0]=ce;e:for(var _e=0,L=U.length,K=L>>>1;_e<K;){var ge=2*(_e+1)-1,Se=U[ge],Ne=ge+1,qe=U[Ne];if(0>l(Se,ce))Ne<L&&0>l(qe,Se)?(U[_e]=qe,U[Ne]=ce,_e=Ne):(U[_e]=Se,U[ge]=ce,_e=ge);else if(Ne<L&&0>l(qe,ce))U[_e]=qe,U[Ne]=ce,_e=Ne;else break e}}return H}function l(U,H){var ce=U.sortIndex-H.sortIndex;return ce!==0?ce:U.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],f=[],v=1,b=null,g=3,S=!1,x=!1,R=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var H=i(f);H!==null;){if(H.callback===null)a(f);else if(H.startTime<=U)a(f),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(f)}}function F(U){if(R=!1,N(U),!x)if(i(m)!==null)x=!0,k||(k=!0,J());else{var H=i(f);H!==null&&re(F,H.startTime-U)}}var k=!1,O=-1,E=5,P=-1;function ue(){return _?!0:!(o.unstable_now()-P<E)}function V(){if(_=!1,k){var U=o.unstable_now();P=U;var H=!0;try{e:{x=!1,R&&(R=!1,A(O),O=-1),S=!0;var ce=g;try{t:{for(N(U),b=i(m);b!==null&&!(b.expirationTime>U&&ue());){var _e=b.callback;if(typeof _e=="function"){b.callback=null,g=b.priorityLevel;var L=_e(b.expirationTime<=U);if(U=o.unstable_now(),typeof L=="function"){b.callback=L,N(U),H=!0;break t}b===i(m)&&a(m),N(U)}else a(m);b=i(m)}if(b!==null)H=!0;else{var K=i(f);K!==null&&re(F,K.startTime-U),H=!1}}break e}finally{b=null,g=ce,S=!1}H=void 0}}finally{H?J():k=!1}}}var J;if(typeof D=="function")J=function(){D(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=V,J=function(){le.postMessage(null)}}else J=function(){y(V,0)};function re(U,H){O=y(function(){U(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ce=g;g=H;try{return U()}finally{g=ce}},o.unstable_requestPaint=function(){_=!0},o.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ce=g;g=U;try{return H()}finally{g=ce}},o.unstable_scheduleCallback=function(U,H,ce){var _e=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?_e+ce:_e):ce=_e,U){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ce+L,U={id:v++,callback:H,priorityLevel:U,startTime:ce,expirationTime:L,sortIndex:-1},ce>_e?(U.sortIndex=ce,e(f,U),i(m)===null&&U===i(f)&&(R?(A(O),O=-1):R=!0,re(F,ce-_e))):(U.sortIndex=L,e(m,U),x||S||(x=!0,k||(k=!0,J()))),U},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(U){var H=g;return function(){var ce=g;g=H;try{return U.apply(this,arguments)}finally{g=ce}}}})(Gv)),Gv}var jv;function fx(){return jv||(jv=1,Vv.exports=hx()),Vv.exports}var gh={exports:{}},wr={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var qv;function px(){if(qv)return wr;qv=1;var o=Zf();function e(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,f,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:f,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return wr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wr.createPortal=function(m,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return c(m,f,null,v)},wr.flushSync=function(m){var f=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=f,a.p=v,a.d.f()}},wr.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,a.d.C(m,f))},wr.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wr.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var v=f.as,b=p(v,f.crossOrigin),g=typeof f.integrity=="string"?f.integrity:void 0,S=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?a.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:b,integrity:g,fetchPriority:S}):v==="script"&&a.d.X(m,{crossOrigin:b,integrity:g,fetchPriority:S,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},wr.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=p(f.as,f.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&a.d.M(m)},wr.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,b=p(v,f.crossOrigin);a.d.L(m,v,{crossOrigin:b,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},wr.preloadModule=function(m,f){if(typeof m=="string")if(f){var v=p(f.as,f.crossOrigin);a.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else a.d.m(m)},wr.requestFormReset=function(m){a.d.r(m)},wr.unstable_batchedUpdates=function(m,f){return m(f)},wr.useFormState=function(m,f,v){return d.H.useFormState(m,f,v)},wr.useFormStatus=function(){return d.H.useHostTransitionStatus()},wr.version="19.1.0",wr}var Xv;function mx(){if(Xv)return gh.exports;Xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gh.exports=px(),gh.exports}/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var $v;function gx(){if($v)return ks;$v=1;var o=fx(),e=Zf(),i=mx();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,n=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(n=r.return),t=r.return;while(t)}return r.tag===3?n:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var n=t,s=r;;){var u=n.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){n=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===n)return p(u),t;if(h===s)return p(u),r;h=h.sibling}throw Error(a(188))}if(n.return!==s.return)n=u,s=h;else{for(var M=!1,w=u.child;w;){if(w===n){M=!0,n=u,s=h;break}if(w===s){M=!0,s=u,n=h;break}w=w.sibling}if(!M){for(w=h.child;w;){if(w===n){M=!0,n=h,s=u;break}if(w===s){M=!0,s=h,n=u;break}w=w.sibling}if(!M)throw Error(a(189))}}if(n.alternate!==s)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?t:r}function f(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=f(t),r!==null)return r;t=t.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case _:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case D:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case N:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case E:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}var re=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},_e=[],L=-1;function K(t){return{current:t}}function ge(t){0>L||(t.current=_e[L],_e[L]=null,L--)}function Se(t,r){L++,_e[L]=t.current,t.current=r}var Ne=K(null),qe=K(null),Q=K(null),Me=K(null);function be(t,r){switch(Se(Q,r),Se(qe,t),Se(Ne,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=uv(r),t=dv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ge(Ne),Se(Ne,t)}function et(){ge(Ne),ge(qe),ge(Q)}function Ye(t){t.memoizedState!==null&&Se(Me,t);var r=Ne.current,n=dv(r,t.type);r!==n&&(Se(qe,t),Se(Ne,n))}function Be(t){qe.current===t&&(ge(Ne),ge(qe)),Me.current===t&&(ge(Me),Ps._currentValue=ce)}var Et=Object.prototype.hasOwnProperty,Tt=o.unstable_scheduleCallback,at=o.unstable_cancelCallback,rr=o.unstable_shouldYield,Yt=o.unstable_requestPaint,Ut=o.unstable_now,G=o.unstable_getCurrentPriorityLevel,qt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,je=o.unstable_LowPriority,I=o.unstable_IdlePriority,T=o.log,q=o.unstable_setDisableYieldValue,me=null,fe=null;function pe(t){if(typeof T=="function"&&q(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(me,t)}catch{}}var De=Math.clz32?Math.clz32:Xe,Re=Math.log,Ze=Math.LN2;function Xe(t){return t>>>=0,t===0?32:31-(Re(t)/Ze|0)|0}var Ee=256,we=4194304;function We(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ze(t,r,n){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=s&134217727;return w!==0?(s=w&~h,s!==0?u=We(s):(M&=w,M!==0?u=We(M):n||(n=w&~t,n!==0&&(u=We(n))))):(w=s&~h,w!==0?u=We(w):M!==0?u=We(M):n||(n=s&~t,n!==0&&(u=We(n)))),u===0?0:r!==0&&r!==u&&(r&h)===0&&(h=u&-u,n=r&-r,h>=n||h===32&&(n&4194048)!==0)?r:u}function Ue(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function ut(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Pe(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function Ae(t){for(var r=[],n=0;31>n;n++)r.push(t);return r}function Fe(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,r,n,s,u,h){var M=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var w=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(n=M&~n;0<n;){var ve=31-De(n),xe=1<<ve;w[ve]=0,B[ve]=-1;var ne=ee[ve];if(ne!==null)for(ee[ve]=null,ve=0;ve<ne.length;ve++){var ae=ne[ve];ae!==null&&(ae.lane&=-536870913)}n&=~xe}s!==0&&he(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~r))}function he(t,r,n){t.pendingLanes|=r,t.suspendedLanes&=~r;var s=31-De(r);t.entangledLanes|=r,t.entanglements[s]=t.entanglements[s]|1073741824|n&4194090}function He(t,r){var n=t.entangledLanes|=r;for(t=t.entanglements;n;){var s=31-De(n),u=1<<s;u&r|t[s]&r&&(t[s]|=r),n&=~u}}function Ke(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xt(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function hi(t,r){var n=H.p;try{return H.p=t,r()}finally{H.p=n}}var mr=Math.random().toString(36).slice(2),ur="__reactFiber$"+mr,gr="__reactProps$"+mr,Tn="__reactContainer$"+mr,Da="__reactEvents$"+mr,ol="__reactListeners$"+mr,Vi="__reactHandles$"+mr,ka="__reactResources$"+mr,wn="__reactMarker$"+mr;function Fa(t){delete t[ur],delete t[gr],delete t[Da],delete t[ol],delete t[Vi]}function fi(t){var r=t[ur];if(r)return r;for(var n=t.parentNode;n;){if(r=n[Tn]||n[ur]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[ur])return n;t=mv(t)}return r}t=n,n=t.parentNode}return null}function Gi(t){if(t=t[ur]||t[Tn]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function Ei(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function Wi(t){var r=t[ka];return r||(r=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ir(t){t[wn]=!0}var sl=new Set,ll={};function ji(t,r){An(t,r),An(t+"Capture",r)}function An(t,r){for(ll[t]=r,t=0;t<r.length;t++)sl.add(r[t])}var pu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cl={},C={};function X(t){return Et.call(C,t)?!0:Et.call(cl,t)?!1:pu.test(t)?C[t]=!0:(cl[t]=!0,!1)}function oe(t,r,n){if(X(r))if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var s=r.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+n)}}function te(t,r,n){if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+n)}}function Z(t,r,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(r,n,""+s)}}var Ce,Le;function ke(t){if(Ce===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Ce=r&&r[1]||"",Le=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+t+Le}var Oe=!1;function Qe(t,r){if(!t||Oe)return"";Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(r){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ae){var ne=ae}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ae){ne=ae}t.call(xe.prototype)}}else{try{throw Error()}catch(ae){ne=ae}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ae){if(ae&&ne&&typeof ae.stack=="string")return[ae.stack,ne.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),M=h[0],w=h[1];if(M&&w){var B=M.split(`
`),ee=w.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===ee.length)for(s=B.length-1,u=ee.length-1;1<=s&&0<=u&&B[s]!==ee[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==ee[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==ee[u]){var ve=`
`+B[s].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=s&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ke(n):""}function ot(t){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return Qe(t.type,!1);case 11:return Qe(t.type.render,!1);case 1:return Qe(t.type,!0);case 31:return ke("Activity");default:return""}}function dt(t){try{var r="";do r+=ot(t),t=t.return;while(t);return r}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $t(t){var r=Pt(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),s=""+t[r];if(!t.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,h=n.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(M){s=""+M,h.call(this,M)}}),Object.defineProperty(t,r,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Dt(t){t._valueTracker||(t._valueTracker=$t(t))}function Ct(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var n=r.getValue(),s="";return t&&(s=Pt(t)?t.checked?"true":"false":t.value),t=s,t!==n?(r.setValue(t),!0):!1}function zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Je=/[\n"\\]/g;function Gt(t){return t.replace(Je,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function pi(t,r,n,s,u,h,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),r!=null?M==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+Ve(r)):t.value!==""+Ve(r)&&(t.value=""+Ve(r)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),r!=null?Dr(t,M,Ve(r)):n!=null?Dr(t,M,Ve(n)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ve(w):t.removeAttribute("name")}function Ur(t,r,n,s,u,h,M,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),r!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||r!=null))return;n=n!=null?""+Ve(n):"",r=r!=null?""+Ve(r):n,w||r===t.value||(t.value=r),t.defaultValue=r}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dr(t,r,n){r==="number"&&zt(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function kr(t,r,n,s){if(t=t.options,r){r={};for(var u=0;u<n.length;u++)r["$"+n[u]]=!0;for(n=0;n<t.length;n++)u=r.hasOwnProperty("$"+t[n].value),t[n].selected!==u&&(t[n].selected=u),u&&s&&(t[n].defaultSelected=!0)}else{for(n=""+Ve(n),r=null,u=0;u<t.length;u++){if(t[u].value===n){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function qi(t,r,n){if(r!=null&&(r=""+Ve(r),r!==t.value&&(t.value=r),n==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=n!=null?""+Ve(n):""}function Rt(t,r,n,s){if(r==null){if(s!=null){if(n!=null)throw Error(a(92));if(re(s)){if(1<s.length)throw Error(a(93));s=s[0]}n=s}n==null&&(n=""),r=n}n=Ve(r),t.defaultValue=n,s=t.textContent,s===n&&s!==""&&s!==null&&(t.value=s)}function Wt(t,r){if(r){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=r;return}}t.textContent=r}var Ti=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zt(t,r,n){var s=r.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":s?t.setProperty(r,n):typeof n!="number"||n===0||Ti.has(r)?r==="float"?t.cssFloat=n:t[r]=(""+n).trim():t[r]=n+"px"}function Cn(t,r,n){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||r!=null&&r.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in r)s=r[u],r.hasOwnProperty(u)&&n[u]!==s&&Zt(t,u,s)}else for(var h in r)r.hasOwnProperty(h)&&Zt(t,h,r[h])}function wi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return oy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,Ba=null;function hp(t){var r=Gi(t);if(r&&(t=r.stateNode)){var n=t[gr]||null;e:switch(t=r.stateNode,r.type){case"input":if(pi(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),r=n.name,n.type==="radio"&&r!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+r)+'"][type="radio"]'),r=0;r<n.length;r++){var s=n[r];if(s!==t&&s.form===t.form){var u=s[gr]||null;if(!u)throw Error(a(90));pi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<n.length;r++)s=n[r],s.form===t.form&&Ct(s)}break e;case"textarea":qi(t,n.value,n.defaultValue);break e;case"select":r=n.value,r!=null&&kr(t,!!n.multiple,r,!1)}}}var vu=!1;function fp(t,r,n){if(vu)return t(r,n);vu=!0;try{var s=t(r);return s}finally{if(vu=!1,(Oa!==null||Ba!==null)&&(Jl(),Oa&&(r=Oa,t=Ba,Ba=Oa=null,hp(r),t)))for(r=0;r<t.length;r++)hp(t[r])}}function Go(t,r){var n=t.stateNode;if(n===null)return null;var s=n[gr]||null;if(s===null)return null;n=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(a(231,r,typeof n));return n}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Xi)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{_u=!1}var Rn=null,yu=null,hl=null;function pp(){if(hl)return hl;var t,r=yu,n=r.length,s,u="value"in Rn?Rn.value:Rn.textContent,h=u.length;for(t=0;t<n&&r[t]===u[t];t++);var M=n-t;for(s=1;s<=M&&r[n-s]===u[h-s];s++);return hl=u.slice(t,1<s?1-s:void 0)}function fl(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function mp(){return!1}function Fr(t){function r(n,s,u,h,M){this._reactName=n,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(n=t[w],this[w]=n?n(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:mp,this.isPropagationStopped=mp,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),r}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Fr(oa),jo=v({},oa,{view:0,detail:0}),sy=Fr(jo),Su,xu,qo,gl=v({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(Su=t.screenX-qo.screenX,xu=t.screenY-qo.screenY):xu=Su=0,qo=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),gp=Fr(gl),ly=v({},gl,{dataTransfer:0}),cy=Fr(ly),uy=v({},jo,{relatedTarget:0}),bu=Fr(uy),dy=v({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Fr(dy),fy=v({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=Fr(fy),my=v({},oa,{data:0}),vp=Fr(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=_y[t])?!!r[t]:!1}function Mu(){return yy}var Sy=v({},jo,{key:function(t){if(t.key){var r=gy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=Fr(Sy),by=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Fr(by),My=v({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Ey=Fr(My),Ty=v({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=Fr(Ty),Ay=v({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=Fr(Ay),Ry=v({},oa,{newState:0,oldState:0}),Py=Fr(Ry),Ny=[9,13,27,32],Eu=Xi&&"CompositionEvent"in window,Xo=null;Xi&&"documentMode"in document&&(Xo=document.documentMode);var Ly=Xi&&"TextEvent"in window&&!Xo,yp=Xi&&(!Eu||Xo&&8<Xo&&11>=Xo),Sp=" ",xp=!1;function bp(t,r){switch(t){case"keyup":return Ny.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var za=!1;function Iy(t,r){switch(t){case"compositionend":return Mp(r);case"keypress":return r.which!==32?null:(xp=!0,Sp);case"textInput":return t=r.data,t===Sp&&xp?null:t;default:return null}}function Uy(t,r){if(za)return t==="compositionend"||!Eu&&bp(t,r)?(t=pp(),hl=yu=Rn=null,za=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yp&&r.locale!=="ko"?null:r.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Dy[t.type]:r==="textarea"}function Tp(t,r,n,s){Oa?Ba?Ba.push(s):Ba=[s]:Oa=s,r=rc(r,"onChange"),0<r.length&&(n=new ml("onChange","change",null,n,s),t.push({event:n,listeners:r}))}var $o=null,Zo=null;function ky(t){av(t,0)}function vl(t){var r=Ei(t);if(Ct(r))return t}function wp(t,r){if(t==="change")return r}var Ap=!1;if(Xi){var Tu;if(Xi){var wu="oninput"in document;if(!wu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),wu=typeof Cp.oninput=="function"}Tu=wu}else Tu=!1;Ap=Tu&&(!document.documentMode||9<document.documentMode)}function Rp(){$o&&($o.detachEvent("onpropertychange",Pp),Zo=$o=null)}function Pp(t){if(t.propertyName==="value"&&vl(Zo)){var r=[];Tp(r,Zo,t,gu(t)),fp(ky,r)}}function Fy(t,r,n){t==="focusin"?(Rp(),$o=r,Zo=n,$o.attachEvent("onpropertychange",Pp)):t==="focusout"&&Rp()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Zo)}function By(t,r){if(t==="click")return vl(r)}function zy(t,r){if(t==="input"||t==="change")return vl(r)}function Hy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Gr=typeof Object.is=="function"?Object.is:Hy;function Jo(t,r){if(Gr(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var n=Object.keys(t),s=Object.keys(r);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var u=n[s];if(!Et.call(r,u)||!Gr(t[u],r[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,r){var n=Np(t);t=0;for(var s;n;){if(n.nodeType===3){if(s=t+n.textContent.length,t<=r&&s>=r)return{node:n,offset:r-t};t=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function Ip(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ip(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=zt(t.document);r instanceof t.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)t=r.contentWindow;else break;r=zt(t.document)}return r}function Au(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var Vy=Xi&&"documentMode"in document&&11>=document.documentMode,Ha=null,Cu=null,Ko=null,Ru=!1;function Dp(t,r,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Ha==null||Ha!==zt(s)||(s=Ha,"selectionStart"in s&&Au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ko&&Jo(Ko,s)||(Ko=s,s=rc(Cu,"onSelect"),0<s.length&&(r=new ml("onSelect","select",null,r,n),t.push({event:r,listeners:s}),r.target=Ha)))}function sa(t,r){var n={};return n[t.toLowerCase()]=r.toLowerCase(),n["Webkit"+t]="webkit"+r,n["Moz"+t]="moz"+r,n}var Va={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},Pu={},kp={};Xi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function la(t){if(Pu[t])return Pu[t];if(!Va[t])return t;var r=Va[t],n;for(n in r)if(r.hasOwnProperty(n)&&n in kp)return Pu[t]=r[n];return t}var Fp=la("animationend"),Op=la("animationiteration"),Bp=la("animationstart"),Gy=la("transitionrun"),Wy=la("transitionstart"),jy=la("transitioncancel"),zp=la("transitionend"),Hp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function mi(t,r){Hp.set(t,r),ji(r,[t])}var Vp=new WeakMap;function Qr(t,r){if(typeof t=="object"&&t!==null){var n=Vp.get(t);return n!==void 0?n:(r={value:t,source:r,stack:dt(r)},Vp.set(t,r),r)}return{value:t,source:r,stack:dt(r)}}var ei=[],Ga=0,Lu=0;function _l(){for(var t=Ga,r=Lu=Ga=0;r<t;){var n=ei[r];ei[r++]=null;var s=ei[r];ei[r++]=null;var u=ei[r];ei[r++]=null;var h=ei[r];if(ei[r++]=null,s!==null&&u!==null){var M=s.pending;M===null?u.next=u:(u.next=M.next,M.next=u),s.pending=u}h!==0&&Gp(n,u,h)}}function yl(t,r,n,s){ei[Ga++]=t,ei[Ga++]=r,ei[Ga++]=n,ei[Ga++]=s,Lu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Iu(t,r,n,s){return yl(t,r,n,s),Sl(t)}function Wa(t,r){return yl(t,null,null,r),Sl(t)}function Gp(t,r,n){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n);for(var u=!1,h=t.return;h!==null;)h.childLanes|=n,s=h.alternate,s!==null&&(s.childLanes|=n),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&r!==null&&(u=31-De(n),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[r]:s.push(r),r.lane=n|536870912),h):null}function Sl(t){if(50<bs)throw bs=0,Bd=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var ja={};function qy(t,r,n,s){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(t,r,n,s){return new qy(t,r,n,s)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,r){var n=t.alternate;return n===null?(n=Wr(t.tag,r,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=r,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,r=t.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Wp(t,r){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,r=n.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function xl(t,r,n,s,u,h){var M=0;if(s=t,typeof t=="function")Uu(t)&&(M=1);else if(typeof t=="string")M=$S(t,n,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Wr(31,n,r,u),t.elementType=P,t.lanes=h,t;case x:return ca(n.children,u,h,r);case R:M=8,u|=24;break;case _:return t=Wr(12,n,r,u|2),t.elementType=_,t.lanes=h,t;case F:return t=Wr(13,n,r,u),t.elementType=F,t.lanes=h,t;case k:return t=Wr(19,n,r,u),t.elementType=k,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case D:M=10;break e;case A:M=9;break e;case N:M=11;break e;case O:M=14;break e;case E:M=16,s=null;break e}M=29,n=Error(a(130,t===null?"null":typeof t,"")),s=null}return r=Wr(M,n,r,u),r.elementType=t,r.type=s,r.lanes=h,r}function ca(t,r,n,s){return t=Wr(7,t,s,r),t.lanes=n,t}function Du(t,r,n){return t=Wr(6,t,null,r),t.lanes=n,t}function ku(t,r,n){return r=Wr(4,t.children!==null?t.children:[],t.key,r),r.lanes=n,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var qa=[],Xa=0,bl=null,Ml=0,ti=[],ri=0,ua=null,Zi=1,Ji="";function da(t,r){qa[Xa++]=Ml,qa[Xa++]=bl,bl=t,Ml=r}function jp(t,r,n){ti[ri++]=Zi,ti[ri++]=Ji,ti[ri++]=ua,ua=t;var s=Zi;t=Ji;var u=32-De(s)-1;s&=~(1<<u),n+=1;var h=32-De(r)+u;if(30<h){var M=u-u%5;h=(s&(1<<M)-1).toString(32),s>>=M,u-=M,Zi=1<<32-De(r)+u|n<<u|s,Ji=h+t}else Zi=1<<h|n<<u|s,Ji=t}function Fu(t){t.return!==null&&(da(t,1),jp(t,1,0))}function Ou(t){for(;t===bl;)bl=qa[--Xa],qa[Xa]=null,Ml=qa[--Xa],qa[Xa]=null;for(;t===ua;)ua=ti[--ri],ti[ri]=null,Ji=ti[--ri],ti[ri]=null,Zi=ti[--ri],ti[ri]=null}var Pr=null,Qt=null,At=!1,ha=null,Ai=!1,Bu=Error(a(519));function fa(t){var r=Error(a(418,""));throw es(Qr(r,t)),Bu}function qp(t){var r=t.stateNode,n=t.type,s=t.memoizedProps;switch(r[ur]=t,r[gr]=s,n){case"dialog":mt("cancel",r),mt("close",r);break;case"iframe":case"object":case"embed":mt("load",r);break;case"video":case"audio":for(n=0;n<Es.length;n++)mt(Es[n],r);break;case"source":mt("error",r);break;case"img":case"image":case"link":mt("error",r),mt("load",r);break;case"details":mt("toggle",r);break;case"input":mt("invalid",r),Ur(r,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Dt(r);break;case"select":mt("invalid",r);break;case"textarea":mt("invalid",r),Rt(r,s.value,s.defaultValue,s.children),Dt(r)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||r.textContent===""+n||s.suppressHydrationWarning===!0||cv(r.textContent,n)?(s.popover!=null&&(mt("beforetoggle",r),mt("toggle",r)),s.onScroll!=null&&mt("scroll",r),s.onScrollEnd!=null&&mt("scrollend",r),s.onClick!=null&&(r.onclick=ic),r=!0):r=!1,r||fa(t)}function Xp(t){for(Pr=t.return;Pr;)switch(Pr.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Pr=Pr.return}}function Yo(t){if(t!==Pr)return!1;if(!At)return Xp(t),At=!0,!1;var r=t.tag,n;if((n=r!==3&&r!==27)&&((n=r===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||th(t.type,t.memoizedProps)),n=!n),n&&Qt&&fa(t),Xp(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(r===0){Qt=vi(t.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++;t=t.nextSibling}Qt=null}}else r===27?(r=Qt,jn(t.type)?(t=ah,ah=null,Qt=t):Qt=r):Qt=Pr?vi(t.stateNode.nextSibling):null;return!0}function Qo(){Qt=Pr=null,At=!1}function $p(){var t=ha;return t!==null&&(zr===null?zr=t:zr.push.apply(zr,t),ha=null),t}function es(t){ha===null?ha=[t]:ha.push(t)}var zu=K(null),pa=null,Ki=null;function Pn(t,r,n){Se(zu,r._currentValue),r._currentValue=n}function Yi(t){t._currentValue=zu.current,ge(zu)}function Hu(t,r,n){for(;t!==null;){var s=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),t===n)break;t=t.return}}function Vu(t,r,n,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var B=0;B<r.length;B++)if(w.context===r[B]){h.lanes|=n,w=h.alternate,w!==null&&(w.lanes|=n),Hu(h.return,n,t),s||(M=null);break e}h=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=n,h=M.alternate,h!==null&&(h.lanes|=n),Hu(M,n,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ts(t,r,n,s){t=null;for(var u=r,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var w=u.type;Gr(u.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(u===Me.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ps):t=[Ps])}u=u.return}t!==null&&Vu(r,t,n,s),r.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Gr(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ma(t){pa=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tr(t){return Zp(pa,t)}function Tl(t,r){return pa===null&&ma(t),Zp(t,r)}function Zp(t,r){var n=r._currentValue;if(r={context:r,memoizedValue:n,next:null},Ki===null){if(t===null)throw Error(a(308));Ki=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ki=Ki.next=r;return n}var Xy=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(n,s){t.push(s)}};this.abort=function(){r.aborted=!0,t.forEach(function(n){return n()})}},$y=o.unstable_scheduleCallback,Zy=o.unstable_NormalPriority,dr={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new Xy,data:new Map,refCount:0}}function rs(t){t.refCount--,t.refCount===0&&$y(Zy,function(){t.controller.abort()})}var is=null,Wu=0,$a=0,Za=null;function Jy(t,r){if(is===null){var n=is=[];Wu=0,$a=qd(),Za={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Wu++,r.then(Jp,Jp),r}function Jp(){if(--Wu===0&&is!==null){Za!==null&&(Za.status="fulfilled");var t=is;is=null,$a=0,Za=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Ky(t,r){var n=[],s={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return t.then(function(){s.status="fulfilled",s.value=r;for(var u=0;u<n.length;u++)(0,n[u])(r)},function(u){for(s.status="rejected",s.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),s}var Kp=U.S;U.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Jy(t,r),Kp!==null&&Kp(t,r)};var ga=K(null);function ju(){var t=ga.current;return t!==null?t:Vt.pooledCache}function wl(t,r){r===null?Se(ga,ga.current):Se(ga,r.pool)}function Yp(){var t=ju();return t===null?null:{parent:dr._currentValue,pool:t}}var ns=Error(a(460)),Qp=Error(a(474)),Al=Error(a(542)),qu={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function tm(t,r,n){switch(n=t[n],n===void 0?t.push(r):n!==r&&(r.then(Cl,Cl),r=n),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,im(t),t;default:if(typeof r.status=="string")r.then(Cl,Cl);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(s){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=s}},function(s){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=s}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,im(t),t}throw as=r,ns}}var as=null;function rm(){if(as===null)throw Error(a(459));var t=as;return as=null,t}function im(t){if(t===ns||t===Al)throw Error(a(483))}var Nn=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ln(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function In(t,r,n){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var u=s.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),s.pending=r,r=Sl(t),Gp(t,null,n),r}return yl(t,s,r,n),Sl(t)}function os(t,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194048)!==0)){var s=r.lanes;s&=t.pendingLanes,n|=s,r.lanes=n,He(t,n)}}function Zu(t,r){var n=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var u=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var M={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,n=n.next}while(n!==null);h===null?u=h=r:h=h.next=r}else u=h=r;n={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=r:t.next=r,n.lastBaseUpdate=r}var Ju=!1;function ss(){if(Ju){var t=Za;if(t!==null)throw t}}function ls(t,r,n,s){Ju=!1;var u=t.updateQueue;Nn=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var B=w,ee=B.next;B.next=null,M===null?h=ee:M.next=ee,M=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==M&&(w===null?ve.firstBaseUpdate=ee:w.next=ee,ve.lastBaseUpdate=B))}if(h!==null){var xe=u.baseState;M=0,ve=ee=B=null,w=h;do{var ne=w.lane&-536870913,ae=ne!==w.lane;if(ae?(_t&ne)===ne:(s&ne)===ne){ne!==0&&ne===$a&&(Ju=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=t,tt=w;ne=r;var Ot=n;switch(tt.tag){case 1:if(it=tt.payload,typeof it=="function"){xe=it.call(Ot,xe,ne);break e}xe=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=tt.payload,ne=typeof it=="function"?it.call(Ot,xe,ne):it,ne==null)break e;xe=v({},xe,ne);break e;case 2:Nn=!0}}ne=w.callback,ne!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[ne]:ae.push(ne))}else ae={lane:ne,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(ee=ve=ae,B=xe):ve=ve.next=ae,M|=ne;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ae=w,w=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);ve===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=ve,h===null&&(u.shared.lanes=0),Hn|=M,t.lanes=M,t.memoizedState=xe}}function nm(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function am(t,r){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)nm(n[t],r)}var Ja=K(null),Rl=K(0);function om(t,r){t=sn,Se(Rl,t),Se(Ja,r),sn=t|r.baseLanes}function Ku(){Se(Rl,sn),Se(Ja,Ja.current)}function Yu(){sn=Rl.current,ge(Ja),ge(Rl)}var Un=0,ht=null,kt=null,sr=null,Pl=!1,Ka=!1,va=!1,Nl=0,cs=0,Ya=null,Yy=0;function nr(){throw Error(a(321))}function Qu(t,r){if(r===null)return!1;for(var n=0;n<r.length&&n<t.length;n++)if(!Gr(t[n],r[n]))return!1;return!0}function ed(t,r,n,s,u,h){return Un=h,ht=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,U.H=t===null||t.memoizedState===null?Gm:Wm,va=!1,h=n(s,u),va=!1,Ka&&(h=lm(r,n,s,u)),sm(t),h}function sm(t){U.H=Fl;var r=kt!==null&&kt.next!==null;if(Un=0,sr=kt=ht=null,Pl=!1,cs=0,Ya=null,r)throw Error(a(300));t===null||vr||(t=t.dependencies,t!==null&&El(t)&&(vr=!0))}function lm(t,r,n,s){ht=t;var u=0;do{if(Ka&&(Ya=null),cs=0,Ka=!1,25<=u)throw Error(a(301));if(u+=1,sr=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=aS,h=r(n,s)}while(Ka);return h}function Qy(){var t=U.H,r=t.useState()[0];return r=typeof r.then=="function"?us(r):r,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ht.flags|=1024),r}function td(){var t=Nl!==0;return Nl=0,t}function rd(t,r,n){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~n}function id(t){if(Pl){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Pl=!1}Un=0,sr=kt=ht=null,Ka=!1,cs=Nl=0,Ya=null}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sr===null?ht.memoizedState=sr=t:sr=sr.next=t,sr}function lr(){if(kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var r=sr===null?ht.memoizedState:sr.next;if(r!==null)sr=r,kt=t;else{if(t===null)throw ht.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},sr===null?ht.memoizedState=sr=t:sr=sr.next=t}return sr}function nd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(t){var r=cs;return cs+=1,Ya===null&&(Ya=[]),t=tm(Ya,t,r),r=ht,(sr===null?r.memoizedState:sr.next)===null&&(r=r.alternate,U.H=r===null||r.memoizedState===null?Gm:Wm),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return us(t);if(t.$$typeof===D)return Tr(t)}throw Error(a(438,String(t)))}function ad(t){var r=null,n=ht.updateQueue;if(n!==null&&(r=n.memoCache),r==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(r={data:s.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),n===null&&(n=nd(),ht.updateQueue=n),n.memoCache=r,n=r.data[r.index],n===void 0)for(n=r.data[r.index]=Array(t),s=0;s<t;s++)n[s]=ue;return r.index++,n}function Qi(t,r){return typeof r=="function"?r(t):r}function Il(t){var r=lr();return od(r,kt,t)}function od(t,r,n){var s=t.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}r.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{r=u.next;var w=M=null,B=null,ee=r,ve=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(_t&xe)===xe:(Un&xe)===xe){var ne=ee.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===$a&&(ve=!0);else if((Un&ne)===ne){ee=ee.next,ne===$a&&(ve=!0);continue}else xe={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(w=B=xe,M=h):B=B.next=xe,ht.lanes|=ne,Hn|=ne;xe=ee.action,va&&n(h,xe),h=ee.hasEagerState?ee.eagerState:n(h,xe)}else ne={lane:xe,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(w=B=ne,M=h):B=B.next=ne,ht.lanes|=xe,Hn|=xe;ee=ee.next}while(ee!==null&&ee!==r);if(B===null?M=h:B.next=w,!Gr(h,t.memoizedState)&&(vr=!0,ve&&(n=Za,n!==null)))throw n;t.memoizedState=h,t.baseState=M,t.baseQueue=B,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function sd(t){var r=lr(),n=r.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=t;var s=n.dispatch,u=n.pending,h=r.memoizedState;if(u!==null){n.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Gr(h,r.memoizedState)||(vr=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),n.lastRenderedState=h}return[h,s]}function cm(t,r,n){var s=ht,u=lr(),h=At;if(h){if(n===void 0)throw Error(a(407));n=n()}else n=r();var M=!Gr((kt||u).memoizedState,n);M&&(u.memoizedState=n,vr=!0),u=u.queue;var w=hm.bind(null,s,u,t);if(ds(2048,8,w,[t]),u.getSnapshot!==r||M||sr!==null&&sr.memoizedState.tag&1){if(s.flags|=2048,Qa(9,Ul(),dm.bind(null,s,u,n,r),null),Vt===null)throw Error(a(349));h||(Un&124)!==0||um(s,r,n)}return n}function um(t,r,n){t.flags|=16384,t={getSnapshot:r,value:n},r=ht.updateQueue,r===null?(r=nd(),ht.updateQueue=r,r.stores=[t]):(n=r.stores,n===null?r.stores=[t]:n.push(t))}function dm(t,r,n,s){r.value=n,r.getSnapshot=s,fm(r)&&pm(t)}function hm(t,r,n){return n(function(){fm(r)&&pm(t)})}function fm(t){var r=t.getSnapshot;t=t.value;try{var n=r();return!Gr(t,n)}catch{return!0}}function pm(t){var r=Wa(t,2);r!==null&&Zr(r,t,2)}function ld(t){var r=Or();if(typeof t=="function"){var n=t;if(t=n(),va){pe(!0);try{n()}finally{pe(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},r}function mm(t,r,n,s){return t.baseState=n,od(t,kt,typeof s=="function"?s:Qi)}function eS(t,r,n,s,u){if(kl(t))throw Error(a(485));if(t=r.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};U.T!==null?n(!0):h.isTransition=!1,s(h),n=r.pending,n===null?(h.next=r.pending=h,gm(r,h)):(h.next=n.next,r.pending=n.next=h)}}function gm(t,r){var n=r.action,s=r.payload,u=t.state;if(r.isTransition){var h=U.T,M={};U.T=M;try{var w=n(u,s),B=U.S;B!==null&&B(M,w),vm(t,r,w)}catch(ee){cd(t,r,ee)}finally{U.T=h}}else try{h=n(u,s),vm(t,r,h)}catch(ee){cd(t,r,ee)}}function vm(t,r,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){_m(t,r,s)},function(s){return cd(t,r,s)}):_m(t,r,n)}function _m(t,r,n){r.status="fulfilled",r.value=n,ym(r),t.state=n,r=t.pending,r!==null&&(n=r.next,n===r?t.pending=null:(n=n.next,r.next=n,gm(t,n)))}function cd(t,r,n){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do r.status="rejected",r.reason=n,ym(r),r=r.next;while(r!==s)}t.action=null}function ym(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Sm(t,r){return r}function xm(t,r){if(At){var n=Vt.formState;if(n!==null){e:{var s=ht;if(At){if(Qt){t:{for(var u=Qt,h=Ai;u.nodeType!==8;){if(!h){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qt=vi(u.nextSibling),s=u.data==="F!";break e}}fa(s)}s=!1}s&&(r=n[0])}}return n=Or(),n.memoizedState=n.baseState=r,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:r},n.queue=s,n=zm.bind(null,ht,s),s.dispatch=n,s=ld(!1),h=pd.bind(null,ht,!1,s.queue),s=Or(),u={state:r,dispatch:null,action:t,pending:null},s.queue=u,n=eS.bind(null,ht,u,h,n),u.dispatch=n,s.memoizedState=t,[r,n,!1]}function bm(t){var r=lr();return Mm(r,kt,t)}function Mm(t,r,n){if(r=od(t,r,Sm)[0],t=Il(Qi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var s=us(r)}catch(M){throw M===ns?Al:M}else s=r;r=lr();var u=r.queue,h=u.dispatch;return n!==r.memoizedState&&(ht.flags|=2048,Qa(9,Ul(),tS.bind(null,u,n),null)),[s,h,t]}function tS(t,r){t.action=r}function Em(t){var r=lr(),n=kt;if(n!==null)return Mm(r,n,t);lr(),r=r.memoizedState,n=lr();var s=n.queue.dispatch;return n.memoizedState=t,[r,s,!1]}function Qa(t,r,n,s){return t={tag:t,create:n,deps:s,inst:r,next:null},r=ht.updateQueue,r===null&&(r=nd(),ht.updateQueue=r),n=r.lastEffect,n===null?r.lastEffect=t.next=t:(s=n.next,n.next=t,t.next=s,r.lastEffect=t),t}function Ul(){return{destroy:void 0,resource:void 0}}function Tm(){return lr().memoizedState}function Dl(t,r,n,s){var u=Or();s=s===void 0?null:s,ht.flags|=t,u.memoizedState=Qa(1|r,Ul(),n,s)}function ds(t,r,n,s){var u=lr();s=s===void 0?null:s;var h=u.memoizedState.inst;kt!==null&&s!==null&&Qu(s,kt.memoizedState.deps)?u.memoizedState=Qa(r,h,n,s):(ht.flags|=t,u.memoizedState=Qa(1|r,h,n,s))}function wm(t,r){Dl(8390656,8,t,r)}function Am(t,r){ds(2048,8,t,r)}function Cm(t,r){return ds(4,2,t,r)}function Rm(t,r){return ds(4,4,t,r)}function Pm(t,r){if(typeof r=="function"){t=t();var n=r(t);return function(){typeof n=="function"?n():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nm(t,r,n){n=n!=null?n.concat([t]):null,ds(4,4,Pm.bind(null,r,t),n)}function ud(){}function Lm(t,r){var n=lr();r=r===void 0?null:r;var s=n.memoizedState;return r!==null&&Qu(r,s[1])?s[0]:(n.memoizedState=[t,r],t)}function Im(t,r){var n=lr();r=r===void 0?null:r;var s=n.memoizedState;if(r!==null&&Qu(r,s[1]))return s[0];if(s=t(),va){pe(!0);try{t()}finally{pe(!1)}}return n.memoizedState=[s,r],s}function dd(t,r,n){return n===void 0||(Un&1073741824)!==0?t.memoizedState=r:(t.memoizedState=n,t=kg(),ht.lanes|=t,Hn|=t,n)}function Um(t,r,n,s){return Gr(n,r)?n:Ja.current!==null?(t=dd(t,n,s),Gr(t,r)||(vr=!0),t):(Un&42)===0?(vr=!0,t.memoizedState=n):(t=kg(),ht.lanes|=t,Hn|=t,r)}function Dm(t,r,n,s,u){var h=H.p;H.p=h!==0&&8>h?h:8;var M=U.T,w={};U.T=w,pd(t,!1,r,n);try{var B=u(),ee=U.S;if(ee!==null&&ee(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ve=Ky(B,s);hs(t,r,ve,$r(t))}else hs(t,r,s,$r(t))}catch(xe){hs(t,r,{then:function(){},status:"rejected",reason:xe},$r())}finally{H.p=h,U.T=M}}function rS(){}function hd(t,r,n,s){if(t.tag!==5)throw Error(a(476));var u=km(t).queue;Dm(t,u,r,ce,n===null?rS:function(){return Fm(t),n(s)})}function km(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ce},next:null};var n={};return r.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Fm(t){var r=km(t).next.queue;hs(t,r,{},$r())}function fd(){return Tr(Ps)}function Om(){return lr().memoizedState}function Bm(){return lr().memoizedState}function iS(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var n=$r();t=Ln(n);var s=In(r,t,n);s!==null&&(Zr(s,r,n),os(s,r,n)),r={cache:Gu()},t.payload=r;return}r=r.return}}function nS(t,r,n){var s=$r();n={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},kl(t)?Hm(r,n):(n=Iu(t,r,n,s),n!==null&&(Zr(n,t,s),Vm(n,r,s)))}function zm(t,r,n){var s=$r();hs(t,r,n,s)}function hs(t,r,n,s){var u={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(kl(t))Hm(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var M=r.lastRenderedState,w=h(M,n);if(u.hasEagerState=!0,u.eagerState=w,Gr(w,M))return yl(t,r,u,0),Vt===null&&_l(),!1}catch{}finally{}if(n=Iu(t,r,u,s),n!==null)return Zr(n,t,s),Vm(n,r,s),!0}return!1}function pd(t,r,n,s){if(s={lane:2,revertLane:qd(),action:s,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(r)throw Error(a(479))}else r=Iu(t,n,s,2),r!==null&&Zr(r,t,2)}function kl(t){var r=t.alternate;return t===ht||r!==null&&r===ht}function Hm(t,r){Ka=Pl=!0;var n=t.pending;n===null?r.next=r:(r.next=n.next,n.next=r),t.pending=r}function Vm(t,r,n){if((n&4194048)!==0){var s=r.lanes;s&=t.pendingLanes,n|=s,r.lanes=n,He(t,n)}}var Fl={readContext:Tr,use:Ll,useCallback:nr,useContext:nr,useEffect:nr,useImperativeHandle:nr,useLayoutEffect:nr,useInsertionEffect:nr,useMemo:nr,useReducer:nr,useRef:nr,useState:nr,useDebugValue:nr,useDeferredValue:nr,useTransition:nr,useSyncExternalStore:nr,useId:nr,useHostTransitionStatus:nr,useFormState:nr,useActionState:nr,useOptimistic:nr,useMemoCache:nr,useCacheRefresh:nr},Gm={readContext:Tr,use:Ll,useCallback:function(t,r){return Or().memoizedState=[t,r===void 0?null:r],t},useContext:Tr,useEffect:wm,useImperativeHandle:function(t,r,n){n=n!=null?n.concat([t]):null,Dl(4194308,4,Pm.bind(null,r,t),n)},useLayoutEffect:function(t,r){return Dl(4194308,4,t,r)},useInsertionEffect:function(t,r){Dl(4,2,t,r)},useMemo:function(t,r){var n=Or();r=r===void 0?null:r;var s=t();if(va){pe(!0);try{t()}finally{pe(!1)}}return n.memoizedState=[s,r],s},useReducer:function(t,r,n){var s=Or();if(n!==void 0){var u=n(r);if(va){pe(!0);try{n(r)}finally{pe(!1)}}}else u=r;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=nS.bind(null,ht,t),[s.memoizedState,t]},useRef:function(t){var r=Or();return t={current:t},r.memoizedState=t},useState:function(t){t=ld(t);var r=t.queue,n=zm.bind(null,ht,r);return r.dispatch=n,[t.memoizedState,n]},useDebugValue:ud,useDeferredValue:function(t,r){var n=Or();return dd(n,t,r)},useTransition:function(){var t=ld(!1);return t=Dm.bind(null,ht,t.queue,!0,!1),Or().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,n){var s=ht,u=Or();if(At){if(n===void 0)throw Error(a(407));n=n()}else{if(n=r(),Vt===null)throw Error(a(349));(_t&124)!==0||um(s,r,n)}u.memoizedState=n;var h={value:n,getSnapshot:r};return u.queue=h,wm(hm.bind(null,s,h,t),[t]),s.flags|=2048,Qa(9,Ul(),dm.bind(null,s,h,n,r),null),n},useId:function(){var t=Or(),r=Vt.identifierPrefix;if(At){var n=Ji,s=Zi;n=(s&~(1<<32-De(s)-1)).toString(32)+n,r="«"+r+"R"+n,n=Nl++,0<n&&(r+="H"+n.toString(32)),r+="»"}else n=Yy++,r="«"+r+"r"+n.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:fd,useFormState:xm,useActionState:xm,useOptimistic:function(t){var r=Or();r.memoizedState=r.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=n,r=pd.bind(null,ht,!0,n),n.dispatch=r,[t,r]},useMemoCache:ad,useCacheRefresh:function(){return Or().memoizedState=iS.bind(null,ht)}},Wm={readContext:Tr,use:Ll,useCallback:Lm,useContext:Tr,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Im,useReducer:Il,useRef:Tm,useState:function(){return Il(Qi)},useDebugValue:ud,useDeferredValue:function(t,r){var n=lr();return Um(n,kt.memoizedState,t,r)},useTransition:function(){var t=Il(Qi)[0],r=lr().memoizedState;return[typeof t=="boolean"?t:us(t),r]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:fd,useFormState:bm,useActionState:bm,useOptimistic:function(t,r){var n=lr();return mm(n,kt,t,r)},useMemoCache:ad,useCacheRefresh:Bm},aS={readContext:Tr,use:Ll,useCallback:Lm,useContext:Tr,useEffect:Am,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Im,useReducer:sd,useRef:Tm,useState:function(){return sd(Qi)},useDebugValue:ud,useDeferredValue:function(t,r){var n=lr();return kt===null?dd(n,t,r):Um(n,kt.memoizedState,t,r)},useTransition:function(){var t=sd(Qi)[0],r=lr().memoizedState;return[typeof t=="boolean"?t:us(t),r]},useSyncExternalStore:cm,useId:Om,useHostTransitionStatus:fd,useFormState:Em,useActionState:Em,useOptimistic:function(t,r){var n=lr();return kt!==null?mm(n,kt,t,r):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ad,useCacheRefresh:Bm},eo=null,fs=0;function Ol(t){var r=fs;return fs+=1,eo===null&&(eo=[]),tm(eo,t,r)}function ps(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Bl(t,r){throw r.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function jm(t){var r=t._init;return r(t._payload)}function qm(t){function r($,W){if(t){var Y=$.deletions;Y===null?($.deletions=[W],$.flags|=16):Y.push(W)}}function n($,W){if(!t)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function s($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=$i($,W),$.index=0,$.sibling=null,$}function h($,W,Y){return $.index=Y,t?(Y=$.alternate,Y!==null?(Y=Y.index,Y<W?($.flags|=67108866,W):Y):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function w($,W,Y,ye){return W===null||W.tag!==6?(W=Du(Y,$.mode,ye),W.return=$,W):(W=u(W,Y),W.return=$,W)}function B($,W,Y,ye){var Ge=Y.type;return Ge===x?ve($,W,Y.props.children,ye,Y.key):W!==null&&(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===E&&jm(Ge)===W.type)?(W=u(W,Y.props),ps(W,Y),W.return=$,W):(W=xl(Y.type,Y.key,Y.props,null,$.mode,ye),ps(W,Y),W.return=$,W)}function ee($,W,Y,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==Y.containerInfo||W.stateNode.implementation!==Y.implementation?(W=ku(Y,$.mode,ye),W.return=$,W):(W=u(W,Y.children||[]),W.return=$,W)}function ve($,W,Y,ye,Ge){return W===null||W.tag!==7?(W=ca(Y,$.mode,ye,Ge),W.return=$,W):(W=u(W,Y),W.return=$,W)}function xe($,W,Y){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Du(""+W,$.mode,Y),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case g:return Y=xl(W.type,W.key,W.props,null,$.mode,Y),ps(Y,W),Y.return=$,Y;case S:return W=ku(W,$.mode,Y),W.return=$,W;case E:var ye=W._init;return W=ye(W._payload),xe($,W,Y)}if(re(W)||J(W))return W=ca(W,$.mode,Y,null),W.return=$,W;if(typeof W.then=="function")return xe($,Ol(W),Y);if(W.$$typeof===D)return xe($,Tl($,W),Y);Bl($,W)}return null}function ne($,W,Y,ye){var Ge=W!==null?W.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Ge!==null?null:w($,W,""+Y,ye);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case g:return Y.key===Ge?B($,W,Y,ye):null;case S:return Y.key===Ge?ee($,W,Y,ye):null;case E:return Ge=Y._init,Y=Ge(Y._payload),ne($,W,Y,ye)}if(re(Y)||J(Y))return Ge!==null?null:ve($,W,Y,ye,null);if(typeof Y.then=="function")return ne($,W,Ol(Y),ye);if(Y.$$typeof===D)return ne($,W,Tl($,Y),ye);Bl($,Y)}return null}function ae($,W,Y,ye,Ge){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return $=$.get(Y)||null,w(W,$,""+ye,Ge);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case g:return $=$.get(ye.key===null?Y:ye.key)||null,B(W,$,ye,Ge);case S:return $=$.get(ye.key===null?Y:ye.key)||null,ee(W,$,ye,Ge);case E:var ft=ye._init;return ye=ft(ye._payload),ae($,W,Y,ye,Ge)}if(re(ye)||J(ye))return $=$.get(Y)||null,ve(W,$,ye,Ge,null);if(typeof ye.then=="function")return ae($,W,Y,Ol(ye),Ge);if(ye.$$typeof===D)return ae($,W,Y,Tl(W,ye),Ge);Bl(W,ye)}return null}function it($,W,Y,ye){for(var Ge=null,ft=null,$e=W,rt=W=0,yr=null;$e!==null&&rt<Y.length;rt++){$e.index>rt?(yr=$e,$e=null):yr=$e.sibling;var bt=ne($,$e,Y[rt],ye);if(bt===null){$e===null&&($e=yr);break}t&&$e&&bt.alternate===null&&r($,$e),W=h(bt,W,rt),ft===null?Ge=bt:ft.sibling=bt,ft=bt,$e=yr}if(rt===Y.length)return n($,$e),At&&da($,rt),Ge;if($e===null){for(;rt<Y.length;rt++)$e=xe($,Y[rt],ye),$e!==null&&(W=h($e,W,rt),ft===null?Ge=$e:ft.sibling=$e,ft=$e);return At&&da($,rt),Ge}for($e=s($e);rt<Y.length;rt++)yr=ae($e,$,rt,Y[rt],ye),yr!==null&&(t&&yr.alternate!==null&&$e.delete(yr.key===null?rt:yr.key),W=h(yr,W,rt),ft===null?Ge=yr:ft.sibling=yr,ft=yr);return t&&$e.forEach(function(Jn){return r($,Jn)}),At&&da($,rt),Ge}function tt($,W,Y,ye){if(Y==null)throw Error(a(151));for(var Ge=null,ft=null,$e=W,rt=W=0,yr=null,bt=Y.next();$e!==null&&!bt.done;rt++,bt=Y.next()){$e.index>rt?(yr=$e,$e=null):yr=$e.sibling;var Jn=ne($,$e,bt.value,ye);if(Jn===null){$e===null&&($e=yr);break}t&&$e&&Jn.alternate===null&&r($,$e),W=h(Jn,W,rt),ft===null?Ge=Jn:ft.sibling=Jn,ft=Jn,$e=yr}if(bt.done)return n($,$e),At&&da($,rt),Ge;if($e===null){for(;!bt.done;rt++,bt=Y.next())bt=xe($,bt.value,ye),bt!==null&&(W=h(bt,W,rt),ft===null?Ge=bt:ft.sibling=bt,ft=bt);return At&&da($,rt),Ge}for($e=s($e);!bt.done;rt++,bt=Y.next())bt=ae($e,$,rt,bt.value,ye),bt!==null&&(t&&bt.alternate!==null&&$e.delete(bt.key===null?rt:bt.key),W=h(bt,W,rt),ft===null?Ge=bt:ft.sibling=bt,ft=bt);return t&&$e.forEach(function(ox){return r($,ox)}),At&&da($,rt),Ge}function Ot($,W,Y,ye){if(typeof Y=="object"&&Y!==null&&Y.type===x&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case g:e:{for(var Ge=Y.key;W!==null;){if(W.key===Ge){if(Ge=Y.type,Ge===x){if(W.tag===7){n($,W.sibling),ye=u(W,Y.props.children),ye.return=$,$=ye;break e}}else if(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===E&&jm(Ge)===W.type){n($,W.sibling),ye=u(W,Y.props),ps(ye,Y),ye.return=$,$=ye;break e}n($,W);break}else r($,W);W=W.sibling}Y.type===x?(ye=ca(Y.props.children,$.mode,ye,Y.key),ye.return=$,$=ye):(ye=xl(Y.type,Y.key,Y.props,null,$.mode,ye),ps(ye,Y),ye.return=$,$=ye)}return M($);case S:e:{for(Ge=Y.key;W!==null;){if(W.key===Ge)if(W.tag===4&&W.stateNode.containerInfo===Y.containerInfo&&W.stateNode.implementation===Y.implementation){n($,W.sibling),ye=u(W,Y.children||[]),ye.return=$,$=ye;break e}else{n($,W);break}else r($,W);W=W.sibling}ye=ku(Y,$.mode,ye),ye.return=$,$=ye}return M($);case E:return Ge=Y._init,Y=Ge(Y._payload),Ot($,W,Y,ye)}if(re(Y))return it($,W,Y,ye);if(J(Y)){if(Ge=J(Y),typeof Ge!="function")throw Error(a(150));return Y=Ge.call(Y),tt($,W,Y,ye)}if(typeof Y.then=="function")return Ot($,W,Ol(Y),ye);if(Y.$$typeof===D)return Ot($,W,Tl($,Y),ye);Bl($,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,W!==null&&W.tag===6?(n($,W.sibling),ye=u(W,Y),ye.return=$,$=ye):(n($,W),ye=Du(Y,$.mode,ye),ye.return=$,$=ye),M($)):n($,W)}return function($,W,Y,ye){try{fs=0;var Ge=Ot($,W,Y,ye);return eo=null,Ge}catch($e){if($e===ns||$e===Al)throw $e;var ft=Wr(29,$e,null,$.mode);return ft.lanes=ye,ft.return=$,ft}finally{}}}var to=qm(!0),Xm=qm(!1),ii=K(null),en=null;function Dn(t){var r=t.alternate;Se(hr,hr.current&1),Se(ii,t),en===null&&(r===null||Ja.current!==null||r.memoizedState!==null)&&(en=t)}function $m(t){if(t.tag===22){if(Se(hr,hr.current),Se(ii,t),en===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(en=t)}}else kn()}function kn(){Se(hr,hr.current),Se(ii,ii.current)}function tn(t){ge(ii),en===t&&(en=null),ge(hr)}var hr=K(0);function zl(t){for(var r=t;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||nh(n)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function md(t,r,n,s){r=t.memoizedState,n=n(s,r),n=n==null?r:v({},r,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gd={enqueueSetState:function(t,r,n){t=t._reactInternals;var s=$r(),u=Ln(s);u.payload=r,n!=null&&(u.callback=n),r=In(t,u,s),r!==null&&(Zr(r,t,s),os(r,t,s))},enqueueReplaceState:function(t,r,n){t=t._reactInternals;var s=$r(),u=Ln(s);u.tag=1,u.payload=r,n!=null&&(u.callback=n),r=In(t,u,s),r!==null&&(Zr(r,t,s),os(r,t,s))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var n=$r(),s=Ln(n);s.tag=2,r!=null&&(s.callback=r),r=In(t,s,n),r!==null&&(Zr(r,t,n),os(r,t,n))}};function Zm(t,r,n,s,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,M):r.prototype&&r.prototype.isPureReactComponent?!Jo(n,s)||!Jo(u,h):!0}function Jm(t,r,n,s){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,s),r.state!==t&&gd.enqueueReplaceState(r,r.state,null)}function _a(t,r){var n=r;if("ref"in r){n={};for(var s in r)s!=="ref"&&(n[s]=r[s])}if(t=t.defaultProps){n===r&&(n=v({},n));for(var u in t)n[u]===void 0&&(n[u]=t[u])}return n}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Km(t){Hl(t)}function Ym(t){console.error(t)}function Qm(t){Hl(t)}function Vl(t,r){try{var n=t.onUncaughtError;n(r.value,{componentStack:r.stack})}catch(s){setTimeout(function(){throw s})}}function eg(t,r,n){try{var s=t.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vd(t,r,n){return n=Ln(n),n.tag=3,n.payload={element:null},n.callback=function(){Vl(t,r)},n}function tg(t){return t=Ln(t),t.tag=3,t}function rg(t,r,n,s){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){eg(r,n,s)}}var M=n.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){eg(r,n,s),typeof u!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function oS(t,r,n,s,u){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(r=n.alternate,r!==null&&ts(r,n,u,!0),n=ii.current,n!==null){switch(n.tag){case 13:return en===null?Hd():n.alternate===null&&er===0&&(er=3),n.flags&=-257,n.flags|=65536,n.lanes=u,s===qu?n.flags|=16384:(r=n.updateQueue,r===null?n.updateQueue=new Set([s]):r.add(s),Gd(t,s,u)),!1;case 22:return n.flags|=65536,s===qu?n.flags|=16384:(r=n.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=r):(n=r.retryQueue,n===null?r.retryQueue=new Set([s]):n.add(s)),Gd(t,s,u)),!1}throw Error(a(435,n.tag))}return Gd(t,s,u),Hd(),!1}if(At)return r=ii.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=u,s!==Bu&&(t=Error(a(422),{cause:s}),es(Qr(t,n)))):(s!==Bu&&(r=Error(a(423),{cause:s}),es(Qr(r,n))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Qr(s,n),u=vd(t.stateNode,s,u),Zu(t,u),er!==4&&(er=2)),!1;var h=Error(a(520),{cause:s});if(h=Qr(h,n),xs===null?xs=[h]:xs.push(h),er!==4&&(er=2),r===null)return!0;s=Qr(s,n),n=r;do{switch(n.tag){case 3:return n.flags|=65536,t=u&-u,n.lanes|=t,t=vd(n.stateNode,s,t),Zu(n,t),!1;case 1:if(r=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Vn===null||!Vn.has(h))))return n.flags|=65536,u&=-u,n.lanes|=u,u=tg(u),rg(u,t,n,s),Zu(n,u),!1}n=n.return}while(n!==null);return!1}var ig=Error(a(461)),vr=!1;function xr(t,r,n,s){r.child=t===null?Xm(r,null,n,s):to(r,t.child,n,s)}function ng(t,r,n,s,u){n=n.render;var h=r.ref;if("ref"in s){var M={};for(var w in s)w!=="ref"&&(M[w]=s[w])}else M=s;return ma(r),s=ed(t,r,n,M,h,u),w=td(),t!==null&&!vr?(rd(t,r,u),rn(t,r,u)):(At&&w&&Fu(r),r.flags|=1,xr(t,r,s,u),r.child)}function ag(t,r,n,s,u){if(t===null){var h=n.type;return typeof h=="function"&&!Uu(h)&&h.defaultProps===void 0&&n.compare===null?(r.tag=15,r.type=h,og(t,r,h,s,u)):(t=xl(n.type,null,s,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!Td(t,u)){var M=h.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(M,s)&&t.ref===r.ref)return rn(t,r,u)}return r.flags|=1,t=$i(h,s),t.ref=r.ref,t.return=r,r.child=t}function og(t,r,n,s,u){if(t!==null){var h=t.memoizedProps;if(Jo(h,s)&&t.ref===r.ref)if(vr=!1,r.pendingProps=s=h,Td(t,u))(t.flags&131072)!==0&&(vr=!0);else return r.lanes=t.lanes,rn(t,r,u)}return _d(t,r,n,s,u)}function sg(t,r,n){var s=r.pendingProps,u=s.children,h=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((r.flags&128)!==0){if(s=h!==null?h.baseLanes|n:n,t!==null){for(u=r.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;r.childLanes=h&~s}else r.childLanes=0,r.child=null;return lg(t,r,s,n)}if((n&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(r,h!==null?h.cachePool:null),h!==null?om(r,h):Ku(),$m(r);else return r.lanes=r.childLanes=536870912,lg(t,r,h!==null?h.baseLanes|n:n,n)}else h!==null?(wl(r,h.cachePool),om(r,h),kn(),r.memoizedState=null):(t!==null&&wl(r,null),Ku(),kn());return xr(t,r,u,n),r.child}function lg(t,r,n,s){var u=ju();return u=u===null?null:{parent:dr._currentValue,pool:u},r.memoizedState={baseLanes:n,cachePool:u},t!==null&&wl(r,null),Ku(),$m(r),t!==null&&ts(t,r,s,!0),null}function Gl(t,r){var n=r.ref;if(n===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(a(284));(t===null||t.ref!==n)&&(r.flags|=4194816)}}function _d(t,r,n,s,u){return ma(r),n=ed(t,r,n,s,void 0,u),s=td(),t!==null&&!vr?(rd(t,r,u),rn(t,r,u)):(At&&s&&Fu(r),r.flags|=1,xr(t,r,n,u),r.child)}function cg(t,r,n,s,u,h){return ma(r),r.updateQueue=null,n=lm(r,s,n,u),sm(t),s=td(),t!==null&&!vr?(rd(t,r,h),rn(t,r,h)):(At&&s&&Fu(r),r.flags|=1,xr(t,r,n,h),r.child)}function ug(t,r,n,s,u){if(ma(r),r.stateNode===null){var h=ja,M=n.contextType;typeof M=="object"&&M!==null&&(h=Tr(M)),h=new n(s,h),r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=gd,r.stateNode=h,h._reactInternals=r,h=r.stateNode,h.props=s,h.state=r.memoizedState,h.refs={},Xu(r),M=n.contextType,h.context=typeof M=="object"&&M!==null?Tr(M):ja,h.state=r.memoizedState,M=n.getDerivedStateFromProps,typeof M=="function"&&(md(r,n,M,s),h.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&gd.enqueueReplaceState(h,h.state,null),ls(r,s,h,u),ss(),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308),s=!0}else if(t===null){h=r.stateNode;var w=r.memoizedProps,B=_a(n,w);h.props=B;var ee=h.context,ve=n.contextType;M=ja,typeof ve=="object"&&ve!==null&&(M=Tr(ve));var xe=n.getDerivedStateFromProps;ve=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ee!==M)&&Jm(r,h,s,M),Nn=!1;var ne=r.memoizedState;h.state=ne,ls(r,s,h,u),ss(),ee=r.memoizedState,w||ne!==ee||Nn?(typeof xe=="function"&&(md(r,n,xe,s),ee=r.memoizedState),(B=Nn||Zm(r,n,B,s,ne,ee,M))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=ee),h.props=s,h.state=ee,h.context=M,s=B):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{h=r.stateNode,$u(t,r),M=r.memoizedProps,ve=_a(n,M),h.props=ve,xe=r.pendingProps,ne=h.context,ee=n.contextType,B=ja,typeof ee=="object"&&ee!==null&&(B=Tr(ee)),w=n.getDerivedStateFromProps,(ee=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==xe||ne!==B)&&Jm(r,h,s,B),Nn=!1,ne=r.memoizedState,h.state=ne,ls(r,s,h,u),ss();var ae=r.memoizedState;M!==xe||ne!==ae||Nn||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof w=="function"&&(md(r,n,w,s),ae=r.memoizedState),(ve=Nn||Zm(r,n,ve,s,ne,ae,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ae,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ae,B)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=ae),h.props=s,h.state=ae,h.context=B,s=ve):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(r.flags|=1024),s=!1)}return h=s,Gl(t,r),s=(r.flags&128)!==0,h||s?(h=r.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:h.render(),r.flags|=1,t!==null&&s?(r.child=to(r,t.child,null,u),r.child=to(r,null,n,u)):xr(t,r,n,u),r.memoizedState=h.state,t=r.child):t=rn(t,r,u),t}function dg(t,r,n,s){return Qo(),r.flags|=256,xr(t,r,n,s),r.child}var yd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(t){return{baseLanes:t,cachePool:Yp()}}function xd(t,r,n){return t=t!==null?t.childLanes&~n:0,r&&(t|=ni),t}function hg(t,r,n){var s=r.pendingProps,u=!1,h=(r.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(hr.current&2)!==0),M&&(u=!0,r.flags&=-129),M=(r.flags&32)!==0,r.flags&=-33,t===null){if(At){if(u?Dn(r):kn(),At){var w=Qt,B;if(B=w){e:{for(B=w,w=Ai;B.nodeType!==8;){if(!w){w=null;break e}if(B=vi(B.nextSibling),B===null){w=null;break e}}w=B}w!==null?(r.memoizedState={dehydrated:w,treeContext:ua!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},B=Wr(18,null,null,0),B.stateNode=w,B.return=r,r.child=B,Pr=r,Qt=null,B=!0):B=!1}B||fa(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return nh(w)?r.lanes=32:r.lanes=536870912,null;tn(r)}return w=s.children,s=s.fallback,u?(kn(),u=r.mode,w=Wl({mode:"hidden",children:w},u),s=ca(s,u,n,null),w.return=r,s.return=r,w.sibling=s,r.child=w,u=r.child,u.memoizedState=Sd(n),u.childLanes=xd(t,M,n),r.memoizedState=yd,s):(Dn(r),bd(r,w))}if(B=t.memoizedState,B!==null&&(w=B.dehydrated,w!==null)){if(h)r.flags&256?(Dn(r),r.flags&=-257,r=Md(t,r,n)):r.memoizedState!==null?(kn(),r.child=t.child,r.flags|=128,r=null):(kn(),u=s.fallback,w=r.mode,s=Wl({mode:"visible",children:s.children},w),u=ca(u,w,n,null),u.flags|=2,s.return=r,u.return=r,s.sibling=u,r.child=s,to(r,t.child,null,n),s=r.child,s.memoizedState=Sd(n),s.childLanes=xd(t,M,n),r.memoizedState=yd,r=u);else if(Dn(r),nh(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var ee=M.dgst;M=ee,s=Error(a(419)),s.stack="",s.digest=M,es({value:s,source:null,stack:null}),r=Md(t,r,n)}else if(vr||ts(t,r,n,!1),M=(n&t.childLanes)!==0,vr||M){if(M=Vt,M!==null&&(s=n&-n,s=(s&42)!==0?1:Ke(s),s=(s&(M.suspendedLanes|n))!==0?0:s,s!==0&&s!==B.retryLane))throw B.retryLane=s,Wa(t,s),Zr(M,t,s),ig;w.data==="$?"||Hd(),r=Md(t,r,n)}else w.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=B.treeContext,Qt=vi(w.nextSibling),Pr=r,At=!0,ha=null,Ai=!1,t!==null&&(ti[ri++]=Zi,ti[ri++]=Ji,ti[ri++]=ua,Zi=t.id,Ji=t.overflow,ua=r),r=bd(r,s.children),r.flags|=4096);return r}return u?(kn(),u=s.fallback,w=r.mode,B=t.child,ee=B.sibling,s=$i(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,ee!==null?u=$i(ee,u):(u=ca(u,w,n,null),u.flags|=2),u.return=r,s.return=r,s.sibling=u,r.child=s,s=u,u=r.child,w=t.child.memoizedState,w===null?w=Sd(n):(B=w.cachePool,B!==null?(ee=dr._currentValue,B=B.parent!==ee?{parent:ee,pool:ee}:B):B=Yp(),w={baseLanes:w.baseLanes|n,cachePool:B}),u.memoizedState=w,u.childLanes=xd(t,M,n),r.memoizedState=yd,s):(Dn(r),n=t.child,t=n.sibling,n=$i(n,{mode:"visible",children:s.children}),n.return=r,n.sibling=null,t!==null&&(M=r.deletions,M===null?(r.deletions=[t],r.flags|=16):M.push(t)),r.child=n,r.memoizedState=null,n)}function bd(t,r){return r=Wl({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Wl(t,r){return t=Wr(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Md(t,r,n){return to(r,t.child,null,n),t=bd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function fg(t,r,n){t.lanes|=r;var s=t.alternate;s!==null&&(s.lanes|=r),Hu(t.return,r,n)}function Ed(t,r,n,s,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=n,h.tailMode=u)}function pg(t,r,n){var s=r.pendingProps,u=s.revealOrder,h=s.tail;if(xr(t,r,s.children,n),s=hr.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,r);else if(t.tag===19)fg(t,n,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Se(hr,s),u){case"forwards":for(n=r.child,u=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(u=n),n=n.sibling;n=u,n===null?(u=r.child,r.child=null):(u=n.sibling,n.sibling=null),Ed(r,!1,u,n,h);break;case"backwards":for(n=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){r.child=u;break}t=u.sibling,u.sibling=n,n=u,u=t}Ed(r,!0,n,null,h);break;case"together":Ed(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rn(t,r,n){if(t!==null&&(r.dependencies=t.dependencies),Hn|=r.lanes,(n&r.childLanes)===0)if(t!==null){if(ts(t,r,n,!1),(n&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,n=$i(t,t.pendingProps),r.child=n,n.return=r;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=r;n.sibling=null}return r.child}function Td(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function sS(t,r,n){switch(r.tag){case 3:be(r,r.stateNode.containerInfo),Pn(r,dr,t.memoizedState.cache),Qo();break;case 27:case 5:Ye(r);break;case 4:be(r,r.stateNode.containerInfo);break;case 10:Pn(r,r.type,r.memoizedProps.value);break;case 13:var s=r.memoizedState;if(s!==null)return s.dehydrated!==null?(Dn(r),r.flags|=128,null):(n&r.child.childLanes)!==0?hg(t,r,n):(Dn(r),t=rn(t,r,n),t!==null?t.sibling:null);Dn(r);break;case 19:var u=(t.flags&128)!==0;if(s=(n&r.childLanes)!==0,s||(ts(t,r,n,!1),s=(n&r.childLanes)!==0),u){if(s)return pg(t,r,n);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(hr,hr.current),s)break;return null;case 22:case 23:return r.lanes=0,sg(t,r,n);case 24:Pn(r,dr,t.memoizedState.cache)}return rn(t,r,n)}function mg(t,r,n){if(t!==null)if(t.memoizedProps!==r.pendingProps)vr=!0;else{if(!Td(t,n)&&(r.flags&128)===0)return vr=!1,sS(t,r,n);vr=(t.flags&131072)!==0}else vr=!1,At&&(r.flags&1048576)!==0&&jp(r,Ml,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var s=r.elementType,u=s._init;if(s=u(s._payload),r.type=s,typeof s=="function")Uu(s)?(t=_a(s,t),r.tag=1,r=ug(null,r,s,t,n)):(r.tag=0,r=_d(null,r,s,t,n));else{if(s!=null){if(u=s.$$typeof,u===N){r.tag=11,r=ng(null,r,s,t,n);break e}else if(u===O){r.tag=14,r=ag(null,r,s,t,n);break e}}throw r=le(s)||s,Error(a(306,r,""))}}return r;case 0:return _d(t,r,r.type,r.pendingProps,n);case 1:return s=r.type,u=_a(s,r.pendingProps),ug(t,r,s,u,n);case 3:e:{if(be(r,r.stateNode.containerInfo),t===null)throw Error(a(387));s=r.pendingProps;var h=r.memoizedState;u=h.element,$u(t,r),ls(r,s,null,n);var M=r.memoizedState;if(s=M.cache,Pn(r,dr,s),s!==h.cache&&Vu(r,[dr],n,!0),ss(),s=M.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:M.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=dg(t,r,s,n);break e}else if(s!==u){u=Qr(Error(a(424)),r),es(u),r=dg(t,r,s,n);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=vi(t.firstChild),Pr=r,At=!0,ha=null,Ai=!0,n=Xm(r,null,s,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Qo(),s===u){r=rn(t,r,n);break e}xr(t,r,s,n)}r=r.child}return r;case 26:return Gl(t,r),t===null?(n=yv(r.type,null,r.pendingProps,null))?r.memoizedState=n:At||(n=r.type,t=r.pendingProps,s=nc(Q.current).createElement(n),s[ur]=r,s[gr]=t,Mr(s,n,t),ir(s),r.stateNode=s):r.memoizedState=yv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Ye(r),t===null&&At&&(s=r.stateNode=gv(r.type,r.pendingProps,Q.current),Pr=r,Ai=!0,u=Qt,jn(r.type)?(ah=u,Qt=vi(s.firstChild)):Qt=u),xr(t,r,r.pendingProps.children,n),Gl(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&At&&((u=s=Qt)&&(s=DS(s,r.type,r.pendingProps,Ai),s!==null?(r.stateNode=s,Pr=r,Qt=vi(s.firstChild),Ai=!1,u=!0):u=!1),u||fa(r)),Ye(r),u=r.type,h=r.pendingProps,M=t!==null?t.memoizedProps:null,s=h.children,th(u,h)?s=null:M!==null&&th(u,M)&&(r.flags|=32),r.memoizedState!==null&&(u=ed(t,r,Qy,null,null,n),Ps._currentValue=u),Gl(t,r),xr(t,r,s,n),r.child;case 6:return t===null&&At&&((t=n=Qt)&&(n=kS(n,r.pendingProps,Ai),n!==null?(r.stateNode=n,Pr=r,Qt=null,t=!0):t=!1),t||fa(r)),null;case 13:return hg(t,r,n);case 4:return be(r,r.stateNode.containerInfo),s=r.pendingProps,t===null?r.child=to(r,null,s,n):xr(t,r,s,n),r.child;case 11:return ng(t,r,r.type,r.pendingProps,n);case 7:return xr(t,r,r.pendingProps,n),r.child;case 8:return xr(t,r,r.pendingProps.children,n),r.child;case 12:return xr(t,r,r.pendingProps.children,n),r.child;case 10:return s=r.pendingProps,Pn(r,r.type,s.value),xr(t,r,s.children,n),r.child;case 9:return u=r.type._context,s=r.pendingProps.children,ma(r),u=Tr(u),s=s(u),r.flags|=1,xr(t,r,s,n),r.child;case 14:return ag(t,r,r.type,r.pendingProps,n);case 15:return og(t,r,r.type,r.pendingProps,n);case 19:return pg(t,r,n);case 31:return s=r.pendingProps,n=r.mode,s={mode:s.mode,children:s.children},t===null?(n=Wl(s,n),n.ref=r.ref,r.child=n,n.return=r,r=n):(n=$i(t.child,s),n.ref=r.ref,r.child=n,n.return=r,r=n),r;case 22:return sg(t,r,n);case 24:return ma(r),s=Tr(dr),t===null?(u=ju(),u===null&&(u=Vt,h=Gu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=n),u=h),r.memoizedState={parent:s,cache:u},Xu(r),Pn(r,dr,u)):((t.lanes&n)!==0&&($u(t,r),ls(r,null,null,n),ss()),u=t.memoizedState,h=r.memoizedState,u.parent!==s?(u={parent:s,cache:s},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),Pn(r,dr,s)):(s=h.cache,Pn(r,dr,s),s!==u.cache&&Vu(r,[dr],n,!0))),xr(t,r,r.pendingProps.children,n),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function nn(t){t.flags|=4}function gg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(r)){if(r=ii.current,r!==null&&((_t&4194048)===_t?en!==null:(_t&62914560)!==_t&&(_t&536870912)===0||r!==en))throw as=qu,Qp;t.flags|=8192}}function jl(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Pe():536870912,t.lanes|=r,ao|=r)}function ms(t,r){if(!At)switch(t.tailMode){case"hidden":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,n=0,s=0;if(r)for(var u=t.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=n,r}function lS(t,r,n){var s=r.pendingProps;switch(Ou(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return Jt(r),null;case 3:return n=r.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Yi(dr),et(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Yo(r)?nn(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,$p())),Jt(r),null;case 26:return n=r.memoizedState,t===null?(nn(r),n!==null?(Jt(r),gg(r,n)):(Jt(r),r.flags&=-16777217)):n?n!==t.memoizedState?(nn(r),Jt(r),gg(r,n)):(Jt(r),r.flags&=-16777217):(t.memoizedProps!==s&&nn(r),Jt(r),r.flags&=-16777217),null;case 27:Be(r),n=Q.current;var u=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==s&&nn(r);else{if(!s){if(r.stateNode===null)throw Error(a(166));return Jt(r),null}t=Ne.current,Yo(r)?qp(r):(t=gv(u,s,n),r.stateNode=t,nn(r))}return Jt(r),null;case 5:if(Be(r),n=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==s&&nn(r);else{if(!s){if(r.stateNode===null)throw Error(a(166));return Jt(r),null}if(t=Ne.current,Yo(r))qp(r);else{switch(u=nc(Q.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(n,{is:s.is}):u.createElement(n)}}t[ur]=r,t[gr]=s;e:for(u=r.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break e;for(;u.sibling===null;){if(u.return===null||u.return===r)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r.stateNode=t;e:switch(Mr(t,n,s),n){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&nn(r)}}return Jt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==s&&nn(r);else{if(typeof s!="string"&&r.stateNode===null)throw Error(a(166));if(t=Q.current,Yo(r)){if(t=r.stateNode,n=r.memoizedProps,s=null,u=Pr,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[ur]=r,t=!!(t.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||cv(t.nodeValue,n)),t||fa(r)}else t=nc(t).createTextNode(s),t[ur]=r,r.stateNode=t}return Jt(r),null;case 13:if(s=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yo(r),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ur]=r}else Qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),u=!1}else u=$p(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return r.flags&256?(tn(r),r):(tn(r),null)}if(tn(r),(r.flags&128)!==0)return r.lanes=n,r;if(n=s!==null,t=t!==null&&t.memoizedState!==null,n){s=r.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return n!==t&&n&&(r.child.flags|=8192),jl(r,r.updateQueue),Jt(r),null;case 4:return et(),t===null&&Jd(r.stateNode.containerInfo),Jt(r),null;case 10:return Yi(r.type),Jt(r),null;case 19:if(ge(hr),u=r.memoizedState,u===null)return Jt(r),null;if(s=(r.flags&128)!==0,h=u.rendering,h===null)if(s)ms(u,!1);else{if(er!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(h=zl(t),h!==null){for(r.flags|=128,ms(u,!1),t=h.updateQueue,r.updateQueue=t,jl(r,t),r.subtreeFlags=0,t=n,n=r.child;n!==null;)Wp(n,t),n=n.sibling;return Se(hr,hr.current&1|2),r.child}t=t.sibling}u.tail!==null&&Ut()>$l&&(r.flags|=128,s=!0,ms(u,!1),r.lanes=4194304)}else{if(!s)if(t=zl(h),t!==null){if(r.flags|=128,s=!0,t=t.updateQueue,r.updateQueue=t,jl(r,t),ms(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!At)return Jt(r),null}else 2*Ut()-u.renderingStartTime>$l&&n!==536870912&&(r.flags|=128,s=!0,ms(u,!1),r.lanes=4194304);u.isBackwards?(h.sibling=r.child,r.child=h):(t=u.last,t!==null?t.sibling=h:r.child=h,u.last=h)}return u.tail!==null?(r=u.tail,u.rendering=r,u.tail=r.sibling,u.renderingStartTime=Ut(),r.sibling=null,t=hr.current,Se(hr,s?t&1|2:t&1),r):(Jt(r),null);case 22:case 23:return tn(r),Yu(),s=r.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(r.flags|=8192):s&&(r.flags|=8192),s?(n&536870912)!==0&&(r.flags&128)===0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),n=r.updateQueue,n!==null&&jl(r,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==n&&(r.flags|=2048),t!==null&&ge(ga),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),r.memoizedState.cache!==n&&(r.flags|=2048),Yi(dr),Jt(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function cS(t,r){switch(Ou(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Yi(dr),et(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Be(r),null;case 13:if(tn(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Qo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ge(hr),null;case 4:return et(),null;case 10:return Yi(r.type),null;case 22:case 23:return tn(r),Yu(),t!==null&&ge(ga),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Yi(dr),null;case 25:return null;default:return null}}function vg(t,r){switch(Ou(r),r.tag){case 3:Yi(dr),et();break;case 26:case 27:case 5:Be(r);break;case 4:et();break;case 13:tn(r);break;case 19:ge(hr);break;case 10:Yi(r.type);break;case 22:case 23:tn(r),Yu(),t!==null&&ge(ga);break;case 24:Yi(dr)}}function gs(t,r){try{var n=r.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var u=s.next;n=u;do{if((n.tag&t)===t){s=void 0;var h=n.create,M=n.inst;s=h(),M.destroy=s}n=n.next}while(n!==u)}}catch(w){Ht(r,r.return,w)}}function Fn(t,r,n){try{var s=r.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var M=s.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=r;var B=n,ee=w;try{ee()}catch(ve){Ht(u,B,ve)}}}s=s.next}while(s!==h)}}catch(ve){Ht(r,r.return,ve)}}function _g(t){var r=t.updateQueue;if(r!==null){var n=t.stateNode;try{am(r,n)}catch(s){Ht(t,t.return,s)}}}function yg(t,r,n){n.props=_a(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(s){Ht(t,r,s)}}function vs(t,r){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof n=="function"?t.refCleanup=n(s):n.current=s}}catch(u){Ht(t,r,u)}}function Ci(t,r){var n=t.ref,s=t.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(u){Ht(t,r,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Ht(t,r,u)}else n.current=null}function Sg(t){var r=t.type,n=t.memoizedProps,s=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(u){Ht(t,t.return,u)}}function wd(t,r,n){try{var s=t.stateNode;PS(s,t.type,n,r),s[gr]=r}catch(u){Ht(t,t.return,u)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jn(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jn(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,r,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,r?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,r):(r=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.appendChild(t),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=ic));else if(s!==4&&(s===27&&jn(t.type)&&(n=t.stateNode,r=null),t=t.child,t!==null))for(Cd(t,r,n),t=t.sibling;t!==null;)Cd(t,r,n),t=t.sibling}function ql(t,r,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(s!==4&&(s===27&&jn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ql(t,r,n),t=t.sibling;t!==null;)ql(t,r,n),t=t.sibling}function bg(t){var r=t.stateNode,n=t.memoizedProps;try{for(var s=t.type,u=r.attributes;u.length;)r.removeAttributeNode(u[0]);Mr(r,s,n),r[ur]=t,r[gr]=n}catch(h){Ht(t,t.return,h)}}var an=!1,ar=!1,Rd=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,_r=null;function uS(t,r){if(t=t.containerInfo,Qd=uc,t=Up(t),Au(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var M=0,w=-1,B=-1,ee=0,ve=0,xe=t,ne=null;t:for(;;){for(var ae;xe!==n||u!==0&&xe.nodeType!==3||(w=M+u),xe!==h||s!==0&&xe.nodeType!==3||(B=M+s),xe.nodeType===3&&(M+=xe.nodeValue.length),(ae=xe.firstChild)!==null;)ne=xe,xe=ae;for(;;){if(xe===t)break t;if(ne===n&&++ee===u&&(w=M),ne===h&&++ve===s&&(B=M),(ae=xe.nextSibling)!==null)break;xe=ne,ne=xe.parentNode}xe=ae}n=w===-1||B===-1?null:{start:w,end:B}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},uc=!1,_r=r;_r!==null;)if(r=_r,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,_r=t;else for(;_r!==null;){switch(r=_r,h=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,n=r,u=h.memoizedProps,h=h.memoizedState,s=n.stateNode;try{var it=_a(n.type,u,n.elementType===n.type);t=s.getSnapshotBeforeUpdate(it,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(n,n.return,tt)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,n=t.nodeType,n===9)ih(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ih(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,_r=t;break}_r=r.return}}function Eg(t,r,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:On(t,n),s&4&&gs(5,n);break;case 1:if(On(t,n),s&4)if(t=n.stateNode,r===null)try{t.componentDidMount()}catch(M){Ht(n,n.return,M)}else{var u=_a(n.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(u,r,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(n,n.return,M)}}s&64&&_g(n),s&512&&vs(n,n.return);break;case 3:if(On(t,n),s&64&&(t=n.updateQueue,t!==null)){if(r=null,n.child!==null)switch(n.child.tag){case 27:case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}try{am(t,r)}catch(M){Ht(n,n.return,M)}}break;case 27:r===null&&s&4&&bg(n);case 26:case 5:On(t,n),r===null&&s&4&&Sg(n),s&512&&vs(n,n.return);break;case 12:On(t,n);break;case 13:On(t,n),s&4&&Ag(t,n),s&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=yS.bind(null,n),FS(t,n))));break;case 22:if(s=n.memoizedState!==null||an,!s){r=r!==null&&r.memoizedState!==null||ar,u=an;var h=ar;an=s,(ar=r)&&!h?Bn(t,n,(n.subtreeFlags&8772)!==0):On(t,n),an=u,ar=h}break;case 30:break;default:On(t,n)}}function Tg(t){var r=t.alternate;r!==null&&(t.alternate=null,Tg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Fa(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Br=!1;function on(t,r,n){for(n=n.child;n!==null;)wg(t,r,n),n=n.sibling}function wg(t,r,n){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(me,n)}catch{}switch(n.tag){case 26:ar||Ci(n,r),on(t,r,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ar||Ci(n,r);var s=jt,u=Br;jn(n.type)&&(jt=n.stateNode,Br=!1),on(t,r,n),ws(n.stateNode),jt=s,Br=u;break;case 5:ar||Ci(n,r);case 6:if(s=jt,u=Br,jt=null,on(t,r,n),jt=s,Br=u,jt!==null)if(Br)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(h){Ht(n,r,h)}else try{jt.removeChild(n.stateNode)}catch(h){Ht(n,r,h)}break;case 18:jt!==null&&(Br?(t=jt,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Us(t)):pv(jt,n.stateNode));break;case 4:s=jt,u=Br,jt=n.stateNode.containerInfo,Br=!0,on(t,r,n),jt=s,Br=u;break;case 0:case 11:case 14:case 15:ar||Fn(2,n,r),ar||Fn(4,n,r),on(t,r,n);break;case 1:ar||(Ci(n,r),s=n.stateNode,typeof s.componentWillUnmount=="function"&&yg(n,r,s)),on(t,r,n);break;case 21:on(t,r,n);break;case 22:ar=(s=ar)||n.memoizedState!==null,on(t,r,n),ar=s;break;default:on(t,r,n)}}function Ag(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Us(t)}catch(n){Ht(r,r.return,n)}}function dS(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Mg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Mg),r;default:throw Error(a(435,t.tag))}}function Pd(t,r){var n=dS(t);r.forEach(function(s){var u=SS.bind(null,t,s);n.has(s)||(n.add(s),s.then(u,u))})}function jr(t,r){var n=r.deletions;if(n!==null)for(var s=0;s<n.length;s++){var u=n[s],h=t,M=r,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(jn(w.type)){jt=w.stateNode,Br=!1;break e}break;case 5:jt=w.stateNode,Br=!1;break e;case 3:case 4:jt=w.stateNode.containerInfo,Br=!0;break e}w=w.return}if(jt===null)throw Error(a(160));wg(h,M,u),jt=null,Br=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Cg(r,t),r=r.sibling}var gi=null;function Cg(t,r){var n=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jr(r,t),qr(t),s&4&&(Fn(3,t,t.return),gs(3,t),Fn(5,t,t.return));break;case 1:jr(r,t),qr(t),s&512&&(ar||n===null||Ci(n,n.return)),s&64&&an&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var u=gi;if(jr(r,t),qr(t),s&512&&(ar||n===null||Ci(n,n.return)),s&4){var h=n!==null?n.memoizedState:null;if(s=t.memoizedState,n===null)if(s===null)if(t.stateNode===null){e:{s=t.type,n=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[wn]||h[ur]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),Mr(h,s,n),h[ur]=t,ir(h),s=h;break e;case"link":var M=bv("link","href",u).get(s+(n.href||""));if(M){for(var w=0;w<M.length;w++)if(h=M[w],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){M.splice(w,1);break t}}h=u.createElement(s),Mr(h,s,n),u.head.appendChild(h);break;case"meta":if(M=bv("meta","content",u).get(s+(n.content||""))){for(w=0;w<M.length;w++)if(h=M[w],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){M.splice(w,1);break t}}h=u.createElement(s),Mr(h,s,n),u.head.appendChild(h);break;default:throw Error(a(468,s))}h[ur]=t,ir(h),s=h}t.stateNode=s}else Mv(u,t.type,t.stateNode);else t.stateNode=xv(u,s,t.memoizedProps);else h!==s?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,s===null?Mv(u,t.type,t.stateNode):xv(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&wd(t,t.memoizedProps,n.memoizedProps)}break;case 27:jr(r,t),qr(t),s&512&&(ar||n===null||Ci(n,n.return)),n!==null&&s&4&&wd(t,t.memoizedProps,n.memoizedProps);break;case 5:if(jr(r,t),qr(t),s&512&&(ar||n===null||Ci(n,n.return)),t.flags&32){u=t.stateNode;try{Wt(u,"")}catch(ae){Ht(t,t.return,ae)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,wd(t,u,n!==null?n.memoizedProps:u)),s&1024&&(Rd=!0);break;case 6:if(jr(r,t),qr(t),s&4){if(t.stateNode===null)throw Error(a(162));s=t.memoizedProps,n=t.stateNode;try{n.nodeValue=s}catch(ae){Ht(t,t.return,ae)}}break;case 3:if(sc=null,u=gi,gi=ac(r.containerInfo),jr(r,t),gi=u,qr(t),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(r.containerInfo)}catch(ae){Ht(t,t.return,ae)}Rd&&(Rd=!1,Rg(t));break;case 4:s=gi,gi=ac(t.stateNode.containerInfo),jr(r,t),qr(t),gi=s;break;case 12:jr(r,t),qr(t);break;case 13:jr(r,t),qr(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(kd=Ut()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pd(t,s)));break;case 22:u=t.memoizedState!==null;var B=n!==null&&n.memoizedState!==null,ee=an,ve=ar;if(an=ee||u,ar=ve||B,jr(r,t),ar=ve,an=ee,qr(t),s&8192)e:for(r=t.stateNode,r._visibility=u?r._visibility&-2:r._visibility|1,u&&(n===null||B||an||ar||ya(t)),n=null,r=t;;){if(r.tag===5||r.tag===26){if(n===null){B=n=r;try{if(h=B.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=B.stateNode;var xe=B.memoizedProps.style,ne=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;w.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ae){Ht(B,B.return,ae)}}}else if(r.tag===6){if(n===null){B=r;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ae){Ht(B,B.return,ae)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}s&4&&(s=t.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Pd(t,n))));break;case 19:jr(r,t),qr(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pd(t,s)));break;case 30:break;case 21:break;default:jr(r,t),qr(t)}}function qr(t){var r=t.flags;if(r&2){try{for(var n,s=t.return;s!==null;){if(xg(s)){n=s;break}s=s.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var u=n.stateNode,h=Ad(t);ql(t,h,u);break;case 5:var M=n.stateNode;n.flags&32&&(Wt(M,""),n.flags&=-33);var w=Ad(t);ql(t,w,M);break;case 3:case 4:var B=n.stateNode.containerInfo,ee=Ad(t);Cd(t,ee,B);break;default:throw Error(a(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Rg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function On(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Eg(t,r.alternate,r),r=r.sibling}function ya(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Fn(4,r,r.return),ya(r);break;case 1:Ci(r,r.return);var n=r.stateNode;typeof n.componentWillUnmount=="function"&&yg(r,r.return,n),ya(r);break;case 27:ws(r.stateNode);case 26:case 5:Ci(r,r.return),ya(r);break;case 22:r.memoizedState===null&&ya(r);break;case 30:ya(r);break;default:ya(r)}t=t.sibling}}function Bn(t,r,n){for(n=n&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var s=r.alternate,u=t,h=r,M=h.flags;switch(h.tag){case 0:case 11:case 15:Bn(u,h,n),gs(4,h);break;case 1:if(Bn(u,h,n),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ht(s,s.return,ee)}if(s=h,u=s.updateQueue,u!==null){var w=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)nm(B[u],w)}catch(ee){Ht(s,s.return,ee)}}n&&M&64&&_g(h),vs(h,h.return);break;case 27:bg(h);case 26:case 5:Bn(u,h,n),n&&s===null&&M&4&&Sg(h),vs(h,h.return);break;case 12:Bn(u,h,n);break;case 13:Bn(u,h,n),n&&M&4&&Ag(u,h);break;case 22:h.memoizedState===null&&Bn(u,h,n),vs(h,h.return);break;case 30:break;default:Bn(u,h,n)}r=r.sibling}}function Nd(t,r){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&rs(n))}function Ld(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&rs(t))}function Ri(t,r,n,s){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pg(t,r,n,s),r=r.sibling}function Pg(t,r,n,s){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ri(t,r,n,s),u&2048&&gs(9,r);break;case 1:Ri(t,r,n,s);break;case 3:Ri(t,r,n,s),u&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&rs(t)));break;case 12:if(u&2048){Ri(t,r,n,s),t=r.stateNode;try{var h=r.memoizedProps,M=h.id,w=h.onPostCommit;typeof w=="function"&&w(M,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(r,r.return,B)}}else Ri(t,r,n,s);break;case 13:Ri(t,r,n,s);break;case 23:break;case 22:h=r.stateNode,M=r.alternate,r.memoizedState!==null?h._visibility&2?Ri(t,r,n,s):_s(t,r):h._visibility&2?Ri(t,r,n,s):(h._visibility|=2,ro(t,r,n,s,(r.subtreeFlags&10256)!==0)),u&2048&&Nd(M,r);break;case 24:Ri(t,r,n,s),u&2048&&Ld(r.alternate,r);break;default:Ri(t,r,n,s)}}function ro(t,r,n,s,u){for(u=u&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var h=t,M=r,w=n,B=s,ee=M.flags;switch(M.tag){case 0:case 11:case 15:ro(h,M,w,B,u),gs(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?ro(h,M,w,B,u):_s(h,M):(ve._visibility|=2,ro(h,M,w,B,u)),u&&ee&2048&&Nd(M.alternate,M);break;case 24:ro(h,M,w,B,u),u&&ee&2048&&Ld(M.alternate,M);break;default:ro(h,M,w,B,u)}r=r.sibling}}function _s(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var n=t,s=r,u=s.flags;switch(s.tag){case 22:_s(n,s),u&2048&&Nd(s.alternate,s);break;case 24:_s(n,s),u&2048&&Ld(s.alternate,s);break;default:_s(n,s)}r=r.sibling}}var ys=8192;function io(t){if(t.subtreeFlags&ys)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 26:io(t),t.flags&ys&&t.memoizedState!==null&&JS(gi,t.memoizedState,t.memoizedProps);break;case 5:io(t);break;case 3:case 4:var r=gi;gi=ac(t.stateNode.containerInfo),io(t),gi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ys,ys=16777216,io(t),ys=r):io(t));break;default:io(t)}}function Lg(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Ss(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];_r=s,Ug(s,t)}Lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:Ss(t),t.flags&2048&&Fn(9,t,t.return);break;case 3:Ss(t);break;case 12:Ss(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,Xl(t)):Ss(t);break;default:Ss(t)}}function Xl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];_r=s,Ug(s,t)}Lg(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Fn(8,r,r.return),Xl(r);break;case 22:n=r.stateNode,n._visibility&2&&(n._visibility&=-3,Xl(r));break;default:Xl(r)}t=t.sibling}}function Ug(t,r){for(;_r!==null;){var n=_r;switch(n.tag){case 0:case 11:case 15:Fn(8,n,r);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rs(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,_r=s;else e:for(n=t;_r!==null;){s=_r;var u=s.sibling,h=s.return;if(Tg(s),s===n){_r=null;break e}if(u!==null){u.return=h,_r=u;break e}_r=h}}}var hS={getCacheForType:function(t){var r=Tr(dr),n=r.data.get(t);return n===void 0&&(n=t(),r.data.set(t,n)),n}},fS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Vt=null,pt=null,_t=0,Lt=0,Xr=null,zn=!1,no=!1,Id=!1,sn=0,er=0,Hn=0,Sa=0,Ud=0,ni=0,ao=0,xs=null,zr=null,Dd=!1,kd=0,$l=1/0,Zl=null,Vn=null,br=0,Gn=null,oo=null,so=0,Fd=0,Od=null,Dg=null,bs=0,Bd=null;function $r(){if((Nt&2)!==0&&_t!==0)return _t&-_t;if(U.T!==null){var t=$a;return t!==0?t:qd()}return xt()}function kg(){ni===0&&(ni=(_t&536870912)===0||At?j():536870912);var t=ii.current;return t!==null&&(t.flags|=32),ni}function Zr(t,r,n){(t===Vt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Wn(t,_t,ni,!1)),Fe(t,n),((Nt&2)===0||t!==Vt)&&(t===Vt&&((Nt&2)===0&&(Sa|=n),er===4&&Wn(t,_t,ni,!1)),Pi(t))}function Fg(t,r,n){if((Nt&6)!==0)throw Error(a(327));var s=!n&&(r&124)===0&&(r&t.expiredLanes)===0||Ue(t,r),u=s?gS(t,r):Vd(t,r,!0),h=s;do{if(u===0){no&&!s&&Wn(t,r,0,!1);break}else{if(n=t.current.alternate,h&&!pS(n)){u=Vd(t,r,!1),h=!1;continue}if(u===2){if(h=r,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){r=M;e:{var w=t;u=xs;var B=w.current.memoizedState.isDehydrated;if(B&&(lo(w,M).flags|=256),M=Vd(w,M,!1),M!==2){if(Id&&!B){w.errorRecoveryDisabledLanes|=h,Sa|=h,u=4;break e}h=zr,zr=u,h!==null&&(zr===null?zr=h:zr.push.apply(zr,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){lo(t,0),Wn(t,r,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Wn(s,r,ni,!zn);break e;case 2:zr=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(u=kd+300-Ut(),10<u)){if(Wn(s,r,ni,!zn),ze(s,0,!0)!==0)break e;s.timeoutHandle=hv(Og.bind(null,s,n,zr,Zl,Dd,r,ni,Sa,ao,zn,h,2,-0,0),u);break e}Og(s,n,zr,Zl,Dd,r,ni,Sa,ao,zn,h,0,-0,0)}}break}while(!0);Pi(t)}function Og(t,r,n,s,u,h,M,w,B,ee,ve,xe,ne,ae){if(t.timeoutHandle=-1,xe=r.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Rs={stylesheets:null,count:0,unsuspend:ZS},Ng(r),xe=KS(),xe!==null)){t.cancelPendingCommit=xe(jg.bind(null,t,r,h,n,s,u,M,w,B,ve,1,ne,ae)),Wn(t,h,M,!ee);return}jg(t,r,h,n,s,u,M,w,B)}function pS(t){for(var r=t;;){var n=r.tag;if((n===0||n===11||n===15)&&r.flags&16384&&(n=r.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var u=n[s],h=u.getSnapshot;u=u.value;try{if(!Gr(h(),u))return!1}catch{return!1}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(t,r,n,s){r&=~Ud,r&=~Sa,t.suspendedLanes|=r,t.pingedLanes&=~r,s&&(t.warmLanes|=r),s=t.expirationTimes;for(var u=r;0<u;){var h=31-De(u),M=1<<h;s[h]=-1,u&=~M}n!==0&&he(t,n,r)}function Jl(){return(Nt&6)===0?(Ms(0),!1):!0}function zd(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,Ki=pa=null,id(t),eo=null,fs=0,t=pt;for(;t!==null;)vg(t.alternate,t),t=t.return;pt=null}}function lo(t,r){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,LS(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),zd(),Vt=t,pt=n=$i(t.current,null),_t=r,Lt=0,Xr=null,zn=!1,no=Ue(t,r),Id=!1,ao=ni=Ud=Sa=Hn=er=0,zr=xs=null,Dd=!1,(r&8)!==0&&(r|=r&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=r;0<s;){var u=31-De(s),h=1<<u;r|=t[u],s&=~h}return sn=r,_l(),n}function Bg(t,r){ht=null,U.H=Fl,r===ns||r===Al?(r=rm(),Lt=3):r===Qp?(r=rm(),Lt=4):Lt=r===ig?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Xr=r,pt===null&&(er=1,Vl(t,Qr(r,t.current)))}function zg(){var t=U.H;return U.H=Fl,t===null?Fl:t}function Hg(){var t=U.A;return U.A=hS,t}function Hd(){er=4,zn||(_t&4194048)!==_t&&ii.current!==null||(no=!0),(Hn&134217727)===0&&(Sa&134217727)===0||Vt===null||Wn(Vt,_t,ni,!1)}function Vd(t,r,n){var s=Nt;Nt|=2;var u=zg(),h=Hg();(Vt!==t||_t!==r)&&(Zl=null,lo(t,r)),r=!1;var M=er;e:do try{if(Lt!==0&&pt!==null){var w=pt,B=Xr;switch(Lt){case 8:zd(),M=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(r=!0);var ee=Lt;if(Lt=0,Xr=null,co(t,w,B,ee),n&&no){M=0;break e}break;default:ee=Lt,Lt=0,Xr=null,co(t,w,B,ee)}}mS(),M=er;break}catch(ve){Bg(t,ve)}while(!0);return r&&t.shellSuspendCounter++,Ki=pa=null,Nt=s,U.H=u,U.A=h,pt===null&&(Vt=null,_t=0,_l()),M}function mS(){for(;pt!==null;)Vg(pt)}function gS(t,r){var n=Nt;Nt|=2;var s=zg(),u=Hg();Vt!==t||_t!==r?(Zl=null,$l=Ut()+500,lo(t,r)):no=Ue(t,r);e:do try{if(Lt!==0&&pt!==null){r=pt;var h=Xr;t:switch(Lt){case 1:Lt=0,Xr=null,co(t,r,h,1);break;case 2:case 9:if(em(h)){Lt=0,Xr=null,Gg(r);break}r=function(){Lt!==2&&Lt!==9||Vt!==t||(Lt=7),Pi(t)},h.then(r,r);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:em(h)?(Lt=0,Xr=null,Gg(r)):(Lt=0,Xr=null,co(t,r,h,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var w=pt;if(!M||Ev(M)){Lt=0,Xr=null;var B=w.sibling;if(B!==null)pt=B;else{var ee=w.return;ee!==null?(pt=ee,Kl(ee)):pt=null}break t}}Lt=0,Xr=null,co(t,r,h,5);break;case 6:Lt=0,Xr=null,co(t,r,h,6);break;case 8:zd(),er=6;break e;default:throw Error(a(462))}}vS();break}catch(ve){Bg(t,ve)}while(!0);return Ki=pa=null,U.H=s,U.A=u,Nt=n,pt!==null?0:(Vt=null,_t=0,_l(),er)}function vS(){for(;pt!==null&&!rr();)Vg(pt)}function Vg(t){var r=mg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,r===null?Kl(t):pt=r}function Gg(t){var r=t,n=r.alternate;switch(r.tag){case 15:case 0:r=cg(n,r,r.pendingProps,r.type,void 0,_t);break;case 11:r=cg(n,r,r.pendingProps,r.type.render,r.ref,_t);break;case 5:id(r);default:vg(n,r),r=pt=Wp(r,sn),r=mg(n,r,sn)}t.memoizedProps=t.pendingProps,r===null?Kl(t):pt=r}function co(t,r,n,s){Ki=pa=null,id(r),eo=null,fs=0;var u=r.return;try{if(oS(t,u,r,n,_t)){er=1,Vl(t,Qr(n,t.current)),pt=null;return}}catch(h){if(u!==null)throw pt=u,h;er=1,Vl(t,Qr(n,t.current)),pt=null;return}r.flags&32768?(At||s===1?t=!0:no||(_t&536870912)!==0?t=!1:(zn=t=!0,(s===2||s===9||s===3||s===6)&&(s=ii.current,s!==null&&s.tag===13&&(s.flags|=16384))),Wg(r,t)):Kl(r)}function Kl(t){var r=t;do{if((r.flags&32768)!==0){Wg(r,zn);return}t=r.return;var n=lS(r.alternate,r,sn);if(n!==null){pt=n;return}if(r=r.sibling,r!==null){pt=r;return}pt=r=t}while(r!==null);er===0&&(er=5)}function Wg(t,r){do{var n=cS(t.alternate,t);if(n!==null){n.flags&=32767,pt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!r&&(t=t.sibling,t!==null)){pt=t;return}pt=t=n}while(t!==null);er=6,pt=null}function jg(t,r,n,s,u,h,M,w,B){t.cancelPendingCommit=null;do Yl();while(br!==0);if((Nt&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(h=r.lanes|r.childLanes,h|=Lu,Te(t,n,h,M,w,B),t===Vt&&(pt=Vt=null,_t=0),oo=r,Gn=t,so=n,Fd=h,Od=u,Dg=s,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xS(wt,function(){return Jg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,u=H.p,H.p=2,M=Nt,Nt|=4;try{uS(t,r,n)}finally{Nt=M,H.p=u,U.T=s}}br=1,qg(),Xg(),$g()}}function qg(){if(br===1){br=0;var t=Gn,r=oo,n=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var s=H.p;H.p=2;var u=Nt;Nt|=4;try{Cg(r,t);var h=eh,M=Up(t.containerInfo),w=h.focusedElem,B=h.selectionRange;if(M!==w&&w&&w.ownerDocument&&Ip(w.ownerDocument.documentElement,w)){if(B!==null&&Au(w)){var ee=B.start,ve=B.end;if(ve===void 0&&(ve=ee),"selectionStart"in w)w.selectionStart=ee,w.selectionEnd=Math.min(ve,w.value.length);else{var xe=w.ownerDocument||document,ne=xe&&xe.defaultView||window;if(ne.getSelection){var ae=ne.getSelection(),it=w.textContent.length,tt=Math.min(B.start,it),Ot=B.end===void 0?tt:Math.min(B.end,it);!ae.extend&&tt>Ot&&(M=Ot,Ot=tt,tt=M);var $=Lp(w,tt),W=Lp(w,Ot);if($&&W&&(ae.rangeCount!==1||ae.anchorNode!==$.node||ae.anchorOffset!==$.offset||ae.focusNode!==W.node||ae.focusOffset!==W.offset)){var Y=xe.createRange();Y.setStart($.node,$.offset),ae.removeAllRanges(),tt>Ot?(ae.addRange(Y),ae.extend(W.node,W.offset)):(Y.setEnd(W.node,W.offset),ae.addRange(Y))}}}}for(xe=[],ae=w;ae=ae.parentNode;)ae.nodeType===1&&xe.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xe.length;w++){var ye=xe[w];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}uc=!!Qd,eh=Qd=null}finally{Nt=u,H.p=s,U.T=n}}t.current=r,br=2}}function Xg(){if(br===2){br=0;var t=Gn,r=oo,n=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var s=H.p;H.p=2;var u=Nt;Nt|=4;try{Eg(t,r.alternate,r)}finally{Nt=u,H.p=s,U.T=n}}br=3}}function $g(){if(br===4||br===3){br=0,Yt();var t=Gn,r=oo,n=so,s=Dg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?br=5:(br=0,oo=Gn=null,Zg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Vn=null),Xt(n),r=r.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(me,r,void 0,(r.current.flags&128)===128)}catch{}if(s!==null){r=U.T,u=H.p,H.p=2,U.T=null;try{for(var h=t.onRecoverableError,M=0;M<s.length;M++){var w=s[M];h(w.value,{componentStack:w.stack})}}finally{U.T=r,H.p=u}}(so&3)!==0&&Yl(),Pi(t),u=t.pendingLanes,(n&4194090)!==0&&(u&42)!==0?t===Bd?bs++:(bs=0,Bd=t):bs=0,Ms(0)}}function Zg(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,rs(r)))}function Yl(t){return qg(),Xg(),$g(),Jg()}function Jg(){if(br!==5)return!1;var t=Gn,r=Fd;Fd=0;var n=Xt(so),s=U.T,u=H.p;try{H.p=32>n?32:n,U.T=null,n=Od,Od=null;var h=Gn,M=so;if(br=0,oo=Gn=null,so=0,(Nt&6)!==0)throw Error(a(331));var w=Nt;if(Nt|=4,Ig(h.current),Pg(h,h.current,M,n),Nt=w,Ms(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(me,h)}catch{}return!0}finally{H.p=u,U.T=s,Zg(t,r)}}function Kg(t,r,n){r=Qr(n,r),r=vd(t.stateNode,r,2),t=In(t,r,2),t!==null&&(Fe(t,2),Pi(t))}function Ht(t,r,n){if(t.tag===3)Kg(t,t,n);else for(;r!==null;){if(r.tag===3){Kg(r,t,n);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Vn===null||!Vn.has(s))){t=Qr(n,t),n=tg(2),s=In(r,n,2),s!==null&&(rg(n,s,r,t),Fe(s,2),Pi(s));break}}r=r.return}}function Gd(t,r,n){var s=t.pingCache;if(s===null){s=t.pingCache=new fS;var u=new Set;s.set(r,u)}else u=s.get(r),u===void 0&&(u=new Set,s.set(r,u));u.has(n)||(Id=!0,u.add(n),t=_S.bind(null,t,r,n),r.then(t,t))}function _S(t,r,n){var s=t.pingCache;s!==null&&s.delete(r),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Vt===t&&(_t&n)===n&&(er===4||er===3&&(_t&62914560)===_t&&300>Ut()-kd?(Nt&2)===0&&lo(t,0):Ud|=n,ao===_t&&(ao=0)),Pi(t)}function Yg(t,r){r===0&&(r=Pe()),t=Wa(t,r),t!==null&&(Fe(t,r),Pi(t))}function yS(t){var r=t.memoizedState,n=0;r!==null&&(n=r.retryLane),Yg(t,n)}function SS(t,r){var n=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(n=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(a(314))}s!==null&&s.delete(r),Yg(t,n)}function xS(t,r){return Tt(t,r)}var Ql=null,uo=null,Wd=!1,ec=!1,jd=!1,xa=0;function Pi(t){t!==uo&&t.next===null&&(uo===null?Ql=uo=t:uo=uo.next=t),ec=!0,Wd||(Wd=!0,MS())}function Ms(t,r){if(!jd&&ec){jd=!0;do for(var n=!1,s=Ql;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var M=s.suspendedLanes,w=s.pingedLanes;h=(1<<31-De(42|t)+1)-1,h&=u&~(M&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,rv(s,h))}else h=_t,h=ze(s,s===Vt?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Ue(s,h)||(n=!0,rv(s,h));s=s.next}while(n);jd=!1}}function bS(){Qg()}function Qg(){ec=Wd=!1;var t=0;xa!==0&&(NS()&&(t=xa),xa=0);for(var r=Ut(),n=null,s=Ql;s!==null;){var u=s.next,h=ev(s,r);h===0?(s.next=null,n===null?Ql=u:n.next=u,u===null&&(uo=n)):(n=s,(t!==0||(h&3)!==0)&&(ec=!0)),s=u}Ms(t)}function ev(t,r){for(var n=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-De(h),w=1<<M,B=u[M];B===-1?((w&n)===0||(w&s)!==0)&&(u[M]=ut(w,r)):B<=r&&(t.expiredLanes|=w),h&=~w}if(r=Vt,n=_t,n=ze(t,t===r?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,n===0||t===r&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&at(s),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ue(t,n)){if(r=n&-n,r===t.callbackPriority)return r;switch(s!==null&&at(s),Xt(n)){case 2:case 8:n=yt;break;case 32:n=wt;break;case 268435456:n=I;break;default:n=wt}return s=tv.bind(null,t),n=Tt(n,s),t.callbackPriority=r,t.callbackNode=n,r}return s!==null&&s!==null&&at(s),t.callbackPriority=2,t.callbackNode=null,2}function tv(t,r){if(br!==0&&br!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Yl()&&t.callbackNode!==n)return null;var s=_t;return s=ze(t,t===Vt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Fg(t,s,r),ev(t,Ut()),t.callbackNode!=null&&t.callbackNode===n?tv.bind(null,t):null)}function rv(t,r){if(Yl())return null;Fg(t,r,!0)}function MS(){IS(function(){(Nt&6)!==0?Tt(qt,bS):Qg()})}function qd(){return xa===0&&(xa=j()),xa}function iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function nv(t,r){var n=r.ownerDocument.createElement("input");return n.name=r.name,n.value=r.value,t.id&&n.setAttribute("form",t.id),r.parentNode.insertBefore(n,r),t=new FormData(t),n.parentNode.removeChild(n),t}function ES(t,r,n,s,u){if(r==="submit"&&n&&n.stateNode===u){var h=iv((u[gr]||null).action),M=s.submitter;M&&(r=(r=M[gr]||null)?iv(r.formAction):M.getAttribute("formAction"),r!==null&&(h=r,M=null));var w=new ml("action","action",null,s,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(xa!==0){var B=M?nv(u,M):new FormData(u);hd(n,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(w.preventDefault(),B=M?nv(u,M):new FormData(u),hd(n,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var Xd=0;Xd<Nu.length;Xd++){var $d=Nu[Xd],TS=$d.toLowerCase(),wS=$d[0].toUpperCase()+$d.slice(1);mi(TS,"on"+wS)}mi(Fp,"onAnimationEnd"),mi(Op,"onAnimationIteration"),mi(Bp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Gy,"onTransitionRun"),mi(Wy,"onTransitionStart"),mi(jy,"onTransitionCancel"),mi(zp,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ji("onBeforeInput",["compositionend","keypress","textInput","paste"]),ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es));function av(t,r){r=(r&4)!==0;for(var n=0;n<t.length;n++){var s=t[n],u=s.event;s=s.listeners;e:{var h=void 0;if(r)for(var M=s.length-1;0<=M;M--){var w=s[M],B=w.instance,ee=w.currentTarget;if(w=w.listener,B!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(ve){Hl(ve)}u.currentTarget=null,h=B}else for(M=0;M<s.length;M++){if(w=s[M],B=w.instance,ee=w.currentTarget,w=w.listener,B!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(ve){Hl(ve)}u.currentTarget=null,h=B}}}}function mt(t,r){var n=r[Da];n===void 0&&(n=r[Da]=new Set);var s=t+"__bubble";n.has(s)||(ov(r,t,2,!1),n.add(s))}function Zd(t,r,n){var s=0;r&&(s|=4),ov(n,t,s,r)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[tc]){t[tc]=!0,sl.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||Zd(n,!1,t),Zd(n,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[tc]||(r[tc]=!0,Zd("selectionchange",!1,r))}}function ov(t,r,n,s){switch(Pv(r)){case 2:var u=ex;break;case 8:u=tx;break;default:u=uh}n=u.bind(null,r,n,t),u=void 0,!_u||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(r,n,{capture:!0,passive:u}):t.addEventListener(r,n,!0):u!==void 0?t.addEventListener(r,n,{passive:u}):t.addEventListener(r,n,!1)}function Kd(t,r,n,s,u){var h=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var w=s.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=s.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=fi(w),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){s=h=M;continue e}w=w.parentNode}}s=s.return}fp(function(){var ee=h,ve=gu(n),xe=[];e:{var ne=Hp.get(t);if(ne!==void 0){var ae=ml,it=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":ae=xy;break;case"focusin":it="focus",ae=bu;break;case"focusout":it="blur",ae=bu;break;case"beforeblur":case"afterblur":ae=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Ey;break;case Fp:case Op:case Bp:ae=hy;break;case zp:ae=wy;break;case"scroll":case"scrollend":ae=sy;break;case"wheel":ae=Cy;break;case"copy":case"cut":case"paste":ae=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=_p;break;case"toggle":case"beforetoggle":ae=Py}var tt=(r&4)!==0,Ot=!tt&&(t==="scroll"||t==="scrollend"),$=tt?ne!==null?ne+"Capture":null:ne;tt=[];for(var W=ee,Y;W!==null;){var ye=W;if(Y=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||Y===null||$===null||(ye=Go(W,$),ye!=null&&tt.push(Ts(W,ye,Y))),Ot)break;W=W.return}0<tt.length&&(ne=new ae(ne,it,null,n,ve),xe.push({event:ne,listeners:tt}))}}if((r&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ne&&n!==mu&&(it=n.relatedTarget||n.fromElement)&&(fi(it)||it[Tn]))break e;if((ae||ne)&&(ne=ve.window===ve?ve:(ne=ve.ownerDocument)?ne.defaultView||ne.parentWindow:window,ae?(it=n.relatedTarget||n.toElement,ae=ee,it=it?fi(it):null,it!==null&&(Ot=c(it),tt=it.tag,it!==Ot||tt!==5&&tt!==27&&tt!==6)&&(it=null)):(ae=null,it=ee),ae!==it)){if(tt=gp,ye="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(tt=_p,ye="onPointerLeave",$="onPointerEnter",W="pointer"),Ot=ae==null?ne:Ei(ae),Y=it==null?ne:Ei(it),ne=new tt(ye,W+"leave",ae,n,ve),ne.target=Ot,ne.relatedTarget=Y,ye=null,fi(ve)===ee&&(tt=new tt($,W+"enter",it,n,ve),tt.target=Y,tt.relatedTarget=Ot,ye=tt),Ot=ye,ae&&it)t:{for(tt=ae,$=it,W=0,Y=tt;Y;Y=ho(Y))W++;for(Y=0,ye=$;ye;ye=ho(ye))Y++;for(;0<W-Y;)tt=ho(tt),W--;for(;0<Y-W;)$=ho($),Y--;for(;W--;){if(tt===$||$!==null&&tt===$.alternate)break t;tt=ho(tt),$=ho($)}tt=null}else tt=null;ae!==null&&sv(xe,ne,ae,tt,!1),it!==null&&Ot!==null&&sv(xe,Ot,it,tt,!0)}}e:{if(ne=ee?Ei(ee):window,ae=ne.nodeName&&ne.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ne.type==="file")var Ge=wp;else if(Ep(ne))if(Ap)Ge=zy;else{Ge=Oy;var ft=Fy}else ae=ne.nodeName,!ae||ae.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&wi(ee.elementType)&&(Ge=wp):Ge=By;if(Ge&&(Ge=Ge(t,ee))){Tp(xe,Ge,n,ve);break e}ft&&ft(t,ne,ee),t==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&Dr(ne,"number",ne.value)}switch(ft=ee?Ei(ee):window,t){case"focusin":(Ep(ft)||ft.contentEditable==="true")&&(Ha=ft,Cu=ee,Ko=null);break;case"focusout":Ko=Cu=Ha=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Dp(xe,n,ve);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":Dp(xe,n,ve)}var $e;if(Eu)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else za?bp(t,n)&&(rt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(rt="onCompositionStart");rt&&(yp&&n.locale!=="ko"&&(za||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&za&&($e=pp()):(Rn=ve,yu="value"in Rn?Rn.value:Rn.textContent,za=!0)),ft=rc(ee,rt),0<ft.length&&(rt=new vp(rt,t,null,n,ve),xe.push({event:rt,listeners:ft}),$e?rt.data=$e:($e=Mp(n),$e!==null&&(rt.data=$e)))),($e=Ly?Iy(t,n):Uy(t,n))&&(rt=rc(ee,"onBeforeInput"),0<rt.length&&(ft=new vp("onBeforeInput","beforeinput",null,n,ve),xe.push({event:ft,listeners:rt}),ft.data=$e)),ES(xe,t,ee,n,ve)}av(xe,r)})}function Ts(t,r,n){return{instance:t,listener:r,currentTarget:n}}function rc(t,r){for(var n=r+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Go(t,n),u!=null&&s.unshift(Ts(t,u,h)),u=Go(t,r),u!=null&&s.push(Ts(t,u,h))),t.tag===3)return s;t=t.return}return[]}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sv(t,r,n,s,u){for(var h=r._reactName,M=[];n!==null&&n!==s;){var w=n,B=w.alternate,ee=w.stateNode;if(w=w.tag,B!==null&&B===s)break;w!==5&&w!==26&&w!==27||ee===null||(B=ee,u?(ee=Go(n,h),ee!=null&&M.unshift(Ts(n,ee,B))):u||(ee=Go(n,h),ee!=null&&M.push(Ts(n,ee,B)))),n=n.return}M.length!==0&&t.push({event:r,listeners:M})}var CS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(RS,"")}function cv(t,r){return r=lv(r),lv(t)===r}function ic(){}function Ft(t,r,n,s,u,h){switch(n){case"children":typeof s=="string"?r==="body"||r==="textarea"&&s===""||Wt(t,s):(typeof s=="number"||typeof s=="bigint")&&r!=="body"&&Wt(t,""+s);break;case"className":te(t,"class",s);break;case"tabIndex":te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":te(t,n,s);break;case"style":Cn(t,s,h);break;case"data":if(r!=="object"){te(t,"data",s);break}case"src":case"href":if(s===""&&(r!=="a"||n!=="href")){t.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(n);break}s=dl(""+s),t.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(r!=="input"&&Ft(t,r,"name",u.name,u,null),Ft(t,r,"formEncType",u.formEncType,u,null),Ft(t,r,"formMethod",u.formMethod,u,null),Ft(t,r,"formTarget",u.formTarget,u,null)):(Ft(t,r,"encType",u.encType,u,null),Ft(t,r,"method",u.method,u,null),Ft(t,r,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(n);break}s=dl(""+s),t.setAttribute(n,s);break;case"onClick":s!=null&&(t.onclick=ic);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=n}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}n=dl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""+s):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":s===!0?t.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,s):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(n,s):t.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(n):t.setAttribute(n,s);break;case"popover":mt("beforetoggle",t),mt("toggle",t),oe(t,"popover",s);break;case"xlinkActuate":Z(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Z(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Z(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Z(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Z(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Z(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Z(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Z(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Z(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oe(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ul.get(n)||n,oe(t,n,s))}}function Yd(t,r,n,s,u,h){switch(n){case"style":Cn(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=n}}break;case"children":typeof s=="string"?Wt(t,s):(typeof s=="number"||typeof s=="bigint")&&Wt(t,""+s);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),r=n.slice(2,u?n.length-7:void 0),h=t[gr]||null,h=h!=null?h[n]:null,typeof h=="function"&&t.removeEventListener(r,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,s,u);break e}n in t?t[n]=s:s===!0?t.setAttribute(n,""):oe(t,n,s)}}}function Mr(t,r,n){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var s=!1,u=!1,h;for(h in n)if(n.hasOwnProperty(h)){var M=n[h];if(M!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ft(t,r,h,M,n,null)}}u&&Ft(t,r,"srcSet",n.srcSet,n,null),s&&Ft(t,r,"src",n.src,n,null);return;case"input":mt("invalid",t);var w=h=M=u=null,B=null,ee=null;for(s in n)if(n.hasOwnProperty(s)){var ve=n[s];if(ve!=null)switch(s){case"name":u=ve;break;case"type":M=ve;break;case"checked":B=ve;break;case"defaultChecked":ee=ve;break;case"value":h=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,r));break;default:Ft(t,r,s,ve,n,null)}}Ur(t,h,w,B,ee,M,u,!1),Dt(t);return;case"select":mt("invalid",t),s=M=h=null;for(u in n)if(n.hasOwnProperty(u)&&(w=n[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":M=w;break;case"multiple":s=w;default:Ft(t,r,u,w,n,null)}r=h,n=M,t.multiple=!!s,r!=null?kr(t,!!s,r,!1):n!=null&&kr(t,!!s,n,!0);return;case"textarea":mt("invalid",t),h=u=s=null;for(M in n)if(n.hasOwnProperty(M)&&(w=n[M],w!=null))switch(M){case"value":s=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ft(t,r,M,w,n,null)}Rt(t,s,u,h),Dt(t);return;case"option":for(B in n)if(n.hasOwnProperty(B)&&(s=n[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(t,r,B,s,n,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(s=0;s<Es.length;s++)mt(Es[s],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in n)if(n.hasOwnProperty(ee)&&(s=n[ee],s!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ft(t,r,ee,s,n,null)}return;default:if(wi(r)){for(ve in n)n.hasOwnProperty(ve)&&(s=n[ve],s!==void 0&&Yd(t,r,ve,s,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(s=n[w],s!=null&&Ft(t,r,w,s,n,null))}function PS(t,r,n,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,w=null,B=null,ee=null,ve=null;for(ae in n){var xe=n[ae];if(n.hasOwnProperty(ae)&&xe!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":B=xe;default:s.hasOwnProperty(ae)||Ft(t,r,ae,null,s,xe)}}for(var ne in s){var ae=s[ne];if(xe=n[ne],s.hasOwnProperty(ne)&&(ae!=null||xe!=null))switch(ne){case"type":h=ae;break;case"name":u=ae;break;case"checked":ee=ae;break;case"defaultChecked":ve=ae;break;case"value":M=ae;break;case"defaultValue":w=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,r));break;default:ae!==xe&&Ft(t,r,ne,ae,s,xe)}}pi(t,M,w,B,ee,ve,h,u);return;case"select":ae=M=w=ne=null;for(h in n)if(B=n[h],n.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ae=B;default:s.hasOwnProperty(h)||Ft(t,r,h,null,s,B)}for(u in s)if(h=s[u],B=n[u],s.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":ne=h;break;case"defaultValue":w=h;break;case"multiple":M=h;default:h!==B&&Ft(t,r,u,h,s,B)}r=w,n=M,s=ae,ne!=null?kr(t,!!n,ne,!1):!!s!=!!n&&(r!=null?kr(t,!!n,r,!0):kr(t,!!n,n?[]:"",!1));return;case"textarea":ae=ne=null;for(w in n)if(u=n[w],n.hasOwnProperty(w)&&u!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ft(t,r,w,null,s,u)}for(M in s)if(u=s[M],h=n[M],s.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ne=u;break;case"defaultValue":ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Ft(t,r,M,u,s,h)}qi(t,ne,ae);return;case"option":for(var it in n)if(ne=n[it],n.hasOwnProperty(it)&&ne!=null&&!s.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ft(t,r,it,null,s,ne)}for(B in s)if(ne=s[B],ae=n[B],s.hasOwnProperty(B)&&ne!==ae&&(ne!=null||ae!=null))switch(B){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ft(t,r,B,ne,s,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in n)ne=n[tt],n.hasOwnProperty(tt)&&ne!=null&&!s.hasOwnProperty(tt)&&Ft(t,r,tt,null,s,ne);for(ee in s)if(ne=s[ee],ae=n[ee],s.hasOwnProperty(ee)&&ne!==ae&&(ne!=null||ae!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,r));break;default:Ft(t,r,ee,ne,s,ae)}return;default:if(wi(r)){for(var Ot in n)ne=n[Ot],n.hasOwnProperty(Ot)&&ne!==void 0&&!s.hasOwnProperty(Ot)&&Yd(t,r,Ot,void 0,s,ne);for(ve in s)ne=s[ve],ae=n[ve],!s.hasOwnProperty(ve)||ne===ae||ne===void 0&&ae===void 0||Yd(t,r,ve,ne,s,ae);return}}for(var $ in n)ne=n[$],n.hasOwnProperty($)&&ne!=null&&!s.hasOwnProperty($)&&Ft(t,r,$,null,s,ne);for(xe in s)ne=s[xe],ae=n[xe],!s.hasOwnProperty(xe)||ne===ae||ne==null&&ae==null||Ft(t,r,xe,ne,s,ae)}var Qd=null,eh=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function th(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rh=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(US)}:hv;function US(t){setTimeout(function(){throw t})}function jn(t){return t==="head"}function pv(t,r){var n=r,s=0,u=0;do{var h=n.nextSibling;if(t.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<s&&8>s){n=s;var M=t.ownerDocument;if(n&1&&ws(M.documentElement),n&2&&ws(M.body),n&4)for(n=M.head,ws(n),M=n.firstChild;M;){var w=M.nextSibling,B=M.nodeName;M[wn]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||n.removeChild(M),M=w}}if(u===0){t.removeChild(h),Us(r);return}u--}else n==="$"||n==="$?"||n==="$!"?u++:s=n.charCodeAt(0)-48;else s=0;n=h}while(n);Us(r)}function ih(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var n=r;switch(r=r.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ih(n),Fa(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function DS(t,r,n,s){for(;t.nodeType===1;){var u=n;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[wn])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence")||h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function kS(t,r,n){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function FS(t,r){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")r();else{var s=function(){r(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var ah=null;function mv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return t;r--}else n==="/$"&&r++}t=t.previousSibling}return null}function gv(t,r,n){switch(r=nc(n),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ws(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Fa(t)}var ai=new Map,vv=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ln=H.d;H.d={f:OS,r:BS,D:zS,C:HS,L:VS,m:GS,X:jS,S:WS,M:qS};function OS(){var t=ln.f(),r=Jl();return t||r}function BS(t){var r=Gi(t);r!==null&&r.tag===5&&r.type==="form"?Fm(r):ln.r(t)}var fo=typeof document>"u"?null:document;function _v(t,r,n){var s=fo;if(s&&typeof r=="string"&&r){var u=Gt(r);u='link[rel="'+t+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),vv.has(u)||(vv.add(u),t={rel:t,crossOrigin:n,href:r},s.querySelector(u)===null&&(r=s.createElement("link"),Mr(r,"link",t),ir(r),s.head.appendChild(r)))}}function zS(t){ln.D(t),_v("dns-prefetch",t,null)}function HS(t,r){ln.C(t,r),_v("preconnect",t,r)}function VS(t,r,n){ln.L(t,r,n);var s=fo;if(s&&t&&r){var u='link[rel="preload"][as="'+Gt(r)+'"]';r==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Gt(n.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var h=u;switch(r){case"style":h=po(t);break;case"script":h=mo(t)}ai.has(h)||(t=v({rel:"preload",href:r==="image"&&n&&n.imageSrcSet?void 0:t,as:r},n),ai.set(h,t),s.querySelector(u)!==null||r==="style"&&s.querySelector(As(h))||r==="script"&&s.querySelector(Cs(h))||(r=s.createElement("link"),Mr(r,"link",t),ir(r),s.head.appendChild(r)))}}function GS(t,r){ln.m(t,r);var n=fo;if(n&&t){var s=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Gt(s)+'"][href="'+Gt(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=mo(t)}if(!ai.has(h)&&(t=v({rel:"modulepreload",href:t},r),ai.set(h,t),n.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cs(h)))return}s=n.createElement("link"),Mr(s,"link",t),ir(s),n.head.appendChild(s)}}}function WS(t,r,n){ln.S(t,r,n);var s=fo;if(s&&t){var u=Wi(s).hoistableStyles,h=po(t);r=r||"default";var M=u.get(h);if(!M){var w={loading:0,preload:null};if(M=s.querySelector(As(h)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":r},n),(n=ai.get(h))&&oh(t,n);var B=M=s.createElement("link");ir(B),Mr(B,"link",t),B._p=new Promise(function(ee,ve){B.onload=ee,B.onerror=ve}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,oc(M,r,s)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(h,M)}}}function jS(t,r){ln.X(t,r);var n=fo;if(n&&t){var s=Wi(n).hoistableScripts,u=mo(t),h=s.get(u);h||(h=n.querySelector(Cs(u)),h||(t=v({src:t,async:!0},r),(r=ai.get(u))&&sh(t,r),h=n.createElement("script"),ir(h),Mr(h,"link",t),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function qS(t,r){ln.M(t,r);var n=fo;if(n&&t){var s=Wi(n).hoistableScripts,u=mo(t),h=s.get(u);h||(h=n.querySelector(Cs(u)),h||(t=v({src:t,async:!0,type:"module"},r),(r=ai.get(u))&&sh(t,r),h=n.createElement("script"),ir(h),Mr(h,"link",t),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function yv(t,r,n,s){var u=(u=Q.current)?ac(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(r=po(n.href),n=Wi(u).hoistableStyles,s=n.get(r),s||(s={type:"style",instance:null,count:0,state:null},n.set(r,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=po(n.href);var h=Wi(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(As(t)))&&!h._p&&(M.instance=h,M.state.loading=5),ai.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ai.set(t,n),h||XS(u,t,n,M.state))),r&&s===null)throw Error(a(528,""));return M}if(r&&s!==null)throw Error(a(529,""));return null;case"script":return r=n.async,n=n.src,typeof n=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=mo(n),n=Wi(u).hoistableScripts,s=n.get(r),s||(s={type:"script",instance:null,count:0,state:null},n.set(r,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function po(t){return'href="'+Gt(t)+'"'}function As(t){return'link[rel="stylesheet"]['+t+"]"}function Sv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function XS(t,r,n,s){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?s.loading=1:(r=t.createElement("link"),s.preload=r,r.addEventListener("load",function(){return s.loading|=1}),r.addEventListener("error",function(){return s.loading|=2}),Mr(r,"link",n),ir(r),t.head.appendChild(r))}function mo(t){return'[src="'+Gt(t)+'"]'}function Cs(t){return"script[async]"+t}function xv(t,r,n){if(r.count++,r.instance===null)switch(r.type){case"style":var s=t.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(s)return r.instance=s,ir(s),s;var u=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ir(s),Mr(s,"style",u),oc(s,n.precedence,t),r.instance=s;case"stylesheet":u=po(n.href);var h=t.querySelector(As(u));if(h)return r.state.loading|=4,r.instance=h,ir(h),h;s=Sv(n),(u=ai.get(u))&&oh(s,u),h=(t.ownerDocument||t).createElement("link"),ir(h);var M=h;return M._p=new Promise(function(w,B){M.onload=w,M.onerror=B}),Mr(h,"link",s),r.state.loading|=4,oc(h,n.precedence,t),r.instance=h;case"script":return h=mo(n.src),(u=t.querySelector(Cs(h)))?(r.instance=u,ir(u),u):(s=n,(u=ai.get(h))&&(s=v({},n),sh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),ir(u),Mr(u,"link",s),t.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(s=r.instance,r.state.loading|=4,oc(s,n.precedence,t));return r.instance}function oc(t,r,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,M=0;M<s.length;M++){var w=s[M];if(w.dataset.precedence===r)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(r=n.nodeType===9?n.head:n,r.insertBefore(t,r.firstChild))}function oh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function sh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var sc=null;function bv(t,r,n){if(sc===null){var s=new Map,u=sc=new Map;u.set(n,s)}else u=sc,s=u.get(n),s||(s=new Map,u.set(n,s));if(s.has(t))return s;for(s.set(t,null),n=n.getElementsByTagName(t),u=0;u<n.length;u++){var h=n[u];if(!(h[wn]||h[ur]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(r)||"";M=t+M;var w=s.get(M);w?w.push(h):s.set(M,[h])}}return s}function Mv(t,r,n){t=t.ownerDocument||t,t.head.insertBefore(n,r==="title"?t.querySelector("head > title"):null)}function $S(t,r,n){if(n===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rs=null;function ZS(){}function JS(t,r,n){if(Rs===null)throw Error(a(475));var s=Rs;if(r.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=po(n.href),h=t.querySelector(As(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=lc.bind(s),t.then(s,s)),r.state.loading|=4,r.instance=h,ir(h);return}h=t.ownerDocument||t,n=Sv(n),(u=ai.get(u))&&oh(n,u),h=h.createElement("link"),ir(h);var M=h;M._p=new Promise(function(w,B){M.onload=w,M.onerror=B}),Mr(h,"link",n),r.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(s.count++,r=lc.bind(s),t.addEventListener("load",r),t.addEventListener("error",r))}}function KS(){if(Rs===null)throw Error(a(475));var t=Rs;return t.stylesheets&&t.count===0&&lh(t,t.stylesheets),0<t.count?function(r){var n=setTimeout(function(){if(t.stylesheets&&lh(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(n)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function lh(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,r.forEach(YS,t),cc=null,lc.call(t))}function YS(t,r){if(!(r.state.loading&4)){var n=cc.get(t);if(n)var s=n.get(null);else{n=new Map,cc.set(t,n);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(n.set(M.dataset.precedence,M),s=M)}s&&n.set(null,s)}u=r.instance,M=u.getAttribute("data-precedence"),h=n.get(M)||s,h===s&&n.set(null,u),n.set(M,u),this.count++,s=lc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),r.state.loading|=4}}var Ps={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function QS(t,r,n,s,u,h,M,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Tv(t,r,n,s,u,h,M,w,B,ee,ve,xe){return t=new QS(t,r,n,M,w,B,ee,xe),r=1,h===!0&&(r|=24),h=Wr(3,null,null,r),t.current=h,h.stateNode=t,r=Gu(),r.refCount++,t.pooledCache=r,r.refCount++,h.memoizedState={element:s,isDehydrated:n,cache:r},Xu(h),t}function wv(t){return t?(t=ja,t):ja}function Av(t,r,n,s,u,h){u=wv(u),s.context===null?s.context=u:s.pendingContext=u,s=Ln(r),s.payload={element:n},h=h===void 0?null:h,h!==null&&(s.callback=h),n=In(t,s,r),n!==null&&(Zr(n,t,r),os(n,t,r))}function Cv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<r?n:r}}function ch(t,r){Cv(t,r),(t=t.alternate)&&Cv(t,r)}function Rv(t){if(t.tag===13){var r=Wa(t,67108864);r!==null&&Zr(r,t,67108864),ch(t,67108864)}}var uc=!0;function ex(t,r,n,s){var u=U.T;U.T=null;var h=H.p;try{H.p=2,uh(t,r,n,s)}finally{H.p=h,U.T=u}}function tx(t,r,n,s){var u=U.T;U.T=null;var h=H.p;try{H.p=8,uh(t,r,n,s)}finally{H.p=h,U.T=u}}function uh(t,r,n,s){if(uc){var u=dh(s);if(u===null)Kd(t,r,s,dc,n),Nv(t,s);else if(ix(u,t,r,n,s))s.stopPropagation();else if(Nv(t,s),r&4&&-1<rx.indexOf(t)){for(;u!==null;){var h=Gi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=We(h.pendingLanes);if(M!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var B=1<<31-De(M);w.entanglements[1]|=B,M&=~B}Pi(h),(Nt&6)===0&&($l=Ut()+500,Ms(0))}}break;case 13:w=Wa(h,2),w!==null&&Zr(w,h,2),Jl(),ch(h,2)}if(h=dh(s),h===null&&Kd(t,r,s,dc,n),h===u)break;u=h}u!==null&&s.stopPropagation()}else Kd(t,r,s,null,n)}}function dh(t){return t=gu(t),hh(t)}var dc=null;function hh(t){if(dc=null,t=fi(t),t!==null){var r=c(t);if(r===null)t=null;else{var n=r.tag;if(n===13){if(t=d(r),t!==null)return t;t=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return dc=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case qt:return 2;case yt:return 8;case wt:case je:return 32;case I:return 268435456;default:return 32}default:return 32}}var fh=!1,qn=null,Xn=null,$n=null,Ns=new Map,Ls=new Map,Zn=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(t,r){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Ns.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(r.pointerId)}}function Is(t,r,n,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:n,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Gi(r),r!==null&&Rv(r)),t):(t.eventSystemFlags|=s,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function ix(t,r,n,s,u){switch(r){case"focusin":return qn=Is(qn,t,r,n,s,u),!0;case"dragenter":return Xn=Is(Xn,t,r,n,s,u),!0;case"mouseover":return $n=Is($n,t,r,n,s,u),!0;case"pointerover":var h=u.pointerId;return Ns.set(h,Is(Ns.get(h)||null,t,r,n,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Ls.set(h,Is(Ls.get(h)||null,t,r,n,s,u)),!0}return!1}function Lv(t){var r=fi(t.target);if(r!==null){var n=c(r);if(n!==null){if(r=n.tag,r===13){if(r=d(n),r!==null){t.blockedOn=r,hi(t.priority,function(){if(n.tag===13){var s=$r();s=Ke(s);var u=Wa(n,s);u!==null&&Zr(u,n,s),ch(n,s)}});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var n=dh(t.nativeEvent);if(n===null){n=t.nativeEvent;var s=new n.constructor(n.type,n);mu=s,n.target.dispatchEvent(s),mu=null}else return r=Gi(n),r!==null&&Rv(r),t.blockedOn=n,!1;r.shift()}return!0}function Iv(t,r,n){hc(t)&&n.delete(r)}function nx(){fh=!1,qn!==null&&hc(qn)&&(qn=null),Xn!==null&&hc(Xn)&&(Xn=null),$n!==null&&hc($n)&&($n=null),Ns.forEach(Iv),Ls.forEach(Iv)}function fc(t,r){t.blockedOn===r&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nx)))}var pc=null;function Uv(t){pc!==t&&(pc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var r=0;r<t.length;r+=3){var n=t[r],s=t[r+1],u=t[r+2];if(typeof s!="function"){if(hh(s||n)===null)continue;break}var h=Gi(n);h!==null&&(t.splice(r,3),r-=3,hd(h,{pending:!0,data:u,method:n.method,action:s},s,u))}}))}function Us(t){function r(B){return fc(B,t)}qn!==null&&fc(qn,t),Xn!==null&&fc(Xn,t),$n!==null&&fc($n,t),Ns.forEach(r),Ls.forEach(r);for(var n=0;n<Zn.length;n++){var s=Zn[n];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&Zn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var u=n[s],h=n[s+1],M=u[gr]||null;if(typeof h=="function")M||Uv(n);else if(M){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[gr]||null)w=M.formAction;else if(hh(u)!==null)continue}else w=M.action;typeof w=="function"?n[s+1]=w:(n.splice(s,3),s-=3),Uv(n)}}}function ph(t){this._internalRoot=t}mc.prototype.render=ph.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var n=r.current,s=$r();Av(n,s,t,r,null,null)},mc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Av(t.current,2,null,t,null,null),Jl(),r[Tn]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var r=xt();t={blockedOn:null,target:t,priority:r};for(var n=0;n<Zn.length&&r!==0&&r<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&Lv(t)}};var Dv=e.version;if(Dv!=="19.1.0")throw Error(a(527,Dv,"19.1.0"));H.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(r),t=t!==null?f(t):null,t=t===null?null:t.stateNode,t};var ax={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{me=gc.inject(ax),fe=gc}catch{}}return ks.createRoot=function(t,r){if(!l(t))throw Error(a(299));var n=!1,s="",u=Km,h=Ym,M=Qm,w=null;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(h=r.onCaughtError),r.onRecoverableError!==void 0&&(M=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=Tv(t,1,!1,null,null,n,s,u,h,M,w,null),t[Tn]=r.current,Jd(t),new ph(r)},ks.hydrateRoot=function(t,r,n){if(!l(t))throw Error(a(299));var s=!1,u="",h=Km,M=Ym,w=Qm,B=null,ee=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(M=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(B=n.unstable_transitionCallbacks),n.formState!==void 0&&(ee=n.formState)),r=Tv(t,1,!0,r,n??null,s,u,h,M,w,B,ee),r.context=wv(null),n=r.current,s=$r(),s=Ke(s),u=Ln(s),u.callback=null,In(n,u,s),n=s,r.current.lanes=n,Fe(r,n),Pi(r),t[Tn]=r.current,Jd(t),new mc(r)},ks.version="19.1.0",ks}var Zv;function vx(){if(Zv)return mh.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=gx(),mh.exports}var _x=vx(),Fs={},Jv;function yx(){if(Jv)return Fs;Jv=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.parse=d,Fs.serialize=f;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function d(g,S){const x=new c,R=g.length;if(R<2)return x;const _=(S==null?void 0:S.decode)||v;let y=0;do{const A=g.indexOf("=",y);if(A===-1)break;const D=g.indexOf(";",y),N=D===-1?R:D;if(A>N){y=g.lastIndexOf(";",A-1)+1;continue}const F=p(g,y,A),k=m(g,A,F),O=g.slice(F,k);if(x[O]===void 0){let E=p(g,A+1,N),P=m(g,N,E);const ue=_(g.slice(E,P));x[O]=ue}y=N+1}while(y<R);return x}function p(g,S,x){do{const R=g.charCodeAt(S);if(R!==32&&R!==9)return S}while(++S<x);return x}function m(g,S,x){for(;S>x;){const R=g.charCodeAt(--S);if(R!==32&&R!==9)return S+1}return x}function f(g,S,x){const R=(x==null?void 0:x.encode)||encodeURIComponent;if(!o.test(g))throw new TypeError(`argument name is invalid: ${g}`);const _=R(S);if(!e.test(_))throw new TypeError(`argument val is invalid: ${S}`);let y=g+"="+_;if(!x)return y;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);y+="; Max-Age="+x.maxAge}if(x.domain){if(!i.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);y+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);y+="; Path="+x.path}if(x.expires){if(!b(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);y+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(y+="; HttpOnly"),x.secure&&(y+="; Secure"),x.partitioned&&(y+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":y+="; Priority=Low";break;case"medium":y+="; Priority=Medium";break;case"high":y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":y+="; SameSite=Strict";break;case"lax":y+="; SameSite=Lax";break;case"none":y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return y}function v(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function b(g){return l.call(g)==="[object Date]"}return Fs}yx();var Kv="popstate";function Sx(o={}){function e(l,c){let{pathname:d="/",search:p="",hash:m=""}=Ua(l.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),Qh("",{pathname:d,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let d=l.document.querySelector("base"),p="";if(d&&d.getAttribute("href")){let m=l.location.href,f=m.indexOf("#");p=f===-1?m:m.slice(0,f)}return p+"#"+(typeof c=="string"?c:Zs(c))}function a(l,c){Mi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return bx(e,i,a,o)}function Kt(o,e){if(o===!1||o===null||typeof o>"u")throw new Error(e)}function Mi(o,e){if(!o){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function Yv(o,e){return{usr:o.state,key:o.key,idx:e}}function Qh(o,e,i=null,a){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof e=="string"?Ua(e):e,state:i,key:e&&e.key||a||xx()}}function Zs({pathname:o="/",search:e="",hash:i=""}){return e&&e!=="?"&&(o+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function Ua(o){let e={};if(o){let i=o.indexOf("#");i>=0&&(e.hash=o.substring(i),o=o.substring(0,i));let a=o.indexOf("?");a>=0&&(e.search=o.substring(a),o=o.substring(0,a)),o&&(e.pathname=o)}return e}function bx(o,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,d=l.history,p="POP",m=null,f=v();f==null&&(f=0,d.replaceState({...d.state,idx:f},""));function v(){return(d.state||{idx:null}).idx}function b(){p="POP";let _=v(),y=_==null?null:_-f;f=_,m&&m({action:p,location:R.location,delta:y})}function g(_,y){p="PUSH";let A=Qh(R.location,_,y);i&&i(A,_),f=v()+1;let D=Yv(A,f),N=R.createHref(A);try{d.pushState(D,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}c&&m&&m({action:p,location:R.location,delta:1})}function S(_,y){p="REPLACE";let A=Qh(R.location,_,y);i&&i(A,_),f=v();let D=Yv(A,f),N=R.createHref(A);d.replaceState(D,"",N),c&&m&&m({action:p,location:R.location,delta:0})}function x(_){return Mx(_)}let R={get action(){return p},get location(){return o(l,d)},listen(_){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Kv,b),m=_,()=>{l.removeEventListener(Kv,b),m=null}},createHref(_){return e(l,_)},createURL:x,encodeLocation(_){let y=x(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:S,go(_){return d.go(_)}};return R}function Mx(o,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(i,"No window.location.(origin|href) available to create URL");let a=typeof o=="string"?o:Zs(o);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function a0(o,e,i="/"){return Ex(o,e,i,!1)}function Ex(o,e,i,a){let l=typeof e=="string"?Ua(e):e,c=yn(l.pathname||"/",i);if(c==null)return null;let d=o0(o);Tx(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let f=kx(c);p=Ux(d[m],f,a)}return p}function o0(o,e=[],i=[],a=""){let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Kt(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let f=gn([a,m.relativePath]),v=i.concat(m);c.children&&c.children.length>0&&(Kt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),o0(c.children,e,v,f)),!(c.path==null&&!c.index)&&e.push({path:f,score:Lx(f,c.index),routesMeta:v})};return o.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of s0(c.path))l(c,d,m)}),e}function s0(o){let e=o.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let d=s0(a.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>o.startsWith("/")&&m===""?"/":m)}function Tx(o){o.sort((e,i)=>e.score!==i.score?i.score-e.score:Ix(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var wx=/^:[\w-]+$/,Ax=3,Cx=2,Rx=1,Px=10,Nx=-2,Qv=o=>o==="*";function Lx(o,e){let i=o.split("/"),a=i.length;return i.some(Qv)&&(a+=Nx),e&&(a+=Cx),i.filter(l=>!Qv(l)).reduce((l,c)=>l+(wx.test(c)?Ax:c===""?Rx:Px),a)}function Ix(o,e){return o.length===e.length&&o.slice(0,-1).every((i,a)=>i===e[a])?o[o.length-1]-e[e.length-1]:0}function Ux(o,e,i=!1){let{routesMeta:a}=o,l={},c="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],f=p===a.length-1,v=c==="/"?e:e.slice(c.length)||"/",b=Qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},v),g=m.route;if(!b&&f&&i&&!a[a.length-1].route.index&&(b=Qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!b)return null;Object.assign(l,b.params),d.push({params:l,pathname:gn([c,b.pathname]),pathnameBase:zx(gn([c,b.pathnameBase])),route:g}),b.pathnameBase!=="/"&&(c=gn([c,b.pathnameBase]))}return d}function Qc(o,e){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,a]=Dx(o.path,o.caseSensitive,o.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:a.reduce((m,{paramName:f,isOptional:v},b)=>{if(f==="*"){let S=p[b]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const g=p[b];return v&&!g?m[f]=void 0:m[f]=(g||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:o}}function Dx(o,e=!1,i=!0){Mi(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let a=[],l="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(a.push({paramName:"*"}),l+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":o!==""&&o!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function kx(o){try{return o.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),o}}function yn(o,e){if(e==="/")return o;if(!o.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=o.charAt(i);return a&&a!=="/"?null:o.slice(i)||"/"}function Fx(o,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof o=="string"?Ua(o):o;return{pathname:i?i.startsWith("/")?i:Ox(i,e):e,search:Hx(a),hash:Vx(l)}}function Ox(o,e){let i=e.replace(/\/+$/,"").split("/");return o.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function vh(o,e,i,a){return`Cannot include a '${o}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bx(o){return o.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function l0(o){let e=Bx(o);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function c0(o,e,i,a=!1){let l;typeof o=="string"?l=Ua(o):(l={...o},Kt(!l.pathname||!l.pathname.includes("?"),vh("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),vh("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),vh("#","search","hash",l)));let c=o===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=i;else{let b=e.length-1;if(!a&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),b-=1;l.pathname=g.join("/")}p=b>=0?e[b]:"/"}let m=Fx(l,p),f=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(f||v)&&(m.pathname+="/"),m}var gn=o=>o.join("/").replace(/\/\/+/g,"/"),zx=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Vx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Gx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var Wx=["GET",...u0];new Set(Wx);var Oo=de.createContext(null);Oo.displayName="DataRouter";var lu=de.createContext(null);lu.displayName="DataRouterState";var d0=de.createContext({isTransitioning:!1});d0.displayName="ViewTransition";var jx=de.createContext(new Map);jx.displayName="Fetchers";var qx=de.createContext(null);qx.displayName="Await";var zi=de.createContext(null);zi.displayName="Navigation";var Qs=de.createContext(null);Qs.displayName="Location";var En=de.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var Jf=de.createContext(null);Jf.displayName="RouteError";function Xx(o,{relative:e}={}){Kt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=de.useContext(zi),{hash:l,pathname:c,search:d}=tl(o,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:gn([i,c])),a.createHref({pathname:p,search:d,hash:l})}function el(){return de.useContext(Qs)!=null}function Hi(){return Kt(el(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(Qs).location}var h0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function f0(o){de.useContext(zi).static||de.useLayoutEffect(o)}function p0(){let{isDataRoute:o}=de.useContext(En);return o?ob():$x()}function $x(){Kt(el(),"useNavigate() may be used only in the context of a <Router> component.");let o=de.useContext(Oo),{basename:e,navigator:i}=de.useContext(zi),{matches:a}=de.useContext(En),{pathname:l}=Hi(),c=JSON.stringify(l0(a)),d=de.useRef(!1);return f0(()=>{d.current=!0}),de.useCallback((p,m={})=>{if(Mi(d.current,h0),!d.current)return;if(typeof p=="number"){i.go(p);return}let f=c0(p,JSON.parse(c),l,m.relative==="path");o==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:gn([e,f.pathname])),(m.replace?i.replace:i.push)(f,m.state,m)},[e,i,c,l,o])}de.createContext(null);function tl(o,{relative:e}={}){let{matches:i}=de.useContext(En),{pathname:a}=Hi(),l=JSON.stringify(l0(i));return de.useMemo(()=>c0(o,JSON.parse(l),a,e==="path"),[o,l,a,e])}function Zx(o,e){return m0(o,e)}function m0(o,e,i,a){var l;Kt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=de.useContext(zi),{matches:d}=de.useContext(En),p=d[d.length-1],m=p?p.params:{},f=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let A=b&&b.path||"";g0(f,!b||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let g=Hi(),S;if(e){let A=typeof e=="string"?Ua(e):e;Kt(v==="/"||((l=A.pathname)==null?void 0:l.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${A.pathname}" was given in the \`location\` prop.`),S=A}else S=g;let x=S.pathname||"/",R=x;if(v!=="/"){let A=v.replace(/^\//,"").split("/");R="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=a0(o,{pathname:R});Mi(b||_!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=eb(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:gn([v,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?v:gn([v,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,i,a);return e&&y?de.createElement(Qs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},y):y}function Jx(){let o=ab(),e=Gx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",o),d=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:c},"ErrorBoundary")," or"," ",de.createElement("code",{style:c},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),i?de.createElement("pre",{style:l},i):null,d)}var Kx=de.createElement(Jx,null),Yx=class extends de.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,e){return e.location!==o.location||e.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:e.error,location:e.location,revalidation:o.revalidation||e.revalidation}}componentDidCatch(o,e){console.error("React Router caught the following error during render",o,e)}render(){return this.state.error!==void 0?de.createElement(En.Provider,{value:this.props.routeContext},de.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qx({routeContext:o,match:e,children:i}){let a=de.useContext(Oo);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(En.Provider,{value:o},i)}function eb(o,e=[],i=null,a=null){if(o==null){if(!i)return null;if(i.errors)o=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)o=i.matches;else return null}let l=o,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);Kt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,p=-1;if(i)for(let m=0;m<l.length;m++){let f=l[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(p=m),f.route.id){let{loaderData:v,errors:b}=i,g=f.route.loader&&!v.hasOwnProperty(f.route.id)&&(!b||b[f.route.id]===void 0);if(f.route.lazy||g){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,f,v)=>{let b,g=!1,S=null,x=null;i&&(b=c&&f.route.id?c[f.route.id]:void 0,S=f.route.errorElement||Kx,d&&(p<0&&v===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,x=null):p===v&&(g=!0,x=f.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,v+1)),_=()=>{let y;return b?y=S:g?y=x:f.route.Component?y=de.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=m,de.createElement(Qx,{match:f,routeContext:{outlet:m,matches:R,isDataRoute:i!=null},children:y})};return i&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?de.createElement(Yx,{location:i.location,revalidation:i.revalidation,component:S,error:b,children:_(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):_()},null)}function Kf(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tb(o){let e=de.useContext(Oo);return Kt(e,Kf(o)),e}function rb(o){let e=de.useContext(lu);return Kt(e,Kf(o)),e}function ib(o){let e=de.useContext(En);return Kt(e,Kf(o)),e}function Yf(o){let e=ib(o),i=e.matches[e.matches.length-1];return Kt(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function nb(){return Yf("useRouteId")}function ab(){var o;let e=de.useContext(Jf),i=rb("useRouteError"),a=Yf("useRouteError");return e!==void 0?e:(o=i.errors)==null?void 0:o[a]}function ob(){let{router:o}=tb("useNavigate"),e=Yf("useNavigate"),i=de.useRef(!1);return f0(()=>{i.current=!0}),de.useCallback(async(a,l={})=>{Mi(i.current,h0),i.current&&(typeof a=="number"?o.navigate(a):await o.navigate(a,{fromRouteId:e,...l}))},[o,e])}var e_={};function g0(o,e,i){!e&&!e_[o]&&(e_[o]=!0,Mi(!1,i))}de.memo(sb);function sb({routes:o,future:e,state:i}){return m0(o,void 0,i,e)}function v0(o){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lb({basename:o="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}){Kt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=o.replace(/^\/*/,"/"),p=de.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=Ua(i));let{pathname:m="/",search:f="",hash:v="",state:b=null,key:g="default"}=i,S=de.useMemo(()=>{let x=yn(m,d);return x==null?null:{location:{pathname:x,search:f,hash:v,state:b,key:g},navigationType:a}},[d,m,f,v,b,g,a]);return Mi(S!=null,`<Router basename="${d}"> is not able to match the URL "${m}${f}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:de.createElement(zi.Provider,{value:p},de.createElement(Qs.Provider,{children:e,value:S}))}function cb({children:o,location:e}){return Zx(ef(o),e)}function ef(o,e=[]){let i=[];return de.Children.forEach(o,(a,l)=>{if(!de.isValidElement(a))return;let c=[...e,l];if(a.type===de.Fragment){i.push.apply(i,ef(a.props.children,c));return}Kt(a.type===v0,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=ef(a.props.children,c)),i.push(d)}),i}var jc="get",qc="application/x-www-form-urlencoded";function cu(o){return o!=null&&typeof o.tagName=="string"}function ub(o){return cu(o)&&o.tagName.toLowerCase()==="button"}function db(o){return cu(o)&&o.tagName.toLowerCase()==="form"}function hb(o){return cu(o)&&o.tagName.toLowerCase()==="input"}function fb(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function pb(o,e){return o.button===0&&(!e||e==="_self")&&!fb(o)}var vc=null;function mb(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var gb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _h(o){return o!=null&&!gb.has(o)?(Mi(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):o}function vb(o,e){let i,a,l,c,d;if(db(o)){let p=o.getAttribute("action");a=p?yn(p,e):null,i=o.getAttribute("method")||jc,l=_h(o.getAttribute("enctype"))||qc,c=new FormData(o)}else if(ub(o)||hb(o)&&(o.type==="submit"||o.type==="image")){let p=o.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=o.getAttribute("formaction")||p.getAttribute("action");if(a=m?yn(m,e):null,i=o.getAttribute("formmethod")||p.getAttribute("method")||jc,l=_h(o.getAttribute("formenctype"))||_h(p.getAttribute("enctype"))||qc,c=new FormData(p,o),!mb()){let{name:f,type:v,value:b}=o;if(v==="image"){let g=f?`${f}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else f&&c.append(f,b)}}else{if(cu(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=jc,a=null,l=qc,d=o}return c&&l==="text/plain"&&(d=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:d}}function Qf(o,e){if(o===!1||o===null||typeof o>"u")throw new Error(e)}async function _b(o,e){if(o.id in e)return e[o.id];try{let i=await import(o.module);return e[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yb(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Sb(o,e,i){let a=await Promise.all(o.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await _b(c,i);return d.links?d.links():[]}return[]}));return Eb(a.flat(1).filter(yb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t_(o,e,i,a,l,c){let d=(m,f)=>i[f]?m.route.id!==i[f].route.id:!0,p=(m,f)=>{var v;return i[f].pathname!==m.pathname||((v=i[f].route.path)==null?void 0:v.endsWith("*"))&&i[f].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,f)=>d(m,f)||p(m,f)):c==="data"?e.filter((m,f)=>{var v;let b=a.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(d(m,f)||p(m,f))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(o,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xb(o,e,{includeHydrateFallback:i}={}){return bb(o.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function bb(o){return[...new Set(o)]}function Mb(o){let e={},i=Object.keys(o).sort();for(let a of i)e[a]=o[a];return e}function Eb(o,e){let i=new Set;return new Set(e),o.reduce((a,l)=>{let c=JSON.stringify(Mb(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tb=new Set([100,101,204,205]);function wb(o,e){let i=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return i.pathname==="/"?i.pathname="_root.data":e&&yn(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function _0(){let o=de.useContext(Oo);return Qf(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Ab(){let o=de.useContext(lu);return Qf(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ep=de.createContext(void 0);ep.displayName="FrameworkContext";function y0(){let o=de.useContext(ep);return Qf(o,"You must render this element inside a <HydratedRouter> element"),o}function Cb(o,e){let i=de.useContext(ep),[a,l]=de.useState(!1),[c,d]=de.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:f,onMouseLeave:v,onTouchStart:b}=e,g=de.useRef(null);de.useEffect(()=>{if(o==="render"&&d(!0),o==="viewport"){let R=y=>{y.forEach(A=>{d(A.isIntersecting)})},_=new IntersectionObserver(R,{threshold:.5});return g.current&&_.observe(g.current),()=>{_.disconnect()}}},[o]),de.useEffect(()=>{if(a){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[a]);let S=()=>{l(!0)},x=()=>{l(!1),d(!1)};return i?o!=="intent"?[c,g,{}]:[c,g,{onFocus:Os(p,S),onBlur:Os(m,x),onMouseEnter:Os(f,S),onMouseLeave:Os(v,x),onTouchStart:Os(b,S)}]:[!1,g,{}]}function Os(o,e){return i=>{o&&o(i),i.defaultPrevented||e(i)}}function Rb({page:o,...e}){let{router:i}=_0(),a=de.useMemo(()=>a0(i.routes,o,i.basename),[i.routes,o,i.basename]);return a?de.createElement(Nb,{page:o,matches:a,...e}):null}function Pb(o){let{manifest:e,routeModules:i}=y0(),[a,l]=de.useState([]);return de.useEffect(()=>{let c=!1;return Sb(o,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[o,e,i]),a}function Nb({page:o,matches:e,...i}){let a=Hi(),{manifest:l,routeModules:c}=y0(),{basename:d}=_0(),{loaderData:p,matches:m}=Ab(),f=de.useMemo(()=>t_(o,e,m,l,a,"data"),[o,e,m,l,a]),v=de.useMemo(()=>t_(o,e,m,l,a,"assets"),[o,e,m,l,a]),b=de.useMemo(()=>{if(o===a.pathname+a.search+a.hash)return[];let x=new Set,R=!1;if(e.forEach(y=>{var A;let D=l.routes[y.route.id];!D||!D.hasLoader||(!f.some(N=>N.route.id===y.route.id)&&y.route.id in p&&(A=c[y.route.id])!=null&&A.shouldRevalidate||D.hasClientLoader?R=!0:x.add(y.route.id))}),x.size===0)return[];let _=wb(o,d);return R&&x.size>0&&_.searchParams.set("_routes",e.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[_.pathname+_.search]},[d,p,a,l,f,e,o,c]),g=de.useMemo(()=>xb(v,l),[v,l]),S=Pb(v);return de.createElement(de.Fragment,null,b.map(x=>de.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...i})),g.map(x=>de.createElement("link",{key:x,rel:"modulepreload",href:x,...i})),S.map(({key:x,link:R})=>de.createElement("link",{key:x,...R})))}function Lb(...o){return e=>{o.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var S0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S0&&(window.__reactRouterVersion="7.6.2")}catch{}function Ib({basename:o,children:e,window:i}){let a=de.useRef();a.current==null&&(a.current=Sx({window:i,v5Compat:!0}));let l=a.current,[c,d]=de.useState({action:l.action,location:l.location}),p=de.useCallback(m=>{de.startTransition(()=>d(m))},[d]);return de.useLayoutEffect(()=>l.listen(p),[l,p]),de.createElement(lb,{basename:o,children:e,location:c.location,navigationType:c.action,navigator:l})}var x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eu=de.forwardRef(function({onClick:o,discover:e="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:f,viewTransition:v,...b},g){let{basename:S}=de.useContext(zi),x=typeof m=="string"&&x0.test(m),R,_=!1;if(typeof m=="string"&&x&&(R=m,S0))try{let E=new URL(window.location.href),P=m.startsWith("//")?new URL(E.protocol+m):new URL(m),ue=yn(P.pathname,S);P.origin===E.origin&&ue!=null?m=ue+P.search+P.hash:_=!0}catch{Mi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=Xx(m,{relative:a}),[A,D,N]=Cb(i,b),F=Fb(m,{replace:c,state:d,target:p,preventScrollReset:f,relative:a,viewTransition:v});function k(E){o&&o(E),E.defaultPrevented||F(E)}let O=de.createElement("a",{...b,...N,href:R||y,onClick:_||l?o:k,ref:Lb(g,D),target:p,"data-discover":!x&&e==="render"?"true":void 0});return A&&!x?de.createElement(de.Fragment,null,O,de.createElement(Rb,{page:y})):O});eu.displayName="Link";var Ub=de.forwardRef(function({"aria-current":o="page",caseSensitive:e=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...m},f){let v=tl(c,{relative:m.relative}),b=Hi(),g=de.useContext(lu),{navigator:S,basename:x}=de.useContext(zi),R=g!=null&&Vb(v)&&d===!0,_=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,y=b.pathname,A=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;e||(y=y.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&x&&(A=yn(A,x)||A);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let N=y===_||!a&&y.startsWith(_)&&y.charAt(D)==="/",F=A!=null&&(A===_||!a&&A.startsWith(_)&&A.charAt(_.length)==="/"),k={isActive:N,isPending:F,isTransitioning:R},O=N?o:void 0,E;typeof i=="function"?E=i(k):E=[i,N?"active":null,F?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return de.createElement(eu,{...m,"aria-current":O,className:E,ref:f,style:P,to:c,viewTransition:d},typeof p=="function"?p(k):p)});Ub.displayName="NavLink";var Db=de.forwardRef(({discover:o="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:d=jc,action:p,onSubmit:m,relative:f,preventScrollReset:v,viewTransition:b,...g},S)=>{let x=zb(),R=Hb(p,{relative:f}),_=d.toLowerCase()==="get"?"get":"post",y=typeof p=="string"&&x0.test(p),A=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let N=D.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||d;x(N||D.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:f,preventScrollReset:v,viewTransition:b})};return de.createElement("form",{ref:S,method:_,action:R,onSubmit:a?m:A,...g,"data-discover":!y&&o==="render"?"true":void 0})});Db.displayName="Form";function kb(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b0(o){let e=de.useContext(Oo);return Kt(e,kb(o)),e}function Fb(o,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:d}={}){let p=p0(),m=Hi(),f=tl(o,{relative:c});return de.useCallback(v=>{if(pb(v,e)){v.preventDefault();let b=i!==void 0?i:Zs(m)===Zs(f);p(o,{replace:b,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[m,p,f,i,a,e,o,l,c,d])}var Ob=0,Bb=()=>`__${String(++Ob)}__`;function zb(){let{router:o}=b0("useSubmit"),{basename:e}=de.useContext(zi),i=nb();return de.useCallback(async(a,l={})=>{let{action:c,method:d,encType:p,formData:m,body:f}=vb(a,e);if(l.navigate===!1){let v=l.fetcherKey||Bb();await o.fetch(v,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:f,formMethod:l.method||d,formEncType:l.encType||p,flushSync:l.flushSync})}else await o.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:f,formMethod:l.method||d,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[o,e,i])}function Hb(o,{relative:e}={}){let{basename:i}=de.useContext(zi),a=de.useContext(En);Kt(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...tl(o||".",{relative:e})},d=Hi();if(o==null){c.search=d.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(f=>f==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let f=p.toString();c.search=f?`?${f}`:""}}return(!o||o===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:gn([i,c.pathname])),Zs(c)}function Vb(o,e={}){let i=de.useContext(d0);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=b0("useViewTransitionState"),l=tl(o,{relative:e.relative});if(!i.isTransitioning)return!1;let c=yn(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=yn(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Qc(l.pathname,d)!=null||Qc(l.pathname,c)!=null}[...Tb];const Gb=()=>{const{pathname:o}=Hi();return de.useEffect(()=>{o==="/"&&window.scrollTo(0,0)},[o]),null},Wb=[{id:"home",path:"/"},{id:"services",path:"/"},{id:"philosophy",path:"/"},{id:"work",path:"/projects"},{id:"reviews",path:"/reviews"},{id:"skills",path:"/reviews"},{id:"contact",path:"/contact"}],jb=96;function r_(){const o=window.scrollY+jb;let e="/";for(const{id:i,path:a}of Wb){const l=document.getElementById(i);l&&window.scrollY+l.getBoundingClientRect().top<=o&&(e=a)}return e}function qb(){const[o,e]=de.useState(r_);return de.useEffect(()=>{let i=0;const a=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{e(r_())})};a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);const l=new ResizeObserver(a);return l.observe(document.documentElement),()=>{cancelAnimationFrame(i),window.removeEventListener("scroll",a),window.removeEventListener("resize",a),l.disconnect()}},[]),o}const Xb=[{path:"/",label:"Home"},{path:"/projects",label:"Work"},{path:"/reviews",label:"Reviews"},{path:"/contact",label:"Contact"}],$b=()=>{const o=Hi(),e=qb(),[i,a]=de.useState(!1),[l,c]=de.useState(!0);return de.useEffect(()=>{a(!1)},[o.pathname]),de.useEffect(()=>{const d=document.querySelector(".hero--3d");if(!d){c(!1);return}const p=()=>{const m=d.getBoundingClientRect().bottom;c(m>48)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[o.pathname]),z.jsx("header",{className:`header${l?" header--dark":""}`,children:z.jsxs("div",{className:"header__inner container",children:[z.jsxs(eu,{to:"/",className:"header__brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[z.jsx("span",{className:"header__brand-name",children:"Taliba Sadiq"}),z.jsx("span",{className:"header__brand-tag",children:"Software Architect & AI Engineer"})]}),z.jsxs("button",{className:`header__burger${i?" header__burger--open":""}`,onClick:()=>a(d=>!d),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,children:[z.jsx("span",{}),z.jsx("span",{}),z.jsx("span",{})]}),z.jsx("nav",{className:`header__nav${i?" header__nav--open":""}`,"aria-label":"Main navigation",children:z.jsx("ul",{className:"header__list",children:Xb.map(({path:d,label:p})=>{const m=e===d;return z.jsx("li",{children:z.jsx(eu,{to:d,className:`header__link ${m?"header__link--active":""}`,"aria-current":m?"page":void 0,onClick:()=>{a(!1),d==="/"&&o.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:p})},d)})})})]})})},i_="",Zb="https://api.web3forms.com/submit",Jb=()=>{const[o,e]=de.useState("idle"),[i,a]=de.useState(""),[l,c]=de.useState(!1),d=de.useCallback(async p=>{if(p.preventDefault(),a(""),!i_.trim()){e("error"),a("Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com).");return}const m=p.currentTarget,f=new FormData(m),v=String(f.get("name")||"").trim(),b=String(f.get("email")||"").trim(),g=String(f.get("company")||"").trim(),S=String(f.get("phone")||"").trim(),x=String(f.get("project_type")||"").trim(),R=String(f.get("timeline")||"").trim(),_=String(f.get("budget")||"").trim(),y=String(f.get("details")||"").trim();if(String(f.get("botcheck")||"").trim())return;if(!v||!b||!y){a("Please fill in your name, email, and project details.");return}const A=[g&&`Company / org: ${g}`,S&&`Phone: ${S}`,x&&`Project type: ${x}`,R&&`Timeline: ${R}`,_&&`Budget / engagement: ${_}`,"","Project details:",y].filter(Boolean).join(`
`);e("sending");try{const D=await fetch(Zb,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:i_,name:v,email:b,...S?{phone:S}:{},subject:`Portfolio inquiry: ${x||"Project"} (${v})`,message:A})}),N=await D.json().catch(()=>({}));D.ok&&N.success!==!1?(e("success"),m.reset()):(e("error"),a(N.message||"Something went wrong. Please try again in a moment."))}catch{e("error"),a("Network error. Check your connection and try again.")}},[]);return z.jsx("section",{id:"contact",className:"section section--contact contact-section contact-shell reveal","aria-labelledby":"contact-heading",children:z.jsxs("div",{className:"container contact-shell__inner",children:[z.jsxs("header",{className:"contact-shell__intro",children:[z.jsx("p",{className:"contact-shell__eyebrow",children:"Contact"}),z.jsx("h2",{id:"contact-heading",className:"contact-shell__title",children:"Let's build something together"}),z.jsx("p",{className:"contact-shell__lead",children:"Have a product that needs architecture, AI integration, or full-stack development? Tell me what you're working on. I'll reply within one business day."}),z.jsxs("ul",{className:"contact-shell__trust",children:[z.jsx("li",{children:"Specific questions get faster answers"}),z.jsx("li",{children:"Mention in the details if you need an NDA first"}),z.jsx("li",{children:"Project inquiries only (no recruiter blasts)"})]})]}),z.jsx("div",{className:"contact-form-panel",children:o==="success"?z.jsxs("div",{className:"contact-form-panel__success",role:"status",children:[z.jsx("p",{className:"contact-form-panel__success-icon","aria-hidden":"true",children:"✓"}),z.jsx("h3",{className:"contact-form-panel__success-title",children:"Message sent"}),z.jsx("p",{className:"contact-form-panel__success-text",children:"Your note is in my inbox. I'll reply in the same thread."}),z.jsx("button",{type:"button",className:"btn btn--primary contact-form-panel__reset",onClick:()=>e("idle"),children:"Send another message"})]}):z.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Name *"}),z.jsx("input",{className:"contact-form__input",name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your name"})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Email *"}),z.jsx("input",{className:"contact-form__input",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"you@company.com"})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"What are you working on? *"}),z.jsx("textarea",{className:"contact-form__textarea",name:"details",required:!0,rows:5,placeholder:"Stack, goals, constraints, and what done looks like."})]}),!l&&z.jsx("button",{type:"button",className:"contact-form__toggle",onClick:()=>c(!0),children:"+ Add more details (company, timeline, budget…)"}),l&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Company / organization"}),z.jsx("input",{className:"contact-form__input",name:"company",type:"text",autoComplete:"organization",placeholder:"Optional"})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Phone (optional)"}),z.jsx("input",{className:"contact-form__input",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"+1 ..."})]})]}),z.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Project type"}),z.jsxs("select",{className:"contact-form__input contact-form__select",name:"project_type",defaultValue:"",children:[z.jsx("option",{value:"",children:"Select..."}),z.jsx("option",{value:"New build: web app",children:"New build: web app"}),z.jsx("option",{value:"New build: marketing site",children:"New build: marketing site"}),z.jsx("option",{value:"New build: mobile app",children:"New build: mobile app"}),z.jsx("option",{value:"New build: mobile & web",children:"New build: mobile & web"}),z.jsx("option",{value:"Refactor / stabilize codebase",children:"Refactor / stabilize codebase"}),z.jsx("option",{value:"Performance / reliability",children:"Performance / reliability"}),z.jsx("option",{value:"Architecture / technical review",children:"Architecture / technical review"}),z.jsx("option",{value:"AI / product integration",children:"AI / product integration"}),z.jsx("option",{value:"Other",children:"Other"})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Ideal timeline"}),z.jsxs("select",{className:"contact-form__input contact-form__select",name:"timeline",defaultValue:"",children:[z.jsx("option",{value:"",children:"Optional"}),z.jsx("option",{value:"Planning phase / TBD",children:"Planning phase / TBD"}),z.jsx("option",{value:"Rush (under 2 weeks)",children:"Rush (under 2 weeks)"}),z.jsx("option",{value:"2-4 weeks",children:"2-4 weeks"}),z.jsx("option",{value:"1-3 months",children:"1-3 months"}),z.jsx("option",{value:"3-6 months",children:"3-6 months"}),z.jsx("option",{value:"6+ months or ongoing",children:"6+ months or ongoing"}),z.jsx("option",{value:"Flexible / open schedule",children:"Flexible / open schedule"})]})]})]}),z.jsxs("label",{className:"contact-form__field",children:[z.jsx("span",{className:"contact-form__label",children:"Budget / engagement (optional)"}),z.jsx("input",{className:"contact-form__input",name:"budget",type:"text",placeholder:"e.g. fixed scope, monthly retainer, TBD"})]})]}),z.jsxs("label",{className:"contact-form__hp","aria-hidden":"true",children:[z.jsx("span",{children:"Leave empty"}),z.jsx("input",{type:"text",name:"botcheck",tabIndex:-1,autoComplete:"off"})]}),o==="error"&&i&&z.jsx("p",{className:"contact-form__error",role:"alert",children:i}),z.jsx("button",{type:"submit",className:"btn btn--primary contact-form__submit",disabled:o==="sending",children:o==="sending"?"Sending...":"Send message"})]})})]})})};function Kb(){de.useEffect(()=>{const o=document.querySelectorAll(".reveal");if(!o.length)return;const e=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.add("reveal--visible"),e.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return o.forEach(i=>e.observe(i)),()=>e.disconnect()},[])}const Yb={"/projects":"work","/about":"home","/reviews":"reviews","/contact":"contact"};function Qb(){const o=Hi(),e=p0();Kb();const i=de.useCallback((a,l)=>{const c=document.getElementById(a);c?c.scrollIntoView({behavior:"smooth"}):e(l)},[e]);return de.useLayoutEffect(()=>{var a;const l=Yb[o.pathname];l&&((a=document.getElementById(l))==null||a.scrollIntoView({behavior:"smooth"}))},[o.pathname]),{scrollTo:i}}/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const tp="183",eM=0,n_=1,tM=2,Xc=1,rM=2,Xs=3,aa=0,Vr=1,pn=2,vn=0,No=1,tu=2,a_=3,o_=4,iM=5,Ra=100,nM=101,aM=102,oM=103,sM=104,lM=200,cM=201,uM=202,dM=203,tf=204,rf=205,hM=206,fM=207,pM=208,mM=209,gM=210,vM=211,_M=212,yM=213,SM=214,nf=0,af=1,of=2,Io=3,sf=4,lf=5,cf=6,uf=7,M0=0,xM=1,bM=2,ki=0,E0=1,T0=2,w0=3,A0=4,C0=5,R0=6,P0=7,N0=300,Ia=301,Uo=302,yh=303,Sh=304,uu=306,df=1e3,mn=1001,hf=1002,Er=1003,MM=1004,_c=1005,Rr=1006,xh=1007,Na=1008,ci=1009,L0=1010,I0=1011,Js=1012,rp=1013,Oi=1014,Ui=1015,Sn=1016,ip=1017,np=1018,Ks=1020,U0=35902,D0=35899,k0=1021,F0=1022,bi=1023,xn=1026,La=1027,O0=1028,ap=1029,Do=1030,op=1031,sp=1033,$c=33776,Zc=33777,Jc=33778,Kc=33779,ff=35840,pf=35841,mf=35842,gf=35843,vf=36196,_f=37492,yf=37496,Sf=37488,xf=37489,bf=37490,Mf=37491,Ef=37808,Tf=37809,wf=37810,Af=37811,Cf=37812,Rf=37813,Pf=37814,Nf=37815,Lf=37816,If=37817,Uf=37818,Df=37819,kf=37820,Ff=37821,Of=36492,Bf=36494,zf=36495,Hf=36283,Vf=36284,Gf=36285,Wf=36286,EM=3200,TM=0,wM=1,ia="",si="srgb",ko="srgb-linear",ru="linear",It="srgb",go=7680,s_=519,AM=512,CM=513,RM=514,lp=515,PM=516,NM=517,cp=518,LM=519,l_=35044,c_="300 es",Di=2e3,iu=2001;function IM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function nu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function UM(){const o=nu("canvas");return o.style.display="block",o}const u_={};function d_(...o){const e="THREE."+o.shift();console.log(e,...o)}function B0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function nt(...o){o=B0(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Mt(...o){o=B0(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function au(...o){const e=o.join(" ");e in u_||(u_[e]=!0,nt(...o))}function DM(o,e,i){return new Promise(function(a,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const kM={[nf]:af,[of]:cf,[sf]:uf,[Io]:lf,[af]:nf,[cf]:of,[uf]:sf,[lf]:Io};class Bo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ar=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,jf=180/Math.PI;function rl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ar[o&255]+Ar[o>>8&255]+Ar[o>>16&255]+Ar[o>>24&255]+"-"+Ar[e&255]+Ar[e>>8&255]+"-"+Ar[e>>16&15|64]+Ar[e>>24&255]+"-"+Ar[i&63|128]+Ar[i>>8&255]+"-"+Ar[i>>16&255]+Ar[i>>24&255]+Ar[a&255]+Ar[a>>8&255]+Ar[a>>16&255]+Ar[a>>24&255]).toLowerCase()}function gt(o,e,i){return Math.max(e,Math.min(i,o))}function FM(o,e){return(o%e+e)%e}function Mh(o,e,i){return(1-i)*o+i*e}function Bs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hr(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,i=0){Bt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*l+e.x,this.y=c*l+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,d,p){let m=a[l+0],f=a[l+1],v=a[l+2],b=a[l+3],g=c[d+0],S=c[d+1],x=c[d+2],R=c[d+3];if(b!==R||m!==g||f!==S||v!==x){let _=m*g+f*S+v*x+b*R;_<0&&(g=-g,S=-S,x=-x,R=-R,_=-_);let y=1-p;if(_<.9995){const A=Math.acos(_),D=Math.sin(A);y=Math.sin(y*A)/D,p=Math.sin(p*A)/D,m=m*y+g*p,f=f*y+S*p,v=v*y+x*p,b=b*y+R*p}else{m=m*y+g*p,f=f*y+S*p,v=v*y+x*p,b=b*y+R*p;const A=1/Math.sqrt(m*m+f*f+v*v+b*b);m*=A,f*=A,v*=A,b*=A}}e[i]=m,e[i+1]=f,e[i+2]=v,e[i+3]=b}static multiplyQuaternionsFlat(e,i,a,l,c,d){const p=a[l],m=a[l+1],f=a[l+2],v=a[l+3],b=c[d],g=c[d+1],S=c[d+2],x=c[d+3];return e[i]=p*x+v*b+m*S-f*g,e[i+1]=m*x+v*g+f*b-p*S,e[i+2]=f*x+v*S+p*g-m*b,e[i+3]=v*x-p*b-m*g-f*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,f=p(a/2),v=p(l/2),b=p(c/2),g=m(a/2),S=m(l/2),x=m(c/2);switch(d){case"XYZ":this._x=g*v*b+f*S*x,this._y=f*S*b-g*v*x,this._z=f*v*x+g*S*b,this._w=f*v*b-g*S*x;break;case"YXZ":this._x=g*v*b+f*S*x,this._y=f*S*b-g*v*x,this._z=f*v*x-g*S*b,this._w=f*v*b+g*S*x;break;case"ZXY":this._x=g*v*b-f*S*x,this._y=f*S*b+g*v*x,this._z=f*v*x+g*S*b,this._w=f*v*b-g*S*x;break;case"ZYX":this._x=g*v*b-f*S*x,this._y=f*S*b+g*v*x,this._z=f*v*x-g*S*b,this._w=f*v*b+g*S*x;break;case"YZX":this._x=g*v*b+f*S*x,this._y=f*S*b+g*v*x,this._z=f*v*x-g*S*b,this._w=f*v*b-g*S*x;break;case"XZY":this._x=g*v*b-f*S*x,this._y=f*S*b-g*v*x,this._z=f*v*x+g*S*b,this._w=f*v*b+g*S*x;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],f=i[2],v=i[6],b=i[10],g=a+p+b;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-f)*S,this._z=(d-l)*S}else if(a>p&&a>b){const S=2*Math.sqrt(1+a-p-b);this._w=(v-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+f)/S}else if(p>b){const S=2*Math.sqrt(1+p-a-b);this._w=(c-f)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+b-a-p);this._w=(d-l)/S,this._x=(c+f)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,f=i._z,v=i._w;return this._x=a*v+d*p+l*f-c*m,this._y=l*v+d*m+c*p-a*f,this._z=c*v+d*f+a*m-l*p,this._w=d*v-a*p-l*m-c*f,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(a=-a,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const f=Math.acos(p),v=Math.sin(f);m=Math.sin(m*f)/v,i=Math.sin(i*f)/v,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,a=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(h_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,f=2*(d*l-p*a),v=2*(p*i-c*l),b=2*(c*a-d*i);return this.x=i+m*f+d*b-p*v,this.y=a+m*v+p*f-c*b,this.z=l+m*b+c*v-d*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-a*m,this.z=a*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new ie,h_=new zo;class lt{constructor(e,i,a,l,c,d,p,m,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,d,p,m,f)}set(e,i,a,l,c,d,p,m,f){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=a,v[7]=d,v[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,d=a[0],p=a[3],m=a[6],f=a[1],v=a[4],b=a[7],g=a[2],S=a[5],x=a[8],R=l[0],_=l[3],y=l[6],A=l[1],D=l[4],N=l[7],F=l[2],k=l[5],O=l[8];return c[0]=d*R+p*A+m*F,c[3]=d*_+p*D+m*k,c[6]=d*y+p*N+m*O,c[1]=f*R+v*A+b*F,c[4]=f*_+v*D+b*k,c[7]=f*y+v*N+b*O,c[2]=g*R+S*A+x*F,c[5]=g*_+S*D+x*k,c[8]=g*y+S*N+x*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8];return i*d*v-i*p*f-a*c*v+a*p*m+l*c*f-l*d*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8],b=v*d-p*f,g=p*m-v*c,S=f*c-d*m,x=i*b+a*g+l*S;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/x;return e[0]=b*R,e[1]=(l*f-v*a)*R,e[2]=(p*a-l*d)*R,e[3]=g*R,e[4]=(v*i-l*m)*R,e[5]=(l*c-p*i)*R,e[6]=S*R,e[7]=(a*m-f*i)*R,e[8]=(d*i-a*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,d,p){const m=Math.cos(c),f=Math.sin(c);return this.set(a*m,a*f,-a*(m*d+f*p)+d+e,-l*f,l*m,-l*(-f*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Th.makeScale(e,i)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,i){return this.premultiply(Th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new lt,f_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OM(){const o={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=_n(l.r),l.g=_n(l.g),l.b=_n(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Lo(l.r),l.g=Lo(l.g),l.b=Lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ia?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return au("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return au("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ko]:{primaries:e,whitePoint:a,transfer:ru,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:a,transfer:It,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const St=OM();function _n(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vo;class BM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{vo===void 0&&(vo=nu("canvas")),vo.width=e.width,vo.height=e.height;const l=vo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=vo}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_n(c[d]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(_n(i[a]/255)*255):i[a]=_n(i[a]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(wh(l[d].image)):c.push(wh(l[d]))}else c=wh(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function wh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?BM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let HM=0;const Ah=new ie;class Lr extends Bo{constructor(e=Lr.DEFAULT_IMAGE,i=Lr.DEFAULT_MAPPING,a=mn,l=mn,c=Rr,d=Na,p=bi,m=ci,f=Lr.DEFAULT_ANISOTROPY,v=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=rl(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=f,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lr.DEFAULT_IMAGE=null;Lr.DEFAULT_MAPPING=N0;Lr.DEFAULT_ANISOTROPY=1;class or{constructor(e=0,i=0,a=0,l=1){or.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*a+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*a+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*a+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*a+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const d=e.elements,p=d[0],m=d[4],f=d[8],v=d[1],b=d[5],g=d[9],S=d[2],x=d[6],R=d[10];if(Math.abs(m-v)<.01&&Math.abs(f-S)<.01&&Math.abs(g-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(f+S)<.1&&Math.abs(g+x)<.1&&Math.abs(p+b+R-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const y=(p+1)/2,A=(b+1)/2,D=(R+1)/2,N=(m+v)/4,F=(f+S)/4,k=(g+x)/4;return y>A&&y>D?y<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(y),l=N/a,c=F/a):A>D?A<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),a=N/l,c=k/l):D<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(D),a=F/c,l=k/c),this.set(a,l,c,i),this}let _=Math.sqrt((x-g)*(x-g)+(f-S)*(f-S)+(v-m)*(v-m));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(f-S)/_,this.z=(v-m)/_,this.w=Math.acos((p+b+R-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this.w=gt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this.w=gt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VM extends Bo{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new or(0,0,e,i),this.scissorTest=!1,this.viewport=new or(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new Lr(l),d=a.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:Rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends VM{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class z0 extends Lr{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Er,this.minFilter=Er,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GM extends Lr{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Er,this.minFilter=Er,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e,i,a,l,c,d,p,m,f,v,b,g,S,x,R,_){tr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,d,p,m,f,v,b,g,S,x,R,_)}set(e,i,a,l,c,d,p,m,f,v,b,g,S,x,R,_){const y=this.elements;return y[0]=e,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=f,y[6]=v,y[10]=b,y[14]=g,y[3]=S,y[7]=x,y[11]=R,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tr().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,a=e.elements,l=1/_o.setFromMatrixColumn(e,0).length(),c=1/_o.setFromMatrixColumn(e,1).length(),d=1/_o.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*d,i[9]=a[9]*d,i[10]=a[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),f=Math.sin(l),v=Math.cos(c),b=Math.sin(c);if(e.order==="XYZ"){const g=d*v,S=d*b,x=p*v,R=p*b;i[0]=m*v,i[4]=-m*b,i[8]=f,i[1]=S+x*f,i[5]=g-R*f,i[9]=-p*m,i[2]=R-g*f,i[6]=x+S*f,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,S=m*b,x=f*v,R=f*b;i[0]=g+R*p,i[4]=x*p-S,i[8]=d*f,i[1]=d*b,i[5]=d*v,i[9]=-p,i[2]=S*p-x,i[6]=R+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,S=m*b,x=f*v,R=f*b;i[0]=g-R*p,i[4]=-d*b,i[8]=x+S*p,i[1]=S+x*p,i[5]=d*v,i[9]=R-g*p,i[2]=-d*f,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,S=d*b,x=p*v,R=p*b;i[0]=m*v,i[4]=x*f-S,i[8]=g*f+R,i[1]=m*b,i[5]=R*f+g,i[9]=S*f-x,i[2]=-f,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,S=d*f,x=p*m,R=p*f;i[0]=m*v,i[4]=R-g*b,i[8]=x*b+S,i[1]=b,i[5]=d*v,i[9]=-p*v,i[2]=-f*v,i[6]=S*b+x,i[10]=g-R*b}else if(e.order==="XZY"){const g=d*m,S=d*f,x=p*m,R=p*f;i[0]=m*v,i[4]=-b,i[8]=f*v,i[1]=g*b+R,i[5]=d*v,i[9]=S*b-x,i[2]=x*b-S,i[6]=p*v,i[10]=R*b+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WM,e,jM)}lookAt(e,i,a){const l=this.elements;return Jr.subVectors(e,i),Jr.lengthSq()===0&&(Jr.z=1),Jr.normalize(),Kn.crossVectors(a,Jr),Kn.lengthSq()===0&&(Math.abs(a.z)===1?Jr.x+=1e-4:Jr.z+=1e-4,Jr.normalize(),Kn.crossVectors(a,Jr)),Kn.normalize(),yc.crossVectors(Jr,Kn),l[0]=Kn.x,l[4]=yc.x,l[8]=Jr.x,l[1]=Kn.y,l[5]=yc.y,l[9]=Jr.y,l[2]=Kn.z,l[6]=yc.z,l[10]=Jr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,d=a[0],p=a[4],m=a[8],f=a[12],v=a[1],b=a[5],g=a[9],S=a[13],x=a[2],R=a[6],_=a[10],y=a[14],A=a[3],D=a[7],N=a[11],F=a[15],k=l[0],O=l[4],E=l[8],P=l[12],ue=l[1],V=l[5],J=l[9],se=l[13],le=l[2],re=l[6],U=l[10],H=l[14],ce=l[3],_e=l[7],L=l[11],K=l[15];return c[0]=d*k+p*ue+m*le+f*ce,c[4]=d*O+p*V+m*re+f*_e,c[8]=d*E+p*J+m*U+f*L,c[12]=d*P+p*se+m*H+f*K,c[1]=v*k+b*ue+g*le+S*ce,c[5]=v*O+b*V+g*re+S*_e,c[9]=v*E+b*J+g*U+S*L,c[13]=v*P+b*se+g*H+S*K,c[2]=x*k+R*ue+_*le+y*ce,c[6]=x*O+R*V+_*re+y*_e,c[10]=x*E+R*J+_*U+y*L,c[14]=x*P+R*se+_*H+y*K,c[3]=A*k+D*ue+N*le+F*ce,c[7]=A*O+D*V+N*re+F*_e,c[11]=A*E+D*J+N*U+F*L,c[15]=A*P+D*se+N*H+F*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],f=e[13],v=e[2],b=e[6],g=e[10],S=e[14],x=e[3],R=e[7],_=e[11],y=e[15],A=m*S-f*g,D=p*S-f*b,N=p*g-m*b,F=d*S-f*v,k=d*g-m*v,O=d*b-p*v;return i*(R*A-_*D+y*N)-a*(x*A-_*F+y*k)+l*(x*D-R*F+y*O)-c*(x*N-R*k+_*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],v=e[8],b=e[9],g=e[10],S=e[11],x=e[12],R=e[13],_=e[14],y=e[15],A=i*p-a*d,D=i*m-l*d,N=i*f-c*d,F=a*m-l*p,k=a*f-c*p,O=l*f-c*m,E=v*R-b*x,P=v*_-g*x,ue=v*y-S*x,V=b*_-g*R,J=b*y-S*R,se=g*y-S*_,le=A*se-D*J+N*V+F*ue-k*P+O*E;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/le;return e[0]=(p*se-m*J+f*V)*re,e[1]=(l*J-a*se-c*V)*re,e[2]=(R*O-_*k+y*F)*re,e[3]=(g*k-b*O-S*F)*re,e[4]=(m*ue-d*se-f*P)*re,e[5]=(i*se-l*ue+c*P)*re,e[6]=(_*N-x*O-y*D)*re,e[7]=(v*O-g*N+S*D)*re,e[8]=(d*J-p*ue+f*E)*re,e[9]=(a*ue-i*J-c*E)*re,e[10]=(x*k-R*N+y*A)*re,e[11]=(b*N-v*k-S*A)*re,e[12]=(p*P-d*V-m*E)*re,e[13]=(i*V-a*P+l*E)*re,e[14]=(R*D-x*F-_*A)*re,e[15]=(v*F-b*D+g*A)*re,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,d=e.x,p=e.y,m=e.z,f=c*d,v=c*p;return this.set(f*d+a,f*p-l*m,f*m+l*p,0,f*p+l*m,v*p+a,v*m-l*d,0,f*m-l*p,v*m+l*d,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,d){return this.set(1,a,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,f=c+c,v=d+d,b=p+p,g=c*f,S=c*v,x=c*b,R=d*v,_=d*b,y=p*b,A=m*f,D=m*v,N=m*b,F=a.x,k=a.y,O=a.z;return l[0]=(1-(R+y))*F,l[1]=(S+N)*F,l[2]=(x-D)*F,l[3]=0,l[4]=(S-N)*k,l[5]=(1-(g+y))*k,l[6]=(_+A)*k,l[7]=0,l[8]=(x+D)*O,l[9]=(_-A)*O,l[10]=(1-(g+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return a.set(1,1,1),i.identity(),this;let d=_o.set(l[0],l[1],l[2]).length();const p=_o.set(l[4],l[5],l[6]).length(),m=_o.set(l[8],l[9],l[10]).length();c<0&&(d=-d),_i.copy(this);const f=1/d,v=1/p,b=1/m;return _i.elements[0]*=f,_i.elements[1]*=f,_i.elements[2]*=f,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=b,_i.elements[9]*=b,_i.elements[10]*=b,i.setFromRotationMatrix(_i),a.x=d,a.y=p,a.z=m,this}makePerspective(e,i,a,l,c,d,p=Di,m=!1){const f=this.elements,v=2*c/(i-e),b=2*c/(a-l),g=(i+e)/(i-e),S=(a+l)/(a-l);let x,R;if(m)x=c/(d-c),R=d*c/(d-c);else if(p===Di)x=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===iu)x=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return f[0]=v,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=b,f[9]=S,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,i,a,l,c,d,p=Di,m=!1){const f=this.elements,v=2/(i-e),b=2/(a-l),g=-(i+e)/(i-e),S=-(a+l)/(a-l);let x,R;if(m)x=1/(d-c),R=d/(d-c);else if(p===Di)x=-2/(d-c),R=-(d+c)/(d-c);else if(p===iu)x=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return f[0]=v,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=b,f[9]=0,f[13]=S,f[2]=0,f[6]=0,f[10]=x,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const _o=new ie,_i=new tr,WM=new ie(0,0,0),jM=new ie(1,1,1),Kn=new ie,yc=new ie,Jr=new ie,m_=new tr,g_=new zo;class bn{constructor(e=0,i=0,a=0,l=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],f=l[5],v=l[9],b=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,f)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,S),this._z=Math.atan2(-d,f)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-gt(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,f));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,f),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qM=0;const v_=new ie,yo=new zo,cn=new tr,Sc=new ie,zs=new ie,XM=new ie,$M=new zo,__=new ie(1,0,0),y_=new ie(0,1,0),S_=new ie(0,0,1),x_={type:"added"},ZM={type:"removed"},So={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Ir extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ir.DEFAULT_UP.clone();const e=new ie,i=new bn,a=new zo,l=new ie(1,1,1);function c(){a.setFromEuler(i,!1)}function d(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tr},normalMatrix:{value:new lt}}),this.matrix=new tr,this.matrixWorld=new tr,this.matrixAutoUpdate=Ir.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(S_,e)}translateOnAxis(e,i){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(S_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Sc.copy(e):Sc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(zs,Sc,this.up):cn.lookAt(Sc,zs,this.up),this.quaternion.setFromRotationMatrix(cn),l&&(cn.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(cn),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),So.child=e,this.dispatchEvent(So),So.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZM),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const c=this.children[a].getObjectByProperty(e,i);if(c!==void 0)return c}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let f=0,v=m.length;f<v;f++){const b=m[f];c(e.shapes,b)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,f=this.material.length;m<f;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),f=d(e.textures),v=d(e.images),b=d(e.shapes),g=d(e.skeletons),S=d(e.animations),x=d(e.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),f.length>0&&(a.textures=f),v.length>0&&(a.images=v),b.length>0&&(a.shapes=b),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),x.length>0&&(a.nodes=x)}return a.object=l,a;function d(p){const m=[];for(const f in p){const v=p[f];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Ir.DEFAULT_UP=new ie(0,1,0);Ir.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends Ir{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,f=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(f&&e.hand){d=!0;for(const R of e.hand.values()){const _=i.getJointPose(R,a),y=this._getHandJoint(f,R);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=f.joints["index-finger-tip"],b=f.joints["thumb-tip"],g=v.position.distanceTo(b.position),S=.02,x=.005;f.inputState.pinching&&g>S+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=S-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),f!==null&&(f.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new xc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class vt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=St.workingColorSpace){return this.r=e,this.g=i,this.b=a,St.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=St.workingColorSpace){if(e=FM(e,1),i=gt(i,0,1),a=gt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,d=2*a-c;this.r=Ph(d,c,e+1/3),this.g=Ph(d,c,e),this.b=Ph(d,c,e-1/3)}return St.colorSpaceToWorking(this,l),this}setStyle(e,i=si){function a(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const a=V0[e.toLowerCase()];return a!==void 0?this.setHex(a,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return St.workingToColorSpace(Cr.copy(this),e),Math.round(gt(Cr.r*255,0,255))*65536+Math.round(gt(Cr.g*255,0,255))*256+Math.round(gt(Cr.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=St.workingColorSpace){St.workingToColorSpace(Cr.copy(this),i);const a=Cr.r,l=Cr.g,c=Cr.b,d=Math.max(a,l,c),p=Math.min(a,l,c);let m,f;const v=(p+d)/2;if(p===d)m=0,f=0;else{const b=d-p;switch(f=v<=.5?b/(d+p):b/(2-d-p),d){case a:m=(l-c)/b+(l<c?6:0);break;case l:m=(c-a)/b+2;break;case c:m=(a-l)/b+4;break}m/=6}return e.h=m,e.s=f,e.l=v,e}getRGB(e,i=St.workingColorSpace){return St.workingToColorSpace(Cr.copy(this),i),e.r=Cr.r,e.g=Cr.g,e.b=Cr.b,e}getStyle(e=si){St.workingToColorSpace(Cr.copy(this),e);const i=Cr.r,a=Cr.g,l=Cr.b;return e!==si?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+i,Yn.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(Yn),e.getHSL(bc);const a=Mh(Yn.h,bc.h,i),l=Mh(Yn.s,bc.s,i),c=Mh(Yn.l,bc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cr=new vt;vt.NAMES=V0;class KM extends Ir{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new ie,un=new ie,Nh=new ie,dn=new ie,xo=new ie,bo=new ie,b_=new ie,Lh=new ie,Ih=new ie,Uh=new ie,Dh=new or,kh=new or,Fh=new or;class xi{constructor(e=new ie,i=new ie,a=new ie){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){yi.subVectors(l,i),un.subVectors(a,i),Nh.subVectors(e,i);const d=yi.dot(yi),p=yi.dot(un),m=yi.dot(Nh),f=un.dot(un),v=un.dot(Nh),b=d*f-p*p;if(b===0)return c.set(0,0,0),null;const g=1/b,S=(f*m-p*v)*g,x=(d*v-p*m)*g;return c.set(1-S-x,x,S)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,i,a,l,c,d,p,m){return this.getBarycoord(e,i,a,l,dn)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,dn.x),m.addScaledVector(d,dn.y),m.addScaledVector(p,dn.z),m)}static getInterpolatedAttribute(e,i,a,l,c,d){return Dh.setScalar(0),kh.setScalar(0),Fh.setScalar(0),Dh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,a),Fh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Dh,c.x),d.addScaledVector(kh,c.y),d.addScaledVector(Fh,c.z),d}static isFrontFacing(e,i,a,l){return yi.subVectors(a,i),un.subVectors(e,i),yi.cross(un).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),un.subVectors(this.a,this.b),yi.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let d,p;xo.subVectors(l,a),bo.subVectors(c,a),Lh.subVectors(e,a);const m=xo.dot(Lh),f=bo.dot(Lh);if(m<=0&&f<=0)return i.copy(a);Ih.subVectors(e,l);const v=xo.dot(Ih),b=bo.dot(Ih);if(v>=0&&b<=v)return i.copy(l);const g=m*b-v*f;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(a).addScaledVector(xo,d);Uh.subVectors(e,c);const S=xo.dot(Uh),x=bo.dot(Uh);if(x>=0&&S<=x)return i.copy(c);const R=S*f-m*x;if(R<=0&&f>=0&&x<=0)return p=f/(f-x),i.copy(a).addScaledVector(bo,p);const _=v*x-S*b;if(_<=0&&b-v>=0&&S-x>=0)return b_.subVectors(c,l),p=(b-v)/(b-v+(S-x)),i.copy(l).addScaledVector(b_,p);const y=1/(_+R+g);return d=R*y,p=g*y,i.copy(a).addScaledVector(xo,d).addScaledVector(bo,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Si):Si.fromBufferAttribute(c,d),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Mc.copy(a.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ec.subVectors(this.max,Hs),Mo.subVectors(e.a,Hs),Eo.subVectors(e.b,Hs),To.subVectors(e.c,Hs),Qn.subVectors(Eo,Mo),ea.subVectors(To,Eo),ba.subVectors(Mo,To);let i=[0,-Qn.z,Qn.y,0,-ea.z,ea.y,0,-ba.z,ba.y,Qn.z,0,-Qn.x,ea.z,0,-ea.x,ba.z,0,-ba.x,-Qn.y,Qn.x,0,-ea.y,ea.x,0,-ba.y,ba.x,0];return!Oh(i,Mo,Eo,To,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,Mo,Eo,To,Ec))?!1:(Tc.crossVectors(Qn,ea),i=[Tc.x,Tc.y,Tc.z],Oh(i,Mo,Eo,To,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Si=new ie,Mc=new il,Mo=new ie,Eo=new ie,To=new ie,Qn=new ie,ea=new ie,ba=new ie,Hs=new ie,Ec=new ie,Tc=new ie,Ma=new ie;function Oh(o,e,i,a,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ma.fromArray(o,c);const p=l.x*Math.abs(Ma.x)+l.y*Math.abs(Ma.y)+l.z*Math.abs(Ma.z),m=e.dot(Ma),f=i.dot(Ma),v=a.dot(Ma);if(Math.max(-Math.max(m,f,v),Math.min(m,f,v))>p)return!1}return!0}const cr=new ie,wc=new Bt;let YM=0;class ui{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=l_,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)cr.fromBufferAttribute(this,i),cr.applyMatrix3(e),this.setXYZ(i,cr.x,cr.y,cr.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)cr.fromBufferAttribute(this,i),cr.applyMatrix4(e),this.setXYZ(i,cr.x,cr.y,cr.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)cr.fromBufferAttribute(this,i),cr.applyNormalMatrix(e),this.setXYZ(i,cr.x,cr.y,cr.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)cr.fromBufferAttribute(this,i),cr.transformDirection(e),this.setXYZ(i,cr.x,cr.y,cr.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=Bs(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Hr(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hr(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hr(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hr(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hr(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Hr(i,this.array),a=Hr(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Hr(i,this.array),a=Hr(a,this.array),l=Hr(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Hr(i,this.array),a=Hr(a,this.array),l=Hr(l,this.array),c=Hr(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class G0 extends ui{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class W0 extends ui{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class di extends ui{constructor(e,i,a){super(new Float32Array(e),i,a)}}const QM=new il,Vs=new ie,Bh=new ie;class nl{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):QM.setFromPoints(e).getCenter(a);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const i=Vs.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Vs,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Bh)),this.expandByPoint(Vs.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e1=0;const oi=new tr,zh=new Ir,wo=new ie,Kr=new il,Gs=new il,Sr=new ie;class Yr extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IM(e)?W0:G0)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,a){return oi.makeTranslation(e,i,a),this.applyMatrix4(oi),this}scale(e,i,a){return oi.makeScale(e,i,a),this.applyMatrix4(oi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new di(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];Kr.setFromBufferAttribute(c),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,Kr.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,Kr.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(Kr.min),this.boundingBox.expandByPoint(Kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const a=this.boundingSphere.center;if(Kr.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Gs.setFromBufferAttribute(p),this.morphTargetsRelative?(Sr.addVectors(Kr.min,Gs.min),Kr.expandByPoint(Sr),Sr.addVectors(Kr.max,Gs.max),Kr.expandByPoint(Sr)):(Kr.expandByPoint(Gs.min),Kr.expandByPoint(Gs.max))}Kr.getCenter(a);let l=0;for(let c=0,d=e.count;c<d;c++)Sr.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Sr));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let f=0,v=p.count;f<v;f++)Sr.fromBufferAttribute(p,f),m&&(wo.fromBufferAttribute(e,f),Sr.add(wo)),l=Math.max(l,a.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<a.count;E++)p[E]=new ie,m[E]=new ie;const f=new ie,v=new ie,b=new ie,g=new Bt,S=new Bt,x=new Bt,R=new ie,_=new ie;function y(E,P,ue){f.fromBufferAttribute(a,E),v.fromBufferAttribute(a,P),b.fromBufferAttribute(a,ue),g.fromBufferAttribute(c,E),S.fromBufferAttribute(c,P),x.fromBufferAttribute(c,ue),v.sub(f),b.sub(f),S.sub(g),x.sub(g);const V=1/(S.x*x.y-x.x*S.y);isFinite(V)&&(R.copy(v).multiplyScalar(x.y).addScaledVector(b,-S.y).multiplyScalar(V),_.copy(b).multiplyScalar(S.x).addScaledVector(v,-x.x).multiplyScalar(V),p[E].add(R),p[P].add(R),p[ue].add(R),m[E].add(_),m[P].add(_),m[ue].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let E=0,P=A.length;E<P;++E){const ue=A[E],V=ue.start,J=ue.count;for(let se=V,le=V+J;se<le;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new ie,N=new ie,F=new ie,k=new ie;function O(E){F.fromBufferAttribute(l,E),k.copy(F);const P=p[E];D.copy(P),D.sub(F.multiplyScalar(F.dot(P))).normalize(),N.crossVectors(k,P);const ue=N.dot(m[E])<0?-1:1;d.setXYZW(E,D.x,D.y,D.z,ue)}for(let E=0,P=A.length;E<P;++E){const ue=A[E],V=ue.start,J=ue.count;for(let se=V,le=V+J;se<le;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ie,c=new ie,d=new ie,p=new ie,m=new ie,f=new ie,v=new ie,b=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const x=e.getX(g+0),R=e.getX(g+1),_=e.getX(g+2);l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,_),v.subVectors(d,c),b.subVectors(l,c),v.cross(b),p.fromBufferAttribute(a,x),m.fromBufferAttribute(a,R),f.fromBufferAttribute(a,_),p.add(v),m.add(v),f.add(v),a.setXYZ(x,p.x,p.y,p.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(_,f.x,f.y,f.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),b.subVectors(l,c),v.cross(b),a.setXYZ(g+0,v.x,v.y,v.z),a.setXYZ(g+1,v.x,v.y,v.z),a.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)Sr.fromBufferAttribute(e,i),Sr.normalize(),e.setXYZ(i,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function e(p,m){const f=p.array,v=p.itemSize,b=p.normalized,g=new f.constructor(m.length*v);let S=0,x=0;for(let R=0,_=m.length;R<_;R++){p.isInterleavedBufferAttribute?S=m[R]*p.data.stride+p.offset:S=m[R]*v;for(let y=0;y<v;y++)g[x++]=f[S++]}return new ui(g,v,b)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yr,a=this.index.array,l=this.attributes;for(const p in l){const m=l[p],f=e(m,a);i.setAttribute(p,f)}const c=this.morphAttributes;for(const p in c){const m=[],f=c[p];for(let v=0,b=f.length;v<b;v++){const g=f[v],S=e(g,a);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const f=d[p];i.addGroup(f.start,f.count,f.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const f in m)m[f]!==void 0&&(e[f]=m[f]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const f=a[m];e.data.attributes[m]=f.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const f=this.morphAttributes[m],v=[];for(let b=0,g=f.length;b<g;b++){const S=f[b];v.push(S.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const f in l){const v=l[f];this.setAttribute(f,v.clone(i))}const c=e.morphAttributes;for(const f in c){const v=[],b=c[f];for(let g=0,S=b.length;g<S;g++)v.push(b[g].clone(i));this.morphAttributes[f]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let f=0,v=d.length;f<v;f++){const b=d[f];this.addGroup(b.start,b.count,b.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let t1=0;class Ho extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=No,this.side=aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=rf,this.blendEquation=Ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(a.blending=this.blending),this.side!==aa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==tf&&(a.blendSrc=this.blendSrc),this.blendDst!==rf&&(a.blendDst=this.blendDst),this.blendEquation!==Ra&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(a.stencilFail=this.stencilFail),this.stencilZFail!==go&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fn=new ie,Hh=new ie,Ac=new ie,ta=new ie,Vh=new ie,Cc=new ie,Gh=new ie;class dp{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fn.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,i),fn.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Hh.copy(e).add(i).multiplyScalar(.5),Ac.copy(i).sub(e).normalize(),ta.copy(this.origin).sub(Hh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Ac),p=ta.dot(this.direction),m=-ta.dot(Ac),f=ta.lengthSq(),v=Math.abs(1-d*d);let b,g,S,x;if(v>0)if(b=d*m-p,g=d*p-m,x=c*v,b>=0)if(g>=-x)if(g<=x){const R=1/v;b*=R,g*=R,S=b*(b+d*g+2*p)+g*(d*b+g+2*m)+f}else g=c,b=Math.max(0,-(d*g+p)),S=-b*b+g*(g+2*m)+f;else g=-c,b=Math.max(0,-(d*g+p)),S=-b*b+g*(g+2*m)+f;else g<=-x?(b=Math.max(0,-(-d*c+p)),g=b>0?-c:Math.min(Math.max(-c,-m),c),S=-b*b+g*(g+2*m)+f):g<=x?(b=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+f):(b=Math.max(0,-(d*c+p)),g=b>0?c:Math.min(Math.max(-c,-m),c),S=-b*b+g*(g+2*m)+f);else g=d>0?-c:c,b=Math.max(0,-(d*g+p)),S=-b*b+g*(g+2*m)+f;return a&&a.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(Hh).addScaledVector(Ac,g),S}intersectSphere(e,i){fn.subVectors(e.center,this.origin);const a=fn.dot(this.direction),l=fn.dot(fn)-a*a,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=a-d,m=a+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,d,p,m;const f=1/this.direction.x,v=1/this.direction.y,b=1/this.direction.z,g=this.origin;return f>=0?(a=(e.min.x-g.x)*f,l=(e.max.x-g.x)*f):(a=(e.max.x-g.x)*f,l=(e.min.x-g.x)*f),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),a>d||c>l||((c>a||isNaN(a))&&(a=c),(d<l||isNaN(l))&&(l=d),b>=0?(p=(e.min.z-g.z)*b,m=(e.max.z-g.z)*b):(p=(e.max.z-g.z)*b,m=(e.min.z-g.z)*b),a>m||p>l)||((p>a||a!==a)&&(a=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,i,a,l,c){Vh.subVectors(i,e),Cc.subVectors(a,e),Gh.crossVectors(Vh,Cc);let d=this.direction.dot(Gh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ta.subVectors(this.origin,e);const m=p*this.direction.dot(Cc.crossVectors(ta,Cc));if(m<0)return null;const f=p*this.direction.dot(Vh.cross(ta));if(f<0||m+f>d)return null;const v=-p*ta.dot(Gh);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0 extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=M0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const M_=new tr,Ea=new dp,Rc=new nl,E_=new ie,Pc=new ie,Nc=new ie,Lc=new ie,Wh=new ie,Ic=new ie,T_=new ie,Uc=new ie;class Mn extends Ir{constructor(e=new Yr,i=new j0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,f=c.length;m<f;m++){const v=p[m],b=c[m];v!==0&&(Wh.fromBufferAttribute(b,e),d?Ic.addScaledVector(Wh,v):Ic.addScaledVector(Wh.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Rc.copy(a.boundingSphere),Rc.applyMatrix4(c),Ea.copy(e.ray).recast(e.near),!(Rc.containsPoint(Ea.origin)===!1&&(Ea.intersectSphere(Rc,E_)===null||Ea.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(M_.copy(c).invert(),Ea.copy(e.ray).applyMatrix4(M_),!(a.boundingBox!==null&&Ea.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Ea)))}_computeIntersections(e,i,a){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,f=c.attributes.uv,v=c.attributes.uv1,b=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let x=0,R=g.length;x<R;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,S.start),D=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let N=A,F=D;N<F;N+=3){const k=p.getX(N),O=p.getX(N+1),E=p.getX(N+2);l=Dc(this,y,e,a,f,v,b,k,O,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const x=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let _=x,y=R;_<y;_+=3){const A=p.getX(_),D=p.getX(_+1),N=p.getX(_+2);l=Dc(this,d,e,a,f,v,b,A,D,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let x=0,R=g.length;x<R;x++){const _=g[x],y=d[_.materialIndex],A=Math.max(_.start,S.start),D=Math.min(m.count,Math.min(_.start+_.count,S.start+S.count));for(let N=A,F=D;N<F;N+=3){const k=N,O=N+1,E=N+2;l=Dc(this,y,e,a,f,v,b,k,O,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const x=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let _=x,y=R;_<y;_+=3){const A=_,D=_+1,N=_+2;l=Dc(this,d,e,a,f,v,b,A,D,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function r1(o,e,i,a,l,c,d,p){let m;if(e.side===Vr?m=a.intersectTriangle(d,c,l,!0,p):m=a.intersectTriangle(l,c,d,e.side===aa,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(o.matrixWorld);const f=i.ray.origin.distanceTo(Uc);return f<i.near||f>i.far?null:{distance:f,point:Uc.clone(),object:o}}function Dc(o,e,i,a,l,c,d,p,m,f){o.getVertexPosition(p,Pc),o.getVertexPosition(m,Nc),o.getVertexPosition(f,Lc);const v=r1(o,e,i,a,Pc,Nc,Lc,T_);if(v){const b=new ie;xi.getBarycoord(T_,Pc,Nc,Lc,b),l&&(v.uv=xi.getInterpolatedAttribute(l,p,m,f,b,new Bt)),c&&(v.uv1=xi.getInterpolatedAttribute(c,p,m,f,b,new Bt)),d&&(v.normal=xi.getInterpolatedAttribute(d,p,m,f,b,new ie),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:f,normal:new ie,materialIndex:0};xi.getNormal(Pc,Nc,Lc,g.normal),v.face=g,v.barycoord=b}return v}class i1 extends Lr{constructor(e=null,i=1,a=1,l,c,d,p,m,f=Er,v=Er,b,g){super(null,d,p,m,f,v,l,c,b,g),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new ie,n1=new ie,a1=new lt;class Ca{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=jh.subVectors(a,i).cross(n1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(jh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||a1.getNormalMatrix(e),l=this.coplanarPoint(jh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ta=new nl,o1=new Bt(.5,.5),kc=new ie;class q0{constructor(e=new Ca,i=new Ca,a=new Ca,l=new Ca,c=new Ca,d=new Ca){this.planes=[e,i,a,l,c,d]}set(e,i,a,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Di,a=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],f=c[3],v=c[4],b=c[5],g=c[6],S=c[7],x=c[8],R=c[9],_=c[10],y=c[11],A=c[12],D=c[13],N=c[14],F=c[15];if(l[0].setComponents(f-d,S-v,y-x,F-A).normalize(),l[1].setComponents(f+d,S+v,y+x,F+A).normalize(),l[2].setComponents(f+p,S+b,y+R,F+D).normalize(),l[3].setComponents(f-p,S-b,y-R,F-D).normalize(),a)l[4].setComponents(m,g,_,N).normalize(),l[5].setComponents(f-m,S-g,y-_,F-N).normalize();else if(l[4].setComponents(f-m,S-g,y-_,F-N).normalize(),i===Di)l[5].setComponents(f+m,S+g,y+_,F+N).normalize();else if(i===iu)l[5].setComponents(m,g,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ta)}intersectsSprite(e){Ta.center.set(0,0,0);const i=o1.distanceTo(e.center);return Ta.radius=.7071067811865476+i,Ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ta)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends Ho{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new ie,su=new ie,w_=new tr,Ws=new dp,Fc=new nl,qh=new ie,A_=new ie;class s1 extends Ir{constructor(e=new Yr,i=new X0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),su.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=ou.distanceTo(su);e.setAttribute("lineDistance",new di(a,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;w_.copy(l).invert(),Ws.copy(e.ray).applyMatrix4(w_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,f=this.isLineSegments?2:1,v=a.index,b=a.attributes.position;if(v!==null){const g=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let x=g,R=S-1;x<R;x+=f){const _=v.getX(x),y=v.getX(x+1),A=Oc(this,e,Ws,m,_,y,x);A&&i.push(A)}if(this.isLineLoop){const x=v.getX(S-1),R=v.getX(g),_=Oc(this,e,Ws,m,x,R,S-1);_&&i.push(_)}}else{const g=Math.max(0,d.start),S=Math.min(b.count,d.start+d.count);for(let x=g,R=S-1;x<R;x+=f){const _=Oc(this,e,Ws,m,x,x+1,x);_&&i.push(_)}if(this.isLineLoop){const x=Oc(this,e,Ws,m,S-1,g,S-1);x&&i.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Oc(o,e,i,a,l,c,d){const p=o.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),su.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,su,qh,A_)>a)return;qh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(qh);if(!(m<e.near||m>e.far))return{distance:m,point:A_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const C_=new ie,R_=new ie;class l1 extends s1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)C_.fromBufferAttribute(i,l),R_.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+C_.distanceTo(R_);e.setAttribute("lineDistance",new di(a,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $0 extends Ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new tr,qf=new dp,Bc=new nl,zc=new ie;class c1 extends Ir{constructor(e=new Yr,i=new $0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;P_.copy(l).invert(),qf.copy(e.ray).applyMatrix4(P_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,f=a.index,v=a.attributes.position;if(f!==null){const b=Math.max(0,d.start),g=Math.min(f.count,d.start+d.count);for(let S=b,x=g;S<x;S++){const R=f.getX(S);zc.fromBufferAttribute(v,R),N_(zc,R,m,l,e,i,this)}}else{const b=Math.max(0,d.start),g=Math.min(v.count,d.start+d.count);for(let S=b,x=g;S<x;S++)zc.fromBufferAttribute(v,S),N_(zc,S,m,l,e,i,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function N_(o,e,i,a,l,c,d){const p=qf.distanceSqToPoint(o);if(p<i){const m=new ie;qf.closestPointToPoint(o,m),m.applyMatrix4(a);const f=l.ray.origin.distanceTo(m);if(f<l.near||f>l.far)return;c.push({distance:f,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Z0 extends Lr{constructor(e=[],i=Ia,a,l,c,d,p,m,f,v){super(e,i,a,l,c,d,p,m,f,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends Lr{constructor(e,i,a=Oi,l,c,d,p=Er,m=Er,f,v=xn,b=1){if(v!==xn&&v!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:b};super(g,l,c,d,p,m,v,a,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class u1 extends Ys{constructor(e,i=Oi,a=Ia,l,c,d=Er,p=Er,m,f=xn){const v={width:e,height:e,depth:1},b=[v,v,v,v,v,v];super(e,e,i,a,l,c,d,p,m,f),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends Lr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Yr{constructor(e=1,i=1,a=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],f=[],v=[],b=[];let g=0,S=0;x("z","y","x",-1,-1,a,i,e,d,c,0),x("z","y","x",1,-1,a,i,-e,d,c,1),x("x","z","y",1,1,e,a,i,l,d,2),x("x","z","y",1,-1,e,a,-i,l,d,3),x("x","y","z",1,-1,e,i,a,l,c,4),x("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new di(f,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(b,2));function x(R,_,y,A,D,N,F,k,O,E,P){const ue=N/O,V=F/E,J=N/2,se=F/2,le=k/2,re=O+1,U=E+1;let H=0,ce=0;const _e=new ie;for(let L=0;L<U;L++){const K=L*V-se;for(let ge=0;ge<re;ge++){const Se=ge*ue-J;_e[R]=Se*A,_e[_]=K*D,_e[y]=le,f.push(_e.x,_e.y,_e.z),_e[R]=0,_e[_]=0,_e[y]=k>0?1:-1,v.push(_e.x,_e.y,_e.z),b.push(ge/O),b.push(1-L/E),H+=1}}for(let L=0;L<E;L++)for(let K=0;K<O;K++){const ge=g+K+re*L,Se=g+K+re*(L+1),Ne=g+(K+1)+re*(L+1),qe=g+(K+1)+re*L;m.push(ge,Se,qe),m.push(Se,Ne,qe),ce+=6}p.addGroup(S,ce,P),S+=ce,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Yr{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(a),m=Math.floor(l),f=p+1,v=m+1,b=e/p,g=i/m,S=[],x=[],R=[],_=[];for(let y=0;y<v;y++){const A=y*g-d;for(let D=0;D<f;D++){const N=D*b-c;x.push(N,-A,0),R.push(0,0,1),_.push(D/p),_.push(1-y/m)}}for(let y=0;y<m;y++)for(let A=0;A<p;A++){const D=A+f*y,N=A+f*(y+1),F=A+1+f*(y+1),k=A+1+f*y;S.push(D,N,k),S.push(N,F,k)}this.setIndex(S),this.setAttribute("position",new di(x,3)),this.setAttribute("normal",new di(R,3)),this.setAttribute("uv",new di(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fo(o){const e={};for(const i in o){e[i]={};for(const a in o[i]){const l=o[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function Nr(o){const e={};for(let i=0;i<o.length;i++){const a=Fo(o[i]);for(const l in a)e[l]=a[l]}return e}function d1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function K0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const h1={clone:Fo,merge:Nr};var f1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=d1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?i.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?i.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?i.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?i.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?i.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?i.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?i.uniforms[l]={type:"m4",value:c.toArray()}:i.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class m1 extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g1 extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v1 extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hc=new ie,Vc=new zo,Ni=new ie;class Y0 extends Ir{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tr,this.projectionMatrix=new tr,this.projectionMatrixInverse=new tr,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Hc,Vc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ra=new ie,L_=new Bt,I_=new Bt;class li extends Y0{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ra.x,ra.y).multiplyScalar(-e/ra.z),ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ra.x,ra.y).multiplyScalar(-e/ra.z)}getViewSize(e,i){return this.getViewBounds(e,L_,I_),i.subVectors(I_,L_)}setViewOffset(e,i,a,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,f=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*a/f,l*=d.width/m,a*=d.height/f}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Q0 extends Y0{constructor(e=-1,i=1,a=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,d=a+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=f*this.view.offsetX,d=c+f*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ao=-90,Co=1;class _1 extends Ir{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Ao,Co,e,i);l.layers=this.layers,this.add(l);const c=new li(Ao,Co,e,i);c.layers=this.layers,this.add(c);const d=new li(Ao,Co,e,i);d.layers=this.layers,this.add(d);const p=new li(Ao,Co,e,i);p.layers=this.layers,this.add(p);const m=new li(Ao,Co,e,i);m.layers=this.layers,this.add(m);const f=new li(Ao,Co,e,i);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,d,p,m]=i;for(const f of i)this.remove(f);if(e===Di)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===iu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of i)this.add(f),f.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,f,v]=this.children,b=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(a,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(a,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(b,g,S),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}}class y1 extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function U_(o,e,i,a){const l=S1(a);switch(i){case k0:return o*e;case O0:return o*e/l.components*l.byteLength;case ap:return o*e/l.components*l.byteLength;case Do:return o*e*2/l.components*l.byteLength;case op:return o*e*2/l.components*l.byteLength;case F0:return o*e*3/l.components*l.byteLength;case bi:return o*e*4/l.components*l.byteLength;case sp:return o*e*4/l.components*l.byteLength;case $c:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(o,16)*Math.max(e,8)/4;case ff:case mf:return Math.max(o,8)*Math.max(e,8)/2;case vf:case _f:case Sf:case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yf:case bf:case Mf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Of:case Bf:case zf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hf:case Vf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gf:case Wf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function S1(o){switch(o){case ci:case L0:return{byteLength:1,components:1};case Js:case I0:case Sn:return{byteLength:2,components:1};case ip:case np:return{byteLength:2,components:4};case Oi:case rp:case Ui:return{byteLength:4,components:1};case U0:case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function ey(){let o=null,e=!1,i=null,a=null;function l(c,d){i(c,d),a=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function x1(o){const e=new WeakMap;function i(p,m){const f=p.array,v=p.usage,b=f.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,f,v),p.onUploadCallback();let S;if(f instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)S=o.HALF_FLOAT;else if(f instanceof Uint16Array)p.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=o.SHORT;else if(f instanceof Uint32Array)S=o.UNSIGNED_INT;else if(f instanceof Int32Array)S=o.INT;else if(f instanceof Int8Array)S=o.BYTE;else if(f instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:p.version,size:b}}function a(p,m,f){const v=m.array,b=m.updateRanges;if(o.bindBuffer(f,p),b.length===0)o.bufferSubData(f,0,v);else{b.sort((S,x)=>S.start-x.start);let g=0;for(let S=1;S<b.length;S++){const x=b[g],R=b[S];R.start<=x.start+x.count+1?x.count=Math.max(x.count,R.start+R.count-x.start):(++g,b[g]=R)}b.length=g+1;for(let S=0,x=b.length;S<x;S++){const R=b[S];o.bufferSubData(f,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const f=e.get(p);if(f===void 0)e.set(p,i(p,m));else if(f.version<p.version){if(f.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,p,m),f.version=p.version}}return{get:l,remove:c,update:d}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
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
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D1=`#ifdef USE_IRIDESCENCE
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
#endif`,k1=`#ifdef USE_BUMPMAP
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j1=`#define PI 3.141592653589793
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
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X1=`vec3 transformedNormal = objectNormal;
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
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_FOG
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
#endif`,SE=`uniform sampler2D dfgLUT;
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
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
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
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
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,dT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`#include <common>
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
}`,CT=`#if DEPTH_PACKING == 3200
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
}`,RT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
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
}`,UT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,kT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,OT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,zT=`#define MATCAP
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
}`,HT=`#define NORMAL
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
}`,VT=`#define NORMAL
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
}`,GT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,qT=`#define STANDARD
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
}`,XT=`#define TOON
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
}`,$T=`#define TOON
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
}`,ZT=`uniform float size;
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
}`,JT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,QT=`uniform float rotation;
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
}`,ew=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:b1,alphahash_pars_fragment:M1,alphamap_fragment:E1,alphamap_pars_fragment:T1,alphatest_fragment:w1,alphatest_pars_fragment:A1,aomap_fragment:C1,aomap_pars_fragment:R1,batching_pars_vertex:P1,batching_vertex:N1,begin_vertex:L1,beginnormal_vertex:I1,bsdfs:U1,iridescence_fragment:D1,bumpmap_pars_fragment:k1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:z1,color_fragment:H1,color_pars_fragment:V1,color_pars_vertex:G1,color_vertex:W1,common:j1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:X1,displacementmap_pars_vertex:$1,displacementmap_vertex:Z1,emissivemap_fragment:J1,emissivemap_pars_fragment:K1,colorspace_fragment:Y1,colorspace_pars_fragment:Q1,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:rE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:nE,fog_vertex:aE,fog_pars_vertex:oE,fog_fragment:sE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:hE,lights_pars_begin:fE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:_E,lights_physical_fragment:yE,lights_physical_pars_fragment:SE,lights_fragment_begin:xE,lights_fragment_maps:bE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:AE,map_fragment:CE,map_pars_fragment:RE,map_particle_fragment:PE,map_particle_pars_fragment:NE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:IE,morphinstance_vertex:UE,morphcolor_vertex:DE,morphnormal_vertex:kE,morphtarget_pars_vertex:FE,morphtarget_vertex:OE,normal_fragment_begin:BE,normal_fragment_maps:zE,normal_pars_fragment:HE,normal_pars_vertex:VE,normal_vertex:GE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:$E,opaque_fragment:ZE,packing:JE,premultiplied_alpha_fragment:KE,project_vertex:YE,dithering_fragment:QE,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:rT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:nT,shadowmap_vertex:aT,shadowmask_pars_fragment:oT,skinbase_vertex:sT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:dT,specularmap_pars_fragment:hT,tonemapping_fragment:fT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:vT,uv_pars_vertex:_T,uv_vertex:yT,worldpos_vertex:ST,background_vert:xT,background_frag:bT,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:wT,depth_vert:AT,depth_frag:CT,distance_vert:RT,distance_frag:PT,equirect_vert:NT,equirect_frag:LT,linedashed_vert:IT,linedashed_frag:UT,meshbasic_vert:DT,meshbasic_frag:kT,meshlambert_vert:FT,meshlambert_frag:OT,meshmatcap_vert:BT,meshmatcap_frag:zT,meshnormal_vert:HT,meshnormal_frag:VT,meshphong_vert:GT,meshphong_frag:WT,meshphysical_vert:jT,meshphysical_frag:qT,meshtoon_vert:XT,meshtoon_frag:$T,points_vert:ZT,points_frag:JT,shadow_vert:KT,shadow_frag:YT,sprite_vert:QT,sprite_frag:ew},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ii={basic:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Nr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Nr([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Nr([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Nr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Nr([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Nr([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Nr([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Nr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Nr([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Nr([Ie.common,Ie.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Nr([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ii.physical={uniforms:Nr([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Gc={r:0,b:0,g:0},wa=new bn,tw=new tr;function rw(o,e,i,a,l,c){const d=new vt(0);let p=l===!0?0:1,m,f,v=null,b=0,g=null;function S(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const N=A.backgroundBlurriness>0;D=e.get(D,N)}return D}function x(A){let D=!1;const N=S(A);N===null?_(d,p):N&&N.isColor&&(_(N,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function R(A,D){const N=S(D);N&&(N.isCubeTexture||N.mapping===uu)?(f===void 0&&(f=new Mn(new al(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Fo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),wa.copy(D.backgroundRotation),wa.x*=-1,wa.y*=-1,wa.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(wa)),f.material.toneMapped=St.getTransfer(N.colorSpace)!==It,(v!==N||b!==N.version||g!==o.toneMapping)&&(f.material.needsUpdate=!0,v=N,b=N.version,g=o.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Mn(new du(2,2),new Bi({name:"BackgroundMaterial",uniforms:Fo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=St.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||b!==N.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,b=N.version,g=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,D){A.getRGB(Gc,K0(o)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,c)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,D=1){d.set(A),p=D,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,_(d,p)},render:x,addToRenderList:R,dispose:y}}function iw(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,d=!1;function p(V,J,se,le,re){let U=!1;const H=b(V,le,se,J);c!==H&&(c=H,f(c.object)),U=S(V,le,se,re),U&&x(V,le,se,re),re!==null&&e.update(re,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,N(V,J,se,le),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return o.createVertexArray()}function f(V){return o.bindVertexArray(V)}function v(V){return o.deleteVertexArray(V)}function b(V,J,se,le){const re=le.wireframe===!0;let U=a[J.id];U===void 0&&(U={},a[J.id]=U);const H=V.isInstancedMesh===!0?V.id:0;let ce=U[H];ce===void 0&&(ce={},U[H]=ce);let _e=ce[se.id];_e===void 0&&(_e={},ce[se.id]=_e);let L=_e[re];return L===void 0&&(L=g(m()),_e[re]=L),L}function g(V){const J=[],se=[],le=[];for(let re=0;re<i;re++)J[re]=0,se[re]=0,le[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:le,object:V,attributes:{},index:null}}function S(V,J,se,le){const re=c.attributes,U=J.attributes;let H=0;const ce=se.getAttributes();for(const _e in ce)if(ce[_e].location>=0){const L=re[_e];let K=U[_e];if(K===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==le}function x(V,J,se,le){const re={},U=J.attributes;let H=0;const ce=se.getAttributes();for(const _e in ce)if(ce[_e].location>=0){let L=U[_e];L===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(L=V.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),re[_e]=K,H++}c.attributes=re,c.attributesNum=H,c.index=le}function R(){const V=c.newAttributes;for(let J=0,se=V.length;J<se;J++)V[J]=0}function _(V){y(V,0)}function y(V,J){const se=c.newAttributes,le=c.enabledAttributes,re=c.attributeDivisors;se[V]=1,le[V]===0&&(o.enableVertexAttribArray(V),le[V]=1),re[V]!==J&&(o.vertexAttribDivisor(V,J),re[V]=J)}function A(){const V=c.newAttributes,J=c.enabledAttributes;for(let se=0,le=J.length;se<le;se++)J[se]!==V[se]&&(o.disableVertexAttribArray(se),J[se]=0)}function D(V,J,se,le,re,U,H){H===!0?o.vertexAttribIPointer(V,J,se,re,U):o.vertexAttribPointer(V,J,se,le,re,U)}function N(V,J,se,le){R();const re=le.attributes,U=se.getAttributes(),H=J.defaultAttributeValues;for(const ce in U){const _e=U[ce];if(_e.location>=0){let L=re[ce];if(L===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const K=L.normalized,ge=L.itemSize,Se=e.get(L);if(Se===void 0)continue;const Ne=Se.buffer,qe=Se.type,Q=Se.bytesPerElement,Me=qe===o.INT||qe===o.UNSIGNED_INT||L.gpuType===rp;if(L.isInterleavedBufferAttribute){const be=L.data,et=be.stride,Ye=L.offset;if(be.isInstancedInterleavedBuffer){for(let Be=0;Be<_e.locationSize;Be++)y(_e.location+Be,be.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Be=0;Be<_e.locationSize;Be++)_(_e.location+Be);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Be=0;Be<_e.locationSize;Be++)D(_e.location+Be,ge/_e.locationSize,qe,K,et*Q,(Ye+ge/_e.locationSize*Be)*Q,Me)}else{if(L.isInstancedBufferAttribute){for(let be=0;be<_e.locationSize;be++)y(_e.location+be,L.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let be=0;be<_e.locationSize;be++)_(_e.location+be);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let be=0;be<_e.locationSize;be++)D(_e.location+be,ge/_e.locationSize,qe,K,ge*Q,ge/_e.locationSize*be*Q,Me)}}else if(H!==void 0){const K=H[ce];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(_e.location,K);break;case 3:o.vertexAttrib3fv(_e.location,K);break;case 4:o.vertexAttrib4fv(_e.location,K);break;default:o.vertexAttrib1fv(_e.location,K)}}}}A()}function F(){P();for(const V in a){const J=a[V];for(const se in J){const le=J[se];for(const re in le){const U=le[re];for(const H in U)v(U[H].object),delete U[H];delete le[re]}}delete a[V]}}function k(V){if(a[V.id]===void 0)return;const J=a[V.id];for(const se in J){const le=J[se];for(const re in le){const U=le[re];for(const H in U)v(U[H].object),delete U[H];delete le[re]}}delete a[V.id]}function O(V){for(const J in a){const se=a[J];for(const le in se){const re=se[le];if(re[V.id]===void 0)continue;const U=re[V.id];for(const H in U)v(U[H].object),delete U[H];delete re[V.id]}}}function E(V){for(const J in a){const se=a[J],le=V.isInstancedMesh===!0?V.id:0,re=se[le];if(re!==void 0){for(const U in re){const H=re[U];for(const ce in H)v(H[ce].object),delete H[ce];delete re[U]}delete se[le],Object.keys(se).length===0&&delete a[J]}}}function P(){ue(),d=!0,c!==l&&(c=l,f(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:ue,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:_,disableUnusedAttributes:A}}function nw(o,e,i){let a;function l(f){a=f}function c(f,v){o.drawArrays(a,f,v),i.update(v,a,1)}function d(f,v,b){b!==0&&(o.drawArraysInstanced(a,f,v,b),i.update(v,a,b))}function p(f,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,f,0,v,0,b);let g=0;for(let S=0;S<b;S++)g+=v[S];i.update(g,a,1)}function m(f,v,b,g){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<f.length;x++)d(f[x],v[x],g[x]);else{S.multiDrawArraysInstancedWEBGL(a,f,0,v,0,g,0,b);let x=0;for(let R=0;R<b;R++)x+=v[R]*g[R];i.update(x,a,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function aw(o,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==bi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const E=O===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ci&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ui&&!E)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=i.precision!==void 0?i.precision:"highp";const v=m(f);v!==f&&(nt("WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);const b=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),_=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),k=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:f,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:x,maxTextureSize:R,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:N,maxSamples:F,samples:k}}function ow(o){const e=this;let i=null,a=0,l=!1,c=!1;const d=new Ca,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){const S=b.length!==0||g||a!==0||l;return l=g,a=b.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,g){i=v(b,g,0)},this.setState=function(b,g,S){const x=b.clippingPlanes,R=b.clipIntersection,_=b.clipShadows,y=o.get(b);if(!l||x===null||x.length===0||c&&!_)c?v(null):f();else{const A=c?0:a,D=A*4;let N=y.clippingState||null;m.value=N,N=v(x,g,D,S);for(let F=0;F!==D;++F)N[F]=i[F];y.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function f(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(b,g,S,x){const R=b!==null?b.length:0;let _=null;if(R!==0){if(_=m.value,x!==!0||_===null){const y=S+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(_===null||_.length<y)&&(_=new Float32Array(y));for(let D=0,N=S;D!==R;++D,N+=4)d.copy(b[D]).applyMatrix4(A,p),d.normal.toArray(_,N),_[N+3]=d.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}const na=4,D_=[.125,.215,.35,.446,.526,.582],Pa=20,sw=256,js=new Q0,k_=new vt;let Xh=null,$h=0,Zh=0,Jh=!1;const lw=new ie;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:d=256,position:p=lw}=c;Xh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,$h,Zh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ia||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Rr,minFilter:Rr,generateMipmaps:!1,type:Sn,format:bi,colorSpace:ko,depthBuffer:!1},l=O_(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cw(c)),this._blurMaterial=dw(c,e,i),this._ggxMaterial=uw(c,e,i)}return l}_compileMaterial(e){const i=new Mn(new Yr,e);this._renderer.compile(i,js)}_sceneToCubeUV(e,i,a,l,c){const d=new li(90,1,i,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,v=f.autoClear,b=f.toneMapping;f.getClearColor(k_),f.toneMapping=ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(l),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new al,new j0({name:"PMREM.Background",side:Vr,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,S=g.material;let x=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,x=!0):(S.color.copy(k_),x=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+m[_],c.y,c.z)):y===1?(d.up.set(0,0,p[_]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+m[_],c.z)):(d.up.set(0,p[_],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+m[_]));const A=this._cubeSize;Ro(l,y*A,_>2?A:0,A,A),f.setRenderTarget(l),x&&f.render(g,d),f.render(e,d)}f.toneMapping=b,f.autoClear=v,e.background=R}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Ia||e.mapping===Uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ro(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(d,js)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[a];p.material=d;const m=d.uniforms,f=a/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),b=Math.sqrt(f*f-v*v),g=0+f*1.25,S=b*g,{_lodMax:x}=this,R=this._sizeLods[a],_=3*R*(a>x-na?a-x+na:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=x-i,Ro(c,_,y,3*R,2*R),l.setRenderTarget(c),l.render(p,js),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=x-a,Ro(e,_,y,3*R,2*R),l.setRenderTarget(e),l.render(p,js)}_blur(e,i,a,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,a,l,"latitudinal",c),this._halfBlur(d,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,d,p){const m=this._renderer,f=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const v=3,b=this._lodMeshes[l];b.material=f;const g=f.uniforms,S=this._sizeLods[a]-1,x=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Pa-1),R=c/x,_=isFinite(c)?1+Math.floor(v*R):Pa;_>Pa&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Pa}`);const y=[];let A=0;for(let O=0;O<Pa;++O){const E=O/R,P=Math.exp(-E*E/2);y.push(P),O===0?A+=P:O<_&&(A+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/A;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=x,g.mipInt.value=D-a;const N=this._sizeLods[l],F=3*N*(l>D-na?l-D+na:0),k=4*(this._cubeSize-N);Ro(i,F,k,3*N,2*N),m.setRenderTarget(i),m.render(b,js)}}function cw(o){const e=[],i=[],a=[];let l=o;const c=o-na+1+D_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-na?m=D_[d-o+na-1]:d===0&&(m=0),i.push(m);const f=1/(p-2),v=-f,b=1+f,g=[v,v,b,v,b,b,v,v,b,b,v,b],S=6,x=6,R=3,_=2,y=1,A=new Float32Array(R*x*S),D=new Float32Array(_*x*S),N=new Float32Array(y*x*S);for(let k=0;k<S;k++){const O=k%3*2/3-1,E=k>2?0:-1,P=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];A.set(P,R*x*k),D.set(g,_*x*k);const ue=[k,k,k,k,k,k];N.set(ue,y*x*k)}const F=new Yr;F.setAttribute("position",new ui(A,R)),F.setAttribute("uv",new ui(D,_)),F.setAttribute("faceIndex",new ui(N,y)),a.push(new Mn(F,null)),l>na&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function O_(o,e,i){const a=new Fi(o,e,i);return a.texture.mapping=uu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ro(o,e,i,a,l){o.viewport.set(e,i,a,l),o.scissor.set(e,i,a,l)}function uw(o,e,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function dw(o,e,i){const a=new Float32Array(Pa),l=new ie(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Pa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function B_(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function z_(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class ty extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Z0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:Fo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Vr,blending:vn});c.uniforms.tEquirect.value=i;const d=new Mn(l,c),p=i.minFilter;return i.minFilter===Na&&(i.minFilter=Rr),new _1(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,a,l);e.setRenderTarget(c)}}function hw(o){let e=new WeakMap,i=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?d(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===yh||S===Sh)if(e.has(g)){const x=e.get(g).texture;return p(x,g.mapping)}else{const x=g.image;if(x&&x.height>0){const R=new ty(x.height);return R.fromEquirectangularTexture(o,g),e.set(g,R),g.addEventListener("dispose",f),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const S=g.mapping,x=S===yh||S===Sh,R=S===Ia||S===Uo;if(x||R){let _=i.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new F_(o)),_=x?a.fromEquirectangular(g,_):a.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),_.texture;if(_!==void 0)return _.texture;{const A=g.image;return x&&A&&A.height>0||R&&A&&m(A)?(a===null&&(a=new F_(o)),_=x?a.fromEquirectangular(g):a.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function p(g,S){return S===yh?g.mapping=Ia:S===Sh&&(g.mapping=Uo),g}function m(g){let S=0;const x=6;for(let R=0;R<x;R++)g[R]!==void 0&&S++;return S===x}function f(g){const S=g.target;S.removeEventListener("dispose",f);const x=e.get(S);x!==void 0&&(e.delete(S),x.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const x=i.get(S);x!==void 0&&(i.delete(S),x.dispose())}function b(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:b}}function fw(o){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=o.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&au("WebGLRenderer: "+a+" extension not supported."),l}}}function pw(o,e,i,a){const l={},c=new WeakMap;function d(b){const g=b.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",d),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(b,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(b){const g=b.attributes;for(const S in g)e.update(g[S],o.ARRAY_BUFFER)}function f(b){const g=[],S=b.index,x=b.attributes.position;let R=0;if(x===void 0)return;if(S!==null){const A=S.array;R=S.version;for(let D=0,N=A.length;D<N;D+=3){const F=A[D+0],k=A[D+1],O=A[D+2];g.push(F,k,k,O,O,F)}}else{const A=x.array;R=x.version;for(let D=0,N=A.length/3-1;D<N;D+=3){const F=D+0,k=D+1,O=D+2;g.push(F,k,k,O,O,F)}}const _=new(x.count>=65535?W0:G0)(g,1);_.version=R;const y=c.get(b);y&&e.remove(y),c.set(b,_)}function v(b){const g=c.get(b);if(g){const S=b.index;S!==null&&g.version<S.version&&f(b)}else f(b);return c.get(b)}return{get:p,update:m,getWireframeAttribute:v}}function mw(o,e,i){let a;function l(g){a=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,S){o.drawElements(a,S,c,g*d),i.update(S,a,1)}function f(g,S,x){x!==0&&(o.drawElementsInstanced(a,S,c,g*d,x),i.update(S,a,x))}function v(g,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,g,0,x);let R=0;for(let _=0;_<x;_++)R+=S[_];i.update(R,a,1)}function b(g,S,x,R){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)f(g[y]/d,S[y],R[y]);else{_.multiDrawElementsInstancedWEBGL(a,S,0,c,g,0,R,0,x);let y=0;for(let A=0;A<x;A++)y+=S[A]*R[A];i.update(y,a,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=f,this.renderMultiDraw=v,this.renderMultiDrawInstances=b}function gw(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Mt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function vw(o,e,i){const a=new WeakMap,l=new or;function c(d,p,m){const f=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b=v!==void 0?v.length:0;let g=a.get(p);if(g===void 0||g.count!==b){let S=function(){E.dispose(),a.delete(p),p.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();const x=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let N=0;x===!0&&(N=1),R===!0&&(N=2),_===!0&&(N=3);let F=p.attributes.position.count*N,k=1;F>e.maxTextureSize&&(k=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*k*4*b),E=new z0(O,F,k,b);E.type=Ui,E.needsUpdate=!0;const P=N*4;for(let ue=0;ue<b;ue++){const V=y[ue],J=A[ue],se=D[ue],le=F*k*4*ue;for(let re=0;re<V.count;re++){const U=re*P;x===!0&&(l.fromBufferAttribute(V,re),O[le+U+0]=l.x,O[le+U+1]=l.y,O[le+U+2]=l.z,O[le+U+3]=0),R===!0&&(l.fromBufferAttribute(J,re),O[le+U+4]=l.x,O[le+U+5]=l.y,O[le+U+6]=l.z,O[le+U+7]=0),_===!0&&(l.fromBufferAttribute(se,re),O[le+U+8]=l.x,O[le+U+9]=l.y,O[le+U+10]=l.z,O[le+U+11]=se.itemSize===4?l.w:1)}}g={count:b,texture:E,size:new Bt(F,k)},a.set(p,g),p.addEventListener("dispose",S)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let S=0;for(let R=0;R<f.length;R++)S+=f[R];const x=p.morphTargetsRelative?1:1-S;m.getUniforms().setValue(o,"morphTargetBaseInfluence",x),m.getUniforms().setValue(o,"morphTargetInfluences",f)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function _w(o,e,i,a,l){let c=new WeakMap;function d(f){const v=l.render.frame,b=f.geometry,g=e.get(f,b);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),f.isInstancedMesh&&(f.hasEventListener("dispose",m)===!1&&f.addEventListener("dispose",m),c.get(f)!==v&&(i.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&i.update(f.instanceColor,o.ARRAY_BUFFER),c.set(f,v))),f.isSkinnedMesh){const S=f.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return g}function p(){c=new WeakMap}function m(f){const v=f.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const yw={[E0]:"LINEAR_TONE_MAPPING",[T0]:"REINHARD_TONE_MAPPING",[w0]:"CINEON_TONE_MAPPING",[A0]:"ACES_FILMIC_TONE_MAPPING",[R0]:"AGX_TONE_MAPPING",[P0]:"NEUTRAL_TONE_MAPPING",[C0]:"CUSTOM_TONE_MAPPING"};function Sw(o,e,i,a,l){const c=new Fi(e,i,{type:o,depthBuffer:a,stencilBuffer:l}),d=new Fi(e,i,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),p=new Yr;p.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new di([0,2,0,0,2,0],2));const m=new m1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Mn(p,m),v=new Q0(-1,1,1,-1,0,1);let b=null,g=null,S=!1,x,R=null,_=[],y=!1;this.setSize=function(A,D){c.setSize(A,D),d.setSize(A,D);for(let N=0;N<_.length;N++){const F=_[N];F.setSize&&F.setSize(A,D)}},this.setEffects=function(A){_=A,y=_.length>0&&_[0].isRenderPass===!0;const D=c.width,N=c.height;for(let F=0;F<_.length;F++){const k=_[F];k.setSize&&k.setSize(D,N)}},this.begin=function(A,D){if(S||A.toneMapping===ki&&_.length===0)return!1;if(R=D,D!==null){const N=D.width,F=D.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&A.setRenderTarget(c),x=A.toneMapping,A.toneMapping=ki,!0},this.hasRenderPass=function(){return y},this.end=function(A,D){A.toneMapping=x,S=!0;let N=c,F=d;for(let k=0;k<_.length;k++){const O=_[k];if(O.enabled!==!1&&(O.render(A,F,N,D),O.needsSwap!==!1)){const E=N;N=F,F=E}}if(b!==A.outputColorSpace||g!==A.toneMapping){b=A.outputColorSpace,g=A.toneMapping,m.defines={},St.getTransfer(b)===It&&(m.defines.SRGB_TRANSFER="");const k=yw[g];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(R),A.render(f,v),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const ry=new Lr,Xf=new Ys(1,1),iy=new z0,ny=new GM,ay=new Z0,H_=[],V_=[],G_=new Float32Array(16),W_=new Float32Array(9),j_=new Float32Array(4);function Vo(o,e,i){const a=o[0];if(a<=0||a>0)return o;const l=e*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){a.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function fr(o,e){if(o.length!==e.length)return!1;for(let i=0,a=o.length;i<a;i++)if(o[i]!==e[i])return!1;return!0}function pr(o,e){for(let i=0,a=e.length;i<a;i++)o[i]=e[i]}function fu(o,e){let i=V_[e];i===void 0&&(i=new Int32Array(e),V_[e]=i);for(let a=0;a!==e;++a)i[a]=o.allocateTextureUnit();return i}function xw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fr(i,e))return;o.uniform2fv(this.addr,e),pr(i,e)}}function Mw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fr(i,e))return;o.uniform3fv(this.addr,e),pr(i,e)}}function Ew(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fr(i,e))return;o.uniform4fv(this.addr,e),pr(i,e)}}function Tw(o,e){const i=this.cache,a=e.elements;if(a===void 0){if(fr(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pr(i,e)}else{if(fr(i,a))return;j_.set(a),o.uniformMatrix2fv(this.addr,!1,j_),pr(i,a)}}function ww(o,e){const i=this.cache,a=e.elements;if(a===void 0){if(fr(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pr(i,e)}else{if(fr(i,a))return;W_.set(a),o.uniformMatrix3fv(this.addr,!1,W_),pr(i,a)}}function Aw(o,e){const i=this.cache,a=e.elements;if(a===void 0){if(fr(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pr(i,e)}else{if(fr(i,a))return;G_.set(a),o.uniformMatrix4fv(this.addr,!1,G_),pr(i,a)}}function Cw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Rw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fr(i,e))return;o.uniform2iv(this.addr,e),pr(i,e)}}function Pw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fr(i,e))return;o.uniform3iv(this.addr,e),pr(i,e)}}function Nw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fr(i,e))return;o.uniform4iv(this.addr,e),pr(i,e)}}function Lw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Iw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fr(i,e))return;o.uniform2uiv(this.addr,e),pr(i,e)}}function Uw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fr(i,e))return;o.uniform3uiv(this.addr,e),pr(i,e)}}function Dw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fr(i,e))return;o.uniform4uiv(this.addr,e),pr(i,e)}}function kw(o,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Xf.compareFunction=i.isReversedDepthBuffer()?cp:lp,c=Xf):c=ry,i.setTexture2D(e||c,l)}function Fw(o,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||ny,l)}function Ow(o,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||ay,l)}function Bw(o,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||iy,l)}function zw(o){switch(o){case 5126:return xw;case 35664:return bw;case 35665:return Mw;case 35666:return Ew;case 35674:return Tw;case 35675:return ww;case 35676:return Aw;case 5124:case 35670:return Cw;case 35667:case 35671:return Rw;case 35668:case 35672:return Pw;case 35669:case 35673:return Nw;case 5125:return Lw;case 36294:return Iw;case 36295:return Uw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Bw}}function Hw(o,e){o.uniform1fv(this.addr,e)}function Vw(o,e){const i=Vo(e,this.size,2);o.uniform2fv(this.addr,i)}function Gw(o,e){const i=Vo(e,this.size,3);o.uniform3fv(this.addr,i)}function Ww(o,e){const i=Vo(e,this.size,4);o.uniform4fv(this.addr,i)}function jw(o,e){const i=Vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qw(o,e){const i=Vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Xw(o,e){const i=Vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $w(o,e){o.uniform1iv(this.addr,e)}function Zw(o,e){o.uniform2iv(this.addr,e)}function Jw(o,e){o.uniform3iv(this.addr,e)}function Kw(o,e){o.uniform4iv(this.addr,e)}function Yw(o,e){o.uniform1uiv(this.addr,e)}function Qw(o,e){o.uniform2uiv(this.addr,e)}function eA(o,e){o.uniform3uiv(this.addr,e)}function tA(o,e){o.uniform4uiv(this.addr,e)}function rA(o,e,i){const a=this.cache,l=e.length,c=fu(i,l);fr(a,c)||(o.uniform1iv(this.addr,c),pr(a,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Xf:d=ry;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function iA(o,e,i){const a=this.cache,l=e.length,c=fu(i,l);fr(a,c)||(o.uniform1iv(this.addr,c),pr(a,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ny,c[d])}function nA(o,e,i){const a=this.cache,l=e.length,c=fu(i,l);fr(a,c)||(o.uniform1iv(this.addr,c),pr(a,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||ay,c[d])}function aA(o,e,i){const a=this.cache,l=e.length,c=fu(i,l);fr(a,c)||(o.uniform1iv(this.addr,c),pr(a,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||iy,c[d])}function oA(o){switch(o){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return Ww;case 35674:return jw;case 35675:return qw;case 35676:return Xw;case 5124:case 35670:return $w;case 35667:case 35671:return Zw;case 35668:case 35672:return Jw;case 35669:case 35673:return Kw;case 5125:return Yw;case 36294:return Qw;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return aA}}class sA{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=zw(i.type)}}class lA{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oA(i.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],a)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function q_(o,e){o.seq.push(e),o.map[e.id]=e}function uA(o,e,i){const a=o.name,l=a.length;for(Kh.lastIndex=0;;){const c=Kh.exec(a),d=Kh.lastIndex;let p=c[1];const m=c[2]==="]",f=c[3];if(m&&(p=p|0),f===void 0||f==="["&&d+2===l){q_(i,f===void 0?new sA(p,o,e):new lA(p,o,e));break}else{let v=i.map[p];v===void 0&&(v=new cA(p),q_(i,v)),i=v}}}class Yc{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<a;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);uA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&a.push(d)}return a}}function X_(o,e,i){const a=o.createShader(e);return o.shaderSource(a,i),o.compileShader(a),a}const dA=37297;let hA=0;function fA(o,e){const i=o.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;a.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return a.join(`
`)}const $_=new lt;function pA(o){St._getMatrix($_,St.workingColorSpace,o);const e=`mat3( ${$_.elements.map(i=>i.toFixed(4))} )`;switch(St.getTransfer(o)){case ru:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Z_(o,e,i){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+fA(o.getShaderSource(e),d)}else return l}function mA(o,e){const i=pA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gA={[E0]:"Linear",[T0]:"Reinhard",[w0]:"Cineon",[A0]:"ACESFilmic",[R0]:"AgX",[P0]:"Neutral",[C0]:"Custom"};function vA(o,e){const i=gA[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new ie;function _A(){St.getLuminanceCoefficients(Wc);const o=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function SA(o){const e=[];for(const i in o){const a=o[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function xA(o,e){const i={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function $s(o){return o!==""}function J_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(o){return o.replace(bA,EA)}const MA=new Map;function EA(o,e){let i=ct[e];if(i===void 0){const a=MA.get(e);if(a!==void 0)i=ct[a],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return $f(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(o){return o.replace(TA,wA)}function wA(o,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const AA={[Xc]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function CA(o){return AA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[Ia]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function PA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":RA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[Uo]:"ENVMAP_MODE_REFRACTION"};function LA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IA={[M0]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[bM]:"ENVMAP_BLENDING_ADD"};function UA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":IA[o.combine]||"ENVMAP_BLENDING_NONE"}function DA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function kA(o,e,i,a){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=CA(i),f=PA(i),v=LA(i),b=UA(i),g=DA(i),S=yA(i),x=SA(c),R=l.createProgram();let _,y,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter($s).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter($s).join(`
`),y.length>0&&(y+=`
`)):(_=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),y=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.envMap?"#define "+v:"",i.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ct.tonemapping_pars_fragment:"",i.toneMapping!==ki?vA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),_A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($s).join(`
`)),d=$f(d),d=J_(d,i),d=K_(d,i),p=$f(p),p=J_(p,i),p=K_(p,i),d=Y_(d),p=Y_(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=A+_+d,N=A+y+p,F=X_(l,l.VERTEX_SHADER,D),k=X_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,F),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",se=l.getShaderInfoLog(F)||"",le=l.getShaderInfoLog(k)||"",re=J.trim(),U=se.trim(),H=le.trim();let ce=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,k);else{const L=Z_(l,F,"vertex"),K=Z_(l,k,"fragment");Mt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+L+`
`+K)}else re!==""?nt("WebGLProgram: Program Info Log:",re):(U===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ce,programLog:re,vertexShader:{log:U,prefix:_},fragmentShader:{log:H,prefix:y}})}l.deleteShader(F),l.deleteShader(k),E=new Yc(l,R),P=xA(l,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(R,dA)),ue},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=k,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new BA(e),i.set(e,a)),a}}class BA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function zA(o,e,i,a,l,c){const d=new H0,p=new OA,m=new Set,f=[],v=new Map,b=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,P,ue,V,J){const se=V.fog,le=J.geometry,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||re,U),ce=H&&H.mapping===uu?H.image.height:null,_e=S[E.type];E.precision!==null&&(g=a.getMaxPrecision(E.precision),g!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,K=L!==void 0?L.length:0;let ge=0;le.morphAttributes.position!==void 0&&(ge=1),le.morphAttributes.normal!==void 0&&(ge=2),le.morphAttributes.color!==void 0&&(ge=3);let Se,Ne,qe,Q;if(_e){const xt=Ii[_e];Se=xt.vertexShader,Ne=xt.fragmentShader}else Se=E.vertexShader,Ne=E.fragmentShader,p.update(E),qe=p.getVertexShaderID(E),Q=p.getFragmentShaderID(E);const Me=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),et=J.isInstancedMesh===!0,Ye=J.isBatchedMesh===!0,Be=!!E.map,Et=!!E.matcap,Tt=!!H,at=!!E.aoMap,rr=!!E.lightMap,Yt=!!E.bumpMap,Ut=!!E.normalMap,G=!!E.displacementMap,qt=!!E.emissiveMap,yt=!!E.metalnessMap,wt=!!E.roughnessMap,je=E.anisotropy>0,I=E.clearcoat>0,T=E.dispersion>0,q=E.iridescence>0,me=E.sheen>0,fe=E.transmission>0,pe=je&&!!E.anisotropyMap,De=I&&!!E.clearcoatMap,Re=I&&!!E.clearcoatNormalMap,Ze=I&&!!E.clearcoatRoughnessMap,Xe=q&&!!E.iridescenceMap,Ee=q&&!!E.iridescenceThicknessMap,we=me&&!!E.sheenColorMap,We=me&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ue=!!E.specularColorMap,ut=!!E.specularIntensityMap,j=fe&&!!E.transmissionMap,Pe=fe&&!!E.thicknessMap,Ae=!!E.gradientMap,Fe=!!E.alphaMap,Te=E.alphaTest>0,he=!!E.alphaHash,He=!!E.extensions;let Ke=ki;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ke=o.toneMapping);const Xt={shaderID:_e,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:Ne,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,outputColorSpace:Me===null?o.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ko,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:Et,envMap:Tt,envMapMode:Tt&&H.mapping,envMapCubeUVHeight:ce,aoMap:at,lightMap:rr,bumpMap:Yt,normalMap:Ut,displacementMap:G,emissiveMap:qt,normalMapObjectSpace:Ut&&E.normalMapType===wM,normalMapTangentSpace:Ut&&E.normalMapType===TM,metalnessMap:yt,roughnessMap:wt,anisotropy:je,anisotropyMap:pe,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ze,dispersion:T,iridescence:q,iridescenceMap:Xe,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:we,sheenRoughnessMap:We,specularMap:ze,specularColorMap:Ue,specularIntensityMap:ut,transmission:fe,transmissionMap:j,thicknessMap:Pe,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===No&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:he,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:at&&x(E.aoMap.channel),lightMapUv:rr&&x(E.lightMap.channel),bumpMapUv:Yt&&x(E.bumpMap.channel),normalMapUv:Ut&&x(E.normalMap.channel),displacementMapUv:G&&x(E.displacementMap.channel),emissiveMapUv:qt&&x(E.emissiveMap.channel),metalnessMapUv:yt&&x(E.metalnessMap.channel),roughnessMapUv:wt&&x(E.roughnessMap.channel),anisotropyMapUv:pe&&x(E.anisotropyMap.channel),clearcoatMapUv:De&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(E.sheenRoughnessMap.channel),specularMapUv:ze&&x(E.specularMap.channel),specularColorMapUv:Ue&&x(E.specularColorMap.channel),specularIntensityMapUv:ut&&x(E.specularIntensityMap.channel),transmissionMapUv:j&&x(E.transmissionMap.channel),thicknessMapUv:Pe&&x(E.thicknessMap.channel),alphaMapUv:Fe&&x(E.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ut||je),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(Be||Fe),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||le.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:be,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ge,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pn,flipSided:E.side===Vr,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function _(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ue in E.defines)P.push(ue),P.push(E.defines[ue]);return E.isRawShaderMaterial===!1&&(y(P,E),A(P,E),P.push(o.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function y(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function A(E,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),E.push(d.mask)}function D(E){const P=S[E.type];let ue;if(P){const V=Ii[P];ue=h1.clone(V.uniforms)}else ue=E.uniforms;return ue}function N(E,P){let ue=v.get(P);return ue!==void 0?++ue.usedTimes:(ue=new kA(o,P,E,l),f.push(ue),v.set(P,ue)),ue}function F(E){if(--E.usedTimes===0){const P=f.indexOf(E);f[P]=f[f.length-1],f.pop(),v.delete(E.cacheKey),E.destroy()}}function k(E){p.remove(E)}function O(){p.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:F,releaseShaderCache:k,programs:f,dispose:O}}function HA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function a(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function VA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function e0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function t0(){const o=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function d(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,x,R,_,y){let A=o[e];return A===void 0?(A={id:g.id,object:g,geometry:S,material:x,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:y},o[e]=A):(A.id=g.id,A.object=g,A.geometry=S,A.material=x,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=_,A.group=y),e++,A}function m(g,S,x,R,_,y){const A=p(g,S,x,R,_,y);x.transmission>0?a.push(A):x.transparent===!0?l.push(A):i.push(A)}function f(g,S,x,R,_,y){const A=p(g,S,x,R,_,y);x.transmission>0?a.unshift(A):x.transparent===!0?l.unshift(A):i.unshift(A)}function v(g,S){i.length>1&&i.sort(g||VA),a.length>1&&a.sort(S||e0),l.length>1&&l.sort(S||e0)}function b(){for(let g=e,S=o.length;g<S;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:f,finish:b,sort:v}}function GA(){let o=new WeakMap;function e(a,l){const c=o.get(a);let d;return c===void 0?(d=new t0,o.set(a,[d])):l>=c.length?(d=new t0,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function WA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new vt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":i={color:new vt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return o[e.id]=i,i}}}function jA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let qA=0;function XA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $A(o){const e=new WA,i=jA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)a.probe.push(new ie);const l=new ie,c=new tr,d=new tr;function p(f){let v=0,b=0,g=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let S=0,x=0,R=0,_=0,y=0,A=0,D=0,N=0,F=0,k=0,O=0;f.sort(XA);for(let P=0,ue=f.length;P<ue;P++){const V=f[P],J=V.color,se=V.intensity,le=V.distance;let re=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Do?re=V.shadow.map.texture:re=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*se,b+=J.g*se,g+=J.b*se;else if(V.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(V.sh.coefficients[U],se);O++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ce=i.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,a.directionalShadow[S]=ce,a.directionalShadowMap[S]=re,a.directionalShadowMatrix[S]=V.shadow.matrix,A++}a.directional[S]=U,S++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(J).multiplyScalar(se),U.distance=le,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,a.spot[R]=U;const H=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&k++),a.spotLightMatrix[R]=H.matrix,V.castShadow){const ce=i.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,a.spotShadow[R]=ce,a.spotShadowMap[R]=re,N++}R++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(J).multiplyScalar(se),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),a.rectArea[_]=U,_++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const H=V.shadow,ce=i.get(V);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,ce.shadowCameraNear=H.camera.near,ce.shadowCameraFar=H.camera.far,a.pointShadow[x]=ce,a.pointShadowMap[x]=re,a.pointShadowMatrix[x]=V.shadow.matrix,D++}a.point[x]=U,x++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(se),U.groundColor.copy(V.groundColor).multiplyScalar(se),a.hemi[y]=U,y++}}_>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=b,a.ambient[2]=g;const E=a.hash;(E.directionalLength!==S||E.pointLength!==x||E.spotLength!==R||E.rectAreaLength!==_||E.hemiLength!==y||E.numDirectionalShadows!==A||E.numPointShadows!==D||E.numSpotShadows!==N||E.numSpotMaps!==F||E.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=R,a.rectArea.length=_,a.point.length=x,a.hemi.length=y,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=N+F-k,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=k,a.numLightProbes=O,E.directionalLength=S,E.pointLength=x,E.spotLength=R,E.rectAreaLength=_,E.hemiLength=y,E.numDirectionalShadows=A,E.numPointShadows=D,E.numSpotShadows=N,E.numSpotMaps=F,E.numLightProbes=O,a.version=qA++)}function m(f,v){let b=0,g=0,S=0,x=0,R=0;const _=v.matrixWorldInverse;for(let y=0,A=f.length;y<A;y++){const D=f[y];if(D.isDirectionalLight){const N=a.directional[b];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),b++}else if(D.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),S++}else if(D.isRectAreaLight){const N=a.rectArea[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),d.identity(),c.copy(D.matrixWorld),c.premultiply(_),d.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),x++}else if(D.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const N=a.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(_),R++}}}return{setup:p,setupView:m,state:a}}function r0(o){const e=new $A(o),i=[],a=[];function l(v){f.camera=v,i.length=0,a.length=0}function c(v){i.push(v)}function d(v){a.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const f={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:f,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function ZA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new r0(o),e.set(l,[p])):c>=d.length?(p=new r0(o),d.push(p)):p=d[c],p}function a(){e=new WeakMap}return{get:i,dispose:a}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
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
}`,YA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],QA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],i0=new tr,qs=new ie,Yh=new ie;function eC(o,e,i){let a=new q0;const l=new Bt,c=new Bt,d=new or,p=new g1,m=new v1,f={},v=i.maxTextureSize,b={[aa]:Vr,[Vr]:aa,[pn]:pn},g=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:JA,fragmentShader:KA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const x=new Yr;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mn(x,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let y=this.type;this.render=function(k,O,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;this.type===rM&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xc);const P=o.getRenderTarget(),ue=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(vn),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const se=y!==this.type;se&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(re=>re.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,re=k.length;le<re;le++){const U=k[le],H=U.shadow;if(H===void 0){nt("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ce=H.getFrameExtents();l.multiply(ce),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ce.x),l.x=c.x*ce.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ce.y),l.y=c.y*ce.y,H.mapSize.y=c.y));const _e=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xs){if(U.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fi(l.x,l.y,{format:Do,type:Sn,minFilter:Rr,magFilter:Rr,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Ys(l.x,l.y,Ui),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=xn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Er,H.map.depthTexture.magFilter=Er}else U.isPointLight?(H.map=new ty(l.x),H.map.depthTexture=new u1(l.x,Oi)):(H.map=new Fi(l.x,l.y),H.map.depthTexture=new Ys(l.x,l.y,Oi)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=xn,this.type===Xc?(H.map.depthTexture.compareFunction=_e?cp:lp,H.map.depthTexture.minFilter=Rr,H.map.depthTexture.magFilter=Rr):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Er,H.map.depthTexture.magFilter=Er);H.camera.updateProjectionMatrix()}const L=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<L;K++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,K),o.clear();else{K===0&&(o.setRenderTarget(H.map),o.clear());const ge=H.getViewport(K);d.set(c.x*ge.x,c.y*ge.y,c.x*ge.z,c.y*ge.w),J.viewport(d)}if(U.isPointLight){const ge=H.camera,Se=H.matrix,Ne=U.distance||ge.far;Ne!==ge.far&&(ge.far=Ne,ge.updateProjectionMatrix()),qs.setFromMatrixPosition(U.matrixWorld),ge.position.copy(qs),Yh.copy(ge.position),Yh.add(YA[K]),ge.up.copy(QA[K]),ge.lookAt(Yh),ge.updateMatrixWorld(),Se.makeTranslation(-qs.x,-qs.y,-qs.z),i0.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),H._frustum.setFromProjectionMatrix(i0,ge.coordinateSystem,ge.reversedDepth)}else H.updateMatrices(U);a=H.getFrustum(),N(O,E,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===Xs&&A(H,E),H.needsUpdate=!1}y=this.type,_.needsUpdate=!1,o.setRenderTarget(P,ue,V)};function A(k,O){const E=e.update(R);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Fi(l.x,l.y,{format:Do,type:Sn})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(O,null,E,g,R,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(O,null,E,S,R,null)}function D(k,O,E,P){let ue=null;const V=E.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=E.isPointLight===!0?m:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=ue.uuid,se=O.uuid;let le=f[J];le===void 0&&(le={},f[J]=le);let re=le[se];re===void 0&&(re=ue.clone(),le[se]=re,O.addEventListener("dispose",F)),ue=re}if(ue.visible=O.visible,ue.wireframe=O.wireframe,P===Xs?ue.side=O.shadowSide!==null?O.shadowSide:O.side:ue.side=O.shadowSide!==null?O.shadowSide:b[O.side],ue.alphaMap=O.alphaMap,ue.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ue.map=O.map,ue.clipShadows=O.clipShadows,ue.clippingPlanes=O.clippingPlanes,ue.clipIntersection=O.clipIntersection,ue.displacementMap=O.displacementMap,ue.displacementScale=O.displacementScale,ue.displacementBias=O.displacementBias,ue.wireframeLinewidth=O.wireframeLinewidth,ue.linewidth=O.linewidth,E.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const J=o.properties.get(ue);J.light=E}return ue}function N(k,O,E,P,ue){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&ue===Xs)&&(!k.frustumCulled||a.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,k.matrixWorld);const J=e.update(k),se=k.material;if(Array.isArray(se)){const le=J.groups;for(let re=0,U=le.length;re<U;re++){const H=le[re],ce=se[H.materialIndex];if(ce&&ce.visible){const _e=D(k,ce,P,ue);k.onBeforeShadow(o,k,O,E,J,_e,H),o.renderBufferDirect(E,null,J,_e,k,H),k.onAfterShadow(o,k,O,E,J,_e,H)}}}else if(se.visible){const le=D(k,se,P,ue);k.onBeforeShadow(o,k,O,E,J,le,null),o.renderBufferDirect(E,null,J,le,k,null),k.onAfterShadow(o,k,O,E,J,le,null)}}const V=k.children;for(let J=0,se=V.length;J<se;J++)N(V[J],O,E,P,ue)}function F(k){k.target.removeEventListener("dispose",F);for(const O in f){const E=f[O],P=k.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function tC(o,e){function i(){let j=!1;const Pe=new or;let Ae=null;const Fe=new or(0,0,0,0);return{setMask:function(Te){Ae!==Te&&!j&&(o.colorMask(Te,Te,Te,Te),Ae=Te)},setLocked:function(Te){j=Te},setClear:function(Te,he,He,Ke,Xt){Xt===!0&&(Te*=Ke,he*=Ke,He*=Ke),Pe.set(Te,he,He,Ke),Fe.equals(Pe)===!1&&(o.clearColor(Te,he,He,Ke),Fe.copy(Pe))},reset:function(){j=!1,Ae=null,Fe.set(-1,0,0,0)}}}function a(){let j=!1,Pe=!1,Ae=null,Fe=null,Te=null;return{setReversed:function(he){if(Pe!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const Ke=Te;Te=null,this.setClear(Ke)}},getReversed:function(){return Pe},setTest:function(he){he?Me(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(he){Ae!==he&&!j&&(o.depthMask(he),Ae=he)},setFunc:function(he){if(Pe&&(he=kM[he]),Fe!==he){switch(he){case nf:o.depthFunc(o.NEVER);break;case af:o.depthFunc(o.ALWAYS);break;case of:o.depthFunc(o.LESS);break;case Io:o.depthFunc(o.LEQUAL);break;case sf:o.depthFunc(o.EQUAL);break;case lf:o.depthFunc(o.GEQUAL);break;case cf:o.depthFunc(o.GREATER);break;case uf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Fe=he}},setLocked:function(he){j=he},setClear:function(he){Te!==he&&(Te=he,Pe&&(he=1-he),o.clearDepth(he))},reset:function(){j=!1,Ae=null,Fe=null,Te=null,Pe=!1}}}function l(){let j=!1,Pe=null,Ae=null,Fe=null,Te=null,he=null,He=null,Ke=null,Xt=null;return{setTest:function(xt){j||(xt?Me(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(xt){Pe!==xt&&!j&&(o.stencilMask(xt),Pe=xt)},setFunc:function(xt,hi,mr){(Ae!==xt||Fe!==hi||Te!==mr)&&(o.stencilFunc(xt,hi,mr),Ae=xt,Fe=hi,Te=mr)},setOp:function(xt,hi,mr){(he!==xt||He!==hi||Ke!==mr)&&(o.stencilOp(xt,hi,mr),he=xt,He=hi,Ke=mr)},setLocked:function(xt){j=xt},setClear:function(xt){Xt!==xt&&(o.clearStencil(xt),Xt=xt)},reset:function(){j=!1,Pe=null,Ae=null,Fe=null,Te=null,he=null,He=null,Ke=null,Xt=null}}}const c=new i,d=new a,p=new l,m=new WeakMap,f=new WeakMap;let v={},b={},g=new WeakMap,S=[],x=null,R=!1,_=null,y=null,A=null,D=null,N=null,F=null,k=null,O=new vt(0,0,0),E=0,P=!1,ue=null,V=null,J=null,se=null,le=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const ce=o.getParameter(o.VERSION);ce.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ce)[1]),U=H>=1):ce.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),U=H>=2);let _e=null,L={};const K=o.getParameter(o.SCISSOR_BOX),ge=o.getParameter(o.VIEWPORT),Se=new or().fromArray(K),Ne=new or().fromArray(ge);function qe(j,Pe,Ae,Fe){const Te=new Uint8Array(4),he=o.createTexture();o.bindTexture(j,he),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<Ae;He++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,Fe,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Pe+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return he}const Q={};Q[o.TEXTURE_2D]=qe(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=qe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=qe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=qe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Me(o.DEPTH_TEST),d.setFunc(Io),Yt(!1),Ut(n_),Me(o.CULL_FACE),at(vn);function Me(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function be(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function et(j,Pe){return b[j]!==Pe?(o.bindFramebuffer(j,Pe),b[j]=Pe,j===o.DRAW_FRAMEBUFFER&&(b[o.FRAMEBUFFER]=Pe),j===o.FRAMEBUFFER&&(b[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ye(j,Pe){let Ae=S,Fe=!1;if(j){Ae=g.get(Pe),Ae===void 0&&(Ae=[],g.set(Pe,Ae));const Te=j.textures;if(Ae.length!==Te.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let he=0,He=Te.length;he<He;he++)Ae[he]=o.COLOR_ATTACHMENT0+he;Ae.length=Te.length,Fe=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Fe=!0);Fe&&o.drawBuffers(Ae)}function Be(j){return x!==j?(o.useProgram(j),x=j,!0):!1}const Et={[Ra]:o.FUNC_ADD,[nM]:o.FUNC_SUBTRACT,[aM]:o.FUNC_REVERSE_SUBTRACT};Et[oM]=o.MIN,Et[sM]=o.MAX;const Tt={[lM]:o.ZERO,[cM]:o.ONE,[uM]:o.SRC_COLOR,[tf]:o.SRC_ALPHA,[gM]:o.SRC_ALPHA_SATURATE,[pM]:o.DST_COLOR,[hM]:o.DST_ALPHA,[dM]:o.ONE_MINUS_SRC_COLOR,[rf]:o.ONE_MINUS_SRC_ALPHA,[mM]:o.ONE_MINUS_DST_COLOR,[fM]:o.ONE_MINUS_DST_ALPHA,[vM]:o.CONSTANT_COLOR,[_M]:o.ONE_MINUS_CONSTANT_COLOR,[yM]:o.CONSTANT_ALPHA,[SM]:o.ONE_MINUS_CONSTANT_ALPHA};function at(j,Pe,Ae,Fe,Te,he,He,Ke,Xt,xt){if(j===vn){R===!0&&(be(o.BLEND),R=!1);return}if(R===!1&&(Me(o.BLEND),R=!0),j!==iM){if(j!==_||xt!==P){if((y!==Ra||N!==Ra)&&(o.blendEquation(o.FUNC_ADD),y=Ra,N=Ra),xt)switch(j){case No:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tu:o.blendFunc(o.ONE,o.ONE);break;case a_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case o_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Mt("WebGLState: Invalid blending: ",j);break}else switch(j){case No:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case a_:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case o_:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",j);break}A=null,D=null,F=null,k=null,O.set(0,0,0),E=0,_=j,P=xt}return}Te=Te||Pe,he=he||Ae,He=He||Fe,(Pe!==y||Te!==N)&&(o.blendEquationSeparate(Et[Pe],Et[Te]),y=Pe,N=Te),(Ae!==A||Fe!==D||he!==F||He!==k)&&(o.blendFuncSeparate(Tt[Ae],Tt[Fe],Tt[he],Tt[He]),A=Ae,D=Fe,F=he,k=He),(Ke.equals(O)===!1||Xt!==E)&&(o.blendColor(Ke.r,Ke.g,Ke.b,Xt),O.copy(Ke),E=Xt),_=j,P=!1}function rr(j,Pe){j.side===pn?be(o.CULL_FACE):Me(o.CULL_FACE);let Ae=j.side===Vr;Pe&&(Ae=!Ae),Yt(Ae),j.blending===No&&j.transparent===!1?at(vn):at(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),qt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(j){ue!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),ue=j)}function Ut(j){j!==eM?(Me(o.CULL_FACE),j!==V&&(j===n_?o.cullFace(o.BACK):j===tM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),V=j}function G(j){j!==J&&(U&&o.lineWidth(j),J=j)}function qt(j,Pe,Ae){j?(Me(o.POLYGON_OFFSET_FILL),(se!==Pe||le!==Ae)&&(se=Pe,le=Ae,d.getReversed()&&(Pe=-Pe),o.polygonOffset(Pe,Ae))):be(o.POLYGON_OFFSET_FILL)}function yt(j){j?Me(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function wt(j){j===void 0&&(j=o.TEXTURE0+re-1),_e!==j&&(o.activeTexture(j),_e=j)}function je(j,Pe,Ae){Ae===void 0&&(_e===null?Ae=o.TEXTURE0+re-1:Ae=_e);let Fe=L[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},L[Ae]=Fe),(Fe.type!==j||Fe.texture!==Pe)&&(_e!==Ae&&(o.activeTexture(Ae),_e=Ae),o.bindTexture(j,Pe||Q[j]),Fe.type=j,Fe.texture=Pe)}function I(){const j=L[_e];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function me(){try{o.texSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function fe(){try{o.texSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function pe(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function De(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Re(){try{o.texStorage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ze(){try{o.texStorage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Xe(){try{o.texImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ee(){try{o.texImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function we(j){Se.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Se.copy(j))}function We(j){Ne.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Ne.copy(j))}function ze(j,Pe){let Ae=f.get(Pe);Ae===void 0&&(Ae=new WeakMap,f.set(Pe,Ae));let Fe=Ae.get(j);Fe===void 0&&(Fe=o.getUniformBlockIndex(Pe,j.name),Ae.set(j,Fe))}function Ue(j,Pe){const Ae=f.get(Pe).get(j);m.get(Pe)!==Ae&&(o.uniformBlockBinding(Pe,Ae,j.__bindingPointIndex),m.set(Pe,Ae))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_e=null,L={},b={},g=new WeakMap,S=[],x=null,R=!1,_=null,y=null,A=null,D=null,N=null,F=null,k=null,O=new vt(0,0,0),E=0,P=!1,ue=null,V=null,J=null,se=null,le=null,Se.set(0,0,o.canvas.width,o.canvas.height),Ne.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Me,disable:be,bindFramebuffer:et,drawBuffers:Ye,useProgram:Be,setBlending:at,setMaterial:rr,setFlipSided:Yt,setCullFace:Ut,setLineWidth:G,setPolygonOffset:qt,setScissorTest:yt,activeTexture:wt,bindTexture:je,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Xe,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:De,scissor:we,viewport:We,reset:ut}}function rC(o,e,i,a,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Bt,v=new WeakMap;let b;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,T){return S?new OffscreenCanvas(I,T):nu("canvas")}function R(I,T,q){let me=1;const fe=je(I);if((fe.width>q||fe.height>q)&&(me=q/Math.max(fe.width,fe.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(me*fe.width),De=Math.floor(me*fe.height);b===void 0&&(b=x(pe,De));const Re=T?x(pe,De):b;return Re.width=pe,Re.height=De,Re.getContext("2d").drawImage(I,0,0,pe,De),nt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+De+")."),Re}else return"data"in I&&nt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function _(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(I,T,q,me,fe=!1){if(I!==null){if(o[I]!==void 0)return o[I];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=T;if(T===o.RED&&(q===o.FLOAT&&(pe=o.R32F),q===o.HALF_FLOAT&&(pe=o.R16F),q===o.UNSIGNED_BYTE&&(pe=o.R8)),T===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(pe=o.R8UI),q===o.UNSIGNED_SHORT&&(pe=o.R16UI),q===o.UNSIGNED_INT&&(pe=o.R32UI),q===o.BYTE&&(pe=o.R8I),q===o.SHORT&&(pe=o.R16I),q===o.INT&&(pe=o.R32I)),T===o.RG&&(q===o.FLOAT&&(pe=o.RG32F),q===o.HALF_FLOAT&&(pe=o.RG16F),q===o.UNSIGNED_BYTE&&(pe=o.RG8)),T===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(pe=o.RG8UI),q===o.UNSIGNED_SHORT&&(pe=o.RG16UI),q===o.UNSIGNED_INT&&(pe=o.RG32UI),q===o.BYTE&&(pe=o.RG8I),q===o.SHORT&&(pe=o.RG16I),q===o.INT&&(pe=o.RG32I)),T===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),q===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),q===o.UNSIGNED_INT&&(pe=o.RGB32UI),q===o.BYTE&&(pe=o.RGB8I),q===o.SHORT&&(pe=o.RGB16I),q===o.INT&&(pe=o.RGB32I)),T===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),q===o.UNSIGNED_INT&&(pe=o.RGBA32UI),q===o.BYTE&&(pe=o.RGBA8I),q===o.SHORT&&(pe=o.RGBA16I),q===o.INT&&(pe=o.RGBA32I)),T===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),T===o.RGBA){const De=fe?ru:St.getTransfer(me);q===o.FLOAT&&(pe=o.RGBA32F),q===o.HALF_FLOAT&&(pe=o.RGBA16F),q===o.UNSIGNED_BYTE&&(pe=De===It?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(I,T){let q;return I?T===null||T===Oi||T===Ks?q=o.DEPTH24_STENCIL8:T===Ui?q=o.DEPTH32F_STENCIL8:T===Js&&(q=o.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oi||T===Ks?q=o.DEPTH_COMPONENT24:T===Ui?q=o.DEPTH_COMPONENT32F:T===Js&&(q=o.DEPTH_COMPONENT16),q}function F(I,T){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Er&&I.minFilter!==Rr?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function k(I){const T=I.target;T.removeEventListener("dispose",k),E(T),T.isVideoTexture&&v.delete(T)}function O(I){const T=I.target;T.removeEventListener("dispose",O),ue(T)}function E(I){const T=a.get(I);if(T.__webglInit===void 0)return;const q=I.source,me=g.get(q);if(me){const fe=me[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&P(I),Object.keys(me).length===0&&g.delete(q)}a.remove(I)}function P(I){const T=a.get(I);o.deleteTexture(T.__webglTexture);const q=I.source,me=g.get(q);delete me[T.__cacheKey],d.memory.textures--}function ue(I){const T=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let fe=0;fe<T.__webglFramebuffer[me].length;fe++)o.deleteFramebuffer(T.__webglFramebuffer[me][fe]);else o.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)o.deleteFramebuffer(T.__webglFramebuffer[me]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=I.textures;for(let me=0,fe=q.length;me<fe;me++){const pe=a.get(q[me]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),a.remove(q[me])}a.remove(I)}let V=0;function J(){V=0}function se(){const I=V;return I>=l.maxTextures&&nt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),V+=1,I}function le(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function re(I,T){const q=a.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const me=I.image;if(me===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,I,T);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+T)}function U(I,T){const q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Q(q,I,T);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+T)}function H(I,T){const q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Q(q,I,T);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+T)}function ce(I,T){const q=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){Me(q,I,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+T)}const _e={[df]:o.REPEAT,[mn]:o.CLAMP_TO_EDGE,[hf]:o.MIRRORED_REPEAT},L={[Er]:o.NEAREST,[MM]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[Rr]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Na]:o.LINEAR_MIPMAP_LINEAR},K={[AM]:o.NEVER,[LM]:o.ALWAYS,[CM]:o.LESS,[lp]:o.LEQUAL,[RM]:o.EQUAL,[cp]:o.GEQUAL,[PM]:o.GREATER,[NM]:o.NOTEQUAL};function ge(I,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Rr||T.magFilter===xh||T.magFilter===_c||T.magFilter===Na||T.minFilter===Rr||T.minFilter===xh||T.minFilter===_c||T.minFilter===Na)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,_e[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,_e[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,_e[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Er||T.minFilter!==_c&&T.minFilter!==Na||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Se(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",k));const me=T.source;let fe=g.get(me);fe===void 0&&(fe={},g.set(me,fe));const pe=le(T);if(pe!==I.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),fe[pe].usedTimes++;const De=fe[I.__cacheKey];De!==void 0&&(fe[I.__cacheKey].usedTimes--,De.usedTimes===0&&P(T)),I.__cacheKey=pe,I.__webglTexture=fe[pe].texture}return q}function Ne(I,T,q){return Math.floor(Math.floor(I/q)/T)}function qe(I,T,q,me){const fe=I.updateRanges;if(fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,q,me,T.data);else{fe.sort((Xe,Ee)=>Xe.start-Ee.start);let pe=0;for(let Xe=1;Xe<fe.length;Xe++){const Ee=fe[pe],we=fe[Xe],We=Ee.start+Ee.count,ze=Ne(we.start,T.width,4),Ue=Ne(Ee.start,T.width,4);we.start<=We+1&&ze===Ue&&Ne(we.start+we.count-1,T.width,4)===ze?Ee.count=Math.max(Ee.count,we.start+we.count-Ee.start):(++pe,fe[pe]=we)}fe.length=pe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Re=o.getParameter(o.UNPACK_SKIP_PIXELS),Ze=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Xe=0,Ee=fe.length;Xe<Ee;Xe++){const we=fe[Xe],We=Math.floor(we.start/4),ze=Math.ceil(we.count/4),Ue=We%T.width,ut=Math.floor(We/T.width),j=ze;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,ut),i.texSubImage2D(o.TEXTURE_2D,0,Ue,ut,j,1,q,me,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Re),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ze)}}function Q(I,T,q){let me=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=o.TEXTURE_3D);const fe=Se(I,T),pe=T.source;i.bindTexture(me,I.__webglTexture,o.TEXTURE0+q);const De=a.get(pe);if(pe.version!==De.__version||fe===!0){i.activeTexture(o.TEXTURE0+q);const Re=St.getPrimaries(St.workingColorSpace),Ze=T.colorSpace===ia?null:St.getPrimaries(T.colorSpace),Xe=T.colorSpace===ia||Re===Ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Ee=R(T.image,!1,l.maxTextureSize);Ee=wt(T,Ee);const we=c.convert(T.format,T.colorSpace),We=c.convert(T.type);let ze=D(T.internalFormat,we,We,T.colorSpace,T.isVideoTexture);ge(me,T);let Ue;const ut=T.mipmaps,j=T.isVideoTexture!==!0,Pe=De.__version===void 0||fe===!0,Ae=pe.dataReady,Fe=F(T,Ee);if(T.isDepthTexture)ze=N(T.format===La,T.type),Pe&&(j?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,we,We,null));else if(T.isDataTexture)if(ut.length>0){j&&Pe&&i.texStorage2D(o.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let Te=0,he=ut.length;Te<he;Te++)Ue=ut[Te],j?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,we,We,Ue.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,we,We,Ue.data);T.generateMipmaps=!1}else j?(Pe&&i.texStorage2D(o.TEXTURE_2D,Fe,ze,Ee.width,Ee.height),Ae&&qe(T,Ee,we,We)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,we,We,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){j&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,ze,ut[0].width,ut[0].height,Ee.depth);for(let Te=0,he=ut.length;Te<he;Te++)if(Ue=ut[Te],T.format!==bi)if(we!==null)if(j){if(Ae)if(T.layerUpdates.size>0){const He=U_(Ue.width,Ue.height,T.format,T.type);for(const Ke of T.layerUpdates){const Xt=Ue.data.subarray(Ke*He/Ue.data.BYTES_PER_ELEMENT,(Ke+1)*He/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,Ke,Ue.width,Ue.height,1,we,Xt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ee.depth,we,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ee.depth,we,We,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Ue.width,Ue.height,Ee.depth,0,we,We,Ue.data)}else{j&&Pe&&i.texStorage2D(o.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let Te=0,he=ut.length;Te<he;Te++)Ue=ut[Te],T.format!==bi?we!==null?j?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,we,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,we,We,Ue.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,we,We,Ue.data)}else if(T.isDataArrayTexture)if(j){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,ze,Ee.width,Ee.height,Ee.depth),Ae)if(T.layerUpdates.size>0){const Te=U_(Ee.width,Ee.height,T.format,T.type);for(const he of T.layerUpdates){const He=Ee.data.subarray(he*Te/Ee.data.BYTES_PER_ELEMENT,(he+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,we,We,He)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,we,We,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,we,We,Ee.data);else if(T.isData3DTexture)j?(Pe&&i.texStorage3D(o.TEXTURE_3D,Fe,ze,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,we,We,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,we,We,Ee.data);else if(T.isFramebufferTexture){if(Pe)if(j)i.texStorage2D(o.TEXTURE_2D,Fe,ze,Ee.width,Ee.height);else{let Te=Ee.width,he=Ee.height;for(let He=0;He<Fe;He++)i.texImage2D(o.TEXTURE_2D,He,ze,Te,he,0,we,We,null),Te>>=1,he>>=1}}else if(ut.length>0){if(j&&Pe){const Te=je(ut[0]);i.texStorage2D(o.TEXTURE_2D,Fe,ze,Te.width,Te.height)}for(let Te=0,he=ut.length;Te<he;Te++)Ue=ut[Te],j?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,we,We,Ue):i.texImage2D(o.TEXTURE_2D,Te,ze,we,We,Ue);T.generateMipmaps=!1}else if(j){if(Pe){const Te=je(Ee);i.texStorage2D(o.TEXTURE_2D,Fe,ze,Te.width,Te.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,we,We,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,we,We,Ee);_(T)&&y(me),De.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Me(I,T,q){if(T.image.length!==6)return;const me=Se(I,T),fe=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+q);const pe=a.get(fe);if(fe.version!==pe.__version||me===!0){i.activeTexture(o.TEXTURE0+q);const De=St.getPrimaries(St.workingColorSpace),Re=T.colorSpace===ia?null:St.getPrimaries(T.colorSpace),Ze=T.colorSpace===ia||De===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!Xe&&!Ee?we[he]=R(T.image[he],!0,l.maxCubemapSize):we[he]=Ee?T.image[he].image:T.image[he],we[he]=wt(T,we[he]);const We=we[0],ze=c.convert(T.format,T.colorSpace),Ue=c.convert(T.type),ut=D(T.internalFormat,ze,Ue,T.colorSpace),j=T.isVideoTexture!==!0,Pe=pe.__version===void 0||me===!0,Ae=fe.dataReady;let Fe=F(T,We);ge(o.TEXTURE_CUBE_MAP,T);let Te;if(Xe){j&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,We.width,We.height);for(let he=0;he<6;he++){Te=we[he].mipmaps;for(let He=0;He<Te.length;He++){const Ke=Te[He];T.format!==bi?ze!==null?j?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Ke.width,Ke.height,ze,Ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ut,Ke.width,Ke.height,0,Ke.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Ke.width,Ke.height,ze,Ue,Ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ut,Ke.width,Ke.height,0,ze,Ue,Ke.data)}}}else{if(Te=T.mipmaps,j&&Pe){Te.length>0&&Fe++;const he=je(we[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){j?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,ze,Ue,we[he].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,we[he].width,we[he].height,0,ze,Ue,we[he].data);for(let He=0;He<Te.length;He++){const Ke=Te[He].image[he].image;j?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Ke.width,Ke.height,ze,Ue,Ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ut,Ke.width,Ke.height,0,ze,Ue,Ke.data)}}else{j?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,Ue,we[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,ze,Ue,we[he]);for(let He=0;He<Te.length;He++){const Ke=Te[He];j?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,ze,Ue,Ke.image[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ut,ze,Ue,Ke.image[he])}}}_(T)&&y(o.TEXTURE_CUBE_MAP),pe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function be(I,T,q,me,fe,pe){const De=c.convert(q.format,q.colorSpace),Re=c.convert(q.type),Ze=D(q.internalFormat,De,Re,q.colorSpace),Xe=a.get(T),Ee=a.get(q);if(Ee.__renderTarget=T,!Xe.__hasExternalTextures){const we=Math.max(1,T.width>>pe),We=Math.max(1,T.height>>pe);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?i.texImage3D(fe,pe,Ze,we,We,T.depth,0,De,Re,null):i.texImage2D(fe,pe,Ze,we,We,0,De,Re,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,fe,Ee.__webglTexture,0,G(T)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,fe,Ee.__webglTexture,pe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function et(I,T,q){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const me=T.depthTexture,fe=me&&me.isDepthTexture?me.type:null,pe=N(T.stencilBuffer,fe),De=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(T),pe,T.width,T.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(T),pe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,I)}else{const me=T.textures;for(let fe=0;fe<me.length;fe++){const pe=me[fe],De=c.convert(pe.format,pe.colorSpace),Re=c.convert(pe.type),Ze=D(pe.internalFormat,De,Re,pe.colorSpace);qt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(T),Ze,T.width,T.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(T),Ze,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ze,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ye(I,T,q){const me=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=a.get(T.depthTexture);if(fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,T.depthTexture.addEventListener("dispose",k)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ge(o.TEXTURE_CUBE_MAP,T.depthTexture);const Xe=c.convert(T.depthTexture.format),Ee=c.convert(T.depthTexture.type);let we;T.depthTexture.format===xn?we=o.DEPTH_COMPONENT24:T.depthTexture.format===La&&(we=o.DEPTH24_STENCIL8);for(let We=0;We<6;We++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,we,T.width,T.height,0,Xe,Ee,null)}}else re(T.depthTexture,0);const pe=fe.__webglTexture,De=G(T),Re=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Ze=T.depthTexture.format===La?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===xn)qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,pe,0);else if(T.depthTexture.format===La)qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,pe,0);else throw new Error("Unknown depthTexture format")}function Be(I){const T=a.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",fe)};me.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=me}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)Ye(T.__webglFramebuffer[me],I,me);else{const me=I.texture.mipmaps;me&&me.length>0?Ye(T.__webglFramebuffer[0],I,0):Ye(T.__webglFramebuffer,I,0)}else if(q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=o.createRenderbuffer(),et(T.__webglDepthbuffer[me],I,!1);else{const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,pe)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),et(T.__webglDepthbuffer,I,!1);else{const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,pe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(I,T,q){const me=a.get(I);T!==void 0&&be(me.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&Be(I)}function Tt(I){const T=I.texture,q=a.get(I),me=a.get(T);I.addEventListener("dispose",O);const fe=I.textures,pe=I.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=T.version,d.memory.textures++),pe){q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Re]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)q.__webglFramebuffer[Re][Ze]=o.createFramebuffer()}else q.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)q.__webglFramebuffer[Re]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(De)for(let Re=0,Ze=fe.length;Re<Ze;Re++){const Xe=a.get(fe[Re]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&qt(I)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Re=0;Re<fe.length;Re++){const Ze=fe[Re];q.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Re]);const Xe=c.convert(Ze.format,Ze.colorSpace),Ee=c.convert(Ze.type),we=D(Ze.internalFormat,Xe,Ee,Ze.colorSpace,I.isXRRenderTarget===!0),We=G(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,we,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,q.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),et(q.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ge(o.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)be(q.__webglFramebuffer[Re][Ze],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze);else be(q.__webglFramebuffer[Re],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(T)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let Re=0,Ze=fe.length;Re<Ze;Re++){const Xe=fe[Re],Ee=a.get(Xe);let we=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,Ee.__webglTexture),ge(we,Xe),be(q.__webglFramebuffer,I,Xe,o.COLOR_ATTACHMENT0+Re,we,0),_(Xe)&&y(we)}i.unbindTexture()}else{let Re=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Re,me.__webglTexture),ge(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)be(q.__webglFramebuffer[Ze],I,T,o.COLOR_ATTACHMENT0,Re,Ze);else be(q.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,Re,0);_(T)&&y(Re),i.unbindTexture()}I.depthBuffer&&Be(I)}function at(I){const T=I.textures;for(let q=0,me=T.length;q<me;q++){const fe=T[q];if(_(fe)){const pe=A(I),De=a.get(fe).__webglTexture;i.bindTexture(pe,De),y(pe),i.unbindTexture()}}}const rr=[],Yt=[];function Ut(I){if(I.samples>0){if(qt(I)===!1){const T=I.textures,q=I.width,me=I.height;let fe=o.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=a.get(I),Re=T.length>1;if(Re)for(let Xe=0;Xe<T.length;Xe++)i.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ze=I.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,De.__webglColorRenderbuffer[Xe]);const Ee=a.get(T[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,q,me,0,0,q,me,fe,o.NEAREST),m===!0&&(rr.length=0,Yt.length=0,rr.push(o.COLOR_ATTACHMENT0+Xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rr.push(pe),Yt.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,rr))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Xe=0;Xe<T.length;Xe++){i.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,De.__webglColorRenderbuffer[Xe]);const Ee=a.get(T[Xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function G(I){return Math.min(l.maxSamples,I.samples)}function qt(I){const T=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(I){const T=d.render.frame;v.get(I)!==T&&(v.set(I,T),I.update())}function wt(I,T){const q=I.colorSpace,me=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==ko&&q!==ia&&(St.getTransfer(q)===It?(me!==bi||fe!==ci)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",q)),T}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=se,this.resetTextureUnits=J,this.setTexture2D=re,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=ce,this.rebindTextures=Et,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iC(o,e){function i(a,l=ia){let c;const d=St.getTransfer(l);if(a===ci)return o.UNSIGNED_BYTE;if(a===ip)return o.UNSIGNED_SHORT_4_4_4_4;if(a===np)return o.UNSIGNED_SHORT_5_5_5_1;if(a===U0)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===D0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===L0)return o.BYTE;if(a===I0)return o.SHORT;if(a===Js)return o.UNSIGNED_SHORT;if(a===rp)return o.INT;if(a===Oi)return o.UNSIGNED_INT;if(a===Ui)return o.FLOAT;if(a===Sn)return o.HALF_FLOAT;if(a===k0)return o.ALPHA;if(a===F0)return o.RGB;if(a===bi)return o.RGBA;if(a===xn)return o.DEPTH_COMPONENT;if(a===La)return o.DEPTH_STENCIL;if(a===O0)return o.RED;if(a===ap)return o.RED_INTEGER;if(a===Do)return o.RG;if(a===op)return o.RG_INTEGER;if(a===sp)return o.RGBA_INTEGER;if(a===$c||a===Zc||a===Jc||a===Kc)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ff||a===pf||a===mf||a===gf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ff)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===pf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===mf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vf||a===_f||a===yf||a===Sf||a===xf||a===bf||a===Mf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===vf||a===_f)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===yf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Sf)return c.COMPRESSED_R11_EAC;if(a===xf)return c.COMPRESSED_SIGNED_R11_EAC;if(a===bf)return c.COMPRESSED_RG11_EAC;if(a===Mf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Ef||a===Tf||a===wf||a===Af||a===Cf||a===Rf||a===Pf||a===Nf||a===Lf||a===If||a===Uf||a===Df||a===kf||a===Ff)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ef)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Tf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Af)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Cf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Rf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Lf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===If)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Uf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Df)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ff)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Of||a===Bf||a===zf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Of)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Bf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===zf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Hf||a===Vf||a===Gf||a===Wf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Hf)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Vf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Gf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ks?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:i}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new J0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new Bi({vertexShader:nC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new du(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends Bo{constructor(e,i){super();const a=this;let l=null,c=1,d=null,p="local-floor",m=1,f=null,v=null,b=null,g=null,S=null,x=null;const R=typeof XRWebGLBinding<"u",_=new oC,y={},A=i.getContextAttributes();let D=null,N=null;const F=[],k=[],O=new Bt;let E=null;const P=new li;P.viewport=new or;const ue=new li;ue.viewport=new or;const V=[P,ue],J=new y1;let se=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Me=F[Q];return Me===void 0&&(Me=new Rh,F[Q]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(Q){let Me=F[Q];return Me===void 0&&(Me=new Rh,F[Q]=Me),Me.getGripSpace()},this.getHand=function(Q){let Me=F[Q];return Me===void 0&&(Me=new Rh,F[Q]=Me),Me.getHandSpace()};function re(Q){const Me=k.indexOf(Q.inputSource);if(Me===-1)return;const be=F[Me];be!==void 0&&(be.update(Q.inputSource,Q.frame,f||d),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",H);for(let Q=0;Q<F.length;Q++){const Me=k[Q];Me!==null&&(k[Q]=null,F[Q].disconnect(Me))}se=null,le=null,_.reset();for(const Q in y)delete y[Q];e.setRenderTarget(D),S=null,g=null,b=null,l=null,N=null,qe.stop(),a.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){p=Q,a.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||d},this.setReferenceSpace=function(Q){f=Q},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return b===null&&R&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",U),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,be=null,et=null;A.depth&&(et=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=A.stencil?La:xn,be=A.stencil?Ks:Oi);const Ye={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};b=this.getBinding(),g=b.createProjectionLayer(Ye),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Fi(g.textureWidth,g.textureHeight,{format:bi,type:ci,depthTexture:new Ys(g.textureWidth,g.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Fi(S.framebufferWidth,S.framebufferHeight,{format:bi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),f=null,d=await l.requestReferenceSpace(p),qe.setContext(l),qe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Q){for(let Me=0;Me<Q.removed.length;Me++){const be=Q.removed[Me],et=k.indexOf(be);et>=0&&(k[et]=null,F[et].disconnect(be))}for(let Me=0;Me<Q.added.length;Me++){const be=Q.added[Me];let et=k.indexOf(be);if(et===-1){for(let Be=0;Be<F.length;Be++)if(Be>=k.length){k.push(be),et=Be;break}else if(k[Be]===null){k[Be]=be,et=Be;break}if(et===-1)break}const Ye=F[et];Ye&&Ye.connect(be)}}const ce=new ie,_e=new ie;function L(Q,Me,be){ce.setFromMatrixPosition(Me.matrixWorld),_e.setFromMatrixPosition(be.matrixWorld);const et=ce.distanceTo(_e),Ye=Me.projectionMatrix.elements,Be=be.projectionMatrix.elements,Et=Ye[14]/(Ye[10]-1),Tt=Ye[14]/(Ye[10]+1),at=(Ye[9]+1)/Ye[5],rr=(Ye[9]-1)/Ye[5],Yt=(Ye[8]-1)/Ye[0],Ut=(Be[8]+1)/Be[0],G=Et*Yt,qt=Et*Ut,yt=et/(-Yt+Ut),wt=yt*-Yt;if(Me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ye[10]===-1)Q.projectionMatrix.copy(Me.projectionMatrix),Q.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const je=Et+yt,I=Tt+yt,T=G-wt,q=qt+(et-wt),me=at*Tt/I*je,fe=rr*Tt/I*je;Q.projectionMatrix.makePerspective(T,q,me,fe,je,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function K(Q,Me){Me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let Me=Q.near,be=Q.far;_.texture!==null&&(_.depthNear>0&&(Me=_.depthNear),_.depthFar>0&&(be=_.depthFar)),J.near=ue.near=P.near=Me,J.far=ue.far=P.far=be,(se!==J.near||le!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),se=J.near,le=J.far),J.layers.mask=Q.layers.mask|6,P.layers.mask=J.layers.mask&-5,ue.layers.mask=J.layers.mask&-3;const et=Q.parent,Ye=J.cameras;K(J,et);for(let Be=0;Be<Ye.length;Be++)K(Ye[Be],et);Ye.length===2?L(J,P,ue):J.projectionMatrix.copy(P.projectionMatrix),ge(Q,J,et)};function ge(Q,Me,be){be===null?Q.matrix.copy(Me.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Me.projectionMatrix),Q.projectionMatrixInverse.copy(Me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(Q){m=Q,g!==null&&(g.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(Q){return y[Q]};let Se=null;function Ne(Q,Me){if(v=Me.getViewerPose(f||d),x=Me,v!==null){const be=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let et=!1;be.length!==J.cameras.length&&(J.cameras.length=0,et=!0);for(let Be=0;Be<be.length;Be++){const Et=be[Be];let Tt=null;if(S!==null)Tt=S.getViewport(Et);else{const rr=b.getViewSubImage(g,Et);Tt=rr.viewport,Be===0&&(e.setRenderTargetTextures(N,rr.colorTexture,rr.depthStencilTexture),e.setRenderTarget(N))}let at=V[Be];at===void 0&&(at=new li,at.layers.enable(Be),at.viewport=new or,V[Be]=at),at.matrix.fromArray(Et.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Et.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Be===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),et===!0&&J.cameras.push(at)}const Ye=l.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){b=a.getBinding();const Be=b.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&_.init(Be,l.renderState)}if(Ye&&Ye.includes("camera-access")&&R){e.state.unbindTexture(),b=a.getBinding();for(let Be=0;Be<be.length;Be++){const Et=be[Be].camera;if(Et){let Tt=y[Et];Tt||(Tt=new J0,y[Et]=Tt);const at=b.getCameraImage(Et);Tt.sourceTexture=at}}}}for(let be=0;be<F.length;be++){const et=k[be],Ye=F[be];et!==null&&Ye!==void 0&&Ye.update(et,Me,f||d)}Se&&Se(Q,Me),Me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Me}),x=null}const qe=new ey;qe.setAnimationLoop(Ne),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Aa=new bn,lC=new tr;function cC(o,e){function i(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function a(_,y){y.color.getRGB(_.fogColor.value,K0(o)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function l(_,y,A,D,N){y.isMeshBasicMaterial?c(_,y):y.isMeshLambertMaterial?(c(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(_,y),b(_,y)):y.isMeshPhongMaterial?(c(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(_,y),g(_,y),y.isMeshPhysicalMaterial&&S(_,y,N)):y.isMeshMatcapMaterial?(c(_,y),x(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),R(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(d(_,y),y.isLineDashedMaterial&&p(_,y)):y.isPointsMaterial?m(_,y,A,D):y.isSpriteMaterial?f(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,i(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,i(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Vr&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,i(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Vr&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,i(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,i(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const A=e.get(y),D=A.envMap,N=A.envMapRotation;D&&(_.envMap.value=D,Aa.copy(N),Aa.x*=-1,Aa.y*=-1,Aa.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Aa.y*=-1,Aa.z*=-1),_.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Aa)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,_.aoMapTransform))}function d(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,i(y.map,_.mapTransform))}function p(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function m(_,y,A,D){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*A,_.scale.value=D*.5,y.map&&(_.map.value=y.map,i(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function f(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,i(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function b(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,A){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vr&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,y){y.matcap&&(_.matcap.value=y.matcap)}function R(_,y){const A=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function uC(o,e,i,a){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const N=D.program;a.uniformBlockBinding(A,N)}function f(A,D){let N=l[A.id];N===void 0&&(x(A),N=v(A),l[A.id]=N,A.addEventListener("dispose",_));const F=D.program;a.updateUBOMapping(A,F);const k=e.render.frame;c[A.id]!==k&&(g(A),c[A.id]=k)}function v(A){const D=b();A.__bindingPointIndex=D;const N=o.createBuffer(),F=A.__size,k=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,N),N}function b(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=l[A.id],N=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let k=0,O=N.length;k<O;k++){const E=Array.isArray(N[k])?N[k]:[N[k]];for(let P=0,ue=E.length;P<ue;P++){const V=E[P];if(S(V,k,P,F)===!0){const J=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let re=0;re<se.length;re++){const U=se[re],H=R(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,J+le,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):(U.toArray(V.__data,le),le+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(A,D,N,F){const k=A.value,O=D+"_"+N;if(F[O]===void 0)return typeof k=="number"||typeof k=="boolean"?F[O]=k:F[O]=k.clone(),!0;{const E=F[O];if(typeof k=="number"||typeof k=="boolean"){if(E!==k)return F[O]=k,!0}else if(E.equals(k)===!1)return E.copy(k),!0}return!1}function x(A){const D=A.uniforms;let N=0;const F=16;for(let O=0,E=D.length;O<E;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let ue=0,V=P.length;ue<V;ue++){const J=P[ue],se=Array.isArray(J.value)?J.value:[J.value];for(let le=0,re=se.length;le<re;le++){const U=se[le],H=R(U),ce=N%F,_e=ce%H.boundary,L=ce+_e;N+=_e,L!==0&&F-L<H.storage&&(N+=F-L),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=H.storage}}}const k=N%F;return k>0&&(N+=F-k),A.__size=N,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",A),D}function _(A){const D=A.target;D.removeEventListener("dispose",_);const N=d.indexOf(D.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function y(){for(const A in l)o.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:f,dispose:y}}const dC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function hC(){return Li===null&&(Li=new i1(dC,16,16,Do,Sn),Li.name="DFG_LUT",Li.minFilter=Rr,Li.magFilter=Rr,Li.wrapS=mn,Li.wrapT=mn,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class fC{constructor(e={}){const{canvas:i=UM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:f=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ci}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=d;const R=S,_=new Set([sp,op,ap]),y=new Set([ci,Oi,Js,Ks,ip,np]),A=new Uint32Array(4),D=new Int32Array(4);let N=null,F=null;const k=[],O=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let ue=!1;this._outputColorSpace=si;let V=0,J=0,se=null,le=-1,re=null;const U=new or,H=new or;let ce=null;const _e=new vt(0);let L=0,K=i.width,ge=i.height,Se=1,Ne=null,qe=null;const Q=new or(0,0,K,ge),Me=new or(0,0,K,ge);let be=!1;const et=new q0;let Ye=!1,Be=!1;const Et=new tr,Tt=new ie,at=new or,rr={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ut(){return se===null?Se:1}let G=a;function qt(C,X){return i.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:f,powerPreference:v,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",Ke,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),G===null){const X="webgl2";if(G=qt(X,C),G===null)throw qt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Mt("WebGLRenderer: "+C.message),C}let yt,wt,je,I,T,q,me,fe,pe,De,Re,Ze,Xe,Ee,we,We,ze,Ue,ut,j,Pe,Ae,Fe;function Te(){yt=new fw(G),yt.init(),Pe=new iC(G,yt),wt=new aw(G,yt,e,Pe),je=new tC(G,yt),wt.reversedDepthBuffer&&g&&je.buffers.depth.setReversed(!0),I=new gw(G),T=new HA,q=new rC(G,yt,je,T,wt,Pe,I),me=new hw(P),fe=new x1(G),Ae=new iw(G,fe),pe=new pw(G,fe,I,Ae),De=new _w(G,pe,fe,Ae,I),Ue=new vw(G,wt,q),we=new ow(T),Re=new zA(P,me,yt,wt,Ae,we),Ze=new cC(P,T),Xe=new GA,Ee=new ZA(yt),ze=new rw(P,me,je,De,x,m),We=new eC(P,De,wt),Fe=new uC(G,I,wt,je),ut=new nw(G,yt,I),j=new mw(G,yt,I),I.programs=Re.programs,P.capabilities=wt,P.extensions=yt,P.properties=T,P.renderLists=Xe,P.shadowMap=We,P.state=je,P.info=I}Te(),R!==ci&&(E=new Sw(R,i.width,i.height,l,c));const he=new sC(P,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(C){C!==void 0&&(Se=C,this.setSize(K,ge,!1))},this.getSize=function(C){return C.set(K,ge)},this.setSize=function(C,X,oe=!0){if(he.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,ge=X,i.width=Math.floor(C*Se),i.height=Math.floor(X*Se),oe===!0&&(i.style.width=C+"px",i.style.height=X+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(K*Se,ge*Se).floor()},this.setDrawingBufferSize=function(C,X,oe){K=C,ge=X,Se=oe,i.width=Math.floor(C*oe),i.height=Math.floor(X*oe),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,X,oe,te){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,X,oe,te),je.viewport(U.copy(Q).multiplyScalar(Se).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,X,oe,te){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,X,oe,te),je.scissor(H.copy(Me).multiplyScalar(Se).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){je.setScissorTest(be=C)},this.setOpaqueSort=function(C){Ne=C},this.setTransparentSort=function(C){qe=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,oe=!0){let te=0;if(C){let Z=!1;if(se!==null){const Ce=se.texture.format;Z=_.has(Ce)}if(Z){const Ce=se.texture.type,Le=y.has(Ce),ke=ze.getClearColor(),Oe=ze.getClearAlpha(),Qe=ke.r,ot=ke.g,dt=ke.b;Le?(A[0]=Qe,A[1]=ot,A[2]=dt,A[3]=Oe,G.clearBufferuiv(G.COLOR,0,A)):(D[0]=Qe,D[1]=ot,D[2]=dt,D[3]=Oe,G.clearBufferiv(G.COLOR,0,D))}else te|=G.COLOR_BUFFER_BIT}X&&(te|=G.DEPTH_BUFFER_BIT),oe&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",Ke,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),ze.dispose(),Xe.dispose(),Ee.dispose(),T.dispose(),me.dispose(),De.dispose(),Ae.dispose(),Fe.dispose(),Re.dispose(),he.dispose(),he.removeEventListener("sessionstart",Da),he.removeEventListener("sessionend",ol),Vi.stop()};function He(C){C.preventDefault(),d_("WebGLRenderer: Context Lost."),ue=!0}function Ke(){d_("WebGLRenderer: Context Restored."),ue=!1;const C=I.autoReset,X=We.enabled,oe=We.autoUpdate,te=We.needsUpdate,Z=We.type;Te(),I.autoReset=C,We.enabled=X,We.autoUpdate=oe,We.needsUpdate=te,We.type=Z}function Xt(C){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const X=C.target;X.removeEventListener("dispose",xt),hi(X)}function hi(C){mr(C),T.remove(C)}function mr(C){const X=T.get(C).programs;X!==void 0&&(X.forEach(function(oe){Re.releaseProgram(oe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,oe,te,Z,Ce){X===null&&(X=rr);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=sl(C,X,oe,te,Z);je.setMaterial(te,Le);let Oe=oe.index,Qe=1;if(te.wireframe===!0){if(Oe=pe.getWireframeAttribute(oe),Oe===void 0)return;Qe=2}const ot=oe.drawRange,dt=oe.attributes.position;let Ve=ot.start*Qe,Pt=(ot.start+ot.count)*Qe;Ce!==null&&(Ve=Math.max(Ve,Ce.start*Qe),Pt=Math.min(Pt,(Ce.start+Ce.count)*Qe)),Oe!==null?(Ve=Math.max(Ve,0),Pt=Math.min(Pt,Oe.count)):dt!=null&&(Ve=Math.max(Ve,0),Pt=Math.min(Pt,dt.count));const $t=Pt-Ve;if($t<0||$t===1/0)return;Ae.setup(Z,te,ke,oe,Oe);let Dt,Ct=ut;if(Oe!==null&&(Dt=fe.get(Oe),Ct=j,Ct.setIndex(Dt)),Z.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Ut()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(Z.isLine){let zt=te.linewidth;zt===void 0&&(zt=1),je.setLineWidth(zt*Ut()),Z.isLineSegments?Ct.setMode(G.LINES):Z.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else Z.isPoints?Ct.setMode(G.POINTS):Z.isSprite&&Ct.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)au("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const zt=Z._multiDrawStarts,Je=Z._multiDrawCounts,Gt=Z._multiDrawCount,pi=Oe?fe.get(Oe).bytesPerElement:1,Ur=T.get(te).currentProgram.getUniforms();for(let Dr=0;Dr<Gt;Dr++)Ur.setValue(G,"_gl_DrawID",Dr),Ct.render(zt[Dr]/pi,Je[Dr])}else if(Z.isInstancedMesh)Ct.renderInstances(Ve,$t,Z.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Je=Math.min(oe.instanceCount,zt);Ct.renderInstances(Ve,$t,Je)}else Ct.render(Ve,$t)};function ur(C,X,oe){C.transparent===!0&&C.side===pn&&C.forceSinglePass===!1?(C.side=Vr,C.needsUpdate=!0,Ei(C,X,oe),C.side=aa,C.needsUpdate=!0,Ei(C,X,oe),C.side=pn):Ei(C,X,oe)}this.compile=function(C,X,oe=null){oe===null&&(oe=C),F=Ee.get(oe),F.init(X),O.push(F),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),C!==oe&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const te=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){const ke=Ce[Le];ur(ke,oe,Z),te.add(ke)}else ur(Ce,oe,Z),te.add(Ce)}),F=O.pop(),te},this.compileAsync=function(C,X,oe=null){const te=this.compile(C,X,oe);return new Promise(Z=>{function Ce(){if(te.forEach(function(Le){T.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Z(C);return}setTimeout(Ce,10)}yt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let gr=null;function Tn(C){gr&&gr(C)}function Da(){Vi.stop()}function ol(){Vi.start()}const Vi=new ey;Vi.setAnimationLoop(Tn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){gr=C,he.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},he.addEventListener("sessionstart",Da),he.addEventListener("sessionend",ol),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const oe=he.enabled===!0&&he.isPresenting===!0,te=E!==null&&(se===null||oe)&&E.begin(P,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,X,se),F=Ee.get(C,O.length),F.init(X),O.push(F),Et.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),et.setFromProjectionMatrix(Et,Di,X.reversedDepth),Be=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,Be),N=Xe.get(C,k.length),N.init(),k.push(N),he.enabled===!0&&he.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&ka(Ce,X,-1/0,P.sortObjects)}ka(C,X,0,P.sortObjects),N.finish(),P.sortObjects===!0&&N.sort(Ne,qe),Yt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Yt&&ze.addToRenderList(N,C),this.info.render.frame++,Ye===!0&&we.beginShadows();const Z=F.state.shadowsArray;if(We.render(Z,C,X),Ye===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&E.hasRenderPass())===!1){const Ce=N.opaque,Le=N.transmissive;if(F.setupLights(),X.isArrayCamera){const ke=X.cameras;if(Le.length>0)for(let Oe=0,Qe=ke.length;Oe<Qe;Oe++){const ot=ke[Oe];Fa(Ce,Le,C,ot)}Yt&&ze.render(C);for(let Oe=0,Qe=ke.length;Oe<Qe;Oe++){const ot=ke[Oe];wn(N,C,ot,ot.viewport)}}else Le.length>0&&Fa(Ce,Le,C,X),Yt&&ze.render(C),wn(N,C,X)}se!==null&&J===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),te&&E.end(P),C.isScene===!0&&C.onAfterRender(P,C,X),Ae.resetDefaultState(),le=-1,re=null,O.pop(),O.length>0?(F=O[O.length-1],Ye===!0&&we.setGlobalState(P.clippingPlanes,F.state.camera)):F=null,k.pop(),k.length>0?N=k[k.length-1]:N=null};function ka(C,X,oe,te){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||et.intersectsSprite(C)){te&&at.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);const Ce=De.update(C),Le=C.material;Le.visible&&N.push(C,Ce,Le,oe,at.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||et.intersectsObject(C))){const Ce=De.update(C),Le=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),at.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),at.copy(Ce.boundingSphere.center)),at.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(Le)){const ke=Ce.groups;for(let Oe=0,Qe=ke.length;Oe<Qe;Oe++){const ot=ke[Oe],dt=Le[ot.materialIndex];dt&&dt.visible&&N.push(C,Ce,dt,oe,at.z,ot)}}else Le.visible&&N.push(C,Ce,Le,oe,at.z,null)}}const Z=C.children;for(let Ce=0,Le=Z.length;Ce<Le;Ce++)ka(Z[Ce],X,oe,te)}function wn(C,X,oe,te){const{opaque:Z,transmissive:Ce,transparent:Le}=C;F.setupLightsView(oe),Ye===!0&&we.setGlobalState(P.clippingPlanes,oe),te&&je.viewport(U.copy(te)),Z.length>0&&fi(Z,X,oe),Ce.length>0&&fi(Ce,X,oe),Le.length>0&&fi(Le,X,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Fa(C,X,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[te.id]===void 0){const dt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[te.id]=new Fi(1,1,{generateMipmaps:!0,type:dt?Sn:ci,minFilter:Na,samples:Math.max(4,wt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Z=F.state.transmissionRenderTarget[te.id],Ce=te.viewport||U;Z.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const Le=P.getRenderTarget(),ke=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Z),P.getClearColor(_e),L=P.getClearAlpha(),L<1&&P.setClearColor(16777215,.5),P.clear(),Yt&&ze.render(oe);const Qe=P.toneMapping;P.toneMapping=ki;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),F.setupLightsView(te),Ye===!0&&we.setGlobalState(P.clippingPlanes,te),fi(C,oe,te),q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z),yt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ve=0,Pt=X.length;Ve<Pt;Ve++){const $t=X[Ve],{object:Dt,geometry:Ct,material:zt,group:Je}=$t;if(zt.side===pn&&Dt.layers.test(te.layers)){const Gt=zt.side;zt.side=Vr,zt.needsUpdate=!0,Gi(Dt,oe,te,Ct,zt,Je),zt.side=Gt,zt.needsUpdate=!0,dt=!0}}dt===!0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z))}P.setRenderTarget(Le,ke,Oe),P.setClearColor(_e,L),ot!==void 0&&(te.viewport=ot),P.toneMapping=Qe}function fi(C,X,oe){const te=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Ce=C.length;Z<Ce;Z++){const Le=C[Z],{object:ke,geometry:Oe,group:Qe}=Le;let ot=Le.material;ot.allowOverride===!0&&te!==null&&(ot=te),ke.layers.test(oe.layers)&&Gi(ke,X,oe,Oe,ot,Qe)}}function Gi(C,X,oe,te,Z,Ce){C.onBeforeRender(P,X,oe,te,Z,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(P,X,oe,te,C,Ce),Z.transparent===!0&&Z.side===pn&&Z.forceSinglePass===!1?(Z.side=Vr,Z.needsUpdate=!0,P.renderBufferDirect(oe,X,te,Z,C,Ce),Z.side=aa,Z.needsUpdate=!0,P.renderBufferDirect(oe,X,te,Z,C,Ce),Z.side=pn):P.renderBufferDirect(oe,X,te,Z,C,Ce),C.onAfterRender(P,X,oe,te,Z,Ce)}function Ei(C,X,oe){X.isScene!==!0&&(X=rr);const te=T.get(C),Z=F.state.lights,Ce=F.state.shadowsArray,Le=Z.state.version,ke=Re.getParameters(C,Z.state,Ce,X,oe),Oe=Re.getProgramCacheKey(ke);let Qe=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const ot=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=me.get(C.envMap||te.environment,ot),te.envMapRotation=te.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",xt),Qe=new Map,te.programs=Qe);let dt=Qe.get(Oe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===Le)return ir(C,ke),dt}else ke.uniforms=Re.getUniforms(C),C.onBeforeCompile(ke,P),dt=Re.acquireProgram(ke,Oe),Qe.set(Oe,dt),te.uniforms=ke.uniforms;const Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=we.uniform),ir(C,ke),te.needsLights=ji(C),te.lightsStateVersion=Le,te.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=dt,te.uniformsList=null,dt}function Wi(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Yc.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function ir(C,X){const oe=T.get(C);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function sl(C,X,oe,te,Z){X.isScene!==!0&&(X=rr),q.resetTextureUnits();const Ce=X.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,ke=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ko,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Qe=me.get(te.envMap||Le,Oe),ot=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!oe.morphAttributes.position,Pt=!!oe.morphAttributes.normal,$t=!!oe.morphAttributes.color;let Dt=ki;te.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Dt=P.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Ct!==void 0?Ct.length:0,Je=T.get(te),Gt=F.state.lights;if(Ye===!0&&(Be===!0||C!==re)){const Zt=C===re&&te.id===le;we.setState(te,C,Zt)}let pi=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==ke||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==Qe||te.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==dt||Je.morphTargets!==Ve||Je.morphNormals!==Pt||Je.morphColors!==$t||Je.toneMapping!==Dt||Je.morphTargetsCount!==zt)&&(pi=!0):(pi=!0,Je.__version=te.version);let Ur=Je.currentProgram;pi===!0&&(Ur=Ei(te,X,Z));let Dr=!1,kr=!1,qi=!1;const Rt=Ur.getUniforms(),Wt=Je.uniforms;if(je.useProgram(Ur.program)&&(Dr=!0,kr=!0,qi=!0),te.id!==le&&(le=te.id,kr=!0),Dr||re!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",C.projectionMatrix),Rt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Zt=Rt.map.cameraPosition;Zt!==void 0&&Zt.setValue(G,Tt.setFromMatrixPosition(C.matrixWorld)),wt.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,kr=!0,qi=!0)}if(Je.needsLights&&(Gt.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",Gt.state.directionalShadowMap,q),Gt.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",Gt.state.spotShadowMap,q),Gt.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",Gt.state.pointShadowMap,q)),Z.isSkinnedMesh){Rt.setOptional(G,Z,"bindMatrix"),Rt.setOptional(G,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Zt.boneTexture,q))}Z.isBatchedMesh&&(Rt.setOptional(G,Z,"batchingTexture"),Rt.setValue(G,"batchingTexture",Z._matricesTexture,q),Rt.setOptional(G,Z,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Rt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Ue.update(Z,oe,Ur),(kr||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,Rt.setValue(G,"receiveShadow",Z.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=hC()),kr&&(Rt.setValue(G,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&ll(Wt,qi),Ce&&te.fog===!0&&Ze.refreshFogUniforms(Wt,Ce),Ze.refreshMaterialUniforms(Wt,te,Se,ge,F.state.transmissionRenderTarget[C.id]),Yc.upload(G,Wi(Je),Wt,q)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Yc.upload(G,Wi(Je),Wt,q),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(G,"center",Z.center),Rt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(G,"normalMatrix",Z.normalMatrix),Rt.setValue(G,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Zt=te.uniformsGroups;for(let Cn=0,wi=Zt.length;Cn<wi;Cn++){const ul=Zt[Cn];Fe.update(ul,Ur),Fe.bind(ul,Ur)}}return Ur}function ll(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ji(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,X,oe){const te=T.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=X,T.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const oe=T.get(C);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const An=G.createFramebuffer();this.setRenderTarget=function(C,X=0,oe=0){se=C,V=X,J=oe;let te=null,Z=!1,Ce=!1;if(C){const Le=T.get(C);if(Le.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(C.viewport),H.copy(C.scissor),ce=C.scissorTest,je.viewport(U),je.scissor(H),je.setScissorTest(ce),le=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Le.__hasExternalTextures)q.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&T.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);const Oe=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[X])?te=Oe[X][oe]:te=Oe[X],Z=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?te=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?te=Oe[oe]:te=Oe,U.copy(C.viewport),H.copy(C.scissor),ce=C.scissorTest}else U.copy(Q).multiplyScalar(Se).floor(),H.copy(Me).multiplyScalar(Se).floor(),ce=be;if(oe!==0&&(te=An),je.bindFramebuffer(G.FRAMEBUFFER,te)&&je.drawBuffers(C,te),je.viewport(U),je.scissor(H),je.setScissorTest(ce),Z){const Le=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,oe)}else if(Ce){const Le=X;for(let ke=0;ke<C.textures.length;ke++){const Oe=T.get(C.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,Oe.__webglTexture,oe,Le)}}else if(C!==null&&oe!==0){const Le=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Le.__webglTexture,oe)}le=-1},this.readRenderTargetPixels=function(C,X,oe,te,Z,Ce,Le,ke=0){if(!(C&&C.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){je.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Qe=C.textures[ke],ot=Qe.format,dt=Qe.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!wt.textureFormatReadable(ot)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(dt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-te&&oe>=0&&oe<=C.height-Z&&G.readPixels(X,oe,te,Z,Pe.convert(ot),Pe.convert(dt),Ce)}finally{const Qe=se!==null?T.get(se).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,X,oe,te,Z,Ce,Le,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(X>=0&&X<=C.width-te&&oe>=0&&oe<=C.height-Z){je.bindFramebuffer(G.FRAMEBUFFER,Oe);const Qe=C.textures[ke],ot=Qe.format,dt=Qe.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),!wt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),G.readPixels(X,oe,te,Z,Pe.convert(ot),Pe.convert(dt),0);const Pt=se!==null?T.get(se).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Pt);const $t=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await DM(G,$t,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.deleteBuffer(Ve),G.deleteSync($t),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,oe=0){const te=Math.pow(2,-oe),Z=Math.floor(C.image.width*te),Ce=Math.floor(C.image.height*te),Le=X!==null?X.x:0,ke=X!==null?X.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Le,ke,Z,Ce),je.unbindTexture()};const pu=G.createFramebuffer(),cl=G.createFramebuffer();this.copyTextureToTexture=function(C,X,oe=null,te=null,Z=0,Ce=0){let Le,ke,Oe,Qe,ot,dt,Ve,Pt,$t;const Dt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(oe!==null)Le=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,Qe=oe.min.x,ot=oe.min.y,dt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-Z);Le=Math.floor(Dt.width*Wt),ke=Math.floor(Dt.height*Wt),C.isDataArrayTexture?Oe=Dt.depth:C.isData3DTexture?Oe=Math.floor(Dt.depth*Wt):Oe=1,Qe=0,ot=0,dt=0}te!==null?(Ve=te.x,Pt=te.y,$t=te.z):(Ve=0,Pt=0,$t=0);const Ct=Pe.convert(X.format),zt=Pe.convert(X.type);let Je;X.isData3DTexture?(q.setTexture3D(X,0),Je=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Je=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Gt=G.getParameter(G.UNPACK_ROW_LENGTH),pi=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ur=G.getParameter(G.UNPACK_SKIP_PIXELS),Dr=G.getParameter(G.UNPACK_SKIP_ROWS),kr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,dt);const qi=C.isDataArrayTexture||C.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Wt=T.get(C),Ti=T.get(X),Zt=T.get(Wt.__renderTarget),Cn=T.get(Ti.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,Zt.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let wi=0;wi<Oe;wi++)qi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(C).__webglTexture,Z,dt+wi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(X).__webglTexture,Ce,$t+wi)),G.blitFramebuffer(Qe,ot,Le,ke,Ve,Pt,Le,ke,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||T.has(C)){const Wt=T.get(C),Ti=T.get(X);je.bindFramebuffer(G.READ_FRAMEBUFFER,pu),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,cl);for(let Zt=0;Zt<Oe;Zt++)qi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.__webglTexture,Z,dt+Zt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,Z),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ti.__webglTexture,Ce,$t+Zt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ti.__webglTexture,Ce),Z!==0?G.blitFramebuffer(Qe,ot,Le,ke,Ve,Pt,Le,ke,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(Je,Ce,Ve,Pt,$t+Zt,Qe,ot,Le,ke):G.copyTexSubImage2D(Je,Ce,Ve,Pt,Qe,ot,Le,ke);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Je,Ce,Ve,Pt,$t,Le,ke,Oe,Ct,zt,Dt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,Ce,Ve,Pt,$t,Le,ke,Oe,Ct,Dt.data):G.texSubImage3D(Je,Ce,Ve,Pt,$t,Le,ke,Oe,Ct,zt,Dt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Le,ke,Ct,zt,Dt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Dt.width,Dt.height,Ct,Dt.data):G.texSubImage2D(G.TEXTURE_2D,Ce,Ve,Pt,Le,ke,Ct,zt,Dt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pi),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ur),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dr),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kr),Ce===0&&X.generateMipmaps&&G.generateMipmap(Je),je.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){V=0,J=0,se=null,je.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),i.unpackColorSpace=St._getUnpackColorSpace()}}const pC=160,mC=70,n0=1.6,gC=()=>{const o=de.useRef(null);return de.useEffect(()=>{const e=o.current;if(!e)return;const i=window.innerWidth<768,a=i?mC:pC,l=new KM,c=new li(60,e.clientWidth/e.clientHeight,.1,100);c.position.z=5;const d=new fC({antialias:!0,alpha:!0});d.setSize(e.clientWidth,e.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(d.domElement);const p=[new vt("#b8456e"),new vt("#9d7fb8"),new vt("#e8a090"),new vt("#d4a0b8"),new vt("#ffffff")],m=[],f=new Float32Array(a*3),v=new Float32Array(a*3);for(let k=0;k<a;k++){const O=(Math.random()-.5)*9,E=(Math.random()-.5)*6,P=(Math.random()-.5)*4;m.push({x:O,y:E,z:P,bx:O,by:E,bz:P,vx:(Math.random()-.5)*.004,vy:(Math.random()-.5)*.004,vz:(Math.random()-.5)*.002});const ue=p[Math.floor(Math.random()*p.length)];v[k*3]=ue.r,v[k*3+1]=ue.g,v[k*3+2]=ue.b,f[k*3]=O,f[k*3+1]=E,f[k*3+2]=P}const b=new Yr;b.setAttribute("position",new ui(f,3)),b.setAttribute("color",new ui(v,3));const g=new $0({size:i?.045:.035,vertexColors:!0,transparent:!0,opacity:.85,blending:tu,depthWrite:!1});l.add(new c1(b,g));const S=new Yr,x=new X0({transparent:!0,opacity:.12,color:12076398,blending:tu,depthWrite:!1}),R=new l1(S,x);l.add(R);const _={x:0,y:0},y=k=>{const O=e.getBoundingClientRect();_.x=((k.clientX-O.left)/O.width-.5)*2,_.y=-((k.clientY-O.top)/O.height-.5)*2};e.addEventListener("mousemove",y);const A=()=>{const k=e.clientWidth,O=e.clientHeight;c.aspect=k/O,c.updateProjectionMatrix(),d.setSize(k,O)};window.addEventListener("resize",A);let D=!0,N=0;const F=()=>{if(!D)return;requestAnimationFrame(F),N++;const k=b.getAttribute("position");for(let O=0;O<a;O++){const E=m[O];E.x+=E.vx,E.y+=E.vy,E.z+=E.vz,E.vx+=(E.bx-E.x)*8e-4,E.vy+=(E.by-E.y)*8e-4,E.vz+=(E.bz-E.z)*4e-4,E.x+=_.x*.003,E.y+=_.y*.003,E.vx*=.992,E.vy*=.992,E.vz*=.992,k.array[O*3]=E.x,k.array[O*3+1]=E.y,k.array[O*3+2]=E.z}if(k.needsUpdate=!0,N%3===0){const O=[];for(let E=0;E<a;E++)for(let P=E+1;P<a;P++){const ue=m[E].x-m[P].x,V=m[E].y-m[P].y,J=m[E].z-m[P].z;ue*ue+V*V+J*J<n0*n0&&O.push(m[E].x,m[E].y,m[E].z,m[P].x,m[P].y,m[P].z)}S.setAttribute("position",new di(O,3))}l.rotation.y=Math.sin(Date.now()*8e-5)*.12,l.rotation.x=Math.cos(Date.now()*6e-5)*.05,d.render(l,c)};return requestAnimationFrame(F),()=>{D=!1,e.removeEventListener("mousemove",y),window.removeEventListener("resize",A),d.dispose(),b.dispose(),g.dispose(),S.dispose(),x.dispose(),e.contains(d.domElement)&&e.removeChild(d.domElement)}},[]),z.jsx("div",{ref:o,className:"hero-canvas"})},vC=({words:o,typeSpeed:e=80,deleteSpeed:i=40,pause:a=2200,className:l})=>{const[c,d]=de.useState(""),[p,m]=de.useState(0),[f,v]=de.useState(!1);return de.useEffect(()=>{const b=o[p],g=setTimeout(()=>{f?(d(b.slice(0,c.length-1)),c.length-1===0&&(v(!1),m(S=>(S+1)%o.length))):(d(b.slice(0,c.length+1)),c.length+1===b.length&&setTimeout(()=>v(!0),a))},f?i:e);return()=>clearTimeout(g)},[c,f,p,o,e,i,a]),z.jsxs("span",{className:l,children:[c,z.jsx("span",{className:"typing-cursor","aria-hidden":"true"})]})},_C="/assets/avatar-C2VzNt0k.png",yC=["Software Architect","AI Engineer","Full Stack Developer","Mobile App Developer"],SC=({scrollTo:o})=>z.jsxs("section",{className:"section section--home hero hero--3d",id:"home","aria-labelledby":"hero-heading",children:[z.jsx(gC,{}),z.jsxs("div",{className:"container hero__centered",children:[z.jsx("img",{src:_C,alt:"Taliba Sadiq",className:"hero__avatar",draggable:!1}),z.jsx("p",{className:"hero__eyebrow hero__eyebrow--glow",children:"Available for projects"}),z.jsx("h1",{id:"hero-heading",className:"hero__title hero__title--3d",children:"Taliba Sadiq"}),z.jsx("p",{className:"hero__typing-wrap",children:z.jsx(vC,{words:yC,className:"hero__typing"})}),z.jsx("p",{className:"hero__intro hero__intro--3d",children:"I build software that holds up under real use: scalable systems, intelligent features, and code that keeps working as your product grows. Not just launch-day demos, but lasting solutions."}),z.jsxs("div",{className:"hero__actions hero__actions--center",children:[z.jsx("button",{type:"button",className:"btn btn--primary btn--glow",onClick:()=>o("work","/projects"),children:"See my work"}),z.jsx("button",{type:"button",className:"btn btn--ghost btn--ghost-dark",onClick:()=>o("contact","/contact"),children:"Let's talk"})]})]})]}),xC=[{title:"A product outgrowing its structure",body:"The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds."},{title:"A codebase that's becoming fragile",body:"People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick."},{title:"A prototype that needs to grow up",body:"The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features."},{title:"AI that needs to actually work",body:"Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable."}],bC=()=>z.jsx("section",{className:"section section--philosophy reveal",id:"philosophy","aria-labelledby":"philosophy-heading",children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"philosophy__head",children:[z.jsx("span",{className:"section__label",children:"When I get involved"}),z.jsx("h2",{id:"philosophy-heading",className:"philosophy__title",children:"I focus on what happens after launch"}),z.jsx("p",{className:"philosophy__lead",children:"First demos are easy. I focus on the hard part: more features, team changes, and someone new opening the repo. Good structure is what keeps you from rewriting everything twice."})]}),z.jsx("div",{className:"pillars__grid",children:xC.map((o,e)=>z.jsxs("div",{className:"pillar-card reveal reveal--delay-1",children:[z.jsx("p",{className:"pillar-card__num",children:String(e+1).padStart(2,"0")}),z.jsx("h3",{className:"pillar-card__title",children:o.title}),z.jsx("p",{children:o.body})]},o.title))}),z.jsxs("div",{className:"philosophy__closing reveal",children:[z.jsxs("p",{className:"philosophy__closing-text",children:["What I bring is ",z.jsx("strong",{children:"clarity"}),". Clear structure, clear decisions, and systems that are easier to build on as they grow."]}),z.jsxs("div",{className:"philosophy__traits",children:[z.jsx("span",{className:"philosophy__trait",children:"Clear Communicator"}),z.jsx("span",{className:"philosophy__trait",children:"Detail Oriented"}),z.jsx("span",{className:"philosophy__trait",children:"Solution Oriented"})]})]})]})}),MC=[{quote:"She's great and really helpful.",name:"Steve C.",role:"Founder, Zenius"},{quote:"Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",name:"A. M.",role:"CTO, B2B SaaS"},{quote:"Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",name:"R. K.",role:"Founder, edtech"}],EC=({scrollTo:o})=>z.jsx("section",{className:"section section--reviews section--testimonials reveal",id:"reviews","aria-labelledby":"reviews-heading",children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"testimonials__head",children:[z.jsx("h2",{id:"reviews-heading",className:"testimonials__title",children:"Kind words from collaborators"}),z.jsx("p",{className:"testimonials__lead",children:"What founders and teams say about working together."})]}),z.jsx("ul",{className:"testimonials__list",role:"list",children:MC.map(e=>z.jsxs("li",{className:"testimonial-item",children:[z.jsx("blockquote",{className:"testimonial-item__quote",children:z.jsx("p",{children:e.quote})}),z.jsxs("footer",{className:"testimonial-item__cite",children:[z.jsx("span",{className:"testimonial-item__name",children:e.name}),z.jsx("span",{className:"testimonial-item__role",children:e.role})]})]},`${e.name}-${e.role}`))}),z.jsx("div",{className:"testimonials__cta",children:z.jsx("button",{type:"button",className:"btn btn--primary",onClick:()=>o("contact","/contact"),children:"Start a conversation"})})]})}),TC=[{title:"Architecture & Scalable Systems",desc:"Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",tags:["System Design","Scalability","Refactoring","API Design","Microservices"]},{title:"Full-Stack Web & Mobile",desc:"End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",tags:["React","Next.js","Node.js","React Native","TypeScript","PostgreSQL"]},{title:"AI Integration & Automation",desc:"GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",tags:["OpenAI API","Claude","Prompt Engineering","AI Agents","Automation"]}],wC=()=>z.jsx("section",{className:"section section--services reveal",id:"services","aria-labelledby":"services-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"What I do"}),z.jsx("h2",{id:"services-heading",className:"section__heading",children:"Three things I do really well"}),z.jsx("p",{className:"section__lead",children:"Architecture, full-stack development, and AI integration. I bring clarity to complex problems and build systems that are easier to grow."}),z.jsx("div",{className:"services__grid",children:TC.map(o=>z.jsxs("div",{className:"service-card reveal reveal--delay-1",children:[z.jsx("h3",{className:"service-card__title",children:o.title}),z.jsx("p",{className:"service-card__desc",children:o.desc}),z.jsx("div",{className:"service-card__tags",children:o.tags.map(e=>z.jsx("span",{className:"service-card__tag",children:e},e))})]},o.title))})]})}),Po={ai:["OpenAI / GPT API","Claude / Anthropic","Gemini","Generative AI","Prompt Engineering","AI Agents","Chatbot Development","AI Model Integration","Machine Learning","Automation Workflows"],frontend:["React","Next.js","Angular","Vue.js","Nuxt.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","SASS / SCSS","CSS Grid","Responsive Design","Figma","Webflow","Elementor"],backend:["Node.js","Express","REST APIs","GraphQL","FastAPI","Laravel","PHP","Python","API Integration","Payment Gateway (Stripe)","Twilio API","Authentication & Authorization","WebSockets"],mobile:["React Native","Hybrid Apps","iOS","Android","Offline Functionality","In-App Purchases","Mobile UI/UX"],cloud:["AWS","Google Cloud","Microsoft Azure","Docker","Vercel","Netlify","Firebase","Supabase","CI/CD","GitHub Actions","Website Security"],databases:["PostgreSQL","MongoDB","MySQL","Microsoft SQL Server","Firebase Realtime DB","Prisma","Mongoose","Database Modeling"]},AC=()=>z.jsx("section",{className:"section section--skills skills-showcase reveal",id:"skills","aria-labelledby":"skills-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"Toolkit"}),z.jsx("h2",{id:"skills-heading",className:"skills-showcase__title",children:"Technologies I work with"}),z.jsx("p",{className:"skills-showcase__lead",children:"AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven't listed it yet. Ask me."}),z.jsxs("div",{className:"skills-showcase__grid",children:[z.jsxs("div",{className:"skill-category skill-category--highlight",children:[z.jsx("h3",{className:"skill-category__title",children:"AI & Intelligence"}),z.jsx("div",{className:"skill-category__tags",children:Po.ai.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Frontend"}),z.jsx("div",{className:"skill-category__tags",children:Po.frontend.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Backend & APIs"}),z.jsx("div",{className:"skill-category__tags",children:Po.backend.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Mobile"}),z.jsx("div",{className:"skill-category__tags",children:Po.mobile.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Cloud & DevOps"}),z.jsx("div",{className:"skill-category__tags",children:Po.cloud.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]}),z.jsxs("div",{className:"skill-category",children:[z.jsx("h3",{className:"skill-category__title",children:"Databases"}),z.jsx("div",{className:"skill-category__tags",children:Po.databases.map(o=>z.jsx("span",{className:"skill-tag",children:o},o))})]})]})]})}),CC="/assets/zenius-CLULWNXe.png",RC="/assets/news-explorer-DyPTQ1wK.png",PC="/assets/tmi-worldwide-BRvVfm9i.png",NC="/assets/time-keeper-C6TL0-3m.png",LC="/assets/portfolio-84NHyYwe.png",IC="/assets/expense-tracker-mvEoxdIL.png",UC="/assets/girly-blog-BlvHH-Oe.png",DC=[{title:"Zenius",types:["AI & product","Full-stack web"],description:"Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",link:"https://zenius.ia.br",screenshot:CC,tech:["React","TypeScript","AI / LLM integration","Node.js","REST & real-time APIs","Voice / video","Security & privacy","Responsive UI","Performance","Accessibility"]},{title:"News Explorer",types:["Full-stack web","APIs & auth"],description:"Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",link:"https://jazzmine-flora.github.io/news-explorer/",screenshot:RC,tech:["React","Node.js","Express","MongoDB","REST","Auth","News API"]},{title:"TMI Worldwide",types:["Design refresh","Marketing site"],description:"Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",link:"https://tmi-world-welcome.lovable.app/",screenshot:PC,tech:["React","Vite","SPA","Responsive UI","Marketing / brand"]},{title:"Time Keeper",types:["Web app","Product UX"],description:"Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",link:"https://time-keeper-crafted.lovable.app/",screenshot:NC,tech:["React","Vite","SPA","Responsive UI","Product UI"]},{title:"My Portfolio",types:["Portfolio site","Design & deploy"],description:"Single-page site: React, TypeScript, Vite, and HashRouter for GitHub Pages. Copy and styles hand-tuned.",link:"https://jazzmine-flora.github.io",screenshot:LC,tech:["React","TypeScript","Vite","React Router","Three.js","React Icons","GitHub Actions"]},{title:"Expense Tracker",types:["Web app","Dashboards & data"],description:"Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",link:"https://jazzmine-flora.github.io/expense-tracker/",screenshot:IC,tech:["React","TypeScript","Node.js","Express","MongoDB","Charts"]},{title:"Girls Blog",types:["Full-stack web","Blog & CMS"],description:"Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",link:"https://girly-blogspot.vercel.app/",screenshot:UC,tech:["React","Node.js","Express","MongoDB","Auth"]}],kC=()=>z.jsx("section",{className:"section section--work projects-page projects-page--premium reveal",id:"work","aria-labelledby":"work-heading",children:z.jsxs("div",{className:"container",children:[z.jsx("span",{className:"section__label",children:"Portfolio"}),z.jsx("h2",{id:"work-heading",className:"projects__title",children:"Selected work"}),z.jsx("p",{className:"projects__lead",children:"Full-stack products, AI features, and scalable systems."}),z.jsx("div",{className:"projects__grid",children:DC.map(o=>z.jsxs("article",{className:"project-card",children:[o.screenshot?z.jsx("div",{className:"project-card__thumb-wrap",children:z.jsx("img",{src:o.screenshot,alt:`${o.title} site preview`,className:"project-card__thumb",loading:"lazy",decoding:"async"})}):z.jsx("div",{className:"project-card__thumb-wrap project-card__thumb-wrap--placeholder","aria-hidden":!0,children:z.jsx("span",{className:"project-card__thumb-placeholder",children:"Preview unavailable"})}),z.jsxs("div",{className:"project-card__body",children:[z.jsx("ul",{className:"project-card__type-list",role:"list","aria-label":"Project types",children:o.types.map((e,i)=>z.jsx("li",{className:`project-card__type-chip${i===0?" project-card__type-chip--primary":""}`,children:e},`${o.title}-type-${i}`))}),z.jsxs("div",{className:"project-card__about",children:[z.jsx("h3",{className:"project-card__title",children:o.title}),z.jsx("p",{className:"project-card__desc",children:o.description})]}),z.jsx("div",{className:"project-card__tech",children:o.tech.map(e=>z.jsx("span",{className:"project-card__tag",children:e},e))})]}),z.jsxs("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"project-card__link",children:["View project ",z.jsx("span",{className:"project-card__arrow","aria-hidden":!0,children:"→"})]})]},o.title))})]})}),FC=()=>{const{scrollTo:o}=Qb();return z.jsxs("div",{className:"homepage homepage--studio page-content",children:[z.jsx(SC,{scrollTo:o}),z.jsx(wC,{}),z.jsx(bC,{}),z.jsx(kC,{}),z.jsx(AC,{}),z.jsx(EC,{scrollTo:o}),z.jsx(Jb,{})]})},OC=({className:o,title:e})=>z.jsxs("svg",{className:o,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?z.jsx("title",{children:e}):null,z.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z"})]}),BC=({className:o,title:e})=>z.jsxs("svg",{className:o,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?z.jsx("title",{children:e}):null,z.jsx("path",{d:"M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"})]}),zC=()=>z.jsx("footer",{className:"footer",children:z.jsxs("div",{className:"footer__inner container",children:[z.jsxs("div",{className:"footer__social","aria-label":"Social links",children:[z.jsxs("a",{href:"https://www.linkedin.com/in/taliba-sadiq",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"LinkedIn",children:[z.jsx(BC,{className:"footer__icon",title:"LinkedIn"}),z.jsx("span",{children:"LinkedIn"})]}),z.jsxs("a",{href:"https://github.com/Jazzmine-Flora",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"GitHub",children:[z.jsx(OC,{className:"footer__icon",title:"GitHub"}),z.jsx("span",{children:"GitHub"})]})]}),z.jsxs("p",{className:"footer__copy",children:["Copyright © ",new Date().getFullYear()," Taliba Sadiq. All rights reserved."]})]})});function HC(){de.useEffect(()=>{const o=d=>{d.preventDefault()},e=d=>{d.preventDefault()},i=d=>{d.preventDefault()},a=d=>{const p=d.target;((p==null?void 0:p.tagName)==="IMG"||p!=null&&p.closest("img"))&&d.preventDefault()},l=d=>{d.preventDefault()},c=d=>{const p=d.ctrlKey||d.metaKey;p&&(d.key==="s"||d.key==="S")&&d.preventDefault(),p&&(d.key==="c"||d.key==="C")&&d.preventDefault(),p&&(d.key==="x"||d.key==="X")&&d.preventDefault(),p&&(d.key==="a"||d.key==="A")&&d.preventDefault(),p&&(d.key==="u"||d.key==="U")&&d.preventDefault()};return document.addEventListener("contextmenu",o),document.addEventListener("copy",e,!0),document.addEventListener("cut",i,!0),document.addEventListener("dragstart",a,!0),document.addEventListener("selectstart",l,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("contextmenu",o),document.removeEventListener("copy",e,!0),document.removeEventListener("cut",i,!0),document.removeEventListener("dragstart",a,!0),document.removeEventListener("selectstart",l,!0),document.removeEventListener("keydown",c)}},[])}const VC=()=>(HC(),z.jsxs(z.Fragment,{children:[z.jsx(Gb,{}),z.jsx($b,{}),z.jsx("main",{children:z.jsx(cb,{children:z.jsx(v0,{path:"*",element:z.jsx(FC,{})})})}),z.jsx(zC,{})]})),GC=document.getElementById("root"),WC=_x.createRoot(GC);WC.render(z.jsx(dx.StrictMode,{children:z.jsx(Ib,{children:z.jsx(VC,{})})}));
