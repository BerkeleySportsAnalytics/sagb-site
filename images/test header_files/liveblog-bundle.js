(()=>{var t,e,r,n,o,i,a={2137:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)}))}}r.d(e,{Z:()=>o})},7757:(t,e,r)=>{t.exports=r(5666)},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(j([])));_&&_!==r&&n.call(_,i)&&(w=_);var x=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},5951:t=>{"use strict";t.exports=window.__SPOTIM__.SERVICES.configProvider},1146:t=>{"use strict";t.exports=window.__SPOTIM__.lib.MetricsReporter},8298:t=>{"use strict";t.exports=window.__SPOTIM__.lib.ReactDom},9138:t=>{"use strict";t.exports=window.__SPOTIM__.lib.ab},8627:t=>{"use strict";t.exports=window.__SPOTIM__.lib.classnames},4021:t=>{"use strict";t.exports=window.__SPOTIM__.lib.currentUser},9474:t=>{"use strict";t.exports=window.__SPOTIM__.lib.react},6263:t=>{"use strict";t.exports=window.__SPOTIM__.lib.reactRedux},3040:t=>{"use strict";t.exports=window.__SPOTIM__.lib.redux},6486:t=>{"use strict";t.exports=window.__SPOTIM__.lib.reduxThunk},8366:t=>{"use strict";t.exports=window.__SPOTIM__.lib.request},1377:t=>{"use strict";t.exports=window.__SPOTIM__.lib.timeSpent}},s={};function u(t){var e=s[t];if(void 0!==e)return e.exports;var r=s[t]={id:t,loaded:!1,exports:{}};return a[t].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=a,u.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return u.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,u.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);u.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var a=2&n&&r;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>r[t]));return i.default=()=>r,u.d(o,i),o},u.d=(t,e)=>{for(var r in e)u.o(e,r)&&!u.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},u.f={},u.e=t=>Promise.all(Object.keys(u.f).reduce(((e,r)=>(u.f[r](t,e),e)),[])),u.u=t=>t+"-bundle.js",u.miniCssF=t=>t+".css",u.miniCssF=t=>t+".css",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},n="live-blog:",u.l=(t,e,o,i)=>{if(r[t])r[t].push(e);else{var a,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+o){a=f;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",n+o),a.src=t),r[t]=[e];var h=(e,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=r[t];if(delete r[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(n))),e)return e(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}},u.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),u.p="https://static-cdn.spot.im/production/live-blog/tags/v1.2.0/",o=t=>new Promise(((e,r)=>{var n=u.miniCssF(t),o=u.p+n;if(((t,e)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===t||o===e)return a}})(n,o))return e();((t,e,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),n(u)}},o.href=e,document.head.appendChild(o)})(t,o,e,r)})),i={liveblog:0},u.f.miniCss=(t,e)=>{i[t]?e.push(i[t]):0!==i[t]&&{styles:1}[t]&&e.push(i[t]=o(t).then((()=>{i[t]=0}),(e=>{throw delete i[t],e})))},(()=>{var t={liveblog:0};u.f.miniCss=(e,r)=>{t[e]?r.push(t[e]):0!==t[e]&&{styles:1}[e]&&r.push(t[e]=(t=>new Promise(((e,r)=>{var n=u.miniCssF(t),o=u.p+n;if(((t,e)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===t||o===e)return a}})(n,o))return e();((t,e,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),n(u)}},o.href=e,function(){var t=arguments[0],e={tag:"live-blog@v1.2.0",version:"v1.2.0",moduleName:"live-blog",attributes:{"data-spot-im-style":!0,"data-spot-im-style-module":"live-blog","data-spot-im-style-module-version":"v1.2.0"}},r=e.tag,n=e.version,o=e.moduleName,i=e.attributes;Object.entries(i).forEach((([e,r])=>t.setAttribute(e,r))),window.__SPOTIM__&&window.__SPOTIM__.attachStyle?window.__SPOTIM__.attachStyle({tag:r,version:n,moduleName:o,stylesheetElement:t}):document.head.appendChild(t)}(o)})(t,o,e,r)})))(e).then((()=>{t[e]=0}),(r=>{throw delete t[e],r})))}})(),(()=>{var t={liveblog:0};u.f.j=(e,r)=>{var n=u.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else if("styles"!=e){var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=u.p+u.u(e),a=new Error;u.l(i,(r=>{if(u.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+e,e)}else t[e]=0};var e=(e,r)=>{var n,o,[i,a,s]=r,l=0;for(n in a)u.o(a,n)&&(u.m[n]=a[n]);for(s&&s(u),e&&e(r);l<i.length;l++)o=i[l],u.o(t,o)&&t[o]&&t[o][0](),t[i[l]]=0},r=self.webpackChunklive_blog=self.webpackChunklive_blog||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{"use strict";var t,e=u(2137),r=u(7757),n=u.n(r),o=Symbol.for("openweb-pubsub-store");window[o]=null!==(t=window[o])&&void 0!==t?t:{events:{},queues:{}};var i,a,s,l,c;i="liveblog-bootstrap",a=function(){var t=(0,e.Z)(n().mark((function t(e){var r,o;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=null!==(r=e.dataset.liveEventCode)&&void 0!==r?r:"",Promise.all([u.e("styles"),u.e("vendors-node_modules_babel_runtime_helpers_esm_toConsumableArray_js-node_modules_reduxjs_tool-fb2501"),u.e("liveBlog-boot")]).then(u.bind(u,3750)).then((function(t){return(0,t.render)(e,o)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=Symbol("key"),c=null!==(s=window[o].queues["liveblog-bootstrap"])&&void 0!==s?s:[],function(t,e,r){!function(t){var e;window[o].events[t]=null!==(e=window[o].events[t])&&void 0!==e?e:{}}(t),window[o].events[t][e]=r}(i,l,a),c.forEach((function(t){return a.apply(void 0,t.params)}))})()})();
//# sourceMappingURL=liveblog-bundle.js.map