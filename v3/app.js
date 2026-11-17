var Z_=Object.defineProperty;var Q_=(t,e,n)=>e in t?Z_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>Q_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Ng={exports:{}},dc={},Fg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),J_=Symbol.for("react.portal"),ex=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),nx=Symbol.for("react.profiler"),ix=Symbol.for("react.provider"),rx=Symbol.for("react.context"),sx=Symbol.for("react.forward_ref"),ox=Symbol.for("react.suspense"),ax=Symbol.for("react.memo"),lx=Symbol.for("react.lazy"),ip=Symbol.iterator;function cx(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,Bg={};function to(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||kg}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=to.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||kg}var Ld=Pd.prototype=new zg;Ld.constructor=Pd;Og(Ld,to.prototype);Ld.isPureReactComponent=!0;var rp=Array.isArray,Hg=Object.prototype.hasOwnProperty,Dd={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hg.call(e,i)&&!Vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:Dd.current}}function ux(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function fx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sp=/\/+/g;function Uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fx(""+t.key):e.toString(36)}function fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case J_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uc(o,0):i,rp(r)?(n="",t!=null&&(n=t.replace(sp,"$&/")+"/"),fl(r,e,n,"",function(c){return c})):r!=null&&(Id(r)&&(r=ux(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uc(s,a);o+=fl(s,e,n,l,r)}else if(l=cx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uc(s,a++),o+=fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},dl={transition:null},hx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Dd};function Wg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=to;He.Fragment=ex;He.Profiler=nx;He.PureComponent=Pd;He.StrictMode=tx;He.Suspense=ox;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hx;He.act=Wg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hg.call(e,l)&&!Vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:rx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ix,_context:t},t.Consumer=t};He.createElement=Gg;He.createFactory=function(t){var e=Gg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:sx,render:t}};He.isValidElement=Id;He.lazy=function(t){return{$$typeof:lx,_payload:{_status:-1,_result:t},_init:dx}};He.memo=function(t,e){return{$$typeof:ax,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};He.unstable_act=Wg;He.useCallback=function(t,e){return nn.current.useCallback(t,e)};He.useContext=function(t){return nn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};He.useEffect=function(t,e){return nn.current.useEffect(t,e)};He.useId=function(){return nn.current.useId()};He.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return nn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};He.useRef=function(t){return nn.current.useRef(t)};He.useState=function(t){return nn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return nn.current.useTransition()};He.version="18.3.1";Fg.exports=He;var et=Fg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=et,mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),vx=Object.prototype.hasOwnProperty,_x=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vx.call(e,i)&&!xx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mx,type:t,key:s,ref:o,props:r,_owner:_x.current}}dc.Fragment=gx;dc.jsx=Xg;dc.jsxs=Xg;Ng.exports=dc;var j=Ng.exports,jg={exports:{}},Sn={},$g={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var Z=L.length;L.push($);e:for(;0<Z;){var oe=Z-1>>>1,we=L[oe];if(0<r(we,$))L[oe]=$,L[Z]=we,Z=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],Z=L.pop();if(Z!==$){L[0]=Z;e:for(var oe=0,we=L.length,Ke=we>>>1;oe<Ke;){var Y=2*(oe+1)-1,ne=L[Y],ge=Y+1,ae=L[ge];if(0>r(ne,Z))ge<we&&0>r(ae,ne)?(L[oe]=ae,L[ge]=Z,oe=ge):(L[oe]=ne,L[Y]=Z,oe=Y);else if(ge<we&&0>r(ae,Z))L[oe]=ae,L[ge]=Z,oe=ge;else break e}}return $}function r(L,$){var Z=L.sortIndex-$.sortIndex;return Z!==0?Z:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=L)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function x(L){if(_=!1,y(L),!g)if(n(l)!==null)g=!0,W(b);else{var $=n(c);$!==null&&q(x,$.startTime-L)}}function b(L,$){g=!1,_&&(_=!1,u(C),C=-1),p=!0;var Z=d;try{for(y($),f=n(l);f!==null&&(!(f.expirationTime>$)||L&&!R());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var we=oe(f.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),y($)}else i(l);f=n(l)}if(f!==null)var Ke=!0;else{var Y=n(c);Y!==null&&q(x,Y.startTime-$),Ke=!1}return Ke}finally{f=null,d=Z,p=!1}}var w=!1,T=null,C=-1,S=5,M=-1;function R(){return!(t.unstable_now()-M<S)}function D(){if(T!==null){var L=t.unstable_now();M=L;var $=!0;try{$=T(!0,L)}finally{$?I():(w=!1,T=null)}}else w=!1}var I;if(typeof v=="function")I=function(){v(D)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,H=B.port2;B.port1.onmessage=D,I=function(){H.postMessage(null)}}else I=function(){m(D,0)};function W(L){T=L,w||(w=!0,I())}function q(L,$){C=m(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Z=d;d=$;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return $()}finally{d=Z}},t.unstable_scheduleCallback=function(L,$,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Z+we,L={id:h++,callback:$,priorityLevel:L,startTime:Z,expirationTime:we,sortIndex:-1},Z>oe?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(_?(u(C),C=-1):_=!0,q(x,Z-oe))):(L.sortIndex=we,e(l,L),g||p||(g=!0,W(b))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var $=d;return function(){var Z=d;d=$;try{return L.apply(this,arguments)}finally{d=Z}}}})(Yg);$g.exports=Yg;var yx=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=et,Mn=yx;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,qo={};function $r(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(qo[t]=e,t=0;t<e.length;t++)qg.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,Sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},ap={};function Ex(t){return Gu.call(ap,t)?!0:Gu.call(op,t)?!1:Sx.test(t)?ap[t]=!0:(op[t]=!0,!1)}function wx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tx(t,e,n,i){if(e===null||typeof e>"u"||wx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,Nd);Ft[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,Nd);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,Nd);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tx(e,n,r,i)&&(n=null),i||r===null?Ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),lp=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Nc;function Ro(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Fc=!1;function kc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function Ax(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function $u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Wu:return"Profiler";case kd:return"StrictMode";case Xu:return"Suspense";case ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zg:return(t.displayName||"Context")+".Consumer";case Kg:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bd:return e=t.displayName||null,e!==null?e:$u(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return $u(t(e))}catch{}}return null}function Cx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $u(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rx(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Rx(t))}function e0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t0(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function qu(t,e){t0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(bo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function n0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,r0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){bx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function s0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function o0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=s0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Px=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(Px[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nf=null,bs=null,Ps=null;function hp(t){if(t=va(t)){if(typeof nf!="function")throw Error(te(280));var e=t.stateNode;e&&(e=vc(e),nf(t.stateNode,t.type,e))}}function a0(t){bs?Ps?Ps.push(t):Ps=[t]:bs=t}function l0(){if(bs){var t=bs,e=Ps;if(Ps=bs=null,hp(t),e)for(t=0;t<e.length;t++)hp(e[t])}}function c0(t,e){return t(e)}function u0(){}var Oc=!1;function f0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return c0(t,e,n)}finally{Oc=!1,(bs!==null||Ps!==null)&&(u0(),l0())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var i=vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var rf=!1;if(Ti)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{rf=!1}function Lx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ko=!1,Il=null,Ul=!1,sf=null,Dx={onError:function(t){ko=!0,Il=t}};function Ix(t,e,n,i,r,s,o,a,l){ko=!1,Il=null,Lx.apply(Dx,arguments)}function Ux(t,e,n,i,r,s,o,a,l){if(Ix.apply(this,arguments),ko){if(ko){var c=Il;ko=!1,Il=null}else throw Error(te(198));Ul||(Ul=!0,sf=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pp(t){if(Yr(t)!==t)throw Error(te(188))}function Nx(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pp(r),t;if(s===i)return pp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function h0(t){return t=Nx(t),t!==null?p0(t):null}function p0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p0(t);if(e!==null)return e;t=t.sibling}return null}var m0=Mn.unstable_scheduleCallback,mp=Mn.unstable_cancelCallback,Fx=Mn.unstable_shouldYield,kx=Mn.unstable_requestPaint,Et=Mn.unstable_now,Ox=Mn.unstable_getCurrentPriorityLevel,Hd=Mn.unstable_ImmediatePriority,g0=Mn.unstable_UserBlockingPriority,Nl=Mn.unstable_NormalPriority,Bx=Mn.unstable_LowPriority,v0=Mn.unstable_IdlePriority,hc=null,si=null;function zx(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Gx,Hx=Math.log,Vx=Math.LN2;function Gx(t){return t>>>=0,t===0?32:31-(Hx(t)/Vx|0)|0}var Pa=64,La=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Po(a):(s&=o,s!==0&&(i=Po(s)))}else o=n&~r,o!==0?i=Po(o):s!==0&&(i=Po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Wx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Wx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _0(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function jx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function x0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,Gd,M0,S0,E0,af=!1,Da=[],Ki=null,Zi=null,Qi=null,Qo=new Map,Jo=new Map,Wi=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yx(t,e,n,i,r){switch(e){case"focusin":return Ki=ho(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=ho(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=ho(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qo.set(s,ho(Qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,ho(Jo.get(s)||null,t,e,n,i,r)),!0}return!1}function w0(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=d0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){M0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);tf=i,n.target.dispatchEvent(i),tf=null}else return e=va(n),e!==null&&Gd(e),t.blockedOn=n,!1;e.shift()}return!0}function vp(t,e,n){hl(t)&&n.delete(e)}function qx(){af=!1,Ki!==null&&hl(Ki)&&(Ki=null),Zi!==null&&hl(Zi)&&(Zi=null),Qi!==null&&hl(Qi)&&(Qi=null),Qo.forEach(vp),Jo.forEach(vp)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,af||(af=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,qx)))}function ea(t){function e(r){return po(r,t)}if(0<Da.length){po(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&po(Ki,t),Zi!==null&&po(Zi,t),Qi!==null&&po(Qi,t),Qo.forEach(e),Jo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)w0(n),n.blockedOn===null&&Wi.shift()}var Ls=Pi.ReactCurrentBatchConfig,kl=!0;function Kx(t,e,n,i){var r=nt,s=Ls.transition;Ls.transition=null;try{nt=1,Wd(t,e,n,i)}finally{nt=r,Ls.transition=s}}function Zx(t,e,n,i){var r=nt,s=Ls.transition;Ls.transition=null;try{nt=4,Wd(t,e,n,i)}finally{nt=r,Ls.transition=s}}function Wd(t,e,n,i){if(kl){var r=lf(t,e,n,i);if(r===null)qc(t,e,i,Ol,n),gp(t,i);else if(Yx(r,t,e,n,i))i.stopPropagation();else if(gp(t,i),e&4&&-1<$x.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&y0(s),s=lf(t,e,n,i),s===null&&qc(t,e,i,Ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Ol=null;function lf(t,e,n,i){if(Ol=null,t=zd(i),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function T0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ox()){case Hd:return 1;case g0:return 4;case Nl:case Bx:return 16;case v0:return 536870912;default:return 16}default:return 16}}var $i=null,Xd=null,pl=null;function A0(){if(pl)return pl;var t,e=Xd,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function _p(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:_p,this.isPropagationStopped=_p,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=En(no),ga=xt({},no,{view:0,detail:0}),Qx=En(ga),zc,Hc,mo,pc=xt({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(zc=t.screenX-mo.screenX,Hc=t.screenY-mo.screenY):Hc=zc=0,mo=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),xp=En(pc),Jx=xt({},pc,{dataTransfer:0}),ey=En(Jx),ty=xt({},ga,{relatedTarget:0}),Vc=En(ty),ny=xt({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=En(ny),ry=xt({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sy=En(ry),oy=xt({},no,{data:0}),yp=En(oy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function $d(){return uy}var fy=xt({},ga,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ly[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dy=En(fy),hy=xt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=En(hy),py=xt({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),my=En(py),gy=xt({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),vy=En(gy),_y=xt({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=En(_y),yy=[9,13,27,32],Yd=Ti&&"CompositionEvent"in window,Oo=null;Ti&&"documentMode"in document&&(Oo=document.documentMode);var My=Ti&&"TextEvent"in window&&!Oo,C0=Ti&&(!Yd||Oo&&8<Oo&&11>=Oo),Sp=" ",Ep=!1;function R0(t,e){switch(t){case"keyup":return yy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function Sy(t,e){switch(t){case"compositionend":return b0(e);case"keypress":return e.which!==32?null:(Ep=!0,Sp);case"textInput":return t=e.data,t===Sp&&Ep?null:t;default:return null}}function Ey(t,e){if(vs)return t==="compositionend"||!Yd&&R0(t,e)?(t=A0(),pl=Xd=$i=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function P0(t,e,n,i){a0(i),e=Bl(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bo=null,ta=null;function Ty(t){H0(t,0)}function mc(t){var e=ys(t);if(e0(e))return t}function Ay(t,e){if(t==="change")return e}var L0=!1;if(Ti){var Gc;if(Ti){var Wc="oninput"in document;if(!Wc){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),Wc=typeof Tp.oninput=="function"}Gc=Wc}else Gc=!1;L0=Gc&&(!document.documentMode||9<document.documentMode)}function Ap(){Bo&&(Bo.detachEvent("onpropertychange",D0),ta=Bo=null)}function D0(t){if(t.propertyName==="value"&&mc(ta)){var e=[];P0(e,ta,t,zd(t)),f0(Ty,e)}}function Cy(t,e,n){t==="focusin"?(Ap(),Bo=e,ta=n,Bo.attachEvent("onpropertychange",D0)):t==="focusout"&&Ap()}function Ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(ta)}function by(t,e){if(t==="click")return mc(e)}function Py(t,e){if(t==="input"||t==="change")return mc(e)}function Ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:Ly;function na(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=Cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cp(n)}}function I0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U0(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dy(t){var e=U0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(i!==null&&qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rp(n,s);var o=Rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Iy=Ti&&"documentMode"in document&&11>=document.documentMode,_s=null,cf=null,zo=null,uf=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||_s==null||_s!==Dl(i)||(i=_s,"selectionStart"in i&&qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zo&&na(zo,i)||(zo=i,i=Bl(cf,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Xc={},N0={};Ti&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function gc(t){if(Xc[t])return Xc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N0)return Xc[t]=e[n];return t}var F0=gc("animationend"),k0=gc("animationiteration"),O0=gc("animationstart"),B0=gc("transitionend"),z0=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){z0.set(t,e),$r(e,[t])}for(var jc=0;jc<Pp.length;jc++){var $c=Pp[jc],Uy=$c.toLowerCase(),Ny=$c[0].toUpperCase()+$c.slice(1);ur(Uy,"on"+Ny)}ur(F0,"onAnimationEnd");ur(k0,"onAnimationIteration");ur(O0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(B0,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ux(i,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Lp(r,a,c),s=l}}}if(Ul)throw t=sf,Ul=!1,sf=null,t}function dt(t,e){var n=e[mf];n===void 0&&(n=e[mf]=new Set);var i=t+"__bubble";n.has(i)||(V0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),V0(n,t,i,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Na]){t[Na]=!0,qg.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,Yc("selectionchange",!1,e))}}function V0(t,e,n,i){switch(T0(e)){case 1:var r=Kx;break;case 4:r=Zx;break;default:r=Wd}n=r.bind(null,e,n,t),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}f0(function(){var c=s,h=zd(n),f=[];e:{var d=z0.get(t);if(d!==void 0){var p=jd,g=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=dy;break;case"focusin":g="focus",p=Vc;break;case"focusout":g="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=my;break;case F0:case k0:case O0:p=iy;break;case B0:p=vy;break;case"scroll":p=Qx;break;case"wheel":p=xy;break;case"copy":case"cut":case"paste":p=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,u!==null&&(x=Zo(v,u),x!=null&&_.push(ra(v,x,y)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,n,h),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==tf&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ai]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Pr(g):null,g!==null&&(m=Yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=xp,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Mp,x="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?d:ys(p),y=g==null?d:ys(g),d=new _(x,v+"leave",p,n,h),d.target=m,d.relatedTarget=y,x=null,Pr(h)===c&&(_=new _(u,v+"enter",g,n,h),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,u=g,v=0,y=_;y;y=Zr(y))v++;for(y=0,x=u;x;x=Zr(x))y++;for(;0<v-y;)_=Zr(_),v--;for(;0<y-v;)u=Zr(u),y--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Zr(_),u=Zr(u)}_=null}else _=null;p!==null&&Dp(f,d,p,_,!1),g!==null&&m!==null&&Dp(f,m,g,_,!0)}}e:{if(d=c?ys(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=Ay;else if(wp(d))if(L0)b=Py;else{b=Ry;var w=Cy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=by);if(b&&(b=b(t,c))){P0(f,b,n,h);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Ku(d,"number",d.value)}switch(w=c?ys(c):window,t){case"focusin":(wp(w)||w.contentEditable==="true")&&(_s=w,cf=c,zo=null);break;case"focusout":zo=cf=_s=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,bp(f,n,h);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":bp(f,n,h)}var T;if(Yd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else vs?R0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(C0&&n.locale!=="ko"&&(vs||C!=="onCompositionStart"?C==="onCompositionEnd"&&vs&&(T=A0()):($i=h,Xd="value"in $i?$i.value:$i.textContent,vs=!0)),w=Bl(c,C),0<w.length&&(C=new yp(C,t,null,n,h),f.push({event:C,listeners:w}),T?C.data=T:(T=b0(n),T!==null&&(C.data=T)))),(T=My?Sy(t,n):Ey(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(h=new yp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}H0(f,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zo(t,n),s!=null&&i.unshift(ra(t,s,r)),s=Zo(t,e),s!=null&&i.push(ra(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Zo(n,s),l!=null&&o.unshift(ra(n,l,a))):r||(l=Zo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ky=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Oy,"")}function Fa(t,e,n){if(e=Ip(e),Ip(t)!==e&&n)throw Error(te(425))}function zl(){}var ff=null,df=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(Hy)}:pf;function Hy(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ea(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),ni="__reactFiber$"+io,sa="__reactProps$"+io,Ai="__reactContainer$"+io,mf="__reactEvents$"+io,Vy="__reactListeners$"+io,Gy="__reactHandles$"+io;function Pr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Np(t);t!==null;){if(n=t[ni])return n;t=Np(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[ni]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function vc(t){return t[sa]||null}var gf=[],Ms=-1;function fr(t){return{current:t}}function ht(t){0>Ms||(t.current=gf[Ms],gf[Ms]=null,Ms--)}function lt(t,e){Ms++,gf[Ms]=t.current,t.current=e}var ar={},$t=fr(ar),un=fr(!1),zr=ar;function zs(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Hl(){ht(un),ht($t)}function Fp(t,e,n){if($t.current!==ar)throw Error(te(168));lt($t,e),lt(un,n)}function G0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Cx(t)||"Unknown",r));return xt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,zr=$t.current,lt($t,t),lt(un,un.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=G0(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,ht(un),ht($t),lt($t,t)):ht(un),lt(un,n)}var _i=null,_c=!1,Zc=!1;function W0(t){_i===null?_i=[t]:_i.push(t)}function Wy(t){_c=!0,W0(t)}function dr(){if(!Zc&&_i!==null){Zc=!0;var t=0,e=nt;try{var n=_i;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,_c=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),m0(Hd,dr),r}finally{nt=e,Zc=!1}}return null}var Ss=[],Es=0,Gl=null,Wl=0,bn=[],Pn=0,Hr=null,xi=1,yi="";function Sr(t,e){Ss[Es++]=Wl,Ss[Es++]=Gl,Gl=t,Wl=e}function X0(t,e,n){bn[Pn++]=xi,bn[Pn++]=yi,bn[Pn++]=Hr,Hr=t;var i=xi;t=yi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-qn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function Kd(t){t.return!==null&&(Sr(t,1),X0(t,1,0))}function Zd(t){for(;t===Gl;)Gl=Ss[--Es],Ss[Es]=null,Wl=Ss[--Es],Ss[Es]=null;for(;t===Hr;)Hr=bn[--Pn],bn[Pn]=null,yi=bn[--Pn],bn[Pn]=null,xi=bn[--Pn],bn[Pn]=null}var yn=null,_n=null,pt=!1,Wn=null;function j0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(pt){var e=_n;if(e){var n=e;if(!Op(t,e)){if(vf(t))throw Error(te(418));e=Ji(n.nextSibling);var i=yn;e&&Op(t,e)?j0(i,n):(t.flags=t.flags&-4097|2,pt=!1,yn=t)}}else{if(vf(t))throw Error(te(418));t.flags=t.flags&-4097|2,pt=!1,yn=t}}}function Bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function ka(t){if(t!==yn)return!1;if(!pt)return Bp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=_n)){if(vf(t))throw $0(),Error(te(418));for(;e;)j0(t,e),e=Ji(e.nextSibling)}if(Bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?Ji(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=_n;t;)t=Ji(t.nextSibling)}function Hs(){_n=yn=null,pt=!1}function Qd(t){Wn===null?Wn=[t]:Wn.push(t)}var Xy=Pi.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zp(t){var e=t._init;return e(t._payload)}function Y0(t){function e(u,v){if(t){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ir(u,v),u.index=0,u.sibling=null,u}function s(u,v,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,y,x){return v===null||v.tag!==6?(v=ru(y,u.mode,x),v.return=u,v):(v=r(v,y),v.return=u,v)}function l(u,v,y,x){var b=y.type;return b===gs?h(u,v,y.props.children,x,y.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hi&&zp(b)===v.type)?(x=r(v,y.props),x.ref=go(u,v,y),x.return=u,x):(x=Sl(y.type,y.key,y.props,null,u.mode,x),x.ref=go(u,v,y),x.return=u,x)}function c(u,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=su(y,u.mode,x),v.return=u,v):(v=r(v,y.children||[]),v.return=u,v)}function h(u,v,y,x,b){return v===null||v.tag!==7?(v=Or(y,u.mode,x,b),v.return=u,v):(v=r(v,y),v.return=u,v)}function f(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ru(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return y=Sl(v.type,v.key,v.props,null,u.mode,y),y.ref=go(u,null,v),y.return=u,y;case ms:return v=su(v,u.mode,y),v.return=u,v;case Hi:var x=v._init;return f(u,x(v._payload),y)}if(bo(v)||uo(v))return v=Or(v,u.mode,y,null),v.return=u,v;Oa(u,v)}return null}function d(u,v,y,x){var b=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(u,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ca:return y.key===b?l(u,v,y,x):null;case ms:return y.key===b?c(u,v,y,x):null;case Hi:return b=y._init,d(u,v,b(y._payload),x)}if(bo(y)||uo(y))return b!==null?null:h(u,v,y,x,null);Oa(u,y)}return null}function p(u,v,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(y)||null,a(v,u,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:return u=u.get(x.key===null?y:x.key)||null,l(v,u,x,b);case ms:return u=u.get(x.key===null?y:x.key)||null,c(v,u,x,b);case Hi:var w=x._init;return p(u,v,y,w(x._payload),b)}if(bo(x)||uo(x))return u=u.get(y)||null,h(v,u,x,b,null);Oa(v,x)}return null}function g(u,v,y,x){for(var b=null,w=null,T=v,C=v=0,S=null;T!==null&&C<y.length;C++){T.index>C?(S=T,T=null):S=T.sibling;var M=d(u,T,y[C],x);if(M===null){T===null&&(T=S);break}t&&T&&M.alternate===null&&e(u,T),v=s(M,v,C),w===null?b=M:w.sibling=M,w=M,T=S}if(C===y.length)return n(u,T),pt&&Sr(u,C),b;if(T===null){for(;C<y.length;C++)T=f(u,y[C],x),T!==null&&(v=s(T,v,C),w===null?b=T:w.sibling=T,w=T);return pt&&Sr(u,C),b}for(T=i(u,T);C<y.length;C++)S=p(T,u,C,y[C],x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?C:S.key),v=s(S,v,C),w===null?b=S:w.sibling=S,w=S);return t&&T.forEach(function(R){return e(u,R)}),pt&&Sr(u,C),b}function _(u,v,y,x){var b=uo(y);if(typeof b!="function")throw Error(te(150));if(y=b.call(y),y==null)throw Error(te(151));for(var w=b=null,T=v,C=v=0,S=null,M=y.next();T!==null&&!M.done;C++,M=y.next()){T.index>C?(S=T,T=null):S=T.sibling;var R=d(u,T,M.value,x);if(R===null){T===null&&(T=S);break}t&&T&&R.alternate===null&&e(u,T),v=s(R,v,C),w===null?b=R:w.sibling=R,w=R,T=S}if(M.done)return n(u,T),pt&&Sr(u,C),b;if(T===null){for(;!M.done;C++,M=y.next())M=f(u,M.value,x),M!==null&&(v=s(M,v,C),w===null?b=M:w.sibling=M,w=M);return pt&&Sr(u,C),b}for(T=i(u,T);!M.done;C++,M=y.next())M=p(T,u,C,M.value,x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?C:M.key),v=s(M,v,C),w===null?b=M:w.sibling=M,w=M);return t&&T.forEach(function(D){return e(u,D)}),pt&&Sr(u,C),b}function m(u,v,y,x){if(typeof y=="object"&&y!==null&&y.type===gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ca:e:{for(var b=y.key,w=v;w!==null;){if(w.key===b){if(b=y.type,b===gs){if(w.tag===7){n(u,w.sibling),v=r(w,y.props.children),v.return=u,u=v;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hi&&zp(b)===w.type){n(u,w.sibling),v=r(w,y.props),v.ref=go(u,w,y),v.return=u,u=v;break e}n(u,w);break}else e(u,w);w=w.sibling}y.type===gs?(v=Or(y.props.children,u.mode,x,y.key),v.return=u,u=v):(x=Sl(y.type,y.key,y.props,null,u.mode,x),x.ref=go(u,v,y),x.return=u,u=x)}return o(u);case ms:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),v=r(v,y.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=su(y,u.mode,x),v.return=u,u=v}return o(u);case Hi:return w=y._init,m(u,v,w(y._payload),x)}if(bo(y))return g(u,v,y,x);if(uo(y))return _(u,v,y,x);Oa(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,y),v.return=u,u=v):(n(u,v),v=ru(y,u.mode,x),v.return=u,u=v),o(u)):n(u,v)}return m}var Vs=Y0(!0),q0=Y0(!1),Xl=fr(null),jl=null,ws=null,Jd=null;function eh(){Jd=ws=jl=null}function th(t){var e=Xl.current;ht(Xl),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){jl=t,Jd=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(jl===null)throw Error(te(308));ws=t,jl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Lr=null;function nh(t){Lr===null?Lr=[t]:Lr.push(t)}function K0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}function Hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=xt({},f,d);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=f}}function Vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var _a={},oi=fr(_a),oa=fr(_a),aa=fr(_a);function Dr(t){if(t===_a)throw Error(te(174));return t}function rh(t,e){switch(lt(aa,e),lt(oa,t),lt(oi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}ht(oi),lt(oi,e)}function Gs(){ht(oi),ht(oa),ht(aa)}function Q0(t){Dr(aa.current);var e=Dr(oi.current),n=Qu(e,t.type);e!==n&&(lt(oa,t),lt(oi,n))}function sh(t){oa.current===t&&(ht(oi),ht(oa))}var gt=fr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function oh(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var vl=Pi.ReactCurrentDispatcher,Jc=Pi.ReactCurrentBatchConfig,Vr=0,vt=null,At=null,Lt=null,ql=!1,Ho=!1,la=0,jy=0;function Ot(){throw Error(te(321))}function ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function lh(t,e,n,i,r,s){if(Vr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?Ky:Zy,t=n(i,r),Ho){s=0;do{if(Ho=!1,la=0,25<=s)throw Error(te(301));s+=1,Lt=At=null,e.updateQueue=null,vl.current=Qy,t=n(i,r)}while(Ho)}if(vl.current=Kl,e=At!==null&&At.next!==null,Vr=0,Lt=At=vt=null,ql=!1,e)throw Error(te(300));return t}function ch(){var t=la!==0;return la=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nn(){if(At===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?vt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(te(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ca(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Vr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,vt.lanes|=h,Gr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J0(){}function ev(t,e){var n=vt,i=Nn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,uh(iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ua(9,nv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));Vr&30||tv(n,e,r)}return r}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,i){e.value=n,e.getSnapshot=i,rv(e)&&sv(t)}function iv(t,e,n){return n(function(){rv(e)&&sv(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function sv(t){var e=Ci(t,1);e!==null&&Kn(e,t,1,-1)}function Gp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=qy.bind(null,vt,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ov(){return Nn().memoizedState}function _l(t,e,n,i){var r=ei();vt.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function xc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&ah(i,o.deps)){r.memoizedState=ua(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ua(1|e,n,s,i)}function Wp(t,e){return _l(8390656,8,t,e)}function uh(t,e){return xc(2048,8,t,e)}function av(t,e){return xc(4,2,t,e)}function lv(t,e){return xc(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,xc(4,4,cv.bind(null,e,t),n)}function fh(){}function fv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hv(t,e,n){return Vr&21?(Zn(n,e)||(n=_0(),vt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function $y(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{nt=n,Jc.transition=i}}function pv(){return Nn().memoizedState}function Yy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=K0(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),vv(n,e,i)}}function qy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=K0(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),vv(n,e,i))}}function mv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function gv(t,e){Ho=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}var Kl={readContext:Un,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Ky={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Yy.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Gp,useDebugValue:fh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Gp(!1),e=t[0];return t=$y.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ei();if(pt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));Vr&30||tv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wp(iv.bind(null,i,s,t),[t]),i.flags|=2048,ua(9,nv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Dt.identifierPrefix;if(pt){var n=yi,i=xi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zy={readContext:Un,useCallback:fv,useContext:Un,useEffect:uh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:eu,useRef:ov,useState:function(){return eu(ca)},useDebugValue:fh,useDeferredValue:function(t){var e=Nn();return hv(e,At.memoizedState,t)},useTransition:function(){var t=eu(ca)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},Qy={readContext:Un,useCallback:fv,useContext:Un,useEffect:uh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:tu,useRef:ov,useState:function(){return tu(ca)},useDebugValue:fh,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:hv(e,At.memoizedState,t)},useTransition:function(){var t=tu(ca)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=nr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Kn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=nr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Kn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=nr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Kn(e,t,i,n),gl(e,t,i))}};function Xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,i)||!na(r,s):!0}function _v(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?zr:$t.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ih(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?zr:$t.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yc.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=Ax(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function xv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Df=i),Sf(t,e)},n}function yv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hM.bind(null,t,e,n),e.then(t,t))}function Yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var eM=Pi.ReactCurrentOwner,cn=!1;function Kt(t,e,n,i){e.child=t===null?q0(e,null,n,i):Vs(e,t.child,n,i)}function Kp(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=lh(t,e,n,i,s,r),n=ch(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(pt&&n&&Kd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mv(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(na(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Ef(t,e,n,i,r)}function Sv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(As,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(As,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(As,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(As,vn),vn|=i;return Kt(t,e,r,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,i,r){var s=fn(n)?zr:$t.current;return s=zs(e,s),Ds(e,r),n=lh(t,e,n,i,s,r),i=ch(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(pt&&i&&Kd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Qp(t,e,n,i,r){if(fn(n)){var s=!0;Vl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)xl(t,e),_v(e,n,i),Mf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?zr:$t.current,c=zs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&jp(e,o,i,c),Vi=!1;var d=e.memoizedState;o.state=d,$l(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Vi?(typeof h=="function"&&(yf(e,n,h,i),l=e.memoizedState),(a=Vi||Xp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Z0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?zr:$t.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&jp(e,o,i,l),Vi=!1,d=e.memoizedState,o.state=d,$l(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||un.current||Vi?(typeof p=="function"&&(yf(e,n,p,i),g=e.memoizedState),(c=Vi||Xp(e,n,c,i,d,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){Ev(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kp(e,n,!1),Ri(t,e,s);i=e.stateNode,eM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function wv(t){var e=t.stateNode;e.pendingContext?Fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fp(t,e.context,!1),rh(t,e.containerInfo)}function Jp(t,e,n,i,r){return Hs(),Qd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Af(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Af(n),e.memoizedState=Tf,t):dh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dh(t,e){return e=Ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&Qd(i),Vs(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(te(422))),Ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ec({mode:"visible",children:i.children},r,0,null),s=Or(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Af(o),e.memoizedState=Tf,s);if(!(e.mode&1))return Ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=nu(s,i,void 0),Ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Kn(i,t,r,-1))}return _h(),i=nu(Error(te(421))),Ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Ji(r.nextSibling),yn=e,pt=!0,Wn=null,t!==null&&(bn[Pn++]=xi,bn[Pn++]=yi,bn[Pn++]=Hr,xi=t.id,yi=t.overflow,Hr=e),e=dh(e,i.children),e.flags|=4096,e)}function em(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Av(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&em(t,n,e);else if(t.tag===19)em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nM(t,e,n){switch(e.tag){case 3:wv(e),Hs();break;case 5:Q0(e);break;case 1:fn(e.type)&&Vl(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Tv(t,e,n):(lt(gt,gt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sv(t,e,n)}return Ri(t,e,n)}var Cv,Cf,Rv,bv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cf=function(){};Rv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(oi.current);var s=null;switch(n){case"input":r=Yu(t,r),i=Yu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}Ju(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bv=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iM(t,e,n){var i=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return fn(e.type)&&Hl(),Bt(e),null;case 3:return i=e.stateNode,Gs(),ht(un),ht($t),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Nf(Wn),Wn=null))),Cf(t,e),Bt(e),null;case 5:sh(e);var r=Dr(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Bt(e),null}if(t=Dr(oi.current),ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[sa]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)dt(Lo[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":cp(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":fp(i,s),dt("invalid",i)}Ju(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":Ra(i),up(i,s,!0);break;case"textarea":Ra(i),dp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[sa]=i,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ef(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Lo.length;r++)dt(Lo[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":cp(t,i),r=Yu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":fp(t,i),r=Zu(t,i),dt("invalid",t);break;default:r=i}Ju(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Fd(t,s,l,o))}switch(n){case"input":Ra(t),up(t,i,!1);break;case"textarea":Ra(t),dp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)bv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Dr(aa.current),Dr(oi.current),ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Bt(e),null;case 13:if(ht(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))$0(),Hs(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Wn!==null&&(Nf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ct===0&&(Ct=3):_h())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Gs(),Cf(t,e),t===null&&ia(e.stateNode.containerInfo),Bt(e),null;case 10:return th(e.type._context),Bt(e),null;case 17:return fn(e.type)&&Hl(),Bt(e),null;case 19:if(ht(gt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Xs&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Bt(e),null}else 2*Et()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function rM(t,e){switch(Zd(e),e.tag){case 1:return fn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),ht(un),ht($t),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(ht(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(gt),null;case 4:return Gs(),null;case 10:return th(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var za=!1,Vt=!1,sM=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Rf(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var tm=!1;function oM(t,e){if(ff=kl,t=U0(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(df={focusedElem:t,selectionRange:n},kl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){Mt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=tm,tm=!1,g}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rf(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[sa],delete e[mf],delete e[Vy],delete e[Gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lv(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var It=null,Gn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:Vt||Ts(n,e);case 6:var i=It,r=Gn;It=null,Ui(t,e,n),It=i,Gn=r,It!==null&&(Gn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Gn?(t=It,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ea(t)):Kc(It,n.stateNode));break;case 4:i=It,r=Gn,It=n.stateNode.containerInfo,Gn=!0,Ui(t,e,n),It=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Vt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ui(t,e,n),Vt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sM),e.forEach(function(i){var r=mM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Gn=!1;break e;case 3:It=a.stateNode.containerInfo,Gn=!0;break e;case 4:It=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(It===null)throw Error(te(160));Dv(s,o,r),It=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Vo(3,t,t.return),Mc(3,t)}catch(_){Mt(t,t.return,_)}try{Vo(5,t,t.return)}catch(_){Mt(t,t.return,_)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Ko(r,"")}catch(_){Mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t0(r,s),ef(a,o);var c=ef(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?o0(r,f):h==="dangerouslySetInnerHTML"?r0(r,f):h==="children"?Ko(r,f):Fd(r,h,f,c)}switch(a){case"input":qu(r,s);break;case"textarea":n0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(_){Mt(t,t.return,_)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Mt(t,t.return,_)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(_){Mt(t,t.return,_)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mh=Et())),i&4&&im(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||h,On(e,t),Vt=c):On(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(f=me=h;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Vo(4,d,d.return);break;case 1:Ts(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Mt(i,n,_)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){sm(f);continue}}p!==null?(p.return=d,me=p):sm(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s0("display",o))}catch(_){Mt(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Mt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Jn(t),i&4&&im(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=nm(t);Lf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nm(t);Pf(t,a,o);break;default:throw Error(te(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aM(t,e,n){me=t,Uv(t)}function Uv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=za;var c=Vt;if(za=o,(Vt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?om(r):l!==null?(l.return=o,me=l):om(r);for(;s!==null;)me=s,Uv(s),s=s.sibling;me=r,za=a,Vt=c}rm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):rm(t)}}function rm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ea(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Vt||e.flags&512&&bf(e)}catch(d){Mt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function sm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function om(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{bf(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var lM=Math.ceil,Zl=Pi.ReactCurrentDispatcher,hh=Pi.ReactCurrentOwner,In=Pi.ReactCurrentBatchConfig,Ye=0,Dt=null,Tt=null,Ut=0,vn=0,As=fr(0),Ct=0,fa=null,Gr=0,Sc=0,ph=0,Go=null,an=null,mh=0,Xs=1/0,vi=null,Ql=!1,Df=null,tr=null,Ha=!1,Yi=null,Jl=0,Wo=0,If=null,yl=-1,Ml=0;function en(){return Ye&6?Et():yl!==-1?yl:yl=Et()}function nr(t){return t.mode&1?Ye&2&&Ut!==0?Ut&-Ut:Xy.transition!==null?(Ml===0&&(Ml=_0()),Ml):(t=nt,t!==0||(t=window.event,t=t===void 0?16:T0(t.type)),t):1}function Kn(t,e,n,i){if(50<Wo)throw Wo=0,If=null,Error(te(185));ma(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(Sc|=n),Ct===4&&Xi(t,Ut)),dn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Xs=Et()+500,_c&&dr()))}function dn(t,e){var n=t.callbackNode;Xx(t,e);var i=Fl(t,t===Dt?Ut:0);if(i===0)n!==null&&mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mp(n),e===1)t.tag===0?Wy(am.bind(null,t)):W0(am.bind(null,t)),zy(function(){!(Ye&6)&&dr()}),n=null;else{switch(x0(i)){case 1:n=Hd;break;case 4:n=g0;break;case 16:n=Nl;break;case 536870912:n=v0;break;default:n=Nl}n=Vv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(yl=-1,Ml=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Fl(t,t===Dt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=Ye;Ye|=2;var s=kv();(Dt!==t||Ut!==e)&&(vi=null,Xs=Et()+500,kr(t,e));do try{fM();break}catch(a){Fv(t,a)}while(!0);eh(),Zl.current=s,Ye=r,Tt!==null?e=0:(Dt=null,Ut=0,e=Ct)}if(e!==0){if(e===2&&(r=of(t),r!==0&&(i=r,e=Uf(t,r))),e===1)throw n=fa,kr(t,0),Xi(t,i),dn(t,Et()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!cM(r)&&(e=ec(t,i),e===2&&(s=of(t),s!==0&&(i=s,e=Uf(t,s))),e===1))throw n=fa,kr(t,0),Xi(t,i),dn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Er(t,an,vi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=mh+500-Et(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pf(Er.bind(null,t,an,vi),e);break}Er(t,an,vi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lM(i/1960))-i,10<i){t.timeoutHandle=pf(Er.bind(null,t,an,vi),i);break}Er(t,an,vi);break;case 5:Er(t,an,vi);break;default:throw Error(te(329))}}}return dn(t,Et()),t.callbackNode===n?Nv.bind(null,t):null}function Uf(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=an,an=n,e!==null&&Nf(e)),t}function Nf(t){an===null?an=t:an.push.apply(an,t)}function cM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~ph,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function am(t){if(Ye&6)throw Error(te(327));Is();var e=Fl(t,0);if(!(e&1))return dn(t,Et()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=fa,kr(t,0),Xi(t,e),dn(t,Et()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,an,vi),dn(t,Et()),null}function gh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Xs=Et()+500,_c&&dr())}}function Wr(t){Yi!==null&&Yi.tag===0&&!(Ye&6)&&Is();var e=Ye;Ye|=1;var n=In.transition,i=nt;try{if(In.transition=null,nt=1,t)return t()}finally{nt=i,In.transition=n,Ye=e,!(Ye&6)&&dr()}}function vh(){vn=As.current,ht(As)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,By(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Gs(),ht(un),ht($t),oh();break;case 5:sh(i);break;case 4:Gs();break;case 13:ht(gt);break;case 19:ht(gt);break;case 10:th(i.type._context);break;case 22:case 23:vh()}n=n.return}if(Dt=t,Tt=t=ir(t.current,null),Ut=vn=e,Ct=0,fa=null,ph=Sc=Gr=0,an=Go=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function Fv(t,e){do{var n=Tt;try{if(eh(),vl.current=Kl,ql){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Vr=0,Lt=At=vt=null,Ho=!1,la=0,hh.current=null,n===null||n.return===null){Ct=1,fa=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Yp(o);if(p!==null){p.flags&=-257,qp(p,o,a,s,e),p.mode&1&&$p(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){$p(s,c,e),_h();break e}l=Error(te(426))}}else if(pt&&a.mode&1){var m=Yp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qp(m,o,a,s,e),Qd(Ws(l,a));break e}}s=l=Ws(l,a),Ct!==4&&(Ct=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=xv(s,l,e);Hp(s,u);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tr===null||!tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=yv(s,a,e);Hp(s,x);break e}}s=s.return}while(s!==null)}Bv(n)}catch(b){e=b,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function kv(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function _h(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Gr&268435455)&&!(Sc&268435455)||Xi(Dt,Ut)}function ec(t,e){var n=Ye;Ye|=2;var i=kv();(Dt!==t||Ut!==e)&&(vi=null,kr(t,e));do try{uM();break}catch(r){Fv(t,r)}while(!0);if(eh(),Ye=n,Zl.current=i,Tt!==null)throw Error(te(261));return Dt=null,Ut=0,Ct}function uM(){for(;Tt!==null;)Ov(Tt)}function fM(){for(;Tt!==null&&!Fx();)Ov(Tt)}function Ov(t){var e=Hv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Bv(t):Tt=e,hh.current=null}function Bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rM(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=iM(n,e,vn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Er(t,e,n){var i=nt,r=In.transition;try{In.transition=null,nt=1,dM(t,e,n,i)}finally{In.transition=r,nt=i}return null}function dM(t,e,n,i){do Is();while(Yi!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jx(t,s),t===Dt&&(Tt=Dt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Vv(Nl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=nt;nt=1;var a=Ye;Ye|=4,hh.current=null,oM(t,n),Iv(n,t),Dy(df),kl=!!ff,df=ff=null,t.current=n,aM(n),kx(),Ye=a,nt=o,In.transition=s}else t.current=n;if(Ha&&(Ha=!1,Yi=t,Jl=r),s=t.pendingLanes,s===0&&(tr=null),zx(n.stateNode),dn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Df,Df=null,t;return Jl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===If?Wo++:(Wo=0,If=t):Wo=0,dr(),null}function Is(){if(Yi!==null){var t=x0(Jl),e=In.transition,n=nt;try{if(In.transition=null,nt=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Jl=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:Vo(8,h,s)}var f=h.child;if(f!==null)f.return=h,me=f;else for(;me!==null;){h=me;var d=h.sibling,p=h.return;if(Pv(h),h===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,me=y;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(b){Mt(a,a.return,b)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ye=r,dr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{nt=n,In.transition=e}}return!1}function lm(t,e,n){e=Ws(n,e),e=xv(t,e,1),t=er(t,e,1),e=en(),t!==null&&(ma(t,1,e),dn(t,e))}function Mt(t,e,n){if(t.tag===3)lm(t,t,n);else for(;e!==null;){if(e.tag===3){lm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Ws(n,t),t=yv(e,t,1),e=er(e,t,1),t=en(),e!==null&&(ma(e,1,t),dn(e,t));break}}e=e.return}}function hM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ut&n)===n&&(Ct===4||Ct===3&&(Ut&130023424)===Ut&&500>Et()-mh?kr(t,0):ph|=n),dn(t,e)}function zv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=en();t=Ci(t,e),t!==null&&(ma(t,e,n),dn(t,n))}function pM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function mM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),zv(t,n)}var Hv;Hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,nM(t,e,n);cn=!!(t.flags&131072)}else cn=!1,pt&&e.flags&1048576&&X0(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=zs(e,$t.current);Ds(e,n),r=lh(null,e,i,t,r,n);var s=ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ih(e),r.updater=yc,e.stateNode=r,r._reactInternals=e,Mf(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Kd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vM(i),t=Vn(i,t),r){case 0:e=Ef(null,e,i,t,n);break e;case 1:e=Qp(null,e,i,t,n);break e;case 11:e=Kp(null,e,i,t,n);break e;case 14:e=Zp(null,e,i,Vn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Qp(t,e,i,r,n);case 3:e:{if(wv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Z0(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(te(423)),e),e=Jp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(te(424)),e),e=Jp(t,e,i,n,r);break e}else for(_n=Ji(e.stateNode.containerInfo.firstChild),yn=e,pt=!0,Wn=null,n=q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ri(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return Q0(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hf(i,r)?o=null:s!==null&&hf(i,s)&&(e.flags|=32),Ev(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return Tv(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Kp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Xl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!un.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Un(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Zp(t,e,i,r,n);case 15:return Mv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),xl(t,e),e.tag=1,fn(i)?(t=!0,Vl(e)):t=!1,Ds(e,n),_v(e,i,r),Mf(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return Av(t,e,n);case 22:return Sv(t,e,n)}throw Error(te(156,e.tag))};function Vv(t,e){return m0(t,e)}function gM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new gM(t,e,n,i)}function xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vM(t){if(typeof t=="function")return xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===Bd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Or(n.children,r,s,e);case kd:o=8,r|=8;break;case Wu:return t=Ln(12,n,e,r|2),t.elementType=Wu,t.lanes=s,t;case Xu:return t=Ln(13,n,e,r),t.elementType=Xu,t.lanes=s,t;case ju:return t=Ln(19,n,e,r),t.elementType=ju,t.lanes=s,t;case Qg:return Ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kg:o=10;break e;case Zg:o=9;break e;case Od:o=11;break e;case Bd:o=14;break e;case Hi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Ec(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Qg,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _M(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yh(t,e,n,i,r,s,o,a,l){return t=new _M(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(s),t}function xM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return ar;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(fn(n))return G0(t,n,e)}return e}function Wv(t,e,n,i,r,s,o,a,l){return t=yh(n,i,!0,t,r,s,o,a,l),t.context=Gv(null),n=t.current,i=en(),r=nr(n),s=Ei(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ma(t,r,i),dn(t,i),t}function wc(t,e,n,i){var r=e.current,s=en(),o=nr(r);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Kn(t,r,o,s),gl(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){cm(t,e),(t=t.alternate)&&cm(t,e)}function yM(){return null}var Xv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sh(t){this._internalRoot=t}Tc.prototype.render=Sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));wc(t,e,null,null)};Tc.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){wc(null,t,null,null)}),e[Ai]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=S0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&w0(t)}};function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function MM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=Wv(e,i,t,0,null,!1,!1,"",um);return t._reactRootContainer=o,t[Ai]=o.current,ia(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=yh(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=l,t[Ai]=l.current,ia(t.nodeType===8?t.parentNode:t),Wr(function(){wc(e,l,n,i)}),l}function Cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}wc(e,o,t,r)}else o=MM(n,e,t,r,i);return tc(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(Vd(e,n|1),dn(e,Et()),!(Ye&6)&&(Xs=Et()+500,dr()))}break;case 13:Wr(function(){var i=Ci(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),Mh(t,1)}};Gd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}Mh(t,134217728)}};M0=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}Mh(t,e)}};S0=function(){return nt};E0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};nf=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vc(i);if(!r)throw Error(te(90));e0(i),qu(i,r)}}}break;case"textarea":n0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};c0=gh;u0=Wr;var SM={usingClientEntryPoint:!1,Events:[va,ys,vc,a0,l0,gh]},_o={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EM={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||yM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{hc=Va.inject(EM),si=Va}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SM;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(e))throw Error(te(200));return xM(t,e,null,n)};Sn.createRoot=function(t,e){if(!Eh(t))throw Error(te(299));var n=!1,i="",r=Xv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,ia(t.nodeType===8?t.parentNode:t),new Sh(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Wr(t)};Sn.hydrate=function(t,e,n){if(!Ac(e))throw Error(te(200));return Cc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Eh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tc(e)};Sn.render=function(t,e,n){if(!Ac(e))throw Error(te(200));return Cc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(te(40));return t._reactRootContainer?(Wr(function(){Cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Sn.unstable_batchedUpdates=gh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ac(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Cc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(t){console.error(t)}}jv(),jg.exports=Sn;var wM=jg.exports,$v,fm=wM;$v=fm.createRoot,fm.hydrateRoot;const Yv="bookshelf.v1",Ff={bunko:{name:"文庫",h:148,w:105},shinsho:{name:"新書",h:182,w:103},comic:{name:"漫画（新書判）",h:174,w:112},b6:{name:"漫画（B6）",h:182,w:128},shiroku:{name:"単行本（四六判）",h:188,w:127},a5:{name:"大きめの本（A5）",h:210,w:148}},TM={bunko:280,shinsho:220,comic:192,b6:192,shiroku:300,a5:160};function AM(t){if(t.w)return t.w;const e=t.pages||TM[t.format]||250;return Math.round((2.2+e*.065)*10)/10}const CM={minRows:5};function dm(){return{no:1,since:new Date().getFullYear(),shelf:{name:"わたしの本棚",preset:"mine",mat:"paint",frame:"#f7f6f2",inner:"#f2cf1d",top:"same",brass:!1},room:{wall:"gallery",floor:"gallery"},wish:[],light:"day",lamp:1,display:"auto",sort:"manual",style:null,cols:1,wide:1,sections:[],looseEnd:null,looseFlat:[],books:[]}}let Xt=RM();function RM(){try{const t=localStorage.getItem(Yv);if(t){const e=JSON.parse(t),n=dm();return{...n,...e,shelf:{...n.shelf,...e.shelf},room:{...n.room,...e.room},sections:e.sections||[],looseFlat:e.looseFlat||[]}}}catch{}return dm()}function bM(){try{localStorage.setItem(Yv,JSON.stringify(Xt))}catch{}}const qv=new Set;function PM(t){qv.add(t)}function qr(){bM(),qv.forEach(t=>t(Xt))}function Cn(){return Xt}function Kv(t){Xt.shelf={...Xt.shelf,...t},qr()}function wh(t){const e="b"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);return Xt.books.push({id:e,record:{},...t}),qr(),e}function LM(t){Xt.books=Xt.books.filter(e=>e.id!==t),qr()}function Th(){const t=Xt.books.filter(e=>e.sample).length;return t&&(Xt.books=Xt.books.filter(e=>!e.sample),qr()),t}function El(t,e){const n=Xt.books.find(i=>i.id===t);n&&(Object.assign(n,e),qr())}function hm(t,e,n){const i=Xt.books,r=i.findIndex(l=>l.id===t);if(r<0||t===e)return;const[s]=i.splice(r,1),o=i.find(l=>l.id===e);Xt.display==="curate"&&o&&(o.sec?s.sec=o.sec:delete s.sec);let a=i.findIndex(l=>l.id===e);a<0?a=i.length:n&&(a+=1),i.splice(a,0,s),qr()}function DM(){[["カレーライスの丸かじり","東海林さだお","bunko",224,"#f1ece0","文春文庫"],["さよなら絵梨","藤本タツキ","comic",200,"#d8452f","ジャンプコミックス+"],["ブランクスペース 1","熊倉献","b6",192,"#f6f1d0","ヒーローズ"],["ロンリのちから","野矢茂樹 ほか","shiroku",200,"#f5f2ea","三笠書房"],["理系なテニス","田中信弥・松尾衛","shiroku",224,"#4f7fc0","日本文芸社"],["エレファントヘッド","白井智之","shiroku",432,"#f4f1e8","角川書店"],["歪曲済アイラービュ","住野よる","shiroku",320,"#f7f2ee","新潮社"],["GOAT","小学館","a5",300,"#1d1d1d","小学館"],["殺し屋の営業術","野宮有","shiroku",336,"#e2338a","講談社"],["青天","若林正恭","shiroku",288,"#2f6f86","文藝春秋"],["モリアーティ","アンソニー・ホロヴィッツ","bunko",480,"#1f3348","角川文庫"],["小説の小説","似鳥鶏","bunko",280,"#efe6d0","角川文庫"],["俺ではない炎上","浅倉秋成","bunko",400,"#f3f0e8","双葉文庫"]].forEach(([e,n,i,r,s,o])=>Xt.books.push({id:"b"+Math.random().toString(36).slice(2,10),title:e,author:n,format:i,pages:r,color:s,publisher:o,sample:!0,record:{}}));for(let e=1;e<=42;e++)Xt.books.push({id:"db"+e,title:"ドラゴンボール "+e,author:"鳥山明",format:"comic",pages:192,color:"#f08a24",publisher:"ジャンプコミックス",sample:!0,record:{}});qr()}const pm={mine:{name:"わたしの本棚",mat:"paint",frame:"#f7f6f2",inner:"#f2cf1d",top:"same",brass:!1},oak:{name:"オーク",mat:"oak",top:"same",brass:!1},white:{name:"白い棚",mat:"paint",frame:"#ffffff",inner:"#e9e5dd",top:"same",brass:!1},steel:{name:"黒いスチール",mat:"steel",frame:"#151515",inner:"#3d3d3d",top:"same",brass:!1},walbrass:{name:"ウォールナット×真鍮",mat:"walnut",top:"same",brass:!0},ebmarble:{name:"黒檀×大理石",mat:"ebony",top:"marble",brass:!0},library:{name:"図書館",mat:"walnut",top:"marble",brass:!1},navy:{name:"ネイビー×真鍮",mat:"paint",frame:"#23395b",inner:"#1b2c47",top:"same",brass:!0}},Ah=(t,e)=>e.map(([n,i,r,s,o],a)=>({id:`${t}${a}`,title:n,author:i,format:r,pages:s,color:o,record:{}})),IM=Ah("nn",[["坊っちゃん","夏目漱石","bunko",220,"#2c3550"],["こころ","夏目漱石","bunko",380,"#8a6b3a"],["三四郎","夏目漱石","bunko",340,"#3b4d3a"],["それから","夏目漱石","bunko",360,"#a33a2a"],["門","夏目漱石","bunko",280,"#4a2f2a"],["草枕","夏目漱石","bunko",200,"#6b7d8f"],["人間失格","太宰治","bunko",180,"#1d1d1d"],["斜陽","太宰治","bunko",220,"#7f8f6a"],["走れメロス","太宰治","bunko",300,"#c9a24a"],["雪国","川端康成","bunko",200,"#e0d6c2"],["伊豆の踊子","川端康成","bunko",200,"#d9cfb8"],["羅生門・鼻","芥川龍之介","bunko",240,"#30343f"],["河童","芥川龍之介","bunko",200,"#5c4a3a"],["檸檬","梶井基次郎","bunko",260,"#d9b63c"],["山月記","中島敦","bunko",200,"#2f4a5a"],["銀河鉄道の夜","宮沢賢治","bunko",300,"#1f2e5a"],["注文の多い料理店","宮沢賢治","bunko",320,"#7a2e2e"],["細雪 上","谷崎潤一郎","bunko",480,"#efe9dc"],["細雪 中","谷崎潤一郎","bunko",460,"#efe9dc"],["細雪 下","谷崎潤一郎","bunko",480,"#efe9dc"],["春琴抄","谷崎潤一郎","bunko",160,"#8c3b2e"],["金閣寺","三島由紀夫","bunko",380,"#c2a14a"],["潮騒","三島由紀夫","bunko",220,"#3d6f8f"],["舞姫","森鷗外","bunko",200,"#5b4636"],["高瀬舟","森鷗外","bunko",220,"#6d5c48"],["夜明け前 第一部","島崎藤村","bunko",520,"#3a3a2e"],["破戒","島崎藤村","bunko",440,"#4a3b30"],["友情","武者小路実篤","bunko",180,"#9a8a6a"],["蟹工船","小林多喜二","bunko",200,"#2a2a2a"],["斜陽日記","太田静子","bunko",260,"#6a5040"],["たけくらべ","樋口一葉","bunko",200,"#a87a5a"],["にごりえ","樋口一葉","bunko",200,"#8a6050"],["武蔵野","国木田独歩","bunko",260,"#4f6a4a"],["城の崎にて","志賀直哉","bunko",220,"#7a8a9a"],["暗夜行路","志賀直哉","bunko",580,"#3a4a5a"],["阿部一族","森鷗外","bunko",200,"#5a4a3a"]]),UM=Ah("nh",[["夜のピクニック","恩田陸","bunko",460,"#2c3550"],["博士の愛した数式","小川洋子","bunko",300,"#f1e9d8"],["キッチン","吉本ばなな","bunko",200,"#e9c9c0"],["西の魔女が死んだ","梨木香歩","bunko",230,"#c6d8c0"],["かがみの孤城","辻村深月","shiroku",560,"#c8b6dc"],["舟を編む","三浦しをん","bunko",350,"#2f5a8a"],["羊と鋼の森","宮下奈都","bunko",280,"#3f6a5a"],["蜜蜂と遠雷","恩田陸","shiroku",520,"#e9d27a"],["ツバキ文具店","小川糸","bunko",320,"#f3e6c8"],["ライオンのおやつ","小川糸","shiroku",260,"#f0dcc0"],["食堂かたつむり","小川糸","bunko",240,"#d9c49a"],["旅をする木","星野道夫","bunko",260,"#7f9aa8"],["きらきら眼鏡","森沢明夫","bunko",300,"#bcd2e0"],["海辺のカフカ","村上春樹","bunko",480,"#e8e0cc"],["ノルウェイの森","村上春樹","bunko",300,"#b8302a"],["阪急電車","有川浩","bunko",260,"#7a3a3a"],["図書館戦争","有川浩","bunko",400,"#3a5a7a"],["植物図鑑","有川浩","bunko",400,"#8fb08a"],["コーヒーが冷めないうちに","川口俊和","bunko",260,"#6a4a3a"],["すみれ荘ファミリア","凪良ゆう","bunko",300,"#d9c0d0"],["流浪の月","凪良ゆう","shiroku",320,"#a9c0d8"],["汝、星のごとく","凪良ゆう","shiroku",360,"#2a3a6a"],["ぼくは勉強ができない","山田詠美","bunko",260,"#e0b84a"],["神様のボート","江國香織","bunko",280,"#bcd8e8"],["きらきらひかる","江國香織","bunko",220,"#f0e0a0"],["号泣する準備はできていた","江國香織","bunko",240,"#e8c8b8"],["TUGUMI","吉本ばなな","bunko",240,"#f2e2c4"],["アムリタ","吉本ばなな","bunko",400,"#c8a8c8"]]),Ch=Ah("nm",[["ゴールデンスランバー","伊坂幸太郎","bunko",690,"#d6b445"],["重力ピエロ","伊坂幸太郎","bunko",480,"#e8e3d8"],["アヒルと鴨のコインロッカー","伊坂幸太郎","bunko",380,"#c43a2e"],["陽気なギャングが地球を回す","伊坂幸太郎","bunko",400,"#f0a030"],["オーデュボンの祈り","伊坂幸太郎","bunko",460,"#3a6a8a"],["ラッシュライフ","伊坂幸太郎","bunko",470,"#1d1d1d"],["グラスホッパー","伊坂幸太郎","bunko",340,"#6a9a3a"],["マリアビートル","伊坂幸太郎","bunko",590,"#e8c030"],["AX","伊坂幸太郎","bunko",380,"#2a2a2a"],["砂漠","伊坂幸太郎","bunko",540,"#3a9fc0"],["終末のフール","伊坂幸太郎","bunko",380,"#4fb0cf"],["フィッシュストーリー","伊坂幸太郎","bunko",300,"#2f6f8f"],["チルドレン","伊坂幸太郎","bunko",320,"#e8d8b0"],["魔王","伊坂幸太郎","bunko",330,"#5a3a3a"],["モダンタイムス 上","伊坂幸太郎","bunko",400,"#8a8a8a"],["モダンタイムス 下","伊坂幸太郎","bunko",400,"#8a8a8a"],["あるキング","伊坂幸太郎","bunko",300,"#d0a040"],["ガソリン生活","伊坂幸太郎","bunko",520,"#3a8a5a"],["死神の精度","伊坂幸太郎","bunko",330,"#1a1a2a"],["死神の浮力","伊坂幸太郎","bunko",470,"#2a2a3a"],["火星に住むつもりかい？","伊坂幸太郎","bunko",440,"#c05a3a"],["ホワイトラビット","伊坂幸太郎","bunko",360,"#f2f2ee"],["クジラアタマの王様","伊坂幸太郎","bunko",400,"#5a7aaa"],["逆ソクラテス","伊坂幸太郎","bunko",300,"#e0c860"],["ジャイロスコープ","伊坂幸太郎","bunko",300,"#4aa7c9"],["アイネクライネナハトムジーク","伊坂幸太郎","bunko",300,"#3ea89c"],["マイクロスパイ・アンサンブル","伊坂幸太郎","bunko",230,"#50b7a8"],["ペッパーズ・ゴースト","伊坂幸太郎","bunko",480,"#b0b8c0"],["シーソーモンスター","伊坂幸太郎","bunko",480,"#e0a0a0"],["さよならジャバウォック","伊坂幸太郎","shiroku",320,"#1a1a1a"]]),NM=[{id:"m1",title:"殺し屋シリーズ",end:{mode:"bookend",kind:"brass"},flat:[]},{id:"m2",title:"まずはこの一冊",end:{mode:"flat"},flat:["nm14","nm15"]},{id:"m3",title:"仙台の街の話",end:{mode:"lean"},flat:[]}],FM={m1:["グラスホッパー","マリアビートル","AX"],m2:["ゴールデンスランバー","モダンタイムス 上","モダンタイムス 下"],m3:["重力ピエロ","アヒルと鴨のコインロッカー","チルドレン","砂漠","フィッシュストーリー","ラッシュライフ","オーデュボンの祈り"]};Ch.forEach(t=>{for(const[e,n]of Object.entries(FM))n.includes(t.title)&&(t.sec=e)});Object.assign(Ch.find(t=>t.title==="ゴールデンスランバー"),{face:!0,pop:"仙台を、ひとりで走りぬける夜。伊坂を読むならここから"});const kf=[{at:-1,name:"ナツメの棚",sampleShelf:!0,minRows:2,books:IM,shelf:{mat:"walnut",top:"same",brass:!1}},{at:1,name:"ハルカの棚",sampleShelf:!0,minRows:2,books:UM,shelf:{mat:"paint",frame:"#ffffff",inner:"#e9e5dd",top:"same",brass:!1}},{at:2,name:"ミナトの棚",sampleShelf:!0,minRows:3,books:Ch,display:"curate",cols:2,sections:NM,looseEnd:null,looseFlat:[],shelf:{mat:"paint",frame:"#23395b",inner:"#1b2c47",top:"same",brass:!0}}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="170",kM=0,mm=1,OM=2,bh=1,BM=2,gi=3,lr=0,tn=1,ii=2,rr=0,Us=1,gm=2,vm=3,_m=4,zM=5,Cr=100,HM=101,VM=102,GM=103,WM=104,XM=200,jM=201,$M=202,YM=203,Of=204,Bf=205,qM=206,KM=207,ZM=208,QM=209,JM=210,eS=211,tS=212,nS=213,iS=214,zf=0,Hf=1,Vf=2,js=3,Gf=4,Wf=5,Xf=6,jf=7,Zv=0,rS=1,sS=2,sr=0,oS=1,aS=2,lS=3,Qv=4,cS=5,uS=6,fS=7,Jv=300,$s=301,Ys=302,$f=303,Yf=304,Rc=306,qf=1e3,Ir=1001,nc=1002,hn=1003,dS=1004,Ga=1005,$n=1006,ou=1007,Mi=1008,bi=1009,e_=1010,t_=1011,da=1012,Ph=1013,Xr=1014,ri=1015,xa=1016,Lh=1017,Dh=1018,qs=1020,n_=35902,i_=1021,r_=1022,xn=1023,s_=1024,o_=1025,Ns=1026,Ks=1027,a_=1028,Ih=1029,l_=1030,Uh=1031,Nh=1033,wl=33776,Tl=33777,Al=33778,Cl=33779,Kf=35840,Zf=35841,Qf=35842,Jf=35843,ed=36196,td=37492,nd=37496,id=37808,rd=37809,sd=37810,od=37811,ad=37812,ld=37813,cd=37814,ud=37815,fd=37816,dd=37817,hd=37818,pd=37819,md=37820,gd=37821,Rl=36492,vd=36494,_d=36495,c_=36283,xd=36284,yd=36285,Md=36286,hS=3200,u_=3201,f_=0,pS=1,ji="",Zt="srgb",ro="srgb-linear",bc="linear",it="srgb",Qr=7680,xm=519,mS=512,gS=513,vS=514,d_=515,_S=516,xS=517,yS=518,MS=519,ym=35044,Mm="300 es",Si=2e3,ic=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sm=1234567;const Xo=Math.PI/180,Zs=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Fh(t,e){return(t%e+e)%e}function SS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ES(t,e,n){return t!==e?(n-t)/(e-t):0}function jo(t,e,n){return(1-n)*t+n*e}function wS(t,e,n,i){return jo(t,e,1-Math.exp(-n*i))}function TS(t,e=1){return e-Math.abs(Fh(t,e*2)-e)}function AS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function CS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function RS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function bS(t,e){return t+Math.random()*(e-t)}function PS(t){return t*(.5-Math.random())}function LS(t){t!==void 0&&(Sm=t);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DS(t){return t*Xo}function IS(t){return t*Zs}function US(t){return(t&t-1)===0&&t!==0}function NS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function FS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function kS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const OS={DEG2RAD:Xo,RAD2DEG:Zs,generateUUID:oo,clamp:Gt,euclideanModulo:Fh,mapLinear:SS,inverseLerp:ES,lerp:jo,damp:wS,pingpong:TS,smoothstep:AS,smootherstep:CS,randInt:RS,randFloat:bS,randFloatSpread:PS,seededRandom:LS,degToRad:DS,radToDeg:IS,isPowerOfTwo:US,ceilPowerOfTwo:NS,floorPowerOfTwo:FS,setQuaternionFromProperEuler:kS,normalize:Yt,denormalize:ds};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],u=r[6],v=r[1],y=r[4],x=r[7],b=r[2],w=r[5],T=r[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*y+l*w,s[6]=o*u+a*x+l*T,s[1]=c*_+h*v+f*b,s[4]=c*m+h*y+f*w,s[7]=c*u+h*x+f*T,s[2]=d*_+p*v+g*b,s[5]=d*m+p*y+g*w,s[8]=d*u+p*x+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new Fe;function h_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BS(){const t=rc("canvas");return t.style.display="block",t}const Em={};function Do(t){t in Em||(Em[t]=!0,console.warn(t))}function zS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function HS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===it&&(t.r=wi(t.r),t.g=wi(t.g),t.b=wi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===it&&(t.r=Fs(t.r),t.g=Fs(t.g),t.b=Fs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===ji?bc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const wm=[.64,.33,.3,.6,.15,.06],Tm=[.2126,.7152,.0722],Am=[.3127,.329],Cm=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rm=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[ro]:{primaries:wm,whitePoint:Am,transfer:bc,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:Tm,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:wm,whitePoint:Am,transfer:it,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:Tm,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}});let Jr;class GS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=rc("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class p_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class jt extends so{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=Ir,r=Ir,s=$n,o=Mi,a=xn,l=bi,c=jt.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=oo(),this.name="",this.source=new p_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Jv;jt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,n=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(u+1)/2,w=(h+d)/4,T=(f+_)/4,C=(g+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=T/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends so{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rt(0,0,e,n),this.scissorTest=!1,this.viewport=new rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new p_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends jS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class m_ extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||h!==g){let m=1-a;const u=l*d+c*p+h*g+f*_,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,u*v);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const x=a*v;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,f=f*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+h*f+l*p-c*d,e[n+1]=l*g+h*d+c*f-a*p,e[n+2]=c*g+h*p+a*d-l*f,e[n+3]=h*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new O,bm=new ya;class Ma{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Xa.subVectors(this.max,xo),es.subVectors(e.a,xo),ts.subVectors(e.b,xo),ns.subVectors(e.c,xo),Ni.subVectors(ts,es),Fi.subVectors(ns,ts),mr.subVectors(es,ns);let n=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!uu(n,es,ts,ns,Xa)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,es,ts,ns,Xa))?!1:(ja.crossVectors(Ni,Fi),n=[ja.x,ja.y,ja.z],uu(n,es,ts,ns,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,Wa=new Ma,es=new O,ts=new O,ns=new O,Ni=new O,Fi=new O,mr=new O,xo=new O,Xa=new O,ja=new O,gr=new O;function uu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const YS=new Ma,yo=new O,fu=new O;class kh{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):YS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(fu)),this.expandByPoint(yo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new O,du=new O,$a=new O,ki=new O,hu=new O,Ya=new O,pu=new O;class qS{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){du.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(du);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=ki.dot(this.direction),l=-ki.dot($a),c=ki.lengthSq(),h=Math.abs(1-o*o);let f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(du).addScaledVector($a,d),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),Ya.subVectors(i,e),pu.crossVectors(hu,Ya);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(ki,Ya));if(l<0)return null;const c=a*this.direction.dot(hu.cross(ki));if(c<0||l+c>o)return null;const h=-a*ki.dot(pu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,g=a*h,_=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=c*h,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=c*h,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*h,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,g=a*h,_=a*f;n[0]=l*h,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+_,n[5]=o*h,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*h,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Oi.crossVectors(i,mn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Oi.crossVectors(i,mn)),Oi.normalize(),qa.crossVectors(mn,Oi),r[0]=Oi.x,r[4]=qa.x,r[8]=mn.x,r[1]=Oi.y,r[5]=qa.y,r[9]=mn.y,r[2]=Oi.z,r[6]=qa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],v=i[3],y=i[7],x=i[11],b=i[15],w=r[0],T=r[4],C=r[8],S=r[12],M=r[1],R=r[5],D=r[9],I=r[13],B=r[2],H=r[6],W=r[10],q=r[14],L=r[3],$=r[7],Z=r[11],oe=r[15];return s[0]=o*w+a*M+l*B+c*L,s[4]=o*T+a*R+l*H+c*$,s[8]=o*C+a*D+l*W+c*Z,s[12]=o*S+a*I+l*q+c*oe,s[1]=h*w+f*M+d*B+p*L,s[5]=h*T+f*R+d*H+p*$,s[9]=h*C+f*D+d*W+p*Z,s[13]=h*S+f*I+d*q+p*oe,s[2]=g*w+_*M+m*B+u*L,s[6]=g*T+_*R+m*H+u*$,s[10]=g*C+_*D+m*W+u*Z,s[14]=g*S+_*I+m*q+u*oe,s[3]=v*w+y*M+x*B+b*L,s[7]=v*T+y*R+x*H+b*$,s[11]=v*C+y*D+x*W+b*Z,s[15]=v*S+y*I+x*q+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],v=f*m*c-_*d*c+_*l*p-a*m*p-f*l*u+a*d*u,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*u-o*d*u,x=h*_*c-g*f*c+g*a*p-o*_*p-h*a*u+o*f*u,b=g*f*l-h*_*l-g*a*d+o*_*d+h*a*m-o*f*m,w=n*v+i*y+r*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*u-i*d*u)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(h*m*s-g*d*s+g*r*p-n*m*p-h*r*u+n*d*u)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=x*T,e[9]=(g*f*s-h*_*s-g*i*p+n*_*p+h*i*u-n*f*u)*T,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(h*_*r-g*f*r+g*i*d-n*_*d-h*i*m+n*f*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,g=s*f,_=o*h,m=o*f,u=a*f,v=l*c,y=l*h,x=l*f,b=i.x,w=i.y,T=i.z;return r[0]=(1-(_+u))*b,r[1]=(p+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+u))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+y)*T,r[9]=(m-v)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,h=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Si)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h;let g,_;if(a===Si)g=(o+s)*f,_=-2*f;else if(a===ic)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new O,zn=new _t,KS=new O(0,0,0),ZS=new O(1,1,1),Oi=new O,qa=new O,mn=new O,Pm=new _t,Lm=new ya;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Dm=new O,rs=new ya,hi=new _t,Ka=new O,Mo=new O,JS=new O,e1=new ya,Im=new O(1,0,0),Um=new O(0,1,0),Nm=new O(0,0,1),Fm={type:"added"},t1={type:"removed"},ss={type:"childadded",child:null},mu={type:"childremoved",child:null};class Nt extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new O,n=new li,i=new ya,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Fe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,n){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Mo,Ka,this.up):hi.lookAt(Ka,Mo,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(hi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fm),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(t1),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fm),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,pi=new O,gu=new O,mi=new O,os=new O,as=new O,km=new O,vu=new O,_u=new O,xu=new O,yu=new rt,Mu=new rt,Su=new rt;class jn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),pi.subVectors(i,n),gu.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(pi),l=Hn.dot(gu),c=pi.dot(pi),h=pi.dot(gu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return yu.setScalar(0),Mu.setScalar(0),Su.setScalar(0),yu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yu,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Su,s.z),o}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),pi.subVectors(e,n),Hn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),vu.subVectors(e,i);const l=os.dot(vu),c=as.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const h=os.dot(_u),f=as.dot(_u);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(os,o);xu.subVectors(e,s);const p=os.dot(xu),g=as.dot(xu);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(as,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return km.subVectors(s,r),a=(f-h)/(f-h+(p-g)),n.copy(r).addScaledVector(km,a);const u=1/(m+_+d);return o=_*u,a=d*u,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=Fh(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Eu(o,s,e+1/3),this.g=Eu(o,s,e),this.b=Eu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zt){const i=v_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return $e.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Zt){$e.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Za);const i=jo(Bi.h,Za.h,n),r=jo(Bi.s,Za.s,n),s=jo(Bi.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Be;Be.NAMES=v_;let n1=0;class Sa extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=oo(),this.name="",this.blending=Us,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=Bf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Of&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sc extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new O,Qa=new qe;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}}class __ extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x_ extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let i1=0;const An=new _t,wu=new Nt,ls=new O,gn=new Ma,So=new Ma,Pt=new O;class Li extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?x_:__)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(gn.min,So.min),gn.expandByPoint(Pt),Pt.addVectors(gn.max,So.max),gn.expandByPoint(Pt)):(gn.expandByPoint(So.min),gn.expandByPoint(So.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Pt.add(ls)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new O,l[C]=new O;const c=new O,h=new O,f=new O,d=new qe,p=new qe,g=new qe,_=new O,m=new O;function u(C,S,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,D=M.count;for(let I=R,B=R+D;I<B;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new O,x=new O,b=new O,w=new O;function T(C){b.fromBufferAttribute(r,C),w.copy(b);const S=a[C];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(w,S);const R=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,D=M.count;for(let I=R,B=R+D;I<B;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new ai(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Om=new _t,vr=new qS,Ja=new kh,Bm=new O,el=new O,tl=new O,nl=new O,Tu=new O,il=new O,zm=new O,rl=new O;class Wt extends Nt{constructor(e=new Li,n=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Tu.fromBufferAttribute(f,e),o?il.addScaledVector(Tu,h):il.addScaledVector(Tu.sub(n),h))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Ja.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ja,Bm)===null||vr.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(Om.copy(s).invert(),vr.copy(e.ray).applyMatrix4(Om),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const w=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);r=sl(this,u,e,i,c,h,f,w,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=sl(this,o,e,i,c,h,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const w=x,T=x+1,C=x+2;r=sl(this,u,e,i,c,h,f,w,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const v=m,y=m+1,x=m+2;r=sl(this,o,e,i,c,h,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function r1(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const h=r1(t,e,n,i,el,tl,nl,zm);if(h){const f=new O;jn.getBarycoord(zm,el,tl,nl,f),r&&(h.uv=jn.getInterpolatedAttribute(r,a,l,c,f,new qe)),s&&(h.uv1=jn.getInterpolatedAttribute(s,a,l,c,f,new qe)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};jn.getNormal(el,tl,nl,d.normal),h.face=d,h.barycoord=f}return h}class hr extends Li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function g(_,m,u,v,y,x,b,w,T,C,S){const M=x/T,R=b/C,D=x/2,I=b/2,B=w/2,H=T+1,W=C+1;let q=0,L=0;const $=new O;for(let Z=0;Z<W;Z++){const oe=Z*R-I;for(let we=0;we<H;we++){const Ke=we*M-D;$[_]=Ke*v,$[m]=oe*y,$[u]=B,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[u]=w>0?1:-1,h.push($.x,$.y,$.z),f.push(we/T),f.push(1-Z/C),q+=1}}for(let Z=0;Z<C;Z++)for(let oe=0;oe<T;oe++){const we=d+oe+H*Z,Ke=d+oe+H*(Z+1),Y=d+(oe+1)+H*(Z+1),ne=d+(oe+1)+H*Z;l.push(we,Ke,ne),l.push(Ke,Y,ne),L+=6}a.addGroup(p,L,S),p+=L,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Qs(t[n]);for(const r in i)e[r]=i[r]}return e}function s1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function y_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const o1={clone:Qs,merge:qt};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new O,Hm=new qe,Vm=new qe;class ln extends M_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Vm),n.subVectors(Vm,Hm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class c1 extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new ln(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new ln(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new ln(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new ln(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new ln(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class S_ extends jt{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u1 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new S_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Wt(r,s),a=n.minFilter;return n.minFilter===Mi&&(n.minFilter=$n),new c1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Au=new O,f1=new O,d1=new Fe;class wr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Au.subVectors(i,n).cross(f1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||d1.getNormalMatrix(e),r=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new kh,ol=new O;class Oh{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],u=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-u).normalize(),i[1].setComponents(l+s,d+c,m+p,x+u).normalize(),i[2].setComponents(l+o,d+h,m+g,x+v).normalize(),i[3].setComponents(l-o,d-h,m-g,x-v).normalize(),i[4].setComponents(l-a,d-f,m-_,x-y).normalize(),n===Si)i[5].setComponents(l+a,d+f,m+_,x+y).normalize();else if(n===ic)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function h1(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Js extends Li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const v=u*d-o;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const y=v+c*u,x=v+c*(u+1),b=v+1+c*(u+1),w=v+1+c*u;p.push(y,x,w),p.push(x,b,w)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var p1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m1=`#ifdef USE_ALPHAHASH
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
#endif`,g1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C1=`#ifdef USE_IRIDESCENCE
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
#endif`,R1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k1=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
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
}`,nE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sE=`uniform bool receiveShadow;
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
#endif`,oE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ew=`#ifdef USE_SKINNING
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
#endif`,tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lw=`#ifdef USE_TRANSMISSION
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pw=`uniform sampler2D t2D;
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`#include <common>
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
}`,yw=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mw=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`uniform float scale;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Rw=`uniform vec3 diffuse;
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
}`,bw=`#define LAMBERT
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
}`,Pw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Lw=`#define MATCAP
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
}`,Dw=`#define MATCAP
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
}`,Iw=`#define NORMAL
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
}`,Uw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nw=`#define PHONG
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
}`,Fw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,kw=`#define STANDARD
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
}`,Ow=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Bw=`#define TOON
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
}`,zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hw=`uniform float size;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Ww=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Xw=`uniform float rotation;
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
}`,jw=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:p1,alphahash_pars_fragment:m1,alphamap_fragment:g1,alphamap_pars_fragment:v1,alphatest_fragment:_1,alphatest_pars_fragment:x1,aomap_fragment:y1,aomap_pars_fragment:M1,batching_pars_vertex:S1,batching_vertex:E1,begin_vertex:w1,beginnormal_vertex:T1,bsdfs:A1,iridescence_fragment:C1,bumpmap_pars_fragment:R1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:P1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:D1,color_fragment:I1,color_pars_fragment:U1,color_pars_vertex:N1,color_vertex:F1,common:k1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:B1,displacementmap_pars_vertex:z1,displacementmap_vertex:H1,emissivemap_fragment:V1,emissivemap_pars_fragment:G1,colorspace_fragment:W1,colorspace_pars_fragment:X1,envmap_fragment:j1,envmap_common_pars_fragment:$1,envmap_pars_fragment:Y1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:oE,envmap_vertex:K1,fog_vertex:Z1,fog_pars_vertex:Q1,fog_fragment:J1,fog_pars_fragment:eE,gradientmap_pars_fragment:tE,lightmap_pars_fragment:nE,lights_lambert_fragment:iE,lights_lambert_pars_fragment:rE,lights_pars_begin:sE,lights_toon_fragment:aE,lights_toon_pars_fragment:lE,lights_phong_fragment:cE,lights_phong_pars_fragment:uE,lights_physical_fragment:fE,lights_physical_pars_fragment:dE,lights_fragment_begin:hE,lights_fragment_maps:pE,lights_fragment_end:mE,logdepthbuf_fragment:gE,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:ME,map_particle_fragment:SE,map_particle_pars_fragment:EE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:TE,morphinstance_vertex:AE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:bE,morphtarget_vertex:PE,normal_fragment_begin:LE,normal_fragment_maps:DE,normal_pars_fragment:IE,normal_pars_vertex:UE,normal_vertex:NE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:zE,opaque_fragment:HE,packing:VE,premultiplied_alpha_fragment:GE,project_vertex:WE,dithering_fragment:XE,dithering_pars_fragment:jE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:KE,shadowmap_vertex:ZE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:ew,skinning_vertex:tw,skinnormal_vertex:nw,specularmap_fragment:iw,specularmap_pars_fragment:rw,tonemapping_fragment:sw,tonemapping_pars_fragment:ow,transmission_fragment:aw,transmission_pars_fragment:lw,uv_pars_fragment:cw,uv_pars_vertex:uw,uv_vertex:fw,worldpos_vertex:dw,background_vert:hw,background_frag:pw,backgroundCube_vert:mw,backgroundCube_frag:gw,cube_vert:vw,cube_frag:_w,depth_vert:xw,depth_frag:yw,distanceRGBA_vert:Mw,distanceRGBA_frag:Sw,equirect_vert:Ew,equirect_frag:ww,linedashed_vert:Tw,linedashed_frag:Aw,meshbasic_vert:Cw,meshbasic_frag:Rw,meshlambert_vert:bw,meshlambert_frag:Pw,meshmatcap_vert:Lw,meshmatcap_frag:Dw,meshnormal_vert:Iw,meshnormal_frag:Uw,meshphong_vert:Nw,meshphong_frag:Fw,meshphysical_vert:kw,meshphysical_frag:Ow,meshtoon_vert:Bw,meshtoon_frag:zw,points_vert:Hw,points_frag:Vw,shadow_vert:Gw,shadow_frag:Ww,sprite_vert:Xw,sprite_frag:jw},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ti={basic:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:qt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:qt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:qt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:qt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:qt([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const al={r:0,b:0,g:0},xr=new li,$w=new _t;function Yw(t,e,n,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?u(a,l):x&&x.isColor&&(u(x,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Rc)?(h===void 0&&(h=new Wt(new hr(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),xr.copy(y.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($w.makeRotationFromEuler(xr)),h.material.toneMapped=$e.getTransfer(x.colorSpace)!==it,(f!==x||d!==x.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Wt(new Js(2,2),new cr({name:"BackgroundMaterial",uniforms:Qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(al,y_(t)),i.buffers.color.setClear(al.r,al.g,al.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:_,addToRenderList:m}}function qw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,R,D,I,B){let H=!1;const W=f(I,D,R);s!==W&&(s=W,c(s.object)),H=p(M,I,D,B),H&&g(M,I,D,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(M,R,D,I),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function f(M,R,D){const I=D.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let H=B[R.id];H===void 0&&(H={},B[R.id]=H);let W=H[I];return W===void 0&&(W=d(l()),H[I]=W),W}function d(M){const R=[],D=[],I=[];for(let B=0;B<n;B++)R[B]=0,D[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,R,D,I){const B=s.attributes,H=R.attributes;let W=0;const q=D.getAttributes();for(const L in q)if(q[L].location>=0){const Z=B[L];let oe=H[L];if(oe===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function g(M,R,D,I){const B={},H=R.attributes;let W=0;const q=D.getAttributes();for(const L in q)if(q[L].location>=0){let Z=H[L];Z===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),B[L]=oe,W++}s.attributes=B,s.attributesNum=W,s.index=I}function _(){const M=s.newAttributes;for(let R=0,D=M.length;R<D;R++)M[R]=0}function m(M){u(M,0)}function u(M,R){const D=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;D[M]=1,I[M]===0&&(t.enableVertexAttribArray(M),I[M]=1),B[M]!==R&&(t.vertexAttribDivisor(M,R),B[M]=R)}function v(){const M=s.newAttributes,R=s.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==M[D]&&(t.disableVertexAttribArray(D),R[D]=0)}function y(M,R,D,I,B,H,W){W===!0?t.vertexAttribIPointer(M,R,D,B,H):t.vertexAttribPointer(M,R,D,I,B,H)}function x(M,R,D,I){_();const B=I.attributes,H=D.getAttributes(),W=R.defaultAttributeValues;for(const q in H){const L=H[q];if(L.location>=0){let $=B[q];if($===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const Z=$.normalized,oe=$.itemSize,we=e.get($);if(we===void 0)continue;const Ke=we.buffer,Y=we.type,ne=we.bytesPerElement,ge=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===Ph;if($.isInterleavedBufferAttribute){const ae=$.data,Pe=ae.stride,Ie=$.offset;if(ae.isInstancedInterleavedBuffer){for(let ze=0;ze<L.locationSize;ze++)u(L.location+ze,ae.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ze=0;ze<L.locationSize;ze++)m(L.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ze=0;ze<L.locationSize;ze++)y(L.location+ze,oe/L.locationSize,Y,Z,Pe*ne,(Ie+oe/L.locationSize*ze)*ne,ge)}else{if($.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)u(L.location+ae,$.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ae=0;ae<L.locationSize;ae++)y(L.location+ae,oe/L.locationSize,Y,Z,oe*ne,oe/L.locationSize*ae*ne,ge)}}else if(W!==void 0){const Z=W[q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function b(){C();for(const M in i){const R=i[M];for(const D in R){const I=R[D];for(const B in I)h(I[B].object),delete I[B];delete R[D]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const D in R){const I=R[D];for(const B in I)h(I[B].object),delete I[B];delete R[D]}delete i[M.id]}function T(M){for(const R in i){const D=i[R];if(D[M.id]===void 0)continue;const I=D[M.id];for(const B in I)h(I[B].object),delete I[B];delete D[M.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Kw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==xn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!C)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:w}}function Qw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,y=v*4;let x=u.clippingState||null;l.value=x,x=h(g,d,y,p);for(let b=0;b!==y;++b)x[b]=n[b];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jw(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=$s:a===Yf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new u1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class eT extends M_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,Gm=[.125,.215,.35,.446,.526,.582],Rr=20,Cu=new eT,Wm=new Be;let Ru=null,bu=0,Pu=0,Lu=!1;const Tr=(1+Math.sqrt(5))/2,fs=1/Tr,Xm=[new O(-Tr,fs,0),new O(Tr,fs,0),new O(-fs,0,Tr),new O(fs,0,Tr),new O(0,Tr,-fs),new O(0,Tr,fs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,bu,Pu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:xa,format:xn,colorSpace:ro,depthBuffer:!1},r=jm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(s)),this._blurMaterial=nT(s,e,n)}return r}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r){const a=new ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wm),h.toneMapping=sr,h.autoClear=!1;const p=new sc({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Wt(new hr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Wm),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const y=this._cubeSize;ll(r,v*y,u>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xm[(r-s-1)%Xm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Wt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const u=[];let v=0;for(let T=0;T<Rr;++T){const C=T/_,S=Math.exp(-C*C/2);u.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-Cs?r-y+Cs:0),w=4*(this._cubeSize-x);ll(n,b,w,3*x,2*x),l.setRenderTarget(n),l.render(f,Cu)}}function tT(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+Gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cs?l=Gm[o-t+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,u=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,C=w>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(S,_*g*w),y.set(d,m*g*w);const M=[w,w,w,w,w,w];x.set(M,u*g*w)}const b=new Li;b.setAttribute("position",new ai(v,_)),b.setAttribute("uv",new ai(y,m)),b.setAttribute("faceIndex",new ai(x,u)),e.push(b),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jm(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nT(t,e,n){const i=new Float32Array(Rr),r=new O(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $m(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ym(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function iT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Yf,h=l===$s||l===Ys;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Sd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new Sd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function rT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Do("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],w=v[y+1],T=v[y+2];d.push(b,w,w,T,T,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,w=y+1,T=y+2;d.push(b,w,w,T,T,b)}}else return;const m=new(h_(d)?x_:__)(d,1);m.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function oT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*_[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function aT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lT(t,e,n){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*f),C=new m_(T,b,w,f);C.type=ri,C.needsUpdate=!0;const S=x*4;for(let R=0;R<f;R++){const D=u[R],I=v[R],B=y[R],H=b*w*4*R;for(let W=0;W<D.count;W++){const q=W*S;g===!0&&(r.fromBufferAttribute(D,W),T[H+q+0]=r.x,T[H+q+1]=r.y,T[H+q+2]=r.z,T[H+q+3]=0),_===!0&&(r.fromBufferAttribute(I,W),T[H+q+4]=r.x,T[H+q+5]=r.y,T[H+q+6]=r.z,T[H+q+7]=0),m===!0&&(r.fromBufferAttribute(B,W),T[H+q+8]=r.x,T[H+q+9]=r.y,T[H+q+10]=r.z,T[H+q+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new qe(b,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function cT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class w_ extends jt{constructor(e,n,i,r,s,o,a,l,c,h=Ns){if(h!==Ns&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ns&&(i=Xr),i===void 0&&h===Ks&&(i=qs),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const T_=new jt,qm=new w_(1,1),A_=new m_,C_=new $S,R_=new S_,Km=[],Zm=[],Qm=new Float32Array(16),Jm=new Float32Array(9),eg=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;eg.set(i),t.uniformMatrix2fv(this.addr,!1,eg),bt(n,i)}}function mT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),bt(n,i)}}function gT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Qm.set(i),t.uniformMatrix4fv(this.addr,!1,Qm),bt(n,i)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qm.compareFunction=d_,s=qm):s=T_,n.setTexture2D(e||s,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C_,r)}function CT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||R_,r)}function RT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||A_,r)}function bT(t){switch(t){case 5126:return uT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ST;case 36295:return ET;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}function PT(t,e){t.uniform1fv(this.addr,e)}function LT(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function DT(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function IT(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function UT(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NT(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FT(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kT(t,e){t.uniform1iv(this.addr,e)}function OT(t,e){t.uniform2iv(this.addr,e)}function BT(t,e){t.uniform3iv(this.addr,e)}function zT(t,e){t.uniform4iv(this.addr,e)}function HT(t,e){t.uniform1uiv(this.addr,e)}function VT(t,e){t.uniform2uiv(this.addr,e)}function GT(t,e){t.uniform3uiv(this.addr,e)}function WT(t,e){t.uniform4uiv(this.addr,e)}function XT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||T_,s[o])}function jT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||C_,s[o])}function $T(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||R_,s[o])}function YT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||A_,s[o])}function qT(t){switch(t){case 5126:return PT;case 35664:return LT;case 35665:return DT;case 35666:return IT;case 35674:return UT;case 35675:return NT;case 35676:return FT;case 5124:case 35670:return kT;case 35667:case 35671:return OT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return VT;case 36295:return GT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return YT}}class KT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bT(n.type)}}class ZT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qT(n.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function tg(t,e){t.seq.push(e),t.map[e.id]=e}function JT(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),o=Du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tg(n,c===void 0?new KT(a,t,e):new ZT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new QT(a),tg(n,f)),n=f}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);JT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ng(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eA=37297;let tA=0;function nA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ig=new Fe;function iA(t){$e._getMatrix(ig,$e.workingColorSpace,t);const e=`mat3( ${ig.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case bc:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+nA(t.getShaderSource(e),o)}else return r}function rA(t,e){const n=iA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sA(t,e){let n;switch(e){case oS:n="Linear";break;case aS:n="Reinhard";break;case lS:n="Cineon";break;case Qv:n="ACESFilmic";break;case uS:n="AgX";break;case fS:n="Neutral";break;case cS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cl=new O;function oA(){$e.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),n=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function lA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Io(t){return t!==""}function sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(uA,dA)}const fA=new Map;function dA(t,e){let n=Oe[e];if(n===void 0){const i=fA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(n)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(t){return t.replace(hA,pA)}function pA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===BM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function gA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zv:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function xA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mA(n),c=gA(n),h=vA(n),f=_A(n),d=xA(n),p=aA(n),g=lA(s),_=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Io).join(`
`),u.length>0&&(u+=`
`)):(m=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),u=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==sr?sA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,rA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),o=Ed(o),o=sg(o,n),o=og(o,n),a=Ed(a),a=sg(a,n),a=og(a,n),o=ag(o),a=ag(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=v+m+o,x=v+u+a,b=ng(r,r.VERTEX_SHADER,y),w=ng(r,r.FRAGMENT_SHADER,x);r.attachShader(_,b),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(b).trim(),B=r.getShaderInfoLog(w).trim();let H=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,w);else{const q=rg(r,b,"vertex"),L=rg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+q+`
`+L)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:H,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:u}})}r.deleteShader(b),r.deleteShader(w),C=new bl(r,_),S=cA(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,eA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let MA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=MA++,this.code=e,this.usedTimes=0}}function wA(t,e,n,i,r,s,o){const a=new g_,l=new SA,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,D,I){const B=D.fog,H=I.geometry,W=S.isMeshStandardMaterial?D.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),L=q&&q.mapping===Rc?q.image.height:null,$=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Z!==void 0?Z.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let Ke,Y,ne,ge;if($){const tt=ti[$];Ke=tt.vertexShader,Y=tt.fragmentShader}else Ke=S.vertexShader,Y=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const ae=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,ze=I.isBatchedMesh===!0,mt=!!S.map,Xe=!!S.matcap,St=!!q,k=!!S.aoMap,wn=!!S.lightMap,Ve=!!S.bumpMap,Ge=!!S.normalMap,Re=!!S.displacementMap,ct=!!S.emissiveMap,Ce=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,z=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,K=S.sheen>0,Te=S.transmission>0,fe=E&&!!S.anisotropyMap,ve=z&&!!S.clearcoatMap,je=z&&!!S.clearcoatNormalMap,ie=z&&!!S.clearcoatRoughnessMap,_e=ee&&!!S.iridescenceMap,be=ee&&!!S.iridescenceThicknessMap,Le=K&&!!S.sheenColorMap,xe=K&&!!S.sheenRoughnessMap,We=!!S.specularMap,ke=!!S.specularColorMap,ot=!!S.specularIntensityMap,U=Te&&!!S.transmissionMap,ue=Te&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,pe=S.alphaTest>0,de=!!S.alphaHash,Ue=!!S.extensions;let yt=sr;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=t.toneMapping);const kt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:Y,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ze,batchingColor:ze&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ro,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:Xe,envMap:St,envMapMode:St&&q.mapping,envMapCubeUVHeight:L,aoMap:k,lightMap:wn,bumpMap:Ve,normalMap:Ge,displacementMap:d&&Re,emissiveMap:ct,normalMapObjectSpace:Ge&&S.normalMapType===pS,normalMapTangentSpace:Ge&&S.normalMapType===f_,metalnessMap:Ce,roughnessMap:P,anisotropy:E,anisotropyMap:fe,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:je,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:be,sheen:K,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:We,specularColorMap:ke,specularIntensityMap:ot,transmission:Te,transmissionMap:U,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Us&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:de,combine:S.combine,mapUv:mt&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:wn&&_(S.lightMap.channel),bumpMapUv:Ve&&_(S.bumpMap.channel),normalMapUv:Ge&&_(S.normalMap.channel),displacementMapUv:Re&&_(S.displacementMap.channel),emissiveMapUv:ct&&_(S.emissiveMap.channel),metalnessMapUv:Ce&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(S.sheenRoughnessMap.channel),specularMapUv:We&&_(S.specularMap.channel),specularColorMapUv:ke&&_(S.specularColorMap.channel),specularIntensityMapUv:ot&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ge||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(mt||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:ct&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let R;if(M){const D=ti[M];R=o1.clone(D.uniforms)}else R=S.uniforms;return R}function b(S,M){let R;for(let D=0,I=h.length;D<I;D++){const B=h[D];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new yA(t,M,S,s),h.push(R)),R}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function TA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function AA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ug(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),e++,u}function a(f,d,p,g,_,m){const u=o(f,d,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,g,_,m){const u=o(f,d,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||AA),i.length>1&&i.sort(d||cg),r.length>1&&r.sort(d||cg)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function CA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ug,t.set(i,[o])):r>=s.length?(o=new ug,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Be};break;case"SpotLight":n={position:new O,direction:new O,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function bA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PA=0;function LA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DA(t){const e=new RA,n=bA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new _t,o=new _t;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,v=0,y=0,x=0,b=0,w=0,T=0;c.sort(LA);for(let S=0,M=c.length;S<M;S++){const R=c[S],D=R.color,I=R.intensity,B=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*I,f+=D.g*I,d+=D.b*I;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],I);T++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,L=n.get(R);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=W,p++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(D).multiplyScalar(I),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const q=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,q.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[_]=q.matrix,R.castShadow){const L=n.get(R);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=H,x++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(D).multiplyScalar(I),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const q=R.shadow,L=n.get(R);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(I),W.groundColor.copy(R.groundColor).multiplyScalar(I),i.hemi[u]=W,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=T,i.version=PA++)}function l(c,h){let f=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const y=c[u];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function fg(t){const e=new DA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fg(t),e.set(r,[a])):s>=o.length?(a=new fg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class b_ extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UA extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kA(t,e,n){let i=new Oh;const r=new qe,s=new qe,o=new rt,a=new b_({depthPacking:u_}),l=new UA,c={},h=n.maxTextureSize,f={[lr]:tn,[tn]:lr,[ii]:ii},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:NA,fragmentShader:FA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let u=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),D=t.state;D.setBlending(rr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=u!==gi&&this.type===gi,B=u===gi&&this.type!==gi;for(let H=0,W=w.length;H<W;H++){const q=w[H],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||I===!0||B===!0){const oe=this.type!==gi?{minFilter:hn,magFilter:hn}:{};L.map!==null&&L.map.dispose(),L.map=new jr(r.x,r.y,oe),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let oe=0;oe<Z;oe++){const we=L.getViewport(oe);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),D.viewport(o),L.updateMatrices(q,oe),i=L.getFrustum(),x(T,C,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===gi&&v(L,C),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,R)};function v(w,T){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,C,p,_,null)}function y(w,T,C,S){let M=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=M.uuid,I=T.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let H=B[I];H===void 0&&(H=M.clone(),B[I]=H,T.addEventListener("dispose",b)),M=H}if(M.visible=T.visible,M.wireframe=T.wireframe,S===gi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=t.properties.get(M);D.light=C}return M}function x(w,T,C,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=e.update(w),B=w.material;if(Array.isArray(B)){const H=I.groups;for(let W=0,q=H.length;W<q;W++){const L=H[W],$=B[L.materialIndex];if($&&$.visible){const Z=y(w,$,S,M);w.onBeforeShadow(t,w,T,C,I,Z,L),t.renderBufferDirect(C,null,I,Z,w,L),w.onAfterShadow(t,w,T,C,I,Z,L)}}}else if(B.visible){const H=y(w,B,S,M);w.onBeforeShadow(t,w,T,C,I,H,null),t.renderBufferDirect(C,null,I,H,w,null),w.onAfterShadow(t,w,T,C,I,H,null)}}const D=w.children;for(let I=0,B=D.length;I<B;I++)x(D[I],T,C,S,M)}function b(w){w.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const OA={[zf]:Hf,[Vf]:Xf,[Gf]:jf,[js]:Wf,[Hf]:zf,[Xf]:Vf,[jf]:Gf,[Wf]:js};function BA(t,e){function n(){let U=!1;const ue=new rt;let X=null;const J=new rt(0,0,0,0);return{setMask:function(pe){X!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){U=pe},setClear:function(pe,de,Ue,yt,kt){kt===!0&&(pe*=yt,de*=yt,Ue*=yt),ue.set(pe,de,Ue,yt),J.equals(ue)===!1&&(t.clearColor(pe,de,Ue,yt),J.copy(ue))},reset:function(){U=!1,X=null,J.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,X=null,J=null,pe=null;return{setReversed:function(de){if(ue!==de){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const yt=pe;pe=null,this.setClear(yt)}ue=de},getReversed:function(){return ue},setTest:function(de){de?ae(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(de){X!==de&&!U&&(t.depthMask(de),X=de)},setFunc:function(de){if(ue&&(de=OA[de]),J!==de){switch(de){case zf:t.depthFunc(t.NEVER);break;case Hf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case jf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){pe!==de&&(ue&&(de=1-de),t.clearDepth(de),pe=de)},reset:function(){U=!1,X=null,J=null,pe=null,ue=!1}}}function r(){let U=!1,ue=null,X=null,J=null,pe=null,de=null,Ue=null,yt=null,kt=null;return{setTest:function(tt){U||(tt?ae(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!U&&(t.stencilMask(tt),ue=tt)},setFunc:function(tt,Fn,ci){(X!==tt||J!==Fn||pe!==ci)&&(t.stencilFunc(tt,Fn,ci),X=tt,J=Fn,pe=ci)},setOp:function(tt,Fn,ci){(de!==tt||Ue!==Fn||yt!==ci)&&(t.stencilOp(tt,Fn,ci),de=tt,Ue=Fn,yt=ci)},setLocked:function(tt){U=tt},setClear:function(tt){kt!==tt&&(t.clearStencil(tt),kt=tt)},reset:function(){U=!1,ue=null,X=null,J=null,pe=null,de=null,Ue=null,yt=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,v=null,y=null,x=null,b=null,w=null,T=new Be(0,0,0),C=0,S=!1,M=null,R=null,D=null,I=null,B=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=q>=1):L.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=q>=2);let $=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),Ke=new rt().fromArray(oe),Y=new rt().fromArray(we);function ne(U,ue,X,J){const pe=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<X;Ue++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return de}const ge={};ge[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(js),Ve(!1),Ge(mm),ae(t.CULL_FACE),k(rr);function ae(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Ie(U,ue){return f[U]!==ue?(t.bindFramebuffer(U,ue),f[U]=ue,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ze(U,ue){let X=p,J=!1;if(U){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));const pe=U.textures;if(X.length!==pe.length||X[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ue=pe.length;de<Ue;de++)X[de]=t.COLOR_ATTACHMENT0+de;X.length=pe.length,J=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,J=!0);J&&t.drawBuffers(X)}function mt(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const Xe={[Cr]:t.FUNC_ADD,[HM]:t.FUNC_SUBTRACT,[VM]:t.FUNC_REVERSE_SUBTRACT};Xe[GM]=t.MIN,Xe[WM]=t.MAX;const St={[XM]:t.ZERO,[jM]:t.ONE,[$M]:t.SRC_COLOR,[Of]:t.SRC_ALPHA,[JM]:t.SRC_ALPHA_SATURATE,[ZM]:t.DST_COLOR,[qM]:t.DST_ALPHA,[YM]:t.ONE_MINUS_SRC_COLOR,[Bf]:t.ONE_MINUS_SRC_ALPHA,[QM]:t.ONE_MINUS_DST_COLOR,[KM]:t.ONE_MINUS_DST_ALPHA,[eS]:t.CONSTANT_COLOR,[tS]:t.ONE_MINUS_CONSTANT_COLOR,[nS]:t.CONSTANT_ALPHA,[iS]:t.ONE_MINUS_CONSTANT_ALPHA};function k(U,ue,X,J,pe,de,Ue,yt,kt,tt){if(U===rr){_===!0&&(Pe(t.BLEND),_=!1);return}if(_===!1&&(ae(t.BLEND),_=!0),U!==zM){if(U!==m||tt!==S){if((u!==Cr||x!==Cr)&&(t.blendEquation(t.FUNC_ADD),u=Cr,x=Cr),tt)switch(U){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.ONE,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,b=null,w=null,T.set(0,0,0),C=0,m=U,S=tt}return}pe=pe||ue,de=de||X,Ue=Ue||J,(ue!==u||pe!==x)&&(t.blendEquationSeparate(Xe[ue],Xe[pe]),u=ue,x=pe),(X!==v||J!==y||de!==b||Ue!==w)&&(t.blendFuncSeparate(St[X],St[J],St[de],St[Ue]),v=X,y=J,b=de,w=Ue),(yt.equals(T)===!1||kt!==C)&&(t.blendColor(yt.r,yt.g,yt.b,kt),T.copy(yt),C=kt),m=U,S=!1}function wn(U,ue){U.side===ii?Pe(t.CULL_FACE):ae(t.CULL_FACE);let X=U.side===tn;ue&&(X=!X),Ve(X),U.blending===Us&&U.transparent===!1?k(rr):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){M!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),M=U)}function Ge(U){U!==kM?(ae(t.CULL_FACE),U!==R&&(U===mm?t.cullFace(t.BACK):U===OM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),R=U}function Re(U){U!==D&&(W&&t.lineWidth(U),D=U)}function ct(U,ue,X){U?(ae(t.POLYGON_OFFSET_FILL),(I!==ue||B!==X)&&(t.polygonOffset(ue,X),I=ue,B=X)):Pe(t.POLYGON_OFFSET_FILL)}function Ce(U){U?ae(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+H-1),$!==U&&(t.activeTexture(U),$=U)}function E(U,ue,X){X===void 0&&($===null?X=t.TEXTURE0+H-1:X=$);let J=Z[X];J===void 0&&(J={type:void 0,texture:void 0},Z[X]=J),(J.type!==U||J.texture!==ue)&&($!==X&&(t.activeTexture(X),$=X),t.bindTexture(U,ue||ge[U]),J.type=U,J.texture=ue)}function z(){const U=Z[$];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){Ke.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function xe(U){Y.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function We(U,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let J=X.get(U);J===void 0&&(J=t.getUniformBlockIndex(ue,U.name),X.set(U,J))}function ke(U,ue){const J=c.get(ue).get(U);l.get(ue)!==J&&(t.uniformBlockBinding(ue,J,U.__bindingPointIndex),l.set(ue,J))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,Z={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,v=null,y=null,x=null,b=null,w=null,T=new Be(0,0,0),C=0,S=!1,M=null,R=null,D=null,I=null,B=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Pe,bindFramebuffer:Ie,drawBuffers:ze,useProgram:mt,setBlending:k,setMaterial:wn,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Re,setPolygonOffset:ct,setScissorTest:Ce,activeTexture:P,bindTexture:E,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:_e,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:je,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Le,viewport:xe,reset:ot}}function dg(t,e,n,i){const r=zA(i);switch(n){case i_:return t*e;case s_:return t*e;case o_:return t*e*2;case a_:return t*e/r.components*r.byteLength;case Ih:return t*e/r.components*r.byteLength;case l_:return t*e*2/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case r_:return t*e*3/r.components*r.byteLength;case xn:return t*e*4/r.components*r.byteLength;case Nh:return t*e*4/r.components*r.byteLength;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Jf:return Math.max(t,16)*Math.max(e,8)/4;case Kf:case Qf:return Math.max(t,8)*Math.max(e,8)/2;case ed:case td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ld:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case vd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16;case c_:case xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yd:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zA(t){switch(t){case bi:case e_:return{byteLength:1,components:1};case da:case t_:case xa:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Xr:case Ph:case ri:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):rc("canvas")}function _(P,E,z){let Q=1;const ee=Ce(P);if((ee.width>z||ee.height>z)&&(Q=z/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*ee.width),Te=Math.floor(Q*ee.height);f===void 0&&(f=g(K,Te));const fe=E?g(K,Te):f;return fe.width=K,fe.height=Te,fe.getContext("2d").drawImage(P,0,0,K,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Te+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,E,z,Q,ee=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===t.RED&&(z===t.FLOAT&&(K=t.R32F),z===t.HALF_FLOAT&&(K=t.R16F),z===t.UNSIGNED_BYTE&&(K=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.R8UI),z===t.UNSIGNED_SHORT&&(K=t.R16UI),z===t.UNSIGNED_INT&&(K=t.R32UI),z===t.BYTE&&(K=t.R8I),z===t.SHORT&&(K=t.R16I),z===t.INT&&(K=t.R32I)),E===t.RG&&(z===t.FLOAT&&(K=t.RG32F),z===t.HALF_FLOAT&&(K=t.RG16F),z===t.UNSIGNED_BYTE&&(K=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RG8UI),z===t.UNSIGNED_SHORT&&(K=t.RG16UI),z===t.UNSIGNED_INT&&(K=t.RG32UI),z===t.BYTE&&(K=t.RG8I),z===t.SHORT&&(K=t.RG16I),z===t.INT&&(K=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RGB8UI),z===t.UNSIGNED_SHORT&&(K=t.RGB16UI),z===t.UNSIGNED_INT&&(K=t.RGB32UI),z===t.BYTE&&(K=t.RGB8I),z===t.SHORT&&(K=t.RGB16I),z===t.INT&&(K=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),z===t.UNSIGNED_INT&&(K=t.RGBA32UI),z===t.BYTE&&(K=t.RGBA8I),z===t.SHORT&&(K=t.RGBA16I),z===t.INT&&(K=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),E===t.RGBA){const Te=ee?bc:$e.getTransfer(Q);z===t.FLOAT&&(K=t.RGBA32F),z===t.HALF_FLOAT&&(K=t.RGBA16F),z===t.UNSIGNED_BYTE&&(K=Te===it?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,E){let z;return P?E===null||E===Xr||E===qs?z=t.DEPTH24_STENCIL8:E===ri?z=t.DEPTH32F_STENCIL8:E===da&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xr||E===qs?z=t.DEPTH_COMPONENT24:E===ri?z=t.DEPTH_COMPONENT32F:E===da&&(z=t.DEPTH_COMPONENT16),z}function b(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),M(E)}function C(P){const E=i.get(P);if(E.__webglInit===void 0)return;const z=P.source,Q=d.get(z);if(Q){const ee=Q[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(P),Object.keys(Q).length===0&&d.delete(z)}i.remove(P)}function S(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const z=P.source,Q=d.get(z);delete Q[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ee=0;ee<E.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let Q=0,ee=z.length;Q<ee;Q++){const K=i.get(z[Q]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(P)}let R=0;function D(){R=0}function I(){const P=R;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function B(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){const z=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,P,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function W(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){Y(z,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function q(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){Y(z,P,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function L(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ne(z,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const $={[qf]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[nc]:t.MIRRORED_REPEAT},Z={[hn]:t.NEAREST,[dS]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Mi]:t.LINEAR_MIPMAP_LINEAR},oe={[mS]:t.NEVER,[MS]:t.ALWAYS,[gS]:t.LESS,[d_]:t.LEQUAL,[vS]:t.EQUAL,[yS]:t.GEQUAL,[_S]:t.GREATER,[xS]:t.NOTEQUAL};function we(P,E){if(E.type===ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===ou||E.magFilter===Ga||E.magFilter===Mi||E.minFilter===$n||E.minFilter===ou||E.minFilter===Ga||E.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,$[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Ga&&E.minFilter!==Mi||E.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const K=B(E);if(K!==P.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[K].usedTimes++;const Te=ee[P.__cacheKey];Te!==void 0&&(ee[P.__cacheKey].usedTimes--,Te.usedTimes===0&&S(E)),P.__cacheKey=K,P.__webglTexture=ee[K].texture}return z}function Y(P,E,z){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Ke(P,E),K=E.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+z);const Te=i.get(K);if(K.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const fe=$e.getPrimaries($e.workingColorSpace),ve=E.colorSpace===ji?null:$e.getPrimaries(E.colorSpace),je=E.colorSpace===ji||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ie=_(E.image,!1,r.maxTextureSize);ie=ct(E,ie);const _e=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let Le=y(E.internalFormat,_e,be,E.colorSpace,E.isVideoTexture);we(Q,E);let xe;const We=E.mipmaps,ke=E.isVideoTexture!==!0,ot=Te.__version===void 0||ee===!0,U=K.dataReady,ue=b(E,ie);if(E.isDepthTexture)Le=x(E.format===Ks,E.type),ot&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,null));else if(E.isDataTexture)if(We.length>0){ke&&ot&&n.texStorage2D(t.TEXTURE_2D,ue,Le,We[0].width,We[0].height);for(let X=0,J=We.length;X<J;X++)xe=We[X],ke?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,_e,be,xe.data):n.texImage2D(t.TEXTURE_2D,X,Le,xe.width,xe.height,0,_e,be,xe.data);E.generateMipmaps=!1}else ke?(ot&&n.texStorage2D(t.TEXTURE_2D,ue,Le,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,We[0].width,We[0].height,ie.depth);for(let X=0,J=We.length;X<J;X++)if(xe=We[X],E.format!==xn)if(_e!==null)if(ke){if(U)if(E.layerUpdates.size>0){const pe=dg(xe.width,xe.height,E.format,E.type);for(const de of E.layerUpdates){const Ue=xe.data.subarray(de*pe/xe.data.BYTES_PER_ELEMENT,(de+1)*pe/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,de,xe.width,xe.height,1,_e,Ue)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,ie.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,ie.depth,_e,be,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,ie.depth,0,_e,be,xe.data)}else{ke&&ot&&n.texStorage2D(t.TEXTURE_2D,ue,Le,We[0].width,We[0].height);for(let X=0,J=We.length;X<J;X++)xe=We[X],E.format!==xn?_e!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,_e,be,xe.data):n.texImage2D(t.TEXTURE_2D,X,Le,xe.width,xe.height,0,_e,be,xe.data)}else if(E.isDataArrayTexture)if(ke){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,ie.width,ie.height,ie.depth),U)if(E.layerUpdates.size>0){const X=dg(ie.width,ie.height,E.format,E.type);for(const J of E.layerUpdates){const pe=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,_e,be,pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(E.isData3DTexture)ke?(ot&&n.texStorage3D(t.TEXTURE_3D,ue,Le,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(E.isFramebufferTexture){if(ot)if(ke)n.texStorage2D(t.TEXTURE_2D,ue,Le,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let pe=0;pe<ue;pe++)n.texImage2D(t.TEXTURE_2D,pe,Le,X,J,0,_e,be,null),X>>=1,J>>=1}}else if(We.length>0){if(ke&&ot){const X=Ce(We[0]);n.texStorage2D(t.TEXTURE_2D,ue,Le,X.width,X.height)}for(let X=0,J=We.length;X<J;X++)xe=We[X],ke?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e,be,xe):n.texImage2D(t.TEXTURE_2D,X,Le,_e,be,xe);E.generateMipmaps=!1}else if(ke){if(ot){const X=Ce(ie);n.texStorage2D(t.TEXTURE_2D,ue,Le,X.width,X.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,be,ie);m(E)&&u(Q),Te.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ne(P,E,z){if(E.image.length!==6)return;const Q=Ke(P,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const K=i.get(ee);if(ee.version!==K.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const Te=$e.getPrimaries($e.workingColorSpace),fe=E.colorSpace===ji?null:$e.getPrimaries(E.colorSpace),ve=E.colorSpace===ji||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!je&&!ie?_e[J]=_(E.image[J],!0,r.maxCubemapSize):_e[J]=ie?E.image[J].image:E.image[J],_e[J]=ct(E,_e[J]);const be=_e[0],Le=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),We=y(E.internalFormat,Le,xe,E.colorSpace),ke=E.isVideoTexture!==!0,ot=K.__version===void 0||Q===!0,U=ee.dataReady;let ue=b(E,be);we(t.TEXTURE_CUBE_MAP,E);let X;if(je){ke&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,We,be.width,be.height);for(let J=0;J<6;J++){X=_e[J].mipmaps;for(let pe=0;pe<X.length;pe++){const de=X[pe];E.format!==xn?Le!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,de.width,de.height,Le,xe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,We,de.width,de.height,0,Le,xe,de.data)}}}else{if(X=E.mipmaps,ke&&ot){X.length>0&&ue++;const J=Ce(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,We,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Le,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,_e[J].width,_e[J].height,0,Le,xe,_e[J].data);for(let pe=0;pe<X.length;pe++){const Ue=X[pe].image[J].image;ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ue.width,Ue.height,Le,xe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,We,Ue.width,Ue.height,0,Le,xe,Ue.data)}}else{ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Le,xe,_e[J]);for(let pe=0;pe<X.length;pe++){const de=X[pe];ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Le,xe,de.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,We,Le,xe,de.image[J])}}}m(E)&&u(t.TEXTURE_CUBE_MAP),K.__version=ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ge(P,E,z,Q,ee,K){const Te=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),ve=y(z.internalFormat,Te,fe,z.colorSpace),je=i.get(E),ie=i.get(z);if(ie.__renderTarget=E,!je.__hasExternalTextures){const _e=Math.max(1,E.width>>K),be=Math.max(1,E.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,ve,_e,be,E.depth,0,Te,fe,null):n.texImage2D(ee,K,ve,_e,be,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,ie.__webglTexture,0,Ve(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,ie.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(P,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,K=x(E.stencilBuffer,ee),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ve(E);Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,K,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,K,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const Q=E.textures;for(let ee=0;ee<Q.length;ee++){const K=Q[ee],Te=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),ve=y(K.internalFormat,Te,fe,K.colorSpace),je=Ve(E);z&&Ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ve,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const ee=Q.__webglTexture,K=Ve(E);if(E.depthTexture.format===Ns)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ks)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const E=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,P)}else if(z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),ae(E.__webglDepthbuffer[Q],P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ae(E.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(P,E,z){const Q=i.get(P);E!==void 0&&ge(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ie(P)}function mt(P){const E=P.texture,z=i.get(P),Q=i.get(E);P.addEventListener("dispose",T);const ee=P.textures,K=P.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)z.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else z.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)z.__webglFramebuffer[fe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,ve=ee.length;fe<ve;fe++){const je=i.get(ee[fe]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ge(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const ve=ee[fe];z.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const je=s.convert(ve.format,ve.colorSpace),ie=s.convert(ve.type),_e=y(ve.internalFormat,je,ie,ve.colorSpace,P.isXRRenderTarget===!0),be=Ve(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),we(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ge(z.__webglFramebuffer[fe][ve],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ge(z.__webglFramebuffer[fe],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,ve=ee.length;fe<ve;fe++){const je=ee[fe],ie=i.get(je);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),we(t.TEXTURE_2D,je),ge(z.__webglFramebuffer,P,je,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(je)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),we(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ge(z.__webglFramebuffer[ve],P,E,t.COLOR_ATTACHMENT0,fe,ve);else ge(z.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,fe,0);m(E)&&u(fe),n.unbindTexture()}P.depthBuffer&&Ie(P)}function Xe(P){const E=P.textures;for(let z=0,Q=E.length;z<Q;z++){const ee=E[z];if(m(ee)){const K=v(P),Te=i.get(ee).__webglTexture;n.bindTexture(K,Te),u(K),n.unbindTexture()}}}const St=[],k=[];function wn(P){if(P.samples>0){if(Ge(P)===!1){const E=P.textures,z=P.width,Q=P.height;let ee=t.COLOR_BUFFER_BIT;const K=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),fe=E.length>1;if(fe)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const je=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,t.NEAREST),l===!0&&(St.length=0,k.length=0,St.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(St.push(K),k.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,k)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const je=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ve(P){return Math.min(r.maxSamples,P.samples)}function Ge(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ct(P,E){const z=P.colorSpace,Q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==ro&&z!==ji&&($e.getTransfer(z)===it?(Q!==xn||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=L,this.rebindTextures=ze,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function VA(t,e){function n(i,r=ji){let s;const o=$e.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return t.BYTE;if(i===t_)return t.SHORT;if(i===da)return t.UNSIGNED_SHORT;if(i===Ph)return t.INT;if(i===Xr)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===xa)return t.HALF_FLOAT;if(i===i_)return t.ALPHA;if(i===r_)return t.RGB;if(i===xn)return t.RGBA;if(i===s_)return t.LUMINANCE;if(i===o_)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===a_)return t.RED;if(i===Ih)return t.RED_INTEGER;if(i===l_)return t.RG;if(i===Uh)return t.RG_INTEGER;if(i===Nh)return t.RGBA_INTEGER;if(i===wl||i===Tl||i===Al||i===Cl)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kf||i===Zf||i===Qf||i===Jf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ed||i===td)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===id)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ad)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ld)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ud)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===md)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===vd||i===_d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c_||i===xd||i===yd||i===Md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class GA extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WA={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const XA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:XA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends so{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const _=new $A,m=n.getContextAttributes();let u=null,v=null;const y=[],x=[],b=new qe;let w=null;const T=new ln;T.viewport=new rt;const C=new ln;C.viewport=new rt;const S=[T,C],M=new GA;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=y[Y];return ne===void 0&&(ne=new Iu,y[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=y[Y];return ne===void 0&&(ne=new Iu,y[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=y[Y];return ne===void 0&&(ne=new Iu,y[Y]=ne),ne.getHandSpace()};function I(Y){const ne=x.indexOf(Y.inputSource);if(ne===-1)return;const ge=y[ne];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<y.length;Y++){const ne=x[Y];ne!==null&&(x[Y]=null,y[Y].disconnect(ne))}R=null,D=null,_.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,v=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jr(p.framebufferWidth,p.framebufferHeight,{format:xn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ks:Ns,ge=m.stencil?qs:Xr);const Pe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jr(d.textureWidth,d.textureHeight,{format:xn,type:bi,depthTexture:new w_(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let ne=0;ne<Y.removed.length;ne++){const ge=Y.removed[ne],ae=x.indexOf(ge);ae>=0&&(x[ae]=null,y[ae].disconnect(ge))}for(let ne=0;ne<Y.added.length;ne++){const ge=Y.added[ne];let ae=x.indexOf(ge);if(ae===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=x.length){x.push(ge),ae=Ie;break}else if(x[Ie]===null){x[Ie]=ge,ae=Ie;break}if(ae===-1)break}const Pe=y[ae];Pe&&Pe.connect(ge)}}const W=new O,q=new O;function L(Y,ne,ge){W.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const ae=W.distanceTo(q),Pe=ne.projectionMatrix.elements,Ie=ge.projectionMatrix.elements,ze=Pe[14]/(Pe[10]-1),mt=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],St=(Pe[9]-1)/Pe[5],k=(Pe[8]-1)/Pe[0],wn=(Ie[8]+1)/Ie[0],Ve=ze*k,Ge=ze*wn,Re=ae/(-k+wn),ct=Re*-k;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ce=ze+Re,P=mt+Re,E=Ve-ct,z=Ge+(ae-ct),Q=Xe*mt/P*Ce,ee=St*mt/P*Ce;Y.projectionMatrix.makePerspective(E,z,Q,ee,Ce,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,ge=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),M.near=C.near=T.near=ne,M.far=C.far=T.far=ge,(R!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,D=M.far),T.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const ae=Y.parent,Pe=M.cameras;$(M,ae);for(let Ie=0;Ie<Pe.length;Ie++)$(Pe[Ie],ae);Pe.length===2?L(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),Z(Y,M,ae)};function Z(Y,ne,ge){ge===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let oe=null;function we(Y,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ie=0;Ie<ge.length;Ie++){const ze=ge[Ie];let mt=null;if(p!==null)mt=p.getViewport(ze);else{const St=f.getViewSubImage(d,ze);mt=St.viewport,Ie===0&&(e.setRenderTargetTextures(v,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(v))}let Xe=S[Ie];Xe===void 0&&(Xe=new ln,Xe.layers.enable(Ie),Xe.viewport=new rt,S[Ie]=Xe),Xe.matrix.fromArray(ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(mt.x,mt.y,mt.width,mt.height),Ie===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Xe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ie=f.getDepthInformation(ge[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,r.renderState)}}for(let ge=0;ge<y.length;ge++){const ae=x[ge],Pe=y[ge];ae!==null&&Pe!==void 0&&Pe.update(ae,ne,c||o)}oe&&oe(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ke=new E_;Ke.setAnimationLoop(we),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const yr=new li,qA=new _t;function KA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,y_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,yr.copy(x),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(yr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(v,b);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const y=f();v.__bindingPointIndex=y;const x=t.createBuffer(),b=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],x=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,T=x.length;w<T;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(p(R,w,S,b)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let H=0;H<I.length;H++){const W=I[H],q=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,D+B,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,x,b){const w=v.value,T=y+"_"+x;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const C=b[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let T=0,C=y.length;T<C;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,R=S.length;M<R;M++){const D=S[M],I=Array.isArray(D.value)?D.value:[D.value];for(let B=0,H=I.length;B<H;B++){const W=I[B],q=_(W),L=x%b,$=L%q.boundary,Z=L+$;x+=$,Z!==0&&b-Z<q.storage&&(x+=b-Z),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=q.storage}}}const w=x%b;return w>0&&(x+=b-w),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class QA{constructor(e={}){const{canvas:n=BS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let b=!1,w=0,T=0,C=null,S=-1,M=null;const R=new rt,D=new rt;let I=null;const B=new Be(0);let H=0,W=n.width,q=n.height,L=1,$=null,Z=null;const oe=new rt(0,0,W,q),we=new rt(0,0,W,q);let Ke=!1;const Y=new Oh;let ne=!1,ge=!1;const ae=new _t,Pe=new _t,Ie=new O,ze=new rt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function St(){return C===null?L:1}let k=i;function wn(A,N){return n.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",de,!1),k===null){const N="webgl2";if(k=wn(N,A),k===null)throw wn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ve,Ge,Re,ct,Ce,P,E,z,Q,ee,K,Te,fe,ve,je,ie,_e,be,Le,xe,We,ke,ot,U;function ue(){Ve=new rT(k),Ve.init(),ke=new VA(k,Ve),Ge=new Zw(k,Ve,e,ke),Re=new BA(k,Ve),Ge.reverseDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),ct=new aT(k),Ce=new TA,P=new HA(k,Ve,Re,Ce,Ge,ke,ct),E=new Jw(x),z=new iT(x),Q=new h1(k),ot=new qw(k,Q),ee=new sT(k,Q,ct,ot),K=new cT(k,ee,Q,ct),Le=new lT(k,Ge,P),ie=new Qw(Ce),Te=new wA(x,E,z,Ve,Ge,ot,ie),fe=new KA(x,Ce),ve=new CA,je=new IA(Ve),be=new Yw(x,E,z,Re,K,p,l),_e=new kA(x,K,Ge),U=new ZA(k,ct,Ge,Re),xe=new Kw(k,Ve,ct),We=new oT(k,Ve,ct),ct.programs=Te.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=Ce,x.renderLists=ve,x.shadowMap=_e,x.state=Re,x.info=ct}ue();const X=new YA(x,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(W,q,!1))},this.getSize=function(A){return A.set(W,q)},this.setSize=function(A,N,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,q=N,n.width=Math.floor(A*L),n.height=Math.floor(N*L),V===!0&&(n.style.width=A+"px",n.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(W*L,q*L).floor()},this.setDrawingBufferSize=function(A,N,V){W=A,q=N,L=V,n.width=Math.floor(A*V),n.height=Math.floor(N*V),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,N,V,G){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,N,V,G),Re.viewport(R.copy(oe).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,N,V,G){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,N,V,G),Re.scissor(D.copy(we).multiplyScalar(L).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){Re.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(A=!0,N=!0,V=!0){let G=0;if(A){let F=!1;if(C!==null){const re=C.texture.format;F=re===Nh||re===Uh||re===Ih}if(F){const re=C.texture.type,he=re===bi||re===Xr||re===da||re===qs||re===Lh||re===Dh,ye=be.getClearColor(),Me=be.getClearAlpha(),De=ye.r,Ne=ye.g,Se=ye.b;he?(g[0]=De,g[1]=Ne,g[2]=Se,g[3]=Me,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=De,_[1]=Ne,_[2]=Se,_[3]=Me,k.clearBufferiv(k.COLOR,0,_))}else G|=k.COLOR_BUFFER_BIT}N&&(G|=k.DEPTH_BUFFER_BIT),V&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),je.dispose(),Ce.dispose(),E.dispose(),z.dispose(),K.dispose(),ot.dispose(),U.dispose(),Te.dispose(),X.dispose(),X.removeEventListener("sessionstart",qh),X.removeEventListener("sessionend",Kh),pr.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=ct.autoReset,N=_e.enabled,V=_e.autoUpdate,G=_e.needsUpdate,F=_e.type;ue(),ct.autoReset=A,_e.enabled=N,_e.autoUpdate=V,_e.needsUpdate=G,_e.type=F}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){const N=A.target;N.removeEventListener("dispose",Ue),yt(N)}function yt(A){kt(A),Ce.remove(A)}function kt(A){const N=Ce.get(A).programs;N!==void 0&&(N.forEach(function(V){Te.releaseProgram(V)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,V,G,F,re){N===null&&(N=mt);const he=F.isMesh&&F.matrixWorld.determinant()<0,ye=Y_(A,N,V,G,F);Re.setMaterial(G,he);let Me=V.index,De=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(V),Me===void 0)return;De=2}const Ne=V.drawRange,Se=V.attributes.position;let Ze=Ne.start*De,at=(Ne.start+Ne.count)*De;re!==null&&(Ze=Math.max(Ze,re.start*De),at=Math.min(at,(re.start+re.count)*De)),Me!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Me.count)):Se!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Se.count));const ut=at-Ze;if(ut<0||ut===1/0)return;ot.setup(F,G,ye,V,Me);let sn,Qe=xe;if(Me!==null&&(sn=Q.get(Me),Qe=We,Qe.setIndex(sn)),F.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*St()),Qe.setMode(k.LINES)):Qe.setMode(k.TRIANGLES);else if(F.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Re.setLineWidth(Ae*St()),F.isLineSegments?Qe.setMode(k.LINES):F.isLineLoop?Qe.setMode(k.LINE_LOOP):Qe.setMode(k.LINE_STRIP)}else F.isPoints?Qe.setMode(k.POINTS):F.isSprite&&Qe.setMode(k.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,ui=F._multiDrawCounts,Je=F._multiDrawCount,kn=Me?Q.get(Me).bytesPerElement:1,Kr=Ce.get(G).currentProgram.getUniforms();for(let pn=0;pn<Je;pn++)Kr.setValue(k,"_gl_DrawID",pn),Qe.render(Ae[pn]/kn,ui[pn])}else if(F.isInstancedMesh)Qe.renderInstances(Ze,ut,F.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ui=Math.min(V.instanceCount,Ae);Qe.renderInstances(Ze,ut,ui)}else Qe.render(Ze,ut)};function tt(A,N,V){A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Ta(A,N,V),A.side=lr,A.needsUpdate=!0,Ta(A,N,V),A.side=ii):Ta(A,N,V)}this.compile=function(A,N,V=null){V===null&&(V=A),u=je.get(V),u.init(N),y.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const G=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ye=re[he];tt(ye,V,F),G.add(ye)}else tt(re,V,F),G.add(re)}),y.pop(),u=null,G},this.compileAsync=function(A,N,V=null){const G=this.compile(A,N,V);return new Promise(F=>{function re(){if(G.forEach(function(he){Ce.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){F(A);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Fn=null;function ci(A){Fn&&Fn(A)}function qh(){pr.stop()}function Kh(){pr.start()}const pr=new E_;pr.setAnimationLoop(ci),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(A){Fn=A,X.setAnimationLoop(A),A===null?pr.stop():pr.start()},X.addEventListener("sessionstart",qh),X.addEventListener("sessionend",Kh),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,C),u=je.get(A,y.length),u.init(N),y.push(u),Pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),ge=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,ge),m=ve.get(A,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Ic(re,N,-1/0,x.sortObjects)}Ic(A,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,Z),Xe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xe&&be.addToRenderList(m,A),this.info.render.frame++,ne===!0&&ie.beginShadows();const V=u.state.shadowsArray;_e.render(V,A,N),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){const re=N.cameras;if(F.length>0)for(let he=0,ye=re.length;he<ye;he++){const Me=re[he];Qh(G,F,A,Me)}Xe&&be.render(A);for(let he=0,ye=re.length;he<ye;he++){const Me=re[he];Zh(m,A,Me,Me.viewport)}}else F.length>0&&Qh(G,F,A,N),Xe&&be.render(A),Zh(m,A,N);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,N),ot.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],ne===!0&&ie.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ic(A,N,V,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){G&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const he=K.update(A),ye=A.material;ye.visible&&m.push(A,he,ye,V,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const he=K.update(A),ye=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ze.copy(he.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(ye)){const Me=he.groups;for(let De=0,Ne=Me.length;De<Ne;De++){const Se=Me[De],Ze=ye[Se.materialIndex];Ze&&Ze.visible&&m.push(A,he,Ze,V,ze.z,Se)}}else ye.visible&&m.push(A,he,ye,V,ze.z,null)}}const re=A.children;for(let he=0,ye=re.length;he<ye;he++)Ic(re[he],N,V,G)}function Zh(A,N,V,G){const F=A.opaque,re=A.transmissive,he=A.transparent;u.setupLightsView(V),ne===!0&&ie.setGlobalState(x.clippingPlanes,V),G&&Re.viewport(R.copy(G)),F.length>0&&wa(F,N,V),re.length>0&&wa(re,N,V),he.length>0&&wa(he,N,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Qh(A,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new jr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?xa:bi,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=u.state.transmissionRenderTarget[G.id],he=G.viewport||R;re.setSize(he.z,he.w);const ye=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&be.render(V);const Me=x.toneMapping;x.toneMapping=sr;const De=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),ne===!0&&ie.setGlobalState(x.clippingPlanes,G),wa(A,V,G),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,Ze=N.length;Se<Ze;Se++){const at=N[Se],ut=at.object,sn=at.geometry,Qe=at.material,Ae=at.group;if(Qe.side===ii&&ut.layers.test(G.layers)){const ui=Qe.side;Qe.side=tn,Qe.needsUpdate=!0,Jh(ut,V,G,sn,Qe,Ae),Qe.side=ui,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re))}x.setRenderTarget(ye),x.setClearColor(B,H),De!==void 0&&(G.viewport=De),x.toneMapping=Me}function wa(A,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=A.length;F<re;F++){const he=A[F],ye=he.object,Me=he.geometry,De=G===null?he.material:G,Ne=he.group;ye.layers.test(V.layers)&&Jh(ye,N,V,Me,De,Ne)}}function Jh(A,N,V,G,F,re){A.onBeforeRender(x,N,V,G,F,re),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,N,V,G,A,re),F.transparent===!0&&F.side===ii&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,x.renderBufferDirect(V,N,G,F,A,re),F.side=lr,F.needsUpdate=!0,x.renderBufferDirect(V,N,G,F,A,re),F.side=ii):x.renderBufferDirect(V,N,G,F,A,re),A.onAfterRender(x,N,V,G,F,re)}function Ta(A,N,V){N.isScene!==!0&&(N=mt);const G=Ce.get(A),F=u.state.lights,re=u.state.shadowsArray,he=F.state.version,ye=Te.getParameters(A,F.state,re,N,V),Me=Te.getProgramCacheKey(ye);let De=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?z:E).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",Ue),De=new Map,G.programs=De);let Ne=De.get(Me);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===he)return tp(A,ye),Ne}else ye.uniforms=Te.getUniforms(A),A.onBeforeCompile(ye,x),Ne=Te.acquireProgram(ye,Me),De.set(Me,Ne),G.uniforms=ye.uniforms;const Se=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=ie.uniform),tp(A,ye),G.needsLights=K_(A),G.lightsStateVersion=he,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function ep(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function tp(A,N){const V=Ce.get(A);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Y_(A,N,V,G,F){N.isScene!==!0&&(N=mt),P.resetTextureUnits();const re=N.fog,he=G.isMeshStandardMaterial?N.environment:null,ye=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ro,Me=(G.isMeshStandardMaterial?z:E).get(G.envMap||he),De=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let ut=sr;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ut=x.toneMapping);const sn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=sn!==void 0?sn.length:0,Ae=Ce.get(G),ui=u.state.lights;if(ne===!0&&(ge===!0||A!==M)){const Tn=A===M&&G.id===S;ie.setState(G,A,Tn)}let Je=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ui.state.version||Ae.outputColorSpace!==ye||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==Me||G.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Ne||Ae.morphTargets!==Se||Ae.morphNormals!==Ze||Ae.morphColors!==at||Ae.toneMapping!==ut||Ae.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ae.__version=G.version);let kn=Ae.currentProgram;Je===!0&&(kn=Ta(G,N,F));let Kr=!1,pn=!1,lo=!1;const ft=kn.getUniforms(),Qn=Ae.uniforms;if(Re.useProgram(kn.program)&&(Kr=!0,pn=!0,lo=!0),G.id!==S&&(S=G.id,pn=!0),Kr||M!==A){Re.buffers.depth.getReversed()?(ae.copy(A.projectionMatrix),HS(ae),VS(ae),ft.setValue(k,"projectionMatrix",ae)):ft.setValue(k,"projectionMatrix",A.projectionMatrix),ft.setValue(k,"viewMatrix",A.matrixWorldInverse);const Di=ft.map.cameraPosition;Di!==void 0&&Di.setValue(k,Ie.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,pn=!0,lo=!0)}if(F.isSkinnedMesh){ft.setOptional(k,F,"bindMatrix"),ft.setOptional(k,F,"bindMatrixInverse");const Tn=F.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),ft.setValue(k,"boneTexture",Tn.boneTexture,P))}F.isBatchedMesh&&(ft.setOptional(k,F,"batchingTexture"),ft.setValue(k,"batchingTexture",F._matricesTexture,P),ft.setOptional(k,F,"batchingIdTexture"),ft.setValue(k,"batchingIdTexture",F._indirectTexture,P),ft.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(k,"batchingColorTexture",F._colorsTexture,P));const co=V.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0)&&Le.update(F,V,kn),(pn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ft.setValue(k,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qn.envMap.value=Me,Qn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Qn.envMapIntensity.value=N.environmentIntensity),pn&&(ft.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&q_(Qn,lo),re&&G.fog===!0&&fe.refreshFogUniforms(Qn,re),fe.refreshMaterialUniforms(Qn,G,L,q,u.state.transmissionRenderTarget[A.id]),bl.upload(k,ep(Ae),Qn,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bl.upload(k,ep(Ae),Qn,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(k,"center",F.center),ft.setValue(k,"modelViewMatrix",F.modelViewMatrix),ft.setValue(k,"normalMatrix",F.normalMatrix),ft.setValue(k,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tn=G.uniformsGroups;for(let Di=0,Ii=Tn.length;Di<Ii;Di++){const np=Tn[Di];U.update(np,kn),U.bind(np,kn)}}return kn}function q_(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function K_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,N,V){Ce.get(A.texture).__webglTexture=N,Ce.get(A.depthTexture).__webglTexture=V;const G=Ce.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const V=Ce.get(A);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,V=0){C=A,w=N,T=V;let G=!0,F=null,re=!1,he=!1;if(A){const Me=Ce.get(A);if(Me.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(k.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Me.__hasExternalTextures)P.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Se=A.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(A.width!==Se.image.width||A.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Ne=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?F=Ne[N][V]:F=Ne[N],re=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?F=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,R.copy(A.viewport),D.copy(A.scissor),I=A.scissorTest}else R.copy(oe).multiplyScalar(L).floor(),D.copy(we).multiplyScalar(L).floor(),I=Ke;if(Re.bindFramebuffer(k.FRAMEBUFFER,F)&&G&&Re.drawBuffers(A,F),Re.viewport(R),Re.scissor(D),Re.setScissorTest(I),re){const Me=Ce.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,V)}else if(he){const Me=Ce.get(A.texture),De=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,De)}S=-1},this.readRenderTargetPixels=function(A,N,V,G,F,re,he){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Re.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Me=A.texture,De=Me.format,Ne=Me.type;if(!Ge.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&V>=0&&V<=A.height-F&&k.readPixels(N,V,G,F,ke.convert(De),ke.convert(Ne),re)}finally{const Me=C!==null?Ce.get(C).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,N,V,G,F,re,he){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const Me=A.texture,De=Me.format,Ne=Me.type;if(!Ge.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&V>=0&&V<=A.height-F){Re.bindFramebuffer(k.FRAMEBUFFER,ye);const Se=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.bufferData(k.PIXEL_PACK_BUFFER,re.byteLength,k.STREAM_READ),k.readPixels(N,V,G,F,ke.convert(De),ke.convert(Ne),0);const Ze=C!==null?Ce.get(C).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Ze);const at=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zS(k,at,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,re),k.deleteBuffer(Se),k.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,V=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(A.image.width*G),re=Math.floor(A.image.height*G),he=N!==null?N.x:0,ye=N!==null?N.y:0;P.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,he,ye,F,re),Re.unbindTexture()},this.copyTextureToTexture=function(A,N,V=null,G=null,F=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let re,he,ye,Me,De,Ne,Se,Ze,at;const ut=A.isCompressedTexture?A.mipmaps[F]:A.image;V!==null?(re=V.max.x-V.min.x,he=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,De=V.min.y,Ne=V.isBox3?V.min.z:0):(re=ut.width,he=ut.height,ye=ut.depth||1,Me=0,De=0,Ne=0),G!==null?(Se=G.x,Ze=G.y,at=G.z):(Se=0,Ze=0,at=0);const sn=ke.convert(N.format),Qe=ke.convert(N.type);let Ae;N.isData3DTexture?(P.setTexture3D(N,0),Ae=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Ae=k.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Ae=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const ui=k.getParameter(k.UNPACK_ROW_LENGTH),Je=k.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=k.getParameter(k.UNPACK_SKIP_PIXELS),Kr=k.getParameter(k.UNPACK_SKIP_ROWS),pn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Me),k.pixelStorei(k.UNPACK_SKIP_ROWS,De),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ne);const lo=A.isDataArrayTexture||A.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Qn=Ce.get(A),co=Ce.get(N),Tn=Ce.get(Qn.__renderTarget),Di=Ce.get(co.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ii=0;Ii<ye;Ii++)lo&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(A).__webglTexture,F,Ne+Ii),A.isDepthTexture?(ft&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,F,at+Ii),k.blitFramebuffer(Me,De,re,he,Se,Ze,re,he,k.DEPTH_BUFFER_BIT,k.NEAREST)):ft?k.copyTexSubImage3D(Ae,F,Se,Ze,at+Ii,Me,De,re,he):k.copyTexSubImage2D(Ae,F,Se,Ze,at+Ii,Me,De,re,he);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ft?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ae,F,Se,Ze,at,re,he,ye,sn,Qe,ut.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Ae,F,Se,Ze,at,re,he,ye,sn,ut.data):k.texSubImage3D(Ae,F,Se,Ze,at,re,he,ye,sn,Qe,ut):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,Se,Ze,re,he,sn,Qe,ut.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,Se,Ze,ut.width,ut.height,sn,ut.data):k.texSubImage2D(k.TEXTURE_2D,F,Se,Ze,re,he,sn,Qe,ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,ui),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Kr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pn),F===0&&N.generateMipmaps&&k.generateMipmap(Ae),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,N,V=null,G=null,F=0){return A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0),Do('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,V,G,F)},this.initRenderTarget=function(A){Ce.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,Re.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}class hg extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class P_ extends jt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=hn,h=hn,f,d){super(null,o,a,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zh extends Li{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let u=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function v(){const x=new O,b=new O;let w=0;const T=(n-e)/i;for(let C=0;C<=s;C++){const S=[],M=C/s,R=M*(n-e)+e;for(let D=0;D<=r;D++){const I=D/r,B=I*l+a,H=Math.sin(B),W=Math.cos(B);b.x=R*H,b.y=-M*i+m,b.z=R*W,f.push(b.x,b.y,b.z),x.set(H,T,W).normalize(),d.push(x.x,x.y,x.z),p.push(I,1-M),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const M=_[S][C],R=_[S+1][C],D=_[S+1][C+1],I=_[S][C+1];(e>0||S!==0)&&(h.push(M,R,I),w+=3),(n>0||S!==s-1)&&(h.push(R,D,I),w+=3)}c.addGroup(u,w,0),u+=w}function y(x){const b=g,w=new qe,T=new O;let C=0;const S=x===!0?e:n,M=x===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let D=0;D<=r;D++){const B=D/r*l+a,H=Math.cos(B),W=Math.sin(B);T.x=S*W,T.y=m*M,T.z=S*H,f.push(T.x,T.y,T.z),d.push(0,M,0),w.x=H*.5+.5,w.y=W*.5*M+.5,p.push(w.x,w.y),g++}for(let D=0;D<r;D++){const I=b+D,B=R+D;x===!0?h.push(B,B+1,I):h.push(B+1,B,I),C+=3}c.addGroup(u,C,x===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends Sa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f_,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nu extends Gi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hh extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class JA extends Hh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Fu=new _t,pg=new O,mg=new O;class L_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pg.setFromMatrixPosition(e.matrixWorld),n.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mg),n.updateMatrixWorld(),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e2 extends L_{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gg extends Hh{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new e2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vg=new _t,Eo=new O,ku=new O;class t2 extends L_{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Eo),ku.copy(i.position),ku.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ku),i.updateMatrixWorld(),r.makeTranslation(-Eo.x,-Eo.y,-Eo.z),vg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg)}}class n2 extends Hh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new t2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const i2="bookshelf-images",wd="spines";let Ou=null;function r2(){return Ou||(Ou=new Promise((t,e)=>{const n=indexedDB.open(i2,1);n.onupgradeneeded=()=>n.result.createObjectStore(wd),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})),Ou}async function Vh(t,e){const n=await r2();return new Promise((i,r)=>{const s=n.transaction(wd,t),o=s.objectStore(wd),a=e(o);s.oncomplete=()=>i(a&&a.result),s.onerror=()=>r(s.error)})}const eo=(t,e)=>(ks.has(t)&&(URL.revokeObjectURL(ks.get(t)),ks.delete(t)),Vh("readwrite",n=>n.put(e,t))),_g=t=>Vh("readwrite",e=>e.delete(t)),ks=new Map;async function s2(t){if(ks.has(t))return ks.get(t);const e=await Vh("readonly",i=>i.get(t));if(!e)return null;const n=URL.createObjectURL(e);return ks.set(t,n),n}let xg=20261106;const o2=()=>(xg=xg*1664525+1013904223>>>0)/4294967296,Qt=(t,e=0,n=1)=>Math.min(n,Math.max(e,t)),yg=(t,e,n)=>{const i=Qt((n-t)/(e-t));return i*i*(3-2*i)},Td=new Uint8Array(1024);{const t=[...Array(256).keys()];for(let e=255;e>0;e--){const n=Math.floor(o2()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<1024;e++)Td[e]=t[e&255]}function D_(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=n&255,a=i&255,l=(_,m)=>Td[Td[_&255]+m&511]/255,c=r*r*(3-2*r),h=s*s*(3-2*s),f=l(o,a),d=l(o+1,a),p=l(o,a+1),g=l(o+1,a+1);return f+(d-f)*c+(p-f)*h+(f-d-p+g)*c*h}function Yn(t,e,n=4){let i=0,r=.5,s=0;for(let o=0;o<n;o++)i+=r*D_(t,e),s+=r,r*=.5,t*=2.03,e*=2.03;return i/s}const oc=t=>[1,3,5].map(e=>parseInt(t.slice(e,e+2),16)),Os=(t,e,n)=>t+(e-t)*n;function Lc(t,e,n,i=1){const r=new Uint8Array(t*e*4),s=new Uint8Array(t*e*4),o=new Float32Array(t*e),a=[0,0,0,0,0];for(let h=0;h<e;h++)for(let f=0;f<t;f++){n(f/t,h/e,a);const d=(f+h*t)*4;r[d]=a[0],r[d+1]=a[1],r[d+2]=a[2],r[d+3]=255,s[d+1]=Qt(a[3])*255,s[d+3]=255,o[f+h*t]=a[4]}const l=new Uint8Array(t*e*4);for(let h=0;h<e;h++)for(let f=0;f<t;f++){const d=o[(f+t-1)%t+h*t],p=o[(f+1)%t+h*t],g=o[f+(h+e-1)%e*t],_=o[f+(h+1)%e*t],m=(d-p)*i,u=(g-_)*i,v=1/Math.hypot(m,u,1),y=(f+h*t)*4;l[y]=(m*v*.5+.5)*255,l[y+1]=(u*v*.5+.5)*255,l[y+2]=(v*.5+.5)*255,l[y+3]=255}const c=(h,f=!1)=>{const d=new P_(h,t,e,xn);return d.wrapS=d.wrapT=nc,d.magFilter=$n,d.minFilter=Mi,d.generateMipmaps=!0,d.anisotropy=8,f&&(d.colorSpace=Zt),d.needsUpdate=!0,d};return{map:c(r,!0),roughnessMap:c(s),normalMap:c(l)}}function Bu({light:t,dark:e,rings:n=12,rough:i=.45,contrast:r=1,pores:s=1}){const o=oc(t),a=oc(e);return(l,c,h)=>{const f=Yn(l*2.2+7,c*3.1,3),d=Yn(l*3.5,c*7+3,3),p=(c+(f-.5)*.55+(d-.5)*.1)*n+(Yn(l*5,c*16,2)-.5)*.5,g=p-Math.floor(p),_=yg(.45,.92,g)*(1-yg(.94,1,g)),m=Yn(l*9,c*170,3),u=Math.pow(D_(l*46+3,c*330),6)*s*(.5+_*.5);let v=.3+_*.24*r+(m-.5)*.3*r+(f-.5)*.5;v=Qt(v+u*.55),h[0]=Os(o[0],a[0],v),h[1]=Os(o[1],a[1],v),h[2]=Os(o[2],a[2],v),h[3]=i+u*.35+(m-.5)*.12,h[4]=-u*1.4-_*.06+(m-.5)*.12}}const a2=(t,e,n)=>{const i=Yn(t*3+2,e*3,5),r=Yn(t*6+i*2.4,e*5-i*2,4),s=Math.pow(1-Math.abs(r*2-1),13),o=Math.pow(1-Math.abs(Yn(t*2.2+r,e*2.2,4)*2-1),4),a=Qt(s*.78+o*.2);n[0]=Os(238,92,a),n[1]=Os(235,94,a),n[2]=Os(230,102,a),n[3]=.12+a*.1,n[4]=0},I_=t=>(e,n,i)=>{const r=Yn(e*10,n*900,3),s=Yn(e*2,n*22,2);i[0]=t[0]*(.9+r*.2),i[1]=t[1]*(.9+r*.2),i[2]=t[2]*(.9+r*.2),i[3]=.24+(r-.5)*.24+(s-.5)*.1,i[4]=r*.22},l2=(t,e,n)=>{const i=Yn(t*200,e*100,2);n[0]=n[1]=n[2]=236,n[3]=.34,n[4]=i*.05},c2=(t,e,n)=>{const i=Yn(t*40,e*40,4);n[0]=206+i*9,n[1]=196+i*9,n[2]=180+i*9,n[3]=.88,n[4]=0},Nr={walnut:{fn:()=>Bu({light:"#74503a",dark:"#2b1b12",rings:10,rough:.44}),metal:0,coat:.28,normal:1,tint:!1},oak:{fn:()=>Bu({light:"#cfa877",dark:"#8d6236",rings:15,rough:.5,contrast:.8,pores:1.2}),metal:0,coat:.12,normal:1,tint:!1},ebony:{fn:()=>Bu({light:"#2e2520",dark:"#070504",rings:27,rough:.24,contrast:.9,pores:.5}),metal:0,coat:.65,normal:1,tint:!1},paint:{fn:()=>l2,metal:0,coat:.5,normal:1,tint:!0},steel:{fn:()=>I_([200,202,205]),metal:1,coat:0,normal:1.4,tint:!0}},Mg={},Sg=t=>Mg[t]||(Mg[t]=Lc(1600,800,(Nr[t]||Nr.paint).fn(),(Nr[t]||Nr.paint).normal));let Eg=null,wg=null,Tg=null;const u2=()=>Eg||(Eg=Lc(1024,512,a2,0)),f2=()=>wg||(wg=Lc(512,256,I_([214,170,92]),1)),d2=()=>Tg||(Tg=Lc(512,512,c2,0)),ac=3.2,hs='"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP",serif',Pl='"Zen Kaku Gothic New","Hiragino Sans","Noto Sans CJK JP",sans-serif',h2=/[ーー—…〜～・「」（）()\-]/,p2=t=>{const[e,n,i]=oc(t);return(.3*e+.59*n+.11*i)/255},m2=(t,e)=>`rgb(${oc(t).map(n=>Math.round(Qt(n*e,0,255)))})`,wo=(t,e)=>`rgb(0,${Math.round(t*255)},${Math.round(e*255)})`;function qi(t){let e=0;for(const n of t)e=e*31+n.charCodeAt(0)|0;return(e>>>0)/4294967296}class Ag{constructor(e){Ee(this,"W",4096);Ee(this,"H");Ee(this,"canvas");Ee(this,"orm");Ee(this,"c");Ee(this,"o");Ee(this,"ax",8);Ee(this,"ay",8);Ee(this,"rowH",0);Ee(this,"pagesUV");this.H=Math.min(4096,Math.max(512,Math.ceil(e/256)*256)),this.canvas=Object.assign(document.createElement("canvas"),{width:this.W,height:this.H}),this.orm=Object.assign(document.createElement("canvas"),{width:this.W/2,height:this.H/2}),this.c=this.canvas.getContext("2d"),this.o=this.orm.getContext("2d"),this.o.scale(.5,.5),this.c.fillStyle="#403830",this.c.fillRect(0,0,this.W,this.H),this.o.fillStyle=wo(.7,0),this.o.fillRect(0,0,this.W,this.H);const n=this.slot(200,200);this.c.fillStyle="#e8dfca",this.c.fillRect(n.x,n.y,n.w,n.h);for(let i=0;i<80;i++)this.c.fillStyle=`rgba(90,70,45,${.05+qi("p"+i)*.14})`,this.c.fillRect(n.x+i*2.5,n.y,1,n.h);this.o.fillStyle=wo(.9,0),this.o.fillRect(n.x,n.y,n.w,n.h),this.pagesUV=this.uv(n)}static estimate(e){let n=8,i=0,r=216;for(const s of e){const o=Math.ceil(s.t*1e3*ac)+6,a=Math.ceil(s.h*1e3*ac);n+o>4096&&(n=8,r+=i+6,i=0),n+=o,i=Math.max(i,a)}return r+i+16}slot(e,n){this.ax+e+6>this.W&&(this.ax=8,this.ay+=this.rowH+6,this.rowH=0);const i={x:this.ax,y:this.ay,w:e,h:n};return this.ax+=e+6,this.rowH=Math.max(this.rowH,n),i}uv(e){return{u0:e.x/this.W,u1:(e.x+e.w)/this.W,v0:1-(e.y+e.h)/this.H,v1:1-e.y/this.H}}both(e,n,i,r){this.c.fillStyle=i,r(this.c),this.o.fillStyle=wo(e,n),r(this.o)}vtext(e,n,i,r,s,o,a,l,c){const h=[...i];let f=r;const d=1.06;h.length*f*d>c&&(f=c/(h.length*d));for(const p of[this.c,this.o])p.save(),p.font=s.replace("$",String(f)),p.textAlign="center",p.textBaseline="middle",p.fillStyle=p===this.c?l:wo(o,a),h.forEach((g,_)=>{const m=n+(_+.5)*f*d;h2.test(g)?(p.save(),p.translate(e,m),p.rotate(Math.PI/2),p.fillText(g,0,0),p.restore()):p.fillText(g,e,m)}),p.restore()}drawSpine(e,n){const{x:i,y:r,w:s,h:o}=e,a=n.color||"#e9e4d8",l=p2(a)>.55?"#221c17":"#f3ecdf",c=i+s/2,h=qi(n.id),f=h<.45?.32:.62,d=(n.title||"").replace(/ /g,""),p=n.author||"",_=(n.format==="shiroku"||n.format==="a5")&&h>.4?"hard":["band","label","gothic"][Math.floor(qi(n.id+"k")*3)];this.both(f,0,a,u=>u.fillRect(i,r,s,o));const m=Math.min(s*.6,40);if(_==="hard"){const u="#d9b56d";this.both(.72,0,m2(a,.72),v=>v.fillRect(i,r,s,o)),this.both(.3,1,u,v=>{v.fillRect(i+2,r+o*.06,s-4,3),v.fillRect(i+2,r+o*.92,s-4,3)}),this.vtext(c,r+o*.1,d,m*1.08,`800 $px ${hs}`,.26,1,u,o*.56),this.vtext(c,r+o*.73,p,m*.62,`600 $px ${hs}`,.3,1,u,o*.16)}else if(_==="band")this.both(.5,0,"#f2ecdf",u=>u.fillRect(i,r+o*.055,s,o*.03)),this.vtext(c,r+o*.11,d,m,`800 $px ${hs}`,f,0,l,o*.56),this.vtext(c,r+o*.71,p,m*.6,`600 $px ${Pl}`,f,0,l,o*.17),this.both(f,0,l,u=>u.fillRect(c-s*.16,r+o*.93,s*.32,2));else if(_==="label"){const u=i+s*.12,v=r+o*.06,y=s*.76,x=o*.58;this.both(.8,0,"#efe6d3",b=>b.fillRect(u,v,y,x)),this.vtext(c,v+12,d,Math.min(y*.72,34),`800 $px ${hs}`,.8,0,"#2a211a",x-22),this.vtext(c,r+o*.69,p,m*.58,`600 $px ${hs}`,f,0,l,o*.2)}else this.vtext(c,r+o*.07,d,m*1.02,`700 $px ${Pl}`,f,0,l,o*.62),this.vtext(c,r+o*.73,p,m*.56,`500 $px ${Pl}`,f,0,l,o*.17),this.both(f,0,l,u=>u.fillRect(i+s*.3,r+o*.955,s*.4,Math.min(14,s*.4)))}drawImage(e,n){this.c.drawImage(n,e.x,e.y,e.w,e.h),this.o.fillStyle=wo(.55,0),this.o.fillRect(e.x,e.y,e.w,e.h)}grain(){const e=Object.assign(document.createElement("canvas"),{width:256,height:256}),n=e.getContext("2d"),i=n.createImageData(256,256);for(let r=0;r<i.data.length;r+=4){const s=qi("g"+r)*255;i.data[r]=i.data[r+1]=i.data[r+2]=s,i.data[r+3]=13}n.putImageData(i,0,0),this.c.fillStyle=this.c.createPattern(e,"repeat"),this.c.fillRect(0,0,this.W,this.H)}}function g2(t,e){const n=Object.assign(document.createElement("canvas"),{width:1024,height:220}),i=n.getContext("2d");i.fillStyle="#1f1b17",i.fillRect(0,0,1024,220),i.fillStyle="#efe6d6",i.textBaseline="middle",i.textAlign="center",i.font=`600 84px ${hs}`;const r=[...t].join(" "),s=i.measureText(r).width;return i.fillText(r,512-(e?50:0),112),e&&(i.font=`500 44px ${Pl}`,i.fillStyle="#b5a892",i.textAlign="left",i.fillText("見本",462+s/2+24,118)),n}const on=.024,Ar=.24,Uo=.02,zu=6e-4,Cg=.236,Rn=Uo+Ar,v2={oak:"#b5854f",walnut:"#4a2f1b",ebony:"#2b201a"};function Rg(t){const e=parseInt((t||"#e9e4d8").slice(1),16),n=(e>>16)/255,i=(e>>8&255)/255,r=(e&255)/255,s=Math.max(n,i,r),o=Math.min(n,i,r),a=s-o;return a<.08?400+(1-s)*10:((s===n?(i-r)/a%6:s===i?(r-n)/a+2:(n-i)/a+4)*60+360)%360}function _2(t,e){return e==="author"?[...t].sort((n,i)=>(n.author||"～").localeCompare(i.author||"～","ja")):e==="color"?[...t].sort((n,i)=>Rg(n.color)-Rg(i.color)):t}function To(t,e,n,i,r,s=[1.2,.6],o=""){const a=new hr(1,1,1,5,5,5),l=a.attributes.position,c=a.attributes.normal,h=a.attributes.uv,f=[t/2,e/2,n/2],d=[qi(o+"a")*3,qi(o+"b")*3],p=[0,0,0],g=[0,0,0];for(let _=0;_<l.count;_++){const m=[l.getX(_),l.getY(_),l.getZ(_)],u=[c.getX(_),c.getY(_),c.getZ(_)];for(let C=0;C<3;C++){const S=m[C]*2,M=Math.sign(S),R=Qt((Math.abs(S)-.2)/.8),D=f[C]-i;p[C]=Math.abs(S)>.2?M*D:S/.2*D,g[C]=Math.abs(S)>.2?M*R:0}const v=Math.hypot(g[0],g[1],g[2])||1,y=g.map(C=>C/v),x=p.map((C,S)=>C+y[S]*i);l.setXYZ(_,x[0],x[1],x[2]),c.setXYZ(_,y[0],y[1],y[2]);const b=Math.abs(u[0])>.5?0:Math.abs(u[1])>.5?1:2,w=r==="x"?x[0]:x[1],T=r==="x"?b===1?x[2]:x[1]:b===0?x[2]:x[0];h.setXY(_,w/s[0]+d[0],T/s[1]+d[1])}return a}function x2(t,e){var d;const n=[],i=[],r=[],s=[],o=[];let a=0,l=1;const c=(p,g,_,m,u,v,y,x,b)=>{const w=Math.hypot(m,u,v);n.push(p,g,_),i.push(m/w,u/w,v/w),r.push(y,x),s.push(b*l,b*l,b*l),o.push(a)},h=(p,g,_,m)=>{for(const u of[p,g,_,p,_,m])c(...u)};for(const p of t){a=p.id,l=(d=p.b.record)!=null&&d.gone?.5:1;const{t:g,h:_,d:m}=p,{u0:u,v0:v,u1:y,v1:x}=p.uv,b=6,w=Math.min(.0013,g*.09),T=I=>.56+.44*Math.pow(Qt(4.5*Math.min(I,1-I)),.7),C=I=>w*(1-(2*I-1)**2);for(let I=0;I<b;I++){const B=I/b,H=(I+1)/b,W=-g/2+B*g,q=-g/2+H*g,L=(2*B-1)*.6,$=(2*H-1)*.6,Z=u+B*(y-u),oe=u+H*(y-u);h([W,0,C(B),L,0,1,Z,v,T(B)*.86],[q,0,C(H),$,0,1,oe,v,T(H)*.86],[q,_,C(H),$,0,1,oe,x,T(H)],[W,_,C(B),L,0,1,Z,x,T(B)])}const S=u+4e-4,M=(v+x)/2;h([-g/2,0,-m,-1,0,0,S,M,.12],[-g/2,0,0,-1,0,0,S,M,.42],[-g/2,_,0,-1,0,0,S,M,.5],[-g/2,_,-m,-1,0,0,S,M,.16]),h([g/2,0,0,1,0,0,S,M,.42],[g/2,0,-m,1,0,0,S,M,.12],[g/2,_,-m,1,0,0,S,M,.16],[g/2,_,0,1,0,0,S,M,.5]);const R=e,D=6e-4;h([-g/2+D,_,0,0,1,0,R.u0,R.v0,.95],[g/2-D,_,0,0,1,0,R.u1,R.v0,.95],[g/2-D,_,-m,0,1,0,R.u1,R.v1,.3],[-g/2+D,_,-m,0,1,0,R.u0,R.v1,.3])}const f=new Li;return f.setAttribute("position",new Jt(n,3)),f.setAttribute("normal",new Jt(i,3)),f.setAttribute("uv",new Jt(r,2)),f.setAttribute("color",new Jt(s,3)),f.setAttribute("aId",new Jt(o,1)),f}function bg(t,e,n){t.onBeforeCompile=i=>{i.uniforms.uBooks={value:e},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform highp sampler2D uBooks;
attribute float aId;
vec3 rotB(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x - s * v.y, s * v.x + c * v.y, v.z); }`).replace("#include <begin_vertex>",`vec4 bk = texelFetch(uBooks, ivec2(int(aId + .5), 0), 0);
vec3 transformed = rotB(position, bk.w) + bk.xyz;`),n&&(i.vertexShader=i.vertexShader.replace("#include <beginnormal_vertex>","vec3 objectNormal = rotB(normal, texelFetch(uBooks, ivec2(int(aId + .5), 0), 0).w);").replace("#include <color_vertex>",`#include <color_vertex>
vColor = mix(vColor, vec3(.92), texelFetch(uBooks, ivec2(int(aId + .5), 1), 0).x);`))}}class Pg{constructor(e,n,i){Ee(this,"group",new Ur);Ee(this,"frame",new Ur);Ee(this,"items",[]);Ee(this,"order",[]);Ee(this,"rows",[]);Ee(this,"n",5);Ee(this,"rowH",Cg);Ee(this,"IW");Ee(this,"W");Ee(this,"H",1);Ee(this,"frameMat",new Nu);Ee(this,"backMat",new Nu);Ee(this,"data");Ee(this,"tex");Ee(this,"mesh");Ee(this,"atlas");Ee(this,"texA");Ee(this,"texO");Ee(this,"plate");Ee(this,"onUpdate");this.cfg=e,this.cx=n,this.maxAniso=i,this.IW=.56*(e.wide||1),this.W=this.IW+2*on,this.group.position.x=n,this.group.add(this.frame)}floorY(e){return on+(this.n-1-e)*(this.rowH+on)}rowAt(e){return Qt(this.n-1-Math.floor((e-on)/(this.rowH+on)),0,this.n-1)}get inL(){return-this.IW/2+.002}get inR(){return this.IW/2-.002}async build(){const e=i=>Ff[i.format||""]||Ff.shiroku;let n=0;this.items=this.cfg.books.map(i=>{const r=e(i),s=qi(i.id)*2-1,o=(i.h||r.h+s*(i.format==="bunko"?1.5:4))/1e3;return{b:i,id:++n,t:AM(i)/1e3,h:o,d:r.w/1e3,z0:Rn-.022-qi(i.id+"z")*.004,cur:[0,0,0,0],tgt:[0,0,0,0],lift:0}}),this.order=_2(this.cfg.books,this.cfg.sort).map(i=>this.items.find(r=>r.b===i)),this.rowH=Math.max(Cg,...this.items.map(i=>i.h+.012)),this.n=Math.max(this.cfg.minRows,this.flow().length),this.H=this.n*this.rowH+(this.n+1)*on,this.buildFrame(),this.buildPlate(),this.items.length&&await this.buildBooks(),this.layout(!0)}flow(e){const n=[[]];let i=0;for(const r of this.order){const s=r.t+zu;i+s>this.IW-.004&&n[n.length-1].length&&(n.push([]),i=0),n[n.length-1].push(r),i+=s}return n}layout(e=!1,n){this.rows=this.flow(),this.rows.length>this.n&&(this.n=this.rows.length,this.H=this.n*this.rowH+(this.n+1)*on,this.buildFrame(),this.buildPlate()),this.rows.forEach((i,r)=>{let s=this.inL;i.forEach((o,a)=>{if(o!==n){let l=s+o.t/2,c=0,h=0;const f=this.inR-s-o.t;a===i.length-1&&i.length>1&&f>.004&&(c=Math.min(.157,f*.7/o.h),h=o.t/2*Math.sin(c),l+=o.h*Math.sin(c)*.9),o.tgt=[l,this.floorY(r)+h,o.z0,c],e&&(o.cur=[...o.tgt])}s+=o.t+zu})}),e&&this.write()}step(e,n,i=!1){let r=!1;const s=i?1:1-Math.exp(-e/70);for(const o of this.items){const a=o===n,l=a?Math.max(s,.6):s,c=o.tgt[1]-o.cur[1],h=o.tgt[0]-o.cur[0],f=!a&&Math.abs(c)>.012?Math.min(.2,Math.abs(c)*.7+Math.abs(h)*.1):0;for(let d=0;d<4;d++){const p=d===2?o.tgt[2]+f:o.tgt[d],g=p-o.cur[d];Math.abs(g)>2e-5?(o.cur[d]+=g*l,r=!0):o.cur[d]=p}o.lift=Qt((o.cur[2]-o.z0)/.05)}return r&&this.write(),r}write(){if(!this.tex)return;const e=this.tex.image.width;for(const n of this.items)this.data.set(n.cur,n.id*4),this.data[(e+n.id)*4]=n.lift;this.tex.needsUpdate=!0}pick(e,n){const i=this.rowAt(n),r=this.floorY(i);return(this.rows[i]||[]).find(s=>Math.abs(e-s.tgt[0])<=s.t/2+.0015&&n>=r-.01&&n<=r+s.h+.012)}insertAt(e,n,i){const r=(this.rows[n]||[]).filter(f=>f!==e);let s=r.length,o=this.inL;for(let f=0;f<r.length;f++){if(i<o+r[f].t/2){s=f;break}o+=r[f].t+zu}const a=this.rows.slice(0,n).flat().filter(f=>f!==e).length,l=this.order.filter(f=>f!==e),c=a+s,h=[...l.slice(0,c),e,...l.slice(c)];return h.every((f,d)=>f===this.order[d])?!1:(this.order=h,this.layout(!1,e),!0)}applyStyle(e){this.cfg.shelf=e;const n=Nr[e.mat]||Nr.paint,i=Sg(e.mat in Nr?e.mat:"paint"),r=n.tint?new Be(e.frame||"#f7f6f2"):new Be(1,1,1),s=e.inner||v2[e.mat];for(const o of[this.frameMat,this.backMat])Object.assign(o,{map:i.map,roughnessMap:i.roughnessMap,normalMap:i.normalMap,metalness:n.metal,roughness:1,clearcoat:n.coat,clearcoatRoughness:.3}),o.needsUpdate=!0;this.frameMat.color.copy(r),n.tint&&s?(this.backMat.color.set(s),this.backMat.metalness=0,this.backMat.map=Sg("paint").map):this.backMat.color.setScalar(e.mat==="steel"?.16:.42),e.mat==="steel"&&(this.backMat.metalness=0),this.buildFrame()}buildFrame(){var r;for(const s of[...this.frame.children])this.frame.remove(s),(r=s.geometry)==null||r.dispose();if(!this.frameMat.map){this.applyStyle(this.cfg.shelf);return}const e=this.cfg.shelf,n=this.cfg.key,i=(s,o,a,l,c)=>{const h=new Wt(s,c);return h.position.set(o,a,l),h.castShadow=h.receiveShadow=!0,this.frame.add(h),h};for(let s=0;s<=this.n;s++)i(To(this.IW+.004,on,Ar,.0016,"x",[1.2,.6],n+s),0,s*(this.rowH+on)+on/2,Uo+Ar/2,this.frameMat);for(const s of[-1,1])i(To(on,this.H,Ar,.002,"y",[1.2,.6],n+s),s*(this.W/2-on/2),this.H/2,Uo+Ar/2,this.frameMat);if(i(To(this.W-.01,this.H-.01,.008,.001,"y",[1.2,.6],n+"back"),0,this.H/2,Uo+.004,this.backMat),e.top==="marble"){const s=u2();i(To(this.W+.03,.022,Ar+.018,.003,"x",[.9,.45],n+"top"),0,this.H+.011,Uo+Ar/2+.004,new Nu({...s,clearcoat:.7,clearcoatRoughness:.12}))}if(e.brass){const s=new Gi({...f2(),metalness:1});for(let o=0;o<=this.n;o++){const a=i(To(this.IW-.006,.0035,.0026,7e-4,"x",[.6,.3],n+"br"+o),0,o*(this.rowH+on)+on/2,Rn+4e-4,s);a.castShadow=!1}}}buildPlate(){this.plate&&this.group.remove(this.plate);const e=new Ur,n=Math.min(.3,this.W*.5),i=n*220/1024,r=new Uu(g2(this.cfg.name,this.cfg.sample));r.colorSpace=Zt,r.anisotropy=8;const s=new Wt(new hr(n,i,.006),[...Array(4).fill(new Gi({color:2038551,roughness:.6})),new Gi({map:r,roughness:.55}),new Gi({color:2038551})]),o=this.H+.1+i/2;s.position.set(0,o,Rn-.04),s.castShadow=!0,e.add(s);const a=new Gi({color:3814704,metalness:.6,roughness:.4});for(const l of[-1,1]){const c=new Wt(new zh(7e-4,7e-4,.5,6),a);c.position.set(l*n*.38,o+i/2+.25,Rn-.04),e.add(c)}this.plate=e,this.group.add(e)}async buildBooks(){const e=new Ag(Ag.estimate(this.items));this.atlas=e;const n=[];for(const c of this.items){const h=e.slot(Math.ceil(c.t*1e3*ac),Math.ceil(c.h*1e3*ac));c.uv=e.uv(h),e.drawSpine(h,c.b),c.b.img&&n.push(this.loadImage(c.b.id).then(f=>{f&&e.drawImage(h,f)}).catch(()=>{}))}e.grain();const i=new Uu(e.canvas),r=new Uu(e.orm);i.colorSpace=Zt;for(const c of[i,r])c.anisotropy=Math.min(8,this.maxAniso),c.minFilter=Mi,c.generateMipmaps=!0;this.texA=i,this.texO=r;const s=this.items.length+1;this.data=new Float32Array(s*2*4),this.tex=new P_(this.data,s,2,xn,ri),this.tex.minFilter=this.tex.magFilter=hn;const o=new Gi({map:i,roughnessMap:r,metalnessMap:r,metalness:1,roughness:1,vertexColors:!0});bg(o,this.tex,!0);const a=new Wt(x2(this.items,e.pagesUV),o);a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;const l=new b_({depthPacking:u_});bg(l,this.tex,!1),a.customDepthMaterial=l,this.mesh=a,this.group.add(a),n.length&&Promise.all(n).then(()=>{var c;i.needsUpdate=!0,r.needsUpdate=!0,(c=this.onUpdate)==null||c.call(this)})}async loadImage(e){const n=await s2(e);return n?new Promise(i=>{const r=new Image;r.onload=()=>i(r),r.onerror=()=>i(null),r.src=n}):null}dispose(){var e,n,i;this.group.traverse(r=>{var o;(o=r.geometry)==null||o.dispose()}),(e=this.texA)==null||e.dispose(),(n=this.texO)==null||n.dispose(),(i=this.tex)==null||i.dispose(),this.group.removeFromParent()}}const y2=1.5;class M2{constructor(e,n){Ee(this,"renderer");Ee(this,"scene",new hg);Ee(this,"camera",new ln(26,1,.05,30));Ee(this,"shelves",[]);Ee(this,"cur",0);Ee(this,"view",{x:0,y:1,w:.7});Ee(this,"vel",{x:0,y:0});Ee(this,"go",null);Ee(this,"dirty",!0);Ee(this,"W",1);Ee(this,"H",1);Ee(this,"key");Ee(this,"hand");Ee(this,"drag",null);Ee(this,"calm",matchMedia("(prefers-reduced-motion: reduce)").matches);Ee(this,"sound",new Audio("../sounds/page1.mp3"));Ee(this,"canReorder",!0);Ee(this,"keyX",NaN);Ee(this,"panning",!1);Ee(this,"ray",new O);Ee(this,"frames",0);Ee(this,"t0",0);Ee(this,"moving",!1);Ee(this,"prev",0);Ee(this,"fpsMin",0);Ee(this,"paused",!1);this.canvas=e,this.ev=n;const i=new QA({canvas:e,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.toneMapping=Qv,i.toneMappingExposure=1.02,i.shadowMap.enabled=!0,i.shadowMap.type=bh,i.shadowMap.autoUpdate=!1,this.renderer=i,this.scene.background=new Be(1314828);const r=new hg;r.add(new Wt(new hr(8,5,8),new sc({color:new Be(.05,.04,.032),side:tn})));const s=(h,f,d,p,g,_,m,u)=>{const v=new Wt(new Js(h,f),new sc({color:new Be(u[0],u[1],u[2]),side:ii}));v.position.set(d,p,g),v.rotation.set(_,m,0),r.add(v)};for(const h of[-2.6,-.9,.9,2.6])s(.5,3.4,h,2.4,1,Math.PI/2,0,[11,8.6,6]);s(6,1.3,0,.4,3.9,0,Math.PI,[.55,.46,.36]),s(.35,3,-3.8,.3,1,0,Math.PI/2,[3.2,2.5,1.8]),s(.35,3,3.8,.3,1,0,-Math.PI/2,[2.2,1.8,1.4]),this.scene.environment=new Sd(i).fromScene(r,.025).texture,this.scene.environmentIntensity=.62;const o=d2(),a=new Wt(new Js(40,8),new Gi({map:o.map,roughness:.88}));o.map.repeat.set(12,2.5),a.position.set(0,1.2,0),a.receiveShadow=!0,this.scene.add(a);const l=new gg(16769213,34,6,.62,.9,2);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.bias=-12e-5,l.shadow.normalBias=.0012,l.shadow.radius=7,l.shadow.camera.near=1.2,l.shadow.camera.far=5,this.scene.add(l,l.target),this.key=l;const c=new gg(16762768,7,6,.95,1,2);c.position.set(0,2.9,1.6),c.target.position.set(0,.4,0),this.scene.add(c,c.target),l.userData.fill=c,this.hand=new n2(16773340,.22,1.6,2),this.scene.add(this.hand),this.scene.add(new JA(16770244,2759956,.22)),this.bindInput(),addEventListener("resize",()=>this.resize()),this.resize(),requestAnimationFrame(h=>this.loop(h))}async setShelves(e,n){for(const s of this.shelves)s.dispose();this.shelves=[];let i=0;const r=[];for(const s of e){const o=new Pg(s,0,this.renderer.capabilities.getMaxAnisotropy());await o.build(),o.onUpdate=()=>{this.dirty=!0},r.push(o)}r.forEach((s,o)=>{o>0&&(i+=r[o-1].W/2+y2+s.W/2),s.cx=i,s.group.position.x=i,this.scene.add(s.group)}),this.shelves=r,this.jump(n)}async replaceShelf(e,n){const i=this.shelves[e],r=new Pg(n,i.cx,this.renderer.capabilities.getMaxAnisotropy());await r.build(),r.onUpdate=()=>{this.dirty=!0},i.dispose(),this.shelves[e]=r,this.scene.add(r.group),this.shadow(),this.dirty=!0}styleShelf(e,n){this.shelves[e].applyStyle(n),this.shadow(),this.dirty=!0}topY(e){const n=this.viewH();return e.H+.25<n*.8?e.H/2+.08:e.H-n*.38+.05}jump(e){const n=this.shelves[e];this.cur=e,this.view.w=Math.max(.5,n.W+.14),this.view.x=n.cx,this.view.y=this.topY(n),this.placeKey(),this.ev.shelf(e),this.dirty=!0}goTo(e){if(e<0||e>=this.shelves.length||this.drag)return;const n=this.shelves[e];if(e!==this.cur)try{this.sound.currentTime=0,this.sound.play().catch(()=>{})}catch{}this.cur=e,this.vel.x=this.vel.y=0,this.go={x:n.cx,y:Math.min(this.view.y,this.topY(n))},this.ev.shelf(e),this.dirty=!0}viewH(){return this.view.w*this.H/this.W}limits(){const e=this.shelves[this.cur];if(!e)return;const n=this.viewH(),i=e.H+.3-n*.38,r=-.02+n*.55;if(this.view.y=i>r?Qt(this.view.y,r,i):e.H/2,!this.go&&!this.panning){const s=Math.max(0,e.W/2+.05-this.view.w/2);this.view.x=Qt(this.view.x,e.cx-s,e.cx+s)}}placeCamera(){this.limits();const e=this.view,n=this.viewH()/2/Math.tan(OS.degToRad(this.camera.fov/2)),i=this.shelves[this.cur],r=i?i.H/2:.8,s=i?e.x-i.cx:0;this.camera.position.set(e.x-s*.18,e.y+.13-(e.y-r)*.22,Rn+n),this.camera.lookAt(e.x,e.y,Rn),this.scene.environmentRotation.y=s*1.15,this.scene.environmentRotation.x=(e.y-r)*.25,this.placeKey()}placeKey(){const e=this.view.x,n=this.shelves[this.cur],i=n?n.H/2:.8;if(Math.abs(e-this.keyX)<5e-4)return;this.keyX=e,this.key.position.set(e+.05,3.05,2),this.key.target.position.set(e,i,.15);const r=this.key.userData.fill;r.position.x=e,r.target.position.x=e,this.shadow()}shadow(){this.renderer.shadowMap.needsUpdate=!0}resize(){this.W=innerWidth,this.H=innerHeight,this.renderer.setSize(this.W,this.H,!1),this.camera.aspect=this.W/this.H,this.camera.updateProjectionMatrix(),this.dirty=!0}bindInput(){const e=this.canvas,n=new Map;let i=0,r=0,s=0,o=[0,0],a=0,l=!1,c=!1;const h=()=>{clearTimeout(s),s=0};e.addEventListener("contextmenu",d=>d.preventDefault()),e.addEventListener("pointerdown",d=>{e.setPointerCapture(d.pointerId),n.set(d.pointerId,[d.clientX,d.clientY]),this.vel.x=this.vel.y=0,this.go=null,i=0,this.moveHand(d.clientX,d.clientY),h(),n.size===1&&!this.drag&&(o=[d.clientX,d.clientY],a=performance.now(),l=!1,c=!1,s=window.setTimeout(()=>{s=0,this.startDrag(d.pointerId,n.get(d.pointerId))},350))}),e.addEventListener("pointermove",d=>{const p=n.get(d.pointerId);if(!p)return;const g=d.clientX-p[0],_=d.clientY-p[1];if(n.set(d.pointerId,[d.clientX,d.clientY]),this.drag){d.pointerId===this.drag.id&&(this.drag.x=d.clientX,this.drag.y=d.clientY,this.moveHand(d.clientX,d.clientY));return}if(Math.hypot(d.clientX-o[0],d.clientY-o[1])>8&&(l=!0,h()),n.size>1&&(c=!0),n.size===1){const m=this.view.w/this.W;this.view.x-=g*m,this.view.y+=_*m,this.panning=!0;const u=performance.now(),v=Math.max(8,u-r);r=u,this.vel.x=-g*m/v*16,this.vel.y=_*m/v*16,this.moveHand(d.clientX,d.clientY)}else if(n.size===2){const[m,u]=[...n.values()],v=Math.hypot(m[0]-u[0],m[1]-u[1]);i&&(this.view.w=Qt(this.view.w*i/v,.22,1.4)),i=v}this.dirty=!0});const f=d=>{const p=!!s;if(n.delete(d.pointerId),i=0,h(),this.drag&&d.pointerId===this.drag.id){this.endDrag();return}if(p&&!l&&!c&&!n.size&&d.type==="pointerup"&&performance.now()-a<350){this.panning=!1,this.tapAt(d.clientX,d.clientY);return}!n.size&&this.panning&&(this.panning=!1,this.release())};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f),e.addEventListener("wheel",d=>{d.preventDefault(),this.view.w=Qt(this.view.w*Math.exp(d.deltaY*.001),.22,1.4),this.dirty=!0},{passive:!1})}release(){const e=this.shelves[this.cur];if(!e)return;const n=this.view.x+this.vel.x*10-e.cx,i=Math.max(.06,e.W/2+.05-this.view.w/2)+.05;if(n>i&&this.cur<this.shelves.length-1)this.goTo(this.cur+1);else if(n<-i&&this.cur>0)this.goTo(this.cur-1);else{const r=Math.max(0,e.W/2+.05-this.view.w/2),s=Qt(this.view.x,e.cx-r,e.cx+r);Math.abs(s-this.view.x)>5e-4&&(this.vel.x=0,this.go={x:s,y:this.view.y})}}moveHand(e,n){this.hand.position.set(this.view.x+(e/this.W-.5)*this.view.w,this.view.y-(n/this.H-.5)*this.viewH(),Rn+.3),this.dirty=!0}worldAt(e,n,i){this.ray.set(e/this.W*2-1,-(n/this.H*2-1),.5).unproject(this.camera).sub(this.camera.position);const r=(i-this.camera.position.z)/this.ray.z;return{x:this.camera.position.x+this.ray.x*r,y:this.camera.position.y+this.ray.y*r}}tapAt(e,n){const i=this.shelves[this.cur];if(!i||!i.cfg.own||!this.ev.tap)return;const r=this.worldAt(e,n,Rn-.024),s=i.pick(r.x-i.cx,r.y);s&&this.ev.tap(s.b)}startDrag(e,n){var a;const i=this.shelves[this.cur];if(!n||!i||!i.cfg.own||!this.canReorder)return;const r=this.worldAt(n[0],n[1],Rn-.024),s=i.pick(r.x-i.cx,r.y);if(!s)return;const o=i.rows.findIndex(l=>l.includes(s));this.drag={id:e,s:i,it:s,k:o,pk:o,pt:0,x:n[0],y:n[1]},this.panning=!1,this.vel.x=this.vel.y=0,this.fpsMin=0;try{(a=navigator.vibrate)==null||a.call(navigator,12)}catch{}this.dragUpdate(),this.dirty=!0}dragUpdate(){const e=this.drag,n=e.s,i=performance.now(),r=this.worldAt(e.x,e.y,Rn+.05),s=this.worldAt(e.x,e.y,Rn-.024);e.it.tgt=[r.x-n.cx,Qt(r.y-e.it.h*.4,.03,n.H+.1),Rn+.05,.05];const o=n.rowAt(s.y);o!==e.k?e.pk!==o?(e.pk=o,e.pt=i):i-e.pt>180&&(e.k=o):e.pk=o,n.insertAt(e.it,e.k,s.x-n.cx),e.k=Math.min(e.k,n.rows.length-1);const a=this.W*.12,l=this.H*.12;e.x<a?this.view.x-=.007:e.x>this.W-a&&(this.view.x+=.007),e.y<l?this.view.y+=.007:e.y>this.H-l-120&&(this.view.y-=.007)}endDrag(){const e=this.drag;this.drag=null,e.s.layout(),this.ev.moved(e.s,e.it),this.dirty=!0}loop(e){var i;requestAnimationFrame(r=>this.loop(r));const n=Math.min(50,e-(this.prev||e));if(this.prev=e,this.go){const r=this.calm?1:1-Math.exp(-n/110);this.view.x+=(this.go.x-this.view.x)*r,this.view.y+=(this.go.y-this.view.y)*r,Math.abs(this.go.x-this.view.x)<5e-4&&(this.view.x=this.go.x,this.go=null),this.dirty=!0}else!this.panning&&!this.drag&&Math.abs(this.vel.x)+Math.abs(this.vel.y)>6e-5&&(this.view.x+=this.vel.x,this.view.y+=this.vel.y,this.vel.x*=.93,this.vel.y*=.93,this.dirty=!0);this.drag&&this.dragUpdate();for(const r of this.shelves)r.step(n,(i=this.drag)==null?void 0:i.it,this.calm)&&(this.shadow(),this.dirty=!0);if(!this.dirty||this.paused){this.moving=!1;return}if(this.dirty=!1,this.placeCamera(),this.renderer.render(this.scene,this.camera),this.moving||(this.moving=!0,this.frames=0,this.t0=e),this.frames++,e-this.t0>500){const r=Math.round(this.frames*1e3/(e-this.t0));this.drag&&(this.fpsMin=this.fpsMin?Math.min(this.fpsMin,r):r),this.ev.fps(this.fpsMin?`並べ替え ${r}コマ/秒（最低${this.fpsMin}）`:`なめらかさ ${r}コマ/秒`),this.frames=0,this.t0=e}}redraw(){this.dirty=!0}}const Ao=2,Co=t=>t.slice().sort((e,n)=>e-n)[t.length>>1],$o=(t,e)=>Math.abs(t[0]-e[0])+Math.abs(t[1]-e[1])+Math.abs(t[2]-e[2]);function S2(t,e,n){const i=[];for(let f=Math.round(e*.06);f<e*.16;f++)i.push(f);for(let f=Math.round(e*.84);f<e*.94;f++)i.push(f);const r=[];for(let f=0;f<n;f++){const d=[],p=[],g=[];for(const _ of i){const m=(f*e+_)*4;d.push(t[m]),p.push(t[m+1]),g.push(t[m+2])}r.push([Co(d),Co(p),Co(g)])}const s=Math.max(4,Math.round(n*.02)),o=r.map((f,d)=>{const p=r.slice(Math.max(0,d-s),d+s+1);return[0,1,2].map(g=>Co(p.map(_=>_[g])))}),a=Math.max(6,Math.round(n*.035)),l=[];let c=0;const h=(f,d)=>{const p=o.slice(f,d);return[0,1,2].map(g=>Co(p.map(_=>_[g])))};for(let f=1;f<=n;f++){if(f===n){l.push([c,n]);break}const d=h(c,f);if($o(o[f],d)>60&&f-c>=a){let p=!0;for(let g=f;g<Math.min(n,f+a);g++)if($o(o[g],d)<=60){p=!1;break}p&&(l.push([c,f]),c=f)}}return l.map(([f,d])=>({a:f,z:d,col:h(f,d)}))}function E2(t,e,n,i){const r=e*n,s=Math.round(e*.08),o=Math.round(e*.92),a=Math.max(4,Math.round(e*.3)),l=[[.3,.59,.11],[1,0,0],[0,1,0],[0,0,1]];let c=null;for(const x of l){const b=new Float32Array(r);for(let D=0;D<r;D++){const I=D*4;b[D]=t[I]*x[0]+t[I+1]*x[1]+t[I+2]*x[2]}const w=new Float64Array((e+1)*(n+1));for(let D=0;D<n;D++){let I=0;for(let B=0;B<e;B++)I+=b[D*e+B],w[(D+1)*(e+1)+B+1]=w[D*(e+1)+B+1]+I}const T=new Float32Array(r),C=[];for(let D=0;D<n;D++){const I=Math.max(0,D-a),B=Math.min(n,D+a+1);for(let H=s;H<o;H++){const W=Math.max(0,H-a),q=Math.min(e,H+a+1),L=(w[B*(e+1)+q]-w[I*(e+1)+q]-w[B*(e+1)+W]+w[I*(e+1)+W])/((B-I)*(q-W)),$=b[D*e+H]-L;T[D*e+H]=$,C.push($)}}C.sort((D,I)=>D-I);const S=-C[Math.floor(C.length*.03)],M=C[Math.floor(C.length*.97)],R=Math.max(M,S)-.6*Math.min(M,S);(!c||x!==l[0]&&R>c.score*1.8)&&(c={diff:T,sgn:M>=S?1:-1,span:Math.max(18,Math.max(M,S)),score:R})}const h=new Float32Array(r);for(let x=0;x<r;x++)h[x]=Math.max(0,Math.min(1,(c.sgn*c.diff[x]-.3*c.span)/(.4*c.span)));if(i)for(let x=0;x<n;x++){const b=i[x];let w=0;const T=new Float32Array(o-s);for(let C=s;C<o;C++){const S=(x*e+C)*4,M=Math.abs(t[S]-b[0])+Math.abs(t[S+1]-b[1])+Math.abs(t[S+2]-b[2]);T[C-s]=Math.max(0,Math.min(1,(M-70)/60)),T[C-s]>.5&&w++}if(!(w/(o-s)>.7))for(let C=s;C<o;C++){const S=x*e+C;h[S]=Math.max(h[S],T[C-s])}}const f=new Uint8Array(r),d=new Uint8Array(r),p=[];for(let x=0;x<r;x++){if(d[x]||h[x]<.5)continue;const b=[];for(p.push(x),d[x]=1;p.length;){const R=p.pop();b.push(R);const D=R%e,I=R/e|0;for(const B of[D>0?R-1:-1,D<e-1?R+1:-1,I>0?R-e:-1,I<n-1?R+e:-1])B>=0&&!d[B]&&h[B]>=.5&&(d[B]=1,p.push(B))}let w=e,T=0,C=n,S=0;for(const R of b){const D=R%e,I=R/e|0;D<w&&(w=D),D>T&&(T=D),I<C&&(C=I),I>S&&(S=I)}const M=T-w<e*.08&&S-C>n*.5||(C<=n*.02||S>=n*.98)&&S-C<Math.max(4,e*.12)&&T-w>e*.3;if(b.length>=12&&!M)for(const R of b)f[R]=1}for(let x=0;x<r;x++)if(!f[x]){let b=0;for(const w of[x-1,x+1,x-e,x+e])w>=0&&w<r&&f[w]&&(b=1);b||(h[x]=0)}let g=0,_=0;for(let x=0;x<n;x++)for(let b=s;b<o;b++)_++,f[x*e+b]&&g++;const m=[];for(let x=0;x<r;x++)f[x]&&h[x]>.95&&m.push(x*4);const u=x=>[t[x],t[x+1],t[x+2]];let v=[];if(m.length){for(v.push(u(m[0]));v.length<3;){let x=-1,b=m[0];for(const w of m){const T=Math.min(...v.map(C=>$o(u(w),C)));T>x&&(x=T,b=w)}if(x<90)break;v.push(u(b))}for(let x=0;x<8;x++){const b=v.map(()=>[0,0,0,0]);for(const w of m){let T=0,C=1e9;v.forEach((S,M)=>{const R=$o(u(w),S);R<C&&(C=R,T=M)}),b[T][0]+=t[w],b[T][1]+=t[w+1],b[T][2]+=t[w+2],b[T][3]++}v=b.map((w,T)=>w[3]?[w[0]/w[3],w[1]/w[3],w[2]/w[3]]:v[T])}}const y=new Uint8Array(r);if(v.length>1)for(let x=0;x<r;x++){if(!h[x])continue;let b=0,w=1e9;v.forEach((T,C)=>{const S=$o(u(x*4),T);S<w&&(w=S,b=C)}),y[x]=b}return{A:h,owner:y,cs:v,coverage:g/Math.max(1,_)}}function U_(t,e=[1,1,1]){const n=t.width,i=t.height,r=t.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,n,i).data,s=p=>p.map((g,_)=>Math.max(0,Math.min(255,Math.round(g*e[_])))),o=S2(r,n,i),a=new Array(i);for(const p of o)for(let g=p.a;g<p.z;g++)a[g]=p.col;const l=E2(r,n,i,a);if(l.coverage>.62||!l.cs.length)return{canvas:null,retake:l.coverage>.62};const c=n*Ao,h=i*Ao,f=document.createElement("canvas");f.width=c,f.height=h;const d=f.getContext("2d");for(const p of o){const g=s(p.col);d.fillStyle=`rgb(${g[0]},${g[1]},${g[2]})`,d.fillRect(0,p.a*Ao,c,(p.z-p.a)*Ao+1)}return l.cs.forEach((p,g)=>{const _=document.createElement("canvas");_.width=n,_.height=i;const m=_.getContext("2d"),u=m.createImageData(n,i);for(let w=0;w<n*i;w++){const T=l.owner[w]===g?l.A[w]:0;u.data[w*4]=u.data[w*4+1]=u.data[w*4+2]=T*255,u.data[w*4+3]=255}m.putImageData(u,0,0);const v=document.createElement("canvas");v.width=c,v.height=h;const y=v.getContext("2d");y.imageSmoothingQuality="high",y.filter=`blur(${Ao*.55}px)`,y.drawImage(_,0,0,c,h),y.filter="none";const x=y.getImageData(0,0,c,h),b=s(p.map(Math.round));for(let w=0;w<x.data.length;w+=4){const T=x.data[w]/255,C=Math.max(0,Math.min(1,(T-.4)/.2)),S=C*C*(3-2*C);x.data[w]=b[0],x.data[w+1]=b[1],x.data[w+2]=b[2],x.data[w+3]=S*255}y.putImageData(x,0,0),d.drawImage(v,0,0)}),{canvas:f,retake:!1}}const Ad=560,Br=4,ce=t=>document.querySelector(t),se={phase:"all",rows:5,row:0,added:0,colors:null,queue:[],qi:0,fixed:0,resume:!1,rowRetakes:[]};let Yo=null,Gh=0,br=null,ha=0,ps=0,Lg=0,Cd=!1,Xn=null,lc=0,N_=()=>{};const Rd=document.createElement("canvas"),Dg=Rd.getContext("2d",{willReadFrequently:!0}),Ig=(t,e)=>Promise.race([t,new Promise((n,i)=>setTimeout(()=>i(new Error("timeout")),e))]);function w2(t,e={}){if(N_=t||(()=>{}),Object.assign(se,{phase:"all",rows:5,row:0,added:0,colors:null,removedSamples:0,queue:[],qi:0,fixed:0,resume:!1,rowRetakes:[]}),ce("#capture").hidden=!1,e.books&&e.books.length){se.phase="book",se.queue=e.books,Dc();return}Fr()}function cc(){Wh(),ce("#capture").hidden=!0,N_(se.added,se.removedSamples||0,se.fixed)}function bd(){se.phase="row",se.row++,se.row>=se.rows?cc():Fr()}function Fr(t){if(Ea("intro"),ce("#cpNote").textContent=t||"",se.phase==="book"){ce("#cpStep").textContent=`近くで撮り直し ${se.qi+1} / ${se.queue.length}冊`,ce("#cpHead").textContent="1冊ずつ近くで撮ります",ce("#cpText").textContent="縦長の枠に、背表紙1冊を上から下まで入れてください。スマホは縦向きのままで大丈夫です。撮れたらすぐ描き直して、次の本へ進みます。",ce("#cpGo").textContent=t?"もう一度撮る":"撮る",ce("#cpSkip").hidden=!1,ce("#cpSkip").textContent="この本はとばす";return}ce("#cpSkip").textContent="ここで終わる";const e=se.phase==="all";ce("#cpStep").textContent=e?"本棚全体":`${se.row+1}段目 / ${se.rows}段`,ce("#cpHead").textContent=e?"まず、本棚全体を撮ります":`${se.row+1}段目を撮ります`,ce("#cpText").textContent=e?"本棚の外側のわくが、だいたい枠に入るように正面から撮ってください。ぴったりでなくても大丈夫です。わくの色・中の色・段の数を読み取ります。":"スマホを横向きにして、棚板の上と下が、だいたい枠の線のあたりに来るようにしてください。ぴったりでなくても、撮ったあとに本当の位置に合わせ直します。シャッターを押しても撮れます。",ce("#cpGo").textContent=e?"本棚全体を撮る":`${se.row+1}段目を撮る`,ce("#cpSkip").hidden=e}function Ea(t){for(const e of["intro","cam","all","row","after"])ce("#cp_"+e).hidden=e!==t}const T2=()=>se.phase==="all"?.62:se.phase==="book"?.22:Ad/236;async function F_(){const t=ce("#cpNote");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.textContent="この画面ではカメラが使えません。";return}try{typeof DeviceMotionEvent<"u"&&DeviceMotionEvent.requestPermission&&await Ig(DeviceMotionEvent.requestPermission(),4e3)}catch{}try{Yo=await Ig(navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:3840},height:{ideal:2160}},audio:!1}),6e3)}catch{t.textContent="カメラを使えませんでした。カメラの使用を許可してから、もう一度押してください。";return}const e=ce("#cpVideo");e.srcObject=Yo;try{await e.play()}catch{}br=null,ha=0,Xn=null,lc=0,ps=0,ce("#cpCamStep").textContent=ce("#cpStep").textContent,ce("#cpCamBack").textContent=se.phase==="book"?"とばす":"もどる",Ea("cam"),addEventListener("devicemotion",B_),O_(),Gh=requestAnimationFrame(z_)}function Wh(){cancelAnimationFrame(Gh),removeEventListener("devicemotion",B_),Yo&&Yo.getTracks().forEach(t=>t.stop()),Yo=null}function k_(){const t=innerWidth,e=innerHeight,n=T2();let i=t*.9,r=i/n;const s=e*(se.phase==="all"?.68:se.phase==="book"?.62:.6);return r>s&&(r=s,i=r*n),{x:(t-i)/2,y:(e-r)/2,w:i,h:r}}function O_(){const t=k_(),e=innerWidth,n=innerHeight,i=Math.min(28,t.w/5);ce("#cpOv").setAttribute("viewBox",`0 0 ${e} ${n}`),ce("#cpMask").setAttribute("d",`M0 0H${e}V${n}H0Z M${t.x} ${t.y}H${t.x+t.w}V${t.y+t.h}H${t.x}Z`);const r=[[t.x,t.y,1,1],[t.x+t.w,t.y,-1,1],[t.x+t.w,t.y+t.h,-1,-1],[t.x,t.y+t.h,1,-1]];ce("#cpBrks").innerHTML=r.map(([s,o,a,l])=>`<path class="brk" d="M${s} ${o+l*i}V${o}H${s+a*i}"/>`).join("")+`<rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"/>`,ce("#cpRot").hidden=!(se.phase==="row"&&n>e)}addEventListener("resize",()=>{!ce("#capture").hidden&&!ce("#cp_cam").hidden&&O_()});function B_(t){const e=t.accelerationIncludingGravity;if(!e||e.x==null)return;const n=Math.hypot(e.x,e.y,e.z)||1,i=Math.asin(Math.max(-1,Math.min(1,e.z/n)))*57.3;let r=Math.atan2(e.x,e.y)*57.3;r=(r%90+90+45)%90-45,br={pitch:i,rot:r};const s=t.rotationRate;s&&s.alpha!=null&&(ha=ha*.7+Math.hypot(s.alpha,s.beta,s.gamma)*.3)}function A2(){const t=ce("#cpVideo"),e=t.videoWidth,n=t.videoHeight,i=Math.max(innerWidth/e,innerHeight/n);return{s:i,ox:(innerWidth-e*i)/2,oy:(innerHeight-n*i)/2}}function Xh(){const t=k_(),e=A2(),n=(i,r)=>[(i-e.ox)/e.s,(r-e.oy)/e.s];return[n(t.x,t.y),n(t.x+t.w,t.y),n(t.x+t.w,t.y+t.h),n(t.x,t.y+t.h)]}function C2(t){const e=Xh(),n=320,i=n/t.videoWidth,r=Math.round(t.videoHeight*i);Rd.width=n,Rd.height=r,Dg.drawImage(t,0,0,n,r);const s=Dg.getImageData(0,0,n,r).data,o=(u,v)=>{const y=(v*n+u)*4;return s[y]*.3+s[y+1]*.59+s[y+2]*.11},a=Math.max(1,Math.round(e[0][0]*i)),l=Math.min(n-2,Math.round(e[1][0]*i)),c=Math.round(e[0][1]*i),h=Math.round(e[3][1]*i);if(l-a<20||h-c<10)return!1;const f=u=>{if(u<1||u>=r-1)return 0;let v=0,y=0;for(let x=a;x<=l;x+=2)v+=Math.abs(o(x,u+1)-o(x,u-1)),y++;return v/y};let d=0,p=0;for(let u=c+4;u<h-4;u+=3)d+=f(u),p++;d/=Math.max(1,p);const g=Math.max(4,Math.round((h-c)*.12)),_=u=>{let v=0;for(let y=u-g;y<=u+g;y++)v=Math.max(v,f(y));return v},m=Math.max(8,d*1.5);return _(c)>m&&_(h)>m}const No=document.createElement("canvas"),ul=No.getContext("2d",{willReadFrequently:!0});function R2(t){const e=Xh(),n=Math.max(0,e[0][0]),i=Math.max(0,e[0][1]),r=Math.min(t.videoWidth,e[2][0]),s=Math.min(t.videoHeight,e[2][1]),o=r-n,a=s-i;if(o<20||a<20)return null;const l=240/Math.max(o,a),c=Math.max(8,Math.round(o*l)),h=Math.max(8,Math.round(a*l));No.width=c,No.height=h,ul.drawImage(t,n,i,o,a,0,0,c,h);let f=ul.getImageData(0,0,c,h).data,d=0,p=0;for(let x=0;x<f.length;x+=4){const b=f[x]*.3+f[x+1]*.59+f[x+2]*.11;d+=b,b>=250&&Math.max(f[x],f[x+1],f[x+2])-Math.min(f[x],f[x+1],f[x+2])<20&&p++}const g=f.length/4,_=Math.min(360,Math.round(o)),m=Math.min(240,Math.round(a));No.width=_,No.height=m,ul.drawImage(t,n+(o-_)/2,i+(a-m)/2,_,m,0,0,_,m),f=ul.getImageData(0,0,_,m).data;const u=(x,b)=>{const w=(b*_+x)*4;return f[w]*.3+f[w+1]*.59+f[w+2]*.11};let v=0,y=0;for(let x=1;x<m-1;x+=2)for(let b=1;b<_-1;b+=2)v+=Math.abs(4*u(b,x)-u(b-1,x)-u(b+1,x)-u(b,x-1)-u(b,x+1)),y++;return{mean:d/g,glare:p/g,sharp:v/Math.max(1,y)}}function b2(){const t={near:Cd,light:!Xn||Xn.mean>=55,glare:!Xn||Xn.glare<.012,sharp:ha<25&&(!Xn||Xn.sharp>=Math.min(5,lc*.75))};for(const e of document.querySelectorAll("#cpChecks [data-k]"))e.classList.toggle("ok",t[e.dataset.k]),e.classList.toggle("ng",!t[e.dataset.k]);return t}function z_(t){Gh=requestAnimationFrame(z_);const e=ce("#cpVideo");if(!e.videoWidth)return;if(t-Lg>180){Lg=t;try{Cd=se.phase==="book"?!0:C2(e)}catch{Cd=!1}try{Xn=R2(e),Xn&&(lc=Math.max(lc*.99,Xn.sharp))}catch{Xn=null}}const n=b2(),i=ce("#cp_cam");let r=null;if(br){r=Math.abs(br.pitch)<8&&Math.abs(br.rot)<6;const o=a=>Math.max(-24,Math.min(24,a*3));ce("#cpBubble").style.transform=`translate(${o(br.rot)}px,${o(-br.pitch)}px)`}i.classList.toggle("level-ok",r===!0);const s=n.near&&n.light&&n.glare&&n.sharp&&r!==!1;if(i.classList.toggle("ready",s),i.classList.toggle("tilted",r===!1),ce("#cpMsg").textContent=r===!1?"スマホをまっすぐに（緑の丸をまん中へ）":n.near?n.light?n.glare?n.sharp?"そのまま…":ha>=25?"スマホを止めてください":"ピントが合うまで、少し待つか少し離してください":"光が反射しています。スマホを少し斜めに":"暗いです。部屋の明かりをつけてください":se.phase==="all"?"本棚のわくを、だいたい枠に入れてください":"棚板の上と下を、だいたい枠の線に",s){ps||(ps=t);const o=Math.min(1,(t-ps)/550);ce("#cpArc").setAttribute("stroke-dasharray",`${o*214} 214`),o>=1&&(ps=0,H_())}else ps=0,ce("#cpArc").setAttribute("stroke-dasharray","0 214")}function H_(){const t=ce("#cpVideo");if(!t.videoWidth)return;const e=Xh(),n=Math.min(1,3200/Math.max(t.videoWidth,t.videoHeight)),i=document.createElement("canvas");i.width=Math.round(t.videoWidth*n),i.height=Math.round(t.videoHeight*n),i.getContext("2d").drawImage(t,0,0,i.width,i.height),Wh();const r=i.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,i.width,i.height),s=e.map(([a,l])=>[Math.max(0,Math.min(i.width,a*n)),Math.max(0,Math.min(i.height,l*n))]);if(se.phase==="book"){setTimeout(()=>B2(r,s),30);return}const o=P2(r,s);setTimeout(()=>se.phase==="all"?U2(r,o):N2(r,o),30)}function P2(t,e){const{width:n,height:i,data:r}=t,s=(T,C)=>{const S=(C*n+T)*4;return r[S]*.3+r[S+1]*.59+r[S+2]*.11},o=Math.max(1,Math.round(Math.min(e[0][0],e[3][0]))),a=Math.min(n-2,Math.round(Math.max(e[1][0],e[2][0]))),l=Math.round((e[0][1]+e[1][1])/2),c=Math.round((e[3][1]+e[2][1])/2),h=c-l,f=a-o,d=T=>{if(T<2||T>=i-2)return 0;let C=0,S=0;for(let M=o+f*.1;M<a-f*.1;M+=3){const R=M|0;C+=Math.abs(s(R,T+2)-s(R,T-2)),S++}return C/Math.max(1,S)},p=T=>{if(T<2||T>=n-2)return 0;let C=0,S=0;for(let M=l+h*.1;M<c-h*.1;M+=3){const R=M|0;C+=Math.abs(s(T+2,R)-s(T-2,R)),S++}return C/Math.max(1,S)},g=(T,C,S,M)=>{let R=T,D=0,I=0,B=0;for(let H=T-C;H<=T+C;H+=2){const W=S(H);I+=W,B++;const q=W/(1+Math.abs(H-T)/M);q>D&&(D=q,R=H)}return S(R)>I/B*1.6?R:T},_=(se.phase==="all",g(l,Math.round(h*.12),d,h*.04)),m=se.phase==="all"?g(c,Math.round(h*.12),d,h*.04):Math.min(i-1,Math.round(c+h*.08));let u=o,v=a;if(se.phase==="all"&&(u=g(o,Math.round(f*.1),p,f*.04),v=g(a,Math.round(f*.1),p,f*.04)),m-_<h*.6||v-u<f*.6)return e;const y=_-l,x=m-c,b=u-o,w=v-a;return[[e[0][0]+b,e[0][1]+y],[e[1][0]+w,e[1][1]+y],[e[2][0]+w,e[2][1]+x],[e[3][0]+b,e[3][1]+x]]}function L2(t,e){const n=e.length,i=t.map((r,s)=>[...r,e[s]]);for(let r=0;r<n;r++){let s=r;for(let o=r+1;o<n;o++)Math.abs(i[o][r])>Math.abs(i[s][r])&&(s=o);[i[r],i[s]]=[i[s],i[r]];for(let o=0;o<n;o++){if(o===r)continue;const a=i[o][r]/i[r][r];for(let l=r;l<=n;l++)i[o][l]-=a*i[r][l]}}return i.map((r,s)=>r[n]/r[s])}function D2(t,e){const n=[],i=[];for(let r=0;r<4;r++){const[s,o]=t[r],[a,l]=e[r];n.push([s,o,1,0,0,0,-a*s,-a*o]),i.push(a),n.push([0,0,0,s,o,1,-l*s,-l*o]),i.push(l)}return[...L2(n,i),1]}function jh(t,e,n,i){const r=D2([[0,0],[n,0],[n,i],[0,i]],e),s=t.width,o=t.height,a=t.data,l=new ImageData(n,i),c=l.data;for(let h=0;h<i;h++)for(let f=0;f<n;f++){const d=f+.5,p=h+.5,g=r[6]*d+r[7]*p+1;let _=(r[0]*d+r[1]*p+r[2])/g-.5,m=(r[3]*d+r[4]*p+r[5])/g-.5;_=Math.max(0,Math.min(s-1.001,_)),m=Math.max(0,Math.min(o-1.001,m));const u=_|0,v=m|0,y=_-u,x=m-v,b=(v*s+u)*4,w=b+s*4,T=(h*n+f)*4;for(let C=0;C<3;C++)c[T+C]=(a[b+C]*(1-y)+a[b+4+C]*y)*(1-x)+(a[w+C]*(1-y)+a[w+4+C]*y)*x;c[T+3]=255}return l}const Dn=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),V_=t=>{const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e};function I2(t){const{width:e,height:n,data:i}=t,r=e*4*3,s=new Float32Array(n);for(let l=4;l<n-4;l++){let c=0,h=0;for(let f=Math.round(e*.08);f<e*.92;f+=3){const d=(l*e+f)*4;Math.abs(i[d-r]+i[d-r+1]+i[d-r+2]-i[d+r]-i[d+r+1]-i[d+r+2])>60&&c++,h++}s[l]=c/h}const o=[];for(let l=Math.round(n*.06);l<n*.94;l++)s[l]>.6&&o.push(l);o.sort((l,c)=>s[c]-s[l]);const a=[];for(const l of o)a.every(c=>Math.abs(c-l)>=n*.08)&&a.push(l);return Math.max(1,Math.min(10,a.length+1))}function uc(t,e){const{width:n,height:i,data:r}=t;let s=0,o=0,a=0,l=0;for(let c=0;c<i;c+=3)for(let h=0;h<n;h+=3)if(e(h,c)){const f=(c*n+h)*4;s+=r[f],o+=r[f+1],a+=r[f+2],l++}return l=l||1,"#"+[s/l,o/l,a/l].map(c=>Math.round(c).toString(16).padStart(2,"0")).join("")}function U2(t,e){const n=(Dn(e[0],e[1])+Dn(e[3],e[2]))/2,i=(Dn(e[0],e[3])+Dn(e[1],e[2]))/2,r=900,s=Math.round(r*i/n),o=jh(t,e,r,s);se.rows=I2(o),se.colors={frame:uc(o,(l,c)=>l<r*.025||l>r*.975||c<s*.012||c>s*.988),inner:uc(o,(l,c)=>l>r*.1&&l<r*.9&&c>s*.035&&c<s*.06)};const a=ce("#cpAllCv");a.width=r,a.height=s,a.getContext("2d").putImageData(o,0,0),ce("#cpRows").textContent=se.rows+"段",ce("#cpFrame").style.background=se.colors.frame,ce("#cpInner").style.background=se.colors.inner,Ea("all")}let st=null;function $h(t){const{width:e,height:n,data:i}=t,r=Math.round(n*.3),s=Math.round(n*.95),o=new Float32Array(e),a=(p,g)=>{const _=(g*e+p)*4;return[i[_],i[_+1],i[_+2]]},l=(p,g)=>Math.abs(p[0]-g[0])+Math.abs(p[1]-g[1])+Math.abs(p[2]-g[2]);for(let p=4;p<e-4;p++){const g=[0,0,0,0];let _=0;for(let m=r;m<s;m+=3){const u=Math.min(3,(m-r)/(s-r)*4|0);l(a(p-3,m),a(p+3,m))>45&&g[u]++,_++}o[p]=Math.min(...g)/(_/4)}const c=new Float32Array(e);for(let p=3;p<e-3;p++)c[p]=(o[p-2]+2*o[p-1]+3*o[p]+2*o[p+1]+o[p+2])/9;const h=6*Br,f=[];for(let p=h;p<e-h;p++)c[p]>=.3&&c[p]>=c[p-1]&&c[p]>=c[p+1]&&f.push(p);f.sort((p,g)=>c[g]-c[p]);const d=[];for(const p of f)d.every(g=>Math.abs(g-p)>=h)&&d.push(p);return d.sort((p,g)=>p-g)}function N2(t,e){const n=(Dn(e[0],e[1])+Dn(e[3],e[2]))/2,i=(Dn(e[0],e[3])+Dn(e[1],e[2]))/2,r=Math.round(Ad*i/n),s=Ad*Br,o=r*Br,a=jh(t,e,s,o);st={img:a,canvas:V_(a),W:s,H:o,hmm:r,cuts:$h(a),taps:0},st.auto=st.cuts.length;const l=ce("#cpRowImg");l.src=st.canvas.toDataURL("image/jpeg",.85),l.parentElement.style.aspectRatio=`${s} / ${o}`,ce("#cpRowHead").textContent=`${se.row+1}段目の本の境目`,Yh(),Ea("row")}function Yh(){const t=ce("#cpLines");t.setAttribute("viewBox",`0 0 ${st.W} ${st.H}`),t.innerHTML=st.cuts.map(e=>`<line x1="${e}" y1="0" x2="${e}" y2="${st.H}"/>`).join(""),ce("#cpCount").textContent=`${st.cuts.length+1}冊 ・ 直した回数 ${st.taps}回`}function F2(t){const e=t.currentTarget.getBoundingClientRect(),n=Math.round((t.clientX-e.left)/e.width*st.W),i=14/e.width*st.W,r=st.cuts.findIndex(s=>Math.abs(s-n)<i);r>=0?st.cuts.splice(r,1):(st.cuts.push(n),st.cuts.sort((s,o)=>s-o)),st.taps++,Yh()}async function k2(){se.removedSamples=(se.removedSamples||0)+Th();const{img:t,canvas:e,W:n,H:i}=st,r=t.data,s=(p,g)=>{const _=(g*n+p)*4;return[r[_],r[_+1],r[_+2]]},o=(p,g)=>Math.abs(p[0]-g[0])+Math.abs(p[1]-g[1])+Math.abs(p[2]-g[2]),a=(p,g)=>{const _=new Map;for(let v=Math.max(0,p|0);v<Math.min(i,g);v+=3)for(let y=0;y<n;y+=5){const x=s(y,v),b=(x[0]>>4)*256+(x[1]>>4)*16+(x[2]>>4);_.set(b,(_.get(b)||0)+1)}let m=0,u=-1;for(const[v,y]of _)y>u&&(u=y,m=v);return[(m>>8)*16+8,(m>>4&15)*16+8,(m&15)*16+8]},l=p=>[1,3,5].map(g=>parseInt(p.slice(g,g+2),16)),c=se.colors?l(se.colors.inner):a(0,i*.12),h=se.colors?l(se.colors.inner):a(i*.9,i);let f=[1,1,1];if(se.colors){const p=l(se.colors.frame);p[0]*.3+p[1]*.59+p[2]*.11>150&&(f=[242/p[0],240/p[1],234/p[2]].map(_=>Math.max(.7,Math.min(1.5,_))))}const d=[0,...st.cuts,n];se.rowRetakes=[];for(let p=1;p<d.length;p++){ce("#cpRowOk").textContent=`描き直しています… ${p}/${d.length-1}冊`,await new Promise(R=>setTimeout(R,0));const g=d[p-1],_=d[p];if(_-g<3*Br)continue;let m=0,u=0;const v=g+Math.round((_-g)*.25),y=Math.max(v+1,_-Math.round((_-g)*.25));for(let R=0;R<i*.7;R+=2){let D=0,I=0;for(let B=v;B<y;B+=2)o(s(B,R),c)>60&&D++,I++;if(D/I>.6){if(++u>=3){m=Math.max(0,R-6);break}}else u=0}let x=i;const b=h;u=0;for(let R=i-1;R>i*.5;R-=2){let D=0,I=0;for(let B=v;B<y;B+=2)o(s(B,R),b)>60&&D++,I++;if(D/I>.6){if(++u>=3){x=Math.min(i,R+6+4);break}}else u=0}if(x-m<i*.2)continue;const w=document.createElement("canvas");w.width=_-g,w.height=x-m,w.getContext("2d").drawImage(e,g,m,_-g,x-m,0,0,_-g,x-m);const T=await new Promise(R=>w.toBlob(R,"image/jpeg",.88)),C=uc(w.getContext("2d").getImageData(0,0,w.width,w.height),()=>!0),S=U_(w,f),M=wh({title:"",author:"",format:"shiroku",h:Math.round((x-m)/Br),w:Math.round((_-g)/Br*10)/10,color:C,img:!0,redrawn:!!S.canvas,retake:!S.canvas,row:se.row+1});S.canvas||se.rowRetakes.push({id:M,a:g,b:_,top:m,bottom:x}),await eo(M+"#photo",T),await eo(M,S.canvas?await new Promise(R=>S.canvas.toBlob(R,"image/png")):T),se.added++}}function O2(t){const e=se.rowRetakes.length;ce("#cpAfterStep").textContent=`${se.row+1}段目 / ${se.rows}段`,ce("#cpAfterHead").textContent=`${t}冊を本棚に入れました`,ce("#cpAfterImg").src=st.canvas.toDataURL("image/jpeg",.8),ce("#cpAfterFix").style.aspectRatio=`${st.W} / ${st.H}`;const n=ce("#cpAfterMarks");n.setAttribute("viewBox",`0 0 ${st.W} ${st.H}`),n.innerHTML=se.rowRetakes.map(i=>`<rect x="${i.a+4}" y="${i.top+4}" width="${Math.max(4,i.b-i.a-8)}" height="${Math.max(4,i.bottom-i.top-8)}"/>`).join(""),ce("#cpAfterText").textContent=`${e}冊は文字がうまく読めなかったので、写真のまま入れています。1冊ずつ近くで撮ると、描き直せます。`,ce("#cpBookGo").textContent=`1冊ずつ近くで撮る（${e}冊）`,ce("#cpBookLater").textContent=se.row+1>=se.rows?"あとで（終わる）":"あとで（次の段へ）",Ea("after")}function Dc(t){Fr(t),t||F_()}function fc(){if(se.qi++,se.qi<se.queue.length){Dc();return}se.resume?(se.resume=!1,bd()):cc()}async function B2(t,e){const n=se.queue[se.qi],i=Cn().books.find(_=>_.id===n);if(!i){fc();return}const r=(Dn(e[0],e[1])+Dn(e[3],e[2]))/2,s=(Dn(e[0],e[3])+Dn(e[1],e[2]))/2,o=Math.round((i.h||200)*Br*1.5),a=Math.max(8,Math.round(o*r/s)),l=jh(t,e,a,o),c=V_(l),h=a/2;let f=0,d=a;for(const _ of $h(l))_<h&&_>f&&(f=_),_>h&&_<d&&(d=_);d-f<a*.25&&(f=0,d=a);const p=document.createElement("canvas");p.width=d-f,p.height=o,p.getContext("2d").drawImage(c,f,0,d-f,o,0,0,d-f,o);const g=U_(p);if(await eo(n+"#photo",await new Promise(_=>p.toBlob(_,"image/jpeg",.9))),!g.canvas){Dc("まだうまく読めませんでした。明るい所で、背表紙が枠いっぱいになるように、もう一度撮ってください。");return}await eo(n,await new Promise(_=>g.canvas.toBlob(_,"image/png"))),El(n,{redrawn:!0,retake:!1,color:uc(p.getContext("2d").getImageData(0,0,p.width,p.height),()=>!0)}),se.fixed++,fc()}function z2(){ce("#cpClose").onclick=cc,ce("#cpCamBack").onclick=()=>{Wh(),se.phase==="book"?fc():Fr()},ce("#cpShutter").onclick=H_,ce("#cpRowsMinus").onclick=()=>{se.rows>1&&(se.rows--,ce("#cpRows").textContent=se.rows+"段")},ce("#cpRowsPlus").onclick=()=>{se.rows<10&&(se.rows++,ce("#cpRows").textContent=se.rows+"段")},ce("#cpUseColors").onclick=()=>{Kv({mat:"paint",frame:se.colors.frame,inner:se.colors.inner,top:"same",brass:!1,preset:"custom"}),ce("#cpUseColors").textContent="この色の本棚にしました"},ce("#cpAllOk").onclick=()=>{se.phase="row",se.row=0,Fr()},ce("#cpAllRetake").onclick=()=>{Fr()},ce("#cpLines").addEventListener("click",F2),ce("#cpReset").onclick=()=>{st.cuts=$h(st.img),st.taps=0,Yh()},ce("#cpRowRetake").onclick=()=>Fr(),ce("#cpRowOk").onclick=async()=>{const t=ce("#cpRowOk"),e=se.added;t.disabled=!0,t.textContent="本棚に入れています…";try{await k2()}finally{t.disabled=!1,t.textContent="本棚に入れる"}se.rowRetakes.length?O2(se.added-e):bd()},ce("#cpBookGo").onclick=()=>{se.phase="book",se.queue=se.rowRetakes.map(t=>t.id),se.qi=0,se.resume=!0,Dc()},ce("#cpBookLater").onclick=bd,ce("#cpSkip").onclick=()=>{se.phase==="book"?fc():cc()},ce("#cpGo").onclick=()=>{ce("#cpNote").textContent="",F_()}}function G_(t){const e=String(t).replace(/[^0-9Xx]/g,"").toUpperCase();if(e.length===13&&/^97[89]/.test(e))return(10-[...e.slice(0,12)].reduce((i,r,s)=>i+ +r*(s%2?3:1),0)%10)%10===+e[12]?e:null;if(e.length===10){const n="978"+e.slice(0,9),i=[...n].reduce((r,s,o)=>r+ +s*(o%2?3:1),0);return n+(10-i%10)%10}return null}function H2(t){const e=String(t||"").replace(/^C/,"")[1];return{1:"bunko",2:"shinsho",9:"comic"}[e]||null}async function V2(t){const e=await fetch(`https://api.openbd.jp/v1/get?isbn=${t}`);if(!e.ok)throw new Error("network");const[n]=await e.json();if(!n)return null;const i=n.summary||{},r=n.onix&&n.onix.DescriptiveDetail||{},s=[].concat(r.Extent||[]).find(h=>h.ExtentType==="11"||h.ExtentValue),o=[].concat(r.Subject||[]).find(h=>h.SubjectSchemeIdentifier==="78"),a=[i.title,i.volume].filter(Boolean).join(" ").trim(),l=(i.author||"").replace(/,/g,"").replace(/\s*\d{4}-(\d{4})?/g,"").trim();let c=o?H2(o.SubjectCode):null;return!c&&/文庫/.test(i.series+a)&&(c="bunko"),!c&&/新書/.test(i.series+a)&&(c="shinsho"),!c&&/コミック|COMICS/i.test(i.series||"")&&(c="comic"),{isbn:t,title:a,author:l,publisher:i.publisher||"",cover:i.cover||"",pages:s&&parseInt(s.ExtentValue,10)||null,format:c||"shiroku",formatGuessed:!c}}const G2="https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js";let Hu=null;function W2(){return window.ZXing?Promise.resolve(window.ZXing):(Hu||(Hu=new Promise((t,e)=>{const n=document.createElement("script");n.src=G2,n.onload=()=>t(window.ZXing),n.onerror=e,document.head.appendChild(n)})),Hu)}async function X2(t,e){const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1920}},audio:!1});t.srcObject=n,await t.play();let i=!1;const r=()=>{i=!0,n.getTracks().forEach(o=>o.stop()),t.srcObject=null},s=o=>i||!/^97[89]\d{10}$/.test(o)?!1:(r(),e(o),!0);if("BarcodeDetector"in window){const o=new window.BarcodeDetector({formats:["ean_13"]}),a=async()=>{if(!i){try{for(const l of await o.detect(t))if(s(l.rawValue))return}catch{}requestAnimationFrame(a)}};a()}else{const o=await W2(),a=new Map([[o.DecodeHintType.POSSIBLE_FORMATS,[o.BarcodeFormat.EAN_13]],[o.DecodeHintType.TRY_HARDER,!0]]),l=new o.MultiFormatReader;l.setHints(a);const c=document.createElement("canvas"),h=c.getContext("2d",{willReadFrequently:!0}),f=()=>{if(i)return;const d=t.videoWidth,p=t.videoHeight;if(d){const g=Math.round(d*.8),_=Math.round(p*.35);c.width=g,c.height=_,h.drawImage(t,(d-g)/2,(p-_)/2,g,_,0,0,g,_);try{const m=new o.HTMLCanvasElementLuminanceSource(c),u=l.decode(new o.BinaryBitmap(new o.HybridBinarizer(m)));if(s(u.getText()))return}catch{}}setTimeout(f,120)};f()}return r}const W_=Ff,X_=()=>Cn().books,j_=(t,e,n)=>X_().some(i=>t&&i.isbn===t||!!e&&i.title===e&&(i.author||"")===(n||""));function j2({onPick:t,onClose:e}){return j.jsx("div",{className:"sheet",role:"dialog","aria-modal":"true","aria-labelledby":"addHead",onClick:n=>n.target===n.currentTarget&&e(),children:j.jsxs("div",{className:"card",children:[j.jsxs("div",{className:"cardTop",children:[j.jsx("h2",{id:"addHead",children:"本を足す"}),j.jsx("button",{className:"x","aria-label":"閉じる",onClick:e,children:"×"})]}),j.jsx("p",{className:"lead",children:"持っている紙の本だけを並べます。"}),j.jsxs("button",{className:"way",onClick:()=>t("scan"),children:[j.jsx("b",{children:"バーコードを撮る"}),j.jsx("small",{children:"1冊ずつ。題名・作者・ページ数が自動で入ります"})]}),j.jsxs("button",{className:"way",onClick:()=>t("spine"),children:[j.jsx("b",{children:"背表紙を撮る"}),j.jsx("small",{children:"実物の棚を1段ずつ、まとめて取り込みます"})]}),j.jsxs("button",{className:"way",onClick:()=>t("import"),children:[j.jsx("b",{children:"頑張れ私から読み込む"}),j.jsx("small",{children:"書き出したファイルから、持っている本を選びます"})]})]})})}function $2({onAdded:t,onClose:e}){const n=et.useRef(null),i=et.useRef(null),[r,s]=et.useState("本の裏のバーコード（978 から始まる方）を、枠の中に入れてください。"),[o,a]=et.useState(null),[l,c]=et.useState(!1),[h,f]=et.useState(0),[d,p]=et.useState(0);et.useEffect(()=>{var u;if(o)return;let m=!0;if(!((u=navigator.mediaDevices)!=null&&u.getUserMedia)){s("この画面ではカメラが使えません。");return}return X2(n.current,async v=>{i.current=null;const y=G_(v);if(!(!y||!m)){s("本の情報をさがしています…");try{const x=await V2(y);if(!m)return;const b=x||{isbn:y,title:"",author:"",publisher:"",format:"shiroku",pages:null,formatGuessed:!0};c(j_(y)),a(b),s(x?"":"この本のデータは見つかりませんでした。題名を入れると棚に置けます。")}catch{m&&(s("インターネットにつながらないようです。つながってから、もう一度ためしてください。"),p(x=>x+1))}}}).then(v=>{m?i.current=v:v()}).catch(()=>s("カメラを使えませんでした。カメラの使用を許可してから、もう一度開いてください。")),()=>{var v;m=!1,(v=i.current)==null||v.call(i),i.current=null}},[o,d]);const g=()=>{a(null),c(!1),s("次の本のバーコードを、枠の中に入れてください。")},_=()=>{!o||!o.title.trim()||(Th(),wh({title:o.title.trim(),author:o.author,publisher:o.publisher,isbn:o.isbn,format:o.format,pages:o.pages}),f(m=>m+1),t(),g())};return j.jsxs("div",{className:"sheet full",role:"dialog","aria-modal":"true","aria-label":"バーコードを撮る",children:[j.jsxs("div",{className:"scan",children:[j.jsx("video",{ref:n,playsInline:!0,muted:!0,autoPlay:!0}),j.jsx("div",{className:"scanFrame","aria-hidden":"true"}),j.jsxs("div",{className:"scanTop",children:[j.jsx("span",{children:h?`${h}冊 置きました`:"バーコードを撮る"}),j.jsx("button",{className:"done",onClick:e,children:"終わる"})]}),r&&!o&&j.jsx("p",{className:"scanMsg",role:"status",children:r})]}),o&&j.jsxs("div",{className:"found card",children:[r&&j.jsx("p",{className:"note",children:r}),l&&j.jsx("p",{className:"note",children:"この本は、もう棚にあります。"}),j.jsxs("label",{className:"field",children:[j.jsx("span",{children:"題名（ちがうときは直せます）"}),j.jsx("input",{value:o.title,onChange:m=>a({...o,title:m.target.value})})]}),j.jsxs("dl",{className:"meta",children:[j.jsxs("div",{children:[j.jsx("dt",{children:"作者"}),j.jsx("dd",{children:o.author||"—"})]}),j.jsxs("div",{children:[j.jsx("dt",{children:"判型"}),j.jsxs("dd",{children:[j.jsx("select",{value:o.format,onChange:m=>a({...o,format:m.target.value,formatGuessed:!1}),children:Object.entries(W_).map(([m,u])=>j.jsx("option",{value:m,children:u.name},m))}),o.formatGuessed&&j.jsx("small",{children:"　確かめてください"})]})]}),j.jsxs("div",{children:[j.jsx("dt",{children:"ページ"}),j.jsx("dd",{children:o.pages?`${o.pages}ページ`:"—"})]})]}),j.jsx("button",{className:"primary",onClick:_,disabled:l||!o.title.trim(),children:"棚に置く"}),j.jsx("button",{className:"secondary",onClick:g,children:l?"次の本を撮る":"ちがう本"})]})]})}function Y2(t){const e=JSON.parse(t),n=Array.isArray(e)?e:Array.isArray(e==null?void 0:e.books)?e.books:[];if(!n.length)throw new Error("empty");return n.filter(i=>i&&i.title).map((i,r)=>{const s=i.isbn&&G_(i.isbn)||void 0,o=String(i.title).trim(),a=String(i.author||"").trim();return{key:String(i.id??r),title:o,author:a,genre:String(i.genre||""),status:String(i.status||"そのほか"),isbn:s,pages:Number.isFinite(+i.pages)&&+i.pages>0?Math.round(+i.pages):null,spine:typeof i.spine=="string"&&i.spine.startsWith("data:image/")?i.spine:void 0,has:j_(s,o,a)}})}function q2({onAdded:t,onClose:e}){const[n,i]=et.useState(null),[r,s]=et.useState(""),[o,a]=et.useState(new Set),[l,c]=et.useState("すべて"),[h,f]=et.useState(!1),d=et.useMemo(()=>["すべて",...new Set((n||[]).map(u=>u.status))],[n]),p=(n||[]).filter(u=>l==="すべて"||u.status===l),g=async u=>{if(u){s("");try{i(Y2(await u.text())),a(new Set),c("すべて")}catch{s("頑張れ私の本のファイルとして読めませんでした。頑張れ私の「本を書き出す」で作ったファイルを選んでください。")}}},_=u=>a(v=>{const y=new Set(v);return y.has(u)?y.delete(u):y.add(u),y}),m=async()=>{if(!n)return;f(!0),Th();let u=0;for(const v of n){if(!o.has(v.key)||v.has)continue;let y=null;if(v.spine)try{y=await(await fetch(v.spine)).blob()}catch{y=null}const x=wh({title:v.title,author:v.author,isbn:v.isbn,pages:v.pages,format:"shiroku",genre:v.genre||void 0,img:!!y,from:"ganbare"});y&&(await eo(x+"#photo",y),await eo(x,y)),u++}f(!1),t(u)};return j.jsx("div",{className:"sheet",role:"dialog","aria-modal":"true","aria-labelledby":"impHead",onClick:u=>u.target===u.currentTarget&&!h&&e(),children:j.jsxs("div",{className:"card tall",children:[j.jsxs("div",{className:"cardTop",children:[j.jsx("h2",{id:"impHead",children:"頑張れ私から読み込む"}),j.jsx("button",{className:"x","aria-label":"閉じる",onClick:e,disabled:h,children:"×"})]}),n?j.jsxs(j.Fragment,{children:[j.jsx("p",{className:"lead",children:"持っている紙の本だけを選んでください（電子書籍・借りた本は選ばない）。すでに棚にある本は選べません。"}),j.jsx("div",{className:"chips light",role:"group","aria-label":"読んだ状態でしぼる",children:d.map(u=>j.jsx("button",{"aria-pressed":l===u,onClick:()=>c(u),children:u},u))}),j.jsxs("ul",{className:"picks",children:[p.map(u=>j.jsx("li",{children:j.jsxs("label",{className:u.has?"has":"",children:[j.jsx("input",{type:"checkbox",checked:u.has||o.has(u.key),disabled:u.has,onChange:()=>_(u.key)}),j.jsxs("span",{children:[j.jsx("b",{children:u.title}),j.jsx("small",{children:[u.author,u.status,u.has?"もう棚にあります":"",u.spine?"背表紙の写真あり":""].filter(Boolean).join("・")})]})]})},u.key)),!p.length&&j.jsx("li",{className:"none",children:"この状態の本はありません"})]}),j.jsx("button",{className:"primary",onClick:m,disabled:!o.size||h,children:h?"置いています…":`${o.size}冊を棚に置く`})]}):j.jsxs(j.Fragment,{children:[j.jsx("p",{className:"lead",children:"頑張れ私で「本を書き出す」をして、できたファイルを選んでください。ファイルはこのスマホの中だけで読みます。"}),j.jsxs("label",{className:"primary file",children:["ファイルを選ぶ",j.jsx("input",{type:"file",accept:".json,application/json",onChange:u=>{var v;return g((v=u.target.files)==null?void 0:v[0])}})]}),r&&j.jsx("p",{className:"note",children:r})]})]})})}function K2({id:t,onChanged:e,onClose:n}){var p,g;const i=X_().find(_=>_.id===t),[r,s]=et.useState((i==null?void 0:i.title)||""),[o,a]=et.useState(!1);if(!i)return null;const l=!!((p=i.record)!=null&&p.gone),c=()=>{El(t,{title:r.trim()}),e(),n()},h=async()=>{LM(t);try{await _g(t),await _g(t+"#photo")}catch{}e(),n()},f=()=>{El(t,{record:{...i.record||{},gone:"手放した本"}}),e(),n()},d=()=>{const _={...i.record||{}};delete _.gone,El(t,{record:_}),e(),n()};return j.jsx("div",{className:"sheet",role:"dialog","aria-modal":"true","aria-labelledby":"bkHead",onClick:_=>_.target===_.currentTarget&&n(),children:j.jsxs("div",{className:"card",children:[j.jsxs("div",{className:"cardTop",children:[j.jsx("h2",{id:"bkHead",children:i.title||"題名なし"}),j.jsx("button",{className:"x","aria-label":"閉じる",onClick:n,children:"×"})]}),j.jsx("p",{className:"lead",children:[i.author,(g=W_[i.format])==null?void 0:g.name,l?"手放した本（思い出）":""].filter(Boolean).join("・")||"撮った背表紙の本"}),o?j.jsxs(j.Fragment,{children:[j.jsx("p",{className:"lead",children:"手放した本をどうしますか？"}),j.jsxs("button",{className:"way",onClick:h,children:[j.jsx("b",{children:"棚から外す"}),j.jsx("small",{children:"この本を棚から消します"})]}),i.img?j.jsxs("button",{className:"way",onClick:f,children:[j.jsx("b",{children:"思い出として棚に残す"}),j.jsx("small",{children:"撮った背表紙のまま、少し暗くして並べておきます"})]}):j.jsx("p",{className:"note",children:"思い出として残せるのは、背表紙を撮った本だけです。"}),j.jsx("button",{className:"secondary",onClick:()=>a(!1),children:"もどる"})]}):j.jsxs(j.Fragment,{children:[j.jsxs("label",{className:"field",children:[j.jsxs("span",{children:["題名",i.title?"（ちがうときは直せます）":"（入れておくと、あとで探せます）"]}),j.jsx("input",{value:r,onChange:_=>s(_.target.value),placeholder:"題名"})]}),r.trim()!==(i.title||"")&&j.jsx("button",{className:"primary",onClick:c,children:"題名を直す"}),l?j.jsx("button",{className:"secondary",onClick:d,children:"手元にもどった"}):j.jsx("button",{className:"secondary",onClick:()=>a(!0),children:"手放した"})]})]})})}const $_="わたしの棚";function Vu(){const t=Cn();return{key:"own",name:$_,sample:!1,own:!0,books:t.books,shelf:t.shelf,minRows:CM.minRows,wide:t.wide||1,sort:t.sort}}function Ug(t){return{key:t.name,name:t.name.replace(/の棚$/,"")+"の棚",sample:!0,own:!1,books:t.books,shelf:t.shelf,minRows:t.minRows??2,wide:t.wide||1}}const Ll=[...kf.filter(t=>t.at<0).map(Ug),null,...kf.filter(t=>t.at>0).map(Ug)],Mr=Ll.indexOf(null);function Z2(){var M;const t=et.useRef(null),[e,n]=et.useState(!1),[i,r]=et.useState(Mr),[s,o]=et.useState(""),[a,l]=et.useState(()=>Cn().books.length),[c,h]=et.useState(()=>Cn().shelf.preset||"mine"),[f,d]=et.useState(!1),p=et.useRef(!1),[g,_]=et.useState(null),[m,u]=et.useState(""),v=et.useRef(!1),y=Cn().sort||"manual";et.useEffect(()=>{let R=!0;return(async()=>{const I=[...Cn().books,...kf.flatMap(H=>H.books)].map(H=>(H.title||"")+(H.author||"")).join("")+"の棚見本ー";try{await Promise.race([Promise.all(['800 40px "Shippori Mincho"','600 40px "Shippori Mincho"','700 40px "Zen Kaku Gothic New"','500 40px "Zen Kaku Gothic New"'].map(H=>document.fonts.load(H,I))),new Promise(H=>setTimeout(H,3e3))])}catch{}const B=new M2(document.getElementById("stage"),{shelf:H=>r(H),fps:H=>o(H),tap:H=>_({book:H.id}),moved:(H,W)=>{const q=H.order,L=q.indexOf(W);p.current=!0,L>0?hm(W.b.id,q[L-1].b.id,!0):q.length>1&&hm(W.b.id,q[1].b.id,!1),p.current=!1}});B.canReorder=y==="manual",await B.setShelves(Ll.map(H=>H||Vu()),Mr),R&&(t.current=B,n(!0))})().catch(D=>{console.error(D),o("3Dを表示できませんでした")}),z2(),PM(()=>{p.current||l(Cn().books.length)}),()=>{R=!1}},[]);const x=R=>{const D=pm[R];!D||!t.current||(h(R),d(!0),setTimeout(()=>{p.current=!0,Kv({preset:R,...D,name:Cn().shelf.name}),p.current=!1,t.current.styleShelf(Mr,Cn().shelf),d(!1)},30))},b=async()=>{t.current&&(d(!0),p.current=!0,DM(),p.current=!1,await t.current.replaceShelf(Mr,Vu()),l(Cn().books.length),d(!1))},w=async R=>{if(v.current=!1,!!t.current){d(!0);try{await t.current.replaceShelf(Mr,Vu())}finally{d(!1)}l(Cn().books.length),R&&(u(R),setTimeout(()=>u(""),3200))}},T=R=>{if(R==="spine"){_(null),w2(D=>{D&&w(`${D}冊を棚に置きました`)});return}_(R)},C=i===Mr,S=i===Mr?$_:(M=Ll[i])==null?void 0:M.name;return j.jsxs(j.Fragment,{children:[j.jsxs("header",{className:"top",children:[j.jsx("h1",{children:"本屋"}),j.jsxs("div",{className:"topR",children:[s&&j.jsx("span",{className:"fps",children:s}),j.jsx("a",{className:"old",href:"../",children:"今の本屋へ"})]})]}),e&&i>0&&j.jsx("button",{className:"arrow l","aria-label":"左の棚へ",onClick:()=>{var R;return(R=t.current)==null?void 0:R.goTo(i-1)},children:"‹"}),e&&i<Ll.length-1&&j.jsx("button",{className:"arrow r","aria-label":"右の棚へ",onClick:()=>{var R;return(R=t.current)==null?void 0:R.goTo(i+1)},children:"›"}),e&&C&&a===0&&j.jsxs("section",{className:"empty",children:[j.jsx("h2",{children:"まだ本がありません"}),j.jsxs("p",{children:["持っている紙の本を、バーコードか背表紙を撮って並べましょう。",j.jsx("br",{}),"まずは見本の本で試すこともできます。"]}),j.jsx("button",{className:"primary",onClick:()=>_("menu"),disabled:f,children:"本を足す"}),j.jsx("button",{className:"secondary",onClick:b,disabled:f,children:"見本の本を並べてみる"})]}),j.jsx("section",{className:"dock","aria-label":S,children:C?j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"dockRow",children:[j.jsx("button",{className:"add",onClick:()=>_("menu"),disabled:!e||f,children:"＋ 本を足す"}),j.jsx("div",{className:"chips",role:"group","aria-label":"本棚の素材",children:Object.entries(pm).map(([R,D])=>j.jsx("button",{"aria-pressed":c===R,onClick:()=>x(R),disabled:f,children:D.name},R))})]}),j.jsx("p",{className:"hint",children:y==="manual"?"本をタップすると題名を直したり「手放した」にでき、長押しで並べ替えられます。左右にスワイプすると、となりの棚へ。":"並べる順が「作家順」「色順」のときは、並べ替えできません。左右にスワイプすると、となりの棚へ。"})]}):j.jsxs("p",{className:"hint",children:[S,"（見本）です。左右にスワイプすると、となりの棚へ。"]})}),g==="menu"&&j.jsx(j2,{onPick:T,onClose:()=>_(null)}),g==="scan"&&j.jsx($2,{onAdded:()=>{v.current=!0},onClose:()=>{_(null),v.current&&w()}}),g==="import"&&j.jsx(q2,{onAdded:R=>{_(null),R&&w(`${R}冊を棚に置きました`)},onClose:()=>_(null)}),g&&typeof g=="object"&&j.jsx(K2,{id:g.book,onChanged:()=>w(),onClose:()=>_(null)}),m&&j.jsx("div",{className:"toast",role:"status",children:m}),f&&j.jsx("div",{className:"busy",children:"準備しています"}),!e&&j.jsx("div",{className:"wait",children:"本を並べています"})]})}$v(document.getElementById("root")).render(j.jsx(Z2,{}));
