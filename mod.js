// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=s();function m(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function h(t){return y(t)||m(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",m);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof A?A:null;var P=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(O)return O;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=P.document&&P.document.childNodes,I=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",N);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=N.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var k="function"==typeof t||"object"==typeof I||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function F(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===k(t)}(t.next)}function L(t){return Math.abs(t)}function M(t){return t!=t}var R=Number.POSITIVE_INFINITY;function U(t){return 0===t&&1/t===R}function K(){var t=function(){var t;return function(r){return 0===arguments.length?void 0===t?null:t:((void 0===t||r>t||M(r)||r===t&&U(r))&&(t=r),t)}}();return function(r){if(0===arguments.length)return t();return t(L(r))}}function X(t){var r,e;if(!F(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("1Kf3w,G7",t));for(r=K();!(e=t.next()).done;)"number"==typeof e.value?r(e.value):r(NaN);return r()}export{X as default};
//# sourceMappingURL=mod.js.map
