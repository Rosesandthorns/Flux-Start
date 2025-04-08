(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Tc={exports:{}},fo={},Cc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),ip=Symbol.for("react.portal"),op=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),up=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),hp=Symbol.for("react.lazy"),Ol=Symbol.iterator;function pp(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rc=Object.assign,Nc={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Pc}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ac(){}Ac.prototype=Wn.prototype;function wa(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Pc}var _a=wa.prototype=new Ac;_a.constructor=wa;Rc(_a,Wn.prototype);_a.isPureReactComponent=!0;var xl=Array.isArray,Oc=Object.prototype.hasOwnProperty,Sa={current:null},xc={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Oc.call(t,r)&&!xc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:e,key:o,ref:s,props:i,_owner:Sa.current}}function mp(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function gp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dl=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gp(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $r:case ip:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Uo(s,0):r,xl(i)?(n="",e!=null&&(n=e.replace(Dl,"$&/")+"/"),vi(i,t,n,"",function(u){return u})):i!=null&&(Ea(i)&&(i=mp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Dl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",xl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Uo(o,a);s+=vi(o,t,n,l,i)}else if(l=pp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Uo(o,a++),s+=vi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Zr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},yi={transition:null},yp={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:yi,ReactCurrentOwner:Sa};function Lc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Wn;O.Fragment=op;O.Profiler=ap;O.PureComponent=wa;O.StrictMode=sp;O.Suspense=dp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;O.act=Lc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Sa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Oc.call(t,l)&&!xc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lp,_context:e},e.Consumer=e};O.createElement=Dc;O.createFactory=function(e){var t=Dc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:cp,render:e}};O.isValidElement=Ea;O.lazy=function(e){return{$$typeof:hp,_payload:{_status:-1,_result:e},_init:vp}};O.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};O.unstable_act=Lc;O.useCallback=function(e,t){return ce.current.useCallback(e,t)};O.useContext=function(e){return ce.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};O.useEffect=function(e,t){return ce.current.useEffect(e,t)};O.useId=function(){return ce.current.useId()};O.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ce.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};O.useRef=function(e){return ce.current.useRef(e)};O.useState=function(e){return ce.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ce.current.useTransition()};O.version="18.3.1";Cc.exports=O;var Ve=Cc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=Ve,_p=Symbol.for("react.element"),Sp=Symbol.for("react.fragment"),Ep=Object.prototype.hasOwnProperty,Ip=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kp={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ep.call(t,r)&&!kp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_p,type:e,key:o,ref:s,props:i,_owner:Ip.current}}fo.Fragment=Sp;fo.jsx=Mc;fo.jsxs=Mc;Tc.exports=fo;var D=Tc.exports,Uc={exports:{}},Ie={},Fc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var N=I.length;I.push(R);e:for(;0<N;){var K=N-1>>>1,J=I[K];if(0<i(J,R))I[K]=R,I[N]=J,N=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],N=I.pop();if(N!==R){I[0]=N;e:for(var K=0,J=I.length,Jr=J>>>1;K<Jr;){var Vt=2*(K+1)-1,Mo=I[Vt],Ht=Vt+1,Xr=I[Ht];if(0>i(Mo,N))Ht<J&&0>i(Xr,Mo)?(I[K]=Xr,I[Ht]=N,K=Ht):(I[K]=Mo,I[Vt]=N,K=Vt);else if(Ht<J&&0>i(Xr,N))I[K]=Xr,I[Ht]=N,K=Ht;else break e}}return R}function i(I,R){var N=I.sortIndex-R.sortIndex;return N!==0?N:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,p=null,m=3,v=!1,w=!1,_=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function g(I){if(_=!1,f(I),!w)if(n(l)!==null)w=!0,Do(S);else{var R=n(u);R!==null&&Lo(g,R.startTime-I)}}function S(I,R){w=!1,_&&(_=!1,d(C),C=-1),v=!0;var N=m;try{for(f(R),p=n(l);p!==null&&(!(p.expirationTime>R)||I&&!Oe());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var J=K(p.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),f(R)}else r(l);p=n(l)}if(p!==null)var Jr=!0;else{var Vt=n(u);Vt!==null&&Lo(g,Vt.startTime-R),Jr=!1}return Jr}finally{p=null,m=N,v=!1}}var k=!1,T=null,C=-1,z=5,A=-1;function Oe(){return!(e.unstable_now()-A<z)}function qn(){if(T!==null){var I=e.unstable_now();A=I;var R=!0;try{R=T(!0,I)}finally{R?Yn():(k=!1,T=null)}}else k=!1}var Yn;if(typeof c=="function")Yn=function(){c(qn)};else if(typeof MessageChannel<"u"){var Al=new MessageChannel,rp=Al.port2;Al.port1.onmessage=qn,Yn=function(){rp.postMessage(null)}}else Yn=function(){M(qn,0)};function Do(I){T=I,k||(k=!0,Yn())}function Lo(I,R){C=M(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Do(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var N=m;m=R;try{return I()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=m;m=I;try{return R()}finally{m=N}},e.unstable_scheduleCallback=function(I,R,N){var K=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=N+J,I={id:h++,callback:R,priorityLevel:I,startTime:N,expirationTime:J,sortIndex:-1},N>K?(I.sortIndex=N,t(u,I),n(l)===null&&I===n(u)&&(_?(d(C),C=-1):_=!0,Lo(g,N-K))):(I.sortIndex=J,t(l,I),w||v||(w=!0,Do(S))),I},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(I){var R=m;return function(){var N=m;m=R;try{return I.apply(this,arguments)}finally{m=N}}}})(zc);Fc.exports=zc;var Tp=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=Ve,Ee=Tp;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jc=new Set,_r={};function dn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(_r[e]=t,e=0;e<t.length;e++)jc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,Pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ll={},Ml={};function Rp(e){return ys.call(Ml,e)?!0:ys.call(Ll,e)?!1:Pp.test(e)?Ml[e]=!0:(Ll[e]=!0,!1)}function Np(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ap(e,t,n,r){if(t===null||typeof t>"u"||Np(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ia=/[\-:]([a-z])/g;function ka(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ap(t,n,i,r)&&(n=null),r||i===null?Rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),ws=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),bc=Symbol.for("react.offscreen"),Ul=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Fo;function or(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||""}return`
`+Fo+e}var zo=!1;function jo(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Op(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case vn:return"Portal";case ws:return"Profiler";case Ca:return"StrictMode";case _s:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ra:return t=e.displayName||null,t!==null?t:Es(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Es(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(t);case 8:return t===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dp(e){var t=Vc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=Dp(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wc(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function ks(e,t){Wc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ts(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(sr(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Kc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $l(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(Mp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,An=null,On=null;function Bl(e){if(e=Vr(e)){if(typeof Os!="function")throw Error(y(280));var t=e.stateNode;t&&(t=vo(t),Os(e.stateNode,e.type,t))}}function Jc(e){An?On?On.push(e):On=[e]:An=e}function Xc(){if(An){var e=An,t=On;if(On=An=null,Bl(e),t)for(e=0;e<t.length;e++)Bl(t[e])}}function Zc(e,t){return e(t)}function ed(){}var $o=!1;function td(e,t,n){if($o)return e(t,n);$o=!0;try{return Zc(e,t,n)}finally{$o=!1,(An!==null||On!==null)&&(ed(),Xc())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var xs=!1;if(at)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{xs=!1}function Up(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var cr=!1,Li=null,Mi=!1,Ds=null,Fp={onError:function(e){cr=!0,Li=e}};function zp(e,t,n,r,i,o,s,a,l){cr=!1,Li=null,Up.apply(Fp,arguments)}function jp(e,t,n,r,i,o,s,a,l){if(zp.apply(this,arguments),cr){if(cr){var u=Li;cr=!1,Li=null}else throw Error(y(198));Mi||(Mi=!0,Ds=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if(fn(e)!==e)throw Error(y(188))}function $p(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bl(i),e;if(o===r)return bl(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function rd(e){return e=$p(e),e!==null?id(e):null}function id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=id(e);if(t!==null)return t;e=e.sibling}return null}var od=Ee.unstable_scheduleCallback,Vl=Ee.unstable_cancelCallback,Bp=Ee.unstable_shouldYield,bp=Ee.unstable_requestPaint,G=Ee.unstable_now,Vp=Ee.unstable_getCurrentPriorityLevel,Aa=Ee.unstable_ImmediatePriority,sd=Ee.unstable_UserBlockingPriority,Ui=Ee.unstable_NormalPriority,Hp=Ee.unstable_LowPriority,ad=Ee.unstable_IdlePriority,ho=null,We=null;function Wp(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Qp,Kp=Math.log,Gp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(Kp(e)/Gp|0)|0}var ri=64,ii=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ar(a):(o&=s,o!==0&&(r=ar(o)))}else s=n&~i,s!==0?r=ar(s):o!==0&&(r=ar(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),i=1<<n,r|=e[n],t&=~i;return r}function qp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ue(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qp(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ue(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cd,xa,dd,fd,hd,Ms=!1,oi=[],Ct=null,Pt=null,Rt=null,Ir=new Map,kr=new Map,wt=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Zn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vr(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zp(e,t,n,r,i){switch(t){case"focusin":return Ct=Zn(Ct,e,t,n,r,i),!0;case"dragenter":return Pt=Zn(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=Zn(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ir.set(o,Zn(Ir.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,kr.set(o,Zn(kr.get(o)||null,e,t,n,r,i)),!0}return!1}function pd(e){var t=Qt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=nd(n),t!==null){e.blockedOn=t,hd(e.priority,function(){dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Vr(n),t!==null&&xa(t),e.blockedOn=n,!1;t.shift()}return!0}function Wl(e,t,n){wi(e)&&n.delete(t)}function em(){Ms=!1,Ct!==null&&wi(Ct)&&(Ct=null),Pt!==null&&wi(Pt)&&(Pt=null),Rt!==null&&wi(Rt)&&(Rt=null),Ir.forEach(Wl),kr.forEach(Wl)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,em)))}function Tr(e){function t(i){return er(i,e)}if(0<oi.length){er(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&er(Ct,e),Pt!==null&&er(Pt,e),Rt!==null&&er(Rt,e),Ir.forEach(t),kr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)pd(n),n.blockedOn===null&&wt.shift()}var xn=pt.ReactCurrentBatchConfig,zi=!0;function tm(e,t,n,r){var i=L,o=xn.transition;xn.transition=null;try{L=1,Da(e,t,n,r)}finally{L=i,xn.transition=o}}function nm(e,t,n,r){var i=L,o=xn.transition;xn.transition=null;try{L=4,Da(e,t,n,r)}finally{L=i,xn.transition=o}}function Da(e,t,n,r){if(zi){var i=Us(e,t,n,r);if(i===null)Jo(e,t,r,ji,n),Hl(e,r);else if(Zp(i,e,t,n,r))r.stopPropagation();else if(Hl(e,r),t&4&&-1<Xp.indexOf(e)){for(;i!==null;){var o=Vr(i);if(o!==null&&cd(o),o=Us(e,t,n,r),o===null&&Jo(e,t,r,ji,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var ji=null;function Us(e,t,n,r){if(ji=null,e=Na(r),e=Qt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vp()){case Aa:return 1;case sd:return 4;case Ui:case Hp:return 16;case ad:return 536870912;default:return 16}default:return 16}}var kt=null,La=null,_i=null;function gd(){if(_i)return _i;var e,t=La,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return _i=i.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Kl(){return!1}function ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?si:Kl,this.isPropagationStopped=Kl,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=ke(Kn),br=H({},Kn,{view:0,detail:0}),rm=ke(br),bo,Vo,tr,po=H({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(bo=e.screenX-tr.screenX,Vo=e.screenY-tr.screenY):Vo=bo=0,tr=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),Gl=ke(po),im=H({},po,{dataTransfer:0}),om=ke(im),sm=H({},br,{relatedTarget:0}),Ho=ke(sm),am=H({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=ke(am),um=H({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=ke(um),dm=H({},Kn,{data:0}),Ql=ke(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function Ua(){return mm}var gm=H({},br,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=ke(gm),ym=H({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ql=ke(ym),wm=H({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),_m=ke(wm),Sm=H({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=ke(Sm),Im=H({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),km=ke(Im),Tm=[9,13,27,32],Fa=at&&"CompositionEvent"in window,dr=null;at&&"documentMode"in document&&(dr=document.documentMode);var Cm=at&&"TextEvent"in window&&!dr,vd=at&&(!Fa||dr&&8<dr&&11>=dr),Yl=" ",Jl=!1;function yd(e,t){switch(e){case"keyup":return Tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Pm(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(Jl=!0,Yl);case"textInput":return e=t.data,e===Yl&&Jl?null:e;default:return null}}function Rm(e,t){if(wn)return e==="compositionend"||!Fa&&yd(e,t)?(e=gd(),_i=La=kt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nm[e.type]:t==="textarea"}function _d(e,t,n,r){Jc(r),t=$i(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Cr=null;function Am(e){Od(e,0)}function mo(e){var t=En(e);if(Hc(t))return e}function Om(e,t){if(e==="change")return t}var Sd=!1;if(at){var Wo;if(at){var Ko="oninput"in document;if(!Ko){var Zl=document.createElement("div");Zl.setAttribute("oninput","return;"),Ko=typeof Zl.oninput=="function"}Wo=Ko}else Wo=!1;Sd=Wo&&(!document.documentMode||9<document.documentMode)}function eu(){fr&&(fr.detachEvent("onpropertychange",Ed),Cr=fr=null)}function Ed(e){if(e.propertyName==="value"&&mo(Cr)){var t=[];_d(t,Cr,e,Na(e)),td(Am,t)}}function xm(e,t,n){e==="focusin"?(eu(),fr=t,Cr=n,fr.attachEvent("onpropertychange",Ed)):e==="focusout"&&eu()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(Cr)}function Lm(e,t){if(e==="click")return mo(t)}function Mm(e,t){if(e==="input"||e==="change")return mo(t)}function Um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:Um;function Pr(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ys.call(t,i)||!je(e[i],t[i]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kd(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fm(e){var t=kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Id(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nu(n,o);var s=nu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zm=at&&"documentMode"in document&&11>=document.documentMode,_n=null,Fs=null,hr=null,zs=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zs||_n==null||_n!==Di(r)||(r=_n,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Pr(hr,r)||(hr=r,r=$i(Fs,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},Go={},Td={};at&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function go(e){if(Go[e])return Go[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Td)return Go[e]=t[n];return e}var Cd=go("animationend"),Pd=go("animationiteration"),Rd=go("animationstart"),Nd=go("transitionend"),Ad=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Ad.set(e,t),dn(t,[e])}for(var Qo=0;Qo<iu.length;Qo++){var qo=iu[Qo],jm=qo.toLowerCase(),$m=qo[0].toUpperCase()+qo.slice(1);jt(jm,"on"+$m)}jt(Cd,"onAnimationEnd");jt(Pd,"onAnimationIteration");jt(Rd,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Nd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jp(r,t,void 0,e),e.currentTarget=null}function Od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ou(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ou(i,a,u),o=l}}}if(Mi)throw e=Ds,Mi=!1,Ds=null,e}function j(e,t){var n=t[Vs];n===void 0&&(n=t[Vs]=new Set);var r=e+"__bubble";n.has(r)||(xd(t,e,2,!1),n.add(r))}function Yo(e,t,n){var r=0;t&&(r|=4),xd(n,e,r,t)}var li="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[li]){e[li]=!0,jc.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,Yo("selectionchange",!1,t))}}function xd(e,t,n,r){switch(md(t)){case 1:var i=tm;break;case 4:i=nm;break;default:i=Da}n=i.bind(null,t,n,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}td(function(){var u=o,h=Na(n),p=[];e:{var m=Ad.get(e);if(m!==void 0){var v=Ma,w=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":v=vm;break;case"focusin":w="focus",v=Ho;break;case"focusout":w="blur",v=Ho;break;case"beforeblur":case"afterblur":v=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_m;break;case Cd:case Pd:case Rd:v=lm;break;case Nd:v=Em;break;case"scroll":v=rm;break;case"wheel":v=km;break;case"copy":case"cut":case"paste":v=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ql}var _=(t&4)!==0,M=!_&&e==="scroll",d=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Er(c,d),g!=null&&_.push(Nr(c,g,f)))),M)break;c=c.return}0<_.length&&(m=new v(m,w,null,n,h),p.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==As&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[lt]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Qt(w):null,w!==null&&(M=fn(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=Gl,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=ql,g="onPointerLeave",d="onPointerEnter",c="pointer"),M=v==null?m:En(v),f=w==null?m:En(w),m=new _(g,c+"leave",v,n,h),m.target=M,m.relatedTarget=f,g=null,Qt(h)===u&&(_=new _(d,c+"enter",w,n,h),_.target=f,_.relatedTarget=M,g=_),M=g,v&&w)t:{for(_=v,d=w,c=0,f=_;f;f=gn(f))c++;for(f=0,g=d;g;g=gn(g))f++;for(;0<c-f;)_=gn(_),c--;for(;0<f-c;)d=gn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=gn(_),d=gn(d)}_=null}else _=null;v!==null&&su(p,m,v,_,!1),w!==null&&M!==null&&su(p,M,w,_,!0)}}e:{if(m=u?En(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Om;else if(Xl(m))if(Sd)S=Mm;else{S=Dm;var k=xm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Lm);if(S&&(S=S(e,u))){_d(p,S,n,h);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Ts(m,"number",m.value)}switch(k=u?En(u):window,e){case"focusin":(Xl(k)||k.contentEditable==="true")&&(_n=k,Fs=u,hr=null);break;case"focusout":hr=Fs=_n=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,ru(p,n,h);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":ru(p,n,h)}var T;if(Fa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else wn?yd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(vd&&n.locale!=="ko"&&(wn||C!=="onCompositionStart"?C==="onCompositionEnd"&&wn&&(T=gd()):(kt=h,La="value"in kt?kt.value:kt.textContent,wn=!0)),k=$i(u,C),0<k.length&&(C=new Ql(C,e,null,n,h),p.push({event:C,listeners:k}),T?C.data=T:(T=wd(n),T!==null&&(C.data=T)))),(T=Cm?Pm(e,n):Rm(e,n))&&(u=$i(u,"onBeforeInput"),0<u.length&&(h=new Ql("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}Od(p,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Er(e,n),o!=null&&r.unshift(Nr(e,o,i)),o=Er(e,t),o!=null&&r.push(Nr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Er(n,o),l!=null&&s.unshift(Nr(n,l,a))):i||(l=Er(n,o),l!=null&&s.push(Nr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var bm=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(bm,`
`).replace(Vm,"")}function ui(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(y(425))}function Bi(){}var js=null,$s=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bs=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Km)}:bs;function Km(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),be="__reactFiber$"+Gn,Ar="__reactProps$"+Gn,lt="__reactContainer$"+Gn,Vs="__reactEvents$"+Gn,Gm="__reactListeners$"+Gn,Qm="__reactHandles$"+Gn;function Qt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[be])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[be]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function vo(e){return e[Ar]||null}var Hs=[],In=-1;function $t(e){return{current:e}}function $(e){0>In||(e.current=Hs[In],Hs[In]=null,In--)}function F(e,t){In++,Hs[In]=e.current,e.current=t}var zt={},se=$t(zt),pe=$t(!1),tn=zt;function jn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function bi(){$(pe),$(se)}function cu(e,t,n){if(se.current!==zt)throw Error(y(168));F(se,t),F(pe,n)}function Dd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,xp(e)||"Unknown",i));return H({},n,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,tn=se.current,F(se,e),F(pe,pe.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Dd(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,$(pe),$(se),F(se,e)):$(pe),F(pe,n)}var Ze=null,yo=!1,Zo=!1;function Ld(e){Ze===null?Ze=[e]:Ze.push(e)}function qm(e){yo=!0,Ld(e)}function Bt(){if(!Zo&&Ze!==null){Zo=!0;var e=0,t=L;try{var n=Ze;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,yo=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),od(Aa,Bt),i}finally{L=t,Zo=!1}}return null}var kn=[],Tn=0,Hi=null,Wi=0,Te=[],Ce=0,nn=null,tt=1,nt="";function Wt(e,t){kn[Tn++]=Wi,kn[Tn++]=Hi,Hi=e,Wi=t}function Md(e,t,n){Te[Ce++]=tt,Te[Ce++]=nt,Te[Ce++]=nn,nn=e;var r=tt;e=nt;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var o=32-Ue(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,tt=1<<32-Ue(t)+i|n<<i|r,nt=o+e}else tt=1<<o|n<<i|r,nt=e}function ja(e){e.return!==null&&(Wt(e,1),Md(e,1,0))}function $a(e){for(;e===Hi;)Hi=kn[--Tn],kn[Tn]=null,Wi=kn[--Tn],kn[Tn]=null;for(;e===nn;)nn=Te[--Ce],Te[Ce]=null,nt=Te[--Ce],Te[Ce]=null,tt=Te[--Ce],Te[Ce]=null}var _e=null,we=null,B=!1,Me=null;function Ud(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,we=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,we=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(B){var t=we;if(t){var n=t;if(!fu(e,t)){if(Ws(e))throw Error(y(418));t=Nt(n.nextSibling);var r=_e;t&&fu(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,B=!1,_e=e)}}else{if(Ws(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,_e=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function ci(e){if(e!==_e)return!1;if(!B)return hu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=we)){if(Ws(e))throw Fd(),Error(y(418));for(;t;)Ud(e,t),t=Nt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=_e?Nt(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=we;e;)e=Nt(e.nextSibling)}function $n(){we=_e=null,B=!1}function Ba(e){Me===null?Me=[e]:Me.push(e)}var Ym=pt.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function zd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Dt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=ss(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function l(d,c,f,g){var S=f.type;return S===yn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&pu(S)===c.type)?(g=i(c,f.props),g.ref=nr(d,c,f),g.return=d,g):(g=Ri(f.type,f.key,f.props,null,d.mode,g),g.ref=nr(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=as(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,S){return c===null||c.tag!==7?(c=en(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ss(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ei:return f=Ri(c.type,c.key,c.props,null,d.mode,f),f.ref=nr(d,null,c),f.return=d,f;case vn:return c=as(c,d.mode,f),c.return=d,c;case vt:var g=c._init;return p(d,g(c._payload),f)}if(sr(c)||Jn(c))return c=en(c,d.mode,f,null),c.return=d,c;di(d,c)}return null}function m(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:return f.key===S?l(d,c,f,g):null;case vn:return f.key===S?u(d,c,f,g):null;case vt:return S=f._init,m(d,c,S(f._payload),g)}if(sr(f)||Jn(f))return S!==null?null:h(d,c,f,g,null);di(d,f)}return null}function v(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ei:return d=d.get(g.key===null?f:g.key)||null,l(c,d,g,S);case vn:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,S);case vt:var k=g._init;return v(d,c,f,k(g._payload),S)}if(sr(g)||Jn(g))return d=d.get(f)||null,h(c,d,g,S,null);di(c,g)}return null}function w(d,c,f,g){for(var S=null,k=null,T=c,C=c=0,z=null;T!==null&&C<f.length;C++){T.index>C?(z=T,T=null):z=T.sibling;var A=m(d,T,f[C],g);if(A===null){T===null&&(T=z);break}e&&T&&A.alternate===null&&t(d,T),c=o(A,c,C),k===null?S=A:k.sibling=A,k=A,T=z}if(C===f.length)return n(d,T),B&&Wt(d,C),S;if(T===null){for(;C<f.length;C++)T=p(d,f[C],g),T!==null&&(c=o(T,c,C),k===null?S=T:k.sibling=T,k=T);return B&&Wt(d,C),S}for(T=r(d,T);C<f.length;C++)z=v(T,d,C,f[C],g),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?C:z.key),c=o(z,c,C),k===null?S=z:k.sibling=z,k=z);return e&&T.forEach(function(Oe){return t(d,Oe)}),B&&Wt(d,C),S}function _(d,c,f,g){var S=Jn(f);if(typeof S!="function")throw Error(y(150));if(f=S.call(f),f==null)throw Error(y(151));for(var k=S=null,T=c,C=c=0,z=null,A=f.next();T!==null&&!A.done;C++,A=f.next()){T.index>C?(z=T,T=null):z=T.sibling;var Oe=m(d,T,A.value,g);if(Oe===null){T===null&&(T=z);break}e&&T&&Oe.alternate===null&&t(d,T),c=o(Oe,c,C),k===null?S=Oe:k.sibling=Oe,k=Oe,T=z}if(A.done)return n(d,T),B&&Wt(d,C),S;if(T===null){for(;!A.done;C++,A=f.next())A=p(d,A.value,g),A!==null&&(c=o(A,c,C),k===null?S=A:k.sibling=A,k=A);return B&&Wt(d,C),S}for(T=r(d,T);!A.done;C++,A=f.next())A=v(T,d,C,A.value,g),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?C:A.key),c=o(A,c,C),k===null?S=A:k.sibling=A,k=A);return e&&T.forEach(function(qn){return t(d,qn)}),B&&Wt(d,C),S}function M(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===yn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:e:{for(var S=f.key,k=c;k!==null;){if(k.key===S){if(S=f.type,S===yn){if(k.tag===7){n(d,k.sibling),c=i(k,f.props.children),c.return=d,d=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&pu(S)===k.type){n(d,k.sibling),c=i(k,f.props),c.ref=nr(d,k,f),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}f.type===yn?(c=en(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=Ri(f.type,f.key,f.props,null,d.mode,g),g.ref=nr(d,c,f),g.return=d,d=g)}return s(d);case vn:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=as(f,d.mode,g),c.return=d,d=c}return s(d);case vt:return k=f._init,M(d,c,k(f._payload),g)}if(sr(f))return w(d,c,f,g);if(Jn(f))return _(d,c,f,g);di(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=ss(f,d.mode,g),c.return=d,d=c),s(d)):n(d,c)}return M}var Bn=zd(!0),jd=zd(!1),Ki=$t(null),Gi=null,Cn=null,ba=null;function Va(){ba=Cn=Gi=null}function Ha(e){var t=Ki.current;$(Ki),e._currentValue=t}function Gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Gi=e,ba=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Gi===null)throw Error(y(308));Cn=e,Gi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var qt=null;function Wa(e){qt===null?qt=[e]:qt.push(e)}function $d(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wa(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,x&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Wa(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=H({},p,m);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,l=p):h=h.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=s,e.lanes=s,e.memoizedState=p}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Hr={},Ke=$t(Hr),Or=$t(Hr),xr=$t(Hr);function Yt(e){if(e===Hr)throw Error(y(174));return e}function Ga(e,t){switch(F(xr,t),F(Or,e),F(Ke,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ps(t,e)}$(Ke),F(Ke,t)}function bn(){$(Ke),$(Or),$(xr)}function bd(e){Yt(xr.current);var t=Yt(Ke.current),n=Ps(t,e.type);t!==n&&(F(Or,e),F(Ke,n))}function Qa(e){Or.current===e&&($(Ke),$(Or))}var b=$t(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function qa(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Ii=pt.ReactCurrentDispatcher,ts=pt.ReactCurrentBatchConfig,rn=0,V=null,q=null,X=null,Yi=!1,pr=!1,Dr=0,Jm=0;function re(){throw Error(y(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function Ja(e,t,n,r,i,o){if(rn=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?tg:ng,e=n(r,i),pr){o=0;do{if(pr=!1,Dr=0,25<=o)throw Error(y(301));o+=1,X=q=null,t.updateQueue=null,Ii.current=rg,e=n(r,i)}while(pr)}if(Ii.current=Ji,t=q!==null&&q.next!==null,rn=0,X=q=V=null,Yi=!1,t)throw Error(y(300));return e}function Xa(){var e=Dr!==0;return Dr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?V.memoizedState=X=e:X=X.next=e,X}function Ae(){if(q===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=X===null?V.memoizedState:X.next;if(t!==null)X=t,q=e;else{if(e===null)throw Error(y(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},X===null?V.memoizedState=X=e:X=X.next=e}return X}function Lr(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=Ae(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((rn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,V.lanes|=h,on|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,je(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=Ae(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);je(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vd(){}function Hd(e,t){var n=V,r=Ae(),i=t(),o=!je(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Za(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Kd.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(y(349));rn&30||Wd(n,t,i)}return i}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kd(e,t,n,r){t.value=n,t.getSnapshot=r,Qd(t)&&qd(e)}function Gd(e,t,n){return n(function(){Qd(t)&&qd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function qd(e){var t=ut(e,1);t!==null&&Fe(t,e,1,-1)}function vu(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=eg.bind(null,V,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return Ae().memoizedState}function ki(e,t,n,r){var i=Be();V.flags|=e,i.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(q!==null){var s=q.memoizedState;if(o=s.destroy,r!==null&&Ya(r,s.deps)){i.memoizedState=Mr(t,n,o,r);return}}V.flags|=e,i.memoizedState=Mr(1|t,n,o,r)}function yu(e,t){return ki(8390656,8,e,t)}function Za(e,t){return wo(2048,8,e,t)}function Jd(e,t){return wo(4,2,e,t)}function Xd(e,t){return wo(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ef(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Zd.bind(null,t,e),n)}function el(){}function tf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rf(e,t,n){return rn&21?(je(n,t)||(n=ld(),V.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Xm(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{L=n,ts.transition=r}}function of(){return Ae().memoizedState}function Zm(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sf(e))af(t,n);else if(n=$d(e,t,n,r),n!==null){var i=le();Fe(n,e,r,i),lf(n,t,r)}}function eg(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sf(e))af(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,je(a,s)){var l=t.interleaved;l===null?(i.next=i,Wa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=$d(e,t,i,r),n!==null&&(i=le(),Fe(n,e,r,i),lf(n,t,r))}}function sf(e){var t=e.alternate;return e===V||t!==null&&t===V}function af(e,t){pr=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}var Ji={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tg={readContext:Ne,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zm.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:el,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Xm.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=Be();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));rn&30||Wd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yu(Gd.bind(null,r,o,e),[e]),r.flags|=2048,Mr(9,Kd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=Z.identifierPrefix;if(B){var n=nt,r=tt;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ng={readContext:Ne,useCallback:tf,useContext:Ne,useEffect:Za,useImperativeHandle:ef,useInsertionEffect:Jd,useLayoutEffect:Xd,useMemo:nf,useReducer:ns,useRef:Yd,useState:function(){return ns(Lr)},useDebugValue:el,useDeferredValue:function(e){var t=Ae();return rf(t,q.memoizedState,e)},useTransition:function(){var e=ns(Lr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:Hd,useId:of,unstable_isNewReconciler:!1},rg={readContext:Ne,useCallback:tf,useContext:Ne,useEffect:Za,useImperativeHandle:ef,useInsertionEffect:Jd,useLayoutEffect:Xd,useMemo:nf,useReducer:rs,useRef:Yd,useState:function(){return rs(Lr)},useDebugValue:el,useDeferredValue:function(e){var t=Ae();return q===null?t.memoizedState=e:rf(t,q.memoizedState,e)},useTransition:function(){var e=rs(Lr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Vd,useSyncExternalStore:Hd,useId:of,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=xt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Fe(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=xt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Fe(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=xt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Fe(t,e,r,n),Ei(t,e,r))}};function wu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function uf(e,t,n){var r=!1,i=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=me(t)?tn:se.current,r=t.contextTypes,o=(r=r!=null)?jn(e,i):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ka(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=me(t)?tn:se.current,i.context=jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Op(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function cf(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,sa=r),Ys(e,t)},n}function df(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ys(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ys(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yg.bind(null,e,t,n),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var og=pt.ReactCurrentOwner,he=!1;function ae(e,t,n,r){t.child=e===null?jd(t,null,n,r):Bn(t,e.child,n,r)}function ku(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=Ja(e,t,n,r,o,i),n=Xa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(B&&n&&ja(t),t.flags|=1,ae(e,t,r,i),t.child)}function Tu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ll(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ff(e,t,o,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(s,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pr(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Js(e,t,n,r,i)}function hf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Rn,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Rn,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(Rn,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(Rn,ye),ye|=r;return ae(e,t,i,n),t.child}function pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,i){var o=me(n)?tn:se.current;return o=jn(t,o),Dn(t,i),n=Ja(e,t,n,r,o,i),r=Xa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(B&&r&&ja(t),t.flags|=1,ae(e,t,n,i),t.child)}function Cu(e,t,n,r,i){if(me(n)){var o=!0;Vi(t)}else o=!1;if(Dn(t,i),t.stateNode===null)Ti(e,t),uf(t,n,r),qs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=me(n)?tn:se.current,u=jn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_u(t,s,r,u),yt=!1;var m=t.memoizedState;s.state=m,Qi(t,r,s,i),l=t.memoizedState,a!==r||m!==l||pe.current||yt?(typeof h=="function"&&(Qs(t,n,h,r),l=t.memoizedState),(a=yt||wu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:De(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ne(l):(l=me(n)?tn:se.current,l=jn(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&_u(t,s,r,l),yt=!1,m=t.memoizedState,s.state=m,Qi(t,r,s,i);var w=t.memoizedState;a!==p||m!==w||pe.current||yt?(typeof v=="function"&&(Qs(t,n,v,r),w=t.memoizedState),(u=yt||wu(t,n,u,r,m,w,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Xs(e,t,n,r,o,i)}function Xs(e,t,n,r,i,o){pf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&du(t,n,!1),ct(e,t,o);r=t.stateNode,og.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function mf(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Ga(e,t.containerInfo)}function Pu(e,t,n,r,i){return $n(),Ba(i),t.flags|=256,ae(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,t,n){var r=t.pendingProps,i=b.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(b,i&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Io(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=Zs,e):tl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ea(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tl(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Ba(r),Bn(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(y(422))),fi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Io({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,s),t.child.memoizedState=ea(s),t.memoizedState=Zs,o);if(!(t.mode&1))return fi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=is(o,r,void 0),fi(e,t,s,r)}if(a=(s&e.childLanes)!==0,he||a){if(r=Z,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),Fe(r,e,i,-1))}return al(),r=is(Error(y(421))),fi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=Nt(i.nextSibling),_e=t,B=!0,Me=null,e!==null&&(Te[Ce++]=tt,Te[Ce++]=nt,Te[Ce++]=nn,tt=e.id,nt=e.overflow,nn=t),t=tl(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gs(e.return,t,n)}function os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(b,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}os(t,!0,n,null,o);break;case"together":os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t,n){switch(t.tag){case 3:mf(t),$n();break;case 5:bd(t);break;case 1:me(t.type)&&Vi(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(Ki,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?gf(e,t,n):(F(b,b.current&1),e=ct(e,t,n),e!==null?e.sibling:null);F(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,hf(e,t,n)}return ct(e,t,n)}var yf,ta,wf,_f;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};wf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(Ke.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Cs(e,i),r=Cs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}Rs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};_f=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&bi(),ie(t),null;case 3:return r=t.stateNode,bn(),$(pe),$(se),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ua(Me),Me=null))),ta(e,t),ie(t),null;case 5:Qa(t);var i=Yt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)wf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=Yt(Ke.current),ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[be]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<lr.length;i++)j(lr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Fl(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":jl(r,o),j("invalid",r)}Rs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,e),i=["children",""+a]):_r.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":ti(r),zl(r,o,!0);break;case"textarea":ti(r),$l(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[be]=t,e[Ar]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ns(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<lr.length;i++)j(lr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Fl(e,r),i=Is(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),j("invalid",e);break;case"textarea":jl(e,r),i=Cs(e,r),j("invalid",e);break;default:i=r}Rs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Yc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sr(e,l):typeof l=="number"&&Sr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_r.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&Ta(e,o,l,s))}switch(n){case"input":ti(e),zl(e,r,!1);break;case"textarea":ti(e),$l(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)_f(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Yt(xr.current),Yt(Ke.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return ie(t),null;case 13:if($(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))Fd(),$n(),t.flags|=98560,o=!1;else if(o=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[be]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Me!==null&&(ua(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?Y===0&&(Y=3):al())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return bn(),ta(e,t),e===null&&Rr(t.stateNode.containerInfo),ie(t),null;case 10:return Ha(t.type._context),ie(t),null;case 17:return me(t.type)&&bi(),ie(t),null;case 19:if($(b),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)rr(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qi(e),s!==null){for(t.flags|=128,rr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(b,b.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>Hn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=qi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return ie(t),null}else 2*G()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=b.current,F(b,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return sl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function ug(e,t){switch($a(t),t.tag){case 1:return me(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),$(pe),$(se),qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if($(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(b),null;case 4:return bn(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return sl(),null;case 24:return null;default:return null}}var hi=!1,oe=!1,cg=typeof WeakSet=="function"?WeakSet:Set,E=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){W(e,t,r)}}var Nu=!1;function dg(e,t){if(js=zi,e=kd(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},zi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,M=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:De(t.type,_),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=Nu,Nu=!1,w}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&na(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[Ar],delete t[Vs],delete t[Gm],delete t[Qm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ef(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ee=null,Le=!1;function mt(e,t,n){for(n=n.child;n!==null;)If(e,t,n),n=n.sibling}function If(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:oe||Pn(n,t);case 6:var r=ee,i=Le;ee=null,mt(e,t,n),ee=r,Le=i,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Tr(e)):Xo(ee,n.stateNode));break;case 4:r=ee,i=Le,ee=n.stateNode.containerInfo,Le=!0,mt(e,t,n),ee=r,Le=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&na(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!oe&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,mt(e,t,n),oe=r):mt(e,t,n);break;default:mt(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cg),t.forEach(function(r){var i=_g.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Le=!1;break e;case 3:ee=a.stateNode.containerInfo,Le=!0;break e;case 4:ee=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(ee===null)throw Error(y(160));If(o,s,i),ee=null,Le=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){W(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}function kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xe(t,e),$e(e),r&4){try{mr(3,e,e.return),So(3,e)}catch(_){W(e,e.return,_)}try{mr(5,e,e.return)}catch(_){W(e,e.return,_)}}break;case 1:xe(t,e),$e(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(xe(t,e),$e(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Sr(i,"")}catch(_){W(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Wc(i,o),Ns(a,s);var u=Ns(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?Yc(i,p):h==="dangerouslySetInnerHTML"?Qc(i,p):h==="children"?Sr(i,p):Ta(i,h,p,u)}switch(a){case"input":ks(i,o);break;case"textarea":Kc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Nn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Nn(i,!!o.multiple,o.defaultValue,!0):Nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(_){W(e,e.return,_)}}break;case 6:if(xe(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){W(e,e.return,_)}}break;case 3:if(xe(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(_){W(e,e.return,_)}break;case 4:xe(t,e),$e(e);break;case 13:xe(t,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(il=G())),r&4&&Ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,xe(t,e),oe=u):xe(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(p=E=h;E!==null;){switch(m=E,v=m.child,m.tag){case 0:case 11:case 14:case 15:mr(4,m,m.return);break;case 1:Pn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){W(r,n,_)}}break;case 5:Pn(m,m.return);break;case 22:if(m.memoizedState!==null){Du(p);continue}}v!==null?(v.return=m,E=v):Du(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qc("display",s))}catch(_){W(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){W(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:xe(t,e),$e(e),r&4&&Ou(e);break;case 21:break;default:xe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ef(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sr(i,""),r.flags&=-33);var o=Au(e);oa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Au(e);ia(e,a,s);break;default:throw Error(y(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fg(e,t,n){E=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||hi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=hi;var u=oe;if(hi=s,(oe=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?Lu(i):l!==null?(l.return=s,E=l):Lu(i);for(;o!==null;)E=o,Tf(o),o=o.sibling;E=i,hi=a,oe=u}xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):xu(e)}}function xu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Tr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&ra(t)}catch(m){W(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Du(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Lu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(l){W(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){W(t,i,l)}}var o=t.return;try{ra(t)}catch(l){W(t,o,l)}break;case 5:var s=t.return;try{ra(t)}catch(l){W(t,s,l)}}}catch(l){W(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var hg=Math.ceil,Xi=pt.ReactCurrentDispatcher,nl=pt.ReactCurrentOwner,Re=pt.ReactCurrentBatchConfig,x=0,Z=null,Q=null,te=0,ye=0,Rn=$t(0),Y=0,Ur=null,on=0,Eo=0,rl=0,gr=null,fe=null,il=0,Hn=1/0,Xe=null,Zi=!1,sa=null,Ot=null,pi=!1,Tt=null,eo=0,vr=0,aa=null,Ci=-1,Pi=0;function le(){return x&6?G():Ci!==-1?Ci:Ci=G()}function xt(e){return e.mode&1?x&2&&te!==0?te&-te:Ym.transition!==null?(Pi===0&&(Pi=ld()),Pi):(e=L,e!==0||(e=window.event,e=e===void 0?16:md(e.type)),e):1}function Fe(e,t,n,r){if(50<vr)throw vr=0,aa=null,Error(y(185));Br(e,n,r),(!(x&2)||e!==Z)&&(e===Z&&(!(x&2)&&(Eo|=n),Y===4&&_t(e,te)),ge(e,r),n===1&&x===0&&!(t.mode&1)&&(Hn=G()+500,yo&&Bt()))}function ge(e,t){var n=e.callbackNode;Yp(e,t);var r=Fi(e,e===Z?te:0);if(r===0)n!==null&&Vl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vl(n),t===1)e.tag===0?qm(Mu.bind(null,e)):Ld(Mu.bind(null,e)),Wm(function(){!(x&6)&&Bt()}),n=null;else{switch(ud(r)){case 1:n=Aa;break;case 4:n=sd;break;case 16:n=Ui;break;case 536870912:n=ad;break;default:n=Ui}n=Df(n,Cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cf(e,t){if(Ci=-1,Pi=0,x&6)throw Error(y(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Fi(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=x;x|=2;var o=Rf();(Z!==e||te!==t)&&(Xe=null,Hn=G()+500,Zt(e,t));do try{gg();break}catch(a){Pf(e,a)}while(!0);Va(),Xi.current=o,x=i,Q!==null?t=0:(Z=null,te=0,t=Y)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=la(e,i))),t===1)throw n=Ur,Zt(e,0),_t(e,r),ge(e,G()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!pg(i)&&(t=to(e,r),t===2&&(o=Ls(e),o!==0&&(r=o,t=la(e,o))),t===1))throw n=Ur,Zt(e,0),_t(e,r),ge(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Kt(e,fe,Xe);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=il+500-G(),10<t)){if(Fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bs(Kt.bind(null,e,fe,Xe),t);break}Kt(e,fe,Xe);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ue(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){e.timeoutHandle=bs(Kt.bind(null,e,fe,Xe),r);break}Kt(e,fe,Xe);break;case 5:Kt(e,fe,Xe);break;default:throw Error(y(329))}}}return ge(e,G()),e.callbackNode===n?Cf.bind(null,e):null}function la(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=to(e,t),e!==2&&(t=fe,fe=n,t!==null&&ua(t)),e}function ua(e){fe===null?fe=e:fe.push.apply(fe,e)}function pg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~rl,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Mu(e){if(x&6)throw Error(y(327));Ln();var t=Fi(e,0);if(!(t&1))return ge(e,G()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=la(e,r))}if(n===1)throw n=Ur,Zt(e,0),_t(e,t),ge(e,G()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,fe,Xe),ge(e,G()),null}function ol(e,t){var n=x;x|=1;try{return e(t)}finally{x=n,x===0&&(Hn=G()+500,yo&&Bt())}}function sn(e){Tt!==null&&Tt.tag===0&&!(x&6)&&Ln();var t=x;x|=1;var n=Re.transition,r=L;try{if(Re.transition=null,L=1,e)return e()}finally{L=r,Re.transition=n,x=t,!(x&6)&&Bt()}}function sl(){ye=Rn.current,$(Rn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:bn(),$(pe),$(se),qa();break;case 5:Qa(r);break;case 4:bn();break;case 13:$(b);break;case 19:$(b);break;case 10:Ha(r.type._context);break;case 22:case 23:sl()}n=n.return}if(Z=e,Q=e=Dt(e.current,null),te=ye=t,Y=0,Ur=null,rl=Eo=on=0,fe=gr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qt=null}return e}function Pf(e,t){do{var n=Q;try{if(Va(),Ii.current=Ji,Yi){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yi=!1}if(rn=0,X=q=V=null,pr=!1,Dr=0,nl.current=null,n===null||n.return===null){Y=1,Ur=t,Q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Eu(s);if(v!==null){v.flags&=-257,Iu(v,s,a,o,t),v.mode&1&&Su(o,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){Su(o,u,t),al();break e}l=Error(y(426))}}else if(B&&a.mode&1){var M=Eu(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Iu(M,s,a,o,t),Ba(Vn(l,a));break e}}o=l=Vn(l,a),Y!==4&&(Y=2),gr===null?gr=[o]:gr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=cf(o,l,t);mu(o,d);break e;case 1:a=l;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ot===null||!Ot.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=df(o,a,t);mu(o,g);break e}}o=o.return}while(o!==null)}Af(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Rf(){var e=Xi.current;return Xi.current=Ji,e===null?Ji:e}function al(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(on&268435455)&&!(Eo&268435455)||_t(Z,te)}function to(e,t){var n=x;x|=2;var r=Rf();(Z!==e||te!==t)&&(Xe=null,Zt(e,t));do try{mg();break}catch(i){Pf(e,i)}while(!0);if(Va(),x=n,Xi.current=r,Q!==null)throw Error(y(261));return Z=null,te=0,Y}function mg(){for(;Q!==null;)Nf(Q)}function gg(){for(;Q!==null&&!Bp();)Nf(Q)}function Nf(e){var t=xf(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Af(e):Q=t,nl.current=null}function Af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ug(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=lg(n,t,ye),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function Kt(e,t,n){var r=L,i=Re.transition;try{Re.transition=null,L=1,vg(e,t,n,r)}finally{Re.transition=i,L=r}return null}function vg(e,t,n,r){do Ln();while(Tt!==null);if(x&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jp(e,o),e===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,Df(Ui,function(){return Ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var s=L;L=1;var a=x;x|=4,nl.current=null,dg(e,n),kf(n,e),Fm($s),zi=!!js,$s=js=null,e.current=n,fg(n),bp(),x=a,L=s,Re.transition=o}else e.current=n;if(pi&&(pi=!1,Tt=e,eo=i),o=e.pendingLanes,o===0&&(Ot=null),Wp(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=sa,sa=null,e;return eo&1&&e.tag!==0&&Ln(),o=e.pendingLanes,o&1?e===aa?vr++:(vr=0,aa=e):vr=0,Bt(),null}function Ln(){if(Tt!==null){var e=ud(eo),t=Re.transition,n=L;try{if(Re.transition=null,L=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,eo=0,x&6)throw Error(y(331));var i=x;for(x|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:mr(8,h,o)}var p=h.child;if(p!==null)p.return=h,E=p;else for(;E!==null;){h=E;var m=h.sibling,v=h.return;if(Sf(h),h===u){E=null;break}if(m!==null){m.return=v,E=m;break}E=v}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var M=_.sibling;_.sibling=null,_=M}while(_!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,E=f;else e:for(s=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:So(9,a)}}catch(S){W(a,a.return,S)}if(a===s){E=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,E=g;break e}E=a.return}}if(x=i,Bt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ho,e)}catch{}r=!0}return r}finally{L=n,Re.transition=t}}return!1}function Uu(e,t,n){t=Vn(n,t),t=cf(e,t,1),e=At(e,t,1),t=le(),e!==null&&(Br(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Vn(n,e),e=df(t,e,1),t=At(t,e,1),e=le(),t!==null&&(Br(t,1,e),ge(t,e));break}}t=t.return}}function yg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>G()-il?Zt(e,0):rl|=n),ge(e,t)}function Of(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=le();e=ut(e,t),e!==null&&(Br(e,t,n),ge(e,n))}function wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function _g(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Of(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,ag(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&Md(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var i=jn(t,se.current);Dn(t,n),i=Ja(null,t,r,e,i,n);var o=Xa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Vi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ka(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,qs(t,r,e,n),t=Xs(null,t,r,!0,o,n)):(t.tag=0,B&&o&&ja(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Eg(r),e=De(r,e),i){case 0:t=Js(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,De(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Js(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Cu(e,t,r,i,n);case 3:e:{if(mf(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bd(e,t),Qi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(y(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(y(424)),t),t=Pu(e,t,r,n,i);break e}else for(we=Nt(t.stateNode.containerInfo.firstChild),_e=t,B=!0,Me=null,n=jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=ct(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return bd(t),e===null&&Ks(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bs(r,i)?s=null:o!==null&&Bs(r,o)&&(t.flags|=32),pf(e,t),ae(e,t,s,n),t.child;case 6:return e===null&&Ks(t),null;case 13:return gf(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),ku(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(Ki,r._currentValue),r._currentValue=s,o!==null)if(je(o.value,s)){if(o.children===i.children&&!pe.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=st(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gs(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gs(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Ne(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Tu(e,t,r,i,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ti(e,t),t.tag=1,me(r)?(e=!0,Vi(t)):e=!1,Dn(t,n),uf(t,r,i),qs(t,r,i,n),Xs(null,t,r,!0,e,n);case 19:return vf(e,t,n);case 22:return hf(e,t,n)}throw Error(y(156,t.tag))};function Df(e,t){return od(e,t)}function Sg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Sg(e,t,n,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===Ra)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ll(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case yn:return en(n.children,i,o,t);case Ca:s=8,i|=8;break;case ws:return e=Pe(12,n,t,i|2),e.elementType=ws,e.lanes=o,e;case _s:return e=Pe(13,n,t,i),e.elementType=_s,e.lanes=o,e;case Ss:return e=Pe(19,n,t,i),e.elementType=Ss,e.lanes=o,e;case bc:return Io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:s=10;break e;case Bc:s=9;break e;case Pa:s=11;break e;case Ra:s=14;break e;case vt:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=bc,e.lanes=n,e.stateNode={isHidden:!1},e}function ss(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function as(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ig(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ul(e,t,n,r,i,o,s,a,l){return e=new Ig(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(o),e}function kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return zt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return Dd(e,n,t)}return t}function Mf(e,t,n,r,i,o,s,a,l){return e=ul(n,r,!0,e,i,o,s,a,l),e.context=Lf(null),n=e.current,r=le(),i=xt(n),o=st(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,Br(e,i,r),ge(e,r),e}function ko(e,t,n,r){var i=t.current,o=le(),s=xt(i);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&(Fe(e,i,s,o),Ei(e,i,s)),s}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cl(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Tg(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}To.prototype.render=dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ko(e,t,null,null)};To.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){ko(null,e,null,null)}),t[lt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&pd(e)}};function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Cg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=no(s);o.call(u)}}var s=Mf(t,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=s,e[lt]=s.current,Rr(e.nodeType===8?e.parentNode:e),sn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=no(l);a.call(u)}}var l=ul(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=l,e[lt]=l.current,Rr(e.nodeType===8?e.parentNode:e),sn(function(){ko(t,l,n,r)}),l}function Po(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=no(s);a.call(l)}}ko(t,s,e,i)}else s=Cg(n,t,e,i,r);return no(s)}cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(Oa(t,n|1),ge(t,G()),!(x&6)&&(Hn=G()+500,Bt()))}break;case 13:sn(function(){var r=ut(e,1);if(r!==null){var i=le();Fe(r,e,1,i)}}),cl(e,1)}};xa=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=le();Fe(t,e,134217728,n)}cl(e,134217728)}};dd=function(e){if(e.tag===13){var t=xt(e),n=ut(e,t);if(n!==null){var r=le();Fe(n,e,t,r)}cl(e,t)}};fd=function(){return L};hd=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};Os=function(e,t,n){switch(t){case"input":if(ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vo(r);if(!i)throw Error(y(90));Hc(r),ks(r,i)}}}break;case"textarea":Kc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Zc=ol;ed=sn;var Pg={usingClientEntryPoint:!1,Events:[Vr,En,vo,Jc,Xc,ol]},ir={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rg={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rd(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{ho=mi.inject(Rg),We=mi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(t))throw Error(y(200));return kg(e,t,null,n)};Ie.createRoot=function(e,t){if(!fl(e))throw Error(y(299));var n=!1,r="",i=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ul(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new dl(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=rd(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return sn(e)};Ie.hydrate=function(e,t,n){if(!Co(t))throw Error(y(200));return Po(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!fl(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mf(t,null,e,1,n??null,i,!1,o,s),e[lt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Ie.render=function(e,t,n){if(!Co(t))throw Error(y(200));return Po(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Co(e))throw Error(y(40));return e._reactRootContainer?(sn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ie.unstable_batchedUpdates=ol;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Po(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Ff(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ff)}catch(e){console.error(e)}}Ff(),Uc.exports=Ie;var Ng=Uc.exports,zf,ju=Ng;zf=ju.createRoot,ju.hydrateRoot;var $u={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ag=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[h],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ag(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new Og;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(e){const t=jf(e);return $f.encodeByteArray(t,!0)},Bf=function(e){return xg(e).replace(/\./g,"")},bf=function(e){try{return $f.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=()=>Dg().__FIREBASE_DEFAULTS__,Mg=()=>{if(typeof process>"u"||typeof $u>"u")return;const e=$u.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ug=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bf(e[1]);return t&&JSON.parse(t)},hl=()=>{try{return Lg()||Mg()||Ug()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fg=e=>{var t,n;return(n=(t=hl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Vf=()=>{var e;return(e=hl())===null||e===void 0?void 0:e.config},Hf=e=>{var t;return(t=hl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function $g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bg(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Vg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hg,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Wg(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Je(i,a,r)}}function Wg(e,t){return e.replace(Kg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Kg=/\{\$([^}]+)}/g;function Gg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Bu(o)&&Bu(s)){if(!Fr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qg(e,t){const n=new qg(e,t);return n.subscribe.bind(n)}class qg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=1e3,Xg=2,Zg=4*60*60*1e3,ev=.5;function bu(e,t=Jg,n=Xg){const r=t*Math.pow(n,e),i=Math.round(ev*r*(Math.random()-.5)*2);return Math.min(Zg,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rv(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(e){return e===Gt?void 0:e}function rv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const ov={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},sv=U.INFO,av={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},lv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=av[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pl{constructor(t){this.name=t,this._logLevel=sv,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ov[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const uv=(e,t)=>t.some(n=>e instanceof n);let Vu,Hu;function cv(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qf=new WeakMap,ca=new WeakMap,qf=new WeakMap,us=new WeakMap,ml=new WeakMap;function fv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Lt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Qf.set(n,e)}).catch(()=>{}),ml.set(t,e),t}function hv(e){if(ca.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ca.set(e,t)}let da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){da=e(da)}function mv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cs(this),t,...n);return qf.set(r,t.sort?t.sort():[t]),Lt(r)}:dv().includes(e)?function(...t){return e.apply(cs(this),t),Lt(Qf.get(this))}:function(...t){return Lt(e.apply(cs(this),t))}}function gv(e){return typeof e=="function"?mv(e):(e instanceof IDBTransaction&&hv(e),uv(e,cv())?new Proxy(e,da):e)}function Lt(e){if(e instanceof IDBRequest)return fv(e);if(us.has(e))return us.get(e);const t=gv(e);return t!==e&&(us.set(e,t),ml.set(t,e)),t}const cs=e=>ml.get(e);function Yf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Lt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Lt(s.result),l.oldVersion,l.newVersion,Lt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vv=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],ds=new Map;function Wu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vv.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ds.set(t,o),o}pv(e=>({...e,get:(t,n,r)=>Wu(t,n)||e.get(t,n,r),has:(t,n)=>!!Wu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_v(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _v(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fa="@firebase/app",Ku="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new pl("@firebase/app"),Sv="@firebase/app-compat",Ev="@firebase/analytics-compat",Iv="@firebase/analytics",kv="@firebase/app-check-compat",Tv="@firebase/app-check",Cv="@firebase/auth",Pv="@firebase/auth-compat",Rv="@firebase/database",Nv="@firebase/data-connect",Av="@firebase/database-compat",Ov="@firebase/functions",xv="@firebase/functions-compat",Dv="@firebase/installations",Lv="@firebase/installations-compat",Mv="@firebase/messaging",Uv="@firebase/messaging-compat",Fv="@firebase/performance",zv="@firebase/performance-compat",jv="@firebase/remote-config",$v="@firebase/remote-config-compat",Bv="@firebase/storage",bv="@firebase/storage-compat",Vv="@firebase/firestore",Hv="@firebase/vertexai-preview",Wv="@firebase/firestore-compat",Kv="firebase",Gv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",Qv={[fa]:"fire-core",[Sv]:"fire-core-compat",[Iv]:"fire-analytics",[Ev]:"fire-analytics-compat",[Tv]:"fire-app-check",[kv]:"fire-app-check-compat",[Cv]:"fire-auth",[Pv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Nv]:"fire-data-connect",[Av]:"fire-rtdb-compat",[Ov]:"fire-fn",[xv]:"fire-fn-compat",[Dv]:"fire-iid",[Lv]:"fire-iid-compat",[Mv]:"fire-fcm",[Uv]:"fire-fcm-compat",[Fv]:"fire-perf",[zv]:"fire-perf-compat",[jv]:"fire-rc",[$v]:"fire-rc-compat",[Bv]:"fire-gcs",[bv]:"fire-gcs-compat",[Vv]:"fire-fst",[Wv]:"fire-fst-compat",[Hv]:"fire-vertex","fire-js":"fire-js",[Kv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Map,qv=new Map,pa=new Map;function Gu(e,t){try{e.container.addComponent(t)}catch(n){dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(pa.has(t))return dt.debug(`There were multiple attempts to register component ${t}.`),!1;pa.set(t,e);for(const n of ro.values())Gu(n,e);for(const n of qv.values())Gu(n,e);return!0}function Qn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function He(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new hn("app","Firebase",Yv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=Gv;function Jf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ha,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=Vf()),!n)throw Mt.create("no-options");const o=ro.get(i);if(o){if(Fr(n,o.options)&&Fr(r,o.config))return o;throw Mt.create("duplicate-app",{appName:i})}const s=new iv(i);for(const l of pa.values())s.addComponent(l);const a=new Jv(n,r,s);return ro.set(i,a),a}function Xf(e=ha){const t=ro.get(e);if(!t&&e===ha&&Vf())return Jf();if(!t)throw Mt.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=Qv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}ft(new qe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",Zv=1,zr="firebase-heartbeat-store";let fs=null;function Zf(){return fs||(fs=Yf(Xv,Zv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(zr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),fs}async function ey(e){try{const n=(await Zf()).transaction(zr),r=await n.objectStore(zr).get(eh(e));return await n.done,r}catch(t){if(t instanceof Je)dt.warn(t.message);else{const n=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}async function Qu(e,t){try{const r=(await Zf()).transaction(zr,"readwrite");await r.objectStore(zr).put(t,eh(e)),await r.done}catch(n){if(n instanceof Je)dt.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function eh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=1024,ny=30*24*60*60*1e3;class ry{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qu();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=ny}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qu(),{heartbeatsToSend:r,unsentEntries:i}=iy(this._heartbeatsCache.heartbeats),o=Bf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return dt.warn(n),""}}}function qu(){return new Date().toISOString().substring(0,10)}function iy(e,t=ty){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yu(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ey(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yu(e){return Bf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(e){ft(new qe("platform-logger",t=>new wv(t),"PRIVATE")),ft(new qe("heartbeat",t=>new ry(t),"PRIVATE")),Ge(fa,Ku,e),Ge(fa,Ku,"esm2017"),Ge("fire-js","")}sy("");var ay="firebase",ly="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(ay,ly,"app");const th="@firebase/installations",gl="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=1e4,rh=`w:${gl}`,ih="FIS_v2",uy="https://firebaseinstallations.googleapis.com/v1",cy=60*60*1e3,dy="installations",fy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},an=new hn(dy,fy,hy);function oh(e){return e instanceof Je&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh({projectId:e}){return`${uy}/projects/${e}/installations`}function ah(e){return{token:e.token,requestStatus:2,expiresIn:my(e.expiresIn),creationTime:Date.now()}}async function lh(e,t){const r=(await t.json()).error;return an.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function py(e,{refreshToken:t}){const n=uh(e);return n.append("Authorization",gy(t)),n}async function ch(e){const t=await e();return t.status>=500&&t.status<600?e():t}function my(e){return Number(e.replace("s","000"))}function gy(e){return`${ih} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sh(e),i=uh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:ih,appId:e.appId,sdkVersion:rh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ch(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ah(u.authToken)}}else throw await lh("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^[cdef][\w-]{21}$/,ma="";function _y(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Sy(e);return wy.test(n)?n:ma}catch{return ma}}function Sy(e){return yy(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function hh(e,t){const n=Ro(e);ph(n,t),Ey(n,t)}function ph(e,t){const n=fh.get(e);if(n)for(const r of n)r(t)}function Ey(e,t){const n=Iy();n&&n.postMessage({key:e,fid:t}),ky()}let Jt=null;function Iy(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{ph(e.data.key,e.data.fid)}),Jt}function ky(){fh.size===0&&Jt&&(Jt.close(),Jt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="firebase-installations-database",Cy=1,ln="firebase-installations-store";let hs=null;function vl(){return hs||(hs=Yf(Ty,Cy,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}}})),hs}async function io(e,t){const n=Ro(e),i=(await vl()).transaction(ln,"readwrite"),o=i.objectStore(ln),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&hh(e,t.fid),t}async function mh(e){const t=Ro(e),r=(await vl()).transaction(ln,"readwrite");await r.objectStore(ln).delete(t),await r.done}async function No(e,t){const n=Ro(e),i=(await vl()).transaction(ln,"readwrite"),o=i.objectStore(ln),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&hh(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e){let t;const n=await No(e.appConfig,r=>{const i=Py(r),o=Ry(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===ma?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Py(e){const t=e||{fid:_y(),registrationStatus:0};return gh(t)}function Ry(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(an.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ny(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ay(e)}:{installationEntry:t}}async function Ny(e,t){try{const n=await vy(e,t);return io(e.appConfig,n)}catch(n){throw oh(n)&&n.customData.serverCode===409?await mh(e.appConfig):await io(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ay(e){let t=await Ju(e.appConfig);for(;t.registrationStatus===1;)await dh(100),t=await Ju(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yl(e);return r||n}return t}function Ju(e){return No(e,t=>{if(!t)throw an.create("installation-not-found");return gh(t)})}function gh(e){return Oy(e)?{fid:e.fid,registrationStatus:0}:e}function Oy(e){return e.registrationStatus===1&&e.registrationTime+nh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy({appConfig:e,heartbeatServiceProvider:t},n){const r=Dy(e,n),i=py(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:rh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ch(()=>fetch(r,a));if(l.ok){const u=await l.json();return ah(u)}else throw await lh("Generate Auth Token",l)}function Dy(e,{fid:t}){return`${sh(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(e,t=!1){let n;const r=await No(e.appConfig,o=>{if(!vh(o))throw an.create("not-registered");const s=o.authToken;if(!t&&Uy(s))return o;if(s.requestStatus===1)return n=Ly(e,t),o;{if(!navigator.onLine)throw an.create("app-offline");const a=zy(o);return n=My(e,a),a}});return n?await n:r.authToken}async function Ly(e,t){let n=await Xu(e.appConfig);for(;n.authToken.requestStatus===1;)await dh(100),n=await Xu(e.appConfig);const r=n.authToken;return r.requestStatus===0?wl(e,t):r}function Xu(e){return No(e,t=>{if(!vh(t))throw an.create("not-registered");const n=t.authToken;return jy(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function My(e,t){try{const n=await xy(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await io(e.appConfig,r),n}catch(n){if(oh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await io(e.appConfig,r)}throw n}}function vh(e){return e!==void 0&&e.registrationStatus===2}function Uy(e){return e.requestStatus===2&&!Fy(e)}function Fy(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+cy}function zy(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jy(e){return e.requestStatus===1&&e.requestTime+nh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(e){const t=e,{installationEntry:n,registrationPromise:r}=await yl(t);return r?r.catch(console.error):wl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(e,t=!1){const n=e;return await by(n),(await wl(n,t)).token}async function by(e){const{registrationPromise:t}=await yl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(e){if(!e||!e.options)throw ps("App Configuration");if(!e.name)throw ps("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ps(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ps(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="installations",Hy="installations-internal",Wy=e=>{const t=e.getProvider("app").getImmediate(),n=Vy(t),r=Qn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ky=e=>{const t=e.getProvider("app").getImmediate(),n=Qn(t,yh).getImmediate();return{getId:()=>$y(n),getToken:i=>By(n,i)}};function Gy(){ft(new qe(yh,Wy,"PUBLIC")),ft(new qe(Hy,Ky,"PRIVATE"))}Gy();Ge(th,gl);Ge(th,gl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="analytics",Qy="firebase_id",qy="origin",Yy=60*1e3,Jy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_l="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Se=new hn("analytics","Analytics",Xy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(e){if(!e.startsWith(_l)){const t=Se.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function wh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function e0(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function t0(e,t){const n=e0("firebase-js-sdk-policy",{createScriptURL:Zy}),r=document.createElement("script"),i=`${_l}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function n0(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function r0(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await wh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ve.error(a)}e("config",i,o)}async function i0(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await wh(n);for(const l of s){const u=a.find(p=>p.measurementId===l),h=u&&t[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ve.error(o)}}function o0(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await i0(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await r0(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){ve.error(a)}}return i}function s0(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=o0(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function a0(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_l)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=30,u0=1e3;class c0{constructor(t={},n=u0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const _h=new c0;function d0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function f0(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:d0(r)},o=Jy.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function h0(e,t=_h,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Se.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Se.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new g0;return setTimeout(async()=>{a.abort()},Yy),Sh({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Sh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=_h){var o;const{appId:s,measurementId:a}=e;try{await p0(r,t)}catch(l){if(a)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await f0(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!m0(u)){if(i.deleteThrottleMetadata(s),a)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?bu(n,i.intervalMillis,l0):bu(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,p),ve.debug(`Calling attemptFetch again in ${h} millis`),Sh(e,p,r,i)}}function p0(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function m0(e){if(!(e instanceof Je)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class g0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function v0(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(){if(Kf())try{await Gf()}catch(e){return ve.warn(Se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function w0(e,t,n,r,i,o,s){var a;const l=h0(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>ve.error(v)),t.push(l);const u=y0().then(v=>{if(v)return r.getId()}),[h,p]=await Promise.all([l,u]);a0(o)||t0(o,h.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[qy]="firebase",m.update=!0,p!=null&&(m[Qy]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t){this.app=t}_delete(){return delete yr[this.app.options.appId],Promise.resolve()}}let yr={},Zu=[];const ec={};let ms="dataLayer",S0="gtag",tc,Eh,nc=!1;function E0(){const e=[];if(Wf()&&e.push("This is a browser extension environment."),Vg()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Se.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}function I0(e,t,n){E0();const r=e.options.appId;if(!r)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(yr[r]!=null)throw Se.create("already-exists",{id:r});if(!nc){n0(ms);const{wrappedGtag:o,gtagCore:s}=s0(yr,Zu,ec,ms,S0);Eh=o,tc=s,nc=!0}return yr[r]=w0(e,Zu,ec,t,tc,ms,n),new _0(e)}function k0(e=Xf()){e=bt(e);const t=Qn(e,oo);return t.isInitialized()?t.getImmediate():T0(e)}function T0(e,t={}){const n=Qn(e,oo);if(n.isInitialized()){const i=n.getImmediate();if(Fr(t,n.getOptions()))return i;throw Se.create("already-initialized")}return n.initialize({options:t})}function C0(e,t,n,r){e=bt(e),v0(Eh,yr[e.app.options.appId],t,n,r).catch(i=>ve.error(i))}const rc="@firebase/analytics",ic="0.10.8";function P0(){ft(new qe(oo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return I0(r,i,n)},"PUBLIC")),ft(new qe("analytics-internal",e,"PRIVATE")),Ge(rc,ic),Ge(rc,ic,"esm2017");function e(t){try{const n=t.getProvider(oo).getImmediate();return{logEvent:(r,i,o)=>C0(n,r,i,o)}}catch(n){throw Se.create("interop-component-reg-failed",{reason:n})}}}P0();function Sl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ih(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R0=Ih,kh=new hn("auth","Firebase",Ih());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new pl("@firebase/auth");function N0(e,...t){so.logLevel<=U.WARN&&so.warn(`Auth (${Kr}): ${e}`,...t)}function Ni(e,...t){so.logLevel<=U.ERROR&&so.error(`Auth (${Kr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw Il(e,...t)}function ze(e,...t){return Il(e,...t)}function El(e,t,n){const r=Object.assign(Object.assign({},R0()),{[t]:n});return new hn("auth","Firebase",r).create(t,{appName:e.name})}function Ut(e){return El(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ye(e,"argument-error"),El(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Il(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kh.create(e,...t)}function P(e,t,...n){if(!e)throw Il(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ni(t),new Error(t)}function ht(e,t){e||rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O0(){return oc()==="http:"||oc()==="https:"}function oc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O0()||Wf()||"connection"in navigator)?navigator.onLine:!0}function D0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=jg()||Bg()}get(){return x0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Gr(3e4,6e4);function Qr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pn(e,t,n,r,i={}){return Ch(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Wr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return $g()||(u.referrerPolicy="no-referrer"),Th.fetch()(Rh(e,e.config.apiHost,n,a),u)})}async function Ch(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L0),t);try{const i=new F0(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw gi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw gi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw gi(e,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw El(e,h,u);Ye(e,h)}}catch(i){if(i instanceof Je)throw i;Ye(e,"network-request-failed",{message:String(i)})}}async function Ph(e,t,n,r,i={}){const o=await pn(e,t,n,r,i);return"mfaPendingCredential"in o&&Ye(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Rh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kl(e.config,i):`${e.config.apiScheme}://${i}`}function U0(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),M0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ze(e,t,r);return i.customData._tokenResponse=n,i}function sc(e){return e!==void 0&&e.enterprise!==void 0}class z0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return U0(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function j0(e,t){return pn(e,"GET","/v2/recaptchaConfig",Qr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(e,t){return pn(e,"POST","/v1/accounts:delete",t)}async function Nh(e,t){return pn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function B0(e,t=!1){const n=bt(e),r=await n.getIdToken(t),i=Tl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:wr(gs(i.auth_time)),issuedAtTime:wr(gs(i.iat)),expirationTime:wr(gs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function gs(e){return Number(e)*1e3}function Tl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ni("JWT malformed, contained fewer than 3 sections"),null;try{const i=bf(n);return i?JSON.parse(i):(Ni("Failed to decode base64 JWT payload"),null)}catch(i){return Ni("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ac(e){const t=Tl(e);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Je&&b0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function b0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e){var t;const n=e.auth,r=await e.getIdToken(),i=await jr(e,Nh(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ah(o.providerUserInfo):[],a=W0(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new va(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function H0(e){const t=bt(e);await ao(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function W0(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ah(e){return e.map(t=>{var{providerId:n}=t,r=Sl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(e,t){const n=await Ch(e,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Rh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Th.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G0(e,t){return pn(e,"POST","/v2/accounts:revokeToken",Qr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ac(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){P(t.length!==0,"internal-error");const n=ac(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await K0(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Mn;return r&&(P(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){P(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class it{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Sl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new va(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await jr(this,this.stsTokenManager.getToken(this.auth,t));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return B0(this,t)}reload(){return H0(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(Ut(this.auth));const t=await this.getIdToken();return await jr(this,$0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:g,isAnonymous:S,providerData:k,stsTokenManager:T}=n;P(f&&T,t,"internal-error");const C=Mn.fromJSON(this.name,T);P(typeof f=="string",t,"internal-error"),gt(p,t.name),gt(m,t.name),P(typeof g=="boolean",t,"internal-error"),P(typeof S=="boolean",t,"internal-error"),gt(v,t.name),gt(w,t.name),gt(_,t.name),gt(M,t.name),gt(d,t.name),gt(c,t.name);const z=new it({uid:f,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:C,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&(z.providerData=k.map(A=>Object.assign({},A))),M&&(z._redirectEventId=M),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Mn;i.updateFromServerResponse(n);const o=new it({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ao(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ah(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Mn;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new va(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map;function ot(e){ht(e instanceof Function,"Expected a class definition");let t=lc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Oh.type="NONE";const uc=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t,n){return`firebase:${e}:${t}:${n}`}class Un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ai("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Un(ot(uc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||ot(uc);const s=Ai(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const p=it._fromJSON(t,h);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Un(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Un(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fh(t))return"Blackberry";if(zh(t))return"Webos";if(Dh(t))return"Safari";if((t.includes("chrome/")||Lh(t))&&!t.includes("edge/"))return"Chrome";if(Uh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xh(e=ue()){return/firefox\//i.test(e)}function Dh(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lh(e=ue()){return/crios\//i.test(e)}function Mh(e=ue()){return/iemobile/i.test(e)}function Uh(e=ue()){return/android/i.test(e)}function Fh(e=ue()){return/blackberry/i.test(e)}function zh(e=ue()){return/webos/i.test(e)}function Cl(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Q0(e=ue()){var t;return Cl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function q0(){return bg()&&document.documentMode===10}function jh(e=ue()){return Cl(e)||Uh(e)||zh(e)||Fh(e)||/windows phone/i.test(e)||Mh(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(e,t=[]){let n;switch(e){case"Browser":n=cc(ue());break;case"Worker":n=`${cc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(e,t={}){return pn(e,"GET","/v2/passwordPolicy",Qr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=6;class Z0{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:X0,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new Y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Nh(this,{idToken:t}),r=await it._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(He(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ao(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(He(this.app))return Promise.reject(Ut(this));const n=t?bt(t):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return He(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await J0(this),n=new Z0(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new hn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await G0(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&N0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mn(e){return bt(e)}class dc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Qg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tw(e){Ao=e}function Bh(e){return Ao.loadJS(e)}function nw(){return Ao.recaptchaEnterpriseScript}function rw(){return Ao.gapiScript}function iw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ow="recaptcha-enterprise",sw="NO_RECAPTCHA";class aw{constructor(t){this.type=ow,this.auth=mn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{j0(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new z0(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;sc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(sw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&sc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nw();l.length!==0&&(l+=a),Bh(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function fc(e,t,n,r=!1){const i=new aw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function lw(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await fc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await fc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(e,t){const n=Qn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Fr(o,t??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:t})}function cw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function dw(e,t,n){const r=mn(e);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=bh(t),{host:s,port:a}=fw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),hw()}function bh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function fw(e){const t=bh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:hc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:hc(s)}}}function hc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function hw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t){return Ph(e,"POST","/v1/accounts:signInWithIdp",Qr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="http://localhost";class un extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Sl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new un(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fn(t,n)}buildRequest(){const t={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends qr{constructor(){super("facebook.com")}static credential(t){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return un._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return et.credentialFromTaggedObject(t)}static credentialFromError(t){return et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends qr{constructor(){super("github.com")}static credential(t){return un._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends qr{constructor(){super("twitter.com")}static credential(t,n){return un._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(e,t){return Ph(e,"POST","/v1/accounts:signUp",Qr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await it._fromIdTokenResponse(t,r,i),s=pc(r);return new cn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=pc(r);return new cn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function pc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Je{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new lo(t,n,r,i)}}function Hh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(e,o,t,r):o})}async function gw(e,t,n=!1){const r=await jr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(e,t,n=!1){const{auth:r}=e;if(He(r.app))return Promise.reject(Ut(r));const i="reauthenticate";try{const o=await jr(e,Hh(r,i,t,e),n);P(o.idToken,r,"internal-error");const s=Tl(o.idToken);P(s,r,"internal-error");const{sub:a}=s;return P(e.uid===a,r,"user-mismatch"),cn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(e,t,n=!1){if(He(e.app))return Promise.reject(Ut(e));const r="signIn",i=await Hh(e,r,t),o=await cn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(e){const t=mn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function _w(e,t,n){if(He(e.app))return Promise.reject(Ut(e));const r=mn(e),s=await lw(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ww(e),l}),a=await cn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Sw(e,t,n,r){return bt(e).onIdTokenChanged(t,n,r)}function Ew(e,t,n){return bt(e).beforeAuthStateChanged(t,n)}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=1e3,kw=10;class Kh extends Wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);q0()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Kh.type="LOCAL";const Tw=Kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Gh.type="SESSION";const Qh=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Oo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Cw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Rl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Rw(e){Qe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function Nw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Aw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ow(){return qh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="firebaseLocalStorageDb",xw=1,co="firebaseLocalStorage",Jh="fbase_key";class Yr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xo(e,t){return e.transaction([co],t?"readwrite":"readonly").objectStore(co)}function Dw(){const e=indexedDB.deleteDatabase(Yh);return new Yr(e).toPromise()}function ya(){const e=indexedDB.open(Yh,xw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(co,{keyPath:Jh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(co)?t(r):(r.close(),await Dw(),t(await ya()))})})}async function mc(e,t,n){const r=xo(e,!0).put({[Jh]:t,value:n});return new Yr(r).toPromise()}async function Lw(e,t){const n=xo(e,!1).get(t),r=await new Yr(n).toPromise();return r===void 0?null:r.value}function gc(e,t){const n=xo(e,!0).delete(t);return new Yr(n).toPromise()}const Mw=800,Uw=3;class Xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ya(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Uw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Nw(),!this.activeServiceWorker)return;this.sender=new Pw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ya();return await mc(t,uo,"1"),await gc(t,uo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Lw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=xo(i,!1).getAll();return new Yr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xh.type="LOCAL";const Fw=Xh;new Gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e,t){return t?ot(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Vh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function zw(e){return yw(e.auth,new Nl(e),e.bypassAuthState)}function jw(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),vw(n,new Nl(e),e.bypassAuthState)}async function $w(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),gw(n,new Nl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return zw;case"linkViaPopup":case"linkViaRedirect":return $w;case"reauthViaPopup":case"reauthViaRedirect":return jw;default:Ye(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new Gr(2e3,1e4);async function bw(e,t,n){if(He(e.app))return Promise.reject(ze(e,"operation-not-supported-in-this-environment"));const r=mn(e);A0(e,t,Pl);const i=Zh(r,n);return new Xt(r,"signInViaPopup",t,i).executeNotNull()}class Xt extends ep{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return P(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bw.get())};t()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="pendingRedirect",Oi=new Map;class Hw extends ep{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Oi.get(this.auth._key());if(!t){try{const r=await Ww(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Oi.set(this.auth._key(),t)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ww(e,t){const n=Qw(t),r=Gw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Kw(e,t){Oi.set(e._key(),t)}function Gw(e){return ot(e._redirectPersistence)}function Qw(e){return Ai(Vw,e.config.apiKey,e.name)}async function qw(e,t,n=!1){if(He(e.app))return Promise.reject(Ut(e));const r=mn(e),i=Zh(r,t),s=await new Hw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=10*60*1e3;class Jw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(vc(t))}saveEventToCache(t){this.cachedEventUids.add(vc(t)),this.lastProcessedEventTime=Date.now()}}function vc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Xw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t={}){return pn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t_=/^https?/;async function n_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zw(e);for(const n of t)try{if(r_(n))return}catch{}Ye(e,"unauthorized-domain")}function r_(e){const t=ga(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!t_.test(n))return!1;if(e_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Gr(3e4,6e4);function yc(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function o_(e){return new Promise((t,n)=>{var r,i,o;function s(){yc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yc(),n(ze(e,"network-request-failed"))},timeout:i_.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=iw("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(ze(e,"network-request-failed"))},Bh(`${rw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw xi=null,t})}let xi=null;function s_(e){return xi=xi||o_(e),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Gr(5e3,15e3),l_="__/auth/iframe",u_="emulator/auth/iframe",c_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f_(e){const t=e.config;P(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kl(t,u_):`https://${e.config.authDomain}/${l_}`,r={apiKey:t.apiKey,appName:e.name,v:Kr},i=d_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Wr(r).slice(1)}`}async function h_(e){const t=await s_(e),n=Qe().gapi;return P(n,e,"internal-error"),t.open({where:document.body,url:f_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ze(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},a_.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m_=500,g_=600,v_="_blank",y_="http://localhost";class wc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w_(e,t,n,r=m_,i=g_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},p_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=Lh(u)?v_:n),xh(u)&&(t=t||y_,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(Q0(u)&&a!=="_self")return __(t||"",a),new wc(null);const p=window.open(t||"",a,h);P(p,e,"popup-blocked");try{p.focus()}catch{}return new wc(p)}function __(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="__/auth/handler",E_="emulator/auth/handler",I_=encodeURIComponent("fac");async function _c(e,t,n,r,i,o){P(e.config.authDomain,e,"auth-domain-config-required"),P(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(t instanceof Pl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Gg(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(t instanceof qr){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),u=l?`#${I_}=${encodeURIComponent(l)}`:"";return`${k_(e)}?${Wr(a).slice(1)}${u}`}function k_({config:e}){return e.emulator?kl(e,E_):`https://${e.authDomain}/${S_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="webStorageSupport";class T_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qh,this._completeRedirectFn=qw,this._overrideRedirectResult=Kw}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await _c(t,n,r,ga(),i);return w_(t,s,Rl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await _c(t,n,r,ga(),i);return Rw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await h_(t),r=new Jw(t);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(vs,{type:vs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[vs];s!==void 0&&n(!!s),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return jh()||Dh()||Cl()}}const C_=T_;var Sc="@firebase/auth",Ec="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N_(e){ft(new qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$h(e)},u=new ew(r,i,o,l);return cw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new qe("auth-internal",t=>{const n=mn(t.getProvider("auth").getImmediate());return(r=>new P_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Sc,Ec,R_(e)),Ge(Sc,Ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=5*60,O_=Hf("authIdTokenMaxAge")||A_;let Ic=null;const x_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>O_)return;const i=n==null?void 0:n.token;Ic!==i&&(Ic=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D_(e=Xf()){const t=Qn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=uw(e,{popupRedirectResolver:C_,persistence:[Fw,Tw,Qh]}),r=Hf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=x_(o.toString());Ew(n,s,()=>s(n.currentUser)),Sw(n,a=>s(a))}}const i=Fg("auth");return i&&dw(n,`http://${i}`),n}function L_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}tw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ze("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",L_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N_("Browser");const M_={apiKey:"AIzaSyBVaQmk2wiD-tFjp_gvjgBim5Dq2KCrAVw",authDomain:"flux-1ff34.firebaseapp.com",projectId:"flux-1ff34",storageBucket:"flux-1ff34.firebasestorage.app",messagingSenderId:"587303039653",appId:"1:587303039653:web:52d7ffc7a730529f2d534c",measurementId:"G-DZJ0Z9YT18"},np=Jf(M_);k0(np);const kc=D_(np),U_=new et;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),j_=(e,t)=>{const n=Ve.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},h)=>Ve.createElement("svg",{ref:h,...F_,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${z_(e)}`,a].join(" "),...u},[...t.map(([p,m])=>Ve.createElement(p,m)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=j_("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function B_(){const[e,t]=Ve.useState(""),[n,r]=Ve.useState(""),[i,o]=Ve.useState(""),[s,a]=Ve.useState(""),l=async h=>{h.preventDefault();try{await _w(kc,e,n)}catch(p){a("Failed to create account"),console.error(p)}},u=async()=>{try{await bw(kc,U_)}catch(h){a("Failed to sign up with Google"),console.error(h)}};return D.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#4318FF] to-[#9747FF] flex",children:[D.jsxs("div",{className:"hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-white p-12",children:[D.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[D.jsx($_,{className:"w-12 h-12"}),D.jsx("h1",{className:"text-6xl font-bold",children:"Flux"})]}),D.jsx("p",{className:"text-xl text-center max-w-md",children:"Chat rebuilt for the people. Customize everything. No nonsense. Just real connection."})]}),D.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-8",children:D.jsxs("div",{className:"bg-[#1A1B1F] p-8 rounded-2xl w-full max-w-md",children:[D.jsx("h2",{className:"text-3xl font-bold text-white mb-8",children:"Sign Up"}),D.jsxs("form",{onSubmit:l,className:"space-y-6",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-white mb-2",children:"Username"}),D.jsx("input",{type:"text",value:i,onChange:h=>o(h.target.value),className:"w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500",placeholder:"Enter your username"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-white mb-2",children:"Email"}),D.jsx("input",{type:"email",value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500",placeholder:"Enter your email"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-white mb-2",children:"Password"}),D.jsx("input",{type:"password",value:n,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500",placeholder:"Create a password"})]}),s&&D.jsx("p",{className:"text-red-500 text-sm",children:s}),D.jsx("button",{type:"submit",className:"w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors",children:"Sign Up"})]}),D.jsx("div",{className:"mt-6 text-center",children:D.jsxs("p",{className:"text-gray-400",children:["Already have an account?",D.jsx("a",{href:"#",className:"text-purple-500 hover:text-purple-400 ml-1",children:"Sign In"})]})}),D.jsx("div",{className:"mt-6",children:D.jsxs("button",{onClick:u,className:"w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:[D.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"}),"Sign up with Google"]})})]})})]})}zf(document.getElementById("root")).render(D.jsx(Ve.StrictMode,{children:D.jsx(B_,{})}));
//# sourceMappingURL=index-BwwI9jv9.js.map
