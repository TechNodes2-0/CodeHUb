!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t,n){"use strict";var r=n(1),o=n(15),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(21),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n(5):"undefined"!=typeof XMLHttpRequest&&(s=n(5)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(20))},function(e,t,n){"use strict";var r=n(0),o=n(22),i=n(2),a=n(24),s=n(25),c=n(6);e.exports=function(e){return new Promise((function(t,u){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(p+":"+h)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,u,r),d=null}},d.onabort=function(){d&&(u(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n(26),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),u(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(14)},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(13)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(12)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500,600,700|Proza+Libre:400,500,600,700&display=swap);"]),t.push([e.i,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Proza Libre";color:#666;font-weight:100}.overlay{position:absolute;width:100%;height:100%;z-index:999;background:#f4f4f4;display:flex;align-items:center;justify-content:center}.grid{width:100%;height:100%;padding:5%;background:#f4f4f4}@media all and (max-width: 1200px){.grid{padding:0%}}.main{width:100%;height:100%;display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(12, 1fr);background:lightcoral}@media all and (max-width: 1200px){.main{display:flex;flex-direction:column}}.settings{grid-column:1 / span 4;grid-row:1 / span 12;padding:1.5em 2.5em;background:#fefefe}.settings .settings__h1{font-family:"Cormorant Garamond";font-size:3.5em;padding-bottom:1rem}.settings .settings__h6{font-size:.9em;padding:2rem 0 1rem 0;font-weight:600}.settings .box__item,.settings .box__generate{border:1px solid #ccc;padding:.7rem;margin:.2rem 0 .2rem 0;display:inline-block;position:relative;cursor:pointer;z-index:1}.settings .box__item.active,.settings .box__generate.active{border:none;background:#9e324e;color:white}.settings .box__item::after,.settings .box__generate::after{content:\'\';position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.1);z-index:-1;transition:transform 175ms ease;transform:scaleX(0);transform-origin:left}.settings .box__item:hover:after,.settings .box__generate:hover:after{transform:scaleX(1)}.settings .box{padding-top:1rem;width:100%;display:flex;justify-content:flex-end}.settings .box .box__generate{background:#9e324e;color:white}.info{grid-column:5 / span 8;grid-row:9 / span 4;background:#f1f1f1;display:flex;justify-content:center;align-items:center;position:relative}.info .year{font-family:"Cormorant Garamond";color:#ccc;opacity:.5;position:absolute;font-size:13em;margin-top:-18vh;left:1vw}@media all and (max-width: 1200px){.info .year{margin-top:-32vh}}.info .content{width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center}.info .content .content__h2{font-family:"Cormorant Garamond";font-size:2.3em;text-align:center}.info .content .content__h5{padding-top:.5rem;font-size:1.1em;color:#9e324e;text-align:center}@media all and (max-width: 1200px){.info .content{padding:1em 4em}}.info .circle__wrapper{width:100%;display:flex;justify-content:center;align-items:center}.info .circle__wrapper:last-child .circle .circle__icon{transform:rotate(180deg)}.info .circle{width:10vh;height:10vh;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#9e324e;cursor:pointer;transition:all 175ms ease}.info .circle .circle__icon{color:white;font-size:24px}.info .circle:hover{box-shadow:5px 5px 10px rgba(0,0,0,0.3);transform:scale(1.1)}@media all and (max-width: 1200px){.info{display:flex;flex-direction:column}}.art{grid-column:5 / span 8;grid-row:1 / span 8;background:#f9f9f9;display:flex;align-items:center;justify-content:center;overflow:hidden}@media all and (max-width: 1200px){.art{min-height:500px}}.art img{max-height:30vh;max-width:20vw}@media all and (max-width: 1200px){.art img{max-height:300px;max-width:300px}}.art .painting{margin:0 5em;transition:all 250ms ease;border:solid 2px;border-bottom-color:#ffe;border-left-color:#eed;border-right-color:#eed;border-top-color:#ccb;transform:scale(0.8)}.art .painting img{margin:10px}.art .painting:hover{cursor:pointer;transform:scale(1)}.art .painting--active{transform:scale(1)}.art .art__wrapper{display:flex;align-items:center;justify-content:center;position:relative}.warning{animation:show 1s forwards;color:red;padding-top:5px;position:absolute}@keyframes show{0%{opacity:1}50%{opacity:1}100%{opacity:0;display:none}}.lds-dual-ring{display:inline-block;width:80px;height:80px;position:absolute;z-index:1;color:#9e324e}.lds-dual-ring:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #9e324e;border-color:#9e324e transparent #9e324e transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.frame{background-color:#ddc;border:solid 5vmin #eee;border-bottom-color:#fff;border-left-color:#eee;border-radius:2px;border-right-color:#eee;border-top-color:#ddd;box-shadow:0 0 5px 0 rgba(0,0,0,0.15) inset,0 5px 10px 5px rgba(0,0,0,0.15);box-sizing:border-box;display:inline-block;max-height:40vh;max-width:30vw;position:relative;text-align:center}.frame:before{border-radius:2px;bottom:-2vmin;box-shadow:0 2px 5px 0 rgba(0,0,0,0.15) inset;content:"";left:-2vmin;position:absolute;right:-2vmin;top:-2vmin}.frame:after{border-radius:2px;bottom:-2.5vmin;box-shadow:0 2px 5px 0 rgba(0,0,0,0.15);content:"";left:-2.5vmin;position:absolute;right:-2.5vmin;top:-2.5vmin}.like{position:absolute;margin:0 auto;text-align:center;width:100%;margin-top:30px;transition:175ms ease}.like:hover{transform:scale(1.5)}ion-icon{color:#9e324e;font-size:33px}.loading{background:transparent url("/img/spinner.gif") center no-repeat}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return c(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}e&&c(s(e,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(16),a=n(7);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(4));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(8),c.CancelToken=n(29),c.isCancel=n(3),c.all=function(e){return Promise.all(e)},c.spread=n(30),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(17),a=n(18),s=n(7);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(19),i=n(3),a=n(4),s=n(27),c=n(28);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(8);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);n(10);var r=n(9),o=n.n(r);const i="f0c64830-1e43-11ea-9683-4d991c05f39e";class a{constructor(e){this.settings=e}randomize(e,t){let n=[],r=[];for(let o=0;o<t;o++){const t=Math.floor(Math.random()*e.length);-1===r.indexOf(t)&&(r.push(t),n.push(e[t]))}return n}filterByCentury(e){const t=this.settings.century.toString(),n=e.filter(e=>e.century==t);return this.randomize(n,5)}async getPaintings(){try{this.classification=this.settings.classification.toString();const e=await o()(`https://api.harvardartmuseums.org/object?apikey=${i}&classification=${this.classification}&size=100`);this.result=this.filterByCentury(e.data.records)}catch(e){alert(e)}}}const s={classification:["Paintings","Jewelry","Drawings","Vessels","Prints"],century:["16th century","17th century","18th century","19th century","20th century"]},c={settings:document.querySelector(".settings"),settingsText:document.querySelector(".settings__p"),buttons:document.querySelectorAll(".box__item"),arrowLeft:document.querySelector(".circle__left"),arrowRight:document.querySelector(".circle__right"),artSection:document.querySelector(".art"),artWrapper:document.querySelector(".art__wrapper"),paintings:document.querySelectorAll(".painting"),paintingImg:document.querySelectorAll(".painting img"),generate:document.querySelector(".box__generate"),classification:document.querySelector(".classification"),century:document.querySelector(".century"),year:document.querySelector(".year"),artist:document.querySelector(".content__h2"),title:document.querySelector(".content__h5"),likeButtons:document.querySelectorAll(".like"),overlay:document.querySelector(".overlay")};class u{constructor(){this.likes=[]}storeData(){localStorage.setItem("likes",JSON.stringify(this.likes))}readStorage(){const e=JSON.parse(localStorage.getItem("likes"));e&&(this.likes=e)}addLike(e,t){const n={object:e,division:t};return this.likes.push(n),this.storeData(),n}removeLike(e){const t=this.likes.findIndex(t=>t.object===e);this.storeData(),this.likes.splice(t,1)}}const l=e=>{e.dataset.year&&e.dataset.artist&&e.dataset.desc?(c.year.innerHTML=e.dataset.year,c.artist.innerHTML=e.dataset.artist,c.title.innerHTML=e.dataset.desc,m(e)):f()},f=()=>{c.year.innerHTML="",c.artist.innerHTML="Please select an artwork",c.title.innerHTML=""},d=()=>{c.year.innerHTML="",c.artist.innerHTML="No results found",c.title.innerHTML=""},p=e=>{let t,n;n=300*c.paintings.length;const r=c.artWrapper.currentStyle||window.getComputedStyle(c.artWrapper);if(t=parseInt(r.marginLeft.replace("px","")),e.target.classList.contains("circle__left")||e.target.parentNode.classList.contains("circle__left")){let e=parseInt(r.marginLeft.replace("px",""));e<n&&(c.artWrapper.style.marginLeft=e+300)}else{let e=parseInt(r.marginLeft.replace("px",""));e>-1*n&&(c.artWrapper.style.marginLeft=e-300)}},h=()=>{const e=document.querySelectorAll(".lds-dual-ring.painting");e&&e.forEach(e=>e.parentElement.removeChild(e))},m=e=>{Array.from(c.paintings).forEach(e=>{e.classList.remove("painting--active")}),e.classList.add("painting--active")},g=(e,t)=>{const n=`\n        <div data-type="${t}" class="box__item">${e}</div>\n    `;"classification"===t?c.classification.insertAdjacentHTML("afterend",n):c.century.insertAdjacentHTML("afterend",n)},y=e=>{e.classList.toggle("active")},v={},b=async()=>{c.paintings.forEach(e=>{e.style.opacity=0}),c.paintingImg.forEach((e,t)=>{e.src=""}),f(),c.artSection.insertAdjacentHTML("afterbegin",'<div class="lds-dual-ring painting"></div>');const e=(()=>{const e={classification:[],century:[]};return document.querySelectorAll(".box__item.active").forEach(t=>{const n=t.innerHTML,r=t.dataset.type;"classification"===r?e.classification.push(n):"century"===r&&e.century.push(n)}),e})();v.search=new a(e);try{return await v.search.getPaintings(),((e,t)=>{if(!(e.length>1))throw d(),h(),"No images found";{c.paintings.forEach(e=>{e.style.opacity=1});let n=0;e.forEach((r,o)=>{const i=e[o].primaryimageurl,a=e[o].title,s=e[o].accessionyear,u=e[o].medium,l=e[o].division,f=e[o].objectnumber;if(i?(c.paintings[o].style.display="block",c.paintingImg[o].src=i,c.paintingImg[o].parentNode.setAttribute("data-year",s),c.paintingImg[o].parentNode.setAttribute("data-desc",u),c.paintingImg[o].parentNode.setAttribute("data-artist",a),c.paintingImg[o].parentNode.setAttribute("data-division",l),c.paintingImg[o].parentNode.setAttribute("data-objectnumber",f)):(n++,c.paintings[o].style.display="none",console.log(c.paintings.length),n==c.paintings.length&&d()),t.likes.find(e=>e.object==f)){c.likeButtons[o].name="heart";const e=Array.from(c.likeButtons[o].childNodes);console.log(e),e[0].name="heart"}})}})(v.search.result,v.likes),h(),!0}catch(e){console.log(e)}};c.generate.addEventListener("click",b),c.arrowLeft.addEventListener("click",p),c.arrowRight.addEventListener("click",p),c.settings.addEventListener("click",e=>{if(!e.target.classList.contains("box__generate")){const t=document.querySelector('.box__item.active[data-type="classification"]'),n=document.querySelector('.box__item.active[data-type="century"]'),r=e.target.closest(".box__item");"classification"==r.dataset.type&&t&&y(t),"century"==r.dataset.type&&n&&y(n),y(r)}});const x=e=>{let t,n,r;v.likes||(v.likes=new u),n=e.target.parentNode.parentNode.dataset.objectnumber,r=e.target.parentNode.parentNode.dataset.division,"heart-empty"===e.target.name?(t=!0,e.target.name="heart",v.likes.addLike(n,r)):(t=!1,e.target.name="heart-empty",v.likes.removeLike(n)),console.log(v.likes)};Array.from(c.likeButtons).forEach(e=>e.addEventListener("click",x));(()=>{s.classification.forEach((e,t)=>{g(s.classification[t],"classification")}),s.century.forEach((e,t)=>{g(s.century[t],"century")}),v.default=!0,((e,t)=>{document.querySelectorAll(".box__item").forEach(n=>{n.innerHTML!=e&&n.innerHTML!=t||n.classList.toggle("active")})})("Prints","20th century");let e=document.querySelectorAll(".painting");e.forEach(e=>{e.addEventListener("click",()=>{l(e)})}),v.likes=new u,v.likes.readStorage(),console.log("Likes: ",v.likes),async function(){try{if(await b()){document.querySelector(".painting:nth-child(3)");l(e[2])}}catch(e){console.log("renderdefault failed",e)}}()})(),window.addEventListener("load",(function(){c.overlay.style.display="none"}))}]);