var enc=encodeURIComponent,makeClickUrl=function(f,g,b){g=g?'\x26'+g:'';if(0<b.length){var l=b.indexOf('%2F%2F');0<l&&9>l&&(b=decodeURIComponent(b));b=-1==b.indexOf('://')?'http://'+b:b;f=2048>=b.length+enc(f+g).length?b+enc(f+g):b+enc(f)}else 2048>=g.length+f.length&&(f+=g);return f};
(function(){function f(h,a,b){var d=[],e;b&&(e=document.createElement(h));for(var m in a)b?e[m]=a[m]:d.push(m+"\x3d'"+a[m]+"'");return b?e:'\x3c'+h+' '+d.join(' ')+'\x3e\x3c/'+h+'\x3e'}function g(h){h+='';return h.length>n?h.substr(0,n):h}function b(h,a,b){void 0===b&&(b='');return h[a]?h[a]:b}function l(b){try{for(var a=[],c=0;c<b.length;c++){var d=b[c];a.push(d.id+':'+d.price+':'+d.quantity)}return a.join('|')}catch(e){return''}}function p(){if('undefined'!==typeof __GetI_context&&'app'==__GetI_context)return'tz\x3d'+
(new Date).getTimezoneOffset()+'\x26scr\x3d'+screen.width+'x'+screen.height+'x'+screen.colorDepth+'\x26r\x3d'+Math.floor(1E5*Math.random());var b=enc,a='',c='',d='',e=window;try{a=top.document.location}catch(m){try{c=document.location;if(c==top.location)a=c;else for(;;){a=e.document.location;e.document.referrer&&(d=e.document.referrer);if(e==e.parent)break;else e.document.referrer&&(a=d);e=e.parent}if(''==a||null==a)a=d?d:c}catch(f){d&&''!=d?a=d:''==a&&(a=c)}}var a=g(a),b='url\x3d'+b(a)+'\x26referrer\x3d',
a=enc,k;try{k=g(top.document.referrer)}catch(l){k=''}k=b+a(k)+'\x26js_disabled\x3dfalse\x26from_js\x3dtrue\x26r\x3d'+Math.floor(1E5*Math.random())+'\x26tz\x3d'+(new Date).getTimezoneOffset()+'\x26scr\x3d'+screen.width+'x'+screen.height+'x'+screen.colorDepth+'\x26pl\x3d';b=[];a=navigator.plugins;for(c=0;c<a.length;c++)b.push(a[c].name),b.push(','),b.push(a[c].filename),b.push(','),b.push(a[c].description),b.push(','),b.push(a[c].version),b.push(';');b=b.join('');for(i=a=0;i<b.length;i++)c=b.charCodeAt(i),
a=c+(a<<6)+(a<<16)-a;return k+a}function s(h){var a=h.pop();if(a)for(var c='undefined'==typeof __GetI_domain?'px.adhigh.net':__GetI_domain,d='undefined'==typeof __GetI_static_domain?c:__GetI_static_domain;a;){if('VIEW'==a.type)pix(c,'/p/tracking','site_id\x3d'+b(a,'site_id')+'\x26product_id\x3d'+b(a,'product_id')+'\x26product_price\x3d'+b(a,'product_price')+'\x26category_id\x3d'+b(a,'category_id')+'\x26user_data\x3d'+serializeUserData(b(a,'user_data'))+'\x26pixel_id\x3d'+b(a,'pixel_id')+'\x26'+p(),
!0,0,0,b(a,'iframe',!1));else if('CONVERSION'==a.type)pix(c,'/p/conversion','site_id\x3d'+b(a,'site_id')+'\x26conversion_id\x3d'+b(a,'conversion_id')+'\x26transaction_id\x3d'+b(a,'transaction_id')+'\x26revenue\x3d'+b(a,'revenue')+'\x26attributed\x3d'+b(a,'attributed','false')+'\x26pixel_id\x3d'+b(a,'pixel_id')+'\x26order\x3d'+l(b(a,'order',[]))+'\x26'+p(),!0,0,0,b(a,'iframe',!1));else if('CART_ADD'==a.type)pix(c,'/p/cart','site_id\x3d'+b(a,'site_id')+'\x26product_id\x3d'+b(a,'product_id','')+'\x26product_price\x3d'+
b(a,'product_price','')+'\x26order\x3d'+l(b(a,'order',[]))+'\x26'+p(),!0,0,0,b(a,'iframe',!1));else if('IMP'==a.type){var e=a.evId,f=p(),g='id\x3d'+e+'\x26s\x3d'+a.ssp+'\x26w\x3d'+enc(a.winPrice)+'\x26b\x3d'+enc(a.bidResponse)+'\x26';0<a.clPref.length&&(g+='cl\x3d'+enc(a.clPref)+'\x26');pix(c,'/p/imp',g+f,'true'===b(a,'async','true'),0,0,a.iframeHost,'1'===b(a,'iframe','0'));e='__GetI_callback_'+e;if(window[e])window[e](f,a);'true'==a.vt&&(__GetI_vt.push(a),pix(d,'/v','cb\x3d'+a.vt_cb,!0))}else if('AD'==
a.type){var f=b(a,'height'),e=b(a,'width'),g=pix,k=c,q='pid\x3d'+b(a,'publisher_id')+'\x26tid\x3d'+b(a,'tag_id')+'\x26w\x3d'+e+'\x26h\x3d'+f+'\x26purl\x3d'+enc(b(a,'url'))+'\x26pref\x3d'+enc(b(a,'referrer'))+'\x26prenc\x3d'+enc(b(a,'min_price_encrypted'))+'\x26pr\x3d'+b(a,'min_price'),a=b(a,'custom_params',{}),n=[],r=void 0;for(r in a)n.push('cu_'+r+'\x3d'+enc(a[r]));a=n.join('\x26');0<a.length&&(a='\x26'+a);g(k,'/p/ad',q+a+'\x26'+p(),!1,e,f)}a=h.pop()}}var t='text/javascript',q='script',n=400;pix=
function(b,a,c,d,e,g,l,k){e='undefined'==typeof __GetI_protocol?'':__GetI_protocol;e='https'==e||'https:'==document.location.protocol?'https://':'http://';b=e+b+(a+'.js?'+c);b={type:t,src:b};d?(b=f(q,b,!0),b.async=d,d=document.getElementsByTagName(q)[0],d.parentNode.insertBefore(b,d)):(d=f(q,b,!1),document.write(d))};serializeUserData=function(b){if(b&&Object.keys){for(var a=Object.keys(b),c='',d=0;d<a.length;d++)0<d&&(c+='|'),c+=a[d]+':'+b[a[d]];return c}return''};'undefined'!=typeof __GetI&&(null!=
__GetI&&__GetI)&&s(__GetI)})();