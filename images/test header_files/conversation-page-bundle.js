!function(e){function t(t){for(var n,r,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);s.length;)s.shift()()}var n={},o={2:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+({3:"main-bootstrap",4:"vendors~main-bootstrap"}[e]||e)+"-bundle.js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://static-cdn.spot.im/production/conversation-page/tags/v2.2.14/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpOpenwebConversationPage=window.webpackJsonpOpenwebConversationPage||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;r(r.s=5)}([function(e,t){e.exports=window.__SPOTIM__.SERVICES.configProvider},,function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e.Post="post",e.Conversation="conversation"}(o||(o={}))},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(2),i=n(0),a=n.n(i);function c(e,t){Promise.all([n.e(4),n.e(3)]).then(n.bind(null,414)).then((function(n){n.mount(e,t)}))}var u=n(4);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */Object.create;Object.create;Object.create;Object.create;var s={width:"w",height:"h",x:"x",y:"y",quality:"q",if:"if",aspectRatio:"ar",rotate:"a",opacity:"o",radius:"r",dpr:"dpr",effect:"e",border:"bo",currentPage:"cp",preview:"preview:duration",duration:"du",faceCount:"fc",initialAspectRatio:"iar",initialDuration:"idu",initialHeight:"ih",initialWidth:"iw",pageCount:"pc",pageX:"px",pageY:"py",tags:"tags"};Object.keys(s).join("|");var l="live-blog",p="conversation-page",d="OW_VIEWED_SEO_CONVERSATION";function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v,g,b,w=a.a.get("tenant_config.moderation.v2_cross_project_flag_enabled",!1);window.__SPOTIM__||(window.__SPOTIM__={}),window.__SPOTIM__.ConversationPage=_(_({},window.__SPOTIM__.ConversationPage),{},{mount:c}),window.__SPOTIM__.initConversationPage=c,(v=new URLSearchParams(window.location.search).get("spotimConversationPage"))&&c("conversationPage",{postId:v}),function(){if(window.__SPOTIM__.deferredConversationPages){var e,t,n,r,i=null!==(e=null===(t=window)||void 0===t||null===(n=t.__SPOTIM__)||void 0===n||null===(r=n.deferredConversationPages)||void 0===r?void 0:r.slice(-1))&&void 0!==e?e:[{}],s=Object(o.a)(i,1)[0];c("conversationPage",null==s?void 0:s.options)}if(b=a.a.get("queryParams.spot_im_highlight_immediate",!1),y=a.a.get("queryParams.spot_im_redirect_source",""),m=a.a.get("tenant_config.launcher.immediateConfig",[]),O=a.a.get("queryParams.ow_module")===l,P=null==m?void 0:m.find((function(e){return e.module===p})),!O&&b&&y&&P&&!(null==P||null===(g=P.excludeSources)||void 0===g?void 0:g.includes(y))){var d=a.a.get("queryParams.spot_im_content_id",""),f=a.a.get("queryParams.spot_im_content_type","conversation");c("conversationPage",w?{postId:(_=d,null===(v=/sp_[^_]+_([^]+)/gi.exec(_))||void 0===v?void 0:v[1]),contentType:f,postType:f===u.a.Post?"post-card":void 0}:{postPagePostId:d,isPostPage:"post"===f,postType:"post"===f?"post-card":void 0})}var _,v,g,b,y,m,O,P}(),g=document.getElementById("ow-seo-optimized"),b=localStorage.getItem(d),g&&!b&&document.querySelectorAll("[ow-seo-conversation-page]").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),localStorage.getItem(d)||localStorage.setItem(d,JSON.stringify(!0)),c("conversationPage")}))}))},function(e,t){e.exports=window.__SPOTIM__.lib.react},function(e,t){e.exports=window.__SPOTIM__.lib.classnames},function(e,t){e.exports=window.__SPOTIM__.lib.reactRedux},function(e,t){e.exports=window.__SPOTIM__.lib.ReactDom},function(e,t){e.exports=window.__SPOTIM__.lib.currentUser},function(e,t){e.exports=window.__SPOTIM__.lib.redux},function(e,t){e.exports=window.__SPOTIM__.lib.request},function(e,t){e.exports=window.__SPOTIM__.lib.ab},function(e,t){e.exports=window.__SPOTIM__.lib.reduxThunk},function(e,t){e.exports=window.__SPOTIM__.lib.timeSpent},function(e,t){e.exports=window.__SPOTIM__.lib.MetricsReporter}]);
//# sourceMappingURL=conversation-page-bundle.js.map