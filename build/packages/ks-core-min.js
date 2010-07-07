/*
Copyright 2010, KISSY UI Library v1.0.8
MIT Licensed
build: 808 Jul 7 10:12
*/
(function(c,q,l){if(c[q]===l)c[q]={};q=c[q];var p=c.document,t=function(f,j,e,k){if(!j||!f)return f;if(e===l)e=true;var o,u,g;if(k&&(g=k.length))for(o=0;o<g;o++){u=k[o];if(u in j)if(e||!(u in f))f[u]=j[u]}else for(u in j)if(e||!(u in f))f[u]=j[u];return f},s=false,i=[],m=false;t(q,{version:"1.0.8",_init:function(){this.Env={mods:{}}},add:function(f,j){this.Env.mods[f]={name:f,fn:j};j(this);return this},ready:function(f){m||this._bindReady();s?f.call(c,this):i.push(f);return this},_bindReady:function(){var f=
this,j=p.documentElement.doScroll,e=j?"onreadystatechange":"DOMContentLoaded",k=function(){f._fireReady()};m=true;if(p.readyState==="complete")return k();if(p.addEventListener){var o=function(){p.removeEventListener(e,o,false);k()};p.addEventListener(e,o,false)}else{var u=function(){if(p.readyState==="complete"){p.detachEvent(e,u);k()}};p.attachEvent(e,u);c.attachEvent("onload",k);if(c==c.top){var g=function(){try{j("left");k()}catch(h){setTimeout(g,1)}};g()}}},_fireReady:function(){if(!s){s=true;
if(i){for(var f,j=0;f=i[j++];)f.call(c,this);i=null}}},mix:t,merge:function(){var f={},j,e=arguments.length;for(j=0;j<e;++j)t(f,arguments[j]);return f},augment:function(){var f=arguments,j=f.length-2,e=f[0],k=f[j],o=f[j+1],u=1;if(!q.isArray(o)){k=o;o=l;j++}if(!q.isBoolean(k)){k=l;j++}for(;u<j;u++)t(e.prototype,f[u].prototype||f[u],k,o);return e},extend:function(f,j,e,k){if(!j||!f)return f;var o=Object.prototype,u=j.prototype,g=function(h){function a(){}a.prototype=h;return new a}(u);f.prototype=g;
g.constructor=f;f.superclass=u;if(j!==Object&&u.constructor===o.constructor)u.constructor=j;e&&t(g,e);k&&t(f,k);return f},namespace:function(){var f=arguments.length,j=null,e,k,o;for(e=0;e<f;++e){o=(""+arguments[e]).split(".");j=this;for(k=c[o[0]]===j?1:0;k<o.length;++k)j=j[o[k]]=j[o[k]]||{}}return j},app:function(f,j){var e=c[f]||{};t(e,this,true,["_init","add","namespace"]);e._init();return t(c[f]=e,typeof j==="function"?j():j)},log:function(f,j,e){if(this.Config.debug){if(e)f=e+": "+f;if(c.console!==
l&&console.log)console[j&&console[j]?j:"log"](f)}return this},error:function(f){if(this.Config.debug)throw f;}});q._init();q.Config={debug:""}})(window,"KISSY");
KISSY.add("kissy-lang",function(c,q){function l(a){var b=typeof a;return a===null||b!=="object"&&b!=="function"}var p=window,t=document,s=location,i=Array.prototype,m=i.indexOf,f=i.filter,j=String.prototype.trim,e=Object.prototype.toString,k=encodeURIComponent,o=decodeURIComponent,u=/^\s+|\s+$/g,g=/^(\w+)\[\]$/,h=/\S/;c.mix(c,{isUndefined:function(a){return a===q},isBoolean:function(a){return typeof a==="boolean"},isString:function(a){return typeof a==="string"},isNumber:function(a){return typeof a===
"number"&&isFinite(a)},isPlainObject:function(a){return a&&e.call(a)==="[object Object]"&&!a.nodeType&&!a.setInterval},isEmptyObject:function(a){for(var b in a)return false;return true},isFunction:function(a){return e.call(a)==="[object Function]"},isArray:function(a){return e.call(a)==="[object Array]"},trim:j?function(a){return a==q?"":j.call(a)}:function(a){return a==q?"":a.toString().replace(u,"")},each:function(a,b,d){for(var n=a&&a.length||0,r=0;r<n;++r)b.call(d||p,a[r],r,a)},indexOf:m?function(a,
b){return m.call(b,a)}:function(a,b){for(var d=0,n=b.length;d<n;++d)if(b[d]===a)return d;return-1},inArray:function(a,b){return c.indexOf(a,b)>-1},makeArray:function(a){if(a===null||a===q)return[];if(c.isArray(a))return a;if(typeof a.length!=="number"||typeof a==="string"||c.isFunction(a))return[a];if(a.item&&c.UA.ie){for(var b=[],d=0,n=a.length;d<n;++d)b[d]=a[d];return b}return i.slice.call(a)},filter:f?function(a,b,d){return f.call(a,b,d)}:function(a,b,d){var n=[];c.each(a,function(r,v,x){b.call(d,
r,v,x)&&n.push(r)});return n},param:function(a){if(!c.isPlainObject(a))return"";var b=[],d,n;for(d in a){n=a[d];d=k(d);if(l(n))b.push(d,"=",k(n+""),"&");else if(c.isArray(n)&&n.length)for(var r=0,v=n.length;r<v;++r)l(n[r])&&b.push(d,"[]=",k(n[r]+""),"&")}b.pop();return b.join("")},unparam:function(a,b){if(typeof a!=="string"||(a=c.trim(a)).length===0)return{};var d={};a=a.split(b||"&");for(var n,r,v,x=0,w=a.length;x<w;++x){b=a[x].split("=");n=o(b[0]);try{r=o(b[1]||"")}catch(y){r=b[1]||""}if((v=n.match(g))&&
v[1]){d[v[1]]=d[v[1]]||[];d[v[1]].push(r)}else d[n]=r}return d},later:function(a,b,d,n,r){b=b||0;n=n||{};var v=a,x=c.makeArray(r),w;if(typeof a==="string")v=n[a];v||c.error("method undefined");a=function(){v.apply(n,x)};w=d?setInterval(a,b):setTimeout(a,b);return{id:w,interval:d,cancel:function(){this.interval?clearInterval(w):clearTimeout(w)}}},now:function(){return(new Date).getTime()},globalEval:function(a){if(a&&h.test(a)){var b=t.getElementsByTagName("head")[0]||t.documentElement,d=t.createElement("script");
d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}}});if(s&&s.search&&s.search.indexOf("ks-debug")!==-1)c.Config.debug=true});
KISSY.add("kissy-ua",function(c){var q=navigator.userAgent,l,p={webkit:0,chrome:0,safari:0,gecko:0,firefox:0,ie:0,opera:0,mobile:""},t=function(s){var i=0;return parseFloat(s.replace(/\./g,function(){return i++===0?".":""}))};if((l=q.match(/AppleWebKit\/([\d.]*)/))&&l[1]){p.webkit=t(l[1]);if((l=q.match(/Chrome\/([\d.]*)/))&&l[1])p.chrome=t(l[1]);else if((l=q.match(/\/([\d.]*) Safari/))&&l[1])p.safari=t(l[1]);if(/ Mobile\//.test(q))p.mobile="Apple";else if(l=q.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))p.mobile=
l[0]}else if((l=q.match(/Opera\/.* Version\/([\d.]*)/))&&l[1]){p.opera=t(l[1]);if(q.match(/Opera Mini[^;]*/))p.mobile=l[0]}else if((l=q.match(/MSIE\s([^;]*)/))&&l[1])p.ie=t(l[1]);else if(l=q.match(/Gecko/)){p.gecko=1;if((l=q.match(/rv:([\d.]*)/))&&l[1])p.gecko=t(l[1]);if((l=q.match(/Firefox\/([\d.]*)/))&&l[1])p.firefox=t(l[1])}c.UA=p});KISSY.add("dom",function(c){c.DOM={_isElementNode:function(q){return q&&q.nodeType===1}}});
KISSY.add("selector",function(c,q){function l(g,h){var a,b=[],d,n;h=p(h);if(c.isString(g)){g=c.trim(g);if(o.test(g)){if(g=t(g.slice(1)))b=[g]}else if(a=u.exec(g)){d=a[1];n=a[2];a=a[3];if(h=d?t(d):h)if(a)if(!d||g.indexOf(e)!==-1)b=i(a,n,h);else{if((g=t(d))&&j.hasClass(g,a))b=[g]}else if(n)b=s(h,n)}else if(c.ExternalSelector)return c.ExternalSelector(g,h);else m(g)}else if(g&&g.nodeType)b=[g];else if(g&&(g.item||c.isArray(g)))b=g;if(b.item)b=c.makeArray(b);return b}function p(g){if(g===q)g=f;else if(c.isString(g)&&
o.test(g))g=t(g.slice(1));else if(g&&g.nodeType!==1&&g.nodeType!==9)g=null;return g}function t(g){return f.getElementById(g)}function s(g,h){return g.getElementsByTagName(h)}function i(g,h,a){a=g=a.getElementsByClassName(g);var b=0,d=0,n=g.length,r;if(h&&h!==k){a=[];for(h=h.toUpperCase();b<n;++b){r=g[b];if(r.tagName===h)a[d++]=r}}return a}function m(g){c.error("Unsupported selector: "+g)}var f=document,j=c.DOM,e=" ",k="*",o=/^#[\w-]+$/,u=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var g=
f.createElement("div");g.appendChild(f.createComment(""));if(g.getElementsByTagName(k).length>0)s=function(h,a){h=h.getElementsByTagName(a);if(a===k){a=[];for(var b=0,d=0,n;n=h[b++];)if(n.nodeType===1)a[d++]=n;h=a}return h}})();f.getElementsByClassName||(i=f.querySelectorAll?function(g,h,a){return a.querySelectorAll((h?h:"")+"."+g)}:function(g,h,a){h=a.getElementsByTagName(h||k);a=[];var b=0,d=0,n=h.length,r,v;for(g=e+g+e;b<n;++b){r=h[b];if((v=r.className)&&(e+v+e).indexOf(g)>-1)a[d++]=r}return a});
c.query=l;c.get=function(g,h){return l(g,h)[0]||null};c.mix(j,{query:l,get:c.get,filter:function(g,h){var a=l(g),b,d,n,r=[];if(c.isString(h)&&(b=u.exec(h))&&!b[1]){d=b[2];n=b[3];h=function(v){return!(d&&v.tagName!==d.toUpperCase()||n&&!j.hasClass(v,n))}}if(c.isFunction(h))r=c.filter(a,h);else if(h&&c.ExternalSelector)r=c.ExternalSelector._filter(g,h);else m(h);return r},test:function(g,h){g=l(g);return j.filter(g,h).length===g.length}})});
KISSY.add("dom-class",function(c,q){function l(i,m,f,j){if(!(m=c.trim(m)))return j?false:q;i=c.query(i);var e=0,k=i.length;m=m.split(t);for(var o;e<k;e++){o=i[e];if(o.nodeType===1){o=f(o,m,m.length);if(o!==q)return o}}if(j)return false}var p=c.DOM,t=/[\.\s]\s*\.?/,s=/[\n\t]/g;c.mix(p,{hasClass:function(i,m){return l(i,m,function(f,j,e){if(f=f.className){f=" "+f+" ";for(var k=0,o=true;k<e;k++)if(f.indexOf(" "+j[k]+" ")<0){o=false;break}if(o)return true}},true)},addClass:function(i,m){l(i,m,function(f,
j,e){var k=f.className;if(k){var o=" "+k+" ";k=k;for(var u=0;u<e;u++)if(o.indexOf(" "+j[u]+" ")<0)k+=" "+j[u];f.className=c.trim(k)}else f.className=m})},removeClass:function(i,m){l(i,m,function(f,j,e){var k=f.className;if(k)if(e){k=(" "+k+" ").replace(s," ");for(var o=0;o<e;o++)k=k.replace(" "+j[o]+" "," ");f.className=c.trim(k)}else f.className=""})},replaceClass:function(i,m,f){p.removeClass(i,m);p.addClass(i,f)},toggleClass:function(i,m,f){var j=c.isBoolean(f),e;l(i,m,function(k,o,u){for(var g=
0,h;g<u;g++){h=o[g];e=j?!f:p.hasClass(k,h);p[e?"removeClass":"addClass"](k,h)}})}})});
KISSY.add("dom-attr",function(c,q){function l(g,h){return h&&h.nodeName.toUpperCase()===g.toUpperCase()}var p=c.UA,t=p.ie,s=t&&t<8,i=document.documentElement.textContent!==q?"textContent":"innerText",m=c.DOM,f=m._isElementNode,j=/href|src|style/,e=/href|src|colspan|rowspan/,k=/\r/g,o=/radio|checkbox/,u={readonly:"readOnly"};s&&c.mix(u,{"for":"htmlFor","class":"className"});c.mix(m,{attr:function(g,h,a){if(h=c.trim(h)){h=h.toLowerCase();h=u[h]||h;if(a===q){g=c.get(g);if(!f(g))return q;var b;j.test(h)||
(b=g[h]);if(b===q)b=g.getAttribute(h);if(s)if(e.test(h))b=g.getAttribute(h,2);else if(h==="style")b=g.style.cssText;return b===null?q:b}c.each(c.query(g),function(d){if(f(d))if(s&&h==="style")d.style.cssText=a;else d.setAttribute(h,""+a)})}},removeAttr:function(g,h){c.each(c.query(g),function(a){f(a)&&a.removeAttribute(h)})},val:function(g,h){if(h===q){var a=c.get(g);if(!f(a))return q;if(l("option",a))return(a.attributes.value||{}).specified?a.value:a.text;if(l("select",a)){var b=a.selectedIndex;
g=a.options;if(b<0)return null;else if(a.type==="select-one")return m.val(g[b]);a=[];for(var d=0,n=g.length;d<n;++d)g[d].selected&&a.push(m.val(g[d]));return a}if(p.webkit&&o.test(a.type))return a.getAttribute("value")===null?"on":a.value;return(a.value||"").replace(k,"")}c.each(c.query(g),function(r){if(l("select",r)){var v=c.makeArray(h),x=r.options,w;d=0;for(n=x.length;d<n;++d){w=x[d];w.selected=c.inArray(m.val(w),v)}if(!v.length)r.selectedIndex=-1}else if(f(r))r.value=h})},text:function(g,h){if(h===
q){g=c.get(g);if(f(g))return g[i]||""}else c.each(c.query(g),function(a){if(f(a))a[i]=h})}})});
KISSY.add("dom-style",function(c,q){var l=c.DOM,p=document,t=p.documentElement,s=/width|height|top|left|right|bottom|margin|padding/i,i=/-([a-z])/ig,m=function(j,e){return e.toUpperCase()},f={};c.mix(l,{_CUSTOM_STYLES:f,_getComputedStyle:function(j,e){var k="",o=j.ownerDocument;if(j.style)k=o.defaultView.getComputedStyle(j,null)[e];return k},css:function(j,e,k){if(c.isPlainObject(e))for(var o in e)l.css(j,o,e[o]);else{if(e.indexOf("-")>0)e=e.replace(i,m);e=f[e]||e;if(k===q){j=c.get(j);o="";if(j&&
j.style){o=e.get?e.get(j):j.style[e];if(o===""&&!e.get)o=l._getComputedStyle(j,e)}return o===q?"":o}else{if(k===null||k==="")k="";else if(!isNaN(new Number(k))&&s.test(e))k+="px";(e==="width"||e==="height")&&parseFloat(k)<0||c.each(c.query(j),function(u){if(u&&u.style)e.set?e.set(u,k):(u.style[e]=k)})}}},addStyleSheet:function(j,e){var k;if(e)k=c.get(e);k||(k=l.create("<style>",{id:e}));c.get("head").appendChild(k);if(k.styleSheet)k.styleSheet.cssText=j;else k.appendChild(p.createTextNode(j))}});
if(t.style.cssFloat!==q)f["float"]="cssFloat";else if(t.style.styleFloat!==q)f["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(c,q){if(c.UA.ie){var l=c.DOM,p=document,t=p.documentElement,s=l._CUSTOM_STYLES,i=/^-?\d+(?:px)?$/i,m=/^-?\d/,f=/^auto$/i;try{if(t.style.opacity===q&&t.filters)s.opacity={get:function(e){var k=100;try{k=e.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(o){try{k=e.filters("alpha").opacity}catch(u){}}return k/100+""},set:function(e,k){e=e.style;e.zoom=1;e.filter="alpha(opacity="+k*100+")"}}}catch(j){c.log("IE filters ActiveX is disabled. ex = "+j)}if(!(p.defaultView||
{}).getComputedStyle&&t.currentStyle)l._getComputedStyle=function(e,k){var o=e.style;e=e.currentStyle[k];if(!i.test(e)&&m.test(e)||f.test(e)){var u=o.left;o.left=k==="fontSize"?"1em":e||0;e=o.pixelLeft+"px";o.left=u}return e}}});
KISSY.add("dom-offset",function(c,q){function l(h){var a=0,b=0;if(h!==m.body&&h!==f&&h[g]){h=h[g]();a=h.left+t.scrollLeft();b=h.top+t.scrollTop()}return{left:a,top:b}}function p(h,a){var b=t.css(h,o);if(b==="static")b=h.style[o]=u;var d=l(h);b=b===u;var n=k(t.css(h,"left"),10),r=k(t.css(h,"top"),10);n=c.isNumber(n)?n:b?0:h.offsetLeft;r=c.isNumber(r)?r:b?0:h.offsetTop;t.css(h,{left:n+a.left-d.left,top:r+a.top-d.top})}var t=c.DOM,s=c.UA,i=window,m=document,f=m.documentElement,j=m.compatMode==="CSS1Compat",
e=Math.max,k=parseInt,o="position",u="relative",g="getBoundingClientRect";c.mix(t,{offset:function(h,a){if(!(h=c.get(h))||!h.ownerDocument)return null;if(a===q)return l(h);p(h,a)},scrollLeft:function(){return i.pageXOffset||f.scrollLeft||m.body.scrollLeft},scrollTop:function(){return i.pageYOffset||f.scrollTop||m.body.scrollTop},docHeight:function(){return e(!j?m.body.scrollHeight:f.scrollHeight,t.viewportHeight())},docWidth:function(){return e(!j?m.body.scrollWidth:f.scrollWidth,t.viewportWidth())},
viewportHeight:function(){return s.ie?j?f.clientHeight:m.body.clientHeight:i.innerHeight},viewportWidth:function(){return!j&&!s.opera?m.body.clientWidth:s.ie?f.clientWidth:i.innerWidth}})});
KISSY.add("dom-traversal",function(c,q){function l(i,m,f,j){if(!(i=c.get(i)))return null;if(m===q)m=1;var e=null,k,o;if(c.isNumber(m)&&m>=0){if(m===0)return i;k=0;o=m;m=function(){return++k===o}}for(;i=i[f];)if(s(i)&&(!m||t.test(i,m))&&(!j||j(i))){e=i;break}return e}function p(i,m,f){var j=[];var e=i=c.get(i);if(i&&f)e=i.parentNode;if(e){f=0;for(e=e.firstChild;e;e=e.nextSibling)if(s(e)&&e!==i&&(!m||t.test(e,m)))j[f++]=e}return j}var t=c.DOM,s=t._isElementNode;c.mix(t,{parent:function(i,m){return l(i,
m,"parentNode",function(f){return f.nodeType!=11})},next:function(i,m){return l(i,m,"nextSibling")},prev:function(i,m){return l(i,m,"previousSibling")},siblings:function(i,m){return p(i,m,true)},children:function(i,m){return p(i,m)},contains:function(i,m){var f=false;if((i=c.get(i))&&(m=c.get(m)))if(i.contains)return i.contains(m);else if(i.compareDocumentPosition)return!!(i.compareDocumentPosition(m)&16);else for(;!f&&(m=m.parentNode);)f=m==i;return f}})});
KISSY.add("dom-create",function(c,q){function l(b,d){if(f(b)&&d)for(var n in d)s.attr(b,n,d[n]);return b}function p(b,d){var n=null,r;if(b&&(b.push||b.item)&&b[0]){d=d||b[0].ownerDocument;n=d.createDocumentFragment();if(b.item)b=c.makeArray(b);d=0;for(r=b.length;d<r;d++)n.appendChild(b[d])}else c.log("Unable to convert "+b+" to fragment.");return n}var t=document,s=c.DOM,i=c.UA,m=i.ie,f=s._isElementNode,j=t.createElement("div"),e=/<(\w+)/,k=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;c.mix(s,{create:function(b,
d,n){if(f(b))return b;if(!(b=c.trim(b)))return null;var r=null;r=s._creators;var v,x="div",w;if(v=k.exec(b))r=(n||t).createElement(v[1]);else{if((v=e.exec(b))&&(w=v[1])&&c.isFunction(r[w=w.toLowerCase()]))x=w;b=r[x](b,n).childNodes;r=b.length===1?b[0].parentNode.removeChild(b[0]):p(b,n||t)}return l(r,d)},_creators:{div:function(b,d){d=d?d.createElement("div"):j;d.innerHTML=b;return d}},html:function(b,d){if(d===q){b=c.get(b);if(f(b))return b.innerHTML}else c.each(c.query(b),function(n){if(f(n)){n.innerHTML=
"";d&&n.appendChild(s.create(d))}})}});var o=s._creators,u=s.create,g=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,h={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};if(i.gecko||m){for(var a in h)(function(b){o[a]=function(d,n){return u("<"+b+">"+d+"</"+b+">",null,n)}})(h[a]);if(m){o.script=function(b,d){d=d?d.createElement("div"):j;d.innerHTML="-"+b;d.removeChild(d.firstChild);return d};if(m<8)o.tbody=function(b,d){d=u("<table>"+b+"</table>",null,d);
var n=d.children.tags("tbody")[0];d.children.length>1&&n&&!g.test(b)&&n.parentNode.removeChild(n);return d}}c.mix(o,{optgroup:o.option,th:o.td,thead:o.tbody,tfoot:o.tbody,caption:o.tbody,colgroup:o.tbody})}});
KISSY.add("dom-insertion",function(c){var q=c.DOM;c.mix(q,{insertBefore:function(l,p){l=q.create(l);p=c.get(p);l&&p&&p.parentNode&&p.parentNode.insertBefore(l,p);return l},insertAfter:function(l,p){l=q.create(l);p=c.get(p);if(l&&p&&p.parentNode)p.nextSibling?p.parentNode.insertBefore(l,p.nextSibling):p.parentNode.appendChild(l);return l}})});
KISSY.add("event",function(c,q){function l(a,b,d,n,r){if(c.isString(b))b=c.query(b);if(c.isArray(b)){c.each(b,function(v){h[a](v,d,n,r)});return true}if((d=c.trim(d))&&d.indexOf(o)>0){c.each(d.split(o),function(v){h[a](b,v,n,r)});return true}}function p(a){return i(a)?-1:a[k]}function t(a,b){if(i(a))return c.error("Text or comment node is not valid event target.");try{a[k]=b}catch(d){c.error(d)}}function s(a){try{a[k]=q;delete a[k]}catch(b){}}function i(a){return a.nodeType===3||a.nodeType===8}var m=
window,f=document,j=f.addEventListener?function(a,b,d,n){a.addEventListener&&a.addEventListener(b,d,!!n)}:function(a,b,d){a.attachEvent&&a.attachEvent("on"+b,d)},e=f.removeEventListener?function(a,b,d,n){a.removeEventListener&&a.removeEventListener(b,d,!!n)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)},k="ksEventTargetId",o=" ",u=c.now(),g={},h={EVENT_GUID:k,special:{},add:function(a,b,d,n){if(!l("add",a,b,d,n)){var r=p(a),v,x;if(!(r===-1||!b||!c.isFunction(d))){if(!r){t(a,r=u++);g[r]=
{target:a,events:{}}}x=g[r].events;v=!a.isCustomEventTarget&&h.special[b]||{};if(!x[b]){r=function(w,y){if(!w||!w.fixed){w=new c.EventObject(a,w,b);c.isPlainObject(y)&&c.mix(w,y)}v.setup&&v.setup(w);return(v.handle||h._handle)(a,w,x[b].listeners,n)};x[b]={handle:r,listeners:[]};if(a.isCustomEventTarget)a._addEvent&&a._addEvent(b,r);else j(a,v.fix||b,r,v.capture)}x[b].listeners.push(d)}}},remove:function(a,b,d){if(!l("remove",a,b,d)){var n=p(a),r,v,x,w,y,z;if(n!==-1)if(n&&(r=g[n]))if(r.target===a){r=
r.events||{};if(v=r[b]){x=v.listeners;y=x.length;if(c.isFunction(d)&&y&&c.inArray(d,x)){z=[];for(w=0;w<y;++w)d!==x[w]&&z.push(x[w]);y=z.length}if(d===q||y===0){if(a.isCustomEventTarget)a._addEvent&&a._removeEvent(b,v.handle);else e(a,b,v.handle);delete r[b]}}if(b===q||c.isEmptyObject(r)){for(b in r)h.remove(a,b);delete g[n];s(a)}}}},_handle:function(a,b,d,n){var r,v=0,x=d.length;for(n=n||a;v<x;++v){r=d[v].call(n,b);if(r===false&&a.isCustomEventTarget||b.isImmediatePropagationStopped)break}return r},
_getCache:function(a){return g[a]},_simpleAdd:j,_simpleRemove:e};h.on=h.add;c.Event=h;m.attachEvent&&!m.addEventListener&&m.attachEvent("onunload",function(){var a,b;for(a in g)if(b=g[a].target)try{h.remove(b)}catch(d){}})});
KISSY.add("event-object",function(c,q){function l(s,i,m){this.currentTarget=s;this.originalEvent=i||{};if(i){this.type=i.type;this._fix()}else{this.type=m;this.target=s}this.fixed=true}var p=document,t="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");c.mix(l.prototype,
{_fix:function(){for(var s=this.originalEvent,i=t.length,m;i;){m=t[--i];this[m]=s[m]}if(!this.target)this.target=this.srcElement||p;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===q&&this.clientX!==q){s=p.documentElement;i=p.body;this.pageX=this.clientX+(s&&s.scrollLeft||i&&i.scrollLeft||0)-(s&&s.clientLeft||i&&i.clientLeft||0);this.pageY=this.clientY+
(s&&s.scrollTop||i&&i.scrollTop||0)-(s&&s.clientTop||i&&i.clientTop||0)}if(this.which===q)this.which=this.charCode!==q?this.charCode:this.keyCode;if(this.metaKey===q)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==q)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var s=this.originalEvent;if(s.preventDefault)s.preventDefault();else s.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var s=this.originalEvent;if(s.stopPropagation)s.stopPropagation();
else s.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var s=this.originalEvent;s.stopImmediatePropagation?s.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(s){s?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});c.EventObject=l});
KISSY.add("event-target",function(c,q){var l=c.Event,p=l.EVENT_GUID;c.EventTarget={isCustomEventTarget:true,fire:function(t,s){if((t=((l._getCache(this[p]||-1)||{}).events||{})[t])&&c.isFunction(t.handle))return t.handle(q,s)},on:function(t,s,i){l.add(this,t,s,i)},detach:function(t,s){l.remove(this,t,s)}}});
KISSY.add("event-mouseenter",function(c){var q=c.Event;c.UA.ie||c.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(l){q.special[l.name]={fix:l.fix,setup:function(p){p.type=l.name},handle:function(p,t,s){var i=t.relatedTarget;try{for(;i&&i!==p;)i=i.parentNode;i!==p&&q._handle(p,t,s)}catch(m){}}}})});
KISSY.add("event-focusin",function(c){var q=c.Event;document.addEventListener&&c.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(l){q.special[l.name]={fix:l.fix,capture:true,setup:function(p){p.type=l.name}}})});
