// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(e){var n={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(n.precision="1"),n}return function(i){var t,o,s,r;for(o=[],r=0,s=e.exec(i);s;)(t=i.slice(r,e.lastIndex-s[0].length)).length&&o.push(t),o.push(n(s)),r=e.lastIndex,s=e.exec(i);return(t=i.slice(r)).length&&o.push(t),o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).formatTokenize=n();
//# sourceMappingURL=index.js.map
