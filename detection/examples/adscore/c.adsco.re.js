"function"!==typeof AdscoreInit&&(AdscoreInit=function(S,D,B){function A(c){function d(b,c){var d=b&2147483648;var g=c&2147483648;var n=b&1073741824;var p=c&1073741824;var e=(b&1073741823)+(c&1073741823);return n&p?e^2147483648^d^g:n|p?e&1073741824?e^3221225472^d^g:e^1073741824^d^g:e^d^g}function b(b,c,g,n,p,e,h){b=d(b,d(d(c&g|~c&n,p),h));return d(b<<e|b>>>32-e,c)}function g(b,c,g,n,p,e,h){b=d(b,d(d(c&n|g&~n,p),h));return d(b<<e|b>>>32-e,c)}function n(b,c,g,n,e,p,h){b=d(b,d(d(c^g^n,e),h));return d(b<<
p|b>>>32-p,c)}function p(b,c,g,n,p,e,h){b=d(b,d(d(g^(c|~n),p),h));return d(b<<e|b>>>32-e,c)}function e(b){var c="",d;for(d=0;3>=d;d++){var g=b>>>8*d&255;g="0"+g.toString(16);c+=g.substr(g.length-2,2)}return c}c=c.toString();if(""==c)return"";var q=[];c=function(b){b=b.replace(/\r\n/g,"\n");for(var c="",d=0;d<b.length;d++){var g=b.charCodeAt(d);128>g?c+=String.fromCharCode(g):(127<g&&2048>g?c+=String.fromCharCode(g>>6|192):(c+=String.fromCharCode(g>>12|224),c+=String.fromCharCode(g>>6&63|128)),c+=
String.fromCharCode(g&63|128))}return c}(c);q=function(b){var c=b.length;var d=c+8;for(var g=16*((d-d%64)/64+1),n=Array(g-1),e,p=0;p<c;)d=(p-p%4)/4,e=p%4*8,n[d]|=b.charCodeAt(p)<<e,p++;n[(p-p%4)/4]|=128<<p%4*8;n[g-2]=c<<3;n[g-1]=c>>>29;return n}(c);var l=1732584193;var m=4023233417;var h=2562383102;var k=271733878;for(c=0;c<q.length;c+=16){var r=l;var u=m;var y=h;var w=k;l=b(l,m,h,k,q[c+0],7,3614090360);k=b(k,l,m,h,q[c+1],12,3905402710);h=b(h,k,l,m,q[c+2],17,606105819);m=b(m,h,k,l,q[c+3],22,3250441966);
l=b(l,m,h,k,q[c+4],7,4118548399);k=b(k,l,m,h,q[c+5],12,1200080426);h=b(h,k,l,m,q[c+6],17,2821735955);m=b(m,h,k,l,q[c+7],22,4249261313);l=b(l,m,h,k,q[c+8],7,1770035416);k=b(k,l,m,h,q[c+9],12,2336552879);h=b(h,k,l,m,q[c+10],17,4294925233);m=b(m,h,k,l,q[c+11],22,2304563134);l=b(l,m,h,k,q[c+12],7,1804603682);k=b(k,l,m,h,q[c+13],12,4254626195);h=b(h,k,l,m,q[c+14],17,2792965006);m=b(m,h,k,l,q[c+15],22,1236535329);l=g(l,m,h,k,q[c+1],5,4129170786);k=g(k,l,m,h,q[c+6],9,3225465664);h=g(h,k,l,m,q[c+11],14,643717713);
m=g(m,h,k,l,q[c+0],20,3921069994);l=g(l,m,h,k,q[c+5],5,3593408605);k=g(k,l,m,h,q[c+10],9,38016083);h=g(h,k,l,m,q[c+15],14,3634488961);m=g(m,h,k,l,q[c+4],20,3889429448);l=g(l,m,h,k,q[c+9],5,568446438);k=g(k,l,m,h,q[c+14],9,3275163606);h=g(h,k,l,m,q[c+3],14,4107603335);m=g(m,h,k,l,q[c+8],20,1163531501);l=g(l,m,h,k,q[c+13],5,2850285829);k=g(k,l,m,h,q[c+2],9,4243563512);h=g(h,k,l,m,q[c+7],14,1735328473);m=g(m,h,k,l,q[c+12],20,2368359562);l=n(l,m,h,k,q[c+5],4,4294588738);k=n(k,l,m,h,q[c+8],11,2272392833);
h=n(h,k,l,m,q[c+11],16,1839030562);m=n(m,h,k,l,q[c+14],23,4259657740);l=n(l,m,h,k,q[c+1],4,2763975236);k=n(k,l,m,h,q[c+4],11,1272893353);h=n(h,k,l,m,q[c+7],16,4139469664);m=n(m,h,k,l,q[c+10],23,3200236656);l=n(l,m,h,k,q[c+13],4,681279174);k=n(k,l,m,h,q[c+0],11,3936430074);h=n(h,k,l,m,q[c+3],16,3572445317);m=n(m,h,k,l,q[c+6],23,76029189);l=n(l,m,h,k,q[c+9],4,3654602809);k=n(k,l,m,h,q[c+12],11,3873151461);h=n(h,k,l,m,q[c+15],16,530742520);m=n(m,h,k,l,q[c+2],23,3299628645);l=p(l,m,h,k,q[c+0],6,4096336452);
k=p(k,l,m,h,q[c+7],10,1126891415);h=p(h,k,l,m,q[c+14],15,2878612391);m=p(m,h,k,l,q[c+5],21,4237533241);l=p(l,m,h,k,q[c+12],6,1700485571);k=p(k,l,m,h,q[c+3],10,2399980690);h=p(h,k,l,m,q[c+10],15,4293915773);m=p(m,h,k,l,q[c+1],21,2240044497);l=p(l,m,h,k,q[c+8],6,1873313359);k=p(k,l,m,h,q[c+15],10,4264355552);h=p(h,k,l,m,q[c+6],15,2734768916);m=p(m,h,k,l,q[c+13],21,1309151649);l=p(l,m,h,k,q[c+4],6,4149444226);k=p(k,l,m,h,q[c+11],10,3174756917);h=p(h,k,l,m,q[c+2],15,718787259);m=p(m,h,k,l,q[c+9],21,3951481745);
l=d(l,r);m=d(m,u);h=d(h,y);k=d(k,w)}return(e(l)+e(m)+e(h)+e(k)).toLowerCase()}function H(c){if(!c||c.constructor!==Array)return"";for(var d="!"+c.length.toString()+";",b=0;b<c.length;b++){var g=c[b];"object"==typeof g&&null!=g&&g.constructor===Array?d+=H(g):(g=(g=c[b])&&g.toString?g.toString().substring(0,1024).replace(/\\/gi,"\\\\").replace(/!/gi,"\\!").replace(/;/gi,"\\;"):"",d+=g+";")}return d}function I(c,d){d=void 0===d?null:d;try{var b=new XMLHttpRequest}catch(n){b=new ActiveXObject("Microsoft.XMLHTTP")}try{b.open("POST",
"//adsco.re/",!0);var g=function(c){4!=b.readyState?null!==d&&d(""):null!==d&&d(b.responseText)};"onload"in b?b.onload=g:"onreadystatechange"in b&&(b.onreadystatechange=g);b.setRequestHeader("Content-Length",c.length);b.send(c)}catch(n){}}function J(c,d,b){var g=new Date;g.setTime(g.getTime()+864E5*b);b="expires="+g.toUTCString();document.cookie=c+"="+d+";"+b+";path=/"}function z(){return"undefined"!==typeof performance&&"undefined"!==typeof performance.now?performance.now():+new Date}function y(c){return-1<
K.indexOf(c)?"#"+K.indexOf(c):0===c?"0":1===c?"1":!1===c?"0":!0===c?"1":c instanceof Array?c:c&&c.toString?c.toString():""}function v(c){L.push(y(c))}function e(c){try{c=eval(c)}catch(d){c=""}v(y(c))}function M(){for(var c=!0,d=0;d<u.length;d++)-1==u[d]?c=!1:1!=N[d]&&(N[d]=1);if(c||F&&399<z()-G||!F&&4499<z()-G){clearInterval(O);if(0==P){P=!0;for(c=0;c<u.length;c++)v(u[c]);v(Math.round(z()-T))}c=H(L);try{var b=U.compressToUTF16(c),g=new ArrayBuffer(2*b.length),n=new Uint16Array(g);d=0;for(var p=b.length;d<
p;d++)n[d]=b.charCodeAt(d);var e=g}catch(q){e=c}I(e,Q);return!0}return!1}function V(){r=function(){try{var c=z();console.log("        ".repeat(1E4));return Math.round(100*(z()-c))/100}catch(d){return-1}}();v(r);r=function(){function c(){for(var b="",c=0;32>c;c++)b+="0123456789abcdefghijklmnoprstuwxyz".charAt(Math.floor(34*Math.random()));return b}var d=function(b){try{var c=localStorage.getItem(b);if(c&&null!=c)return c}catch(E){}b+="=";c=decodeURIComponent(document.cookie).split(";");for(var d=0;d<
c.length;d++){for(var p=c[d];" "==p.charAt(0);)p=p.substring(1);if(0==p.indexOf(b))return p.substring(b.length,p.length)}return""}("a");""==d&&(d=c());(function(b,c,d){try{localStorage.setItem(b,c)}catch(E){}var g=new Date;g.setTime(g.getTime()+864E5*d);d="expires="+g.toUTCString();document.cookie=b+"="+c+";"+d+";path=/"})("a",d,7);return d}();v(r);r=function(){try{for(var c=function(b,d){return 1E-8>b?d:b<d?c(d-Math.floor(d/b)*b,b):b==d?b:c(d,b)},d=z()/1E3,b=z()/1E3-d,g=0;50>g;g++)b=c(b,z()/1E3-
d);return Math.round(1/b)}catch(n){}}();v(r);r=function(){try{null[0]()}catch(d){var c=d}return c.stack}();v(r);r=function(){try{if("_phantom"in window||"callPhantom"in window)return 1;if("__phantomas"in window)return 2;if("Buffer"in window)return 3;if("emit"in window)return 4;if("spawn"in window)return 5;if("webdriver"in window&&1==window.webdriver||"webdriver"in window.navigator&&1==window.navigator.webdriver)return 6;if("domAutomation"in window)return 7;try{if(window.document.documentElement.getAttribute("webdriver"))return 8}catch(c){}return"_Selenium_IDE_Recorder"in
window?9:"__webdriver_script_fn"in document?10:0}catch(c){return-1}}();v(r);r=function(){function c(c,b){try{var d="",e;for(e in c)d+=e,b&&null!=c[e]&&null!=c[e].toString&&(d+=c[e].toString());return d}catch(p){return""}}return A(c(window.clientInformation,!1)+c(document,!1)+c(navigator,!1)+c(document.documentElement.style,!1))}();v(r);r=function(){try{for(window.adscore_jsv=0,a=11;25>=a;a++){var c=document.createElement("script");c.setAttribute("language","javascript"+(a/10).toString());c.text='window.adscore_jsv="'+
(a/10).toString()+'";';document.body.appendChild(c);document.body.removeChild(c)}}catch(d){return""}c=window.adscore_jsv;delete window.adscore_jsv;return c}();v(r);r=(new Date(0)).toLocaleString();v(r);r=function(){for(var c=[1,Math.PI,Math.PI/2,1/Math.PI,1E-300,1E-310,2,-100],d="",b=0;b<c.length;b++)t=c[b],d+=Math.exp(t),d+=Math.sin(t),d+=Math.cos(t),d+=Math.tan(t),d+=Math.atan2(t,2),d+=Math.pow(t,-100);return A(d)}();v(r);r=function(){try{var c=function(b){for(var c=1E4,d=2E3;1<d;)window.matchMedia("("+
b+": "+(c+1)+"px)").matches?(c+=d,d=Math.floor(d/2)):c-=d;return c},d=-1;d=window.matchMedia("(pointer: coarse)").matches?1:window.matchMedia("(pointer: fine)").matches?2:0;var b=-1;b=window.matchMedia("(hover: none)").matches?1:window.matchMedia("(hover: hover)").matches?2:0;var g=-1;g=window.matchMedia("(color-gamut: rec2020)").matches?3:window.matchMedia("(color-gamut: p3)").matches?2:window.matchMedia("(color-gamut: srgb)").matches?1:0;return[c("min-device-width"),c("min-device-height"),d,b,g]}catch(n){return["",
"",-1,-1]}}();v(r);r=function(){for(var c=[],d=0;d<navigator.mimeTypes.length;d++)c.push([y(navigator.mimeTypes[d].type),y(navigator.mimeTypes[d].description)]);return c}();v(r);r=function(){for(var c=[],d=0;d<navigator.plugins.length;d++){var b=[];b.push(y(navigator.plugins[d].name));b.push(y(navigator.plugins[d].filename));b.push(y(navigator.plugins[d].description));c.push(b)}return c}();v(r);r=function(){function c(b){if("adsco.re"!=document.location.host)return"1";try{var c=window.open(b)}catch(n){return"1"}if(!c||
c.closed||"undefined"==typeof c.closed||0==c.outerHeight||0==c.outerWidth)return"1";try{c.focus(),c.close()}catch(n){return"1"}return"0"}var d=c("about:blank");"0"==d&&(d=c("http://google.com/"));return d}();v(r);e("typeof window.chrome");e("document.location");e("window.title");e("document.hidden");e("document.visibilityState");e("!(top==window)");e("window.locationbar.visible");e("window.menubar.visible");e("window.personalbar.visible");e("window.scrollbars.visible");e("window.statusbar.visible");
e("window.toolbar.visible");e("typeof window.WebAssembly");e("top.frames.length");e("window.history.length");e("!!document.fullscreen||!!document.mozFullscreen||!!document.webkitIsFullScreen||!!document.fullScreenElement");e("window.navigator.standalone");e("document.referrer");e("document.innerWidth");e("document.innerHeight");e("document.documentElement.clientWidth");e("document.documentElement.clientHeight");e("window.screenX||window.screenLeft");e("window.screenY||window.screenTop");e("window.outerWidth");
e("window.outerHeight");e("window.innerWidth");e("window.innerHeight");e("window.offscreenBuffering");e("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN");e("window.performance.memory.jsHeapSizeLimit");e("screen.orientation.type");e("screen.top");e("screen.left");e("screen.availTop");e("screen.availLeft");e("screen.width");e("screen.height");e("screen.availWidth");e("screen.availHeight");e("screen.colorDepth");e("screen.pixelDepth");e("screen.deviceYDPI");e("screen.deviceXDPI");e("window.devicePixelRatio");
e("navigator.userAgent");e("navigator.appVersion");e("navigator.appCodeName");e("navigator.appMinorVersion");e("navigator.product");e("navigator.productSub");e("navigator.vendor");e("navigator.vendorSub");e("navigator.buildID");e("navigator.platform");e("navigator.cpuClass");e("navigator.oscpu");e("navigator.hardwareConcurrency");e("navigator.maxTouchPoints");e("navigator.msMaxTouchPoints");e("navigator.language");e("navigator.languages.toString()");e("navigator.browserLanguage");e("navigator.userLanguage");
e("navigator.systemLanguage");e("navigator.onLine");e("navigator.deviceMemory");e("navigator.doNotTrack");e("navigator.msDoNotTrack");e("navigator.cookieEnabled");e("navigator.battery.level");e("navigator.battery.charging");e("performance.navigation.type");e("performance.navigation.redirectCount");e("window.opener==null");e("window.opener.location.href");e("window.opener.screenX||window.opener.screenLeft");e("window.opener.screenY||window.opener.screenTop");e("window.opener.innerWidth");e("window.opener.innerHeight");
e("window.opener.outerWidth");e("window.opener.outerHeight");e("window.opener.offscreenBuffering");e("+new Date");e("(new Date).getTimezoneOffset()");e("navigator.connection.type");e("navigator.connection.effectieType");e("navigator.connection.downlinkMax");e("navigator.connection.downlink");e("navigator.connection.rtt");e("navigator.connection.saveData");e("window.ScriptEngineMajorVersion();");e("window.ScriptEngineMinorVersion();");e("window.ScriptEngineBuildVersion();");e("performance.timing.redirectEnd");
e("performance.timing.fetchStart");e("performance.timing.domainLookupStart");e("performance.timing.domainLookupEnd");e("performance.timing.connectStart");e("performance.timing.connectEnd");e("performance.timing.secureConnectionStart");e("performance.timing.requestStart");e("performance.timing.responseStart");e("performance.timing.responseEnd");e("typeof window.ondevicelight");e("typeof document.ontouchstart");r=function(){try{for(var c=[],d=0;5>d;d++)c.push(Math.random());return c}catch(b){return-1}}();
v(r);r=function(){try{var c=new Date,d=c.getTimezoneOffset();c.setTime(0);for(var b="",g=0;1317731928E3>g;g+=864E5)c.setTime(g),newTime=c.getTimezoneOffset(),newTime!=d&&(b+=newTime+"@"+Math.round(g/86400)+"\t",d=newTime);return b}catch(n){return""}}();v(A(r));a:{try{document.createEvent("TouchEvent");r=1;break a}catch(c){}r=0}v(r);r=function(){var c=document.documentElement.getBoundingClientRect(),d=[];d.push(y(c.left));d.push(y(c.top));d.push(y(c.right));d.push(y(c.bottom));d.push(y(c.x));d.push(y(c.y));
return d}();v(r);r=function(){try{if(0==C)return"";var c=C,d=[],b=c.getExtension("WEBGL_debug_renderer_info");d.push(y(c.getParameter(c.VERSION)));d.push(y(c.getParameter(c.SHADING_LANGUAGE_VERSION)));d.push(y(c.getParameter(c.VENDOR)));d.push(y(c.getParameter(c.RENDERER)));b?(d.push(y(c.getParameter(b.UNMASKED_RENDERER_WEBGL))),d.push(y(c.getParameter(b.UNMASKED_VENDOR_WEBGL)))):(d.push(""),d.push(""));return d}catch(g){return""}}();v(r);r=function(){try{var c=z(),d=document.createElement("canvas");
d.width=200;d.height=200;var b=d.getContext("2d");b.beginPath();b.rect(0,0,200,200);b.fillStyle="black";b.fill();var g=d.toDataURL();b.beginPath();b.rect(0,0,200,200);b.fillStyle="white";b.fill();var e=d.toDataURL(),p=b.createLinearGradient(0,0,200,0);p.addColorStop(0,"blue");p.addColorStop(1,"white");b.fillStyle=p;b.fillRect(0,0,200,200);b.rotate(1*Math.PI/180);b.font="14px 'Arial'";b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(0,15,200,15);b.beginPath();b.moveTo(0,0);b.quadraticCurveTo(50,
150,180,180);b.bezierCurveTo(190,-40,100,50,100,50);b.lineTo(30,10);b.lineWidth=1;b.strokeStyle="#222222";b.stroke();b.fillStyle="#069";b.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8",2,15);b.fillStyle="rgba(102,204,0,0.7)";b.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8",4,17);p=d.toDataURL();z();f=z()-c;z();p=A(p.substr(p.length-100));bt=A(g.substr(g.length-100)+e.substr(e.length-100)).substr(0,8);z();c=[];c.push(bt);c.push(p);c.push("");c.push("");return c}catch(E){return""}}();
v(r);r=function(){try{var c=function(c){b.clearColor(0,0,0,1);b.enable(b.DEPTH_TEST);b.depthFunc(b.LEQUAL);b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);return"["+c[0]+", "+c[1]+"]"};if(0==C)return"";var d="";var b=C;if(!b)return null;var g=[],e=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,e);var p=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);b.bufferData(b.ARRAY_BUFFER,p,b.STATIC_DRAW);e.itemSize=3;e.numItems=3;var r=b.createProgram(),q=b.createShader(b.VERTEX_SHADER);b.shaderSource(q,
"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");b.compileShader(q);var l=b.createShader(b.FRAGMENT_SHADER);b.shaderSource(l,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");b.compileShader(l);b.attachShader(r,q);b.attachShader(r,l);b.linkProgram(r);b.useProgram(r);r.vertexPosAttrib=b.getAttribLocation(r,
"attrVertex");r.offsetUniform=b.getUniformLocation(r,"uniformOffset");b.enableVertexAttribArray(r.vertexPosArray);b.vertexAttribPointer(r.vertexPosAttrib,e.itemSize,b.FLOAT,!1,0,0);b.uniform2f(r.offsetUniform,1,1);b.drawArrays(b.TRIANGLE_STRIP,0,e.numItems);null!=b.canvas&&(d=A(b.canvas.toDataURL()));g.push(b.getSupportedExtensions().join(";"));g.push(c(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE)));g.push(c(b.getParameter(b.ALIASED_POINT_SIZE_RANGE)));g.push(b.getParameter(b.ALPHA_BITS));g.push(b.getContextAttributes().antialias?
"yes":"no");g.push(b.getParameter(b.BLUE_BITS));g.push(b.getParameter(b.DEPTH_BITS));g.push(b.getParameter(b.GREEN_BITS));g.push(function(b){var c,d=b.getExtension("EXT_texture_filter_anisotropic")||b.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||b.getExtension("MOZ_EXT_texture_filter_anisotropic");return d?(c=b.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===c&&(c=2),c):null}(b));g.push(b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS));g.push(b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE));
g.push(b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS));g.push(b.getParameter(b.MAX_RENDERBUFFER_SIZE));g.push(b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS));g.push(b.getParameter(b.MAX_TEXTURE_SIZE));g.push(b.getParameter(b.MAX_VARYING_VECTORS));g.push(b.getParameter(b.MAX_VERTEX_ATTRIBS));g.push(b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS));g.push(b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS));g.push(c(b.getParameter(b.MAX_VIEWPORT_DIMS)));g.push(b.getParameter(b.RED_BITS));g.push(b.getParameter(b.RENDERER));
g.push(b.getParameter(b.SHADING_LANGUAGE_VERSION));g.push(b.getParameter(b.STENCIL_BITS));g.push(b.getParameter(b.VENDOR));g.push(b.getParameter(b.VERSION));b.getShaderPrecisionFormat&&(g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.HIGH_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.HIGH_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.HIGH_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.MEDIUM_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,
b.MEDIUM_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.MEDIUM_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.LOW_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.LOW_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.LOW_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.HIGH_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.HIGH_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,
b.HIGH_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.MEDIUM_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.MEDIUM_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.MEDIUM_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_FLOAT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_FLOAT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_FLOAT).rangeMax),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,
b.HIGH_INT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.HIGH_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.HIGH_INT).rangeMax),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.MEDIUM_INT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.MEDIUM_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.MEDIUM_INT).rangeMax),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.LOW_INT).precision),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,
b.LOW_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.VERTEX_SHADER,b.LOW_INT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.HIGH_INT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.HIGH_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.HIGH_INT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.MEDIUM_INT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.MEDIUM_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,
b.MEDIUM_INT).rangeMax),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_INT).precision),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_INT).rangeMin),g.push(b.getShaderPrecisionFormat(b.FRAGMENT_SHADER,b.LOW_INT).rangeMax));c=[];c.push(d);c.push(A(g.join(",")));return c}catch(m){return""}}();v(r)}function W(){r=function(){try{u[0]=-1;if("getBattery"in navigator)var c=function(b){u[0]=-2};else u[0]=-2;var d=function(b){var c=[];c.push(y(Math.round(100*b.level)));c.push(y(b.charging));
u[0]=c};navigator.getBattery()["catch"](c).then(d);navigator.getBattery()["catch"](c).then(d);navigator.getBattery()["catch"](c).then(d)}catch(b){u[0]=-2}}();r=function(){u[1]=-1;try{var c=document.getElementsByTagName("body")[0],d=document.createElement("img");d.style.width=null;d.style.height=null;d.src="//127.0.0.222/nonexistent";d.onerror=function(){var b=[];b.push(y(d.width));b.push(y(d.height));u[1]=b;c.removeChild(d)};d.onload=function(){c.removeChild(d)};c.appendChild(d)}catch(b){u[1]=-2}}();
r=function(){function c(b,c){var d=0,g=!1,e=window.setInterval(function(){b()&&(window.clearInterval(e),c(g));50<d++&&(window.clearInterval(e),g=!0,c(g))},10)}function d(b){b=b.toLowerCase();return 0===b.indexOf("msie")&&0===b.indexOf("trident")?!1:(b=/(?:msie|rv:)\s?([\d\.]+)/.exec(b))&&10<=parseInt(b[1],10)?!0:!1}u[2]=-1;(function(b){if(window.webkitRequestFileSystem)window.webkitRequestFileSystem(window.TEMPORARY,1,function(){e=!1},function(b){e=!0});else if(window.indexedDB&&/Firefox/.test(window.navigator.userAgent)){try{var g=
window.indexedDB.open("test")}catch(p){var e=!0}"undefined"===typeof e&&c(function(){return"done"===g.readyState?!0:!1},function(b){b||(e=g.result?!1:!0)})}else if(d(window.navigator.userAgent)){e=!1;try{window.indexedDB||(e=!0)}catch(p){e=!0}}else if(window.localStorage&&/Safari/.test(window.navigator.userAgent)){try{window.localStorage.setItem("test",1)}catch(p){e=!0}"undefined"===typeof e&&(e=!1,window.localStorage.removeItem("test"))}c(function(){return"undefined"!==typeof e?!0:!1},function(c){b(e)})})(function(b){u[2]=
b?1:0})}();r=function(){u[3]=1==window.hidden?-2:-1;try{var c=[];c.threshold=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1];if("IntersectionObserver"in window){var d=new IntersectionObserver(function(b){u[3]=Math.round(100*b[0].intersectionRatio);d.unobserve(document.documentElement);d.disconnect()},c);d.observe(document.documentElement)}else u[3]=-2}catch(b){u[3]=-2}}();r=function(){u[4]=-1;try{try{var c=new XMLHttpRequest}catch(d){c=new ActiveXObject("Microsoft.XMLHTTP")}c.open("GET",document.location.protocol+
"//6.adsco.re/",!0);c.onreadystatechange=function(){4==c.readyState&&(u[4]=c.responseText,c.onreadystatechange=null)};c.onerror=function(){u[4]=-2};c.send()}catch(d){u[4]=-2}};r=function(){u[5]=-1;try{ed=function(c){var d,b,g,e,p;var r=p=e=0;c.forEach(function(c){d+=c.kind+c.label;if("communications"==c.deviceId||"default"==c.deviceId)d+=c.deviceId;"audioinput"==c.kind&&(r=1);"audiooutput"==c.kind&&(e=1);"videoinput"==c.kind&&(p=1);b+=c.kind+c.label+c.deviceId+c.groupId;""!=c.deviceId&&"default"!=
c.deviceId&&"communications"!=c.deviceId&&(g=c.deviceId)});c=[];c.push(y(A(d)));c.push(y(A(b)));c.push(y(g));c.push(r+2*e+4*p);u[5]=c},"mediaDevices"in navigator?navigator.mediaDevices.enumerateDevices()["catch"](function(c){u[5]=-2}).then(ed):u[5]=-2}catch(c){u[5]=-2}}();r=function(){u[6]=-1;try{window.addEventListener("deviceorientation",function(c){var d=[];d.push(c.beta);d.push(c.gamma);d.push(c.alpha);u[6]=d})}catch(c){u[6]=-2}}();r=function(){u[7]=-1;try{window.addEventListener("devicemotion",
function(c){var d=[];d.push(c.accelerationIncludingGravity.x);d.push(c.accelerationIncludingGravity.y);d.push(c.accelerationIncludingGravity.z);d.push(c.interval);u[7]=d})}catch(c){u[7]=-2}}();r=function(){u[8]=-2;try{var c=function(c){c=c||window.event;-2==u[8]&&(u[8]=[c.screenX,c.screenY,c.clientX,c.clientY])};window.addEventListener("mouseover",c);window.addEventListener("mousemove",c);window.addEventListener("mouseenter",c)}catch(d){u[8]=-2}}();r=function(){u[9]=-1;try{var c,d,b=document.createElement("iframe");
b.style.display="none";var g=String(Math.random());b.src=document.location.protocol+"//c.adsco.re/xi#"+g;b.onload=function(){c=z()};window.addEventListener("message",function(p){if(("https://c.adsco.re"===p.origin||"http://c.adsco.re"===p.origin)&&"string"===typeof p.data&&p.data.substring(0,g.length+1)=="#"+g){b.parentNode.removeChild(b);d=z();var n=[];n.push(p.data);n.push(e);n.push(c);n.push(d);u[9]=n}},!1);var e=z();document.body.appendChild(b)}catch(p){u[9]=-2,F=!0}}();r=function(){u[10]=-1;
try{"webkitTemporaryStorage"in navigator?navigator.webkitTemporaryStorage.queryUsageAndQuota(function(c,d){u[10]=d},function(c){u[10]=-2}):u[10]=-2}catch(c){u[10]=-2}}();r=function(){try{if(u[11]=-1,window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,window.RTCPeerConnection){var c=new RTCPeerConnection({iceServers:[]});c.createDataChannel("");c.onicecandidate=function(c){c&&c.candidate&&c.candidate.candidate&&(-1===u[11]&&(u[11]=[]),u[11].push(y(c.candidate.candidate)))};
c.createOffer(c.setLocalDescription.bind(c),function(c){})}else u[11]=-2}catch(d){u[11]=-2}}()}function R(){W();V();G=z();M()||(O=setInterval(M,100))}function Q(c){var d=c.split("\n");if(2!=d.length)return null!=B&&B("error"),!1;c=d[0];d=d[1];null!=B&&B(c);if(""==d)return!1;J("token",d,+new Date+21600);"undefined"!==typeof Storage&&(localStorage.setItem("token",d),localStorage.setItem("tokenExp",+new Date+21600))}function X(c){"ok"!=c.substr(0,2)?("undefined"!==typeof Storage&&(localStorage.removeItem("token"),
localStorage.removeItem("tokenExp")),J("token","",0),R()):Q(c)}D=void 0===D?"":D;B=void 0===B?null:B;var K="Netscape;Gecko;Mozilla;WebKit;Shockwave Flash;pepflashplayer.dll;Widevine Content Decryption Module;widevinecdmadapter.dll;Chrome PDF Viewer;mhjfbmdgcfjbbpaeojofohoefgiehjai;Native Client;internal-nacl-plugin;internal-pdf-viewer;application/x-shockwave-flash;application/futuresplash;application/x-ppapi-widevine-cdm;application/pdf;application/x-nacl;Native Client Executable;application/x-pnacl;Portable Native Client Executable;application/x-google-chrome-pdf;Portable Document Format;WebGL 1.0 (OpenGL ES 2.0 Chromium);WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium);Google Inc.;experimental-webgl;Internet Explorer;Microsoft Internet Explorer;FutureSplash movie;Adobe Flash movie;WebGL 1.0;WebGL GLSL ES 1.0;Microsoft;experimental-webgl".split(";");
var U=function(){var c=String.fromCharCode,d={compressToBase64:function(b){if(null==b)return"";b=d._compress(b,6,function(b){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)});switch(b.length%4){default:case 0:return b;case 1:return b+"===";case 2:return b+"==";case 3:return b+"="}},compressToUTF16:function(b){return null==b?"":d._compress(b,15,function(b){return c(b+32)})+" "},compressToUint8Array:function(b){b=d.compress(b);for(var c=new Uint8Array(2*b.length),
e=0,p=b.length;e<p;e++){var r=b.charCodeAt(e);c[2*e]=r>>>8;c[2*e+1]=r%256}return c},compressToEncodedURIComponent:function(b){return null==b?"":d._compress(b,6,function(b){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(b)})},compress:function(b){return d._compress(b,16,function(b){return c(b)})},_compress:function(b,c,d){if(null==b)return"";var e,g={},q={},l,m,h="",k=2,r=3,n=2,u=[],w=0,x=0,y;for(y=0;y<b.length;y+=1)if(l=b.charAt(y),Object.prototype.hasOwnProperty.call(g,
l)||(g[l]=r++,q[l]=!0),m=h+l,Object.prototype.hasOwnProperty.call(g,m))h=m;else{if(Object.prototype.hasOwnProperty.call(q,h)){if(256>h.charCodeAt(0)){for(e=0;e<n;e++)w<<=1,x==c-1?(x=0,u.push(d(w)),w=0):x++;var v=h.charCodeAt(0);for(e=0;8>e;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1}else{v=1;for(e=0;e<n;e++)w=w<<1|v,x==c-1?(x=0,u.push(d(w)),w=0):x++,v=0;v=h.charCodeAt(0);for(e=0;16>e;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1}k--;0==k&&(k=Math.pow(2,n),n++);delete q[h]}else for(v=
g[h],e=0;e<n;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1;k--;0==k&&(k=Math.pow(2,n),n++);g[m]=r++;h=String(l)}if(""!==h){if(Object.prototype.hasOwnProperty.call(q,h)){if(256>h.charCodeAt(0)){for(e=0;e<n;e++)w<<=1,x==c-1?(x=0,u.push(d(w)),w=0):x++;v=h.charCodeAt(0);for(e=0;8>e;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1}else{v=1;for(e=0;e<n;e++)w=w<<1|v,x==c-1?(x=0,u.push(d(w)),w=0):x++,v=0;v=h.charCodeAt(0);for(e=0;16>e;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1}k--;
0==k&&(k=Math.pow(2,n),n++);delete q[h]}else for(v=g[h],e=0;e<n;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1;k--;0==k&&n++}v=2;for(e=0;e<n;e++)w=w<<1|v&1,x==c-1?(x=0,u.push(d(w)),w=0):x++,v>>=1;for(;;)if(w<<=1,x==c-1){u.push(d(w));break}else x++;return u.join("")}};return d}();Array.prototype.indexOf||(Array.prototype.indexOf=function(c,d){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),e=b.length>>>0;if(0===e)return-1;var n=d|0;if(n>=e)return-1;for(n=
Math.max(0<=n?n:e-Math.abs(n),0);n<e;){if(n in b&&b[n]===c)return n;n++}return-1});var F=!1,P=!1,r,C=0,T=z();var u=[];var N=[];var L=[];v(1523569405);v(S);v(D);v(function(){for(var c=document.createElement("canvas"),d=null,b=["webgl2","webgl","experimental-webgl","webkit-3d","moz-webgl"],e=0;2>e;e++)for(var n=0;5>n;n++){var p=z();try{d=c.getContext(b[n])}catch(E){continue}p=z()-p;if(d)return C=d,[b[n],Math.round(p)]}return["",0]}());var G,O;(function(){a:{var c=decodeURIComponent(document.cookie).split(";");
for(var d=0;d<c.length;d++){for(var b=c[d];" "==b.charAt(0);)b=b.substring(1);if(0==b.indexOf("token=")){c=b.substring(6,b.length);break a}}c=""}""==c&&"undefined"!==typeof Storage&&"integer"==typeof localStorage.getItem("tokenExp")&&(c=+new Date<localStorage.getItem("tokenExp")?localStorage.getItem("token"):"");if(""==c||"string"!==typeof c)return!1;d=c.split(",",1);if(21600<Math.round(z()/1E3)-d[0])return!1;I(c,X);return!0})()||R()});