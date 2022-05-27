!function(){"use strict";var u=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var r=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!r||r&&r.split(",").some(s),n=a&&a.split(",").some(s);if(!i||n)return g("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var p=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),l=o.p||{};p.forEach(function(t){var e=t.replace("event-",""),r=f.getAttribute(t);l[e]=l[e]||r}),o.p=l,o.h=1;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function s(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=f.getAttribute("file-types"),a=f.getAttribute("add-file-types"),o=r&&r.split(",")||a&&a.split(",").concat(e)||e;function i(t){for(var e=t.target,r="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var i,n=e&&e.href&&e.href.split("?")[0];n&&(i=n.split(".").pop(),o.some(function(t){return t===i}))&&((r||a)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}d.addEventListener("click",i),d.addEventListener("auxclick",i);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var p=0;p<n.length;p++)t.apply(this,n[p])}();