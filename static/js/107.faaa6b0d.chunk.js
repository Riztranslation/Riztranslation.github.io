/*! For license information please see 107.faaa6b0d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[107],{107:function(t,e,n){function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.r(e),n.d(e,{GiscusWidget:function(){return zt}});var r=n(942);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n(326),l=n(120);function u(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=(0,l.Z)(t)););return t}function c(){return c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=u(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},c.apply(this,arguments)}var h=n(885),f=n(982),d=n(2);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(x){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,s=Object.create(o.prototype),a=new O(r||[]);return i(s,"_invoke",{value:S(t,n,a)}),s}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(x){return{type:"throw",arg:x}}}t.wrap=u;var h={};function f(){}function p(){}function y(){}var g={};l(g,o,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m(C([])));_&&_!==e&&n.call(_,o)&&(g=_);var $=y.prototype=f.prototype=Object.create(g);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(i,o,s,a){var l=c(t[i],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,d.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,a)}))}a(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return P()}for(n.method=r,n.arg=o;;){var s=n.delegate;if(s){var a=E(s,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var l=c(t,e,n);if("normal"===l.type){if(i=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i="completed",n.method="throw",n.arg=l.arg)}}}function E(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=c(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=y,i($,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,a,"GeneratorFunction")),t.prototype=Object.create($),t},t.awrap=function(t){return{__await:t}},A(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var s=new b(u(e,n,i,r),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A($),l($,a,"Generator"),l($,o,(function(){return this})),l($,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function p(t,e,n,i,r,o,s){try{var a=t[o](s),l=a.value}catch(u){return void n(u)}a.done?e(l):Promise.resolve(l).then(i,r)}var y=n(136),g=n(277),m=n(737),_=n(181);function $(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,_.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var A,b,S,E,k=n(671),w=n(144),O=window,C=O.ShadowRoot&&(void 0===O.ShadyCSS||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),x=new WeakMap,Z=function(){function t(e,n,i){if((0,k.Z)(this,t),this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}return(0,w.Z)(t,[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(C&&void 0===t){var n=void 0!==e&&1===e.length;n&&(t=x.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&x.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}]),t}(),U=C?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,n="",i=$(t.cssRules);try{for(i.s();!(e=i.n()).done;){n+=e.value.cssText}}catch(r){i.e(r)}finally{i.f()}return function(t){return new Z("string"==typeof t?t:t+"",void 0,P)}(n)}(t):t},N=window,T=N.trustedTypes,I=T?T.emptyScript:"",L=N.reactiveElementPolyfillSupport,R={toAttribute:function(t,e){switch(e){case Boolean:t=t?I:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(i){n=null}}return n}},M=function(t,e){return e!==t&&(e==e||t==t)},j={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:M},H=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.call(this))._$Ei=new Map,t.isUpdatePending=!1,t.hasUpdated=!1,t._$El=null,t.u(),t}return(0,w.Z)(n,[{key:"u",value:function(){var t,e=this;this._$E_=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}},{key:"_$Eg",value:function(){var t=this;this.constructor.elementProperties.forEach((function(e,n){t.hasOwnProperty(n)&&(t._$Ei.set(n,t[n]),delete t[n])}))}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){C?t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet})):e.forEach((function(e){var n=document.createElement("style"),i=O.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,n){this._$AK(t,n)}},{key:"_$EO",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){var o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:R).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}},{key:"_$AK",value:function(t,e){var n,i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){var o=i.getPropertyOptions(r),s="function"==typeof o.converter?{fromAttribute:o.converter}:void 0!==(null===(n=o.converter)||void 0===n?void 0:n.fromAttribute)?o.converter:R;this._$El=r,this[r]=s.fromAttribute(e,o.type),this._$El=null}}},{key:"requestUpdate",value:function(t,e,n){var i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||M)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}},{key:"_$Ej",value:function(){var t,e=(t=v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$E_;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])})),function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function s(t){p(o,i,r,s,a,"next",t)}function a(t){p(o,i,r,s,a,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}()},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var t,e=this;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach((function(t,n){return e[n]=t})),this._$Ei=void 0);var n=!1,i=this._$AL;try{(n=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(r){throw n=!1,this._$Ek(),r}n&&this._$AE(i)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$Ek",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$E_}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._$EC&&(this._$EC.forEach((function(t,n){return e._$EO(n,e[n],t)})),this._$EC=void 0),this._$Ek()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this.elementProperties.forEach((function(n,i){var r=t._$Ep(i,n);void 0!==r&&(t._$Ev.set(r,i),e.push(r))})),e}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(i){var r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this.elementProperties.get(t)||j}},{key:"finalize",value:function(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=(0,f.Z)(t.h)),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var e,n=this.properties,i=$([].concat((0,f.Z)(Object.getOwnPropertyNames(n)),(0,f.Z)(Object.getOwnPropertySymbols(n))));try{for(i.s();!(e=i.n()).done;){var r=e.value;this.createProperty(r,n[r])}}catch(o){i.e(o)}finally{i.f()}}return this.elementStyles=this.finalizeStyles(this.styles),!0}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var n,i=$(new Set(t.flat(1/0).reverse()));try{for(i.s();!(n=i.n()).done;){var r=n.value;e.unshift(U(r))}}catch(o){i.e(o)}finally{i.f()}}else void 0!==t&&e.push(U(t));return e}},{key:"_$Ep",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}}]),n}((0,m.Z)(HTMLElement));H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},null==L||L({ReactiveElement:H}),(null!==(S=N.reactiveElementVersions)&&void 0!==S?S:N.reactiveElementVersions=[]).push("1.4.2");var G,z=window,D=z.trustedTypes,Y=D?D.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,B="lit$".concat((Math.random()+"").slice(9),"$"),W="?"+B,K="<".concat(W,">"),F=document,V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return F.createComment(t)},q=function(t){return null===t||"object"!=typeof t&&"function"!=typeof t},J=Array.isArray,Q=function(t){return J(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])},X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,nt=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),it=/'/g,rt=/"/g,ot=/^(?:script|style|textarea|title)$/i,st=(G=1,function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return{_$litType$:G,strings:t,values:n}}),at=Symbol.for("lit-noChange"),lt=Symbol.for("lit-nothing"),ut=new WeakMap,ct=F.createTreeWalker(F,129,null,!1),ht=function(){function t(e,n){var i,r=e.strings,o=e._$litType$;(0,k.Z)(this,t),this.parts=[];var s=0,a=0,l=r.length-1,u=this.parts,c=function(t,e){for(var n,i=t.length-1,r=[],o=2===e?"<svg>":"",s=X,a=0;a<i;a++){for(var l=t[a],u=void 0,c=void 0,h=-1,f=0;f<l.length&&(s.lastIndex=f,null!==(c=s.exec(l)));)f=s.lastIndex,s===X?"!--"===c[1]?s=tt:void 0!==c[1]?s=et:void 0!==c[2]?(ot.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=nt):void 0!==c[3]&&(s=nt):s===nt?">"===c[0]?(s=null!=n?n:X,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=void 0===c[3]?nt:'"'===c[3]?rt:it):s===rt||s===it?s=nt:s===tt||s===et?s=X:(s=nt,n=void 0);var d=s===nt&&t[a+1].startsWith("/>")?" ":"";o+=s===X?l+K:h>=0?(r.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+B+d):l+B+(-2===h?(r.push(void 0),a):d)}var v=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Y?Y.createHTML(v):v,r]}(r,o),d=(0,h.Z)(c,2),v=d[0],p=d[1];if(this.el=t.createElement(v,n),ct.currentNode=this.el.content,2===o){var y=this.el.content,g=y.firstChild;g.remove(),y.append.apply(y,(0,f.Z)(g.childNodes))}for(;null!==(i=ct.nextNode())&&u.length<l;){if(1===i.nodeType){if(i.hasAttributes()){var m,_=[],A=$(i.getAttributeNames());try{for(A.s();!(m=A.n()).done;){var b=m.value;if(b.endsWith("$lit$")||b.startsWith(B)){var S=p[a++];if(_.push(b),void 0!==S){var E=i.getAttribute(S.toLowerCase()+"$lit$").split(B),w=/([.?@])?(.*)/.exec(S);u.push({type:1,index:s,name:w[2],strings:E,ctor:"."===w[1]?yt:"?"===w[1]?mt:"@"===w[1]?_t:pt})}else u.push({type:6,index:s})}}}catch(T){A.e(T)}finally{A.f()}for(var O=0,C=_;O<C.length;O++){var P=C[O];i.removeAttribute(P)}}if(ot.test(i.tagName)){var x=i.textContent.split(B),Z=x.length-1;if(Z>0){i.textContent=D?D.emptyScript:"";for(var U=0;U<Z;U++)i.append(x[U],V()),ct.nextNode(),u.push({type:2,index:++s});i.append(x[Z],V())}}}else if(8===i.nodeType)if(i.data===W)u.push({type:2,index:s});else for(var N=-1;-1!==(N=i.data.indexOf(B,N+1));)u.push({type:7,index:s}),N+=B.length-1;s++}}return(0,w.Z)(t,null,[{key:"createElement",value:function(t,e){var n=F.createElement("template");return n.innerHTML=t,n}}]),t}();function ft(t,e){var n,i,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===at)return e;var l=void 0!==a?null===(n=s._$Co)||void 0===n?void 0:n[a]:s._$Cl,u=q(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Co)&&void 0!==r?r:o._$Co=[])[a]=l:s._$Cl=l),void 0!==l&&(e=ft(t,l._$AS(t,e.values),l,a)),e}var dt=function(){function t(e,n){(0,k.Z)(this,t),this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}return(0,w.Z)(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"v",value:function(t){var e,n=this._$AD,i=n.el.content,r=n.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:F).importNode(i,!0);ct.currentNode=o;for(var s=ct.nextNode(),a=0,l=0,u=r[0];void 0!==u;){if(a===u.index){var c=void 0;2===u.type?c=new vt(s,s.nextSibling,this,t):1===u.type?c=new u.ctor(s,u.name,u.strings,this,t):6===u.type&&(c=new $t(s,this,t)),this.u.push(c),u=r[++l]}a!==(null==u?void 0:u.index)&&(s=ct.nextNode(),a++)}return o}},{key:"p",value:function(t){var e,n=0,i=$(this.u);try{for(i.s();!(e=i.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}catch(o){i.e(o)}finally{i.f()}}}]),t}(),vt=function(){function t(e,n,i,r){var o;(0,k.Z)(this,t),this.type=2,this._$AH=lt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cm=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return(0,w.Z)(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;t=ft(this,t,e),q(t)?t===lt||null==t||""===t?(this._$AH!==lt&&this._$AR(),this._$AH=lt):t!==this._$AH&&t!==at&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Q(t)?this.k(t):this.g(t)}},{key:"O",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"g",value:function(t){this._$AH!==lt&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,n=t.values,i=t._$litType$,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ht.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(n);else{var o=new dt(r,this),s=o.v(this.options);o.p(n),this.T(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=ut.get(t.strings);return void 0===e&&ut.set(t.strings,e=new ht(t)),e}},{key:"k",value:function(e){J(this._$AH)||(this._$AH=[],this._$AR());var n,i,r=this._$AH,o=0,s=$(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;o===r.length?r.push(n=new t(this.O(V()),this.O(V()),this,this.options)):n=r[o],n._$AI(a),o++}}catch(l){s.e(l)}finally{s.f()}o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,n=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,n);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}]),t}(),pt=function(){function t(e,n,i,r,o){(0,k.Z)(this,t),this.type=1,this._$AH=lt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=lt}return(0,w.Z)(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=ft(this,t,e,0),(o=!q(t)||t!==this._$AH&&t!==at)&&(this._$AH=t);else{var s,a,l=t;for(t=r[0],s=0;s<r.length-1;s++)(a=ft(this,l[n+s],e,s))===at&&(a=this._$AH[s]),o||(o=!q(a)||a!==this._$AH[s]),a===lt?t=lt:t!==lt&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.j(t)}},{key:"j",value:function(t){t===lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}]),t}(),yt=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.apply(this,arguments)).type=3,t}return(0,w.Z)(n,[{key:"j",value:function(t){this.element[this.name]=t===lt?void 0:t}}]),n}(pt),gt=D?D.emptyScript:"",mt=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.apply(this,arguments)).type=4,t}return(0,w.Z)(n,[{key:"j",value:function(t){t&&t!==lt?this.element.setAttribute(this.name,gt):this.element.removeAttribute(this.name)}}]),n}(pt),_t=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(t,i,r,o,s){var a;return(0,k.Z)(this,n),(a=e.call(this,t,i,r,o,s)).type=5,a}return(0,w.Z)(n,[{key:"_$AI",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=ft(this,t,n,0))&&void 0!==e?e:lt)!==at){var i=this._$AH,r=t===lt&&i!==lt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==lt&&(i===lt||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}]),n}(pt),$t=function(){function t(e,n,i){(0,k.Z)(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}return(0,w.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){ft(this,t)}}]),t}(),At=z.litHtmlPolyfillSupport;null==At||At(ht,vt),(null!==(E=z.litHtmlVersions)&&void 0!==E?E:z.litHtmlVersions=[]).push("2.4.0");var bt,St,Et=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.apply(this,arguments)).renderOptions={host:(0,a.Z)(t)},t._$Do=void 0,t}return(0,w.Z)(n,[{key:"createRenderRoot",value:function(){var t,e,i=c((0,l.Z)(n.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),c((0,l.Z)(n.prototype),"update",this).call(this,t),this._$Do=function(t,e,n){var i,r,o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new vt(e.insertBefore(V(),a),a,void 0,null!=n?n:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;c((0,l.Z)(n.prototype),"connectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;c((0,l.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return at}}]),n}(H);Et.finalized=!0,Et._$litElement$=!0,null===(bt=globalThis.litElementHydrateSupport)||void 0===bt||bt.call(globalThis,{LitElement:Et});var kt=globalThis.litElementPolyfillSupport;null==kt||kt({LitElement:Et}),(null!==(St=globalThis.litElementVersions)&&void 0!==St?St:globalThis.litElementVersions=[]).push("3.2.2");var wt;function Ot(t){return function(e,n){return void 0!==n?(i=t,r=n,void e.constructor.createProperty(r,i)):function(t,e){return"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?s(s({},e),{},{finisher:function(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}}(t,e);var i,r}}null===(wt=window.HTMLSlotElement)||void 0===wt||wt.prototype.assignedElements;var Ct=2,Pt=function t(e,n){var i,r,o=e._$AN;if(void 0===o)return!1;var s,a=$(o);try{for(a.s();!(s=a.n()).done;){var l=s.value;null===(r=(i=l)._$AO)||void 0===r||r.call(i,n,!1),t(l,n)}}catch(u){a.e(u)}finally{a.f()}return!0},xt=function(t){var e,n;do{if(void 0===(e=t._$AM))break;(n=e._$AN).delete(t),t=e}while(0===(null==n?void 0:n.size))},Zt=function(t){for(var e;e=t._$AM;t=e){var n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Tt(e)}};function Ut(t){void 0!==this._$AN?(xt(this),this._$AM=t,Zt(this)):this._$AM=t}function Nt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(var o=n;o<i.length;o++)Pt(i[o],!1),xt(i[o]);else null!=i&&(Pt(i,!1),xt(i));else Pt(this,t)}var Tt=function(t){var e,n,i,r;t.type==Ct&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Nt),null!==(n=(r=t)._$AQ)&&void 0!==n||(r._$AQ=Ut))},It=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.apply(this,arguments))._$AN=void 0,t}return(0,w.Z)(n,[{key:"_$AT",value:function(t,e,i){c((0,l.Z)(n.prototype),"_$AT",this).call(this,t,e,i),Zt(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var e,n,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),i&&(Pt(this,t),xt(this))}},{key:"setValue",value:function(t){if(function(t){return void 0===t.strings}(this._$Ct))this._$Ct._$AI(t,this);else{var e=(0,f.Z)(this._$Ct._$AH);e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),n}(function(){function t(e){(0,k.Z)(this,t)}return(0,w.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AT",value:function(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}},{key:"_$AS",value:function(t,e){return this.update(t,e)}},{key:"update",value:function(t,e){return this.render.apply(this,(0,f.Z)(e))}}]),t}()),Lt=(0,w.Z)((function t(){(0,k.Z)(this,t)})),Rt=new WeakMap,Mt=function(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return{_$litDirective$:t,values:n}}}(function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){return(0,k.Z)(this,n),e.apply(this,arguments)}return(0,w.Z)(n,[{key:"render",value:function(t){return lt}},{key:"update",value:function(t,e){var n,i=(0,h.Z)(e,1)[0],r=i!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=i,this.dt=null===(n=t.options)||void 0===n?void 0:n.host,this.rt(this.ct=t.element)),lt}},{key:"rt",value:function(t){var e;if("function"==typeof this.Y){var n=null!==(e=this.dt)&&void 0!==e?e:globalThis,i=Rt.get(n);void 0===i&&(i=new WeakMap,Rt.set(n,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}},{key:"lt",get:function(){var t,e,n;return"function"==typeof this.Y?null===(e=Rt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(n=this.Y)||void 0===n?void 0:n.value}},{key:"disconnected",value:function(){this.lt===this.ct&&this.rt(void 0)}},{key:"reconnected",value:function(){this.rt(this.ct)}}]),n}(It)),jt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Gt=function(t,e,n,i){for(var r,o=i>1?void 0:i?Ht(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&jt(e,n,o),o},zt=function(t){(0,y.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;return(0,k.Z)(this,n),(t=e.call(this)).GISCUS_SESSION_KEY="giscus-session",t.GISCUS_DEFAULT_HOST="https://giscus.app",t.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",t.__session="",t._iframeRef=new Lt,t.messageEventHandler=t.handleMessageEvent.bind((0,a.Z)(t)),t.host=t.GISCUS_DEFAULT_HOST,t.strict="0",t.reactionsEnabled="1",t.emitMetadata="0",t.inputPosition="bottom",t.theme="light",t.lang="en",t.loading="eager",t.setupSession(),window.addEventListener("message",t.messageEventHandler),t}return(0,w.Z)(n,[{key:"iframeRef",get:function(){var t;return null==(t=this._iframeRef)?void 0:t.value}},{key:"disconnectedCallback",value:function(){c((0,l.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("message",this.messageEventHandler)}},{key:"_formatError",value:function(t){return'[giscus] An error occurred. Error message: "'.concat(t,'".')}},{key:"setupSession",value:function(){var t=location.href,e=new URL(t),n=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(n)try{this.__session=JSON.parse(n||"")||""}catch(r){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn("".concat(this._formatError(null==r?void 0:r.message)," Session has been cleared."))}}},{key:"handleMessageEvent",value:function(t){if(t.origin===this.host){var e=t.data;if("object"==typeof e&&e.giscus&&(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height="".concat(e.giscus.resizeHeight,"px")),e.giscus.error)){var n=e.giscus.error;if(n.includes("Bad credentials")||n.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn("".concat(this._formatError(n)," Session has been cleared.")),void this.update(new Map);console.error("".concat(this._formatError(n)," No session is stored initially. ").concat(this.ERROR_SUGGESTION))}n.includes("Discussion not found")?console.warn("[giscus] ".concat(n,". A new discussion will be created if a comment/reaction is submitted.")):console.error("".concat(this._formatError(n)," ").concat(this.ERROR_SUGGESTION))}}}},{key:"sendMessage",value:function(t){var e,n;null==(n=null==(e=this.iframeRef)?void 0:e.contentWindow)||n.postMessage({giscus:t},this.host)}},{key:"updateConfig",value:function(){var t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}},{key:"firstUpdated",value:function(){var t,e=this;null==(t=this.iframeRef)||t.addEventListener("load",(function(){var t;return null==(t=e.iframeRef)?void 0:t.classList.remove("loading")}))}},{key:"requestUpdate",value:function(t,e,i){this.hasUpdated&&"host"!==t?this.updateConfig():c((0,l.Z)(n.prototype),"requestUpdate",this).call(this,t,e,i)}},{key:"getMetaContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"meta[property='og:".concat(t,"'],"):"",i=document.querySelector(n+"meta[name='".concat(t,"']"));return i?i.content:""}},{key:"_getCleanedUrl",value:function(){var t=new URL(location.href);return t.searchParams.delete("giscus"),t}},{key:"getTerm",value:function(){switch(this.mapping){case"url":return"".concat(this._getCleanedUrl());case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}},{key:"getNumber",value:function(){return"number"===this.mapping&&this.term||""}},{key:"getIframeSrc",value:function(){var t=this._getCleanedUrl().toString(),e="".concat(t).concat(this.id?"#"+this.id:""),n=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:n,backLink:i},o=this.host||this.GISCUS_DEFAULT_HOST,s=this.lang?"/".concat(this.lang):"",a=new URLSearchParams(r);return"".concat(o).concat(s,"/widget?").concat(a)}},{key:"render",value:function(){return st(A||(A=i(['\n      <iframe\n        title="Comments"\n        scrolling="no"\n        class="loading"\n        ',"\n        src=","\n        loading=",'\n        allow="clipboard-write"\n        part="iframe"\n      ></iframe>\n    '])),Mt(this._iframeRef),this.getIframeSrc(),this.loading)}}]),n}(Et);zt.styles=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=1===t.length?t[0]:n.reduce((function(e,n,i){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(n)+t[i+1]}),t[0]);return new Z(r,t,P)}(b||(b=i(["\n    :host,\n    iframe {\n      width: 100%;\n      border: none;\n      min-height: 150px;\n      color-scheme: light dark;\n    }\n\n    iframe.loading {\n      opacity: 0;\n    }\n  "]))),Gt([Ot({reflect:!0})],zt.prototype,"host",2),Gt([Ot({reflect:!0})],zt.prototype,"repo",2),Gt([Ot({reflect:!0})],zt.prototype,"repoId",2),Gt([Ot({reflect:!0})],zt.prototype,"category",2),Gt([Ot({reflect:!0})],zt.prototype,"categoryId",2),Gt([Ot({reflect:!0})],zt.prototype,"mapping",2),Gt([Ot({reflect:!0})],zt.prototype,"term",2),Gt([Ot({reflect:!0})],zt.prototype,"strict",2),Gt([Ot({reflect:!0})],zt.prototype,"reactionsEnabled",2),Gt([Ot({reflect:!0})],zt.prototype,"emitMetadata",2),Gt([Ot({reflect:!0})],zt.prototype,"inputPosition",2),Gt([Ot({reflect:!0})],zt.prototype,"theme",2),Gt([Ot({reflect:!0})],zt.prototype,"lang",2),Gt([Ot({reflect:!0})],zt.prototype,"loading",2),zt=Gt([function(t){return function(e){return"function"==typeof e?(n=t,i=e,customElements.define(n,i),i):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){customElements.define(t,e)}}}(t,e);var n,i}}("giscus-widget")],zt)}}]);
//# sourceMappingURL=107.faaa6b0d.chunk.js.map