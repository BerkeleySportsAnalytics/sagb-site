var __SPOTIM__="object"==typeof __SPOTIM__?__SPOTIM__:{};__SPOTIM__.apps=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="./src/boot.js")}({"./src/boot.js":function(e,t,o){"use strict";o.r(t);var n=o("react"),r=o.n(n),c=o("react-dom"),s=o.n(c),i=o("@spotim/config-provider"),u=o.n(i);o("./src/index.scss");function a({counter:e}){return r.a.createElement("div",{className:"messages-count",onClick:function(){const e=document.querySelector('div[data-spotim-app="conversation"]');e&&e.scrollIntoView()}},r.a.createElement("a",{href:"javascript:void(0)"},e))}var d=o("@spotim/request"),l=o.n(d);function p({spotId:e,postId:t,counterMessage:o}){const[c,s]=Object(n.useState)(-1);return Object(n.useEffect)(()=>{s(o)},[]),c<0?null:r.a.createElement(a,{counter:c})}let f=document.querySelectorAll("[data-spotim-module=messages-count]");if(0===f.length&&(f=document.querySelectorAll(".spot-im-replies-count")),f.length){const e=[],t=u.a.get("spotId");Object.keys(f).forEach(o=>{const n=f[o].dataset.postId;e.push(`${t}_${n}`)}),async function(){const o=await l()("v1.0.0/conversation/count",{method:"POST",headers:{"Content-Type":"application/json","x-spot-id":t,"x-post-id":"default"},body:JSON.stringify({conversation_ids:e})});Object.keys(f).forEach(e=>{const n=f[e].dataset.postId,c=o.counts[`${t}_${n}`].comments,i=o.counts[`${t}_${n}`].replies,u=parseInt(c)+parseInt(i);t&&n&&s.a.render(r.a.createElement(p,{spotId:t,postId:n,counterMessage:u}),f[e])})}()}},"./src/index.scss":function(e,t,o){},"@spotim/config-provider":function(e,t){e.exports=window.__SPOTIM__.SERVICES.configProvider},"@spotim/request":function(e,t){e.exports=window.__SPOTIM__.lib.request},react:function(e,t){e.exports=window.__SPOTIM__.lib.react},"react-dom":function(e,t){e.exports=window.__SPOTIM__.lib.ReactDom}});