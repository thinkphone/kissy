/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Dec 2 22:19
*/
(function(){function x(a,b,c,d,f,e){f=0;for(var h=d.length;f<h;f++){var g=d[f];if(g){g=g[a];for(var k=false;g;){if(g.sizcache===c){k=d[g.sizset];break}if(g.nodeType===1&&!e){g.sizcache=c;g.sizset=f}if(g.nodeName.toLowerCase()===b){k=g;break}g=g[a]}d[f]=k}}}function y(a,b,c,d,f,e){f=0;for(var h=d.length;f<h;f++){var g=d[f];if(g){g=g[a];for(var k=false;g;){if(g.sizcache===c){k=d[g.sizset];break}if(g.nodeType===1){if(!e){g.sizcache=c;g.sizset=f}if(typeof b!=="string"){if(g===b){k=true;break}}else if(j.filter(b,
[g]).length>0){k=g;break}}g=g[a]}d[f]=k}}}var v=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,w=0,z=Object.prototype.toString,m=false,A=true;[0,0].sort(function(){A=false;return 0});var j=function(a,b,c,d){c=c||[];var f=b=b||document;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;var e=[],h,g,k,q,n=true,p=j.isXML(b),o=a,l;do{v.exec("");if(h=v.exec(o)){o=h[3];e.push(h[1]);if(h[2]){q=
h[3];break}}}while(h);if(e.length>1&&D.exec(a))if(e.length===2&&i.relative[e[0]])g=B(e[0]+e[1],b);else for(g=i.relative[e[0]]?[b]:j(e.shift(),b);e.length;){a=e.shift();if(i.relative[a])a+=e.shift();g=B(a,g)}else{if(!d&&e.length>1&&b.nodeType===9&&!p&&i.match.ID.test(e[0])&&!i.match.ID.test(e[e.length-1])){h=j.find(e.shift(),b,p);b=h.expr?j.filter(h.expr,h.set)[0]:h.set[0]}if(b){h=d?{expr:e.pop(),set:r(d)}:j.find(e.pop(),e.length===1&&(e[0]==="~"||e[0]==="+")&&b.parentNode?b.parentNode:b,p);g=h.expr?
j.filter(h.expr,h.set):h.set;if(e.length>0)k=r(g);else n=false;for(;e.length;){h=l=e.pop();if(i.relative[l])h=e.pop();else l="";if(h==null)h=b;i.relative[l](k,h,p)}}else k=[]}k||(k=g);k||j.error(l||a);if(z.call(k)==="[object Array]")if(n)if(b&&b.nodeType===1)for(a=0;k[a]!=null;a++){if(k[a]&&(k[a]===true||k[a].nodeType===1&&j.contains(b,k[a])))c.push(g[a])}else for(a=0;k[a]!=null;a++)k[a]&&k[a].nodeType===1&&c.push(g[a]);else c.push.apply(c,k);else r(k,c);if(q){j(q,f,c,d);j.uniqueSort(c)}return c};
j.uniqueSort=function(a){if(s){m=A;a.sort(s);if(m)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};j.matches=function(a,b){return j(a,null,null,b)};j.find=function(a,b,c){var d;if(!a)return[];for(var f=0,e=i.order.length;f<e;f++){var h=i.order[f],g;if(g=i.leftMatch[h].exec(a)){var k=g[1];g.splice(1,1);if(k.substr(k.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,"");d=i.find[h](g,b,c);if(d!=null){a=a.replace(i.match[h],"");break}}}}d||(d=b.getElementsByTagName("*"));return{set:d,
expr:a}};j.filter=function(a,b,c,d){for(var f=a,e=[],h=b,g,k,q=b&&b[0]&&j.isXML(b[0]);a&&b.length;){for(var n in i.filter)if((g=i.leftMatch[n].exec(a))!=null&&g[2]){var p=i.filter[n],o,l;l=g[1];k=false;g.splice(1,1);if(l.substr(l.length-1)!=="\\"){if(h===e)e=[];if(i.preFilter[n])if(g=i.preFilter[n](g,h,c,e,d,q)){if(g===true)continue}else k=o=true;if(g)for(var u=0;(l=h[u])!=null;u++)if(l){o=p(l,g,u,h);var C=d^!!o;if(c&&o!=null)if(C)k=true;else h[u]=false;else if(C){e.push(l);k=true}}if(o!==undefined){c||
(h=e);a=a.replace(i.match[n],"");if(!k)return[];break}}}if(a===f)if(k==null)j.error(a);else break;f=a}return h};j.error=function(a){throw"Syntax error, unrecognized expression: "+a;};var i=j.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b);c=c&&!d;if(d)b=b.toLowerCase();d=0;for(var f=a.length,e;d<f;d++)if(e=a[d]){for(;(e=e.previousSibling)&&e.nodeType!==1;);a[d]=c||e&&e.nodeName.toLowerCase()===
b?e||false:e===b}c&&j.filter(b,a,true)},">":function(a,b){var c=typeof b==="string",d,f=0,e=a.length;if(c&&!/\W/.test(b))for(b=b.toLowerCase();f<e;f++){if(d=a[f]){c=d.parentNode;a[f]=c.nodeName.toLowerCase()===b?c:false}}else{for(;f<e;f++)if(d=a[f])a[f]=c?d.parentNode:d.parentNode===b;c&&j.filter(b,a,true)}},"":function(a,b,c){var d=w++,f=y,e;if(typeof b==="string"&&!/\W/.test(b)){e=b=b.toLowerCase();f=x}f("parentNode",b,d,a,e,c)},"~":function(a,b,c){var d=w++,f=y,e;if(typeof b==="string"&&!/\W/.test(b)){e=
b=b.toLowerCase();f=x}f("previousSibling",b,d,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,e=d.length;f<e;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,e){a=" "+a[1].replace(/\\/g,"")+" ";if(e)return a;
e=0;for(var h;(h=b[e])!=null;e++)if(h)if(f^(h.className&&(" "+h.className+" ").replace(/[\t\n]/g," ").indexOf(a)>=0))c||d.push(h);else if(c)b[e]=false;return false},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}a[0]=w++;return a},ATTR:function(a,b,c,d,f,e){b=a[1].replace(/\\/g,
"");if(!e&&i.attrMap[b])a[1]=i.attrMap[b];if(a[2]==="~=")a[4]=" "+a[4]+" ";return a},PSEUDO:function(a,b,c,d,f){if(a[1]==="not")if((v.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=j(a[3],null,null,b);else{a=j.filter(a[3],b,c,true^f);c||d.push.apply(d,a);return false}else if(i.match.POS.test(a[0])||i.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===
true},checked:function(a){return a.checked===true},selected:function(a){return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!j(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===
a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-
0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],e=i.filters[f];if(e)return e(a,c,b,d);else if(f==="contains")return(a.textContent||a.innerText||j.getText([a])||"").indexOf(b[3])>=0;else if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}else j.error("Syntax error, unrecognized expression: "+f)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return false;if(c===
"first")return true;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return false;return true;case "nth":c=b[2];var f=b[3];if(c===1&&f===0)return true;var e=b[0],h=a.parentNode;if(h&&(h.sizcache!==e||!a.nodeIndex)){var g=0;for(d=h.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++g;h.sizcache=e}d=a.nodeIndex-f;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===
b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1];c=i.attrHandle[c]?i.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c);var d=c+"",f=b[2],e=b[4];return c==null?f==="!=":f==="="?d===e:f==="*="?d.indexOf(e)>=0:f==="~="?(" "+d+" ").indexOf(e)>=0:!e?d&&c!==false:f==="!="?d!==e:f==="^="?d.indexOf(e)===0:f==="$="?d.substr(d.length-e.length)===e:f==="|="?d===e||d.substr(0,e.length+1)===e+"-":false},POS:function(a,b,c,d){var f=i.setFilters[b[2]];
if(f)return f(a,c,b,d)}}},D=i.match.POS,E=function(a,b){return"\\"+(b-0+1)},t;for(t in i.match){i.match[t]=RegExp(i.match[t].source+/(?![^\[]*\])(?![^\(]*\))/.source);i.leftMatch[t]=RegExp(/(^(?:.|\r|\n)*?)/.source+i.match[t].source.replace(/\\(\d+)/g,E))}var r=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(F){r=function(a,b){var c=b||[],d=0;if(z.call(a)==="[object Array]")Array.prototype.push.apply(c,
a);else if(typeof a.length==="number")for(var f=a.length;d<f;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var s;if(document.documentElement.compareDocumentPosition)s=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b)m=true;return a.compareDocumentPosition?-1:1}var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(c===0)m=true;return c};else if("sourceIndex"in document.documentElement)s=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b)m=true;return a.sourceIndex?
-1:1}var c=a.sourceIndex-b.sourceIndex;if(c===0)m=true;return c};else if(document.createRange)s=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b)m=true;return a.ownerDocument?-1:1}var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,d);if(c===0)m=true;return c};j.getText=function(a){for(var b="",c,d=0;a[d];d++){c=a[d];if(c.nodeType===3||c.nodeType===4)b+=c.nodeValue;
else if(c.nodeType!==8)b+=j.getText(c.childNodes)}return b};(function(){var a=document.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=document.documentElement;c.insertBefore(a,c.firstChild);if(document.getElementById(b)){i.find.ID=function(d,f,e){if(typeof f.getElementById!=="undefined"&&!e)return(f=f.getElementById(d[1]))?f.id===d[1]||typeof f.getAttributeNode!=="undefined"&&f.getAttributeNode("id").nodeValue===d[1]?[f]:undefined:[]};i.filter.ID=function(d,
f){var e=typeof d.getAttributeNode!=="undefined"&&d.getAttributeNode("id");return d.nodeType===1&&e&&e.nodeValue===f}}c.removeChild(a);c=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0)i.find.TAG=function(b,c){var d=c.getElementsByTagName(b[1]);if(b[1]==="*"){for(var f=[],e=0;d[e];e++)d[e].nodeType===1&&f.push(d[e]);d=f}return d};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!==
"undefined"&&a.firstChild.getAttribute("href")!=="#")i.attrHandle.href=function(b){return b.getAttribute("href",2)};a=null})();document.querySelectorAll&&function(){var a=j,b=document.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){j=function(d,f,e,h){f=f||document;if(!h&&f.nodeType===9&&!j.isXML(f))try{return r(f.querySelectorAll(d),e)}catch(g){}return a(d,f,e,h)};for(var c in a)j[c]=a[c];b=null}}();(function(){var a=document.createElement("div");
a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)){a.lastChild.className="e";if(a.getElementsByClassName("e").length!==1){i.order.splice(1,0,"CLASS");i.find.CLASS=function(b,c,d){if(typeof c.getElementsByClassName!=="undefined"&&!d)return c.getElementsByClassName(b[1])};a=null}}})();j.contains=document.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&
(a.contains?a.contains(b):true)};j.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var B=function(a,b){for(var c=[],d="",f,e=b.nodeType?[b]:b;f=i.match.PSEUDO.exec(a);){d+=f[0];a=a.replace(i.match.PSEUDO,"")}a=i.relative[a]?a+"*":a;f=0;for(var h=e.length;f<h;f++)j(a,e[f],c);return j.filter(d,c)};KISSY.add("sizzle",function(a){a.ExternalSelector=j;a.ExternalSelector._filter=function(b,c){return j.matches(c,a.query(b))}},{requires:["core"]})})();
