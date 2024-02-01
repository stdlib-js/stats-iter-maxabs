"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(l,i){
var n=require('@stdlib/assert-is-iterator-like/dist'),s=require('@stdlib/stats-incr-maxabs/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,a;if(!n(e))throw new TypeError(v('1Kf3w',e));for(r=s();a=e.next(),!a.done;)typeof a.value=="number"?r(a.value):r(NaN);return r()}i.exports=o
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
