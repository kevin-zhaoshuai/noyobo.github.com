/*! Noyobo-blog - v0.0.1 
 * @Author: noyobo <noyobo@gmail.com>
 * Updata in 2014-04-06 11:15:20 AM
 * Copyright (c) NOYOBO
 */
function afterPjax(){$("#post__content a").attr("target","_blank"),CodePenEmbed.init();var a=$("#post__toc-ul");a.empty().append('<li class="post__toc-li post__toc-h1"><a href="#post__title" class="js-anchor-link">'+$("#post__title").text()+"</a></li>"),$("#post__content").children("h2,h3").each(function(){$(this).attr("id",function(){for(var a="",b="abcdefghijklmnopqrstuvwxyz",c=0;5>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}),a.append("H2"==$(this).prop("tagName")?'<li class="post__toc-li post__toc-h2"><a href="#'+$(this).attr("id")+'" class="js-anchor-link">'+$(this).text()+"</a></li>":'<li class="post__toc-li post__toc-h3"><a href="#'+$(this).attr("id")+'" class="js-anchor-link">'+$(this).text()+"</a></li>")}),$(".js-anchor-link").on("click",function(){var a=$(this.hash);container.animate({scrollTop:a.offset().top+container.scrollTop()-70},500,function(){a.addClass("flash").delay(700).queue(function(){$(this).removeClass("flash").dequeue()})})}),!!timer&&clearTimeout(timer),timer=setTimeout(function(){toggleDuoshuoComments("#ds_wrap")},300)}function toggleDuoshuoComments(a){var b,c=window.location.pathname;"/index.html"==c||"/"==c||""==c?(b=0,c="/index.html"):b=c.match(/\d+/g).join("");var d=document.createElement("div");d.setAttribute("data-thread-key",b),d.setAttribute("data-url",c),d.setAttribute("data-author-key","noyobo"),DUOSHUO.EmbedThread(d),jQuery(a).append(d)}$(window).width()<=1280&&$("#sidebar").addClass("mobile");var tag1=$(".pl__all"),sidebar=$("#sidebar"),container=$("#post"),content=$("#pjax"),button=$("#icon-arrow"),timer=null;$("#tags__ul li").on("click",function(){var a=$(this),b=a.data("tag");a.addClass("active").siblings().removeClass("active"),tag1.hide(),$("."+b).delay(50).fadeIn(350)}),tag1.on("click",function(){$(this).addClass("active").siblings().removeClass("active"),sidebar.hasClass("mobile")&&$("#sidebar, #pjax, #icon-arrow").addClass("fullscreen")}),$("#js-fullscreen").on("click",function(){button.hasClass("fullscreen")?(sidebar.removeClass("fullscreen"),button.removeClass("fullscreen"),content.delay(300).queue(function(){$(this).removeClass("fullscreen").dequeue()})):(sidebar.addClass("fullscreen"),button.addClass("fullscreen"),content.delay(200).queue(function(){$(this).addClass("fullscreen").dequeue()}))}),$("#mobile-avatar").on("click",function(){$("#sidebar, #pjax, #icon-arrow").addClass("fullscreen")}),$(document).pjax("#avatar, #mobile-avatar, .pl__all","#pjax",{fragment:"#pjax",timeout:1e4}),$(document).on({"pjax:click":function(){content.removeClass("fadeIn").addClass("fadeOut"),NProgress.start()},"pjax:start":function(){content.css({opacity:0})},"pjax:end":function(){NProgress.done(),container.scrollTop(0),content.css({opacity:1}).removeClass("fadeOut").addClass("fadeIn"),afterPjax()}});var CodePenEmbed={width:"100%",init:function(){this.showCodePenEmbeds(),this.listenToParentPostMessages()},showCodePenEmbeds:function(){for(var a=document.getElementsByClassName("codepen"),b=a.length-1;b>-1;b--){var c=this._getParamsFromAttributes(a[b]);c=this._convertOldDataAttributesToNewDataAttributes(c);var d=this._buildURL(c),e=this._buildIFrame(c,d);this._addIFrameToPage(a[b],e)}},_getParamsFromAttributes:function(a){for(var b={},c=a.attributes,d=0,e=c.length;e>d;d++)name=c[d].name,0===name.indexOf("data-")&&(b[name.replace("data-","")]=c[d].value);return b},_convertOldDataAttributesToNewDataAttributes:function(a){return a.href&&(a["slug-hash"]=a.href),a.type&&(a["default-tab"]=a.type),a.safe&&(a.animations="true"==a.safe?"run":"stop-after-5"),a},_buildURL:function(a){var b=this._getHost(a),c=a.user?a.user:"anon",d="?"+this._getGetParams(a),e=[b,c,"embed",a["slug-hash"]+d].join("/");return e.replace(/\/\//g,"//")},_getHost:function(a){return a.host?a.host:"file:"==document.location.protocol?"http://codepen.io":"//codepen.io"},_getGetParams:function(a){var b="";for(var c in a)""!==b&&(b+="&"),b+=c+"="+encodeURIComponent(a[c]);return b},_buildIFrame:function(a,b){var c={id:"cp_embed_"+a["slug-hash"].replace("/","_"),src:b,scrolling:"no",frameborder:"0",height:this._getHeight(a),allowTransparency:"true","class":"cp_embed_iframe",style:"width: "+this.width+"; overflow: hidden;"},d="<iframe ";for(var e in c)d+=e+'="'+c[e]+'" ';return d+="></iframe>"},_getHeight:function(a){return a.height?"auto"==a.height?300:a.height:300},_addIFrameToPage:function(a,b){if(a.parentNode){var c=document.createElement("div");c.innerHTML=b,a.parentNode.replaceChild(c,a)}else a.innerHTML=b},listenToParentPostMessages:function(){var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventListener=window[eventMethod],messageEvent="attachEvent"==eventMethod?"onmessage":"message";eventListener(messageEvent,function(e){try{var dataObj=eval("("+e.data+")"),iframe=document.getElementById("cp_embed_"+dataObj.hash);iframe&&(iframe.height=dataObj.height)}catch(err){}},!1)}};afterPjax();