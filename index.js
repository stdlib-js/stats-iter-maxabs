// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).itermaxabs=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[m],u=m,r=null!=(o=t)&&d.call(o,u);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function w(t){return y(t)||h(t)}function S(){return new Function("return this;")()}p(w,"isPrimitive",y),p(w,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(O)return O;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=A.document&&A.document.childNodes,P=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",I);var N=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function V(t){return null!==t&&"object"==typeof t}function C(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=I.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!N(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var k="function"==typeof t||"object"==typeof P||"function"==typeof x?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function F(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===k(t)}(t.next)}function G(t){return Math.abs(t)}function L(t){return t!=t}var M=Number.POSITIVE_INFINITY;function R(t){return 0===t&&1/t===M}function U(){var t=function(){var t;return function(r){return 0===arguments.length?void 0===t?null:t:((void 0===t||r>t||L(r)||r===t&&R(r))&&(t=r),t)}}();return function(r){if(0===arguments.length)return t();return t(G(r))}}return function(t){var r,e;if(!F(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0fE49",t));for(r=U();!(e=t.next()).done;)"number"==typeof e.value?r(e.value):r(NaN);return r()}}));
//# sourceMappingURL=index.js.map
