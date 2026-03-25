function Nb(a,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Ub(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Hd={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Lb(){if(S_)return Ko;S_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:c}}return Ko.Fragment=e,Ko.jsx=n,Ko.jsxs=n,Ko}var b_;function Pb(){return b_||(b_=1,Hd.exports=Lb()),Hd.exports}var G=Pb(),Gd={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Ob(){if(M_)return dt;M_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function y(D,J,de){this.props=D,this.context=J,this.refs=A,this.updater=de||S}y.prototype.isReactComponent={},y.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=y.prototype;function R(D,J,de){this.props=D,this.context=J,this.refs=A,this.updater=de||S}var U=R.prototype=new v;U.constructor=R,b(U,y.prototype),U.isPureReactComponent=!0;var L=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function z(D,J,de,ye,De,Oe){return de=Oe.ref,{$$typeof:a,type:D,key:J,ref:de!==void 0?de:null,props:Oe}}function M(D,J){return z(D.type,J,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function ue(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(de){return J[de]})}var V=/\/+/g;function K(D,J){return typeof D=="object"&&D!==null&&D.key!=null?ue(""+D.key):J.toString(36)}function ie(){}function fe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ie,ie):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Q(D,J,de,ye,De){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var Z=!1;if(D===null)Z=!0;else switch(Oe){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(D.$$typeof){case a:case e:Z=!0;break;case _:return Z=D._init,Q(Z(D._payload),J,de,ye,De)}}if(Z)return De=De(D),Z=ye===""?"."+K(D,0):ye,L(De)?(de="",Z!=null&&(de=Z.replace(V,"$&/")+"/"),Q(De,J,de,"",function(Be){return Be})):De!=null&&(N(De)&&(De=M(De,de+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(V,"$&/")+"/")+Z)),J.push(De)),1;Z=0;var Me=ye===""?".":ye+":";if(L(D))for(var be=0;be<D.length;be++)ye=D[be],Oe=Me+K(ye,be),Z+=Q(ye,J,de,Oe,De);else if(be=g(D),typeof be=="function")for(D=be.call(D),be=0;!(ye=D.next()).done;)ye=ye.value,Oe=Me+K(ye,be++),Z+=Q(ye,J,de,Oe,De);else if(Oe==="object"){if(typeof D.then=="function")return Q(fe(D),J,de,ye,De);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Z}function O(D,J,de){if(D==null)return D;var ye=[],De=0;return Q(D,ye,"","",function(Oe){return J.call(de,Oe,De++)}),ye}function B(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(de){(D._status===0||D._status===-1)&&(D._status=1,D._result=de)},function(de){(D._status===0||D._status===-1)&&(D._status=2,D._result=de)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var oe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function me(){}return dt.Children={map:O,forEach:function(D,J,de){O(D,function(){J.apply(this,arguments)},de)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},dt.Component=y,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=R,dt.StrictMode=r,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,dt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},dt.cache=function(D){return function(){return D.apply(null,arguments)}},dt.cloneElement=function(D,J,de){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ye=b({},D.props),De=D.key,Oe=void 0;if(J!=null)for(Z in J.ref!==void 0&&(Oe=void 0),J.key!==void 0&&(De=""+J.key),J)!F.call(J,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&J.ref===void 0||(ye[Z]=J[Z]);var Z=arguments.length-2;if(Z===1)ye.children=de;else if(1<Z){for(var Me=Array(Z),be=0;be<Z;be++)Me[be]=arguments[be+2];ye.children=Me}return z(D.type,De,void 0,void 0,Oe,ye)},dt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},dt.createElement=function(D,J,de){var ye,De={},Oe=null;if(J!=null)for(ye in J.key!==void 0&&(Oe=""+J.key),J)F.call(J,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(De[ye]=J[ye]);var Z=arguments.length-2;if(Z===1)De.children=de;else if(1<Z){for(var Me=Array(Z),be=0;be<Z;be++)Me[be]=arguments[be+2];De.children=Me}if(D&&D.defaultProps)for(ye in Z=D.defaultProps,Z)De[ye]===void 0&&(De[ye]=Z[ye]);return z(D,Oe,void 0,void 0,null,De)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(D){return{$$typeof:p,render:D}},dt.isValidElement=N,dt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:B}},dt.memo=function(D,J){return{$$typeof:d,type:D,compare:J===void 0?null:J}},dt.startTransition=function(D){var J=P.T,de={};P.T=de;try{var ye=D(),De=P.S;De!==null&&De(de,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(me,oe)}catch(Oe){oe(Oe)}finally{P.T=J}},dt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},dt.use=function(D){return P.H.use(D)},dt.useActionState=function(D,J,de){return P.H.useActionState(D,J,de)},dt.useCallback=function(D,J){return P.H.useCallback(D,J)},dt.useContext=function(D){return P.H.useContext(D)},dt.useDebugValue=function(){},dt.useDeferredValue=function(D,J){return P.H.useDeferredValue(D,J)},dt.useEffect=function(D,J,de){var ye=P.H;if(typeof de=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(D,J)},dt.useId=function(){return P.H.useId()},dt.useImperativeHandle=function(D,J,de){return P.H.useImperativeHandle(D,J,de)},dt.useInsertionEffect=function(D,J){return P.H.useInsertionEffect(D,J)},dt.useLayoutEffect=function(D,J){return P.H.useLayoutEffect(D,J)},dt.useMemo=function(D,J){return P.H.useMemo(D,J)},dt.useOptimistic=function(D,J){return P.H.useOptimistic(D,J)},dt.useReducer=function(D,J,de){return P.H.useReducer(D,J,de)},dt.useRef=function(D){return P.H.useRef(D)},dt.useState=function(D){return P.H.useState(D)},dt.useSyncExternalStore=function(D,J,de){return P.H.useSyncExternalStore(D,J,de)},dt.useTransition=function(){return P.H.useTransition()},dt.version="19.1.0",dt}var E_;function Dp(){return E_||(E_=1,Gd.exports=Ob()),Gd.exports}var $=Dp();const ex=Ub($),tx=Nb({__proto__:null,default:ex},[$]);var Vd={exports:{}},Qo={},kd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function Ib(){return T_||(T_=1,(function(a){function e(O,B){var oe=O.length;O.push(B);e:for(;0<oe;){var me=oe-1>>>1,D=O[me];if(0<o(D,B))O[me]=B,O[oe]=D,oe=me;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],oe=O.pop();if(oe!==B){O[0]=oe;e:for(var me=0,D=O.length,J=D>>>1;me<J;){var de=2*(me+1)-1,ye=O[de],De=de+1,Oe=O[De];if(0>o(ye,oe))De<D&&0>o(Oe,ye)?(O[me]=Oe,O[De]=oe,me=De):(O[me]=ye,O[de]=oe,me=de);else if(De<D&&0>o(Oe,oe))O[me]=Oe,O[De]=oe,me=De;else break e}}return B}function o(O,B){var oe=O.sortIndex-B.sortIndex;return oe!==0?oe:O.id-B.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();a.unstable_now=function(){return f.now()-p}}var m=[],d=[],_=1,x=null,g=3,S=!1,b=!1,A=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=O)r(d),B.sortIndex=B.expirationTime,e(m,B);else break;B=n(d)}}function P(O){if(A=!1,L(O),!b)if(n(m)!==null)b=!0,F||(F=!0,K());else{var B=n(d);B!==null&&Q(P,B.startTime-O)}}var F=!1,z=-1,M=5,N=-1;function ue(){return y?!0:!(a.unstable_now()-N<M)}function V(){if(y=!1,F){var O=a.unstable_now();N=O;var B=!0;try{e:{b=!1,A&&(A=!1,R(z),z=-1),S=!0;var oe=g;try{t:{for(L(O),x=n(m);x!==null&&!(x.expirationTime>O&&ue());){var me=x.callback;if(typeof me=="function"){x.callback=null,g=x.priorityLevel;var D=me(x.expirationTime<=O);if(O=a.unstable_now(),typeof D=="function"){x.callback=D,L(O),B=!0;break t}x===n(m)&&r(m),L(O)}else r(m);x=n(m)}if(x!==null)B=!0;else{var J=n(d);J!==null&&Q(P,J.startTime-O),B=!1}}break e}finally{x=null,g=oe,S=!1}B=void 0}}finally{B?K():F=!1}}}var K;if(typeof U=="function")K=function(){U(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,fe=ie.port2;ie.port1.onmessage=V,K=function(){fe.postMessage(null)}}else K=function(){v(V,0)};function Q(O,B){z=v(function(){O(a.unstable_now())},B)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var oe=g;g=B;try{return O()}finally{g=oe}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=g;g=O;try{return B()}finally{g=oe}},a.unstable_scheduleCallback=function(O,B,oe){var me=a.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?me+oe:me):oe=me,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=oe+D,O={id:_++,callback:B,priorityLevel:O,startTime:oe,expirationTime:D,sortIndex:-1},oe>me?(O.sortIndex=oe,e(d,O),n(m)===null&&O===n(d)&&(A?(R(z),z=-1):A=!0,Q(P,oe-me))):(O.sortIndex=D,e(m,O),b||S||(b=!0,F||(F=!0,K()))),O},a.unstable_shouldYield=ue,a.unstable_wrapCallback=function(O){var B=g;return function(){var oe=g;g=B;try{return O.apply(this,arguments)}finally{g=oe}}}})(Xd)),Xd}var A_;function Fb(){return A_||(A_=1,kd.exports=Ib()),kd.exports}var Wd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Bb(){if(R_)return Un;R_=1;var a=Dp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,_)},Un.flushSync=function(m){var d=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=_,r.d.f()}},Un.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Un.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,d){return m(d)},Un.useFormState=function(m,d,_){return f.H.useFormState(m,d,_)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var w_;function nx(){if(w_)return Wd.exports;w_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wd.exports=Bb(),Wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function zb(){if(C_)return Qo;C_=1;var a=Fb(),e=Dp(),n=nx();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return p(u),t;if(h===l)return p(u),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=h;else{for(var E=!1,w=u.child;w;){if(w===s){E=!0,s=u,l=h;break}if(w===l){E=!0,l=u,s=h;break}w=w.sibling}if(!E){for(w=h.child;w;){if(w===s){E=!0,s=h,l=u;break}if(w===l){E=!0,l=h,s=u;break}w=w.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case U:return(t.displayName||"Context")+".Provider";case R:return(t._context.displayName||"Context")+".Consumer";case L:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case M:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}var Q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},me=[],D=-1;function J(t){return{current:t}}function de(t){0>D||(t.current=me[D],me[D]=null,D--)}function ye(t,i){D++,me[D]=t.current,t.current=i}var De=J(null),Oe=J(null),Z=J(null),Me=J(null);function be(t,i){switch(ye(Z,i),ye(Oe,t),ye(De,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Z0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Z0(i),t=K0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}de(De),ye(De,t)}function Be(){de(De),de(Oe),de(Z)}function Je(t){t.memoizedState!==null&&ye(Me,t);var i=De.current,s=K0(i,t.type);i!==s&&(ye(Oe,t),ye(De,s))}function et(t){Oe.current===t&&(de(De),de(Oe)),Me.current===t&&(de(Me),Wo._currentValue=oe)}var Wt=Object.prototype.hasOwnProperty,ct=a.unstable_scheduleCallback,_t=a.unstable_cancelCallback,Ft=a.unstable_shouldYield,ut=a.unstable_requestPaint,Rt=a.unstable_now,k=a.unstable_getCurrentPriorityLevel,Jt=a.unstable_ImmediatePriority,Tt=a.unstable_UserBlockingPriority,Nt=a.unstable_NormalPriority,Ye=a.unstable_LowPriority,I=a.unstable_IdlePriority,T=a.log,j=a.unstable_setDisableYieldValue,ge=null,ve=null;function he(t){if(typeof T=="function"&&j(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,t)}catch{}}var Le=Math.clz32?Math.clz32:nt,Ce=Math.log,$e=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(Ce(t)/$e|0)|0}var Ee=256,Ae=4194304;function ze(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~h,l!==0?u=ze(l):(E&=w,E!==0?u=ze(E):s||(s=w&~t,s!==0&&(u=ze(s))))):(w=l&~h,w!==0?u=ze(w):E!==0?u=ze(E):s||(s=l&~t,s!==0&&(u=ze(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ft(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function we(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Re(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Fe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,i,s,l,u,h){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(s=E&~s;0<s;){var _e=31-Le(s),Se=1<<_e;w[_e]=0,H[_e]=-1;var se=ne[_e];if(se!==null)for(ne[_e]=null,_e=0;_e<se.length;_e++){var le=se[_e];le!==null&&(le.lane&=-536870913)}s&=~Se}l!==0&&pe(t,l,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~i))}function pe(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Le(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function ke(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Le(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:m_(t.type))}function yi(t,i){var s=B.p;try{return B.p=t,i()}finally{B.p=s}}var Sn=Math.random().toString(36).slice(2),mn="__reactFiber$"+Sn,bn="__reactProps$"+Sn,Pa="__reactContainer$"+Sn,Zr="__reactEvents$"+Sn,Tl="__reactListeners$"+Sn,Qi="__reactHandles$"+Sn,Kr="__reactResources$"+Sn,Oa="__reactMarker$"+Sn;function Qr(t){delete t[mn],delete t[bn],delete t[Zr],delete t[Tl],delete t[Qi]}function Si(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Pa]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=e_(t);t!==null;){if(s=t[mn])return s;t=e_(t)}return i}t=s,s=t.parentNode}return null}function Ji(t){if(t=t[mn]||t[Pa]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Ui(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function $i(t){var i=t[Kr];return i||(i=t[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function sn(t){t[Oa]=!0}var Al=new Set,Rl={};function ea(t,i){Ia(t,i),Ia(t+"Capture",i)}function Ia(t,i){for(Rl[t]=i,t=0;t<i.length;t++)Al.add(i[t])}var Bu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wl={},C={};function q(t){return Wt.call(C,t)?!0:Wt.call(wl,t)?!1:Bu.test(t)?C[t]=!0:(wl[t]=!0,!1)}function ce(t,i,s){if(q(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ae(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ee(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Ue,He;function Ne(t){if(Ue===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ue=i&&i[1]||"",He=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+t+He}var Xe=!1;function Ze(t,i){if(!t||Xe)return"";Xe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var se=le}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(le){se=le}t.call(Se.prototype)}}else{try{throw Error()}catch(le){se=le}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),E=h[0],w=h[1];if(E&&w){var H=E.split(`
`),ne=w.split(`
`);for(u=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(l===H.length||u===ne.length)for(l=H.length-1,u=ne.length-1;1<=l&&0<=u&&H[l]!==ne[u];)u--;for(;1<=l&&0<=u;l--,u--)if(H[l]!==ne[u]){if(l!==1||u!==1)do if(l--,u--,0>u||H[l]!==ne[u]){var _e=`
`+H[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=u);break}}}finally{Xe=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ne(s):""}function ot(t){switch(t.tag){case 26:case 27:case 5:return Ne(t.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return Ne("Activity");default:return""}}function lt(t){try{var i="";do i+=ot(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(t){var i=Ut(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function jt(t){t._valueTracker||(t._valueTracker=$t(t))}function Lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ut(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function on(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ke=/[\n"\\]/g;function Yt(t){return t.replace(Ke,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function St(t,i,s,l,u,h,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ge(i)):t.value!==""+Ge(i)&&(t.value=""+Ge(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Vn(t,E,Ge(i)):s!=null?Vn(t,E,Ge(s)):l!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ge(w):t.removeAttribute("name")}function Gn(t,i,s,l,u,h,E,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;s=s!=null?""+Ge(s):"",i=i!=null?""+Ge(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Vn(t,i,s){i==="number"&&on(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function kn(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ge(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ta(t,i,s){if(i!=null&&(i=""+Ge(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Ge(s):""}function It(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(Q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ge(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Kt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Li.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function bi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&ln(t,u,l)}else for(var h in i)i.hasOwnProperty(h)&&ln(t,h,i[h])}function Pi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return Dy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zu=null;function Hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function Qp(t){var i=Ji(t);if(i&&(t=i.stateNode)){var s=t[bn]||null;e:switch(t=i.stateNode,i.type){case"input":if(St(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Yt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[bn]||null;if(!u)throw Error(r(90));St(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Lt(l)}break e;case"textarea":ta(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&kn(t,!!s.multiple,i,!1)}}}var Gu=!1;function Jp(t,i,s){if(Gu)return t(i,s);Gu=!0;try{var l=t(i);return l}finally{if(Gu=!1,(Jr!==null||$r!==null)&&(mc(),Jr&&(i=Jr,t=$r,$r=Jr=null,Qp(i),t)))for(i=0;i<t.length;i++)Qp(t[i])}}function io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[bn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(na)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Vu=!1}var Fa=null,ku=null,Nl=null;function $p(){if(Nl)return Nl;var t,i=ku,s=i.length,l,u="value"in Fa?Fa.value:Fa.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===u[h-l];l++);return Nl=u.slice(t,1<l?1-l:void 0)}function Ul(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function em(){return!1}function Xn(t){function i(s,l,u,h,E){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ll:em,this.isPropagationStopped=em,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),i}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Xn(_r),ro=_({},_r,{view:0,detail:0}),Ny=Xn(ro),Xu,Wu,so,Ol=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Xu=t.screenX-so.screenX,Wu=t.screenY-so.screenY):Wu=Xu=0,so=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),tm=Xn(Ol),Uy=_({},Ol,{dataTransfer:0}),Ly=Xn(Uy),Py=_({},ro,{relatedTarget:0}),ju=Xn(Py),Oy=_({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=Xn(Oy),Fy=_({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=Xn(Fy),zy=_({},_r,{data:0}),nm=Xn(zy),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vy[t])?!!i[t]:!1}function qu(){return ky}var Xy=_({},ro,{key:function(t){if(t.key){var i=Hy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=Xn(Xy),jy=_({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Xn(jy),qy=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),Yy=Xn(qy),Zy=_({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Xn(Zy),Qy=_({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=Xn(Qy),$y=_({},_r,{newState:0,oldState:0}),eS=Xn($y),tS=[9,13,27,32],Yu=na&&"CompositionEvent"in window,oo=null;na&&"documentMode"in document&&(oo=document.documentMode);var nS=na&&"TextEvent"in window&&!oo,am=na&&(!Yu||oo&&8<oo&&11>=oo),rm=" ",sm=!1;function om(t,i){switch(t){case"keyup":return tS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function iS(t,i){switch(t){case"compositionend":return lm(i);case"keypress":return i.which!==32?null:(sm=!0,rm);case"textInput":return t=i.data,t===rm&&sm?null:t;default:return null}}function aS(t,i){if(es)return t==="compositionend"||!Yu&&om(t,i)?(t=$p(),Nl=ku=Fa=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return am&&i.locale!=="ko"?null:i.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!rS[t.type]:i==="textarea"}function um(t,i,s,l){Jr?$r?$r.push(l):$r=[l]:Jr=l,i=Sc(i,"onChange"),0<i.length&&(s=new Pl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var lo=null,co=null;function sS(t){X0(t,0)}function Il(t){var i=Ui(t);if(Lt(i))return t}function fm(t,i){if(t==="change")return i}var dm=!1;if(na){var Zu;if(na){var Ku="oninput"in document;if(!Ku){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Ku=typeof hm.oninput=="function"}Zu=Ku}else Zu=!1;dm=Zu&&(!document.documentMode||9<document.documentMode)}function pm(){lo&&(lo.detachEvent("onpropertychange",mm),co=lo=null)}function mm(t){if(t.propertyName==="value"&&Il(co)){var i=[];um(i,co,t,Hu(t)),Jp(sS,i)}}function oS(t,i,s){t==="focusin"?(pm(),lo=i,co=s,lo.attachEvent("onpropertychange",mm)):t==="focusout"&&pm()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(co)}function cS(t,i){if(t==="click")return Il(i)}function uS(t,i){if(t==="input"||t==="change")return Il(i)}function fS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:fS;function uo(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Wt.call(i,u)||!Kn(t[u],i[u]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,i){var s=gm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gm(s)}}function vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=on(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=on(t.document)}return i}function Qu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var dS=na&&"documentMode"in document&&11>=document.documentMode,ts=null,Ju=null,fo=null,$u=!1;function ym(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$u||ts==null||ts!==on(l)||(l=ts,"selectionStart"in l&&Qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&uo(fo,l)||(fo=l,l=Sc(Ju,"onSelect"),0<l.length&&(i=new Pl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ts)))}function vr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ns={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},ef={},Sm={};na&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function xr(t){if(ef[t])return ef[t];if(!ns[t])return t;var i=ns[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Sm)return ef[t]=i[s];return t}var bm=xr("animationend"),Mm=xr("animationiteration"),Em=xr("animationstart"),hS=xr("transitionrun"),pS=xr("transitionstart"),mS=xr("transitioncancel"),Tm=xr("transitionend"),Am=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Mi(t,i){Am.set(t,i),ea(i,[t])}var Rm=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var s=Rm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:lt(i)},Rm.set(t,i),i)}return{value:t,source:i,stack:lt(i)}}var oi=[],is=0,nf=0;function Fl(){for(var t=is,i=nf=is=0;i<t;){var s=oi[i];oi[i++]=null;var l=oi[i];oi[i++]=null;var u=oi[i];oi[i++]=null;var h=oi[i];if(oi[i++]=null,l!==null&&u!==null){var E=l.pending;E===null?u.next=u:(u.next=E.next,E.next=u),l.pending=u}h!==0&&wm(s,u,h)}}function Bl(t,i,s,l){oi[is++]=t,oi[is++]=i,oi[is++]=s,oi[is++]=l,nf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function af(t,i,s,l){return Bl(t,i,s,l),zl(t)}function as(t,i){return Bl(t,null,null,i),zl(t)}function wm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&i!==null&&(u=31-Le(s),t=h.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),h):null}function zl(t){if(50<Fo)throw Fo=0,ud=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var rs={};function gS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,s,l){return new gS(t,i,s,l)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,i){var s=t.alternate;return s===null?(s=Qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Cm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Hl(t,i,s,l,u,h){var E=0;if(l=t,typeof t=="function")rf(t)&&(E=1);else if(typeof t=="string")E=vb(t,s,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Qn(31,s,i,u),t.elementType=N,t.lanes=h,t;case b:return yr(s.children,u,h,i);case A:E=8,u|=24;break;case y:return t=Qn(12,s,i,u|2),t.elementType=y,t.lanes=h,t;case P:return t=Qn(13,s,i,u),t.elementType=P,t.lanes=h,t;case F:return t=Qn(19,s,i,u),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case U:E=10;break e;case R:E=9;break e;case L:E=11;break e;case z:E=14;break e;case M:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Qn(E,s,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function yr(t,i,s,l){return t=Qn(7,t,l,i),t.lanes=s,t}function sf(t,i,s){return t=Qn(6,t,null,i),t.lanes=s,t}function of(t,i,s){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ss=[],os=0,Gl=null,Vl=0,li=[],ci=0,Sr=null,aa=1,ra="";function br(t,i){ss[os++]=Vl,ss[os++]=Gl,Gl=t,Vl=i}function Dm(t,i,s){li[ci++]=aa,li[ci++]=ra,li[ci++]=Sr,Sr=t;var l=aa;t=ra;var u=32-Le(l)-1;l&=~(1<<u),s+=1;var h=32-Le(i)+u;if(30<h){var E=u-u%5;h=(l&(1<<E)-1).toString(32),l>>=E,u-=E,aa=1<<32-Le(i)+u|s<<u|l,ra=h+t}else aa=1<<h|s<<u|l,ra=t}function lf(t){t.return!==null&&(br(t,1),Dm(t,1,0))}function cf(t){for(;t===Gl;)Gl=ss[--os],ss[os]=null,Vl=ss[--os],ss[os]=null;for(;t===Sr;)Sr=li[--ci],li[ci]=null,ra=li[--ci],li[ci]=null,aa=li[--ci],li[ci]=null}var In=null,nn=null,Pt=!1,Mr=null,Oi=!1,uf=Error(r(519));function Er(t){var i=Error(r(418,""));throw mo(si(i,t)),uf}function Nm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[mn]=t,i[bn]=l,s){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(s=0;s<zo.length;s++)yt(zo[s],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":yt("invalid",i),Gn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),jt(i);break;case"select":yt("invalid",i);break;case"textarea":yt("invalid",i),It(i,l.value,l.defaultValue,l.children),jt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Y0(i.textContent,s)?(l.popover!=null&&(yt("beforetoggle",i),yt("toggle",i)),l.onScroll!=null&&yt("scroll",i),l.onScrollEnd!=null&&yt("scrollend",i),l.onClick!=null&&(i.onclick=bc),i=!0):i=!1,i||Er(t)}function Um(t){for(In=t.return;In;)switch(In.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:In=In.return}}function ho(t){if(t!==In)return!1;if(!Pt)return Um(t),Pt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ad(t.type,t.memoizedProps)),s=!s),s&&nn&&Er(t),Um(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){nn=Ti(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}nn=null}}else i===27?(i=nn,$a(t.type)?(t=Dd,Dd=null,nn=t):nn=i):nn=In?Ti(t.stateNode.nextSibling):null;return!0}function po(){nn=In=null,Pt=!1}function Lm(){var t=Mr;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Mr=null),t}function mo(t){Mr===null?Mr=[t]:Mr.push(t)}var ff=J(null),Tr=null,sa=null;function Ba(t,i,s){ye(ff,i._currentValue),i._currentValue=s}function oa(t){t._currentValue=ff.current,de(ff)}function df(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function hf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var H=0;H<i.length;H++)if(w.context===i[H]){h.lanes|=s,w=h.alternate,w!==null&&(w.lanes|=s),df(h.return,s,t),l||(E=null);break e}h=w.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=s,h=E.alternate,h!==null&&(h.lanes|=s),df(E,s,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function go(t,i,s,l){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var w=u.type;Kn(u.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(u===Me.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}u=u.return}t!==null&&hf(i,t,s,l),i.flags|=262144}function kl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Pm(Tr,t)}function Xl(t,i){return Tr===null&&Ar(t),Pm(t,i)}function Pm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},sa===null){if(t===null)throw Error(r(308));sa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else sa=sa.next=i;return s}var _S=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},vS=a.unstable_scheduleCallback,xS=a.unstable_NormalPriority,gn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new _S,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&vS(xS,function(){t.controller.abort()})}var vo=null,mf=0,ls=0,cs=null;function yS(t,i){if(vo===null){var s=vo=[];mf=0,ls=_d(),cs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mf++,i.then(Om,Om),i}function Om(){if(--mf===0&&vo!==null){cs!==null&&(cs.status="fulfilled");var t=vo;vo=null,ls=0,cs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function SS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Im=O.S;O.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&yS(t,i),Im!==null&&Im(t,i)};var Rr=J(null);function gf(){var t=Rr.current;return t!==null?t:Zt.pooledCache}function Wl(t,i){i===null?ye(Rr,Rr.current):ye(Rr,i.pool)}function Fm(){var t=gf();return t===null?null:{parent:gn._currentValue,pool:t}}var xo=Error(r(460)),Bm=Error(r(474)),jl=Error(r(542)),_f={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ql(){}function Hm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ql,ql),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vm(t),t;default:if(typeof i.status=="string")i.then(ql,ql);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vm(t),t}throw yo=i,xo}}var yo=null;function Gm(){if(yo===null)throw Error(r(459));var t=yo;return yo=null,t}function Vm(t){if(t===xo||t===jl)throw Error(r(483))}var za=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=zl(t),wm(t,null,s),i}return Bl(t,l,i,s),zl(t)}function So(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ke(t,s)}}function yf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Sf=!1;function bo(){if(Sf){var t=cs;if(t!==null)throw t}}function Mo(t,i,s,l){Sf=!1;var u=t.updateQueue;za=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,ne=H.next;H.next=null,E===null?h=ne:E.next=ne,E=H;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,w=_e.lastBaseUpdate,w!==E&&(w===null?_e.firstBaseUpdate=ne:w.next=ne,_e.lastBaseUpdate=H))}if(h!==null){var Se=u.baseState;E=0,_e=ne=H=null,w=h;do{var se=w.lane&-536870913,le=se!==w.lane;if(le?(Et&se)===se:(l&se)===se){se!==0&&se===ls&&(Sf=!0),_e!==null&&(_e=_e.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var rt=t,tt=w;se=i;var kt=s;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){Se=rt.call(kt,Se,se);break e}Se=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,se=typeof rt=="function"?rt.call(kt,Se,se):rt,se==null)break e;Se=_({},Se,se);break e;case 2:za=!0}}se=w.callback,se!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[se]:le.push(se))}else le={lane:se,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_e===null?(ne=_e=le,H=Se):_e=_e.next=le,E|=se;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;le=w,w=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);_e===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=_e,h===null&&(u.shared.lanes=0),Za|=E,t.lanes=E,t.memoizedState=Se}}function km(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Xm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)km(s[t],i)}var us=J(null),Yl=J(0);function Wm(t,i){t=pa,ye(Yl,t),ye(us,i),pa=t|i.baseLanes}function bf(){ye(Yl,pa),ye(us,us.current)}function Mf(){pa=Yl.current,de(us),de(Yl)}var Va=0,mt=null,Gt=null,dn=null,Zl=!1,fs=!1,wr=!1,Kl=0,Eo=0,ds=null,bS=0;function cn(){throw Error(r(321))}function Ef(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function Tf(t,i,s,l,u,h){return Va=h,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?wg:Cg,wr=!1,h=s(l,u),wr=!1,fs&&(h=qm(i,s,l,u)),jm(t),h}function jm(t){O.H=nc;var i=Gt!==null&&Gt.next!==null;if(Va=0,dn=Gt=mt=null,Zl=!1,Eo=0,ds=null,i)throw Error(r(300));t===null||Mn||(t=t.dependencies,t!==null&&kl(t)&&(Mn=!0))}function qm(t,i,s,l){mt=t;var u=0;do{if(fs&&(ds=null),Eo=0,fs=!1,25<=u)throw Error(r(301));if(u+=1,dn=Gt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=CS,h=i(s,l)}while(fs);return h}function MS(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?To(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(mt.flags|=1024),i}function Af(){var t=Kl!==0;return Kl=0,t}function Rf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function wf(t){if(Zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zl=!1}Va=0,dn=Gt=mt=null,fs=!1,Eo=Kl=0,ds=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?mt.memoizedState=dn=t:dn=dn.next=t,dn}function hn(){if(Gt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=dn===null?mt.memoizedState:dn.next;if(i!==null)dn=i,Gt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},dn===null?mt.memoizedState=dn=t:dn=dn.next=t}return dn}function Cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var i=Eo;return Eo+=1,ds===null&&(ds=[]),t=Hm(ds,t,i),i=mt,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?wg:Cg),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===U)return Nn(t)}throw Error(r(438,String(t)))}function Df(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Cf(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=ue;return i.index++,s}function la(t,i){return typeof i=="function"?i(t):i}function Jl(t){var i=hn();return Nf(i,Gt,t)}function Nf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,h=l.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}i.baseQueue=u=h,l.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var w=E=null,H=null,ne=i,_e=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(Et&Se)===Se:(Va&Se)===Se){var se=ne.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===ls&&(_e=!0);else if((Va&se)===se){ne=ne.next,se===ls&&(_e=!0);continue}else Se={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=Se,E=h):H=H.next=Se,mt.lanes|=se,Za|=se;Se=ne.action,wr&&s(h,Se),h=ne.hasEagerState?ne.eagerState:s(h,Se)}else se={lane:Se,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=se,E=h):H=H.next=se,mt.lanes|=Se,Za|=Se;ne=ne.next}while(ne!==null&&ne!==i);if(H===null?E=h:H.next=w,!Kn(h,t.memoizedState)&&(Mn=!0,_e&&(s=cs,s!==null)))throw s;t.memoizedState=h,t.baseState=E,t.baseQueue=H,l.lastRenderedState=h}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Uf(t){var i=hn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);Kn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Ym(t,i,s){var l=mt,u=hn(),h=Pt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!Kn((Gt||u).memoizedState,s);E&&(u.memoizedState=s,Mn=!0),u=u.queue;var w=Qm.bind(null,l,u,t);if(Ao(2048,8,w,[t]),u.getSnapshot!==i||E||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,hs(9,$l(),Km.bind(null,l,u,s,i),null),Zt===null)throw Error(r(349));h||(Va&124)!==0||Zm(l,i,s)}return s}function Zm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=Cf(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Km(t,i,s,l){i.value=s,i.getSnapshot=l,Jm(i)&&$m(t)}function Qm(t,i,s){return s(function(){Jm(i)&&$m(t)})}function Jm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function $m(t){var i=as(t,2);i!==null&&ni(i,t,2)}function Lf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),wr){he(!0);try{s()}finally{he(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},i}function eg(t,i,s,l){return t.baseState=s,Nf(t,Gt,typeof l=="function"?l:la)}function ES(t,i,s,l,u){if(tc(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};O.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,tg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function tg(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var h=O.T,E={};O.T=E;try{var w=s(u,l),H=O.S;H!==null&&H(E,w),ng(t,i,w)}catch(ne){Pf(t,i,ne)}finally{O.T=h}}else try{h=s(u,l),ng(t,i,h)}catch(ne){Pf(t,i,ne)}}function ng(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ig(t,i,l)},function(l){return Pf(t,i,l)}):ig(t,i,s)}function ig(t,i,s){i.status="fulfilled",i.value=s,ag(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,tg(t,s)))}function Pf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,ag(i),i=i.next;while(i!==l)}t.action=null}function ag(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function rg(t,i){return i}function sg(t,i){if(Pt){var s=Zt.formState;if(s!==null){e:{var l=mt;if(Pt){if(nn){t:{for(var u=nn,h=Oi;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ti(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){nn=Ti(u.nextSibling),l=u.data==="F!";break e}}Er(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:i},s.queue=l,s=Tg.bind(null,mt,l),l.dispatch=s,l=Lf(!1),h=zf.bind(null,mt,!1,l.queue),l=Wn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=ES.bind(null,mt,u,h,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function og(t){var i=hn();return lg(i,Gt,t)}function lg(t,i,s){if(i=Nf(t,i,rg)[0],t=Jl(la)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(E){throw E===xo?jl:E}else l=i;i=hn();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,hs(9,$l(),TS.bind(null,u,s),null)),[l,h,t]}function TS(t,i){t.action=i}function cg(t){var i=hn(),s=Gt;if(s!==null)return lg(i,s,t);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function hs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=Cf(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function $l(){return{destroy:void 0,resource:void 0}}function ug(){return hn().memoizedState}function ec(t,i,s,l){var u=Wn();l=l===void 0?null:l,mt.flags|=t,u.memoizedState=hs(1|i,$l(),s,l)}function Ao(t,i,s,l){var u=hn();l=l===void 0?null:l;var h=u.memoizedState.inst;Gt!==null&&l!==null&&Ef(l,Gt.memoizedState.deps)?u.memoizedState=hs(i,h,s,l):(mt.flags|=t,u.memoizedState=hs(1|i,h,s,l))}function fg(t,i){ec(8390656,8,t,i)}function dg(t,i){Ao(2048,8,t,i)}function hg(t,i){return Ao(4,2,t,i)}function pg(t,i){return Ao(4,4,t,i)}function mg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gg(t,i,s){s=s!=null?s.concat([t]):null,Ao(4,4,mg.bind(null,i,t),s)}function Of(){}function _g(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Ef(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function vg(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Ef(i,l[1]))return l[0];if(l=t(),wr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[l,i],l}function If(t,i,s){return s===void 0||(Va&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=S0(),mt.lanes|=t,Za|=t,s)}function xg(t,i,s,l){return Kn(s,i)?s:us.current!==null?(t=If(t,s,l),Kn(t,i)||(Mn=!0),t):(Va&42)===0?(Mn=!0,t.memoizedState=s):(t=S0(),mt.lanes|=t,Za|=t,i)}function yg(t,i,s,l,u){var h=B.p;B.p=h!==0&&8>h?h:8;var E=O.T,w={};O.T=w,zf(t,!1,i,s);try{var H=u(),ne=O.S;if(ne!==null&&ne(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var _e=SS(H,l);Ro(t,i,_e,ti(t))}else Ro(t,i,l,ti(t))}catch(Se){Ro(t,i,{then:function(){},status:"rejected",reason:Se},ti())}finally{B.p=h,O.T=E}}function AS(){}function Ff(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=Sg(t).queue;yg(t,u,i,oe,s===null?AS:function(){return bg(t),s(l)})}function Sg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:oe},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function bg(t){var i=Sg(t).next.queue;Ro(t,i,{},ti())}function Bf(){return Nn(Wo)}function Mg(){return hn().memoizedState}function Eg(){return hn().memoizedState}function RS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=Ha(s);var l=Ga(i,t,s);l!==null&&(ni(l,i,s),So(l,i,s)),i={cache:pf()},t.payload=i;return}i=i.return}}function wS(t,i,s){var l=ti();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},tc(t)?Ag(i,s):(s=af(t,i,s,l),s!==null&&(ni(s,t,l),Rg(s,i,l)))}function Tg(t,i,s){var l=ti();Ro(t,i,s,l)}function Ro(t,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(tc(t))Ag(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,w=h(E,s);if(u.hasEagerState=!0,u.eagerState=w,Kn(w,E))return Bl(t,i,u,0),Zt===null&&Fl(),!1}catch{}finally{}if(s=af(t,i,u,l),s!==null)return ni(s,t,l),Rg(s,i,l),!0}return!1}function zf(t,i,s,l){if(l={lane:2,revertLane:_d(),action:l,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(i)throw Error(r(479))}else i=af(t,s,l,2),i!==null&&ni(i,t,2)}function tc(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function Ag(t,i){fs=Zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Rg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ke(t,s)}}var nc={readContext:Nn,use:Ql,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn},wg={readContext:Nn,use:Ql,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:fg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ec(4194308,4,mg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ec(4194308,4,t,i)},useInsertionEffect:function(t,i){ec(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(wr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var u=s(i);if(wr){he(!0);try{s(i)}finally{he(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=wS.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=Lf(t);var i=t.queue,s=Tg.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Of,useDeferredValue:function(t,i){var s=Wn();return If(s,t,i)},useTransition:function(){var t=Lf(!1);return t=yg.bind(null,mt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,u=Wn();if(Pt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Zt===null)throw Error(r(349));(Et&124)!==0||Zm(l,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,fg(Qm.bind(null,l,h,t),[t]),l.flags|=2048,hs(9,$l(),Km.bind(null,l,h,s,i),null),s},useId:function(){var t=Wn(),i=Zt.identifierPrefix;if(Pt){var s=ra,l=aa;s=(l&~(1<<32-Le(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Kl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=bS++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Bf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=zf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Df,useCacheRefresh:function(){return Wn().memoizedState=RS.bind(null,mt)}},Cg={readContext:Nn,use:Ql,useCallback:_g,useContext:Nn,useEffect:dg,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:Jl,useRef:ug,useState:function(){return Jl(la)},useDebugValue:Of,useDeferredValue:function(t,i){var s=hn();return xg(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Jl(la)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Bf,useFormState:og,useActionState:og,useOptimistic:function(t,i){var s=hn();return eg(s,Gt,t,i)},useMemoCache:Df,useCacheRefresh:Eg},CS={readContext:Nn,use:Ql,useCallback:_g,useContext:Nn,useEffect:dg,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:Uf,useRef:ug,useState:function(){return Uf(la)},useDebugValue:Of,useDeferredValue:function(t,i){var s=hn();return Gt===null?If(s,t,i):xg(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Uf(la)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Bf,useFormState:cg,useActionState:cg,useOptimistic:function(t,i){var s=hn();return Gt!==null?eg(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:Eg},ps=null,wo=0;function ic(t){var i=wo;return wo+=1,ps===null&&(ps=[]),Hm(ps,t,i)}function Co(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Dg(t){var i=t._init;return i(t._payload)}function Ng(t){function i(Y,X){if(t){var te=Y.deletions;te===null?(Y.deletions=[X],Y.flags|=16):te.push(X)}}function s(Y,X){if(!t)return null;for(;X!==null;)i(Y,X),X=X.sibling;return null}function l(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=ia(Y,X),Y.index=0,Y.sibling=null,Y}function h(Y,X,te){return Y.index=te,t?(te=Y.alternate,te!==null?(te=te.index,te<X?(Y.flags|=67108866,X):te):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,X,te,xe){return X===null||X.tag!==6?(X=sf(te,Y.mode,xe),X.return=Y,X):(X=u(X,te),X.return=Y,X)}function H(Y,X,te,xe){var We=te.type;return We===b?_e(Y,X,te.props.children,xe,te.key):X!==null&&(X.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===M&&Dg(We)===X.type)?(X=u(X,te.props),Co(X,te),X.return=Y,X):(X=Hl(te.type,te.key,te.props,null,Y.mode,xe),Co(X,te),X.return=Y,X)}function ne(Y,X,te,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=of(te,Y.mode,xe),X.return=Y,X):(X=u(X,te.children||[]),X.return=Y,X)}function _e(Y,X,te,xe,We){return X===null||X.tag!==7?(X=yr(te,Y.mode,xe,We),X.return=Y,X):(X=u(X,te),X.return=Y,X)}function Se(Y,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=sf(""+X,Y.mode,te),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case g:return te=Hl(X.type,X.key,X.props,null,Y.mode,te),Co(te,X),te.return=Y,te;case S:return X=of(X,Y.mode,te),X.return=Y,X;case M:var xe=X._init;return X=xe(X._payload),Se(Y,X,te)}if(Q(X)||K(X))return X=yr(X,Y.mode,te,null),X.return=Y,X;if(typeof X.then=="function")return Se(Y,ic(X),te);if(X.$$typeof===U)return Se(Y,Xl(Y,X),te);ac(Y,X)}return null}function se(Y,X,te,xe){var We=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return We!==null?null:w(Y,X,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case g:return te.key===We?H(Y,X,te,xe):null;case S:return te.key===We?ne(Y,X,te,xe):null;case M:return We=te._init,te=We(te._payload),se(Y,X,te,xe)}if(Q(te)||K(te))return We!==null?null:_e(Y,X,te,xe,null);if(typeof te.then=="function")return se(Y,X,ic(te),xe);if(te.$$typeof===U)return se(Y,X,Xl(Y,te),xe);ac(Y,te)}return null}function le(Y,X,te,xe,We){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get(te)||null,w(X,Y,""+xe,We);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case g:return Y=Y.get(xe.key===null?te:xe.key)||null,H(X,Y,xe,We);case S:return Y=Y.get(xe.key===null?te:xe.key)||null,ne(X,Y,xe,We);case M:var vt=xe._init;return xe=vt(xe._payload),le(Y,X,te,xe,We)}if(Q(xe)||K(xe))return Y=Y.get(te)||null,_e(X,Y,xe,We,null);if(typeof xe.then=="function")return le(Y,X,te,ic(xe),We);if(xe.$$typeof===U)return le(Y,X,te,Xl(X,xe),We);ac(X,xe)}return null}function rt(Y,X,te,xe){for(var We=null,vt=null,Qe=X,it=X=0,Tn=null;Qe!==null&&it<te.length;it++){Qe.index>it?(Tn=Qe,Qe=null):Tn=Qe.sibling;var Ct=se(Y,Qe,te[it],xe);if(Ct===null){Qe===null&&(Qe=Tn);break}t&&Qe&&Ct.alternate===null&&i(Y,Qe),X=h(Ct,X,it),vt===null?We=Ct:vt.sibling=Ct,vt=Ct,Qe=Tn}if(it===te.length)return s(Y,Qe),Pt&&br(Y,it),We;if(Qe===null){for(;it<te.length;it++)Qe=Se(Y,te[it],xe),Qe!==null&&(X=h(Qe,X,it),vt===null?We=Qe:vt.sibling=Qe,vt=Qe);return Pt&&br(Y,it),We}for(Qe=l(Qe);it<te.length;it++)Tn=le(Qe,Y,it,te[it],xe),Tn!==null&&(t&&Tn.alternate!==null&&Qe.delete(Tn.key===null?it:Tn.key),X=h(Tn,X,it),vt===null?We=Tn:vt.sibling=Tn,vt=Tn);return t&&Qe.forEach(function(ar){return i(Y,ar)}),Pt&&br(Y,it),We}function tt(Y,X,te,xe){if(te==null)throw Error(r(151));for(var We=null,vt=null,Qe=X,it=X=0,Tn=null,Ct=te.next();Qe!==null&&!Ct.done;it++,Ct=te.next()){Qe.index>it?(Tn=Qe,Qe=null):Tn=Qe.sibling;var ar=se(Y,Qe,Ct.value,xe);if(ar===null){Qe===null&&(Qe=Tn);break}t&&Qe&&ar.alternate===null&&i(Y,Qe),X=h(ar,X,it),vt===null?We=ar:vt.sibling=ar,vt=ar,Qe=Tn}if(Ct.done)return s(Y,Qe),Pt&&br(Y,it),We;if(Qe===null){for(;!Ct.done;it++,Ct=te.next())Ct=Se(Y,Ct.value,xe),Ct!==null&&(X=h(Ct,X,it),vt===null?We=Ct:vt.sibling=Ct,vt=Ct);return Pt&&br(Y,it),We}for(Qe=l(Qe);!Ct.done;it++,Ct=te.next())Ct=le(Qe,Y,it,Ct.value,xe),Ct!==null&&(t&&Ct.alternate!==null&&Qe.delete(Ct.key===null?it:Ct.key),X=h(Ct,X,it),vt===null?We=Ct:vt.sibling=Ct,vt=Ct);return t&&Qe.forEach(function(Db){return i(Y,Db)}),Pt&&br(Y,it),We}function kt(Y,X,te,xe){if(typeof te=="object"&&te!==null&&te.type===b&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case g:e:{for(var We=te.key;X!==null;){if(X.key===We){if(We=te.type,We===b){if(X.tag===7){s(Y,X.sibling),xe=u(X,te.props.children),xe.return=Y,Y=xe;break e}}else if(X.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===M&&Dg(We)===X.type){s(Y,X.sibling),xe=u(X,te.props),Co(xe,te),xe.return=Y,Y=xe;break e}s(Y,X);break}else i(Y,X);X=X.sibling}te.type===b?(xe=yr(te.props.children,Y.mode,xe,te.key),xe.return=Y,Y=xe):(xe=Hl(te.type,te.key,te.props,null,Y.mode,xe),Co(xe,te),xe.return=Y,Y=xe)}return E(Y);case S:e:{for(We=te.key;X!==null;){if(X.key===We)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(Y,X.sibling),xe=u(X,te.children||[]),xe.return=Y,Y=xe;break e}else{s(Y,X);break}else i(Y,X);X=X.sibling}xe=of(te,Y.mode,xe),xe.return=Y,Y=xe}return E(Y);case M:return We=te._init,te=We(te._payload),kt(Y,X,te,xe)}if(Q(te))return rt(Y,X,te,xe);if(K(te)){if(We=K(te),typeof We!="function")throw Error(r(150));return te=We.call(te),tt(Y,X,te,xe)}if(typeof te.then=="function")return kt(Y,X,ic(te),xe);if(te.$$typeof===U)return kt(Y,X,Xl(Y,te),xe);ac(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(Y,X.sibling),xe=u(X,te),xe.return=Y,Y=xe):(s(Y,X),xe=sf(te,Y.mode,xe),xe.return=Y,Y=xe),E(Y)):s(Y,X)}return function(Y,X,te,xe){try{wo=0;var We=kt(Y,X,te,xe);return ps=null,We}catch(Qe){if(Qe===xo||Qe===jl)throw Qe;var vt=Qn(29,Qe,null,Y.mode);return vt.lanes=xe,vt.return=Y,vt}finally{}}}var ms=Ng(!0),Ug=Ng(!1),ui=J(null),Ii=null;function ka(t){var i=t.alternate;ye(_n,_n.current&1),ye(ui,t),Ii===null&&(i===null||us.current!==null||i.memoizedState!==null)&&(Ii=t)}function Lg(t){if(t.tag===22){if(ye(_n,_n.current),ye(ui,t),Ii===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ii=t)}}else Xa()}function Xa(){ye(_n,_n.current),ye(ui,ui.current)}function ca(t){de(ui),Ii===t&&(Ii=null),de(_n)}var _n=J(0);function rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Cd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Hf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Gf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),u=Ha(l);u.payload=i,s!=null&&(u.callback=s),i=Ga(t,u,l),i!==null&&(ni(i,t,l),So(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),u=Ha(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ga(t,u,l),i!==null&&(ni(i,t,l),So(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=Ha(s);l.tag=2,i!=null&&(l.callback=i),i=Ga(t,l,s),i!==null&&(ni(i,t,s),So(i,t,s))}};function Pg(t,i,s,l,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!uo(s,l)||!uo(u,h):!0}function Og(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Gf.enqueueReplaceState(i,i.state,null)}function Cr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}var sc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ig(t){sc(t)}function Fg(t){console.error(t)}function Bg(t){sc(t)}function oc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function zg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vf(t,i,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){oc(t,i)},s}function Hg(t){return t=Ha(t),t.tag=3,t}function Gg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=l.value;t.payload=function(){return u(h)},t.callback=function(){zg(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){zg(i,s,l),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function DS(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&go(i,s,u,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Ii===null?dd():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===_f?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),pd(t,l,u)),!1;case 22:return s.flags|=65536,l===_f?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),pd(t,l,u)),!1}throw Error(r(435,s.tag))}return pd(t,l,u),dd(),!1}if(Pt)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==uf&&(t=Error(r(422),{cause:l}),mo(si(t,s)))):(l!==uf&&(i=Error(r(423),{cause:l}),mo(si(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=si(l,s),u=Vf(t.stateNode,l,u),yf(t,u),an!==4&&(an=2)),!1;var h=Error(r(520),{cause:l});if(h=si(h,s),Io===null?Io=[h]:Io.push(h),an!==4&&(an=2),i===null)return!0;l=si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Vf(s.stateNode,l,t),yf(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ka===null||!Ka.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Hg(u),Gg(u,t,s,l),yf(s,u),!1}s=s.return}while(s!==null);return!1}var Vg=Error(r(461)),Mn=!1;function Rn(t,i,s,l){i.child=t===null?Ug(i,null,s,l):ms(i,t.child,s,l)}function kg(t,i,s,l,u){s=s.render;var h=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return Ar(i),l=Tf(t,i,s,E,h,u),w=Af(),t!==null&&!Mn?(Rf(t,i,u),ua(t,i,u)):(Pt&&w&&lf(i),i.flags|=1,Rn(t,i,l,u),i.child)}function Xg(t,i,s,l,u){if(t===null){var h=s.type;return typeof h=="function"&&!rf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Wg(t,i,h,l,u)):(t=Hl(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Kf(t,u)){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:uo,s(E,l)&&t.ref===i.ref)return ua(t,i,u)}return i.flags|=1,t=ia(h,l),t.ref=i.ref,t.return=i,i.child=t}function Wg(t,i,s,l,u){if(t!==null){var h=t.memoizedProps;if(uo(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,Kf(t,u))(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,ua(t,i,u)}return kf(t,i,s,l,u)}function jg(t,i,s){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=h!==null?h.baseLanes|s:s,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;i.childLanes=h&~l}else i.childLanes=0,i.child=null;return qg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(i,h!==null?h.cachePool:null),h!==null?Wm(i,h):bf(),Lg(i);else return i.lanes=i.childLanes=536870912,qg(t,i,h!==null?h.baseLanes|s:s,s)}else h!==null?(Wl(i,h.cachePool),Wm(i,h),Xa(),i.memoizedState=null):(t!==null&&Wl(i,null),bf(),Xa());return Rn(t,i,u,s),i.child}function qg(t,i,s,l){var u=gf();return u=u===null?null:{parent:gn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},t!==null&&Wl(i,null),bf(),Lg(i),t!==null&&go(t,i,l,!0),null}function lc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function kf(t,i,s,l,u){return Ar(i),s=Tf(t,i,s,l,void 0,u),l=Af(),t!==null&&!Mn?(Rf(t,i,u),ua(t,i,u)):(Pt&&l&&lf(i),i.flags|=1,Rn(t,i,s,u),i.child)}function Yg(t,i,s,l,u,h){return Ar(i),i.updateQueue=null,s=qm(i,l,s,u),jm(t),l=Af(),t!==null&&!Mn?(Rf(t,i,h),ua(t,i,h)):(Pt&&l&&lf(i),i.flags|=1,Rn(t,i,s,h),i.child)}function Zg(t,i,s,l,u){if(Ar(i),i.stateNode===null){var h=rs,E=s.contextType;typeof E=="object"&&E!==null&&(h=Nn(E)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Gf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},vf(i),E=s.contextType,h.context=typeof E=="object"&&E!==null?Nn(E):rs,h.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Hf(i,s,E,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&Gf.enqueueReplaceState(h,h.state,null),Mo(i,l,h,u),bo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var w=i.memoizedProps,H=Cr(s,w);h.props=H;var ne=h.context,_e=s.contextType;E=rs,typeof _e=="object"&&_e!==null&&(E=Nn(_e));var Se=s.getDerivedStateFromProps;_e=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ne!==E)&&Og(i,h,l,E),za=!1;var se=i.memoizedState;h.state=se,Mo(i,l,h,u),bo(),ne=i.memoizedState,w||se!==ne||za?(typeof Se=="function"&&(Hf(i,s,Se,l),ne=i.memoizedState),(H=za||Pg(i,s,H,l,se,ne,E))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),h.props=l,h.state=ne,h.context=E,l=H):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,xf(t,i),E=i.memoizedProps,_e=Cr(s,E),h.props=_e,Se=i.pendingProps,se=h.context,ne=s.contextType,H=rs,typeof ne=="object"&&ne!==null&&(H=Nn(ne)),w=s.getDerivedStateFromProps,(ne=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==Se||se!==H)&&Og(i,h,l,H),za=!1,se=i.memoizedState,h.state=se,Mo(i,l,h,u),bo();var le=i.memoizedState;E!==Se||se!==le||za||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof w=="function"&&(Hf(i,s,w,l),le=i.memoizedState),(_e=za||Pg(i,s,_e,l,se,le,H)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(ne||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,le,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,le,H)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),h.props=l,h.state=le,h.context=H,l=_e):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,lc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=ms(i,t.child,null,u),i.child=ms(i,null,s,u)):Rn(t,i,s,u),i.memoizedState=h.state,t=i.child):t=ua(t,i,u),t}function Kg(t,i,s,l){return po(),i.flags|=256,Rn(t,i,s,l),i.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Fm()}}function jf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function Qg(t,i,s){var l=i.pendingProps,u=!1,h=(i.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(_n.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Pt){if(u?ka(i):Xa(),Pt){var w=nn,H;if(H=w){e:{for(H=w,w=Oi;H.nodeType!==8;){if(!w){w=null;break e}if(H=Ti(H.nextSibling),H===null){w=null;break e}}w=H}w!==null?(i.memoizedState={dehydrated:w,treeContext:Sr!==null?{id:aa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},H=Qn(18,null,null,0),H.stateNode=w,H.return=i,i.child=H,In=i,nn=null,H=!0):H=!1}H||Er(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Cd(w)?i.lanes=32:i.lanes=536870912,null;ca(i)}return w=l.children,l=l.fallback,u?(Xa(),u=i.mode,w=cc({mode:"hidden",children:w},u),l=yr(l,u,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,u=i.child,u.memoizedState=Wf(s),u.childLanes=jf(t,E,s),i.memoizedState=Xf,l):(ka(i),qf(i,w))}if(H=t.memoizedState,H!==null&&(w=H.dehydrated,w!==null)){if(h)i.flags&256?(ka(i),i.flags&=-257,i=Yf(t,i,s)):i.memoizedState!==null?(Xa(),i.child=t.child,i.flags|=128,i=null):(Xa(),u=l.fallback,w=i.mode,l=cc({mode:"visible",children:l.children},w),u=yr(u,w,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,ms(i,t.child,null,s),l=i.child,l.memoizedState=Wf(s),l.childLanes=jf(t,E,s),i.memoizedState=Xf,i=u);else if(ka(i),Cd(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var ne=E.dgst;E=ne,l=Error(r(419)),l.stack="",l.digest=E,mo({value:l,source:null,stack:null}),i=Yf(t,i,s)}else if(Mn||go(t,i,s,!1),E=(s&t.childLanes)!==0,Mn||E){if(E=Zt,E!==null&&(l=s&-s,l=(l&42)!==0?1:at(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==H.retryLane))throw H.retryLane=l,as(t,l),ni(E,t,l),Vg;w.data==="$?"||dd(),i=Yf(t,i,s)}else w.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,nn=Ti(w.nextSibling),In=i,Pt=!0,Mr=null,Oi=!1,t!==null&&(li[ci++]=aa,li[ci++]=ra,li[ci++]=Sr,aa=t.id,ra=t.overflow,Sr=i),i=qf(i,l.children),i.flags|=4096);return i}return u?(Xa(),u=l.fallback,w=i.mode,H=t.child,ne=H.sibling,l=ia(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ne!==null?u=ia(ne,u):(u=yr(u,w,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,w=t.child.memoizedState,w===null?w=Wf(s):(H=w.cachePool,H!==null?(ne=gn._currentValue,H=H.parent!==ne?{parent:ne,pool:ne}:H):H=Fm(),w={baseLanes:w.baseLanes|s,cachePool:H}),u.memoizedState=w,u.childLanes=jf(t,E,s),i.memoizedState=Xf,l):(ka(i),s=t.child,t=s.sibling,s=ia(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function qf(t,i){return i=cc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function cc(t,i){return t=Qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yf(t,i,s){return ms(i,t.child,null,s),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Jg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),df(t.return,i,s)}function Zf(t,i,s,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=u)}function $g(t,i,s){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(Rn(t,i,l.children,s),l=_n.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jg(t,s,i);else if(t.tag===19)Jg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ye(_n,l),u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Zf(i,!1,u,s,h);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&rc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Zf(i,!0,s,null,h);break;case"together":Zf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ua(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Za|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(go(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ia(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ia(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function NS(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),Ba(i,gn,t.memoizedState.cache),po();break;case 27:case 5:Je(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:Ba(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Qg(t,i,s):(ka(i),t=ua(t,i,s),t!==null?t.sibling:null);ka(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(go(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return $g(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(_n,_n.current),l)break;return null;case 22:case 23:return i.lanes=0,jg(t,i,s);case 24:Ba(i,gn,t.memoizedState.cache)}return ua(t,i,s)}function e0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mn=!0;else{if(!Kf(t,s)&&(i.flags&128)===0)return Mn=!1,NS(t,i,s);Mn=(t.flags&131072)!==0}else Mn=!1,Pt&&(i.flags&1048576)!==0&&Dm(i,Vl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")rf(l)?(t=Cr(l,t),i.tag=1,i=Zg(null,i,l,t,s)):(i.tag=0,i=kf(null,i,l,t,s));else{if(l!=null){if(u=l.$$typeof,u===L){i.tag=11,i=kg(null,i,l,t,s);break e}else if(u===z){i.tag=14,i=Xg(null,i,l,t,s);break e}}throw i=fe(l)||l,Error(r(306,i,""))}}return i;case 0:return kf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Cr(l,i.pendingProps),Zg(t,i,l,u,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;u=h.element,xf(t,i),Mo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ba(i,gn,l),l!==h.cache&&hf(i,[gn],s,!0),bo(),l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Kg(t,i,l,s);break e}else if(l!==u){u=si(Error(r(424)),i),mo(u),i=Kg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Ti(t.firstChild),In=i,Pt=!0,Mr=null,Oi=!0,s=Ug(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(po(),l===u){i=ua(t,i,s);break e}Rn(t,i,l,s)}i=i.child}return i;case 26:return lc(t,i),t===null?(s=a_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Pt||(s=i.type,t=i.pendingProps,l=Mc(Z.current).createElement(s),l[mn]=i,l[bn]=t,Cn(l,s,t),sn(l),i.stateNode=l):i.memoizedState=a_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Je(i),t===null&&Pt&&(l=i.stateNode=t_(i.type,i.pendingProps,Z.current),In=i,Oi=!0,u=nn,$a(i.type)?(Dd=u,nn=Ti(l.firstChild)):nn=u),Rn(t,i,i.pendingProps.children,s),lc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Pt&&((u=l=nn)&&(l=rb(l,i.type,i.pendingProps,Oi),l!==null?(i.stateNode=l,In=i,nn=Ti(l.firstChild),Oi=!1,u=!0):u=!1),u||Er(i)),Je(i),u=i.type,h=i.pendingProps,E=t!==null?t.memoizedProps:null,l=h.children,Ad(u,h)?l=null:E!==null&&Ad(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=Tf(t,i,MS,null,null,s),Wo._currentValue=u),lc(t,i),Rn(t,i,l,s),i.child;case 6:return t===null&&Pt&&((t=s=nn)&&(s=sb(s,i.pendingProps,Oi),s!==null?(i.stateNode=s,In=i,nn=null,t=!0):t=!1),t||Er(i)),null;case 13:return Qg(t,i,s);case 4:return be(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,s):Rn(t,i,l,s),i.child;case 11:return kg(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ba(i,i.type,l.value),Rn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Ar(i),u=Nn(u),l=l(u),i.flags|=1,Rn(t,i,l,s),i.child;case 14:return Xg(t,i,i.type,i.pendingProps,s);case 15:return Wg(t,i,i.type,i.pendingProps,s);case 19:return $g(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=cc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ia(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return jg(t,i,s);case 24:return Ar(i),l=Nn(gn),t===null?(u=gf(),u===null&&(u=Zt,h=pf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:l,cache:u},vf(i),Ba(i,gn,u)):((t.lanes&s)!==0&&(xf(t,i),Mo(i,null,null,s),bo()),u=t.memoizedState,h=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ba(i,gn,l)):(l=h.cache,Ba(i,gn,l),l!==u.cache&&hf(i,[gn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function fa(t){t.flags|=4}function t0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(i)){if(i=ui.current,i!==null&&((Et&4194048)===Et?Ii!==null:(Et&62914560)!==Et&&(Et&536870912)===0||i!==Ii))throw yo=_f,Bm;t.flags|=8192}}function uc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,xs|=i)}function Do(t,i){if(!Pt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function US(t,i,s){var l=i.pendingProps;switch(cf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),oa(gn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ho(i)?fa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lm())),en(i),null;case 26:return s=i.memoizedState,t===null?(fa(i),s!==null?(en(i),t0(i,s)):(en(i),i.flags&=-16777217)):s?s!==t.memoizedState?(fa(i),en(i),t0(i,s)):(en(i),i.flags&=-16777217):(t.memoizedProps!==l&&fa(i),en(i),i.flags&=-16777217),null;case 27:et(i),s=Z.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}t=De.current,ho(i)?Nm(i):(t=t_(u,l,s),i.stateNode=t,fa(i))}return en(i),null;case 5:if(et(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}if(t=De.current,ho(i))Nm(i);else{switch(u=Mc(Z.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}t[mn]=i,t[bn]=l;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Cn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&fa(i)}}return en(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=Z.current,ho(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=In,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Y0(t.nodeValue,s)),t||Er(i)}else t=Mc(t).createTextNode(l),t[mn]=i,i.stateNode=t}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ho(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=i}else po(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=Lm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ca(i),i):(ca(i),null)}if(ca(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var h=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==u&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),uc(i,i.updateQueue),en(i),null;case 4:return Be(),t===null&&Sd(i.stateNode.containerInfo),en(i),null;case 10:return oa(i.type),en(i),null;case 19:if(de(_n),u=i.memoizedState,u===null)return en(i),null;if(l=(i.flags&128)!==0,h=u.rendering,h===null)if(l)Do(u,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=rc(t),h!==null){for(i.flags|=128,Do(u,!1),t=h.updateQueue,i.updateQueue=t,uc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Cm(s,t),s=s.sibling;return ye(_n,_n.current&1|2),i.child}t=t.sibling}u.tail!==null&&Rt()>hc&&(i.flags|=128,l=!0,Do(u,!1),i.lanes=4194304)}else{if(!l)if(t=rc(h),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,uc(i,t),Do(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Pt)return en(i),null}else 2*Rt()-u.renderingStartTime>hc&&s!==536870912&&(i.flags|=128,l=!0,Do(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(t=u.last,t!==null?t.sibling=h:i.child=h,u.last=h)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Rt(),i.sibling=null,t=_n.current,ye(_n,l?t&1|2:t&1),i):(en(i),null);case 22:case 23:return ca(i),Mf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&uc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&de(Rr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),oa(gn),en(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function LS(t,i){switch(cf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return oa(gn),Be(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return et(i),null;case 13:if(ca(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));po()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return de(_n),null;case 4:return Be(),null;case 10:return oa(i.type),null;case 22:case 23:return ca(i),Mf(),t!==null&&de(Rr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return oa(gn),null;case 25:return null;default:return null}}function n0(t,i){switch(cf(i),i.tag){case 3:oa(gn),Be();break;case 26:case 27:case 5:et(i);break;case 4:Be();break;case 13:ca(i);break;case 19:de(_n);break;case 10:oa(i.type);break;case 22:case 23:ca(i),Mf(),t!==null&&de(Rr);break;case 24:oa(gn)}}function No(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var h=s.create,E=s.inst;l=h(),E.destroy=l}s=s.next}while(s!==u)}}catch(w){qt(i,i.return,w)}}function Wa(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var h=u.next;l=h;do{if((l.tag&t)===t){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,u=i;var H=s,ne=w;try{ne()}catch(_e){qt(u,H,_e)}}}l=l.next}while(l!==h)}}catch(_e){qt(i,i.return,_e)}}function i0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Xm(i,s)}catch(l){qt(t,t.return,l)}}}function a0(t,i,s){s.props=Cr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function Uo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){qt(t,i,u)}}function Fi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){qt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){qt(t,i,u)}else s.current=null}function r0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){qt(t,t.return,u)}}function Qf(t,i,s){try{var l=t.stateNode;eb(l,t.type,s,i),l[bn]=i}catch(u){qt(t,t.return,u)}}function s0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=bc));else if(l!==4&&(l===27&&$a(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for($f(t,i,s),t=t.sibling;t!==null;)$f(t,i,s),t=t.sibling}function fc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&$a(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(fc(t,i,s),t=t.sibling;t!==null;)fc(t,i,s),t=t.sibling}function o0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,l,s),i[mn]=t,i[bn]=s}catch(h){qt(t,t.return,h)}}var da=!1,un=!1,ed=!1,l0=typeof WeakSet=="function"?WeakSet:Set,En=null;function PS(t,i){if(t=t.containerInfo,Ed=Cc,t=xm(t),Qu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,w=-1,H=-1,ne=0,_e=0,Se=t,se=null;t:for(;;){for(var le;Se!==s||u!==0&&Se.nodeType!==3||(w=E+u),Se!==h||l!==0&&Se.nodeType!==3||(H=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(le=Se.firstChild)!==null;)se=Se,Se=le;for(;;){if(Se===t)break t;if(se===s&&++ne===u&&(w=E),se===h&&++_e===l&&(H=E),(le=Se.nextSibling)!==null)break;Se=se,se=Se.parentNode}Se=le}s=w===-1||H===-1?null:{start:w,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Td={focusedElem:t,selectionRange:s},Cc=!1,En=i;En!==null;)if(i=En,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,En=t;else for(;En!==null;){switch(i=En,h=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var rt=Cr(s.type,u,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(rt,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){qt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)wd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,En=t;break}En=i.return}}function c0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ja(t,s),l&4&&No(5,s);break;case 1:if(ja(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){qt(s,s.return,E)}else{var u=Cr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){qt(s,s.return,E)}}l&64&&i0(s),l&512&&Uo(s,s.return);break;case 3:if(ja(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Xm(t,i)}catch(E){qt(s,s.return,E)}}break;case 27:i===null&&l&4&&o0(s);case 26:case 5:ja(t,s),i===null&&l&4&&r0(s),l&512&&Uo(s,s.return);break;case 12:ja(t,s);break;case 13:ja(t,s),l&4&&d0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=kS.bind(null,s),ob(t,s))));break;case 22:if(l=s.memoizedState!==null||da,!l){i=i!==null&&i.memoizedState!==null||un,u=da;var h=un;da=l,(un=i)&&!h?qa(t,s,(s.subtreeFlags&8772)!==0):ja(t,s),da=u,un=h}break;case 30:break;default:ja(t,s)}}function u0(t){var i=t.alternate;i!==null&&(t.alternate=null,u0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Qr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,jn=!1;function ha(t,i,s){for(s=s.child;s!==null;)f0(t,i,s),s=s.sibling}function f0(t,i,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:un||Fi(s,i),ha(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||Fi(s,i);var l=Qt,u=jn;$a(s.type)&&(Qt=s.stateNode,jn=!1),ha(t,i,s),Go(s.stateNode),Qt=l,jn=u;break;case 5:un||Fi(s,i);case 6:if(l=Qt,u=jn,Qt=null,ha(t,i,s),Qt=l,jn=u,Qt!==null)if(jn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(s.stateNode)}catch(h){qt(s,i,h)}else try{Qt.removeChild(s.stateNode)}catch(h){qt(s,i,h)}break;case 18:Qt!==null&&(jn?(t=Qt,$0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Zo(t)):$0(Qt,s.stateNode));break;case 4:l=Qt,u=jn,Qt=s.stateNode.containerInfo,jn=!0,ha(t,i,s),Qt=l,jn=u;break;case 0:case 11:case 14:case 15:un||Wa(2,s,i),un||Wa(4,s,i),ha(t,i,s);break;case 1:un||(Fi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&a0(s,i,l)),ha(t,i,s);break;case 21:ha(t,i,s);break;case 22:un=(l=un)||s.memoizedState!==null,ha(t,i,s),un=l;break;default:ha(t,i,s)}}function d0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zo(t)}catch(s){qt(i,i.return,s)}}function OS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new l0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new l0),i;default:throw Error(r(435,t.tag))}}function td(t,i){var s=OS(t);i.forEach(function(l){var u=XS.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],h=t,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if($a(w.type)){Qt=w.stateNode,jn=!1;break e}break;case 5:Qt=w.stateNode,jn=!1;break e;case 3:case 4:Qt=w.stateNode.containerInfo,jn=!0;break e}w=w.return}if(Qt===null)throw Error(r(160));f0(h,E,u),Qt=null,jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)h0(i,t),i=i.sibling}var Ei=null;function h0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),$n(t),l&4&&(Wa(3,t,t.return),No(3,t),Wa(5,t,t.return));break;case 1:Jn(i,t),$n(t),l&512&&(un||s===null||Fi(s,s.return)),l&64&&da&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Ei;if(Jn(i,t),$n(t),l&512&&(un||s===null||Fi(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Oa]||h[mn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(l),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,l,s),h[mn]=t,sn(h),l=h;break e;case"link":var E=o_("link","href",u).get(l+(s.href||""));if(E){for(var w=0;w<E.length;w++)if(h=E[w],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(w,1);break t}}h=u.createElement(l),Cn(h,l,s),u.head.appendChild(h);break;case"meta":if(E=o_("meta","content",u).get(l+(s.content||""))){for(w=0;w<E.length;w++)if(h=E[w],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(w,1);break t}}h=u.createElement(l),Cn(h,l,s),u.head.appendChild(h);break;default:throw Error(r(468,l))}h[mn]=t,sn(h),l=h}t.stateNode=l}else l_(u,t.type,t.stateNode);else t.stateNode=s_(u,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?l_(u,t.type,t.stateNode):s_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),$n(t),l&512&&(un||s===null||Fi(s,s.return)),s!==null&&l&4&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),$n(t),l&512&&(un||s===null||Fi(s,s.return)),t.flags&32){u=t.stateNode;try{Kt(u,"")}catch(le){qt(t,t.return,le)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Qf(t,u,s!==null?s.memoizedProps:u)),l&1024&&(ed=!0);break;case 6:if(Jn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(le){qt(t,t.return,le)}}break;case 3:if(Ac=null,u=Ei,Ei=Ec(i.containerInfo),Jn(i,t),Ei=u,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zo(i.containerInfo)}catch(le){qt(t,t.return,le)}ed&&(ed=!1,p0(t));break;case 4:l=Ei,Ei=Ec(t.stateNode.containerInfo),Jn(i,t),$n(t),Ei=l;break;case 12:Jn(i,t),$n(t);break;case 13:Jn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(od=Rt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,td(t,l)));break;case 22:u=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ne=da,_e=un;if(da=ne||u,un=_e||H,Jn(i,t),un=_e,da=ne,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||H||da||un||Dr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(h=H.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=H.stateNode;var Se=H.memoizedProps.style,se=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(le){qt(H,H.return,le)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(le){qt(H,H.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,td(t,s))));break;case 19:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,td(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(s0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,h=Jf(t);fc(t,h,u);break;case 5:var E=s.stateNode;s.flags&32&&(Kt(E,""),s.flags&=-33);var w=Jf(t);fc(t,w,E);break;case 3:case 4:var H=s.stateNode.containerInfo,ne=Jf(t);$f(t,ne,H);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;p0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ja(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)c0(t,i.alternate,i),i=i.sibling}function Dr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Wa(4,i,i.return),Dr(i);break;case 1:Fi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&a0(i,i.return,s),Dr(i);break;case 27:Go(i.stateNode);case 26:case 5:Fi(i,i.return),Dr(i);break;case 22:i.memoizedState===null&&Dr(i);break;case 30:Dr(i);break;default:Dr(i)}t=t.sibling}}function qa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,h=i,E=h.flags;switch(h.tag){case 0:case 11:case 15:qa(u,h,s),No(4,h);break;case 1:if(qa(u,h,s),l=h,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){qt(l,l.return,ne)}if(l=h,u=l.updateQueue,u!==null){var w=l.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)km(H[u],w)}catch(ne){qt(l,l.return,ne)}}s&&E&64&&i0(h),Uo(h,h.return);break;case 27:o0(h);case 26:case 5:qa(u,h,s),s&&l===null&&E&4&&r0(h),Uo(h,h.return);break;case 12:qa(u,h,s);break;case 13:qa(u,h,s),s&&E&4&&d0(u,h);break;case 22:h.memoizedState===null&&qa(u,h,s),Uo(h,h.return);break;case 30:break;default:qa(u,h,s)}i=i.sibling}}function nd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&_o(s))}function id(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t))}function Bi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)m0(t,i,s,l),i=i.sibling}function m0(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(t,i,s,l),u&2048&&No(9,i);break;case 1:Bi(t,i,s,l);break;case 3:Bi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t)));break;case 12:if(u&2048){Bi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,E=h.id,w=h.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){qt(i,i.return,H)}}else Bi(t,i,s,l);break;case 13:Bi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,E=i.alternate,i.memoizedState!==null?h._visibility&2?Bi(t,i,s,l):Lo(t,i):h._visibility&2?Bi(t,i,s,l):(h._visibility|=2,gs(t,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&nd(E,i);break;case 24:Bi(t,i,s,l),u&2048&&id(i.alternate,i);break;default:Bi(t,i,s,l)}}function gs(t,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=t,E=i,w=s,H=l,ne=E.flags;switch(E.tag){case 0:case 11:case 15:gs(h,E,w,H,u),No(8,E);break;case 23:break;case 22:var _e=E.stateNode;E.memoizedState!==null?_e._visibility&2?gs(h,E,w,H,u):Lo(h,E):(_e._visibility|=2,gs(h,E,w,H,u)),u&&ne&2048&&nd(E.alternate,E);break;case 24:gs(h,E,w,H,u),u&&ne&2048&&id(E.alternate,E);break;default:gs(h,E,w,H,u)}i=i.sibling}}function Lo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:Lo(s,l),u&2048&&nd(l.alternate,l);break;case 24:Lo(s,l),u&2048&&id(l.alternate,l);break;default:Lo(s,l)}i=i.sibling}}var Po=8192;function _s(t){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)g0(t),t=t.sibling}function g0(t){switch(t.tag){case 26:_s(t),t.flags&Po&&t.memoizedState!==null&&yb(Ei,t.memoizedState,t.memoizedProps);break;case 5:_s(t);break;case 3:case 4:var i=Ei;Ei=Ec(t.stateNode.containerInfo),_s(t),Ei=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,_s(t),Po=i):_s(t));break;default:_s(t)}}function _0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Oo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,x0(l,t)}_0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v0(t),t=t.sibling}function v0(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,dc(t)):Oo(t);break;default:Oo(t)}}function dc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,x0(l,t)}_0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Wa(8,i,i.return),dc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,dc(i));break;default:dc(i)}t=t.sibling}}function x0(t,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else e:for(s=t;En!==null;){l=En;var u=l.sibling,h=l.return;if(u0(l),l===s){En=null;break e}if(u!==null){u.return=h,En=u;break e}En=h}}}var IS={getCacheForType:function(t){var i=Nn(gn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},FS=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,xt=null,Et=0,zt=0,ei=null,Ya=!1,vs=!1,ad=!1,pa=0,an=0,Za=0,Nr=0,rd=0,fi=0,xs=0,Io=null,qn=null,sd=!1,od=0,hc=1/0,pc=null,Ka=null,wn=0,Qa=null,ys=null,Ss=0,ld=0,cd=null,y0=null,Fo=0,ud=null;function ti(){if((Bt&2)!==0&&Et!==0)return Et&-Et;if(O.T!==null){var t=ls;return t!==0?t:_d()}return wt()}function S0(){fi===0&&(fi=(Et&536870912)===0||Pt?W():536870912);var t=ui.current;return t!==null&&(t.flags|=32),fi}function ni(t,i,s){(t===Zt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(bs(t,0),Ja(t,Et,fi,!1)),Fe(t,s),((Bt&2)===0||t!==Zt)&&(t===Zt&&((Bt&2)===0&&(Nr|=s),an===4&&Ja(t,Et,fi,!1)),zi(t))}function b0(t,i,s){if((Bt&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ie(t,i),u=l?HS(t,i):hd(t,i,!0),h=l;do{if(u===0){vs&&!l&&Ja(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!BS(s)){u=hd(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=t;u=Io;var H=w.current.memoizedState.isDehydrated;if(H&&(bs(w,E).flags|=256),E=hd(w,E,!1),E!==2){if(ad&&!H){w.errorRecoveryDisabledLanes|=h,Nr|=h,u=4;break e}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){bs(t,0),Ja(t,i,0,!0);break}e:{switch(l=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ja(l,i,fi,!Ya);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=od+300-Rt(),10<u)){if(Ja(l,i,fi,!Ya),Ve(l,0,!0)!==0)break e;l.timeoutHandle=Q0(M0.bind(null,l,s,qn,pc,sd,i,fi,Nr,xs,Ya,h,2,-0,0),u);break e}M0(l,s,qn,pc,sd,i,fi,Nr,xs,Ya,h,0,-0,0)}}break}while(!0);zi(t)}function M0(t,i,s,l,u,h,E,w,H,ne,_e,Se,se,le){if(t.timeoutHandle=-1,Se=i.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Xo={stylesheets:null,count:0,unsuspend:xb},g0(i),Se=Sb(),Se!==null)){t.cancelPendingCommit=Se(D0.bind(null,t,i,h,s,l,u,E,w,H,_e,1,se,le)),Ja(t,h,E,!ne);return}D0(t,i,h,s,l,u,E,w,H)}function BS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],h=u.getSnapshot;u=u.value;try{if(!Kn(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ja(t,i,s,l){i&=~rd,i&=~Nr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var h=31-Le(u),E=1<<h;l[h]=-1,u&=~E}s!==0&&pe(t,s,i)}function mc(){return(Bt&6)===0?(Bo(0),!1):!0}function fd(){if(xt!==null){if(zt===0)var t=xt.return;else t=xt,sa=Tr=null,wf(t),ps=null,wo=0,t=xt;for(;t!==null;)n0(t.alternate,t),t=t.return;xt=null}}function bs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,nb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),fd(),Zt=t,xt=s=ia(t.current,null),Et=i,zt=0,ei=null,Ya=!1,vs=Ie(t,i),ad=!1,xs=fi=rd=Nr=Za=an=0,qn=Io=null,sd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Le(l),h=1<<u;i|=t[u],l&=~h}return pa=i,Fl(),s}function E0(t,i){mt=null,O.H=nc,i===xo||i===jl?(i=Gm(),zt=3):i===Bm?(i=Gm(),zt=4):zt=i===Vg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,xt===null&&(an=1,oc(t,si(i,t.current)))}function T0(){var t=O.H;return O.H=nc,t===null?nc:t}function A0(){var t=O.A;return O.A=IS,t}function dd(){an=4,Ya||(Et&4194048)!==Et&&ui.current!==null||(vs=!0),(Za&134217727)===0&&(Nr&134217727)===0||Zt===null||Ja(Zt,Et,fi,!1)}function hd(t,i,s){var l=Bt;Bt|=2;var u=T0(),h=A0();(Zt!==t||Et!==i)&&(pc=null,bs(t,i)),i=!1;var E=an;e:do try{if(zt!==0&&xt!==null){var w=xt,H=ei;switch(zt){case 8:fd(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var ne=zt;if(zt=0,ei=null,Ms(t,w,H,ne),s&&vs){E=0;break e}break;default:ne=zt,zt=0,ei=null,Ms(t,w,H,ne)}}zS(),E=an;break}catch(_e){E0(t,_e)}while(!0);return i&&t.shellSuspendCounter++,sa=Tr=null,Bt=l,O.H=u,O.A=h,xt===null&&(Zt=null,Et=0,Fl()),E}function zS(){for(;xt!==null;)R0(xt)}function HS(t,i){var s=Bt;Bt|=2;var l=T0(),u=A0();Zt!==t||Et!==i?(pc=null,hc=Rt()+500,bs(t,i)):vs=Ie(t,i);e:do try{if(zt!==0&&xt!==null){i=xt;var h=ei;t:switch(zt){case 1:zt=0,ei=null,Ms(t,i,h,1);break;case 2:case 9:if(zm(h)){zt=0,ei=null,w0(i);break}i=function(){zt!==2&&zt!==9||Zt!==t||(zt=7),zi(t)},h.then(i,i);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:zm(h)?(zt=0,ei=null,w0(i)):(zt=0,ei=null,Ms(t,i,h,7));break;case 5:var E=null;switch(xt.tag){case 26:E=xt.memoizedState;case 5:case 27:var w=xt;if(!E||c_(E)){zt=0,ei=null;var H=w.sibling;if(H!==null)xt=H;else{var ne=w.return;ne!==null?(xt=ne,gc(ne)):xt=null}break t}}zt=0,ei=null,Ms(t,i,h,5);break;case 6:zt=0,ei=null,Ms(t,i,h,6);break;case 8:fd(),an=6;break e;default:throw Error(r(462))}}GS();break}catch(_e){E0(t,_e)}while(!0);return sa=Tr=null,O.H=l,O.A=u,Bt=s,xt!==null?0:(Zt=null,Et=0,Fl(),an)}function GS(){for(;xt!==null&&!Ft();)R0(xt)}function R0(t){var i=e0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,i===null?gc(t):xt=i}function w0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Yg(s,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=Yg(s,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:wf(i);default:n0(s,i),i=xt=Cm(i,pa),i=e0(s,i,pa)}t.memoizedProps=t.pendingProps,i===null?gc(t):xt=i}function Ms(t,i,s,l){sa=Tr=null,wf(i),ps=null,wo=0;var u=i.return;try{if(DS(t,u,i,s,Et)){an=1,oc(t,si(s,t.current)),xt=null;return}}catch(h){if(u!==null)throw xt=u,h;an=1,oc(t,si(s,t.current)),xt=null;return}i.flags&32768?(Pt||l===1?t=!0:vs||(Et&536870912)!==0?t=!1:(Ya=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),C0(i,t)):gc(i)}function gc(t){var i=t;do{if((i.flags&32768)!==0){C0(i,Ya);return}t=i.return;var s=US(i.alternate,i,pa);if(s!==null){xt=s;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=t}while(i!==null);an===0&&(an=5)}function C0(t,i){do{var s=LS(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);an=6,xt=null}function D0(t,i,s,l,u,h,E,w,H){t.cancelPendingCommit=null;do _c();while(wn!==0);if((Bt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=nf,Te(t,s,h,E,w,H),t===Zt&&(xt=Zt=null,Et=0),ys=i,Qa=t,Ss=s,ld=h,cd=u,y0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,WS(Nt,function(){return O0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=B.p,B.p=2,E=Bt,Bt|=4;try{PS(t,i,s)}finally{Bt=E,B.p=u,O.T=l}}wn=1,N0(),U0(),L0()}}function N0(){if(wn===1){wn=0;var t=Qa,i=ys,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var u=Bt;Bt|=4;try{h0(i,t);var h=Td,E=xm(t.containerInfo),w=h.focusedElem,H=h.selectionRange;if(E!==w&&w&&w.ownerDocument&&vm(w.ownerDocument.documentElement,w)){if(H!==null&&Qu(w)){var ne=H.start,_e=H.end;if(_e===void 0&&(_e=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(_e,w.value.length);else{var Se=w.ownerDocument||document,se=Se&&Se.defaultView||window;if(se.getSelection){var le=se.getSelection(),rt=w.textContent.length,tt=Math.min(H.start,rt),kt=H.end===void 0?tt:Math.min(H.end,rt);!le.extend&&tt>kt&&(E=kt,kt=tt,tt=E);var Y=_m(w,tt),X=_m(w,kt);if(Y&&X&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var te=Se.createRange();te.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>kt?(le.addRange(te),le.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),le.addRange(te))}}}}for(Se=[],le=w;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var xe=Se[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Cc=!!Ed,Td=Ed=null}finally{Bt=u,B.p=l,O.T=s}}t.current=i,wn=2}}function U0(){if(wn===2){wn=0;var t=Qa,i=ys,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var u=Bt;Bt|=4;try{c0(t,i.alternate,i)}finally{Bt=u,B.p=l,O.T=s}}wn=3}}function L0(){if(wn===4||wn===3){wn=0,ut();var t=Qa,i=ys,s=Ss,l=y0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,ys=Qa=null,P0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),Ot(s),i=i.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,u=B.p,B.p=2,O.T=null;try{for(var h=t.onRecoverableError,E=0;E<l.length;E++){var w=l[E];h(w.value,{componentStack:w.stack})}}finally{O.T=i,B.p=u}}(Ss&3)!==0&&_c(),zi(t),u=t.pendingLanes,(s&4194090)!==0&&(u&42)!==0?t===ud?Fo++:(Fo=0,ud=t):Fo=0,Bo(0)}}function P0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,_o(i)))}function _c(t){return N0(),U0(),L0(),O0()}function O0(){if(wn!==5)return!1;var t=Qa,i=ld;ld=0;var s=Ot(Ss),l=O.T,u=B.p;try{B.p=32>s?32:s,O.T=null,s=cd,cd=null;var h=Qa,E=Ss;if(wn=0,ys=Qa=null,Ss=0,(Bt&6)!==0)throw Error(r(331));var w=Bt;if(Bt|=4,v0(h.current),m0(h,h.current,E,s),Bt=w,Bo(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,h)}catch{}return!0}finally{B.p=u,O.T=l,P0(t,i)}}function I0(t,i,s){i=si(s,i),i=Vf(t.stateNode,i,2),t=Ga(t,i,2),t!==null&&(Fe(t,2),zi(t))}function qt(t,i,s){if(t.tag===3)I0(t,t,s);else for(;i!==null;){if(i.tag===3){I0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ka===null||!Ka.has(l))){t=si(s,t),s=Hg(2),l=Ga(i,s,2),l!==null&&(Gg(s,l,i,t),Fe(l,2),zi(l));break}}i=i.return}}function pd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new FS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(ad=!0,u.add(s),t=VS.bind(null,t,i,s),i.then(t,t))}function VS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(Et&s)===s&&(an===4||an===3&&(Et&62914560)===Et&&300>Rt()-od?(Bt&2)===0&&bs(t,0):rd|=s,xs===Et&&(xs=0)),zi(t)}function F0(t,i){i===0&&(i=we()),t=as(t,i),t!==null&&(Fe(t,i),zi(t))}function kS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),F0(t,s)}function XS(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),F0(t,s)}function WS(t,i){return ct(t,i)}var vc=null,Es=null,md=!1,xc=!1,gd=!1,Ur=0;function zi(t){t!==Es&&t.next===null&&(Es===null?vc=Es=t:Es=Es.next=t),xc=!0,md||(md=!0,qS())}function Bo(t,i){if(!gd&&xc){gd=!0;do for(var s=!1,l=vc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var h=0;else{var E=l.suspendedLanes,w=l.pingedLanes;h=(1<<31-Le(42|t)+1)-1,h&=u&~(E&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,G0(l,h))}else h=Et,h=Ve(l,l===Zt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ie(l,h)||(s=!0,G0(l,h));l=l.next}while(s);gd=!1}}function jS(){B0()}function B0(){xc=md=!1;var t=0;Ur!==0&&(tb()&&(t=Ur),Ur=0);for(var i=Rt(),s=null,l=vc;l!==null;){var u=l.next,h=z0(l,i);h===0?(l.next=null,s===null?vc=u:s.next=u,u===null&&(Es=s)):(s=l,(t!==0||(h&3)!==0)&&(xc=!0)),l=u}Bo(t)}function z0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Le(h),w=1<<E,H=u[E];H===-1?((w&s)===0||(w&l)!==0)&&(u[E]=ft(w,i)):H<=i&&(t.expiredLanes|=w),h&=~w}if(i=Zt,s=Et,s=Ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&_t(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&_t(l),Ot(s)){case 2:case 8:s=Tt;break;case 32:s=Nt;break;case 268435456:s=I;break;default:s=Nt}return l=H0.bind(null,t),s=ct(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&_t(l),t.callbackPriority=2,t.callbackNode=null,2}function H0(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(_c()&&t.callbackNode!==s)return null;var l=Et;return l=Ve(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(b0(t,l,i),z0(t,Rt()),t.callbackNode!=null&&t.callbackNode===s?H0.bind(null,t):null)}function G0(t,i){if(_c())return null;b0(t,i,!0)}function qS(){ib(function(){(Bt&6)!==0?ct(Jt,jS):B0()})}function _d(){return Ur===0&&(Ur=W()),Ur}function V0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(""+t)}function k0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function YS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var h=V0((u[bn]||null).action),E=l.submitter;E&&(i=(i=E[bn]||null)?V0(i.formAction):E.getAttribute("formAction"),i!==null&&(h=i,E=null));var w=new Pl("action","action",null,l,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ur!==0){var H=E?k0(u,E):new FormData(u);Ff(s,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(w.preventDefault(),H=E?k0(u,E):new FormData(u),Ff(s,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var vd=0;vd<tf.length;vd++){var xd=tf[vd],ZS=xd.toLowerCase(),KS=xd[0].toUpperCase()+xd.slice(1);Mi(ZS,"on"+KS)}Mi(bm,"onAnimationEnd"),Mi(Mm,"onAnimationIteration"),Mi(Em,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(hS,"onTransitionRun"),Mi(pS,"onTransitionStart"),Mi(mS,"onTransitionCancel"),Mi(Tm,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function X0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],H=w.instance,ne=w.currentTarget;if(w=w.listener,H!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ne;try{h(u)}catch(_e){sc(_e)}u.currentTarget=null,h=H}else for(E=0;E<l.length;E++){if(w=l[E],H=w.instance,ne=w.currentTarget,w=w.listener,H!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ne;try{h(u)}catch(_e){sc(_e)}u.currentTarget=null,h=H}}}}function yt(t,i){var s=i[Zr];s===void 0&&(s=i[Zr]=new Set);var l=t+"__bubble";s.has(l)||(W0(i,t,2,!1),s.add(l))}function yd(t,i,s){var l=0;i&&(l|=4),W0(s,t,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Sd(t){if(!t[yc]){t[yc]=!0,Al.forEach(function(s){s!=="selectionchange"&&(QS.has(s)||yd(s,!1,t),yd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yc]||(i[yc]=!0,yd("selectionchange",!1,i))}}function W0(t,i,s,l){switch(m_(i)){case 2:var u=Eb;break;case 8:u=Tb;break;default:u=Od}s=u.bind(null,i,s,t),u=void 0,!Vu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function bd(t,i,s,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===u)break;if(E===4)for(E=l.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;w!==null;){if(E=Si(w),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){l=h=E;continue e}w=w.parentNode}}l=l.return}Jp(function(){var ne=h,_e=Hu(s),Se=[];e:{var se=Am.get(t);if(se!==void 0){var le=Pl,rt=t;switch(t){case"keypress":if(Ul(s)===0)break e;case"keydown":case"keyup":le=Wy;break;case"focusin":rt="focus",le=ju;break;case"focusout":rt="blur",le=ju;break;case"beforeblur":case"afterblur":le=ju;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Yy;break;case bm:case Mm:case Em:le=Iy;break;case Tm:le=Ky;break;case"scroll":case"scrollend":le=Ny;break;case"wheel":le=Jy;break;case"copy":case"cut":case"paste":le=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=im;break;case"toggle":case"beforetoggle":le=eS}var tt=(i&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?se!==null?se+"Capture":null:se;tt=[];for(var X=ne,te;X!==null;){var xe=X;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||Y===null||(xe=io(X,Y),xe!=null&&tt.push(Ho(X,xe,te))),kt)break;X=X.return}0<tt.length&&(se=new le(se,rt,null,s,_e),Se.push({event:se,listeners:tt}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",se&&s!==zu&&(rt=s.relatedTarget||s.fromElement)&&(Si(rt)||rt[Pa]))break e;if((le||se)&&(se=_e.window===_e?_e:(se=_e.ownerDocument)?se.defaultView||se.parentWindow:window,le?(rt=s.relatedTarget||s.toElement,le=ne,rt=rt?Si(rt):null,rt!==null&&(kt=c(rt),tt=rt.tag,rt!==kt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(le=null,rt=ne),le!==rt)){if(tt=tm,xe="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=im,xe="onPointerLeave",Y="onPointerEnter",X="pointer"),kt=le==null?se:Ui(le),te=rt==null?se:Ui(rt),se=new tt(xe,X+"leave",le,s,_e),se.target=kt,se.relatedTarget=te,xe=null,Si(_e)===ne&&(tt=new tt(Y,X+"enter",rt,s,_e),tt.target=te,tt.relatedTarget=kt,xe=tt),kt=xe,le&&rt)t:{for(tt=le,Y=rt,X=0,te=tt;te;te=Ts(te))X++;for(te=0,xe=Y;xe;xe=Ts(xe))te++;for(;0<X-te;)tt=Ts(tt),X--;for(;0<te-X;)Y=Ts(Y),te--;for(;X--;){if(tt===Y||Y!==null&&tt===Y.alternate)break t;tt=Ts(tt),Y=Ts(Y)}tt=null}else tt=null;le!==null&&j0(Se,se,le,tt,!1),rt!==null&&kt!==null&&j0(Se,kt,rt,tt,!0)}}e:{if(se=ne?Ui(ne):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var We=fm;else if(cm(se))if(dm)We=uS;else{We=lS;var vt=oS}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ne&&Pi(ne.elementType)&&(We=fm):We=cS;if(We&&(We=We(t,ne))){um(Se,We,s,_e);break e}vt&&vt(t,se,ne),t==="focusout"&&ne&&se.type==="number"&&ne.memoizedProps.value!=null&&Vn(se,"number",se.value)}switch(vt=ne?Ui(ne):window,t){case"focusin":(cm(vt)||vt.contentEditable==="true")&&(ts=vt,Ju=ne,fo=null);break;case"focusout":fo=Ju=ts=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,ym(Se,s,_e);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":ym(Se,s,_e)}var Qe;if(Yu)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else es?om(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(am&&s.locale!=="ko"&&(es||it!=="onCompositionStart"?it==="onCompositionEnd"&&es&&(Qe=$p()):(Fa=_e,ku="value"in Fa?Fa.value:Fa.textContent,es=!0)),vt=Sc(ne,it),0<vt.length&&(it=new nm(it,t,null,s,_e),Se.push({event:it,listeners:vt}),Qe?it.data=Qe:(Qe=lm(s),Qe!==null&&(it.data=Qe)))),(Qe=nS?iS(t,s):aS(t,s))&&(it=Sc(ne,"onBeforeInput"),0<it.length&&(vt=new nm("onBeforeInput","beforeinput",null,s,_e),Se.push({event:vt,listeners:it}),vt.data=Qe)),YS(Se,t,ne,s,_e)}X0(Se,i)})}function Ho(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Sc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=io(t,s),u!=null&&l.unshift(Ho(t,u,h)),u=io(t,i),u!=null&&l.push(Ho(t,u,h))),t.tag===3)return l;t=t.return}return[]}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,i,s,l,u){for(var h=i._reactName,E=[];s!==null&&s!==l;){var w=s,H=w.alternate,ne=w.stateNode;if(w=w.tag,H!==null&&H===l)break;w!==5&&w!==26&&w!==27||ne===null||(H=ne,u?(ne=io(s,h),ne!=null&&E.unshift(Ho(s,ne,H))):u||(ne=io(s,h),ne!=null&&E.push(Ho(s,ne,H)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var JS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(JS,`
`).replace($S,"")}function Y0(t,i){return i=q0(i),q0(t)===i}function bc(){}function Vt(t,i,s,l,u,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Kt(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Kt(t,""+l);break;case"className":ae(t,"class",l);break;case"tabIndex":ae(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,s,l);break;case"style":bi(t,l,h);break;case"data":if(i!=="object"){ae(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Dl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Vt(t,i,"name",u.name,u,null),Vt(t,i,"formEncType",u.formEncType,u,null),Vt(t,i,"formMethod",u.formMethod,u,null),Vt(t,i,"formTarget",u.formTarget,u,null)):(Vt(t,i,"encType",u.encType,u,null),Vt(t,i,"method",u.method,u,null),Vt(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Dl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=bc);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Dl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ce(t,"popover",l);break;case"xlinkActuate":ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ee(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ee(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ee(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ee(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ce(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Cl.get(s)||s,ce(t,s,l))}}function Md(t,i,s,l,u,h){switch(s){case"style":bi(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Kt(t,l):(typeof l=="number"||typeof l=="bigint")&&Kt(t,""+l);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=t[bn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ce(t,s,l)}}}function Cn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var l=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var E=s[h];if(E!=null)switch(h){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,h,E,s,null)}}u&&Vt(t,i,"srcSet",s.srcSet,s,null),l&&Vt(t,i,"src",s.src,s,null);return;case"input":yt("invalid",t);var w=h=E=u=null,H=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":u=_e;break;case"type":E=_e;break;case"checked":H=_e;break;case"defaultChecked":ne=_e;break;case"value":h=_e;break;case"defaultValue":w=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,i));break;default:Vt(t,i,l,_e,s,null)}}Gn(t,h,w,H,ne,E,u,!1),jt(t);return;case"select":yt("invalid",t),l=E=h=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:Vt(t,i,u,w,s,null)}i=h,s=E,t.multiple=!!l,i!=null?kn(t,!!l,i,!1):s!=null&&kn(t,!!l,s,!0);return;case"textarea":yt("invalid",t),h=u=l=null;for(E in s)if(s.hasOwnProperty(E)&&(w=s[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Vt(t,i,E,w,s,null)}It(t,l,u,h),jt(t);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,i,H,l,s,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(l=0;l<zo.length;l++)yt(zo[l],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,ne,l,s,null)}return;default:if(Pi(i)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&Md(t,i,_e,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Vt(t,i,w,l,s,null))}function eb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,w=null,H=null,ne=null,_e=null;for(le in s){var Se=s[le];if(s.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=Se;default:l.hasOwnProperty(le)||Vt(t,i,le,null,l,Se)}}for(var se in l){var le=l[se];if(Se=s[se],l.hasOwnProperty(se)&&(le!=null||Se!=null))switch(se){case"type":h=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":_e=le;break;case"value":E=le;break;case"defaultValue":w=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:le!==Se&&Vt(t,i,se,le,l,Se)}}St(t,E,w,H,ne,_e,h,u);return;case"select":le=E=w=se=null;for(h in s)if(H=s[h],s.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":le=H;default:l.hasOwnProperty(h)||Vt(t,i,h,null,l,H)}for(u in l)if(h=l[u],H=s[u],l.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":se=h;break;case"defaultValue":w=h;break;case"multiple":E=h;default:h!==H&&Vt(t,i,u,h,l,H)}i=w,s=E,l=le,se!=null?kn(t,!!s,se,!1):!!l!=!!s&&(i!=null?kn(t,!!s,i,!0):kn(t,!!s,s?[]:"",!1));return;case"textarea":le=se=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Vt(t,i,w,null,l,u)}for(E in l)if(u=l[E],h=s[E],l.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":se=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Vt(t,i,E,u,l,h)}ta(t,se,le);return;case"option":for(var rt in s)if(se=s[rt],s.hasOwnProperty(rt)&&se!=null&&!l.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Vt(t,i,rt,null,l,se)}for(H in l)if(se=l[H],le=s[H],l.hasOwnProperty(H)&&se!==le&&(se!=null||le!=null))switch(H){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Vt(t,i,H,se,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)se=s[tt],s.hasOwnProperty(tt)&&se!=null&&!l.hasOwnProperty(tt)&&Vt(t,i,tt,null,l,se);for(ne in l)if(se=l[ne],le=s[ne],l.hasOwnProperty(ne)&&se!==le&&(se!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,i));break;default:Vt(t,i,ne,se,l,le)}return;default:if(Pi(i)){for(var kt in s)se=s[kt],s.hasOwnProperty(kt)&&se!==void 0&&!l.hasOwnProperty(kt)&&Md(t,i,kt,void 0,l,se);for(_e in l)se=l[_e],le=s[_e],!l.hasOwnProperty(_e)||se===le||se===void 0&&le===void 0||Md(t,i,_e,se,l,le);return}}for(var Y in s)se=s[Y],s.hasOwnProperty(Y)&&se!=null&&!l.hasOwnProperty(Y)&&Vt(t,i,Y,null,l,se);for(Se in l)se=l[Se],le=s[Se],!l.hasOwnProperty(Se)||se===le||se==null&&le==null||Vt(t,i,Se,se,l,le)}var Ed=null,Td=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function Z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ad(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rd=null;function tb(){var t=window.event;return t&&t.type==="popstate"?t===Rd?!1:(Rd=t,!0):(Rd=null,!1)}var Q0=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,J0=typeof Promise=="function"?Promise:void 0,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof J0<"u"?function(t){return J0.resolve(null).then(t).catch(ab)}:Q0;function ab(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function $0(t,i){var s=i,l=0,u=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&Go(E.documentElement),s&2&&Go(E.body),s&4)for(s=E.head,Go(s),E=s.firstChild;E;){var w=E.nextSibling,H=E.nodeName;E[Oa]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=w}}if(u===0){t.removeChild(h),Zo(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=h}while(s);Zo(i)}function wd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":wd(s),Qr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function rb(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Oa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function sb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ti(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ob(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ti(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Dd=null;function e_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function t_(t,i,s){switch(i=Mc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Go(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Qr(t)}var di=new Map,n_=new Set;function Ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=B.d;B.d={f:lb,r:cb,D:ub,C:fb,L:db,m:hb,X:mb,S:pb,M:gb};function lb(){var t=ma.f(),i=mc();return t||i}function cb(t){var i=Ji(t);i!==null&&i.tag===5&&i.type==="form"?bg(i):ma.r(t)}var As=typeof document>"u"?null:document;function i_(t,i,s){var l=As;if(l&&typeof i=="string"&&i){var u=Yt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),n_.has(u)||(n_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Cn(i,"link",t),sn(i),l.head.appendChild(i)))}}function ub(t){ma.D(t),i_("dns-prefetch",t,null)}function fb(t,i){ma.C(t,i),i_("preconnect",t,i)}function db(t,i,s){ma.L(t,i,s);var l=As;if(l&&t&&i){var u='link[rel="preload"][as="'+Yt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Yt(s.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var h=u;switch(i){case"style":h=Rs(t);break;case"script":h=ws(t)}di.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),di.set(h,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(Vo(h))||i==="script"&&l.querySelector(ko(h))||(i=l.createElement("link"),Cn(i,"link",t),sn(i),l.head.appendChild(i)))}}function hb(t,i){ma.m(t,i);var s=As;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Yt(l)+'"][href="'+Yt(t)+'"]',h=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ws(t)}if(!di.has(h)&&(t=_({rel:"modulepreload",href:t},i),di.set(h,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ko(h)))return}l=s.createElement("link"),Cn(l,"link",t),sn(l),s.head.appendChild(l)}}}function pb(t,i,s){ma.S(t,i,s);var l=As;if(l&&t){var u=$i(l).hoistableStyles,h=Rs(t);i=i||"default";var E=u.get(h);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(Vo(h)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=di.get(h))&&Nd(t,s);var H=E=l.createElement("link");sn(H),Cn(H,"link",t),H._p=new Promise(function(ne,_e){H.onload=ne,H.onerror=_e}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Tc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},u.set(h,E)}}}function mb(t,i){ma.X(t,i);var s=As;if(s&&t){var l=$i(s).hoistableScripts,u=ws(t),h=l.get(u);h||(h=s.querySelector(ko(u)),h||(t=_({src:t,async:!0},i),(i=di.get(u))&&Ud(t,i),h=s.createElement("script"),sn(h),Cn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function gb(t,i){ma.M(t,i);var s=As;if(s&&t){var l=$i(s).hoistableScripts,u=ws(t),h=l.get(u);h||(h=s.querySelector(ko(u)),h||(t=_({src:t,async:!0,type:"module"},i),(i=di.get(u))&&Ud(t,i),h=s.createElement("script"),sn(h),Cn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function a_(t,i,s,l){var u=(u=Z.current)?Ec(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Rs(s.href),s=$i(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Rs(s.href);var h=$i(u).hoistableStyles,E=h.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=u.querySelector(Vo(t)))&&!h._p&&(E.instance=h,E.state.loading=5),di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},di.set(t,s),h||_b(u,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ws(s),s=$i(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Rs(t){return'href="'+Yt(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function r_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function _b(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",s),sn(i),t.head.appendChild(i))}function ws(t){return'[src="'+Yt(t)+'"]'}function ko(t){return"script[async]"+t}function s_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Yt(s.href)+'"]');if(l)return i.instance=l,sn(l),l;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),sn(l),Cn(l,"style",u),Tc(l,s.precedence,t),i.instance=l;case"stylesheet":u=Rs(s.href);var h=t.querySelector(Vo(u));if(h)return i.state.loading|=4,i.instance=h,sn(h),h;l=r_(s),(u=di.get(u))&&Nd(l,u),h=(t.ownerDocument||t).createElement("link"),sn(h);var E=h;return E._p=new Promise(function(w,H){E.onload=w,E.onerror=H}),Cn(h,"link",l),i.state.loading|=4,Tc(h,s.precedence,t),i.instance=h;case"script":return h=ws(s.src),(u=t.querySelector(ko(h)))?(i.instance=u,sn(u),u):(l=s,(u=di.get(h))&&(l=_({},s),Ud(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),sn(u),Cn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Tc(l,s.precedence,t));return i.instance}function Tc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,h=u,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Nd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ud(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ac=null;function o_(t,i,s){if(Ac===null){var l=new Map,u=Ac=new Map;u.set(s,l)}else u=Ac,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var h=s[u];if(!(h[Oa]||h[mn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(i)||"";E=t+E;var w=l.get(E);w?w.push(h):l.set(E,[h])}}return l}function l_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function vb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Xo=null;function xb(){}function yb(t,i,s){if(Xo===null)throw Error(r(475));var l=Xo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Rs(s.href),h=t.querySelector(Vo(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Rc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=h,sn(h);return}h=t.ownerDocument||t,s=r_(s),(u=di.get(u))&&Nd(s,u),h=h.createElement("link"),sn(h);var E=h;E._p=new Promise(function(w,H){E.onload=w,E.onerror=H}),Cn(h,"link",s),i.instance=h}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Rc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function Sb(){if(Xo===null)throw Error(r(475));var t=Xo;return t.stylesheets&&t.count===0&&Ld(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Ld(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Ld(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,i.forEach(bb,t),wc=null,Rc.call(t))}function bb(t,i){if(!(i.state.loading&4)){var s=wc.get(t);if(s)var l=s.get(null);else{s=new Map,wc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}u=i.instance,E=u.getAttribute("data-precedence"),h=s.get(E)||l,h===l&&s.set(null,u),s.set(E,u),this.count++,l=Rc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Wo={$$typeof:U,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Mb(t,i,s,l,u,h,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function u_(t,i,s,l,u,h,E,w,H,ne,_e,Se){return t=new Mb(t,i,s,E,w,H,ne,Se),i=1,h===!0&&(i|=24),h=Qn(3,null,null,i),t.current=h,h.stateNode=t,i=pf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},vf(h),t}function f_(t){return t?(t=rs,t):rs}function d_(t,i,s,l,u,h){u=f_(u),l.context===null?l.context=u:l.pendingContext=u,l=Ha(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Ga(t,l,i),s!==null&&(ni(s,t,i),So(s,t,i))}function h_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Pd(t,i){h_(t,i),(t=t.alternate)&&h_(t,i)}function p_(t){if(t.tag===13){var i=as(t,67108864);i!==null&&ni(i,t,67108864),Pd(t,67108864)}}var Cc=!0;function Eb(t,i,s,l){var u=O.T;O.T=null;var h=B.p;try{B.p=2,Od(t,i,s,l)}finally{B.p=h,O.T=u}}function Tb(t,i,s,l){var u=O.T;O.T=null;var h=B.p;try{B.p=8,Od(t,i,s,l)}finally{B.p=h,O.T=u}}function Od(t,i,s,l){if(Cc){var u=Id(l);if(u===null)bd(t,i,l,Dc,s),g_(t,l);else if(Rb(u,t,i,s,l))l.stopPropagation();else if(g_(t,l),i&4&&-1<Ab.indexOf(t)){for(;u!==null;){var h=Ji(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=ze(h.pendingLanes);if(E!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var H=1<<31-Le(E);w.entanglements[1]|=H,E&=~H}zi(h),(Bt&6)===0&&(hc=Rt()+500,Bo(0))}}break;case 13:w=as(h,2),w!==null&&ni(w,h,2),mc(),Pd(h,2)}if(h=Id(l),h===null&&bd(t,i,l,Dc,s),h===u)break;u=h}u!==null&&l.stopPropagation()}else bd(t,i,l,null,s)}}function Id(t){return t=Hu(t),Fd(t)}var Dc=null;function Fd(t){if(Dc=null,t=Si(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Dc=t,null}function m_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case Jt:return 2;case Tt:return 8;case Nt:case Ye:return 32;case I:return 268435456;default:return 32}default:return 32}}var Bd=!1,er=null,tr=null,nr=null,jo=new Map,qo=new Map,ir=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Yo(t,i,s,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Ji(i),i!==null&&p_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Rb(t,i,s,l,u){switch(i){case"focusin":return er=Yo(er,t,i,s,l,u),!0;case"dragenter":return tr=Yo(tr,t,i,s,l,u),!0;case"mouseover":return nr=Yo(nr,t,i,s,l,u),!0;case"pointerover":var h=u.pointerId;return jo.set(h,Yo(jo.get(h)||null,t,i,s,l,u)),!0;case"gotpointercapture":return h=u.pointerId,qo.set(h,Yo(qo.get(h)||null,t,i,s,l,u)),!0}return!1}function __(t){var i=Si(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,yi(t.priority,function(){if(s.tag===13){var l=ti();l=at(l);var u=as(s,l);u!==null&&ni(u,s,l),Pd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Id(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);zu=l,s.target.dispatchEvent(l),zu=null}else return i=Ji(s),i!==null&&p_(i),t.blockedOn=s,!1;i.shift()}return!0}function v_(t,i,s){Nc(t)&&s.delete(i)}function wb(){Bd=!1,er!==null&&Nc(er)&&(er=null),tr!==null&&Nc(tr)&&(tr=null),nr!==null&&Nc(nr)&&(nr=null),jo.forEach(v_),qo.forEach(v_)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,Bd||(Bd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wb)))}var Lc=null;function x_(t){Lc!==t&&(Lc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Fd(l||s)===null)continue;break}var h=Ji(s);h!==null&&(t.splice(i,3),i-=3,Ff(h,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Zo(t){function i(H){return Uc(H,t)}er!==null&&Uc(er,t),tr!==null&&Uc(tr,t),nr!==null&&Uc(nr,t),jo.forEach(i),qo.forEach(i);for(var s=0;s<ir.length;s++){var l=ir[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ir.length&&(s=ir[0],s.blockedOn===null);)__(s),s.blockedOn===null&&ir.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],h=s[l+1],E=u[bn]||null;if(typeof h=="function")E||x_(s);else if(E){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[bn]||null)w=E.formAction;else if(Fd(u)!==null)continue}else w=E.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),x_(s)}}}function zd(t){this._internalRoot=t}Pc.prototype.render=zd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ti();d_(s,l,t,i,null,null)},Pc.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;d_(t.current,2,null,t,null,null),mc(),i[Pa]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var i=wt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ir.length&&i!==0&&i<ir[s].priority;s++);ir.splice(s,0,t),s===0&&__(t)}};var y_=e.version;if(y_!=="19.1.0")throw Error(r(527,y_,"19.1.0"));B.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var Cb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{ge=Oc.inject(Cb),ve=Oc}catch{}}return Qo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=Ig,h=Fg,E=Bg,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=u_(t,1,!1,null,null,s,l,u,h,E,w,null),t[Pa]=i.current,Sd(t),new zd(i)},Qo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",h=Ig,E=Fg,w=Bg,H=null,ne=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(ne=s.formState)),i=u_(t,1,!0,i,s??null,l,u,h,E,w,H,ne),i.context=f_(null),s=i.current,l=ti(),l=at(l),u=Ha(l),u.callback=null,Ga(s,u,l),s=l,i.current.lanes=s,Fe(i,s),zi(i),t[Pa]=i.current,Sd(t),new Pc(i)},Qo.version="19.1.0",Qo}var D_;function Hb(){if(D_)return Vd.exports;D_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Vd.exports=zb(),Vd.exports}var Gb=Hb(),Jo={},N_;function Vb(){if(N_)return Jo;N_=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.parse=f,Jo.serialize=d;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function f(g,S){const b=new c,A=g.length;if(A<2)return b;const y=(S==null?void 0:S.decode)||_;let v=0;do{const R=g.indexOf("=",v);if(R===-1)break;const U=g.indexOf(";",v),L=U===-1?A:U;if(R>L){v=g.lastIndexOf(";",R-1)+1;continue}const P=p(g,v,R),F=m(g,R,P),z=g.slice(P,F);if(b[z]===void 0){let M=p(g,R+1,L),N=m(g,L,M);const ue=y(g.slice(M,N));b[z]=ue}v=L+1}while(v<A);return b}function p(g,S,b){do{const A=g.charCodeAt(S);if(A!==32&&A!==9)return S}while(++S<b);return b}function m(g,S,b){for(;S>b;){const A=g.charCodeAt(--S);if(A!==32&&A!==9)return S+1}return b}function d(g,S,b){const A=(b==null?void 0:b.encode)||encodeURIComponent;if(!a.test(g))throw new TypeError(`argument name is invalid: ${g}`);const y=A(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=g+"="+y;if(!b)return v;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);v+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);v+="; Domain="+b.domain}if(b.path){if(!r.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);v+="; Path="+b.path}if(b.expires){if(!x(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);v+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(v+="; HttpOnly"),b.secure&&(v+="; Secure"),b.partitioned&&(v+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return v}function _(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function x(g){return o.call(g)==="[object Date]"}return Jo}Vb();var U_="popstate";function kb(a={}){function e(o,c){let{pathname:f="/",search:p="",hash:m=""}=qr(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Nh("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let f=o.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=o.location.href,d=m.indexOf("#");p=d===-1?m:m.slice(0,d)}return p+"#"+(typeof c=="string"?c:pl(c))}function r(o,c){Ni(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Wb(e,n,r,a)}function tn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ni(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Xb(){return Math.random().toString(36).substring(2,10)}function L_(a,e){return{usr:a.state,key:a.key,idx:e}}function Nh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?qr(e):e,state:n,key:e&&e.key||r||Xb()}}function pl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function qr(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function Wb(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,f=o.history,p="POP",m=null,d=_();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function _(){return(f.state||{idx:null}).idx}function x(){p="POP";let y=_(),v=y==null?null:y-d;d=y,m&&m({action:p,location:A.location,delta:v})}function g(y,v){p="PUSH";let R=Nh(A.location,y,v);n&&n(R,y),d=_()+1;let U=L_(R,d),L=A.createHref(R);try{f.pushState(U,"",L)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(L)}c&&m&&m({action:p,location:A.location,delta:1})}function S(y,v){p="REPLACE";let R=Nh(A.location,y,v);n&&n(R,y),d=_();let U=L_(R,d),L=A.createHref(R);f.replaceState(U,"",L),c&&m&&m({action:p,location:A.location,delta:0})}function b(y){return jb(y)}let A={get action(){return p},get location(){return a(o,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(U_,x),m=y,()=>{o.removeEventListener(U_,x),m=null}},createHref(y){return e(o,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:S,go(y){return f.go(y)}};return A}function jb(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),tn(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:pl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function ix(a,e,n="/"){return qb(a,e,n,!1)}function qb(a,e,n,r){let o=typeof e=="string"?qr(e):e,c=wa(o.pathname||"/",n);if(c==null)return null;let f=ax(a);Yb(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=rM(c);p=iM(f[m],d,r)}return p}function ax(a,e=[],n=[],r=""){let o=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(tn(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let d=Ta([r,m.relativePath]),_=n.concat(m);c.children&&c.children.length>0&&(tn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),ax(c.children,e,_,d)),!(c.path==null&&!c.index)&&e.push({path:d,score:tM(d,c.index),routesMeta:_})};return a.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))o(c,f);else for(let m of rx(c.path))o(c,f,m)}),e}function rx(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let f=rx(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&p.push(...f),p.map(m=>a.startsWith("/")&&m===""?"/":m)}function Yb(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:nM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Zb=/^:[\w-]+$/,Kb=3,Qb=2,Jb=1,$b=10,eM=-2,P_=a=>a==="*";function tM(a,e){let n=a.split("/"),r=n.length;return n.some(P_)&&(r+=eM),e&&(r+=Qb),n.filter(o=>!P_(o)).reduce((o,c)=>o+(Zb.test(c)?Kb:c===""?Jb:$b),r)}function nM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function iM(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],d=p===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",x=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},_),g=m.route;if(!x&&d&&n&&!r[r.length-1].route.index&&(x=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!x)return null;Object.assign(o,x.params),f.push({params:o,pathname:Ta([c,x.pathname]),pathnameBase:cM(Ta([c,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(c=Ta([c,x.pathnameBase]))}return f}function Su(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=aM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:r.reduce((d,{paramName:_,isOptional:x},g)=>{if(_==="*"){let b=p[g]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const S=p[g];return x&&!S?d[_]=void 0:d[_]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:a}}function aM(a,e=!1,n=!0){Ni(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function rM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function wa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function sM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?qr(a):a;return{pathname:n?n.startsWith("/")?n:oM(n,e):e,search:uM(r),hash:fM(o)}}function oM(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function jd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sx(a){let e=lM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function ox(a,e,n,r=!1){let o;typeof a=="string"?o=qr(a):(o={...a},tn(!o.pathname||!o.pathname.includes("?"),jd("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),jd("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),jd("#","search","hash",o)));let c=a===""||o.pathname==="",f=c?"/":o.pathname,p;if(f==null)p=n;else{let x=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),x-=1;o.pathname=g.join("/")}p=x>=0?e[x]:"/"}let m=sM(o,p),d=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(d||_)&&(m.pathname+="/"),m}var Ta=a=>a.join("/").replace(/\/\/+/g,"/"),cM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),uM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,fM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function dM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var lx=["POST","PUT","PATCH","DELETE"];new Set(lx);var hM=["GET",...lx];new Set(hM);var Js=$.createContext(null);Js.displayName="DataRouter";var Nu=$.createContext(null);Nu.displayName="DataRouterState";var cx=$.createContext({isTransitioning:!1});cx.displayName="ViewTransition";var pM=$.createContext(new Map);pM.displayName="Fetchers";var mM=$.createContext(null);mM.displayName="Await";var Zi=$.createContext(null);Zi.displayName="Navigation";var vl=$.createContext(null);vl.displayName="Location";var La=$.createContext({outlet:null,matches:[],isDataRoute:!1});La.displayName="Route";var Np=$.createContext(null);Np.displayName="RouteError";function gM(a,{relative:e}={}){tn(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=$.useContext(Zi),{hash:o,pathname:c,search:f}=yl(a,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:Ta([n,c])),r.createHref({pathname:p,search:f,hash:o})}function xl(){return $.useContext(vl)!=null}function Ki(){return tn(xl(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(vl).location}var ux="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fx(a){$.useContext(Zi).static||$.useLayoutEffect(a)}function dx(){let{isDataRoute:a}=$.useContext(La);return a?CM():_M()}function _M(){tn(xl(),"useNavigate() may be used only in the context of a <Router> component.");let a=$.useContext(Js),{basename:e,navigator:n}=$.useContext(Zi),{matches:r}=$.useContext(La),{pathname:o}=Ki(),c=JSON.stringify(sx(r)),f=$.useRef(!1);return fx(()=>{f.current=!0}),$.useCallback((m,d={})=>{if(Ni(f.current,ux),!f.current)return;if(typeof m=="number"){n.go(m);return}let _=ox(m,JSON.parse(c),o,d.relative==="path");a==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ta([e,_.pathname])),(d.replace?n.replace:n.push)(_,d.state,d)},[e,n,c,o,a])}$.createContext(null);function yl(a,{relative:e}={}){let{matches:n}=$.useContext(La),{pathname:r}=Ki(),o=JSON.stringify(sx(n));return $.useMemo(()=>ox(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function vM(a,e){return hx(a,e)}function hx(a,e,n,r){var v;tn(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=$.useContext(Zi),{matches:c}=$.useContext(La),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",d=f?f.pathnameBase:"/",_=f&&f.route;{let R=_&&_.path||"";px(m,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=Ki(),g;if(e){let R=typeof e=="string"?qr(e):e;tn(d==="/"||((v=R.pathname)==null?void 0:v.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${R.pathname}" was given in the \`location\` prop.`),g=R}else g=x;let S=g.pathname||"/",b=S;if(d!=="/"){let R=d.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(R.length).join("/")}let A=ix(a,{pathname:b});Ni(_||A!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Ni(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=MM(A&&A.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:Ta([d,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?d:Ta([d,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,n,r);return e&&y?$.createElement(vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},y):y}function xM(){let a=wM(),e=dM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:c},"ErrorBoundary")," or"," ",$.createElement("code",{style:c},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:o},n):null,f)}var yM=$.createElement(xM,null),SM=class extends $.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?$.createElement(La.Provider,{value:this.props.routeContext},$.createElement(Np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bM({routeContext:a,match:e,children:n}){let r=$.useContext(Js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(La.Provider,{value:a},n)}function MM(a,e=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,c=n==null?void 0:n.errors;if(c!=null){let m=o.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);tn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,p=-1;if(n)for(let m=0;m<o.length;m++){let d=o[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(p=m),d.route.id){let{loaderData:_,errors:x}=n,g=d.route.loader&&!_.hasOwnProperty(d.route.id)&&(!x||x[d.route.id]===void 0);if(d.route.lazy||g){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,d,_)=>{let x,g=!1,S=null,b=null;n&&(x=c&&d.route.id?c[d.route.id]:void 0,S=d.route.errorElement||yM,f&&(p<0&&_===0?(px("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,b=null):p===_&&(g=!0,b=d.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,_+1)),y=()=>{let v;return x?v=S:g?v=b:d.route.Component?v=$.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=m,$.createElement(bM,{match:d,routeContext:{outlet:m,matches:A,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||_===0)?$.createElement(SM,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Up(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(a){let e=$.useContext(Js);return tn(e,Up(a)),e}function TM(a){let e=$.useContext(Nu);return tn(e,Up(a)),e}function AM(a){let e=$.useContext(La);return tn(e,Up(a)),e}function Lp(a){let e=AM(a),n=e.matches[e.matches.length-1];return tn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function RM(){return Lp("useRouteId")}function wM(){var r;let a=$.useContext(Np),e=TM("useRouteError"),n=Lp("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function CM(){let{router:a}=EM("useNavigate"),e=Lp("useNavigate"),n=$.useRef(!1);return fx(()=>{n.current=!0}),$.useCallback(async(o,c={})=>{Ni(n.current,ux),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var O_={};function px(a,e,n){!e&&!O_[a]&&(O_[a]=!0,Ni(!1,n))}$.memo(DM);function DM({routes:a,future:e,state:n}){return hx(a,void 0,n,e)}function mx(a){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1}){tn(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),p=$.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=qr(n));let{pathname:m="/",search:d="",hash:_="",state:x=null,key:g="default"}=n,S=$.useMemo(()=>{let b=wa(m,f);return b==null?null:{location:{pathname:b,search:d,hash:_,state:x,key:g},navigationType:r}},[f,m,d,_,x,g,r]);return Ni(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${d}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:$.createElement(Zi.Provider,{value:p},$.createElement(vl.Provider,{children:e,value:S}))}function UM({children:a,location:e}){return vM(Uh(a),e)}function Uh(a,e=[]){let n=[];return $.Children.forEach(a,(r,o)=>{if(!$.isValidElement(r))return;let c=[...e,o];if(r.type===$.Fragment){n.push.apply(n,Uh(r.props.children,c));return}tn(r.type===mx,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Uh(r.props.children,c)),n.push(f)}),n}var du="get",hu="application/x-www-form-urlencoded";function Uu(a){return a!=null&&typeof a.tagName=="string"}function LM(a){return Uu(a)&&a.tagName.toLowerCase()==="button"}function PM(a){return Uu(a)&&a.tagName.toLowerCase()==="form"}function OM(a){return Uu(a)&&a.tagName.toLowerCase()==="input"}function IM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function FM(a,e){return a.button===0&&(!e||e==="_self")&&!IM(a)}var Ic=null;function BM(){if(Ic===null)try{new FormData(document.createElement("form"),0),Ic=!1}catch{Ic=!0}return Ic}var zM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qd(a){return a!=null&&!zM.has(a)?(Ni(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):a}function HM(a,e){let n,r,o,c,f;if(PM(a)){let p=a.getAttribute("action");r=p?wa(p,e):null,n=a.getAttribute("method")||du,o=qd(a.getAttribute("enctype"))||hu,c=new FormData(a)}else if(LM(a)||OM(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||p.getAttribute("action");if(r=m?wa(m,e):null,n=a.getAttribute("formmethod")||p.getAttribute("method")||du,o=qd(a.getAttribute("formenctype"))||qd(p.getAttribute("enctype"))||hu,c=new FormData(p,a),!BM()){let{name:d,type:_,value:x}=a;if(_==="image"){let g=d?`${d}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else d&&c.append(d,x)}}else{if(Uu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=du,r=null,o=hu,f=a}return c&&o==="text/plain"&&(f=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:f}}function Pp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function GM(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function kM(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await GM(c,n);return f.links?f.links():[]}return[]}));return qM(r.flat(1).filter(VM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function I_(a,e,n,r,o,c){let f=(m,d)=>n[d]?m.route.id!==n[d].route.id:!0,p=(m,d)=>{var _;return n[d].pathname!==m.pathname||((_=n[d].route.path)==null?void 0:_.endsWith("*"))&&n[d].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,d)=>f(m,d)||p(m,d)):c==="data"?e.filter((m,d)=>{var x;let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XM(a,e,{includeHydrateFallback:n}={}){return WM(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function WM(a){return[...new Set(a)]}function jM(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function qM(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(jM(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var YM=new Set([100,101,204,205]);function ZM(a,e){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":e&&wa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function gx(){let a=$.useContext(Js);return Pp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function KM(){let a=$.useContext(Nu);return Pp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Op=$.createContext(void 0);Op.displayName="FrameworkContext";function _x(){let a=$.useContext(Op);return Pp(a,"You must render this element inside a <HydratedRouter> element"),a}function QM(a,e){let n=$.useContext(Op),[r,o]=$.useState(!1),[c,f]=$.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:_,onTouchStart:x}=e,g=$.useRef(null);$.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let A=v=>{v.forEach(R=>{f(R.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[a]),$.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{o(!0)},b=()=>{o(!1),f(!1)};return n?a!=="intent"?[c,g,{}]:[c,g,{onFocus:$o(p,S),onBlur:$o(m,b),onMouseEnter:$o(d,S),onMouseLeave:$o(_,b),onTouchStart:$o(x,S)}]:[!1,g,{}]}function $o(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function JM({page:a,...e}){let{router:n}=gx(),r=$.useMemo(()=>ix(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?$.createElement(eE,{page:a,matches:r,...e}):null}function $M(a){let{manifest:e,routeModules:n}=_x(),[r,o]=$.useState([]);return $.useEffect(()=>{let c=!1;return kM(a,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[a,e,n]),r}function eE({page:a,matches:e,...n}){let r=Ki(),{manifest:o,routeModules:c}=_x(),{basename:f}=gx(),{loaderData:p,matches:m}=KM(),d=$.useMemo(()=>I_(a,e,m,o,r,"data"),[a,e,m,o,r]),_=$.useMemo(()=>I_(a,e,m,o,r,"assets"),[a,e,m,o,r]),x=$.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let b=new Set,A=!1;if(e.forEach(v=>{var U;let R=o.routes[v.route.id];!R||!R.hasLoader||(!d.some(L=>L.route.id===v.route.id)&&v.route.id in p&&((U=c[v.route.id])!=null&&U.shouldRevalidate)||R.hasClientLoader?A=!0:b.add(v.route.id))}),b.size===0)return[];let y=ZM(a,f);return A&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,p,r,o,d,e,a,c]),g=$.useMemo(()=>XM(_,o),[_,o]),S=$M(_);return $.createElement($.Fragment,null,x.map(b=>$.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),g.map(b=>$.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),S.map(({key:b,link:A})=>$.createElement("link",{key:b,...A})))}function tE(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vx&&(window.__reactRouterVersion="7.6.2")}catch{}function nE({basename:a,children:e,window:n}){let r=$.useRef();r.current==null&&(r.current=kb({window:n,v5Compat:!0}));let o=r.current,[c,f]=$.useState({action:o.action,location:o.location}),p=$.useCallback(m=>{$.startTransition(()=>f(m))},[f]);return $.useLayoutEffect(()=>o.listen(p),[o,p]),$.createElement(NM,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:o})}var xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bu=$.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:f,state:p,target:m,to:d,preventScrollReset:_,viewTransition:x,...g},S){let{basename:b}=$.useContext(Zi),A=typeof d=="string"&&xx.test(d),y,v=!1;if(typeof d=="string"&&A&&(y=d,vx))try{let N=new URL(window.location.href),ue=d.startsWith("//")?new URL(N.protocol+d):new URL(d),V=wa(ue.pathname,b);ue.origin===N.origin&&V!=null?d=V+ue.search+ue.hash:v=!0}catch{Ni(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=gM(d,{relative:o}),[U,L,P]=QM(r,g),F=sE(d,{replace:f,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:x});function z(N){e&&e(N),N.defaultPrevented||F(N)}let M=$.createElement("a",{...g,...P,href:y||R,onClick:v||c?e:z,ref:tE(S,L),target:m,"data-discover":!A&&n==="render"?"true":void 0});return U&&!A?$.createElement($.Fragment,null,M,$.createElement(JM,{page:R})):M});bu.displayName="Link";var iE=$.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:f,viewTransition:p,children:m,...d},_){let x=yl(f,{relative:d.relative}),g=Ki(),S=$.useContext(Nu),{navigator:b,basename:A}=$.useContext(Zi),y=S!=null&&fE(x)&&p===!0,v=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,R=g.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(R=R.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&A&&(U=wa(U,A)||U);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=R===v||!o&&R.startsWith(v)&&R.charAt(L)==="/",F=U!=null&&(U===v||!o&&U.startsWith(v)&&U.charAt(v.length)==="/"),z={isActive:P,isPending:F,isTransitioning:y},M=P?e:void 0,N;typeof r=="function"?N=r(z):N=[r,P?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let ue=typeof c=="function"?c(z):c;return $.createElement(bu,{...d,"aria-current":M,className:N,ref:_,style:ue,to:f,viewTransition:p},typeof m=="function"?m(z):m)});iE.displayName="NavLink";var aE=$.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:f=du,action:p,onSubmit:m,relative:d,preventScrollReset:_,viewTransition:x,...g},S)=>{let b=cE(),A=uE(p,{relative:d}),y=f.toLowerCase()==="get"?"get":"post",v=typeof p=="string"&&xx.test(p),R=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let L=U.nativeEvent.submitter,P=(L==null?void 0:L.getAttribute("formmethod"))||f;b(L||U.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:o,state:c,relative:d,preventScrollReset:_,viewTransition:x})};return $.createElement("form",{ref:S,method:y,action:A,onSubmit:r?m:R,...g,"data-discover":!v&&a==="render"?"true":void 0})});aE.displayName="Form";function rE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yx(a){let e=$.useContext(Js);return tn(e,rE(a)),e}function sE(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:f}={}){let p=dx(),m=Ki(),d=yl(a,{relative:c});return $.useCallback(_=>{if(FM(_,e)){_.preventDefault();let x=n!==void 0?n:pl(m)===pl(d);p(a,{replace:x,state:r,preventScrollReset:o,relative:c,viewTransition:f})}},[m,p,d,n,r,e,a,o,c,f])}var oE=0,lE=()=>`__${String(++oE)}__`;function cE(){let{router:a}=yx("useSubmit"),{basename:e}=$.useContext(Zi),n=RM();return $.useCallback(async(r,o={})=>{let{action:c,method:f,encType:p,formData:m,body:d}=HM(r,e);if(o.navigate===!1){let _=o.fetcherKey||lE();await a.fetch(_,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await a.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function uE(a,{relative:e}={}){let{basename:n}=$.useContext(Zi),r=$.useContext(La);tn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...yl(a||".",{relative:e})},f=Ki();if(a==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let _=p.toString();c.search=_?`?${_}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Ta([n,c.pathname])),pl(c)}function fE(a,e={}){let n=$.useContext(cx);tn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=yx("useViewTransitionState"),o=yl(a,{relative:e.relative});if(!n.isTransitioning)return!1;let c=wa(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=wa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Su(o.pathname,f)!=null||Su(o.pathname,c)!=null}[...YM];var dE=nx();const hE=()=>{const{pathname:a}=Ki();return $.useEffect(()=>{a==="/"&&window.scrollTo(0,0)},[a]),null},pE=[{id:"home",path:"/"},{id:"services",path:"/"},{id:"philosophy",path:"/"},{id:"work",path:"/projects"},{id:"reviews",path:"/reviews"},{id:"skills",path:"/reviews"},{id:"contact",path:"/contact"}],mE=96;function F_(){const a=window.scrollY+mE;let e="/";for(const{id:n,path:r}of pE){const o=document.getElementById(n);if(!o)continue;window.scrollY+o.getBoundingClientRect().top<=a&&(e=r)}return e}function gE(){const[a,e]=$.useState(F_);return $.useEffect(()=>{let n=0;const r=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{e(F_())})};r(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r);const o=new ResizeObserver(r);return o.observe(document.documentElement),()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),o.disconnect()}},[]),a}const _E=[{path:"/",label:"Home"},{path:"/projects",label:"Work"},{path:"/reviews",label:"Reviews"},{path:"/contact",label:"Contact"}],vE=()=>{const a=Ki(),e=gE(),[n,r]=$.useState(!1),[o,c]=$.useState(!0);return $.useEffect(()=>{r(!1)},[a.pathname]),$.useEffect(()=>{const f=document.querySelector(".hero--3d");if(!f){c(!1);return}const p=()=>{const m=f.getBoundingClientRect().bottom;c(m>48)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[a.pathname]),G.jsx("header",{className:`header${o?" header--dark":""}`,children:G.jsxs("div",{className:"header__inner container",children:[G.jsxs(bu,{to:"/",className:"header__brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[G.jsx("span",{className:"header__brand-name",children:"Taliba Sadiq"}),G.jsx("span",{className:"header__brand-tag",children:"Software Architect & AI Engineer"})]}),G.jsxs("button",{className:`header__burger${n?" header__burger--open":""}`,onClick:()=>r(f=>!f),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{})]}),G.jsx("nav",{className:`header__nav${n?" header__nav--open":""}`,"aria-label":"Main navigation",children:G.jsx("ul",{className:"header__list",children:_E.map(({path:f,label:p})=>{const m=e===f;return G.jsx("li",{children:G.jsx(bu,{to:f,className:`header__link ${m?"header__link--active":""}`,"aria-current":m?"page":void 0,onClick:()=>{r(!1),f==="/"&&a.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:p})},f)})})})]})})};function Sx(){return typeof window<"u"}function bx(a){var e;return(a==null||(e=a.ownerDocument)==null?void 0:e.defaultView)||window}function xE(a){return Sx()?a instanceof Element||a instanceof bx(a).Element:!1}function yE(a){return Sx()?a instanceof HTMLElement||a instanceof bx(a).HTMLElement:!1}const B_={};function Lu(a,e){const n=$.useRef(B_);return n.current===B_&&(n.current=a(e)),n}const Yd=tx[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],SE=Yd&&Yd!==$.useLayoutEffect?Yd:a=>a();function Ip(a){const e=Lu(bE).current;return e.next=a,SE(e.effect),e.trampoline}function bE(){const a={next:void 0,callback:ME,trampoline:(...e)=>{var n;return(n=a.callback)==null?void 0:n.call(a,...e)},effect:()=>{a.callback=a.next}};return a}function ME(){}const EE={...tx},TE=()=>{},Wr=typeof document<"u"?$.useLayoutEffect:TE;function Lh(a,e){if(a&&!e)return a;if(!a&&e)return e;if(a||e)return{...a,...e}}const hl={};function Mx(a,e,n,r,o){let c={...Ph(a,hl)};return e&&(c=pu(c,e)),n&&(c=pu(c,n)),r&&(c=pu(c,r)),c}function AE(a){if(a.length===0)return hl;if(a.length===1)return Ph(a[0],hl);let e={...Ph(a[0],hl)};for(let n=1;n<a.length;n+=1)e=pu(e,a[n]);return e}function pu(a,e){return Ex(e)?e(a):RE(a,e)}function RE(a,e){if(!e)return a;for(const n in e){const r=e[n];switch(n){case"style":{a[n]=Lh(a.style,r);break}case"className":{a[n]=Tx(a.className,r);break}default:wE(n,r)?a[n]=CE(a[n],r):a[n]=r}}return a}function wE(a,e){const n=a.charCodeAt(0),r=a.charCodeAt(1),o=a.charCodeAt(2);return n===111&&r===110&&o>=65&&o<=90&&(typeof e=="function"||typeof e>"u")}function Ex(a){return typeof a=="function"}function Ph(a,e){return Ex(a)?a(e):a??hl}function CE(a,e){return e?a?n=>{if(DE(n)){const o=n;Oh(o);const c=e(o);return o.baseUIHandlerPrevented||a==null||a(o),c}const r=e(n);return a==null||a(n),r}:e:a}function Oh(a){return a.preventBaseUIHandler=()=>{a.baseUIHandlerPrevented=!0},a}function Tx(a,e){return e?a?e+" "+a:e:a}function DE(a){return a!=null&&typeof a=="object"&&"nativeEvent"in a}function NE(a,e){return function(r,...o){const c=new URL(a);return c.searchParams.set("code",r.toString()),o.forEach(f=>c.searchParams.append("args[]",f)),`${e} error #${r}; visit ${c} for the full message.`}}const Fp=NE("https://base-ui.com/production-error","Base UI"),UE=$.createContext(void 0);function LE(a=!1){const e=$.useContext(UE);if(e===void 0&&!a)throw new Error(Fp(16));return e}function PE(a){const{focusableWhenDisabled:e,disabled:n,composite:r=!1,tabIndex:o=0,isNativeButton:c}=a,f=r&&e!==!1,p=r&&e===!1;return{props:$.useMemo(()=>{const d={onKeyDown(_){n&&e&&_.key!=="Tab"&&_.preventDefault()}};return r||(d.tabIndex=o,!c&&n&&(d.tabIndex=e?o:-1)),(c&&(e||f)||!c&&n)&&(d["aria-disabled"]=n),c&&(!e||p)&&(d.disabled=n),d},[r,n,e,f,p,c,o])}}function OE(a={}){const{disabled:e=!1,focusableWhenDisabled:n,tabIndex:r=0,native:o=!0,composite:c}=a,f=$.useRef(null),p=LE(!0),m=c??p!==void 0,{props:d}=PE({focusableWhenDisabled:n,disabled:e,composite:m,tabIndex:r,isNativeButton:o}),_=$.useCallback(()=>{const S=f.current;Zd(S)&&m&&e&&d.disabled===void 0&&S.disabled&&(S.disabled=!1)},[e,d.disabled,m]);Wr(_,[_]);const x=$.useCallback((S={})=>{const{onClick:b,onMouseDown:A,onKeyUp:y,onKeyDown:v,onPointerDown:R,...U}=S;return Mx({type:o?"button":void 0,onClick(P){if(e){P.preventDefault();return}b==null||b(P)},onMouseDown(P){e||A==null||A(P)},onKeyDown(P){if(e||(Oh(P),v==null||v(P),P.baseUIHandlerPrevented))return;const F=P.target===P.currentTarget,z=P.currentTarget,M=Zd(z),N=!o&&IE(z),ue=F&&(o?M:!N),V=P.key==="Enter",K=P.key===" ",ie=z.getAttribute("role"),fe=(ie==null?void 0:ie.startsWith("menuitem"))||ie==="option"||ie==="gridcell";if(F&&m&&K){if(P.defaultPrevented&&fe)return;P.preventDefault(),N||o&&M?(z.click(),P.preventBaseUIHandler()):ue&&(b==null||b(P),P.preventBaseUIHandler());return}ue&&(!o&&(K||V)&&P.preventDefault(),!o&&V&&(b==null||b(P)))},onKeyUp(P){if(!e){if(Oh(P),y==null||y(P),P.target===P.currentTarget&&o&&m&&Zd(P.currentTarget)&&P.key===" "){P.preventDefault();return}P.baseUIHandlerPrevented||P.target===P.currentTarget&&!o&&!m&&P.key===" "&&(b==null||b(P))}},onPointerDown(P){if(e){P.preventDefault();return}R==null||R(P)}},o?void 0:{role:"button"},d,U)},[e,d,m,o]),g=Ip(S=>{f.current=S,_()});return{getButtonProps:x,buttonRef:g}}function Zd(a){return yE(a)&&a.tagName==="BUTTON"}function IE(a){return!!((a==null?void 0:a.tagName)==="A"&&(a!=null&&a.href))}function z_(a,e,n,r){const o=Lu(Ax).current;return BE(o,a,e,n,r)&&Rx(o,[a,e,n,r]),o.callback}function FE(a){const e=Lu(Ax).current;return zE(e,a)&&Rx(e,a),e.callback}function Ax(){return{callback:null,cleanup:null,refs:[]}}function BE(a,e,n,r,o){return a.refs[0]!==e||a.refs[1]!==n||a.refs[2]!==r||a.refs[3]!==o}function zE(a,e){return a.refs.length!==e.length||a.refs.some((n,r)=>n!==e[r])}function Rx(a,e){if(a.refs=e,e.every(n=>n==null)){a.callback=null;return}a.callback=n=>{if(a.cleanup&&(a.cleanup(),a.cleanup=null),n!=null){const r=Array(e.length).fill(null);for(let o=0;o<e.length;o+=1){const c=e[o];if(c!=null)switch(typeof c){case"function":{const f=c(n);typeof f=="function"&&(r[o]=f);break}case"object":{c.current=n;break}}}a.cleanup=()=>{for(let o=0;o<e.length;o+=1){const c=e[o];if(c!=null)switch(typeof c){case"function":{const f=r[o];typeof f=="function"?f():c(null);break}case"object":{c.current=null;break}}}}}}}const HE=parseInt($.version,10);function GE(a){return HE>=a}function H_(a){if(!$.isValidElement(a))return null;const e=a,n=e.props;return(GE(19)?n==null?void 0:n.ref:e.ref)??null}function VE(a,e){const n={};for(const r in a){const o=a[r];if(e!=null&&e.hasOwnProperty(r)){const c=e[r](o);c!=null&&Object.assign(n,c);continue}o===!0?n[`data-${r.toLowerCase()}`]="":o&&(n[`data-${r.toLowerCase()}`]=o.toString())}return n}function kE(a,e){return typeof a=="function"?a(e):a}function XE(a,e){return typeof a=="function"?a(e):a}function gi(){}const ba=Object.freeze({});function wx(a,e,n={}){const r=e.render,o=WE(e,n);if(n.enabled===!1)return null;const c=n.state??ba;return qE(a,r,o,c)}function WE(a,e={}){const{className:n,style:r,render:o}=a,{state:c=ba,ref:f,props:p,stateAttributesMapping:m,enabled:d=!0}=e,_=d?kE(n,c):void 0,x=d?XE(r,c):void 0,g=d?VE(c,m):ba,S=d?Lh(g,Array.isArray(p)?AE(p):p)??ba:ba;return typeof document<"u"&&(d?Array.isArray(f)?S.ref=FE([S.ref,H_(o),...f]):S.ref=z_(S.ref,H_(o),f):z_(null,null)),d?(_!==void 0&&(S.className=Tx(S.className,_)),x!==void 0&&(S.style=Lh(S.style,x)),S):ba}const jE=Symbol.for("react.lazy");function qE(a,e,n,r){if(e){if(typeof e=="function")return e(n,r);const o=Mx(n,e.props);o.ref=n.ref;let c=e;return(c==null?void 0:c.$$typeof)===jE&&(c=$.Children.toArray(e)[0]),$.cloneElement(c,o)}if(a&&typeof a=="string")return YE(a,n);throw new Error(Fp(8))}function YE(a,e){return a==="button"?$.createElement("button",{type:"button",...e,key:e.key}):a==="img"?$.createElement("img",{alt:"",...e,key:e.key}):$.createElement(a,e)}const ZE=$.forwardRef(function(e,n){const{render:r,className:o,disabled:c=!1,focusableWhenDisabled:f=!1,nativeButton:p=!0,...m}=e,{getButtonProps:d,buttonRef:_}=OE({disabled:c,focusableWhenDisabled:f,native:p});return wx("button",e,{state:{disabled:c},ref:[n,_],props:[m,d]})});function Cx(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(n=Cx(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function Dx(){for(var a,e,n=0,r="",o=arguments.length;n<o;n++)(a=arguments[n])&&(e=Cx(a))&&(r&&(r+=" "),r+=e);return r}const G_=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,V_=Dx,KE=(a,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return V_(a,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:c}=e,f=Object.keys(o).map(d=>{const _=n==null?void 0:n[d],x=c==null?void 0:c[d];if(_===null)return null;const g=G_(_)||G_(x);return o[d][g]}),p=n&&Object.entries(n).reduce((d,_)=>{let[x,g]=_;return g===void 0||(d[x]=g),d},{}),m=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((d,_)=>{let{class:x,className:g,...S}=_;return Object.entries(S).every(b=>{let[A,y]=b;return Array.isArray(y)?y.includes({...c,...p}[A]):{...c,...p}[A]===y})?[...d,x,g]:d},[]);return V_(a,f,m,n==null?void 0:n.class,n==null?void 0:n.className)},QE=(a,e)=>{const n=new Array(a.length+e.length);for(let r=0;r<a.length;r++)n[r]=a[r];for(let r=0;r<e.length;r++)n[a.length+r]=e[r];return n},JE=(a,e)=>({classGroupId:a,validator:e}),Nx=(a=new Map,e=null,n)=>({nextPart:a,validators:e,classGroupId:n}),Mu="-",k_=[],$E="arbitrary..",eT=a=>{const e=nT(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=a;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return tT(f);const p=f.split(Mu),m=p[0]===""&&p.length>1?1:0;return Ux(p,m,e)},getConflictingClassGroupIds:(f,p)=>{if(p){const m=r[f],d=n[f];return m?d?QE(d,m):m:d||k_}return n[f]||k_}}},Ux=(a,e,n)=>{if(a.length-e===0)return n.classGroupId;const o=a[e],c=n.nextPart.get(o);if(c){const d=Ux(a,e+1,c);if(d)return d}const f=n.validators;if(f===null)return;const p=e===0?a.join(Mu):a.slice(e).join(Mu),m=f.length;for(let d=0;d<m;d++){const _=f[d];if(_.validator(p))return _.classGroupId}},tT=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=a.slice(1,-1),n=e.indexOf(":"),r=e.slice(0,n);return r?$E+r:void 0})(),nT=a=>{const{theme:e,classGroups:n}=a;return iT(n,e)},iT=(a,e)=>{const n=Nx();for(const r in a){const o=a[r];Bp(o,n,r,e)}return n},Bp=(a,e,n,r)=>{const o=a.length;for(let c=0;c<o;c++){const f=a[c];aT(f,e,n,r)}},aT=(a,e,n,r)=>{if(typeof a=="string"){rT(a,e,n);return}if(typeof a=="function"){sT(a,e,n,r);return}oT(a,e,n,r)},rT=(a,e,n)=>{const r=a===""?e:Lx(e,a);r.classGroupId=n},sT=(a,e,n,r)=>{if(lT(a)){Bp(a(r),e,n,r);return}e.validators===null&&(e.validators=[]),e.validators.push(JE(n,a))},oT=(a,e,n,r)=>{const o=Object.entries(a),c=o.length;for(let f=0;f<c;f++){const[p,m]=o[f];Bp(m,Lx(e,p),n,r)}},Lx=(a,e)=>{let n=a;const r=e.split(Mu),o=r.length;for(let c=0;c<o;c++){const f=r[c];let p=n.nextPart.get(f);p||(p=Nx(),n.nextPart.set(f,p)),n=p}return n},lT=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,cT=a=>{if(a<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),r=Object.create(null);const o=(c,f)=>{n[c]=f,e++,e>a&&(e=0,r=n,n=Object.create(null))};return{get(c){let f=n[c];if(f!==void 0)return f;if((f=r[c])!==void 0)return o(c,f),f},set(c,f){c in n?n[c]=f:o(c,f)}}},Ih="!",X_=":",uT=[],W_=(a,e,n,r,o)=>({modifiers:a,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),fT=a=>{const{prefix:e,experimentalParseClassName:n}=a;let r=o=>{const c=[];let f=0,p=0,m=0,d;const _=o.length;for(let A=0;A<_;A++){const y=o[A];if(f===0&&p===0){if(y===X_){c.push(o.slice(m,A)),m=A+1;continue}if(y==="/"){d=A;continue}}y==="["?f++:y==="]"?f--:y==="("?p++:y===")"&&p--}const x=c.length===0?o:o.slice(m);let g=x,S=!1;x.endsWith(Ih)?(g=x.slice(0,-1),S=!0):x.startsWith(Ih)&&(g=x.slice(1),S=!0);const b=d&&d>m?d-m:void 0;return W_(c,S,g,b)};if(e){const o=e+X_,c=r;r=f=>f.startsWith(o)?c(f.slice(o.length)):W_(uT,!1,f,void 0,!0)}if(n){const o=r;r=c=>n({className:c,parseClassName:o})}return r},dT=a=>{const e=new Map;return a.orderSensitiveModifiers.forEach((n,r)=>{e.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let c=0;c<n.length;c++){const f=n[c],p=f[0]==="[",m=e.has(f);p||m?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(f)):o.push(f)}return o.length>0&&(o.sort(),r.push(...o)),r}},hT=a=>({cache:cT(a.cacheSize),parseClassName:fT(a),sortModifiers:dT(a),...eT(a)}),pT=/\s+/,mT=(a,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:c}=e,f=[],p=a.trim().split(pT);let m="";for(let d=p.length-1;d>=0;d-=1){const _=p[d],{isExternal:x,modifiers:g,hasImportantModifier:S,baseClassName:b,maybePostfixModifierPosition:A}=n(_);if(x){m=_+(m.length>0?" "+m:m);continue}let y=!!A,v=r(y?b.substring(0,A):b);if(!v){if(!y){m=_+(m.length>0?" "+m:m);continue}if(v=r(b),!v){m=_+(m.length>0?" "+m:m);continue}y=!1}const R=g.length===0?"":g.length===1?g[0]:c(g).join(":"),U=S?R+Ih:R,L=U+v;if(f.indexOf(L)>-1)continue;f.push(L);const P=o(v,y);for(let F=0;F<P.length;++F){const z=P[F];f.push(U+z)}m=_+(m.length>0?" "+m:m)}return m},gT=(...a)=>{let e=0,n,r,o="";for(;e<a.length;)(n=a[e++])&&(r=Px(n))&&(o&&(o+=" "),o+=r);return o},Px=a=>{if(typeof a=="string")return a;let e,n="";for(let r=0;r<a.length;r++)a[r]&&(e=Px(a[r]))&&(n&&(n+=" "),n+=e);return n},_T=(a,...e)=>{let n,r,o,c;const f=m=>{const d=e.reduce((_,x)=>x(_),a());return n=hT(d),r=n.cache.get,o=n.cache.set,c=p,p(m)},p=m=>{const d=r(m);if(d)return d;const _=mT(m,n);return o(m,_),_};return c=f,(...m)=>c(gT(...m))},vT=[],vn=a=>{const e=n=>n[a]||vT;return e.isThemeGetter=!0,e},Ox=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ix=/^\((?:(\w[\w-]*):)?(.+)\)$/i,xT=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,yT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ST=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,MT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ET=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,rr=a=>xT.test(a),gt=a=>!!a&&!Number.isNaN(Number(a)),sr=a=>!!a&&Number.isInteger(Number(a)),Kd=a=>a.endsWith("%")&&gt(a.slice(0,-1)),ga=a=>yT.test(a),Fx=()=>!0,TT=a=>ST.test(a)&&!bT.test(a),zp=()=>!1,AT=a=>MT.test(a),RT=a=>ET.test(a),wT=a=>!je(a)&&!qe(a),CT=a=>gr(a,Hx,zp),je=a=>Ox.test(a),Lr=a=>gr(a,Gx,TT),j_=a=>gr(a,FT,gt),DT=a=>gr(a,kx,Fx),NT=a=>gr(a,Vx,zp),q_=a=>gr(a,Bx,zp),UT=a=>gr(a,zx,RT),Fc=a=>gr(a,Xx,AT),qe=a=>Ix.test(a),el=a=>Yr(a,Gx),LT=a=>Yr(a,Vx),Y_=a=>Yr(a,Bx),PT=a=>Yr(a,Hx),OT=a=>Yr(a,zx),Bc=a=>Yr(a,Xx,!0),IT=a=>Yr(a,kx,!0),gr=(a,e,n)=>{const r=Ox.exec(a);return r?r[1]?e(r[1]):n(r[2]):!1},Yr=(a,e,n=!1)=>{const r=Ix.exec(a);return r?r[1]?e(r[1]):n:!1},Bx=a=>a==="position"||a==="percentage",zx=a=>a==="image"||a==="url",Hx=a=>a==="length"||a==="size"||a==="bg-size",Gx=a=>a==="length",FT=a=>a==="number",Vx=a=>a==="family-name",kx=a=>a==="number"||a==="weight",Xx=a=>a==="shadow",BT=()=>{const a=vn("color"),e=vn("font"),n=vn("text"),r=vn("font-weight"),o=vn("tracking"),c=vn("leading"),f=vn("breakpoint"),p=vn("container"),m=vn("spacing"),d=vn("radius"),_=vn("shadow"),x=vn("inset-shadow"),g=vn("text-shadow"),S=vn("drop-shadow"),b=vn("blur"),A=vn("perspective"),y=vn("aspect"),v=vn("ease"),R=vn("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...L(),qe,je],F=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],M=()=>[qe,je,m],N=()=>[rr,"full","auto",...M()],ue=()=>[sr,"none","subgrid",qe,je],V=()=>["auto",{span:["full",sr,qe,je]},sr,qe,je],K=()=>[sr,"auto",qe,je],ie=()=>["auto","min","max","fr",qe,je],fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Q=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...M()],B=()=>[rr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],oe=()=>[rr,"screen","full","dvw","lvw","svw","min","max","fit",...M()],me=()=>[rr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...M()],D=()=>[a,qe,je],J=()=>[...L(),Y_,q_,{position:[qe,je]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ye=()=>["auto","cover","contain",PT,CT,{size:[qe,je]}],De=()=>[Kd,el,Lr],Oe=()=>["","none","full",d,qe,je],Z=()=>["",gt,el,Lr],Me=()=>["solid","dashed","dotted","double"],be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Be=()=>[gt,Kd,Y_,q_],Je=()=>["","none",b,qe,je],et=()=>["none",gt,qe,je],Wt=()=>["none",gt,qe,je],ct=()=>[gt,qe,je],_t=()=>[rr,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ga],breakpoint:[ga],color:[Fx],container:[ga],"drop-shadow":[ga],ease:["in","out","in-out"],font:[wT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ga],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ga],shadow:[ga],spacing:["px",gt],text:[ga],"text-shadow":[ga],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",rr,je,qe,y]}],container:["container"],columns:[{columns:[gt,je,qe,p]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{"inset-s":N(),start:N()}],end:[{"inset-e":N(),end:N()}],"inset-bs":[{"inset-bs":N()}],"inset-be":[{"inset-be":N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[sr,"auto",qe,je]}],basis:[{basis:[rr,"full","auto",p,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[gt,rr,"auto","initial","none",je]}],grow:[{grow:["",gt,qe,je]}],shrink:[{shrink:["",gt,qe,je]}],order:[{order:[sr,"first","last","none",qe,je]}],"grid-cols":[{"grid-cols":ue()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":ue()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ie()}],"auto-rows":[{"auto-rows":ie()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...fe(),"normal"]}],"justify-items":[{"justify-items":[...Q(),"normal"]}],"justify-self":[{"justify-self":["auto",...Q()]}],"align-content":[{content:["normal",...fe()]}],"align-items":[{items:[...Q(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Q(),{baseline:["","last"]}]}],"place-content":[{"place-content":fe()}],"place-items":[{"place-items":[...Q(),"baseline"]}],"place-self":[{"place-self":["auto",...Q()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pbs:[{pbs:M()}],pbe:[{pbe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mbs:[{mbs:O()}],mbe:[{mbe:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],"inline-size":[{inline:["auto",...oe()]}],"min-inline-size":[{"min-inline":["auto",...oe()]}],"max-inline-size":[{"max-inline":["none",...oe()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[p,"screen",...B()]}],"min-w":[{"min-w":[p,"screen","none",...B()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[f]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",n,el,Lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,IT,DT]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Kd,je]}],"font-family":[{font:[LT,NT,e]}],"font-features":[{"font-features":[je]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,qe,je]}],"line-clamp":[{"line-clamp":[gt,"none",qe,j_]}],leading:[{leading:[c,...M()]}],"list-image":[{"list-image":["none",qe,je]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qe,je]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Me(),"wavy"]}],"text-decoration-thickness":[{decoration:[gt,"from-font","auto",qe,Lr]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[gt,"auto",qe,je]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe,je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe,je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:J()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:ye()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},sr,qe,je],radial:["",qe,je],conic:[sr,qe,je]},OT,UT]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:De()}],"gradient-via-pos":[{via:De()}],"gradient-to-pos":[{to:De()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:Oe()}],"rounded-s":[{"rounded-s":Oe()}],"rounded-e":[{"rounded-e":Oe()}],"rounded-t":[{"rounded-t":Oe()}],"rounded-r":[{"rounded-r":Oe()}],"rounded-b":[{"rounded-b":Oe()}],"rounded-l":[{"rounded-l":Oe()}],"rounded-ss":[{"rounded-ss":Oe()}],"rounded-se":[{"rounded-se":Oe()}],"rounded-ee":[{"rounded-ee":Oe()}],"rounded-es":[{"rounded-es":Oe()}],"rounded-tl":[{"rounded-tl":Oe()}],"rounded-tr":[{"rounded-tr":Oe()}],"rounded-br":[{"rounded-br":Oe()}],"rounded-bl":[{"rounded-bl":Oe()}],"border-w":[{border:Z()}],"border-w-x":[{"border-x":Z()}],"border-w-y":[{"border-y":Z()}],"border-w-s":[{"border-s":Z()}],"border-w-e":[{"border-e":Z()}],"border-w-bs":[{"border-bs":Z()}],"border-w-be":[{"border-be":Z()}],"border-w-t":[{"border-t":Z()}],"border-w-r":[{"border-r":Z()}],"border-w-b":[{"border-b":Z()}],"border-w-l":[{"border-l":Z()}],"divide-x":[{"divide-x":Z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Me(),"hidden","none"]}],"divide-style":[{divide:[...Me(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-bs":[{"border-bs":D()}],"border-color-be":[{"border-be":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...Me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[gt,qe,je]}],"outline-w":[{outline:["",gt,el,Lr]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",_,Bc,Fc]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",x,Bc,Fc]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[gt,Lr]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":Z()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",g,Bc,Fc]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[gt,qe,je]}],"mix-blend":[{"mix-blend":[...be(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":be()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[gt]}],"mask-image-linear-from-pos":[{"mask-linear-from":Be()}],"mask-image-linear-to-pos":[{"mask-linear-to":Be()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":Be()}],"mask-image-t-to-pos":[{"mask-t-to":Be()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":Be()}],"mask-image-r-to-pos":[{"mask-r-to":Be()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":Be()}],"mask-image-b-to-pos":[{"mask-b-to":Be()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":Be()}],"mask-image-l-to-pos":[{"mask-l-to":Be()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":Be()}],"mask-image-x-to-pos":[{"mask-x-to":Be()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":Be()}],"mask-image-y-to-pos":[{"mask-y-to":Be()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[qe,je]}],"mask-image-radial-from-pos":[{"mask-radial-from":Be()}],"mask-image-radial-to-pos":[{"mask-radial-to":Be()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":L()}],"mask-image-conic-pos":[{"mask-conic":[gt]}],"mask-image-conic-from-pos":[{"mask-conic-from":Be()}],"mask-image-conic-to-pos":[{"mask-conic-to":Be()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:J()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:ye()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qe,je]}],filter:[{filter:["","none",qe,je]}],blur:[{blur:Je()}],brightness:[{brightness:[gt,qe,je]}],contrast:[{contrast:[gt,qe,je]}],"drop-shadow":[{"drop-shadow":["","none",S,Bc,Fc]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",gt,qe,je]}],"hue-rotate":[{"hue-rotate":[gt,qe,je]}],invert:[{invert:["",gt,qe,je]}],saturate:[{saturate:[gt,qe,je]}],sepia:[{sepia:["",gt,qe,je]}],"backdrop-filter":[{"backdrop-filter":["","none",qe,je]}],"backdrop-blur":[{"backdrop-blur":Je()}],"backdrop-brightness":[{"backdrop-brightness":[gt,qe,je]}],"backdrop-contrast":[{"backdrop-contrast":[gt,qe,je]}],"backdrop-grayscale":[{"backdrop-grayscale":["",gt,qe,je]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[gt,qe,je]}],"backdrop-invert":[{"backdrop-invert":["",gt,qe,je]}],"backdrop-opacity":[{"backdrop-opacity":[gt,qe,je]}],"backdrop-saturate":[{"backdrop-saturate":[gt,qe,je]}],"backdrop-sepia":[{"backdrop-sepia":["",gt,qe,je]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qe,je]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[gt,"initial",qe,je]}],ease:[{ease:["linear","initial",v,qe,je]}],delay:[{delay:[gt,qe,je]}],animate:[{animate:["none",R,qe,je]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,qe,je]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:et()}],"rotate-x":[{"rotate-x":et()}],"rotate-y":[{"rotate-y":et()}],"rotate-z":[{"rotate-z":et()}],scale:[{scale:Wt()}],"scale-x":[{"scale-x":Wt()}],"scale-y":[{"scale-y":Wt()}],"scale-z":[{"scale-z":Wt()}],"scale-3d":["scale-3d"],skew:[{skew:ct()}],"skew-x":[{"skew-x":ct()}],"skew-y":[{"skew-y":ct()}],transform:[{transform:[qe,je,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:_t()}],"translate-x":[{"translate-x":_t()}],"translate-y":[{"translate-y":_t()}],"translate-z":[{"translate-z":_t()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe,je]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mbs":[{"scroll-mbs":M()}],"scroll-mbe":[{"scroll-mbe":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pbs":[{"scroll-pbs":M()}],"scroll-pbe":[{"scroll-pbe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe,je]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[gt,el,Lr,j_]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},zT=_T(BT);function Bn(...a){return zT(Dx(a))}const HT=KE("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",lg:"h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-8","icon-xs":"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg","icon-lg":"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Xs({className:a,variant:e="default",size:n="default",...r}){return G.jsx(ZE,{"data-slot":"button",className:Bn(HT({variant:e,size:n}),a),...r})}let Z_=(function(a){return a.disabled="data-disabled",a.valid="data-valid",a.invalid="data-invalid",a.touched="data-touched",a.dirty="data-dirty",a.filled="data-filled",a.focused="data-focused",a})({});const GT={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},ul={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},VT={disabled:!1,...ul},kT={valid(a){return a===null?null:a?{[Z_.valid]:""}:{[Z_.invalid]:""}}},XT=$.createContext({invalid:void 0,name:void 0,validityData:{state:GT,errors:[],error:"",value:"",initialValue:null},setValidityData:gi,disabled:void 0,touched:ul.touched,setTouched:gi,dirty:ul.dirty,setDirty:gi,filled:ul.filled,setFilled:gi,focused:ul.focused,setFocused:gi,validate:()=>null,validationMode:"onSubmit",validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:VT,markedDirtyRef:{current:!1},validation:{getValidationProps:(a=ba)=>a,getInputValidationProps:(a=ba)=>a,inputRef:{current:null},commit:async()=>{}}});function Wx(a=!0){const e=$.useContext(XT);if(e.setValidityData===gi&&!a)throw new Error(Fp(28));return e}const WT=$.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:gi,validationMode:"onSubmit",submitAttemptedRef:{current:!1}});function jT(){return $.useContext(WT)}let K_=0;function qT(a,e="mui"){const[n,r]=$.useState(a),o=a||n;return $.useEffect(()=>{n==null&&(K_+=1,r(`${e}-${K_}`))},[n,e]),o}const Q_=EE.useId;function YT(a,e){if(Q_!==void 0){const n=Q_();return a??(e?`${e}-${n}`:n)}return qT(a,e)}function ZT(a){return YT(a,"base-ui")}const KT=$.createContext({controlId:void 0,registerControlId:gi,labelId:void 0,setLabelId:gi,messageIds:[],setMessageIds:gi,getDescriptionProps:a=>a});function jx(){return $.useContext(KT)}function QT(a,e){return{...a,state:{...a.state,valid:!e&&a.state.valid}}}function JT(a){return(a==null?void 0:a.ownerDocument)||document}function $T(a){var n;let e=a.activeElement;for(;((n=e==null?void 0:e.shadowRoot)==null?void 0:n.activeElement)!=null;)e=e.shadowRoot.activeElement;return e}function eA({controlled:a,default:e,name:n,state:r="value"}){const{current:o}=$.useRef(a!==void 0),[c,f]=$.useState(e),p=o?a:c,m=$.useCallback(d=>{o||f(d)},[]);return[p,m]}function tA(a={}){const{id:e,implicit:n=!1,controlRef:r}=a,{controlId:o,registerControlId:c}=jx(),f=ZT(e),p=n?o:void 0,m=Lu(()=>Symbol("labelable-control")),d=$.useRef(!1),_=$.useRef(e!=null),x=Ip(()=>{!d.current||c===gi||(d.current=!1,c(m.current,void 0))});return Wr(()=>{if(c===gi)return;let g;if(n){const S=r==null?void 0:r.current;xE(S)&&S.closest("label")!=null?g=e??null:g=p??f}else if(e!=null)_.current=!0,g=e;else if(_.current)g=f;else{x();return}if(g===void 0){x();return}d.current=!0,c(m.current,g)},[e,r,p,c,n,f,m,x]),$.useEffect(()=>x,[x]),o??f}function nA(a){const{enabled:e=!0,value:n,id:r,name:o,controlRef:c,commit:f}=a,{formRef:p}=jT(),{invalid:m,markedDirtyRef:d,validityData:_,setValidityData:x}=Wx(),g=Ip(a.getValue);Wr(()=>{if(!e)return;let S=n;S===void 0&&(S=g()),_.initialValue===null&&S!==null&&x(b=>({...b,initialValue:S}))},[e,x,n,_.initialValue,g]),Wr(()=>{!e||!r||p.current.fields.set(r,{getValue:g,name:o,controlRef:c,validityData:QT(_,m),validate(S=!0){let b=n;b===void 0&&(b=g()),d.current=!0,S?dE.flushSync(()=>f(b)):f(b)}})},[f,c,e,p,g,r,m,d,o,_,n]),Wr(()=>{const S=p.current.fields;return()=>{r&&S.delete(r)}},[p,r])}const iA="none";function aA(a,e,n,r){let o=!1,c=!1;const f=ba;return{reason:a,event:e??new Event("base-ui"),cancel(){o=!0},allowPropagation(){c=!0},get isCanceled(){return o},get isPropagationAllowed(){return c},trigger:n,...f}}const rA=$.forwardRef(function(e,n){const{render:r,className:o,id:c,name:f,value:p,disabled:m=!1,onValueChange:d,defaultValue:_,autoFocus:x=!1,...g}=e,{state:S,name:b,disabled:A,setTouched:y,setDirty:v,validityData:R,setFocused:U,setFilled:L,validationMode:P,validation:F}=Wx(),z=A||m,M=b??f,N={...S,disabled:z},{labelId:ue}=jx(),V=tA({id:c});Wr(()=>{var oe;const B=p!=null;(oe=F.inputRef.current)!=null&&oe.value||B&&p!==""?L(!0):B&&p===""&&L(!1)},[F.inputRef,L,p]);const K=$.useRef(null);Wr(()=>{x&&K.current===$T(JT(K.current))&&U(!0)},[x,U]);const[ie]=eA({controlled:p,default:_,name:"FieldControl",state:"value"}),fe=p!==void 0,Q=fe?ie:void 0;return nA({id:V,name:M,commit:F.commit,value:Q,getValue:()=>{var B;return(B=F.inputRef.current)==null?void 0:B.value},controlRef:F.inputRef}),wx("input",e,{ref:[n,K],state:N,props:[{id:V,disabled:z,name:M,ref:F.inputRef,"aria-labelledby":ue,autoFocus:x,...fe?{value:Q}:{defaultValue:_},onChange(B){const oe=B.currentTarget.value;d==null||d(oe,aA(iA,B.nativeEvent)),v(oe!==R.initialValue),L(oe!=="")},onFocus(){U(!0)},onBlur(B){y(!0),U(!1),P==="onBlur"&&F.commit(B.currentTarget.value)},onKeyDown(B){B.currentTarget.tagName==="INPUT"&&B.key==="Enter"&&(y(!0),F.commit(B.currentTarget.value))}},F.getInputValidationProps(),g],stateAttributesMapping:kT})}),sA=$.forwardRef(function(e,n){return G.jsx(rA,{ref:n,...e})});function tl({className:a,type:e,...n}){return G.jsx(sA,{type:e,"data-slot":"input",className:Bn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",a),...n})}function oA({className:a,...e}){return G.jsx("textarea",{"data-slot":"textarea",className:Bn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",a),...e})}const J_="",lA="https://api.web3forms.com/submit",cA=()=>{const[a,e]=$.useState("idle"),[n,r]=$.useState(""),[o,c]=$.useState(!1),f=$.useCallback(async p=>{if(p.preventDefault(),r(""),!J_.trim()){e("error"),r("Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com).");return}const m=p.currentTarget,d=new FormData(m),_=String(d.get("name")||"").trim(),x=String(d.get("email")||"").trim(),g=String(d.get("company")||"").trim(),S=String(d.get("phone")||"").trim(),b=String(d.get("project_type")||"").trim(),A=String(d.get("timeline")||"").trim(),y=String(d.get("budget")||"").trim(),v=String(d.get("details")||"").trim();if(String(d.get("botcheck")||"").trim())return;if(!_||!x||!v){r("Please fill in your name, email, and project details.");return}const U=[g&&`Company / org: ${g}`,S&&`Phone: ${S}`,b&&`Project type: ${b}`,A&&`Timeline: ${A}`,y&&`Budget / engagement: ${y}`,"","Project details:",v].filter(Boolean).join(`
`);e("sending");try{const L=await fetch(lA,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:J_,name:_,email:x,...S?{phone:S}:{},subject:`Portfolio inquiry: ${b||"Project"} (${_})`,message:U})}),P=await L.json().catch(()=>({}));L.ok&&P.success!==!1?(e("success"),m.reset()):(e("error"),r(P.message||"Something went wrong. Please try again in a moment."))}catch{e("error"),r("Network error. Check your connection and try again.")}},[]);return G.jsx("section",{id:"contact",className:"section section--contact contact-section contact-shell reveal","aria-labelledby":"contact-heading",children:G.jsxs("div",{className:"container contact-shell__inner",children:[G.jsxs("header",{className:"contact-shell__intro",children:[G.jsx("p",{className:"contact-shell__eyebrow",children:"Contact"}),G.jsx("h2",{id:"contact-heading",className:"contact-shell__title",children:"Let's build something together"}),G.jsx("p",{className:"contact-shell__lead",children:"Have a product that needs architecture, AI integration, or full-stack development? Tell me what you're working on. I'll reply within one business day."}),G.jsxs("ul",{className:"contact-shell__trust",children:[G.jsx("li",{children:"Specific questions get faster answers"}),G.jsx("li",{children:"Mention in the details if you need an NDA first"}),G.jsx("li",{children:"Project inquiries only (no recruiter blasts)"})]})]}),G.jsx("div",{className:"contact-form-panel",children:a==="success"?G.jsxs("div",{className:"contact-form-panel__success",role:"status",children:[G.jsx("p",{className:"contact-form-panel__success-icon","aria-hidden":"true",children:"✓"}),G.jsx("h3",{className:"contact-form-panel__success-title",children:"Message sent"}),G.jsx("p",{className:"contact-form-panel__success-text",children:"Your note is in my inbox. I'll reply in the same thread."}),G.jsx(Xs,{type:"button",variant:"ghost",className:Bn("btn btn--primary contact-form-panel__reset"),onClick:()=>e("idle"),children:"Send another message"})]}):G.jsxs("form",{className:"contact-form",onSubmit:f,noValidate:!0,children:[G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Name *"}),G.jsx(tl,{className:Bn("contact-form__input"),name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your name"})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Email *"}),G.jsx(tl,{className:Bn("contact-form__input"),name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"you@company.com"})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"What are you working on? *"}),G.jsx(oA,{className:Bn("contact-form__textarea"),name:"details",required:!0,rows:5,placeholder:"Stack, goals, constraints, and what done looks like."})]}),!o&&G.jsx(Xs,{type:"button",variant:"ghost",className:Bn("contact-form__toggle"),onClick:()=>c(!0),children:"+ Add more details (company, timeline, budget…)"}),o&&G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Company / organization"}),G.jsx(tl,{className:Bn("contact-form__input"),name:"company",type:"text",autoComplete:"organization",placeholder:"Optional"})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Phone (optional)"}),G.jsx(tl,{className:Bn("contact-form__input"),name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"+1 ..."})]})]}),G.jsxs("div",{className:"contact-form__row contact-form__row--2",children:[G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Project type"}),G.jsxs("select",{className:"contact-form__input contact-form__select",name:"project_type",defaultValue:"",children:[G.jsx("option",{value:"",children:"Select..."}),G.jsx("option",{value:"New build: web app",children:"New build: web app"}),G.jsx("option",{value:"New build: marketing site",children:"New build: marketing site"}),G.jsx("option",{value:"New build: mobile app",children:"New build: mobile app"}),G.jsx("option",{value:"New build: mobile & web",children:"New build: mobile & web"}),G.jsx("option",{value:"Refactor / stabilize codebase",children:"Refactor / stabilize codebase"}),G.jsx("option",{value:"Performance / reliability",children:"Performance / reliability"}),G.jsx("option",{value:"Architecture / technical review",children:"Architecture / technical review"}),G.jsx("option",{value:"AI / product integration",children:"AI / product integration"}),G.jsx("option",{value:"Other",children:"Other"})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Ideal timeline"}),G.jsxs("select",{className:"contact-form__input contact-form__select",name:"timeline",defaultValue:"",children:[G.jsx("option",{value:"",children:"Optional"}),G.jsx("option",{value:"Planning phase / TBD",children:"Planning phase / TBD"}),G.jsx("option",{value:"Rush (under 2 weeks)",children:"Rush (under 2 weeks)"}),G.jsx("option",{value:"2-4 weeks",children:"2-4 weeks"}),G.jsx("option",{value:"1-3 months",children:"1-3 months"}),G.jsx("option",{value:"3-6 months",children:"3-6 months"}),G.jsx("option",{value:"6+ months or ongoing",children:"6+ months or ongoing"}),G.jsx("option",{value:"Flexible / open schedule",children:"Flexible / open schedule"})]})]})]}),G.jsxs("label",{className:"contact-form__field",children:[G.jsx("span",{className:"contact-form__label",children:"Budget / engagement (optional)"}),G.jsx(tl,{className:Bn("contact-form__input"),name:"budget",type:"text",placeholder:"e.g. fixed scope, monthly retainer, TBD"})]})]}),G.jsxs("label",{className:"contact-form__hp","aria-hidden":"true",children:[G.jsx("span",{children:"Leave empty"}),G.jsx("input",{type:"text",name:"botcheck",tabIndex:-1,autoComplete:"off"})]}),a==="error"&&n&&G.jsx("p",{className:"contact-form__error",role:"alert",children:n}),G.jsx(Xs,{type:"submit",variant:"ghost",className:Bn("btn btn--primary contact-form__submit"),disabled:a==="sending",children:a==="sending"?"Sending...":"Send message"})]})})]})})};function uA(){$.useEffect(()=>{const a=document.querySelectorAll(".reveal");if(!a.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("reveal--visible"),e.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return a.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const fA={"/projects":"work","/about":"home","/reviews":"reviews","/contact":"contact"};function dA(){const a=Ki(),e=dx();uA();const n=$.useCallback((r,o)=>{const c=document.getElementById(r);c?c.scrollIntoView({behavior:"smooth"}):e(o)},[e]);return $.useLayoutEffect(()=>{var o;const r=fA[a.pathname];r&&((o=document.getElementById(r))==null||o.scrollIntoView({behavior:"smooth"}))},[a.pathname]),{scrollTo:n}}const hA="/assets/avatar-C2VzNt0k.png";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="183",pA=0,$_=1,mA=2,mu=1,gA=2,fl=3,mr=0,Zn=1,Ma=2,Aa=0,Ws=1,Eu=2,ev=3,tv=4,_A=5,Gr=100,vA=101,xA=102,yA=103,SA=104,bA=200,MA=201,EA=202,TA=203,Fh=204,Bh=205,AA=206,RA=207,wA=208,CA=209,DA=210,NA=211,UA=212,LA=213,PA=214,zh=0,Hh=1,Gh=2,qs=3,Vh=4,kh=5,Xh=6,Wh=7,qx=0,OA=1,IA=2,Wi=0,Yx=1,Zx=2,Kx=3,Qx=4,Jx=5,$x=6,ey=7,ty=300,jr=301,Ys=302,Qd=303,Jd=304,Pu=306,jh=1e3,Ea=1001,qh=1002,Dn=1003,FA=1004,zc=1005,On=1006,$d=1007,kr=1008,_i=1009,ny=1010,iy=1011,ml=1012,Gp=1013,qi=1014,ki=1015,Ca=1016,Vp=1017,kp=1018,gl=1020,ay=35902,ry=35899,sy=1021,oy=1022,Di=1023,Da=1026,Xr=1027,ly=1028,Xp=1029,Zs=1030,Wp=1031,jp=1033,gu=33776,_u=33777,vu=33778,xu=33779,Yh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,ep=37496,tp=37488,np=37489,ip=37490,ap=37491,rp=37808,sp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xp=36492,yp=36494,Sp=36495,bp=36283,Mp=36284,Ep=36285,Tp=36286,BA=3200,zA=0,HA=1,hr="",pi="srgb",Ks="srgb-linear",Tu="linear",Ht="srgb",Cs=7680,nv=519,GA=512,VA=513,kA=514,qp=515,XA=516,WA=517,Yp=518,jA=519,iv=35044,av="300 es",Xi=2e3,Au=2001;function qA(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ru(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function YA(){const a=Ru("canvas");return a.style.display="block",a}const rv={};function sv(...a){const e="THREE."+a.shift();console.log(e,...a)}function cy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=cy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Dt(...a){a=cy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function wu(...a){const e=a.join(" ");e in rv||(rv[e]=!0,st(...a))}function ZA(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const KA={[zh]:Hh,[Gh]:Xh,[Vh]:Wh,[qs]:kh,[Hh]:zh,[Xh]:Gh,[Wh]:Vh,[kh]:qs};class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=Math.PI/180,Ap=180/Math.PI;function Sl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function bt(a,e,n){return Math.max(e,Math.min(n,a))}function QA(a,e){return(a%e+e)%e}function th(a,e,n){return(1-n)*a+n*e}function nl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Yn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,n=0){Xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eo{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,p){let m=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3],g=c[f+0],S=c[f+1],b=c[f+2],A=c[f+3];if(x!==A||m!==g||d!==S||_!==b){let y=m*g+d*S+_*b+x*A;y<0&&(g=-g,S=-S,b=-b,A=-A,y=-y);let v=1-p;if(y<.9995){const R=Math.acos(y),U=Math.sin(R);v=Math.sin(v*R)/U,p=Math.sin(p*R)/U,m=m*v+g*p,d=d*v+S*p,_=_*v+b*p,x=x*v+A*p}else{m=m*v+g*p,d=d*v+S*p,_=_*v+b*p,x=x*v+A*p;const R=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=R,d*=R,_*=R,x*=R}}e[n]=m,e[n+1]=d,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,c,f){const p=r[o],m=r[o+1],d=r[o+2],_=r[o+3],x=c[f],g=c[f+1],S=c[f+2],b=c[f+3];return e[n]=p*b+_*x+m*S-d*g,e[n+1]=m*b+_*g+d*x-p*S,e[n+2]=d*b+_*S+p*g-m*x,e[n+3]=_*b-p*x-m*g-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,d=p(r/2),_=p(o/2),x=p(c/2),g=m(r/2),S=m(o/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*x+d*S*b,this._y=d*S*x-g*_*b,this._z=d*_*b+g*S*x,this._w=d*_*x-g*S*b;break;case"YXZ":this._x=g*_*x+d*S*b,this._y=d*S*x-g*_*b,this._z=d*_*b-g*S*x,this._w=d*_*x+g*S*b;break;case"ZXY":this._x=g*_*x-d*S*b,this._y=d*S*x+g*_*b,this._z=d*_*b+g*S*x,this._w=d*_*x-g*S*b;break;case"ZYX":this._x=g*_*x-d*S*b,this._y=d*S*x+g*_*b,this._z=d*_*b-g*S*x,this._w=d*_*x+g*S*b;break;case"YZX":this._x=g*_*x+d*S*b,this._y=d*S*x+g*_*b,this._z=d*_*b-g*S*x,this._w=d*_*x-g*S*b;break;case"XZY":this._x=g*_*x-d*S*b,this._y=d*S*x-g*_*b,this._z=d*_*b+g*S*x,this._w=d*_*x+g*S*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],p=n[5],m=n[9],d=n[2],_=n[6],x=n[10],g=r+p+x;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-d)*S,this._z=(f-o)*S}else if(r>p&&r>x){const S=2*Math.sqrt(1+r-p-x);this._w=(_-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+d)/S}else if(p>x){const S=2*Math.sqrt(1+p-r-x);this._w=(c-d)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+x-r-p);this._w=(f-o)/S,this._x=(c+d)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,p=n._x,m=n._y,d=n._z,_=n._w;return this._x=r*_+f*p+o*d-c*m,this._y=o*_+f*m+c*p-r*d,this._z=c*_+f*d+r*m-o*p,this._w=f*_-r*p-o*m-c*d,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,c=-c,f=-f,p=-p);let m=1-n;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,n=Math.sin(n*d)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ov.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ov.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,p=e.z,m=e.w,d=2*(f*o-p*r),_=2*(p*n-c*o),x=2*(c*r-f*n);return this.x=n+m*d+f*x-p*_,this.y=r+m*_+p*d-c*x,this.z=o+m*x+c*_-f*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,p=n.y,m=n.z;return this.x=o*m-c*p,this.y=c*f-r*m,this.z=r*p-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new re,ov=new eo;class ht{constructor(e,n,r,o,c,f,p,m,d){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,p,m,d)}set(e,n,r,o,c,f,p,m,d){const _=this.elements;return _[0]=e,_[1]=o,_[2]=p,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],_=r[4],x=r[7],g=r[2],S=r[5],b=r[8],A=o[0],y=o[3],v=o[6],R=o[1],U=o[4],L=o[7],P=o[2],F=o[5],z=o[8];return c[0]=f*A+p*R+m*P,c[3]=f*y+p*U+m*F,c[6]=f*v+p*L+m*z,c[1]=d*A+_*R+x*P,c[4]=d*y+_*U+x*F,c[7]=d*v+_*L+x*z,c[2]=g*A+S*R+b*P,c[5]=g*y+S*U+b*F,c[8]=g*v+S*L+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],_=e[8];return n*f*_-n*p*d-r*c*_+r*p*m+o*c*d-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],_=e[8],x=_*f-p*d,g=p*m-_*c,S=d*c-f*m,b=n*x+r*g+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=x*A,e[1]=(o*d-_*r)*A,e[2]=(p*r-o*f)*A,e[3]=g*A,e[4]=(_*n-o*m)*A,e[5]=(o*c-p*n)*A,e[6]=S*A,e[7]=(r*m-d*n)*A,e[8]=(f*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*f+d*p)+f+e,-o*d,o*m,-o*(-d*f+m*p)+p+n,0,0,1),this}scale(e,n){return this.premultiply(ih.makeScale(e,n)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,n){return this.premultiply(ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new ht,lv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JA(){const a={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(o.r=Ra(o.r),o.g=Ra(o.g),o.b=Ra(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===hr?Tu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return wu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return wu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ks]:{primaries:e,whitePoint:r,transfer:Tu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),a}const At=JA();function Ra(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function js(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ds;class $A{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=Ru("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ru("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ra(n[r]/255)*255):n[r]=Ra(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,p=o.length;f<p;f++)o[f].isDataTexture?c.push(ah(o[f].image)):c.push(ah(o[f]))}else c=ah(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ah(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?$A.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let t1=0;const rh=new re;class zn extends $s{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,r=Ea,o=Ea,c=On,f=kr,p=Di,m=_i,d=zn.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Sl(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ty;zn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,d=m[0],_=m[4],x=m[8],g=m[1],S=m[5],b=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+A)<.1&&Math.abs(b+y)<.1&&Math.abs(d+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,L=(S+1)/2,P=(v+1)/2,F=(_+g)/4,z=(x+A)/4,M=(b+y)/4;return U>L&&U>P?U<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(U),o=F/r,c=z/r):L>P?L<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),r=F/o,c=M/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=z/c,o=M/c),this.set(r,o,c,n),this}let R=Math.sqrt((y-b)*(y-b)+(x-A)*(x-A)+(g-_)*(g-_));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(x-A)/R,this.z=(g-_)/R,this.w=Math.acos((d+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n1 extends $s{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new zn(o),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Zp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends n1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class uy extends zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e,n,r,o,c,f,p,m,d,_,x,g,S,b,A,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,p,m,d,_,x,g,S,b,A,y)}set(e,n,r,o,c,f,p,m,d,_,x,g,S,b,A,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=d,v[6]=_,v[10]=x,v[14]=g,v[3]=S,v[7]=b,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(o),d=Math.sin(o),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*x,b=p*_,A=p*x;n[0]=m*_,n[4]=-m*x,n[8]=d,n[1]=S+b*d,n[5]=g-A*d,n[9]=-p*m,n[2]=A-g*d,n[6]=b+S*d,n[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*x,b=d*_,A=d*x;n[0]=g+A*p,n[4]=b*p-S,n[8]=f*d,n[1]=f*x,n[5]=f*_,n[9]=-p,n[2]=S*p-b,n[6]=A+g*p,n[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*x,b=d*_,A=d*x;n[0]=g-A*p,n[4]=-f*x,n[8]=b+S*p,n[1]=S+b*p,n[5]=f*_,n[9]=A-g*p,n[2]=-f*d,n[6]=p,n[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*x,b=p*_,A=p*x;n[0]=m*_,n[4]=b*d-S,n[8]=g*d+A,n[1]=m*x,n[5]=A*d+g,n[9]=S*d-b,n[2]=-d,n[6]=p*m,n[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*d,b=p*m,A=p*d;n[0]=m*_,n[4]=A-g*x,n[8]=b*x+S,n[1]=x,n[5]=f*_,n[9]=-p*_,n[2]=-d*_,n[6]=S*x+b,n[10]=g-A*x}else if(e.order==="XZY"){const g=f*m,S=f*d,b=p*m,A=p*d;n[0]=m*_,n[4]=-x,n[8]=d*_,n[1]=g*x+A,n[5]=f*_,n[9]=S*x-b,n[2]=b*x-S,n[6]=p*_,n[10]=A*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,r1)}lookAt(e,n,r){const o=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),or.crossVectors(r,ii),or.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),or.crossVectors(r,ii)),or.normalize(),Hc.crossVectors(ii,or),o[0]=or.x,o[4]=Hc.x,o[8]=ii.x,o[1]=or.y,o[5]=Hc.y,o[9]=ii.y,o[2]=or.z,o[6]=Hc.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],_=r[1],x=r[5],g=r[9],S=r[13],b=r[2],A=r[6],y=r[10],v=r[14],R=r[3],U=r[7],L=r[11],P=r[15],F=o[0],z=o[4],M=o[8],N=o[12],ue=o[1],V=o[5],K=o[9],ie=o[13],fe=o[2],Q=o[6],O=o[10],B=o[14],oe=o[3],me=o[7],D=o[11],J=o[15];return c[0]=f*F+p*ue+m*fe+d*oe,c[4]=f*z+p*V+m*Q+d*me,c[8]=f*M+p*K+m*O+d*D,c[12]=f*N+p*ie+m*B+d*J,c[1]=_*F+x*ue+g*fe+S*oe,c[5]=_*z+x*V+g*Q+S*me,c[9]=_*M+x*K+g*O+S*D,c[13]=_*N+x*ie+g*B+S*J,c[2]=b*F+A*ue+y*fe+v*oe,c[6]=b*z+A*V+y*Q+v*me,c[10]=b*M+A*K+y*O+v*D,c[14]=b*N+A*ie+y*B+v*J,c[3]=R*F+U*ue+L*fe+P*oe,c[7]=R*z+U*V+L*Q+P*me,c[11]=R*M+U*K+L*O+P*D,c[15]=R*N+U*ie+L*B+P*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],p=e[5],m=e[9],d=e[13],_=e[2],x=e[6],g=e[10],S=e[14],b=e[3],A=e[7],y=e[11],v=e[15],R=m*S-d*g,U=p*S-d*x,L=p*g-m*x,P=f*S-d*_,F=f*g-m*_,z=f*x-p*_;return n*(A*R-y*U+v*L)-r*(b*R-y*P+v*F)+o*(b*U-A*P+v*z)-c*(b*L-A*F+y*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],_=e[8],x=e[9],g=e[10],S=e[11],b=e[12],A=e[13],y=e[14],v=e[15],R=n*p-r*f,U=n*m-o*f,L=n*d-c*f,P=r*m-o*p,F=r*d-c*p,z=o*d-c*m,M=_*A-x*b,N=_*y-g*b,ue=_*v-S*b,V=x*y-g*A,K=x*v-S*A,ie=g*v-S*y,fe=R*ie-U*K+L*V+P*ue-F*N+z*M;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/fe;return e[0]=(p*ie-m*K+d*V)*Q,e[1]=(o*K-r*ie-c*V)*Q,e[2]=(A*z-y*F+v*P)*Q,e[3]=(g*F-x*z-S*P)*Q,e[4]=(m*ue-f*ie-d*N)*Q,e[5]=(n*ie-o*ue+c*N)*Q,e[6]=(y*L-b*z-v*U)*Q,e[7]=(_*z-g*L+S*U)*Q,e[8]=(f*K-p*ue+d*M)*Q,e[9]=(r*ue-n*K-c*M)*Q,e[10]=(b*F-A*L+v*R)*Q,e[11]=(x*L-_*F-S*R)*Q,e[12]=(p*N-f*V-m*M)*Q,e[13]=(n*V-r*N+o*M)*Q,e[14]=(A*U-b*P-y*R)*Q,e[15]=(_*P-x*U+g*R)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,p=e.y,m=e.z,d=c*f,_=c*p;return this.set(d*f+r,d*p-o*m,d*m+o*p,0,d*p+o*m,_*p+r,_*m-o*f,0,d*m-o*p,_*m+o*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,p=n._z,m=n._w,d=c+c,_=f+f,x=p+p,g=c*d,S=c*_,b=c*x,A=f*_,y=f*x,v=p*x,R=m*d,U=m*_,L=m*x,P=r.x,F=r.y,z=r.z;return o[0]=(1-(A+v))*P,o[1]=(S+L)*P,o[2]=(b-U)*P,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(g+v))*F,o[6]=(y+R)*F,o[7]=0,o[8]=(b+U)*z,o[9]=(y-R)*z,o[10]=(1-(g+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Ns.set(o[0],o[1],o[2]).length();const p=Ns.set(o[4],o[5],o[6]).length(),m=Ns.set(o[8],o[9],o[10]).length();c<0&&(f=-f),Ai.copy(this);const d=1/f,_=1/p,x=1/m;return Ai.elements[0]*=d,Ai.elements[1]*=d,Ai.elements[2]*=d,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,n.setFromRotationMatrix(Ai),r.x=f,r.y=p,r.z=m,this}makePerspective(e,n,r,o,c,f,p=Xi,m=!1){const d=this.elements,_=2*c/(n-e),x=2*c/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let b,A;if(m)b=c/(f-c),A=f*c/(f-c);else if(p===Xi)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===Au)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,c,f,p=Xi,m=!1){const d=this.elements,_=2/(n-e),x=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let b,A;if(m)b=1/(f-c),A=f/(f-c);else if(p===Xi)b=-2/(f-c),A=-(f+c)/(f-c);else if(p===Au)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new re,Ai=new rn,a1=new re(0,0,0),r1=new re(1,1,1),or=new re,Hc=new re,ii=new re,uv=new rn,fv=new eo;class Na{constructor(e=0,n=0,r=0,o=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],p=o[8],m=o[1],d=o[5],_=o[9],x=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Na.DEFAULT_ORDER="XYZ";class fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s1=0;const dv=new re,Us=new eo,_a=new rn,Gc=new re,il=new re,o1=new re,l1=new eo,hv=new re(1,0,0),pv=new re(0,1,0),mv=new re(0,0,1),gv={type:"added"},c1={type:"removed"},Ls={type:"childadded",child:null},sh={type:"childremoved",child:null};class Hn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new re,n=new Na,r=new eo,o=new re(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new ht}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(hv,e)}rotateY(e){return this.rotateOnAxis(pv,e)}rotateZ(e){return this.rotateOnAxis(mv,e)}translateOnAxis(e,n){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hv,e)}translateY(e){return this.translateOnAxis(pv,e)}translateZ(e){return this.translateOnAxis(mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Gc.copy(e):Gc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(il,Gc,this.up):_a.lookAt(Gc,il,this.up),this.quaternion.setFromRotationMatrix(_a),o&&(_a.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(_a),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c1),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,l1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));o.material=p}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(e.animations,m))}}if(n){const p=f(e.geometries),m=f(e.materials),d=f(e.textures),_=f(e.images),x=f(e.shapes),g=f(e.skeletons),S=f(e.animations),b=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=o,r;function f(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Hn.DEFAULT_UP=new re(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),v=this._getHandJoint(d,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),S=.02,b=.005;d.inputState.pinching&&g>S+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=S-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Vc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},kc={h:0,s:0,l:0};function lh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=QA(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=lh(f,c,e+1/3),this.g=lh(f,c,e),this.b=lh(f,c,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,n=pi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],p=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=dy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return At.workingToColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Pn.copy(this),n);const r=Pn.r,o=Pn.g,c=Pn.b,f=Math.max(r,o,c),p=Math.min(r,o,c);let m,d;const _=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=_<=.5?x/(f+p):x/(2-f-p),f){case r:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-r)/x+2;break;case c:m=(r-o)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=_,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=pi){At.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,r=Pn.g,o=Pn.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(kc);const r=th(lr.h,kc.h,n),o=th(lr.s,kc.s,n),c=th(lr.l,kc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Mt;Mt.NAMES=dy;class f1 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Na,this.environmentIntensity=1,this.environmentRotation=new Na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ri=new re,va=new re,ch=new re,xa=new re,Ps=new re,Os=new re,_v=new re,uh=new re,fh=new re,dh=new re,hh=new fn,ph=new fn,mh=new fn;class Ci{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ri.subVectors(e,n),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Ri.subVectors(o,n),va.subVectors(r,n),ch.subVectors(e,n);const f=Ri.dot(Ri),p=Ri.dot(va),m=Ri.dot(ch),d=va.dot(va),_=va.dot(ch),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,S=(d*m-p*_)*g,b=(f*_-p*m)*g;return c.set(1-S-b,b,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,n,r,o,c,f,p,m){return this.getBarycoord(e,n,r,o,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(e,n,r,o,c,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(hh,c.x),f.addScaledVector(ph,c.y),f.addScaledVector(mh,c.z),f}static isFrontFacing(e,n,r,o){return Ri.subVectors(r,n),va.subVectors(e,n),Ri.cross(va).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ri.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,p;Ps.subVectors(o,r),Os.subVectors(c,r),uh.subVectors(e,r);const m=Ps.dot(uh),d=Os.dot(uh);if(m<=0&&d<=0)return n.copy(r);fh.subVectors(e,o);const _=Ps.dot(fh),x=Os.dot(fh);if(_>=0&&x<=_)return n.copy(o);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(r).addScaledVector(Ps,f);dh.subVectors(e,c);const S=Ps.dot(dh),b=Os.dot(dh);if(b>=0&&S<=b)return n.copy(c);const A=S*d-m*b;if(A<=0&&d>=0&&b<=0)return p=d/(d-b),n.copy(r).addScaledVector(Os,p);const y=_*b-S*x;if(y<=0&&x-_>=0&&S-b>=0)return _v.subVectors(c,o),p=(x-_)/(x-_+(S-b)),n.copy(o).addScaledVector(_v,p);const v=1/(y+A+g);return f=A*v,p=g*v,n.copy(r).addScaledVector(Ps,f).addScaledVector(Os,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bl{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(wi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(wi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xc.copy(r.boundingBox)),Xc.applyMatrix4(e.matrixWorld),this.union(Xc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Wc.subVectors(this.max,al),Is.subVectors(e.a,al),Fs.subVectors(e.b,al),Bs.subVectors(e.c,al),cr.subVectors(Fs,Is),ur.subVectors(Bs,Fs),Pr.subVectors(Is,Bs);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Pr.z,Pr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Pr.z,0,-Pr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Pr.y,Pr.x,0];return!gh(n,Is,Fs,Bs,Wc)||(n=[1,0,0,0,1,0,0,0,1],!gh(n,Is,Fs,Bs,Wc))?!1:(jc.crossVectors(cr,ur),n=[jc.x,jc.y,jc.z],gh(n,Is,Fs,Bs,Wc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new re,new re,new re,new re,new re,new re,new re,new re],wi=new re,Xc=new bl,Is=new re,Fs=new re,Bs=new re,cr=new re,ur=new re,Pr=new re,al=new re,Wc=new re,jc=new re,Or=new re;function gh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){Or.fromArray(a,c);const p=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),m=e.dot(Or),d=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const pn=new re,qc=new Xt;let d1=0;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=iv,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)qc.fromBufferAttribute(this,n),qc.applyMatrix3(e),this.setXY(n,qc.x,qc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=nl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=nl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=nl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=nl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=nl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array),o=Yn(o,this.array),c=Yn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}}class hy extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class py extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class xi extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const h1=new bl,rl=new re,_h=new re;class Ml{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):h1.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const n=rl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(rl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(_h)),this.expandByPoint(rl.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p1=0;const hi=new rn,vh=new Hn,zs=new re,ai=new bl,sl=new bl,An=new re;class ri extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qA(e)?py:hy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,r){return hi.makeTranslation(e,n,r),this.applyMatrix4(hi),this}scale(e,n,r){return hi.makeScale(e,n,r),this.applyMatrix4(hi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const p=n[c];sl.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(ai.min,sl.min),ai.expandByPoint(An),An.addVectors(ai.max,sl.max),ai.expandByPoint(An)):(ai.expandByPoint(sl.min),ai.expandByPoint(sl.max))}ai.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)An.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(An));if(n)for(let c=0,f=n.length;c<f;c++){const p=n[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)An.fromBufferAttribute(p,d),m&&(zs.fromBufferAttribute(e,d),An.add(zs)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let M=0;M<r.count;M++)p[M]=new re,m[M]=new re;const d=new re,_=new re,x=new re,g=new Xt,S=new Xt,b=new Xt,A=new re,y=new re;function v(M,N,ue){d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,N),x.fromBufferAttribute(r,ue),g.fromBufferAttribute(c,M),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,ue),_.sub(d),x.sub(d),S.sub(g),b.sub(g);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(V),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(V),p[M].add(A),p[N].add(A),p[ue].add(A),m[M].add(y),m[N].add(y),m[ue].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let M=0,N=R.length;M<N;++M){const ue=R[M],V=ue.start,K=ue.count;for(let ie=V,fe=V+K;ie<fe;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new re,L=new re,P=new re,F=new re;function z(M){P.fromBufferAttribute(o,M),F.copy(P);const N=p[M];U.copy(N),U.sub(P.multiplyScalar(P.dot(N))).normalize(),L.crossVectors(F,N);const V=L.dot(m[M])<0?-1:1;f.setXYZW(M,U.x,U.y,U.z,V)}for(let M=0,N=R.length;M<N;++M){const ue=R[M],V=ue.start,K=ue.count;for(let ie=V,fe=V+K;ie<fe;ie+=3)z(e.getX(ie+0)),z(e.getX(ie+1)),z(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new re,c=new re,f=new re,p=new re,m=new re,d=new re,_=new re,x=new re;if(e)for(let g=0,S=e.count;g<S;g+=3){const b=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,c),x.subVectors(o,c),_.cross(x),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),d.fromBufferAttribute(r,y),p.add(_),m.add(_),d.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),x.subVectors(o,c),_.cross(x),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)An.fromBufferAttribute(e,n),An.normalize(),e.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function e(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let S=0,b=0;for(let A=0,y=m.length;A<y;A++){p.isInterleavedBufferAttribute?S=m[A]*p.data.stride+p.offset:S=m[A]*_;for(let v=0;v<_;v++)g[b++]=d[S++]}return new vi(g,_,x)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],d=e(m,r);n.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],S=e(g,r);m.push(S)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const S=d[x];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const c=e.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,S=x.length;g<S;g++)_.push(x[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,_=f.length;d<_;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m1=0;class to extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Ws,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new re,xh=new re,Yc=new re,fr=new re,yh=new re,Zc=new re,Sh=new re;class Kp{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,n),Sa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){xh.copy(e).add(n).multiplyScalar(.5),Yc.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(xh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Yc),p=fr.dot(this.direction),m=-fr.dot(Yc),d=fr.lengthSq(),_=Math.abs(1-f*f);let x,g,S,b;if(_>0)if(x=f*m-p,g=f*p-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const A=1/_;x*=A,g*=A,S=x*(x+f*g+2*p)+g*(f*x+g+2*m)+d}else g=c,x=Math.max(0,-(f*g+p)),S=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(f*g+p)),S=-x*x+g*(g+2*m)+d;else g<=-b?(x=Math.max(0,-(-f*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+g*(g+2*m)+d):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+d):(x=Math.max(0,-(f*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+g*(g+2*m)+d);else g=f>0?-c:c,x=Math.max(0,-(f*g+p)),S=-x*x+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(xh).addScaledVector(Yc,g),S}intersectSphere(e,n){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),o=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,o=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,o=(e.min.x-g.x)*d),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,n,r,o,c){yh.subVectors(n,e),Zc.subVectors(r,e),Sh.crossVectors(yh,Zc);let f=this.direction.dot(Sh),p;if(f>0){if(o)return null;p=1}else if(f<0)p=-1,f=-f;else return null;fr.subVectors(this.origin,e);const m=p*this.direction.dot(Zc.crossVectors(fr,Zc));if(m<0)return null;const d=p*this.direction.dot(yh.cross(fr));if(d<0||m+d>f)return null;const _=-p*fr.dot(Sh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class my extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Na,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vv=new rn,Ir=new Kp,Kc=new Ml,xv=new re,Qc=new re,Jc=new re,$c=new re,bh=new re,eu=new re,yv=new re,tu=new re;class Ua extends Hn{constructor(e=new ri,n=new my){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(c&&p){eu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(bh.fromBufferAttribute(x,e),f?eu.addScaledVector(bh,_):eu.addScaledVector(bh.sub(n),_))}n.add(eu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(Kc.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Kc,xv)===null||Ir.origin.distanceToSquared(xv)>(e.far-e.near)**2))&&(vv.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(vv),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,A=g.length;b<A;b++){const y=g[b],v=f[y.materialIndex],R=Math.max(y.start,S.start),U=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let L=R,P=U;L<P;L+=3){const F=p.getX(L),z=p.getX(L+1),M=p.getX(L+2);o=nu(this,v,e,r,d,_,x,F,z,M),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=b,v=A;y<v;y+=3){const R=p.getX(y),U=p.getX(y+1),L=p.getX(y+2);o=nu(this,f,e,r,d,_,x,R,U,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,A=g.length;b<A;b++){const y=g[b],v=f[y.materialIndex],R=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let L=R,P=U;L<P;L+=3){const F=L,z=L+1,M=L+2;o=nu(this,v,e,r,d,_,x,F,z,M),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=b,v=A;y<v;y+=3){const R=y,U=y+1,L=y+2;o=nu(this,f,e,r,d,_,x,R,U,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function g1(a,e,n,r,o,c,f,p){let m;if(e.side===Zn?m=r.intersectTriangle(f,c,o,!0,p):m=r.intersectTriangle(o,c,f,e.side===mr,p),m===null)return null;tu.copy(p),tu.applyMatrix4(a.matrixWorld);const d=n.ray.origin.distanceTo(tu);return d<n.near||d>n.far?null:{distance:d,point:tu.clone(),object:a}}function nu(a,e,n,r,o,c,f,p,m,d){a.getVertexPosition(p,Qc),a.getVertexPosition(m,Jc),a.getVertexPosition(d,$c);const _=g1(a,e,n,r,Qc,Jc,$c,yv);if(_){const x=new re;Ci.getBarycoord(yv,Qc,Jc,$c,x),o&&(_.uv=Ci.getInterpolatedAttribute(o,p,m,d,x,new Xt)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,p,m,d,x,new Xt)),f&&(_.normal=Ci.getInterpolatedAttribute(f,p,m,d,x,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new re,materialIndex:0};Ci.getNormal(Qc,Jc,$c,g.normal),_.face=g,_.barycoord=x}return _}class _1 extends zn{constructor(e=null,n=1,r=1,o,c,f,p,m,d=Dn,_=Dn,x,g){super(null,f,p,m,d,_,o,c,x,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new re,v1=new re,x1=new ht;class Hr{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Mh.subVectors(r,n).cross(v1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Mh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||x1.getNormalMatrix(e),o=this.coplanarPoint(Mh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ml,y1=new Xt(.5,.5),iu=new re;class gy{constructor(e=new Hr,n=new Hr,r=new Hr,o=new Hr,c=new Hr,f=new Hr){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi,r=!1){const o=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],S=c[7],b=c[8],A=c[9],y=c[10],v=c[11],R=c[12],U=c[13],L=c[14],P=c[15];if(o[0].setComponents(d-f,S-_,v-b,P-R).normalize(),o[1].setComponents(d+f,S+_,v+b,P+R).normalize(),o[2].setComponents(d+p,S+x,v+A,P+U).normalize(),o[3].setComponents(d-p,S-x,v-A,P-U).normalize(),r)o[4].setComponents(m,g,y,L).normalize(),o[5].setComponents(d-m,S-g,v-y,P-L).normalize();else if(o[4].setComponents(d-m,S-g,v-y,P-L).normalize(),n===Xi)o[5].setComponents(d+m,S+g,v+y,P+L).normalize();else if(n===Au)o[5].setComponents(m,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=y1.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(iu.x=o.normal.x>0?e.max.x:e.min.x,iu.y=o.normal.y>0?e.max.y:e.min.y,iu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _y extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new re,Du=new re,Sv=new rn,ol=new Kp,au=new Ml,Eh=new re,bv=new re;class S1 extends Hn{constructor(e=new ri,n=new _y){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Cu.fromBufferAttribute(n,o-1),Du.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Cu.distanceTo(Du);e.setAttribute("lineDistance",new xi(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(o),au.radius+=c,e.ray.intersectsSphere(au)===!1)return;Sv.copy(o).invert(),ol.copy(e.ray).applyMatrix4(Sv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let A=S,y=b-1;A<y;A+=d){const v=_.getX(A),R=_.getX(A+1),U=ru(this,e,ol,m,v,R,A);U&&n.push(U)}if(this.isLineLoop){const A=_.getX(b-1),y=_.getX(S),v=ru(this,e,ol,m,A,y,b-1);v&&n.push(v)}}else{const S=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let A=S,y=b-1;A<y;A+=d){const v=ru(this,e,ol,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=ru(this,e,ol,m,b-1,S,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function ru(a,e,n,r,o,c,f){const p=a.geometry.attributes.position;if(Cu.fromBufferAttribute(p,o),Du.fromBufferAttribute(p,c),n.distanceSqToSegment(Cu,Du,Eh,bv)>r)return;Eh.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(Eh);if(!(d<e.near||d>e.far))return{distance:d,point:bv.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Mv=new re,Ev=new re;class b1 extends S1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Mv.fromBufferAttribute(n,o),Ev.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Mv.distanceTo(Ev);e.setAttribute("lineDistance",new xi(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vy extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tv=new rn,Rp=new Kp,su=new Ml,ou=new re;class M1 extends Hn{constructor(e=new ri,n=new vy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(o),su.radius+=c,e.ray.intersectsSphere(su)===!1)return;Tv.copy(o).invert(),Rp.copy(e.ray).applyMatrix4(Tv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,x=r.attributes.position;if(d!==null){const g=Math.max(0,f.start),S=Math.min(d.count,f.start+f.count);for(let b=g,A=S;b<A;b++){const y=d.getX(b);ou.fromBufferAttribute(x,y),Av(ou,y,m,o,e,n,this)}}else{const g=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let b=g,A=S;b<A;b++)ou.fromBufferAttribute(x,b),Av(ou,b,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Av(a,e,n,r,o,c,f){const p=Rp.distanceSqToPoint(a);if(p<n){const m=new re;Rp.closestPointToPoint(a,m),m.applyMatrix4(r);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class xy extends zn{constructor(e=[],n=jr,r,o,c,f,p,m,d,_){super(e,n,r,o,c,f,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _l extends zn{constructor(e,n,r=qi,o,c,f,p=Dn,m=Dn,d,_=Da,x=1){if(_!==Da&&_!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:x};super(g,o,c,f,p,m,_,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class E1 extends _l{constructor(e,n=qi,r=jr,o,c,f=Dn,p=Dn,m,d=Da){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,n,r,o,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yy extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class El extends ri{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const p=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],_=[],x=[];let g=0,S=0;b("z","y","x",-1,-1,r,n,e,f,c,0),b("z","y","x",1,-1,r,n,-e,f,c,1),b("x","z","y",1,1,e,r,n,o,f,2),b("x","z","y",1,-1,e,r,-n,o,f,3),b("x","y","z",1,-1,e,n,r,o,c,4),b("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new xi(d,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(x,2));function b(A,y,v,R,U,L,P,F,z,M,N){const ue=L/z,V=P/M,K=L/2,ie=P/2,fe=F/2,Q=z+1,O=M+1;let B=0,oe=0;const me=new re;for(let D=0;D<O;D++){const J=D*V-ie;for(let de=0;de<Q;de++){const ye=de*ue-K;me[A]=ye*R,me[y]=J*U,me[v]=fe,d.push(me.x,me.y,me.z),me[A]=0,me[y]=0,me[v]=F>0?1:-1,_.push(me.x,me.y,me.z),x.push(de/z),x.push(1-D/M),B+=1}}for(let D=0;D<M;D++)for(let J=0;J<z;J++){const de=g+J+Q*D,ye=g+J+Q*(D+1),De=g+(J+1)+Q*(D+1),Oe=g+(J+1)+Q*D;m.push(de,ye,Oe),m.push(ye,De,Oe),oe+=6}p.addGroup(S,oe,N),S+=oe,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ou extends ri{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,p=Math.floor(r),m=Math.floor(o),d=p+1,_=m+1,x=e/p,g=n/m,S=[],b=[],A=[],y=[];for(let v=0;v<_;v++){const R=v*g-f;for(let U=0;U<d;U++){const L=U*x-c;b.push(L,-R,0),A.push(0,0,1),y.push(U/p),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<p;R++){const U=R+d*v,L=R+d*(v+1),P=R+1+d*(v+1),F=R+1+d*v;S.push(U,L,F),S.push(L,P,F)}this.setIndex(S),this.setAttribute("position",new xi(b,3)),this.setAttribute("normal",new xi(A,3)),this.setAttribute("uv",new xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Fn(a){const e={};for(let n=0;n<a.length;n++){const r=Qs(a[n]);for(const o in r)e[o]=r[o]}return e}function T1(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Sy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const A1={clone:Qs,merge:Fn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class C1 extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class D1 extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lu=new re,cu=new eo,Hi=new re;class by extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,cu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(lu,cu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dr=new re,Rv=new Xt,wv=new Xt;class mi extends by{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,Rv,wv),n.subVectors(wv,Rv)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(eh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*r/d,o*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class My extends by{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=-90,Gs=1;class U1 extends Hn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(Hs,Gs,e,n);o.layers=this.layers,this.add(o);const c=new mi(Hs,Gs,e,n);c.layers=this.layers,this.add(c);const f=new mi(Hs,Gs,e,n);f.layers=this.layers,this.add(f);const p=new mi(Hs,Gs,e,n);p.layers=this.layers,this.add(p);const m=new mi(Hs,Gs,e,n);m.layers=this.layers,this.add(m);const d=new mi(Hs,Gs,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,p,m]=n;for(const d of n)this.remove(d);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Au)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(x,g,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class L1 extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cv(a,e,n,r){const o=P1(r);switch(n){case sy:return a*e;case ly:return a*e/o.components*o.byteLength;case Xp:return a*e/o.components*o.byteLength;case Zs:return a*e*2/o.components*o.byteLength;case Wp:return a*e*2/o.components*o.byteLength;case oy:return a*e*3/o.components*o.byteLength;case Di:return a*e*4/o.components*o.byteLength;case jp:return a*e*4/o.components*o.byteLength;case gu:case _u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case vu:case xu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(a,16)*Math.max(e,8)/4;case Yh:case Kh:return Math.max(a,8)*Math.max(e,8)/2;case Jh:case $h:case tp:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ep:case ip:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case xp:case yp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case bp:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ep:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P1(a){switch(a){case _i:case ny:return{byteLength:1,components:1};case ml:case iy:case Ca:return{byteLength:2,components:1};case Vp:case kp:return{byteLength:2,components:4};case qi:case Gp:case ki:return{byteLength:4,components:1};case ay:case ry:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ey(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function O1(a){const e=new WeakMap;function n(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,d,_),p.onUploadCallback();let S;if(d instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=a.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=a.SHORT;else if(d instanceof Uint32Array)S=a.UNSIGNED_INT;else if(d instanceof Int32Array)S=a.INT;else if(d instanceof Int8Array)S=a.BYTE;else if(d instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,d){const _=m.array,x=m.updateRanges;if(a.bindBuffer(d,p),x.length===0)a.bufferSubData(d,0,_);else{x.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<x.length;S++){const b=x[g],A=x[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++g,x[g]=A)}x.length=g+1;for(let S=0,b=x.length;S<b;S++){const A=x[S];a.bufferSubData(d,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(a.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,n(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:o,remove:c,update:f}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
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
#endif`,B1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
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
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rR=`#define PI 3.141592653589793
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
} // validated`,sR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oR=`vec3 transformedNormal = objectNormal;
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
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dR="gl_FragColor = linearToOutputTexel( gl_FragColor );",hR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pR=`#ifdef USE_ENVMAP
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
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
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
}`,ER=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RR=`uniform bool receiveShadow;
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
#endif`,wR=`#ifdef USE_ENVMAP
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
#endif`,CR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LR=`PhysicalMaterial material;
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
#endif`,PR=`uniform sampler2D dfgLUT;
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
}`,OR=`
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
#endif`,IR=`#if defined( RE_IndirectDiffuse )
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
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WR=`#if defined( USE_POINTS_UV )
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
#endif`,jR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
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
#endif`,JR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
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
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yw=`float getShadowMask() {
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
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
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
#endif`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iw=`uniform sampler2D t2D;
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
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
}`,Vw=`#if DEPTH_PACKING == 3200
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
}`,kw=`#define DISTANCE
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
}`,Xw=`#define DISTANCE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,Jw=`#define LAMBERT
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
}`,$w=`#define MATCAP
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
}`,eC=`#define MATCAP
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
}`,tC=`#define NORMAL
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
}`,nC=`#define NORMAL
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
}`,iC=`#define PHONG
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
}`,aC=`#define PHONG
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
}`,rC=`#define STANDARD
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
}`,sC=`#define STANDARD
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
}`,oC=`#define TOON
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
}`,lC=`#define TOON
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
}`,cC=`uniform float size;
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
}`,uC=`uniform vec3 diffuse;
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
}`,fC=`#include <common>
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
}`,dC=`uniform vec3 color;
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
}`,hC=`uniform float rotation;
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
}`,pC=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:I1,alphahash_pars_fragment:F1,alphamap_fragment:B1,alphamap_pars_fragment:z1,alphatest_fragment:H1,alphatest_pars_fragment:G1,aomap_fragment:V1,aomap_pars_fragment:k1,batching_pars_vertex:X1,batching_vertex:W1,begin_vertex:j1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:Z1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:aR,common:rR,cube_uv_reflection_fragment:sR,defaultnormal_vertex:oR,displacementmap_pars_vertex:lR,displacementmap_vertex:cR,emissivemap_fragment:uR,emissivemap_pars_fragment:fR,colorspace_fragment:dR,colorspace_pars_fragment:hR,envmap_fragment:pR,envmap_common_pars_fragment:mR,envmap_pars_fragment:gR,envmap_pars_vertex:_R,envmap_physical_pars_fragment:wR,envmap_vertex:vR,fog_vertex:xR,fog_pars_vertex:yR,fog_fragment:SR,fog_pars_fragment:bR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:ER,lights_lambert_fragment:TR,lights_lambert_pars_fragment:AR,lights_pars_begin:RR,lights_toon_fragment:CR,lights_toon_pars_fragment:DR,lights_phong_fragment:NR,lights_phong_pars_fragment:UR,lights_physical_fragment:LR,lights_physical_pars_fragment:PR,lights_fragment_begin:OR,lights_fragment_maps:IR,lights_fragment_end:FR,logdepthbuf_fragment:BR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:HR,logdepthbuf_vertex:GR,map_fragment:VR,map_pars_fragment:kR,map_particle_fragment:XR,map_particle_pars_fragment:WR,metalnessmap_fragment:jR,metalnessmap_pars_fragment:qR,morphinstance_vertex:YR,morphcolor_vertex:ZR,morphnormal_vertex:KR,morphtarget_pars_vertex:QR,morphtarget_vertex:JR,normal_fragment_begin:$R,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:sw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:uw,premultiplied_alpha_fragment:fw,project_vertex:dw,dithering_fragment:hw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:vw,shadowmap_vertex:xw,shadowmask_pars_fragment:yw,skinbase_vertex:Sw,skinning_pars_vertex:bw,skinning_vertex:Mw,skinnormal_vertex:Ew,specularmap_fragment:Tw,specularmap_pars_fragment:Aw,tonemapping_fragment:Rw,tonemapping_pars_fragment:ww,transmission_fragment:Cw,transmission_pars_fragment:Dw,uv_pars_fragment:Nw,uv_pars_vertex:Uw,uv_vertex:Lw,worldpos_vertex:Pw,background_vert:Ow,background_frag:Iw,backgroundCube_vert:Fw,backgroundCube_frag:Bw,cube_vert:zw,cube_frag:Hw,depth_vert:Gw,depth_frag:Vw,distance_vert:kw,distance_frag:Xw,equirect_vert:Ww,equirect_frag:jw,linedashed_vert:qw,linedashed_frag:Yw,meshbasic_vert:Zw,meshbasic_frag:Kw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:$w,meshmatcap_frag:eC,meshnormal_vert:tC,meshnormal_frag:nC,meshphong_vert:iC,meshphong_frag:aC,meshphysical_vert:rC,meshphysical_frag:sC,meshtoon_vert:oC,meshtoon_frag:lC,points_vert:cC,points_frag:uC,shadow_vert:fC,shadow_frag:dC,sprite_vert:hC,sprite_frag:pC},Pe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Vi={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:Fn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const uu={r:0,b:0,g:0},Br=new Na,mC=new rn;function gC(a,e,n,r,o,c){const f=new Mt(0);let p=o===!0?0:1,m,d,_=null,x=0,g=null;function S(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const L=R.backgroundBlurriness>0;U=e.get(U,L)}return U}function b(R){let U=!1;const L=S(R);L===null?y(f,p):L&&L.isColor&&(y(L,1),U=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(R,U){const L=S(U);L&&(L.isCubeTexture||L.mapping===Pu)?(d===void 0&&(d=new Ua(new El(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Qs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Br.copy(U.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(mC.makeRotationFromEuler(Br)),d.material.toneMapped=At.getTransfer(L.colorSpace)!==Ht,(_!==L||x!==L.version||g!==a.toneMapping)&&(d.material.needsUpdate=!0,_=L,x=L.version,g=a.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Ua(new Ou(2,2),new Yi({name:"BackgroundMaterial",uniforms:Qs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=At.getTransfer(L.colorSpace)!==Ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||x!==L.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=L,x=L.version,g=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,U){R.getRGB(uu,Sy(a)),n.buffers.color.setClear(uu.r,uu.g,uu.b,U,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,U=1){f.set(R),p=U,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(f,p)},render:b,addToRenderList:A,dispose:v}}function _C(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,f=!1;function p(V,K,ie,fe,Q){let O=!1;const B=x(V,fe,ie,K);c!==B&&(c=B,d(c.object)),O=S(V,fe,ie,Q),O&&b(V,fe,ie,Q),Q!==null&&e.update(Q,a.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,L(V,K,ie,fe),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function _(V){return a.deleteVertexArray(V)}function x(V,K,ie,fe){const Q=fe.wireframe===!0;let O=r[K.id];O===void 0&&(O={},r[K.id]=O);const B=V.isInstancedMesh===!0?V.id:0;let oe=O[B];oe===void 0&&(oe={},O[B]=oe);let me=oe[ie.id];me===void 0&&(me={},oe[ie.id]=me);let D=me[Q];return D===void 0&&(D=g(m()),me[Q]=D),D}function g(V){const K=[],ie=[],fe=[];for(let Q=0;Q<n;Q++)K[Q]=0,ie[Q]=0,fe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:fe,object:V,attributes:{},index:null}}function S(V,K,ie,fe){const Q=c.attributes,O=K.attributes;let B=0;const oe=ie.getAttributes();for(const me in oe)if(oe[me].location>=0){const J=Q[me];let de=O[me];if(de===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;B++}return c.attributesNum!==B||c.index!==fe}function b(V,K,ie,fe){const Q={},O=K.attributes;let B=0;const oe=ie.getAttributes();for(const me in oe)if(oe[me].location>=0){let J=O[me];J===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),Q[me]=de,B++}c.attributes=Q,c.attributesNum=B,c.index=fe}function A(){const V=c.newAttributes;for(let K=0,ie=V.length;K<ie;K++)V[K]=0}function y(V){v(V,0)}function v(V,K){const ie=c.newAttributes,fe=c.enabledAttributes,Q=c.attributeDivisors;ie[V]=1,fe[V]===0&&(a.enableVertexAttribArray(V),fe[V]=1),Q[V]!==K&&(a.vertexAttribDivisor(V,K),Q[V]=K)}function R(){const V=c.newAttributes,K=c.enabledAttributes;for(let ie=0,fe=K.length;ie<fe;ie++)K[ie]!==V[ie]&&(a.disableVertexAttribArray(ie),K[ie]=0)}function U(V,K,ie,fe,Q,O,B){B===!0?a.vertexAttribIPointer(V,K,ie,Q,O):a.vertexAttribPointer(V,K,ie,fe,Q,O)}function L(V,K,ie,fe){A();const Q=fe.attributes,O=ie.getAttributes(),B=K.defaultAttributeValues;for(const oe in O){const me=O[oe];if(me.location>=0){let D=Q[oe];if(D===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(D=V.instanceColor)),D!==void 0){const J=D.normalized,de=D.itemSize,ye=e.get(D);if(ye===void 0)continue;const De=ye.buffer,Oe=ye.type,Z=ye.bytesPerElement,Me=Oe===a.INT||Oe===a.UNSIGNED_INT||D.gpuType===Gp;if(D.isInterleavedBufferAttribute){const be=D.data,Be=be.stride,Je=D.offset;if(be.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)v(me.location+et,be.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let et=0;et<me.locationSize;et++)y(me.location+et);a.bindBuffer(a.ARRAY_BUFFER,De);for(let et=0;et<me.locationSize;et++)U(me.location+et,de/me.locationSize,Oe,J,Be*Z,(Je+de/me.locationSize*et)*Z,Me)}else{if(D.isInstancedBufferAttribute){for(let be=0;be<me.locationSize;be++)v(me.location+be,D.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let be=0;be<me.locationSize;be++)y(me.location+be);a.bindBuffer(a.ARRAY_BUFFER,De);for(let be=0;be<me.locationSize;be++)U(me.location+be,de/me.locationSize,Oe,J,de*Z,de/me.locationSize*be*Z,Me)}}else if(B!==void 0){const J=B[oe];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(me.location,J);break;case 3:a.vertexAttrib3fv(me.location,J);break;case 4:a.vertexAttrib4fv(me.location,J);break;default:a.vertexAttrib1fv(me.location,J)}}}}R()}function P(){N();for(const V in r){const K=r[V];for(const ie in K){const fe=K[ie];for(const Q in fe){const O=fe[Q];for(const B in O)_(O[B].object),delete O[B];delete fe[Q]}}delete r[V]}}function F(V){if(r[V.id]===void 0)return;const K=r[V.id];for(const ie in K){const fe=K[ie];for(const Q in fe){const O=fe[Q];for(const B in O)_(O[B].object),delete O[B];delete fe[Q]}}delete r[V.id]}function z(V){for(const K in r){const ie=r[K];for(const fe in ie){const Q=ie[fe];if(Q[V.id]===void 0)continue;const O=Q[V.id];for(const B in O)_(O[B].object),delete O[B];delete Q[V.id]}}}function M(V){for(const K in r){const ie=r[K],fe=V.isInstancedMesh===!0?V.id:0,Q=ie[fe];if(Q!==void 0){for(const O in Q){const B=Q[O];for(const oe in B)_(B[oe].object),delete B[oe];delete Q[O]}delete ie[fe],Object.keys(ie).length===0&&delete r[K]}}}function N(){ue(),f=!0,c!==o&&(c=o,d(c.object))}function ue(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:N,resetDefaultState:ue,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfObject:M,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function vC(a,e,n){let r;function o(d){r=d}function c(d,_){a.drawArrays(r,d,_),n.update(_,r,1)}function f(d,_,x){x!==0&&(a.drawArraysInstanced(r,d,_,x),n.update(_,r,x))}function p(d,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,_,0,x);let S=0;for(let b=0;b<x;b++)S+=_[b];n.update(S,r,1)}function m(d,_,x,g){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<d.length;b++)f(d[b],_[b],g[b]);else{S.multiDrawArraysInstancedWEBGL(r,d,0,_,0,g,0,x);let b=0;for(let A=0;A<x;A++)b+=_[A]*g[A];n.update(b,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function xC(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Di&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const M=z===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_i&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ki&&!M)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=m(d);_!==d&&(st("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),L=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),F=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:L,maxSamples:P,samples:F}}function yC(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Hr,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const S=x.length!==0||g||r!==0||o;return o=g,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,S){const b=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,v=a.get(x);if(!o||b===null||b.length===0||c&&!y)c?_(null):d();else{const R=c?0:r,U=R*4;let L=v.clippingState||null;m.value=L,L=_(b,g,U,S);for(let P=0;P!==U;++P)L[P]=n[P];v.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,g,S,b){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const v=S+A*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,L=S;U!==A;++U,L+=4)f.copy(x[U]).applyMatrix4(R,p),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const pr=4,Dv=[.125,.215,.35,.446,.526,.582],Vr=20,SC=256,ll=new My,Nv=new Mt;let Th=null,Ah=0,Rh=0,wh=!1;const bC=new re;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:p=bC}=c;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=wh,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ca,format:Di,colorSpace:Ks,depthBuffer:!1},o=Lv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MC(c)),this._blurMaterial=TC(c,e,n),this._ggxMaterial=EC(c,e,n)}return o}_compileMaterial(e){const n=new Ua(new ri,e);this._renderer.compile(n,ll)}_sceneToCubeUV(e,n,r,o,c){const m=new mi(90,1,n,r),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,S=x.toneMapping;x.getClearColor(Nv),x.toneMapping=Wi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ua(new El,new my({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let v=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,v=!0):(y.color.copy(Nv),v=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):L===1?(m.up.set(0,0,d[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const P=this._cubeSize;Vs(o,L*P,U>2?P:0,P,P),x.setRenderTarget(o),v&&x.render(A,m),x.render(e,m)}x.toneMapping=S,x.autoClear=g,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===jr||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Vs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,ll)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,S=x*g,{_lodMax:b}=this,A=this._sizeLods[r],y=3*A*(r>b-pr?r-b+pr:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=b-n,Vs(c,y,v,3*A,2*A),o.setRenderTarget(c),o.render(p,ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Vs(e,y,v,3*A,2*A),o.setRenderTarget(e),o.render(p,ll)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[o];x.material=d;const g=d.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),A=c/b,y=isFinite(c)?1+Math.floor(_*A):Vr;y>Vr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const v=[];let R=0;for(let z=0;z<Vr;++z){const M=z/A,N=Math.exp(-M*M/2);v.push(N),z===0?R+=N:z<y&&(R+=2*N)}for(let z=0;z<v.length;z++)v[z]=v[z]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-r;const L=this._sizeLods[o],P=3*L*(o>U-pr?o-U+pr:0),F=4*(this._cubeSize-L);Vs(n,P,F,3*L,2*L),m.setRenderTarget(n),m.render(x,ll)}}function MC(a){const e=[],n=[],r=[];let o=a;const c=a-pr+1+Dv.length;for(let f=0;f<c;f++){const p=Math.pow(2,o);e.push(p);let m=1/p;f>a-pr?m=Dv[f-a+pr-1]:f===0&&(m=0),n.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,b=6,A=3,y=2,v=1,R=new Float32Array(A*b*S),U=new Float32Array(y*b*S),L=new Float32Array(v*b*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,M=F>2?0:-1,N=[z,M,0,z+2/3,M,0,z+2/3,M+1,0,z,M,0,z+2/3,M+1,0,z,M+1,0];R.set(N,A*b*F),U.set(g,y*b*F);const ue=[F,F,F,F,F,F];L.set(ue,v*b*F)}const P=new ri;P.setAttribute("position",new vi(R,A)),P.setAttribute("uv",new vi(U,y)),P.setAttribute("faceIndex",new vi(L,v)),r.push(new Ua(P,null)),o>pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Lv(a,e,n){const r=new ji(a,e,n);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function EC(a,e,n){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function TC(a,e,n){const r=new Float32Array(Vr),o=new re(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Pv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Ov(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}class Ty extends ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new El(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Aa});c.uniforms.tEquirect.value=n;const f=new Ua(o,c),p=n.minFilter;return n.minFilter===kr&&(n.minFilter=On),new U1(1,10,this).update(e,f),n.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function AC(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Qd||S===Jd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const A=new Ty(b.height);return A.fromEquirectangularTexture(a,g),e.set(g,A),g.addEventListener("dispose",d),p(A.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,b=S===Qd||S===Jd,A=S===jr||S===Ys;if(b||A){let y=n.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Uv(a)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return b&&R&&R.height>0||A&&R&&m(R)?(r===null&&(r=new Uv(a)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,S){return S===Qd?g.mapping=jr:S===Jd&&(g.mapping=Ys),g}function m(g){let S=0;const b=6;for(let A=0;A<b;A++)g[A]!==void 0&&S++;return S===b}function d(g){const S=g.target;S.removeEventListener("dispose",d);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const b=n.get(S);b!==void 0&&(n.delete(S),b.dispose())}function x(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function RC(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&wu("WebGLRenderer: "+r+" extension not supported."),o}}}function wC(a,e,n,r){const o={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function p(x,g){return o[g.id]===!0||(g.addEventListener("dispose",f),o[g.id]=!0,n.memory.geometries++),g}function m(x){const g=x.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function d(x){const g=[],S=x.index,b=x.attributes.position;let A=0;if(b===void 0)return;if(S!==null){const R=S.array;A=S.version;for(let U=0,L=R.length;U<L;U+=3){const P=R[U+0],F=R[U+1],z=R[U+2];g.push(P,F,F,z,z,P)}}else{const R=b.array;A=b.version;for(let U=0,L=R.length/3-1;U<L;U+=3){const P=U+0,F=U+1,z=U+2;g.push(P,F,F,z,z,P)}}const y=new(b.count>=65535?py:hy)(g,1);y.version=A;const v=c.get(x);v&&e.remove(v),c.set(x,y)}function _(x){const g=c.get(x);if(g){const S=x.index;S!==null&&g.version<S.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function CC(a,e,n){let r;function o(g){r=g}let c,f;function p(g){c=g.type,f=g.bytesPerElement}function m(g,S){a.drawElements(r,S,c,g*f),n.update(S,r,1)}function d(g,S,b){b!==0&&(a.drawElementsInstanced(r,S,c,g*f,b),n.update(S,r,b))}function _(g,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,g,0,b);let y=0;for(let v=0;v<b;v++)y+=S[v];n.update(y,r,1)}function x(g,S,b,A){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)d(g[v]/f,S[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,g,0,A,0,b);let v=0;for(let R=0;R<b;R++)v+=S[R]*A[R];n.update(v,r,1)}}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function DC(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=p*(c/3);break;case a.LINES:n.lines+=p*(c/2);break;case a.LINE_STRIP:n.lines+=p*(c-1);break;case a.LINE_LOOP:n.lines+=p*c;break;case a.POINTS:n.points+=p*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function NC(a,e,n){const r=new WeakMap,o=new fn;function c(f,p,m){const d=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let ue=function(){M.dispose(),r.delete(p),p.removeEventListener("dispose",ue)};var S=ue;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),y===!0&&(L=3);let P=p.attributes.position.count*L,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const z=new Float32Array(P*F*4*x),M=new uy(z,P,F,x);M.type=ki,M.needsUpdate=!0;const N=L*4;for(let V=0;V<x;V++){const K=v[V],ie=R[V],fe=U[V],Q=P*F*4*V;for(let O=0;O<K.count;O++){const B=O*N;b===!0&&(o.fromBufferAttribute(K,O),z[Q+B+0]=o.x,z[Q+B+1]=o.y,z[Q+B+2]=o.z,z[Q+B+3]=0),A===!0&&(o.fromBufferAttribute(ie,O),z[Q+B+4]=o.x,z[Q+B+5]=o.y,z[Q+B+6]=o.z,z[Q+B+7]=0),y===!0&&(o.fromBufferAttribute(fe,O),z[Q+B+8]=o.x,z[Q+B+9]=o.y,z[Q+B+10]=o.z,z[Q+B+11]=fe.itemSize===4?o.w:1)}}g={count:x,texture:M,size:new Xt(P,F)},r.set(p,g),p.addEventListener("dispose",ue)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const A=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function UC(a,e,n,r,o){let c=new WeakMap;function f(d){const _=o.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(n.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const S=d.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:p}}const LC={[Yx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Kx]:"CINEON_TONE_MAPPING",[Qx]:"ACES_FILMIC_TONE_MAPPING",[$x]:"AGX_TONE_MAPPING",[ey]:"NEUTRAL_TONE_MAPPING",[Jx]:"CUSTOM_TONE_MAPPING"};function PC(a,e,n,r,o){const c=new ji(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new ji(e,n,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),p=new ri;p.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new xi([0,2,0,0,2,0],2));const m=new C1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ua(p,m),_=new My(-1,1,1,-1,0,1);let x=null,g=null,S=!1,b,A=null,y=[],v=!1;this.setSize=function(R,U){c.setSize(R,U),f.setSize(R,U);for(let L=0;L<y.length;L++){const P=y[L];P.setSize&&P.setSize(R,U)}},this.setEffects=function(R){y=R,v=y.length>0&&y[0].isRenderPass===!0;const U=c.width,L=c.height;for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(U,L)}},this.begin=function(R,U){if(S||R.toneMapping===Wi&&y.length===0)return!1;if(A=U,U!==null){const L=U.width,P=U.height;(c.width!==L||c.height!==P)&&this.setSize(L,P)}return v===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return v},this.end=function(R,U){R.toneMapping=b,S=!0;let L=c,P=f;for(let F=0;F<y.length;F++){const z=y[F];if(z.enabled!==!1&&(z.render(R,P,L,U),z.needsSwap!==!1)){const M=L;L=P,P=M}}if(x!==R.outputColorSpace||g!==R.toneMapping){x=R.outputColorSpace,g=R.toneMapping,m.defines={},At.getTransfer(x)===Ht&&(m.defines.SRGB_TRANSFER="");const F=LC[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(A),R.render(d,_),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Ay=new zn,wp=new _l(1,1),Ry=new uy,wy=new i1,Cy=new xy,Iv=[],Fv=[],Bv=new Float32Array(16),zv=new Float32Array(9),Hv=new Float32Array(4);function no(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Iv[o];if(c===void 0&&(c=new Float32Array(o),Iv[o]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=n,a[f].toArray(c,p)}return c}function xn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function yn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Fu(a,e){let n=Fv[e];n===void 0&&(n=new Int32Array(e),Fv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function OC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function IC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2fv(this.addr,e),yn(n,e)}}function FC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;a.uniform3fv(this.addr,e),yn(n,e)}}function BC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4fv(this.addr,e),yn(n,e)}}function zC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Hv.set(r),a.uniformMatrix2fv(this.addr,!1,Hv),yn(n,r)}}function HC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;zv.set(r),a.uniformMatrix3fv(this.addr,!1,zv),yn(n,r)}}function GC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Bv.set(r),a.uniformMatrix4fv(this.addr,!1,Bv),yn(n,r)}}function VC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function kC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2iv(this.addr,e),yn(n,e)}}function XC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;a.uniform3iv(this.addr,e),yn(n,e)}}function WC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4iv(this.addr,e),yn(n,e)}}function jC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function qC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2uiv(this.addr,e),yn(n,e)}}function YC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;a.uniform3uiv(this.addr,e),yn(n,e)}}function ZC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4uiv(this.addr,e),yn(n,e)}}function KC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(wp.compareFunction=n.isReversedDepthBuffer()?Yp:qp,c=wp):c=Ay,n.setTexture2D(e||c,o)}function QC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||wy,o)}function JC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Cy,o)}function $C(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ry,o)}function e3(a){switch(a){case 5126:return OC;case 35664:return IC;case 35665:return FC;case 35666:return BC;case 35674:return zC;case 35675:return HC;case 35676:return GC;case 5124:case 35670:return VC;case 35667:case 35671:return kC;case 35668:case 35672:return XC;case 35669:case 35673:return WC;case 5125:return jC;case 36294:return qC;case 36295:return YC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return $C}}function t3(a,e){a.uniform1fv(this.addr,e)}function n3(a,e){const n=no(e,this.size,2);a.uniform2fv(this.addr,n)}function i3(a,e){const n=no(e,this.size,3);a.uniform3fv(this.addr,n)}function a3(a,e){const n=no(e,this.size,4);a.uniform4fv(this.addr,n)}function r3(a,e){const n=no(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function s3(a,e){const n=no(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function o3(a,e){const n=no(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function l3(a,e){a.uniform1iv(this.addr,e)}function c3(a,e){a.uniform2iv(this.addr,e)}function u3(a,e){a.uniform3iv(this.addr,e)}function f3(a,e){a.uniform4iv(this.addr,e)}function d3(a,e){a.uniform1uiv(this.addr,e)}function h3(a,e){a.uniform2uiv(this.addr,e)}function p3(a,e){a.uniform3uiv(this.addr,e)}function m3(a,e){a.uniform4uiv(this.addr,e)}function g3(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);xn(r,c)||(a.uniform1iv(this.addr,c),yn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=wp:f=Ay;for(let p=0;p!==o;++p)n.setTexture2D(e[p]||f,c[p])}function _3(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);xn(r,c)||(a.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||wy,c[f])}function v3(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);xn(r,c)||(a.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||Cy,c[f])}function x3(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);xn(r,c)||(a.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||Ry,c[f])}function y3(a){switch(a){case 5126:return t3;case 35664:return n3;case 35665:return i3;case 35666:return a3;case 35674:return r3;case 35675:return s3;case 35676:return o3;case 5124:case 35670:return l3;case 35667:case 35671:return c3;case 35668:case 35672:return u3;case 35669:case 35673:return f3;case 5125:return d3;case 36294:return h3;case 36295:return p3;case 36296:return m3;case 35678:case 36198:case 36298:case 36306:case 35682:return g3;case 35679:case 36299:case 36307:return _3;case 35680:case 36300:case 36308:case 36293:return v3;case 36289:case 36303:case 36311:case 36292:return x3}}class S3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=e3(n.type)}}class b3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y3(n.type)}}class M3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const p=o[c];p.setValue(e,n[p.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function Gv(a,e){a.seq.push(e),a.map[e.id]=e}function E3(a,e,n){const r=a.name,o=r.length;for(Ch.lastIndex=0;;){const c=Ch.exec(r),f=Ch.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===o){Gv(n,d===void 0?new S3(p,a,e):new b3(p,a,e));break}else{let x=n.map[p];x===void 0&&(x=new M3(p),Gv(n,x)),n=x}}}class yu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(n,f),m=e.getUniformLocation(n,p.name);E3(p,m,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const p=n[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Vv(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const T3=37297;let A3=0;function R3(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${n[f]}`)}return r.join(`
`)}const kv=new ht;function w3(a){At._getMatrix(kv,At.workingColorSpace,a);const e=`mat3( ${kv.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case Tu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Xv(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+R3(a.getShaderSource(e),p)}else return c}function C3(a,e){const n=w3(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const D3={[Yx]:"Linear",[Zx]:"Reinhard",[Kx]:"Cineon",[Qx]:"ACESFilmic",[$x]:"AgX",[ey]:"Neutral",[Jx]:"Custom"};function N3(a,e){const n=D3[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fu=new re;function U3(){At.getLuminanceCoefficients(fu);const a=fu.x.toFixed(4),e=fu.y.toFixed(4),n=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L3(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function P3(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function O3(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let p=1;c.type===a.FLOAT_MAT2&&(p=2),c.type===a.FLOAT_MAT3&&(p=3),c.type===a.FLOAT_MAT4&&(p=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:p}}return n}function dl(a){return a!==""}function Wv(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(a){return a.replace(I3,B3)}const F3=new Map;function B3(a,e){let n=pt[e];if(n===void 0){const r=F3.get(e);if(r!==void 0)n=pt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cp(n)}const z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(a){return a.replace(z3,H3)}function H3(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Yv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const G3={[mu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function V3(a){return G3[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k3={[jr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function X3(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":k3[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const W3={[Ys]:"ENVMAP_MODE_REFRACTION"};function j3(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":W3[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q3={[qx]:"ENVMAP_BLENDING_MULTIPLY",[OA]:"ENVMAP_BLENDING_MIX",[IA]:"ENVMAP_BLENDING_ADD"};function Y3(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":q3[a.combine]||"ENVMAP_BLENDING_NONE"}function Z3(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function K3(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,p=n.fragmentShader;const m=V3(n),d=X3(n),_=j3(n),x=Y3(n),g=Z3(n),S=L3(n),b=P3(c),A=o.createProgram();let y,v,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(dl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(dl).join(`
`),v.length>0&&(v+=`
`)):(y=[Yv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),v=[Yv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?pt.tonemapping_pars_fragment:"",n.toneMapping!==Wi?N3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,C3("linearToOutputTexel",n.outputColorSpace),U3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(dl).join(`
`)),f=Cp(f),f=Wv(f,n),f=jv(f,n),p=Cp(p),p=Wv(p,n),p=jv(p,n),f=qv(f),p=qv(p),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=R+y+f,L=R+v+p,P=Vv(o,o.VERTEX_SHADER,U),F=Vv(o,o.FRAGMENT_SHADER,L);o.attachShader(A,P),o.attachShader(A,F),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(V){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(A)||"",ie=o.getShaderInfoLog(P)||"",fe=o.getShaderInfoLog(F)||"",Q=K.trim(),O=ie.trim(),B=fe.trim();let oe=!0,me=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(oe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,P,F);else{const D=Xv(o,P,"vertex"),J=Xv(o,F,"fragment");Dt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+D+`
`+J)}else Q!==""?st("WebGLProgram: Program Info Log:",Q):(O===""||B==="")&&(me=!1);me&&(V.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:v}})}o.deleteShader(P),o.deleteShader(F),M=new yu(o,A),N=O3(o,A)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let ue=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=o.getProgramParameter(A,T3)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A3++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=F,this}let Q3=0;class J3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new $3(e),n.set(e,r)),r}}class $3{constructor(e){this.id=Q3++,this.code=e,this.usedTimes=0}}function e2(a,e,n,r,o,c){const f=new fy,p=new J3,m=new Set,d=[],_=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return m.add(M),M===0?"uv":`uv${M}`}function A(M,N,ue,V,K){const ie=V.fog,fe=K.geometry,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,B=e.get(M.envMap||Q,O),oe=B&&B.mapping===Pu?B.image.height:null,me=S[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const D=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,J=D!==void 0?D.length:0;let de=0;fe.morphAttributes.position!==void 0&&(de=1),fe.morphAttributes.normal!==void 0&&(de=2),fe.morphAttributes.color!==void 0&&(de=3);let ye,De,Oe,Z;if(me){const wt=Vi[me];ye=wt.vertexShader,De=wt.fragmentShader}else ye=M.vertexShader,De=M.fragmentShader,p.update(M),Oe=p.getVertexShaderID(M),Z=p.getFragmentShaderID(M);const Me=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),Be=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,et=!!M.map,Wt=!!M.matcap,ct=!!B,_t=!!M.aoMap,Ft=!!M.lightMap,ut=!!M.bumpMap,Rt=!!M.normalMap,k=!!M.displacementMap,Jt=!!M.emissiveMap,Tt=!!M.metalnessMap,Nt=!!M.roughnessMap,Ye=M.anisotropy>0,I=M.clearcoat>0,T=M.dispersion>0,j=M.iridescence>0,ge=M.sheen>0,ve=M.transmission>0,he=Ye&&!!M.anisotropyMap,Le=I&&!!M.clearcoatMap,Ce=I&&!!M.clearcoatNormalMap,$e=I&&!!M.clearcoatRoughnessMap,nt=j&&!!M.iridescenceMap,Ee=j&&!!M.iridescenceThicknessMap,Ae=ge&&!!M.sheenColorMap,ze=ge&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,Ie=!!M.specularColorMap,ft=!!M.specularIntensityMap,W=ve&&!!M.transmissionMap,we=ve&&!!M.thicknessMap,Re=!!M.gradientMap,Fe=!!M.alphaMap,Te=M.alphaTest>0,pe=!!M.alphaHash,ke=!!M.extensions;let at=Wi;M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(at=a.toneMapping);const Ot={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:De,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:Be,instancingColor:Be&&K.instanceColor!==null,instancingMorph:Be&&K.morphTexture!==null,outputColorSpace:Me===null?a.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Wt,envMap:ct,envMapMode:ct&&B.mapping,envMapCubeUVHeight:oe,aoMap:_t,lightMap:Ft,bumpMap:ut,normalMap:Rt,displacementMap:k,emissiveMap:Jt,normalMapObjectSpace:Rt&&M.normalMapType===HA,normalMapTangentSpace:Rt&&M.normalMapType===zA,metalnessMap:Tt,roughnessMap:Nt,anisotropy:Ye,anisotropyMap:he,clearcoat:I,clearcoatMap:Le,clearcoatNormalMap:Ce,clearcoatRoughnessMap:$e,dispersion:T,iridescence:j,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:ge,sheenColorMap:Ae,sheenRoughnessMap:ze,specularMap:Ve,specularColorMap:Ie,specularIntensityMap:ft,transmission:ve,transmissionMap:W,thicknessMap:we,gradientMap:Re,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:pe,combine:M.combine,mapUv:et&&b(M.map.channel),aoMapUv:_t&&b(M.aoMap.channel),lightMapUv:Ft&&b(M.lightMap.channel),bumpMapUv:ut&&b(M.bumpMap.channel),normalMapUv:Rt&&b(M.normalMap.channel),displacementMapUv:k&&b(M.displacementMap.channel),emissiveMapUv:Jt&&b(M.emissiveMap.channel),metalnessMapUv:Tt&&b(M.metalnessMap.channel),roughnessMapUv:Nt&&b(M.roughnessMap.channel),anisotropyMapUv:he&&b(M.anisotropyMap.channel),clearcoatMapUv:Le&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(M.sheenRoughnessMap.channel),specularMapUv:Ve&&b(M.specularMap.channel),specularColorMapUv:Ie&&b(M.specularColorMap.channel),specularIntensityMapUv:ft&&b(M.specularIntensityMap.channel),transmissionMapUv:W&&b(M.transmissionMap.channel),thicknessMapUv:we&&b(M.thicknessMap.channel),alphaMapUv:Fe&&b(M.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Rt||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!fe.attributes.uv&&(et||Fe),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||fe.attributes.normal===void 0&&Rt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:be,skinning:K.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&ue.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&At.getTransfer(M.map.colorSpace)===Ht,decodeVideoTextureEmissive:Jt&&M.emissiveMap.isVideoTexture===!0&&At.getTransfer(M.emissiveMap.colorSpace)===Ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ma,flipSided:M.side===Zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ot.vertexUv1s=m.has(1),Ot.vertexUv2s=m.has(2),Ot.vertexUv3s=m.has(3),m.clear(),Ot}function y(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ue in M.defines)N.push(ue),N.push(M.defines[ue]);return M.isRawShaderMaterial===!1&&(v(N,M),R(N,M),N.push(a.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function v(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function R(M,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),M.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),M.push(f.mask)}function U(M){const N=S[M.type];let ue;if(N){const V=Vi[N];ue=A1.clone(V.uniforms)}else ue=M.uniforms;return ue}function L(M,N){let ue=_.get(N);return ue!==void 0?++ue.usedTimes:(ue=new K3(a,N,M,o),d.push(ue),_.set(N,ue)),ue}function P(M){if(--M.usedTimes===0){const N=d.indexOf(M);d[N]=d[d.length-1],d.pop(),_.delete(M.cacheKey),M.destroy()}}function F(M){p.remove(M)}function z(){p.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:U,acquireProgram:L,releaseProgram:P,releaseShaderCache:F,programs:d,dispose:z}}function t2(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let p=a.get(f);return p===void 0&&(p={},a.set(f,p)),p}function r(f){a.delete(f)}function o(f,p,m){a.get(f)[p]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function n2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Kv(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,b,A,y,v){let R=a[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:b,materialVariant:f(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:v},a[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=b,R.materialVariant=f(g),R.groupOrder=A,R.renderOrder=g.renderOrder,R.z=y,R.group=v),e++,R}function m(g,S,b,A,y,v){const R=p(g,S,b,A,y,v);b.transmission>0?r.push(R):b.transparent===!0?o.push(R):n.push(R)}function d(g,S,b,A,y,v){const R=p(g,S,b,A,y,v);b.transmission>0?r.unshift(R):b.transparent===!0?o.unshift(R):n.unshift(R)}function _(g,S){n.length>1&&n.sort(g||n2),r.length>1&&r.sort(S||Zv),o.length>1&&o.sort(S||Zv)}function x(){for(let g=e,S=a.length;g<S;g++){const b=a[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:x,sort:_}}function i2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new Kv,a.set(r,[f])):o>=c.length?(f=new Kv,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function a2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Mt};break;case"SpotLight":n={position:new re,direction:new re,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new re,halfWidth:new re,halfHeight:new re};break}return a[e.id]=n,n}}}function r2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let s2=0;function o2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function l2(a){const e=new a2,n=r2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new re);const o=new re,c=new rn,f=new rn;function p(d){let _=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,b=0,A=0,y=0,v=0,R=0,U=0,L=0,P=0,F=0,z=0;d.sort(o2);for(let N=0,ue=d.length;N<ue;N++){const V=d[N],K=V.color,ie=V.intensity,fe=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Zs?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=K.r*ie,x+=K.g*ie,g+=K.b*ie;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],ie);z++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,oe=n.get(V);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,r.directionalShadow[S]=oe,r.directionalShadowMap[S]=Q,r.directionalShadowMatrix[S]=V.shadow.matrix,R++}r.directional[S]=O,S++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(K).multiplyScalar(ie),O.distance=fe,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[A]=O;const B=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,B.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[A]=B.matrix,V.castShadow){const oe=n.get(V);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,r.spotShadow[A]=oe,r.spotShadowMap[A]=Q,L++}A++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(K).multiplyScalar(ie),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=O,y++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const B=V.shadow,oe=n.get(V);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,oe.shadowCameraNear=B.camera.near,oe.shadowCameraFar=B.camera.far,r.pointShadow[b]=oe,r.pointShadowMap[b]=Q,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=O,b++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ie),O.groundColor.copy(V.groundColor).multiplyScalar(ie),r.hemi[v]=O,v++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==S||M.pointLength!==b||M.spotLength!==A||M.rectAreaLength!==y||M.hemiLength!==v||M.numDirectionalShadows!==R||M.numPointShadows!==U||M.numSpotShadows!==L||M.numSpotMaps!==P||M.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=L+P-F,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,M.directionalLength=S,M.pointLength=b,M.spotLength=A,M.rectAreaLength=y,M.hemiLength=v,M.numDirectionalShadows=R,M.numPointShadows=U,M.numSpotShadows=L,M.numSpotMaps=P,M.numLightProbes=z,r.version=s2++)}function m(d,_){let x=0,g=0,S=0,b=0,A=0;const y=_.matrixWorldInverse;for(let v=0,R=d.length;v<R;v++){const U=d[v];if(U.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),x++}else if(U.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const L=r.hemi[A];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(y),A++}}}return{setup:p,setupView:m,state:r}}function Qv(a){const e=new l2(a),n=[],r=[];function o(_){d.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function p(){e.setup(n)}function m(_){e.setupView(n,_)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function c2(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let p;return f===void 0?(p=new Qv(a),e.set(o,[p])):c>=f.length?(p=new Qv(a),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:n,dispose:r}}const u2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
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
}`,d2=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],h2=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Jv=new rn,cl=new re,Dh=new re;function p2(a,e,n){let r=new gy;const o=new Xt,c=new Xt,f=new fn,p=new D1,m=new N1,d={},_=n.maxTextureSize,x={[mr]:Zn,[Zn]:mr,[Ma]:Ma},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:u2,fragmentShader:f2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ua(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let v=this.type;this.render=function(F,z,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===gA&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mu);const N=a.getRenderTarget(),ue=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Aa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=v!==this.type;ie&&z.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(Q=>Q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,Q=F.length;fe<Q;fe++){const O=F[fe],B=O.shadow;if(B===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const oe=B.getFrameExtents();o.multiply(oe),c.copy(B.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/oe.x),o.x=c.x*oe.x,B.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/oe.y),o.y=c.y*oe.y,B.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||ie===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===fl){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ji(o.x,o.y,{format:Zs,type:Ca,minFilter:On,magFilter:On,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new _l(o.x,o.y,ki),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Da,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn}else O.isPointLight?(B.map=new Ty(o.x),B.map.depthTexture=new E1(o.x,qi)):(B.map=new ji(o.x,o.y),B.map.depthTexture=new _l(o.x,o.y,qi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Da,this.type===mu?(B.map.depthTexture.compareFunction=me?Yp:qp,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn);B.camera.updateProjectionMatrix()}const D=B.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<D;J++){if(B.map.isWebGLCubeRenderTarget)a.setRenderTarget(B.map,J),a.clear();else{J===0&&(a.setRenderTarget(B.map),a.clear());const de=B.getViewport(J);f.set(c.x*de.x,c.y*de.y,c.x*de.z,c.y*de.w),K.viewport(f)}if(O.isPointLight){const de=B.camera,ye=B.matrix,De=O.distance||de.far;De!==de.far&&(de.far=De,de.updateProjectionMatrix()),cl.setFromMatrixPosition(O.matrixWorld),de.position.copy(cl),Dh.copy(de.position),Dh.add(d2[J]),de.up.copy(h2[J]),de.lookAt(Dh),de.updateMatrixWorld(),ye.makeTranslation(-cl.x,-cl.y,-cl.z),Jv.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Jv,de.coordinateSystem,de.reversedDepth)}else B.updateMatrices(O);r=B.getFrustum(),L(z,M,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===fl&&R(B,M),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,a.setRenderTarget(N,ue,V)};function R(F,z){const M=e.update(A);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ji(o.x,o.y,{format:Zs,type:Ca})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(z,null,M,g,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(z,null,M,S,A,null)}function U(F,z,M,N){let ue=null;const V=M.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=M.isPointLight===!0?m:p,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=ue.uuid,ie=z.uuid;let fe=d[K];fe===void 0&&(fe={},d[K]=fe);let Q=fe[ie];Q===void 0&&(Q=ue.clone(),fe[ie]=Q,z.addEventListener("dispose",P)),ue=Q}if(ue.visible=z.visible,ue.wireframe=z.wireframe,N===fl?ue.side=z.shadowSide!==null?z.shadowSide:z.side:ue.side=z.shadowSide!==null?z.shadowSide:x[z.side],ue.alphaMap=z.alphaMap,ue.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ue.map=z.map,ue.clipShadows=z.clipShadows,ue.clippingPlanes=z.clippingPlanes,ue.clipIntersection=z.clipIntersection,ue.displacementMap=z.displacementMap,ue.displacementScale=z.displacementScale,ue.displacementBias=z.displacementBias,ue.wireframeLinewidth=z.wireframeLinewidth,ue.linewidth=z.linewidth,M.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const K=a.properties.get(ue);K.light=M}return ue}function L(F,z,M,N,ue){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ue===fl)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,F.matrixWorld);const ie=e.update(F),fe=F.material;if(Array.isArray(fe)){const Q=ie.groups;for(let O=0,B=Q.length;O<B;O++){const oe=Q[O],me=fe[oe.materialIndex];if(me&&me.visible){const D=U(F,me,N,ue);F.onBeforeShadow(a,F,z,M,ie,D,oe),a.renderBufferDirect(M,null,ie,D,F,oe),F.onAfterShadow(a,F,z,M,ie,D,oe)}}}else if(fe.visible){const Q=U(F,fe,N,ue);F.onBeforeShadow(a,F,z,M,ie,Q,null),a.renderBufferDirect(M,null,ie,Q,F,null),F.onAfterShadow(a,F,z,M,ie,Q,null)}}const K=F.children;for(let ie=0,fe=K.length;ie<fe;ie++)L(K[ie],z,M,N,ue)}function P(F){F.target.removeEventListener("dispose",P);for(const M in d){const N=d[M],ue=F.target.uuid;ue in N&&(N[ue].dispose(),delete N[ue])}}}function m2(a,e){function n(){let W=!1;const we=new fn;let Re=null;const Fe=new fn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(a.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,pe,ke,at,Ot){Ot===!0&&(Te*=at,pe*=at,ke*=at),we.set(Te,pe,ke,at),Fe.equals(we)===!1&&(a.clearColor(Te,pe,ke,at),Fe.copy(we))},reset:function(){W=!1,Re=null,Fe.set(-1,0,0,0)}}}function r(){let W=!1,we=!1,Re=null,Fe=null,Te=null;return{setReversed:function(pe){if(we!==pe){const ke=e.get("EXT_clip_control");pe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=pe;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return we},setTest:function(pe){pe?Me(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!W&&(a.depthMask(pe),Re=pe)},setFunc:function(pe){if(we&&(pe=KA[pe]),Fe!==pe){switch(pe){case zh:a.depthFunc(a.NEVER);break;case Hh:a.depthFunc(a.ALWAYS);break;case Gh:a.depthFunc(a.LESS);break;case qs:a.depthFunc(a.LEQUAL);break;case Vh:a.depthFunc(a.EQUAL);break;case kh:a.depthFunc(a.GEQUAL);break;case Xh:a.depthFunc(a.GREATER);break;case Wh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Te!==pe&&(Te=pe,we&&(pe=1-pe),a.clearDepth(pe))},reset:function(){W=!1,Re=null,Fe=null,Te=null,we=!1}}}function o(){let W=!1,we=null,Re=null,Fe=null,Te=null,pe=null,ke=null,at=null,Ot=null;return{setTest:function(wt){W||(wt?Me(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(wt){we!==wt&&!W&&(a.stencilMask(wt),we=wt)},setFunc:function(wt,yi,Sn){(Re!==wt||Fe!==yi||Te!==Sn)&&(a.stencilFunc(wt,yi,Sn),Re=wt,Fe=yi,Te=Sn)},setOp:function(wt,yi,Sn){(pe!==wt||ke!==yi||at!==Sn)&&(a.stencilOp(wt,yi,Sn),pe=wt,ke=yi,at=Sn)},setLocked:function(wt){W=wt},setClear:function(wt){Ot!==wt&&(a.clearStencil(wt),Ot=wt)},reset:function(){W=!1,we=null,Re=null,Fe=null,Te=null,pe=null,ke=null,at=null,Ot=null}}}const c=new n,f=new r,p=new o,m=new WeakMap,d=new WeakMap;let _={},x={},g=new WeakMap,S=[],b=null,A=!1,y=null,v=null,R=null,U=null,L=null,P=null,F=null,z=new Mt(0,0,0),M=0,N=!1,ue=null,V=null,K=null,ie=null,fe=null;const Q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const oe=a.getParameter(a.VERSION);oe.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(oe)[1]),O=B>=1):oe.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),O=B>=2);let me=null,D={};const J=a.getParameter(a.SCISSOR_BOX),de=a.getParameter(a.VIEWPORT),ye=new fn().fromArray(J),De=new fn().fromArray(de);function Oe(W,we,Re,Fe){const Te=new Uint8Array(4),pe=a.createTexture();a.bindTexture(W,pe),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<Re;ke++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(we+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return pe}const Z={};Z[a.TEXTURE_2D]=Oe(a.TEXTURE_2D,a.TEXTURE_2D,1),Z[a.TEXTURE_CUBE_MAP]=Oe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[a.TEXTURE_2D_ARRAY]=Oe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Z[a.TEXTURE_3D]=Oe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Me(a.DEPTH_TEST),f.setFunc(qs),ut(!1),Rt($_),Me(a.CULL_FACE),_t(Aa);function Me(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function be(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function Be(W,we){return x[W]!==we?(a.bindFramebuffer(W,we),x[W]=we,W===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=we),W===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(W,we){let Re=S,Fe=!1;if(W){Re=g.get(we),Re===void 0&&(Re=[],g.set(we,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==a.COLOR_ATTACHMENT0){for(let pe=0,ke=Te.length;pe<ke;pe++)Re[pe]=a.COLOR_ATTACHMENT0+pe;Re.length=Te.length,Fe=!0}}else Re[0]!==a.BACK&&(Re[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(Re)}function et(W){return b!==W?(a.useProgram(W),b=W,!0):!1}const Wt={[Gr]:a.FUNC_ADD,[vA]:a.FUNC_SUBTRACT,[xA]:a.FUNC_REVERSE_SUBTRACT};Wt[yA]=a.MIN,Wt[SA]=a.MAX;const ct={[bA]:a.ZERO,[MA]:a.ONE,[EA]:a.SRC_COLOR,[Fh]:a.SRC_ALPHA,[DA]:a.SRC_ALPHA_SATURATE,[wA]:a.DST_COLOR,[AA]:a.DST_ALPHA,[TA]:a.ONE_MINUS_SRC_COLOR,[Bh]:a.ONE_MINUS_SRC_ALPHA,[CA]:a.ONE_MINUS_DST_COLOR,[RA]:a.ONE_MINUS_DST_ALPHA,[NA]:a.CONSTANT_COLOR,[UA]:a.ONE_MINUS_CONSTANT_COLOR,[LA]:a.CONSTANT_ALPHA,[PA]:a.ONE_MINUS_CONSTANT_ALPHA};function _t(W,we,Re,Fe,Te,pe,ke,at,Ot,wt){if(W===Aa){A===!0&&(be(a.BLEND),A=!1);return}if(A===!1&&(Me(a.BLEND),A=!0),W!==_A){if(W!==y||wt!==N){if((v!==Gr||L!==Gr)&&(a.blendEquation(a.FUNC_ADD),v=Gr,L=Gr),wt)switch(W){case Ws:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Eu:a.blendFunc(a.ONE,a.ONE);break;case ev:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case tv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ws:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Eu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ev:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}R=null,U=null,P=null,F=null,z.set(0,0,0),M=0,y=W,N=wt}return}Te=Te||we,pe=pe||Re,ke=ke||Fe,(we!==v||Te!==L)&&(a.blendEquationSeparate(Wt[we],Wt[Te]),v=we,L=Te),(Re!==R||Fe!==U||pe!==P||ke!==F)&&(a.blendFuncSeparate(ct[Re],ct[Fe],ct[pe],ct[ke]),R=Re,U=Fe,P=pe,F=ke),(at.equals(z)===!1||Ot!==M)&&(a.blendColor(at.r,at.g,at.b,Ot),z.copy(at),M=Ot),y=W,N=!1}function Ft(W,we){W.side===Ma?be(a.CULL_FACE):Me(a.CULL_FACE);let Re=W.side===Zn;we&&(Re=!Re),ut(Re),W.blending===Ws&&W.transparent===!1?_t(Aa):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){ue!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),ue=W)}function Rt(W){W!==pA?(Me(a.CULL_FACE),W!==V&&(W===$_?a.cullFace(a.BACK):W===mA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),V=W}function k(W){W!==K&&(O&&a.lineWidth(W),K=W)}function Jt(W,we,Re){W?(Me(a.POLYGON_OFFSET_FILL),(ie!==we||fe!==Re)&&(ie=we,fe=Re,f.getReversed()&&(we=-we),a.polygonOffset(we,Re))):be(a.POLYGON_OFFSET_FILL)}function Tt(W){W?Me(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function Nt(W){W===void 0&&(W=a.TEXTURE0+Q-1),me!==W&&(a.activeTexture(W),me=W)}function Ye(W,we,Re){Re===void 0&&(me===null?Re=a.TEXTURE0+Q-1:Re=me);let Fe=D[Re];Fe===void 0&&(Fe={type:void 0,texture:void 0},D[Re]=Fe),(Fe.type!==W||Fe.texture!==we)&&(me!==Re&&(a.activeTexture(Re),me=Re),a.bindTexture(W,we||Z[W]),Fe.type=W,Fe.texture=we)}function I(){const W=D[me];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function j(){try{a.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ge(){try{a.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ve(){try{a.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function he(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Le(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ce(){try{a.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function $e(){try{a.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function nt(){try{a.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ee(){try{a.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ae(W){ye.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),ye.copy(W))}function ze(W){De.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function Ve(W,we){let Re=d.get(we);Re===void 0&&(Re=new WeakMap,d.set(we,Re));let Fe=Re.get(W);Fe===void 0&&(Fe=a.getUniformBlockIndex(we,W.name),Re.set(W,Fe))}function Ie(W,we){const Fe=d.get(we).get(W);m.get(we)!==Fe&&(a.uniformBlockBinding(we,Fe,W.__bindingPointIndex),m.set(we,Fe))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},me=null,D={},x={},g=new WeakMap,S=[],b=null,A=!1,y=null,v=null,R=null,U=null,L=null,P=null,F=null,z=new Mt(0,0,0),M=0,N=!1,ue=null,V=null,K=null,ie=null,fe=null,ye.set(0,0,a.canvas.width,a.canvas.height),De.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Me,disable:be,bindFramebuffer:Be,drawBuffers:Je,useProgram:et,setBlending:_t,setMaterial:Ft,setFlipSided:ut,setCullFace:Rt,setLineWidth:k,setPolygonOffset:Jt,setScissorTest:Tt,activeTexture:Nt,bindTexture:Ye,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:Ce,texStorage3D:$e,texSubImage2D:ge,texSubImage3D:ve,compressedTexSubImage2D:he,compressedTexSubImage3D:Le,scissor:Ae,viewport:ze,reset:ft}}function g2(a,e,n,r,o,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xt,_=new WeakMap;let x;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return S?new OffscreenCanvas(I,T):Ru("canvas")}function A(I,T,j){let ge=1;const ve=Ye(I);if((ve.width>j||ve.height>j)&&(ge=j/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(ge*ve.width),Le=Math.floor(ge*ve.height);x===void 0&&(x=b(he,Le));const Ce=T?b(he,Le):x;return Ce.width=he,Ce.height=Le,Ce.getContext("2d").drawImage(I,0,0,he,Le),st("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+Le+")."),Ce}else return"data"in I&&st("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){a.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(I,T,j,ge,ve=!1){if(I!==null){if(a[I]!==void 0)return a[I];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=T;if(T===a.RED&&(j===a.FLOAT&&(he=a.R32F),j===a.HALF_FLOAT&&(he=a.R16F),j===a.UNSIGNED_BYTE&&(he=a.R8)),T===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.R8UI),j===a.UNSIGNED_SHORT&&(he=a.R16UI),j===a.UNSIGNED_INT&&(he=a.R32UI),j===a.BYTE&&(he=a.R8I),j===a.SHORT&&(he=a.R16I),j===a.INT&&(he=a.R32I)),T===a.RG&&(j===a.FLOAT&&(he=a.RG32F),j===a.HALF_FLOAT&&(he=a.RG16F),j===a.UNSIGNED_BYTE&&(he=a.RG8)),T===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RG8UI),j===a.UNSIGNED_SHORT&&(he=a.RG16UI),j===a.UNSIGNED_INT&&(he=a.RG32UI),j===a.BYTE&&(he=a.RG8I),j===a.SHORT&&(he=a.RG16I),j===a.INT&&(he=a.RG32I)),T===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RGB8UI),j===a.UNSIGNED_SHORT&&(he=a.RGB16UI),j===a.UNSIGNED_INT&&(he=a.RGB32UI),j===a.BYTE&&(he=a.RGB8I),j===a.SHORT&&(he=a.RGB16I),j===a.INT&&(he=a.RGB32I)),T===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),j===a.UNSIGNED_INT&&(he=a.RGBA32UI),j===a.BYTE&&(he=a.RGBA8I),j===a.SHORT&&(he=a.RGBA16I),j===a.INT&&(he=a.RGBA32I)),T===a.RGB&&(j===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),j===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),T===a.RGBA){const Le=ve?Tu:At.getTransfer(ge);j===a.FLOAT&&(he=a.RGBA32F),j===a.HALF_FLOAT&&(he=a.RGBA16F),j===a.UNSIGNED_BYTE&&(he=Le===Ht?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(I,T){let j;return I?T===null||T===qi||T===gl?j=a.DEPTH24_STENCIL8:T===ki?j=a.DEPTH32F_STENCIL8:T===ml&&(j=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===gl?j=a.DEPTH_COMPONENT24:T===ki?j=a.DEPTH_COMPONENT32F:T===ml&&(j=a.DEPTH_COMPONENT16),j}function P(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function F(I){const T=I.target;T.removeEventListener("dispose",F),M(T),T.isVideoTexture&&_.delete(T)}function z(I){const T=I.target;T.removeEventListener("dispose",z),ue(T)}function M(I){const T=r.get(I);if(T.__webglInit===void 0)return;const j=I.source,ge=g.get(j);if(ge){const ve=ge[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(I),Object.keys(ge).length===0&&g.delete(j)}r.remove(I)}function N(I){const T=r.get(I);a.deleteTexture(T.__webglTexture);const j=I.source,ge=g.get(j);delete ge[T.__cacheKey],f.memory.textures--}function ue(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ve=0;ve<T.__webglFramebuffer[ge].length;ve++)a.deleteFramebuffer(T.__webglFramebuffer[ge][ve]);else a.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)a.deleteFramebuffer(T.__webglFramebuffer[ge]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let ge=0,ve=j.length;ge<ve;ge++){const he=r.get(j[ge]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(j[ge])}r.remove(I)}let V=0;function K(){V=0}function ie(){const I=V;return I>=o.maxTextures&&st("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),V+=1,I}function fe(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Q(I,T){const j=r.get(I);if(I.isVideoTexture&&Tt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const ge=I.image;if(ge===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,I,T);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+T)}function O(I,T){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){Z(j,I,T);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+T)}function B(I,T){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){Z(j,I,T);return}n.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+T)}function oe(I,T){const j=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){Me(j,I,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+T)}const me={[jh]:a.REPEAT,[Ea]:a.CLAMP_TO_EDGE,[qh]:a.MIRRORED_REPEAT},D={[Dn]:a.NEAREST,[FA]:a.NEAREST_MIPMAP_NEAREST,[zc]:a.NEAREST_MIPMAP_LINEAR,[On]:a.LINEAR,[$d]:a.LINEAR_MIPMAP_NEAREST,[kr]:a.LINEAR_MIPMAP_LINEAR},J={[GA]:a.NEVER,[jA]:a.ALWAYS,[VA]:a.LESS,[qp]:a.LEQUAL,[kA]:a.EQUAL,[Yp]:a.GEQUAL,[XA]:a.GREATER,[WA]:a.NOTEQUAL};function de(I,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===$d||T.magFilter===zc||T.magFilter===kr||T.minFilter===On||T.minFilter===$d||T.minFilter===zc||T.minFilter===kr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,me[T.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,me[T.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,me[T.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,D[T.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==zc&&T.minFilter!==kr||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ye(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let ve=g.get(ge);ve===void 0&&(ve={},g.set(ge,ve));const he=fe(T);if(he!==I.__cacheKey){ve[he]===void 0&&(ve[he]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ve[he].usedTimes++;const Le=ve[I.__cacheKey];Le!==void 0&&(ve[I.__cacheKey].usedTimes--,Le.usedTimes===0&&N(T)),I.__cacheKey=he,I.__webglTexture=ve[he].texture}return j}function De(I,T,j){return Math.floor(Math.floor(I/j)/T)}function Oe(I,T,j,ge){const he=I.updateRanges;if(he.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,j,ge,T.data);else{he.sort((Ee,Ae)=>Ee.start-Ae.start);let Le=0;for(let Ee=1;Ee<he.length;Ee++){const Ae=he[Le],ze=he[Ee],Ve=Ae.start+Ae.count,Ie=De(ze.start,T.width,4),ft=De(Ae.start,T.width,4);ze.start<=Ve+1&&Ie===ft&&De(ze.start+ze.count-1,T.width,4)===Ie?Ae.count=Math.max(Ae.count,ze.start+ze.count-Ae.start):(++Le,he[Le]=ze)}he.length=Le+1;const Ce=a.getParameter(a.UNPACK_ROW_LENGTH),$e=a.getParameter(a.UNPACK_SKIP_PIXELS),nt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Ae=he.length;Ee<Ae;Ee++){const ze=he[Ee],Ve=Math.floor(ze.start/4),Ie=Math.ceil(ze.count/4),ft=Ve%T.width,W=Math.floor(Ve/T.width),we=Ie,Re=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ft,W,we,Re,j,ge,T.data)}I.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ce),a.pixelStorei(a.UNPACK_SKIP_PIXELS,$e),a.pixelStorei(a.UNPACK_SKIP_ROWS,nt)}}function Z(I,T,j){let ge=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=a.TEXTURE_3D);const ve=ye(I,T),he=T.source;n.bindTexture(ge,I.__webglTexture,a.TEXTURE0+j);const Le=r.get(he);if(he.version!==Le.__version||ve===!0){n.activeTexture(a.TEXTURE0+j);const Ce=At.getPrimaries(At.workingColorSpace),$e=T.colorSpace===hr?null:At.getPrimaries(T.colorSpace),nt=T.colorSpace===hr||Ce===$e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=A(T.image,!1,o.maxTextureSize);Ee=Nt(T,Ee);const Ae=c.convert(T.format,T.colorSpace),ze=c.convert(T.type);let Ve=U(T.internalFormat,Ae,ze,T.colorSpace,T.isVideoTexture);de(ge,T);let Ie;const ft=T.mipmaps,W=T.isVideoTexture!==!0,we=Le.__version===void 0||ve===!0,Re=he.dataReady,Fe=P(T,Ee);if(T.isDepthTexture)Ve=L(T.format===Xr,T.type),we&&(W?n.texStorage2D(a.TEXTURE_2D,1,Ve,Ee.width,Ee.height):n.texImage2D(a.TEXTURE_2D,0,Ve,Ee.width,Ee.height,0,Ae,ze,null));else if(T.isDataTexture)if(ft.length>0){W&&we&&n.texStorage2D(a.TEXTURE_2D,Fe,Ve,ft[0].width,ft[0].height);for(let Te=0,pe=ft.length;Te<pe;Te++)Ie=ft[Te],W?Re&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ae,ze,Ie.data):n.texImage2D(a.TEXTURE_2D,Te,Ve,Ie.width,Ie.height,0,Ae,ze,Ie.data);T.generateMipmaps=!1}else W?(we&&n.texStorage2D(a.TEXTURE_2D,Fe,Ve,Ee.width,Ee.height),Re&&Oe(T,Ee,Ae,ze)):n.texImage2D(a.TEXTURE_2D,0,Ve,Ee.width,Ee.height,0,Ae,ze,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&we&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Ve,ft[0].width,ft[0].height,Ee.depth);for(let Te=0,pe=ft.length;Te<pe;Te++)if(Ie=ft[Te],T.format!==Di)if(Ae!==null)if(W){if(Re)if(T.layerUpdates.size>0){const ke=Cv(Ie.width,Ie.height,T.format,T.type);for(const at of T.layerUpdates){const Ot=Ie.data.subarray(at*ke/Ie.data.BYTES_PER_ELEMENT,(at+1)*ke/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,at,Ie.width,Ie.height,1,Ae,Ot)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,Ee.depth,Ae,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,Ve,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,Ee.depth,Ae,ze,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Te,Ve,Ie.width,Ie.height,Ee.depth,0,Ae,ze,Ie.data)}else{W&&we&&n.texStorage2D(a.TEXTURE_2D,Fe,Ve,ft[0].width,ft[0].height);for(let Te=0,pe=ft.length;Te<pe;Te++)Ie=ft[Te],T.format!==Di?Ae!==null?W?Re&&n.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ae,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,Te,Ve,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ae,ze,Ie.data):n.texImage2D(a.TEXTURE_2D,Te,Ve,Ie.width,Ie.height,0,Ae,ze,Ie.data)}else if(T.isDataArrayTexture)if(W){if(we&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Ve,Ee.width,Ee.height,Ee.depth),Re)if(T.layerUpdates.size>0){const Te=Cv(Ee.width,Ee.height,T.format,T.type);for(const pe of T.layerUpdates){const ke=Ee.data.subarray(pe*Te/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Te/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ae,ze,ke)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,ze,Ee.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ve,Ee.width,Ee.height,Ee.depth,0,Ae,ze,Ee.data);else if(T.isData3DTexture)W?(we&&n.texStorage3D(a.TEXTURE_3D,Fe,Ve,Ee.width,Ee.height,Ee.depth),Re&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,ze,Ee.data)):n.texImage3D(a.TEXTURE_3D,0,Ve,Ee.width,Ee.height,Ee.depth,0,Ae,ze,Ee.data);else if(T.isFramebufferTexture){if(we)if(W)n.texStorage2D(a.TEXTURE_2D,Fe,Ve,Ee.width,Ee.height);else{let Te=Ee.width,pe=Ee.height;for(let ke=0;ke<Fe;ke++)n.texImage2D(a.TEXTURE_2D,ke,Ve,Te,pe,0,Ae,ze,null),Te>>=1,pe>>=1}}else if(ft.length>0){if(W&&we){const Te=Ye(ft[0]);n.texStorage2D(a.TEXTURE_2D,Fe,Ve,Te.width,Te.height)}for(let Te=0,pe=ft.length;Te<pe;Te++)Ie=ft[Te],W?Re&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ae,ze,Ie):n.texImage2D(a.TEXTURE_2D,Te,Ve,Ae,ze,Ie);T.generateMipmaps=!1}else if(W){if(we){const Te=Ye(Ee);n.texStorage2D(a.TEXTURE_2D,Fe,Ve,Te.width,Te.height)}Re&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae,ze,Ee)}else n.texImage2D(a.TEXTURE_2D,0,Ve,Ae,ze,Ee);y(T)&&v(ge),Le.__version=he.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Me(I,T,j){if(T.image.length!==6)return;const ge=ye(I,T),ve=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+j);const he=r.get(ve);if(ve.version!==he.__version||ge===!0){n.activeTexture(a.TEXTURE0+j);const Le=At.getPrimaries(At.workingColorSpace),Ce=T.colorSpace===hr?null:At.getPrimaries(T.colorSpace),$e=T.colorSpace===hr||Le===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const nt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!nt&&!Ee?Ae[pe]=A(T.image[pe],!0,o.maxCubemapSize):Ae[pe]=Ee?T.image[pe].image:T.image[pe],Ae[pe]=Nt(T,Ae[pe]);const ze=Ae[0],Ve=c.convert(T.format,T.colorSpace),Ie=c.convert(T.type),ft=U(T.internalFormat,Ve,Ie,T.colorSpace),W=T.isVideoTexture!==!0,we=he.__version===void 0||ge===!0,Re=ve.dataReady;let Fe=P(T,ze);de(a.TEXTURE_CUBE_MAP,T);let Te;if(nt){W&&we&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ft,ze.width,ze.height);for(let pe=0;pe<6;pe++){Te=Ae[pe].mipmaps;for(let ke=0;ke<Te.length;ke++){const at=Te[ke];T.format!==Di?Ve!==null?W?Re&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,at.width,at.height,Ve,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,ft,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,at.width,at.height,Ve,Ie,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,ft,at.width,at.height,0,Ve,Ie,at.data)}}}else{if(Te=T.mipmaps,W&&we){Te.length>0&&Fe++;const pe=Ye(Ae[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){W?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,Ve,Ie,Ae[pe].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ae[pe].width,Ae[pe].height,0,Ve,Ie,Ae[pe].data);for(let ke=0;ke<Te.length;ke++){const Ot=Te[ke].image[pe].image;W?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,Ot.width,Ot.height,Ve,Ie,Ot.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,ft,Ot.width,Ot.height,0,Ve,Ie,Ot.data)}}else{W?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ve,Ie,Ae[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ve,Ie,Ae[pe]);for(let ke=0;ke<Te.length;ke++){const at=Te[ke];W?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,Ve,Ie,at.image[pe]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,ft,Ve,Ie,at.image[pe])}}}y(T)&&v(a.TEXTURE_CUBE_MAP),he.__version=ve.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function be(I,T,j,ge,ve,he){const Le=c.convert(j.format,j.colorSpace),Ce=c.convert(j.type),$e=U(j.internalFormat,Le,Ce,j.colorSpace),nt=r.get(T),Ee=r.get(j);if(Ee.__renderTarget=T,!nt.__hasExternalTextures){const Ae=Math.max(1,T.width>>he),ze=Math.max(1,T.height>>he);ve===a.TEXTURE_3D||ve===a.TEXTURE_2D_ARRAY?n.texImage3D(ve,he,$e,Ae,ze,T.depth,0,Le,Ce,null):n.texImage2D(ve,he,$e,Ae,ze,0,Le,Ce,null)}n.bindFramebuffer(a.FRAMEBUFFER,I),Jt(T)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,ve,Ee.__webglTexture,0,k(T)):(ve===a.TEXTURE_2D||ve>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,ve,Ee.__webglTexture,he),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Be(I,T,j){if(a.bindRenderbuffer(a.RENDERBUFFER,I),T.depthBuffer){const ge=T.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,he=L(T.stencilBuffer,ve),Le=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Jt(T)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),he,T.width,T.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),he,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,he,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Le,a.RENDERBUFFER,I)}else{const ge=T.textures;for(let ve=0;ve<ge.length;ve++){const he=ge[ve],Le=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),$e=U(he.internalFormat,Le,Ce,he.colorSpace);Jt(T)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),$e,T.width,T.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),$e,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,$e,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Je(I,T,j){const ge=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),ve.__webglTexture===void 0){ve.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),de(a.TEXTURE_CUBE_MAP,T.depthTexture);const nt=c.convert(T.depthTexture.format),Ee=c.convert(T.depthTexture.type);let Ae;T.depthTexture.format===Da?Ae=a.DEPTH_COMPONENT24:T.depthTexture.format===Xr&&(Ae=a.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ae,T.width,T.height,0,nt,Ee,null)}}else Q(T.depthTexture,0);const he=ve.__webglTexture,Le=k(T),Ce=ge?a.TEXTURE_CUBE_MAP_POSITIVE_X+j:a.TEXTURE_2D,$e=T.depthTexture.format===Xr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Da)Jt(T)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$e,Ce,he,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,$e,Ce,he,0);else if(T.depthTexture.format===Xr)Jt(T)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$e,Ce,he,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,$e,Ce,he,0);else throw new Error("Unknown depthTexture format")}function et(I){const T=r.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=ge}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let ge=0;ge<6;ge++)Je(T.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?Je(T.__webglFramebuffer[0],I,0):Je(T.__webglFramebuffer,I,0)}else if(j){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=a.createRenderbuffer(),Be(T.__webglDepthbuffer[ge],I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,he)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Be(T.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,he)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Wt(I,T,j){const ge=r.get(I);T!==void 0&&be(ge.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&et(I)}function ct(I){const T=I.texture,j=r.get(I),ge=r.get(T);I.addEventListener("dispose",z);const ve=I.textures,he=I.isWebGLCubeRenderTarget===!0,Le=ve.length>1;if(Le||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=T.version,f.memory.textures++),he){j.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ce]=[];for(let $e=0;$e<T.mipmaps.length;$e++)j.__webglFramebuffer[Ce][$e]=a.createFramebuffer()}else j.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)j.__webglFramebuffer[Ce]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(Le)for(let Ce=0,$e=ve.length;Ce<$e;Ce++){const nt=r.get(ve[Ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),f.memory.textures++)}if(I.samples>0&&Jt(I)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const $e=ve[Ce];j.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[Ce]);const nt=c.convert($e.format,$e.colorSpace),Ee=c.convert($e.type),Ae=U($e.internalFormat,nt,Ee,$e.colorSpace,I.isXRRenderTarget===!0),ze=k(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,ze,Ae,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,j.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),Be(j.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){n.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),de(a.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)be(j.__webglFramebuffer[Ce][$e],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e);else be(j.__webglFramebuffer[Ce],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let Ce=0,$e=ve.length;Ce<$e;Ce++){const nt=ve[Ce],Ee=r.get(nt);let Ae=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Ee.__webglTexture),de(Ae,nt),be(j.__webglFramebuffer,I,nt,a.COLOR_ATTACHMENT0+Ce,Ae,0),y(nt)&&v(Ae)}n.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ge.__webglTexture),de(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)be(j.__webglFramebuffer[$e],I,T,a.COLOR_ATTACHMENT0,Ce,$e);else be(j.__webglFramebuffer,I,T,a.COLOR_ATTACHMENT0,Ce,0);y(T)&&v(Ce),n.unbindTexture()}I.depthBuffer&&et(I)}function _t(I){const T=I.textures;for(let j=0,ge=T.length;j<ge;j++){const ve=T[j];if(y(ve)){const he=R(I),Le=r.get(ve).__webglTexture;n.bindTexture(he,Le),v(he),n.unbindTexture()}}}const Ft=[],ut=[];function Rt(I){if(I.samples>0){if(Jt(I)===!1){const T=I.textures,j=I.width,ge=I.height;let ve=a.COLOR_BUFFER_BIT;const he=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=r.get(I),Ce=T.length>1;if(Ce)for(let nt=0;nt<T.length;nt++)n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const $e=I.texture.mipmaps;$e&&$e.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let nt=0;nt<T.length;nt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Le.__webglColorRenderbuffer[nt]);const Ee=r.get(T[nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,j,ge,0,0,j,ge,ve,a.NEAREST),m===!0&&(Ft.length=0,ut.length=0,Ft.push(a.COLOR_ATTACHMENT0+nt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ft.push(he),ut.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ut)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let nt=0;nt<T.length;nt++){n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,Le.__webglColorRenderbuffer[nt]);const Ee=r.get(T[nt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,Ee,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function k(I){return Math.min(o.maxSamples,I.samples)}function Jt(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(I){const T=f.render.frame;_.get(I)!==T&&(_.set(I,T),I.update())}function Nt(I,T){const j=I.colorSpace,ge=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Ks&&j!==hr&&(At.getTransfer(j)===Ht?(ge!==Di||ve!==_i)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",j)),T}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=oe,this.rebindTextures=Wt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _2(a,e){function n(r,o=hr){let c;const f=At.getTransfer(o);if(r===_i)return a.UNSIGNED_BYTE;if(r===Vp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===kp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ay)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ry)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===ny)return a.BYTE;if(r===iy)return a.SHORT;if(r===ml)return a.UNSIGNED_SHORT;if(r===Gp)return a.INT;if(r===qi)return a.UNSIGNED_INT;if(r===ki)return a.FLOAT;if(r===Ca)return a.HALF_FLOAT;if(r===sy)return a.ALPHA;if(r===oy)return a.RGB;if(r===Di)return a.RGBA;if(r===Da)return a.DEPTH_COMPONENT;if(r===Xr)return a.DEPTH_STENCIL;if(r===ly)return a.RED;if(r===Xp)return a.RED_INTEGER;if(r===Zs)return a.RG;if(r===Wp)return a.RG_INTEGER;if(r===jp)return a.RGBA_INTEGER;if(r===gu||r===_u||r===vu||r===xu)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===Zh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jh||r===$h)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ep)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return c.COMPRESSED_R11_EAC;if(r===np)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ip)return c.COMPRESSED_RG11_EAC;if(r===ap)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===op)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===up)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xp||r===yp||r===Sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===xp)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bp||r===Mp||r===Ep||r===Tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===bp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
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

}`;class y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new yy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Yi({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ua(new Ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends $s{constructor(e,n){super();const r=this;let o=null,c=1,f=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,S=null,b=null;const A=typeof XRWebGLBinding<"u",y=new y2,v={},R=n.getContextAttributes();let U=null,L=null;const P=[],F=[],z=new Xt;let M=null;const N=new mi;N.viewport=new fn;const ue=new mi;ue.viewport=new fn;const V=[N,ue],K=new L1;let ie=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Me=P[Z];return Me===void 0&&(Me=new oh,P[Z]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(Z){let Me=P[Z];return Me===void 0&&(Me=new oh,P[Z]=Me),Me.getGripSpace()},this.getHand=function(Z){let Me=P[Z];return Me===void 0&&(Me=new oh,P[Z]=Me),Me.getHandSpace()};function Q(Z){const Me=F.indexOf(Z.inputSource);if(Me===-1)return;const be=P[Me];be!==void 0&&(be.update(Z.inputSource,Z.frame,d||f),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",B);for(let Z=0;Z<P.length;Z++){const Me=F[Z];Me!==null&&(F[Z]=null,P[Z].disconnect(Me))}ie=null,fe=null,y.reset();for(const Z in v)delete v[Z];e.setRenderTarget(U),S=null,g=null,x=null,o=null,L=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",O),o.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,Je=null;R.depth&&(Je=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=R.stencil?Xr:Da,Be=R.stencil?gl:qi);const et={colorFormat:n.RGBA8,depthFormat:Je,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new ji(g.textureWidth,g.textureHeight,{format:Di,type:_i,depthTexture:new _l(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ji(S.framebufferWidth,S.framebufferHeight,{format:Di,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await o.requestReferenceSpace(p),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(Z){for(let Me=0;Me<Z.removed.length;Me++){const be=Z.removed[Me],Be=F.indexOf(be);Be>=0&&(F[Be]=null,P[Be].disconnect(be))}for(let Me=0;Me<Z.added.length;Me++){const be=Z.added[Me];let Be=F.indexOf(be);if(Be===-1){for(let et=0;et<P.length;et++)if(et>=F.length){F.push(be),Be=et;break}else if(F[et]===null){F[et]=be,Be=et;break}if(Be===-1)break}const Je=P[Be];Je&&Je.connect(be)}}const oe=new re,me=new re;function D(Z,Me,be){oe.setFromMatrixPosition(Me.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const Be=oe.distanceTo(me),Je=Me.projectionMatrix.elements,et=be.projectionMatrix.elements,Wt=Je[14]/(Je[10]-1),ct=Je[14]/(Je[10]+1),_t=(Je[9]+1)/Je[5],Ft=(Je[9]-1)/Je[5],ut=(Je[8]-1)/Je[0],Rt=(et[8]+1)/et[0],k=Wt*ut,Jt=Wt*Rt,Tt=Be/(-ut+Rt),Nt=Tt*-ut;if(Me.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Je[10]===-1)Z.projectionMatrix.copy(Me.projectionMatrix),Z.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ye=Wt+Tt,I=ct+Tt,T=k-Nt,j=Jt+(Be-Nt),ge=_t*ct/I*Ye,ve=Ft*ct/I*Ye;Z.projectionMatrix.makePerspective(T,j,ge,ve,Ye,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,Me){Me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let Me=Z.near,be=Z.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(be=y.depthFar)),K.near=ue.near=N.near=Me,K.far=ue.far=N.far=be,(ie!==K.near||fe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ie=K.near,fe=K.far),K.layers.mask=Z.layers.mask|6,N.layers.mask=K.layers.mask&-5,ue.layers.mask=K.layers.mask&-3;const Be=Z.parent,Je=K.cameras;J(K,Be);for(let et=0;et<Je.length;et++)J(Je[et],Be);Je.length===2?D(K,N,ue):K.projectionMatrix.copy(N.projectionMatrix),de(Z,K,Be)};function de(Z,Me,be){be===null?Z.matrix.copy(Me.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Me.projectionMatrix),Z.projectionMatrixInverse.copy(Me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ap*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(Z){return v[Z]};let ye=null;function De(Z,Me){if(_=Me.getViewerPose(d||f),b=Me,_!==null){const be=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Be=!1;be.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let ct=0;ct<be.length;ct++){const _t=be[ct];let Ft=null;if(S!==null)Ft=S.getViewport(_t);else{const Rt=x.getViewSubImage(g,_t);Ft=Rt.viewport,ct===0&&(e.setRenderTargetTextures(L,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(L))}let ut=V[ct];ut===void 0&&(ut=new mi,ut.layers.enable(ct),ut.viewport=new fn,V[ct]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ct===0&&(K.matrix.copy(ut.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(ut)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const ct=x.getDepthInformation(be[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,o.renderState)}if(Je&&Je.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let ct=0;ct<be.length;ct++){const _t=be[ct].camera;if(_t){let Ft=v[_t];Ft||(Ft=new yy,v[_t]=Ft);const ut=x.getCameraImage(_t);Ft.sourceTexture=ut}}}}for(let be=0;be<P.length;be++){const Be=F[be],Je=P[be];Be!==null&&Je!==void 0&&Je.update(Be,Me,d||f)}ye&&ye(Z,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Oe=new Ey;Oe.setAnimationLoop(De),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}const zr=new Na,b2=new rn;function M2(a,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Sy(a)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,R,U,L){v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),_(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&S(y,v,L)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),A(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&p(y,v)):v.isPointsMaterial?m(y,v,R,U):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const R=e.get(v),U=R.envMap,L=R.envMapRotation;U&&(y.envMap.value=U,zr.copy(L),zr.x*=-1,zr.y*=-1,zr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(b2.makeRotationFromEuler(zr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function p(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,R,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*R,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,R){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const R=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function E2(a,e,n,r){let o={},c={},f=[];const p=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,U){const L=U.program;r.uniformBlockBinding(R,L)}function d(R,U){let L=o[R.id];L===void 0&&(b(R),L=_(R),o[R.id]=L,R.addEventListener("dispose",y));const P=U.program;r.updateUBOMapping(R,P);const F=e.render.frame;c[R.id]!==F&&(g(R),c[R.id]=F)}function _(R){const U=x();R.__bindingPointIndex=U;const L=a.createBuffer(),P=R.__size,F=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,P,F),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,L),L}function x(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const U=o[R.id],L=R.uniforms,P=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let F=0,z=L.length;F<z;F++){const M=Array.isArray(L[F])?L[F]:[L[F]];for(let N=0,ue=M.length;N<ue;N++){const V=M[N];if(S(V,F,N,P)===!0){const K=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let Q=0;Q<ie.length;Q++){const O=ie[Q],B=A(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,K+fe,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,fe),fe+=B.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,K,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(R,U,L,P){const F=R.value,z=U+"_"+L;if(P[z]===void 0)return typeof F=="number"||typeof F=="boolean"?P[z]=F:P[z]=F.clone(),!0;{const M=P[z];if(typeof F=="number"||typeof F=="boolean"){if(M!==F)return P[z]=F,!0}else if(M.equals(F)===!1)return M.copy(F),!0}return!1}function b(R){const U=R.uniforms;let L=0;const P=16;for(let z=0,M=U.length;z<M;z++){const N=Array.isArray(U[z])?U[z]:[U[z]];for(let ue=0,V=N.length;ue<V;ue++){const K=N[ue],ie=Array.isArray(K.value)?K.value:[K.value];for(let fe=0,Q=ie.length;fe<Q;fe++){const O=ie[fe],B=A(O),oe=L%P,me=oe%B.boundary,D=oe+me;L+=me,D!==0&&P-D<B.storage&&(L+=P-D),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=B.storage}}}const F=L%P;return F>0&&(L+=P-F),R.__size=L,R.__cache={},this}function A(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",R),U}function y(R){const U=R.target;U.removeEventListener("dispose",y);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const R in o)a.deleteBuffer(o[R]);f=[],o={},c={}}return{bind:m,update:d,dispose:v}}const T2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function A2(){return Gi===null&&(Gi=new _1(T2,16,16,Zs,Ca),Gi.name="DFG_LUT",Gi.minFilter=On,Gi.magFilter=On,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class R2{constructor(e={}){const{canvas:n=YA(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:S=_i}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const A=S,y=new Set([jp,Wp,Xp]),v=new Set([_i,qi,ml,gl,Vp,kp]),R=new Uint32Array(4),U=new Int32Array(4);let L=null,P=null;const F=[],z=[];let M=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ue=!1;this._outputColorSpace=pi;let V=0,K=0,ie=null,fe=-1,Q=null;const O=new fn,B=new fn;let oe=null;const me=new Mt(0);let D=0,J=n.width,de=n.height,ye=1,De=null,Oe=null;const Z=new fn(0,0,J,de),Me=new fn(0,0,J,de);let be=!1;const Be=new gy;let Je=!1,et=!1;const Wt=new rn,ct=new re,_t=new fn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return ie===null?ye:1}let k=r;function Jt(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hp}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",Ot,!1),k===null){const q="webgl2";if(k=Jt(q,C),k===null)throw Jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Dt("WebGLRenderer: "+C.message),C}let Tt,Nt,Ye,I,T,j,ge,ve,he,Le,Ce,$e,nt,Ee,Ae,ze,Ve,Ie,ft,W,we,Re,Fe;function Te(){Tt=new RC(k),Tt.init(),we=new _2(k,Tt),Nt=new xC(k,Tt,e,we),Ye=new m2(k,Tt),Nt.reversedDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),I=new DC(k),T=new t2,j=new g2(k,Tt,Ye,T,Nt,we,I),ge=new AC(N),ve=new O1(k),Re=new _C(k,ve),he=new wC(k,ve,I,Re),Le=new UC(k,he,ve,Re,I),Ie=new NC(k,Nt,j),Ae=new yC(T),Ce=new e2(N,ge,Tt,Nt,Re,Ae),$e=new M2(N,T),nt=new i2,Ee=new c2(Tt),Ve=new gC(N,ge,Ye,Le,b,m),ze=new p2(N,Le,Nt),Fe=new E2(k,I,Nt,Ye),ft=new vC(k,Tt,I),W=new CC(k,Tt,I),I.programs=Ce.programs,N.capabilities=Nt,N.extensions=Tt,N.properties=T,N.renderLists=nt,N.shadowMap=ze,N.state=Ye,N.info=I}Te(),A!==_i&&(M=new PC(A,n.width,n.height,o,c));const pe=new S2(N,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(C){C!==void 0&&(ye=C,this.setSize(J,de,!1))},this.getSize=function(C){return C.set(J,de)},this.setSize=function(C,q,ce=!0){if(pe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,de=q,n.width=Math.floor(C*ye),n.height=Math.floor(q*ye),ce===!0&&(n.style.width=C+"px",n.style.height=q+"px"),M!==null&&M.setSize(n.width,n.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(J*ye,de*ye).floor()},this.setDrawingBufferSize=function(C,q,ce){J=C,de=q,ye=ce,n.width=Math.floor(C*ce),n.height=Math.floor(q*ce),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,q,ce,ae){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,q,ce,ae),Ye.viewport(O.copy(Z).multiplyScalar(ye).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,q,ce,ae){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,q,ce,ae),Ye.scissor(B.copy(Me).multiplyScalar(ye).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){Ye.setScissorTest(be=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){Oe=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ce=!0){let ae=0;if(C){let ee=!1;if(ie!==null){const Ue=ie.texture.format;ee=y.has(Ue)}if(ee){const Ue=ie.texture.type,He=v.has(Ue),Ne=Ve.getClearColor(),Xe=Ve.getClearAlpha(),Ze=Ne.r,ot=Ne.g,lt=Ne.b;He?(R[0]=Ze,R[1]=ot,R[2]=lt,R[3]=Xe,k.clearBufferuiv(k.COLOR,0,R)):(U[0]=Ze,U[1]=ot,U[2]=lt,U[3]=Xe,k.clearBufferiv(k.COLOR,0,U))}else ae|=k.COLOR_BUFFER_BIT}q&&(ae|=k.DEPTH_BUFFER_BIT),ce&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",Ot,!1),Ve.dispose(),nt.dispose(),Ee.dispose(),T.dispose(),ge.dispose(),Le.dispose(),Re.dispose(),Fe.dispose(),Ce.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Zr),pe.removeEventListener("sessionend",Tl),Qi.stop()};function ke(C){C.preventDefault(),sv("WebGLRenderer: Context Lost."),ue=!0}function at(){sv("WebGLRenderer: Context Restored."),ue=!1;const C=I.autoReset,q=ze.enabled,ce=ze.autoUpdate,ae=ze.needsUpdate,ee=ze.type;Te(),I.autoReset=C,ze.enabled=q,ze.autoUpdate=ce,ze.needsUpdate=ae,ze.type=ee}function Ot(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){const q=C.target;q.removeEventListener("dispose",wt),yi(q)}function yi(C){Sn(C),T.remove(C)}function Sn(C){const q=T.get(C).programs;q!==void 0&&(q.forEach(function(ce){Ce.releaseProgram(ce)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ce,ae,ee,Ue){q===null&&(q=Ft);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Al(C,q,ce,ae,ee);Ye.setMaterial(ae,He);let Xe=ce.index,Ze=1;if(ae.wireframe===!0){if(Xe=he.getWireframeAttribute(ce),Xe===void 0)return;Ze=2}const ot=ce.drawRange,lt=ce.attributes.position;let Ge=ot.start*Ze,Ut=(ot.start+ot.count)*Ze;Ue!==null&&(Ge=Math.max(Ge,Ue.start*Ze),Ut=Math.min(Ut,(Ue.start+Ue.count)*Ze)),Xe!==null?(Ge=Math.max(Ge,0),Ut=Math.min(Ut,Xe.count)):lt!=null&&(Ge=Math.max(Ge,0),Ut=Math.min(Ut,lt.count));const $t=Ut-Ge;if($t<0||$t===1/0)return;Re.setup(ee,ae,Ne,ce,Xe);let jt,Lt=ft;if(Xe!==null&&(jt=ve.get(Xe),Lt=W,Lt.setIndex(jt)),ee.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Rt()),Lt.setMode(k.LINES)):Lt.setMode(k.TRIANGLES);else if(ee.isLine){let on=ae.linewidth;on===void 0&&(on=1),Ye.setLineWidth(on*Rt()),ee.isLineSegments?Lt.setMode(k.LINES):ee.isLineLoop?Lt.setMode(k.LINE_LOOP):Lt.setMode(k.LINE_STRIP)}else ee.isPoints?Lt.setMode(k.POINTS):ee.isSprite&&Lt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)wu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const on=ee._multiDrawStarts,Ke=ee._multiDrawCounts,Yt=ee._multiDrawCount,St=Xe?ve.get(Xe).bytesPerElement:1,Gn=T.get(ae).currentProgram.getUniforms();for(let Vn=0;Vn<Yt;Vn++)Gn.setValue(k,"_gl_DrawID",Vn),Lt.render(on[Vn]/St,Ke[Vn])}else if(ee.isInstancedMesh)Lt.renderInstances(Ge,$t,ee.count);else if(ce.isInstancedBufferGeometry){const on=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ke=Math.min(ce.instanceCount,on);Lt.renderInstances(Ge,$t,Ke)}else Lt.render(Ge,$t)};function mn(C,q,ce){C.transparent===!0&&C.side===Ma&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Ui(C,q,ce),C.side=mr,C.needsUpdate=!0,Ui(C,q,ce),C.side=Ma):Ui(C,q,ce)}this.compile=function(C,q,ce=null){ce===null&&(ce=C),P=Ee.get(ce),P.init(q),z.push(P),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),C!==ce&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const ae=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Ne=Ue[He];mn(Ne,ce,ee),ae.add(Ne)}else mn(Ue,ce,ee),ae.add(Ue)}),P=z.pop(),ae},this.compileAsync=function(C,q,ce=null){const ae=this.compile(C,q,ce);return new Promise(ee=>{function Ue(){if(ae.forEach(function(He){T.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){ee(C);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let bn=null;function Pa(C){bn&&bn(C)}function Zr(){Qi.stop()}function Tl(){Qi.start()}const Qi=new Ey;Qi.setAnimationLoop(Pa),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){bn=C,pe.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},pe.addEventListener("sessionstart",Zr),pe.addEventListener("sessionend",Tl),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const ce=pe.enabled===!0&&pe.isPresenting===!0,ae=M!==null&&(ie===null||ce)&&M.begin(N,ie);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,q,ie),P=Ee.get(C,z.length),P.init(q),z.push(P),Wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Be.setFromProjectionMatrix(Wt,Xi,q.reversedDepth),et=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,et),L=nt.get(C,F.length),L.init(),F.push(L),pe.enabled===!0&&pe.isPresenting===!0){const He=N.xr.getDepthSensingMesh();He!==null&&Kr(He,q,-1/0,N.sortObjects)}Kr(C,q,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(De,Oe),ut=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ut&&Ve.addToRenderList(L,C),this.info.render.frame++,Je===!0&&Ae.beginShadows();const ee=P.state.shadowsArray;if(ze.render(ee,C,q),Je===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&M.hasRenderPass())===!1){const He=L.opaque,Ne=L.transmissive;if(P.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ne.length>0)for(let Ze=0,ot=Xe.length;Ze<ot;Ze++){const lt=Xe[Ze];Qr(He,Ne,C,lt)}ut&&Ve.render(C);for(let Ze=0,ot=Xe.length;Ze<ot;Ze++){const lt=Xe[Ze];Oa(L,C,lt,lt.viewport)}}else Ne.length>0&&Qr(He,Ne,C,q),ut&&Ve.render(C),Oa(L,C,q)}ie!==null&&K===0&&(j.updateMultisampleRenderTarget(ie),j.updateRenderTargetMipmap(ie)),ae&&M.end(N),C.isScene===!0&&C.onAfterRender(N,C,q),Re.resetDefaultState(),fe=-1,Q=null,z.pop(),z.length>0?(P=z[z.length-1],Je===!0&&Ae.setGlobalState(N.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function Kr(C,q,ce,ae){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){ae&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Wt);const He=Le.update(C),Ne=C.material;Ne.visible&&L.push(C,He,Ne,ce,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){const He=Le.update(C),Ne=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),_t.copy(He.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ne)){const Xe=He.groups;for(let Ze=0,ot=Xe.length;Ze<ot;Ze++){const lt=Xe[Ze],Ge=Ne[lt.materialIndex];Ge&&Ge.visible&&L.push(C,He,Ge,ce,_t.z,lt)}}else Ne.visible&&L.push(C,He,Ne,ce,_t.z,null)}}const Ue=C.children;for(let He=0,Ne=Ue.length;He<Ne;He++)Kr(Ue[He],q,ce,ae)}function Oa(C,q,ce,ae){const{opaque:ee,transmissive:Ue,transparent:He}=C;P.setupLightsView(ce),Je===!0&&Ae.setGlobalState(N.clippingPlanes,ce),ae&&Ye.viewport(O.copy(ae)),ee.length>0&&Si(ee,q,ce),Ue.length>0&&Si(Ue,q,ce),He.length>0&&Si(He,q,ce),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Qr(C,q,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const Ge=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:Ge?Ca:_i,minFilter:kr,samples:Math.max(4,Nt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[ae.id],He=ae.viewport||O;Ue.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);const Ne=N.getRenderTarget(),Xe=N.getActiveCubeFace(),Ze=N.getActiveMipmapLevel();N.setRenderTarget(Ue),N.getClearColor(me),D=N.getClearAlpha(),D<1&&N.setClearColor(16777215,.5),N.clear(),ut&&Ve.render(ce);const ot=N.toneMapping;N.toneMapping=Wi;const lt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),Je===!0&&Ae.setGlobalState(N.clippingPlanes,ae),Si(C,ce,ae),j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ut=0,$t=q.length;Ut<$t;Ut++){const jt=q[Ut],{object:Lt,geometry:on,material:Ke,group:Yt}=jt;if(Ke.side===Ma&&Lt.layers.test(ae.layers)){const St=Ke.side;Ke.side=Zn,Ke.needsUpdate=!0,Ji(Lt,ce,ae,on,Ke,Yt),Ke.side=St,Ke.needsUpdate=!0,Ge=!0}}Ge===!0&&(j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue))}N.setRenderTarget(Ne,Xe,Ze),N.setClearColor(me,D),lt!==void 0&&(ae.viewport=lt),N.toneMapping=ot}function Si(C,q,ce){const ae=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Ue=C.length;ee<Ue;ee++){const He=C[ee],{object:Ne,geometry:Xe,group:Ze}=He;let ot=He.material;ot.allowOverride===!0&&ae!==null&&(ot=ae),Ne.layers.test(ce.layers)&&Ji(Ne,q,ce,Xe,ot,Ze)}}function Ji(C,q,ce,ae,ee,Ue){C.onBeforeRender(N,q,ce,ae,ee,Ue),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(N,q,ce,ae,C,Ue),ee.transparent===!0&&ee.side===Ma&&ee.forceSinglePass===!1?(ee.side=Zn,ee.needsUpdate=!0,N.renderBufferDirect(ce,q,ae,ee,C,Ue),ee.side=mr,ee.needsUpdate=!0,N.renderBufferDirect(ce,q,ae,ee,C,Ue),ee.side=Ma):N.renderBufferDirect(ce,q,ae,ee,C,Ue),C.onAfterRender(N,q,ce,ae,ee,Ue)}function Ui(C,q,ce){q.isScene!==!0&&(q=Ft);const ae=T.get(C),ee=P.state.lights,Ue=P.state.shadowsArray,He=ee.state.version,Ne=Ce.getParameters(C,ee.state,Ue,q,ce),Xe=Ce.getProgramCacheKey(Ne);let Ze=ae.programs;ae.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const ot=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ae.envMap=ge.get(C.envMap||ae.environment,ot),ae.envMapRotation=ae.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",wt),Ze=new Map,ae.programs=Ze);let lt=Ze.get(Xe);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===He)return sn(C,Ne),lt}else Ne.uniforms=Ce.getUniforms(C),C.onBeforeCompile(Ne,N),lt=Ce.acquireProgram(Ne,Xe),Ze.set(Xe,lt),ae.uniforms=Ne.uniforms;const Ge=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Ae.uniform),sn(C,Ne),ae.needsLights=ea(C),ae.lightsStateVersion=He,ae.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function $i(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=yu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function sn(C,q){const ce=T.get(C);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Al(C,q,ce,ae,ee){q.isScene!==!0&&(q=Ft),j.resetTextureUnits();const Ue=q.fog,He=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,Ne=ie===null?N.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ks,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ze=ge.get(ae.envMap||He,Xe),ot=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ge=!!ce.morphAttributes.position,Ut=!!ce.morphAttributes.normal,$t=!!ce.morphAttributes.color;let jt=Wi;ae.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(jt=N.toneMapping);const Lt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,on=Lt!==void 0?Lt.length:0,Ke=T.get(ae),Yt=P.state.lights;if(Je===!0&&(et===!0||C!==Q)){const ln=C===Q&&ae.id===fe;Ae.setState(ae,C,ln)}let St=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Yt.state.version||Ke.outputColorSpace!==Ne||ee.isBatchedMesh&&Ke.batching===!1||!ee.isBatchedMesh&&Ke.batching===!0||ee.isBatchedMesh&&Ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ke.instancing===!1||!ee.isInstancedMesh&&Ke.instancing===!0||ee.isSkinnedMesh&&Ke.skinning===!1||!ee.isSkinnedMesh&&Ke.skinning===!0||ee.isInstancedMesh&&Ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ke.instancingMorph===!1&&ee.morphTexture!==null||Ke.envMap!==Ze||ae.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==ot||Ke.vertexTangents!==lt||Ke.morphTargets!==Ge||Ke.morphNormals!==Ut||Ke.morphColors!==$t||Ke.toneMapping!==jt||Ke.morphTargetsCount!==on)&&(St=!0):(St=!0,Ke.__version=ae.version);let Gn=Ke.currentProgram;St===!0&&(Gn=Ui(ae,q,ee));let Vn=!1,kn=!1,ta=!1;const It=Gn.getUniforms(),Kt=Ke.uniforms;if(Ye.useProgram(Gn.program)&&(Vn=!0,kn=!0,ta=!0),ae.id!==fe&&(fe=ae.id,kn=!0),Vn||Q!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",C.projectionMatrix),It.setValue(k,"viewMatrix",C.matrixWorldInverse);const bi=It.map.cameraPosition;bi!==void 0&&bi.setValue(k,ct.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,kn=!0,ta=!0)}if(Ke.needsLights&&(Yt.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",Yt.state.directionalShadowMap,j),Yt.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",Yt.state.spotShadowMap,j),Yt.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",Yt.state.pointShadowMap,j)),ee.isSkinnedMesh){It.setOptional(k,ee,"bindMatrix"),It.setOptional(k,ee,"bindMatrixInverse");const ln=ee.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),It.setValue(k,"boneTexture",ln.boneTexture,j))}ee.isBatchedMesh&&(It.setOptional(k,ee,"batchingTexture"),It.setValue(k,"batchingTexture",ee._matricesTexture,j),It.setOptional(k,ee,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",ee._indirectTexture,j),It.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",ee._colorsTexture,j));const Li=ce.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Ie.update(ee,ce,Gn),(kn||Ke.receiveShadow!==ee.receiveShadow)&&(Ke.receiveShadow=ee.receiveShadow,It.setValue(k,"receiveShadow",ee.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=A2()),kn&&(It.setValue(k,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&Rl(Kt,ta),Ue&&ae.fog===!0&&$e.refreshFogUniforms(Kt,Ue),$e.refreshMaterialUniforms(Kt,ae,ye,de,P.state.transmissionRenderTarget[C.id]),yu.upload(k,$i(Ke),Kt,j)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(yu.upload(k,$i(Ke),Kt,j),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(k,"center",ee.center),It.setValue(k,"modelViewMatrix",ee.modelViewMatrix),It.setValue(k,"normalMatrix",ee.normalMatrix),It.setValue(k,"modelMatrix",ee.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const ln=ae.uniformsGroups;for(let bi=0,Pi=ln.length;bi<Pi;bi++){const Cl=ln[bi];Fe.update(Cl,Gn),Fe.bind(Cl,Gn)}}return Gn}function Rl(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ea(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(C,q,ce){const ae=T.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=q,T.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ce=T.get(C);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const Ia=k.createFramebuffer();this.setRenderTarget=function(C,q=0,ce=0){ie=C,V=q,K=ce;let ae=null,ee=!1,Ue=!1;if(C){const Ne=T.get(C);if(Ne.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(k.FRAMEBUFFER,Ne.__webglFramebuffer),O.copy(C.viewport),B.copy(C.scissor),oe=C.scissorTest,Ye.viewport(O),Ye.scissor(B),Ye.setScissorTest(oe),fe=-1;return}else if(Ne.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Ne.__hasExternalTextures)j.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ot=C.depthTexture;if(Ne.__boundDepthTexture!==ot){if(ot!==null&&T.has(ot)&&(C.width!==ot.image.width||C.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const Ze=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?ae=Ze[q][ce]:ae=Ze[q],ee=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?ae=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?ae=Ze[ce]:ae=Ze,O.copy(C.viewport),B.copy(C.scissor),oe=C.scissorTest}else O.copy(Z).multiplyScalar(ye).floor(),B.copy(Me).multiplyScalar(ye).floor(),oe=be;if(ce!==0&&(ae=Ia),Ye.bindFramebuffer(k.FRAMEBUFFER,ae)&&Ye.drawBuffers(C,ae),Ye.viewport(O),Ye.scissor(B),Ye.setScissorTest(oe),ee){const Ne=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,ce)}else if(Ue){const Ne=q;for(let Xe=0;Xe<C.textures.length;Xe++){const Ze=T.get(C.textures[Xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,ce,Ne)}}else if(C!==null&&ce!==0){const Ne=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,ce)}fe=-1},this.readRenderTargetPixels=function(C,q,ce,ae,ee,Ue,He,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){Ye.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const Ze=C.textures[Ne],ot=Ze.format,lt=Ze.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!Nt.textureFormatReadable(ot)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(lt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ae&&ce>=0&&ce<=C.height-ee&&k.readPixels(q,ce,ae,ee,we.convert(ot),we.convert(lt),Ue)}finally{const Ze=ie!==null?T.get(ie).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,q,ce,ae,ee,Ue,He,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe)if(q>=0&&q<=C.width-ae&&ce>=0&&ce<=C.height-ee){Ye.bindFramebuffer(k.FRAMEBUFFER,Xe);const Ze=C.textures[Ne],ot=Ze.format,lt=Ze.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!Nt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),k.readPixels(q,ce,ae,ee,we.convert(ot),we.convert(lt),0);const Ut=ie!==null?T.get(ie).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Ut);const $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ZA(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer(Ge),k.deleteSync($t),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ce=0){const ae=Math.pow(2,-ce),ee=Math.floor(C.image.width*ae),Ue=Math.floor(C.image.height*ae),He=q!==null?q.x:0,Ne=q!==null?q.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,He,Ne,ee,Ue),Ye.unbindTexture()};const Bu=k.createFramebuffer(),wl=k.createFramebuffer();this.copyTextureToTexture=function(C,q,ce=null,ae=null,ee=0,Ue=0){let He,Ne,Xe,Ze,ot,lt,Ge,Ut,$t;const jt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(ce!==null)He=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,ot=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const Kt=Math.pow(2,-ee);He=Math.floor(jt.width*Kt),Ne=Math.floor(jt.height*Kt),C.isDataArrayTexture?Xe=jt.depth:C.isData3DTexture?Xe=Math.floor(jt.depth*Kt):Xe=1,Ze=0,ot=0,lt=0}ae!==null?(Ge=ae.x,Ut=ae.y,$t=ae.z):(Ge=0,Ut=0,$t=0);const Lt=we.convert(q.format),on=we.convert(q.type);let Ke;q.isData3DTexture?(j.setTexture3D(q,0),Ke=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Ke=k.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Ke=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const Yt=k.getParameter(k.UNPACK_ROW_LENGTH),St=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Gn=k.getParameter(k.UNPACK_SKIP_PIXELS),Vn=k.getParameter(k.UNPACK_SKIP_ROWS),kn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);const ta=C.isDataArrayTexture||C.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Kt=T.get(C),Li=T.get(q),ln=T.get(Kt.__renderTarget),bi=T.get(Li.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Pi=0;Pi<Xe;Pi++)ta&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(C).__webglTexture,ee,lt+Pi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Ue,$t+Pi)),k.blitFramebuffer(Ze,ot,He,Ne,Ge,Ut,He,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||T.has(C)){const Kt=T.get(C),Li=T.get(q);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Bu),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,wl);for(let ln=0;ln<Xe;ln++)ta?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.__webglTexture,ee,lt+ln):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kt.__webglTexture,ee),It?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Li.__webglTexture,Ue,$t+ln):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Li.__webglTexture,Ue),ee!==0?k.blitFramebuffer(Ze,ot,He,Ne,Ge,Ut,He,Ne,k.COLOR_BUFFER_BIT,k.NEAREST):It?k.copyTexSubImage3D(Ke,Ue,Ge,Ut,$t+ln,Ze,ot,He,Ne):k.copyTexSubImage2D(Ke,Ue,Ge,Ut,Ze,ot,He,Ne);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ke,Ue,Ge,Ut,$t,He,Ne,Xe,Lt,on,jt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Ke,Ue,Ge,Ut,$t,He,Ne,Xe,Lt,jt.data):k.texSubImage3D(Ke,Ue,Ge,Ut,$t,He,Ne,Xe,Lt,on,jt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,Ge,Ut,He,Ne,Lt,on,jt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,Ge,Ut,jt.width,jt.height,Lt,jt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,Ge,Ut,He,Ne,Lt,on,jt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Vn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,kn),Ue===0&&q.generateMipmaps&&k.generateMipmap(Ke),Ye.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){V=0,K=0,ie=null,Ye.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const w2=160,C2=70,$v=1.6,D2=()=>{const a=$.useRef(null);return $.useEffect(()=>{const e=a.current;if(!e)return;const n=window.innerWidth<768,r=n?C2:w2,o=new f1,c=new mi(60,e.clientWidth/e.clientHeight,.1,100);c.position.z=5;const f=new R2({antialias:!0,alpha:!0});f.setSize(e.clientWidth,e.clientHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(f.domElement);const p=[new Mt("#b8456e"),new Mt("#9d7fb8"),new Mt("#e8a090"),new Mt("#d4a0b8"),new Mt("#ffffff")],m=[],d=new Float32Array(r*3),_=new Float32Array(r*3);for(let F=0;F<r;F++){const z=(Math.random()-.5)*9,M=(Math.random()-.5)*6,N=(Math.random()-.5)*4;m.push({x:z,y:M,z:N,bx:z,by:M,bz:N,vx:(Math.random()-.5)*.004,vy:(Math.random()-.5)*.004,vz:(Math.random()-.5)*.002});const ue=p[Math.floor(Math.random()*p.length)];_[F*3]=ue.r,_[F*3+1]=ue.g,_[F*3+2]=ue.b,d[F*3]=z,d[F*3+1]=M,d[F*3+2]=N}const x=new ri;x.setAttribute("position",new vi(d,3)),x.setAttribute("color",new vi(_,3));const g=new vy({size:n?.045:.035,vertexColors:!0,transparent:!0,opacity:.85,blending:Eu,depthWrite:!1});o.add(new M1(x,g));const S=new ri,b=new _y({transparent:!0,opacity:.12,color:12076398,blending:Eu,depthWrite:!1}),A=new b1(S,b);o.add(A);const y={x:0,y:0},v=F=>{const z=e.getBoundingClientRect();y.x=((F.clientX-z.left)/z.width-.5)*2,y.y=-((F.clientY-z.top)/z.height-.5)*2};e.addEventListener("mousemove",v);const R=()=>{const F=e.clientWidth,z=e.clientHeight;c.aspect=F/z,c.updateProjectionMatrix(),f.setSize(F,z)};window.addEventListener("resize",R);let U=!0,L=0;const P=()=>{if(!U)return;requestAnimationFrame(P),L++;const F=x.getAttribute("position");for(let z=0;z<r;z++){const M=m[z];M.x+=M.vx,M.y+=M.vy,M.z+=M.vz,M.vx+=(M.bx-M.x)*8e-4,M.vy+=(M.by-M.y)*8e-4,M.vz+=(M.bz-M.z)*4e-4,M.x+=y.x*.003,M.y+=y.y*.003,M.vx*=.992,M.vy*=.992,M.vz*=.992,F.array[z*3]=M.x,F.array[z*3+1]=M.y,F.array[z*3+2]=M.z}if(F.needsUpdate=!0,L%3===0){const z=[];for(let M=0;M<r;M++)for(let N=M+1;N<r;N++){const ue=m[M].x-m[N].x,V=m[M].y-m[N].y,K=m[M].z-m[N].z;ue*ue+V*V+K*K<$v*$v&&z.push(m[M].x,m[M].y,m[M].z,m[N].x,m[N].y,m[N].z)}S.setAttribute("position",new xi(z,3))}o.rotation.y=Math.sin(Date.now()*8e-5)*.12,o.rotation.x=Math.cos(Date.now()*6e-5)*.05,f.render(o,c)};return requestAnimationFrame(P),()=>{U=!1,e.removeEventListener("mousemove",v),window.removeEventListener("resize",R),f.dispose(),x.dispose(),g.dispose(),S.dispose(),b.dispose(),e.contains(f.domElement)&&e.removeChild(f.domElement)}},[]),G.jsx("div",{ref:a,className:"hero-canvas"})},N2=({words:a,typeSpeed:e=80,deleteSpeed:n=40,pause:r=2200,className:o})=>{const[c,f]=$.useState(""),[p,m]=$.useState(0),[d,_]=$.useState(!1);return $.useEffect(()=>{const x=a[p],g=setTimeout(()=>{d?(f(x.slice(0,c.length-1)),c.length-1===0&&(_(!1),m(S=>(S+1)%a.length))):(f(x.slice(0,c.length+1)),c.length+1===x.length&&setTimeout(()=>_(!0),r))},d?n:e);return()=>clearTimeout(g)},[c,d,p,a,e,n,r]),G.jsxs("span",{className:o,children:[c,G.jsx("span",{className:"typing-cursor","aria-hidden":"true"})]})},U2=["Software Architect","AI Engineer","Full Stack Developer","Mobile App Developer"],L2=({scrollTo:a})=>G.jsxs("section",{className:"section section--home hero hero--3d",id:"home","aria-labelledby":"hero-heading",children:[G.jsx(D2,{}),G.jsxs("div",{className:"container hero__centered",children:[G.jsx("img",{src:hA,alt:"Taliba Sadiq",className:"hero__avatar",draggable:!1,width:150,height:150,decoding:"async"}),G.jsx("p",{className:"hero__eyebrow hero__eyebrow--glow",children:"Available for projects"}),G.jsx("h1",{id:"hero-heading",className:"hero__title hero__title--3d",children:"Taliba Sadiq"}),G.jsx("p",{className:"hero__typing-wrap",children:G.jsx(N2,{words:U2,className:"hero__typing"})}),G.jsx("p",{className:"hero__intro hero__intro--3d",children:"I build software that holds up under real use: scalable systems, intelligent features, and code that keeps working as your product grows. Not just launch-day demos, but lasting solutions."}),G.jsxs("div",{className:"hero__actions hero__actions--center",children:[G.jsx(Xs,{type:"button",variant:"ghost",className:Bn("btn btn--primary btn--glow"),onClick:()=>a("work","/projects"),children:"See my work"}),G.jsx(Xs,{type:"button",variant:"ghost",className:Bn("btn btn--ghost btn--ghost-dark"),onClick:()=>a("contact","/contact"),children:"Let's talk"})]})]})]}),P2=[{title:"A product outgrowing its structure",body:"The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds."},{title:"A codebase that's becoming fragile",body:"People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick."},{title:"A prototype that needs to grow up",body:"The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features."},{title:"AI that needs to actually work",body:"Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable."}],O2=()=>G.jsx("section",{className:"section section--philosophy reveal",id:"philosophy","aria-labelledby":"philosophy-heading",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"philosophy__head",children:[G.jsx("span",{className:"section__label",children:"When I get involved"}),G.jsx("h2",{id:"philosophy-heading",className:"philosophy__title",children:"I focus on what happens after launch"}),G.jsx("p",{className:"philosophy__lead",children:"First demos are easy. I focus on the hard part: more features, team changes, and someone new opening the repo. Good structure is what keeps you from rewriting everything twice."})]}),G.jsx("div",{className:"pillars__grid",children:P2.map((a,e)=>G.jsxs("div",{className:"pillar-card reveal reveal--delay-1",children:[G.jsx("p",{className:"pillar-card__num",children:String(e+1).padStart(2,"0")}),G.jsx("h3",{className:"pillar-card__title",children:a.title}),G.jsx("p",{children:a.body})]},a.title))}),G.jsxs("div",{className:"philosophy__closing reveal",children:[G.jsxs("p",{className:"philosophy__closing-text",children:["What I bring is ",G.jsx("strong",{children:"clarity"}),". Clear structure, clear decisions, and systems that are easier to build on as they grow."]}),G.jsxs("div",{className:"philosophy__traits",children:[G.jsx("span",{className:"philosophy__trait",children:"Clear Communicator"}),G.jsx("span",{className:"philosophy__trait",children:"Detail Oriented"}),G.jsx("span",{className:"philosophy__trait",children:"Solution Oriented"})]})]})]})}),I2=[{quote:"She's great and really helpful.",name:"Steve C.",role:"Founder, Zenius"},{quote:"Taliba walked our Next mess into something we could actually ship. No drama, just steady decisions and code I wasn’t afraid to touch later.",name:"A. M.",role:"CTO, B2B SaaS"},{quote:"Our app felt slow and flaky; Taliba didn’t slap a bandage on it. Clear explanation of what was wrong, then fixes for the real causes.",name:"R. K.",role:"Founder, edtech"}],F2=({scrollTo:a})=>G.jsx("section",{className:"section section--reviews section--testimonials reveal",id:"reviews","aria-labelledby":"reviews-heading",children:G.jsxs("div",{className:"container",children:[G.jsxs("div",{className:"testimonials__head",children:[G.jsx("h2",{id:"reviews-heading",className:"testimonials__title",children:"Kind words from collaborators"}),G.jsx("p",{className:"testimonials__lead",children:"What founders and teams say about working together."})]}),G.jsx("ul",{className:"testimonials__list",role:"list",children:I2.map(e=>G.jsxs("li",{className:"testimonial-item",children:[G.jsx("blockquote",{className:"testimonial-item__quote",children:G.jsx("p",{children:e.quote})}),G.jsxs("footer",{className:"testimonial-item__cite",children:[G.jsx("span",{className:"testimonial-item__name",children:e.name}),G.jsx("span",{className:"testimonial-item__role",children:e.role})]})]},`${e.name}-${e.role}`))}),G.jsx("div",{className:"testimonials__cta",children:G.jsx(Xs,{type:"button",variant:"ghost",className:Bn("btn btn--primary"),onClick:()=>a("contact","/contact"),children:"Start a conversation"})})]})}),B2=[{title:"Architecture & Scalable Systems",desc:"Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",tags:["System Design","Scalability","Refactoring","API Design","Microservices"]},{title:"Full-Stack Web & Mobile",desc:"End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",tags:["React","Next.js","Node.js","React Native","TypeScript","PostgreSQL"]},{title:"AI Integration & Automation",desc:"GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",tags:["OpenAI API","Claude","Prompt Engineering","AI Agents","Automation"]}],z2=()=>G.jsx("section",{className:"section section--services reveal",id:"services","aria-labelledby":"services-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"What I do"}),G.jsx("h2",{id:"services-heading",className:"section__heading",children:"Three things I do really well"}),G.jsx("p",{className:"section__lead",children:"Architecture, full-stack development, and AI integration. I bring clarity to complex problems and build systems that are easier to grow."}),G.jsx("div",{className:"services__grid",children:B2.map(a=>G.jsxs("div",{className:"service-card reveal reveal--delay-1",children:[G.jsx("h3",{className:"service-card__title",children:a.title}),G.jsx("p",{className:"service-card__desc",children:a.desc}),G.jsx("div",{className:"service-card__tags",children:a.tags.map(e=>G.jsx("span",{className:"service-card__tag",children:e},e))})]},a.title))})]})}),ks={ai:["OpenAI / GPT API","Claude / Anthropic","Gemini","Generative AI","Prompt Engineering","AI Agents","Chatbot Development","AI Model Integration","Machine Learning","Automation Workflows"],frontend:["React","Next.js","Angular","Vue.js","Nuxt.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","SASS / SCSS","CSS Grid","Responsive Design","Figma","Webflow","Elementor"],backend:["Node.js","Express","REST APIs","GraphQL","FastAPI","Laravel","PHP","Python","API Integration","Payment Gateway (Stripe)","Twilio API","Authentication & Authorization","WebSockets"],mobile:["React Native","Hybrid Apps","iOS","Android","Offline Functionality","In-App Purchases","Mobile UI/UX"],cloud:["AWS","Google Cloud","Microsoft Azure","Docker","Vercel","Netlify","Firebase","Supabase","CI/CD","GitHub Actions","Website Security"],databases:["PostgreSQL","MongoDB","MySQL","Microsoft SQL Server","Firebase Realtime DB","Prisma","Mongoose","Database Modeling"]},H2=()=>G.jsx("section",{className:"section section--skills skills-showcase reveal",id:"skills","aria-labelledby":"skills-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"Toolkit"}),G.jsx("h2",{id:"skills-heading",className:"skills-showcase__title",children:"Technologies I work with"}),G.jsx("p",{className:"skills-showcase__lead",children:"AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven't listed it yet. Ask me."}),G.jsxs("div",{className:"skills-showcase__grid",children:[G.jsxs("div",{className:"skill-category skill-category--highlight",children:[G.jsx("h3",{className:"skill-category__title",children:"AI & Intelligence"}),G.jsx("div",{className:"skill-category__tags",children:ks.ai.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Frontend"}),G.jsx("div",{className:"skill-category__tags",children:ks.frontend.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Backend & APIs"}),G.jsx("div",{className:"skill-category__tags",children:ks.backend.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Mobile"}),G.jsx("div",{className:"skill-category__tags",children:ks.mobile.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Cloud & DevOps"}),G.jsx("div",{className:"skill-category__tags",children:ks.cloud.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]}),G.jsxs("div",{className:"skill-category",children:[G.jsx("h3",{className:"skill-category__title",children:"Databases"}),G.jsx("div",{className:"skill-category__tags",children:ks.databases.map(a=>G.jsx("span",{className:"skill-tag",children:a},a))})]})]})]})}),G2="/assets/expense-tracker-mvEoxdIL.png",V2="/assets/girly-blog-BlvHH-Oe.png",k2="/assets/news-explorer-DyPTQ1wK.png",X2="/assets/portfolio-84NHyYwe.png",W2="/assets/time-keeper-C6TL0-3m.png",j2="/assets/tmi-worldwide-BRvVfm9i.png",q2="/assets/zenius-CLULWNXe.png",Y2=[{title:"Zenius",types:["AI & product","Full-stack web"],description:"Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",link:"https://zenius.ia.br",screenshot:q2,tech:["React","TypeScript","AI / LLM integration","Node.js","REST & real-time APIs","Voice / video","Security & privacy","Responsive UI","Performance","Accessibility"]},{title:"News Explorer",types:["Full-stack web","APIs & auth"],description:"Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",link:"https://jazzmine-flora.github.io/news-explorer/",screenshot:k2,tech:["React","Node.js","Express","MongoDB","REST","Auth","News API"]},{title:"TMI Worldwide",types:["Design refresh","Marketing site"],description:"Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",link:"https://tmi-world-welcome.lovable.app/",screenshot:j2,tech:["React","Vite","SPA","Responsive UI","Marketing / brand"]},{title:"Time Keeper",types:["Web app","Product UX"],description:"Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",link:"https://time-keeper-crafted.lovable.app/",screenshot:W2,tech:["React","Vite","SPA","Responsive UI","Product UI"]},{title:"My Portfolio",types:["Portfolio site","Design & deploy"],description:"Personal portfolio on a single page: intro, services, selected work, toolkit, client feedback, and a contact form.",link:"https://jazzmine-flora.github.io",screenshot:X2,tech:["React","TypeScript","Vite","Tailwind CSS","shadcn/ui","React Router","Three.js","GitHub Actions"]},{title:"Expense Tracker",types:["Web app","Dashboards & data"],description:"Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",link:"https://jazzmine-flora.github.io/expense-tracker/",screenshot:G2,tech:["React","TypeScript","Node.js","Express","MongoDB","Charts"]},{title:"Girls Blog",types:["Full-stack web","Blog & CMS"],description:"Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",link:"https://girly-blogspot.vercel.app/",screenshot:V2,tech:["React","Node.js","Express","MongoDB","Auth"]}],Z2=()=>G.jsx("section",{className:"section section--work projects-page projects-page--premium reveal",id:"work","aria-labelledby":"work-heading",children:G.jsxs("div",{className:"container",children:[G.jsx("span",{className:"section__label",children:"Portfolio"}),G.jsx("h2",{id:"work-heading",className:"projects__title",children:"Selected work"}),G.jsx("p",{className:"projects__lead",children:"Full-stack products, AI features, and scalable systems."}),G.jsx("div",{className:"projects__grid",children:Y2.map(a=>G.jsxs("article",{className:"project-card",children:[a.screenshot?G.jsx("div",{className:"project-card__thumb-wrap",children:G.jsx("img",{src:a.screenshot,alt:`${a.title} site preview`,className:"project-card__thumb",loading:"lazy",decoding:"async"})}):G.jsx("div",{className:"project-card__thumb-wrap project-card__thumb-wrap--placeholder","aria-hidden":!0,children:G.jsx("span",{className:"project-card__thumb-placeholder",children:"Preview unavailable"})}),G.jsxs("div",{className:"project-card__body",children:[G.jsx("ul",{className:"project-card__type-list",role:"list","aria-label":"Project types",children:a.types.map((e,n)=>G.jsx("li",{className:`project-card__type-chip${n===0?" project-card__type-chip--primary":""}`,children:e},`${a.title}-type-${n}`))}),G.jsxs("div",{className:"project-card__about",children:[G.jsx("h3",{className:"project-card__title",children:a.title}),G.jsx("p",{className:"project-card__desc",children:a.description})]}),G.jsx("div",{className:"project-card__tech",children:a.tech.map(e=>G.jsx("span",{className:"skill-tag",children:e},e))})]}),G.jsxs("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"project-card__link",children:["View project ",G.jsx("span",{className:"project-card__arrow","aria-hidden":!0,children:"→"})]})]},a.title))})]})}),K2=()=>{const{scrollTo:a}=dA();return G.jsxs("div",{className:"homepage homepage--studio page-content",children:[G.jsx(L2,{scrollTo:a}),G.jsx(z2,{}),G.jsx(O2,{}),G.jsx(Z2,{}),G.jsx(H2,{}),G.jsx(F2,{scrollTo:a}),G.jsx(cA,{})]})},Q2=({className:a,title:e})=>G.jsxs("svg",{className:a,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?G.jsx("title",{children:e}):null,G.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z"})]}),J2=({className:a,title:e})=>G.jsxs("svg",{className:a,viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",role:e?"img":"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",children:[e?G.jsx("title",{children:e}):null,G.jsx("path",{d:"M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"})]}),$2=()=>G.jsx("footer",{className:"footer",children:G.jsxs("div",{className:"footer__inner container",children:[G.jsxs("div",{className:"footer__social","aria-label":"Social links",children:[G.jsxs("a",{href:"https://www.linkedin.com/in/taliba-sadiq",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"LinkedIn",children:[G.jsx(J2,{className:"footer__icon",title:"LinkedIn"}),G.jsx("span",{children:"LinkedIn"})]}),G.jsxs("a",{href:"https://github.com/Jazzmine-Flora",target:"_blank",rel:"noopener noreferrer",className:"footer__link","aria-label":"GitHub",children:[G.jsx(Q2,{className:"footer__icon",title:"GitHub"}),G.jsx("span",{children:"GitHub"})]})]}),G.jsxs("p",{className:"footer__copy",children:["Copyright © ",new Date().getFullYear()," Taliba Sadiq. All rights reserved."]})]})});function eD(){$.useEffect(()=>{const a=f=>{f.preventDefault()},e=f=>{f.preventDefault()},n=f=>{f.preventDefault()},r=f=>{const p=f.target;((p==null?void 0:p.tagName)==="IMG"||p!=null&&p.closest("img"))&&f.preventDefault()},o=f=>{f.preventDefault()},c=f=>{const p=f.ctrlKey||f.metaKey;p&&(f.key==="s"||f.key==="S")&&f.preventDefault(),p&&(f.key==="c"||f.key==="C")&&f.preventDefault(),p&&(f.key==="x"||f.key==="X")&&f.preventDefault(),p&&(f.key==="a"||f.key==="A")&&f.preventDefault(),p&&(f.key==="u"||f.key==="U")&&f.preventDefault()};return document.addEventListener("contextmenu",a),document.addEventListener("copy",e,!0),document.addEventListener("cut",n,!0),document.addEventListener("dragstart",r,!0),document.addEventListener("selectstart",o,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("contextmenu",a),document.removeEventListener("copy",e,!0),document.removeEventListener("cut",n,!0),document.removeEventListener("dragstart",r,!0),document.removeEventListener("selectstart",o,!0),document.removeEventListener("keydown",c)}},[])}const tD=()=>(eD(),G.jsxs(G.Fragment,{children:[G.jsx(hE,{}),G.jsx(vE,{}),G.jsx("main",{children:G.jsx(UM,{children:G.jsx(mx,{path:"*",element:G.jsx(K2,{})})})}),G.jsx($2,{})]})),nD=document.getElementById("root"),iD=Gb.createRoot(nD);iD.render(G.jsx(ex.StrictMode,{children:G.jsx(nE,{children:G.jsx(tD,{})})}));
