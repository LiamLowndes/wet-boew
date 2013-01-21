/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-01-21 03:46 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var r,y,f="",q=pe.dic.get("%menu"),o=pe.dic.get("%search"),g,s,w="",l='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-'+((pe.rtl)?"left":"right")+'">'+pe.dic.get("%close")+"</a>",n="",t,d,k,m,j,h,x,z,u,v,p;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){x=b.menubar.find("ul.mb-menu li");r="<div "+l+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?g:b.bcrumb.children(":header")[0])).innerHTML;r+="<h1>"+q+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){p=b.bcrumb[0];r+='<section><div id="jqm-mb-location-text">'+p.innerHTML+"</div></section>";p.parentNode.removeChild(p)}else{r+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></div></section>";p=pe.secnav[0];p.parentNode.removeChild(p)}if(b.menubar.length!==0){f+="<section><div><h2>"+y+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(x,3,"a",true,true,"c",true,true)+"</div></div></section>"}r+='<div id="jqm-mb-menu"></div></nav></div></div></div>';w+=r;b.menu=f;n+='<li><a data-rel="popup" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+q+"</a></li>"}if(b.search.length!==0){s="<div "+l+' id="jqm-wb-search"><div data-role="header"><h1>'+o+"</h1>"+e+'</div><div data-role="content"><div>'+b.search[0].getElementsByTagName("form")[0].innerHTML+"</div></div></div>";w+=s;n+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+o+"</a></li>"}pe.bodydiv.append(w);if(n.length!==0){t=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+n+"</ul></div>");b.title.after(t)}j=document.getElementById("gcwu-lang");if(j!==null){d=j.getElementsByTagName("a");h='<div data-role="navbar"><ul>';for(u=0,v=d.length;u<v;u+=1){k=d[u];h+='<li><a href="'+k.href+'" data-theme="a">'+k.innerHTML+"</a></li>"}h+="</ul></div>";j=document.getElementById("gcwu-ef-lang").parentNode.innerHTML=h;j=document.getElementById("gcwu-other-lang");if(j!==null){j.parentNode.removeChild(j)}}if(b.sft.length!==0){d=b.sft.find("#gcwu-tctr a, .gcwu-col-head a").get();z=document.getElementById("gcwu-sft-in");if(b.gcft.length!==0){p=b.gcft[0];p.parentNode.removeChild(p)}}else{z=document.getElementById("gcwu-tc");if(z!==null){d=z.getElementsByTagName("a")}}if(z!==null){m='<ul class="ui-grid-a">';for(u=0,v=d.length;u<v;u+=1){k=d[u];m+='<li class="ui-block-'+(u%2!==0?"b":"a")+'"><a href="'+k.href+'" data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}m+="</ul>";z.id="";z.className="";z.setAttribute("data-role","footer");z.innerHTML=m}if(b.wmms.length!==0){p=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(p.cloneNode(true));p.parentNode.removeChild(p)}c(document).on("pagecreate",function(){if(b.menubar.length!==0){p=b.psnb[0];p.parentNode.removeChild(p)}if(b.search.length!==0){p=b.search[0];p.parentNode.removeChild(p)}if(n.length!==0){t.children().removeClass("wb-hide");var A=pe.bodydiv.find("#jqm-mb-menu");if(A.length!==0){A.append(b.menu);t.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){A.trigger("create");pe.menu.correctmobile(A)})}}function i(C,B,F,E){var D;c.mobile.showPageLoadingMsg();D=c.mobile.transitionHandlers.simultaneous("pop",B,F,E);D.done(function(){c.mobile.hidePageLoadingMsg()});return D}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("mobileviewloaded");return},desktopview:function(){var e=document.getElementById("gcwu-srchbx"),f,d;if(e.length!==0){f=e.getElementsByTagName("input");d=f.length;while(d--){f[d].setAttribute("data-role","none")}}}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));