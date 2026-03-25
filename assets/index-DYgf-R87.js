(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function oy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function ly(){if(H_)return Po;H_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var G_;function cy(){return G_||(G_=1,gd.exports=ly()),gd.exports}var G=cy(),_d={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function uy(){if(V_)return ct;V_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,A={};function x(L,Z,ue){this.props=L,this.context=Z,this.refs=A,this.updater=ue||M}x.prototype.isReactComponent={},x.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=x.prototype;function C(L,Z,ue){this.props=L,this.context=Z,this.refs=A,this.updater=ue||M}var N=C.prototype=new v;N.constructor=C,y(N,x.prototype),N.isPureReactComponent=!0;var U=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(L,Z,ue,Se,Ue,je){return ue=je.ref,{$$typeof:s,type:L,key:Z,ref:ue!==void 0?ue:null,props:je}}function T(L,Z){return B(L.type,Z,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function ce(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ue){return Z[ue]})}var V=/\/+/g;function $(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?ce(""+L.key):Z.toString(36)}function re(){}function de(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(re,re):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function J(L,Z,ue,Se,Ue){var je=typeof L;(je==="undefined"||je==="boolean")&&(L=null);var ee=!1;if(L===null)ee=!0;else switch(je){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(L.$$typeof){case s:case e:ee=!0;break;case _:return ee=L._init,J(ee(L._payload),Z,ue,Se,Ue)}}if(ee)return Ue=Ue(L),ee=Se===""?"."+$(L,0):Se,U(Ue)?(ue="",ee!=null&&(ue=ee.replace(V,"$&/")+"/"),J(Ue,Z,ue,"",function(Je){return Je})):Ue!=null&&(D(Ue)&&(Ue=T(Ue,ue+(Ue.key==null||L&&L.key===Ue.key?"":(""+Ue.key).replace(V,"$&/")+"/")+ee)),Z.push(Ue)),1;ee=0;var be=Se===""?".":Se+":";if(U(L))for(var Me=0;Me<L.length;Me++)Se=L[Me],je=be+$(Se,Me),ee+=J(Se,Z,ue,je,Ue);else if(Me=g(L),typeof Me=="function")for(L=Me.call(L),Me=0;!(Se=L.next()).done;)Se=Se.value,je=be+$(Se,Me++),ee+=J(Se,Z,ue,je,Ue);else if(je==="object"){if(typeof L.then=="function")return J(de(L),Z,ue,Se,Ue);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ee}function P(L,Z,ue){if(L==null)return L;var Se=[],Ue=0;return J(L,Se,"","",function(je){return Z.call(ue,je,Ue++)}),Se}function H(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(ue){(L._status===0||L._status===-1)&&(L._status=1,L._result=ue)},function(ue){(L._status===0||L._status===-1)&&(L._status=2,L._result=ue)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var le=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function _e(){}return ct.Children={map:P,forEach:function(L,Z,ue){P(L,function(){Z.apply(this,arguments)},ue)},count:function(L){var Z=0;return P(L,function(){Z++}),Z},toArray:function(L){return P(L,function(Z){return Z})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ct.Component=x,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=C,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ct.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},ct.cache=function(L){return function(){return L.apply(null,arguments)}},ct.cloneElement=function(L,Z,ue){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Se=y({},L.props),Ue=L.key,je=void 0;if(Z!=null)for(ee in Z.ref!==void 0&&(je=void 0),Z.key!==void 0&&(Ue=""+Z.key),Z)!F.call(Z,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Z.ref===void 0||(Se[ee]=Z[ee]);var ee=arguments.length-2;if(ee===1)Se.children=ue;else if(1<ee){for(var be=Array(ee),Me=0;Me<ee;Me++)be[Me]=arguments[Me+2];Se.children=be}return B(L.type,Ue,void 0,void 0,je,Se)},ct.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ct.createElement=function(L,Z,ue){var Se,Ue={},je=null;if(Z!=null)for(Se in Z.key!==void 0&&(je=""+Z.key),Z)F.call(Z,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ue[Se]=Z[Se]);var ee=arguments.length-2;if(ee===1)Ue.children=ue;else if(1<ee){for(var be=Array(ee),Me=0;Me<ee;Me++)be[Me]=arguments[Me+2];Ue.children=be}if(L&&L.defaultProps)for(Se in ee=L.defaultProps,ee)Ue[Se]===void 0&&(Ue[Se]=ee[Se]);return B(L,je,void 0,void 0,null,Ue)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(L){return{$$typeof:p,render:L}},ct.isValidElement=D,ct.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:H}},ct.memo=function(L,Z){return{$$typeof:h,type:L,compare:Z===void 0?null:Z}},ct.startTransition=function(L){var Z=I.T,ue={};I.T=ue;try{var Se=L(),Ue=I.S;Ue!==null&&Ue(ue,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(_e,le)}catch(je){le(je)}finally{I.T=Z}},ct.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ct.use=function(L){return I.H.use(L)},ct.useActionState=function(L,Z,ue){return I.H.useActionState(L,Z,ue)},ct.useCallback=function(L,Z){return I.H.useCallback(L,Z)},ct.useContext=function(L){return I.H.useContext(L)},ct.useDebugValue=function(){},ct.useDeferredValue=function(L,Z){return I.H.useDeferredValue(L,Z)},ct.useEffect=function(L,Z,ue){var Se=I.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(L,Z)},ct.useId=function(){return I.H.useId()},ct.useImperativeHandle=function(L,Z,ue){return I.H.useImperativeHandle(L,Z,ue)},ct.useInsertionEffect=function(L,Z){return I.H.useInsertionEffect(L,Z)},ct.useLayoutEffect=function(L,Z){return I.H.useLayoutEffect(L,Z)},ct.useMemo=function(L,Z){return I.H.useMemo(L,Z)},ct.useOptimistic=function(L,Z){return I.H.useOptimistic(L,Z)},ct.useReducer=function(L,Z,ue){return I.H.useReducer(L,Z,ue)},ct.useRef=function(L){return I.H.useRef(L)},ct.useState=function(L){return I.H.useState(L)},ct.useSyncExternalStore=function(L,Z,ue){return I.H.useSyncExternalStore(L,Z,ue)},ct.useTransition=function(){return I.H.useTransition()},ct.version="19.1.0",ct}var k_;function $h(){return k_||(k_=1,_d.exports=uy()),_d.exports}var he=$h();const fy=oy(he);var vd={exports:{}},Io={},xd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function dy(){return X_||(X_=1,(function(s){function e(P,H){var le=P.length;P.push(H);e:for(;0<le;){var _e=le-1>>>1,L=P[_e];if(0<l(L,H))P[_e]=H,P[le]=L,le=_e;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],le=P.pop();if(le!==H){P[0]=le;e:for(var _e=0,L=P.length,Z=L>>>1;_e<Z;){var ue=2*(_e+1)-1,Se=P[ue],Ue=ue+1,je=P[Ue];if(0>l(Se,le))Ue<L&&0>l(je,Se)?(P[_e]=je,P[Ue]=le,_e=Ue):(P[_e]=Se,P[ue]=le,_e=ue);else if(Ue<L&&0>l(je,le))P[_e]=je,P[Ue]=le,_e=Ue;else break e}}return H}function l(P,H){var le=P.sortIndex-H.sortIndex;return le!==0?le:P.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],_=1,S=null,g=3,M=!1,y=!1,A=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=P)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function I(P){if(A=!1,U(P),!y)if(i(m)!==null)y=!0,F||(F=!0,$());else{var H=i(h);H!==null&&J(I,H.startTime-P)}}var F=!1,B=-1,T=5,D=-1;function ce(){return x?!0:!(s.unstable_now()-D<T)}function V(){if(x=!1,F){var P=s.unstable_now();D=P;var H=!0;try{e:{y=!1,A&&(A=!1,C(B),B=-1),M=!0;var le=g;try{t:{for(U(P),S=i(m);S!==null&&!(S.expirationTime>P&&ce());){var _e=S.callback;if(typeof _e=="function"){S.callback=null,g=S.priorityLevel;var L=_e(S.expirationTime<=P);if(P=s.unstable_now(),typeof L=="function"){S.callback=L,U(P),H=!0;break t}S===i(m)&&r(m),U(P)}else r(m);S=i(m)}if(S!==null)H=!0;else{var Z=i(h);Z!==null&&J(I,Z.startTime-P),H=!1}}break e}finally{S=null,g=le,M=!1}H=void 0}}finally{H?$():F=!1}}}var $;if(typeof N=="function")$=function(){N(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=V,$=function(){de.postMessage(null)}}else $=function(){v(V,0)};function J(P,H){B=v(function(){P(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(P){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var le=g;g=H;try{return P()}finally{g=le}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var le=g;g=P;try{return H()}finally{g=le}},s.unstable_scheduleCallback=function(P,H,le){var _e=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?_e+le:_e):le=_e,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=le+L,P={id:_++,callback:H,priorityLevel:P,startTime:le,expirationTime:L,sortIndex:-1},le>_e?(P.sortIndex=le,e(h,P),i(m)===null&&P===i(h)&&(A?(C(B),B=-1):A=!0,J(I,le-_e))):(P.sortIndex=L,e(m,P),y||M||(y=!0,F||(F=!0,$()))),P},s.unstable_shouldYield=ce,s.unstable_wrapCallback=function(P){var H=g;return function(){var le=g;g=H;try{return P.apply(this,arguments)}finally{g=le}}}})(Sd)),Sd}var W_;function hy(){return W_||(W_=1,xd.exports=dy()),xd.exports}var yd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function py(){if(q_)return Cn;q_=1;var s=$h();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Cn.flushSync=function(m){var h=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=_,r.d.f()}},Cn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Cn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Cn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Cn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,h){return m(h)},Cn.useFormState=function(m,h,_){return f.H.useFormState(m,h,_)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var j_;function my(){if(j_)return yd.exports;j_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=py(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function gy(){if(Y_)return Io;Y_=1;var s=hy(),e=$h(),i=my();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=d;break}if(R===o){E=!0,o=u,a=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===a){E=!0,a=d,o=u;break}if(R===o){E=!0,o=d,a=u;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case y:return"Fragment";case x:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case N:return(t.displayName||"Context")+".Provider";case C:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},_e=[],L=-1;function Z(t){return{current:t}}function ue(t){0>L||(t.current=_e[L],_e[L]=null,L--)}function Se(t,n){L++,_e[L]=t.current,t.current=n}var Ue=Z(null),je=Z(null),ee=Z(null),be=Z(null);function Me(t,n){switch(Se(ee,n),Se(je,t),Se(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?p_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=p_(n),t=m_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Ue),Se(Ue,t)}function Je(){ue(Ue),ue(je),ue(ee)}function Ke(t){t.memoizedState!==null&&Se(be,t);var n=Ue.current,a=m_(n,t.type);n!==a&&(Se(je,t),Se(Ue,a))}function $e(t){je.current===t&&(ue(Ue),ue(je)),be.current===t&&(ue(be),Do._currentValue=le)}var Jt=Object.prototype.hasOwnProperty,pt=s.unstable_scheduleCallback,yt=s.unstable_cancelCallback,Ot=s.unstable_shouldYield,ot=s.unstable_requestPaint,bt=s.unstable_now,k=s.unstable_getCurrentPriorityLevel,Yt=s.unstable_ImmediatePriority,Mt=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,Xe=s.unstable_LowPriority,O=s.unstable_IdlePriority,b=s.log,q=s.unstable_setDisableYieldValue,me=null,ve=null;function fe(t){if(typeof b=="function"&&q(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(me,t)}catch{}}var Le=Math.clz32?Math.clz32:et,we=Math.log,Ze=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(we(t)/Ze|0)|0}var Ee=256,Ae=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Fe(o):(E&=R,E!==0?u=Fe(E):a||(a=R&~t,a!==0&&(u=Fe(a))))):(R=o&~d,R!==0?u=Fe(R):E!==0?u=Fe(E):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Ce(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(a=E&~a;0<a;){var ge=31-Le(a),ye=1<<ge;R[ge]=0,z[ge]=-1;var ae=te[ge];if(ae!==null)for(te[ge]=null,ge=0;ge<ae.length;ge++){var se=ae[ge];se!==null&&(se.lane&=-536870913)}a&=~ye}o!==0&&pe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Le(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ge(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Le(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:O_(t.type))}function pi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var _n=Math.random().toString(36).slice(2),dn="__reactFiber$"+_n,vn="__reactProps$"+_n,Aa="__reactContainer$"+_n,Pr="__reactEvents$"+_n,sl="__reactListeners$"+_n,Wi="__reactHandles$"+_n,Ir="__reactResources$"+_n,Ra="__reactMarker$"+_n;function Fr(t){delete t[dn],delete t[vn],delete t[Pr],delete t[sl],delete t[Wi]}function mi(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Aa]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=x_(t);t!==null;){if(a=t[dn])return a;t=x_(t)}return n}t=a,a=t.parentNode}return null}function qi(t){if(t=t[dn]||t[Aa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ai(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ji(t){var n=t[Ir];return n||(n=t[Ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[Ra]=!0}var ol=new Set,ll={};function Yi(t,n){Ca(t,n),Ca(t+"Capture",n)}function Ca(t,n){for(ll[t]=n,t=0;t<n.length;t++)ol.add(n[t])}var pu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cl={},w={};function j(t){return Jt.call(w,t)?!0:Jt.call(cl,t)?!1:pu.test(t)?w[t]=!0:(cl[t]=!0,!1)}function oe(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function K(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ne,Be;function De(t){if(Ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+t+Be}var Ve=!1;function We(t,n){if(!t||Ve)return"";Ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(se){var ae=se}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(se){ae=se}t.call(ye.prototype)}}else{try{throw Error()}catch(se){ae=se}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(se){if(se&&ae&&typeof se.stack=="string")return[se.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var z=E.split(`
`),te=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===te.length)for(o=z.length-1,u=te.length-1;1<=o&&0<=u&&z[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==te[u]){var ge=`
`+z[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?De(a):""}function rt(t){switch(t.tag){case 26:case 27:case 5:return De(t.type);case 16:return De("Lazy");case 13:return De("Suspense");case 19:return De("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return De("Activity");default:return""}}function st(t){try{var n="";do n+=rt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=wt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Zt(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=wt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function an(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qe=/[\n"\\]/g;function Xt(t){return t.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _t(t,n,a,o,u,d,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Fn(t,E,ze(n)):a!=null?Fn(t,E,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function In(t,n,a,o,u,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Fn(t,n,a){n==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Zi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Lt(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(J(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function qt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ri=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ri.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function gi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&rn(t,d,n[d])}function Ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return sx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function gp(t){var n=qi(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;e:switch(t=n.stateNode,n.type){case"input":if(_t(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[vn]||null;if(!u)throw Error(r(90));_t(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":Zi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Bn(t,!!a.multiple,n,!1)}}}var _u=!1;function _p(t,n,a){if(_u)return t(n,a);_u=!0;try{var o=t(n);return o}finally{if(_u=!1,(Br!==null||zr!==null)&&(Kl(),Br&&(n=Br,t=zr,zr=Br=null,gp(n),t)))for(n=0;n<t.length;n++)gp(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(Ki)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){vu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{vu=!1}var wa=null,xu=null,dl=null;function vp(){if(dl)return dl;var t,n=xu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function xp(){return!1}function zn(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:xp,this.isPropagationStopped=xp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=zn(sr),Xs=_({},sr,{view:0,detail:0}),ox=zn(Xs),Su,yu,Ws,gl=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Su=t.screenX-Ws.screenX,yu=t.screenY-Ws.screenY):yu=Su=0,Ws=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),Sp=zn(gl),lx=_({},gl,{dataTransfer:0}),cx=zn(lx),ux=_({},Xs,{relatedTarget:0}),Mu=zn(ux),fx=_({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=zn(fx),hx=_({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),px=zn(hx),mx=_({},sr,{data:0}),yp=zn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vx[t])?!!n[t]:!1}function Eu(){return xx}var Sx=_({},Xs,{key:function(t){if(t.key){var n=gx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=zn(Sx),Mx=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=zn(Mx),Ex=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),bx=zn(Ex),Tx=_({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=zn(Tx),Rx=_({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=zn(Rx),wx=_({},sr,{newState:0,oldState:0}),Dx=zn(wx),Nx=[9,13,27,32],bu=Ki&&"CompositionEvent"in window,qs=null;Ki&&"documentMode"in document&&(qs=document.documentMode);var Ux=Ki&&"TextEvent"in window&&!qs,Ep=Ki&&(!bu||qs&&8<qs&&11>=qs),bp=" ",Tp=!1;function Ap(t,n){switch(t){case"keyup":return Nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Lx(t,n){switch(t){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,bp);case"textInput":return t=n.data,t===bp&&Tp?null:t;default:return null}}function Ox(t,n){if(Hr)return t==="compositionend"||!bu&&Ap(t,n)?(t=vp(),dl=xu=wa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Px[t.type]:n==="textarea"}function wp(t,n,a,o){Br?zr?zr.push(o):zr=[o]:Br=o,n=nc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var js=null,Ys=null;function Ix(t){c_(t,0)}function _l(t){var n=Ai(t);if(Dt(n))return t}function Dp(t,n){if(t==="change")return n}var Np=!1;if(Ki){var Tu;if(Ki){var Au="oninput"in document;if(!Au){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Au=typeof Up.oninput=="function"}Tu=Au}else Tu=!1;Np=Tu&&(!document.documentMode||9<document.documentMode)}function Lp(){js&&(js.detachEvent("onpropertychange",Op),Ys=js=null)}function Op(t){if(t.propertyName==="value"&&_l(Ys)){var n=[];wp(n,Ys,t,gu(t)),_p(Ix,n)}}function Fx(t,n,a){t==="focusin"?(Lp(),js=n,Ys=a,js.attachEvent("onpropertychange",Op)):t==="focusout"&&Lp()}function Bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Ys)}function zx(t,n){if(t==="click")return _l(n)}function Hx(t,n){if(t==="input"||t==="change")return _l(n)}function Gx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Gx;function Zs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Fp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=an(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=an(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vx=Ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,Cu=null,Ks=null,wu=!1;function zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Gr==null||Gr!==an(o)||(o=Gr,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=nc(Cu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Du={},Hp={};Ki&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function lr(t){if(Du[t])return Du[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Du[t]=n[a];return t}var Gp=lr("animationend"),Vp=lr("animationiteration"),kp=lr("animationstart"),kx=lr("transitionrun"),Xx=lr("transitionstart"),Wx=lr("transitioncancel"),Xp=lr("transitionend"),Wp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function _i(t,n){Wp.set(t,n),Yi(n,[t])}var qp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:st(n)},qp.set(t,n),n)}return{value:t,source:n,stack:st(n)}}var ni=[],kr=0,Uu=0;function vl(){for(var t=kr,n=Uu=kr=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&jp(a,u,d)}}function xl(t,n,a,o){ni[kr++]=t,ni[kr++]=n,ni[kr++]=a,ni[kr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,a,o){return xl(t,n,a,o),Sl(t)}function Xr(t,n){return xl(t,null,null,n),Sl(t)}function jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Le(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(t){if(50<Mo)throw Mo=0,Hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function qx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new qx(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")Ou(t)&&(E=1);else if(typeof t=="string")E=YS(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=qn(31,a,n,u),t.elementType=D,t.lanes=d,t;case y:return cr(a.children,u,d,n);case A:E=8,u|=24;break;case x:return t=qn(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case I:return t=qn(13,a,n,u),t.elementType=I,t.lanes=d,t;case F:return t=qn(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case N:E=10;break e;case C:E=9;break e;case U:E=11;break e;case B:E=14;break e;case T:E=16,o=null;break e}E=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=qn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function cr(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Iu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qr=[],jr=0,Ml=null,El=0,ii=[],ai=0,ur=null,Ji=1,$i="";function fr(t,n){qr[jr++]=El,qr[jr++]=Ml,Ml=t,El=n}function Zp(t,n,a){ii[ai++]=Ji,ii[ai++]=$i,ii[ai++]=ur,ur=t;var o=Ji;t=$i;var u=32-Le(o)-1;o&=~(1<<u),a+=1;var d=32-Le(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Ji=1<<32-Le(n)+u|a<<u|o,$i=d+t}else Ji=1<<d|a<<u|o,$i=t}function Fu(t){t.return!==null&&(fr(t,1),Zp(t,1,0))}function Bu(t){for(;t===Ml;)Ml=qr[--jr],qr[jr]=null,El=qr[--jr],qr[jr]=null;for(;t===ur;)ur=ii[--ai],ii[ai]=null,$i=ii[--ai],ii[ai]=null,Ji=ii[--ai],ii[ai]=null}var Un=null,$t=null,Nt=!1,dr=null,wi=!1,zu=Error(r(519));function hr(t){var n=Error(r(418,""));throw $s(ti(n,t)),zu}function Kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[vn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)gt(bo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Lt(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||h_(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ic),n=!0):n=!1,n||hr(t)}function Qp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Un=Un.return}}function Qs(t){if(t!==Un)return!1;if(!Nt)return Qp(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nd(t.type,t.memoizedProps)),a=!a),a&&$t&&hr(t),Qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Wa(t.type)?(t=sd,sd=null,$t=t):$t=n):$t=Un?xi(t.stateNode.nextSibling):null;return!0}function Js(){$t=Un=null,Nt=!1}function Jp(){var t=dr;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),dr=null),t}function $s(t){dr===null?dr=[t]:dr.push(t)}var Hu=Z(null),pr=null,ea=null;function Da(t,n,a){Se(Hu,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Hu.current,ue(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Gu(d.return,a,t),o||(E=null);break e}d=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Gu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function eo(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=u.type;Wn(u.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(u===be.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return $p(pr,t)}function Tl(t,n){return pr===null&&mr(t),$p(t,n)}function $p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(r(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var jx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yx=s.unstable_scheduleCallback,Zx=s.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new jx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Yx(Zx,function(){t.controller.abort()})}var no=null,Xu=0,Yr=0,Zr=null;function Kx(t,n){if(no===null){var a=no=[];Xu=0,Yr=jf(),Zr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(em,em),n}function em(){if(--Xu===0&&no!==null){Zr!==null&&(Zr.status="fulfilled");var t=no;no=null,Yr=0,Zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var tm=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kx(t,n),tm!==null&&tm(t,n)};var gr=Z(null);function Wu(){var t=gr.current;return t!==null?t:Wt.pooledCache}function Al(t,n){n===null?Se(gr,gr.current):Se(gr,n.pool)}function nm(){var t=Wu();return t===null?null:{parent:hn._currentValue,pool:t}}var io=Error(r(460)),im=Error(r(474)),Rl=Error(r(542)),qu={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Cl,Cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t;default:if(typeof n.status=="string")n.then(Cl,Cl);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t}throw ao=n,io}}var ao=null;function sm(){if(ao===null)throw Error(r(459));var t=ao;return ao=null,t}function om(t){if(t===io||t===Rl)throw Error(r(483))}var Na=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),jp(t,null,a),n}return xl(t,o,n,a),Sl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}function Zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ku=!1;function so(){if(Ku){var t=Zr;if(t!==null)throw t}}function oo(t,n,a,o){Ku=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,te=z.next;z.next=null,E===null?d=te:E.next=te,E=z;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==E&&(R===null?ge.firstBaseUpdate=te:R.next=te,ge.lastBaseUpdate=z))}if(d!==null){var ye=u.baseState;E=0,ge=te=z=null,R=d;do{var ae=R.lane&-536870913,se=ae!==R.lane;if(se?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===Yr&&(Ku=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,Qe=R;ae=n;var Ht=a;switch(Qe.tag){case 1:if(it=Qe.payload,typeof it=="function"){ye=it.call(Ht,ye,ae);break e}ye=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Qe.payload,ae=typeof it=="function"?it.call(Ht,ye,ae):it,ae==null)break e;ye=_({},ye,ae);break e;case 2:Na=!0}}ae=R.callback,ae!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ae]:se.push(ae))}else se={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(te=ge=se,z=ye):ge=ge.next=se,E|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;se=R,R=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ge===null&&(z=ye),u.baseState=z,u.firstBaseUpdate=te,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Ga|=E,t.lanes=E,t.memoizedState=ye}}function lm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lm(a[t],n)}var Kr=Z(null),wl=Z(0);function um(t,n){t=la,Se(wl,t),Se(Kr,n),la=t|n.baseLanes}function Qu(){Se(wl,la),Se(Kr,Kr.current)}function Ju(){la=wl.current,ue(Kr),ue(wl)}var Oa=0,dt=null,Bt=null,cn=null,Dl=!1,Qr=!1,_r=!1,Nl=0,lo=0,Jr=null,Jx=0;function sn(){throw Error(r(321))}function $u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function ef(t,n,a,o,u,d){return Oa=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?jm:Ym,_r=!1,d=a(o,u),_r=!1,Qr&&(d=dm(n,a,o,u)),fm(t),d}function fm(t){P.H=Fl;var n=Bt!==null&&Bt.next!==null;if(Oa=0,cn=Bt=dt=null,Dl=!1,lo=0,Jr=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&bl(t)&&(xn=!0))}function dm(t,n,a,o){dt=t;var u=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,cn=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=rS,d=n(a,o)}while(Qr);return d}function $x(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(dt.flags|=1024),n}function tf(){var t=Nl!==0;return Nl=0,t}function nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function af(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}Oa=0,cn=Bt=dt=null,Qr=!1,lo=Nl=0,Jr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?dt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(Bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=cn===null?dt.memoizedState:cn.next;if(n!==null)cn=n,Bt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},cn===null?dt.memoizedState=cn=t:cn=cn.next=t}return cn}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),t=rm(Jr,t,n),n=dt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?jm:Ym),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===N)return Rn(t)}throw Error(r(438,String(t)))}function sf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rf(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ce;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=un();return of(n,Bt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=E=null,z=null,te=n,ge=!1;do{var ye=te.lane&-536870913;if(ye!==te.lane?(St&ye)===ye:(Oa&ye)===ye){var ae=te.revertLane;if(ae===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ye===Yr&&(ge=!0);else if((Oa&ae)===ae){te=te.next,ae===Yr&&(ge=!0);continue}else ye={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=ye,E=d):z=z.next=ye,dt.lanes|=ae,Ga|=ae;ye=te.action,_r&&a(d,ye),d=te.hasEagerState?te.eagerState:a(d,ye)}else ae={lane:ye,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=ae,E=d):z=z.next=ae,dt.lanes|=ye,Ga|=ye;te=te.next}while(te!==null&&te!==n);if(z===null?E=d:z.next=R,!Wn(d,t.memoizedState)&&(xn=!0,ge&&(a=Zr,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);Wn(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function hm(t,n,a){var o=dt,u=un(),d=Nt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!Wn((Bt||u).memoizedState,a);E&&(u.memoizedState=a,xn=!0),u=u.queue;var R=gm.bind(null,o,u,t);if(uo(2048,8,R,[t]),u.getSnapshot!==n||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$r(9,Ol(),mm.bind(null,o,u,a,n),null),Wt===null)throw Error(r(349));d||(Oa&124)!==0||pm(o,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=rf(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,o){n.value=a,n.getSnapshot=o,_m(n)&&vm(t)}function gm(t,n,a){return a(function(){_m(n)&&vm(t)})}function _m(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function vm(t){var n=Xr(t,2);n!==null&&Qn(n,t,2)}function cf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),_r){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function xm(t,n,a,o){return t.baseState=a,of(t,Bt,typeof o=="function"?o:na)}function eS(t,n,a,o,u){if(Il(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Sm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Sm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,E={};P.T=E;try{var R=a(u,o),z=P.S;z!==null&&z(E,R),ym(t,n,R)}catch(te){uf(t,n,te)}finally{P.T=d}}else try{d=a(u,o),ym(t,n,d)}catch(te){uf(t,n,te)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(t,n,o)},function(o){return uf(t,n,o)}):Mm(t,n,a)}function Mm(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sm(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bm(t,n){return n}function Tm(t,n){if(Nt){var a=Wt.formState;if(a!==null){e:{var o=dt;if(Nt){if($t){t:{for(var u=$t,d=wi;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=xi(u.nextSibling),o=u.data==="F!";break e}}hr(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,dt,o),o.dispatch=a,o=cf(!1),d=mf.bind(null,dt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=eS.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Am(t){var n=un();return Rm(n,Bt,t)}function Rm(t,n,a){if(n=of(t,n,bm)[0],t=Ll(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(E){throw E===io?Rl:E}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,$r(9,Ol(),tS.bind(null,u,a),null)),[o,d,t]}function tS(t,n){t.action=n}function Cm(t){var n=un(),a=Bt;if(a!==null)return Rm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=rf(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ol(){return{destroy:void 0,resource:void 0}}function wm(){return un().memoizedState}function Pl(t,n,a,o){var u=Hn();o=o===void 0?null:o,dt.flags|=t,u.memoizedState=$r(1|n,Ol(),a,o)}function uo(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&$u(o,Bt.memoizedState.deps)?u.memoizedState=$r(n,d,a,o):(dt.flags|=t,u.memoizedState=$r(1|n,d,a,o))}function Dm(t,n){Pl(8390656,8,t,n)}function Nm(t,n){uo(2048,8,t,n)}function Um(t,n){return uo(4,2,t,n)}function Lm(t,n){return uo(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,Om.bind(null,n,t),a)}function ff(){}function Im(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Fm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=t(),_r){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(Oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Hg(),dt.lanes|=t,Ga|=t,a)}function Bm(t,n,a,o){return Wn(a,n)?a:Kr.current!==null?(t=df(t,a,o),Wn(t,n)||(xn=!0),t):(Oa&42)===0?(xn=!0,t.memoizedState=a):(t=Hg(),dt.lanes|=t,Ga|=t,n)}function zm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var E=P.T,R={};P.T=R,mf(t,!1,n,a);try{var z=u(),te=P.S;if(te!==null&&te(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ge=Qx(z,o);fo(t,n,ge,Kn(t))}else fo(t,n,o,Kn(t))}catch(ye){fo(t,n,{then:function(){},status:"rejected",reason:ye},Kn())}finally{H.p=d,P.T=E}}function nS(){}function hf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Hm(t).queue;zm(t,u,n,le,a===null?nS:function(){return Gm(t),a(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Hm(t).next.queue;fo(t,n,{},Kn())}function pf(){return Rn(Do)}function Vm(){return un().memoizedState}function km(){return un().memoizedState}function iS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Ua(a);var o=La(n,t,a);o!==null&&(Qn(o,n,a),ro(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function aS(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?Wm(n,a):(a=Lu(t,n,a,o),a!==null&&(Qn(a,t,o),qm(a,n,o)))}function Xm(t,n,a){var o=Kn();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,R=d(E,a);if(u.hasEagerState=!0,u.eagerState=R,Wn(R,E))return xl(t,n,u,0),Wt===null&&vl(),!1}catch{}finally{}if(a=Lu(t,n,u,o),a!==null)return Qn(a,t,o),qm(a,n,o),!0}return!1}function mf(t,n,a,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(r(479))}else n=Lu(t,a,o,2),n!==null&&Qn(n,t,2)}function Il(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Wm(t,n){Qr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}var Fl={readContext:Rn,use:Ul,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},jm={readContext:Rn,use:Ul,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Pl(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Pl(4194308,4,t,n)},useInsertionEffect:function(t,n){Pl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(_r){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(_r){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=aS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=Xm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(t,n){var a=Hn();return df(a,t,n)},useTransition:function(){var t=cf(!1);return t=zm.bind(null,dt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Hn();if(Nt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(St&124)!==0||pm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Dm(gm.bind(null,o,d,t),[t]),o.flags|=2048,$r(9,Ol(),mm.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=Wt.identifierPrefix;if(Nt){var a=$i,o=Ji;a=(o&~(1<<32-Le(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Jx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:pf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Hn().memoizedState=iS.bind(null,dt)}},Ym={readContext:Rn,use:Ul,useCallback:Im,useContext:Rn,useEffect:Nm,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Fm,useReducer:Ll,useRef:wm,useState:function(){return Ll(na)},useDebugValue:ff,useDeferredValue:function(t,n){var a=un();return Bm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Ll(na)[0],n=un().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:pf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=un();return xm(a,Bt,t,n)},useMemoCache:sf,useCacheRefresh:km},rS={readContext:Rn,use:Ul,useCallback:Im,useContext:Rn,useEffect:Nm,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Fm,useReducer:lf,useRef:wm,useState:function(){return lf(na)},useDebugValue:ff,useDeferredValue:function(t,n){var a=un();return Bt===null?df(a,t,n):Bm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=lf(na)[0],n=un().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:pf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=un();return Bt!==null?xm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:km},es=null,ho=0;function Bl(t){var n=ho;return ho+=1,es===null&&(es=[]),rm(es,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zm(t){var n=t._init;return n(t._payload)}function Km(t){function n(Y,X){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[X],Y.flags|=16):Q.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Qi(Y,X),Y.index=0,Y.sibling=null,Y}function d(Y,X,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<X?(Y.flags|=67108866,X):Q):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,X,Q,xe){return X===null||X.tag!==6?(X=Pu(Q,Y.mode,xe),X.return=Y,X):(X=u(X,Q),X.return=Y,X)}function z(Y,X,Q,xe){var ke=Q.type;return ke===y?ge(Y,X,Q.props.children,xe,Q.key):X!==null&&(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===T&&Zm(ke)===X.type)?(X=u(X,Q.props),po(X,Q),X.return=Y,X):(X=yl(Q.type,Q.key,Q.props,null,Y.mode,xe),po(X,Q),X.return=Y,X)}function te(Y,X,Q,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Iu(Q,Y.mode,xe),X.return=Y,X):(X=u(X,Q.children||[]),X.return=Y,X)}function ge(Y,X,Q,xe,ke){return X===null||X.tag!==7?(X=cr(Q,Y.mode,xe,ke),X.return=Y,X):(X=u(X,Q),X.return=Y,X)}function ye(Y,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,Y.mode,Q),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case g:return Q=yl(X.type,X.key,X.props,null,Y.mode,Q),po(Q,X),Q.return=Y,Q;case M:return X=Iu(X,Y.mode,Q),X.return=Y,X;case T:var xe=X._init;return X=xe(X._payload),ye(Y,X,Q)}if(J(X)||$(X))return X=cr(X,Y.mode,Q,null),X.return=Y,X;if(typeof X.then=="function")return ye(Y,Bl(X),Q);if(X.$$typeof===N)return ye(Y,Tl(Y,X),Q);zl(Y,X)}return null}function ae(Y,X,Q,xe){var ke=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ke!==null?null:R(Y,X,""+Q,xe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case g:return Q.key===ke?z(Y,X,Q,xe):null;case M:return Q.key===ke?te(Y,X,Q,xe):null;case T:return ke=Q._init,Q=ke(Q._payload),ae(Y,X,Q,xe)}if(J(Q)||$(Q))return ke!==null?null:ge(Y,X,Q,xe,null);if(typeof Q.then=="function")return ae(Y,X,Bl(Q),xe);if(Q.$$typeof===N)return ae(Y,X,Tl(Y,Q),xe);zl(Y,Q)}return null}function se(Y,X,Q,xe,ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get(Q)||null,R(X,Y,""+xe,ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case g:return Y=Y.get(xe.key===null?Q:xe.key)||null,z(X,Y,xe,ke);case M:return Y=Y.get(xe.key===null?Q:xe.key)||null,te(X,Y,xe,ke);case T:var ht=xe._init;return xe=ht(xe._payload),se(Y,X,Q,xe,ke)}if(J(xe)||$(xe))return Y=Y.get(Q)||null,ge(X,Y,xe,ke,null);if(typeof xe.then=="function")return se(Y,X,Q,Bl(xe),ke);if(xe.$$typeof===N)return se(Y,X,Q,Tl(X,xe),ke);zl(X,xe)}return null}function it(Y,X,Q,xe){for(var ke=null,ht=null,Ye=X,tt=X=0,yn=null;Ye!==null&&tt<Q.length;tt++){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var At=ae(Y,Ye,Q[tt],xe);if(At===null){Ye===null&&(Ye=yn);break}t&&Ye&&At.alternate===null&&n(Y,Ye),X=d(At,X,tt),ht===null?ke=At:ht.sibling=At,ht=At,Ye=yn}if(tt===Q.length)return a(Y,Ye),Nt&&fr(Y,tt),ke;if(Ye===null){for(;tt<Q.length;tt++)Ye=ye(Y,Q[tt],xe),Ye!==null&&(X=d(Ye,X,tt),ht===null?ke=Ye:ht.sibling=Ye,ht=Ye);return Nt&&fr(Y,tt),ke}for(Ye=o(Ye);tt<Q.length;tt++)yn=se(Ye,Y,tt,Q[tt],xe),yn!==null&&(t&&yn.alternate!==null&&Ye.delete(yn.key===null?tt:yn.key),X=d(yn,X,tt),ht===null?ke=yn:ht.sibling=yn,ht=yn);return t&&Ye.forEach(function(Ka){return n(Y,Ka)}),Nt&&fr(Y,tt),ke}function Qe(Y,X,Q,xe){if(Q==null)throw Error(r(151));for(var ke=null,ht=null,Ye=X,tt=X=0,yn=null,At=Q.next();Ye!==null&&!At.done;tt++,At=Q.next()){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Ka=ae(Y,Ye,At.value,xe);if(Ka===null){Ye===null&&(Ye=yn);break}t&&Ye&&Ka.alternate===null&&n(Y,Ye),X=d(Ka,X,tt),ht===null?ke=Ka:ht.sibling=Ka,ht=Ka,Ye=yn}if(At.done)return a(Y,Ye),Nt&&fr(Y,tt),ke;if(Ye===null){for(;!At.done;tt++,At=Q.next())At=ye(Y,At.value,xe),At!==null&&(X=d(At,X,tt),ht===null?ke=At:ht.sibling=At,ht=At);return Nt&&fr(Y,tt),ke}for(Ye=o(Ye);!At.done;tt++,At=Q.next())At=se(Ye,Y,tt,At.value,xe),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?tt:At.key),X=d(At,X,tt),ht===null?ke=At:ht.sibling=At,ht=At);return t&&Ye.forEach(function(sy){return n(Y,sy)}),Nt&&fr(Y,tt),ke}function Ht(Y,X,Q,xe){if(typeof Q=="object"&&Q!==null&&Q.type===y&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case g:e:{for(var ke=Q.key;X!==null;){if(X.key===ke){if(ke=Q.type,ke===y){if(X.tag===7){a(Y,X.sibling),xe=u(X,Q.props.children),xe.return=Y,Y=xe;break e}}else if(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===T&&Zm(ke)===X.type){a(Y,X.sibling),xe=u(X,Q.props),po(xe,Q),xe.return=Y,Y=xe;break e}a(Y,X);break}else n(Y,X);X=X.sibling}Q.type===y?(xe=cr(Q.props.children,Y.mode,xe,Q.key),xe.return=Y,Y=xe):(xe=yl(Q.type,Q.key,Q.props,null,Y.mode,xe),po(xe,Q),xe.return=Y,Y=xe)}return E(Y);case M:e:{for(ke=Q.key;X!==null;){if(X.key===ke)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Y,X.sibling),xe=u(X,Q.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}xe=Iu(Q,Y.mode,xe),xe.return=Y,Y=xe}return E(Y);case T:return ke=Q._init,Q=ke(Q._payload),Ht(Y,X,Q,xe)}if(J(Q))return it(Y,X,Q,xe);if($(Q)){if(ke=$(Q),typeof ke!="function")throw Error(r(150));return Q=ke.call(Q),Qe(Y,X,Q,xe)}if(typeof Q.then=="function")return Ht(Y,X,Bl(Q),xe);if(Q.$$typeof===N)return Ht(Y,X,Tl(Y,Q),xe);zl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Y,X.sibling),xe=u(X,Q),xe.return=Y,Y=xe):(a(Y,X),xe=Pu(Q,Y.mode,xe),xe.return=Y,Y=xe),E(Y)):a(Y,X)}return function(Y,X,Q,xe){try{ho=0;var ke=Ht(Y,X,Q,xe);return es=null,ke}catch(Ye){if(Ye===io||Ye===Rl)throw Ye;var ht=qn(29,Ye,null,Y.mode);return ht.lanes=xe,ht.return=Y,ht}finally{}}}var ts=Km(!0),Qm=Km(!1),ri=Z(null),Di=null;function Pa(t){var n=t.alternate;Se(pn,pn.current&1),Se(ri,t),Di===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(Di=t)}function Jm(t){if(t.tag===22){if(Se(pn,pn.current),Se(ri,t),Di===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Di=t)}}else Ia()}function Ia(){Se(pn,pn.current),Se(ri,ri.current)}function ia(t){ue(ri),Di===t&&(Di=null),ue(pn)}var pn=Z(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _f={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Qn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Qn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(t,o,a),n!==null&&(Qn(n,t,a),ro(n,t,a))}};function $m(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(u,d):!0}function eg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&_f.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function tg(t){Gl(t)}function ng(t){console.error(t)}function ig(t){Gl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ag(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function rg(t){return t=Ua(t),t.tag=3,t}function sg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){ag(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){ag(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Di===null?Vf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(r(435,a.tag))}return Xf(t,o,u),Vf(),!1}if(Nt)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(r(422),{cause:o}),$s(ti(t,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),$s(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=vf(t.stateNode,o,u),Zu(t,u),en!==4&&(en=2)),!1;var d=Error(r(520),{cause:o});if(d=ti(d,a),yo===null?yo=[d]:yo.push(d),en!==4&&(en=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vf(a.stateNode,o,t),Zu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rg(u),sg(u,t,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var og=Error(r(461)),xn=!1;function En(t,n,a,o){n.child=t===null?Qm(n,null,a,o):ts(n,t.child,a,o)}function lg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return mr(n),o=ef(t,n,a,E,d,u),R=tf(),t!==null&&!xn?(nf(t,n,u),aa(t,n,u)):(Nt&&R&&Fu(n),n.flags|=1,En(t,n,o,u),n.child)}function cg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,ug(t,n,d,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Af(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(E,o)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=Qi(d,o),t.ref=n.ref,t.return=n,n.child=t}function ug(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Zs(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,Af(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,aa(t,n,u)}return xf(t,n,a,o,u)}function fg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return dg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?um(n,d):Qu(),Jm(n);else return n.lanes=n.childLanes=536870912,dg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Al(n,d.cachePool),um(n,d),Ia(),n.memoizedState=null):(t!==null&&Al(n,null),Qu(),Ia());return En(t,n,u,a),n.child}function dg(t,n,a,o){var u=Wu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Al(n,null),Qu(),Jm(n),t!==null&&eo(t,n,o,!0),null}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function xf(t,n,a,o,u){return mr(n),a=ef(t,n,a,o,void 0,u),o=tf(),t!==null&&!xn?(nf(t,n,u),aa(t,n,u)):(Nt&&o&&Fu(n),n.flags|=1,En(t,n,a,u),n.child)}function hg(t,n,a,o,u,d){return mr(n),n.updateQueue=null,a=dm(n,o,a,u),fm(t),o=tf(),t!==null&&!xn?(nf(t,n,d),aa(t,n,d)):(Nt&&o&&Fu(n),n.flags|=1,En(t,n,a,d),n.child)}function pg(t,n,a,o,u){if(mr(n),n.stateNode===null){var d=Wr,E=a.contextType;typeof E=="object"&&E!==null&&(d=Rn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?Rn(E):Wr,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(gf(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&_f.enqueueReplaceState(d,d.state,null),oo(n,o,d,u),so(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=vr(a,R);d.props=z;var te=d.context,ge=a.contextType;E=Wr,typeof ge=="object"&&ge!==null&&(E=Rn(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||te!==E)&&eg(n,d,o,E),Na=!1;var ae=n.memoizedState;d.state=ae,oo(n,o,d,u),so(),te=n.memoizedState,R||ae!==te||Na?(typeof ye=="function"&&(gf(n,a,ye,o),te=n.memoizedState),(z=Na||$m(n,a,z,o,ae,te,E))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=E,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yu(t,n),E=n.memoizedProps,ge=vr(a,E),d.props=ge,ye=n.pendingProps,ae=d.context,te=a.contextType,z=Wr,typeof te=="object"&&te!==null&&(z=Rn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==ye||ae!==z)&&eg(n,d,o,z),Na=!1,ae=n.memoizedState,d.state=ae,oo(n,o,d,u),so();var se=n.memoizedState;E!==ye||ae!==se||Na||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof R=="function"&&(gf(n,a,R,o),se=n.memoizedState),(ge=Na||$m(n,a,ge,o,ae,se,z)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=z,o=ge):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ts(n,t.child,null,u),n.child=ts(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=aa(t,n,u),t}function mg(t,n,a,o){return Js(),n.flags|=256,En(t,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(t){return{baseLanes:t,cachePool:nm()}}function Mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function gg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Pa(n):Ia(),Nt){var R=$t,z;if(z=R){e:{for(z=R,R=wi;z.nodeType!==8;){if(!R){R=null;break e}if(z=xi(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(n.memoizedState={dehydrated:R,treeContext:ur!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},z=qn(18,null,null,0),z.stateNode=R,z.return=n,n.child=z,Un=n,$t=null,z=!0):z=!1}z||hr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return rd(R)?n.lanes=32:n.lanes=536870912,null;ia(n)}return R=o.children,o=o.fallback,u?(Ia(),u=n.mode,R=Xl({mode:"hidden",children:R},u),o=cr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=yf(a),u.childLanes=Mf(t,E,a),n.memoizedState=Sf,o):(Pa(n),Ef(n,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(Pa(n),n.flags&=-257,n=bf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),u=o.fallback,R=n.mode,o=Xl({mode:"visible",children:o.children},R),u=cr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ts(n,t.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(t,E,a),n.memoizedState=Sf,n=u);else if(Pa(n),rd(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var te=E.dgst;E=te,o=Error(r(419)),o.stack="",o.digest=E,$s({value:o,source:null,stack:null}),n=bf(t,n,a)}else if(xn||eo(t,n,a,!1),E=(a&t.childLanes)!==0,xn||E){if(E=Wt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Xr(t,o),Qn(E,t,o),og;R.data==="$?"||Vf(),n=bf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=xi(R.nextSibling),Un=n,Nt=!0,dr=null,wi=!1,t!==null&&(ii[ai++]=Ji,ii[ai++]=$i,ii[ai++]=ur,Ji=t.id,$i=t.overflow,ur=n),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Ia(),u=o.fallback,R=n.mode,z=t.child,te=z.sibling,o=Qi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,te!==null?u=Qi(te,u):(u=cr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=yf(a):(z=R.cachePool,z!==null?(te=hn._currentValue,z=z.parent!==te?{parent:te,pool:te}:z):z=nm(),R={baseLanes:R.baseLanes|a,cachePool:z}),u.memoizedState=R,u.childLanes=Mf(t,E,a),n.memoizedState=Sf,o):(Pa(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function bf(t,n,a){return ts(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _g(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Tf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function vg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(En(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,a,n);else if(t.tag===19)_g(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Tf(n,!0,a,null,d);break;case"together":Tf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function oS(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Da(n,hn,t.memoizedState.cache),Js();break;case 27:case 5:Ke(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gg(t,n,a):(Pa(n),t=aa(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return vg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,fg(t,n,a);case 24:Da(n,hn,t.memoizedState.cache)}return aa(t,n,a)}function xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Af(t,a)&&(n.flags&128)===0)return xn=!1,oS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Nt&&(n.flags&1048576)!==0&&Zp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ou(o)?(t=vr(o,t),n.tag=1,n=pg(null,n,o,t,a)):(n.tag=0,n=xf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=lg(null,n,o,t,a);break e}else if(u===B){n.tag=14,n=cg(null,n,o,t,a);break e}}throw n=de(o)||o,Error(r(306,n,""))}}return n;case 0:return xf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=vr(o,n.pendingProps),pg(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Yu(t,n),oo(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Da(n,hn,o),o!==d.cache&&Vu(n,[hn],a,!0),so(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=mg(t,n,o,a);break e}else if(o!==u){u=ti(Error(r(424)),n),$s(u),n=mg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=xi(t.firstChild),Un=n,Nt=!0,dr=null,wi=!0,a=Qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Js(),o===u){n=aa(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=E_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=ac(ee.current).createElement(a),o[dn]=n,o[vn]=t,Tn(o,a,t),nn(o),n.stateNode=o):n.memoizedState=E_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Nt&&(o=n.stateNode=S_(n.type,n.pendingProps,ee.current),Un=n,wi=!0,u=$t,Wa(n.type)?(sd=u,$t=xi(o.firstChild)):$t=u),En(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=PS(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,Un=n,$t=xi(o.firstChild),wi=!1,u=!0):u=!1),u||hr(n)),Ke(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,nd(u,d)?o=null:E!==null&&nd(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(t,n,$x,null,null,a),Do._currentValue=u),kl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=IS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||hr(n)),null;case 13:return gg(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ts(n,null,o,a):En(t,n,o,a),n.child;case 11:return lg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=Rn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return cg(t,n,n.type,n.pendingProps,a);case 15:return ug(t,n,n.type,n.pendingProps,a);case 19:return vg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Xl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Qi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return fg(t,n,a);case 24:return mr(n),o=Rn(hn),t===null?(u=Wu(),u===null&&(u=Wt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ju(n),Da(n,hn,u)):((t.lanes&a)!==0&&(Yu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,hn,o)):(o=d.cache,Da(n,hn,o),o!==u.cache&&Vu(n,[hn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ra(t){t.flags|=4}function Sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C_(n)){if(n=ri.current,n!==null&&((St&4194048)===St?Di!==null:(St&62914560)!==St&&(St&536870912)===0||n!==Di))throw ao=qu,im;t.flags|=8192}}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ce():536870912,t.lanes|=n,rs|=n)}function mo(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function lS(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(hn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jp())),Kt(n),null;case 26:return a=n.memoizedState,t===null?(ra(n),a!==null?(Kt(n),Sg(n,a)):(Kt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ra(n),Kt(n),Sg(n,a)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ra(n),Kt(n),n.flags&=-16777217),null;case 27:$e(n),a=ee.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}t=Ue.current,Qs(n)?Kp(n):(t=S_(u,o,a),n.stateNode=t,ra(n))}return Kt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(t=Ue.current,Qs(n))Kp(n);else{switch(u=ac(ee.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[dn]=n,t[vn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ra(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||h_(t.nodeValue,a)),t||hr(n)}else t=ac(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else Js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Jp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ia(n),n):(ia(n),null)}if(ia(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Kt(n),null;case 4:return Je(),t===null&&Qf(n.stateNode.containerInfo),Kt(n),null;case 10:return ta(n.type),Kt(n),null;case 19:if(ue(pn),u=n.memoizedState,u===null)return Kt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)mo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,mo(u,!1),t=d.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Yp(a,t),a=a.sibling;return Se(pn,pn.current&1|2),n.child}t=t.sibling}u.tail!==null&&bt()>Yl&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Hl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Nt)return Kt(n),null}else 2*bt()-u.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=bt(),n.sibling=null,t=pn.current,Se(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return ia(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(gr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(hn),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cS(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(hn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(ia(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(pn),null;case 4:return Je(),null;case 10:return ta(n.type),null;case 22:case 23:return ia(n),Ju(),t!==null&&ue(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(hn),null;case 25:return null;default:return null}}function yg(t,n){switch(Bu(n),n.tag){case 3:ta(hn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:ia(n);break;case 19:ue(pn);break;case 10:ta(n.type);break;case 22:case 23:ia(n),Ju(),t!==null&&ue(gr);break;case 24:ta(hn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=n;var z=a,te=R;try{te()}catch(ge){kt(u,z,ge)}}}o=o.next}while(o!==d)}}catch(ge){kt(n,n.return,ge)}}function Mg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cm(n,a)}catch(o){kt(t,t.return,o)}}}function Eg(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Ni(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function bg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Rf(t,n,a){try{var o=t.stateNode;DS(o,t.type,a,n),o[vn]=n}catch(u){kt(t,t.return,u)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ic));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(wf(t,n,a),t=t.sibling;t!==null;)wf(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function Ag(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[dn]=t,n[vn]=a}catch(d){kt(t,t.return,d)}}var sa=!1,on=!1,Df=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function uS(t,n){if(t=t.containerInfo,ed=uc,t=Bp(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,R=-1,z=-1,te=0,ge=0,ye=t,ae=null;t:for(;;){for(var se;ye!==a||u!==0&&ye.nodeType!==3||(R=E+u),ye!==d||o!==0&&ye.nodeType!==3||(z=E+o),ye.nodeType===3&&(E+=ye.nodeValue.length),(se=ye.firstChild)!==null;)ae=ye,ye=se;for(;;){if(ye===t)break t;if(ae===a&&++te===u&&(R=E),ae===d&&++ge===o&&(z=E),(se=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=se}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:t,selectionRange:a},uc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=vr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){kt(a,a.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ad(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Cg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),o&4&&go(5,a);break;case 1:if(Ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(a,a.return,E)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(a,a.return,E)}}o&64&&Mg(a),o&512&&_o(a,a.return);break;case 3:if(Ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(t,n)}catch(E){kt(a,a.return,E)}}break;case 27:n===null&&o&4&&Ag(a);case 26:case 5:Ba(t,a),n===null&&o&4&&bg(a),o&512&&_o(a,a.return);break;case 12:Ba(t,a);break;case 13:Ba(t,a),o&4&&Ng(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=xS.bind(null,a),FS(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||on,u=sa;var d=on;sa=o,(on=n)&&!d?za(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),sa=u,on=d}break;case 30:break;default:Ba(t,a)}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Gn=!1;function oa(t,n,a){for(a=a.child;a!==null;)Dg(t,n,a),a=a.sibling}function Dg(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:on||Ni(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ni(a,n);var o=jt,u=Gn;Wa(a.type)&&(jt=a.stateNode,Gn=!1),oa(t,n,a),Ao(a.stateNode),jt=o,Gn=u;break;case 5:on||Ni(a,n);case 6:if(o=jt,u=Gn,jt=null,oa(t,n,a),jt=o,Gn=u,jt!==null)if(Gn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{jt.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:jt!==null&&(Gn?(t=jt,v_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Oo(t)):v_(jt,a.stateNode));break;case 4:o=jt,u=Gn,jt=a.stateNode.containerInfo,Gn=!0,oa(t,n,a),jt=o,Gn=u;break;case 0:case 11:case 14:case 15:on||Fa(2,a,n),on||Fa(4,a,n),oa(t,n,a);break;case 1:on||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Eg(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,oa(t,n,a),on=o;break;default:oa(t,n,a)}}function Ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oo(t)}catch(a){kt(n,n.return,a)}}function fS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rg),n;default:throw Error(r(435,t.tag))}}function Nf(t,n){var a=fS(t);n.forEach(function(o){var u=SS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){jt=R.stateNode,Gn=!1;break e}break;case 5:jt=R.stateNode,Gn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));Dg(d,E,u),jt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ug(n,t),n=n.sibling}var vi=null;function Ug(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Yn(t),o&4&&(Fa(3,t,t.return),go(3,t),Fa(5,t,t.return));break;case 1:jn(n,t),Yn(t),o&512&&(on||a===null||Ni(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(jn(n,t),Yn(t),o&512&&(on||a===null||Ni(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ra]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[dn]=t,nn(d),o=d;break e;case"link":var E=A_("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(E=A_("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[dn]=t,nn(d),o=d}t.stateNode=o}else R_(u,t.type,t.stateNode);else t.stateNode=T_(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?R_(u,t.type,t.stateNode):T_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Yn(t),o&512&&(on||a===null||Ni(a,a.return)),a!==null&&o&4&&Rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Yn(t),o&512&&(on||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{qt(u,"")}catch(se){kt(t,t.return,se)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Rf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Df=!0);break;case 6:if(jn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(se){kt(t,t.return,se)}}break;case 3:if(oc=null,u=vi,vi=rc(n.containerInfo),jn(n,t),vi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(se){kt(t,t.return,se)}Df&&(Df=!1,Lg(t));break;case 4:o=vi,vi=rc(t.stateNode.containerInfo),jn(n,t),Yn(t),vi=o;break;case 12:jn(n,t),Yn(t);break;case 13:jn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ff=bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Nf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,te=sa,ge=on;if(sa=te||u,on=ge||z,jn(n,t),on=ge,sa=te,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||sa||on||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=z.stateNode;var ye=z.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(se){kt(z,z.return,se)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(se){kt(z,z.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Nf(t,a))));break;case 19:jn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Nf(t,o)));break;case 30:break;case 21:break;default:jn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Tg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Cf(t);ql(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(qt(E,""),a.flags&=-33);var R=Cf(t);ql(t,R,E);break;case 3:case 4:var z=a.stateNode.containerInfo,te=Cf(t);wf(t,te,z);break;default:throw Error(r(161))}}catch(ge){kt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),xr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Eg(n,n.return,a),xr(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ni(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function za(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:za(u,d,a),go(4,d);break;case 1:if(za(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){kt(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)lm(z[u],R)}catch(te){kt(o,o.return,te)}}a&&E&64&&Mg(d),_o(d,d.return);break;case 27:Ag(d);case 26:case 5:za(u,d,a),a&&o===null&&E&4&&bg(d),_o(d,d.return);break;case 12:za(u,d,a);break;case 13:za(u,d,a),a&&E&4&&Ng(u,d);break;case 22:d.memoizedState===null&&za(u,d,a),_o(d,d.return);break;case 30:break;default:za(u,d,a)}n=n.sibling}}function Uf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Ui(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Og(t,n,a,o),n=n.sibling}function Og(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n,a,o),u&2048&&go(9,n);break;case 1:Ui(t,n,a,o);break;case 3:Ui(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Ui(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){kt(n,n.return,z)}}else Ui(t,n,a,o);break;case 13:Ui(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Ui(t,n,a,o):vo(t,n):d._visibility&2?Ui(t,n,a,o):(d._visibility|=2,ns(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Uf(E,n);break;case 24:Ui(t,n,a,o),u&2048&&Lf(n.alternate,n);break;default:Ui(t,n,a,o)}}function ns(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,R=a,z=o,te=E.flags;switch(E.tag){case 0:case 11:case 15:ns(d,E,R,z,u),go(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&2?ns(d,E,R,z,u):vo(d,E):(ge._visibility|=2,ns(d,E,R,z,u)),u&&te&2048&&Uf(E.alternate,E);break;case 24:ns(d,E,R,z,u),u&&te&2048&&Lf(E.alternate,E);break;default:ns(d,E,R,z,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Uf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Lf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function is(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)Pg(t),t=t.sibling}function Pg(t){switch(t.tag){case 26:is(t),t.flags&xo&&t.memoizedState!==null&&KS(vi,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var n=vi;vi=rc(t.stateNode.containerInfo),is(t),vi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,is(t),xo=n):is(t));break;default:is(t)}}function Ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Bg(o,t)}Ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):So(t);break;default:So(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Bg(o,t)}Ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function Bg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(wg(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var dS={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},hS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Wt=null,mt=null,St=0,It=0,Zn=null,Ha=!1,as=!1,Of=!1,la=0,en=0,Ga=0,Sr=0,Pf=0,si=0,rs=0,yo=null,Vn=null,If=!1,Ff=0,Yl=1/0,Zl=null,Va=null,bn=0,ka=null,ss=null,os=0,Bf=0,zf=null,zg=null,Mo=0,Hf=null;function Kn(){if((Pt&2)!==0&&St!==0)return St&-St;if(P.T!==null){var t=Yr;return t!==0?t:jf()}return Tt()}function Hg(){si===0&&(si=(St&536870912)===0||Nt?W():536870912);var t=ri.current;return t!==null&&(t.flags|=32),si}function Qn(t,n,a){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Xa(t,St,si,!1)),Ie(t,a),((Pt&2)===0||t!==Wt)&&(t===Wt&&((Pt&2)===0&&(Sr|=a),en===4&&Xa(t,St,si,!1)),Li(t))}function Gg(t,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?gS(t,n):kf(t,n,!0),d=o;do{if(u===0){as&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!pS(a)){u=kf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;u=yo;var z=R.current.memoizedState.isDehydrated;if(z&&(ls(R,E).flags|=256),E=kf(R,E,!1),E!==2){if(Of&&!z){R.errorRecoveryDisabledLanes|=d,Sr|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){ls(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,si,!Ha);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ff+300-bt(),10<u)){if(Xa(o,n,si,!Ha),He(o,0,!0)!==0)break e;o.timeoutHandle=g_(Vg.bind(null,o,a,Vn,Zl,If,n,si,Sr,rs,Ha,d,2,-0,0),u);break e}Vg(o,a,Vn,Zl,If,n,si,Sr,rs,Ha,d,0,-0,0)}}break}while(!0);Li(t)}function Vg(t,n,a,o,u,d,E,R,z,te,ge,ye,ae,se){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:ZS},Pg(n),ye=QS(),ye!==null)){t.cancelPendingCommit=ye(Zg.bind(null,t,n,d,a,o,u,E,R,z,ge,1,ae,se)),Xa(t,d,E,!te);return}Zg(t,n,d,a,o,u,E,R,z)}function pS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Wn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Pf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Le(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&pe(t,a,n)}function Kl(){return(Pt&6)===0?(Eo(0),!1):!0}function Gf(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,ea=pr=null,af(t),es=null,ho=0,t=mt;for(;t!==null;)yg(t.alternate,t),t=t.return;mt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,US(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Gf(),Wt=t,mt=a=Qi(t.current,null),St=n,It=0,Zn=null,Ha=!1,as=Pe(t,n),Of=!1,rs=si=Pf=Sr=Ga=en=0,Vn=yo=null,If=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Le(o),d=1<<u;n|=t[u],o&=~d}return la=n,vl(),a}function kg(t,n){dt=null,P.H=Fl,n===io||n===Rl?(n=sm(),It=3):n===im?(n=sm(),It=4):It=n===og?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,mt===null&&(en=1,Vl(t,ti(n,t.current)))}function Xg(){var t=P.H;return P.H=Fl,t===null?Fl:t}function Wg(){var t=P.A;return P.A=dS,t}function Vf(){en=4,Ha||(St&4194048)!==St&&ri.current!==null||(as=!0),(Ga&134217727)===0&&(Sr&134217727)===0||Wt===null||Xa(Wt,St,si,!1)}function kf(t,n,a){var o=Pt;Pt|=2;var u=Xg(),d=Wg();(Wt!==t||St!==n)&&(Zl=null,ls(t,n)),n=!1;var E=en;e:do try{if(It!==0&&mt!==null){var R=mt,z=Zn;switch(It){case 8:Gf(),E=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var te=It;if(It=0,Zn=null,cs(t,R,z,te),a&&as){E=0;break e}break;default:te=It,It=0,Zn=null,cs(t,R,z,te)}}mS(),E=en;break}catch(ge){kg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ea=pr=null,Pt=o,P.H=u,P.A=d,mt===null&&(Wt=null,St=0,vl()),E}function mS(){for(;mt!==null;)qg(mt)}function gS(t,n){var a=Pt;Pt|=2;var o=Xg(),u=Wg();Wt!==t||St!==n?(Zl=null,Yl=bt()+500,ls(t,n)):as=Pe(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var d=Zn;t:switch(It){case 1:It=0,Zn=null,cs(t,n,d,1);break;case 2:case 9:if(am(d)){It=0,Zn=null,jg(n);break}n=function(){It!==2&&It!==9||Wt!==t||(It=7),Li(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:am(d)?(It=0,Zn=null,jg(n)):(It=0,Zn=null,cs(t,n,d,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var R=mt;if(!E||C_(E)){It=0,Zn=null;var z=R.sibling;if(z!==null)mt=z;else{var te=R.return;te!==null?(mt=te,Ql(te)):mt=null}break t}}It=0,Zn=null,cs(t,n,d,5);break;case 6:It=0,Zn=null,cs(t,n,d,6);break;case 8:Gf(),en=6;break e;default:throw Error(r(462))}}_S();break}catch(ge){kg(t,ge)}while(!0);return ea=pr=null,P.H=o,P.A=u,Pt=a,mt!==null?0:(Wt=null,St=0,vl(),en)}function _S(){for(;mt!==null&&!Ot();)qg(mt)}function qg(t){var n=xg(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Ql(t):mt=n}function jg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=hg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=hg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:af(n);default:yg(a,n),n=mt=Yp(n,la),n=xg(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Ql(t):mt=n}function cs(t,n,a,o){ea=pr=null,af(n),es=null,ho=0;var u=n.return;try{if(sS(t,u,n,a,St)){en=1,Vl(t,ti(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;en=1,Vl(t,ti(a,t.current)),mt=null;return}n.flags&32768?(Nt||o===1?t=!0:as||(St&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yg(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){Yg(n,Ha);return}t=n.return;var a=lS(n.alternate,n,la);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);en===0&&(en=5)}function Yg(t,n){do{var a=cS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);en=6,mt=null}function Zg(t,n,a,o,u,d,E,R,z){t.cancelPendingCommit=null;do Jl();while(bn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Uu,Te(t,a,d,E,R,z),t===Wt&&(mt=Wt=null,St=0),ss=n,ka=t,os=a,Bf=d,zf=u,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yS(Ct,function(){return e_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,E=Pt,Pt|=4;try{uS(t,n,a)}finally{Pt=E,H.p=u,P.T=o}}bn=1,Kg(),Qg(),Jg()}}function Kg(){if(bn===1){bn=0;var t=ka,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Ug(n,t);var d=td,E=Bp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(E!==R&&R&&R.ownerDocument&&Fp(R.ownerDocument.documentElement,R)){if(z!==null&&Ru(R)){var te=z.start,ge=z.end;if(ge===void 0&&(ge=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(ge,R.value.length);else{var ye=R.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var se=ae.getSelection(),it=R.textContent.length,Qe=Math.min(z.start,it),Ht=z.end===void 0?Qe:Math.min(z.end,it);!se.extend&&Qe>Ht&&(E=Ht,Ht=Qe,Qe=E);var Y=Ip(R,Qe),X=Ip(R,Ht);if(Y&&X&&(se.rangeCount!==1||se.anchorNode!==Y.node||se.anchorOffset!==Y.offset||se.focusNode!==X.node||se.focusOffset!==X.offset)){var Q=ye.createRange();Q.setStart(Y.node,Y.offset),se.removeAllRanges(),Qe>Ht?(se.addRange(Q),se.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),se.addRange(Q))}}}}for(ye=[],se=R;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var xe=ye[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}uc=!!ed,td=ed=null}finally{Pt=u,H.p=o,P.T=a}}t.current=n,bn=2}}function Qg(){if(bn===2){bn=0;var t=ka,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Cg(t,n.alternate,n)}finally{Pt=u,H.p=o,P.T=a}}bn=3}}function Jg(){if(bn===4||bn===3){bn=0,ot();var t=ka,n=ss,a=os,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,ss=ka=null,$g(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Ut(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];d(R.value,{componentStack:R.stack})}}finally{P.T=n,H.p=u}}(os&3)!==0&&Jl(),Li(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Hf?Mo++:(Mo=0,Hf=t):Mo=0,Eo(0)}}function $g(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Jl(t){return Kg(),Qg(),Jg(),e_()}function e_(){if(bn!==5)return!1;var t=ka,n=Bf;Bf=0;var a=Ut(os),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=zf,zf=null;var d=ka,E=os;if(bn=0,ss=ka=null,os=0,(Pt&6)!==0)throw Error(r(331));var R=Pt;if(Pt|=4,Fg(d.current),Og(d,d.current,E,a),Pt=R,Eo(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{H.p=u,P.T=o,$g(t,n)}}function t_(t,n,a){n=ti(a,n),n=vf(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Ie(t,2),Li(t))}function kt(t,n,a){if(t.tag===3)t_(t,t,a);else for(;n!==null;){if(n.tag===3){t_(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ti(a,t),a=rg(2),o=La(n,a,2),o!==null&&(sg(a,o,n,t),Ie(o,2),Li(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new hS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),t=vS.bind(null,t,n,a),n.then(t,t))}function vS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(St&a)===a&&(en===4||en===3&&(St&62914560)===St&&300>bt()-Ff?(Pt&2)===0&&ls(t,0):Pf|=a,rs===St&&(rs=0)),Li(t)}function n_(t,n){n===0&&(n=Ce()),t=Xr(t,n),t!==null&&(Ie(t,n),Li(t))}function xS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),n_(t,a)}function SS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),n_(t,a)}function yS(t,n){return pt(t,n)}var $l=null,us=null,Wf=!1,ec=!1,qf=!1,yr=0;function Li(t){t!==us&&t.next===null&&(us===null?$l=us=t:us=us.next=t),ec=!0,Wf||(Wf=!0,ES())}function Eo(t,n){if(!qf&&ec){qf=!0;do for(var a=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Le(42|t)+1)-1,d&=u&~(E&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,s_(o,d))}else d=St,d=He(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,s_(o,d));o=o.next}while(a);qf=!1}}function MS(){i_()}function i_(){ec=Wf=!1;var t=0;yr!==0&&(NS()&&(t=yr),yr=0);for(var n=bt(),a=null,o=$l;o!==null;){var u=o.next,d=a_(o,n);d===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(d&3)!==0)&&(ec=!0)),o=u}Eo(t)}function a_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Le(d),R=1<<E,z=u[E];z===-1?((R&a)===0||(R&o)!==0)&&(u[E]=lt(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=St,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&yt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&yt(o),Ut(a)){case 2:case 8:a=Mt;break;case 32:a=Ct;break;case 268435456:a=O;break;default:a=Ct}return o=r_.bind(null,t),a=pt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&yt(o),t.callbackPriority=2,t.callbackNode=null,2}function r_(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var o=St;return o=He(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Gg(t,o,n),a_(t,bt()),t.callbackNode!=null&&t.callbackNode===a?r_.bind(null,t):null)}function s_(t,n){if(Jl())return null;Gg(t,n,!0)}function ES(){LS(function(){(Pt&6)!==0?pt(Yt,MS):i_()})}function jf(){return yr===0&&(yr=W()),yr}function o_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function l_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=o_((u[vn]||null).action),E=o.submitter;E&&(n=(n=E[vn]||null)?o_(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var R=new ml("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yr!==0){var z=E?l_(u,E):new FormData(u);hf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=E?l_(u,E):new FormData(u),hf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Yf=0;Yf<Nu.length;Yf++){var Zf=Nu[Yf],TS=Zf.toLowerCase(),AS=Zf[0].toUpperCase()+Zf.slice(1);_i(TS,"on"+AS)}_i(Gp,"onAnimationEnd"),_i(Vp,"onAnimationIteration"),_i(kp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(kx,"onTransitionRun"),_i(Xx,"onTransitionStart"),_i(Wx,"onTransitionCancel"),_i(Xp,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function c_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],z=R.instance,te=R.currentTarget;if(R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=te;try{d(u)}catch(ge){Gl(ge)}u.currentTarget=null,d=z}else for(E=0;E<o.length;E++){if(R=o[E],z=R.instance,te=R.currentTarget,R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=te;try{d(u)}catch(ge){Gl(ge)}u.currentTarget=null,d=z}}}}function gt(t,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=t+"__bubble";a.has(o)||(u_(n,t,2,!1),a.add(o))}function Kf(t,n,a){var o=0;n&&(o|=4),u_(a,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Qf(t){if(!t[tc]){t[tc]=!0,ol.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||Kf(a,!1,t),Kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Kf("selectionchange",!1,n))}}function u_(t,n,a,o){switch(O_(n)){case 2:var u=ey;break;case 8:u=ty;break;default:u=fd}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Jf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=mi(R),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){o=d=E;continue e}R=R.parentNode}}o=o.return}_p(function(){var te=d,ge=gu(a),ye=[];e:{var ae=Wp.get(t);if(ae!==void 0){var se=ml,it=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":se=yx;break;case"focusin":it="focus",se=Mu;break;case"focusout":it="blur",se=Mu;break;case"beforeblur":case"afterblur":se=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=bx;break;case Gp:case Vp:case kp:se=dx;break;case Xp:se=Ax;break;case"scroll":case"scrollend":se=ox;break;case"wheel":se=Cx;break;case"copy":case"cut":case"paste":se=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Mp;break;case"toggle":case"beforetoggle":se=Dx}var Qe=(n&4)!==0,Ht=!Qe&&(t==="scroll"||t==="scrollend"),Y=Qe?ae!==null?ae+"Capture":null:ae;Qe=[];for(var X=te,Q;X!==null;){var xe=X;if(Q=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||Q===null||Y===null||(xe=Vs(X,Y),xe!=null&&Qe.push(To(X,xe,Q))),Ht)break;X=X.return}0<Qe.length&&(ae=new se(ae,it,null,a,ge),ye.push({event:ae,listeners:Qe}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ae&&a!==mu&&(it=a.relatedTarget||a.fromElement)&&(mi(it)||it[Aa]))break e;if((se||ae)&&(ae=ge.window===ge?ge:(ae=ge.ownerDocument)?ae.defaultView||ae.parentWindow:window,se?(it=a.relatedTarget||a.toElement,se=te,it=it?mi(it):null,it!==null&&(Ht=c(it),Qe=it.tag,it!==Ht||Qe!==5&&Qe!==27&&Qe!==6)&&(it=null)):(se=null,it=te),se!==it)){if(Qe=Sp,xe="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Mp,xe="onPointerLeave",Y="onPointerEnter",X="pointer"),Ht=se==null?ae:Ai(se),Q=it==null?ae:Ai(it),ae=new Qe(xe,X+"leave",se,a,ge),ae.target=Ht,ae.relatedTarget=Q,xe=null,mi(ge)===te&&(Qe=new Qe(Y,X+"enter",it,a,ge),Qe.target=Q,Qe.relatedTarget=Ht,xe=Qe),Ht=xe,se&&it)t:{for(Qe=se,Y=it,X=0,Q=Qe;Q;Q=fs(Q))X++;for(Q=0,xe=Y;xe;xe=fs(xe))Q++;for(;0<X-Q;)Qe=fs(Qe),X--;for(;0<Q-X;)Y=fs(Y),Q--;for(;X--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=fs(Qe),Y=fs(Y)}Qe=null}else Qe=null;se!==null&&f_(ye,ae,se,Qe,!1),it!==null&&Ht!==null&&f_(ye,Ht,it,Qe,!0)}}e:{if(ae=te?Ai(te):window,se=ae.nodeName&&ae.nodeName.toLowerCase(),se==="select"||se==="input"&&ae.type==="file")var ke=Dp;else if(Cp(ae))if(Np)ke=Hx;else{ke=Bx;var ht=Fx}else se=ae.nodeName,!se||se.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Ci(te.elementType)&&(ke=Dp):ke=zx;if(ke&&(ke=ke(t,te))){wp(ye,ke,a,ge);break e}ht&&ht(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&Fn(ae,"number",ae.value)}switch(ht=te?Ai(te):window,t){case"focusin":(Cp(ht)||ht.contentEditable==="true")&&(Gr=ht,Cu=te,Ks=null);break;case"focusout":Ks=Cu=Gr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,zp(ye,a,ge);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":zp(ye,a,ge)}var Ye;if(bu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Hr?Ap(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Ep&&a.locale!=="ko"&&(Hr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Hr&&(Ye=vp()):(wa=ge,xu="value"in wa?wa.value:wa.textContent,Hr=!0)),ht=nc(te,tt),0<ht.length&&(tt=new yp(tt,t,null,a,ge),ye.push({event:tt,listeners:ht}),Ye?tt.data=Ye:(Ye=Rp(a),Ye!==null&&(tt.data=Ye)))),(Ye=Ux?Lx(t,a):Ox(t,a))&&(tt=nc(te,"onBeforeInput"),0<tt.length&&(ht=new yp("onBeforeInput","beforeinput",null,a,ge),ye.push({event:ht,listeners:tt}),ht.data=Ye)),bS(ye,t,te,a,ge)}c_(ye,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Vs(t,a),u!=null&&o.unshift(To(t,u,d)),u=Vs(t,n),u!=null&&o.push(To(t,u,d))),t.tag===3)return o;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f_(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var R=a,z=R.alternate,te=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||te===null||(z=te,u?(te=Vs(a,d),te!=null&&E.unshift(To(a,te,z))):u||(te=Vs(a,d),te!=null&&E.push(To(a,te,z)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var CS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function d_(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(wS,"")}function h_(t,n){return n=d_(n),d_(t)===n}function ic(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qt(t,""+o);break;case"className":ne(t,"class",o);break;case"tabIndex":ne(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(t,a,o);break;case"style":gi(t,o,d);break;case"data":if(n!=="object"){ne(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ic);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),oe(t,"popover",o);break;case"xlinkActuate":K(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":K(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":K(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":K(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":K(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":K(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":K(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":K(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":K(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ul.get(a)||a,oe(t,a,o))}}function $f(t,n,a,o,u,d){switch(a){case"style":gi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?qt(t,o):(typeof o=="number"||typeof o=="bigint")&&qt(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):oe(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,d,E,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var R=d=E=u=null,z=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":E=ge;break;case"checked":z=ge;break;case"defaultChecked":te=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:zt(t,n,o,ge,a,null)}}In(t,d,R,z,te,E,u,!1),Vt(t);return;case"select":gt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:zt(t,n,u,R,a,null)}n=d,a=E,t.multiple=!!o,n!=null?Bn(t,!!o,n,!1):a!=null&&Bn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:zt(t,n,E,R,a,null)}Lt(t,o,u,d),Vt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,z,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)gt(bo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,te,o,a,null)}return;default:if(Ci(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&$f(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&zt(t,n,R,o,a,null))}function DS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,R=null,z=null,te=null,ge=null;for(se in a){var ye=a[se];if(a.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":z=ye;default:o.hasOwnProperty(se)||zt(t,n,se,null,o,ye)}}for(var ae in o){var se=o[ae];if(ye=a[ae],o.hasOwnProperty(ae)&&(se!=null||ye!=null))switch(ae){case"type":d=se;break;case"name":u=se;break;case"checked":te=se;break;case"defaultChecked":ge=se;break;case"value":E=se;break;case"defaultValue":R=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==ye&&zt(t,n,ae,se,o,ye)}}_t(t,E,R,z,te,ge,d,u);return;case"select":se=E=R=ae=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":se=z;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":ae=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==z&&zt(t,n,u,d,o,z)}n=R,a=E,o=se,ae!=null?Bn(t,!!a,ae,!1):!!o!=!!a&&(n!=null?Bn(t,!!a,n,!0):Bn(t,!!a,a?[]:"",!1));return;case"textarea":se=ae=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:zt(t,n,R,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":ae=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&zt(t,n,E,u,o,d)}Zi(t,ae,se);return;case"option":for(var it in a)if(ae=a[it],a.hasOwnProperty(it)&&ae!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:zt(t,n,it,null,o,ae)}for(z in o)if(ae=o[z],se=a[z],o.hasOwnProperty(z)&&ae!==se&&(ae!=null||se!=null))switch(z){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:zt(t,n,z,ae,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ae=a[Qe],a.hasOwnProperty(Qe)&&ae!=null&&!o.hasOwnProperty(Qe)&&zt(t,n,Qe,null,o,ae);for(te in o)if(ae=o[te],se=a[te],o.hasOwnProperty(te)&&ae!==se&&(ae!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:zt(t,n,te,ae,o,se)}return;default:if(Ci(n)){for(var Ht in a)ae=a[Ht],a.hasOwnProperty(Ht)&&ae!==void 0&&!o.hasOwnProperty(Ht)&&$f(t,n,Ht,void 0,o,ae);for(ge in o)ae=o[ge],se=a[ge],!o.hasOwnProperty(ge)||ae===se||ae===void 0&&se===void 0||$f(t,n,ge,ae,o,se);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!o.hasOwnProperty(Y)&&zt(t,n,Y,null,o,ae);for(ye in o)ae=o[ye],se=a[ye],!o.hasOwnProperty(ye)||ae===se||ae==null&&se==null||zt(t,n,ye,ae,o,se)}var ed=null,td=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function p_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===id?!1:(id=t,!0):(id=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(t){return __.resolve(null).then(t).catch(OS)}:g_;function OS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function v_(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Ao(E.documentElement),a&2&&Ao(E.body),a&4)for(a=E.head,Ao(a),E=a.firstChild;E;){var R=E.nextSibling,z=E.nodeName;E[Ra]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){t.removeChild(d),Oo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Oo(n)}function ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function PS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function IS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function FS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var sd=null;function x_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function S_(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fr(t)}var oi=new Map,y_=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=H.d;H.d={f:BS,r:zS,D:HS,C:GS,L:VS,m:kS,X:WS,S:XS,M:qS};function BS(){var t=ca.f(),n=Kl();return t||n}function zS(t){var n=qi(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):ca.r(t)}var ds=typeof document>"u"?null:document;function M_(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=Xt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y_.has(u)||(y_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),nn(n),o.head.appendChild(n)))}}function HS(t){ca.D(t),M_("dns-prefetch",t,null)}function GS(t,n){ca.C(t,n),M_("preconnect",t,n)}function VS(t,n,a){ca.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xt(a.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(n){case"style":d=hs(t);break;case"script":d=ps(t)}oi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(d))||n==="script"&&o.querySelector(Co(d))||(n=o.createElement("link"),Tn(n,"link",t),nn(n),o.head.appendChild(n)))}}function kS(t,n){ca.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!oi.has(d)&&(t=_({rel:"modulepreload",href:t},n),oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(d)))return}o=a.createElement("link"),Tn(o,"link",t),nn(o),a.head.appendChild(o)}}}function XS(t,n,a){ca.S(t,n,a);var o=ds;if(o&&t){var u=ji(o).hoistableStyles,d=hs(t);n=n||"default";var E=u.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(Ro(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(d))&&od(t,a);var z=E=o.createElement("link");nn(z),Tn(z,"link",t),z._p=new Promise(function(te,ge){z.onload=te,z.onerror=ge}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(d,E)}}}function WS(t,n){ca.X(t,n);var a=ds;if(a&&t){var o=ji(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=_({src:t,async:!0},n),(n=oi.get(u))&&ld(t,n),d=a.createElement("script"),nn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function qS(t,n){ca.M(t,n);var a=ds;if(a&&t){var o=ji(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&ld(t,n),d=a.createElement("script"),nn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function E_(t,n,a,o){var u=(u=ee.current)?rc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ji(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var d=ji(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(Ro(t)))&&!d._p&&(E.instance=d,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),d||jS(u,t,a,E.state))),n&&o===null)throw Error(r(528,""));return E}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ji(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+Xt(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function b_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function jS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),nn(n),t.head.appendChild(n))}function ps(t){return'[src="'+Xt(t)+'"]'}function Co(t){return"script[async]"+t}function T_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),Tn(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var d=t.querySelector(Ro(u));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;o=b_(a),(u=oi.get(u))&&od(o,u),d=(t.ownerDocument||t).createElement("link"),nn(d);var E=d;return E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),Tn(d,"link",o),n.state.loading|=4,sc(d,a.precedence,t),n.instance=d;case"script":return d=ps(a.src),(u=t.querySelector(Co(d)))?(n.instance=u,nn(u),u):(o=a,(u=oi.get(d))&&(o=_({},a),ld(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function A_(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ra]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function R_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function YS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function C_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function ZS(){}function KS(t,n,a){if(wo===null)throw Error(r(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(a.href),d=t.querySelector(Ro(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=lc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,nn(d);return}d=t.ownerDocument||t,a=b_(a),(u=oi.get(u))&&od(a,u),d=d.createElement("link"),nn(d);var E=d;E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),Tn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=lc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function QS(){if(wo===null)throw Error(r(475));var t=wo;return t.stylesheets&&t.count===0&&cd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&cd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function cd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(JS,t),cc=null,lc.call(t))}function JS(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:N,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $S(t,n,a,o,u,d,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function w_(t,n,a,o,u,d,E,R,z,te,ge,ye){return t=new $S(t,n,a,E,R,z,te,ye),n=1,d===!0&&(n|=24),d=qn(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),t}function D_(t){return t?(t=Wr,t):Wr}function N_(t,n,a,o,u,d){u=D_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=La(t,o,n),a!==null&&(Qn(a,t,n),ro(a,t,n))}function U_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ud(t,n){U_(t,n),(t=t.alternate)&&U_(t,n)}function L_(t){if(t.tag===13){var n=Xr(t,67108864);n!==null&&Qn(n,t,67108864),ud(t,67108864)}}var uc=!0;function ey(t,n,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=2,fd(t,n,a,o)}finally{H.p=d,P.T=u}}function ty(t,n,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=8,fd(t,n,a,o)}finally{H.p=d,P.T=u}}function fd(t,n,a,o){if(uc){var u=dd(o);if(u===null)Jf(t,n,o,fc,a),P_(t,o);else if(iy(u,t,n,a,o))o.stopPropagation();else if(P_(t,o),n&4&&-1<ny.indexOf(t)){for(;u!==null;){var d=qi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Fe(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var z=1<<31-Le(E);R.entanglements[1]|=z,E&=~z}Li(d),(Pt&6)===0&&(Yl=bt()+500,Eo(0))}}break;case 13:R=Xr(d,2),R!==null&&Qn(R,d,2),Kl(),ud(d,2)}if(d=dd(o),d===null&&Jf(t,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Jf(t,n,o,null,a)}}function dd(t){return t=gu(t),hd(t)}var fc=null;function hd(t){if(fc=null,t=mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function O_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case Yt:return 2;case Mt:return 8;case Ct:case Xe:return 32;case O:return 268435456;default:return 32}default:return 32}}var pd=!1,qa=null,ja=null,Ya=null,No=new Map,Uo=new Map,Za=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=qi(n),n!==null&&L_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function iy(t,n,a,o,u){switch(n){case"focusin":return qa=Lo(qa,t,n,a,o,u),!0;case"dragenter":return ja=Lo(ja,t,n,a,o,u),!0;case"mouseover":return Ya=Lo(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return No.set(d,Lo(No.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Uo.set(d,Lo(Uo.get(d)||null,t,n,a,o,u)),!0}return!1}function I_(t){var n=mi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,pi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=Xr(a,o);u!==null&&Qn(u,a,o),ud(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=qi(a),n!==null&&L_(n),t.blockedOn=a,!1;n.shift()}return!0}function F_(t,n,a){dc(t)&&a.delete(n)}function ay(){pd=!1,qa!==null&&dc(qa)&&(qa=null),ja!==null&&dc(ja)&&(ja=null),Ya!==null&&dc(Ya)&&(Ya=null),No.forEach(F_),Uo.forEach(F_)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,pd||(pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ay)))}var pc=null;function B_(t){pc!==t&&(pc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var d=qi(a);d!==null&&(t.splice(n,3),n-=3,hf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Oo(t){function n(z){return hc(z,t)}qa!==null&&hc(qa,t),ja!==null&&hc(ja,t),Ya!==null&&hc(Ya,t),No.forEach(n),Uo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)I_(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[vn]||null;if(typeof d=="function")E||B_(a);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[vn]||null)R=E.formAction;else if(hd(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),B_(a)}}}function md(t){this._internalRoot=t}mc.prototype.render=md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();N_(a,o,t,n,null,null)},mc.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N_(t.current,2,null,t,null,null),Kl(),n[Aa]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&I_(t)}};var z_=e.version;if(z_!=="19.1.0")throw Error(r(527,z_,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ry={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{me=gc.inject(ry),ve=gc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=tg,d=ng,E=ig,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=w_(t,1,!1,null,null,a,o,u,d,E,R,null),t[Aa]=n.current,Qf(t),new md(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=tg,E=ng,R=ig,z=null,te=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(te=a.formState)),n=w_(t,1,!0,n,a??null,o,u,d,E,R,z,te),n.context=D_(null),a=n.current,o=Kn(),o=nt(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Li(n),t[Aa]=n.current,Qf(t),new mc(n)},Io.version="19.1.0",Io}var Z_;function _y(){if(Z_)return vd.exports;Z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vd.exports=gy(),vd.exports}var vy=_y(),Fo={},K_;function xy(){if(K_)return Fo;K_=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=f,Fo.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function f(g,M){const y=new c,A=g.length;if(A<2)return y;const x=(M==null?void 0:M.decode)||_;let v=0;do{const C=g.indexOf("=",v);if(C===-1)break;const N=g.indexOf(";",v),U=N===-1?A:N;if(C>U){v=g.lastIndexOf(";",C-1)+1;continue}const I=p(g,v,C),F=m(g,C,I),B=g.slice(I,F);if(y[B]===void 0){let T=p(g,C+1,U),D=m(g,U,T);const ce=x(g.slice(T,D));y[B]=ce}v=U+1}while(v<A);return y}function p(g,M,y){do{const A=g.charCodeAt(M);if(A!==32&&A!==9)return M}while(++M<y);return y}function m(g,M,y){for(;M>y;){const A=g.charCodeAt(--M);if(A!==32&&A!==9)return M+1}return y}function h(g,M,y){const A=(y==null?void 0:y.encode)||encodeURIComponent;if(!s.test(g))throw new TypeError(`argument name is invalid: ${g}`);const x=A(M);if(!e.test(x))throw new TypeError(`argument val is invalid: ${M}`);let v=g+"="+x;if(!y)return v;if(y.maxAge!==void 0){if(!Number.isInteger(y.maxAge))throw new TypeError(`option maxAge is invalid: ${y.maxAge}`);v+="; Max-Age="+y.maxAge}if(y.domain){if(!i.test(y.domain))throw new TypeError(`option domain is invalid: ${y.domain}`);v+="; Domain="+y.domain}if(y.path){if(!r.test(y.path))throw new TypeError(`option path is invalid: ${y.path}`);v+="; Path="+y.path}if(y.expires){if(!S(y.expires)||!Number.isFinite(y.expires.valueOf()))throw new TypeError(`option expires is invalid: ${y.expires}`);v+="; Expires="+y.expires.toUTCString()}if(y.httpOnly&&(v+="; HttpOnly"),y.secure&&(v+="; Secure"),y.partitioned&&(v+="; Partitioned"),y.priority)switch(typeof y.priority=="string"?y.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${y.priority}`)}if(y.sameSite)switch(typeof y.sameSite=="string"?y.sameSite.toLowerCase():y.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${y.sameSite}`)}return v}function _(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function S(g){return l.call(g)==="[object Date]"}return Fo}xy();var Q_="popstate";function Sy(s={}){function e(l,c){let{pathname:f="/",search:p="",hash:m=""}=Or(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),ah("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,h=m.indexOf("#");p=h===-1?m:m.slice(0,h)}return p+"#"+(typeof c=="string"?c:Zo(c))}function r(l,c){Ti(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return My(e,i,r,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ti(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yy(){return Math.random().toString(36).substring(2,10)}function J_(s,e){return{usr:s.state,key:s.key,idx:e}}function ah(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Or(e):e,state:i,key:e&&e.key||r||yy()}}function Zo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Or(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function My(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function S(){p="POP";let x=_(),v=x==null?null:x-h;h=x,m&&m({action:p,location:A.location,delta:v})}function g(x,v){p="PUSH";let C=ah(A.location,x,v);i&&i(C,x),h=_()+1;let N=J_(C,h),U=A.createHref(C);try{f.pushState(N,"",U)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(U)}c&&m&&m({action:p,location:A.location,delta:1})}function M(x,v){p="REPLACE";let C=ah(A.location,x,v);i&&i(C,x),h=_();let N=J_(C,h),U=A.createHref(C);f.replaceState(N,"",U),c&&m&&m({action:p,location:A.location,delta:0})}function y(x){return Ey(x)}let A={get action(){return p},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Q_,S),m=x,()=>{l.removeEventListener(Q_,S),m=null}},createHref(x){return e(l,x)},createURL:y,encodeLocation(x){let v=y(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:M,go(x){return f.go(x)}};return A}function Ey(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function rv(s,e,i="/"){return by(s,e,i,!1)}function by(s,e,i,r){let l=typeof e=="string"?Or(e):e,c=Sa(l.pathname||"/",i);if(c==null)return null;let f=sv(s);Ty(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=Iy(c);p=Oy(f[m],h,r)}return p}function sv(s,e=[],i=[],r=""){let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Qt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let h=_a([r,m.relativePath]),_=i.concat(m);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),sv(c.children,e,_,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:Uy(h,c.index),routesMeta:_})};return s.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of ov(c.path))l(c,f,m)}),e}function ov(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=ov(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ty(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Ly(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ay=/^:[\w-]+$/,Ry=3,Cy=2,wy=1,Dy=10,Ny=-2,$_=s=>s==="*";function Uy(s,e){let i=s.split("/"),r=i.length;return i.some($_)&&(r+=Ny),e&&(r+=Cy),i.filter(l=>!$_(l)).reduce((l,c)=>l+(Ay.test(c)?Ry:c===""?wy:Dy),r)}function Ly(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Oy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",S=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),g=m.route;if(!S&&h&&i&&!r[r.length-1].route.index&&(S=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:_a([c,S.pathname]),pathnameBase:Hy(_a([c,S.pathnameBase])),route:g}),S.pathnameBase!=="/"&&(c=_a([c,S.pathnameBase]))}return f}function $c(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Py(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:_,isOptional:S},g)=>{if(_==="*"){let y=p[g]||"";f=c.slice(0,c.length-y.length).replace(/(.)\/+$/,"$1")}const M=p[g];return S&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function Py(s,e=!1,i=!0){Ti(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Iy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ti(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Sa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Fy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Or(s):s;return{pathname:i?i.startsWith("/")?i:By(i,e):e,search:Gy(r),hash:Vy(l)}}function By(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function lv(s){let e=zy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function cv(s,e,i,r=!1){let l;typeof s=="string"?l=Or(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let S=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),S-=1;l.pathname=g.join("/")}p=S>=0?e[S]:"/"}let m=Fy(l,p),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),Hy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Gy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Vy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ky(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var uv=["POST","PUT","PATCH","DELETE"];new Set(uv);var Xy=["GET",...uv];new Set(Xy);var Fs=he.createContext(null);Fs.displayName="DataRouter";var lu=he.createContext(null);lu.displayName="DataRouterState";var fv=he.createContext({isTransitioning:!1});fv.displayName="ViewTransition";var Wy=he.createContext(new Map);Wy.displayName="Fetchers";var qy=he.createContext(null);qy.displayName="Await";var ki=he.createContext(null);ki.displayName="Navigation";var $o=he.createContext(null);$o.displayName="Location";var Ta=he.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var ep=he.createContext(null);ep.displayName="RouteError";function jy(s,{relative:e}={}){Qt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(ki),{hash:l,pathname:c,search:f}=tl(s,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:_a([i,c])),r.createHref({pathname:p,search:f,hash:l})}function el(){return he.useContext($o)!=null}function Xi(){return Qt(el(),"useLocation() may be used only in the context of a <Router> component."),he.useContext($o).location}var dv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(s){he.useContext(ki).static||he.useLayoutEffect(s)}function pv(){let{isDataRoute:s}=he.useContext(Ta);return s?sM():Yy()}function Yy(){Qt(el(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Fs),{basename:e,navigator:i}=he.useContext(ki),{matches:r}=he.useContext(Ta),{pathname:l}=Xi(),c=JSON.stringify(lv(r)),f=he.useRef(!1);return hv(()=>{f.current=!0}),he.useCallback((m,h={})=>{if(Ti(f.current,dv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=cv(m,JSON.parse(c),l,h.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_a([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,s])}he.createContext(null);function tl(s,{relative:e}={}){let{matches:i}=he.useContext(Ta),{pathname:r}=Xi(),l=JSON.stringify(lv(i));return he.useMemo(()=>cv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function Zy(s,e){return mv(s,e)}function mv(s,e,i,r){var v;Qt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=he.useContext(ki),{matches:c}=he.useContext(Ta),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",h=f?f.pathnameBase:"/",_=f&&f.route;{let C=_&&_.path||"";gv(m,!_||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let S=Xi(),g;if(e){let C=typeof e=="string"?Or(e):e;Qt(h==="/"||((v=C.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${C.pathname}" was given in the \`location\` prop.`),g=C}else g=S;let M=g.pathname||"/",y=M;if(h!=="/"){let C=h.replace(/^\//,"").split("/");y="/"+M.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=rv(s,{pathname:y});Ti(_||A!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Ti(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=eM(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:_a([h,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?h:_a([h,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),c,i,r);return e&&x?he.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},x):x}function Ky(){let s=rM(),e=ky(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var Qy=he.createElement(Ky,null),Jy=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?he.createElement(Ta.Provider,{value:this.props.routeContext},he.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $y({routeContext:s,match:e,children:i}){let r=he.useContext(Fs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Ta.Provider,{value:s},i)}function eM(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);Qt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(i)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:_,errors:S}=i,g=h.route.loader&&!_.hasOwnProperty(h.route.id)&&(!S||S[h.route.id]===void 0);if(h.route.lazy||g){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,h,_)=>{let S,g=!1,M=null,y=null;i&&(S=c&&h.route.id?c[h.route.id]:void 0,M=h.route.errorElement||Qy,f&&(p<0&&_===0?(gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,y=null):p===_&&(g=!0,y=h.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,_+1)),x=()=>{let v;return S?v=M:g?v=y:h.route.Component?v=he.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=m,he.createElement($y,{match:h,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:v})};return i&&(h.route.ErrorBoundary||h.route.errorElement||_===0)?he.createElement(Jy,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:x(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):x()},null)}function tp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tM(s){let e=he.useContext(Fs);return Qt(e,tp(s)),e}function nM(s){let e=he.useContext(lu);return Qt(e,tp(s)),e}function iM(s){let e=he.useContext(Ta);return Qt(e,tp(s)),e}function np(s){let e=iM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function aM(){return np("useRouteId")}function rM(){var r;let s=he.useContext(ep),e=nM("useRouteError"),i=np("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function sM(){let{router:s}=tM("useNavigate"),e=np("useNavigate"),i=he.useRef(!1);return hv(()=>{i.current=!0}),he.useCallback(async(l,c={})=>{Ti(i.current,dv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var e0={};function gv(s,e,i){!e&&!e0[s]&&(e0[s]=!0,Ti(!1,i))}he.memo(oM);function oM({routes:s,future:e,state:i}){return mv(s,void 0,i,e)}function _v(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Qt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),p=he.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Or(i));let{pathname:m="/",search:h="",hash:_="",state:S=null,key:g="default"}=i,M=he.useMemo(()=>{let y=Sa(m,f);return y==null?null:{location:{pathname:y,search:h,hash:_,state:S,key:g},navigationType:r}},[f,m,h,_,S,g,r]);return Ti(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${h}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:he.createElement(ki.Provider,{value:p},he.createElement($o.Provider,{children:e,value:M}))}function cM({children:s,location:e}){return Zy(rh(s),e)}function rh(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let c=[...e,l];if(r.type===he.Fragment){i.push.apply(i,rh(r.props.children,c));return}Qt(r.type===_v,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=rh(r.props.children,c)),i.push(f)}),i}var Wc="get",qc="application/x-www-form-urlencoded";function cu(s){return s!=null&&typeof s.tagName=="string"}function uM(s){return cu(s)&&s.tagName.toLowerCase()==="button"}function fM(s){return cu(s)&&s.tagName.toLowerCase()==="form"}function dM(s){return cu(s)&&s.tagName.toLowerCase()==="input"}function hM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function pM(s,e){return s.button===0&&(!e||e==="_self")&&!hM(s)}var _c=null;function mM(){if(_c===null)try{new FormData(document.createElement("form"),0),_c=!1}catch{_c=!0}return _c}var gM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ed(s){return s!=null&&!gM.has(s)?(Ti(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):s}function _M(s,e){let i,r,l,c,f;if(fM(s)){let p=s.getAttribute("action");r=p?Sa(p,e):null,i=s.getAttribute("method")||Wc,l=Ed(s.getAttribute("enctype"))||qc,c=new FormData(s)}else if(uM(s)||dM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Sa(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||Wc,l=Ed(s.getAttribute("formenctype"))||Ed(p.getAttribute("enctype"))||qc,c=new FormData(p,s),!mM()){let{name:h,type:_,value:S}=s;if(_==="image"){let g=h?`${h}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else h&&c.append(h,S)}}else{if(cu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Wc,r=null,l=qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function ip(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function vM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function SM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await vM(c,i);return f.links?f.links():[]}return[]}));return bM(r.flat(1).filter(xM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t0(s,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var _;return i[h].pathname!==m.pathname||((_=i[h].route.path)==null?void 0:_.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var S;let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function yM(s,e,{includeHydrateFallback:i}={}){return MM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function MM(s){return[...new Set(s)]}function EM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function bM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(EM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var TM=new Set([100,101,204,205]);function AM(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&Sa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function vv(){let s=he.useContext(Fs);return ip(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function RM(){let s=he.useContext(lu);return ip(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ap=he.createContext(void 0);ap.displayName="FrameworkContext";function xv(){let s=he.useContext(ap);return ip(s,"You must render this element inside a <HydratedRouter> element"),s}function CM(s,e){let i=he.useContext(ap),[r,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:S}=e,g=he.useRef(null);he.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=v=>{v.forEach(C=>{f(C.isIntersecting)})},x=new IntersectionObserver(A,{threshold:.5});return g.current&&x.observe(g.current),()=>{x.disconnect()}}},[s]),he.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},y=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Bo(p,M),onBlur:Bo(m,y),onMouseEnter:Bo(h,M),onMouseLeave:Bo(_,y),onTouchStart:Bo(S,M)}]:[!1,g,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function wM({page:s,...e}){let{router:i}=vv(),r=he.useMemo(()=>rv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement(NM,{page:s,matches:r,...e}):null}function DM(s){let{manifest:e,routeModules:i}=xv(),[r,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return SM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function NM({page:s,matches:e,...i}){let r=Xi(),{manifest:l,routeModules:c}=xv(),{basename:f}=vv(),{loaderData:p,matches:m}=RM(),h=he.useMemo(()=>t0(s,e,m,l,r,"data"),[s,e,m,l,r]),_=he.useMemo(()=>t0(s,e,m,l,r,"assets"),[s,e,m,l,r]),S=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let y=new Set,A=!1;if(e.forEach(v=>{var N;let C=l.routes[v.route.id];!C||!C.hasLoader||(!h.some(U=>U.route.id===v.route.id)&&v.route.id in p&&((N=c[v.route.id])!=null&&N.shouldRevalidate)||C.hasClientLoader?A=!0:y.add(v.route.id))}),y.size===0)return[];let x=AM(s,f);return A&&y.size>0&&x.searchParams.set("_routes",e.filter(v=>y.has(v.route.id)).map(v=>v.route.id).join(",")),[x.pathname+x.search]},[f,p,r,l,h,e,s,c]),g=he.useMemo(()=>yM(_,l),[_,l]),M=DM(_);return he.createElement(he.Fragment,null,S.map(y=>he.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...i})),g.map(y=>he.createElement("link",{key:y,rel:"modulepreload",href:y,...i})),M.map(({key:y,link:A})=>he.createElement("link",{key:y,...A})))}function UM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sv&&(window.__reactRouterVersion="7.6.2")}catch{}function LM({basename:s,children:e,window:i}){let r=he.useRef();r.current==null&&(r.current=Sy({window:i,v5Compat:!0}));let l=r.current,[c,f]=he.useState({action:l.action,location:l.location}),p=he.useCallback(m=>{he.startTransition(()=>f(m))},[f]);return he.useLayoutEffect(()=>l.listen(p),[l,p]),he.createElement(lM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eu=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:_,viewTransition:S,...g},M){let{basename:y}=he.useContext(ki),A=typeof h=="string"&&yv.test(h),x,v=!1;if(typeof h=="string"&&A&&(x=h,Sv))try{let D=new URL(window.location.href),ce=h.startsWith("//")?new URL(D.protocol+h):new URL(h),V=Sa(ce.pathname,y);ce.origin===D.origin&&V!=null?h=V+ce.search+ce.hash:v=!0}catch{Ti(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=jy(h,{relative:l}),[N,U,I]=CM(r,g),F=FM(h,{replace:f,state:p,target:m,preventScrollReset:_,relative:l,viewTransition:S});function B(D){e&&e(D),D.defaultPrevented||F(D)}let T=he.createElement("a",{...g,...I,href:x||C,onClick:v||c?e:B,ref:UM(M,U),target:m,"data-discover":!A&&i==="render"?"true":void 0});return N&&!A?he.createElement(he.Fragment,null,T,he.createElement(wM,{page:C})):T});eu.displayName="Link";var OM=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},_){let S=tl(f,{relative:h.relative}),g=Xi(),M=he.useContext(lu),{navigator:y,basename:A}=he.useContext(ki),x=M!=null&&VM(S)&&p===!0,v=y.encodeLocation?y.encodeLocation(S).pathname:S.pathname,C=g.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(C=C.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&A&&(N=Sa(N,A)||N);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let I=C===v||!l&&C.startsWith(v)&&C.charAt(U)==="/",F=N!=null&&(N===v||!l&&N.startsWith(v)&&N.charAt(v.length)==="/"),B={isActive:I,isPending:F,isTransitioning:x},T=I?e:void 0,D;typeof r=="function"?D=r(B):D=[r,I?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let ce=typeof c=="function"?c(B):c;return he.createElement(eu,{...h,"aria-current":T,className:D,ref:_,style:ce,to:f,viewTransition:p},typeof m=="function"?m(B):m)});OM.displayName="NavLink";var PM=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Wc,action:p,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:S,...g},M)=>{let y=HM(),A=GM(p,{relative:h}),x=f.toLowerCase()==="get"?"get":"post",v=typeof p=="string"&&yv.test(p),C=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let U=N.nativeEvent.submitter,I=(U==null?void 0:U.getAttribute("formmethod"))||f;y(U||N.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:S})};return he.createElement("form",{ref:M,method:x,action:A,onSubmit:r?m:C,...g,"data-discover":!v&&s==="render"?"true":void 0})});PM.displayName="Form";function IM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mv(s){let e=he.useContext(Fs);return Qt(e,IM(s)),e}function FM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=pv(),m=Xi(),h=tl(s,{relative:c});return he.useCallback(_=>{if(pM(_,e)){_.preventDefault();let S=i!==void 0?i:Zo(m)===Zo(h);p(s,{replace:S,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,p,h,i,r,e,s,l,c,f])}var BM=0,zM=()=>`__${String(++BM)}__`;function HM(){let{router:s}=Mv("useSubmit"),{basename:e}=he.useContext(ki),i=aM();return he.useCallback(async(r,l={})=>{let{action:c,method:f,encType:p,formData:m,body:h}=_M(r,e);if(l.navigate===!1){let _=l.fetcherKey||zM();await s.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function GM(s,{relative:e}={}){let{basename:i}=he.useContext(ki),r=he.useContext(Ta);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...tl(s||".",{relative:e})},f=Xi();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let _=p.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),Zo(c)}function VM(s,e={}){let i=he.useContext(fv);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mv("useViewTransitionState"),l=tl(s,{relative:e.relative});if(!i.isTransitioning)return!1;let c=Sa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return $c(l.pathname,f)!=null||$c(l.pathname,c)!=null}[...TM];const kM=()=>{const{pathname:s}=Xi();return he.useEffect(()=>{s==="/"&&window.scrollTo(0,0)},[s]),null},XM=[{id:"home",path:"/"},{id:"services",path:"/"},{id:"philosophy",path:"/"},{id:"work",path:"/projects"},{id:"reviews",path:"/reviews"},{id:"skills",path:"/reviews"},{id:"contact",path:"/contact"}],WM=96;function n0(){const s=window.scrollY+WM;let e="/";for(const{id:i,path:r}of XM){const l=document.getElementById(i);if(!l)continue;window.scrollY+l.getBoundingClientRect().top<=s&&(e=r)}return e}function qM(){const[s,e]=he.useState(n0);return he.useEffect(()=>{let i=0;const r=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{e(n0())})};r(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r);const l=new ResizeObserver(r);return l.observe(document.documentElement),()=>{cancelAnimationFrame(i),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),l.disconnect()}},[]),s}const jM=[{path:"/",label:"Home"},{path:"/projects",label:"Work"},{path:"/reviews",label:"Reviews"},{path:"/contact",label:"Contact"}],YM=()=>{const s=Xi(),e=qM(),[i,r]=he.useState(!1),[l,c]=he.useState(!0);return he.useEffect(()=>{r(!1)},[s.pathname]),he.useEffect(()=>{const f=document.querySelector(".hero--3d");if(!f){c(!1);return}const p=()=>{const m=f.getBoundingClientRect().bottom;c(m>48)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[s.pathname]),G.jsx("header",{className:`header${l?" header--dark":""}`,children:G.jsxs("div",{className:"header__inner container",children:[G.jsxs(eu,{to:"/",className:"header__brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[G.jsx("span",{className:"header__brand-name",children:"Taliba Sadiq"}),G.jsx("span",{className:"header__brand-tag",children:"Software Architect & AI Engineer"})]}),G.jsxs("button",{className:`header__burger${i?" header__burger--open":""}`,onClick:()=>r(f=>!f),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,children:[G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{})]}),G.jsx("nav",{className:`header__nav${i?" header__nav--open":""}`,"aria-label":"Main navigation",children:G.jsx("ul",{className:"header__list",children:jM.map(({path:f,label:p})=>{const m=e===f;return G.jsx("li",{children:G.jsx(eu,{to:f,className:`header__link ${m?"header__link--active":""}`,"aria-current":m?"page":void 0,onClick:()=>{r(!1),f==="/"&&s.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:p})},f)})})})]})})},i0="",ZM="https://api.web3forms.com/submit",KM=()=>{const[s,e]=he.useState("idle"),[i,r]=he.useState(""),[l,c]=he.useState(!1),f=he.useCallback(async p=>{if(p.preventDefault(),r(""),!i0.trim()){e("error"),r("Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com).");return}const m=p.currentTarget,h=new FormData(m),_=String(h.get("name")||"").trim(),S=String(h.get("email")||"").trim(),g=String(h.get("company")||"").trim(),M=String(h.get("phone")||"").trim(),y=String(h.get("project_type")||"").trim(),A=String(h.get("timeline")||"").trim(),x=String(h.get("budget")||"").trim(),v=String(h.get("details")||"").trim();if(String(h.get("botcheck")||"").trim())return;if(!_||!S||!v){r("Please fill in your name, email, and project details.");return}const N=[g&&`Company / org: ${g}`,M&&`Phone: ${M}`,y&&`Project type: ${y}`,A&&`Timeline: ${A}`,x&&`Budget / engagement: ${x}`,"","Project details:",v].filter(Boolean).join(`
`);e("sending");try{const U=await fetch(ZM,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:i0,name:_,email:S,...M?{phone:M}:{},subject:`Portfolio inquiry: ${y||"Project"} (${_})`,message:N})}),I=await U.json().catch(()=>({}));U.ok&&I.success!==!1?(e("success"),m.reset()):(e("error"),r(I.message||"Something went wrong. Please try again in a moment."))}catch{e("error"),r("Network error. Check your connection and try again.")}},[]);return G.jsx("section",{id:"contact",className:"section section--contact contact-section contact-shell reveal","aria-labelledby":"contact-heading",children:G.jsxs("div",{className:"container contact-shell__inner",children:[G.jsxs("header",{className:"contact-shell__intro",children:[G.jsx("p",{className:"contact-shell__eyebrow",children:"Contact"}),G.jsx("h2",{id:"contact-heading",className:"contact-shell__title",children:"Let's build something together"}),G.jsx("p",{className:"contact-shell__lead",children:"Have a product that needs architecture, AI integration, or full-stack development? Tell me what you're working on. I'll reply within one business day."}),G.jsxs("ul",{className:"contact-shell__trust",children:[G.jsx("li",{children:"Specific questions get faster answers"}),G.jsx("li",{children:"Mention in the details if you need an NDA first"}),G.jsx("li",{children:"Project inquiries only (no recruiter blasts)"})]})]}),G.jsx("div",{className:"contact-form-panel",children:s==="success"?G.jsxs("div",{className:"contact-form-panel__success",role:"status",children:[G.jsx("p",{className:"contact-form-panel__success-icon","aria-hidden":"true",children:"✓"}),G.jsx("h3",{className:"contact-form-panel__success-title",children:"Message sent"}),G.jsx("p",{className:"contact-form-panel__success-text",children:"Your note is in my inbox. I'll reply in the same thread."}),G.jsx("button",{type:"button",className:"btn btn--primary contact-form-panel__reset",onClick:()=>e("idle"),children:"Send another message"})]}):G.jsxs("form",{className:"contact-form",onSubmit:f,noValidate:!0,children:[G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Name *"}),G.jsx("input",{className:"contact-form__input",name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your name"})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Email *"}),G.jsx("input",{className:"contact-form__input",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"you@company.com"})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"What are you working on? *"}),G.jsx("textarea",{className:"contact-form__textarea",name:"details",required:!0,rows:5,placeholder:"Stack, goals, constraints, and what done looks like."})]}),!l&&G.jsx("button",{type:"button",className:"contact-form__toggle",onClick:()=>c(!0),children:"+ Add more details (company, timeline, budget…)"}),l&&G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Company / organization"}),G.jsx("input",{className:"contact-form__input",name:"company",type:"text",autoComplete:"organization",placeholder:"Optional"})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Phone (optional)"}),G.jsx("input",{className:"contact-form__input",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"+1 ..."})]})]}),G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Project type"}),G.jsxs("select",{className:"contact-form__input contact-form__select",name:"project_type",defaultValue:"",children:[G.jsx("option",{value:"",children:"Select..."}),G.jsx("option",{value:"New build: web app",children:"New build: web app"}),G.jsx("option",{value:"New build: marketing site",children:"New build: marketing site"}),G.jsx("option",{value:"New build: mobile app",children:"New build: mobile app"}),G.jsx("option",{value:"New build: mobile & web",children:"New build: mobile & web"}),G.jsx("option",{value:"Refactor / stabilize codebase",children:"Refactor / stabilize codebase"}),G.jsx("option",{value:"Performance / reliability",children:"Performance / reliability"}),G.jsx("option",{value:"Architecture / technical review",children:"Architecture / technical review"}),G.jsx("option",{value:"AI / product integration",children:"AI / product integration"}),G.jsx("option",{value:"Other",children:"Other"})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Ideal timeline"}),G.jsxs("select",{className:"contact-form__input contact-form__select",name:"timeline",defaultValue:"",children:[G.jsx("option",{value:"",children:"Optional"}),G.jsx("option",{value:"Planning phase / TBD",children:"Planning phase / TBD"}),G.jsx("option",{value:"Rush (under 2 weeks)",children:"Rush (under 2 weeks)"}),G.jsx("option",{value:"2-4 weeks",children:"2-4 weeks"}),G.jsx("option",{value:"1-3 months",children:"1-3 months"}),G.jsx("option",{value:"3-6 months",children:"3-6 months"}),G.jsx("option",{value:"6+ months or ongoing",children:"6+ months or ongoing"}),G.jsx("option",{value:"Flexible / open schedule",children:"Flexible / open schedule"})]})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Budget / engagement (optional)"}),G.jsx("input",{className:"contact-form__input",name:"budget",type:"text",placeholder:"e.g. fixed scope, monthly retainer, TBD"})]})]}),G.jsxs("label",{className:"contact-form__hp","aria-hidden":"true",children:[G.jsx("span",{children:"Leave empty"}),G.jsx("input",{type:"text",name:"botcheck",tabIndex:-1,autoComplete:"off"})]}),s==="error"&&i&&G.jsx("p",{className:"contact-form__error",role:"alert",children:i}),G.jsx("button",{type:"submit",className:"btn btn--primary contact-form__submit",disabled:s==="sending",children:s==="sending"?"Sending...":"Send message"})]})})]})})};function QM(){he.useEffect(()=>{const s=document.querySelectorAll(".reveal");if(!s.length)return;const e=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(r.target.classList.add("reveal--visible"),e.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return s.forEach(i=>e.observe(i)),()=>e.disconnect()},[])}const JM={"/projects":"work","/about":"home","/reviews":"reviews","/contact":"contact"};function $M(){const s=Xi(),e=pv();QM();const i=he.useCallback((r,l)=>{const c=document.getElementById(r);c?c.scrollIntoView({behavior:"smooth"}):e(l)},[e]);return he.useLayoutEffect(()=>{var l;const r=JM[s.pathname];r&&((l=document.getElementById(r))==null||l.scrollIntoView({behavior:"smooth"}))},[s.pathname]),{scrollTo:i}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="183",eE=0,a0=1,tE=2,jc=1,nE=2,jo=3,rr=0,Xn=1,ma=2,va=0,Ds=1,tu=2,r0=3,s0=4,iE=5,wr=100,aE=101,rE=102,sE=103,oE=104,lE=200,cE=201,uE=202,fE=203,sh=204,oh=205,dE=206,hE=207,pE=208,mE=209,gE=210,_E=211,vE=212,xE=213,SE=214,lh=0,ch=1,uh=2,Us=3,fh=4,dh=5,hh=6,ph=7,Ev=0,yE=1,ME=2,zi=0,bv=1,Tv=2,Av=3,Rv=4,Cv=5,wv=6,Dv=7,Nv=300,Lr=301,Ls=302,bd=303,Td=304,uu=306,mh=1e3,ga=1001,gh=1002,An=1003,EE=1004,vc=1005,Nn=1006,Ad=1007,Nr=1008,fi=1009,Uv=1010,Lv=1011,Ko=1012,sp=1013,Gi=1014,Fi=1015,ya=1016,op=1017,lp=1018,Qo=1020,Ov=35902,Pv=35899,Iv=1021,Fv=1022,bi=1023,Ma=1026,Ur=1027,Bv=1028,cp=1029,Os=1030,up=1031,fp=1033,Yc=33776,Zc=33777,Kc=33778,Qc=33779,_h=35840,vh=35841,xh=35842,Sh=35843,yh=36196,Mh=37492,Eh=37496,bh=37488,Th=37489,Ah=37490,Rh=37491,Ch=37808,wh=37809,Dh=37810,Nh=37811,Uh=37812,Lh=37813,Oh=37814,Ph=37815,Ih=37816,Fh=37817,Bh=37818,zh=37819,Hh=37820,Gh=37821,Vh=36492,kh=36494,Xh=36495,Wh=36283,qh=36284,jh=36285,Yh=36286,bE=3200,TE=0,AE=1,ir="",ci="srgb",Ps="srgb-linear",nu="linear",Ft="srgb",ms=7680,o0=519,RE=512,CE=513,wE=514,dp=515,DE=516,NE=517,hp=518,UE=519,l0=35044,c0="300 es",Bi=2e3,iu=2001;function LE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function OE(){const s=au("canvas");return s.style.display="block",s}const u0={};function f0(...s){const e="THREE."+s.shift();console.log(e,...s)}function zv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=zv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Rt(...s){s=zv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ru(...s){const e=s.join(" ");e in u0||(u0[e]=!0,at(...s))}function PE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const IE={[lh]:ch,[uh]:hh,[fh]:ph,[Us]:dh,[ch]:lh,[hh]:uh,[ph]:fh,[dh]:Us};class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=Math.PI/180,Zh=180/Math.PI;function nl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function vt(s,e,i){return Math.max(e,Math.min(i,s))}function FE(s,e){return(s%e+e)%e}function Cd(s,e,i){return(1-i)*s+i*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(e=0,i=0){Gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],_=r[l+2],S=r[l+3],g=c[f+0],M=c[f+1],y=c[f+2],A=c[f+3];if(S!==A||m!==g||h!==M||_!==y){let x=m*g+h*M+_*y+S*A;x<0&&(g=-g,M=-M,y=-y,A=-A,x=-x);let v=1-p;if(x<.9995){const C=Math.acos(x),N=Math.sin(C);v=Math.sin(v*C)/N,p=Math.sin(p*C)/N,m=m*v+g*p,h=h*v+M*p,_=_*v+y*p,S=S*v+A*p}else{m=m*v+g*p,h=h*v+M*p,_=_*v+y*p,S=S*v+A*p;const C=1/Math.sqrt(m*m+h*h+_*_+S*S);m*=C,h*=C,_*=C,S*=C}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],S=c[f],g=c[f+1],M=c[f+2],y=c[f+3];return e[i]=p*y+_*S+m*M-h*g,e[i+1]=m*y+_*g+h*S-p*M,e[i+2]=h*y+_*M+p*g-m*S,e[i+3]=_*y-p*S-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),S=p(c/2),g=m(r/2),M=m(l/2),y=m(c/2);switch(f){case"XYZ":this._x=g*_*S+h*M*y,this._y=h*M*S-g*_*y,this._z=h*_*y+g*M*S,this._w=h*_*S-g*M*y;break;case"YXZ":this._x=g*_*S+h*M*y,this._y=h*M*S-g*_*y,this._z=h*_*y-g*M*S,this._w=h*_*S+g*M*y;break;case"ZXY":this._x=g*_*S-h*M*y,this._y=h*M*S+g*_*y,this._z=h*_*y+g*M*S,this._w=h*_*S-g*M*y;break;case"ZYX":this._x=g*_*S-h*M*y,this._y=h*M*S+g*_*y,this._z=h*_*y-g*M*S,this._w=h*_*S+g*M*y;break;case"YZX":this._x=g*_*S+h*M*y,this._y=h*M*S+g*_*y,this._z=h*_*y-g*M*S,this._w=h*_*S-g*M*y;break;case"XZY":this._x=g*_*S-h*M*y,this._y=h*M*S-g*_*y,this._z=h*_*y+g*M*S,this._w=h*_*S+g*M*y;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],_=i[6],S=i[10],g=r+p+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(r>p&&r>S){const M=2*Math.sqrt(1+r-p-S);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-r-S);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-r-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+f*p+l*h-c*m,this._y=l*_+f*m+c*p-r*h,this._z=c*_+f*h+r*m-l*p,this._w=f*_-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(d0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(d0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),_=2*(p*i-c*l),S=2*(c*r-f*i);return this.x=i+m*h+f*S-p*_,this.y=r+m*_+p*h-c*S,this.z=l+m*S+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new ie,d0=new zs;class ut{constructor(e,i,r,l,c,f,p,m,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],_=r[4],S=r[7],g=r[2],M=r[5],y=r[8],A=l[0],x=l[3],v=l[6],C=l[1],N=l[4],U=l[7],I=l[2],F=l[5],B=l[8];return c[0]=f*A+p*C+m*I,c[3]=f*x+p*N+m*F,c[6]=f*v+p*U+m*B,c[1]=h*A+_*C+S*I,c[4]=h*x+_*N+S*F,c[7]=h*v+_*U+S*B,c[2]=g*A+M*C+y*I,c[5]=g*x+M*N+y*F,c[8]=g*v+M*U+y*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*f*_-i*p*h-r*c*_+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],S=_*f-p*h,g=p*m-_*c,M=h*c-f*m,y=i*S+r*g+l*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=S*A,e[1]=(l*h-_*r)*A,e[2]=(p*r-l*f)*A,e[3]=g*A,e[4]=(_*i-l*m)*A,e[5]=(l*c-p*i)*A,e[6]=M*A,e[7]=(r*m-h*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new ut,h0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ru("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ru("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:e,whitePoint:r,transfer:nu,toXYZ:h0,fromXYZ:p0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:h0,fromXYZ:p0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Et=BE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class zE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=au("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=au("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let GE=0;const Ud=new ie;class On extends Bs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=ga,l=ga,c=Nn,f=Nr,p=bi,m=fi,h=On.DEFAULT_ANISOTROPY,_=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=nl(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Nv;On.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,r=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],_=m[4],S=m[8],g=m[1],M=m[5],y=m[9],A=m[2],x=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-A)<.01&&Math.abs(y-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+A)<.1&&Math.abs(y+x)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,U=(M+1)/2,I=(v+1)/2,F=(_+g)/4,B=(S+A)/4,T=(y+x)/4;return N>U&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=F/r,c=B/r):U>I?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=F/l,c=T/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=B/c,l=T/c),this.set(r,l,c,i),this}let C=Math.sqrt((x-y)*(x-y)+(S-A)*(S-A)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(x-y)/C,this.y=(S-A)/C,this.z=(g-_)/C,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new On(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends VE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Hv extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e,i,r,l,c,f,p,m,h,_,S,g,M,y,A,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,_,S,g,M,y,A,x)}set(e,i,r,l,c,f,p,m,h,_,S,g,M,y,A,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=h,v[6]=_,v[10]=S,v[14]=g,v[3]=M,v[7]=y,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=f*_,M=f*S,y=p*_,A=p*S;i[0]=m*_,i[4]=-m*S,i[8]=h,i[1]=M+y*h,i[5]=g-A*h,i[9]=-p*m,i[2]=A-g*h,i[6]=y+M*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*S,y=h*_,A=h*S;i[0]=g+A*p,i[4]=y*p-M,i[8]=f*h,i[1]=f*S,i[5]=f*_,i[9]=-p,i[2]=M*p-y,i[6]=A+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*S,y=h*_,A=h*S;i[0]=g-A*p,i[4]=-f*S,i[8]=y+M*p,i[1]=M+y*p,i[5]=f*_,i[9]=A-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*S,y=p*_,A=p*S;i[0]=m*_,i[4]=y*h-M,i[8]=g*h+A,i[1]=m*S,i[5]=A*h+g,i[9]=M*h-y,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*h,y=p*m,A=p*h;i[0]=m*_,i[4]=A-g*S,i[8]=y*S+M,i[1]=S,i[5]=f*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*S+y,i[10]=g-A*S}else if(e.order==="XZY"){const g=f*m,M=f*h,y=p*m,A=p*h;i[0]=m*_,i[4]=-S,i[8]=h*_,i[1]=g*S+A,i[5]=f*_,i[9]=M*S-y,i[2]=y*S-M,i[6]=p*_,i[10]=A*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XE,e,WE)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Qa.crossVectors(r,Jn),Qa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Qa.crossVectors(r,Jn)),Qa.normalize(),xc.crossVectors(Jn,Qa),l[0]=Qa.x,l[4]=xc.x,l[8]=Jn.x,l[1]=Qa.y,l[5]=xc.y,l[9]=Jn.y,l[2]=Qa.z,l[6]=xc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],_=r[1],S=r[5],g=r[9],M=r[13],y=r[2],A=r[6],x=r[10],v=r[14],C=r[3],N=r[7],U=r[11],I=r[15],F=l[0],B=l[4],T=l[8],D=l[12],ce=l[1],V=l[5],$=l[9],re=l[13],de=l[2],J=l[6],P=l[10],H=l[14],le=l[3],_e=l[7],L=l[11],Z=l[15];return c[0]=f*F+p*ce+m*de+h*le,c[4]=f*B+p*V+m*J+h*_e,c[8]=f*T+p*$+m*P+h*L,c[12]=f*D+p*re+m*H+h*Z,c[1]=_*F+S*ce+g*de+M*le,c[5]=_*B+S*V+g*J+M*_e,c[9]=_*T+S*$+g*P+M*L,c[13]=_*D+S*re+g*H+M*Z,c[2]=y*F+A*ce+x*de+v*le,c[6]=y*B+A*V+x*J+v*_e,c[10]=y*T+A*$+x*P+v*L,c[14]=y*D+A*re+x*H+v*Z,c[3]=C*F+N*ce+U*de+I*le,c[7]=C*B+N*V+U*J+I*_e,c[11]=C*T+N*$+U*P+I*L,c[15]=C*D+N*re+U*H+I*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],_=e[2],S=e[6],g=e[10],M=e[14],y=e[3],A=e[7],x=e[11],v=e[15],C=m*M-h*g,N=p*M-h*S,U=p*g-m*S,I=f*M-h*_,F=f*g-m*_,B=f*S-p*_;return i*(A*C-x*N+v*U)-r*(y*C-x*I+v*F)+l*(y*N-A*I+v*B)-c*(y*U-A*F+x*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],S=e[9],g=e[10],M=e[11],y=e[12],A=e[13],x=e[14],v=e[15],C=i*p-r*f,N=i*m-l*f,U=i*h-c*f,I=r*m-l*p,F=r*h-c*p,B=l*h-c*m,T=_*A-S*y,D=_*x-g*y,ce=_*v-M*y,V=S*x-g*A,$=S*v-M*A,re=g*v-M*x,de=C*re-N*$+U*V+I*ce-F*D+B*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/de;return e[0]=(p*re-m*$+h*V)*J,e[1]=(l*$-r*re-c*V)*J,e[2]=(A*B-x*F+v*I)*J,e[3]=(g*F-S*B-M*I)*J,e[4]=(m*ce-f*re-h*D)*J,e[5]=(i*re-l*ce+c*D)*J,e[6]=(x*U-y*B-v*N)*J,e[7]=(_*B-g*U+M*N)*J,e[8]=(f*$-p*ce+h*T)*J,e[9]=(r*ce-i*$-c*T)*J,e[10]=(y*F-A*U+v*C)*J,e[11]=(S*U-_*F-M*C)*J,e[12]=(p*D-f*V-m*T)*J,e[13]=(i*V-r*D+l*T)*J,e[14]=(A*N-y*I-x*C)*J,e[15]=(_*I-S*N+g*C)*J,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,_=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*f,0,h*m-l*p,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,_=f+f,S=p+p,g=c*h,M=c*_,y=c*S,A=f*_,x=f*S,v=p*S,C=m*h,N=m*_,U=m*S,I=r.x,F=r.y,B=r.z;return l[0]=(1-(A+v))*I,l[1]=(M+U)*I,l[2]=(y-N)*I,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(g+v))*F,l[6]=(x+C)*F,l[7]=0,l[8]=(y+N)*B,l[9]=(x-C)*B,l[10]=(1-(g+A))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=_s.set(l[0],l[1],l[2]).length();const p=_s.set(l[4],l[5],l[6]).length(),m=_s.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Si.copy(this);const h=1/f,_=1/p,S=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=S,Si.elements[9]*=S,Si.elements[10]*=S,i.setFromRotationMatrix(Si),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,_=2*c/(i-e),S=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let y,A;if(m)y=c/(f-c),A=f*c/(f-c);else if(p===Bi)y=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===iu)y=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,_=2/(i-e),S=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let y,A;if(m)y=1/(f-c),A=f/(f-c);else if(p===Bi)y=-2/(f-c),A=-(f+c)/(f-c);else if(p===iu)y=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=y,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new ie,Si=new tn,XE=new ie(0,0,0),WE=new ie(1,1,1),Qa=new ie,xc=new ie,Jn=new ie,m0=new tn,g0=new zs;class Ea{constructor(e=0,i=0,r=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],_=l[9],S=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return m0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g0.setFromEuler(this),this.setFromQuaternion(g0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qE=0;const _0=new ie,vs=new zs,ua=new tn,Sc=new ie,Ho=new ie,jE=new ie,YE=new zs,v0=new ie(1,0,0),x0=new ie(0,1,0),S0=new ie(0,0,1),y0={type:"added"},ZE={type:"removed"},xs={type:"childadded",child:null},Ld={type:"childremoved",child:null};class Pn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ie,i=new Ea,r=new zs,l=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ut}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(v0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(S0,e)}translateOnAxis(e,i){return _0.copy(e).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(v0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(S0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Sc.copy(e):Sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Ho,Sc,this.up):ua.lookAt(Sc,Ho,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ua),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y0),xs.child=e,this.dispatchEvent(xs),xs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZE),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,YE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),_=f(e.images),S=f(e.shapes),g=f(e.skeletons),M=f(e.animations),y=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),y.length>0&&(r.nodes=y)}return r.object=l,r;function f(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new ie(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KE={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const A of e.hand.values()){const x=i.getJointPose(A,r),v=this._getHandJoint(h,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,y=.005;h.inputState.pinching&&g>M+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(KE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Pd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class xt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Et.workingColorSpace){if(e=FE(e,1),i=vt(i,0,1),r=vt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Pd(f,c,e+1/3),this.g=Pd(f,c,e),this.b=Pd(f,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const r=Vv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Et.workingToColorSpace(Dn.copy(this),e),Math.round(vt(Dn.r*255,0,255))*65536+Math.round(vt(Dn.g*255,0,255))*256+Math.round(vt(Dn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const _=(p+f)/2;if(p===f)m=0,h=0;else{const S=f-p;switch(h=_<=.5?S/(f+p):S/(2-f-p),f){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ci){Et.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Mc);const r=Cd(Ja.h,Mc.h,i),l=Cd(Ja.s,Mc.s,i),c=Cd(Ja.l,Mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new xt;xt.NAMES=Vv;class QE extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new ie,fa=new ie,Id=new ie,da=new ie,Ss=new ie,ys=new ie,M0=new ie,Fd=new ie,Bd=new ie,zd=new ie,Hd=new ln,Gd=new ln,Vd=new ln;class Ei{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){yi.subVectors(l,i),fa.subVectors(r,i),Id.subVectors(e,i);const f=yi.dot(yi),p=yi.dot(fa),m=yi.dot(Id),h=fa.dot(fa),_=fa.dot(Id),S=f*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(h*m-p*_)*g,y=(f*_-p*m)*g;return c.set(1-M-y,y,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(f,da.y),m.addScaledVector(p,da.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),Vd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Hd,c.x),f.addScaledVector(Gd,c.y),f.addScaledVector(Vd,c.z),f}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),fa.subVectors(e,i),yi.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),yi.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;Ss.subVectors(l,r),ys.subVectors(c,r),Fd.subVectors(e,r);const m=Ss.dot(Fd),h=ys.dot(Fd);if(m<=0&&h<=0)return i.copy(r);Bd.subVectors(e,l);const _=Ss.dot(Bd),S=ys.dot(Bd);if(_>=0&&S<=_)return i.copy(l);const g=m*S-_*h;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ss,f);zd.subVectors(e,c);const M=Ss.dot(zd),y=ys.dot(zd);if(y>=0&&M<=y)return i.copy(c);const A=M*h-m*y;if(A<=0&&h>=0&&y<=0)return p=h/(h-y),i.copy(r).addScaledVector(ys,p);const x=_*y-M*S;if(x<=0&&S-_>=0&&M-y>=0)return M0.subVectors(c,l),p=(S-_)/(S-_+(M-y)),i.copy(l).addScaledVector(M0,p);const v=1/(x+A+g);return f=A*v,p=g*v,i.copy(r).addScaledVector(Ss,f).addScaledVector(ys,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),bc.subVectors(this.max,Go),Ms.subVectors(e.a,Go),Es.subVectors(e.b,Go),bs.subVectors(e.c,Go),$a.subVectors(Es,Ms),er.subVectors(bs,Es),Mr.subVectors(Ms,bs);let i=[0,-$a.z,$a.y,0,-er.z,er.y,0,-Mr.z,Mr.y,$a.z,0,-$a.x,er.z,0,-er.x,Mr.z,0,-Mr.x,-$a.y,$a.x,0,-er.y,er.x,0,-Mr.y,Mr.x,0];return!kd(i,Ms,Es,bs,bc)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,Ms,Es,bs,bc))?!1:(Tc.crossVectors($a,er),i=[Tc.x,Tc.y,Tc.z],kd(i,Ms,Es,bs,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Mi=new ie,Ec=new il,Ms=new ie,Es=new ie,bs=new ie,$a=new ie,er=new ie,Mr=new ie,Go=new ie,bc=new ie,Tc=new ie,Er=new ie;function kd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const p=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),h=i.dot(Er),_=r.dot(Er);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const fn=new ie,Ac=new Gt;let JE=0;class di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=l0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l0&&(e.usage=this.usage),e}}class kv extends di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Xv extends di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hi extends di{constructor(e,i,r){super(new Float32Array(e),i,r)}}const $E=new il,Vo=new ie,Xd=new ie;class al{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):$E.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Xd)),this.expandByPoint(Vo.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eb=0;const li=new tn,Wd=new Pn,Ts=new ie,$n=new il,ko=new il,Mn=new ie;class ei extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LE(e)?Xv:kv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new hi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ko.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors($n.min,ko.min),$n.expandByPoint(Mn),Mn.addVectors($n.max,ko.max),$n.expandByPoint(Mn)):($n.expandByPoint(ko.min),$n.expandByPoint(ko.max))}$n.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Mn.fromBufferAttribute(p,h),m&&(Ts.fromBufferAttribute(e,h),Mn.add(Ts)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new ie,m[T]=new ie;const h=new ie,_=new ie,S=new ie,g=new Gt,M=new Gt,y=new Gt,A=new ie,x=new ie;function v(T,D,ce){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,D),S.fromBufferAttribute(r,ce),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),y.fromBufferAttribute(c,ce),_.sub(h),S.sub(h),M.sub(g),y.sub(g);const V=1/(M.x*y.y-y.x*M.y);isFinite(V)&&(A.copy(_).multiplyScalar(y.y).addScaledVector(S,-M.y).multiplyScalar(V),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-y.x).multiplyScalar(V),p[T].add(A),p[D].add(A),p[ce].add(A),m[T].add(x),m[D].add(x),m[ce].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,D=C.length;T<D;++T){const ce=C[T],V=ce.start,$=ce.count;for(let re=V,de=V+$;re<de;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new ie,U=new ie,I=new ie,F=new ie;function B(T){I.fromBufferAttribute(l,T),F.copy(I);const D=p[T];N.copy(D),N.sub(I.multiplyScalar(I.dot(D))).normalize(),U.crossVectors(F,D);const V=U.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,V)}for(let T=0,D=C.length;T<D;++T){const ce=C[T],V=ce.start,$=ce.count;for(let re=V,de=V+$;re<de;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,p=new ie,m=new ie,h=new ie,_=new ie,S=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const y=e.getX(g+0),A=e.getX(g+1),x=e.getX(g+2);l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,x),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,x),p.add(_),m.add(_),h.add(_),r.setXYZ(y,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,S=p.normalized,g=new h.constructor(m.length*_);let M=0,y=0;for(let A=0,x=m.length;A<x;A++){p.isInterleavedBufferAttribute?M=m[A]*p.data.stride+p.offset:M=m[A]*_;for(let v=0;v<_;v++)g[y++]=h[M++]}return new di(g,_,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ei,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,S=h.length;_<S;_++){const g=h[_],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],S=c[h];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const S=f[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tb=0;class Hs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Ds,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pa=new ie,qd=new ie,Rc=new ie,tr=new ie,jd=new ie,Cc=new ie,Yd=new ie;class mp{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qd.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),tr.copy(this.origin).sub(qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Rc),p=tr.dot(this.direction),m=-tr.dot(Rc),h=tr.lengthSq(),_=Math.abs(1-f*f);let S,g,M,y;if(_>0)if(S=f*m-p,g=f*p-m,y=c*_,S>=0)if(g>=-y)if(g<=y){const A=1/_;S*=A,g*=A,M=S*(S+f*g+2*p)+g*(f*S+g+2*m)+h}else g=c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+h;else g<=-y?(S=Math.max(0,-(-f*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h):g<=y?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(S=Math.max(0,-(f*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h);else g=f>0?-c:c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(qd).addScaledVector(Rc,g),M}intersectSphere(e,i){pa.subVectors(e.center,this.origin);const r=pa.dot(this.direction),l=pa.dot(pa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,i,r,l,c){jd.subVectors(i,e),Cc.subVectors(r,e),Yd.crossVectors(jd,Cc);let f=this.direction.dot(Yd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;tr.subVectors(this.origin,e);const m=p*this.direction.dot(Cc.crossVectors(tr,Cc));if(m<0)return null;const h=p*this.direction.dot(jd.cross(tr));if(h<0||m+h>f)return null;const _=-p*tr.dot(Yd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wv extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const E0=new tn,br=new mp,wc=new al,b0=new ie,Dc=new ie,Nc=new ie,Uc=new ie,Zd=new ie,Lc=new ie,T0=new ie,Oc=new ie;class ba extends Pn{constructor(e=new ei,i=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Lc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],S=c[m];_!==0&&(Zd.fromBufferAttribute(S,e),f?Lc.addScaledVector(Zd,_):Lc.addScaledVector(Zd.sub(i),_))}i.add(Lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(wc.containsPoint(br.origin)===!1&&(br.intersectSphere(wc,b0)===null||br.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(E0.copy(c).invert(),br.copy(e.ray).applyMatrix4(E0),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let y=0,A=g.length;y<A;y++){const x=g[y],v=f[x.materialIndex],C=Math.max(x.start,M.start),N=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let U=C,I=N;U<I;U+=3){const F=p.getX(U),B=p.getX(U+1),T=p.getX(U+2);l=Pc(this,v,e,r,h,_,S,F,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const y=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let x=y,v=A;x<v;x+=3){const C=p.getX(x),N=p.getX(x+1),U=p.getX(x+2);l=Pc(this,f,e,r,h,_,S,C,N,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let y=0,A=g.length;y<A;y++){const x=g[y],v=f[x.materialIndex],C=Math.max(x.start,M.start),N=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=C,I=N;U<I;U+=3){const F=U,B=U+1,T=U+2;l=Pc(this,v,e,r,h,_,S,F,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const y=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=y,v=A;x<v;x+=3){const C=x,N=x+1,U=x+2;l=Pc(this,f,e,r,h,_,S,C,N,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function nb(s,e,i,r,l,c,f,p){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===rr,p),m===null)return null;Oc.copy(p),Oc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Oc);return h<i.near||h>i.far?null:{distance:h,point:Oc.clone(),object:s}}function Pc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,Dc),s.getVertexPosition(m,Nc),s.getVertexPosition(h,Uc);const _=nb(s,e,i,r,Dc,Nc,Uc,T0);if(_){const S=new ie;Ei.getBarycoord(T0,Dc,Nc,Uc,S),l&&(_.uv=Ei.getInterpolatedAttribute(l,p,m,h,S,new Gt)),c&&(_.uv1=Ei.getInterpolatedAttribute(c,p,m,h,S,new Gt)),f&&(_.normal=Ei.getInterpolatedAttribute(f,p,m,h,S,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ie,materialIndex:0};Ei.getNormal(Dc,Nc,Uc,g.normal),_.face=g,_.barycoord=S}return _}class ib extends On{constructor(e=null,i=1,r=1,l,c,f,p,m,h=An,_=An,S,g){super(null,f,p,m,h,_,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new ie,ab=new ie,rb=new ut;class Cr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kd.subVectors(r,i).cross(ab.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||rb.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new al,sb=new Gt(.5,.5),Ic=new ie;class qv{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,f=new Cr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],_=c[4],S=c[5],g=c[6],M=c[7],y=c[8],A=c[9],x=c[10],v=c[11],C=c[12],N=c[13],U=c[14],I=c[15];if(l[0].setComponents(h-f,M-_,v-y,I-C).normalize(),l[1].setComponents(h+f,M+_,v+y,I+C).normalize(),l[2].setComponents(h+p,M+S,v+A,I+N).normalize(),l[3].setComponents(h-p,M-S,v-A,I-N).normalize(),r)l[4].setComponents(m,g,x,U).normalize(),l[5].setComponents(h-m,M-g,v-x,I-U).normalize();else if(l[4].setComponents(h-m,M-g,v-x,I-U).normalize(),i===Bi)l[5].setComponents(h+m,M+g,v+x,I+U).normalize();else if(i===iu)l[5].setComponents(m,g,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=sb.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new ie,ou=new ie,A0=new tn,Xo=new mp,Fc=new al,Qd=new ie,R0=new ie;class ob extends Pn{constructor(e=new ei,i=new jv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new hi(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;A0.copy(l).invert(),Xo.copy(e.ray).applyMatrix4(A0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let A=M,x=y-1;A<x;A+=h){const v=_.getX(A),C=_.getX(A+1),N=Bc(this,e,Xo,m,v,C,A);N&&i.push(N)}if(this.isLineLoop){const A=_.getX(y-1),x=_.getX(M),v=Bc(this,e,Xo,m,A,x,y-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let A=M,x=y-1;A<x;A+=h){const v=Bc(this,e,Xo,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Bc(this,e,Xo,m,y-1,M,y-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Bc(s,e,i,r,l,c,f){const p=s.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(su,ou,Qd,R0)>r)return;Qd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Qd);if(!(h<e.near||h>e.far))return{distance:h,point:R0.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const C0=new ie,w0=new ie;class lb extends ob{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)C0.fromBufferAttribute(i,l),w0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+C0.distanceTo(w0);e.setAttribute("lineDistance",new hi(r,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yv extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new tn,Kh=new mp,zc=new al,Hc=new ie;class cb extends Pn{constructor(e=new ei,i=new Yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;D0.copy(l).invert(),Kh.copy(e.ray).applyMatrix4(D0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,S=r.attributes.position;if(h!==null){const g=Math.max(0,f.start),M=Math.min(h.count,f.start+f.count);for(let y=g,A=M;y<A;y++){const x=h.getX(y);Hc.fromBufferAttribute(S,x),N0(Hc,x,m,l,e,i,this)}}else{const g=Math.max(0,f.start),M=Math.min(S.count,f.start+f.count);for(let y=g,A=M;y<A;y++)Hc.fromBufferAttribute(S,y),N0(Hc,y,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function N0(s,e,i,r,l,c,f){const p=Kh.distanceSqToPoint(s);if(p<i){const m=new ie;Kh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Zv extends On{constructor(e=[],i=Lr,r,l,c,f,p,m,h,_){super(e,i,r,l,c,f,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends On{constructor(e,i,r=Gi,l,c,f,p=An,m=An,h,_=Ma,S=1){if(_!==Ma&&_!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,f,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ub extends Jo{constructor(e,i=Gi,r=Lr,l,c,f=An,p=An,m,h=Ma){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rl extends ei{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],_=[],S=[];let g=0,M=0;y("z","y","x",-1,-1,r,i,e,f,c,0),y("z","y","x",1,-1,r,i,-e,f,c,1),y("x","z","y",1,1,e,r,i,l,f,2),y("x","z","y",1,-1,e,r,-i,l,f,3),y("x","y","z",1,-1,e,i,r,l,c,4),y("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new hi(h,3)),this.setAttribute("normal",new hi(_,3)),this.setAttribute("uv",new hi(S,2));function y(A,x,v,C,N,U,I,F,B,T,D){const ce=U/B,V=I/T,$=U/2,re=I/2,de=F/2,J=B+1,P=T+1;let H=0,le=0;const _e=new ie;for(let L=0;L<P;L++){const Z=L*V-re;for(let ue=0;ue<J;ue++){const Se=ue*ce-$;_e[A]=Se*C,_e[x]=Z*N,_e[v]=de,h.push(_e.x,_e.y,_e.z),_e[A]=0,_e[x]=0,_e[v]=F>0?1:-1,_.push(_e.x,_e.y,_e.z),S.push(ue/B),S.push(1-L/T),H+=1}}for(let L=0;L<T;L++)for(let Z=0;Z<B;Z++){const ue=g+Z+J*L,Se=g+Z+J*(L+1),Ue=g+(Z+1)+J*(L+1),je=g+(Z+1)+J*L;m.push(ue,Se,je),m.push(Se,Ue,je),le+=6}p.addGroup(M,le,D),M+=le,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fu extends ei{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,S=e/p,g=i/m,M=[],y=[],A=[],x=[];for(let v=0;v<_;v++){const C=v*g-f;for(let N=0;N<h;N++){const U=N*S-c;y.push(U,-C,0),A.push(0,0,1),x.push(N/p),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const N=C+h*v,U=C+h*(v+1),I=C+1+h*(v+1),F=C+1+h*v;M.push(N,U,F),M.push(U,I,F)}this.setIndex(M),this.setAttribute("position",new hi(y,3)),this.setAttribute("normal",new hi(A,3)),this.setAttribute("uv",new hi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Is(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)e[l]=r[l]}return e}function fb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Qv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const db={clone:Is,merge:Ln};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mb extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gb extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gc=new ie,Vc=new zs,Oi=new ie;class Jv extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Vc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Gc,Vc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ie,U0=new Gt,L0=new Gt;class ui extends Jv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(Rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,U0,L0),i.subVectors(L0,U0)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $v extends Jv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const As=-90,Rs=1;class vb extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new ui(As,Rs,e,i);c.layers=this.layers,this.add(c);const f=new ui(As,Rs,e,i);f.layers=this.layers,this.add(f);const p=new ui(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new ui(As,Rs,e,i);m.layers=this.layers,this.add(m);const h=new ui(As,Rs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(S,g,M),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class xb extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function O0(s,e,i,r){const l=Sb(r);switch(i){case Iv:return s*e;case Bv:return s*e/l.components*l.byteLength;case cp:return s*e/l.components*l.byteLength;case Os:return s*e*2/l.components*l.byteLength;case up:return s*e*2/l.components*l.byteLength;case Fv:return s*e*3/l.components*l.byteLength;case bi:return s*e*4/l.components*l.byteLength;case fp:return s*e*4/l.components*l.byteLength;case Yc:case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(s,16)*Math.max(e,8)/4;case _h:case xh:return Math.max(s,8)*Math.max(e,8)/2;case yh:case Mh:case bh:case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vh:case kh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wh:case qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sb(s){switch(s){case fi:case Uv:return{byteLength:1,components:1};case Ko:case Lv:case ya:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case Gi:case sp:case Fi:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function yb(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,S=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,h){const _=m.array,S=m.updateRanges;if(s.bindBuffer(h,p),S.length===0)s.bufferSubData(h,0,_);else{S.sort((M,y)=>M.start-y.start);let g=0;for(let M=1;M<S.length;M++){const y=S[g],A=S[M];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++g,S[g]=A)}S.length=g+1;for(let M=0,y=S.length;M<y;M++){const A=S[M];s.bufferSubData(h,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
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
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
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
#endif`,Nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ib=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wb=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jb=`vec3 transformedNormal = objectNormal;
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
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
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
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hT=`uniform bool receiveShadow;
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
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
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
#endif`,ST=`uniform sampler2D dfgLUT;
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
}`,yT=`
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
#endif`,MT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NT=`#if defined( USE_POINTS_UV )
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
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
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
#endif`,BT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
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
#endif`,WT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sA=`float getShadowMask() {
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
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
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
}`,CA=`#if DEPTH_PACKING == 3200
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
}`,wA=`#define DISTANCE
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
}`,DA=`#define DISTANCE
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
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,IA=`uniform vec3 diffuse;
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
}`,FA=`#define LAMBERT
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
}`,BA=`#define LAMBERT
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
}`,zA=`#define MATCAP
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
}`,HA=`#define MATCAP
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
}`,GA=`#define NORMAL
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
}`,VA=`#define NORMAL
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
}`,kA=`#define PHONG
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
}`,XA=`#define PHONG
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
}`,WA=`#define STANDARD
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
}`,qA=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,YA=`#define TOON
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
}`,ZA=`uniform float size;
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
}`,KA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,JA=`uniform vec3 color;
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
}`,$A=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:bb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:Cb,aomap_pars_fragment:wb,batching_pars_vertex:Db,batching_vertex:Nb,begin_vertex:Ub,beginnormal_vertex:Lb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Vb,color_pars_vertex:kb,color_vertex:Xb,common:Wb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:jb,displacementmap_pars_vertex:Yb,displacementmap_vertex:Zb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Qb,colorspace_fragment:Jb,colorspace_pars_fragment:$b,envmap_fragment:eT,envmap_common_pars_fragment:tT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:aT,fog_vertex:rT,fog_pars_vertex:sT,fog_fragment:oT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:dT,lights_pars_begin:hT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:vT,lights_physical_fragment:xT,lights_physical_pars_fragment:ST,lights_fragment_begin:yT,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:CT,map_pars_fragment:wT,map_particle_fragment:DT,map_particle_pars_fragment:NT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:LT,morphinstance_vertex:OT,morphcolor_vertex:PT,morphnormal_vertex:IT,morphtarget_pars_vertex:FT,morphtarget_vertex:BT,normal_fragment_begin:zT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:kT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:WT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:YT,opaque_fragment:ZT,packing:KT,premultiplied_alpha_fragment:QT,project_vertex:JT,dithering_fragment:$T,dithering_pars_fragment:eA,roughnessmap_fragment:tA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:rA,shadowmask_pars_fragment:sA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:fA,specularmap_pars_fragment:dA,tonemapping_fragment:hA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:SA,background_vert:yA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:bA,cube_vert:TA,cube_frag:AA,depth_vert:RA,depth_frag:CA,distance_vert:wA,distance_frag:DA,equirect_vert:NA,equirect_frag:UA,linedashed_vert:LA,linedashed_frag:OA,meshbasic_vert:PA,meshbasic_frag:IA,meshlambert_vert:FA,meshlambert_frag:BA,meshmatcap_vert:zA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:kA,meshphong_frag:XA,meshphysical_vert:WA,meshphysical_frag:qA,meshtoon_vert:jA,meshtoon_frag:YA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:$A,sprite_frag:e1},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ii={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ii.physical={uniforms:Ln([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const kc={r:0,b:0,g:0},Ar=new Ea,t1=new tn;function n1(s,e,i,r,l,c){const f=new xt(0);let p=l===!0?0:1,m,h,_=null,S=0,g=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const U=C.backgroundBlurriness>0;N=e.get(N,U)}return N}function y(C){let N=!1;const U=M(C);U===null?x(f,p):U&&U.isColor&&(x(U,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(C,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===uu)?(h===void 0&&(h=new ba(new rl(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Is(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(N.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(Ar)),h.material.toneMapped=Et.getTransfer(U.colorSpace)!==Ft,(_!==U||S!==U.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=U,S=U.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new ba(new fu(2,2),new Vi({name:"BackgroundMaterial",uniforms:Is(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Et.getTransfer(U.colorSpace)!==Ft,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||S!==U.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,S=U.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function x(C,N){C.getRGB(kc,Qv(s)),i.buffers.color.setClear(kc.r,kc.g,kc.b,N,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,N=1){f.set(C),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:y,addToRenderList:A,dispose:v}}function i1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function p(V,$,re,de,J){let P=!1;const H=S(V,de,re,$);c!==H&&(c=H,h(c.object)),P=M(V,de,re,J),P&&y(V,de,re,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,U(V,$,re,de),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function S(V,$,re,de){const J=de.wireframe===!0;let P=r[$.id];P===void 0&&(P={},r[$.id]=P);const H=V.isInstancedMesh===!0?V.id:0;let le=P[H];le===void 0&&(le={},P[H]=le);let _e=le[re.id];_e===void 0&&(_e={},le[re.id]=_e);let L=_e[J];return L===void 0&&(L=g(m()),_e[J]=L),L}function g(V){const $=[],re=[],de=[];for(let J=0;J<i;J++)$[J]=0,re[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:de,object:V,attributes:{},index:null}}function M(V,$,re,de){const J=c.attributes,P=$.attributes;let H=0;const le=re.getAttributes();for(const _e in le)if(le[_e].location>=0){const Z=J[_e];let ue=P[_e];if(ue===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(ue=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(ue=V.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;H++}return c.attributesNum!==H||c.index!==de}function y(V,$,re,de){const J={},P=$.attributes;let H=0;const le=re.getAttributes();for(const _e in le)if(le[_e].location>=0){let Z=P[_e];Z===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),J[_e]=ue,H++}c.attributes=J,c.attributesNum=H,c.index=de}function A(){const V=c.newAttributes;for(let $=0,re=V.length;$<re;$++)V[$]=0}function x(V){v(V,0)}function v(V,$){const re=c.newAttributes,de=c.enabledAttributes,J=c.attributeDivisors;re[V]=1,de[V]===0&&(s.enableVertexAttribArray(V),de[V]=1),J[V]!==$&&(s.vertexAttribDivisor(V,$),J[V]=$)}function C(){const V=c.newAttributes,$=c.enabledAttributes;for(let re=0,de=$.length;re<de;re++)$[re]!==V[re]&&(s.disableVertexAttribArray(re),$[re]=0)}function N(V,$,re,de,J,P,H){H===!0?s.vertexAttribIPointer(V,$,re,J,P):s.vertexAttribPointer(V,$,re,de,J,P)}function U(V,$,re,de){A();const J=de.attributes,P=re.getAttributes(),H=$.defaultAttributeValues;for(const le in P){const _e=P[le];if(_e.location>=0){let L=J[le];if(L===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const Z=L.normalized,ue=L.itemSize,Se=e.get(L);if(Se===void 0)continue;const Ue=Se.buffer,je=Se.type,ee=Se.bytesPerElement,be=je===s.INT||je===s.UNSIGNED_INT||L.gpuType===sp;if(L.isInterleavedBufferAttribute){const Me=L.data,Je=Me.stride,Ke=L.offset;if(Me.isInstancedInterleavedBuffer){for(let $e=0;$e<_e.locationSize;$e++)v(_e.location+$e,Me.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let $e=0;$e<_e.locationSize;$e++)x(_e.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let $e=0;$e<_e.locationSize;$e++)N(_e.location+$e,ue/_e.locationSize,je,Z,Je*ee,(Ke+ue/_e.locationSize*$e)*ee,be)}else{if(L.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)v(_e.location+Me,L.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Me=0;Me<_e.locationSize;Me++)x(_e.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Me=0;Me<_e.locationSize;Me++)N(_e.location+Me,ue/_e.locationSize,je,Z,ue*ee,ue/_e.locationSize*Me*ee,be)}}else if(H!==void 0){const Z=H[le];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(_e.location,Z);break;case 3:s.vertexAttrib3fv(_e.location,Z);break;case 4:s.vertexAttrib4fv(_e.location,Z);break;default:s.vertexAttrib1fv(_e.location,Z)}}}}C()}function I(){D();for(const V in r){const $=r[V];for(const re in $){const de=$[re];for(const J in de){const P=de[J];for(const H in P)_(P[H].object),delete P[H];delete de[J]}}delete r[V]}}function F(V){if(r[V.id]===void 0)return;const $=r[V.id];for(const re in $){const de=$[re];for(const J in de){const P=de[J];for(const H in P)_(P[H].object),delete P[H];delete de[J]}}delete r[V.id]}function B(V){for(const $ in r){const re=r[$];for(const de in re){const J=re[de];if(J[V.id]===void 0)continue;const P=J[V.id];for(const H in P)_(P[H].object),delete P[H];delete J[V.id]}}}function T(V){for(const $ in r){const re=r[$],de=V.isInstancedMesh===!0?V.id:0,J=re[de];if(J!==void 0){for(const P in J){const H=J[P];for(const le in H)_(H[le].object),delete H[le];delete J[P]}delete re[de],Object.keys(re).length===0&&delete r[$]}}}function D(){ce(),f=!0,c!==l&&(c=l,h(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ce,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:x,disableUnusedAttributes:C}}function a1(s,e,i){let r;function l(h){r=h}function c(h,_){s.drawArrays(r,h,_),i.update(_,r,1)}function f(h,_,S){S!==0&&(s.drawArraysInstanced(r,h,_,S),i.update(_,r,S))}function p(h,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,_,0,S);let M=0;for(let y=0;y<S;y++)M+=_[y];i.update(M,r,1)}function m(h,_,S,g){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<h.length;y++)f(h[y],_[y],g[y]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,_,0,g,0,S);let y=0;for(let A=0;A<S;A++)y+=_[A]*g[A];i.update(y,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function r1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==bi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==fi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fi&&!T)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(at("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:U,maxSamples:I,samples:F}}function s1(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Cr,p=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||l;return l=g,r=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=_(S,g,0)},this.setState=function(S,g,M){const y=S.clippingPlanes,A=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!l||y===null||y.length===0||c&&!x)c?_(null):h();else{const C=c?0:r,N=C*4;let U=v.clippingState||null;m.value=U,U=_(y,g,N,M);for(let I=0;I!==N;++I)U[I]=i[I];v.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,M,y){const A=S!==null?S.length:0;let x=null;if(A!==0){if(x=m.value,y!==!0||x===null){const v=M+A*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(x===null||x.length<v)&&(x=new Float32Array(v));for(let N=0,U=M;N!==A;++N,U+=4)f.copy(S[N]).applyMatrix4(C,p),f.normal.toArray(x,U),x[U+3]=f.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const ar=4,P0=[.125,.215,.35,.446,.526,.582],Dr=20,o1=256,Wo=new $v,I0=new xt;let Jd=null,$d=0,eh=0,th=!1;const l1=new ie;class F0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=l1}=c;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Lr||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ya,format:bi,colorSpace:Ps,depthBuffer:!1},l=B0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(c)),this._blurMaterial=f1(c,e,i),this._ggxMaterial=u1(c,e,i)}return l}_compileMaterial(e){const i=new ba(new ei,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,r,l,c){const m=new ui(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(I0),S.toneMapping=zi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ba(new rl,new Wv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let v=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,v=!0):(x.color.copy(I0),v=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const I=this._cubeSize;Cs(l,U*I,N>2?I:0,I,I),S.setRenderTarget(l),v&&S.render(A,m),S.render(e,m)}S.toneMapping=M,S.autoClear=g,e.background=C}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Lr||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),g=0+h*1.25,M=S*g,{_lodMax:y}=this,A=this._sizeLods[r],x=3*A*(r>y-ar?r-y+ar:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=y-i,Cs(c,x,v,3*A,2*A),l.setRenderTarget(c),l.render(p,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=y-r,Cs(e,x,v,3*A,2*A),l.setRenderTarget(e),l.render(p,Wo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,y=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Dr-1),A=c/y,x=isFinite(c)?1+Math.floor(_*A):Dr;x>Dr&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Dr}`);const v=[];let C=0;for(let B=0;B<Dr;++B){const T=B/A,D=Math.exp(-T*T/2);v.push(D),B===0?C+=D:B<x&&(C+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=y,g.mipInt.value=N-r;const U=this._sizeLods[l],I=3*U*(l>N-ar?l-N+ar:0),F=4*(this._cubeSize-U);Cs(i,I,F,3*U,2*U),m.setRenderTarget(i),m.render(S,Wo)}}function c1(s){const e=[],i=[],r=[];let l=s;const c=s-ar+1+P0.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-ar?m=P0[f-s+ar-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,S=1+h,g=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,y=6,A=3,x=2,v=1,C=new Float32Array(A*y*M),N=new Float32Array(x*y*M),U=new Float32Array(v*y*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,T=F>2?0:-1,D=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];C.set(D,A*y*F),N.set(g,x*y*F);const ce=[F,F,F,F,F,F];U.set(ce,v*y*F)}const I=new ei;I.setAttribute("position",new di(C,A)),I.setAttribute("uv",new di(N,x)),I.setAttribute("faceIndex",new di(U,v)),r.push(new ba(I,null)),l>ar&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function B0(s,e,i){const r=new Hi(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function u1(s,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function f1(s,e,i){const r=new Float32Array(Dr),l=new ie(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function z0(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function H0(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class tx extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new Vi({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:va});c.uniforms.tEquirect.value=i;const f=new ba(l,c),p=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Nn),new vb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function d1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===bd||M===Td)if(e.has(g)){const y=e.get(g).texture;return p(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const A=new tx(y.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",h),p(A.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,y=M===bd||M===Td,A=M===Lr||M===Ls;if(y||A){let x=i.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new F0(s)),x=y?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const C=g.image;return y&&C&&C.height>0||A&&C&&m(C)?(r===null&&(r=new F0(s)),x=y?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function p(g,M){return M===bd?g.mapping=Lr:M===Td&&(g.mapping=Ls),g}function m(g){let M=0;const y=6;for(let A=0;A<y;A++)g[A]!==void 0&&M++;return M===y}function h(g){const M=g.target;M.removeEventListener("dispose",h);const y=e.get(M);y!==void 0&&(e.delete(M),y.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const y=i.get(M);y!==void 0&&(i.delete(M),y.dispose())}function S(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function h1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ru("WebGLRenderer: "+r+" extension not supported."),l}}}function p1(s,e,i,r){const l={},c=new WeakMap;function f(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(S){const g=[],M=S.index,y=S.attributes.position;let A=0;if(y===void 0)return;if(M!==null){const C=M.array;A=M.version;for(let N=0,U=C.length;N<U;N+=3){const I=C[N+0],F=C[N+1],B=C[N+2];g.push(I,F,F,B,B,I)}}else{const C=y.array;A=y.version;for(let N=0,U=C.length/3-1;N<U;N+=3){const I=N+0,F=N+1,B=N+2;g.push(I,F,F,B,B,I)}}const x=new(y.count>=65535?Xv:kv)(g,1);x.version=A;const v=c.get(S);v&&e.remove(v),c.set(S,x)}function _(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:_}}function m1(s,e,i){let r;function l(g){r=g}let c,f;function p(g){c=g.type,f=g.bytesPerElement}function m(g,M){s.drawElements(r,M,c,g*f),i.update(M,r,1)}function h(g,M,y){y!==0&&(s.drawElementsInstanced(r,M,c,g*f,y),i.update(M,r,y))}function _(g,M,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,g,0,y);let x=0;for(let v=0;v<y;v++)x+=M[v];i.update(x,r,1)}function S(g,M,y,A){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)h(g[v]/f,M[v],A[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,g,0,A,0,y);let v=0;for(let C=0;C<y;C++)v+=M[C]*A[C];i.update(v,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function g1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _1(s,e,i){const r=new WeakMap,l=new ln;function c(f,p,m){const h=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==S){let ce=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ce)};var M=ce;g!==void 0&&g.texture.dispose();const y=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;y===!0&&(U=1),A===!0&&(U=2),x===!0&&(U=3);let I=p.attributes.position.count*U,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*F*4*S),T=new Hv(B,I,F,S);T.type=Fi,T.needsUpdate=!0;const D=U*4;for(let V=0;V<S;V++){const $=v[V],re=C[V],de=N[V],J=I*F*4*V;for(let P=0;P<$.count;P++){const H=P*D;y===!0&&(l.fromBufferAttribute($,P),B[J+H+0]=l.x,B[J+H+1]=l.y,B[J+H+2]=l.z,B[J+H+3]=0),A===!0&&(l.fromBufferAttribute(re,P),B[J+H+4]=l.x,B[J+H+5]=l.y,B[J+H+6]=l.z,B[J+H+7]=0),x===!0&&(l.fromBufferAttribute(de,P),B[J+H+8]=l.x,B[J+H+9]=l.y,B[J+H+10]=l.z,B[J+H+11]=de.itemSize===4?l.w:1)}}g={count:S,texture:T,size:new Gt(I,F)},r.set(p,g),p.addEventListener("dispose",ce)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let y=0;for(let x=0;x<h.length;x++)y+=h[x];const A=p.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function v1(s,e,i,r,l){let c=new WeakMap;function f(h){const _=l.render.frame,S=h.geometry,g=e.get(h,S);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const x1={[bv]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Av]:"CINEON_TONE_MAPPING",[Rv]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Dv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function S1(s,e,i,r,l){const c=new Hi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Hi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new ei;p.setAttribute("position",new hi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new hi([0,2,0,0,2,0],2));const m=new mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ba(p,m),_=new $v(-1,1,1,-1,0,1);let S=null,g=null,M=!1,y,A=null,x=[],v=!1;this.setSize=function(C,N){c.setSize(C,N),f.setSize(C,N);for(let U=0;U<x.length;U++){const I=x[U];I.setSize&&I.setSize(C,N)}},this.setEffects=function(C){x=C,v=x.length>0&&x[0].isRenderPass===!0;const N=c.width,U=c.height;for(let I=0;I<x.length;I++){const F=x[I];F.setSize&&F.setSize(N,U)}},this.begin=function(C,N){if(M||C.toneMapping===zi&&x.length===0)return!1;if(A=N,N!==null){const U=N.width,I=N.height;(c.width!==U||c.height!==I)&&this.setSize(U,I)}return v===!1&&C.setRenderTarget(c),y=C.toneMapping,C.toneMapping=zi,!0},this.hasRenderPass=function(){return v},this.end=function(C,N){C.toneMapping=y,M=!0;let U=c,I=f;for(let F=0;F<x.length;F++){const B=x[F];if(B.enabled!==!1&&(B.render(C,I,U,N),B.needsSwap!==!1)){const T=U;U=I,I=T}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,m.defines={},Et.getTransfer(S)===Ft&&(m.defines.SRGB_TRANSFER="");const F=x1[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(A),C.render(h,_),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const nx=new On,Qh=new Jo(1,1),ix=new Hv,ax=new kE,rx=new Zv,G0=[],V0=[],k0=new Float32Array(16),X0=new Float32Array(9),W0=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=G0[l];if(c===void 0&&(c=new Float32Array(l),G0[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=V0[e];i===void 0&&(i=new Int32Array(e),V0[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function y1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function M1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function E1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function b1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function T1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;W0.set(r),s.uniformMatrix2fv(this.addr,!1,W0),gn(i,r)}}function A1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;X0.set(r),s.uniformMatrix3fv(this.addr,!1,X0),gn(i,r)}}function R1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;k0.set(r),s.uniformMatrix4fv(this.addr,!1,k0),gn(i,r)}}function C1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function w1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function D1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function N1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function U1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function L1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function O1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function P1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function I1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Qh.compareFunction=i.isReversedDepthBuffer()?hp:dp,c=Qh):c=nx,i.setTexture2D(e||c,l)}function F1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ax,l)}function B1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||rx,l)}function z1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ix,l)}function H1(s){switch(s){case 5126:return y1;case 35664:return M1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return L1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}function G1(s,e){s.uniform1fv(this.addr,e)}function V1(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function k1(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function X1(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function W1(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function q1(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function j1(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Y1(s,e){s.uniform1iv(this.addr,e)}function Z1(s,e){s.uniform2iv(this.addr,e)}function K1(s,e){s.uniform3iv(this.addr,e)}function Q1(s,e){s.uniform4iv(this.addr,e)}function J1(s,e){s.uniform1uiv(this.addr,e)}function $1(s,e){s.uniform2uiv(this.addr,e)}function eR(s,e){s.uniform3uiv(this.addr,e)}function tR(s,e){s.uniform4uiv(this.addr,e)}function nR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Qh:f=nx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function iR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ax,c[f])}function aR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||rx,c[f])}function rR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||ix,c[f])}function sR(s){switch(s){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return W1;case 35675:return q1;case 35676:return j1;case 5124:case 35670:return Y1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return eR;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return rR}}class oR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sR(i.type)}}class cR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function q0(s,e){s.seq.push(e),s.map[e.id]=e}function uR(s,e,i){const r=s.name,l=r.length;for(nh.lastIndex=0;;){const c=nh.exec(r),f=nh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){q0(i,h===void 0?new oR(p,s,e):new lR(p,s,e));break}else{let S=i.map[p];S===void 0&&(S=new cR(p),q0(i,S)),i=S}}}class Jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);uR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function j0(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const fR=37297;let dR=0;function hR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Y0=new ut;function pR(s){Et._getMatrix(Y0,Et.workingColorSpace,s);const e=`mat3( ${Y0.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(s)){case nu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Z0(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+hR(s.getShaderSource(e),p)}else return c}function mR(s,e){const i=pR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gR={[bv]:"Linear",[Tv]:"Reinhard",[Av]:"Cineon",[Rv]:"ACESFilmic",[wv]:"AgX",[Dv]:"Neutral",[Cv]:"Custom"};function _R(s,e){const i=gR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new ie;function vR(){Et.getLuminanceCoefficients(Xc);const s=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function SR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function yR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function Yo(s){return s!==""}function K0(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(s){return s.replace(MR,bR)}const ER=new Map;function bR(s,e){let i=ft[e];if(i===void 0){const r=ER.get(e);if(r!==void 0)i=ft[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jh(i)}const TR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(s){return s.replace(TR,AR)}function AR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const RR={[jc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function CR(s){return RR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wR={[Lr]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function DR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const NR={[Ls]:"ENVMAP_MODE_REFRACTION"};function UR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":NR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LR={[Ev]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[ME]:"ENVMAP_BLENDING_ADD"};function OR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":LR[s.combine]||"ENVMAP_BLENDING_NONE"}function PR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function IR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=CR(i),h=DR(i),_=UR(i),S=OR(i),g=PR(i),M=xR(i),y=SR(c),A=l.createProgram();let x,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Yo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(x=[$0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[$0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?ft.tonemapping_pars_fragment:"",i.toneMapping!==zi?_R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,mR("linearToOutputTexel",i.outputColorSpace),vR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=Jh(f),f=K0(f,i),f=Q0(f,i),p=Jh(p),p=K0(p,i),p=Q0(p,i),f=J0(f),p=J0(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===c0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=C+x+f,U=C+v+p,I=j0(l,l.VERTEX_SHADER,N),F=j0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,I),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(V){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(A)||"",re=l.getShaderInfoLog(I)||"",de=l.getShaderInfoLog(F)||"",J=$.trim(),P=re.trim(),H=de.trim();let le=!0,_e=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,F);else{const L=Z0(l,I,"vertex"),Z=Z0(l,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+L+`
`+Z)}else J!==""?at("WebGLProgram: Program Info Log:",J):(P===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:le,programLog:J,vertexShader:{log:P,prefix:x},fragmentShader:{log:H,prefix:v}})}l.deleteShader(I),l.deleteShader(F),T=new Jc(l,A),D=yR(l,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let ce=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=l.getProgramParameter(A,fR)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=F,this}let FR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new zR(e),i.set(e,r)),r}}class zR{constructor(e){this.id=FR++,this.code=e,this.usedTimes=0}}function HR(s,e,i,r,l,c){const f=new Gv,p=new BR,m=new Set,h=[],_=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,D,ce,V,$){const re=V.fog,de=$.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||J,P),le=H&&H.mapping===uu?H.image.height:null,_e=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const L=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Z=L!==void 0?L.length:0;let ue=0;de.morphAttributes.position!==void 0&&(ue=1),de.morphAttributes.normal!==void 0&&(ue=2),de.morphAttributes.color!==void 0&&(ue=3);let Se,Ue,je,ee;if(_e){const Tt=Ii[_e];Se=Tt.vertexShader,Ue=Tt.fragmentShader}else Se=T.vertexShader,Ue=T.fragmentShader,p.update(T),je=p.getVertexShaderID(T),ee=p.getFragmentShaderID(T);const be=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Je=$.isInstancedMesh===!0,Ke=$.isBatchedMesh===!0,$e=!!T.map,Jt=!!T.matcap,pt=!!H,yt=!!T.aoMap,Ot=!!T.lightMap,ot=!!T.bumpMap,bt=!!T.normalMap,k=!!T.displacementMap,Yt=!!T.emissiveMap,Mt=!!T.metalnessMap,Ct=!!T.roughnessMap,Xe=T.anisotropy>0,O=T.clearcoat>0,b=T.dispersion>0,q=T.iridescence>0,me=T.sheen>0,ve=T.transmission>0,fe=Xe&&!!T.anisotropyMap,Le=O&&!!T.clearcoatMap,we=O&&!!T.clearcoatNormalMap,Ze=O&&!!T.clearcoatRoughnessMap,et=q&&!!T.iridescenceMap,Ee=q&&!!T.iridescenceThicknessMap,Ae=me&&!!T.sheenColorMap,Fe=me&&!!T.sheenRoughnessMap,He=!!T.specularMap,Pe=!!T.specularColorMap,lt=!!T.specularIntensityMap,W=ve&&!!T.transmissionMap,Ce=ve&&!!T.thicknessMap,Re=!!T.gradientMap,Ie=!!T.alphaMap,Te=T.alphaTest>0,pe=!!T.alphaHash,Ge=!!T.extensions;let nt=zi;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Ut={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:Se,fragmentShader:Ue,defines:T.defines,customVertexShaderID:je,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&$._colorsTexture!==null,instancing:Je,instancingColor:Je&&$.instanceColor!==null,instancingMorph:Je&&$.morphTexture!==null,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ps,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:Jt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:le,aoMap:yt,lightMap:Ot,bumpMap:ot,normalMap:bt,displacementMap:k,emissiveMap:Yt,normalMapObjectSpace:bt&&T.normalMapType===AE,normalMapTangentSpace:bt&&T.normalMapType===TE,metalnessMap:Mt,roughnessMap:Ct,anisotropy:Xe,anisotropyMap:fe,clearcoat:O,clearcoatMap:Le,clearcoatNormalMap:we,clearcoatRoughnessMap:Ze,dispersion:b,iridescence:q,iridescenceMap:et,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:lt,transmission:ve,transmissionMap:W,thicknessMap:Ce,gradientMap:Re,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:pe,combine:T.combine,mapUv:$e&&y(T.map.channel),aoMapUv:yt&&y(T.aoMap.channel),lightMapUv:Ot&&y(T.lightMap.channel),bumpMapUv:ot&&y(T.bumpMap.channel),normalMapUv:bt&&y(T.normalMap.channel),displacementMapUv:k&&y(T.displacementMap.channel),emissiveMapUv:Yt&&y(T.emissiveMap.channel),metalnessMapUv:Mt&&y(T.metalnessMap.channel),roughnessMapUv:Ct&&y(T.roughnessMap.channel),anisotropyMapUv:fe&&y(T.anisotropyMap.channel),clearcoatMapUv:Le&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(T.sheenRoughnessMap.channel),specularMapUv:He&&y(T.specularMap.channel),specularColorMapUv:Pe&&y(T.specularColorMap.channel),specularIntensityMapUv:lt&&y(T.specularIntensityMap.channel),transmissionMapUv:W&&y(T.transmissionMap.channel),thicknessMapUv:Ce&&y(T.thicknessMap.channel),alphaMapUv:Ie&&y(T.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(bt||Xe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!de.attributes.uv&&($e||Ie),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||de.attributes.normal===void 0&&bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:$.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:Yt&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ma,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)D.push(ce),D.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(v(D,T),C(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function v(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),T.push(f.mask)}function N(T){const D=M[T.type];let ce;if(D){const V=Ii[D];ce=db.clone(V.uniforms)}else ce=T.uniforms;return ce}function U(T,D){let ce=_.get(D);return ce!==void 0?++ce.usedTimes:(ce=new IR(s,D,T,l),h.push(ce),_.set(D,ce)),ce}function I(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function B(){p.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:N,acquireProgram:U,releaseProgram:I,releaseShaderCache:F,programs:h,dispose:B}}function GR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function VR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ev(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,y,A,x,v){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:M,material:y,materialVariant:f(g),groupOrder:A,renderOrder:g.renderOrder,z:x,group:v},s[e]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=y,C.materialVariant=f(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=x,C.group=v),e++,C}function m(g,M,y,A,x,v){const C=p(g,M,y,A,x,v);y.transmission>0?r.push(C):y.transparent===!0?l.push(C):i.push(C)}function h(g,M,y,A,x,v){const C=p(g,M,y,A,x,v);y.transmission>0?r.unshift(C):y.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,M){i.length>1&&i.sort(g||VR),r.length>1&&r.sort(M||ev),l.length>1&&l.sort(M||ev)}function S(){for(let g=e,M=s.length;g<M;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:S,sort:_}}function kR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new tv,s.set(r,[f])):l>=c.length?(f=new tv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function XR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new xt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new xt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":i={color:new xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=i,i}}}function WR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let qR=0;function jR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YR(s){const e=new XR,i=WR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const l=new ie,c=new tn,f=new tn;function p(h){let _=0,S=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,y=0,A=0,x=0,v=0,C=0,N=0,U=0,I=0,F=0,B=0;h.sort(jR);for(let D=0,ce=h.length;D<ce;D++){const V=h[D],$=V.color,re=V.intensity,de=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Os?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=$.r*re,S+=$.g*re,g+=$.b*re;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],re);B++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,le=i.get(V);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,r.directionalShadow[M]=le,r.directionalShadowMap[M]=J,r.directionalShadowMatrix[M]=V.shadow.matrix,C++}r.directional[M]=P,M++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy($).multiplyScalar(re),P.distance=de,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[A]=P;const H=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[A]=H.matrix,V.castShadow){const le=i.get(V);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,r.spotShadow[A]=le,r.spotShadowMap[A]=J,U++}A++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy($).multiplyScalar(re),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=P,x++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const H=V.shadow,le=i.get(V);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,le.shadowCameraNear=H.camera.near,le.shadowCameraFar=H.camera.far,r.pointShadow[y]=le,r.pointShadowMap[y]=J,r.pointShadowMatrix[y]=V.shadow.matrix,N++}r.point[y]=P,y++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(re),P.groundColor.copy(V.groundColor).multiplyScalar(re),r.hemi[v]=P,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==y||T.spotLength!==A||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==I||T.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=x,r.point.length=y,r.hemi.length=v,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,T.directionalLength=M,T.pointLength=y,T.spotLength=A,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=I,T.numLightProbes=B,r.version=qR++)}function m(h,_){let S=0,g=0,M=0,y=0,A=0;const x=_.matrixWorldInverse;for(let v=0,C=h.length;v<C;v++){const N=h[v];if(N.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),S++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(N.isRectAreaLight){const U=r.rectArea[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(N.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),y++}else if(N.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(x),A++}}}return{setup:p,setupView:m,state:r}}function nv(s){const e=new YR(s),i=[],r=[];function l(_){h.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function p(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function ZR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new nv(s),e.set(l,[p])):c>=f.length?(p=new nv(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
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
}`,JR=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],$R=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],iv=new tn,qo=new ie,ih=new ie;function eC(s,e,i){let r=new qv;const l=new Gt,c=new Gt,f=new ln,p=new gb,m=new _b,h={},_=i.maxTextureSize,S={[rr]:Xn,[Xn]:rr,[ma]:ma},g=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const y=new ei;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ba(y,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let v=this.type;this.render=function(F,B,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===nE&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const D=s.getRenderTarget(),ce=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),$=s.state;$.setBlending(va),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=v!==this.type;re&&B.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(J=>J.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,J=F.length;de<J;de++){const P=F[de],H=P.shadow;if(H===void 0){at("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const le=H.getFrameExtents();l.multiply(le),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/le.x),l.x=c.x*le.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/le.y),l.y=c.y*le.y,H.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||re===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jo){if(P.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Hi(l.x,l.y,{format:Os,type:ya,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Jo(l.x,l.y,Fi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ma,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An}else P.isPointLight?(H.map=new tx(l.x),H.map.depthTexture=new ub(l.x,Gi)):(H.map=new Hi(l.x,l.y),H.map.depthTexture=new Jo(l.x,l.y,Gi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ma,this.type===jc?(H.map.depthTexture.compareFunction=_e?hp:dp,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An);H.camera.updateProjectionMatrix()}const L=H.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<L;Z++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(H.map),s.clear());const ue=H.getViewport(Z);f.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),$.viewport(f)}if(P.isPointLight){const ue=H.camera,Se=H.matrix,Ue=P.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),qo.setFromMatrixPosition(P.matrixWorld),ue.position.copy(qo),ih.copy(ue.position),ih.add(JR[Z]),ue.up.copy($R[Z]),ue.lookAt(ih),ue.updateMatrixWorld(),Se.makeTranslation(-qo.x,-qo.y,-qo.z),iv.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),H._frustum.setFromProjectionMatrix(iv,ue.coordinateSystem,ue.reversedDepth)}else H.updateMatrices(P);r=H.getFrustum(),U(B,T,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===jo&&C(H,T),H.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(D,ce,V)};function C(F,B){const T=e.update(A);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Hi(l.x,l.y,{format:Os,type:ya})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,T,g,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,T,M,A,null)}function N(F,B,T,D){let ce=null;const V=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)ce=V;else if(ce=T.isPointLight===!0?m:p,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=ce.uuid,re=B.uuid;let de=h[$];de===void 0&&(de={},h[$]=de);let J=de[re];J===void 0&&(J=ce.clone(),de[re]=J,B.addEventListener("dispose",I)),ce=J}if(ce.visible=B.visible,ce.wireframe=B.wireframe,D===jo?ce.side=B.shadowSide!==null?B.shadowSide:B.side:ce.side=B.shadowSide!==null?B.shadowSide:S[B.side],ce.alphaMap=B.alphaMap,ce.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ce.map=B.map,ce.clipShadows=B.clipShadows,ce.clippingPlanes=B.clippingPlanes,ce.clipIntersection=B.clipIntersection,ce.displacementMap=B.displacementMap,ce.displacementScale=B.displacementScale,ce.displacementBias=B.displacementBias,ce.wireframeLinewidth=B.wireframeLinewidth,ce.linewidth=B.linewidth,T.isPointLight===!0&&ce.isMeshDistanceMaterial===!0){const $=s.properties.get(ce);$.light=T}return ce}function U(F,B,T,D,ce){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ce===jo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const re=e.update(F),de=F.material;if(Array.isArray(de)){const J=re.groups;for(let P=0,H=J.length;P<H;P++){const le=J[P],_e=de[le.materialIndex];if(_e&&_e.visible){const L=N(F,_e,D,ce);F.onBeforeShadow(s,F,B,T,re,L,le),s.renderBufferDirect(T,null,re,L,F,le),F.onAfterShadow(s,F,B,T,re,L,le)}}}else if(de.visible){const J=N(F,de,D,ce);F.onBeforeShadow(s,F,B,T,re,J,null),s.renderBufferDirect(T,null,re,J,F,null),F.onAfterShadow(s,F,B,T,re,J,null)}}const $=F.children;for(let re=0,de=$.length;re<de;re++)U($[re],B,T,D,ce)}function I(F){F.target.removeEventListener("dispose",I);for(const T in h){const D=h[T],ce=F.target.uuid;ce in D&&(D[ce].dispose(),delete D[ce])}}}function tC(s,e){function i(){let W=!1;const Ce=new ln;let Re=null;const Ie=new ln(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(s.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,pe,Ge,nt,Ut){Ut===!0&&(Te*=nt,pe*=nt,Ge*=nt),Ce.set(Te,pe,Ge,nt),Ie.equals(Ce)===!1&&(s.clearColor(Te,pe,Ge,nt),Ie.copy(Ce))},reset:function(){W=!1,Re=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,Re=null,Ie=null,Te=null;return{setReversed:function(pe){if(Ce!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=pe;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return Ce},setTest:function(pe){pe?be(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!W&&(s.depthMask(pe),Re=pe)},setFunc:function(pe){if(Ce&&(pe=IE[pe]),Ie!==pe){switch(pe){case lh:s.depthFunc(s.NEVER);break;case ch:s.depthFunc(s.ALWAYS);break;case uh:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Te!==pe&&(Te=pe,Ce&&(pe=1-pe),s.clearDepth(pe))},reset:function(){W=!1,Re=null,Ie=null,Te=null,Ce=!1}}}function l(){let W=!1,Ce=null,Re=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Ut=null;return{setTest:function(Tt){W||(Tt?be(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Tt){Ce!==Tt&&!W&&(s.stencilMask(Tt),Ce=Tt)},setFunc:function(Tt,pi,_n){(Re!==Tt||Ie!==pi||Te!==_n)&&(s.stencilFunc(Tt,pi,_n),Re=Tt,Ie=pi,Te=_n)},setOp:function(Tt,pi,_n){(pe!==Tt||Ge!==pi||nt!==_n)&&(s.stencilOp(Tt,pi,_n),pe=Tt,Ge=pi,nt=_n)},setLocked:function(Tt){W=Tt},setClear:function(Tt){Ut!==Tt&&(s.clearStencil(Tt),Ut=Tt)},reset:function(){W=!1,Ce=null,Re=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Ut=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},S={},g=new WeakMap,M=[],y=null,A=!1,x=null,v=null,C=null,N=null,U=null,I=null,F=null,B=new xt(0,0,0),T=0,D=!1,ce=null,V=null,$=null,re=null,de=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(le)[1]),P=H>=1):le.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),P=H>=2);let _e=null,L={};const Z=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),Se=new ln().fromArray(Z),Ue=new ln().fromArray(ue);function je(W,Ce,Re,Ie){const Te=new Uint8Array(4),pe=s.createTexture();s.bindTexture(W,pe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<Re;Ge++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ce+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return pe}const ee={};ee[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),be(s.DEPTH_TEST),f.setFunc(Us),ot(!1),bt(a0),be(s.CULL_FACE),yt(va);function be(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Me(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Je(W,Ce){return S[W]!==Ce?(s.bindFramebuffer(W,Ce),S[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ke(W,Ce){let Re=M,Ie=!1;if(W){Re=g.get(Ce),Re===void 0&&(Re=[],g.set(Ce,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ge=Te.length;pe<Ge;pe++)Re[pe]=s.COLOR_ATTACHMENT0+pe;Re.length=Te.length,Ie=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Re)}function $e(W){return y!==W?(s.useProgram(W),y=W,!0):!1}const Jt={[wr]:s.FUNC_ADD,[aE]:s.FUNC_SUBTRACT,[rE]:s.FUNC_REVERSE_SUBTRACT};Jt[sE]=s.MIN,Jt[oE]=s.MAX;const pt={[lE]:s.ZERO,[cE]:s.ONE,[uE]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[gE]:s.SRC_ALPHA_SATURATE,[pE]:s.DST_COLOR,[dE]:s.DST_ALPHA,[fE]:s.ONE_MINUS_SRC_COLOR,[oh]:s.ONE_MINUS_SRC_ALPHA,[mE]:s.ONE_MINUS_DST_COLOR,[hE]:s.ONE_MINUS_DST_ALPHA,[_E]:s.CONSTANT_COLOR,[vE]:s.ONE_MINUS_CONSTANT_COLOR,[xE]:s.CONSTANT_ALPHA,[SE]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(W,Ce,Re,Ie,Te,pe,Ge,nt,Ut,Tt){if(W===va){A===!0&&(Me(s.BLEND),A=!1);return}if(A===!1&&(be(s.BLEND),A=!0),W!==iE){if(W!==x||Tt!==D){if((v!==wr||U!==wr)&&(s.blendEquation(s.FUNC_ADD),v=wr,U=wr),Tt)switch(W){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFunc(s.ONE,s.ONE);break;case r0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case s0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case r0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}C=null,N=null,I=null,F=null,B.set(0,0,0),T=0,x=W,D=Tt}return}Te=Te||Ce,pe=pe||Re,Ge=Ge||Ie,(Ce!==v||Te!==U)&&(s.blendEquationSeparate(Jt[Ce],Jt[Te]),v=Ce,U=Te),(Re!==C||Ie!==N||pe!==I||Ge!==F)&&(s.blendFuncSeparate(pt[Re],pt[Ie],pt[pe],pt[Ge]),C=Re,N=Ie,I=pe,F=Ge),(nt.equals(B)===!1||Ut!==T)&&(s.blendColor(nt.r,nt.g,nt.b,Ut),B.copy(nt),T=Ut),x=W,D=!1}function Ot(W,Ce){W.side===ma?Me(s.CULL_FACE):be(s.CULL_FACE);let Re=W.side===Xn;Ce&&(Re=!Re),ot(Re),W.blending===Ds&&W.transparent===!1?yt(va):yt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Yt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(W){ce!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),ce=W)}function bt(W){W!==eE?(be(s.CULL_FACE),W!==V&&(W===a0?s.cullFace(s.BACK):W===tE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),V=W}function k(W){W!==$&&(P&&s.lineWidth(W),$=W)}function Yt(W,Ce,Re){W?(be(s.POLYGON_OFFSET_FILL),(re!==Ce||de!==Re)&&(re=Ce,de=Re,f.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,Re))):Me(s.POLYGON_OFFSET_FILL)}function Mt(W){W?be(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Ct(W){W===void 0&&(W=s.TEXTURE0+J-1),_e!==W&&(s.activeTexture(W),_e=W)}function Xe(W,Ce,Re){Re===void 0&&(_e===null?Re=s.TEXTURE0+J-1:Re=_e);let Ie=L[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[Re]=Ie),(Ie.type!==W||Ie.texture!==Ce)&&(_e!==Re&&(s.activeTexture(Re),_e=Re),s.bindTexture(W,Ce||ee[W]),Ie.type=W,Ie.texture=Ce)}function O(){const W=L[_e];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function me(){try{s.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ve(){try{s.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Le(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function we(){try{s.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ze(){try{s.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function et(){try{s.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ee(){try{s.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ae(W){Se.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Fe(W){Ue.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function He(W,Ce){let Re=h.get(Ce);Re===void 0&&(Re=new WeakMap,h.set(Ce,Re));let Ie=Re.get(W);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ce,W.name),Re.set(W,Ie))}function Pe(W,Ce){const Ie=h.get(Ce).get(W);m.get(Ce)!==Ie&&(s.uniformBlockBinding(Ce,Ie,W.__bindingPointIndex),m.set(Ce,Ie))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},_e=null,L={},S={},g=new WeakMap,M=[],y=null,A=!1,x=null,v=null,C=null,N=null,U=null,I=null,F=null,B=new xt(0,0,0),T=0,D=!1,ce=null,V=null,$=null,re=null,de=null,Se.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:be,disable:Me,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:yt,setMaterial:Ot,setFlipSided:ot,setCullFace:bt,setLineWidth:k,setPolygonOffset:Yt,setScissorTest:Mt,activeTexture:Ct,bindTexture:Xe,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:et,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:we,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Le,scissor:Ae,viewport:Fe,reset:lt}}function nC(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Gt,_=new WeakMap;let S;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,b){return M?new OffscreenCanvas(O,b):au("canvas")}function A(O,b,q){let me=1;const ve=Xe(O);if((ve.width>q||ve.height>q)&&(me=q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(me*ve.width),Le=Math.floor(me*ve.height);S===void 0&&(S=y(fe,Le));const we=b?y(fe,Le):S;return we.width=fe,we.height=Le,we.getContext("2d").drawImage(O,0,0,fe,Le),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Le+")."),we}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function x(O){return O.generateMipmaps}function v(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(O,b,q,me,ve=!1){if(O!==null){if(s[O]!==void 0)return s[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=b;if(b===s.RED&&(q===s.FLOAT&&(fe=s.R32F),q===s.HALF_FLOAT&&(fe=s.R16F),q===s.UNSIGNED_BYTE&&(fe=s.R8)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.R8UI),q===s.UNSIGNED_SHORT&&(fe=s.R16UI),q===s.UNSIGNED_INT&&(fe=s.R32UI),q===s.BYTE&&(fe=s.R8I),q===s.SHORT&&(fe=s.R16I),q===s.INT&&(fe=s.R32I)),b===s.RG&&(q===s.FLOAT&&(fe=s.RG32F),q===s.HALF_FLOAT&&(fe=s.RG16F),q===s.UNSIGNED_BYTE&&(fe=s.RG8)),b===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),q===s.UNSIGNED_INT&&(fe=s.RG32UI),q===s.BYTE&&(fe=s.RG8I),q===s.SHORT&&(fe=s.RG16I),q===s.INT&&(fe=s.RG32I)),b===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),q===s.UNSIGNED_INT&&(fe=s.RGB32UI),q===s.BYTE&&(fe=s.RGB8I),q===s.SHORT&&(fe=s.RGB16I),q===s.INT&&(fe=s.RGB32I)),b===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),q===s.BYTE&&(fe=s.RGBA8I),q===s.SHORT&&(fe=s.RGBA16I),q===s.INT&&(fe=s.RGBA32I)),b===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),b===s.RGBA){const Le=ve?nu:Et.getTransfer(me);q===s.FLOAT&&(fe=s.RGBA32F),q===s.HALF_FLOAT&&(fe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(fe=Le===Ft?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(O,b){let q;return O?b===null||b===Gi||b===Qo?q=s.DEPTH24_STENCIL8:b===Fi?q=s.DEPTH32F_STENCIL8:b===Ko&&(q=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===Qo?q=s.DEPTH_COMPONENT24:b===Fi?q=s.DEPTH_COMPONENT32F:b===Ko&&(q=s.DEPTH_COMPONENT16),q}function I(O,b){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function F(O){const b=O.target;b.removeEventListener("dispose",F),T(b),b.isVideoTexture&&_.delete(b)}function B(O){const b=O.target;b.removeEventListener("dispose",B),ce(b)}function T(O){const b=r.get(O);if(b.__webglInit===void 0)return;const q=O.source,me=g.get(q);if(me){const ve=me[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(O),Object.keys(me).length===0&&g.delete(q)}r.remove(O)}function D(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const q=O.source,me=g.get(q);delete me[b.__cacheKey],f.memory.textures--}function ce(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let ve=0;ve<b.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(b.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=O.textures;for(let me=0,ve=q.length;me<ve;me++){const fe=r.get(q[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(q[me])}r.remove(O)}let V=0;function $(){V=0}function re(){const O=V;return O>=l.maxTextures&&at("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function de(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function J(O,b){const q=r.get(O);if(O.isVideoTexture&&Mt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const me=O.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,O,b);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function P(O,b){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ee(q,O,b);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function H(O,b){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ee(q,O,b);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function le(O,b){const q=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){be(q,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}const _e={[mh]:s.REPEAT,[ga]:s.CLAMP_TO_EDGE,[gh]:s.MIRRORED_REPEAT},L={[An]:s.NEAREST,[EE]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Ad]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},Z={[RE]:s.NEVER,[UE]:s.ALWAYS,[CE]:s.LESS,[dp]:s.LEQUAL,[wE]:s.EQUAL,[hp]:s.GEQUAL,[DE]:s.GREATER,[NE]:s.NOTEQUAL};function ue(O,b){if(b.type===Fi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===Ad||b.magFilter===vc||b.magFilter===Nr||b.minFilter===Nn||b.minFilter===Ad||b.minFilter===vc||b.minFilter===Nr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,_e[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,_e[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,_e[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,L[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==vc&&b.minFilter!==Nr||b.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Se(O,b){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",F));const me=b.source;let ve=g.get(me);ve===void 0&&(ve={},g.set(me,ve));const fe=de(b);if(fe!==O.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ve[fe].usedTimes++;const Le=ve[O.__cacheKey];Le!==void 0&&(ve[O.__cacheKey].usedTimes--,Le.usedTimes===0&&D(b)),O.__cacheKey=fe,O.__webglTexture=ve[fe].texture}return q}function Ue(O,b,q){return Math.floor(Math.floor(O/q)/b)}function je(O,b,q,me){const fe=O.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,q,me,b.data);else{fe.sort((Ee,Ae)=>Ee.start-Ae.start);let Le=0;for(let Ee=1;Ee<fe.length;Ee++){const Ae=fe[Le],Fe=fe[Ee],He=Ae.start+Ae.count,Pe=Ue(Fe.start,b.width,4),lt=Ue(Ae.start,b.width,4);Fe.start<=He+1&&Pe===lt&&Ue(Fe.start+Fe.count-1,b.width,4)===Pe?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++Le,fe[Le]=Fe)}fe.length=Le+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Ze=s.getParameter(s.UNPACK_SKIP_PIXELS),et=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const Fe=fe[Ee],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),lt=He%b.width,W=Math.floor(He/b.width),Ce=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,lt,W,Ce,Re,q,me,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,et)}}function ee(O,b,q){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Se(O,b),fe=b.source;i.bindTexture(me,O.__webglTexture,s.TEXTURE0+q);const Le=r.get(fe);if(fe.version!==Le.__version||ve===!0){i.activeTexture(s.TEXTURE0+q);const we=Et.getPrimaries(Et.workingColorSpace),Ze=b.colorSpace===ir?null:Et.getPrimaries(b.colorSpace),et=b.colorSpace===ir||we===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=A(b.image,!1,l.maxTextureSize);Ee=Ct(b,Ee);const Ae=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let He=N(b.internalFormat,Ae,Fe,b.colorSpace,b.isVideoTexture);ue(me,b);let Pe;const lt=b.mipmaps,W=b.isVideoTexture!==!0,Ce=Le.__version===void 0||ve===!0,Re=fe.dataReady,Ie=I(b,Ee);if(b.isDepthTexture)He=U(b.format===Ur,b.type),Ce&&(W?i.texStorage2D(s.TEXTURE_2D,1,He,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,null));else if(b.isDataTexture)if(lt.length>0){W&&Ce&&i.texStorage2D(s.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(s.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data);b.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(s.TEXTURE_2D,Ie,He,Ee.width,Ee.height),Re&&je(b,Ee,Ae,Fe)):i.texImage2D(s.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,He,lt[0].width,lt[0].height,Ee.depth);for(let Te=0,pe=lt.length;Te<pe;Te++)if(Pe=lt[Te],b.format!==bi)if(Ae!==null)if(W){if(Re)if(b.layerUpdates.size>0){const Ge=O0(Pe.width,Pe.height,b.format,b.type);for(const nt of b.layerUpdates){const Ut=Pe.data.subarray(nt*Ge/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Ut)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Fe,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Ae,Fe,Pe.data)}else{W&&Ce&&i.texStorage2D(s.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],b.format!==bi?Ae!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(s.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(b.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,He,Ee.width,Ee.height,Ee.depth),Re)if(b.layerUpdates.size>0){const Te=O0(Ee.width,Ee.height,b.format,b.type);for(const pe of b.layerUpdates){const Ge=Ee.data.subarray(pe*Te/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ae,Fe,Ge)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(b.isData3DTexture)W?(Ce&&i.texStorage3D(s.TEXTURE_3D,Ie,He,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(b.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(s.TEXTURE_2D,Ie,He,Ee.width,Ee.height);else{let Te=Ee.width,pe=Ee.height;for(let Ge=0;Ge<Ie;Ge++)i.texImage2D(s.TEXTURE_2D,Ge,He,Te,pe,0,Ae,Fe,null),Te>>=1,pe>>=1}}else if(lt.length>0){if(W&&Ce){const Te=Xe(lt[0]);i.texStorage2D(s.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Fe,Pe):i.texImage2D(s.TEXTURE_2D,Te,He,Ae,Fe,Pe);b.generateMipmaps=!1}else if(W){if(Ce){const Te=Xe(Ee);i.texStorage2D(s.TEXTURE_2D,Ie,He,Te.width,Te.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Fe,Ee)}else i.texImage2D(s.TEXTURE_2D,0,He,Ae,Fe,Ee);x(b)&&v(me),Le.__version=fe.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function be(O,b,q){if(b.image.length!==6)return;const me=Se(O,b),ve=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+q);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){i.activeTexture(s.TEXTURE0+q);const Le=Et.getPrimaries(Et.workingColorSpace),we=b.colorSpace===ir?null:Et.getPrimaries(b.colorSpace),Ze=b.colorSpace===ir||Le===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!et&&!Ee?Ae[pe]=A(b.image[pe],!0,l.maxCubemapSize):Ae[pe]=Ee?b.image[pe].image:b.image[pe],Ae[pe]=Ct(b,Ae[pe]);const Fe=Ae[0],He=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),lt=N(b.internalFormat,He,Pe,b.colorSpace),W=b.isVideoTexture!==!0,Ce=fe.__version===void 0||me===!0,Re=ve.dataReady;let Ie=I(b,Fe);ue(s.TEXTURE_CUBE_MAP,b);let Te;if(et){W&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,lt,Fe.width,Fe.height);for(let pe=0;pe<6;pe++){Te=Ae[pe].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];b.format!==bi?He!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=b.mipmaps,W&&Ce){Te.length>0&&Ie++;const pe=Xe(Ae[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,He,Pe,Ae[pe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ae[pe].width,Ae[pe].height,0,He,Pe,Ae[pe].data);for(let Ge=0;Ge<Te.length;Ge++){const Ut=Te[Ge].image[pe].image;W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Ut.width,Ut.height,He,Pe,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,Ut.width,Ut.height,0,He,Pe,Ut.data)}}else{W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He,Pe,Ae[pe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,He,Pe,Ae[pe]);for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,He,Pe,nt.image[pe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,He,Pe,nt.image[pe])}}}x(b)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Me(O,b,q,me,ve,fe){const Le=c.convert(q.format,q.colorSpace),we=c.convert(q.type),Ze=N(q.internalFormat,Le,we,q.colorSpace),et=r.get(b),Ee=r.get(q);if(Ee.__renderTarget=b,!et.__hasExternalTextures){const Ae=Math.max(1,b.width>>fe),Fe=Math.max(1,b.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,fe,Ze,Ae,Fe,b.depth,0,Le,we,null):i.texImage2D(ve,fe,Ze,Ae,Fe,0,Le,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Yt(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,k(b)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(O,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const me=b.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=U(b.stencilBuffer,ve),Le=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Yt(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(b),fe,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(b),fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,O)}else{const me=b.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],Le=c.convert(fe.format,fe.colorSpace),we=c.convert(fe.type),Ze=N(fe.internalFormat,Le,we,fe.colorSpace);Yt(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(b),Ze,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(b),Ze,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ze,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(O,b,q){const me=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),me){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ue(s.TEXTURE_CUBE_MAP,b.depthTexture);const et=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Ae;b.depthTexture.format===Ma?Ae=s.DEPTH_COMPONENT24:b.depthTexture.format===Ur&&(Ae=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,b.width,b.height,0,et,Ee,null)}}else J(b.depthTexture,0);const fe=ve.__webglTexture,Le=k(b),we=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Ze=b.depthTexture.format===Ur?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)Yt(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ze,we,fe,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,Ze,we,fe,0);else if(b.depthTexture.format===Ur)Yt(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ze,we,fe,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,Ze,we,fe,0);else throw new Error("Unknown depthTexture format")}function $e(O){const b=r.get(O),q=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=me}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)Ke(b.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Ke(b.__webglFramebuffer[0],O,0):Ke(b.__webglFramebuffer,O,0)}else if(q){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=s.createRenderbuffer(),Je(b.__webglDepthbuffer[me],O,!1);else{const ve=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Je(b.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(O,b,q){const me=r.get(O);b!==void 0&&Me(me.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&$e(O)}function pt(O){const b=O.texture,q=r.get(O),me=r.get(b);O.addEventListener("dispose",B);const ve=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Le=ve.length>1;if(Le||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,f.memory.textures++),fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Ze=0;Ze<b.mipmaps.length;Ze++)q.__webglFramebuffer[we][Ze]=s.createFramebuffer()}else q.__webglFramebuffer[we]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)q.__webglFramebuffer[we]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Le)for(let we=0,Ze=ve.length;we<Ze;we++){const et=r.get(ve[we]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Yt(O)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const Ze=ve[we];q.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const et=c.convert(Ze.format,Ze.colorSpace),Ee=c.convert(Ze.type),Ae=N(Ze.internalFormat,et,Ee,Ze.colorSpace,O.isXRRenderTarget===!0),Fe=k(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ae,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,q.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ue(s.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ze=0;Ze<b.mipmaps.length;Ze++)Me(q.__webglFramebuffer[we][Ze],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze);else Me(q.__webglFramebuffer[we],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let we=0,Ze=ve.length;we<Ze;we++){const et=ve[we],Ee=r.get(et);let Ae=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),ue(Ae,et),Me(q.__webglFramebuffer,O,et,s.COLOR_ATTACHMENT0+we,Ae,0),x(et)&&v(Ae)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,me.__webglTexture),ue(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ze=0;Ze<b.mipmaps.length;Ze++)Me(q.__webglFramebuffer[Ze],O,b,s.COLOR_ATTACHMENT0,we,Ze);else Me(q.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,we,0);x(b)&&v(we),i.unbindTexture()}O.depthBuffer&&$e(O)}function yt(O){const b=O.textures;for(let q=0,me=b.length;q<me;q++){const ve=b[q];if(x(ve)){const fe=C(O),Le=r.get(ve).__webglTexture;i.bindTexture(fe,Le),v(fe),i.unbindTexture()}}}const Ot=[],ot=[];function bt(O){if(O.samples>0){if(Yt(O)===!1){const b=O.textures,q=O.width,me=O.height;let ve=s.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(O),we=b.length>1;if(we)for(let et=0;et<b.length;et++)i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ze=O.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let et=0;et<b.length;et++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Ee=r.get(b[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,q,me,0,0,q,me,ve,s.NEAREST),m===!0&&(Ot.length=0,ot.length=0,Ot.push(s.COLOR_ATTACHMENT0+et),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ot.push(fe),ot.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<b.length;et++){i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Ee=r.get(b[et]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function Yt(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(O){const b=f.render.frame;_.get(O)!==b&&(_.set(O,b),O.update())}function Ct(O,b){const q=O.colorSpace,me=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Ps&&q!==ir&&(Et.getTransfer(q)===Ft?(me!==bi||ve!==fi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),b}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=re,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=le,this.rebindTextures=Jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iC(s,e){function i(r,l=ir){let c;const f=Et.getTransfer(l);if(r===fi)return s.UNSIGNED_BYTE;if(r===op)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ov)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uv)return s.BYTE;if(r===Lv)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===sp)return s.INT;if(r===Gi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===ya)return s.HALF_FLOAT;if(r===Iv)return s.ALPHA;if(r===Fv)return s.RGB;if(r===bi)return s.RGBA;if(r===Ma)return s.DEPTH_COMPONENT;if(r===Ur)return s.DEPTH_STENCIL;if(r===Bv)return s.RED;if(r===cp)return s.RED_INTEGER;if(r===Os)return s.RG;if(r===up)return s.RG_INTEGER;if(r===fp)return s.RGBA_INTEGER;if(r===Yc||r===Zc||r===Kc||r===Qc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_h||r===vh||r===xh||r===Sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yh||r===Mh)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Eh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===bh)return c.COMPRESSED_R11_EAC;if(r===Th)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ah)return c.COMPRESSED_RG11_EAC;if(r===Rh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ch||r===wh||r===Dh||r===Nh||r===Uh||r===Lh||r===Oh||r===Ph||r===Ih||r===Fh||r===Bh||r===zh||r===Hh||r===Gh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ch)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vh||r===kh||r===Xh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Vh)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wh||r===qh||r===jh||r===Yh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
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

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Kv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Vi({vertexShader:aC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ba(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends Bs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,_=null,S=null,g=null,M=null,y=null;const A=typeof XRWebGLBinding<"u",x=new sC,v={},C=i.getContextAttributes();let N=null,U=null;const I=[],F=[],B=new Gt;let T=null;const D=new ui;D.viewport=new ln;const ce=new ui;ce.viewport=new ln;const V=[D,ce],$=new xb;let re=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let be=I[ee];return be===void 0&&(be=new Od,I[ee]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ee){let be=I[ee];return be===void 0&&(be=new Od,I[ee]=be),be.getGripSpace()},this.getHand=function(ee){let be=I[ee];return be===void 0&&(be=new Od,I[ee]=be),be.getHandSpace()};function J(ee){const be=F.indexOf(ee.inputSource);if(be===-1)return;const Me=I[be];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,h||f),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function P(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<I.length;ee++){const be=F[ee];be!==null&&(F[ee]=null,I[ee].disconnect(be))}re=null,de=null,x.reset();for(const ee in v)delete v[ee];e.setRenderTarget(N),M=null,g=null,S=null,l=null,U=null,je.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&A&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return y},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Je=null,Ke=null;C.depth&&(Ke=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=C.stencil?Ur:Ma,Je=C.stencil?Qo:Gi);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer($e),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new Hi(g.textureWidth,g.textureHeight,{format:bi,type:fi,depthTexture:new Jo(g.textureWidth,g.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Hi(M.framebufferWidth,M.framebufferHeight,{format:bi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),je.setContext(l),je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(ee){for(let be=0;be<ee.removed.length;be++){const Me=ee.removed[be],Je=F.indexOf(Me);Je>=0&&(F[Je]=null,I[Je].disconnect(Me))}for(let be=0;be<ee.added.length;be++){const Me=ee.added[be];let Je=F.indexOf(Me);if(Je===-1){for(let $e=0;$e<I.length;$e++)if($e>=F.length){F.push(Me),Je=$e;break}else if(F[$e]===null){F[$e]=Me,Je=$e;break}if(Je===-1)break}const Ke=I[Je];Ke&&Ke.connect(Me)}}const le=new ie,_e=new ie;function L(ee,be,Me){le.setFromMatrixPosition(be.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const Je=le.distanceTo(_e),Ke=be.projectionMatrix.elements,$e=Me.projectionMatrix.elements,Jt=Ke[14]/(Ke[10]-1),pt=Ke[14]/(Ke[10]+1),yt=(Ke[9]+1)/Ke[5],Ot=(Ke[9]-1)/Ke[5],ot=(Ke[8]-1)/Ke[0],bt=($e[8]+1)/$e[0],k=Jt*ot,Yt=Jt*bt,Mt=Je/(-ot+bt),Ct=Mt*-ot;if(be.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ke[10]===-1)ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Xe=Jt+Mt,O=pt+Mt,b=k-Ct,q=Yt+(Je-Ct),me=yt*pt/O*Xe,ve=Ot*pt/O*Xe;ee.projectionMatrix.makePerspective(b,q,me,ve,Xe,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Z(ee,be){be===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(be.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let be=ee.near,Me=ee.far;x.texture!==null&&(x.depthNear>0&&(be=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),$.near=ce.near=D.near=be,$.far=ce.far=D.far=Me,(re!==$.near||de!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),re=$.near,de=$.far),$.layers.mask=ee.layers.mask|6,D.layers.mask=$.layers.mask&-5,ce.layers.mask=$.layers.mask&-3;const Je=ee.parent,Ke=$.cameras;Z($,Je);for(let $e=0;$e<Ke.length;$e++)Z(Ke[$e],Je);Ke.length===2?L($,D,ce):$.projectionMatrix.copy(D.projectionMatrix),ue(ee,$,Je)};function ue(ee,be,Me){Me===null?ee.matrix.copy(be.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(be.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Zh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ee){return v[ee]};let Se=null;function Ue(ee,be){if(_=be.getViewerPose(h||f),y=be,_!==null){const Me=_.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Je=!1;Me.length!==$.cameras.length&&($.cameras.length=0,Je=!0);for(let pt=0;pt<Me.length;pt++){const yt=Me[pt];let Ot=null;if(M!==null)Ot=M.getViewport(yt);else{const bt=S.getViewSubImage(g,yt);Ot=bt.viewport,pt===0&&(e.setRenderTargetTextures(U,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(U))}let ot=V[pt];ot===void 0&&(ot=new ui,ot.layers.enable(pt),ot.viewport=new ln,V[pt]=ot),ot.matrix.fromArray(yt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(yt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),pt===0&&($.matrix.copy(ot.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Je===!0&&$.cameras.push(ot)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){S=r.getBinding();const pt=S.getDepthInformation(Me[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&A){e.state.unbindTexture(),S=r.getBinding();for(let pt=0;pt<Me.length;pt++){const yt=Me[pt].camera;if(yt){let Ot=v[yt];Ot||(Ot=new Kv,v[yt]=Ot);const ot=S.getCameraImage(yt);Ot.sourceTexture=ot}}}}for(let Me=0;Me<I.length;Me++){const Je=F[Me],Ke=I[Me];Je!==null&&Ke!==void 0&&Ke.update(Je,be,h||f)}Se&&Se(ee,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),y=null}const je=new ex;je.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}}const Rr=new Ea,lC=new tn;function cC(s,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Qv(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,C,N,U){v.isMeshBasicMaterial?c(x,v):v.isMeshLambertMaterial?(c(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(x,v),S(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(x,v),g(x,v),v.isMeshPhysicalMaterial&&M(x,v,U)):v.isMeshMatcapMaterial?(c(x,v),y(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),A(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&p(x,v)):v.isPointsMaterial?m(x,v,C,N):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Xn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Xn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const C=e.get(v),N=C.envMap,U=C.envMapRotation;N&&(x.envMap.value=N,Rr.copy(U),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),x.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Rr)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function p(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,C,N){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*C,x.scale.value=N*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,C){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const C=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function uC(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const U=N.program;r.uniformBlockBinding(C,U)}function h(C,N){let U=l[C.id];U===void 0&&(y(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",x));const I=N.program;r.updateUBOMapping(C,I);const F=e.render.frame;c[C.id]!==F&&(g(C),c[C.id]=F)}function _(C){const N=S();C.__bindingPointIndex=N;const U=s.createBuffer(),I=C.__size,F=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function S(){for(let C=0;C<p;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],U=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,B=U.length;F<B;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,ce=T.length;D<ce;D++){const V=T[D];if(M(V,F,D,I)===!0){const $=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let de=0;for(let J=0;J<re.length;J++){const P=re[J],H=A(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,$+de,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,de),de+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,U,I){const F=C.value,B=N+"_"+U;if(I[B]===void 0)return typeof F=="number"||typeof F=="boolean"?I[B]=F:I[B]=F.clone(),!0;{const T=I[B];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return I[B]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function y(C){const N=C.uniforms;let U=0;const I=16;for(let B=0,T=N.length;B<T;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let ce=0,V=D.length;ce<V;ce++){const $=D[ce],re=Array.isArray($.value)?$.value:[$.value];for(let de=0,J=re.length;de<J;de++){const P=re[de],H=A(P),le=U%I,_e=le%H.boundary,L=le+_e;U+=_e,L!==0&&I-L<H.storage&&(U+=I-L),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=H.storage}}}const F=U%I;return F>0&&(U+=I-F),C.__size=U,C.__cache={},this}function A(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",C),N}function x(C){const N=C.target;N.removeEventListener("dispose",x);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:h,dispose:v}}const fC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function dC(){return Pi===null&&(Pi=new ib(fC,16,16,Os,ya),Pi.name="DFG_LUT",Pi.minFilter=Nn,Pi.magFilter=Nn,Pi.wrapS=ga,Pi.wrapT=ga,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class hC{constructor(e={}){const{canvas:i=OE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const A=M,x=new Set([fp,up,cp]),v=new Set([fi,Gi,Ko,Qo,op,lp]),C=new Uint32Array(4),N=new Int32Array(4);let U=null,I=null;const F=[],B=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ce=!1;this._outputColorSpace=ci;let V=0,$=0,re=null,de=-1,J=null;const P=new ln,H=new ln;let le=null;const _e=new xt(0);let L=0,Z=i.width,ue=i.height,Se=1,Ue=null,je=null;const ee=new ln(0,0,Z,ue),be=new ln(0,0,Z,ue);let Me=!1;const Je=new qv;let Ke=!1,$e=!1;const Jt=new tn,pt=new ie,yt=new ln,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function bt(){return re===null?Se:1}let k=r;function Yt(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",Ge,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),k===null){const j="webgl2";if(k=Yt(j,w),k===null)throw Yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Rt("WebGLRenderer: "+w.message),w}let Mt,Ct,Xe,O,b,q,me,ve,fe,Le,we,Ze,et,Ee,Ae,Fe,He,Pe,lt,W,Ce,Re,Ie;function Te(){Mt=new h1(k),Mt.init(),Ce=new iC(k,Mt),Ct=new r1(k,Mt,e,Ce),Xe=new tC(k,Mt),Ct.reversedDepthBuffer&&g&&Xe.buffers.depth.setReversed(!0),O=new g1(k),b=new GR,q=new nC(k,Mt,Xe,b,Ct,Ce,O),me=new d1(D),ve=new yb(k),Re=new i1(k,ve),fe=new p1(k,ve,O,Re),Le=new v1(k,fe,ve,Re,O),Pe=new _1(k,Ct,q),Ae=new s1(b),we=new HR(D,me,Mt,Ct,Re,Ae),Ze=new cC(D,b),et=new kR,Ee=new ZR(Mt),He=new n1(D,me,Xe,Le,y,m),Fe=new eC(D,Le,Ct),Ie=new uC(k,O,Ct,Xe),lt=new a1(k,Mt,O),W=new m1(k,Mt,O),O.programs=we.programs,D.capabilities=Ct,D.extensions=Mt,D.properties=b,D.renderLists=et,D.shadowMap=Fe,D.state=Xe,D.info=O}Te(),A!==fi&&(T=new S1(A,i.width,i.height,l,c));const pe=new oC(D,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(Z,ue,!1))},this.getSize=function(w){return w.set(Z,ue)},this.setSize=function(w,j,oe=!0){if(pe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,ue=j,i.width=Math.floor(w*Se),i.height=Math.floor(j*Se),oe===!0&&(i.style.width=w+"px",i.style.height=j+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(Z*Se,ue*Se).floor()},this.setDrawingBufferSize=function(w,j,oe){Z=w,ue=j,Se=oe,i.width=Math.floor(w*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(A===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,j,oe,ne){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,j,oe,ne),Xe.viewport(P.copy(ee).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,j,oe,ne){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,j,oe,ne),Xe.scissor(H.copy(be).multiplyScalar(Se).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Xe.setScissorTest(Me=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){je=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,oe=!0){let ne=0;if(w){let K=!1;if(re!==null){const Ne=re.texture.format;K=x.has(Ne)}if(K){const Ne=re.texture.type,Be=v.has(Ne),De=He.getClearColor(),Ve=He.getClearAlpha(),We=De.r,rt=De.g,st=De.b;Be?(C[0]=We,C[1]=rt,C[2]=st,C[3]=Ve,k.clearBufferuiv(k.COLOR,0,C)):(N[0]=We,N[1]=rt,N[2]=st,N[3]=Ve,k.clearBufferiv(k.COLOR,0,N))}else ne|=k.COLOR_BUFFER_BIT}j&&(ne|=k.DEPTH_BUFFER_BIT),oe&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),He.dispose(),et.dispose(),Ee.dispose(),b.dispose(),me.dispose(),Le.dispose(),Re.dispose(),Ie.dispose(),we.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Pr),pe.removeEventListener("sessionend",sl),Wi.stop()};function Ge(w){w.preventDefault(),f0("WebGLRenderer: Context Lost."),ce=!0}function nt(){f0("WebGLRenderer: Context Restored."),ce=!1;const w=O.autoReset,j=Fe.enabled,oe=Fe.autoUpdate,ne=Fe.needsUpdate,K=Fe.type;Te(),O.autoReset=w,Fe.enabled=j,Fe.autoUpdate=oe,Fe.needsUpdate=ne,Fe.type=K}function Ut(w){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){const j=w.target;j.removeEventListener("dispose",Tt),pi(j)}function pi(w){_n(w),b.remove(w)}function _n(w){const j=b.get(w).programs;j!==void 0&&(j.forEach(function(oe){we.releaseProgram(oe)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,oe,ne,K,Ne){j===null&&(j=Ot);const Be=K.isMesh&&K.matrixWorld.determinant()<0,De=ol(w,j,oe,ne,K);Xe.setMaterial(ne,Be);let Ve=oe.index,We=1;if(ne.wireframe===!0){if(Ve=fe.getWireframeAttribute(oe),Ve===void 0)return;We=2}const rt=oe.drawRange,st=oe.attributes.position;let ze=rt.start*We,wt=(rt.start+rt.count)*We;Ne!==null&&(ze=Math.max(ze,Ne.start*We),wt=Math.min(wt,(Ne.start+Ne.count)*We)),Ve!==null?(ze=Math.max(ze,0),wt=Math.min(wt,Ve.count)):st!=null&&(ze=Math.max(ze,0),wt=Math.min(wt,st.count));const Zt=wt-ze;if(Zt<0||Zt===1/0)return;Re.setup(K,ne,De,oe,Ve);let Vt,Dt=lt;if(Ve!==null&&(Vt=ve.get(Ve),Dt=W,Dt.setIndex(Vt)),K.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*bt()),Dt.setMode(k.LINES)):Dt.setMode(k.TRIANGLES);else if(K.isLine){let an=ne.linewidth;an===void 0&&(an=1),Xe.setLineWidth(an*bt()),K.isLineSegments?Dt.setMode(k.LINES):K.isLineLoop?Dt.setMode(k.LINE_LOOP):Dt.setMode(k.LINE_STRIP)}else K.isPoints?Dt.setMode(k.POINTS):K.isSprite&&Dt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ru("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const an=K._multiDrawStarts,qe=K._multiDrawCounts,Xt=K._multiDrawCount,_t=Ve?ve.get(Ve).bytesPerElement:1,In=b.get(ne).currentProgram.getUniforms();for(let Fn=0;Fn<Xt;Fn++)In.setValue(k,"_gl_DrawID",Fn),Dt.render(an[Fn]/_t,qe[Fn])}else if(K.isInstancedMesh)Dt.renderInstances(ze,Zt,K.count);else if(oe.isInstancedBufferGeometry){const an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,qe=Math.min(oe.instanceCount,an);Dt.renderInstances(ze,Zt,qe)}else Dt.render(ze,Zt)};function dn(w,j,oe){w.transparent===!0&&w.side===ma&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,Ai(w,j,oe),w.side=rr,w.needsUpdate=!0,Ai(w,j,oe),w.side=ma):Ai(w,j,oe)}this.compile=function(w,j,oe=null){oe===null&&(oe=w),I=Ee.get(oe),I.init(j),B.push(I),oe.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),w!==oe&&w.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const ne=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const De=Ne[Be];dn(De,oe,K),ne.add(De)}else dn(Ne,oe,K),ne.add(Ne)}),I=B.pop(),ne},this.compileAsync=function(w,j,oe=null){const ne=this.compile(w,j,oe);return new Promise(K=>{function Ne(){if(ne.forEach(function(Be){b.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){K(w);return}setTimeout(Ne,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let vn=null;function Aa(w){vn&&vn(w)}function Pr(){Wi.stop()}function sl(){Wi.start()}const Wi=new ex;Wi.setAnimationLoop(Aa),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(w){vn=w,pe.setAnimationLoop(w),w===null?Wi.stop():Wi.start()},pe.addEventListener("sessionstart",Pr),pe.addEventListener("sessionend",sl),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ce===!0)return;const oe=pe.enabled===!0&&pe.isPresenting===!0,ne=T!==null&&(re===null||oe)&&T.begin(D,re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(j),j=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,j,re),I=Ee.get(w,B.length),I.init(j),B.push(I),Jt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Je.setFromProjectionMatrix(Jt,Bi,j.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),U=et.get(w,F.length),U.init(),F.push(U),pe.enabled===!0&&pe.isPresenting===!0){const Be=D.xr.getDepthSensingMesh();Be!==null&&Ir(Be,j,-1/0,D.sortObjects)}Ir(w,j,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Ue,je),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&He.addToRenderList(U,w),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const K=I.state.shadowsArray;if(Fe.render(K,w,j),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&T.hasRenderPass())===!1){const Be=U.opaque,De=U.transmissive;if(I.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(De.length>0)for(let We=0,rt=Ve.length;We<rt;We++){const st=Ve[We];Fr(Be,De,w,st)}ot&&He.render(w);for(let We=0,rt=Ve.length;We<rt;We++){const st=Ve[We];Ra(U,w,st,st.viewport)}}else De.length>0&&Fr(Be,De,w,j),ot&&He.render(w),Ra(U,w,j)}re!==null&&$===0&&(q.updateMultisampleRenderTarget(re),q.updateRenderTargetMipmap(re)),ne&&T.end(D),w.isScene===!0&&w.onAfterRender(D,w,j),Re.resetDefaultState(),de=-1,J=null,B.pop(),B.length>0?(I=B[B.length-1],Ke===!0&&Ae.setGlobalState(D.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function Ir(w,j,oe,ne){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ne&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Jt);const Be=Le.update(w),De=w.material;De.visible&&U.push(w,Be,De,oe,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Be=Le.update(w),De=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),yt.copy(Be.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Jt)),Array.isArray(De)){const Ve=Be.groups;for(let We=0,rt=Ve.length;We<rt;We++){const st=Ve[We],ze=De[st.materialIndex];ze&&ze.visible&&U.push(w,Be,ze,oe,yt.z,st)}}else De.visible&&U.push(w,Be,De,oe,yt.z,null)}}const Ne=w.children;for(let Be=0,De=Ne.length;Be<De;Be++)Ir(Ne[Be],j,oe,ne)}function Ra(w,j,oe,ne){const{opaque:K,transmissive:Ne,transparent:Be}=w;I.setupLightsView(oe),Ke===!0&&Ae.setGlobalState(D.clippingPlanes,oe),ne&&Xe.viewport(P.copy(ne)),K.length>0&&mi(K,j,oe),Ne.length>0&&mi(Ne,j,oe),Be.length>0&&mi(Be,j,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Fr(w,j,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:ze?ya:fi,minFilter:Nr,samples:Math.max(4,Ct.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ne.id],Be=ne.viewport||P;Ne.setSize(Be.z*D.transmissionResolutionScale,Be.w*D.transmissionResolutionScale);const De=D.getRenderTarget(),Ve=D.getActiveCubeFace(),We=D.getActiveMipmapLevel();D.setRenderTarget(Ne),D.getClearColor(_e),L=D.getClearAlpha(),L<1&&D.setClearColor(16777215,.5),D.clear(),ot&&He.render(oe);const rt=D.toneMapping;D.toneMapping=zi;const st=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Ke===!0&&Ae.setGlobalState(D.clippingPlanes,ne),mi(w,oe,ne),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let wt=0,Zt=j.length;wt<Zt;wt++){const Vt=j[wt],{object:Dt,geometry:an,material:qe,group:Xt}=Vt;if(qe.side===ma&&Dt.layers.test(ne.layers)){const _t=qe.side;qe.side=Xn,qe.needsUpdate=!0,qi(Dt,oe,ne,an,qe,Xt),qe.side=_t,qe.needsUpdate=!0,ze=!0}}ze===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}D.setRenderTarget(De,Ve,We),D.setClearColor(_e,L),st!==void 0&&(ne.viewport=st),D.toneMapping=rt}function mi(w,j,oe){const ne=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ne=w.length;K<Ne;K++){const Be=w[K],{object:De,geometry:Ve,group:We}=Be;let rt=Be.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),De.layers.test(oe.layers)&&qi(De,j,oe,Ve,rt,We)}}function qi(w,j,oe,ne,K,Ne){w.onBeforeRender(D,j,oe,ne,K,Ne),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(D,j,oe,ne,w,Ne),K.transparent===!0&&K.side===ma&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,D.renderBufferDirect(oe,j,ne,K,w,Ne),K.side=rr,K.needsUpdate=!0,D.renderBufferDirect(oe,j,ne,K,w,Ne),K.side=ma):D.renderBufferDirect(oe,j,ne,K,w,Ne),w.onAfterRender(D,j,oe,ne,K,Ne)}function Ai(w,j,oe){j.isScene!==!0&&(j=Ot);const ne=b.get(w),K=I.state.lights,Ne=I.state.shadowsArray,Be=K.state.version,De=we.getParameters(w,K.state,Ne,j,oe),Ve=we.getProgramCacheKey(De);let We=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=me.get(w.envMap||ne.environment,rt),ne.envMapRotation=ne.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Tt),We=new Map,ne.programs=We);let st=We.get(Ve);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Be)return nn(w,De),st}else De.uniforms=we.getUniforms(w),w.onBeforeCompile(De,D),st=we.acquireProgram(De,Ve),We.set(Ve,st),ne.uniforms=De.uniforms;const ze=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),nn(w,De),ne.needsLights=Yi(w),ne.lightsStateVersion=Be,ne.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function ji(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Jc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function nn(w,j){const oe=b.get(w);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function ol(w,j,oe,ne,K){j.isScene!==!0&&(j=Ot),q.resetTextureUnits();const Ne=j.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,De=re===null?D.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ps,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,We=me.get(ne.envMap||Be,Ve),rt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,Zt=!!oe.morphAttributes.color;let Vt=zi;ne.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Vt=D.toneMapping);const Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=Dt!==void 0?Dt.length:0,qe=b.get(ne),Xt=I.state.lights;if(Ke===!0&&($e===!0||w!==J)){const rn=w===J&&ne.id===de;Ae.setState(ne,w,rn)}let _t=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xt.state.version||qe.outputColorSpace!==De||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==We||ne.fog===!0&&qe.fog!==Ne||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==st||qe.morphTargets!==ze||qe.morphNormals!==wt||qe.morphColors!==Zt||qe.toneMapping!==Vt||qe.morphTargetsCount!==an)&&(_t=!0):(_t=!0,qe.__version=ne.version);let In=qe.currentProgram;_t===!0&&(In=Ai(ne,j,K));let Fn=!1,Bn=!1,Zi=!1;const Lt=In.getUniforms(),qt=qe.uniforms;if(Xe.useProgram(In.program)&&(Fn=!0,Bn=!0,Zi=!0),ne.id!==de&&(de=ne.id,Bn=!0),Fn||J!==w){Xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(k,"projectionMatrix",w.projectionMatrix),Lt.setValue(k,"viewMatrix",w.matrixWorldInverse);const gi=Lt.map.cameraPosition;gi!==void 0&&gi.setValue(k,pt.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Bn=!0,Zi=!0)}if(qe.needsLights&&(Xt.state.directionalShadowMap.length>0&&Lt.setValue(k,"directionalShadowMap",Xt.state.directionalShadowMap,q),Xt.state.spotShadowMap.length>0&&Lt.setValue(k,"spotShadowMap",Xt.state.spotShadowMap,q),Xt.state.pointShadowMap.length>0&&Lt.setValue(k,"pointShadowMap",Xt.state.pointShadowMap,q)),K.isSkinnedMesh){Lt.setOptional(k,K,"bindMatrix"),Lt.setOptional(k,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Lt.setValue(k,"boneTexture",rn.boneTexture,q))}K.isBatchedMesh&&(Lt.setOptional(k,K,"batchingTexture"),Lt.setValue(k,"batchingTexture",K._matricesTexture,q),Lt.setOptional(k,K,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",K._indirectTexture,q),Lt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",K._colorsTexture,q));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Pe.update(K,oe,In),(Bn||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Lt.setValue(k,"receiveShadow",K.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(qt.envMapIntensity.value=j.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=dC()),Bn&&(Lt.setValue(k,"toneMappingExposure",D.toneMappingExposure),qe.needsLights&&ll(qt,Zi),Ne&&ne.fog===!0&&Ze.refreshFogUniforms(qt,Ne),Ze.refreshMaterialUniforms(qt,ne,Se,ue,I.state.transmissionRenderTarget[w.id]),Jc.upload(k,ji(qe),qt,q)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jc.upload(k,ji(qe),qt,q),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(k,"center",K.center),Lt.setValue(k,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(k,"normalMatrix",K.normalMatrix),Lt.setValue(k,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const rn=ne.uniformsGroups;for(let gi=0,Ci=rn.length;gi<Ci;gi++){const ul=rn[gi];Ie.update(ul,In),Ie.bind(ul,In)}}return In}function ll(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Yi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(w,j,oe){const ne=b.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=j,b.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const oe=b.get(w);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const Ca=k.createFramebuffer();this.setRenderTarget=function(w,j=0,oe=0){re=w,V=j,$=oe;let ne=null,K=!1,Ne=!1;if(w){const De=b.get(w);if(De.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(k.FRAMEBUFFER,De.__webglFramebuffer),P.copy(w.viewport),H.copy(w.scissor),le=w.scissorTest,Xe.viewport(P),Xe.scissor(H),Xe.setScissorTest(le),de=-1;return}else if(De.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(De.__hasExternalTextures)q.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(De.__boundDepthTexture!==rt){if(rt!==null&&b.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const We=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[j])?ne=We[j][oe]:ne=We[j],K=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?ne=b.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[oe]:ne=We,P.copy(w.viewport),H.copy(w.scissor),le=w.scissorTest}else P.copy(ee).multiplyScalar(Se).floor(),H.copy(be).multiplyScalar(Se).floor(),le=Me;if(oe!==0&&(ne=Ca),Xe.bindFramebuffer(k.FRAMEBUFFER,ne)&&Xe.drawBuffers(w,ne),Xe.viewport(P),Xe.scissor(H),Xe.setScissorTest(le),K){const De=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,oe)}else if(Ne){const De=j;for(let Ve=0;Ve<w.textures.length;Ve++){const We=b.get(w.textures[Ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ve,We.__webglTexture,oe,De)}}else if(w!==null&&oe!==0){const De=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(w,j,oe,ne,K,Ne,Be,De=0){if(!(w&&w.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Xe.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const We=w.textures[De],rt=We.format,st=We.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De),!Ct.textureFormatReadable(rt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(st)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ne&&oe>=0&&oe<=w.height-K&&k.readPixels(j,oe,ne,K,Ce.convert(rt),Ce.convert(st),Ne)}finally{const We=re!==null?b.get(re).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,j,oe,ne,K,Ne,Be,De=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(j>=0&&j<=w.width-ne&&oe>=0&&oe<=w.height-K){Xe.bindFramebuffer(k.FRAMEBUFFER,Ve);const We=w.textures[De],rt=We.format,st=We.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De),!Ct.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),k.readPixels(j,oe,ne,K,Ce.convert(rt),Ce.convert(st),0);const wt=re!==null?b.get(re).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,wt);const Zt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await PE(k,Zt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.deleteBuffer(ze),k.deleteSync(Zt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,oe=0){const ne=Math.pow(2,-oe),K=Math.floor(w.image.width*ne),Ne=Math.floor(w.image.height*ne),Be=j!==null?j.x:0,De=j!==null?j.y:0;q.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Be,De,K,Ne),Xe.unbindTexture()};const pu=k.createFramebuffer(),cl=k.createFramebuffer();this.copyTextureToTexture=function(w,j,oe=null,ne=null,K=0,Ne=0){let Be,De,Ve,We,rt,st,ze,wt,Zt;const Vt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(oe!==null)Be=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,rt=oe.min.y,st=oe.isBox3?oe.min.z:0;else{const qt=Math.pow(2,-K);Be=Math.floor(Vt.width*qt),De=Math.floor(Vt.height*qt),w.isDataArrayTexture?Ve=Vt.depth:w.isData3DTexture?Ve=Math.floor(Vt.depth*qt):Ve=1,We=0,rt=0,st=0}ne!==null?(ze=ne.x,wt=ne.y,Zt=ne.z):(ze=0,wt=0,Zt=0);const Dt=Ce.convert(j.format),an=Ce.convert(j.type);let qe;j.isData3DTexture?(q.setTexture3D(j,0),qe=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),qe=k.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),qe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Xt=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),In=k.getParameter(k.UNPACK_SKIP_PIXELS),Fn=k.getParameter(k.UNPACK_SKIP_ROWS),Bn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,We),k.pixelStorei(k.UNPACK_SKIP_ROWS,rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,st);const Zi=w.isDataArrayTexture||w.isData3DTexture,Lt=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const qt=b.get(w),Ri=b.get(j),rn=b.get(qt.__renderTarget),gi=b.get(Ri.__renderTarget);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ci=0;Ci<Ve;Ci++)Zi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(w).__webglTexture,K,st+Ci),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(j).__webglTexture,Ne,Zt+Ci)),k.blitFramebuffer(We,rt,Be,De,ze,wt,Be,De,k.DEPTH_BUFFER_BIT,k.NEAREST);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||b.has(w)){const qt=b.get(w),Ri=b.get(j);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,pu),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,cl);for(let rn=0;rn<Ve;rn++)Zi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,K,st+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,K),Lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ri.__webglTexture,Ne,Zt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ri.__webglTexture,Ne),K!==0?k.blitFramebuffer(We,rt,Be,De,ze,wt,Be,De,k.COLOR_BUFFER_BIT,k.NEAREST):Lt?k.copyTexSubImage3D(qe,Ne,ze,wt,Zt+rn,We,rt,Be,De):k.copyTexSubImage2D(qe,Ne,ze,wt,We,rt,Be,De);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Lt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(qe,Ne,ze,wt,Zt,Be,De,Ve,Dt,an,Vt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(qe,Ne,ze,wt,Zt,Be,De,Ve,Dt,Vt.data):k.texSubImage3D(qe,Ne,ze,wt,Zt,Be,De,Ve,Dt,an,Vt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,ze,wt,Be,De,Dt,an,Vt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,ze,wt,Vt.width,Vt.height,Dt,Vt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,ze,wt,Be,De,Dt,an,Vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,In),k.pixelStorei(k.UNPACK_SKIP_ROWS,Fn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Bn),Ne===0&&j.generateMipmaps&&k.generateMipmap(qe),Xe.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){V=0,$=0,re=null,Xe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const pC=160,mC=70,av=1.6,gC=()=>{const s=he.useRef(null);return he.useEffect(()=>{const e=s.current;if(!e)return;const i=window.innerWidth<768,r=i?mC:pC,l=new QE,c=new ui(60,e.clientWidth/e.clientHeight,.1,100);c.position.z=5;const f=new hC({antialias:!0,alpha:!0});f.setSize(e.clientWidth,e.clientHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(f.domElement);const p=[new xt("#b8456e"),new xt("#9d7fb8"),new xt("#e8a090"),new xt("#d4a0b8"),new xt("#ffffff")],m=[],h=new Float32Array(r*3),_=new Float32Array(r*3);for(let F=0;F<r;F++){const B=(Math.random()-.5)*9,T=(Math.random()-.5)*6,D=(Math.random()-.5)*4;m.push({x:B,y:T,z:D,bx:B,by:T,bz:D,vx:(Math.random()-.5)*.004,vy:(Math.random()-.5)*.004,vz:(Math.random()-.5)*.002});const ce=p[Math.floor(Math.random()*p.length)];_[F*3]=ce.r,_[F*3+1]=ce.g,_[F*3+2]=ce.b,h[F*3]=B,h[F*3+1]=T,h[F*3+2]=D}const S=new ei;S.setAttribute("position",new di(h,3)),S.setAttribute("color",new di(_,3));const g=new Yv({size:i?.045:.035,vertexColors:!0,transparent:!0,opacity:.85,blending:tu,depthWrite:!1});l.add(new cb(S,g));const M=new ei,y=new jv({transparent:!0,opacity:.12,color:12076398,blending:tu,depthWrite:!1}),A=new lb(M,y);l.add(A);const x={x:0,y:0},v=F=>{const B=e.getBoundingClientRect();x.x=((F.clientX-B.left)/B.width-.5)*2,x.y=-((F.clientY-B.top)/B.height-.5)*2};e.addEventListener("mousemove",v);const C=()=>{const F=e.clientWidth,B=e.clientHeight;c.aspect=F/B,c.updateProjectionMatrix(),f.setSize(F,B)};window.addEventListener("resize",C);let N=!0,U=0;const I=()=>{if(!N)return;requestAnimationFrame(I),U++;const F=S.getAttribute("position");for(let B=0;B<r;B++){const T=m[B];T.x+=T.vx,T.y+=T.vy,T.z+=T.vz,T.vx+=(T.bx-T.x)*8e-4,T.vy+=(T.by-T.y)*8e-4,T.vz+=(T.bz-T.z)*4e-4,T.x+=x.x*.003,T.y+=x.y*.003,T.vx*=.992,T.vy*=.992,T.vz*=.992,F.array[B*3]=T.x,F.array[B*3+1]=T.y,F.array[B*3+2]=T.z}if(F.needsUpdate=!0,U%3===0){const B=[];for(let T=0;T<r;T++)for(let D=T+1;D<r;D++){const ce=m[T].x-m[D].x,V=m[T].y-m[D].y,$=m[T].z-m[D].z;ce*ce+V*V+$*$<av*av&&B.push(m[T].x,m[T].y,m[T].z,m[D].x,m[D].y,m[D].z)}M.setAttribute("position",new hi(B,3))}l.rotation.y=Math.sin(Date.now()*8e-5)*.12,l.rotation.x=Math.cos(Date.now()*6e-5)*.05,f.render(l,c)};return requestAnimationFrame(I),()=>{N=!1,e.removeEventListener("mousemove",v),window.removeEventListener("resize",C),f.dispose(),S.dispose(),g.dispose(),M.dispose(),y.dispose(),e.contains(f.domElement)&&e.removeChild(f.domElement)}},[]),G.jsx("div",{ref:s,className:"hero-canvas"})},_C=({words:s,typeSpeed:e=80,deleteSpeed:i=40,pause:r=2200,className:l})=>{const[c,f]=he.useState(""),[p,m]=he.useState(0),[h,_]=he.useState(!1);return he.useEffect(()=>{const S=s[p],g=setTimeout(()=>{h?(f(S.slice(0,c.length-1)),c.length-1===0&&(_(!1),m(M=>(M+1)%s.length))):(f(S.slice(0,c.length+1)),c.length+1===S.length&&setTimeout(()=>_(!0),r))},h?i:e);return()=>clearTimeout(g)},[c,h,p,s,e,i,r]),G.jsxs("span",{className:l,children:[c,G.jsx("span",{className:"typing-cursor","aria-hidden":"true"})]})},vC="/assets/avatar-C2VzNt0k.png",xC=["Software Architect","AI Engineer","Full Stack Developer","Mobile App Developer"],SC=({scrollTo:s})=>G.jsxs("section",{className:"section section--home hero hero--3d",id:"home","aria-labelledby":"hero-heading",children:[G.jsx(gC,{}),G.jsxs("div",{className:"container hero__centered",children:[G.jsx("img",{src:vC,alt:"Taliba Sadiq",className:"hero__avatar",draggable:!1}),G.jsx("p",{className:"hero__eyebrow hero__eyebrow--glow",children:"Available for projects"}),G.jsx("h1",{id:"hero-heading",className:"hero__title hero__title--3d",children:"Taliba Sadiq"}),G.jsx("p",{className:"hero__typing-wrap",children:G.jsx(_C,{words:xC,className:"hero__typing"})}),G.jsx("p",{className:"hero__intro hero__intro--3d",children:"I build software that holds up under real use: scalable systems, intelligent features, and code that keeps working as your product grows. Not just launch-day demos, but lasting solutions."}),G.jsxs("div",{className:"hero__actions hero__actions--center",children:[G.jsx("button",{type:"button",className:"btn btn--primary btn--glow",onClick:()=>s("work","/projects"),children:"See my work"}),G.jsx("button",{type:"button",className:"btn btn--ghost btn--ghost-dark",onClick:()=>s("contact","/contact"),children:"Let's talk"})]})]})]}),yC=[{title:"A product outgrowing its structure",body:"The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds."},{title:"A codebase that's becoming fragile",body:"People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick."},{title:"A prototype that needs to grow up",body:"The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features."},{title:"AI that needs to actually work",body:"Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable."}],MC=()=>G.jsx("section",{className:"section section--philosophy reveal",id:"philosophy","aria-labelledby":"philosophy-heading",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"philosophy__head",children:[G.jsx("span",{className:"section__label",children:"When I get involved"}),G.jsx("h2",{id:"philosophy-heading",className:"philosophy__title",children:"I focus on what happens after launch"}),G.jsx("p",{className:"philosophy__lead",children:"First demos are easy. I focus on the hard part: more features, team changes, and someone new opening the repo. Good structure is what keeps you from rewriting everything twice."})]}),G.jsx("div",{className:"pillars__grid",children:yC.map((s,e)=>G.jsxs("div",{className:"pillar-card reveal reveal--delay-1",children:[G.jsx("p",{className:"pillar-card__num",children:String(e+1).padStart(2,"0")}),G.jsx("h3",{className:"pillar-card__title",children:s.title}),G.jsx("p",{children:s.body})]},s.title))}),G.jsxs("div",{className:"philosophy__closing reveal",children:[G.jsxs("p",{className:"philosophy__closing-text",children:["What I bring is ",G.jsx("strong",{children:"clarity"}),". Clear structure, clear decisions, and systems that are easier to build on as they grow."]}),G.jsxs("div",{className:"philosophy__traits",children:[G.jsx("span",{className:"philosophy__trait",children:"Clear Communicator"}),G.jsx("span",{className:"philosophy__trait",children:"Detail Oriented"}),G.jsx("span",{className:"philosophy__trait",children:"Solution Oriented"})]})]})]})}),EC=[{quote:"She's great and really helpful.",name:"Steve C.",role:"Founder, Zenius"},{quote:"Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",name:"A. M.",role:"CTO, B2B SaaS"},{quote:"Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",name:"R. K.",role:"Founder, edtech"}],bC=({scrollTo:s})=>G.jsx("section",{className:"section section--reviews section--testimonials reveal",id:"reviews","aria-labelledby":"reviews-heading",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"testimonials__head",children:[G.jsx("h2",{id:"reviews-heading",className:"testimonials__title",children:"Kind words from collaborators"}),G.jsx("p",{className:"testimonials__lead",children:"What founders and teams say about working together."})]}),G.jsx("ul",{className:"testimonials__list",role:"list",children:EC.map(e=>G.jsxs("li",{className:"testimonial-item",children:[G.jsx("blockquote",{className:"testimonial-item__quote",children:G.jsx("p",{children:e.quote})}),G.jsxs("footer",{className:"testimonial-item__cite",children:[G.jsx("span",{className:"testimonial-item__name",children:e.name}),G.jsx("span",{className:"testimonial-item__role",children:e.role})]})]},`${e.name}-${e.role}`))}),G.jsx("div",{className:"testimonials__cta",children:G.jsx("button",{type:"button",className:"btn btn--primary",onClick:()=>s("contact","/contact"),children:"Start a conversation"})})]})}),TC=[{title:"Architecture & Scalable Systems",desc:"Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",tags:["System Design","Scalability","Refactoring","API Design","Microservices"]},{title:"Full-Stack Web & Mobile",desc:"End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",tags:["React","Next.js","Node.js","React Native","TypeScript","PostgreSQL"]},{title:"AI Integration & Automation",desc:"GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",tags:["OpenAI API","Claude","Prompt Engineering","AI Agents","Automation"]}],AC=()=>G.jsx("section",{className:"section section--services reveal",id:"services","aria-labelledby":"services-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"What I do"}),G.jsx("h2",{id:"services-heading",className:"section__heading",children:"Three things I do really well"}),G.jsx("p",{className:"section__lead",children:"Architecture, full-stack development, and AI integration. I bring clarity to complex problems and build systems that are easier to grow."}),G.jsx("div",{className:"services__grid",children:TC.map(s=>G.jsxs("div",{className:"service-card reveal reveal--delay-1",children:[G.jsx("h3",{className:"service-card__title",children:s.title}),G.jsx("p",{className:"service-card__desc",children:s.desc}),G.jsx("div",{className:"service-card__tags",children:s.tags.map(e=>G.jsx("span",{className:"service-card__tag",children:e},e))})]},s.title))})]})}),ws={ai:["OpenAI / GPT API","Claude / Anthropic","Gemini","Generative AI","Prompt Engineering","AI Agents","Chatbot Development","AI Model Integration","Machine Learning","Automation Workflows"],frontend:["React","Next.js","Angular","Vue.js","Nuxt.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","SASS / SCSS","CSS Grid","Responsive Design","Figma","Webflow","Elementor"],backend:["Node.js","Express","REST APIs","GraphQL","FastAPI","Laravel","PHP","Python","API Integration","Payment Gateway (Stripe)","Twilio API","Authentication & Authorization","WebSockets"],mobile:["React Native","Hybrid Apps","iOS","Android","Offline Functionality","In-App Purchases","Mobile UI/UX"],cloud:["AWS","Google Cloud","Microsoft Azure","Docker","Vercel","Netlify","Firebase","Supabase","CI/CD","GitHub Actions","Website Security"],databases:["PostgreSQL","MongoDB","MySQL","Microsoft SQL Server","Firebase Realtime DB","Prisma","Mongoose","Database Modeling"]},RC=()=>G.jsx("section",{className:"section section--skills skills-showcase reveal",id:"skills","aria-labelledby":"skills-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"Toolkit"}),G.jsx("h2",{id:"skills-heading",className:"skills-showcase__title",children:"Technologies I work with"}),G.jsx("p",{className:"skills-showcase__lead",children:"AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven't listed it yet. Ask me."}),G.jsxs("div",{className:"skills-showcase__grid",children:[G.jsxs("div",{className:"skill-category skill-category--highlight",children:[G.jsx("h3",{className:"skill-category__title",children:"AI & Intelligence"}),G.jsx("div",{className:"skill-category__tags",children:ws.ai.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Frontend"}),G.jsx("div",{className:"skill-category__tags",children:ws.frontend.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Backend & APIs"}),G.jsx("div",{className:"skill-category__tags",children:ws.backend.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Mobile"}),G.jsx("div",{className:"skill-category__tags",children:ws.mobile.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Cloud & DevOps"}),G.jsx("div",{className:"skill-category__tags",children:ws.cloud.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Databases"}),G.jsx("div",{className:"skill-category__tags",children:ws.databases.map(s=>G.jsx("span",{className:"skill-tag",children:s},s))})]})]})]})}),CC="/assets/zenius-CLULWNXe.png",wC="/assets/news-explorer-DyPTQ1wK.png",DC="/assets/tmi-worldwide-BRvVfm9i.png",NC="/assets/time-keeper-C6TL0-3m.png",UC="/assets/portfolio-84NHyYwe.png",LC="/assets/expense-tracker-mvEoxdIL.png",OC="/assets/girly-blog-BlvHH-Oe.png",PC=[{title:"Zenius",types:["AI & product","Full-stack web"],description:"Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",link:"https://zenius.ia.br",screenshot:CC,tech:["React","TypeScript","AI / LLM integration","Node.js","REST & real-time APIs","Voice / video","Security & privacy","Responsive UI","Performance","Accessibility"]},{title:"News Explorer",types:["Full-stack web","APIs & auth"],description:"Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",link:"https://jazzmine-flora.github.io/news-explorer/",screenshot:wC,tech:["React","Node.js","Express","MongoDB","REST","Auth","News API"]},{title:"TMI Worldwide",types:["Design refresh","Marketing site"],description:"Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",link:"https://tmi-world-welcome.lovable.app/",screenshot:DC,tech:["React","Vite","SPA","Responsive UI","Marketing / brand"]},{title:"Time Keeper",types:["Web app","Product UX"],description:"Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",link:"https://time-keeper-crafted.lovable.app/",screenshot:NC,tech:["React","Vite","SPA","Responsive UI","Product UI"]},{title:"My Portfolio",types:["Portfolio site","Design & deploy"],description:"Single-page site: React, TypeScript, Vite, and HashRouter for GitHub Pages. Copy and styles hand-tuned.",link:"https://jazzmine-flora.github.io",screenshot:UC,tech:["React","TypeScript","Vite","React Router","Three.js","React Icons","GitHub Actions"]},{title:"Expense Tracker",types:["Web app","Dashboards & data"],description:"Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",link:"https://jazzmine-flora.github.io/expense-tracker/",screenshot:LC,tech:["React","TypeScript","Node.js","Express","MongoDB","Charts"]},{title:"Girls Blog",types:["Full-stack web","Blog & CMS"],description:"Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",link:"https://girly-blogspot.vercel.app/",screenshot:OC,tech:["React","Node.js","Express","MongoDB","Auth"]}],IC=()=>G.jsx("section",{className:"section section--work projects-page projects-page--premium reveal",id:"work","aria-labelledby":"work-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"Portfolio"}),G.jsx("h2",{id:"work-heading",className:"projects__title",children:"Selected work"}),G.jsx("p",{className:"projects__lead",children:"Full-stack products, AI features, and scalable systems."}),G.jsx("div",{className:"projects__grid",children:PC.map(s=>G.jsxs("article",{className:"project-card",children:[s.screenshot?G.jsx("div",{className:"project-card__thumb-wrap",children:G.jsx("img",{src:s.screenshot,alt:`${s.title} site preview`,className:"project-card__thumb",loading:"lazy",decoding:"async"})}):G.jsx("div",{className:"project-card__thumb-wrap project-card__thumb-wrap--placeholder","aria-hidden":!0,children:G.jsx("span",{className:"project-card__thumb-placeholder",children:"Preview unavailable"})}),G.jsxs("div",{className:"project-card__body",children:[G.jsx("ul",{className:"project-card__type-list",role:"list","aria-label":"Project types",children:s.types.map((e,i)=>G.jsx("li",{className:`project-card__type-chip${i===0?" project-card__type-chip--primary":""}`,children:e},`${s.title}-type-${i}`))}),G.jsxs("div",{className:"project-card__about",children:[G.jsx("h3",{className:"project-card__title",children:s.title}),G.jsx("p",{className:"project-card__desc",children:s.description})]}),G.jsx("div",{className:"project-card__tech",children:s.tech.map(e=>G.jsx("span",{className:"project-card__tag",children:e},e))})]}),G.jsxs("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"project-card__link",children:["View project ",G.jsx("span",{className:"project-card__arrow","aria-hidden":!0,children:"→"})]})]},s.title))})]})}),FC=()=>{const{scrollTo:s}=$M();return G.jsxs("div",{className:"homepage homepage--studio page-content",children:[G.jsx(SC,{scrollTo:s}),G.jsx(AC,{}),G.jsx(MC,{}),G.jsx(IC,{}),G.jsx(RC,{}),G.jsx(bC,{scrollTo:s}),G.jsx(KM,{})]})},BC=({className:s,title:e})=>G.jsxs("svg",{className:s,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?G.jsx("title",{children:e}):null,G.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z"})]}),zC=({className:s,title:e})=>G.jsxs("svg",{className:s,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?G.jsx("title",{children:e}):null,G.jsx("path",{d:"M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"})]}),HC=()=>G.jsx("footer",{className:"footer",children:G.jsxs("div",{className:"footer__inner container",children:[G.jsxs("div",{className:"footer__social","aria-label":"Social links",children:[G.jsxs("a",{href:"https://www.linkedin.com/in/taliba-sadiq",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"LinkedIn",children:[G.jsx(zC,{className:"footer__icon",title:"LinkedIn"}),G.jsx("span",{children:"LinkedIn"})]}),G.jsxs("a",{href:"https://github.com/Jazzmine-Flora",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"GitHub",children:[G.jsx(BC,{className:"footer__icon",title:"GitHub"}),G.jsx("span",{children:"GitHub"})]})]}),G.jsxs("p",{className:"footer__copy",children:["Copyright © ",new Date().getFullYear()," Taliba Sadiq. All rights reserved."]})]})});function GC(){he.useEffect(()=>{const s=f=>{f.preventDefault()},e=f=>{f.preventDefault()},i=f=>{f.preventDefault()},r=f=>{const p=f.target;((p==null?void 0:p.tagName)==="IMG"||p!=null&&p.closest("img"))&&f.preventDefault()},l=f=>{f.preventDefault()},c=f=>{const p=f.ctrlKey||f.metaKey;p&&(f.key==="s"||f.key==="S")&&f.preventDefault(),p&&(f.key==="c"||f.key==="C")&&f.preventDefault(),p&&(f.key==="x"||f.key==="X")&&f.preventDefault(),p&&(f.key==="a"||f.key==="A")&&f.preventDefault(),p&&(f.key==="u"||f.key==="U")&&f.preventDefault()};return document.addEventListener("contextmenu",s),document.addEventListener("copy",e,!0),document.addEventListener("cut",i,!0),document.addEventListener("dragstart",r,!0),document.addEventListener("selectstart",l,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("contextmenu",s),document.removeEventListener("copy",e,!0),document.removeEventListener("cut",i,!0),document.removeEventListener("dragstart",r,!0),document.removeEventListener("selectstart",l,!0),document.removeEventListener("keydown",c)}},[])}const VC=()=>(GC(),G.jsxs(G.Fragment,{children:[G.jsx(kM,{}),G.jsx(YM,{}),G.jsx("main",{children:G.jsx(cM,{children:G.jsx(_v,{path:"*",element:G.jsx(FC,{})})})}),G.jsx(HC,{})]})),kC=document.getElementById("root"),XC=vy.createRoot(kC);XC.render(G.jsx(fy.StrictMode,{children:G.jsx(LM,{children:G.jsx(VC,{})})}));
