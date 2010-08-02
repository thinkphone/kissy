/*
Copyright 2010, KISSY UI Library v1.1.0
MIT Licensed
build time: Aug 2 22:52
*/
KISSY.add("imagezoom",function(h,v){function n(a,b){var c=this,d;if(!(c instanceof n))return new n(a,b);if(c.image=a=h.get(a)){c.config=b=h.merge(w,b);if(!b.bigImageSrc){d=e.parent(a);if(d.src&&x.test(d.src)){b.bigImageSrc=d.src;c._imageLink=d}}b.offset=h.makeArray(b.offset);if(b.preload)(new Image).src=b.bigImageSrc;t(a,function(){c._init()})}}function t(a,b){a.complete?b():o.on(a,"load",b)}function p(a){a&&e.css(a,u,"none")}function r(a){a&&e.css(a,u,"")}function m(a){return{width:a.clientWidth,
height:a.clientHeight}}var e=h.DOM,o=h.Event,u="display",x=/^.+\.(jpg|png|gif)$/i,q=Math.round,w={type:"standard",bigImageSrc:"",bigImageSize:[900,900],offset:10,preload:true,timeout:120,timeoutMsg:"\u56fe\u7247\u6682\u4e0d\u53ef\u7528",lensSize:[100,100],lensIcon:true};h.augment(n,h.EventTarget,{_init:function(){this._renderUI();this._bindUI()},_renderUI:function(){var a=this.config,b=this._imageLink||this.image,c,d;c=e.create("<div>",{"class":"ks-imagezoom-origin"});e.css(c,m(b));e.parent(b).insertBefore(c,
b);c.appendChild(b);this.origin=c;if(a.type==="standard"){d=a.lensSize;b=e.create("<div>",{"class":"ks-imagezoom-lens"});e.css(b,{width:d[0],height:d[1]});p(b);c.appendChild(b);this.lens=b}if(a.lensIcon){a=e.create("<div>",{"class":"ks-imagezoom-icon"});c.appendChild(a);this.lensIcon=a}},_bindUI:function(){var a=this,b=a.lens,c=a.lensIcon;o.on(a.origin,"mouseenter",function(d){r(b);p(c);a.viewer?r(a.viewer):a._createViewer({x:d.pageX,y:d.pageY})});o.on(a.origin,"mousemove",function(d){a._onMouseMove({x:d.pageX,
y:d.pageY})});o.on(a.origin,"mouseleave",function(){p(b);r(c);p(a.viewer)})},_createViewer:function(a){var b=this,c=b.config,d,f,g;d=e.create("<div>",{"class":"ks-imagezoom-viewer ks-imagezoom-loading"});f=e.create("<img>",{src:c.bigImageSrc});d.appendChild(f);e.get("body").appendChild(d);b.bigImage=f;b.viewer=d;if(!f.complete){g=h.later(function(){f.complete||b._showTimeoutMsg();g.cancel()},c.timeout*1E3);t(f,function(){g&&g.cancel();b._setViewerRegion()})}b._setViewerRegion(a)},_setViewerRegion:function(a){var b=
this.config,c=this.image,d=this.viewer,f=e.offset(c);c=m(c);var g=b.lensSize,j,k,i,l,s=!!a,y=this.bigImage;if(b.type==="follow"){if(s){i=g[0];l=g[1];j=a.x-i/2;k=a.y-l/2}}else{a=s?b.bigImageSize:m(y);l=q(a.height*g.height/c.height);i=q(a.width*g.width/c.width);if(s){j=f.left+c.width+b.offset[0];k=f.top+b.offset[1]}}i&&e.css(d,{width:i,height:l});j!==v&&e.offset(d,{left:j,top:k})},_onMouseMove:function(a){var b=this.config,c=b.type==="follow",d=this.viewer,f=this.lens;b=b.lensSize;var g=e.offset(this.image);
a={left:a.x-b[0],top:a.y-b[1]};f&&e.offset(f,a);c&&e.offset(d,a);var j=m(this.image),k=m(this.bigImage),i=f=0,l=q((a.left-g.left)*k.width/j.width);g=q((a.top-g.top)*k.height/j.height);if(c){f=b.width/2;i=b.height/2}d.scrollLeft=l+f;d.scrollTop=g+i},_showTimeoutMsg:function(){var a=this.config,b=this.viewer,c=h.get("p",b);if(!c){c=e.create("<p>");b.appendChild(c);e.removeClass(b,"ks-imagezoom-loading")}e.html(c,a.timeoutMsg)}});h.ImageZoom=n});
