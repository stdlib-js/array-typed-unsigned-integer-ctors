// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,a,y,f;if(null==t)return n.call(t);e=t[i],f=i,o=null!=(y=t)&&r.call(y,f);try{t[i]=void 0}catch(r){return n.call(t)}return a=n.call(t),o?t[i]=e:delete t[i],a}:function(t){return n.call(t)},a="function"==typeof Uint16Array;var y="function"==typeof Uint16Array?Uint16Array:null;var f="function"==typeof Uint16Array?Uint16Array:void 0;var c=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,65536,65537]),r=n,t=(a&&r instanceof Uint16Array||"[object Uint16Array]"===e(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?f:function(){throw new Error("not implemented")},u="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var p="function"==typeof Uint32Array?Uint32Array:void 0;var v=function(){var t,n,r;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(u&&r instanceof Uint32Array||"[object Uint32Array]"===e(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")},A="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var t,n,r;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),r=n,t=(A&&r instanceof Uint8Array||"[object Uint8Array]"===e(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")};var b="function"==typeof Uint8ClampedArray;var w="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var h="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var s={uint16:c,uint32:v,uint8:m,uint8c:function(){var t,n,r;if("function"!=typeof w)return!1;try{n=new w([-1,0,1,3.14,4.99,255,256]),r=n,t=(b&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===e(r))&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t}()?h:function(){throw new Error("not implemented")}};function S(t){return s[t]||null}export{S as default};
//# sourceMappingURL=mod.js.map