// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(e){var n={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(n.precision="1"),n}function i(i){var s,r,t,a;for(r=[],a=0,t=e.exec(i);t;)(s=i.slice(a,e.lastIndex-t[0].length)).length&&r.push(s),"%"===t[6]?r.push("%"):r.push(n(t)),a=e.lastIndex,t=e.exec(i);return(s=i.slice(a)).length&&r.push(s),r}export{i as default};
//# sourceMappingURL=mod.js.map
