(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function ha(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&da(c,d,{configurable:!0,writable:!0,value:f})}}
ha("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;da(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
ha("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function q(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ra(){this.G=!1;this.j=null;this.g=void 0;this.f=1;this.l=this.A=0;this.C=this.i=null}
function sa(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ra.prototype.H=function(a){this.g=a};
function ta(a,b){a.i={cf:b,Ed:!0};a.f=a.A||a.l}
ra.prototype["return"]=function(a){this.i={"return":a};this.f=this.l};
function ua(a,b,c){a.f=c;return{value:b}}
ra.prototype.Ia=function(a){this.f=a};
function va(a){a.A=2;a.l=3}
function wa(a){a.A=0;a.i=null}
function xa(a){a.C=[a.i];a.A=0;a.l=0}
function ya(a){var b=a.C.splice(0)[0];(b=a.i=a.i||b)?b.Ed?a.f=a.A||a.l:void 0!=b.Ia&&a.l<b.Ia?(a.f=b.Ia,a.i=null):a.f=a.l:a.f=4}
function za(a){this.f=new ra;this.g=a}
function Aa(a,b){sa(a.f);var c=a.f.j;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.f.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.G=!1,e;var f=e.value}catch(g){return a.f.j=null,ta(a.f,g),Ca(a)}a.f.j=null;d.call(a.f,f);return Ca(a)}
function Ca(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.G=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ta(a.f,c)}a.f.G=!1;if(a.f.i){b=a.f.i;a.f.i=null;if(b.Ed)throw b.cf;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){sa(a.f);a.f.j?b=Ba(a,a.f.j.next,b,a.f.H):(a.f.H(b),b=Ca(a));return b};
this["throw"]=function(b){sa(a.f);a.f.j?b=Ba(a,a.f.j["throw"],b,a.f.H):(ta(a.f,b),b=Ca(a));return b};
this["return"]=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a,b){var c=new Da(new za(b));qa&&a.prototype&&qa(c,a.prototype);return c}
ha("Reflect",function(a){return a?a:{}});
ha("Reflect.construct",function(){return la});
ha("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
ha("Promise",function(a){function b(g){this.D=0;this.Ta=void 0;this.f=[];this.l=!1;var h=this.g();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.j(m)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.g=function(){function g(m){return function(n){l||(l=!0,m.call(h,n))}}
var h=this,l=!1;return{resolve:g(this.F),reject:g(this.i)}};
b.prototype.F=function(g){if(g===this)this.i(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.M(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.C(g):this.j(g)}};
b.prototype.C=function(g){var h=void 0;try{h=g.then}catch(l){this.i(l);return}"function"==typeof h?this.P(h,g):this.j(g)};
b.prototype.i=function(g){this.A(2,g)};
b.prototype.j=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.D)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.D);this.D=g;this.Ta=h;2===this.D&&this.K();this.G()};
b.prototype.K=function(){var g=this;e(function(){if(g.H()){var h=fa.console;"undefined"!==typeof h&&h.error(g.Ta)}},1)};
b.prototype.H=function(){if(this.l)return!1;var g=fa.CustomEvent,h=fa.Event,l=fa.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.Ta;return l(g)};
b.prototype.G=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.M=function(g){var h=this.g();g.Nb(h.resolve,h.reject)};
b.prototype.P=function(g,h){var l=this.g();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(t,w){return"function"==typeof t?function(I){try{m(t(I))}catch(aa){n(aa)}}:w}
var m,n,u=new b(function(t,w){m=t;n=w});
this.Nb(l(g,m),l(h,n));return u};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Nb=function(g,h){function l(){switch(m.D){case 1:g(m.Ta);break;case 2:h(m.Ta);break;default:throw Error("Unexpected state: "+m.D);}}
var m=this;null==this.f?f.g(l):this.f.push(l);this.l=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=p(g),n=m.next();!n.done;n=m.next())d(n.value).Nb(h,l)})};
b.all=function(g){var h=p(g),l=h.next();return l.done?d([]):new b(function(m,n){function u(I){return function(aa){t[I]=aa;w--;0==w&&m(t)}}
var t=[],w=0;do t.push(void 0),w++,d(l.value).Nb(u(t.length-1),n),l=h.next();while(!l.done)})};
return b});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ha("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ha("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
ha("Object.setPrototypeOf",function(a){return a||qa});
function Ga(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ga(d,e)&&(a[e]=d[e])}return a};
ha("Object.assign",function(a){return a||Ha});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
ha("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
ha("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
ha("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ha("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
ha("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
ha("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
ha("WeakMap",function(a){function b(l){this.f=(h+=Math.random()+1).toString();if(l){l=p(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!Ga(l,g)){var m=new c;da(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n["delete"](l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!Ga(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&Ga(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&Ga(l,g)&&Ga(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&Ga(l,g)&&Ga(l[g],this.f)?delete l[g][this.f]:!1};
return b});
ha("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
ha("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.f;return ia(function(){if(m){for(;m.head!=h.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=h.g[m];if(n&&Ga(h.g,m))for(var u=0;u<n.length;u++){var t=n[u];if(l!==l&&t.key!==t.key||l===t.key)return{id:m,list:n,index:u,da:t}}return{id:m,list:n,index:-1,da:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=p(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(p([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.g[m.id]=[]);m.da?m.da.value=l:(m.da={next:this.f,previous:this.f.previous,head:this.f,key:h,value:l},m.list.push(m.da),this.f.previous.next=m.da,this.f.previous=m.da,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.da&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.da.previous.next=h.da.next,h.da.next.previous=h.da.previous,h.da.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).da};
e.prototype.get=function(h){return(h=d(this,h).da)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ha("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ga(b,d)&&c.push([d,b[d]]);return c}});
ha("Set",function(a){function b(c){this.f=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var Ja=Ja||{},r=this||self;function v(a,b,c){a=a.split(".");c=c||r;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ka(a){if(a&&a!=r)return La(a.document);null===Ma&&(Ma=La(r.document));return Ma}
var Na=/^[\w+/_-]+[=]{0,2}$/,Ma=null;function La(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Na.test(a)?a:""}
function x(a,b){for(var c=a.split("."),d=b||r,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Oa(){}
function Pa(a){a.ea=void 0;a.getInstance=function(){return a.ea?a.ea:a.ea=new a}}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(1E9*Math.random()>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Wa:y=Xa;return y.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function z(){return Date.now()}
function A(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oi=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
function $a(a){var b=null,c=r.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(d){r.console&&r.console.error(d.message)}return b}
;function ab(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(ab,Error);ab.prototype.name="CustomError";var bb;function cb(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ab.call(this,d+c[e])}
A(cb,ab);cb.prototype.name="AssertionError";function db(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},ib=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},kb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},lb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function mb(a,b,c){b=nb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function nb(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function ob(a,b){a:{var c="string"===typeof a?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function pb(a,b){return 0<=fb(a,b)}
function qb(a,b){pb(a,b)||a.push(b)}
function rb(a,b){var c=fb(a,b),d;(d=0<=c)&&tb(a,c);return d}
function tb(a,b){Array.prototype.splice.call(a,b,1)}
function ub(a,b){var c=nb(a,b,void 0);0<=c&&tb(a,c)}
function vb(a){return Array.prototype.concat.apply([],arguments)}
function wb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function xb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function yb(a,b,c,d){return Array.prototype.splice.apply(a,zb(arguments,1))}
function zb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ab(a,b){if(!Ra(a)||!Ra(b)||a.length!=b.length)return!1;for(var c=a.length,d=Bb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function Cb(a,b){return a>b?1:a<b?-1:0}
function Bb(a,b){return a===b}
function Db(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=zb(d,e,e+8192);f=Db.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function Eb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Fb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Gb(a){var b=0,c;for(c in a)b++;return b}
function Hb(a,b){a:{for(c in a)if(a[c]==b){var c=!0;break a}c=!1}return c}
function Ib(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Jb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Kb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function Lb(a){for(var b in a)return!1;return!0}
function Mb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Ob(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Pb(a[c]);return b}
var Qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Qb.length;f++)c=Qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Sb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return Sb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Tb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Ub;function Vb(){void 0===Ub&&(Ub=$a("goog#html"));return Ub}
;function Wb(a,b){this.f=a===Xb&&b||"";this.g=Yb}
Wb.prototype.Ha=!0;Wb.prototype.oa=function(){return this.f};
function Zb(a){return a instanceof Wb&&a.constructor===Wb&&a.g===Yb?a.f:"type_error:Const"}
function $b(a){return new Wb(Xb,a)}
var Yb={},Xb={};var ac=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),bc=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");function cc(a,b){this.g=b===dc?a:""}
cc.prototype.Ha=!0;cc.prototype.oa=function(){return this.g.toString()};
cc.prototype.Fc=!0;cc.prototype.f=function(){return 1};
function ec(a){if(a instanceof cc&&a.constructor===cc)return a.g;Qa(a);return"type_error:TrustedResourceUrl"}
var dc={};function fc(a){var b=Vb();a=b?b.createScriptURL(a):a;return new cc(a,dc)}
;var gc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function hc(a,b){if(b)a=a.replace(ic,"&amp;").replace(jc,"&lt;").replace(kc,"&gt;").replace(lc,"&quot;").replace(mc,"&#39;").replace(nc,"&#0;");else{if(!pc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ic,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(jc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(kc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(lc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(mc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(nc,"&#0;"))}return a}
var ic=/&/g,jc=/</g,kc=/>/g,lc=/"/g,mc=/'/g,nc=/\x00/g,pc=/[\x00&<>"']/;
function qc(a,b){for(var c=0,d=gc(String(a)).split("."),e=gc(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=rc(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||rc(0==h[2].length,0==l[2].length)||rc(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function rc(a,b){return a<b?-1:a>b?1:0}
;function sc(a,b){this.g=b===tc?a:""}
sc.prototype.Ha=!0;sc.prototype.oa=function(){return this.g.toString()};
sc.prototype.Fc=!0;sc.prototype.f=function(){return 1};
function uc(a){if(a instanceof sc&&a.constructor===sc)return a.g;Qa(a);return"type_error:SafeUrl"}
var vc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,wc=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;function xc(a){a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(wc);return b&&vc.test(b[1])?new sc(a,tc):null}
var yc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zc(a){if(a instanceof sc)return a;a="object"==typeof a&&a.Ha?a.oa():String(a);return yc.test(a)?new sc(a,tc):xc(a)}
function Ac(a,b){if(a instanceof sc)return a;a="object"==typeof a&&a.Ha?a.oa():String(a);if(b&&/^data:/i.test(a)){var c=xc(a)||Bc;if(c.oa()==a)return c}yc.test(a)||(a="about:invalid#zClosurez");return new sc(a,tc)}
var tc={},Bc=new sc("about:invalid#zClosurez",tc);function Cc(a,b){this.f=b===Dc?a:""}
Cc.prototype.Ha=!0;Cc.prototype.oa=function(){return this.f};
var Dc={},Ec=new Cc("",Dc);function Fc(a){if(a instanceof sc)return'url("'+uc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof Wb?Zb(a):Gc(String(a));if(/[{;}]/.test(a))throw new cb("Value does not allow [{;}], got: %s.",[a]);return a}
function Gc(a){var b=a.replace(Hc,"$1").replace(Hc,"$1").replace(Ic,"url");if(Jc.test(b)){if(Kc.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!Lc(a))return"zClosurez"}else return"zClosurez";return Mc(a)}
function Lc(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Jc=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Ic=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Hc=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Kc=/\/\*/;function Mc(a){return a.replace(Ic,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,l){f=h;return l});
b=(zc(d)||Bc).oa();return c+f+b+f+e})}
;var Nc;a:{var Oc=r.navigator;if(Oc){var Pc=Oc.userAgent;if(Pc){Nc=Pc;break a}}Nc=""}function C(a){return-1!=Nc.indexOf(a)}
;function Qc(){return C("Firefox")||C("FxiOS")}
function Rc(){return C("Safari")&&!(Sc()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Qc()||C("Silk")||C("Android"))}
function Sc(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function Tc(){return C("Android")&&!(Sc()||Qc()||C("Opera")||C("Silk"))}
;function Uc(a,b,c){this.g=c===Vc?a:"";this.i=b}
Uc.prototype.Fc=!0;Uc.prototype.f=function(){return this.i};
Uc.prototype.Ha=!0;Uc.prototype.oa=function(){return this.g.toString()};
function Wc(a){if(a instanceof Uc&&a.constructor===Uc)return a.g;Qa(a);return"type_error:SafeHtml"}
function Xc(a){if(a instanceof Uc)return a;var b="object"==typeof a,c=null;b&&a.Fc&&(c=a.f());return Yc(hc(b&&a.Ha?a.oa():String(a)),c)}
var Zc=/^[a-zA-Z0-9-]+$/,$c={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},ad={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};function bd(a){if(!Zc.test(a))throw Error("");if(a.toUpperCase()in ad)throw Error("");}
function cd(a){function b(f){Array.isArray(f)?B(f,b):(f=Xc(f),e.push(Wc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Xc(dd),d=c.f(),e=[];B(a,b);return Yc(e.join(Wc(c).toString()),d)}
function ed(a){return cd(Array.prototype.slice.call(arguments))}
var Vc={};function Yc(a,b){var c=Vb();c=c?c.createHTML(a):a;return new Uc(c,b,Vc)}
function fd(a,b,c){var d=null,e="";if(b)for(n in b)if(Object.prototype.hasOwnProperty.call(b,n)){if(!Zc.test(n))throw Error("");var f=b[n];if(null!=f){var g=n;var h=f;if(h instanceof Wb)h=Zb(h);else if("style"==g.toLowerCase()){f=void 0;if(!Sa(h))throw Error("");if(!(h instanceof Cc)){var l="";for(f in h)if(Object.prototype.hasOwnProperty.call(h,f)){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var m=h[f];null!=m&&(m=Array.isArray(m)?ib(m,Fc).join(" "):Fc(m),
l+=f+":"+m+";")}h=l?new Cc(l,Dc):Ec}h instanceof Cc&&h.constructor===Cc?f=h.f:(Qa(h),f="type_error:SafeStyle");h=f}else{if(/^on/i.test(g))throw Error("");if(g.toLowerCase()in $c)if(h instanceof cc)h=ec(h).toString();else if(h instanceof sc)h=uc(h);else if("string"===typeof h)h=(zc(h)||Bc).oa();else throw Error("");}h.Ha&&(h=h.oa());g=g+'="'+hc(String(h))+'"';e+=" "+g}}var n="<"+a+e;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===Tb[a.toLowerCase()]?n+=">":(d=ed(c),n+=">"+Wc(d).toString()+"</"+a+">",d=
d.f());(a=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(a)?d=0:d=null);return Yc(n,d)}
var dd=new Uc(r.trustedTypes&&r.trustedTypes.emptyHTML||"",0,Vc),gd=Yc("<br>",0);function hd(a,b){Zb(a);Zb(a);return Yc(b,null)}
;var id=eb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Wc(dd);return!b.parentElement});
function jd(a,b){if(id())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wc(b)}
function kd(a,b){var c=b instanceof sc?b:Ac(b);a.href=uc(c)}
function ld(a,b){var c=b instanceof sc?b:Ac(b,/^data:image\//i.test(b));a.src=uc(c)}
function md(a,b){a.src=ec(b);var c=Ka(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
function nd(a,b){var c=b instanceof sc?b:Ac(b);a.href=uc(c)}
function od(a,b,c,d){a=a instanceof sc?a:Ac(a);b=b||r;c=c instanceof Wb?Zb(c):c||"";return b.open(uc(a),c,d,void 0)}
;function pd(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function qd(a){return encodeURIComponent(String(a))}
function rd(a){return decodeURIComponent(a.replace(/\+/g," "))}
function sd(a){return a=hc(a,void 0)}
function td(a){return-1!=a.indexOf("&")?"document"in r?ud(a):vd(a):a}
function ud(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=r.document.createElement("div");return a.replace(wd,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=hd($b("Single HTML entity."),d+" "),jd(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function vd(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var wd=/&([^;\s<&]+);?/g,xd={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},yd={"'":"\\'"};function zd(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Ad(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Bd(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var Cd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Dd(a){return a.match(Cd)}
function Ed(a){return a?decodeURI(a):a}
function Fd(a){return Ed(Dd(a)[3]||null)}
function Gd(a){var b=Dd(a);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Hd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?rd(f):"")}}
function Id(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Jd(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Jd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+qd(b)))}
function Kd(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Jd(a[d],a[d+1],c);return c.join("&")}
function Ld(a){var b=[],c;for(c in a)Jd(c,a[c],b);return b.join("&")}
function Md(a,b){var c=2==arguments.length?Kd(arguments[1],0):Kd(arguments,1);return Id(a,c)}
function Nd(a,b){var c=Ld(b);return Id(a,c)}
var Od=/#|$/;function Pd(a){Qd();return Yc(a,null)}
function Rd(a){Qd();return fc(a)}
var Qd=Oa;function Sd(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
function Td(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
function Ud(a){a.length?Vd(a.shift(),function(){Ud(a)}):Wd()}
function Xd(a){return"chrome-extension://"+a+"/cast_sender.js"}
function Vd(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);md(d,Rd(a));(document.head||document.documentElement).appendChild(d)}
function Wd(){var a=Td();a&&a(!1,"No cast extension found")}
function Yd(){if(Zd){var a=2,b=Td(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Vd("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Wd,c)}}
function ae(){Yd();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Ud(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
var Zd=Sd("loadCastFramework")||Sd("loadCastApplicationFramework"),be=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function ce(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(l){try{h(b.next(l))}catch(m){e(m)}}
function g(l){try{h(b["throw"](l))}catch(m){e(m)}}
function h(l){l.done?d(l.value):(new c(function(m){m(l.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function de(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function ee(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function fe(){return ee()||C("iPad")||C("iPod")}
;function ge(a){ge[" "](a);return a}
ge[" "]=Oa;function he(a,b){try{return ge(a[b]),!0}catch(c){}return!1}
function ie(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)}
;var je=C("Opera"),D=C("Trident")||C("MSIE"),ke=C("Edge"),le=ke||D,me=C("Gecko")&&!(-1!=Nc.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ne=-1!=Nc.toLowerCase().indexOf("webkit")&&!C("Edge"),oe=C("Macintosh"),pe=C("Windows"),qe=C("Android"),re=ee(),se=C("iPad"),te=C("iPod"),ue=fe();function ve(){var a=r.document;return a?a.documentMode:void 0}
var we;a:{var xe="",ye=function(){var a=Nc;if(me)return/rv:([^\);]+)(\)|;)/.exec(a);if(ke)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ne)return/WebKit\/(\S+)/.exec(a);if(je)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ye&&(xe=ye?ye[1]:"");if(D){var ze=ve();if(null!=ze&&ze>parseFloat(xe)){we=String(ze);break a}}we=xe}var Ae=we,Be={};function Ce(a){return ie(Be,a,function(){return 0<=qc(Ae,a)})}
function De(a){return Number(Ee)>=a}
var Fe;if(r.document&&D){var Ge=ve();Fe=Ge?Ge:parseInt(Ae,10)||void 0}else Fe=void 0;var Ee=Fe;var He=Qc(),Ie=ee()||C("iPod"),Je=C("iPad"),Ke=Tc(),Le=Sc(),Me=Rc()&&!fe();var Ne={},Oe=null;
function Pe(a,b){Ra(a);void 0===b&&(b=0);if(!Oe){Oe={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ne[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Oe[h]&&(Oe[h]=g)}}}c=Ne[b];d=[];for(e=0;e<a.length;e+=3){var l=a[e],m=(f=e+1<a.length)?a[e+1]:0,n=(g=e+2<a.length)?a[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|n>>6;n&=63;g||(n=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[n]||"")}return d.join("")}
;var Qe=window;function Re(a){var b=x("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||r.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Se(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Te[c])c=Te[c];else{c=String(c);if(!Te[c]){var f=/function\s+([^\(]+)/m.exec(c);Te[c]=f?f[1]:"[Anonymous]"}c=Te[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Se(a,b){b||(b={});b[Ue(a)]=!0;var c=a.stack||"",d=a.Pi;d&&!b[Ue(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Se(d,b));return c}
function Ue(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Te={};function Ve(){}
;var We={};function Xe(a){this.f=a||{cookie:""}}
k=Xe.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.nj;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Hd}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=gc(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Hd:0,path:b,domain:c});return d};
k.Aa=function(){return Ye(this).keys};
k.qa=function(){return Ye(this).values};
k.isEmpty=function(){return!this.f.cookie};
k.clear=function(){for(var a=Ye(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ye(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=gc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ze=new Xe("undefined"==typeof document?null:document);var $e=!D||De(9),af=!me&&!D||D&&De(9)||me&&Ce("1.9.1"),bf=D&&!Ce("9"),cf=D||je||ne;function df(a,b,c){return a+c*(b-a)}
;function ef(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=ef.prototype;k.clone=function(){return new ef(this.x,this.y)};
k.equals=function(a){return a instanceof ef&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function ff(a,b){return new ef(a.x-b.x,a.y-b.y)}
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function gf(a,b){this.width=a;this.height=b}
k=gf.prototype;k.clone=function(){return new gf(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function hf(a){return a?new jf(kf(a)):bb||(bb=new jf)}
function E(a){return lf(document,a)}
function lf(a,b){return"string"===typeof b?a.getElementById(b):b}
function mf(a){return lf(document,a)}
function nf(a,b,c){return of(document,a,b,c)}
function pf(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):of(document,"*",a,b)}
function F(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=qf("*",a,b);return d||null}
function of(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&pb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function qf(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):of(d,a,b,c)[0]||null}
function rf(a,b){Eb(b,function(c,d){c&&"object"==typeof c&&c.Ha&&(c=c.oa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:sf.hasOwnProperty(d)?a.setAttribute(sf[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var sf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function tf(a){a=a.document;a=uf(a)?a.documentElement:a.body;return new gf(a.clientWidth,a.clientHeight)}
function vf(a){var b=wf(a);a=xf(a);return D&&Ce("10")&&a.pageYOffset!=b.scrollTop?new ef(b.scrollLeft,b.scrollTop):new ef(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function wf(a){return a.scrollingElement?a.scrollingElement:!ne&&uf(a)?a.documentElement:a.body||a.documentElement}
function xf(a){return a.parentWindow||a.defaultView}
function yf(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!$e&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',sd(g.name),'"');if(g.type){f.push(' type="',sd(g.type),'"');var h={};Rb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=zf(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):rf(f,g));2<d.length&&Af(e,f,d,2);return f}
function Af(a,b,c,d){function e(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(;d<c.length;d++){var f=c[d];if(!Ra(f)||Sa(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(Sa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}B(g?wb(f):f,e)}}}
function Bf(a){return zf(document,a)}
function zf(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Cf(a){var b=document,c=zf(b,"DIV");D?(a=ed(gd,a),jd(c,a),c.removeChild(c.firstChild)):jd(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function uf(a){return"CSS1Compat"==a.compatMode}
function Df(a,b){Af(kf(a),a,arguments,1)}
function Ef(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ff(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Gf(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function Hf(a,b){var c=b.cloneNode(!0).childNodes;for(Ef(a);c.length;)a.appendChild(c[0])}
function If(a){return af&&void 0!=a.children?a.children:hb(a.childNodes,function(b){return 1==b.nodeType})}
function Jf(a){return void 0!==a.firstElementChild?a.firstElementChild:Kf(a.firstChild,!0)}
function Kf(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Lf(a){return Sa(a)&&1==a.nodeType}
function Mf(a){var b;if(cf&&!(D&&Ce("9")&&!Ce("10")&&r.SVGElement&&a instanceof r.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Lf(b)?b:null}
function Nf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function kf(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Of(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{Ef(a);var c=kf(a);a.appendChild(c.createTextNode(String(b)))}}
function Pf(a,b){var c=[];return Qf(a,b,c,!0)?c[0]:void 0}
function Qf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Qf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Rf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Sf={IMG:" ",BR:"\n"};function Tf(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Uf(a)||Vf(a)):Uf(a)&&Vf(a))&&D){var c;"function"!==typeof a.getBoundingClientRect||D&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Uf(a){return D&&!Ce("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Vf(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Wf(a){if(bf&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Xf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");bf||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Xf(a,b,c){if(!(a.nodeName in Rf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Sf)b.push(Sf[a.nodeName]);else for(a=a.firstChild;a;)Xf(a,b,c),a=a.nextSibling}
function Yf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Zf(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&pb(f.className.split(/\s+/),c))},!0,d)}
function G(a,b){return Yf(a,null,b,void 0)}
function Zf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function jf(a){this.f=a||r.document||document}
k=jf.prototype;k.yc=function(){return lf(this.f,void 0)};
k.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
k.createElement=function(a){return zf(this.f,a)};
k.appendChild=function(a,b){a.appendChild(b)};
k.isElement=Lf;function $f(a){var b=ag;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function bg(){var a=[];$f(function(b){a.push(b)});
return a}
var ag={Ph:"allow-forms",Qh:"allow-modals",Rh:"allow-orientation-lock",Sh:"allow-pointer-lock",Th:"allow-popups",Uh:"allow-popups-to-escape-sandbox",Vh:"allow-presentation",Wh:"allow-same-origin",Xh:"allow-scripts",Yh:"allow-top-navigation",Zh:"allow-top-navigation-by-user-activation"},cg=eb(function(){return bg()});
function dg(){var a=Bf("IFRAME"),b={};B(cg(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function eg(){this.H=this.H;this.G=this.G}
eg.prototype.H=!1;eg.prototype.S=function(){return this.H};
eg.prototype.dispose=function(){this.H||(this.H=!0,this.L())};
function fg(a,b){a.H?b():(a.G||(a.G=[]),a.G.push(b))}
eg.prototype.L=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function gg(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function hg(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=hg.prototype;k.getHeight=function(){return this.bottom-this.top};
k.clone=function(){return new hg(this.top,this.right,this.bottom,this.left)};
function ig(a,b){return a&&b?b instanceof hg?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function jg(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function kg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
kg.prototype.clone=function(){return new kg(this.left,this.top,this.width,this.height)};
kg.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
kg.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
kg.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var lg={};function mg(){}
function ng(a,b){if(b!==lg)throw Error("Bad secret");this.f=a}
q(ng,mg);ng.prototype.toString=function(){return this.f};new ng("about:blank",lg);new ng("about:invalid#zTSz",lg);function og(a,b,c){if("string"===typeof b)(b=pg(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=pg(c,d);f&&(c.style[f]=e)}}
var qg={};function pg(a,b){var c=qg[b];if(!c){var d=Ad(b);c=d;void 0===a.style[d]&&(d=(ne?"Webkit":me?"Moz":D?"ms":je?"O":null)+Bd(d),void 0!==a.style[d]&&(c=d));qg[b]=c}return c}
function rg(a,b){var c=kf(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function sg(a,b){return rg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function tg(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function ug(a){if(D&&!De(8))return a.offsetParent;var b=kf(a),c=sg(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=sg(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function vg(a){for(var b=new hg(0,Infinity,Infinity,0),c=hf(a),d=c.f.body,e=c.f.documentElement,f=wf(c.f);a=ug(a);)if(!(D&&0==a.clientWidth||ne&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=sg(a,"overflow")){var g=wg(a),h=new ef(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=tf(xf(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function wg(a){var b=kf(a),c=new ef(0,0);var d=b?kf(b):document;d=!D||De(9)||uf(hf(d).f)?d.documentElement:d.body;if(a==d)return c;a=tg(a);b=vf(hf(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function xg(a){return wg(a).x}
function yg(a){a=tg(a);return new ef(a.left,a.top)}
function zg(a,b,c){if(b instanceof gf)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=Ag(b,!0);a.style.height=Ag(c,!0)}
function Ag(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Cg(a){var b=Dg;if("none"!=sg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Dg(a){var b=a.offsetWidth,c=a.offsetHeight,d=ne&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=tg(a),new gf(a.right-a.left,a.bottom-a.top)):new gf(b,c)}
function Eg(a){var b=wg(a);a=Cg(a);return new kg(b.x,b.y,a.width,a.height)}
function Fg(a){return"rtl"==sg(a,"direction")}
function Gg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Hg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Gg(a,c):0}
var Ig={thin:2,medium:4,thick:6};function Jg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ig?Ig[c]:Gg(a,c)}
;var Kg=(new Date).getTime();function Lg(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
Lg.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Mg(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ng(a){r.setTimeout(function(){throw a;},0)}
var Og;function Pg(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Bf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){r.setTimeout(e,0)}}
;function Qg(){this.g=this.f=null}
var Sg=new Lg(function(){return new Rg},function(a){a.reset()});
Qg.prototype.add=function(a,b){var c=Sg.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Qg.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Rg(){this.next=this.scope=this.Fa=null}
Rg.prototype.set=function(a,b){this.Fa=a;this.scope=b;this.next=null};
Rg.prototype.reset=function(){this.next=this.scope=this.Fa=null};function Tg(a,b){Ug||Vg();Wg||(Ug(),Wg=!0);Xg.add(a,b)}
var Ug;function Vg(){if(r.Promise&&r.Promise.resolve){var a=r.Promise.resolve(void 0);Ug=function(){a.then(Yg)}}else Ug=function(){var b=Yg;
"function"!==typeof r.setImmediate||r.Window&&r.Window.prototype&&!C("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?(Og||(Og=Pg()),Og(b)):r.setImmediate(b)}}
var Wg=!1,Xg=new Qg;function Yg(){for(var a;a=Xg.remove();){try{a.Fa.call(a.scope)}catch(b){Ng(b)}Mg(Sg,a)}Wg=!1}
;function Zg(a){this.D=0;this.Ta=void 0;this.hb=this.Ma=this.Ja=null;this.Tb=this.xc=!1;if(a!=Oa)try{var b=this;a.call(void 0,function(c){$g(b,2,c)},function(c){$g(b,3,c)})}catch(c){$g(this,3,c)}}
function ah(){this.next=this.context=this.onRejected=this.i=this.f=null;this.g=!1}
ah.prototype.reset=function(){this.context=this.onRejected=this.i=this.f=null;this.g=!1};
var bh=new Lg(function(){return new ah},function(a){a.reset()});
function ch(a,b,c){var d=bh.get();d.i=a;d.onRejected=b;d.context=c;return d}
function dh(a){if(a instanceof Zg)return a;var b=new Zg(Oa);$g(b,2,a);return b}
function eh(a){return new Zg(function(b,c){c(a)})}
function fh(a,b,c){gh(a,b,c,null)||Tg(Ya(b,a))}
function hh(a){return new Zg(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,n){d--;e[m]=n;0==d&&b(e)},g=function(m){c(m)},h=0,l;h<a.length;h++)l=a[h],fh(l,Ya(f,h),g);
else b(e)})}
Zg.prototype.then=function(a,b,c){return ih(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Zg.prototype.$goog_Thenable=!0;function jh(a,b){var c=ch(b,b,void 0);c.g=!0;kh(a,c)}
function lh(a,b){return ih(a,null,b,void 0)}
Zg.prototype.cancel=function(a){if(0==this.D){var b=new mh(a);Tg(function(){nh(this,b)},this)}};
function nh(a,b){if(0==a.D)if(a.Ja){var c=a.Ja;if(c.Ma){for(var d=0,e=null,f=null,g=c.Ma;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.D&&1==d?nh(c,b):(f?(d=f,d.next==c.hb&&(c.hb=d),d.next=d.next.next):oh(c),ph(c,e,3,b)))}a.Ja=null}else $g(a,3,b)}
function kh(a,b){a.Ma||2!=a.D&&3!=a.D||qh(a);a.hb?a.hb.next=b:a.Ma=b;a.hb=b}
function ih(a,b,c,d){var e=ch(null,null,null);e.f=new Zg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof mh?g(h):f(l)}catch(m){g(m)}}:g});
e.f.Ja=a;kh(a,e);return e.f}
Zg.prototype.rh=function(a){this.D=0;$g(this,2,a)};
Zg.prototype.sh=function(a){this.D=0;$g(this,3,a)};
function $g(a,b,c){0==a.D&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.D=1,gh(c,a.rh,a.sh,a)||(a.Ta=c,a.D=b,a.Ja=null,qh(a),3!=b||c instanceof mh||rh(a,c)))}
function gh(a,b,c,d){if(a instanceof Zg)return kh(a,ch(b||Oa,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Sa(a))try{var f=a.then;if("function"===typeof f)return sh(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function sh(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function qh(a){a.xc||(a.xc=!0,Tg(a.df,a))}
function oh(a){var b=null;a.Ma&&(b=a.Ma,a.Ma=b.next,b.next=null);a.Ma||(a.hb=null);return b}
Zg.prototype.df=function(){for(var a;a=oh(this);)ph(this,a,this.D,this.Ta);this.xc=!1};
function ph(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.Tb;a=a.Ja)a.Tb=!1;if(b.f)b.f.Ja=null,th(b,c,d);else try{b.g?b.i.call(b.context):th(b,c,d)}catch(e){uh.call(null,e)}Mg(bh,b)}
function th(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function rh(a,b){a.Tb=!0;Tg(function(){a.Tb&&uh.call(null,b)})}
var uh=Ng;function mh(a){ab.call(this,a)}
A(mh,ab);mh.prototype.name="cancel";function vh(a){this.f=a;a.then(y(function(){},this),function(){},this)}
function wh(a,b,c){a.f.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})}
function xh(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=yh(a,b).then(function(f){return f.apply(null,d)});
return new vh(e)}
var zh={};function yh(a,b){var c=zh[b];if(c)return c;c=(c=x(b))?dh(c):(new Zg(function(d,e){var f=(new jf(document)).createElement("SCRIPT");f.async=!0;md(f,fc(Zb(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};
f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=x(b);
if(!d)throw Error("Failed to load "+b+" from "+a);return d});
return zh[b]=c}
;function Ah(a){this.f=a}
Ah.prototype.i=function(a){wh(this.f,"startFeedback",arguments)};
Ah.prototype.j=function(a){wh(this.f,"startHelp",arguments)};
Ah.prototype.g=function(a){wh(this.f,"loadChatSupport",arguments)};
function Bh(a,b){var c=b||{};c=xh(Ch,"help.service.Lazy.create",a,{apiKey:c.apiKey||c.apiKey,environment:c.Wi||c.environment,helpCenterPath:c.Zi||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),nonce:c.nonce||c.nonce,productData:c.productData||c.productData,receiverUri:c.jj||c.receiverUri,renderApiUri:c.lj||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window});return new Ah(c)}
var Ch=$b("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");function Dh(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Eh=window,Fh=document,Gh=Eh.location;function Hh(){}
var Ih=/\[native code\]/;function Jh(a,b,c){return a[b]=a[b]||c}
function Kh(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Lh(){var a;if((a=Object.create)&&Ih.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Mh=Jh(Eh,"gapi",{});var Nh;Nh=Jh(Eh,"___jsl",Lh());Jh(Nh,"I",0);Jh(Nh,"hel",10);function Oh(){var a=Gh.href;if(Nh.dpo)var b=Nh.h;else{b=Nh.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ph(a){var b=Jh(Nh,"PQ",[]);Nh.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Qh(a){return Jh(Jh(Nh,"H",Lh()),a,Lh())}
;function Rh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(u){for(var t=g,w=0;64>w;w+=4)t[w/4]=u[w]<<24|u[w+1]<<16|u[w+2]<<8|u[w+3];for(w=16;80>w;w++)u=t[w-3]^t[w-8]^t[w-14]^t[w-16],t[w]=(u<<1|u>>>31)&4294967295;u=e[0];var I=e[1],aa=e[2],ba=e[3],$d=e[4];for(w=0;80>w;w++){if(40>w)if(20>w){var sb=ba^I&(aa^ba);var oc=1518500249}else sb=I^aa^ba,oc=1859775393;else 60>w?(sb=I&aa|ba&(I|aa),oc=2400959708):(sb=I^aa^ba,oc=3395469782);sb=((u<<5|u>>>27)&4294967295)+sb+$d+oc+t[w]&4294967295;$d=ba;ba=aa;aa=(I<<30|I>>>2)&4294967295;I=u;u=sb}e[0]=e[0]+u&4294967295;
e[1]=e[1]+I&4294967295;e[2]=e[2]+aa&4294967295;e[3]=e[3]+ba&4294967295;e[4]=e[4]+$d&4294967295}
function c(u,t){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var w=[],I=0,aa=u.length;I<aa;++I)w.push(u.charCodeAt(I));u=w}t||(t=u.length);w=0;if(0==m)for(;w+64<t;)b(u.slice(w,w+64)),w+=64,n+=64;for(;w<t;)if(f[m++]=u[w++],n++,64==m)for(m=0,b(f);w+64<t;)b(u.slice(w,w+64)),w+=64,n+=64}
function d(){var u=[],t=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var w=63;56<=w;w--)f[w]=t&255,t>>>=8;b(f);for(w=t=0;5>w;w++)for(var I=24;0<=I;I-=8)u[t++]=e[w]>>I&255;return u}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,n;a();return{reset:a,update:c,digest:d,Xe:function(){for(var u=d(),t="",w=0;w<u.length;w++)t+="0123456789ABCDEF".charAt(Math.floor(u[w]/16))+"0123456789ABCDEF".charAt(u[w]%16);return t}}}
;function Sh(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],B(d,function(h){e.push(h)}),Th(e.join(" "));
var f=[],g=[];B(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(h){e.push(h)});
a=Th(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Th(a){var b=Rh();b.update(a);return b.Xe().toLowerCase()}
;function Uh(a){var b=Dh(String(r.location.href)),c;(c=r.__SAPISID||r.__APISID||r.__OVERRIDE_SID)?c=!0:(c=new Xe(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?r.__SAPISID:r.__APISID,c||(c=new Xe(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(r.location.href);return d&&c&&b?[b,Sh(Dh(d),
c,a||null)].join(" "):null}return null}
;var Vh=Jh(Nh,"perf",Lh());Jh(Vh,"g",Lh());var Wh=Jh(Vh,"i",Lh());Jh(Vh,"r",[]);Lh();Lh();function Xh(a,b,c){b&&0<b.length&&(b=Yh(b),c&&0<c.length&&(b+="___"+Yh(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Jh(Wh,"_p",Lh()),Jh(b,c,Lh())[a]=(new Date).getTime(),b=Vh.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Yh(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Zh=Lh(),$h=[];function ai(a){throw Error("Bad hint"+(a?": "+a:""));}
$h.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Nh[b]=Jh(Nh,b,[]).concat(c):Jh(Nh,b,c)}if(b=a.u)a=Jh(Nh,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var bi=/^(\/[a-zA-Z0-9_\-]+)+$/,ci=[/\/amp\//,/\/amp$/,/^\/amp$/],di=/^[a-zA-Z0-9\-_\.,!]+$/,ei=/^gapi\.loaded_[0-9]+$/,fi=/^[a-zA-Z0-9,._-]+$/;function gi(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Zh[f],h=null;g?h=g(e,b,c,d):ai("no hint processor for: "+f);h||ai("failed to generate load url");b=h;c=b.match(hi);(d=b.match(ii))&&1===d.length&&ji.test(b)&&c&&1===c.length||ai("failed sanity: "+a);return h}
function ki(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=li(a);ei.test(c)||ai("invalid_callback");b=mi(b);d=d&&d.length?mi(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Uc?"/am="+e(a.Uc):"",a.ne?"/rs="+e(a.ne):"",a.Qe?"/t="+e(a.Qe):"","/cb=",e(c)].join("")}
function li(a){"/"!==a.charAt(0)&&ai("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ai("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");bi.test(b)||ai("invalid_prefix");c=0;for(d=ci.length;c<d;++c)ci[c].test(b)&&ai("invalid_prefix");c=ni(a,
"k",!0);d=ni(a,"am");e=ni(a,"rs");a=ni(a,"t");return{pathPrefix:b,version:c,Uc:d,ne:e,Qe:a}}
function mi(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");fi.test(e)&&b.push(e)}return b.join(",")}
function ni(a,b,c){a=a[b];!a&&c&&ai("missing: "+b);if(a){if(di.test(a))return a;ai("invalid: "+b)}return null}
var ji=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ii=/\/cb=/g,hi=/\/\//g;function oi(){var a=Oh();if(!a)throw Error("Bad hint");return a}
Zh.m=function(a,b,c,d){(a=a[0])||ai("missing_hint");return"https://apis.google.com"+ki(a,b,c,d)};
var pi=decodeURI("%73cript"),qi=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ri(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function si(){var a=Nh.nonce;return void 0!==a?a&&a===String(a)&&a.match(qi)?a:Nh.nonce=null:Fh.querySelector?(a=Fh.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(qi)?Nh.nonce=a:Nh.nonce=null):null:null}
function ti(a){if("loading"!=Fh.readyState)ui(a);else{var b=si(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+pi+' src="'+encodeURI(a)+'"'+c+"></"+pi+">";Fh.write(vi?vi.createHTML(a):a)}}
function ui(a){var b=Fh.createElement(pi);b.setAttribute("src",vi?vi.createScriptURL(a):a);a=si();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Fh.getElementsByTagName(pi)[0])?a.parentNode.insertBefore(b,a):(Fh.head||Fh.body||Fh.documentElement).appendChild(b)}
function wi(a,b){var c=b&&b._c;if(c)for(var d=0;d<$h.length;d++){var e=$h[d][0],f=$h[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function xi(a,b,c){yi(function(){var d=b===Oh()?Jh(Mh,"_",Lh()):Lh();d=Jh(Qh(b),"_",d);a(d)},c)}
function zi(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);wi(a,c);var d=a?a.split(":"):[],e=c.h||oi(),f=Jh(Nh,"ah",Lh());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split(".");l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,n=m;m&&m.hint==l||(n={hint:l,features:[]},g.push(n));n.features.push(h)}var u=g.length;if(1<u){var t=c.callback;t&&(c.callback=function(){0==--u&&t()})}for(;d=g.shift();)Ai(d.features,c,d.hint)}else Ai(d||[],c,e)}
function Ai(a,b,c){function d(sb,oc){if(u)return 0;Eh.clearTimeout(n);t.push.apply(t,I);var Bg=((Mh||{}).config||{}).update;Bg?Bg(f):f&&Jh(Nh,"cu",[]).push(f);if(oc){Xh("me0",sb,w);try{xi(oc,c,m)}finally{Xh("me1",sb,w)}}return 1}
a=Kh(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var n=null,u=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=Jh(Qh(c),"r",[]).sort();var t=Jh(Qh(c),"L",[]).sort(),w=[].concat(l);0<g&&(n=Eh.setTimeout(function(){u=!0;h()},g));
var I=ri(a,t);if(I.length){I=ri(a,l);var aa=Jh(Nh,"CP",[]),ba=aa.length;aa[ba]=function(sb){function oc(){var Ii=aa[ba+1];Ii&&Ii()}
function Bg(Ii){aa[ba]=null;d(I,sb)&&Ph(function(){e&&e();Ii()})}
if(!sb)return 0;Xh("ml1",I,w);0<ba&&aa[ba-1]?aa[ba]=function(){Bg(oc)}:Bg(oc)};
if(I.length){var $d="loaded_"+Nh.I++;Mh[$d]=function(sb){aa[ba](sb);Mh[$d]=null};
a=gi(c,I,"gapi."+$d,l);l.push.apply(l,I);Xh("ml0",I,w);b.sync||Eh.___gapisync?ti(a):ui(a)}else aa[ba](Hh)}else d(I)&&e&&e()}
var vi=$a("goog#gapi");function yi(a,b){if(Nh.hee&&0<Nh.hel)try{return a()}catch(c){b&&b(c),Nh.hel--,zi("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Mh.load=function(a,b){return yi(function(){return zi(a,b)})};function Bi(){this.g=[];this.f=-1}
Bi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Bi.prototype.get=function(a){return!!this.g[a]};
function Ci(a){-1==a.f&&(a.f=jb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;Sb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Di(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Di.prototype.stopPropagation=function(){this.f=!0};
Di.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ei=!D||De(9),Fi=D&&!Ce("9"),Gi=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{r.addEventListener("test",Oa,b),r.removeEventListener("test",Oa,b)}catch(c){}return a}();var Hi;Hi=ne?"webkitTransitionEnd":je?"otransitionend":"transitionend";function Ji(a,b){Di.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(Ji,Di);var Ki={2:"touch",3:"pen",4:"mouse"};
Ji.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?me&&(he(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ki[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Ji.prototype.stopPropagation=function(){Ji.O.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Ji.prototype.preventDefault=function(){Ji.O.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fi)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Li="closure_listenable_"+(1E6*Math.random()|0),Mi=0;function Ni(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Ub=e;this.key=++Mi;this.qb=this.Mb=!1}
function Oi(a){a.qb=!0;a.listener=null;a.f=null;a.src=null;a.Ub=null}
;function Pi(a){this.src=a;this.listeners={};this.f=0}
Pi.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Qi(a,b,d,e);-1<g?(b=a[g],c||(b.Mb=!1)):(b=new Ni(b,this.src,f,!!d,e),b.Mb=c,a.push(b));return b};
Pi.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Qi(e,b,c,d);return-1<b?(Oi(e[b]),tb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Ri(a,b){var c=b.type;c in a.listeners&&rb(a.listeners[c],b)&&(Oi(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Qi(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.qb&&f.listener==b&&f.capture==!!c&&f.Ub==d)return e}return-1}
;var Si="closure_lm_"+(1E6*Math.random()|0),Ti={},Ui=0;function Vi(a,b,c,d,e){if(d&&d.once)return Wi(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Vi(a,b[f],c,d,e);return null}c=Xi(c);a&&a[Li]?f=a.g.add(String(b),c,!1,Sa(d)?!!d.capture:!!d,e):f=Yi(a,b,c,!1,d,e);return f}
function Yi(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Zi(a);h||(a[Si]=h=new Pi(a));c=h.add(b,c,d,g,f);if(c.f)return c;d=$i();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Gi||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(aj(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ui++;return c}
function $i(){var a=bj,b=Ei?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Wi(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Wi(a,b[f],c,d,e);return null}c=Xi(c);return a&&a[Li]?a.g.add(String(b),c,!0,Sa(d)?!!d.capture:!!d,e):Yi(a,b,c,!0,d,e)}
function cj(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cj(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Xi(c),a&&a[Li])?a.g.remove(String(b),c,d,e):a&&(a=Zi(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Qi(b,c,d,e)),(c=-1<a?b[a]:null)&&dj(c))}
function dj(a){if("number"!==typeof a&&a&&!a.qb){var b=a.src;if(b&&b[Li])Ri(b.g,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(aj(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ui--;(c=Zi(b))?(Ri(c,a),0==c.f&&(c.src=null,b[Si]=null)):Oi(a)}}}
function aj(a){return a in Ti?Ti[a]:Ti[a]="on"+a}
function ej(a,b,c,d){var e=!0;if(a=Zi(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.qb&&(f=fj(f,d),e=e&&!1!==f)}return e}
function fj(a,b){var c=a.listener,d=a.Ub||a.src;a.Mb&&dj(a);return c.call(d,b)}
function bj(a,b){if(a.qb)return!0;if(!Ei){var c=b||x("window.event"),d=new Ji(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var h=ej(c[g],f,!0,d);e=e&&h}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],h=ej(c[g],f,!1,d),e=e&&h}return e}return fj(a,new Ji(b,this))}
function Zi(a){a=a[Si];return a instanceof Pi?a:null}
var gj="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xi(a){if("function"===typeof a)return a;a[gj]||(a[gj]=function(b){return a.handleEvent(b)});
return a[gj]}
;function hj(){eg.call(this);this.g=new Pi(this);this.zb=this;this.ma=null}
A(hj,eg);hj.prototype[Li]=!0;hj.prototype.addEventListener=function(a,b,c,d){Vi(this,a,b,c,d)};
hj.prototype.removeEventListener=function(a,b,c,d){cj(this,a,b,c,d)};
hj.prototype.dispatchEvent=function(a){var b=this.ma;if(b){var c=[];for(var d=1;b;b=b.ma)c.push(b),++d}b=this.zb;d=a.type||a;if("string"===typeof a)a=new Di(a,b);else if(a instanceof Di)a.target=a.target||b;else{var e=a;a=new Di(d,b);Rb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=ij(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=ij(g,d,!0,a)&&e,a.f||(e=ij(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=ij(g,d,!1,a)&&e;return e};
hj.prototype.L=function(){hj.O.L.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Oi(d[e]);delete a.listeners[c];a.f--}}this.ma=null};
function ij(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.qb&&g.capture==c){var h=g.listener,l=g.Ub||g.src;g.Mb&&Ri(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function jj(a,b){hj.call(this);this.i=a||1;this.f=b||r;this.j=y(this.pf,this);this.l=z()}
A(jj,hj);k=jj.prototype;k.enabled=!1;k.ta=null;k.setInterval=function(a){this.i=a;this.ta&&this.enabled?(this.stop(),this.start()):this.ta&&this.stop()};
k.pf=function(){if(this.enabled){var a=z()-this.l;0<a&&a<.8*this.i?this.ta=this.f.setTimeout(this.j,this.i-a):(this.ta&&(this.f.clearTimeout(this.ta),this.ta=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.ta||(this.ta=this.f.setTimeout(this.j,this.i),this.l=z())};
k.stop=function(){this.enabled=!1;this.ta&&(this.f.clearTimeout(this.ta),this.ta=null)};
k.L=function(){jj.O.L.call(this);this.stop();delete this.f};
function kj(a,b,c){if("function"===typeof a)c&&(a=y(a,c));else if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:r.setTimeout(a,b||0)}
;function lj(a,b,c){eg.call(this);this.f=a;this.j=b||0;this.g=c;this.i=y(this.ud,this)}
A(lj,eg);k=lj.prototype;k.Eb=0;k.L=function(){lj.O.L.call(this);this.stop();delete this.f;delete this.g};
k.start=function(a){this.stop();this.Eb=kj(this.i,void 0!==a?a:this.j)};
k.stop=function(){this.isActive()&&r.clearTimeout(this.Eb);this.Eb=0};
k.isActive=function(){return 0!=this.Eb};
k.ud=function(){this.Eb=0;this.f&&this.f.call(this.g)};function mj(a,b,c){eg.call(this);this.A=null!=c?a.bind(c):a;this.l=b;this.j=null;this.g=!1;this.i=0;this.f=null}
q(mj,eg);k=mj.prototype;k.cg=function(a){this.j=arguments;this.f||this.i?this.g=!0:nj(this)};
k.stop=function(){this.f&&(r.clearTimeout(this.f),this.f=null,this.g=!1,this.j=null)};
k.pause=function(){this.i++};
k.resume=function(){this.i--;this.i||!this.g||this.f||(this.g=!1,nj(this))};
k.L=function(){eg.prototype.L.call(this);this.stop()};
function nj(a){a.f=kj(function(){a.f=null;a.g&&!a.i&&(a.g=!1,nj(a))},a.l);
var b=a.j;a.j=null;a.A.apply(null,b)}
;function oj(){this.g=-1}
;function pj(){this.g=64;this.f=[];this.A=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
A(pj,oj);pj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function qj(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+l&4294967295}
pj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)qj(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){qj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){qj(this,e);f=0;break}}this.i=f;this.l+=b}};
pj.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.A[c]=b&255,b/=256;qj(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var rj="StopIteration"in r?r.StopIteration:{message:"StopIteration",stack:""};function sj(){}
sj.prototype.next=function(){throw rj;};
sj.prototype.Da=function(){return this};
function tj(a){if(a instanceof sj)return a;if("function"==typeof a.Da)return a.Da(!1);if(Ra(a)){var b=0,c=new sj;c.next=function(){for(;;){if(b>=a.length)throw rj;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function uj(a,b,c){if(Ra(a))try{B(a,b,c)}catch(d){if(d!==rj)throw d;}else{a=tj(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==rj)throw d;}}}
function vj(a){if(Ra(a))return wb(a);a=tj(a);var b=[];uj(a,function(c){b.push(c)});
return b}
;function wj(a,b){this.g={};this.f=[];this.Va=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wj)for(c=a.Aa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=wj.prototype;k.qa=function(){xj(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
k.Aa=function(){xj(this);return this.f.concat()};
k.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||yj;xj(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function yj(a,b){return a===b}
k.isEmpty=function(){return 0==this.i};
k.clear=function(){this.g={};this.Va=this.i=this.f.length=0};
k.remove=function(a){return zj(this.g,a)?(delete this.g[a],this.i--,this.Va++,this.f.length>2*this.i&&xj(this),!0):!1};
function xj(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];zj(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],zj(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
k.get=function(a,b){return zj(this.g,a)?this.g[a]:b};
k.set=function(a,b){zj(this.g,a)||(this.i++,this.f.push(a),this.Va++);this.g[a]=b};
k.forEach=function(a,b){for(var c=this.Aa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new wj(this)};
k.Da=function(a){xj(this);var b=0,c=this.Va,d=this,e=new sj;e.next=function(){if(c!=d.Va)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw rj;var f=d.f[b++];return a?f:d.g[f]};
return e};
function zj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Aj(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Bj(a){return a.classList?a.classList:Aj(a).match(/\S+/g)||[]}
function Cj(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function H(a,b){return a.classList?a.classList.contains(b):pb(Bj(a),b)}
function J(a,b){if(a.classList)a.classList.add(b);else if(!H(a,b)){var c=Aj(a);Cj(a,c+(0<c.length?" "+b:b))}}
function Dj(a,b){if(a.classList)B(b,function(f){J(a,f)});
else{var c={};B(Bj(a),function(f){c[f]=!0});
B(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Cj(a,d)}}
function Ej(a,b){a.classList?a.classList.remove(b):H(a,b)&&Cj(a,hb(Bj(a),function(c){return c!=b}).join(" "))}
function Fj(a,b){a.classList?B(b,function(c){Ej(a,c)}):Cj(a,hb(Bj(a),function(c){return!pb(b,c)}).join(" "))}
function Gj(a,b,c){c?J(a,b):Ej(a,b)}
function Hj(a,b,c){H(a,b)&&(Ej(a,b),J(a,c))}
function Ij(a,b){var c=!H(a,b);Gj(a,b,c);return c}
;var Jj=!D&&!Rc();function Kj(a,b){if(/-[a-z]/.test(b))return null;if(Jj&&a.dataset){if(Tc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Lj(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Mj(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function Nj(a){eg.call(this);this.g=a;this.f={}}
A(Nj,eg);var Oj=[];function Pj(a,b,c,d){Array.isArray(c)||(c&&(Oj[0]=c.toString()),c=Oj);for(var e=0;e<c.length;e++){var f=Vi(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function Qj(a){Eb(a.f,function(b,c){this.f.hasOwnProperty(c)&&dj(b)},a);
a.f={}}
Nj.prototype.L=function(){Nj.O.L.call(this);Qj(this)};
Nj.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Rj(a){return td(gc(a.replace(Sj,function(b,c){return Tj.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var Tj=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,Sj=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function Uj(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Vj(a){var b=[];Wj(new Xj,a,b);return b.join("")}
function Xj(){}
function Wj(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Wj(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Yj(d,c),c.push(":"),Wj(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Yj(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Zj={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ak=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Yj(a,b){b.push('"',a.replace(ak,function(c){var d=Zj[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Zj[c]=d);return d}),'"')}
;function bk(a){if(r.JSON)try{return r.JSON.parse(a)}catch(b){}return Uj(a)}
;function ck(){}
ck.prototype.stringify=function(a){return r.JSON.stringify(a,void 0)};
ck.prototype.parse=function(a){return r.JSON.parse(a,void 0)};function dk(a,b,c,d,e,f,g,h){this.f=a;this.l=b;this.i=c;this.A=d;this.j=e;this.G=f;this.g=g;this.H=h}
dk.prototype.clone=function(){return new dk(this.f,this.l,this.i,this.A,this.j,this.G,this.g,this.H)};
dk.prototype.equals=function(a){return this.f==a.f&&this.l==a.l&&this.i==a.i&&this.A==a.A&&this.j==a.j&&this.G==a.G&&this.g==a.g&&this.H==a.H};
function ek(a,b){if(0==b)return a.f;if(1==b)return a.g;var c=df(a.f,a.i,b),d=df(a.i,a.j,b),e=df(a.j,a.g,b);c=df(c,d,b);d=df(d,e,b);return df(c,d,b)}
function fk(a,b){var c=(b-a.f)/(a.g-a.f);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=ek(a,c);var h=(ek(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(h))break;else f<b?d=c:e=c,c-=(f-b)/h}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=ek(a,c);return c}
function gk(a,b){var c=fk(a,b);if(0==c)c=a.l;else if(1==c)c=a.H;else{var d=df(a.l,a.A,c),e=df(a.A,a.G,c),f=df(a.G,a.H,c);d=df(d,e,c);e=df(e,f,c);c=df(d,e,c)}return c}
;var hk=new WeakMap;function ik(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;function jk(){}
jk.prototype.f=null;jk.prototype.getOptions=function(){var a;(a=this.f)||(a={},kk(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var lk;function mk(){}
A(mk,jk);function nk(a){return(a=kk(a))?new ActiveXObject(a):new XMLHttpRequest}
function kk(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
lk=new mk;function ok(a,b,c,d){this.f=a;this.g=b;this.H=c;this.G=d||1;this.l=45E3;this.j=new Nj(this);this.i=new jj;this.i.setInterval(250)}
k=ok.prototype;k.ab=null;k.va=!1;k.ub=null;k.Rc=null;k.rb=null;k.sb=null;k.La=null;k.Sa=null;k.cb=null;k.aa=null;k.Kb=0;k.wa=null;k.oc=null;k.Qa=null;k.Gb=-1;k.pe=!0;k.Wa=!1;k.Ec=0;k.fc=null;var pk={},qk={};k=ok.prototype;k.setTimeout=function(a){this.l=a};
function rk(a,b,c){a.sb=1;a.La=sk(b.clone());a.cb=c;a.A=!0;tk(a,null)}
function uk(a,b,c,d,e){a.sb=1;a.La=sk(b.clone());a.cb=null;a.A=c;e&&(a.pe=!1);tk(a,d)}
function tk(a,b){a.rb=z();vk(a);a.Sa=a.La.clone();wk(a.Sa,"t",a.G);a.Kb=0;a.aa=a.f.wc(a.f.Jb()?b:null);0<a.Ec&&(a.fc=new mj(y(a.ye,a,a.aa),a.Ec));Pj(a.j,a.aa,"readystatechange",a.dh);var c=a.ab?Ob(a.ab):{};a.cb?(a.oc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.aa.send(a.Sa,a.oc,a.cb,c)):(a.oc="GET",a.pe&&!ne&&(c.Connection="close"),a.aa.send(a.Sa,a.oc,null,c));a.f.ua(1)}
k.dh=function(a){a=a.target;var b=this.fc;b&&3==xk(a)?b.cg():this.ye(a)};
k.ye=function(a){try{if(a==this.aa)a:{var b=xk(this.aa),c=this.aa.A,d=this.aa.getStatus();if(D&&!De(10)||ne&&!Ce("420+")){if(4>b)break a}else if(3>b||3==b&&!je&&!yk(this.aa))break a;this.Wa||4!=b||7==c||(8==c||0>=d?this.f.ua(3):this.f.ua(2));zk(this);var e=this.aa.getStatus();this.Gb=e;var f=yk(this.aa);(this.va=200==e)?(4==b&&Ak(this),this.A?(Bk(this,b,f),je&&this.va&&3==b&&(Pj(this.j,this.i,"tick",this.ah),this.i.start())):Ck(this,f),this.va&&!this.Wa&&(4==b?this.f.ac(this):(this.va=!1,vk(this)))):
(400==e&&0<f.indexOf("Unknown SID")?(this.Qa=3,Dk(13)):(this.Qa=0,Dk(14)),Ak(this),Ek(this))}}catch(g){this.aa&&yk(this.aa)}finally{}};
function Bk(a,b,c){for(var d=!0;!a.Wa&&a.Kb<c.length;){var e=Fk(a,c);if(e==qk){4==b&&(a.Qa=4,Dk(15),d=!1);break}else if(e==pk){a.Qa=4;Dk(16);d=!1;break}else Ck(a,e)}4==b&&0==c.length&&(a.Qa=1,Dk(17),d=!1);a.va=a.va&&d;d||(Ak(a),Ek(a))}
k.ah=function(){var a=xk(this.aa),b=yk(this.aa);this.Kb<b.length&&(zk(this),Bk(this,a,b),this.va&&4!=a&&vk(this))};
function Fk(a,b){var c=a.Kb,d=b.indexOf("\n",c);if(-1==d)return qk;c=Number(b.substring(c,d));if(isNaN(c))return pk;d+=1;if(d+c>b.length)return qk;var e=b.substr(d,c);a.Kb=d+c;return e}
function Gk(a,b){a.rb=z();vk(a);var c=b?window.location.hostname:"";a.Sa=a.La.clone();Hk(a.Sa,"DOMAIN",c);Hk(a.Sa,"t",a.G);try{a.wa=new ActiveXObject("htmlfile")}catch(m){Ak(a);a.Qa=7;Dk(22);Ek(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var h=g;if(h in yd)g=yd[h];else if(h in xd)g=yd[h]=xd[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)g=h;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=yd[h]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=hd($b("b/12014412"),d+"</body></html>");a.wa.open();a.wa.write(Wc(c));a.wa.close();a.wa.parentWindow.m=y(a.Ug,a);a.wa.parentWindow.d=y(a.he,a,!0);a.wa.parentWindow.rpcClose=y(a.he,a,!1);c=a.wa.createElement("DIV");a.wa.parentWindow.document.body.appendChild(c);d=zc(a.Sa.toString())||Bc;d=sd(uc(d));d=hd($b("b/12014412"),'<iframe src="'+d+'"></iframe>');jd(c,d);a.f.ua(1)}
k.Ug=function(a){Ik(y(this.Tg,this,a),0)};
k.Tg=function(a){this.Wa||(zk(this),Ck(this,a),vk(this))};
k.he=function(a){Ik(y(this.Sg,this,a),0)};
k.Sg=function(a){this.Wa||(Ak(this),this.va=a,this.f.ac(this),this.f.ua(4))};
k.cancel=function(){this.Wa=!0;Ak(this)};
function vk(a){a.Rc=z()+a.l;Jk(a,a.l)}
function Jk(a,b){if(null!=a.ub)throw Error("WatchDog timer not null");a.ub=Ik(y(a.Xg,a),b)}
function zk(a){a.ub&&(r.clearTimeout(a.ub),a.ub=null)}
k.Xg=function(){this.ub=null;var a=z();0<=a-this.Rc?(2!=this.sb&&this.f.ua(3),Ak(this),this.Qa=2,Dk(18),Ek(this)):Jk(this,this.Rc-a)};
function Ek(a){a.f.Dd()||a.Wa||a.f.ac(a)}
function Ak(a){zk(a);gg(a.fc);a.fc=null;a.i.stop();Qj(a.j);if(a.aa){var b=a.aa;a.aa=null;b.abort();b.dispose()}a.wa&&(a.wa=null)}
k.getLastError=function(){return this.Qa};
function Ck(a,b){try{a.f.be(a,b),a.f.ua(4)}catch(c){}}
;function Kk(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if("string"===typeof a)return a.split("");if(Ra(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ib(a)}
function Lk(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ra(a)||"string"===typeof a)B(a,b,c);else{if(a.Aa&&"function"==typeof a.Aa)var d=a.Aa();else if(a.qa&&"function"==typeof a.qa)d=void 0;else if(Ra(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Jb(a);e=Kk(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function Mk(a,b){this.g=this.H=this.j="";this.G=null;this.l=this.f="";this.A=!1;var c;a instanceof Mk?(this.A=void 0!==b?b:a.A,Nk(this,a.j),this.H=a.H,Ok(this,a.g),Pk(this,a.G),this.f=a.f,Qk(this,a.i.clone()),this.l=a.l):a&&(c=Dd(String(a)))?(this.A=!!b,Nk(this,c[1]||"",!0),this.H=Rk(c[2]||""),Ok(this,c[3]||"",!0),Pk(this,c[4]),this.f=Rk(c[5]||"",!0),Qk(this,c[6]||"",!0),this.l=Rk(c[7]||"")):(this.A=!!b,this.i=new Sk(null,this.A))}
Mk.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Tk(b,Uk,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(Tk(b,Uk,!0),"@"),a.push(qd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,null!=c&&a.push(":",String(c));if(c=this.f)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Tk(c,"/"==c.charAt(0)?Vk:Wk,!0));(c=this.i.toString())&&a.push("?",c);(c=this.l)&&a.push("#",Tk(c,Xk));return a.join("")};
Mk.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Nk(b,a.j):c=!!a.H;c?b.H=a.H:c=!!a.g;c?Ok(b,a.g):c=null!=a.G;var d=a.f;if(c)Pk(b,a.G);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.g&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.i.toString();c?Qk(b,a.i.clone()):c=!!a.l;c&&(b.l=a.l);return b};
Mk.prototype.clone=function(){return new Mk(this)};
function Nk(a,b,c){a.j=c?Rk(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Ok(a,b,c){a.g=c?Rk(b,!0):b}
function Pk(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function Qk(a,b,c){b instanceof Sk?(a.i=b,Yk(a.i,a.A)):(c||(b=Tk(b,Zk)),a.i=new Sk(b,a.A))}
function Hk(a,b,c){a.i.set(b,c)}
function wk(a,b,c){Array.isArray(c)||(c=[String(c)]);$k(a.i,b,c)}
function sk(a){Hk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^z()).toString(36));return a}
function al(a){return a instanceof Mk?a.clone():new Mk(a,void 0)}
function bl(a,b,c,d){var e=new Mk(null,void 0);a&&Nk(e,a);b&&Ok(e,b);c&&Pk(e,c);d&&(e.f=d);return e}
function Rk(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Tk(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,cl),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function cl(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Uk=/[#\/\?@]/g,Wk=/[#\?:]/g,Vk=/[#\?]/g,Zk=/[#\?@]/g,Xk=/#/g;function Sk(a,b){this.g=this.f=null;this.i=a||null;this.j=!!b}
function dl(a){a.f||(a.f=new wj,a.g=0,a.i&&Hd(a.i,function(b,c){a.add(rd(b),c)}))}
k=Sk.prototype;k.add=function(a,b){dl(this);this.i=null;a=el(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g+=1;return this};
k.remove=function(a){dl(this);a=el(this,a);return zj(this.f.g,a)?(this.i=null,this.g-=this.f.get(a).length,this.f.remove(a)):!1};
k.clear=function(){this.f=this.i=null;this.g=0};
k.isEmpty=function(){dl(this);return 0==this.g};
function fl(a,b){dl(a);b=el(a,b);return zj(a.f.g,b)}
k.forEach=function(a,b){dl(this);this.f.forEach(function(c,d){B(c,function(e){a.call(b,e,d,this)},this)},this)};
k.Aa=function(){dl(this);for(var a=this.f.qa(),b=this.f.Aa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
k.qa=function(a){dl(this);var b=[];if("string"===typeof a)fl(this,a)&&(b=vb(b,this.f.get(el(this,a))));else{a=this.f.qa();for(var c=0;c<a.length;c++)b=vb(b,a[c])}return b};
k.set=function(a,b){dl(this);this.i=null;a=el(this,a);fl(this,a)&&(this.g-=this.f.get(a).length);this.f.set(a,[b]);this.g+=1;return this};
k.get=function(a,b){if(!a)return b;var c=this.qa(a);return 0<c.length?String(c[0]):b};
function $k(a,b,c){a.remove(b);0<c.length&&(a.i=null,a.f.set(el(a,b),wb(c)),a.g+=c.length)}
k.toString=function(){if(this.i)return this.i;if(!this.f)return"";for(var a=[],b=this.f.Aa(),c=0;c<b.length;c++){var d=b[c],e=qd(d);d=this.qa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+qd(d[f]));a.push(g)}}return this.i=a.join("&")};
k.clone=function(){var a=new Sk;a.i=this.i;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function el(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
function Yk(a,b){b&&!a.j&&(dl(a),a.i=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),$k(this,e,c))},a));
a.j=b}
k.extend=function(a){for(var b=0;b<arguments.length;b++)Lk(arguments[b],function(c,d){this.add(d,c)},this)};function gl(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;hl(a,b,function(g){g?c(!0):r.setTimeout(function(){gl(a,b,c,d,f)},f)})}}
function hl(a,b,c){var d=new Image;d.onload=function(){try{il(d),c(!0)}catch(e){}};
d.onerror=function(){try{il(d),c(!1)}catch(e){}};
d.onabort=function(){try{il(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{il(d),c(!1)}catch(e){}};
r.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
ld(d,a)}
function il(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function jl(a){this.f=a;this.g=new ck}
k=jl.prototype;k.Cc=null;k.ja=null;k.hc=!1;k.te=null;k.Pb=null;k.Hc=null;k.Dc=null;k.D=null;k.Ga=-1;k.Fb=null;k.Ab=null;k.connect=function(a){this.Dc=a;a=kl(this.f,null,this.Dc);Dk(3);this.te=z();var b=this.f.G;null!=b?(this.Fb=b[0],(this.Ab=b[1])?(this.D=1,ll(this)):(this.D=2,ml(this))):(wk(a,"MODE","init"),this.ja=new ok(this,void 0,void 0,void 0),this.ja.ab=this.Cc,uk(this.ja,a,!1,null,!0),this.D=0)};
function ll(a){var b=kl(a.f,a.Ab,"/mail/images/cleardot.gif");sk(b);gl(b.toString(),5E3,y(a.Ve,a),3,2E3);a.ua(1)}
k.Ve=function(a){if(a)this.D=2,ml(this);else{Dk(4);var b=this.f;b.Ba=b.Na.Ga;nl(b,9)}a&&this.ua(2)};
function ml(a){var b=a.f.H;if(null!=b)Dk(5),b?(Dk(11),ol(a.f,a,!1)):(Dk(12),ol(a.f,a,!0));else if(a.ja=new ok(a,void 0,void 0,void 0),a.ja.ab=a.Cc,b=a.f,b=kl(b,b.Jb()?a.Fb:null,a.Dc),Dk(5),!D||De(10))wk(b,"TYPE","xmlhttp"),uk(a.ja,b,!1,a.Fb,!1);else{wk(b,"TYPE","html");var c=a.ja;a=!!a.Fb;c.sb=3;c.La=sk(b.clone());Gk(c,a)}}
k.wc=function(a){return this.f.wc(a)};
k.abort=function(){this.ja&&(this.ja.cancel(),this.ja=null);this.Ga=-1};
k.Dd=function(){return!1};
k.be=function(a,b){this.Ga=a.Gb;if(0==this.D)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.Ba=this.Ga;nl(c,2);return}this.Fb=c[0];this.Ab=c[1]}else c=this.f,c.Ba=this.Ga,nl(c,2);else if(2==this.D)if(this.hc)Dk(7),this.Hc=z();else if("11111"==b){if(Dk(6),this.hc=!0,this.Pb=z(),c=this.Pb-this.te,!D||De(10)||500>c)this.Ga=200,this.ja.cancel(),Dk(12),ol(this.f,this,!0)}else Dk(8),this.Pb=this.Hc=z(),this.hc=!1};
k.ac=function(){this.Ga=this.ja.Gb;if(this.ja.va)0==this.D?this.Ab?(this.D=1,ll(this)):(this.D=2,ml(this)):2==this.D&&((!D||De(10)?!this.hc:200>this.Hc-this.Pb)?(Dk(11),ol(this.f,this,!1)):(Dk(12),ol(this.f,this,!0)));else{0==this.D?Dk(9):2==this.D&&Dk(10);var a=this.f;this.ja.getLastError();a.Ba=this.Ga;nl(a,2)}};
k.Jb=function(){return this.f.Jb()};
k.isActive=function(){return this.f.isActive()};
k.ua=function(a){this.f.ua(a)};function pl(a){hj.call(this);this.headers=new wj;this.V=a||null;this.i=!1;this.T=this.f=null;this.xa=this.K="";this.A=0;this.j="";this.l=this.ca=this.F=this.Z=!1;this.C=0;this.M=null;this.ya="";this.P=this.ka=!1}
A(pl,hj);var ql=/^https?$/i,rl=["POST","PUT"];k=pl.prototype;
k.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.K+"; newUri="+a);b=b?b.toUpperCase():"GET";this.K=a;this.j="";this.A=0;this.xa=b;this.Z=!1;this.i=!0;this.f=this.V?nk(this.V):nk(lk);this.T=this.V?this.V.getOptions():lk.getOptions();this.f.onreadystatechange=y(this.ae,this);try{Ve(sl(this,"Opening Xhr")),this.ca=!0,this.f.open(b,String(a),!0),this.ca=!1}catch(f){Ve(sl(this,"Error opening Xhr: "+f.message));tl(this,f);return}a=c||"";var e=
this.headers.clone();d&&Lk(d,function(f,g){e.set(g,f)});
d=mb(e.Aa(),ul);c=r.FormData&&a instanceof r.FormData;!pb(rl,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.ya&&(this.f.responseType=this.ya);"withCredentials"in this.f&&this.f.withCredentials!==this.ka&&(this.f.withCredentials=this.ka);try{vl(this),0<this.C&&(this.P=wl(this.f),Ve(sl(this,"Will abort after "+this.C+"ms if incomplete, xhr2 "+this.P)),this.P?(this.f.timeout=this.C,this.f.ontimeout=y(this.vd,this)):this.M=kj(this.vd,this.C,this)),Ve(sl(this,"Sending request")),this.F=!0,this.f.send(a),this.F=!1}catch(f){Ve(sl(this,"Send error: "+f.message)),tl(this,f)}};
function wl(a){return D&&Ce(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function ul(a){return"content-type"==a.toLowerCase()}
k.vd=function(){"undefined"!=typeof Ja&&this.f&&(this.j="Timed out after "+this.C+"ms, aborting",this.A=8,sl(this,this.j),this.dispatchEvent("timeout"),this.abort(8))};
function tl(a,b){a.i=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.j=b;a.A=5;xl(a);yl(a)}
function xl(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
k.abort=function(a){this.f&&this.i&&(sl(this,"Aborting"),this.i=!1,this.l=!0,this.f.abort(),this.l=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),yl(this))};
k.L=function(){this.f&&(this.i&&(this.i=!1,this.l=!0,this.f.abort(),this.l=!1),yl(this,!0));pl.O.L.call(this)};
k.ae=function(){this.S()||(this.ca||this.F||this.l?zl(this):this.Jg())};
k.Jg=function(){zl(this)};
function zl(a){if(a.i&&"undefined"!=typeof Ja)if(a.T[1]&&4==xk(a)&&2==a.getStatus())sl(a,"Local request error detected and ignored");else if(a.F&&4==xk(a))kj(a.ae,0,a);else if(a.dispatchEvent("readystatechange"),4==xk(a)){sl(a,"Request complete");a.i=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Dd(String(a.K))[1]||null;if(!f&&r.self&&r.self.location){var g=r.self.location.protocol;
f=g.substr(0,g.length-1)}e=!ql.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.A=6;try{var h=2<xk(a)?a.f.statusText:""}catch(l){h=""}a.j=h+" ["+a.getStatus()+"]";xl(a)}}finally{yl(a)}}}
function yl(a,b){if(a.f){vl(a);var c=a.f,d=a.T[0]?Oa:null;a.f=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function vl(a){a.f&&a.P&&(a.f.ontimeout=null);a.M&&(r.clearTimeout(a.M),a.M=null)}
k.isActive=function(){return!!this.f};
function xk(a){return a.f?a.f.readyState:0}
k.getStatus=function(){try{return 2<xk(this)?this.f.status:-1}catch(a){return-1}};
function yk(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
k.getLastError=function(){return"string"===typeof this.j?this.j:String(this.j)};
function sl(a,b){return b+" ["+a.xa+" "+a.K+" "+a.getStatus()+"]"}
;function Al(a,b,c){this.D=1;this.f=[];this.i=[];this.j=new ck;this.G=a||null;this.H=null!=b?b:null;this.l=c||!1}
function Bl(a,b){this.f=a;this.map=b;this.context=null}
k=Al.prototype;k.lb=null;k.Bb=null;k.ga=null;k.X=null;k.Bc=null;k.Rb=null;k.Yc=null;k.Sb=null;k.Hb=0;k.gg=0;k.ba=null;k.Pa=null;k.Ea=null;k.Za=null;k.Na=null;k.nc=null;k.nb=-1;k.Gd=-1;k.Ba=-1;k.kb=0;k.gb=0;k.Xa=8;var Cl=new hj;function Dl(a){Di.call(this,"statevent",a)}
A(Dl,Di);function El(a,b){Di.call(this,"timingevent",a);this.size=b}
A(El,Di);function Fl(a){Di.call(this,"serverreachability",a)}
A(Fl,Di);k=Al.prototype;k.connect=function(a,b,c,d,e){Dk(0);this.Bc=b;this.Bb=c||{};d&&void 0!==e&&(this.Bb.OSID=d,this.Bb.OAID=e);this.l?(Ik(y(this.nd,this,a),100),Gl(this)):this.nd(a)};
function Hl(a){Il(a);if(3==a.D){var b=a.Hb++,c=a.Rb.clone();Hk(c,"SID",a.g);Hk(c,"RID",b);Hk(c,"TYPE","terminate");Jl(a,c);b=new ok(a,a.g,b,void 0);b.sb=2;b.La=sk(c.clone());ld(new Image,b.La.toString());b.rb=z();vk(b)}Kl(a)}
k.nd=function(a){this.Na=new jl(this);this.Na.Cc=this.lb;this.Na.g=this.j;this.Na.connect(a)};
function Gl(a){a.bf(1,0);a.Rb=kl(a,null,a.Bc);Ll(a)}
function Il(a){a.Na&&(a.Na.abort(),a.Na=null);a.X&&(a.X.cancel(),a.X=null);a.Ea&&(r.clearTimeout(a.Ea),a.Ea=null);Ml(a);a.ga&&(a.ga.cancel(),a.ga=null);a.Pa&&(r.clearTimeout(a.Pa),a.Pa=null)}
function Nl(a,b){if(0==a.D)throw Error("Invalid operation: sending map when state is closed");a.f.push(new Bl(a.gg++,b));2!=a.D&&3!=a.D||Ll(a)}
k.Dd=function(){return 0==this.D};
function Ll(a){a.ga||a.Pa||(a.Pa=Ik(y(a.ge,a),0),a.kb=0)}
k.ge=function(a){this.Pa=null;Ol(this,a)};
function Ol(a,b){if(1==a.D){if(!b){a.Hb=Math.floor(1E5*Math.random());var c=a.Hb++,d=new ok(a,"",c,void 0);d.ab=a.lb;var e=Pl(a),f=a.Rb.clone();Hk(f,"RID",c);Hk(f,"CVER","1");Jl(a,f);rk(d,f,e);a.ga=d;a.D=2}}else 3==a.D&&(b?Ql(a,b):0==a.f.length||a.ga||Ql(a))}
function Ql(a,b){if(b)if(6<a.Xa){a.f=a.i.concat(a.f);a.i.length=0;var c=a.Hb-1;var d=Pl(a)}else c=b.H,d=b.cb;else c=a.Hb++,d=Pl(a);var e=a.Rb.clone();Hk(e,"SID",a.g);Hk(e,"RID",c);Hk(e,"AID",a.nb);Jl(a,e);c=new ok(a,a.g,c,a.kb+1);c.ab=a.lb;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ga=c;rk(c,e,d)}
function Jl(a,b){if(a.ba){var c=a.ba.rd();c&&Eb(c,function(d,e){Hk(b,e,d)})}}
function Pl(a){var b=Math.min(a.f.length,1E3),c=["count="+b];if(6<a.Xa&&0<b){var d=a.f[0].f;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.f[e].f,g=a.f[e].map;f=6>=a.Xa?e:f-d;try{Eb(g,function(h,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(h))})}catch(h){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function Rl(a){a.X||a.Ea||(a.A=1,a.Ea=Ik(y(a.ee,a),0),a.gb=0)}
function Sl(a){if(a.X||a.Ea||3<=a.gb)return!1;a.A++;a.Ea=Ik(y(a.ee,a),Tl(a,a.gb));a.gb++;return!0}
k.ee=function(){this.Ea=null;this.X=new ok(this,this.g,"rpc",this.A);this.X.ab=this.lb;this.X.Ec=0;var a=this.Yc.clone();Hk(a,"RID","rpc");Hk(a,"SID",this.g);Hk(a,"CI",this.nc?"0":"1");Hk(a,"AID",this.nb);Jl(this,a);if(!D||De(10))Hk(a,"TYPE","xmlhttp"),uk(this.X,a,!0,this.Sb,!1);else{Hk(a,"TYPE","html");var b=this.X,c=!!this.Sb;b.sb=3;b.La=sk(a.clone());Gk(b,c)}};
function ol(a,b,c){a.nc=c;a.Ba=b.Ga;a.l||Gl(a)}
k.be=function(a,b){if(0!=this.D&&(this.X==a||this.ga==a))if(this.Ba=a.Gb,this.ga==a&&3==this.D)if(7<this.Xa){try{var c=this.j.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Ea){if(this.X)if(this.X.rb+3E3<this.ga.rb)Ml(this),this.X.cancel(),this.X=null;else break a;Sl(this);Dk(19)}}else this.Gd=c[1],0<this.Gd-this.nb&&37500>c[2]&&this.nc&&0==this.gb&&!this.Za&&(this.Za=Ik(y(this.lg,this),6E3));else nl(this,11)}else b!=We.gi.f&&nl(this,11);else if(this.X==a&&Ml(this),
!/^[\s\xa0]*$/.test(b)){c=this.j.parse(b);Array.isArray(c);for(var d=0;d<c.length;d++){var e=c[d];this.nb=e[0];e=e[1];2==this.D?"c"==e[0]?(this.g=e[1],this.Sb=e[2],e=e[3],null!=e?this.Xa=e:this.Xa=6,this.D=3,this.ba&&this.ba.fd(),this.Yc=kl(this,this.Jb()?this.Sb:null,this.Bc),Rl(this)):"stop"==e[0]&&nl(this,7):3==this.D&&("stop"==e[0]?nl(this,7):"noop"!=e[0]&&this.ba&&this.ba.ed(e),this.gb=0)}}};
k.lg=function(){null!=this.Za&&(this.Za=null,this.X.cancel(),this.X=null,Sl(this),Dk(20))};
function Ml(a){null!=a.Za&&(r.clearTimeout(a.Za),a.Za=null)}
k.ac=function(a){if(this.X==a){Ml(this);this.X=null;var b=2}else if(this.ga==a)this.ga=null,b=1;else return;this.Ba=a.Gb;if(0!=this.D)if(a.va)1==b?(Cl.dispatchEvent(new El(Cl,a.cb?a.cb.length:0,z()-a.rb,this.kb)),Ll(this),this.i.length=0):Rl(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ba)){if(d=1==b)this.ga||this.Pa||1==this.D||2<=this.kb?d=!1:(this.Pa=Ik(y(this.ge,this,a),Tl(this,this.kb)),this.kb++,d=!0);d=!(d||2==b&&Sl(this))}if(d)switch(c){case 1:nl(this,5);break;case 4:nl(this,
10);break;case 3:nl(this,6);break;case 7:nl(this,12);break;default:nl(this,2)}}};
function Tl(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
k.bf=function(a){if(!pb(arguments,this.D))throw Error("Unexpected channel state: "+this.D);};
function nl(a,b){if(2==b||9==b){var c=null;a.ba&&(c=null);var d=y(a.qh,a);c||(c=new Mk("//www.google.com/images/cleardot.gif"),sk(c));hl(c.toString(),1E4,d)}else Dk(2);Ul(a,b)}
k.qh=function(a){a?Dk(2):(Dk(1),Ul(this,8))};
function Ul(a,b){a.D=0;a.ba&&a.ba.dd(b);Kl(a);Il(a)}
function Kl(a){a.D=0;a.Ba=-1;if(a.ba)if(0==a.i.length&&0==a.f.length)a.ba.tc();else{wb(a.i);var b=wb(a.f);a.i.length=0;a.f.length=0;a.ba.tc(b)}}
function kl(a,b,c){var d=al(c);if(""!=d.g)b&&Ok(d,b+"."+d.g),Pk(d,d.G);else{var e=window.location;d=bl(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Bb&&Eb(a.Bb,function(f,g){Hk(d,g,f)});
Hk(d,"VER",a.Xa);Jl(a,d);return d}
k.wc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new pl;a.ka=!1;return a};
k.isActive=function(){return!!this.ba&&this.ba.isActive(this)};
function Ik(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){a()},b)}
k.ua=function(a){Cl.dispatchEvent(new Fl(Cl,a))};
function Dk(a){Cl.dispatchEvent(new Dl(Cl,a))}
k.Jb=function(){return!(!D||De(10))};
function Vl(){}
k=Vl.prototype;k.fd=function(){};
k.ed=function(){};
k.dd=function(){};
k.tc=function(){};
k.rd=function(){return{}};
k.isActive=function(){return!0};var Wl=function(){if(pe){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Nc))?a[1]:"0"}return oe?(a=/10[_.][0-9_.]+/,(a=a.exec(Nc))?a[0].replace(/_/g,"."):"10"):qe?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Nc))?a[1]:""):re||se||te?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Nc))?a[1].replace(/_/g,"."):""):""}();function Xl(a){return(a=a.exec(Nc))?a[1]:""}
var Yl=function(){if(He)return Xl(/Firefox\/([0-9.]+)/);if(D||ke||je)return Ae;if(Le)return fe()?Xl(/CriOS\/([0-9.]+)/):Xl(/Chrome\/([0-9.]+)/);if(Me&&!fe())return Xl(/Version\/([0-9.]+)/);if(Ie||Je){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Nc);if(a)return a[1]+"."+a[2]}else if(Ke)return(a=Xl(/Android\s+([0-9.]+)/))?a:Xl(/Version\/([0-9.]+)/);return""}();
function Zl(a){return 0<=qc(Yl,a)}
;function $l(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=sg(h,"position")){var m=wg(h);if(!l){l=Fg(h);var n;if(n=l){n=Me&&Zl(10);var u;if(u=ue)u=0<=qc(Wl,10);var t=Le&&Zl(85);n=me||n||u||t}l=n?-h.scrollLeft:!l||le&&Ce("8")||"visible"==sg(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=ff(m,new ef(l,h.scrollTop))}}}h=m||new ef;m=Eg(a);if(l=vg(a))t=new kg(l.left,l.top,l.right-l.left,l.bottom-l.top),l=Math.max(m.left,t.left),
n=Math.min(m.left+m.width,t.left+t.width),l<=n&&(u=Math.max(m.top,t.top),t=Math.min(m.top+m.height,t.top+t.height),u<=t&&(m.left=l,m.top=u,m.width=n-l,m.height=t-u));l=hf(a);u=hf(c);if(l.f!=u.f){n=l.f.body;u=xf(u.f);t=new ef(0,0);var w=(w=kf(n))?xf(w):window;if(he(w,"parent")){var I=n;do{var aa=w==u?wg(I):yg(I);t.x+=aa.x;t.y+=aa.y}while(w&&w!=u&&w!=w.parent&&(I=w.frameElement)&&(w=w.parent))}n=ff(t,wg(n));!D||De(9)||uf(l.f)||(n=ff(n,vf(l.f)));m.left+=n.x;m.top+=n.y}a=am(a,b);b=m.left;a&4?b+=m.width:
a&2&&(b+=m.width/2);b=new ef(b,m.top+(a&1?m.height:0));b=ff(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var ba;g&&(ba=vg(c))&&(ba.top-=h.y,ba.right-=h.x,ba.bottom-=h.y,ba.left-=h.x);return bm(b,c,d,f,ba,g,void 0)}
function bm(a,b,c,d,e,f,g){a=a.clone();var h=am(b,c);c=Cg(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
m+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,m+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new kg(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new ef(f.left,f.top);a instanceof ef?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Ag(g,!1);b.style.top=Ag(a,!1);g=new gf(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=kf(b),a=uf(hf(g).f),!D||Ce("10")||a&&Ce("8")?(b=b.style,me?b.MozBoxSizing="border-box":ne?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(D?(a=Hg(b,"paddingLeft"),f=Hg(b,"paddingRight"),d=Hg(b,"paddingTop"),h=Hg(b,"paddingBottom"),a=new hg(d,f,h,a)):(a=rg(b,"paddingLeft"),f=rg(b,"paddingRight"),d=rg(b,"paddingTop"),h=rg(b,"paddingBottom"),a=new hg(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),D&&!De(9)?(f=Jg(b,"borderLeft"),d=Jg(b,"borderRight"),h=Jg(b,"borderTop"),b=Jg(b,"borderBottom"),b=new hg(h,d,b,f)):(f=rg(b,"borderLeftWidth"),d=rg(b,"borderRightWidth"),h=rg(b,"borderTopWidth"),b=rg(b,"borderBottomWidth"),
b=new hg(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function am(a,b){return(b&8&&Fg(a)?b^4:b)&-9}
;function cm(a){eg.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.A=!!a}
A(cm,eg);k=cm.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function dm(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ra(d),b.apply(void 0,arguments))},a)}
function em(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=mb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ra(b)}}
k.ra=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Oa):(c&&rb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
k.ha=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];fm(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.ra(c)}}return 0!=e}return!1};
function fm(a,b,c){Tg(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(B(b,this.ra,this),delete this.g[a])}else this.f.length=0,this.g={}};
function gm(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=gm(a,d);return c}
k.L=function(){cm.O.L.call(this);this.clear();this.i.length=0};function hm(a){this.f=a}
hm.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Vj(b))};
hm.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
hm.prototype.remove=function(a){this.f.remove(a)};function im(a){this.f=a}
A(im,hm);function jm(a){this.data=a}
function km(a){return void 0===a||a instanceof jm?a:new jm(a)}
im.prototype.set=function(a,b){im.O.set.call(this,a,km(b))};
im.prototype.g=function(a){a=im.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
im.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function lm(a){this.f=a}
A(lm,im);function mm(a){var b=a.creation;a=a.expiration;return!!a&&a<z()||!!b&&b>z()}
lm.prototype.set=function(a,b,c){if(b=km(b)){if(c){if(c<z()){lm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}lm.O.set.call(this,a,b)};
lm.prototype.g=function(a,b){var c=lm.O.g.call(this,a);if(c)if(!b&&mm(c))lm.prototype.remove.call(this,a);else return c};function nm(a){this.f=a}
A(nm,lm);function om(a,b){var c=[];uj(b,function(d){try{var e=nm.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):mm(e)&&c.push(d)},a);
return c}
function pm(a,b){var c=om(a,b);B(c,function(d){nm.prototype.remove.call(this,d)},a)}
;function qm(){}
;function rm(){}
A(rm,qm);rm.prototype.clear=function(){var a=vj(this.Da(!0)),b=this;B(a,function(c){b.remove(c)})};function sm(a){this.f=a}
A(sm,rm);k=sm.prototype;k.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.f.removeItem(a)};
k.Da=function(a){var b=0,c=this.f,d=new sj;d.next=function(){if(b>=c.length)throw rj;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){this.f.clear()};
k.key=function(a){return this.f.key(a)};function tm(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(tm,sm);function um(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
A(um,sm);function vm(a,b){this.g=a;this.f=null;if(D&&!De(9)){wm||(wm=new wj);this.f=wm.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),wm.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(vm,rm);var xm={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},wm=null;function ym(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return xm[b]})}
k=vm.prototype;k.isAvailable=function(){return!!this.f};
k.set=function(a,b){this.f.setAttribute(ym(a),b);zm(this)};
k.get=function(a){a=this.f.getAttribute(ym(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.f.removeAttribute(ym(a));zm(this)};
k.Da=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new sj;d.next=function(){if(b>=c.length)throw rj;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);zm(this)};
function zm(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Am(a,b){this.g=a;this.f=b+"::"}
A(Am,rm);Am.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Am.prototype.get=function(a){return this.g.get(this.f+a)};
Am.prototype.remove=function(a){this.g.remove(this.f+a)};
Am.prototype.Da=function(a){var b=this.g.Da(!0),c=this,d=new sj;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Bm(a){var b=new tm;return b.isAvailable()?a?new Am(b,a):b:null}
;function Cm(){this.f=[];this.g=[]}
Cm.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
Cm.prototype.clear=function(){this.f=[];this.g=[]};
Cm.prototype.remove=function(a){var b=this.f;var c=gb(b,a);0<=c?(tb(b,c),b=!0):b=!1;return b||rb(this.g,a)};
Cm.prototype.qa=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function Dm(){}
Pa(Dm);Dm.prototype.f=0;function Em(a){hj.call(this);this.K=a||hf();this.ka=null;this.mb=!1;this.j=null;this.C=void 0;this.Z=this.Ja=null;this.xa=!1}
A(Em,hj);k=Em.prototype;k.Jf=Dm.getInstance();k.getId=function(){return this.ka||(this.ka=":"+(this.Jf.f++).toString(36))};
k.yc=function(){return this.j};
function Fm(a,b){return a.j?F(b,a.j||a.K.f):null}
function Gm(a,b){if(a.mb)throw Error("Component already rendered");if(b){a.xa=!0;var c=kf(b);a.K&&a.K.f==c||(a.K=hf(b));a.j=b;a.jb()}else throw Error("Invalid element to decorate");}
k.jb=function(){this.mb=!0;Hm(this,function(a){!a.mb&&a.yc()&&a.jb()})};
k.Oa=function(){Hm(this,function(a){a.mb&&a.Oa()});
this.C&&Qj(this.C);this.mb=!1};
k.L=function(){this.mb&&this.Oa();this.C&&(this.C.dispose(),delete this.C);Hm(this,function(a){a.dispose()});
!this.xa&&this.j&&Ff(this.j);this.Ja=this.j=this.Z=null;Em.O.L.call(this)};
function Hm(a,b){a.Z&&B(a.Z,b,void 0)}
;function Im(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||r,e=d.document,f=a.nonce||Ka(d);f&&!a.nonce&&(a.nonce=f);if("help"==a.flow){var g=x("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}g=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=g;h=a.serverUri||"//www.google.com/tools/feedback";var l=d.GOOGLE_FEEDBACK_START;if(a.forceNewHelpPanel){var m=
hf(e).createElement("SCRIPT");f&&m.setAttribute("nonce",f);m.onload=function(){d.startHelpPanel({helpcenter:a.helpCenterPath.split("/")[1],apiKey:"testpage",locale:a.locale,enableSendFeedback:a.enableSendFeedback||!1,helpApiData:{helpApiConfig:a,productData:b,productWindow:c}})};
md(m,fc(Zb($b("https://www.gstatic.com/support/help/staging/main_frame/help_panel_staging_binary.js"))));e.body.appendChild(m)}else if(l)l.apply(d,g);else{g=h+"/load.js?";for(m in a)h=a[m],null==h||Sa(h)||(g+=encodeURIComponent(m)+"="+encodeURIComponent(h)+"&");m=hf(e).createElement("SCRIPT");f&&m.setAttribute("nonce",f);md(m,Rd(g));e.body.appendChild(m)}}
v("userfeedback.api.startFeedback",Im,void 0);v("userfeedback.api.isBrowserSupportedForGenie",function(){return Jm()},void 0);
function Jm(){return D?Zl("8"):He?Zl("15"):Me?Zl("5"):Le||ke}
v("userfeedback.api.isBrowserSupportedForHelp",Jm,void 0);function Km(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Lm=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Lm,void 0);function Mm(a){Km(Lm,arguments)}
function K(a,b){return a in Lm?Lm[a]:b}
;function Nm(a,b,c){a&&(a.dataset?a.dataset[Om(b)]=String(c):a.setAttribute("data-"+b,c))}
function L(a,b){return a?a.dataset?a.dataset[Om(b)]:a.getAttribute("data-"+b):null}
function Pm(a,b){a&&(a.dataset?delete a.dataset[Om(b)]:a.removeAttribute("data-"+b))}
var Qm={};function Om(a){return Qm[a]||(Qm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Rm={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sm(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rm||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Tm(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Sm.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sm.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sm.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Um=0;function Vm(a){var b=a.__yt_uid_key;b||(b=Wm(),a.__yt_uid_key=b);return b}
function Xm(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?B(a.childNodes,function(c){b.appendChild(Xm(c))}):Hf(b,a);
return b}
function Ym(a,b){a=E(a);b=E(b);return!!Zf(a,function(c){return c===b},!0,void 0)}
function Zm(a,b){var c=nf(a,null,b);return c.length?c[0]:null}
function $m(){var a=document,b;kb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function an(){Gj(document.body,"hide-players",!1);var a=pf("preserve-players");B(a,function(b){Ej(b,"preserve-players")})}
var Wm=x("ytDomDomGetNextId")||function(){return++Um};
v("ytDomDomGetNextId",Wm,void 0);var bn=[];function cn(a){bn.forEach(function(b){return b(a)})}
function dn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){en(b),cn(b)}}:a}
function en(a){var b=x("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=K("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Mm("ERRORS",b))}
function fn(a){var b=x("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=K("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Mm("ERRORS",b))}
;var gn=r.ytEventsEventsListeners||{};v("ytEventsEventsListeners",gn,void 0);var hn=r.ytEventsEventsCounter||{count:0};v("ytEventsEventsCounter",hn,void 0);
function jn(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Kb(gn,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&Nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function M(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jn(a,b,c,d);if(e)return e;e=++hn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sm(h);if(!Zf(h.relatedTarget,function(l){return l==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sm(h);
h.currentTarget=a;return c.call(a,h)};
g=dn(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gn[e]=[a,b,c,g,d];return e}
function ln(a,b,c,d){var e=a||document;return M(e,b,function(f){var g=Zf(f.target,function(h){return h===e||d(h)},!0);
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function N(a){a&&("string"==typeof a&&(a=[a]),B(a,function(b){if(b in gn){var c=gn[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gn[b]}}))}
function mn(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var kn=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function nn(a,b,c,d){return ln(a,b,c,function(e){return H(e,d)})}
function on(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function pn(a,b,c){var d=void 0===d?{}:d;var e=M(a,b,function(){N(e);c.apply(a,arguments)},d)}
;var qn=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",qn,void 0);function rn(a){Km(qn,arguments)}
function sn(a,b,c){b=void 0===b?{}:b;a=(a=a in qn?qn[a]:c)||"";c={};for(var d in b){c.yb=d;var e=function(f){return function(){return String(b[f.yb])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.yb+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.yb,"gi"),e);c={yb:c.yb}}return a}
function tn(a){Km(qn,arguments)}
;function un(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=rd(e[0]||""),g=rd(e[1]||"");f in b?Array.isArray(b[f])?xb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};en(h)}}}return b}
function vn(a){var b=[];Eb(a,function(c,d){var e=qd(d),f;Array.isArray(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+qd(g))})});
return b.join("&")}
function wn(a){"?"==a.charAt(0)&&(a=a.substr(1));return un(a)}
function xn(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),wn(1<a.length?a[1]:a[0])):{}}
function yn(a,b){return zn(a,b||{},!0)}
function zn(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wn(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Nd(a,e)+d}
function An(a){if(!b)var b=window.location.href;var c=Dd(a)[1]||null,d=Fd(a);c&&d?(a=Dd(a),b=Dd(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Fd(b)==d&&(Number(Dd(b)[4]||null)||null)==(Number(Dd(a)[4]||null)||null):!0;return a}
function Bn(){var a=Fd(Cn);return null!==a?a.split(".").reverse():null}
;function Dn(a){var b=En;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Fn(b),Gn(b));b.ca_type="image";a&&(b.bid=a);return b}
function Fn(a){var b={};b.dt=Kg;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Qe:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!Qe.navigator&&"unknown"!==typeof Qe.navigator.javaEnabled&&!!Qe.navigator.javaEnabled&&Qe.navigator.javaEnabled();Qe.screen&&(b.u_h=Qe.screen.height,b.u_w=Qe.screen.width,b.u_ah=Qe.screen.availHeight,b.u_aw=Qe.screen.availWidth,b.u_cd=
Qe.screen.colorDepth);Qe.navigator&&Qe.navigator.plugins&&(b.u_nplug=Qe.navigator.plugins.length);Qe.navigator&&Qe.navigator.mimeTypes&&(b.u_nmime=Qe.navigator.mimeTypes.length);return b}
function Gn(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var h=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var l=tf(c||window).round()}catch(m){l=new gf(-12245933,-12245933)}c=l;l={};d=new Bi;r.SVGElement&&r.document.createElementNS&&d.set(0);e=dg();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);r.crypto&&r.crypto.subtle&&d.set(3);r.TextDecoder&&r.TextEncoder&&d.set(4);d=Ci(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.g;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!Qe.WebGLRenderingContext,l}
var En=new function(){var a=window.document;this.f=window;this.g=a};
v("yt.ads_.signals_.getAdSignalsString",function(a){return vn(Dn(a))},void 0);function O(a){a=Hn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function In(a,b){var c=Hn(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Hn(a){var b=K("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:K("EXPERIMENT_FLAGS",{})[a]}
function Jn(){var a=[],b=K("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=K("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Kn="XMLHttpRequest"in r?function(){return new XMLHttpRequest}:null;
function Ln(){if(!Kn)return null;var a=Kn();return"open"in a?a:null}
;function P(a,b){"function"===typeof a&&(a=dn(a));return window.setTimeout(a,b)}
function Mn(a,b){"function"===typeof a&&(a=dn(a));return window.setInterval(a,b)}
function Q(a){window.clearTimeout(a)}
function Nn(a){window.clearInterval(a)}
;var On={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Pn="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Qn=!1;function Rn(a,b){b=void 0===b?{}:b;var c=An(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in On){var f=K(On[e]);!f||!c&&Fd(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Fd(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Fd(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!Fd(a))b["X-YouTube-Ad-Signals"]=vn(Dn(void 0));return b}
function Sn(a){var b=window.location.search,c=Fd(a),d=Ed(Dd(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wn(b),f={};B(Pn,function(g){e[g]&&(f[g]=e[g])});
return zn(a,f||{},!1)}
function Tn(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Un(a,b);var d=Vn(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Q(f);var h=g.ok,l=function(m){m=m||{};var n=b.context||r;h?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.fa&&b.fa.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Wd&&0<b.timeout&&(f=P(function(){e||(e=!0,Q(f),b.Wd.call(b.context||r))},b.timeout))}else Wn(a,b)}
function Wn(a,b){var c=b.format||"JSON";a=Un(a,b);var d=Vn(a,b),e=!1,f=Xn(a,function(l){if(!e){e=!0;h&&Q(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var m=!0;break a;default:m=!1}var n=null,u=400<=l.status&&500>l.status,t=500<=l.status&&600>l.status;if(m||u||t)n=Yn(a,c,l,b.Ya);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};u=b.context||r;
m?b.onSuccess&&b.onSuccess.call(u,l,n):b.onError&&b.onError.call(u,l,n);b.fa&&b.fa.call(u,l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.bb&&0<b.timeout){var g=b.bb;var h=P(function(){e||(e=!0,f.abort(),Q(h),g.call(b.context||r,f))},b.timeout)}return f}
function Un(a,b){b.aj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=K("XSRF_FIELD_NAME",void 0),d=b.Ka;d&&(d[c]&&delete d[c],a=yn(a,d));return a}
function Vn(a,b){var c=K("XSRF_FIELD_NAME",void 0),d=K("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.R,g=K("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Xi||Fd(a)&&!b.withCredentials&&Fd(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.R&&b.R[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=wn(e),Rb(e,f),e=b.je&&"JSON"==b.je?JSON.stringify(e):Ld(e));f=e||f&&!Lb(f);!Qn&&f&&"POST"!=b.method&&(Qn=!0,en(Error("AJAX request with postData should use POST")));
return e}
function Yn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,fn(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Zn(a):null)e={},B(a.getElementsByTagName("*"),function(g){e[g.tagName]=$n(g)})}d&&ao(e);
return e}
function ao(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=hd($b("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ao(a[b])}}
function Zn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function $n(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function bo(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?$n(c[0]):null}
var co=Zn;function Xn(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&dn(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ln();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Sn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Rn(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;function eo(a,b,c,d,e,f){Ze.set(""+a,b,{Hd:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function fo(a,b){return Ze.get(""+a,b)}
function go(a,b,c){return Ze.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;var ho=Ie||Je;function io(){var a=/WebKit\/([0-9]+)/.exec(Nc);return!!(a&&600<=parseInt(a[1],10))}
function jo(){var a=/WebKit\/([0-9]+)/.exec(Nc);return!!(a&&602<=parseInt(a[1],10))}
function ko(a){var b=Nc;return b?0<=b.toLowerCase().indexOf(a):!1}
;var lo={},mo=0;
function no(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ko("cobalt"))a&&(a=uc(zc(a)||Bc),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a=Wc(Xc(a)).toString(),a=qd(Vj(a))),/^[\s\xa0]*$/.test(a)||(a=yf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),kf(a).body.appendChild(a)));else if(e)Xn(a,b,"POST",e,d);else if(K("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Xn(a,b,"GET","",d);else{b:{try{var f=new db({url:a});if(f.i&&f.g||f.j){var g=Ed(Dd(a)[5]||null),
h;if(!(h=!g||!g.endsWith("/aclk"))){var l=a.search(Od);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var u=c;break d}}c+=3}u=-1}if(0>u)var t=null;else{var w=a.indexOf("&",u);if(0>w||w>l)w=l;u+=3;t=rd(a.substr(u,w-u))}h="1"!==t}var I=!h;break b}}catch(aa){}I=!1}I?oo(a)?(b&&b(),I=!0):I=!1:I=!1;I||po(a,b)}}
function oo(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function po(a,b){var c=new Image,d=""+mo++;lo[d]=c;c.onload=c.onerror=function(){b&&lo[d]&&b();delete lo[d]};
c.src=a}
;var qo=r.ytPubsubPubsubInstance||new cm,ro=r.ytPubsubPubsubSubscribedKeys||{},so=r.ytPubsubPubsubTopicToKeys||{},to=r.ytPubsubPubsubIsSynchronous||{};function R(a,b,c){var d=uo();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var g=function(){ro[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{to[a]?g():P(g,0)}catch(h){en(h)}},c);
ro[e]=!0;so[a]||(so[a]=[]);so[a].push(e);return e}return 0}
function vo(a){var b=R("yt-ui-dialog-hide-complete",function(c){a.apply(void 0,arguments);wo(b)},void 0)}
function wo(a){var b=uo();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),B(a,function(c){b.unsubscribeByKey(c);delete ro[c]}))}
function S(a,b){var c=uo();return c?c.publish.apply(c,arguments):!1}
function xo(a,b){to[a]=!0;var c=uo();c=c?c.publish.apply(c,arguments):!1;to[a]=!1;return c}
function yo(a){var b=uo();if(b)if(b.clear(a),a)zo(a);else for(var c in so)zo(c)}
function uo(){return r.ytPubsubPubsubInstance}
function zo(a){so[a]&&(a=so[a],B(a,function(b){ro[b]&&delete ro[b]}),a.length=0)}
cm.prototype.subscribe=cm.prototype.subscribe;cm.prototype.unsubscribeByKey=cm.prototype.ra;cm.prototype.publish=cm.prototype.ha;cm.prototype.clear=cm.prototype.clear;v("ytPubsubPubsubInstance",qo,void 0);v("ytPubsubPubsubTopicToKeys",so,void 0);v("ytPubsubPubsubIsSynchronous",to,void 0);v("ytPubsubPubsubSubscribedKeys",ro,void 0);var Ao=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Bo=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Co(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ao,""),c=c.replace(Bo,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return Do(a,b,c)}
function Do(a,b,c){c=void 0===c?null:c;var d=Eo(a),e=document.getElementById(d),f=e&&L(e,"loaded"),g=e&&!f;if(f)return b&&b(),e;b&&(f=R(d,b),b=""+Ta(b),Fo[b]=f);return g?e:e=Go(a,d,function(){L(e,"loaded")||(Nm(e,"loaded","true"),S(d),P(Ya(yo,d),0))},c)}
function Go(a,b,c,d){d=void 0===d?null:d;var e=Bf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);md(e,Rd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Eo(a){var b=document.createElement("a");kd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+zd(a)}
var Fo={};var Ho=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Io(a,b){a=a||"";if(window.spf){var c=a.match(Ho);spf.style.load(a,c?c[1]:"",b);return null}return Jo(a,b)}
function Jo(a,b){var c=Ko(a),d=document.getElementById(c),e=d&&L(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(R(c,b),Ta(b));return f?d:d=Lo(a,c,function(){L(d,"loaded")||(Nm(d,"loaded","true"),S(c),P(Ya(yo,c),0))})}
function Lo(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Rd(a);d.rel="stylesheet";d.href=ec(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ko(a){var b=Bf("A"),c=$b("This URL is never added to the DOM");Zb(c);Zb(c);kd(b,new sc(a,tc));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+zd(a)}
;function Mo(){}
function No(a,b){return Oo(a,0,b)}
function Po(a,b){return Oo(a,1,b)}
;function Qo(){}
q(Qo,Mo);function Oo(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):P(a,c||0)}
function Ro(a){if(!isNaN(a)){var b=x("yt.scheduler.instance.cancelJob");b?b(a):Q(a)}}
Qo.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
Qo.prototype.pause=function(){var a=x("yt.scheduler.instance.pause");a&&a()};
Pa(Qo);Qo.getInstance();function So(){return parseInt(K("DCLKSTAT",0),10)}
;var To=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Uo(a){this.P=a;this.f=null;this.j=0;this.A=null;this.l=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.i=0;this.F=M(window,"mousemove",y(this.K,this));this.M=Mn(y(this.C,this),25)}
A(Uo,eg);Uo.prototype.K=function(a){void 0===a.f&&Tm(a);var b=a.f;void 0===a.g&&Tm(a);this.f=new ef(b,a.g)};
Uo.prototype.C=function(){if(this.f){var a=To();if(0!=this.j){var b=this.A,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.g[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.P();this.l=d}this.j=a;this.A=this.f;this.i=(this.i+1)%4}};
Uo.prototype.L=function(){Nn(this.M);N(this.F)};var Vo={};
function Wo(a){var b=void 0===a?{}:a;a=void 0===b.Lf?!0:b.Lf;b=void 0===b.bh?!1:b.bh;if(null==x("_lact",window)){var c=parseInt(K("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&Xo();M(document,"keydown",Xo);M(document,"keyup",Xo);M(document,"mousedown",Xo);M(document,"mouseup",Xo);a&&(b?M(window,"touchmove",function(){Yo("touchmove",200)},{passive:!0}):(M(window,"resize",function(){Yo("resize",200)}),M(window,"scroll",function(){Yo("scroll",200)})));
new Uo(function(){Yo("mouse",100)});
M(document,"touchstart",Xo,{passive:!0});M(document,"touchend",Xo,{passive:!0})}}
function Yo(a,b){Vo[a]||(Vo[a]=!0,Po(function(){Xo();Vo[a]=!1},b))}
function Xo(){null==x("_lact",window)&&Wo();var a=z();v("_lact",a,window);-1==x("_fact",window)&&v("_fact",a,window);(a=x("ytglobal.ytUtilActivityCallback_"))&&a()}
function Zo(){var a=x("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var $o=window,ap=$o.ytcsi&&$o.ytcsi.now?$o.ytcsi.now:$o.performance&&$o.performance.timing&&$o.performance.now&&$o.performance.timing.navigationStart?function(){return $o.performance.timing.navigationStart+$o.performance.now()}:function(){return(new Date).getTime()};var bp=In("initial_gel_batch_timeout",1E3),cp=Math.pow(2,16)-1,dp=null,ep=0,fp=void 0,gp=0,hp=0,ip=0,jp=!0,kp=r.ytLoggingTransportGELQueue_||new Map;v("ytLoggingTransportGELQueue_",kp,void 0);var lp=r.ytLoggingTransportTokensToCttTargetIds_||{};v("ytLoggingTransportTokensToCttTargetIds_",lp,void 0);function mp(){Q(gp);Q(hp);hp=0;fp&&fp.isReady()?(np(),kp.clear()):op()}
function op(){O("web_gel_timeout_cap")&&!hp&&(hp=P(mp,6E4));Q(gp);var a=K("LOGGING_BATCH_TIMEOUT",In("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&jp&&(a=bp);gp=P(mp,a)}
function np(){for(var a=fp,b=Math.round(ap()),c=p(kp),d=c.next();!d.done;d=c.next()){var e=p(d.value);d=e.next().value;var f=e.next().value;e=Pb({context:pp(a.f||qp())});e.events=f;(f=lp[d])&&rp(e,d,f);delete lp[d];sp(e,b);tp(a,"log_event",e,{retry:!0,onSuccess:function(){ep=Math.round(ap()-b)}});
jp=!1}}
function sp(a,b){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=K("EVENT_ID",void 0);if(c){var d=K("BATCH_CLIENT_COUNTER",void 0)||0;!d&&O("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*cp/2));d++;d>cp&&(d=1);Mm("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;dp&&ep&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:dp,roundtripMs:String(ep)});dp=c;ep=0}}
function rp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var up=r.ytLoggingGelSequenceIdObj_||{};v("ytLoggingGelSequenceIdObj_",up,void 0);
function vp(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||ap());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Zo())};O("log_sequence_info_on_gel_web")&&d.jc&&(a=e.context,b=d.jc,up[b]=b in up?up[b]+1:0,a.sequence={index:up[b],groupKey:b},d.af&&delete up[d.jc]);d=d.od;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),lp[d.token]=a,a=d.token);d=kp.get(a)||[];kp.set(a,d);d.push(e);c&&(fp=new c);c=In("web_logging_max_batch")||100;
e=ap();d.length>=c?mp():10<=e-ip&&(op(),ip=e)}
;function wp(){for(var a={},b=p(Object.entries(wn(K("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=p(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function xp(){return"INNERTUBE_API_KEY"in Lm&&"INNERTUBE_API_VERSION"in Lm}
function qp(){return{innertubeApiKey:K("INNERTUBE_API_KEY",void 0),innertubeApiVersion:K("INNERTUBE_API_VERSION",void 0),Nf:K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Of:K("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qf:K("INNERTUBE_CONTEXT_HL",void 0),Pf:K("INNERTUBE_CONTEXT_GL",void 0),Rf:K("INNERTUBE_HOST_OVERRIDE",void 0)||"",Tf:!!K("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Sf:!!K("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:K("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function pp(a){var b={client:{hl:a.Qf,gl:a.Pf,clientName:a.Of,clientVersion:a.innertubeContextClientVersion,configInfo:a.Nf}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=K("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Jn();0<c.length&&(b.request={internalExperimentFlags:c});a.appInstallData&&O("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);K("DELEGATED_SESSION_ID")&&
!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:K("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,wp());return b}
function yp(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||K("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ni||K("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Ki:b=Uh([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=K("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=K("DELEGATED_SESSION_ID")));return d}
;function zp(a){a=Object.assign({},a);delete a.Authorization;var b=Uh();if(b){var c=new pj;c.update(K("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Pe(c.digest(),3)}return a}
function Ap(a){a=zp(a);var b=new pj;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Bp(){var a;(a=Bm("yt.innertube"))||(a=new vm("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new lm(a):null;this.g=document.domain||window.location.hostname}
Bp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Vj(b))}catch(f){return}else e=escape(b);eo(a,e,c,"/",this.g)};
Bp.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=fo(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bp.prototype.remove=function(a){this.f&&this.f.remove(a);go(a,"/",this.g)};var Cp;function Dp(){Cp||(Cp=new Bp);return Cp}
function Ep(a,b,c,d){if(d)return null;d=Dp().get("nextId",!0)||1;var e=Dp().get("requests",!0)||{};e[d]={method:a,request:b,authState:zp(c),requestTime:Math.round(ap())};Dp().set("nextId",d+1,86400,!0);Dp().set("requests",e,86400,!0);return d}
function Fp(a){var b=Dp().get("requests",!0)||{};delete b[a];Dp().set("requests",b,86400,!0)}
function Gp(a){var b=Dp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(ap())-d.requestTime)){var e=d.authState,f=zp(yp(!1));Nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(ap())),tp(a,d.method,e,{}));delete b[c]}}Dp().set("requests",b,86400,!0)}}
;function Hp(){this.f=!0}
function Ip(){Hp.f||(Hp.f=new Hp);return Hp.f}
function Jp(a){var b={},c=Uh([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=void 0!==a?a:K("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in Lm||(b["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in Lm&&(b["X-Goog-PageId"]=K("DELEGATED_SESSION_ID")));return b}
;var Kp={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Lp=!1,Mp,Np=new hj;function Op(){var a=Error.call(this,"No user identifier specified.");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Op.prototype)}
q(Op,Error);function Pp(a){if(!a)throw Error();throw a;}
function Qp(a){return a}
function Rp(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=p(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=p(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
Rp.all=function(a){return new Rp(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={fb:0};f.fb<a.length;f={fb:f.fb},++f.fb)Rp.resolve(a[f.fb]).then(function(g){return function(h){d[g.fb]=h;e--;0===e&&b(d)}}(f))["catch"](function(g){c(g)})})};
Rp.resolve=function(a){return new Rp(function(b,c){a instanceof Rp?a.then(b,c):b(a)})};
Rp.reject=function(a){return new Rp(function(b,c){c(a)})};
Rp.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Qp,e=null!==b&&void 0!==b?b:Pp;return new Rp(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Sp(c,c,d,f,g)}),c.onRejected.push(function(){Tp(c,c,e,f,g)})):"FULFILLED"===c.state.status?Sp(c,c,d,f,g):"REJECTED"===c.state.status&&Tp(c,c,e,f,g)})};
Rp.prototype["catch"]=function(a){return this.then(void 0,a)};
function Sp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Rp?Up(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tp(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Rp?Up(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Up(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Rp?Up(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Vp(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Vp.prototype)}
q(Vp,Error);function Wp(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Wp.prototype)}
q(Wp,Error);function Xp(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Xp.prototype)}
q(Xp,Error);function Yp(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Yp.prototype)}
q(Yp,Error);function Zp(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function $p(a,b){return new Rp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function aq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bq(a){return new Zg(function(b,c){aq(a,b,c)})}
function cq(a){return new Rp(function(b,c){aq(a,b,c)})}
;function dq(a,b){this.f=a;this.options=b}
k=dq.prototype;k.add=function(a,b,c){return this.sa([a],"readwrite",function(d){return d.f(a).add(b,c)})};
k.clear=function(a){return this.sa([a],"readwrite",function(b){return b.f(a).clear()})};
k.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return this.sa([a],"readonly",function(c){return c.f(a).count(b)})};
k.Wb=function(a,b){var c=this.f.createObjectStore(a,b);return new eq(c)};
k["delete"]=function(a,b){return this.sa([a],"readwrite",function(c){return c.f(a)["delete"](b)})};
k.get=function(a,b){return this.sa([a],"readwrite",function(c){return c.f(a).get(b)})};
function fq(a,b){return a.sa(["databases"],"readwrite",function(c){c=c.f("databases");return cq(c.f.put(b,void 0))})}
k.sa=function(a,b,c){a=this.f.transaction(a,void 0===b?"readonly":b);a=new gq(a);return hq(a,c)};
k.getVersion=function(){return this.f.version};
function eq(a){this.f=a}
k=eq.prototype;k.add=function(a,b){return cq(this.f.add(a,b))};
k.clear=function(){return cq(this.f.clear()).then(function(){})};
k.count=function(a){return cq(this.f.count(a))};
k["delete"]=function(a){return cq(this.f["delete"](a))};
k.get=function(a){return cq(this.f.get(a))};
k.index=function(a){return new iq(this.f.index(a))};
k.getName=function(){return this.f.name};
k.Kd=function(a,b){var c=this.f.openCursor(void 0===a.query?null:a.query,void 0===a.direction?"next":a.direction);return jq(c).then(function(d){return $p(d,b)})};
function kq(){dq.apply(this,arguments)}
q(kq,dq);function gq(a){var b=this;this.g=a;this.i=new Map;this.aborted=!1;this.done=new Zg(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;e?("QuotaExceededError"===e.name?fn(new Xp):"UnknownError"===e.name&&fn(new Yp),d(e)):d(new Vp)})})}
function hq(a,b){var c=new Zg(function(d,e){b(a).then(function(f){try{a.commit(),d(f)}catch(g){e(g)}})["catch"](e)});
return hh([c,a.done]).then(function(d){return p(d).next().value})}
gq.prototype.abort=function(){this.g.abort();this.aborted=!0;throw new Vp;};
gq.prototype.commit=function(){var a=this.g;a.commit&&!this.aborted&&a.commit()};
gq.prototype.f=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new eq(a),this.i.set(a,b));return b};
function iq(a){this.f=a}
iq.prototype.count=function(a){return cq(this.f.count(a))};
iq.prototype.get=function(a){return cq(this.f.get(a))};
iq.prototype.g=function(a,b){var c=this.f.openCursor(void 0===a.query?null:a.query,void 0===a.direction?"next":a.direction);return jq(c).then(function(d){return $p(d,b)})};
function lq(a,b){this.request=a;this.f=b}
function jq(a){return cq(a).then(function(b){return null===b?null:new lq(a,b)})}
lq.prototype.g=function(){this.f["continue"](void 0);return jq(this.request)};
lq.prototype["delete"]=function(){return cq(this.f["delete"]()).then(function(){})};
lq.prototype.getValue=function(){return this.f.value};
lq.prototype.update=function(a){return cq(this.f.update(a))};function mq(){dq.apply(this,arguments)}
q(mq,dq);mq.prototype.Wb=function(a,b){var c=this.f.createObjectStore(a,b);return new nq(c)};
mq.prototype["delete"]=function(a,b){return this.sa([a],"readwrite",function(c){return c.f(a)["delete"](b)})};
mq.prototype.sa=function(a,b,c){a=this.f.transaction(a,void 0===b?"readonly":b);a=new oq(a);return hq(a,c)};
function nq(){eq.apply(this,arguments)}
q(nq,eq);nq.prototype["delete"]=function(a){return cq(this.f["delete"](a))};
nq.prototype.index=function(a){return new pq(this.f.index(a))};
nq.prototype.Kd=function(a,b){var c=this.f.openCursor(a.query,a.direction);return qq(c).then(function(d){return $p(d,b)})};
function oq(){gq.apply(this,arguments);this.j=new Map}
q(oq,gq);oq.prototype.f=function(a){a=this.g.objectStore(a);var b=this.j.get(a);b||(b=new nq(a),this.j.set(a,b));return b};
function pq(){iq.apply(this,arguments)}
q(pq,iq);pq.prototype.g=function(a,b){var c=this.f.openCursor(a.query,a.direction);return qq(c).then(function(d){return $p(d,b)})};
function rq(){lq.apply(this,arguments)}
q(rq,lq);function qq(a){return cq(a).then(function(b){return null===b?null:new rq(a,b)})}
rq.prototype.g=function(){this.f["continue"](void 0);return qq(this.request)};function sq(a,b,c,d,e){function f(){t||(t=new d(g.result,{closed:u}));return t}
var g=self.indexedDB.open(a,b),h=c.blocked,l=c.blocking,m=c.qj,n=c.upgrade,u=c.closed,t;n&&g.addEventListener("upgradeneeded",function(w){if(null===w.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var I=f(),aa=new e(g.transaction);n(I,w.oldVersion,w.newVersion,aa)});
h&&g.addEventListener("blocked",function(){h()});
return bq(g).then(function(w){l&&w.addEventListener("versionchange",function(){l(f())});
m&&w.addEventListener("close",function(){m()});
return f()})}
function tq(a,b,c){c=void 0===c?{}:c;return sq(a,b,c,dq,gq)}
function uq(a,b,c){c=void 0===c?{}:c;return sq(a,b,c,mq,oq)}
function vq(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return bq(c).then(function(){})}
;var wq,xq,yq=["getAll","getAllKeys","getKey","openKeyCursor"],zq=["getAll","getAllKeys","getKey","openKeyCursor"],Aq=!1;
function Bq(){return ce(this,function b(){var c,d;return Ea(b,function(e){switch(e.f){case 1:if((Aq||ho)&&io()&&!jo()&&!O("ytidb_allow_on_ios_safari_v8_and_v9")||ke)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}va(e);return ua(e,lh(tq("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:xa(e);if(d)try{d.close()}catch(f){}ya(e);break;case 2:return wa(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function Cq(){return void 0!==wq?dh(wq):new Zg(function(a){Bq().then(function(b){wq=b;a(b)})})}
function Dq(){return void 0!==xq?dh(xq):Cq().then(function(a){if(!a)return!1;var b=p(yq);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=p(zq);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return xq=a})}
;function Eq(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
;var Fq;function Gq(){function a(b){b.close();Fq=void 0}
Fq||(Fq=lh(tq("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&b.Wb("databases",{keyPath:"actualName"})}}),function(b){return Zp(b)?tq("YtIdbMeta",void 0,{blocking:a}):eh(b)}));
return Fq}
function Hq(a){return Gq().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return fq(b,a)})})}
function Iq(a){return Gq().then(function(b){return b["delete"]("databases",a)})}
function Jq(a){return ce(this,function c(){var d,e;return Ea(c,function(f){return 1==f.f?(d=[],ua(f,Gq(),2)):3!=f.f?(e=f.g,ua(f,e.sa(["databases"],"readonly",function(g){return g.f("databases").Kd({},function(h){a(h.getValue())&&d.push(h.getValue());return h.g()})}),3)):f["return"](d)})})}
function Kq(a){return new Zg(function(b,c){Jq(function(d){return d.publicName===a}).then(b)["catch"](c)})}
function Lq(a){return new Zg(function(b,c){Jq(function(d){return d.userIdentifier===a}).then(b)["catch"](c)})}
;function Mq(a){return{actualName:a,publicName:a,userIdentifier:void 0,signedIn:!1}}
function Nq(a){if(!Lp)return Mq(a);var b=Mp;if(!b)throw new Op;return{actualName:a+":"+b.userIdentifier,publicName:a,userIdentifier:b.userIdentifier,signedIn:b.signedIn}}
function Oq(a,b,c){Eq(a);var d;try{b?d=Mq(a):d=Nq(a)}catch(e){return eh(e)}return lh(Hq(d).then(function(){return c(d)}),function(e){return lh(Iq(d.actualName),function(){}).then(function(){return eh(e)})})}
function Pq(){return Cq().then(function(a){if(!a)throw new Wp;})}
function Qq(){return Dq().then(function(a){if(!a)throw new Wp;})}
function Rq(a,b,c){c=void 0===c?{}:c;return Pq().then(function(){return Oq(a,!1,function(d){return tq(d.actualName,b,c)})})}
function Sq(a,b,c){c=void 0===c?{}:c;return Pq().then(function(){return Oq(a,!0,function(d){return tq(d.actualName,b,c)})})}
function Tq(a,b){b=void 0===b?{}:b;Eq(a);var c;return Pq().then(function(){c=Nq(a);return vq(c.actualName,b)}).then(function(){return Iq(c.actualName)})}
function Uq(a,b){var c=a.map(function(d){return vq(d.actualName,b).then(function(){return Iq(d.actualName)})});
return hh(c).then(function(){})}
function Vq(a,b){b=void 0===b?{}:b;Eq(a);return Pq().then(function(){return vq(a,b)}).then(function(){return Iq(a)})}
;function Wq(a){a=Error.call(this,"Object store not created ('"+a+"')");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Wq.prototype)}
q(Wq,Error);function Xq(a,b){for(var c=p(Object.keys(b.hg)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function Yq(a,b){this.name=a;this.options=b;this.g=!1;Eq(a)}
Yq.prototype.open=function(){var a=this;if(!this.f){var b=this.options.oh?Sq:Rq,c=function(){a.f===f&&(a.f=void 0);Np.g.remove("authchanged",c,void 0,void 0)},d={blocking:function(g){g.close()},
closed:c,upgrade:this.options.upgrade},e=function(){return lh(b(a.name,a.options.version,d).then(function(g){if(He){var h=Xq(g,a.options);if(void 0!==h){if(He&&!a.g)return a.g=!0,a["delete"]().then(function(){return e()});
throw new Wq(h);}}return g}),function(g){if(Zp(g))return b(a.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));
c();throw g;})};
var f=e();Np.g.add("authchanged",c,!0,void 0,void 0);this.f=f}return this.f};
Yq.prototype["delete"]=function(a){a=void 0===a?{}:a;return(this.options.oh?Vq:Tq)(this.name,a)};function Zq(){Rp.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
q(Zq,Rp);Zq.reject=Rp.reject;Zq.resolve=Rp.resolve;Zq.all=Rp.all;var T={};T.Uf=Cq;T.Vf=Dq;T.ai=!1;T.xi={oj:function(a){Aq=a},
mj:function(){xq=wq=void 0}};
T.Ci=dq;T.Gi=eq;T.hi=kq;T.Ii=gq;T.Ei=iq;T.Ai=lq;T.Di=mq;T.Hi=nq;T.Ji=oq;T.Fi=pq;T.Bi=rq;T.zi=function(a){this.request=a};
T.bj=function(a){return a instanceof Vp};
T.cj=Zp;T.fj=Rq;T.gj=function(a,b,c){c=void 0===c?{}:c;return Qq().then(function(){return Oq(a,!1,function(d){return uq(d.actualName,b,c)})})};
T.hj=Sq;T.ij=function(a,b,c){c=void 0===c?{}:c;return Qq().then(function(){return Oq(a,!0,function(d){return uq(d.actualName,b,c)})})};
T.Vi=Tq;T.Ti=function(a,b){b=void 0===b?{}:b;Eq(a);return Pq().then(function(){return Kq(a)}).then(function(c){return Uq(c,b)})};
T.Ri=function(a,b){b=void 0===b?{}:b;return Pq().then(function(){return Lq(a)}).then(function(c){return Uq(c,b)})};
T.Ui=Vq;T.Si=Tq;T.Te=Zq;T.pj=function(a,b){Lp=!0;Mp={userIdentifier:a,signedIn:b};Np.dispatchEvent("authchanged")};
T.Qi=function(){Lp=!0;Mp=void 0;Np.dispatchEvent("authchanged")};
T.ci=Op;T.ii=Yq;T.jf=function(a){var b;return function(){b||(b=new Yq("LogsDataBase",a));return b}};
T.ri=Wq;var $q={},ar=(0,T.jf)({hg:($q.LogsRequestsStore=!0,$q.sapisid=!0,$q),upgrade:function(a,b){1>b&&(a.Wb("LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),a.Wb("sapisid"))},
version:1});function br(a){return ce(this,function c(){var d,e,f;return Ea(c,function(g){if(1==g.f)return ua(g,cr(),2);if(3!=g.f)return d=g.g,ua(g,ar().open(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function dr(){return ce(this,function b(){var c,d,e,f,g,h;return Ea(b,function(l){switch(l.f){case 1:return ua(l,cr(),2);case 2:return c=l.g,d=["NEW",c,0],e=["NEW",c,ap()],f=IDBKeyRange.bound(d,e),ua(l,ar().open(),3);case 3:return g=l.g,h=void 0,ua(l,g.sa(["LogsRequestsStore"],"readwrite",function(m){return m.f("LogsRequestsStore").index("newRequest").g({query:f,direction:"prev"},function(n){n.getValue()&&(h=n.getValue(),h.status="QUEUED",n.update(h))})}),4);
case 4:return l["return"](h)}})})}
function er(a){return ce(this,function c(){var d;return Ea(c,function(e){if(1==e.f)return ua(e,ar().open(),2);d=e.g;return e["return"](d.sa(["LogsRequestsStore"],"readwrite",function(f){var g=f.f("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",cq(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function fr(a){return ce(this,function c(){var d;return Ea(c,function(e){if(1==e.f)return ua(e,ar().open(),2);d=e.g;return e["return"](d.sa(["LogsRequestsStore"],"readwrite",function(f){var g=f.f("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,cq(g.f.put(h,void 0)).then(function(){return h})):T.Te.resolve(void 0)})}))})})}
function gr(a){return ce(this,function c(){var d;return Ea(c,function(e){if(1==e.f)return ua(e,ar().open(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function cr(){return ce(this,function b(){var c;return Ea(b,function(d){if(1==d.f){Ip();var e=dh(Jp(void 0));return ua(d,e,2)}c=d.g;return d["return"](Ap(c))})})}
;var hr=In("network_polling_interval",3E4);function ir(){this.j=0;this.f=jr();kr(this);lr(this)}
function mr(){ir.f||(ir.f=new ir);return ir.f}
function nr(a){a.f!==jr()&&en(Error("NetworkStatusManager isOnline does not match window status"));return a.f}
function or(a){var b=pr,c=qr;(new Zg(function(d){a.g=d})).then(function(){b();
c&&(a.i=c)});
rr(a)}
function jr(){var a=window.navigator.onLine;return void 0===a?!0:a}
function lr(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function kr(a){window.addEventListener("offline",function(){a.f=!1;a.i&&a.i()})}
function rr(a){a.j||(sr(a),jr()&&a.g&&a.g())}
function sr(a){a.j=No(function(){jr()?(!1===a.f&&en(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&en(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.i&&a.i());sr(a)},hr)}
;var tr=In("networkless_throttle_timeout")||100,ur=In("networkless_retry_attempts")||1,vr=0;function wr(a,b){b=void 0===b?{}:b;xr().then(function(c){var d=nr(mr());if(!c||O("networkless_bypass_write")||d&&O("vss_networkless_bypass_write"))Wn(a,b);else{var e={url:a,options:b,timestamp:ap(),status:"NEW",sendCount:0};br(e).then(function(f){e.id=f;f=mr();nr(f)&&!O("networkless_always_offline")?yr(e):or(f)})["catch"](function(f){yr(e);
en(f)})}})}
function pr(){var a=this;vr||(vr=Po(function(){return ce(a,function c(){var d;return Ea(c,function(e){if(1==e.f)return ua(e,dr(),2);if(3!=e.f)return d=e.g,d?ua(e,yr(d),3):(qr(),e["return"]());vr=0;pr();e.f=0})})},tr))}
function qr(){Ro(vr);vr=0}
function yr(a){return ce(this,function c(){var d;return Ea(c,function(e){switch(e.f){case 1:if(!a.id){e.Ia(2);break}return ua(e,er(a.id),3);case 3:(d=e.g)?a=d:fn(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=ap()-f)){e.Ia(4);break}fn(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.Ia(5);break}return ua(e,gr(a.id),5);case 5:return e["return"]();case 4:f=a=zr(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:
f.options)||void 0===g?void 0:g.R)||void 0===h?0:h.requestTimeMs)f.options.R.requestTimeMs=Math.round(ap());(a=f)&&Wn(a.url,a.options);e.f=0}})})}
function zr(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return ce(b,function h(){return Ea(h,function(l){if(1==l.f)return a&&a.id?a.sendCount<ur?ua(l,fr(a.id),6):ua(l,gr(a.id),2):l.Ia(2);2!=l.f&&or(mr());c(e,f);l.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return ce(b,function h(){return Ea(h,function(l){if(1==l.f)return a&&a.id?ua(l,gr(a.id),2):l.Ia(2);d(e,f);l.f=0})})};
return a}
function xr(){return ce(this,function b(){return Ea(b,function(c){return O("networkless_logging")?(2===In("networkless_ytidb_version")&&(0,T.Vf)().then(function(d){return d}),c["return"]((0,T.Uf)())):c["return"](!1)})})}
;function Ar(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ja(p(c)))}
q(Ar,Error);function Br(a){var b=this;this.f=null;a?this.f=a:xp()&&(this.f=qp());No(function(){Gp(b)},5E3)}
Br.prototype.isReady=function(){!this.f&&xp()&&(this.f=qp());return!!this.f};
function tp(a,b,c,d){!K("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&fn(new Ar("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Ar("innertube xhrclient not ready",b,c,d);en(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",R:c,je:"JSON",bb:function(){d.bb()},
Wd:d.bb,onSuccess:function(u,t){if(d.onSuccess)d.onSuccess(t)},
Vd:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,t){if(d.onError)d.onError(t)},
ej:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Rf)&&(g=e);var h=a.f.Tf||!1,l=yp(h,g,d);Object.assign(f.headers,l);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var m={alt:"json"};a.f.Sf&&f.headers.Authorization||(m.key=a.f.innertubeApiKey);var n=yn(""+g+e,m);xr().then(function(u){if(d.retry&&O("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(O("networkless_gel")&&!u||!O("networkless_gel"))var t=Ep(b,c,l,h);
if(t){var w=f.onSuccess,I=f.Vd;f.onSuccess=function(aa,ba){Fp(t);w(aa,ba)};
c.Vd=function(aa,ba){Fp(t);I(aa,ba)}}}try{O("use_fetch_for_op_xhr")?Tn(n,f):O("networkless_gel")&&d.retry?(f.method="POST",wr(n,f)):(f.method="POST",f.R||(f.R={}),Wn(n,f))}catch(aa){if("InvalidAccessError"==aa.name)t&&(Fp(t),t=0),fn(Error("An extension is blocking network request."));
else throw aa;}t&&No(function(){Gp(a)},5E3)})}
;function Cr(a,b,c){c=void 0===c?{}:c;var d=Br;K("ytLoggingEventsDefaultDisabled",!1)&&Br==Br&&(d=null);vp(a,b,d,c)}
function Dr(){mp()}
;var Er=[{Id:function(a){return"Cannot read property '"+a.key+"'"},
Jc:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Id:function(a){return"Cannot call '"+a.key+"'"},
Jc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Fr(){this.f=[];this.g=[]}
var Gr;var Hr=new cm;var Ir=new Set,Jr=0,Kr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Lr(a){Mr(a)}
function Nr(a){Mr(a,"WARNING")}
function Mr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||K("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=Jr)&&0!==a.sampleWeight)){var h=Re(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,m=0;m<a.args.length;m++){var n=a.args[m],u="params."+m;l+=u.length;if(n)if(Array.isArray(n))for(var t=c,w=0;w<n.length&&!(n[w]&&(l+=Or(w,n[w],u,t),500<l));w++);else if("object"===typeof n)for(t in t=void 0,w=c,n){if(n[t]&&
(l+=Or(t,n[t],u,w),500<l))break}else c[u]=String(JSON.stringify(n)).substring(0,500),l+=c[u].length;else c[u]=String(JSON.stringify(n)).substring(0,500),l+=c[u].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(n=a.params,"object"===typeof a.params)for(m in u=0,n){if(n[m]&&(l="params."+m,t=String(JSON.stringify(n[m])).substr(0,500),c[l]=t,u+=l.length+t.length,500<u))break}else c.params=String(JSON.stringify(n)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=
navigator.vendor);c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=p(Er);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.Jc[c.name])for(e=p(g.Jc[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.Id(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);
if(!(Ir.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){Hr.ha("handleError",c);if(O("kevlar_gel_error_routing")){a=b;a:{g=p(Kr);for(d=g.next();!d.done;d=g.next())if(ko(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){g={stackTrace:c.stack};c.fileName&&(g.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(g.lineNumber=
Number(d[0]),g.columnNumber=Number(d[1])):g.lineNumber=Number(d[0]));d=c.message;e=c.name;Gr||(Gr=new Fr);f=Gr;a:{h=p(f.g);for(m=h.next();!m.done;m=h.next())if(m=m.value,c.message&&c.message.match(m.f)){f=m.weight;break a}f=p(f.f);for(h=f.next();!h.done;h=f.next())if(h=h.value,h.callback(c)){f=h.weight;break a}f=1}d={level:"ERROR_LEVEL_UNKNOWN",message:d,errorClassName:e,sampleWeight:f};"ERROR"===a?d.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:g};
g={pageUrl:window.location.href};K("FEXP_EXPERIMENTS")&&(g.experimentIds=K("FEXP_EXPERIMENTS"));g.kvPairs=[];if(e=c.params)for(f=p(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,g.kvPairs.push({key:"client."+h,value:String(e[h])});e=K("SERVER_NAME",void 0);f=K("SERVER_VERSION",void 0);e&&f&&(g.kvPairs.push({key:"server.name",value:e}),g.kvPairs.push({key:"server.version",value:f}));Cr("clientError",{errorMetadata:g,stackTrace:a,logMessage:d});mp()}}a=c.params||{};b={Ka:{a:"logerror",t:"jserror",
type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},R:{url:K("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.R){c.stack&&(b.R.stack=c.stack);g=p(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.R["client."+d]=a[d];if(a=K("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=p(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.R[d]=a[d];a=K("SERVER_NAME",void 0);g=K("SERVER_VERSION",
void 0);a&&g&&(b.R["server.name"]=a,b.R["server.version"]=g)}Wn(K("ECATCHER_REPORT_HOST","")+"/error_204",b);Ir.add(c.message);Jr++}}}
function Or(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Pr(){this.g=!1;this.f=null}
Pr.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Co(b,function(){g.g=!1;if(window.botguard)Qr(g,c,d,f);else{var h=Eo(b),l=document.getElementById(h);l&&(yo(h),l.parentNode.removeChild(l));Nr(new Ar("Unable to load Botguard","from "+b))}},e)):a&&(O("botguard_eval_with_script_tag")?(e=Bf("SCRIPT"),e.textContent=a,e.nonce=Ka(),document.head.appendChild(e),document.head.removeChild(e)):eval(a),window.botguard?Qr(this,c,d,f):Nr(Error("Unable to load Botguard from JS")))};
function Qr(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Oa)}catch(e){Nr(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Nr(e)}c&&c(b)}}
Pr.prototype.dispose=function(){this.f=null};var Rr=new Pr;function Sr(){return!!Rr.f}
function Tr(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Rr.f?Rr.f.invoke(void 0,void 0,a):null}
;var Ur=z().toString();
function Vr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ur)for(a=1,b=0;b<Ur.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ur.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Wr=r.ytLoggingDocDocumentNonce_||Vr();v("ytLoggingDocDocumentNonce_",Wr,void 0);function Xr(a){this.f=a}
Xr.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Xr.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Xr.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Yr(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Zr(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function $r(a){return K(Zr(void 0===a?0:a),void 0)}
v("yt_logging_screen.getRootVeType",$r,void 0);function as(){var a=K("csn-to-ctt-auth-info");a||(a={},Mm("csn-to-ctt-auth-info",a));return a}
function bs(a){a=void 0===a?0:a;var b=K(Yr(a));if(!b&&!K("USE_CSN_FALLBACK",!0))return null;b||0!=a||(O("kevlar_client_side_screens")||O("c3_client_side_screens")?b="UNDEFINED_CSN":b=K("EVENT_ID"));return b?b:null}
v("yt_logging_screen.getCurrentCsn",bs,void 0);function cs(a,b,c){var d=as();(c=bs(c))&&delete d[c];b&&(d[a]=b)}
function ds(a){return as()[a]}
v("yt_logging_screen.getCttAuthInfo",ds,void 0);v("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==K(Yr(c))||b!==K(Zr(c)))if(cs(a,d,c),Mm(Yr(c),a),Mm(Zr(c),b),0==c||O("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&vp("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Wr,clientScreenNonce:a},Br)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()},void 0);function es(a,b,c){var d=void 0===d?!0:d;var e=K("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Fd(window.location.href);f&&e.push(f);f=Fd(a);if(pb(e,f)||!f&&0==a.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(e=document.createElement("a"),kd(e,a),a=e.href),a&&(a=Gd(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:bs()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+zd(a).toString(36),b=b?Ld(b):"",eo(d,b,c||5,"/"))):(c=b,b="ST-"+zd(a).toString(36),c=c?
Ld(c):"",eo(b,c,5,"/"))}
;function fs(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;nd(d.location,Nd(a,b)+c)}
function gs(a,b){b&&es(a,b);(window.ytspf||{}).enabled?spf.navigate(a):fs(a)}
function hs(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=K("EVENT_ID");d&&(b.ei||(b.ei=d));b&&es(a,b);if(c)return!1;gs(a);return!0}
;function is(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Ob(b);this.assets=a.assets||{};this.attrs=a.attrs||Ob(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
is.prototype.clone=function(){var a=new is,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=Ob(c):a[b]=c}return a};function js(){eg.call(this);this.f=[]}
q(js,eg);js.prototype.L=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.callback)}eg.prototype.L.call(this)};function ks(a,b,c,d){eg.call(this);var e=this;this.A=this.xa=a;this.P=b;this.C=!1;this.api={};this.ma=this.M=null;this.K=new cm;fg(this,Ya(gg,this.K));this.j={};this.V=this.ka=this.i=this.sc=this.f=null;this.T=!1;this.l=this.F=null;this.ya={};this.Re=["onReady"];this.zb=null;this.Tc=NaN;this.Z={};this.g=d;ls(this);this.Lb("WATCH_LATER_VIDEO_ADDED",this.Gg.bind(this));this.Lb("WATCH_LATER_VIDEO_REMOVED",this.Hg.bind(this));this.Lb("onAdAnnounce",this.Ue.bind(this));this.Se=new js(this);fg(this,Ya(gg,
this.Se));this.ca=0;c?this.ca=P(function(){e.loadNewVideoConfig(c)},0):d&&(ms(this),ns(this))}
q(ks,eg);k=ks.prototype;k.getId=function(){return this.P};
k.loadNewVideoConfig=function(a){if(!this.S()){this.ca&&(Q(this.ca),this.ca=0);a instanceof is||(a=new is(a));this.sc=a;this.f=a.clone();ms(this);this.ka||(this.ka=os(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.A.style.width=Ag(Number(a)||String(a),!0);if(a=this.f.attrs.height)this.A.style.height=Ag(Number(a)||String(a),!0);ns(this);this.C&&ps(this)}};
function ms(a){var b;a.g?b=a.g.rootElementId:b=a.f.attrs.id;a.i=b||a.i;"video-player"==a.i&&(a.i=a.P,a.g?a.g.rootElementId=a.P:a.f.attrs.id=a.P);a.A.id==a.i&&(a.i+="-player",a.g?a.g.rootElementId=a.i:a.f.attrs.id=a.i)}
k.hf=function(){return this.sc};
function ps(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function qs(a){var b=!0,c=rs(a);c&&a.f&&(a=ss(a),b=L(c,"version")===a);return b&&!!x("yt.player.Application.create")}
function ns(a){if(!a.S()&&!a.T){var b=qs(a);if(b&&"html5"==(rs(a)?"html5":null))a.V="html5",a.C||ts(a);else if(us(a),a.V="html5",b&&a.l)a.xa.appendChild(a.l),ts(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.F=function(){c=!0;var d=vs(a,"player_bootstrap_method")?x("yt.player.Application.createAlternate")||x("yt.player.Application.create"):x("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.xa,e,a.g);ts(a)};
a.T=!0;b?a.F():(Co(ss(a),a.F),(b=a.g?a.g.cssUrl:a.f.assets.css)&&Io(b),ws(a)&&!c&&v("yt.player.Application.create",null,void 0))}}}
function rs(a){var b=E(a.i);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.i));return b}
function ts(a){if(!a.S()){var b=rs(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,!vs(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||xs(a)):a.Tc=P(function(){ts(a)},50)}}
function xs(a){ls(a);a.C=!0;var b=rs(a);b.addEventListener&&(a.M=ys(a,b,"addEventListener"));b.removeEventListener&&(a.ma=ys(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ys(a,b,e))}for(var f in a.j)a.M(f,a.j[f]);ps(a);a.ka&&a.ka(a.api);a.K.ha("onReady",a.api)}
function ys(a,b,c){var d=b[c];return function(){try{return a.zb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.zb=e,fn(e))}}}
function ls(a){a.C=!1;if(a.ma)for(var b in a.j)a.ma(b,a.j[b]);for(var c in a.Z)Q(parseInt(c,10));a.Z={};a.M=null;a.ma=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Lb.bind(a);a.api.removeEventListener=a.fh.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.kf.bind(a);a.api.getPlayerType=a.mf.bind(a);a.api.getCurrentVideoConfig=a.hf.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.eg.bind(a)}
k.eg=function(){return this.C};
k.Lb=function(a,b){var c=this,d=os(this,b);if(d){if(!pb(this.Re,a)&&!this.j[a]){var e=zs(this,a);this.M&&this.M(a,e)}this.K.subscribe(a,d);"onReady"==a&&this.C&&P(function(){d(c.api)},0)}};
k.fh=function(a,b){if(!this.S()){var c=os(this,b);c&&em(this.K,a,c)}};
function os(a,b){var c=b;if("string"==typeof b){if(a.ya[b])return a.ya[b];c=function(){var d=x(b);d&&d.apply(r,arguments)};
a.ya[b]=c}return c?c:null}
function zs(a,b){var c="ytPlayer"+b+a.P;a.j[b]=c;r[c]=function(d){var e=P(function(){if(!a.S()){a.K.ha(b,d);var f=a.Z,g=String(e);g in f&&delete f[g]}},0);
Mb(a.Z,String(e))};
return c}
k.Ue=function(a){S("a11y-announce",a)};
k.Gg=function(a){S("WATCH_LATER_VIDEO_ADDED",a)};
k.Hg=function(a){S("WATCH_LATER_VIDEO_REMOVED",a)};
k.mf=function(){return this.V||(rs(this)?"html5":null)};
k.kf=function(){return this.zb};
function us(a){a.cancel();ls(a);a.V=null;a.f&&(a.f.loaded=!1);var b=rs(a);b&&(qs(a)||!ws(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));Ef(a.xa)}
k.cancel=function(){if(this.F){var a=ss(this),b=this.F;a&&b&&(a=""+Ta(b),(a=Fo[a])&&wo(a))}Q(this.Tc);this.T=!1};
k.L=function(){us(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){en(b)}this.ya=null;for(var a in this.j)r[this.j[a]]=null;this.sc=this.f=this.api=null;delete this.xa;delete this.A;eg.prototype.L.call(this)};
function ws(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function ss(a){return a.g?a.g.jsUrl:a.f.assets.js}
function vs(a,b){if(a.g)var c=a.g.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==un(c||"")[b]}
;var As={},Bs="player_uid_"+(1E9*Math.random()>>>0);function Cs(a){delete As[a.getId()]}
function Ds(){var a;if(a=document.getElementById("player-api")){var b=Bs+"_"+Ta(a),c=As[b];c||(c=new ks(a,b),As[b]=c);a=c.api}else a=null;return a}
;function Es(a,b){this.version=a;this.args=b}
;function Fs(a,b){this.topic=a;this.f=b}
Fs.prototype.toString=function(){return this.topic};var Gs=x("ytPubsub2Pubsub2Instance")||new cm;cm.prototype.subscribe=cm.prototype.subscribe;cm.prototype.unsubscribeByKey=cm.prototype.ra;cm.prototype.publish=cm.prototype.ha;cm.prototype.clear=cm.prototype.clear;v("ytPubsub2Pubsub2Instance",Gs,void 0);var Hs=x("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Hs,void 0);var Is=x("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Is,void 0);var Js=x("ytPubsub2Pubsub2IsAsync")||{};
v("ytPubsub2Pubsub2IsAsync",Js,void 0);v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function U(a,b){var c=Ks();return c?c.publish.call(c,a.toString(),a,b):!1}
function Ls(a,b,c){var d=Ks();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(Hs[e])try{if(g&&a instanceof Fs&&a!=f)try{var l=a.f,m=g;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.Va){var n=new l;l.Va=n.version}var u=l.Va}catch(t){}if(!u||m.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(l,
wb(m.args))}catch(t){throw t.message="yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,g)}catch(t){en(t)}},Js[a.toString()]?x("yt.scheduler.instance")?Po(h):P(h,0):h())});
Hs[e]=!0;Is[a.toString()]||(Is[a.toString()]=[]);Is[a.toString()].push(e);return e}
function Ms(){var a=Ns,b=Ls(Os,function(c){a.apply(void 0,arguments);Ps(b)},void 0);
return b}
function Ps(a){var b=Ks();b&&("number"===typeof a&&(a=[a]),B(a,function(c){b.unsubscribeByKey(c);delete Hs[c]}))}
function Ks(){return x("ytPubsub2Pubsub2Instance")}
;function Qs(a,b,c){var d=c&&0<c?c:0;c=d?z()+1E3*d:0;if((d=d?Rs():Ss())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function Ts(a){var b=Ss(),c=Rs();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function Us(a){try{var b=Ss(),c=Rs();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function Vs(){var a=Rs();a&&pm(a,a.f.Da(!0))}
var Rs=eb(function(){var a=new tm;return a.isAvailable()?new nm(a):null}),Ss=eb(function(){var a=new um;
return a.isAvailable()?new nm(a):null});function Ws(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",Gj(a,"hid",!b))}
function Xs(a){return(a=E(a))?"none"!=a.style.display&&!H(a,"hid"):!1}
function Ys(a){if(a=E(a))Xs(a)?(a.style.display="none",J(a,"hid")):(a.style.display="",Ej(a,"hid"))}
function Zs(a){B(arguments,function(b){!Ra(b)||b instanceof Element?Ws(b,!0):B(b,function(c){Zs(c)})})}
function $s(a){B(arguments,function(b){!Ra(b)||b instanceof Element?Ws(b,!1):B(b,function(c){$s(c)})})}
function at(a){B(arguments,function(b){Ra(b)?B(b,function(c){at(c)}):Ys(b)})}
(function(a,b){function c(f){var g=p(f);f=g.next().value;g=ja(g);return a.apply(f,g)}
function d(f){f=p(f);f.next();f=ja(f);return b(e,f)}
b=void 0===b?ik:b;var e=Ta(a);return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];h=this||r;var l=hk.get(h);l||(l={},hk.set(h,l));return ie(l,[this].concat(g instanceof Array?g:ja(p(g))),c,d)}})(function(a){var b=Bf("DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=Bf("DIV");zg(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;Ff(b);return a});function bt(a,b,c){no("/gen_204?a="+(a+(b?"&"+b:"")),c)}
;var ct={},dt="ontouchstart"in document;function et(a,b,c){b in ct||(ct[b]=new cm);ct[b].subscribe(a,c)}
function ft(a,b,c){if(b in ct){var d=ct[b];em(d,a,c);0>=gm(d)&&(d.dispose(),delete ct[b])}}
function gt(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Zf(c,function(e){return H(e,b)},!0,d)}
function ht(a){var b="mouseover"==a.type&&"mouseenter"in ct||"mouseout"==a.type&&"mouseleave"in ct,c=a.type in ct||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=ct[b];for(var d in c.g){var e=gt(b,d,a.target);e&&!Zf(a.relatedTarget,function(f){return f==e},!0)&&c.ha(d,e,b,a)}}if(b=ct[a.type])for(d in b.g)(e=gt(a.type,d,a.target))&&b.ha(d,e,a.type,a)}}
M(document,"blur",ht,!0);M(document,"change",ht,!0);M(document,"click",ht);M(document,"focus",ht,!0);M(document,"mouseover",ht);M(document,"mouseout",ht);M(document,"mousedown",ht);M(document,"keydown",ht);M(document,"keyup",ht);M(document,"keypress",ht);M(document,"cut",ht);M(document,"paste",ht);dt&&(M(document,"touchstart",ht),M(document,"touchend",ht),M(document,"touchcancel",ht));function V(a){this.l=a;this.G={};this.F=[];this.C=[]}
k=V.prototype;k.W=function(a){return G(a,W(this))};
function W(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
k.unregister=function(){wo(this.F);this.F.length=0;Ps(this.C);this.C.length=0};
k.init=Oa;k.dispose=Oa;k.ia=function(a,b){this.F.push(R(a,b,this))};
function it(a,b,c){a.C.push(Ls(b,c,a))}
function X(a,b,c,d){d=W(a,d);var e=y(c,a);et(d,b,e);a.G[c]=e}
function Y(a,b,c,d){ft(W(a,d),b,a.G[c]);delete a.G[c]}
k.za=function(a,b,c){var d=this.B(a,b);if(d&&(d=x(d))){var e=zb(arguments,2);yb(e,0,0,a);d.apply(null,e)}};
k.B=function(a,b){return L(a,b)};
function jt(a,b){Nm(a,"tooltip-text",b)}
function kt(a,b,c){return F(W(a,b),c)}
;function lt(){V.call(this,"button");this.f=null;this.i=[];this.g={}}
A(lt,V);Pa(lt);k=lt.prototype;k.register=function(){X(this,"click",this.Ee);X(this,"keydown",this.Fd);X(this,"keypress",this.Fe);this.ia("page-scroll",this.Df)};
k.unregister=function(){Y(this,"click",this.Ee);Y(this,"keydown",this.Fd);Y(this,"keypress",this.Fe);mt(this);this.g={};lt.O.unregister.call(this)};
k.Ee=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
k.Fd=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=nt(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Pf(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ag;else"table"==e&&(f=this.Zf);f&&ot(this,a,b,c,y(f,this))}}};
k.Df=function(){var a=this.g;if(0!=Gb(a))for(var b in a){var c=a[b],d=pt(this,c);if(void 0==d||void 0==c)break;qt(this,d,c,!0)}};
function ot(a,b,c,d,e){var f=Xs(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=rt(a,c))?(b=Jf(d),"a"==b.tagName.toLowerCase()?fs(b.href):on(b,"click")):g&&st(a,b):f?27==d.keyCode?(rt(a,c),st(a,b)):e(b,c,d):(a=H(b,W(a,"reverse"))?38:40,d.keyCode==a&&(on(b,"click"),d.preventDefault()))}
k.Fe=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=nt(this,a),Xs(a)&&c.preventDefault())};
function rt(a,b){var c=W(a,"menu-item-highlight"),d=F(c,b);d&&Ej(d,c);return d}
function tt(a,b,c){J(c,W(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=W(a,"item-id-"+Ta(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.Zf=function(a,b,c){var d=rt(this,b);b=Zm("table",b);var e=Zm("tr",b);e=nf("td",null,e).length;b=nf("td",null,b);d=ut(d,b,e,c);-1!=d&&(tt(this,a,b[d]),c.preventDefault())};
k.ag=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=rt(this,b);b=hb(nf("li",null,b),Xs);d=ut(d,b,1,c);tt(this,a,b[d]);c.preventDefault()}};
function ut(a,b,c,d){var e=b.length;a=fb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function vt(a,b){var c=b.iframeMask;c||(c=Bf("IFRAME"),c.src='javascript:""',Cj(c,W(a,"menu-mask")),$s(c),b.iframeMask=c);return c}
function qt(a,b,c,d){var e=G(b,W(a,"group")),f=!!a.B(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Eg(b);if(H(b,W(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}H(b,"flip")&&(H(b,W(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.B(b,"button-has-sibling-menu")?l=ug(e):a.B(b,"button-menu-root-container")&&(l=wt(a,b));D&&!Ce("8")&&(l=null);if(l){var m=Eg(l);m=new hg(-m.top,m.left,m.top,-m.left)}l=new ef(0,1);H(b,W(a,"center-menu"))&&(l.x-=Math.round((Cg(c).width-Cg(b).width)/
2));d&&(l.y+=vf(document).y);if(a=vt(a,b))b=Cg(c),a.style.width=b.width+"px",a.style.height=b.height+"px",$l(e,f,a,g,l,m,197),d&&og(a,"position","fixed");$l(e,f,c,g,l,m,197)}
function wt(a,b){if(a.B(b,"button-menu-root-container")){var c=a.B(b,"button-menu-root-container");return G(b,c)}return document.body}
k.He=function(a){if(a){var b=nt(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.B(a,"button-has-sibling-menu")?c=a.parentNode:c=wt(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=vt(this,a);d&&c.appendChild(d);(c=!!this.B(a,"button-menu-fixed"))&&(this.g[Vm(a).toString()]=b);qt(this,a,b,c);xo("yt-uix-button-menu-before-show",a,b);Zs(b);d&&Zs(d);
this.za(a,"button-menu-action",!0);J(a,W(this,"active"));b=y(this.Ge,this,a,!1);d=y(this.Ge,this,a,!0);c=y(this.vh,this,a,void 0);this.f&&nt(this,this.f)==nt(this,a)||mt(this);S("yt-uix-button-menu-show",a);N(this.i);this.i=[M(document,"click",d),M(document,"contextmenu",b),M(window,"resize",c)];this.f=a}}};
function st(a,b){if(b){var c=nt(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");$s(c);a.za(b,"button-menu-action",!1);var d=vt(a,b),e=Vm(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&($s(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=G(b,W(a,"group"));
var f=[W(a,"active")];e&&f.push(W(a,"group-active"));Fj(b,f);S("yt-uix-button-menu-hide",b);N(a.i);a.i.length=0}}
k.vh=function(a,b){var c=nt(this,a);if(c){b&&(b instanceof Uc?jd(c,b):Of(c,b));var d=!!this.B(a,"button-menu-fixed");qt(this,a,c,d)}};
function pt(a,b){return G(b.activeButtonNode||b.parentNode,W(a))}
k.Ge=function(a,b,c){c=mn(c);var d=G(c,W(this));if(d){d=nt(this,d);var e=nt(this,a);if(d==e)return}d=G(c,W(this,"menu"));e=d==nt(this,a);var f=H(c,W(this,"menu-item")),g=H(c,W(this,"menu-close"));if(!d||e&&(f||g))st(this,a),d&&b&&this.B(a,"button-menu-indicate-selected")&&((a=F(W(this,"content"),a))&&Of(a,Wf(c)),xt(this,d,c))};
function xt(a,b,c){var d=W(a,"menu-item-selected");a=pf(d,b);B(a,function(e){Ej(e,d)});
J(c.parentNode,d)}
function nt(a,b){if(!b.widgetMenu){var c=a.B(b,"button-menu-id");c=c&&E(c);var d=W(a,"menu");c?Dj(c,[d,W(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return H(a,W(this,"toggled"))};
k.toggle=function(a){if(this.B(a,"button-toggle")){var b=G(a,W(this,"group")),c=W(this,"toggled"),d=H(a,c);if(b&&this.B(b,"button-toggle-group")){var e=this.B(b,"button-toggle-group");b=pf(W(this),b);B(b,function(f){f!=a||"optional"==e&&d?(Ej(f,c),f.removeAttribute("aria-pressed")):(J(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Ij(a,c)}};
k.click=function(a){if(nt(this,a)){var b=nt(this,a);if(b){var c=pt(this,b);c&&c!=a?(st(this,c),P(y(this.He,this,a),1)):Xs(b)?st(this,a):this.He(a)}a.focus()}this.za(a,"button-action")};
function mt(a){a.f&&st(a,a.f)}
;function zt(a){V.call(this,a);this.i=null}
A(zt,V);k=zt.prototype;k.W=function(a){var b=V.prototype.W.call(this,a);return b?b:a};
k.register=function(){this.ia("yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){At(this);zt.O.dispose.call(this)};
k.B=function(a,b){var c=zt.O.B.call(this,a,b);return c?c:(c=zt.O.B.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.W(a);if(b){J(b,W(this,"active"));var c=Bt(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Ct(this,a,c);var d=W(this,"card-visible"),e=this.B(a,"card-delegate-show")&&this.B(b,"card-action");this.za(b,"card-action",a);this.i=a;$s(c);P(y(function(){e||(Zs(c),S("yt-uix-card-show",b,a,c));Dt(c);J(c,d);S("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Bt(a,b,c){var d=c||b,e=W(a,"card");c=Et(a,d);var f=E(W(a,"card")+Vm(d));if(f)return a=F(W(a,"card-body"),f),Nf(a,c)||(Ff(c),a.appendChild(c)),f;f=document.createElement("div");f.id=W(a,"card")+Vm(d);Cj(f,e);(d=a.B(d,"card-class"))&&Dj(f,d.split(/\s+/));d=document.createElement("div");d.className=W(a,"card-border");b=a.B(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
W(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Ff(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Ct(a,b,c){var d=a.B(b,"orientation")||"horizontal";var e=F(W(a,"anchor"),b)||b;var f=a.B(b,"position"),g=!!a.B(b,"force-position"),h=a.B(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var n=13;var u=8}else m&&!l?(n=12,u=9):!m&&l?(n=9,u=12):(n=8,u=13);var t=Fg(document.body);f=Fg(b);t!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var w=new ef(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,w=new ef(b.offsetWidth+6,-12);var I=
Cg(c);f=Math.min(f,(d?I.height:I.width)-24-6);6>f&&(f=6,d?w.y+=12-b.offsetHeight/2:w.x+=12-b.offsetWidth/2);I=null;g||(I=10);b=W(a,"card-flip");a=W(a,"card-reverse");Gj(c,b,m);Gj(c,a,l);I=$l(e,n,c,u,w,null,I);!g&&I&&(I&48&&(m=!m,n^=4,u^=4),I&192&&(l=!l,n^=1,u^=1),Gj(c,b,m),Gj(c,a,l),$l(e,n,c,u,w));h&&(e=parseInt(c.style.top,10),g=vf(document).y,og(c,"position","fixed"),og(c,"top",e-g+"px"));t&&(c.style.right="",e=Eg(c),e.left=e.left||parseInt(c.style.left,10),g=tf(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!t&&m||t&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Cg(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.W(a)){var b=E(W(this,"card")+Vm(a));b&&(Ej(a,W(this,"active")),Ej(b,W(this,"card-visible")),$s(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Ff(b.cardMask),b.cardMask=null))}};
function At(a){a.i&&a.hide(a.i)}
k.uh=function(a,b){var c=this.W(a);if(c){if(b){var d=Et(this,c);if(!d)return;b instanceof Uc?jd(d,b):Of(d,b)}H(c,W(this,"active"))&&(c=Bt(this,a,c),Ct(this,a,c),Zs(c),Dt(c))}};
k.isActive=function(a){return(a=this.W(a))?H(a,W(this,"active")):!1};
function Et(a,b){var c=b.cardContentNode;if(!c){var d=W(a,"content"),e=W(a,"card-content");(c=(c=a.B(b,"card-id"))?E(c):F(d,b))||(c=document.createElement("div"));var f=c;Ej(f,d);J(f,e);b.cardContentNode=c}return c}
function Dt(a){var b=a.cardMask;b||(b=Bf("IFRAME"),b.src='javascript:""',Dj(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Ft(){V.call(this,"kbd-nav")}
var Gt;A(Ft,V);Pa(Ft);k=Ft.prototype;k.register=function(){X(this,"keydown",this.Ie);this.ia("yt-uix-kbd-nav-move-in",this.Rd);this.ia("yt-uix-kbd-nav-move-in-to",this.fg);this.ia("yt-uix-kbd-move-next",this.Sd);this.ia("yt-uix-kbd-nav-move-to",this.Qb)};
k.unregister=function(){Y(this,"keydown",this.Ie);N(Gt)};
k.Ie=function(a,b,c){var d=c.keyCode;if(a=G(a,W(this)))switch(d){case 13:case 32:this.Rd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Kj(a,"kbdNavMoveOut");!c;){c=G(a.parentElement,W(this));if(!c)break a;c=Kj(c,"kbdNavMoveOut")}c=E(c);this.Qb(c);S("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&H(a,W(this,"list")))switch(d){case 40:this.Sd(b,a);break;case 38:d=document.activeElement==a,a=Ht(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),It(this,a[b]))}c.preventDefault()}};
k.Rd=function(a){var b=Kj(a,"kbdNavMoveIn");b=E(b);Jt(this,a,b);this.Qb(b)};
k.fg=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Jt(this,d,a);this.Qb(a)};
k.Qb=function(a){if(a)if(Tf(a))a.focus();else{var b=Pf(a,function(c){return Lf(c)?Tf(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Jt(a,b,c){if(b&&c)if(J(c,W(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Jj&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
k.Sd=function(a,b){var c=document.activeElement==b,d=Ht(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),It(this,d[c]))};
function It(a,b){if(b){var c=Yf(b,"LI");c&&(J(c,W(a,"highlight")),Gt=M(b,"blur",y(function(d){Ej(d,W(this,"highlight"));N(Gt)},a,c)))}}
function Ht(a){if("UL"!=a.tagName.toUpperCase())return[];a=hb(If(a),function(b){return"LI"==b.tagName.toUpperCase()});
return hb(ib(a,function(b){return Xs(b)?Pf(b,function(c){return Lf(c)?Tf(c):!1}):!1}),function(b){return!!b})}
;function Kt(){V.call(this,"menu");this.g=this.f=null;this.i={};this.A={};this.j=null}
A(Kt,V);Pa(Kt);function Lt(a){var b=Kt.getInstance();if(H(a,W(b)))return a;var c=b.W(a);return c?c:G(a,W(b,"content"))==b.f?b.g:null}
k=Kt.prototype;k.register=function(){X(this,"click",this.Je);X(this,"mouseenter",this.zf);this.ia("page-scroll",this.Hh);this.ia("yt-uix-kbd-nav-move-out-done",function(a){a=this.W(a);Mt(this,a)});
this.j=new cm};
k.unregister=function(){Y(this,"click",this.Je);this.g=this.f=null;N(Db(Ib(this.i)));this.i={};Eb(this.A,function(a){Ff(a)},this);
this.A={};gg(this.j);this.j=null;Kt.O.unregister.call(this)};
k.Je=function(a,b,c){a&&(b=Nt(this,a),!b.disabled&&Ym(c.target,b)&&Ot(this,a))};
k.zf=function(a,b,c){a&&H(a,W(this,"hover"))&&(b=Nt(this,a),Ym(c.target,b)&&Ot(this,a,!0))};
k.Hh=function(){this.f&&this.g&&Pt(this,this.g,this.f)};
function Pt(a,b,c){var d=Qt(a,b);d&&zg(d,Cg(c));if(c==a.f){var e=9,f=8;H(b,W(a,"reversed"))&&(e^=1,f^=1);H(b,W(a,"flipped"))&&(e^=4,f^=4);a=new ef(0,1);d&&$l(b,e,d,f,a,null,197);$l(b,e,c,f,a,null,197)}}
function Ot(a,b,c){Rt(a,b)&&!c?Mt(a,b):(St(a,b),!a.f||Ym(b,a.f)?a.Ke(b):dm(a.j,y(a.Ke,a,b)))}
k.Ke=function(a){if(a){var b=Tt(this,a);if(b){xo("yt-uix-menu-before-show",a,b);if(this.f)Ym(a,this.f)||Mt(this,this.g);else{this.g=a;this.f=b;H(a,W(this,"sibling-content"))||(Ff(b),document.body.appendChild(b));var c=Nt(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=Qt(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);Ej(b,W(this,"content-hidden"));Pt(this,a,b);Dj(Nt(this,a),[W(this,"trigger-selected"),"yt-uix-button-toggled"]);S("yt-uix-menu-show",a);Ut(b);Vt(this,a);S("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.Ih,this,a),e=y(this.Xf,this,a);c=Ta(a).toString();this.i[c]=[M(b,"click",e),M(document,"click",d)];H(a,W(this,"indicate-selected"))&&(d=y(this.Yf,this,a),this.i[c].push(M(b,"click",d)));H(a,W(this,"hover"))&&(a=y(this.Af,this,a),this.i[c].push(M(document,"mousemove",a)))}}};
k.Af=function(a,b){var c=mn(b);if(c){var d=Nt(this,a);Ym(c,d)||Wt(this,c)||Xt(this,a)}};
k.Ih=function(a,b){var c=mn(b);if(c){if(Wt(this,c)){var d=G(c,W(this,"content")),e=Yf(c,"LI");e&&d&&Nf(d,e)&&xo("yt-uix-menu-item-clicked",c);c=G(c,W(this,"close-on-select"));if(!c)return;d=Lt(c)}Mt(this,d||a)}};
function St(a,b){if(b){var c=G(b,W(a,"content"));c&&(c=pf(W(a),c),B(c,function(d){!Ym(d,b)&&Rt(this,d)&&Xt(this,d)},a))}}
function Mt(a,b){if(b){var c=[];c.push(b);var d=Tt(a,b);d&&(d=pf(W(a),d),d=wb(d),c=c.concat(d),B(c,function(e){Rt(this,e)&&Xt(this,e)},a))}}
function Xt(a,b){if(b){var c=Tt(a,b);Fj(Nt(a,b),[W(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,W(a,"content-hidden"));var d=Tt(a,b);d&&rf(d,{"aria-expanded":"false"});(d=Qt(a,b))&&d.parentNode&&Ff(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.ha("ROOT_MENU_REMOVED"));S("yt-uix-menu-hide",b);c=Ta(b).toString();N(a.i[c]);delete a.i[c]}}
k.Xf=function(a,b){var c=mn(b);c&&Yt(this,a,c)};
k.Yf=function(a,b){var c=mn(b);if(c){var d=Nt(this,a);if(d&&(c=Yf(c,"LI")))if(c=Wf(c).trim(),d.hasChildNodes()){var e=lt.getInstance();(d=F(W(e,"content"),d))&&Of(d,c)}else Of(d,c)}};
function Vt(a,b){var c=Tt(a,b);if(c){B(c.children,function(e){"LI"==e.tagName&&rf(e,{role:"menuitem"})});
rf(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ta(c),c.id=d);(c=Nt(a,b))&&rf(c,{"aria-controls":d})}}
function Yt(a,b,c){var d=Tt(a,b);d&&H(b,W(a,"checked"))&&(a=Yf(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(d=pf("yt-ui-menu-item-checked",d),B(d,function(e){Hj(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Hj(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Rt(a,b){var c=Tt(a,b);return c?!H(c,W(a,"content-hidden")):!1}
function Ut(a){a=nf("UL",null,a);B(a,function(b){b.tabIndex=0;var c=Ft.getInstance();Dj(b,[W(c),W(c,"list")])})}
function Tt(a,b){var c=L(b,"menu-content-id");return c&&(c=E(c))?(Dj(c,[W(a,"content"),W(a,"content-external")]),c):b==a.g?a.f:F(W(a,"content"),b)}
function Qt(a,b){var c=Ta(b).toString(),d=a.A[c];if(!d){d=Bf("IFRAME");d.src='javascript:""';var e=[W(a,"mask")];B(Bj(b),function(f){e.push(f+"-mask")});
Dj(d,e);a.A[c]=d}return d||null}
function Nt(a,b){return F(W(a,"trigger"),b)}
function Wt(a,b){return Ym(b,a.f)||Ym(b,a.g)}
;function Zt(){zt.call(this,"clickcard");this.f={};this.g={}}
A(Zt,zt);Pa(Zt);k=Zt.prototype;k.register=function(){Zt.O.register.call(this);X(this,"click",this.kd,"target");X(this,"click",this.gd,"close")};
k.unregister=function(){Zt.O.unregister.call(this);Y(this,"click",this.kd,"target");Y(this,"click",this.gd,"close");for(var a in this.f)N(this.f[a]);this.f={};for(a in this.g)N(this.g[a]);this.g={}};
k.kd=function(a,b,c){c.preventDefault();b=Yf(c.target,"button");b&&b.disabled||(a=(b=this.B(a,"card-target"))?mf(b):a,b=this.W(a),this.B(b,"disabled")||(H(b,W(this,"active"))?(this.hide(a),Ej(b,W(this,"active"))):(this.show(a),J(b,W(this,"active")))))};
k.show=function(a){Zt.O.show.call(this,a);var b=this.W(a),c=Ta(a).toString();if(!L(b,"click-outside-persists")){if(this.f[c])return;b=M(document,"click",y(this.ld,this,a));var d=M(window,"blur",y(this.ld,this,a));this.f[c]=[b,d]}a=M(window,"resize",y(this.uh,this,a,void 0));this.g[c]=a};
k.hide=function(a){Zt.O.hide.call(this,a);a=Ta(a).toString();var b=this.f[a];b&&(N(b),this.f[a]=null);if(b=this.g[a])N(b),delete this.g[a]};
k.ld=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=G(b.target,c)||G(Lt(b.target),c));(d=d||G(document.activeElement,c)||(document.activeElement?G(Lt(document.activeElement),c):null))||this.hide(a)};
k.gd=function(a){(a=G(a,W(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function $t(){zt.call(this,"hovercard")}
A($t,zt);Pa($t);k=$t.prototype;k.register=function(){X(this,"mouseenter",this.Ld,"target");X(this,"mouseleave",this.Nd,"target");X(this,"mouseenter",this.Md,"card");X(this,"mouseleave",this.Od,"card")};
k.unregister=function(){Y(this,"mouseenter",this.Ld,"target");Y(this,"mouseleave",this.Nd,"target");Y(this,"mouseenter",this.Md,"card");Y(this,"mouseleave",this.Od,"card")};
k.Ld=function(a){if(au!=a){au&&(this.hide(au),au=null);var b=y(this.show,this,a),c=parseInt(this.B(a,"delay-show"),10);b=P(b,-1<c?c:200);Nm(a,"card-timer",b.toString());au=a;a.alt&&(Nm(a,"card-alt",a.alt),a.alt="");a.title&&(Nm(a,"card-title",a.title),a.title="")}};
k.Nd=function(a){var b=parseInt(this.B(a,"card-timer"),10);Q(b);this.W(a).isCardHidable=!0;b=parseInt(this.B(a,"delay-hide"),10);b=-1<b?b:200;P(y(this.If,this,a),b);if(b=this.B(a,"card-alt"))a.alt=b;if(b=this.B(a,"card-title"))a.title=b};
k.If=function(a){this.W(a).isCardHidable&&(this.hide(a),au=null)};
k.Md=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Od=function(a){a&&this.hide(a.cardTargetNode)};
var au=null;function bu(a,b,c,d,e,f){this.f=a;this.H=null;this.i=F("yt-dialog-fg",this.f)||this.f;if(a=F("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Ta(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.P=F("yt-dialog-focus-trap",this.f);this.T=!1;this.j=new cm;this.C=[];this.C.push(nn(this.f,"click",y(this.wg,this),"yt-dialog-dismiss"));this.C.push(M(this.P,"focus",y(this.ef,this),!0));cu(this,"content");this.V=b;this.ca=c;this.Z=d;this.M=
e;this.ka=f;this.K=this.G=this.A=null}
var du={LOADING:"loading",di:"content",yi:"working"};function eu(a,b,c){a.S()||a.j.subscribe((c?"pre-":"post-")+"all",b)}
function cu(a,b){var c=F("yt-dialog-fg-content",a.f),d=[];Eb(du,function(e){d.push("yt-dialog-show-"+e)});
Fj(c,d);J(c,"yt-dialog-show-"+b)}
k=bu.prototype;
k.show=function(a){if(!this.S()){this.H=document.activeElement;if(!this.Z){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=Bf("div"),this.g.id="yt-dialog-bg",Cj(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=tf(b).height,uf(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>b?c>f?
c:f:c<f?c:f}else d=0}this.g.style.height=d+"px";Zs(this.g)}this.Bd();d=fu(this);gu(d);this.A=M(document,"keydown",y(this.Wf,this));d=this.f;e=R("player-added",this.Bd,this);Nm(d,"player-ready-pubsub-key",e);this.ca&&(this.G=M(document,"click",y(this.Zg,this)));Zs(this.f);this.i.setAttribute("tabindex","0");hu(this);this.M||J(document.body,"yt-dialog-active");mt(lt.getInstance());At(Zt.getInstance());At($t.getInstance());this.K=a;S("yt-ui-dialog-show-complete",this)}};
function iu(){var a=pf("yt-dialog");return kb(a,function(b){return Xs(b)})}
k.Bd=function(){if(!this.ka){var a=this.f;Gj(document.body,"hide-players",!0);a&&Gj(a,"preserve-players",!0)}};
function fu(a){var b=nf("iframe",null,a.f);B(b,function(c){var d=L(c,"onload");d&&(d=x(d))&&M(c,"load",d);if(d=L(c,"src"))c.src=d},a);
return wb(b)}
function gu(a){B(document.getElementsByTagName("iframe"),function(b){-1==fb(a,b)&&J(b,"iframe-hid")})}
function ju(){var a=pf("iframe-hid");B(a,function(b){Ej(b,"iframe-hid")})}
k.wg=function(a){a=a.currentTarget;a.disabled||(a=L(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.S()){this.j.ha("pre-all");this.j.ha("pre-"+a);$s(this.f);At(Zt.getInstance());At($t.getInstance());this.i.setAttribute("tabindex","-1");iu()||($s(this.g),this.M||Ej(document.body,"yt-dialog-active"),an(),ju());this.A&&(N(this.A),this.A=null);this.G&&(N(this.G),this.G=null);var b=this.f;if(b){var c=L(b,"player-ready-pubsub-key");c&&(wo(c),Pm(b,"player-ready-pubsub-key"))}this.j.ha("post-all");S("yt-ui-dialog-hide-complete",this);"cancel"==a&&S("yt-ui-dialog-cancelled",
this);this.j&&this.j.ha("post-"+a);this.K=null;this.H&&this.H.focus()}};
k.setTitle=function(a){Of(F("yt-dialog-title",this.f),a)};
k.Wf=function(a){P(y(function(){this.V||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&H(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Zg=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.S=function(){return this.T};
k.dispose=function(){Xs(this.f)&&this.dismiss("dispose");N(this.C);this.C.length=0;P(y(function(){this.H=null},this),0);
this.P=this.i=null;this.j.dispose();this.j=null;this.T=!0};
k.ef=function(a){a.stopPropagation();hu(this)};
function hu(a){P(y(function(){this.i&&this.i.focus()},a),0)}
v("yt.ui.Dialog",bu,void 0);function ku(a){Em.call(this,a);this.ca=[];this.ya=[]}
A(ku,Em);function lu(a,b,c,d,e,f){b=nn(f||a.yc(),b,y(d,e||a),c);a.ca.push(b)}
ku.prototype.Oa=function(){B(this.ca,N);wo(this.ya);ku.O.Oa.call(this)};
ku.prototype.ia=function(a,b){var c=R(a,y(b,this));this.ya.push(c)};function mu(){V.call(this,"form-input")}
A(mu,V);Pa(mu);k=mu.prototype;
k.register=function(){D&&!Ce(9)&&(X(this,"click",this.Ra,"checkbox"),X(this,"keypressed",this.Ra,"checkbox"),X(this,"click",this.ic,"radio"),X(this,"keypressed",this.ic,"radio"));D&&!Ce(10)&&X(this,"click",this.yd,"placeholder");X(this,"change",this.Ra,"checkbox");X(this,"blur",this.bd,"select-element");X(this,"change",this.Ua,"select-element");X(this,"keyup",this.Ua,"select-element");X(this,"focus",this.qd,"select-element");X(this,"keyup",this.pb,"text");X(this,"keyup",this.pb,"textarea");X(this,
"keyup",this.pb,"bidi");X(this,"click",this.Ef,"reset")};
k.unregister=function(){D&&!Ce(9)&&(Y(this,"click",this.Ra,"checkbox"),Y(this,"keypressed",this.Ra,"checkbox"),Y(this,"click",this.ic,"radio"),Y(this,"keypressed",this.ic,"radio"));D&&!Ce(10)&&Y(this,"click",this.yd,"placeholder");Y(this,"change",this.Ra,"checkbox");Y(this,"blur",this.bd,"select-element");Y(this,"change",this.Ua,"select-element");Y(this,"keyup",this.Ua,"select-element");Y(this,"focus",this.qd,"select-element");Y(this,"keyup",this.pb,"text");Y(this,"keyup",this.pb,"textarea");Y(this,
"keyup",this.pb,"bidi");mu.O.unregister.call(this)};
k.Ra=function(a){var b=G(a,W(this,"checkbox-container"));a.checked&&H(b,"partial")&&(a.checked=!1,a.indeterminate=!1,Ej(b,"partial"));Gj(b,"checked",a.checked)};
k.eh=function(a){var b=G(a,W(this,"radio-container"));b&&Gj(b,"checked",a.checked)};
k.ic=function(){nu()};
k.pb=function(a){var b=a.value;bc.test(b)?a.dir="rtl":ac.test(b)?a.dir="ltr":a.removeAttribute("dir");D&&!Ce(10)&&(b=G(a,W(this,"container")))&&Gj(b,W(this,"non-empty"),!!a.value)};
k.yd=function(a){(a=G(a,W(this,"container")))&&(a=kt(this,"text",a)||kt(this,"textarea",a))&&a.focus()};
k.qd=function(a){var b=G(a,W(this,"select"));J(b,"focused");this.Ua(a)};
k.bd=function(a){var b=G(a,W(this,"select"));Ej(b,"focused");this.Ua(a)};
k.Ua=function(a){var b=G(a,W(this,"select")),c=F(W(this,"select-value"),b),d=ou(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.za(a,"onchange-callback"),d=Xm(d),Ef(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);Gj(b,W(this,"select-disabled"),a.disabled)};
k.Ef=function(){var a=mu.getInstance(),b=pf(W(a,"checkbox"));B(b,a.Ra,a);nu();pu()};
function ou(a){return a.options[Math.max(a.selectedIndex,0)]}
function qu(a,b){a.checked=b;mu.getInstance().Ra(a)}
function nu(){var a=mu.getInstance(),b=pf(W(a,"radio"));B(b,a.eh,a)}
function pu(){var a=mu.getInstance(),b=pf(W(a,"select-element"));B(b,a.Ua,a)}
function ru(){var a;return(a=(su||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function tu(a,b){bu.call(this,a,!0,!1);this.Ca=b;this.l=Mf(a);this.F=null}
q(tu,bu);tu.prototype.show=function(a){bu.prototype.show.call(this,a);this.F=new uu(this.Ca,this.ma.bind(this));Gm(this.F,this.f)};
tu.prototype.dismiss=function(a){bu.prototype.dismiss.call(this,a);this.F=null;Ff(this.l)};
tu.prototype.ma=function(a,b){var c=this,d=Mf(this.l);Gf(a,this.l);this.l=Jf(d);d=F("yt-dialog",d);d=new bu(d,!1,!1);eu(d,function(e){Ff(c.l);b(e)},!0);
d.show()};
function uu(a,b){ku.call(this);this.Ca=a;this.M=b;this.f=this.F=this.i=this.l=this.A=null}
q(uu,ku);k=uu.prototype;
k.jb=function(){ku.prototype.jb.call(this);this.A=Fm(this,"legal-report-details-form-renderer-description");this.l=Fm(this,"legal-report-details-form-renderer-issue-type-select");this.i=Fm(this,"legal-report-details-form-renderer-affiliation-select");this.F=Fm(this,"legal-report-details-form-renderer-name");this.f=Fm(this,"legal-report-details-form-renderer-submit-button");lu(this,"keyup","legal-report-details-form-renderer-description",this.Vb.bind(this));lu(this,"change","legal-report-details-form-renderer-issue-type-select",
this.Vb.bind(this));lu(this,"change","legal-report-details-form-renderer-affiliation-select",this.Vb.bind(this));lu(this,"click","yt-dialog-content",this.Vb.bind(this));lu(this,"click","legal-report-details-form-renderer-submit-button",this.dg.bind(this));pu()};
k.Oa=function(){this.f=this.F=this.i=this.l=this.A=null;ku.prototype.Oa.call(this)};
k.dg=function(){var a=L(this.f,"flag-url"),b=L(this.f,"flag-action"),c=this.A.value,d=parseInt(this.l.options[this.l.selectedIndex].value||"0",10),e=parseInt(this.i.options[this.i.selectedIndex].value||"0",10),f=this.F.value;a&&b&&c&&d&&e&&(b={flagging_action:b,report_issue:d,report_affiliation:e,report_description:c},f&&(b.report_full_name=f),this.f.disabled=!0,Wn(a,{format:"JSON",method:"POST",Ya:!0,onSuccess:this.Qg.bind(this),onError:this.Pg.bind(this),R:b}))};
k.Qg=function(a,b){var c=this;this.f.disabled=!1;if(b.html_content){var d=Cf(b.html_content);this.M(d,function(){S("commentreported",c.Ca,b.feedback_text)})}else S("commentreported",this.Ca,b.feedback_text)};
k.Pg=function(){this.f.disabled=!1};
k.Vb=function(){this.f.disabled=this.A&&this.l&&this.i&&this.A.value&&this.l.selectedIndex&&this.i.selectedIndex?!1:!0};function vu(a){ku.call(this);this.V=this.P=this.M=this.Y=null;this.Ca=a;this.i=this.F=this.T=this.l=this.f=this.A=this.ke=null}
A(vu,ku);function wu(a){if("radio"==a.type)return a=G(a,"option-selectable-item-renderer-radio-container"),F("option-selectable-item-renderer-confirm-dialog",a);a=ou(a);return E(a?a.value||a.text:null)}
function xu(a){a=Yf(a,"LI");return F("option-item-supported-renderers-sub-options",a)}
k=vu.prototype;k.yg=function(a){a=a.target;pu();if(this.f){Ej(this.f,"option-selectable-item-renderer-radio-selected");var b=xu(this.f);b&&$s(b)}this.l=null;this.f=a;J(this.f,"option-selectable-item-renderer-radio-selected");(a=xu(this.f))?(Zs(a),a=F("yt-uix-form-input-select-element",a),a=!!L(ou(a),"disable-submit"),yu(this,a)):yu(this,!1);this.F&&(F("yt-uix-form-input-checkbox",this.F).checked=!1,Gj(this.F,"checked",!1));$s(this.i);Zs(this.A);zu(this,this.f)};
function Au(a){if(a.M&&a.P){var b={flagging_action:a.M};Wn(a.P,{format:"JSON",method:"POST",Ya:!0,onSuccess:y(function(c,d){d.feedback_text&&(this.ke=d.feedback_text);if(d.html_content){var e=Cf(d.html_content);this.Y?Gf(e,this.Y):document.body.appendChild(e);e=new bu(E("flagging-response-message-dialog"),!1,!0);eu(e,y(this.ec,this),!0);e.show()}else this.ec()},a),
onError:y(function(){yu(this,!1)},a),
R:b})}else Bu(a)}
function Bu(a){if(a.V){var b={feedback_tokens:a.V};Wn("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",Ya:!0,onSuccess:y(function(c,d){if(d.feedback_responses){var e=new bu(this.Y,!1,!0);eu(e,y(this.ec,this),!0);e.dismiss("close");Cu(this,d)}else this.ec()},a),
onError:y(function(){yu(this,!1)},a),
R:b})}}
function Cu(a,b){var c=F("service-endpoint-replace-enclosing-action-notification",a.Ca);var d=a.Ca;var e=G(d,"yt-lockup"),f=G(d,"feed-item-container");if(e){var g=F("yt-lockup-notifications-container",e);d=F("yt-lockup-dismissable",e)}else if(f)g=F("feed-item-dismissal-notices",f),d=F("feed-item-dismissable",f);else return;g&&c&&(Ef(g),Df(g,c));var h;g&&(h=function(){Zs(g);c&&Zs(c)});
d?Du(d,h):h&&h();S("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(h=b.feedback_responses[0].follow_up_confirmation_html,jd(e,h)):e.textContent="Thanks for the report";e.className="follow-up-confirmation hid";h=F("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(h);e=F("replace-enclosing-action-message",c);J(e,"hid");e=F("follow-up-confirmation",c);Ej(e,"hid")}
function Du(a,b){$s(a);b&&b();S("yt-dom-content-change",a)}
k.Gh=function(){yu(this,!0);this.P=L(this.f,"flag-url");this.M=L(this.f,"flag-action");this.V=L(this.f,"feedback-token");var a=wu(this.f),b=xu(this.f);b&&(a=F("yt-uix-form-input-select-element",b),a=wu(a));a?(this.Y?Gf(a,this.Y):document.body.appendChild(a),b=new bu(a,!1,!0),lu(this,"click","option-selectable-item-renderer-confirm-button",this.vg,null,a),b.show()):Au(this)};
k.vg=function(a){var b=G(a.target,"option-selectable-item-renderer-confirm-button"),c=L(b,"url");a=L(b,"flag-action");b=L(b,"flag-url");if(c){var d=zc(c)||Bc;d=uc(d);c!=d&&fn(Error("Unsafe window.open URL: "+c));c=d;window.open(c,zd(c).toString(36))}a&&b&&(this.M=a,this.P=b);Au(this)};
k.ec=function(){S("commentreported",this.Ca,this.ke)};
k.og=function(a){this.l=ou(a.target);zu(this,this.l);a=!!L(this.l,"disable-submit");yu(this,a)};
k.ug=function(a){a.target.checked?($s(this.A),Zs(this.i)):($s(this.i),Zs(this.A))};
function yu(a,b){a.A.disabled=b;a.i&&(a.i.disabled=b)}
k.xg=function(){yu(this,!0);var a=L(this.i,"flag-url"),b=L(this.l?this.l:this.f,"flag-action");a&&b?(b={flagging_action:b,flagging_checkbox_checked:1},Wn(a,{format:"JSON",method:"POST",Ya:!0,onSuccess:y(function(c,d){if(d.html_content&&this.Y){var e=Cf(d.html_content),f=Mf(Mf(this.Y));Gf(e,Mf(this.Y));this.Y=e=F("yt-dialog",f);(new tu(e,this.Ca)).show()}else yu(this,!1)},this),
onError:y(function(){yu(this,!1)},this),
R:b})):yu(this,!1)};
function zu(a,b){b&&(L(b,"action-legal-checkbox-show")?Zs(a.T):L(b,"action-legal-checkbox-hide")&&$s(a.T))}
k.jb=function(){vu.O.jb.call(this);this.A=Fm(this,"options-renderer-submit-button");this.Y=G(this.A,"yt-dialog");this.T=Fm(this,"legal-report-checkbox-container");this.F=Fm(this,"legal-report-checkbox");this.i=Fm(this,"report-form-modal-renderer-next-button");lu(this,"click","options-renderer-submit-button",this.Gh);lu(this,"click","option-selectable-item-renderer-radio",this.yg);lu(this,"change","yt-uix-form-input-select-element",this.og);lu(this,"click","legal-report-checkbox",this.ug);lu(this,
"click","report-form-modal-renderer-next-button",this.xg)};
k.Oa=function(){this.i=this.F=this.T=this.Ca=this.l=this.f=this.A=this.Y=null;vu.O.Oa.call(this)};function Eu(a){bu.call(this,a,!1,!0);this.ma=E("report-form-modal-renderer");this.l=null;this.f=a}
A(Eu,bu);Eu.prototype.F=function(){this.dismiss("close")};
Eu.prototype.show=function(a){Eu.O.show.call(this,a);this.l=new vu(this.K);a=F("yt-dialog-fg-content",this.f);Gm(this.l,a);vo(y(this.F,this))};
Eu.prototype.dismiss=function(a){Eu.O.dismiss.call(this,a);this.l&&(this.l=null);Ff(this.ma)};function Fu(){V.call(this,"report-thumb-wrap");this.f=null;this.g=!1}
q(Fu,V);Fu.prototype.register=function(){X(this,"click",this.i)};
Fu.prototype.unregister=function(){Y(this,"click",this.i);V.prototype.unregister.call(this)};
Fu.prototype.i=function(a){var b=Lt(a);b=G(b,"yt-lockup");this.f=yf("DIV",{"class":"video-renderer-abuse"});var c=yf("DIV",{"class":"video-renderer-abuse-content"});this.f.appendChild(c);b.appendChild(this.f);Gu(this,Jf(this.f),a,b);Zs(this.f)};
function Gu(a,b,c,d){if(!a.g){var e=L(c,"url");(c=L(c,"params"))&&e&&(c={params:c},a.g=!0,Wn(e,{format:"JSON",method:"POST",Ya:!0,onSuccess:function(f,g){a.g=!1;if(!E("report-form-modal-renderer")){var h=Cf(g.html_content);b.appendChild(h);h=F("yt-dialog",E("report-form-modal-renderer"));(new Eu(h)).show(d)}},
onError:function(){a.g=!1},
R:c}))}}
Pa(Fu);function Hu(){V.call(this,"overlay");this.j=this.g=this.i=this.f=null}
q(Hu,V);k=Hu.prototype;k.register=function(){X(this,"click",this.Pc,"target");X(this,"click",this.hide,"close");Iu(this)};
k.unregister=function(){V.prototype.unregister.call(this);Y(this,"click",this.Pc,"target");Y(this,"click",this.hide,"close");this.j&&(wo(this.j),this.j=null);this.g&&(N(this.g),this.g=null)};
k.Pc=function(a){if(!this.f||!Xs(this.f.f)){var b=this.W(a);a=Ju(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.B(b,"disable-shortcuts")||!1,d=!!this.B(b,"disable-outside-click-dismiss")||!1;this.f=new bu(a,c);this.i=b;var e=F("yt-dialog-fg",a);if(e){var f=this.B(b,"overlay-class")||"",g=this.B(b,"overlay-style")||"default",h=this.B(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(W(this,g));f.push(W(this,h));Dj(e,f)}this.f.show();S("yt-uix-kbd-nav-move-to",e||a);Iu(this);c||
d||(c=y(function(l){H(l.target,"yt-dialog-base")&&Ku(this)},this),a=F("yt-dialog-base",a),this.g=M(a,"click",c));
this.za(b,"overlay-shown");S("yt-uix-overlay-shown",b)}}};
function Iu(a){a.j||(a.j=R("yt-uix-overlay-hide",Lu));a.f&&eu(a.f,function(){var b=Hu.getInstance();b.i=null;b.f.dispose();b.f=null})}
function Ku(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.za(b,"overlay-hidden");a.i=null;a.g&&(N(a.g),a.g=null);a.f=null}}
function Ju(a,b){var c;if(a)if(c=F("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=G(b,"yt-dialog"));return c}
function Mu(){var a=Hu.getInstance();if(a.i)a=F("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=pf("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=G(a[b],"yt-dialog");if(Xs(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||S("yt-uix-overlay-hide")};
function Lu(){Ku(Hu.getInstance())}
k.show=function(a){this.Pc(a)};
Pa(Hu);function Nu(){V.call(this,"char-counter")}
A(Nu,V);Pa(Nu);Nu.prototype.register=function(){X(this,"keydown",this.f,"input");X(this,"paste",this.f,"input");X(this,"cut",this.f,"input");X(this,"blur",this.f,"input")};
Nu.prototype.unregister=function(){Y(this,"keydown",this.f,"input");Y(this,"paste",this.f,"input");Y(this,"cut",this.f,"input");Y(this,"blur",this.f,"input")};
Nu.prototype.f=function(a){var b=this.W(a);if(b){var c="true"==this.B(b,"count-char-by-size"),d=parseInt(this.B(b,"char-limit"),10);isNaN(d)||0>=d||P(y(function(){var e="true"==this.B(b,"use-plaintext-length");Ou(a,c,e);var f=parseInt(this.B(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-Pu(a,c,e);Gj(b,W(this,"maxed-out"),g<f);Gj(b,W(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.B(b,"maxed-out-as-positive")&&(g=Math.abs(g));e=pf(W(this,"remaining"),b);B(e,function(h){Of(h,g)})},
this),0)}};
function Ou(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=Pu(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function Pu(a,b,c){a=a.value;c&&(a=Rj(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function Qu(){V.call(this,"close")}
A(Qu,V);Pa(Qu);Qu.prototype.register=function(){X(this,"click",this.f)};
Qu.prototype.unregister=function(){Y(this,"click",this.f)};
Qu.prototype.f=function(a){var b,c=this.B(a,"close-parent-class"),d=this.B(a,"close-parent-id");d?b=E(d):c&&(b=G(a,c));b&&($s(b),c=this.B(a,"close-focus-target-id"))&&(c=E(c))&&(d=lt.getInstance(),d.isToggled(c)&&d.toggle(c),c.focus());this.za(a,"close-callback",b)};function Ru(){V.call(this,"expander")}
A(Ru,V);Pa(Ru);Ru.prototype.register=function(){X(this,"click",this.f,"head");X(this,"keypress",this.g,"head")};
Ru.prototype.unregister=function(){Y(this,"click",this.f,"head");Y(this,"keypress",this.g,"head")};
Ru.prototype.f=function(a){Su(this,a)};
Ru.prototype.g=function(a,b,c){c&&13==c.keyCode&&Su(this,a)};
function Su(a,b){var c=a.W(b);if(c){c&&(Tf(c)||rf(c,{tabIndex:"0"}),c.focus());Ij(c,W(a,"collapsed"));var d=!H(c,W(a,"collapsed"));S("yt-uix-expander-toggle",c,d);S("yt-dom-content-change",c);a.za(c,"expander-action")}}
;function Tu(){V.call(this,"languagepicker");this.f={}}
A(Tu,V);Pa(Tu);k=Tu.prototype;k.register=function(){X(this,"click",this.xd,"menu-item");X(this,"keyup",this.oe,"search-input");X(this,"keydown",this.Ad,"search-input");X(this,"blur",this.zd,"search-input");X(this,"focus",this.wd);this.ia("yt-uix-button-menu-before-show",this.yf);this.ia("yt-uix-button-menu-hide",this.xf)};
k.unregister=function(){Y(this,"click",this.xd,"menu-item");Y(this,"keyup",this.oe,"search-input");Y(this,"keydown",this.Ad,"search-input");Y(this,"blur",this.zd,"search-input");Y(this,"focus",this.wd);N(Ib(this.f));this.f={};Tu.O.unregister.call(this)};
k.yf=function(a){if(H(a,"yt-languagepicker-button")){var b=Ta(a);a=M(a,"keydown",y(this.tf,this));this.f[b]=a}};
k.xf=function(a){H(a,"yt-languagepicker-button")&&(a=Ta(a),N(this.f[a]),delete this.f[a])};
function Uu(a,b){return lb(b,function(c){return!lb(a,function(d){return 0!=d.lastIndexOf(c,0)})})}
function Vu(a,b,c){B(a,function(d){var e=Kj(d,"value"),f=Wu(d);Ws(d,e!=c&&f&&Uu(f,b))})}
function Wu(a){if("undefined"===typeof a.f){var b=Kj(a,"searchTerms");b?(a.f=[],B(b.split(";"),function(c){xb(a.f,Xu(c))})):a.f=Xu(Wf(a))}return a.f}
function Xu(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function Yu(a,b){var c=lt.getInstance(),d=pt(c,a);rt(c,a);tt(c,d,b)}
k.oe=function(a){var b=this.W(a),c=kt(this,"search-result",b),d=Xu(a.value);if(d){var e=If(c);a=Kj(b,"fallbackOption");Vu(e,d,a);d=mb(e,Xs);a=c.querySelector('li[data-value="'+a+'"]');Ws(c,!(!d&&!a));d?Yu(b,d):a&&(Zs(a),Yu(b,a))}else Ws(c,!1)};
k.Ad=function(a,b,c){b=lt.getInstance();a=this.W(a);var d=pt(b,a);switch(c.keyCode){case 13:case 9:(b=rt(b,a))&&on(Jf(b),"click");c.preventDefault();break;case 27:rt(b,a);st(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
k.xd=function(a){var b=Kj(a,"value"),c=this.W(a),d=Kj(c,"languagepickerInputId");d=E(d);d.value=b;on(d,"change");(d=kt(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=kt(this,"selected",c))&&Ff(b),a=a.cloneNode(!0),J(a,W(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function Zu(a,b){var c=lt.getInstance(),d=a.W(b);pt(c,d).focus()}
k.zd=function(a){Zu(this,a)};
k.wd=function(a,b,c){"INPUT"!=c.target.tagName&&Zu(this,a)};
k.tf=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=lt.getInstance();b=nt(c,b);b=kt(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};function $u(){this.i=1E3/24;this.g=null;this.f=[]}
var av=new $u;$u.prototype.j=function(){for(var a=z(),b=this.f.length-1;0<=b;b--)bv(this.f[b],a)&&cv(this,b)};
$u.prototype.add=function(a){this.f.push(a);this.g||(this.g=Mn(y(this.j,this),this.i))};
$u.prototype.remove=function(a){a=fb(this.f,a);0<=a&&cv(this,a)};
function cv(a,b){tb(a.f,b);a.f.length||(Nn(a.g),delete a.g)}
;function dv(a,b){this.f=new dk(0,0,a.x,a.y,b.x,b.y,1,1)}
function ev(a){return a}
var fv=new dv({x:.25,y:.1},{x:.25,y:1});function gv(a){return gk(fv.f,a)}
var hv=new dv({x:.42,y:0},{x:1,y:1});function iv(a){return gk(hv.f,a)}
var jv=new dv({x:0,y:0},{x:.58,y:1});function kv(a){return gk(jv.f,a)}
var lv=new dv({x:.42,y:0},{x:.58,y:1});function mv(a){return gk(lv.f,a)}
function nv(a){switch(a){case "linear":return ev;case "ease-in":return iv;case "ease-out":return kv;case "ease-in-out":return mv;default:return gv}}
;function ov(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.Zb=c.fa||null;this.Qc=c.Qc||"ease";this.setup(c);c.dj||this.play()}
ov.prototype.setup=function(){};var pv;function qv(){if(void 0===pv){var a=document.createElement("div");void 0!==a.style.MozTransition?pv="Moz":void 0!==a.style.WebkitTransition?pv="Webkit":void 0!==a.style.f?pv="O":pv=null}return pv}
;function rv(a,b){ov.call(this,a,b)}
A(rv,ov);function sv(a,b,c){b=qv()+b;a.el.style[b]=c}
rv.prototype.play=function(){this.el.style.opacity=this.g;P(y(function(){sv(this,"TransitionTimingFunction",this.Qc);sv(this,"TransitionDuration",this.duration+"s");sv(this,"TransitionProperty","opacity");pn(this.el,ne?"webkitTransitionEnd":je?"oTransitionEnd":"transitionend",y(function(){sv(this,"TransitionTimingFunction","");sv(this,"TransitionDuration","");sv(this,"TransitionProperty","");this.Zb&&this.Zb(this)},this));
this.el.style.opacity=this.f},this),20)};function tv(a,b){this.g=this.f=0;this.i=av;this.G=null;ov.call(this,a,b)}
A(tv,ov);tv.prototype.setup=function(a){this.f=0;this.i=a.loop||av;this.G=nv(this.Qc)};
tv.prototype.play=function(){this.g=z();bv(this,this.g);this.i.add(this)};
tv.prototype.pause=function(){this.i.remove(this)};
function bv(a,b){var c=1E3*a.duration;a.f=Math.min(a.f+(b-a.g),c);a.g=b;var d=a.G(a.f/c);d=a.A-(a.A-a.l)*d;a.j?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.f>=c)a.fa(),a.Zb&&P(y(a.Zb,r,a),0);return c}
tv.prototype.fa=function(){};function uv(a,b){this.A=1;this.l=0;this.j=!1;tv.call(this,a,b)}
A(uv,tv);uv.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.A=isNaN(b)?1:b;this.l=isNaN(c)?0:c;this.j=void 0===this.el.style.opacity;uv.O.setup.call(this,a)};
uv.prototype.fa=function(){this.j&&1==this.l&&(this.el.style.filter="")};
function vv(a,b){this.g=1;this.f=0;ov.call(this,a,b)}
A(vv,rv);vv.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.g=isNaN(b)?1:b;this.f=isNaN(c)?0:c;vv.O.setup.call(this,a)};function wv(a,b,c){var d={duration:.5};d.start=b;d.end=c;qv()?new vv(a,d):new uv(a,d)}
;function xv(a){Es.call(this,1,arguments);this.csn=a}
q(xv,Es);var Os=new Fs("screen-created",xv),yv=[],zv=0;function Av(a,b,c){yv.push({payloadName:a,payload:b,options:c});zv||(zv=Ms())}
function Ns(a){if(yv){for(var b=p(yv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,vp(c.payloadName,c.payload,null,c.options));yv.length=0}zv=0}
;function Bv(a,b){var c=O("use_default_events_client")?void 0:Br;B(b,function(d){var e=!0,f=(e=void 0===e?!1:e)?16:8;d={csn:a,ve:d.getAsJson(),eventType:f};e={od:ds(a),jc:a,af:e};"UNDEFINED_CSN"==a?Av("visualElementHidden",d,e):c?vp("visualElementHidden",d,c,e):Cr("visualElementHidden",d,e)})}
;function Cv(){V.call(this,"mouseover-img-wrap");this.j=this.f=!1;this.H=this.A=this.g=-1;this.i=""}
A(Cv,V);Pa(Cv);var Dv=0,Ev=0;k=Cv.prototype;k.register=function(){X(this,"mouseover",this.wb);X(this,"focusin",this.wb);X(this,"focus",this.wb);X(this,"mouseout",this.vb);X(this,"focusout",this.vb);X(this,"blur",this.vb);X(this,"click",this.Le);X(this,"mousedown",this.Pd)};
k.unregister=function(){Q(Dv);Q(Ev);Y(this,"mouseover",this.wb);Y(this,"focusin",this.wb);Y(this,"focus",this.wb);Y(this,"mouseout",this.vb);Y(this,"focusout",this.vb);Y(this,"blur",this.vb);Y(this,"click",this.Le);Y(this,"mousedown",this.Pd);Cv.O.unregister.call(this)};
function Fv(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function Gv(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function Hv(a,b){if(a.j){var c={isMovingThumbnail:a.f};if(a.f&&0<a.g){var d=a.H-a.A;0<a.A&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(To()-a.g)}a.i&&(c.videoId=a.i);d=bs();var e=L(b,"visibility-tracking");if(d&&e){e=new Xr({trackingParams:e});var f={thumbnailHoveredData:c};c=O("use_default_events_client")?void 0:Br;var g="INTERACTION_LOGGING_GESTURE_TYPE_HOVER";e={csn:d,ve:e.getAsJson(),gestureType:g};f&&(e.clientData=f);f={od:ds(d),jc:d};"UNDEFINED_CSN"==
d?Av("visualElementGestured",e,f):c?vp("visualElementGestured",e,c,f):Cr("visualElementGestured",e,f)}a.j=!1;a.f=!1;a.g=-1;a.A=-1;a.H=-1;a.i=""}}
function Iv(a,b){var c=a.B(b,"mouseover-src");return yf("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function Jv(a){return F("mouseover-img",a)}
function Kv(a,b,c){120!=b.naturalWidth?(a.g=To(),a.H=To(),Dv=P(a.Hf,2500),wv(b,0,1)):c&&wv(c,0,1)}
k.Hf=function(a){Q(Dv);Dv=0;var b=Jv(a);b&&(wv(b,1,0),(a=F("mouseover-play",a))&&wv(a,0,1))};
function Lv(){var a=yf("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function Mv(a){return"none"!=(rg(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
k.Pd=function(a){Q(Ev);Ev=0;(a=Jv(a))&&!a.complete&&(ld(a,""),a.onload=null,Q(Dv),Dv=0)};
k.wb=function(a){var b=Fv(a);if(b){var c=this.B(b,"mouseover-src"),d=F("mouseover-play",a),e=Jv(a);if(!d||c&&!e)c?(this.f=!0,this.i=Gv(c)):(this.f=!1,b.src&&(this.i=Gv(b.src))),d||(d=Lv(),b.parentNode.appendChild(d)),Q(Ev),Ev=0,this.j=!1,Ev=P(function(){this.A=To();this.j=!0;d&&!c&&wv(d,0,1);c&&!e&&(e=Iv(this,b),b.parentNode.appendChild(e),e.complete?Kv(this,e,d):e.onload=function(){Kv(this,e,d)}.bind(this))}.bind(this),150)}};
k.vb=function(a){var b=Fv(a);if(null!=b){var c=this.B(b,"mouseover-src");b=this.B(b,"mouseover-log");var d=F("mouseover-play",a),e=Jv(a);if(d&&!Mv(d)||c&&e&&!Mv(e))Q(Ev),Ev=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.g=0),Q(Dv),Dv=0,ld(e,""),e.parentNode.removeChild(e)),b&&Hv(this,G(a,"yt-lockup-video"))}};
k.Le=function(a){var b=Fv(a);null!=b&&this.B(b,"mouseover-log")&&Hv(this,G(a,"yt-lockup-video"))};function Nv(){V.call(this,"redirect-link")}
A(Nv,V);Pa(Nv);Nv.prototype.register=function(){X(this,"click",this.f)};
Nv.prototype.unregister=function(){Y(this,"click",this.f)};
Nv.prototype.f=function(a){if(!L(a,"redirect-href-updated")){Nm(a,"redirect-href-updated","true");var b=K("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;kd(a,Nd("/redirect",c))}}};function Ov(){V.call(this,"scroller");this.f={}}
A(Ov,V);Pa(Ov);k=Ov.prototype;k.register=function(){X(this,"mouseenter",this.Qd);X(this,"mouseleave",this.Xb)};
k.unregister=function(){Y(this,"mouseenter",this.Qd);Y(this,"mouseleave",this.Xb);for(var a in this.f)this.Xb(this.f[a]);this.f={};Ov.O.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.Xb(this.f[a]);this.f={}};
k.Qd=function(a){var b=M(a,"mousewheel",y(this.Bf,this,a));Nm(a,"scroller-mousewheel-listener",b);b=M(a,"scroll",y(this.Jh,this,a));Nm(a,"scroller-scroll-listener",b);a&&(b=Ta(a).toString(),this.f[b]=a)};
k.Xb=function(a){var b=this.B(a,"scroller-mousewheel-listener")||"";Nm(a,"scroller-mousewheel-listener","");var c=this.B(a,"scroller-scroll-listener")||"";Nm(a,"scroller-scroll-listener","");N(b);N(c);Nm(a,"scroller-scroll-listener","");a&&(a=Ta(a).toString(),delete this.f[a])};
k.Bf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.B(a,"scroller-allow-pagescroll")||b.preventDefault()};
k.Jh=function(a){this.za(a,"scroll-action");S("yt-dom-content-change",a)};function Pv(){V.call(this,"sessionlink")}
A(Pv,V);Pa(Pv);Pv.prototype.register=function(){X(this,"mousedown",this.f);X(this,"click",this.f)};
Pv.prototype.unregister=function(){Y(this,"mousedown",this.f);Y(this,"click",this.f)};
Pv.prototype.f=function(a){Qv(a)};
function Qv(a){var b;if(b=L(a,"sessionlink-target")||a.href||""){var c=L(a,"sessionlink")||"";c=wn(c);(a=parseInt(L(a,"sessionlink-lifetime"),10))?es(b,c,a):es(b,c)}}
;function Rv(a){V.call(this,a||"slider");this.g=0;this.f=null}
A(Rv,V);Pa(Rv);k=Rv.prototype;k.register=function(){X(this,"click",this.jd,"prev");X(this,"click",this.hd,"next");X(this,"keyup",this.Xd,"item");this.f=M(window,"resize",y(this.Cf,this));this.ia("yt-uix-expander-toggle",this.lc)};
k.unregister=function(){Y(this,"click",this.jd,"prev");Y(this,"click",this.hd,"next");Y(this,"click",this.Xd,"item");N(this.f);Rv.O.unregister.call(this)};
k.lc=function(){var a=pf(W(this));B(a,function(b){Sv(this,b)},this)};
k.Cf=function(){Q(this.g);this.g=P(y(this.lc,this),200)};
function Tv(a,b,c){var d=a.W(b);if(!H(d,W(a,"is-moving"))){b=kt(a,"list",d);var e=kt(a,"body",d),f=wb(pf(W(a,"item"),d));if(f){var g=f[0];if("forward"==c){var h=Uv(d,e,f);c=void 0!==h.nextElementSibling?h.nextElementSibling:Kf(h.nextSibling,!0);if(!c)return;h=Vv(a,c,e,f);g=c}else if("back"==c){h=Wv(d,e,f);c=void 0!==h.previousElementSibling?h.previousElementSibling:Kf(h.previousSibling,!1);if(!c)return;h=Xv(a,c,e,f);g=c}J(d,W(a,"is-moving"));Fg(d)?b.style.right=(parseInt(b.style.right,10)||0)-h+"px":
b.style.left=(parseInt(b.style.left,10)||0)+h+"px";var l=P(y(a.le,a,d,g),510);pn(b,Hi,y(function(m){Q(l);this.le(d,m)},a,g))}}}
k.hd=function(a){Tv(this,a,"forward")};
k.jd=function(a){Tv(this,a,"back")};
k.Xd=function(a){(a=this.W(a))&&S("yt-dom-content-change",a)};
function Wv(a,b,c){return Fg(a)?Yv(a,b,c):Zv(a,b,c)}
function Uv(a,b,c){return Fg(a)?Zv(a,b,c):Yv(a,b,c)}
function Zv(a,b,c){function d(f){return xg(f)>e-1}
var e=xg(b);return Fg(a)?ob(c,d):mb(c,d)}
function Yv(a,b,c){function d(f){f=xg(f)+f.offsetWidth;return e>f-1}
var e=xg(b)+b.offsetWidth;return Fg(a)?mb(c,d):ob(c,d)}
function Xv(a,b,c,d){var e=a.W(b);var f=xg(c);var g=f+c.offsetWidth,h=xg(b);b=h+b.offsetWidth;var l=d[0];d=xg(l);l=d+l.offsetWidth;Fg(e)?(c=a.zc(e,c)-h,f=g-l):(c=a.Ac(e,c)-b,f-=d);Gj(e,W(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Gj(e,W(a,"at-head"),!0);return f}
function Vv(a,b,c,d){var e=a.W(b);var f=xg(c);var g=f+c.offsetWidth,h=xg(b);b=h+b.offsetWidth;var l=d[d.length-1];d=xg(l);l=d+l.offsetWidth;Fg(e)?(c=a.Ac(e,c)-b,f-=d):(c=a.zc(e,c)-h,f=g-l);Gj(e,W(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Gj(e,W(a,"at-tail"),!0);return f}
k.zc=function(a,b){return xg(b)};
k.Ac=function(a,b){return xg(b)+b.offsetWidth};
k.le=function(a,b){a&&(Ej(a,W(this,"is-moving")),Sv(this,a),S("yt-uix-slider-slide-shown",b),S("yt-dom-content-change",a))};
function Sv(a,b){var c=kt(a,"body",b),d=wb(pf(W(a,"item"),b));if(d&&d.length){var e=Wv(b,c,d);c=Uv(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;Gj(b,W(a,"at-head"),e);Gj(b,W(a,"at-tail"),d);if(a.B(b,"disable-slider-buttons")){if(c=kt(a,"prev",b))c.disabled=e;if(e=kt(a,"next",b))e.disabled=d}}
;function $v(){V.call(this,"tabs")}
A($v,V);Pa($v);$v.prototype.register=function(){X(this,"click",this.f,"tab");X(this,"keydown",this.g,"tab")};
$v.prototype.unregister=function(){Y(this,"click",this.f,"tab");Y(this,"keydown",this.g,"tab");$v.O.unregister.call(this)};
$v.prototype.f=function(a){if(!H(a,"disabled")){var b=this.W(a),c=W(this,"selected"),d=this.B(b,"uix-tabs-selected-extra-class");if(b=F(c,b)){var e=aw(this,b);Ej(b,c);d&&Ej(b,d);$s(e)}b=aw(this,a);J(a,c);d&&J(a,d);Zs(b);S("yt-uix-tabs-after-shown",a,b)}};
$v.prototype.g=function(a,b,c){13==c.keyCode&&this.f(a)};
function aw(a,b){var c=a.B(b,"uix-tabs-target-id");return E(c)}
;function bw(){V.call(this,"tile")}
A(bw,V);Pa(bw);bw.prototype.register=function(){X(this,"click",this.f)};
bw.prototype.unregister=function(){Y(this,"click",this.f)};
bw.prototype.f=function(a,b,c){Yf(c.target,"a")||Yf(c.target,"button")||!(a=F(W(this,"link"),a))||(D&&!Ce(9)?a.click():(H(a,"yt-uix-sessionlink")&&Qv(a),H(a,"spf-link")?gs(a.href):fs(a.href)))};function cw(){var a=void 0===a?!1:a;var b=$m();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function dw(){V.call(this,"tooltip");this.f=0;this.g={}}
A(dw,V);Pa(dw);k=dw.prototype;k.register=function(){X(this,"mouseover",this.qc);X(this,"mouseout",this.eb);X(this,"focus",this.pd);X(this,"blur",this.Zc);X(this,"click",this.eb);X(this,"touchstart",this.ue);X(this,"touchend",this.kc);X(this,"touchcancel",this.kc)};
k.unregister=function(){Y(this,"mouseover",this.qc);Y(this,"mouseout",this.eb);Y(this,"focus",this.pd);Y(this,"blur",this.Zc);Y(this,"click",this.eb);Y(this,"touchstart",this.ue);Y(this,"touchend",this.kc);Y(this,"touchcancel",this.kc);this.dispose();dw.O.unregister.call(this)};
k.dispose=function(){for(var a in this.g)this.eb(this.g[a]);this.g={}};
k.qc=function(a){if(!(this.f&&1E3>z()-this.f)){var b=parseInt(this.B(a,"tooltip-hide-timer"),10);b&&(Pm(a,"tooltip-hide-timer"),Q(b));b=y(function(){ew(this,a);Pm(a,"tooltip-show-timer")},this);
var c=parseInt(this.B(a,"tooltip-show-delay"),10)||0;b=P(b,c);Nm(a,"tooltip-show-timer",b.toString());a.title&&(jt(a,fw(this,a)),a.title="");b=Ta(a).toString();this.g[b]=a}};
k.eb=function(a){var b=parseInt(this.B(a,"tooltip-show-timer"),10);b&&(Q(b),Pm(a,"tooltip-show-timer"));b=y(function(){if(a){var c=E(gw(this,a));c&&(hw(c),Ff(c),Pm(a,"content-id"));c=E(gw(this,a,"arialabel"));Ff(c)}Pm(a,"tooltip-hide-timer")},this);
b=P(b,50);Nm(a,"tooltip-hide-timer",b.toString());if(b=this.B(a,"tooltip-text"))a.title=b;b=Ta(a).toString();delete this.g[b]};
k.pd=function(a,b){this.f=0;this.qc(a,b)};
k.Zc=function(a){this.f=0;this.eb(a)};
k.ue=function(a,b,c){c.changedTouches&&(this.f=0,(a=gt(b,W(this),c.changedTouches[0].target))&&this.qc(a,b))};
k.kc=function(a,b,c){c.changedTouches&&(this.f=z(),(a=gt(b,W(this),c.changedTouches[0].target))&&this.eb(a))};
function iw(a,b,c){jt(b,c);a=a.B(b,"content-id");(a=E(a))&&Of(a,c)}
function fw(a,b){return a.B(b,"tooltip-text")||b.title}
function ew(a,b){if(b){var c=fw(a,b);if(c){var d=E(gw(a,b));if(!d){d=document.createElement("div");d.id=gw(a,b);Cj(d,W(a,"tip"));var e=document.createElement("div");Cj(e,W(a,"tip-body"));var f=document.createElement("div");Cj(f,W(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");Cj(g,W(a,"tip-content"));var h=jw(a,b),l=gw(a,b,"content");g.id=l;Nm(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var m=Wf(b);l=gw(a,b,"arialabel");
f=document.createElement("div");J(f,W(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Of(f,m);b.setAttribute("aria-labelledby",l);l=cw()||document.body;l.appendChild(f);l.appendChild(d);iw(a,b,c);(c=parseInt(a.B(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(g,W(a,"normal-wrap")));g=H(b,W(a,"reverse"));kw(a,b,d,e,h,g)||kw(a,b,d,e,h,!g);var n=W(a,"tip-visible");P(function(){J(d,n)},0)}}}}
function kw(a,b,c,d,e,f){Gj(c,W(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Cg(b);f=new ef((h.width-10)/2,f?h.height:0);var l=wg(b);bm(new ef(l.x+f.x,l.y+f.y),c,g);f=tf(window);if(1==c.nodeType)var m=yg(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new ef(c.clientX,c.clientY);c=Cg(d);var n=Math.floor(c.width/2);g=!!(f.height<m.y+h.height);h=!!(m.y<h.height);l=!!(m.x<n);f=!!(f.width<m.x+n);m=(c.width+3)/-2- -5;a=a.B(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function gw(a,b,c){a=W(a)+Vm(b);c&&(a+="-"+c);return a}
function jw(a,b){var c=null;pe&&H(b,W(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Zs(c)):(c=Bf("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",Cj(c,W(a,"tip-mask"))));return c}
function hw(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&Zf(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),$s(b),document.body.appendChild(b))}
;var lw=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",lw,void 0);function mw(a){a=a.getInstance();var b=W(a);b in lw||(a.register(),a.ia("yt-uix-init-"+b,a.init),a.ia("yt-uix-dispose-"+b,a.dispose),lw[b]=a)}
;function nw(){this.i=[]}
k=nw.prototype;k.Ud=function(){};
k.dispose=function(){this.i&&(N(this.i),this.i=[]);this.Ud()};
function ow(a,b,c,d,e){a.i.push(nn(b,c,y(d,a),e))}
k.redirect=function(a){fs(a)};
function pw(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=co(b);c=bo(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
k.Yb=function(){};
k.jg=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&pw(this,c)||b&&b.call(this,c))};
function qw(a,b,c,d,e,f,g){a={format:b,method:"POST",onError:g||y(a.Yb,a),fa:void 0,onSuccess:f,R:e||{},Ka:d||{},Ya:!0};Wn(c,a)}
;function rw(){this.i=[];this.G=this.A="";this.C=null;this.H=this.j=!1;this.F=null;this.M=this.K=""}
A(rw,nw);k=rw.prototype;k.Td=function(){};
k.close=function(a){this.H=!1;this.f.dismiss(a||"close");this.dispose()};
k.create=function(a,b,c,d){this.H&&(b&&(this.C=b),c&&(this.F=c),a&&!this.j?this.jh({},d):this.uc())};
k.open=function(a,b,c,d,e,f,g,h,l){this.A=a;this.K=b;if(this.l=E(this.A+"-lb")){(a=Ds())&&a.pauseVideo&&a.pauseVideo();if(this.j)this.reset();else{this.f=new bu(this.l,h);try{this.f.setTitle("")}catch(m){}}sw(this,"loading");this.f.show();this.H=!0}d&&this.create(e,f,g,l)};
k.reset=function(){this.j&&tw(this)};
k.setClass=function(a,b){Gj(this.Y,a,b)};
function uw(a,b){eu(a.f,b)}
k.jh=function(a,b,c,d,e){arguments.length&&sw(this,e||"loading");var f=a||{};this.C&&(f.feature=this.C);this.F&&(f.next=this.F);qw(this,"XML",this.K,f,b||{},y(this.kg,this,c),d)};
function sw(a,b){switch(b){case "content":cu(a.f,"content");break;case "loading":cu(a.f,"loading");break;case "working":cu(a.f,"working")}}
function tw(a,b){if(a.j){var c=b||a.M;if(c){if(a.G){var d=a.Y;Ej(d,a.G);J(d,c)}else J(a.Y,c);a.G=c}}}
k.uc=function(a,b){a&&jd(E(this.A+"-dialog"),a);if(b)try{this.f.setTitle(b)}catch(d){}this.Y=F("yt-dialog-fg",this.l);var c=F("yt-pd-params",this.l);this.M=L(c,"start-page")||"";ow(this,this.Y,"click",this.zg,"yt-pd-close");ow(this,this.Y,"click",this.tg,"yt-pd-setclass");ow(this,this.Y,"click",this.Fg,"yt-pd-setpage");this.Td();sw(this,"content");this.j=!0;tw(this)};
k.zg=function(){this.close("cancel")};
k.tg=function(a){a=G(a.target,"yt-pd-setclass");var b=L(a,"off");b&&this.setClass(b,!1);(a=L(a,"on"))&&this.setClass(a,!0)};
k.Fg=function(a){a=G(a.target,"yt-pd-setpage");(a=L(a,"state-container-id"))&&tw(this,a)};
k.Yb=function(a){rw.O.Yb.call(this,a);this.close()};
k.kg=function(a,b,c){var d=co(b);if(d){var e=bo(d,"not_eligible"),f=bo(d,"error_message");e||f?this.Yb(b):pw(this,b)||(c=c.html_content||void 0,d=bo(d,"title")||void 0,a?a(b,y(this.uc,this,c,d)):this.uc(c,d))}};function vw(){this.i=[];this.K=this.C=null;this.F=this.j=!1}
A(vw,nw);k=vw.prototype;k.Ic=function(){};
k.dc=function(){};
k.init=function(a,b,c,d,e){this.C=a||null;this.K=b||null;c?d&&e&&(ow(this,d,"mousedown",this.Ne,e),ow(this,d,"click",this.se,e)):(this.Ne(),this.se())};
k.Ob=function(a,b){("string"===typeof a?x(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
k.Ne=function(){this.j||(this.C&&Io(this.C),this.K&&Co(this.K,y(function(){(this.j=!0,this.F)&&this.dc()},this)))};
k.se=function(a){this.Ic(a);this.F=!0;this.j&&this.F&&this.dc()};var ww={};function xw(a){var b=Ta(a),c=ww[b];c||(c=new a,ww[b]=c);return c}
;function yw(){vw.call(this);this.l=null}
A(yw,vw);yw.prototype.Ic=function(a){a&&(this.l=L(a.currentTarget,"pageid"))};
yw.prototype.dc=function(){this.Ob("yt.www.account.AddNewChannelDialog",this.l)};function zw(){vw.call(this);this.g=this.f=null;this.P=!1;this.A=this.G=this.H=null}
A(zw,vw);function Aw(a,b,c,d,e){var f=xw(zw);b&&(f.f=b);c&&(f.H=c);d&&(f.G=d);e&&(f.A=e);f.init(K("CREATE_CHANNEL_CSS_URL",void 0),K("CREATE_CHANNEL_JS_URL",void 0),!a,E("body-container"),"create-channel-lightbox")}
zw.prototype.Ic=function(a){this.f||(a&&(a=L(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a||"tbd_channel_account"==a)&&(this.f=a),this.f||(this.f="default"))};
zw.prototype.dc=function(){switch(this.f){case "settings":this.g="/profile";break;case "guide":this.g=K("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.g=K("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.g=document.location.href}K("CREATE_CHANNEL_NEXT_URL")&&(this.g=K("CREATE_CHANNEL_NEXT_URL",void 0));if(!this.P){this.P=!0;var a=y(this.jg,this,!1,this.T||null);qw(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
zw.prototype.M=function(){var a=K("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?fs(a):window.history.back())};
zw.prototype.T=function(a){this.P=!1;if(a.open_generic_dialog)Bw(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Ob("yt.www.account.CreateCoreIdChannelDialog",this.M,this.f,this.g,this.H,this.G,this.A);break;case 8:fs("/oops");break;case 5:fs("/create_channel?action_blocked_misc=1");break;case 9:if("tbd_channel_account"==this.f){this.Ob("yt.www.account.CreateCoreIdChannelDialog",this.M,this.f,this.g,this.H,this.G,this.A);break}default:this.Ob("yt.www.account.CreateChannelDialog",
this.M,this.f,this.g)}else"redirect_url"in a&&a.redirect_url?fs(a.redirect_url):fs("/oops")};
function Bw(a){var b=xw(rw),c=a.g;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.f,c);c&&uw(b,function(){fs(c)})}
;function Cw(){rw.call(this);this.g=[];Io(K("IDENTITY_PROMPT_CSS_URL",void 0))}
A(Cw,rw);k=Cw.prototype;k.Td=function(){this.g.push(nn(this.Y,"click",y(this.uf,this),"identity-prompt-account-list-item"));this.g.push(nn(this.Y,"click",y(this.Gf,this),"specialized-identity-prompt-account-item"));this.g.push(nn(this.Y,"click",y(this.rf,this),"authuser-mismatch-identity-prompt-account-item"))};
k.Ud=function(){N(this.g);this.g.length=0};
k.uf=function(a){var b=E("identity-prompt-form");a=nf("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=yn(b.action,{pageId:a[0].value}));var c=E("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
k.Gf=function(a){a=L(a.currentTarget,"switch-url");E("dont_ask_again").checked&&(a+="&dont_ask_again=on");fs(a)};
k.rf=function(a){a=L(a.currentTarget,"switch-url");fs(a)};function Dw(a){this.g=a;this.f=null;a=Ew(this.g);a=pd("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.i={}}
var Fw=/__([a-z]+(?:_[a-z]+)*)__/g;function Ew(a){var b=[],c={};a.replace(Fw,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function Gw(a,b){var c=y(function(d,e){return b[e]||this.i[e]||""},a);
return a.g.replace(a.f,c)}
;function Hw(a){var b={};void 0!==Iw()&&(b.ar=Iw());void 0!==Jw().nv&&(b.nv=Jw().nv);Object.assign(a,b);a.o=Jw().o;return a}
function Iw(){if(void 0!==Jw().earst){var a=Kw+(Date.now()-Lw);a=""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}else a=Jw().ar;return a}
var Kw=Date.now(),Lw=Date.now();function Jw(){return K("CREATOR_CONTEXT",Mw)}
var Mw={o:"U"},Nw=Jw().earst;void 0!==Nw&&(Kw=Nw,Lw=Date.now());function Ow(){this.A=null;this.f=[];this.promo=null;this.l="";this.g=null;this.T=mf("mcn-affiliate-agreement-overlay-template");var a=E(this.T).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.P=new Dw(a);this.i=!1}
A(Ow,eg);Ow.prototype.init=function(a,b,c){this.promo=a;this.l=b;this.g=c;this.f.push(M(this.promo,"click",y(this.Z,this)));this.f.push(nn(this.g,"click",y(this.V,this),this.l));this.f.push(nn(this.g,"click",y(this.C,this),"yt-uix-overlay-close"));a=Mu();this.f.push(nn(a,"click",y(this.C,this),"yt-dialog-close"));this.f.push(nn(this.g,"click",y(this.K,this),"mcn-affiliate-agreement-checkbox"));this.f.push(nn(this.g,"change",y(this.K,this),"commerce-creator-signup-text-fields"))};
Ow.prototype.C=Oa;Ow.prototype.K=function(){var a=mf("agreement-checkbox-1"),b=mf("agreement-checkbox-2"),c=mf("agreement-checkbox-3"),d=!0;this.i&&(d=mf("sign-contract-form"),d=H(d,"ng-valid"));F(this.l,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function Pw(a,b,c,d,e){b=Hw({action_load_agreement:1,is_modal:b});Wn("/account_mcn_affiliate_monetization_ajax",{method:"POST",Ka:b,context:a,onSuccess:y(function(f,g){this.A=g.contract_tags;this.i="user_contact_info_form"in g;c(g);this.i&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:y(function(){this.A=null;d()},a),
fa:function(){e()}})}
function Qw(){var a=sd(mf("full_name").value),b=sd(mf("title").value),c=sd(mf("email_address").value),d=sd(mf("phone_number").value),e=sd(mf("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function Rw(a,b,c){mf("agreement-checkbox-1").disabled=!0;mf("agreement-checkbox-2").disabled=!0;mf("agreement-checkbox-3").disabled=!0;var d=mf("agreement-email-yes"),e=Hw({action_sign_up:1});d={contract_tags:a.A.join(),has_commerce_feature:a.i,receive_emails:d.checked};if(a.i){var f=Qw();Rb(d,f)}Wn("/account_mcn_affiliate_monetization_ajax",{method:"POST",Ka:e,R:d,context:a,onSuccess:y(function(){b()},a),
onError:y(function(){c()},a)})}
Ow.prototype.L=function(){N(this.f);this.f.length=0;Ow.O.L.call(this)};function Sw(a){Ow.call(this);var b=mf("mcn-affiliate-signup-button"),c=mf("mcn-affiliate-agreement");this.init(b,"mcn-affiliate-sign-agreement-button",c);this.F=a;this.j=!1;K("SHOW_MCNA_YPE_MODAL")&&(this.j=!0,a=K("MCNA_YPE_CONTRACT_CSS_URL",void 0),c=K("ACCOUNT_MONETIZATION_CSS_URL",void 0),Io(K("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0)),Io(a),Io(c),Co(K("ANGULAR_JS",void 0)),b.click())}
A(Sw,Ow);
Sw.prototype.Z=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;Pw(this,this.j,y(function(c){a.currentTarget.disabled=!1;var d=a.currentTarget;Hu.getInstance().show(d);d=Mu();d=F("yt-dialog-content",d);c=Pd(Gw(this.P,{agreements_title:c.agreements_title,agreements_disclaimer:c.agreements_disclaimer,agreements:c.agreements,review_disclaimer:c.review_disclaimer,underage_message:c.underage_message,agreements_action_buttons:c.agreements_action_buttons,user_contact_info_form:c.user_contact_info_form}));jd(d,
c);a.currentTarget.disabled=!0},this),function(){Zs(mf("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
Sw.prototype.V=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.j||(mf("agreement-close-button").disabled=!0),Rw(this,y(this.M,this),function(){Hu.getInstance().hide();Zs(mf("mcn-affiliate-promo-error-msg"))}))};
Sw.prototype.C=function(){if(this.j){var a=Hw({action_ask_me_later:1});Wn("/account_mcn_affiliate_monetization_ajax",{method:"POST",Ka:a,context:this})}};
Sw.prototype.M=function(){this.F?fs(this.F):(Hu.getInstance().hide(),Ws(this.promo,!1))};var Tw=x("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Tw,void 0);function Uw(){this.f=K("ALT_PREF_COOKIE_NAME","PREF");var a=fo(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Tw[d]=c.toString())}}}
k=Uw.prototype;k.get=function(a,b){Vw(a);Ww(a);var c=void 0!==Tw[a]?Tw[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){Vw(a);Ww(a);if(null==b)throw Error("ExpectedNotNull");Tw[a]=b.toString()};
function Xw(a){return!!((Yw("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){Vw(a);Ww(a);delete Tw[a]};
k.save=function(){eo(this.f,this.dump(),63072E3,"/")};
k.clear=function(){for(var a in Tw)delete Tw[a]};
k.dump=function(){var a=[],b;for(b in Tw)a.push(b+"="+encodeURIComponent(String(Tw[b])));return a.join("&")};
function Ww(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Vw(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Yw(a){a=void 0!==Tw[a]?Tw[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Pa(Uw);function Zw(a,b){eg.call(this);this.g=a;this.l=b;this.f=null;this.i=E("page");this.f=M(E("premium-yva-close"),"click",y(this.xe,this));var c=this.g;Uw.getInstance().get("HIDDEN_MASTHEAD_ID")==c||J(this.i,"masthead-ad-expanded");this.j=M(window,"message",y(this.qf,this))}
A(Zw,eg);var $w=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;k=Zw.prototype;k.qf=function(a){a&&a.origin&&$w.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Me()};
k.L=function(){Zw.O.L.call(this);N(this.f);N(this.j);this.j=this.f=null};
k.Me=function(){$s("ad_creative_1");S("ads-masthead-hide");S("yt-dom-content-change");this.l&&$s("ad_creative_collapse_btn_1");Zs("ad_creative_expand_btn_1");Ej(this.i,"masthead-ad-expanded");ax(this.g);bt("homepage_collapse_masthead_ad")};
k.xe=function(){Zs("ad_creative_expand_btn_1");Ff(E("premium-yva"));Ff(E("video-masthead"));S("yt-dom-content-change");ax(this.g)};
function ax(a){var b=Uw.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()}
k.Kh=function(){var a=Uw.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();bt("homepage_expand_masthead_ad");fs(document.location.href)};function bx(){Rv.call(this,"shelfslider")}
q(bx,Rv);bx.prototype.zc=function(a){a=Fg(a)?kt(this,"next",a):kt(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?xg(a)+a.offsetWidth-NaN:xg(a)+a.offsetWidth};
bx.prototype.Ac=function(a){a=Fg(a)?kt(this,"prev",a):kt(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?xg(a)+void 0:xg(a)};
Pa(bx);var cx=!1,dx=!1;function ex(a){a=void 0===a?{}:a;"function"===typeof a&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||Rb(a,{_c:{jsl:{h:K("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||K("GAPI_HINT_OVERRIDE")){var b=xn(document.location.href).gapi_jsh;b&&Rb(a,{_c:{jsl:{h:b}}})}zi("client",a)}
;var fx=[],gx={},hx=[],ix=!1;function jx(){fx.push(nn(document.body,"click",kx,"yt-google-help-link"))}
function kx(a){a.preventDefault();var b=L(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=L(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=K("GOOGLE_HELP_CONTEXT",void 0);a=K("GOOGLE_HELP_PRODUCT_ID",void 0)||L(a.currentTarget,"feedback-product-id");d=!!L(d,"load-chat-support");lx(b,a,e,K("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function mx(a,b){var c=K("FEEDBACK_LOCALE_LANGUAGE"),d=gx;Rb(d,K("FEEDBACK_LOCALE_EXTRAS",{}));a&&Rb(d,a);try{var e=Ds();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&Rb(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function nx(){var a=K("SESSION_INDEX"),b=K("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005",allowNonLoggedInFeedback:!0};a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function ox(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};Rb(a,nx());return a}
function lx(a,b,c,d,e,f,g,h){var l=(b||"59")+"",m=mx(d,g),n=ox(a,c,f,h),u=e||O("web_always_load_chat_support");ex(function(){var t=Bh(l,m);if(u&&!ix)try{t.g(n),ix=!0}catch(w){}t.j(n)});
return!1}
function px(){if(!(D?Zl("7"):He?Zl("3.6"):Me?Zl("5"):Le||ke)){var a=pf("reportbug");B(a,function(b){Ws(b,!1)})}}
;var qx,rx=[];function sx(a){tx("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function ux(a){0>=a.event.clientX&&0>=a.event.clientY||tx("mouse")}
function tx(a){qx!==a&&(qx=a,N(rx),rx.length=0,"keyboard"==qx?(vx(!0),rx=[M(window,"click",ux),M(window,"mousemove",ux)]):"mouse"==qx&&(vx(!1),rx=[M(window,"keydown",sx)]))}
function vx(a){Gj(document.documentElement,"no-focus-outline",!a)}
;function wx(a){var b=["guide"];b=xx(b);if(b.length){var c=a||{};c.frags=b.join(",");a=K("XSRF_FIELD_NAME",void 0);var d=K("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";O("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=Nd(e,c);e={};e[a]=d;e.client_url=window.location.href;a=Ld(e);yx.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(pb(b,"guide")){var f=x("yt.www.guide.setup");f&&f(!1);f=K("GUIDE_SELECTED_ITEM",void 0);var g=x("yt.www.guide.selectGuideItem");g&&g(f);S("appbar-guide-delay-load")}S("yt-www-pageFrameCssNotifications-load")}}));
zx=vb(zx,b)}}
function Ax(){var a=xn(window.location.href);a.tr="nonwatch";wx(a)}
function xx(a){return hb(a,function(b){return!pb(zx,b)})}
var yx=[],zx=[],Bx=[];var Cx=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Dx=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function Ex(){var a=void 0===a?window.location.href:a;if(O("kevlar_disable_theme_param"))return null;var b=Ed(Dd(a)[5]||null);if(Fx(b))return"USER_INTERFACE_THEME_DARK";a=xn(a).theme;return Cx.get(a)||null}
function Fx(a){var b=Dx.map(function(c){return c.toLowerCase()});
return!O("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Gx(){this.f={};var a=fo("CONSISTENCY");a&&Hx(this,{encryptedTokenJarContents:a})}
Gx.prototype.g=function(a,b){var c,d,e,f=null===(d=null===(c=b.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars,g=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar;f&&g&&this.replace(f,g)};
Gx.prototype.replace=function(a,b){for(var c=p(a),d=c.next();!d.done;d=c.next())delete this.f[d.value.encryptedTokenJarContents];Hx(this,b)};
function Hx(a,b){if(b.encryptedTokenJarContents&&(a.f[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.f[b.encryptedTokenJarContents]},1E3*c);
eo("CONSISTENCY",b.encryptedTokenJarContents,c,"/",void 0,!0)}}
;function Ix(){var a=K("LOCATION_PLAYABILITY_TOKEN");a&&(this.locationPlayabilityToken=a,this.f=void 0)}
function Jx(){Ix.f||(Ix.f=new Ix);return Ix.f}
Ix.prototype.g=function(a){var b;a=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.f=void 0)};var Kx={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};function Lx(a,b,c,d){this.f=a;this.l=b;this.j=c;this.g=Lr;this.i=d}
function Mx(a){if(!Nx){var b={md:{playlistEditEndpoint:Ox,subscribeEndpoint:Px,unsubscribeEndpoint:Qx,modifyChannelNotificationPreferenceEndpoint:Rx}};var c=O("web_enable_client_location_service")?Jx():void 0,d=[];c&&d.push(c);Sx.f||(Sx.f=new Sx);c=Sx.f;var e=Ip();Lx.f=new Lx(b,c,e,d);Nx=Lx.f}b=Nx;var f=void 0===f?Kp:f;a:{var g,h;if((null===(g=a.signalServiceEndpoint)||void 0===g?0:g.signal)&&b.f.ph&&(g=b.f.ph[a.signalServiceEndpoint.signal])){var l=new g;break a}if((null===(h=a.continuationCommand)||
void 0===h?0:h.request)&&b.f.We&&(h=b.f.We[a.continuationCommand.request])){l=new h;break a}for(l in a)if(b.f.md[l]&&(h=b.f.md[l])){l=new h;break a}l=void 0}if(!l)return b.g(new Ar("Error: No request builder found for command.",a)),dh({});var m;h=void 0;h=void 0===h?{}:h;f=void 0===f?Kp:f;var n;d=a.clickTrackingParams;var u=void 0===u?!0:u;if(g=K("INNERTUBE_CONTEXT")){g=Pb(g);g.client||(g.client={});c=g.client;"MWEB"===c.clientName&&(c.clientFormFactor=K("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");
c.screenWidthPoints=window.innerWidth;c.screenHeightPoints=window.innerHeight;c.screenPixelDensity=Math.round(window.devicePixelRatio||1);c.screenDensityFloat=window.devicePixelRatio||1;c.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var t=void 0===t?!1:t;Uw.getInstance();e=Xw(165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";O("kevlar_apply_prefers_color_theme")&&(e=Xw(165)?"USER_INTERFACE_THEME_DARK":Xw(174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&
window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");t=t?e:Ex()||e;c.userInterfaceTheme=t;if(O("web_log_connection")){c:{if(e=(t=window.navigator)?t.connection:void 0){t=Kx[e.type||"unknown"]||"CONN_UNKNOWN";e=Kx[e.f||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===t&&"CONN_UNKNOWN"!==e&&(t=e);if("CONN_UNKNOWN"!==t)break c;if("CONN_UNKNOWN"!==e){t=e;break c}}t=void 0}t&&(c.connectionType=t)}(t=fo("EXPERIMENTS_DEBUG"))?c.experimentsToken=
"ZERO"===t?"GgIQAQ%3D%3D":t:delete c.experimentsToken;t=Jn();Gx.f||(Gx.f=new Gx);c=Ib(Gx.f.f);g.request=Object.assign(Object.assign({},g.request),{internalExperimentFlags:t,consistencyTokenJars:c});c=Uw.getInstance();t=Xw(58);c=c.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);c&&(g.user.lockedSafetyMode=!0);(t=K("DELEGATED_SESSION_ID"))&&!O("pageid_as_header_web")&&(g.user.onBehalfOfUser=t);u&&(u=bs())&&(g.clientScreenNonce=u);d&&(g.clickTracking={clickTrackingParams:d});
O("web_enable_client_location_service")&&(u=Jx(),g.client||(g.client={}),u.f?(g.client.locationInfo||(g.client.locationInfo={}),g.client.locationInfo.latitudeE7=1E7*u.f.coords.latitude,g.client.locationInfo.longitudeE7=1E7*u.f.coords.longitude,g.client.locationInfo.horizontalAccuracyMeters=u.f.coords.accuracy):u.locationPlayabilityToken&&(g.client.locationPlayabilityToken=u.locationPlayabilityToken));O("web_enable_ad_signals_in_it_context")&&(u=null===(n=g.adSignalsInfo)||void 0===n?void 0:n.consentBumpParams,
g.adSignalsInfo=Dn(void 0),!fo("CONSENT","").startsWith("YES+")&&u&&(g.adSignalsInfo.consentBumpParams=u));n=g}else Mr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),n={};n={context:n};if(u=l.i(a)){l.f(n,u,h);var w;u="/youtubei/v1/"+Tx(l.g());(l=null===(w=null===(m=a.commandMetadata)||void 0===m?void 0:m.webCommandMetadata)||void 0===w?void 0:w.apiUrl)&&(u=l);m=zn(u,{key:K("INNERTUBE_API_KEY")},!1);(w=K("INNERTUBE_HOST_OVERRIDE"))&&(m=String(w)+String(Gd(m)));m={input:m,Lc:{method:"POST",
mode:An(m)?"same-origin":"cors",credentials:An(m)?"same-origin":"include"},Cd:n,config:Object.assign({},void 0)};m.config.f?m.config.f.identity=f:m.config.f={identity:f}}else Mr(new Ar("Error: Failed to create Request from Command.",a)),m=void 0;if(m)return dh(Ux(b,m));b.g(new Ar("Error: Failed to build request for command.",a));return dh({})}
function Ux(a,b){return ce(a,function d(){var e=this,f,g,h,l,m;return Ea(d,function(n){if(1==n.f)return f=e,g=JSON.stringify(b.Cd),e.j.f?(h=Vx(b),n.Ia(2)):ua(n,Wx(b),3);2!=n.f&&(h=n.g);b.Lc=Object.assign(Object.assign({},b.Lc),{headers:h});l=Object.assign(Object.assign({},b.Lc),{body:g});m=e.l.fetch(b.input,l);return n["return"](m.then(function(u){if(u&&f.i)for(var t=p(f.i),w=t.next();!w.done;w=t.next())w.value.g(u,b.Cd);return Promise.resolve(u)}))})})}
function Wx(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.f)||void 0===c?void 0:c.sessionIndex;return dh(Jp(a)).then(function(d){return Promise.resolve(Object.assign(Object.assign({},Xx()),d))})}
function Vx(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.f)||void 0===c?void 0:c.sessionIndex;a=Jp(a);return Object.assign(Object.assign({},Xx()),a)}
function Xx(){return{"Content-Type":"application/json","X-Goog-Visitor-Id":K("VISITOR_DATA")}}
;var Yx=["notification/modify_channel_preference"],Zx=["browse/edit_playlist"],$x=["subscription/subscribe"],ay=["subscription/unsubscribe"];var by={},cy=(by.WEB_UNPLUGGED="^unplugged/",by.WEB_UNPLUGGED_ONBOARDING="^unplugged/",by.WEB_UNPLUGGED_OPS="^unplugged/",by.WEB_UNPLUGGED_PUBLIC="^unplugged/",by.WEB_CREATOR="^creator/",by.WEB_KIDS="^kids/",by.WEB_EXPERIMENTS="^experiments/",by.WEB_MUSIC="^music/",by.WEB_REMIX="^music/",by.WEB_MUSIC_EMBEDDED_PLAYER="^music/",by.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",by);
function Tx(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=cy[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(cy).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function dy(){}
;function Px(){}
q(Px,dy);Px.prototype.g=function(){return $x};
Px.prototype.i=function(a){return a.subscribeEndpoint};
Px.prototype.f=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function Qx(){}
q(Qx,dy);Qx.prototype.g=function(){return ay};
Qx.prototype.i=function(a){return a.unsubscribeEndpoint};
Qx.prototype.f=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function Rx(){}
q(Rx,dy);Rx.prototype.g=function(){return Yx};
Rx.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Rx.prototype.f=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ox(){}
q(Ox,dy);Ox.prototype.g=function(){return Zx};
Ox.prototype.i=function(a){return a.playlistEditEndpoint};
Ox.prototype.f=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Sx(){}
Sx.prototype.fetch=function(a,b){var c=new Request(a,b);return dh(fetch(c).then(function(d){return ey(d)})["catch"](function(d){Nr(d)}))};
function ey(a){var b=a.json();a.redirected||a.ok||b.then(function(c){Nr(new Ar("Error: API fetch failed",a.status,a.url,c))});
return b}
;var Nx;function fy(a,b){var c={list_id:"WL"},d=Mx({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/browse/edit_playlist",url:"/service_ajax",sendPost:!0}},playlistEditEndpoint:{playlistId:"WL",actions:b}});jh(d.then(function(e){if(e&&"STATUS_SUCCEEDED"===e.status){if(a.onSuccess)a.onSuccess({},c)}else if(a.onError)a.onError({},c)}),function(){a.fa&&a.fa({},c)})}
function gy(a,b,c){O("web_classic_playlist_one_platform_update")?fy(a,[{addedVideoId:a.videoIds,action:"ACTION_ADD_VIDEO"}]):hy("add_to_watch_later_list",a,b,c)}
function iy(a){O("web_classic_playlist_one_platform_update")?fy(a,[{removedVideoId:a.videoIds,action:"ACTION_REMOVE_VIDEO_BY_VIDEO_ID"}]):hy("delete_from_watch_later_list",a,void 0,void 0)}
function hy(a,b,c,d){Wn(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",Ka:{feature:b.feature||null,authuser:b.Mi||null,pageid:b.pageId||null},R:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.kj||null,add_to_playlists:b.Li||null,plid:K("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(e,f){b.onSuccess.call(this,e,f)},
fa:b.fa,withCredentials:!!d})}
;var jy=[],ky="";function ly(){et("addto-watch-later-button","click",my);et("addto-watch-later-button-success","click",ny);et("addto-watch-later-button-remove","click",oy);et("addto-watch-later-button-sign-in","click",py);var a=E("shared-addto-watch-later-login");jy.push(nn(a,"click",qy,"sign-in-link"));jy.push(nn(a,"focusout",ry,"sign-in-link"))}
function py(a){ky=L(a,"video-ids");var b=F("sign-in-link",E("shared-addto-watch-later-login"));b&&(J(a,"addto-wl-focused"),P(function(){b.focus()},0))}
function ry(){var a=F("addto-wl-focused");a&&(Ej(a,"addto-wl-focused"),P(function(){a.focus()},0))}
function qy(a){var b=yn("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:ky,next_url:document.location}),c=Bf("form");c.action=b;c.method="POST";b=Bf("input");b.type="hidden";b.name=K("XSRF_FIELD_NAME",void 0);b.value=K("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function my(a){Hj(a,"addto-watch-later-button","addto-watch-later-button-loading");rf(a,{"aria-pressed":"true"});var b=L(a,"video-ids");gy({videoIds:b,onSuccess:function(c,d){var e=d.list_id;sy(e,b,a);S("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?sy(d.list_id,b,a):ty(a,d)}})}
function ny(a){Hj(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=L(a,"video-ids");iy({videoIds:b,onSuccess:function(){Hj(a,"addto-watch-later-button-loading","addto-watch-later-button");var c=sn("ADDTO_WATCH_LATER");iw(dw.getInstance(),a,c);S("WATCH_LATER_VIDEO_REMOVED")},
onError:function(c,d){ty(a,d)}})}
function oy(a){var b=L(a,"video-ids");iy({videoIds:b,onSuccess:function(c,d){S("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(c,d){ty(a,d)}})}
function sy(a,b,c){Hj(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=sn("ADDTO_WATCH_LATER_ADDED");iw(dw.getInstance(),c,d);S("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function ty(a,b){Hj(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||sn("ADDTO_WATCH_LATER_ERROR");iw(dw.getInstance(),a,c)}
;function uy(a){if(!vy||a)vy=tf(window);return vy}
function wy(){return xy=vf(document)}
function yy(){zy||(zy=Po(Ay,100))}
function Ay(){zy=0;By?xo("page-mouse",By.f||new ef):fn(Error("MouseTracker missing during publish."))}
function Cy(){Dy||(Dy=Po(Ey,200))}
function Ey(){Dy=0;var a=uy(!0);xo("page-resize",a)}
function Fy(){Gy||(Gy=Po(Hy,200))}
function Hy(){Gy=0;var a=wy();xo("page-scroll",a)}
var vy=null,xy=null,Iy=[],By=null,zy=0,Dy=0,Gy=0;var Jy,Ky,Ly,My,Ny,Oy,Py=0,Qy=!1;function Ry(){Qy||(x("yt.www.page.visibilitymonitor").dispose(),Ky={},Ly={},Jy={},My={},Oy=[],Ny=Sy(),Oy.push(R("page-resize",Ty)),Oy.push(R("page-scroll",Uy)),Oy.push(R("yt-dom-content-change",Vy)),Qy=!0,Wy(!0))}
function Xy(){Qy&&(wo(Oy),Yy(),Ky={},Ly={},Jy={},My={},Oy.length=0,Ny=null,Qy=!1)}
function Ty(){Ny=Sy();Vy()}
function Uy(){Ny=Sy();Zy()}
function Sy(){var a=wy(),b=uy();return new hg(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function $y(a){var b=Vm(a),c=Jy[b];if(c)return c;c=M(a,"scroll",az);return c=Jy[b]={el:a,ih:c,tb:null}}
function Yy(){Eb(Jy,function(a,b){var c=Jy[b];c&&N(c.ih);delete Jy[b]})}
function az(a){Vy(a.target)}
function bz(a,b){var c=[Vm(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function cz(a,b){var c;b?c=a:c=Mf(a);return c?(c=G(c,"yt-viewport"))?$y(c):null:null}
function dz(a,b){if(a.tb&&!b)return a.tb;var c=ez(a.el),d=cz(a.el);d&&(d=dz(d,b),c=fz(c,d));return a.tb=c}
function ez(a){var b=wg(a);a=new gf(a.offsetWidth,a.offsetHeight);return new hg(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function fz(a){var b=[],c=[],d=[],e=[];B(arguments,function(m){b.push(m.top);c.push(m.right);d.push(m.bottom);e.push(m.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),h=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>h||l>g?new hg(0,0,0,0):new hg(f,g,h,l)}
function gz(a,b){var c=Ny,d=ez(a);if(b.transform){var e=b.transform;Sa(e)?(d.top-=e.top,d.right+=e.right,d.bottom+=e.bottom,d.left-=e.left):(d.top-=e,d.right+=Number(void 0),d.bottom+=Number(void 0),d.left-=Number(void 0))}var f;b.complete?f=ig:f=jg;if(!f.call(hg,c,d))return!1;e=cz(a);if(!e)return!0;dz(e);c=fz(c,e.tb);return f.call(hg,c,d)}
function hz(a,b,c){var d=bz(a,c);b.hasOwnProperty(d)||(b[d]=gz(a,c));return b[d]}
function iz(a,b,c){a=bz(a,c);if(!!My[a]!=b)return b?"visible":"hidden"}
function jz(a,b){Eb(Ky,function(c){if(c&&(!b||Nf(b,c.el))){var d=hz(c.el,a,c.options);(d=iz(c.el,d,c.options))&&d==c.type&&P(Ya(c.Fa,c.el),0)}})}
function kz(a,b){Eb(Ly,function(c){if(c&&(!b||Nf(c.el,b)||Nf(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];B(d,function(h){var l=hz(h,a,c.options);l?f.push(h):g.push(h);(l=iz(h,l,c.options))&&l==c.type&&e.push(h)});
e.length&&P(Ya(c.Fa,e,f,g),0)}}})}
function Zy(a){var b={};jz(b,a);kz(b,a);Rb(My,b)}
function lz(a,b,c,d){return Kb(Ky,function(e){return e.el==a&&e.type==b&&e.Fa==c&&Nb(e.options,d)})}
function mz(a,b,c,d,e){return Kb(Ly,function(f){return f.el==a&&f.type==b&&f.Fa==c&&f.className==d&&Nb(f.options,e)})}
function nz(a,b){var c=pf("yt-viewport",b);B(c,a)}
function oz(a){nz(function(b){$y(b)},a);
Lf(a)&&cz(a,!0)}
function pz(a,b){Eb(Jy,function(c){b&&!Nf(b,c.el)||b==c.el||a(c)})}
function qz(a){var b=dz(a,!0);a=a.tb;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function Vy(a){if(Qy){var b;if(a)for(b=cz(a,!0);b&&qz(b);)b=cz(a);pz(function(c){delete c.tb},b?b.el:a);
Zy(a)}}
function rz(a,b){if(!Qy)throw Error("yt.www.page.visibilitymonitor is not initialized.");return gz(a,b||{})}
function sz(a,b,c,d){if(!Qy)return"";d=d||{transform:void 0,complete:void 0};var e=lz(a,b,c,d);if(e)return e;oz(a);e=++Py+"";Ky[e]={el:a,type:b,Fa:c,options:d};return e}
function tz(a,b,c,d,e){if(!Qy)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=mz(a,b,c,d,e);if(f)return f;oz(a);f=++Py+"";Ly[f]={el:a,type:b,Fa:c,filter:function(g){return pf(d,g)},
className:d,options:e};return f}
function uz(a){Qy&&(delete Ky[a],delete Ly[a])}
function Wy(a){var b=x("yt.www.page.visibilitymonitor");if(a||!b)v("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),v("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),v("yt.www.page.visibilitymonitor.init",Ry,void 0),v("yt.www.page.visibilitymonitor.dispose",Xy,void 0),v("yt.www.page.visibilitymonitor.refresh",Vy,void 0),v("yt.www.page.visibilitymonitor.isVisible",rz,void 0),v("yt.www.page.visibilitymonitor.listen",sz,void 0),v("yt.www.page.visibilitymonitor.delegateByClass",
tz,void 0),v("yt.www.page.visibilitymonitor.unlistenByKey",uz,void 0)}
Wy(!1);function vz(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),nd(top.location,"/")}})()}
function wz(a){"block"==a.responseText&&vz()}
if(window!=window.top){var Cn=document.referrer;if(window.parent!=window.top)vz();else{var xz=Bn();if(null===xz?0:"com"==xz[0]&&xz[1].match(/^youtube(?:kids|-nocookie)?$/))vz();else{var yz=Bn();if(!(null===yz?0:"google"==yz[1]||"google"==yz[2]&&("au"==yz[0]&&"com"==yz[1]||"uk"==yz[0]&&"co"==yz[1]))){var zz={location:encodeURIComponent(Cn),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};Wn("/roger_rabbit",{format:"RAW",method:"POST",Ka:zz,onSuccess:wz})}}}};function Az(a){Es.call(this,1,arguments);this.f=a}
A(Az,Es);function Bz(a){Es.call(this,1,arguments);this.f=a}
A(Bz,Es);function Cz(a,b,c){Es.call(this,3,arguments);this.i=a;this.f=b;this.g=null!=c?!!c:null}
A(Cz,Es);function Dz(a,b){Es.call(this,1,arguments);this.button=a;this.f=b}
A(Dz,Es);function Ez(a,b,c,d,e,f){Es.call(this,2,arguments);this.f=a;this.g=b;this.j=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
A(Ez,Es);function Fz(a,b,c){Es.call(this,1,arguments);this.f=a;this.g=b}
A(Fz,Es);function Gz(a,b,c,d,e,f,g,h){Es.call(this,1,arguments);this.f=a;this.l=b;this.g=c;this.A=d||null;this.j=e||null;this.i=f||null;this.source=g||null;this.params=h||null}
A(Gz,Es);
var Hz=new Fs("subscription-batch-subscribe",Az),Iz=new Fs("subscription-batch-unsubscribe",Az),Jz=new Fs("subscription-show-pref-overlay",Dz),Kz=new Fs("subscription-subscribe",Ez),Lz=new Fs("subscription-subscribe-loading",Bz),Mz=new Fs("subscription-subscribe-loaded",Bz),Nz=new Fs("subscription-subscribe-success",Fz),Oz=new Fs("subscription-subscribe-external",Ez),Pz=new Fs("subscription-unsubscribe",Gz),Qz=new Fs("subscription-unsubscirbe-loading",Bz),Rz=new Fs("subscription-unsubscribe-loaded",Bz),
Sz=new Fs("subscription-unsubscribe-success",Bz),Tz=new Fs("subscription-external-unsubscribe",Gz),Uz=new Fs("subscription-enable-ypc",Bz),Vz=new Fs("subscription-disable-ypc",Bz),Wz=new Fs("subscription-prefs",Cz),Xz=new Fs("subscription-prefs-success",Cz),Yz=new Fs("subscription-prefs-failure",Cz);var su,Zz=[],$z=[],aA=null,bA=null;function cA(a){aA=a.f;bA=a.g}
function dA(){if(aA){var a=pf("overlay-confirmation-preferences-update-frequency",su);if(a=mb(a,function(b){return b.value==aA}))a.checked=!0,nu()}(a=F("receive-post-updates-checkbox",su))&&null!==bA&&qu(a,bA)}
function eA(){return F("receive-post-updates-checkbox",su)}
function fA(){var a=eA();a&&!a.disabled&&(bA=a.checked)}
function gA(){var a=eA();a&&("receive-no-updates"==ru()?(qu(a,!1),a.disabled=!0):(a.disabled=!1,null!==bA&&qu(a,bA)))}
function hA(a){a=G(a.currentTarget,"overlay-confirmation-content");var b=F("updates-frequency-menu",a);b&&(b.disabled=!F("receive-all-updates",a).checked)}
function iA(a){var b=a.currentTarget;a=L(b,"frequency");var c=lt.getInstance();b=G(b,W(c,"menu"));c=lt.getInstance();b=pt(c,b);L(b,"frequency")!=a&&Nm(b,"frequency",a)}
function jA(a){a=F("subscription-preferences-overlay-container",Mf(a));return F("yt-dialog",a)}
function kA(a){su||(su=jA(a.button));lA(!0);Hu.getInstance().show(su);var b={};b.c=a.f;Wn("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",R:b,Ya:!0,onSuccess:function(c,d){var e=d.content_html;lA(!1);var f=F("subscription-preferences-overlay-content",su);jd(f,e);e=Mu();f=F("overlay-confirmation-save-button",e);N($z);$z.length=0;$z.push(M(f,"click",mA),nn(e,"click",hA,"receive-all-updates"),nn(e,"keypressed",hA,"receive-all-updates"),nn(e,"click",fA,"receive-post-updates"),
nn(e,"keypressed",fA,"receive-post-updates"),nn(e,"click",gA,"overlay-confirmation-preferences-update-frequency"),nn(e,"keypressed",gA,"overlay-confirmation-preferences-update-frequency"),nn(document.body,"click",iA,"updates-frequency-choice"));aA=ru();bA=(e=eA())?e.checked:null},
onError:function(){Hu.getInstance().hide()}})}
function lA(a){var b=su,c=F("subscription-preferences-overlay-loading",b);b=F("subscription-preferences-overlay-content",b);Ws(c,a);Ws(b,!a)}
function mA(a){var b=G(a.currentTarget,"yt-dialog-fg");if(b){a=L(a.currentTarget,"channel-external-id");var c=ru(),d=eA();if(c)a=new Cz(a,c,d?d.checked:null);else{c=F("receive-all-updates",b);var e=F("updates-frequency-menu",b);b=!1;var f=!e||H(e,"hidden");f||"occasionally"!=L(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new Cz(a,e,d?d.checked:null)}U(Wz,a);Hu.getInstance().hide()}}
;function nA(a,b){Es.call(this,1,arguments);this.container=a;this.offerId=b||null}
A(nA,Es);function oA(a){Es.call(this,1,arguments);this.callback=a}
A(oA,Es);function pA(a,b){Es.call(this,2,arguments);this.g=a;this.f=b}
A(pA,Es);function qA(a,b,c,d){Es.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(qA,Es);function rA(a,b){Es.call(this,1,arguments);this.g=a;this.f=b||null}
A(rA,Es);function sA(a){Es.call(this,1,arguments);this.f=a}
A(sA,Es);var tA=new Fs("ypc-init-purchase-for-container",nA),uA=new Fs("ypc-core-load",oA),vA=new Fs("ypc-guide-sync-success",pA),wA=new Fs("ypc-purchase-success",qA),xA=new Fs("ypc-subscription-cancel",sA),yA=new Fs("ypc-subscription-cancel-success",rA),zA=new Fs("ypc-init-subscription",sA);var AA=[];function BA(a){a.g?U(uA,new oA(function(){U(zA,new sA(a.g))})):O("web_classic_innertube_subscription_update")?CA(a.f,a.params):DA(a.f,a.j,a.i,a.source,a.params)}
function EA(a){a.g?U(uA,new oA(function(){U(xA,new sA(a.g))})):O("web_classic_innertube_subscription_update")?FA(a.f,a.params):GA(a.f,a.l,a.j,a.i,a.source)}
function HA(a){IA(wb(a.f))}
function JA(a){KA(wb(a.f))}
function LA(a){MA(a.i,a.f,a.g)}
function NA(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&U(Nz,new Fz(b,c,a.f.channelInfo))}
function OA(a){var b=a.f;Eb(a.g,function(c,d){U(Nz,new Fz(d,c,b[d]))})}
function PA(a){U(Sz,new Bz(a.g.itemId));a.f&&a.f.length&&(QA(a.f,Sz),QA(a.f,Uz))}
function CA(a,b){var c=new Bz(a);U(Lz,c);jh(Mx({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){U(Nz,new Fz(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",Yi:a}))}),function(){U(Mz,c)})}
function DA(a,b,c,d,e){var f=new Bz(a);U(Lz,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=K("PLAYBACK_ID"))&&(c.plid=d);(d=K("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&RA(b,c);Wn("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:g,R:c,onSuccess:function(h,l){var m=l.response;U(Nz,new Fz(a,m.id,m.channel_info));m.show_feed_privacy_dialog&&S("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
fa:function(){U(Mz,f)}})}
function FA(a,b){var c=new Bz(a);U(Qz,c);jh(Mx({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){U(Sz,c)}),function(){U(Rz,c)})}
function GA(a,b,c,d,e){var f=new Bz(a);U(Qz,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=K("PLAYBACK_ID"))&&(d.plid=a);(a=K("EVENT_ID"))&&(d.ei=a);c&&RA(c,d);Wn("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,R:d,onSuccess:function(){U(Sz,f)},
fa:function(){U(Rz,f)}})}
function MA(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Cz(a,b,c);Wn("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",R:d,onError:function(){U(Yz,e)},
onSuccess:function(){U(Xz,e)}})}}
function IA(a){if(a.length){var b=yb(a,0,40);U("subscription-batch-subscribe-loading");QA(b,Lz);var c={};c.a=b.join(",");var d=function(){U("subscription-batch-subscribe-loaded");QA(b,Mz)};
Wn("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",R:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Array.isArray(h)&&h.length==b.length){var l=g.channel_info_map;B(h,function(m,n){var u=b[n];U(Nz,new Fz(u,m,l[u]))});
a.length?IA(a):U("subscription-batch-subscribe-finished")}},
onError:function(){d();U("subscription-batch-subscribe-failure")}})}}
function KA(a){if(a.length){var b=yb(a,0,40);U("subscription-batch-unsubscribe-loading");QA(b,Qz);var c={};c.c=b.join(",");var d=function(){U("subscription-batch-unsubscribe-loaded");QA(b,Rz)};
Wn("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",R:c,onSuccess:function(){d();QA(b,Sz);a.length&&KA(a)},
onError:function(){d()}})}}
function QA(a,b){B(a,function(c){U(b,new Bz(c))})}
function RA(a,b){var c=wn(a),d;for(d in c)b[d]=c[d]}
;var SA={},TA=[];function UA(a){a=G(a,"yt-uix-button-subscription-container");a=F("unsubscribe-confirmation-overlay-container",a);return F("yt-dialog",a)}
function VA(a,b){N(TA);TA.length=0;SA[b]||(SA[b]=UA(a));Hu.getInstance().show(SA[b]);var c=Mu();return new Zg(function(d){TA.push(nn(c,"click",function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function WA(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!XA(a)||c.some(function(e){return!XA(e)}))throw Error("Only objects may be merged.");
c=p(c);for(d=c.next();!d.done;d=c.next())YA(a,d.value);return a}
function YA(a,b){for(var c in b)if(XA(b[c])){if(c in a&&!XA(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});YA(a[c],b[c])}else if(ZA(b[c])){if(c in a&&!ZA(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);$A(a[c],b[c])}else a[c]=b[c];return a}
function $A(a,b){for(var c=p(b),d=c.next();!d.done;d=c.next())d=d.value,XA(d)?a.push(YA({},d)):ZA(d)?a.push($A([],d)):a.push(d);return a}
function XA(a){return"object"===typeof a&&!Array.isArray(a)}
function ZA(a){return"object"===typeof a&&Array.isArray(a)}
;function aB(a,b){Es.call(this,1,arguments)}
q(aB,Es);function bB(a,b){Es.call(this,1,arguments)}
q(bB,Es);var cB=new Fs("aft-recorded",aB),dB=new Fs("timing-sent",bB);var eB=window;function fB(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var gB=eB.performance||eB.mozPerformance||eB.msPerformance||eB.webkitPerformance||new fB;var hB=!1;y(gB.clearResourceTimings||gB.webkitClearResourceTimings||gB.mozClearResourceTimings||gB.msClearResourceTimings||gB.oClearResourceTimings||Oa,gB);function iB(a){var b=jB(a);if(b.aft)return b.aft;a=K((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function kB(a){return!!x("yt.timing."+(a||"")+"pingSent_")}
function lB(a){var b;(b=x("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},v("ytcsi."+(a||"")+"data_",b,void 0));return b}
function mB(a){a=lB(a);a.info||(a.info={});return a.info}
function jB(a){a=lB(a);a.tick||(a.tick={});return a.tick}
function nB(a){var b=lB(a).nonce;b||(b=Vr(),lB(a).nonce=b);return b}
function oB(a){var b=jB(a||""),c=iB(a);c&&!hB&&(U(cB,new aB(Math.round(c-b._start),a)),hB=!0)}
;function pB(){var a=x("ytcsi.debug");a||(a=[],v("ytcsi.debug",a,void 0),v("ytcsi.reference",{},void 0));return a}
function qB(a){a=a||"";var b=x("ytcsi.reference");b||(pB(),b=x("ytcsi.reference"));if(b[a])return b[a];var c=pB(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var rB=r.ytLoggingLatencyUsageStats_||{};v("ytLoggingLatencyUsageStats_",rB,void 0);function sB(){this.f=0}
function tB(){sB.f||(sB.f=new sB);return sB.f}
sB.prototype.tick=function(a,b,c){uB(this,"tick_"+a+"_"+b)||Cr("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
sB.prototype.info=function(a,b){var c=Object.keys(a).join("");uB(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Cr("latencyActionInfo",c))};
sB.prototype.span=function(a,b){var c=Object.keys(a).join("");uB(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Cr("latencyActionSpan",a))};
function uB(a,b){rB[b]=rB[b]||{count:0};var c=rB[b];c.count++;c.time=ap();a.f||(a.f=No(function(){var d=ap(),e;for(e in rB)rB[e]&&6E4<d-rB[e].time&&delete rB[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Ar("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Nr(c)),!0):!1}
;var Z={},vB=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",
Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),wB="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
xB={},yB=(xB.ccs="CANARY_STATE_",xB.mver="MEASUREMENT_VERSION_",xB.pis="PLAYER_INITIALIZED_STATE_",xB.yt_pt="LATENCY_PLAYER_",xB.pa="LATENCY_ACTION_",xB.yt_vst="VIDEO_STREAM_TYPE_",xB),zB="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function AB(a){return!!K("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||!!lB(a).useGel}
function BB(a){a=lB(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function CB(a,b,c){if(null!==b)if(mB(c)[a]=b,AB(c)){var d=b;b=BB(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in vB){b=vB[a];pb(wB,b)&&(d=!!d);a in yB&&"string"===typeof d&&(d=yB[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var l=d[h];g[l]={};g=g[l]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=WA({},e)}else pb(zB,a)||Nr(new Ar("Unknown label logged with GEL CSI",
a)),f=void 0;f&&AB(c)&&(b=qB(c||""),WA(b.info,f),b=BB(c),"gelInfos"in b||(b.gelInfos={}),WA(b.gelInfos,f),c=nB(c),tB().info(f,c))}else qB(c||"").info[a]=b}
function DB(a,b,c){var d=jB(c);if(O("use_first_tick")&&EB(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;gB.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),gB.mark(e))}e=b||ap();d[a]=e;e=BB(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||ap();if(AB(c)){qB(c||"").tick[a]=b||ap();e=nB(c);if("_start"===a){var f=tB();uB(f,"baseline_"+e)||Cr("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else tB().tick(a,e,b);oB(c);e=!0}else e=!1;e||(FB(!1,c),qB(c||"").tick[a]=b||ap());
return d[a]}
function EB(a,b){var c=jB(b);return a in c}
function FB(a,b){if(!kB(b)){var c=K((b||"")+"TIMING_ACTION",void 0),d=jB(b);if(x("ytglobal.timing"+(b||"")+"ready_")&&c&&EB("_start")&&iB(b))if(oB(b),a||b)GB(b);else{c=!0;var e=K("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in d)){c=!1;break}c&&GB(b)}}}
function GB(a){if(!AB(a)){var b=jB(a),c=mB(a),d=b._start,e=K("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:K((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=iB(a);var h=jB(a),l=h.pbr,m=h.vc;h=h.pbs;l&&m&&h&&l<m&&m<h&&mB(a).yt_pvis&&"youtube"===e&&(CB("yt_lt","hot_bg",a),e=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=ap();n={};e=[];for(var u in b)"_"!==u.charAt(0)&&(l=Math.round(b[u]-d),n[u]=l,e.push(u+"."+l));f.rt=
e.join(",");b=!!c.ap;O("debug_csi_data")&&(c=x("yt.timing.csiData"),c||(c=[],v("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var w=void 0===w?"":w;oo(f,w)||no(f,void 0,void 0,void 0,w)}else no(f);v("yt.timing."+(a||"")+"pingSent_",!0,void 0);U(dB,new bB(n.aft+(Number(g)||0),a))}}
var HB=window;HB.ytcsi&&(HB.ytcsi.info=CB,HB.ytcsi.tick=DB);function IB(a){for(var b=0,c=a.length;b<c;b++){var d;if(d=qf("IMG",null,a[b])){var e=L(d,"thumb");e&&(d.src=e,Pm(d,"thumb"))}}}
;function JB(){var a=K("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!K("SESSION_INDEX")&&!K("LOGGED_IN"))}
;function KB(){V.call(this,"simple-thumb-wrap")}
var LB,MB;q(KB,V);
KB.prototype.register=function(){if(NB=K("WATCH_LATER_BUTTON",void 0)){LB=K("WATCH_QUEUE_BUTTON",void 0);MB=K("WATCH_QUEUE_MENU",void 0);var a=pf(W(this));B(a,function(b){var c=JB(),d=G(b,"thumb-wrapper");if(!(d&&(c?F("addto-watch-later-button",d):F("addto-watch-later-button-sign-in",d)))){var e=this.B(b,"vid");c=NB.replace(OB,e);d=LB.replace(OB,e);e=MB.replace(OB,e);var f=G(b,"thumb-wrapper");f.appendChild(Cf(Pd(c)));f.appendChild(Cf(Pd(e)));f.appendChild(Cf(Pd(d)));(b=G(b,"video-list-item"))&&Ej(b,
"show-video-time")}},this)}};
KB.prototype.unregister=function(){V.prototype.unregister.call(this);MB=LB=NB=""};
Pa(KB);var NB="",OB=/__VIDEO_ID__/g;function PB(a){var b=QB();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=R("LOGGED_IN",function(d){wo(K("LOGGED_IN_PUBSUB_KEY",void 0));Mm("LOGGED_IN",!0);a(d)});
Mm("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function QB(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Md(a,"mode","subscribe");a=Md("/signin?context=popup","next",a);return a=Md(a,"feature","sub_button")}
v("yt.pubsub.publish",S,void 0);function RB(){V.call(this,"subscription-button")}
q(RB,V);k=RB.prototype;k.register=function(){X(this,"click",this.Sc);it(this,Lz,this.Zd);it(this,Mz,this.Yd);it(this,Nz,this.Mh);it(this,Qz,this.Zd);it(this,Rz,this.Yd);it(this,Sz,this.Vg);it(this,Uz,this.Dg);it(this,Vz,this.Cg)};
k.unregister=function(){Y(this,"click",this.Sc);V.prototype.unregister.call(this)};
k.isSubscribed=function(a){return!!this.B(a,"is-subscribed")};
k.Sc=function(a){var b=this.B(a,"href"),c=this.B(a,"insecure");if(b)a=this.B(a,"target")||"_self",window.open(b,a);else if(!c)if(JB()){b=this.Cb(a);c=this.B(a,"clicktracking");var d=SB(this,a),e=this.B(a,"parent-url");if(this.B(a,"is-subscribed")){var f=this.B(a,"subscription-id"),g=this.B(a,"unsubscribe-params"),h=new Gz(b,f,d,a,c,e,g);this.B(a,"show-unsub-confirm-dialog")?VA(a,b).then(function(){U(Pz,h)}):U(Pz,h)}else a=this.B(a,"params"),U(Kz,new Ez(b,d,c,e,void 0,a))}else TB(this,a)};
k.Zd=function(a){this.xb(a.f,this.qe,!0)};
k.Yd=function(a){this.xb(a.f,this.qe,!1)};
k.Mh=function(a){this.xb(a.f,this.re,!0,a.g)};
k.Vg=function(a){this.xb(a.f,this.re,!1)};
k.Dg=function(a){this.xb(a.f,this.Ze)};
k.Cg=function(a){this.xb(a.f,this.Ye)};
k.re=function(a,b,c){b?(Nm(a,"is-subscribed","true"),c&&Nm(a,"subscription-id",c)):(Pm(a,"is-subscribed"),Pm(a,"subscription-id"));UB(this,a)};
k.Cb=function(a){return this.B(a,"channel-external-id")};
function SB(a,b){if(!a.B(b,"ypc-enabled"))return null;var c=a.B(b,"ypc-item-type"),d=a.B(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.qe=function(a,b){var c=G(a,"yt-uix-button-subscription-container");Gj(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function UB(a,b){var c=a.B(b,"style-type"),d=!!a.B(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Gj(b,"yt-uix-button-subscribe"+c,!d);Gj(b,e,d);a.B(b,"subscriber-count-tooltip")&&!a.B(b,"subscriber-count-show-when-subscribed")&&(c=W(dw.getInstance()),Gj(b,c,!d),b.title=d?"":a.B(b,"subscriber-count-title"));d?P(function(){J(b,"hover-enabled")},1E3):Ej(b,"hover-enabled")}
k.Ze=function(a){var b=!!this.B(a,"ypc-item-type"),c=!!this.B(a,"ypc-item-id");!this.B(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Nm(a,"ypc-enabled","true"))};
k.Ye=function(a){this.B(a,"ypc-enabled")&&(Ej(a,"ypc-enabled"),Pm(a,"ypc-enabled"))};
function VB(a,b){var c=pf(W(a));return hb(c,function(d){return b==this.Cb(d)},a)}
k.Lh=function(a,b,c){var d=zb(arguments,2);B(a,function(e){b.apply(this,vb(e,d))},this)};
k.xb=function(a,b,c){var d=VB(this,a);d=vb([d],zb(arguments,1));this.Lh.apply(this,d)};
function TB(a,b){var c=y(function(d){d.discoverable_subscriptions&&Mm("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Sc(b)},a);
PB(c)}
Pa(RB);function WB(){V.call(this,"subscription-preferences-button")}
q(WB,V);k=WB.prototype;k.register=function(){X(this,"click",this.Pe);it(this,Nz,this.Oh);it(this,Xz,this.Wg)};
k.unregister=function(){Y(this,"click",this.Pe);V.prototype.unregister.call(this)};
k.Pe=function(a){var b=this.Cb(a);U(Jz,new Dz(a,b))};
k.we=function(a,b){Fj(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);J(a,b)};
k.Wg=function(a){this.Oe(a.i,this.we,XB[a.f])};
k.Oh=function(a){this.Oe(a.f,this.we,"yt-uix-subscription-notifications-highlights")};
k.Cb=function(a){return this.B(a,"channel-external-id")};
k.Oe=function(a,b,c){var d=YB(this,a);d=vb([d],zb(arguments,1));this.Nh.apply(this,d)};
function YB(a,b){var c=pf(W(a));return hb(c,function(d){return b==this.Cb(d)},a)}
k.Nh=function(a,b,c){var d=zb(arguments,2);B(a,function(e){b.apply(this,vb(e,d))},this)};
Pa(WB);var XB={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};var ZB=0,$B=null,aC=null;var bC=0,cC=[],dC=[],eC=0,fC={},gC={},iC=new lj(hC,1E3);function jC(){eC++;var a=tf(window),b=new kg(0,0,a.width,a.height);CB("vph",a.height);CB("vpw",a.width);DB("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];iC.start();for(var e=0;e<c;e++){var f=a[e];kC(f,b)&&(f=lC(f),f.then(mC),d.push(f),cC.push(f))}DB("vpcc");b=hh(d).then(nC);lh(b,oC);b.then(pC);cC.push(b);return b}
function pC(){iC.stop()}
function oC(){DB("vpr")}
function kC(a,b){for(var c=a,d=[];c!=document.body;){var e=Vm(c);if(e in fC)return!0;if(e in gC)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return gC[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return gC[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)fC[d[c]]=!0;return!0}
function nC(a){var b=tf(window);b=new kg(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;kC(a[d].Kf,b)&&c<f&&(c=f)}return c}
function lC(a){var b=eC;return new Zg(function(c,d){var e={Kf:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){eC!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},dC.push(a))})}
function mC(a){iC.start();a=a.time;bC<a&&(bC=a,DB("lim",a))}
function hC(){DB("vptl",bC);DB("vpl",bC)}
function qC(){cC.forEach(function(a){a.cancel()});
bC=cC.length=0;fC={};gC={};dC.forEach(function(a){a.slt=void 0});
dC.length=0}
;function rC(){DB("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){DB("cpt");S("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(DB("cpt"),S("on_cpt_tick",(new Date).getTime())):setTimeout(function(){DB("cpt");
S("on_cpt_tick",(new Date).getTime())},0);
sC();K("CSI_VIEWPORT")&&(tC=jC(),tC.then(function(a){DB("vpl",a);tC=null},function(){}))}
function sC(){uC("init");var a=K("PAGE_NAME",void 0);a&&uC("init-"+a)}
var tC=null;function uC(a){x("yt.scheduler.instance")?vC.push(Po(Ya(xo,a),0)):S(a)}
var vC=[];var wC;function xC(){if(!wC){var a=E("watch-queue");if(!a)return[];wC=F("watch-queue-items-list",a)}if(!wC)return[];var b=[];a=If(wC);B(a,function(c){(c=L(c,"video-id"))&&b.push(c)});
return b}
;var yC={bi:"atp",wi:"ska",si:"que",oi:"mus",vi:"sus",ki:"dsp",ti:"seq"};function zC(a){this.scheme="https";this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Dd(a)[4]||null)||"";b&&(this.port=":"+b);this.domain=Fd(a)||"";a=Nc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>qc(a,"10.0")&&(this.g=!1))}
function AC(a,b){var c=a.f;a.g&&(c=a.scheme+"://"+a.domain+a.port+a.f);return Nd(c+b,{})}
function BC(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:Ya(a.j,d,!0),onError:Ya(a.i,e),bb:Ya(a.l,e)};c&&(a.R=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Wn(b,a)}
zC.prototype.j=function(a,b,c,d){b?a(d):a({text:c.responseText})};
zC.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
zC.prototype.l=function(a){a(Error("request timed out"))};var CC=z(),DC=null,EC=Array(50),FC=-1,GC=!1;function HC(){var a=IC;JC();DC.push(a);KC(DC)}
function LC(a,b){JC();var c=DC,d=MC(a,String(b));0==c.length?NC(d):(KC(c),B(c,function(e){e(d)}))}
function JC(){DC||(DC=x("yt.mdx.remote.debug.handlers_")||[],v("yt.mdx.remote.debug.handlers_",DC,void 0))}
function NC(a){var b=(FC+1)%50;FC=b;EC[b]=a;GC||(GC=49==b)}
function KC(a){var b=EC;if(b[0]){var c=FC,d=GC?c:-1;do{d=(d+1)%50;var e=b[d];B(a,function(f){f(e)})}while(d!=c);
EC=Array(50);FC=-1;GC=!1}}
function MC(a,b){var c=(z()-CC)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function OC(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function PC(a,b){return!!b&&(a.id==b||a.uuid==b)}
function QC(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function RC(a){return new OC(a)}
function SC(a){return Array.isArray(a)?ib(a,RC):[]}
function TC(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function UC(a){return Array.isArray(a)?"["+ib(a,TC).join(",")+"]":"null"}
;function VC(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function WC(a,b){return mb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function XC(a,b){return mb(a,function(c){return PC(c,b)})}
;function YC(a){a=void 0===a?!1:a;eg.call(this);this.A=new cm(a);fg(this,Ya(gg,this.A))}
A(YC,eg);YC.prototype.subscribe=function(a,b,c){return this.S()?0:this.A.subscribe(a,b,c)};
YC.prototype.Jd=function(a,b){this.S()||em(this.A,a,b,void 0)};
YC.prototype.ra=function(a){return this.S()?!1:this.A.ra(a)};
YC.prototype.J=function(a,b){this.S()||this.A.ha.apply(this.A,arguments)};function ZC(a){YC.call(this);this.C=a;this.screens=[]}
A(ZC,YC);ZC.prototype.na=function(){return this.screens};
ZC.prototype.pc=function(a){return!!WC(this.screens,a)};
ZC.prototype.get=function(a){return a?XC(this.screens,a):null};
function $C(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function aD(a,b){var c=a.screens.length!=b.length;a.screens=hb(a.screens,function(f){return!!WC(b,f)});
for(var d=0,e=b.length;d<e;d++)c=$C(a,b[d])||c;return c}
function bD(a,b){var c=a.screens.length;a.screens=hb(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c}
ZC.prototype.info=function(a){LC(this.C,a)};function cD(a,b,c,d){YC.call(this);this.F=a;this.C=b;this.j=c;this.l=d;this.i=0;this.f=null;this.g=NaN}
q(cD,YC);k=cD.prototype;k.start=function(){!this.f&&isNaN(this.g)&&this.ie()};
k.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(Q(this.g),this.g=NaN)};
k.L=function(){this.stop();YC.prototype.L.call(this)};
k.ie=function(){this.g=NaN;this.f=Wn(AC(this.F,"/pairing/get_screen"),{method:"POST",R:{pairing_code:this.C},timeout:5E3,onSuccess:y(this.yh,this),onError:y(this.xh,this),bb:y(this.zh,this)})};
k.yh=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.j;c.name=this.l;this.J("pairingComplete",new OC(c))};
k.xh=function(a){this.f=null;a.status&&404==a.status?this.i>=dD.length?this.J("pairingFailed",Error("DIAL polling timed out")):(a=dD[this.i],this.g=P(y(this.ie,this),a),this.i++):this.J("pairingFailed",Error("Server error "+a.status))};
k.zh=function(){this.f=null;this.J("pairingFailed",Error("Server not responding"))};
var dD=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];function eD(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.j=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new wj;this.g=this.i="";this.f=void 0;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",fD(this,a.capabilities||""),gD(this,a.experiments||
""),this.i=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||"",this.f=a.deviceContext)}
eD.prototype.copy=function(){var a=new eD({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.j=this.j;a.i=this.i;a.g=this.g;a.f=this.f;return a};
eD.prototype.equals=function(a){return a?this.id==a.id:!1};
function fD(a,b){a.capabilities.clear();hb(b.split(","),Ya(Hb,yC)).forEach(function(c){a.capabilities.add(c)})}
function gD(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;var hD;function iD(){var a=jD(),b=kD();pb(a,b);if(lD()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var h=Cb(b,c[g]);0<h?d=g+1:(e=g,f=!h)}d=f?d:-d-1;0>d&&yb(c,-(d+1),0,b)}a=mD(a);if(0==a.length)try{go("remote_sid")}catch(l){}else try{eo("remote_sid",a.join(","),-1,"/")}catch(l){}}
function jD(){var a=Ts("yt-remote-connected-devices")||[];a.sort(Cb);return a}
function mD(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return ib(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function nD(a){Qs("yt-remote-connected-devices",a,86400)}
function kD(){if(oD)return oD;var a=Ts("yt-remote-device-id");a||(a=VC(),Qs("yt-remote-device-id",a,31536E3));for(var b=jD(),c=1,d=a;pb(b,d);)c++,d=a+"#"+c;return oD=d}
function pD(){return Ts("yt-remote-session-browser-channel")}
function lD(){return Ts("yt-remote-session-screen-id")}
function qD(a){5<a.length&&(a=a.slice(a.length-5));var b=ib(rD(),function(d){return d.loungeToken}),c=ib(a,function(d){return d.loungeToken});
lb(c,function(d){return!pb(b,d)})&&sD();
Qs("yt-remote-local-screens",a,31536E3)}
function rD(){return Ts("yt-remote-local-screens")||[]}
function sD(){Qs("yt-remote-lounge-token-expiration",!0,86400)}
function tD(a,b){Qs("yt-remote-session-browser-channel",a);Qs("yt-remote-session-screen-id",b);var c=jD(),d=kD();pb(c,d)||c.push(d);nD(c);iD()}
function uD(a){a||(Us("yt-remote-session-screen-id"),Us("yt-remote-session-video-id"));iD();a=jD();rb(a,kD());nD(a)}
function vD(){if(!hD){var a=Bm();a&&(hD=new hm(a))}return hD?!!hD.get("yt-remote-use-staging-server"):!1}
var oD="";function wD(a){ZC.call(this,"LocalScreenService");this.g=a;this.f=NaN;xD(this);this.info("Initializing with "+UC(this.screens))}
A(wD,ZC);k=wD.prototype;k.start=function(){xD(this)&&this.J("screenChange");!Ts("yt-remote-lounge-token-expiration")&&yD(this);Q(this.f);this.f=P(y(this.start,this),1E4)};
k.add=function(a,b){xD(this);$C(this,a);zD(this,!1);this.J("screenChange");b(a);a.token||yD(this)};
k.remove=function(a,b){var c=xD(this);bD(this,a)&&(zD(this,!1),c=!0);b(a);c&&this.J("screenChange")};
k.mc=function(a,b,c,d){var e=xD(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,zD(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.J("screenChange")};
k.L=function(){Q(this.f);wD.O.L.call(this)};
function yD(a){if(a.screens.length){var b=ib(a.screens,function(d){return d.id}),c=AC(a.g,"/pairing/get_lounge_token_batch");
BC(a.g,c,{screen_ids:b.join(",")},y(a.wf,a),y(a.vf,a))}}
k.wf=function(a){xD(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}zD(this,!b);b&&LC(this.C,"Missed "+b+" lounge tokens.")};
k.vf=function(a){LC(this.C,"Requesting lounge tokens failed: "+a)};
function xD(a){var b=SC(rD());b=hb(b,function(c){return!c.uuid});
return aD(a,b)}
function zD(a,b){qD(ib(a.screens,QC));b&&sD()}
;function AD(a,b){YC.call(this);this.C=b;var c=Ts("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,g=e.length;f<g;++f){var h=e[f].id;d[h]=pb(c,h)}this.f=d;this.l=a;this.i=this.j=NaN;this.g=null;BD("Initialized with "+Vj(this.f))}
q(AD,YC);k=AD.prototype;k.start=function(){var a=parseInt(Ts("yt-remote-fast-check-period")||"0",10);(this.j=z()-144E5<a?0:a)?CD(this):(this.j=z()+3E5,Qs("yt-remote-fast-check-period",this.j),this.Kc())};
k.isEmpty=function(){return Lb(this.f)};
k.update=function(){BD("Updating availability on schedule.");var a=this.C(),b=Fb(this.f,function(c,d){return c&&!!XC(a,d)},this);
DD(this,b)};
function ED(a,b,c){var d=AC(a.l,"/pairing/get_screen_availability");BC(a.l,d,{lounge_token:b.token},y(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),y(function(){c(!1)},a))}
k.L=function(){Q(this.i);this.i=NaN;this.g&&(this.g.abort(),this.g=null);YC.prototype.L.call(this)};
function DD(a,b){a:if(Gb(b)!=Gb(a.f))var c=!1;else{c=Jb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(BD("Updated online screens: "+Vj(a.f)),a.f=b,a.J("screenChange"));FD(a)}
function CD(a){isNaN(a.i)||Q(a.i);a.i=P(y(a.Kc,a),0<a.j&&a.j<z()?2E4:1E4)}
k.Kc=function(){Q(this.i);this.i=NaN;this.g&&this.g.abort();var a=GD(this);if(Gb(a)){var b=AC(this.l,"/pairing/get_screen_availability");this.g=BC(this.l,b,{lounge_token:Jb(a).join(",")},y(this.Ng,this,a),y(this.Mg,this))}else DD(this,{}),CD(this)};
k.Ng=function(a,b){this.g=null;var c=Jb(GD(this));if(Ab(c,Jb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;DD(this,d);CD(this)}else this.U("Changing Screen set during request."),this.Kc()};
k.Mg=function(a){this.U("Screen availability failed: "+a);this.g=null;CD(this)};
function BD(a){LC("OnlineScreenService",a)}
k.U=function(a){LC("OnlineScreenService",a)};
function GD(a){var b={};B(a.C(),function(c){c.token?b[c.token]=c.id:this.U("Requesting availability of screen w/o lounge token.")});
return b}
function FD(a){a=Jb(Fb(a.f,function(b){return b}));
a.sort(Cb);a.length?Qs("yt-remote-online-screen-ids",a.join(","),60):Us("yt-remote-online-screen-ids")}
;function HD(a){ZC.call(this,"ScreenService");this.l=a;this.f=this.g=null;this.i=[];this.j={};ID(this)}
A(HD,ZC);k=HD.prototype;k.start=function(){this.g.start();this.f.start();this.screens.length&&(this.J("screenChange"),this.f.isEmpty()||this.J("onlineScreenChange"))};
k.add=function(a,b,c){this.g.add(a,b,c)};
k.remove=function(a,b,c){this.g.remove(a,b,c);this.f.update()};
k.mc=function(a,b,c,d){this.g.pc(a)?this.g.mc(a,b,c,d):(a="Updating name of unknown screen: "+a.name,LC(this.C,a),d(Error(a)))};
k.na=function(a){return a?this.screens:vb(this.screens,hb(this.i,function(b){return!this.pc(b)},this))};
k.Ae=function(){return hb(this.na(!0),function(a){return!!this.f.f[a.id]},this)};
function JD(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.j[b]);var g=a.na();if(g=(c?XC(g,c):null)||XC(g,b)){g.uuid=b;var h=KD(a,g);ED(a.f,h,function(l){e(l?h:null)})}else c?LD(a,c,y(function(l){var m=KD(this,new OC({name:d,
screenId:c,loungeToken:l,dialId:b||""}));ED(this.f,m,function(n){e(n?m:null)})},a),f):e(null)}
k.Be=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new cD(this.l,a,b,c);f.subscribe("pairingComplete",y(function(g){gg(f);d(KD(this,g))},this));
f.subscribe("pairingFailed",function(g){gg(f);e(g)});
f.start();return y(f.stop,f)};
function MD(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
k.Bh=function(a,b,c,d){Wn(AC(this.l,"/pairing/get_screen"),{method:"POST",R:{pairing_code:a},timeout:5E3,onSuccess:y(function(e,f){var g=new OC(f.screen||{});if(!g.name||MD(this,g.name)){a:{var h=g.name;for(var l=2,m=b(h,l);MD(this,m);){l++;if(20<l)break a;m=b(h,l)}h=m}g.name=h}c(KD(this,g))},this),
onError:y(function(e){d(Error("pairing request failed: "+e.status))},this),
bb:y(function(){d(Error("pairing request timed out."))},this)})};
k.L=function(){gg(this.g);gg(this.f);HD.O.L.call(this)};
function LD(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={R:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var h=g&&g.screens||[];h[0]&&h[0].screenId==b?c(h[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Wn(AC(a.l,"/pairing/get_lounge_token_batch"),e)}
function ND(a){a.screens=a.g.na();var b=a.j,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+UC(a.screens))}
k.Ff=function(){ND(this);this.J("screenChange");this.f.update()};
function ID(a){OD(a);a.g=new wD(a.l);a.g.subscribe("screenChange",y(a.Ff,a));ND(a);a.i=SC(Ts("yt-remote-automatic-screen-cache")||[]);OD(a);a.info("Initializing automatic screens: "+UC(a.i));a.f=new AD(a.l,y(a.na,a,!0));a.f.subscribe("screenChange",y(function(){this.J("onlineScreenChange")},a))}
function KD(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=XC(a.i,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.i.push(b),Qs("yt-remote-automatic-screen-cache",ib(a.i,QC)));OD(a);a.j[b.uuid]=b.id;Qs("yt-remote-device-id-map",a.j,31536E3);return b}
function OD(a){a.j=Ts("yt-remote-device-id-map")||{}}
HD.prototype.dispose=HD.prototype.dispose;function PD(a,b,c){YC.call(this);this.V=c;this.K=a;this.f=b;this.F=null}
A(PD,YC);k=PD.prototype;k.getScreen=function(){return this.F};
k.cc=function(a){this.F=a;this.J("sessionScreen",this.F)};
k.la=function(a){this.S()||(a&&QD(this,""+a),this.F=null,this.J("sessionScreen",null))};
k.info=function(a){LC(this.V,a)};
function QD(a,b){LC(a.V,b)}
k.De=function(){return null};
k.Nc=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,y(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),y(function(){QD(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
k.L=function(){this.Nc("");PD.O.L.call(this)};function RD(a,b){PD.call(this,a,b,"CastSession");this.g=null;this.i=0;this.l=y(this.Ch,this);this.j=y(this.Yg,this);this.i=P(y(function(){SD(this,null)},this),12E4)}
q(RD,PD);k=RD.prototype;k.Mc=function(a){if(this.g){if(this.g==a)return;QD(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.l);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.g=a;this.g.addUpdateListener(this.l);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);TD(this)};
k.ob=function(a){this.info("launchWithParams no-op for Cast: "+Vj(a))};
k.stop=function(){this.g?this.g.stop(y(function(){this.la()},this),y(function(){this.la(Error("Failed to stop receiver app."))},this)):this.la(Error("Stopping cast device witout session."))};
k.Nc=function(){};
k.L=function(){this.info("disposeInternal");Q(this.i);this.i=0;this.g&&(this.g.removeUpdateListener(this.l),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.g=null;PD.prototype.L.call(this)};
function TD(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+Vj(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,Oa,y(function(){QD(this,"Failed to send message: getMdxSessionStatus.")},a)):QD(a,"Sending yt message without session: "+Vj(b))}
k.Yg=function(a,b){if(!this.S())if(b){var c=bk(b);if(Sa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+Vj(c));switch(d){case "mdxSessionStatus":SD(this,c.screenId);break;default:QD(this,"Unknown youtube message: "+d)}}else QD(this,"Unable to parse message.")}else QD(this,"No data in message.")};
function SD(a,b){Q(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=y(a.cc,a),d=y(a.la,a);a.td(b,c,d,5)}}else a.la(Error("Waiting for session status timed out."))}
k.td=function(a,b,c,d){JD(this.K,this.f.label,a,this.f.friendlyName,y(function(e){e?b(e):0<=d?(QD(this,"Screen "+a+" appears to be offline. "+d+" retries left."),P(y(this.td,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
k.De=function(){return this.g};
k.Ch=function(a){this.S()||a||(QD(this,"Cast session died."),this.la())};function UD(a,b,c){PD.call(this,a,b,"DialSession");this.i=this.C=null;this.M="";this.Z=c;this.P=null;this.l=Oa;this.j=NaN;this.T=y(this.Fh,this);this.g=Oa}
q(UD,PD);k=UD.prototype;k.Mc=function(a){this.i=a;this.i.addUpdateListener(this.T)};
k.ob=function(a){this.P=a;this.l()};
k.stop=function(){this.g();this.g=Oa;Q(this.j);this.i?this.i.stop(y(this.la,this,null),y(this.la,this,"Failed to stop DIAL device.")):this.la()};
k.L=function(){this.g();this.g=Oa;Q(this.j);this.i&&this.i.removeUpdateListener(this.T);this.i=null;PD.prototype.L.call(this)};
function VD(a){a.g=a.K.Be(a.M,a.f.label,a.f.friendlyName,y(function(b){this.g=Oa;this.cc(b)},a),y(function(b){this.g=Oa;
this.la(b)},a))}
k.Fh=function(a){this.S()||a||(QD(this,"DIAL session died."),this.g(),this.g=Oa,this.la())};
function WD(a){var b={};b.pairingCode=a.M;b.theme=a.Z;vD()&&(b.env_useStageMdx=1);return Ld(b)}
k.Gc=function(a){this.M=VC();if(this.P){var b=new chrome.cast.DialLaunchResponse(!0,WD(this));a(b);VD(this)}else this.l=y(function(){Q(this.j);this.l=Oa;this.j=NaN;var c=new chrome.cast.DialLaunchResponse(!0,WD(this));a(c);VD(this)},this),this.j=P(y(function(){this.l()},this),100)};
k.Mf=function(a,b,c){JD(this.K,this.C.receiver.label,a,this.f.friendlyName,y(function(d){d&&d.token?(this.cc(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Gc(b,c)},this),y(function(d){QD(this,"Failed to get DIAL screen: "+d);
this.Gc(b,c)},this))};function XD(a,b){PD.call(this,a,b,"ManualSession");this.g=P(y(this.ob,this,null),150)}
q(XD,PD);XD.prototype.stop=function(){this.la()};
XD.prototype.Mc=function(){};
XD.prototype.ob=function(){Q(this.g);this.g=NaN;var a=XC(this.K.na(),this.f.label);a?this.cc(a):this.la(Error("No such screen"))};
XD.prototype.L=function(){Q(this.g);this.g=NaN;PD.prototype.L.call(this)};function YD(a,b,c,d){YC.call(this);this.g=a;this.F=b||"233637DE";this.C=c||"cl";this.K=d||!1;this.f=null;this.l=!1;this.i=[];this.j=y(this.Kg,this)}
q(YD,YC);k=YD.prototype;
k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.K||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=y(this.Lg,this);c=new chrome.cast.ApiConfig(c,y(this.ce,this),f,d,e);c.customDialLaunchCallback=y(this.Bg,this);chrome.cast.initialize(c,y(function(){this.S()||(chrome.cast.addReceiverActionListener(this.j),
HC(),this.g.subscribe("onlineScreenChange",y(this.Ce,this)),this.i=ZD(this),chrome.cast.setCustomReceivers(this.i,Oa,y(function(g){this.U("Failed to set initial custom receivers: "+Vj(g))},this)),this.J("yt-remote-cast2-availability-change",$D(this)),b(!0))},this),y(function(g){this.U("Failed to initialize API: "+Vj(g));
b(!1)},this))};
k.lh=function(a,b){aE("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.getScreen();if(!a||c&&c.id!=a)aE("Unsetting old screen status: "+this.f.f.friendlyName),bE(this,null)}if(a&&b){if(!this.f){c=XC(this.g.na(),a);if(!c){aE("setConnectedScreenStatus: Unknown screen.");return}var d=cE(this,c);d||(aE("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.i.push(d),chrome.cast.setCustomReceivers(this.i,
Oa,y(function(e){this.U("Failed to set initial custom receivers: "+Vj(e))},this)));
aE("setConnectedScreenStatus: new active receiver: "+d.friendlyName);bE(this,new XD(this.g,d),!0)}this.f.Nc(b)}else aE("setConnectedScreenStatus: no screen.")};
function cE(a,b){return b?mb(a.i,function(c){return PC(b,c.label)},a):null}
k.mh=function(a){this.S()?this.U("Setting connection data on disposed cast v2"):this.f?this.f.ob(a):this.U("Setting connection data without a session")};
k.Eh=function(){this.S()?this.U("Stopping session on disposed cast v2"):this.f?(this.f.stop(),bE(this,null)):aE("Stopping non-existing session")};
k.requestSession=function(){chrome.cast.requestSession(y(this.ce,this),y(this.Og,this))};
k.L=function(){this.g.Jd("onlineScreenChange",y(this.Ce,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.j);rb(x("yt.mdx.remote.debug.handlers_")||[],IC);gg(this.f);YC.prototype.L.call(this)};
function aE(a){LC("Controller",a)}
k.U=function(a){LC("Controller",a)};
function IC(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function $D(a){return a.l||!!a.i.length||!!a.f}
function bE(a,b,c){b!=a.f&&(gg(a.f),(a.f=b)?(c?a.J("yt-remote-cast2-receiver-resumed",b.f):a.J("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",y(a.de,a,b)),b.getScreen()?a.J("yt-remote-cast2-session-change",b.getScreen()):c&&a.f.ob(null)):a.J("yt-remote-cast2-session-change",null))}
k.de=function(a,b){this.f==a&&(b||bE(this,null),this.J("yt-remote-cast2-session-change",b))};
k.Kg=function(a,b){if(!this.S())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),aE("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)aE("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{aE("onReceiverAction_: Casting to active receiver.");this.f.getScreen()&&this.J("yt-remote-cast2-session-change",this.f.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:bE(this,
new XD(this.g,a));break;case chrome.cast.ReceiverType.DIAL:bE(this,new UD(this.g,a,this.C));break;case chrome.cast.ReceiverType.CAST:bE(this,new RD(this.g,a));break;default:this.U("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.U("Stopping receiver w/o session: "+a.friendlyName)}else this.U("onReceiverAction_ called without receiver.")};
k.Bg=function(a){if(this.S())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.U("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.U("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.getScreen())return aE("Reselecting dial screen."),
this.J("yt-remote-cast2-session-change",this.f.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.U('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);bE(this,new UD(this.g,b,this.C))}b=this.f;b.C=a;return b.C.appState==chrome.cast.DialAppState.RUNNING?new Promise(y(b.Mf,b,(b.C.extraData||{}).screenId||null)):new Promise(y(b.Gc,b))};
k.ce=function(a){if(!this.S()){aE("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)aE("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),bE(this,new RD(this.g,b),!0);else{this.U("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=XC(this.g.na(),c.label);d&&PC(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(aE("onSessionEstablished_: manual to cast session change "+b.friendlyName),gg(this.f),this.f=new RD(this.g,b),this.f.subscribe("sessionScreen",y(this.de,this,this.f)),this.f.ob(null));this.f.Mc(a)}}};
k.Dh=function(){return this.f?this.f.De():null};
k.Og=function(a){this.S()||(this.U("Failed to estabilish a session: "+Vj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&bE(this,null))};
k.Lg=function(a){aE("Receiver availability updated: "+a);if(!this.S()){var b=$D(this);this.l=a==chrome.cast.ReceiverAvailability.AVAILABLE;$D(this)!=b&&this.J("yt-remote-cast2-availability-change",$D(this))}};
function ZD(a){var b=a.g.Ae(),c=a.f&&a.f.f;a=ib(b,function(d){c&&PC(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=cE(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
k.Ce=function(){this.S()||(this.i=ZD(this),aE("Updating custom receivers: "+Vj(this.i)),chrome.cast.setCustomReceivers(this.i,Oa,y(function(){this.U("Failed to set custom receivers.")},this)),this.J("yt-remote-cast2-availability-change",$D(this)))};
YD.prototype.setLaunchParams=YD.prototype.mh;YD.prototype.setConnectedScreenStatus=YD.prototype.lh;YD.prototype.stopSession=YD.prototype.Eh;YD.prototype.getCastSession=YD.prototype.Dh;YD.prototype.requestSession=YD.prototype.requestSession;YD.prototype.init=YD.prototype.init;YD.prototype.dispose=YD.prototype.dispose;function dE(a,b,c,d,e,f){eE()?gE(a,d,e,f)&&(hE(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?iE(b):(window.__onGCastApiAvailable=function(g,h){g?iE(b):(jE("Failed to load cast API: "+h),kE(!1),hE(!1),Us("yt-remote-cast-available"),Us("yt-remote-cast-receiver"),lE(),b(!1))},c?Co("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?ae():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?Wd():(Yd(),Ud(be.map(Xd))))):fE("Cannot initialize because not running Chrome")}
function lE(){fE("dispose");var a=mE();a&&a.dispose();v("yt.mdx.remote.cloudview.instance_",null,void 0);nE(!1);wo(oE);oE.length=0}
function pE(){fE("clearCurrentReceiver");Us("yt-remote-cast-receiver")}
function qE(){return Ts("yt-remote-cast-installed")?mE()?mE().getCastSession():(jE("getCastSelector: Cast is not initialized."),null):(jE("getCastSelector: Cast API is not installed!"),null)}
function rE(a,b){sE()?mE().setConnectedScreenStatus(a,b):jE("setConnectedScreenStatus called before ready.")}
function eE(){var a=0<=Nc.search(/ (CrMo|Chrome|CriOS)\//);return Le||a}
function gE(a,b,c,d){var e=!1;mE()||(a=new YD(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){Qs("yt-remote-cast-available",f);xo("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){fE("onReceiverSelected: "+f.friendlyName);
Qs("yt-remote-cast-receiver",f);xo("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){fE("onReceiverResumed: "+f.friendlyName);
Qs("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){fE("onSessionChange: "+TC(f));
f||Us("yt-remote-cast-receiver");xo("yt-remote-cast2-session-change",f)}),v("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
fE("cloudview.createSingleton_: "+e);return e}
function mE(){return x("yt.mdx.remote.cloudview.instance_")}
function iE(a){kE(!0);hE(!1);mE().init(!1,function(b){b?(nE(!0),S("yt-remote-cast2-api-ready")):(jE("Failed to initialize cast API."),kE(!1),Us("yt-remote-cast-available"),Us("yt-remote-cast-receiver"),lE());a(b)})}
function fE(a){LC("cloudview",a)}
function jE(a){LC("cloudview",a)}
function kE(a){fE("setCastInstalled_ "+a);Qs("yt-remote-cast-installed",a)}
function sE(){return!!x("yt.mdx.remote.cloudview.apiReady_")}
function nE(a){fE("setApiReady_ "+a);v("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function hE(a){v("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var oE=[];function tE(a,b){this.action=a;this.params=b||{}}
;function uE(a,b){eg.call(this);this.f=new lj(this.Rg,0,this);fg(this,Ya(gg,this.f));this.i=5E3;this.g=0;if("function"===typeof a)b&&(a=y(a,b));else if(a&&"function"===typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a}
A(uE,eg);k=uE.prototype;k.Rg=function(){this.i=Math.min(3E5,2*this.i);this.j();this.g&&this.start()};
k.start=function(){var a=this.i+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=z()+a};
k.stop=function(){this.f.stop();this.g=0};
k.isActive=function(){return this.f.isActive()};
k.reset=function(){this.f.stop();this.i=5E3};function vE(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?function(){return""}:d;
this.K=a;this.A=b;this.i=new cm;this.g=new uE(this.hh,this);this.f=null;this.F=!1;this.l=null;this.C="";this.H=this.j=0;this.G=[];this.P=c;this.M=d}
A(vE,Vl);k=vE.prototype;k.subscribe=function(a,b,c){return this.i.subscribe(a,b,c)};
k.Jd=function(a,b){em(this.i,a,b,void 0)};
k.ra=function(a){return this.i.ra(a)};
k.J=function(a,b){this.i.ha.apply(this.i,arguments)};
k.dispose=function(){this.F||(this.F=!0,gg(this.i),wE(this),gg(this.g),this.g=null,this.M=function(){return""})};
k.S=function(){return this.F};
function xE(a){return{firstTestResults:[""],secondTestResults:!a.f.nc,sessionId:a.f.g,arrayId:a.f.nb}}
k.connect=function(a,b,c){if(!this.f||2!=this.f.D){this.C="";this.g.stop();this.l=a||null;this.j=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new Al(c?c.firstTestResults:null,c?c.secondTestResults:null,this.P),e=this.f;e&&(e.ba=null);d.ba=this;this.f=d;yE(this);e?this.f.connect(a,b,this.A,e.g,e.nb):c?this.f.connect(a,b,this.A,c.sessionId,c.arrayId):this.f.connect(a,b,this.A)}};
function wE(a,b){a.H=b||0;a.g.stop();yE(a);a.f&&(3==a.f.D&&Ol(a.f),Hl(a.f));a.H=0}
k.sendMessage=function(a,b){var c={_sc:a};b&&Rb(c,b);this.g.isActive()||2==(this.f?this.f.D:0)?this.G.push(c):zE(this)&&(yE(this),Nl(this.f,c))};
k.fd=function(){this.g.reset();this.l=null;this.j=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)Nl(this.f,a[b])}this.J("handlerOpened")};
k.dd=function(a){var b=2==a&&401==this.f.Ba;4==a||b||this.g.start();this.J("handlerError",a)};
k.tc=function(a){if(!this.g.isActive())this.J("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
k.rd=function(){var a={v:2};this.C&&(a.gsessionid=this.C);0!=this.j&&(a.ui=""+this.j);0!=this.H&&(a.ui=""+this.H);this.l&&Rb(a,this.l);return a};
k.ed=function(a){"S"==a[0]?this.C=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),Hl(this.f)):this.J("handlerMessage",new tE(a[0],a[1]))};
function zE(a){return!!a.f&&3==a.f.D}
function yE(a){if(a.f){var b=a.M(),c=a.f.lb||{};b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.f.lb=c}}
function AE(a,b){(a.A.loungeIdToken=b)||a.g.stop()}
k.hh=function(){this.g.isActive();var a=this.f,b=0;a.X&&b++;a.ga&&b++;0==b&&this.connect(this.l,this.j)};function BE(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.i=this.j=0;this.f=null;this.hasNext=this.A=!1;this.H=this.g=this.C=this.F=0;this.l=NaN;this.G=!1;this.reset(a)}
function CE(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.A=!1;a.hasNext=!1;a.j=0;a.i=z();a.F=0;a.C=0;a.g=0;a.H=0;a.l=NaN;a.G=!1}
BE.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";CE(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.A=a.hasPrevious,this.hasNext=a.hasNext,this.j=a.playerTime,this.i=a.playerTimeAt,this.F=a.seekableStart,this.C=a.seekableEnd,this.g=a.duration,this.H=a.loadedTime,this.l=a.liveIngestionTime,this.G=
!isNaN(this.l))};
BE.prototype.isAdPlaying=function(){return 1081==this.playerState};
function DE(a,b){a.j=b;a.i=z()}
function EE(a){switch(a.playerState){case 1:case 1081:return(z()-a.i)/1E3+a.j;case -1E3:return 0}return a.j}
BE.prototype.getDuration=function(){return this.G?this.g+(1==this.playerState?(z()-this.i)/1E3:0):this.g};
function FE(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&CE(a)}
function GE(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Pb(a.f);b.hasPrevious=a.A;b.hasNext=a.hasNext;b.playerTime=a.j;b.playerTimeAt=a.i;b.seekableStart=a.F;b.seekableEnd=a.C;b.duration=a.g;b.loadedTime=a.H;b.liveIngestionTime=a.l;return b}
BE.prototype.clone=function(){return new BE(GE(this))};function HE(a,b){YC.call(this);this.D=0;this.i=a;this.l=[];this.j=new Cm;this.g=this.f=null;this.K=y(this.ng,this);this.C=y(this.Ib,this);this.F=y(this.mg,this);this.M=y(this.Ag,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Oc,this),IE(this))):c=3;0!=c&&(b?this.Oc(c):P(y(function(){this.Oc(c)},this),0));
var d=qE();d&&JE(this,d);this.subscribe("yt-remote-cast2-session-change",this.M)}
q(HE,YC);function KE(a){return new BE(a.i.getPlayerContextData())}
k=HE.prototype;k.play=function(){1==this.D?(this.f?this.f.play(null,Oa,LE(this,"play")):ME(this,"play"),NE(this,1,EE(KE(this))),this.J("remotePlayerChange")):OE(this,this.play)};
k.pause=function(){1==this.D?(this.f?this.f.pause(null,Oa,LE(this,"pause")):ME(this,"pause"),NE(this,2,EE(KE(this))),this.J("remotePlayerChange")):OE(this,this.pause)};
k.seekTo=function(a){if(1==this.D){if(this.f){var b=KE(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.f.seek(c,Oa,LE(this,"seekTo",{newTime:a}))}else ME(this,"seekTo",{newTime:a});NE(this,3,a);this.J("remotePlayerChange")}else OE(this,Ya(this.seekTo,a))};
k.stop=function(){if(1==this.D){this.f?this.f.stop(null,Oa,LE(this,"stopVideo")):ME(this,"stopVideo");var a=KE(this);a.index=-1;a.videoId="";CE(a);PE(this,a);this.J("remotePlayerChange")}else OE(this,this.stop)};
k.setVolume=function(a,b){if(1==this.D){var c=KE(this);if(this.g){if(c.volume!=a){var d=Math.round(a)/100;this.g.setReceiverVolumeLevel(d,y(function(){LC("CP","set receiver volume: "+d)},this),y(function(){this.U("failed to set receiver volume.")},this))}c.muted!=b&&this.g.setReceiverMuted(b,y(function(){LC("CP","set receiver muted: "+b)},this),y(function(){this.U("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);ME(this,"setVolume",e)}c.muted=b;c.volume=a;PE(this,c)}else OE(this,Ya(this.setVolume,a,b))};
k.setAudioTrack=function(a,b){if(1==this.D){var c=b.getLanguageInfo().getId();ME(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=KE(this);d.audioTrackId=c;PE(this,d)}else OE(this,Ya(this.setAudioTrack,a,b))};
k.Wc=function(a){1==this.D?ME(this,"addVideo",{videoId:a}):OE(this,Ya(this.Wc,a))};
k.Vc=function(a){1==this.D?ME(this,"addVideos",{listId:a}):OE(this,Ya(this.Vc,a))};
k.Xc=function(a){0==a.length?this.U("Ignore add videos request due to empty list"):1==this.D?ME(this,"addVideos",{videoIds:a.join(",")}):OE(this,Ya(this.Xc,a))};
k.me=function(a){1==this.D?ME(this,"removeVideo",{videoId:a}):OE(this,Ya(this.me,a))};
k.playVideo=function(a,b,c,d,e,f,g){var h=KE(this);c=c||0;var l={videoId:a,currentIndex:c};FE(h,a,c);void 0!==b&&(DE(h,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=Vj(g));ME(this,"setPlaylist",l);d||PE(this,h)};
k.nextVideo=function(a,b){if(1==this.D){if(a&&b){var c=KE(this);FE(c,a,b);PE(this,c)}ME(this,"next")}else OE(this,Ya(this.nextVideo,a,b))};
k.dispose=function(){if(3!=this.D){var a=this.D;this.D=3;this.J("proxyStateChange",a,this.D)}YC.prototype.dispose.call(this)};
k.L=function(){QE(this);this.i=null;this.j.clear();JE(this,null);YC.prototype.L.call(this)};
function IE(a){B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.l.push(this.i.subscribe(b,Ya(this.Ig,b),this))},a)}
function QE(a){B(a.l,function(b){this.i.unsubscribeByKey(b)},a);
a.l.length=0}
function OE(a,b){var c=a.j;50>c.f.length+c.g.length&&a.j.g.push(b)}
function NE(a,b,c){var d=KE(a);DE(d,c);-1E3!=d.playerState&&(d.playerState=b);PE(a,d)}
function ME(a,b,c){a.i.sendMessage(b,c)}
function PE(a,b){QE(a);a.i.setPlayerContextData(GE(b));IE(a)}
k.Oc=function(a){if((a!=this.D||2==a)&&3!=this.D&&0!=a){var b=this.D;this.D=a;this.J("proxyStateChange",b,a);if(1==a)for(;!this.j.isEmpty();)b=a=this.j,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
k.Ig=function(a,b){this.J(a,b)};
function JE(a,b){a.g&&(a.g.removeUpdateListener(a.K),a.g.removeMediaListener(a.C),a.Ib(null));a.g=b;a.g&&(LC("CP","Setting cast session: "+a.g.sessionId),a.g.addUpdateListener(a.K),a.g.addMediaListener(a.C),a.g.media.length&&a.Ib(a.g.media[0]))}
k.ng=function(a){if(!a)this.Ib(null),JE(this,null);else if(this.g.receiver.volume){a=this.g.receiver.volume;var b=KE(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)LC("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,PE(this,b)}};
k.Ib=function(a){LC("CP","Cast media: "+!!a);this.f&&this.f.removeUpdateListener(this.F);if(this.f=a)this.f.addUpdateListener(this.F),RE(this),this.J("remotePlayerChange")};
function RE(a){var b=a.f.media,c=a.f.customData;if(b&&c){var d=KE(a);b.contentId!=d.videoId&&LC("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;DE(d,a.f.getEstimatedTime());PE(a,d)}else LC("CP","No cast media video. Ignoring state update.")}
k.mg=function(a){a?(RE(this),this.J("remotePlayerChange")):this.Ib(null)};
k.Ag=function(){var a=qE();a&&JE(this,a)};
k.U=function(a){LC("CP",a)};
function LE(a,b,c){return y(function(d){this.U("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.U("Retrying "+b+" using MDx browser channel."),ME(this,b,c))},a)}
;function SE(a,b,c){YC.call(this);this.l=NaN;this.V=!1;this.K=this.F=this.P=this.T=NaN;this.M=[];this.j=this.C=this.i=this.N=this.f=null;this.ca=a;this.M.push(M(window,"beforeunload",y(this.sf,this)));this.g=[];this.N=new BE;this.Z=b.id;this.f=TE(this,c);this.f.subscribe("handlerOpened",this.sg,this);this.f.subscribe("handlerClosed",this.pg,this);this.f.subscribe("handlerError",this.qg,this);this.f.subscribe("handlerMessage",this.rg,this);AE(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.N.videoId;lD()&&Qs("yt-remote-session-video-id",d)},this)}
q(SE,YC);k=SE.prototype;
k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,h={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(h.currentTime=5>=l?0:l);e&&(h.playerParams=e);m&&(h.locationInfo=m);f&&(h.clickTrackingParams=f);c&&(h.listId=c);void 0!==g&&(h.currentIndex=g);c&&(this.N.listId=c);this.N.videoId=d;this.N.index=g||0;this.N.state=3;DE(this.N,l);this.j="UNSUPPORTED";UE("Connecting with setPlaylist and params: "+Vj(h));this.f.connect({method:"setPlaylist",params:Vj(h)},
a,pD())}else UE("Connecting without params"),this.f.connect({},a,pD());VE(this)};
k.dispose=function(){this.S()||(this.J("beforeDispose"),WE(this,3));YC.prototype.dispose.call(this)};
k.L=function(){XE(this);YE(this);ZE(this);Q(this.F);this.F=NaN;Q(this.K);this.K=NaN;this.i=null;N(this.M);this.M.length=0;this.f.dispose();YC.prototype.L.call(this);this.j=this.C=this.g=this.N=this.f=null};
function UE(a){LC("conn",a)}
k.sf=function(){this.ib(2)};
function TE(a,b){return new vE(AC(a.ca,"/bc"),b,!1,function(){return a.ze()})}
function WE(a,b){a.J("proxyStateChange",b)}
function VE(a){a.l=P(y(function(){UE("Connecting timeout");this.ib(1)},a),2E4)}
function XE(a){Q(a.l);a.l=NaN}
function ZE(a){Q(a.T);a.T=NaN}
function $E(a){YE(a);a.P=P(y(function(){aF(this,"getNowPlaying")},a),2E4)}
function YE(a){Q(a.P);a.P=NaN}
k.sg=function(){UE("Channel opened");this.V&&(this.V=!1,ZE(this),this.T=P(y(function(){UE("Timing out waiting for a screen.");this.ib(1)},this),15E3));
tD(xE(this.f),this.Z)};
k.pg=function(){UE("Channel closed");isNaN(this.l)?uD(!0):uD();this.dispose()};
k.qg=function(a){uD();isNaN(this.Db())?(UE("Channel error: "+a+" without reconnection"),this.dispose()):(this.V=!0,UE("Channel error: "+a+" with reconnection in "+this.Db()+" ms"),WE(this,2))};
function bF(a,b){b&&(XE(a),ZE(a));b==(zE(a.f)&&isNaN(a.l))?b&&(WE(a,1),aF(a,"getSubtitlesTrack")):b?(a.sd()&&a.N.reset(),WE(a,1),aF(a,"getNowPlaying"),cF(a)):a.ib(1)}
function dF(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.N.videoId&&(Lb(b.params)?a.N.f=null:a.N.f=b.params,a.J("remotePlayerChange"))}
function eF(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.N.listId=b.params.listId||a.N.listId;FE(a.N,c,d);a.J("remoteQueueChange")}
function fF(a,b){b.params=b.params||{};eF(a,b);gF(a,b);a.J("autoplayDismissed")}
function gF(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);DE(a.N,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.N.playerState&&(c=-1E3);a.N.playerState=c;c=Number(b.params.loadedTime);a.N.H=isNaN(c)?0:c;c=Number(b.params.duration);a.N.g=isNaN(c)?0:c;c=a.N;var d=Number(b.params.liveIngestionTime);c.l=d;c.G=isNaN(d)?!1:!0;c=a.N;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.C=isNaN(e)?0:e;1==a.N.playerState?
$E(a):YE(a);a.J("remotePlayerChange")}
function hF(a,b){if(-1E3!=a.N.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.N.playerState=c;c=parseInt(b.params.currentTime,10);DE(a.N,isNaN(c)?0:c);a.J("remotePlayerChange")}}
function iF(a,b){var c="true"==b.params.muted;a.N.volume=parseInt(b.params.volume,10);a.N.muted=c;a.J("remotePlayerChange")}
function jF(a,b){a.C=b.params.videoId;a.J("nowAutoplaying",parseInt(b.params.timeout,10))}
function kF(a,b){var c="true"==b.params.hasNext;a.N.A="true"==b.params.hasPrevious;a.N.hasNext=c;a.J("previousNextChange")}
k.rg=function(a){a.params?UE("Received: action="+a.action+", params="+Vj(a.params)):UE("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=bk(a.params.devices);this.g=ib(a,function(c){return new eD(c)});
a=!!mb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
bF(this,a);break;case "loungeScreenDisconnected":ub(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
bF(this,!1);break;case "remoteConnected":var b=new eD(bk(a.params.device));mb(this.g,function(c){return c.equals(b)})||qb(this.g,b);
break;case "remoteDisconnected":b=new eD(bk(a.params.device));ub(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":eF(this,a);break;case "nowPlaying":fF(this,a);break;case "onStateChange":gF(this,a);break;case "onAdStateChange":hF(this,a);break;case "onVolumeChanged":iF(this,a);break;case "onSubtitlesTrackChanged":dF(this,a);break;case "nowAutoplaying":jF(this,a);break;case "autoplayDismissed":this.J("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.J("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.j=
a.params.autoplayMode;this.J("autoplayModeChange",this.j);"DISABLED"==this.j&&this.J("autoplayDismissed");break;case "onHasPreviousNextChanged":kF(this,a);break;case "requestAssistedSignIn":this.J("assistedSignInRequested",a.params.authCode);break;default:UE("Unrecognized action: "+a.action)}};
k.gh=function(){if(this.i){var a=this.i;this.i=null;this.N.videoId!=a&&aF(this,"getNowPlaying")}};
k.nf=function(){var a=3;this.S()||(a=0,isNaN(this.Db())?zE(this.f)&&isNaN(this.l)&&(a=1):a=2);return a};
k.ib=function(a){UE("Disconnecting with "+a);XE(this);this.J("beforeDisconnect",a);1==a&&uD();wE(this.f,a);this.dispose()};
k.lf=function(){var a=this.N;this.i&&(a=this.N.clone(),FE(a,this.i,a.index));return GE(a)};
k.nh=function(a){var b=new BE(a);b.videoId&&b.videoId!=this.N.videoId&&(this.i=b.videoId,Q(this.F),this.F=P(y(this.gh,this),5E3));var c=[];this.N.listId==b.listId&&this.N.videoId==b.videoId&&this.N.index==b.index||c.push("remoteQueueChange");this.N.playerState==b.playerState&&this.N.volume==b.volume&&this.N.muted==b.muted&&EE(this.N)==EE(b)&&Vj(this.N.f)==Vj(b.f)||c.push("remotePlayerChange");this.N.reset(a);B(c,function(d){this.J(d)},this)};
k.sd=function(){var a=this.f.A.id,b=mb(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
k.Db=function(){var a=this.f;return a.g.isActive()?a.g.g-z():NaN};
k.ff=function(){return this.j||"UNSUPPORTED"};
k.gf=function(){return this.C||""};
k.wh=function(){if(!isNaN(this.Db())){var a=this.f.g,b=a.f;b.stop();b.ud();a.start()}};
function cF(a){Q(a.K);a.K=P(y(a.ib,a,1),864E5)}
function aF(a,b,c){c?UE("Sending: action="+b+", params="+Vj(c)):UE("Sending: action="+b);a.f.sendMessage(b,c)}
k.kh=function(a,b){aF(this,a,b);cF(this)};
k.ze=function(){var a=fo("SID","")||"",b=fo("SAPISID","")||"",c=fo("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=Pe(de(a),2);b=Pe(de(b),2);c=Pe(de(c),2);return Pe(de(a+","+b+","+c),2)};
SE.prototype.subscribe=SE.prototype.subscribe;SE.prototype.unsubscribeByKey=SE.prototype.ra;SE.prototype.getProxyState=SE.prototype.nf;SE.prototype.disconnect=SE.prototype.ib;SE.prototype.getPlayerContextData=SE.prototype.lf;SE.prototype.setPlayerContextData=SE.prototype.nh;SE.prototype.getOtherConnectedRemoteId=SE.prototype.sd;SE.prototype.getReconnectTimeout=SE.prototype.Db;SE.prototype.getAutoplayMode=SE.prototype.ff;SE.prototype.getAutoplayVideoId=SE.prototype.gf;SE.prototype.reconnect=SE.prototype.wh;
SE.prototype.sendMessage=SE.prototype.kh;SE.prototype.getXsrfToken=SE.prototype.ze;function lF(a){ZC.call(this,"ScreenServiceProxy");this.ea=a;this.f=[];this.f.push(this.ea.$_s("screenChange",y(this.Ah,this)));this.f.push(this.ea.$_s("onlineScreenChange",y(this.Eg,this)))}
q(lF,ZC);k=lF.prototype;k.na=function(a){return this.ea.$_gs(a)};
k.pc=function(a){return!!this.ea.$_c(a)};
k.get=function(a){return this.ea.$_g(a)};
k.start=function(){this.ea.$_st()};
k.add=function(a,b,c){this.ea.$_a(a,b,c)};
k.remove=function(a,b,c){this.ea.$_r(a,b,c)};
k.mc=function(a,b,c,d){this.ea.$_un(a,b,c,d)};
k.L=function(){for(var a=0,b=this.f.length;a<b;++a)this.ea.$_ubk(this.f[a]);this.f.length=0;this.ea=null;ZC.prototype.L.call(this)};
k.Ah=function(){this.J("screenChange")};
k.Eg=function(){this.J("onlineScreenChange")};
HD.prototype.$_st=HD.prototype.start;HD.prototype.$_gspc=HD.prototype.Bh;HD.prototype.$_gsppc=HD.prototype.Be;HD.prototype.$_c=HD.prototype.pc;HD.prototype.$_g=HD.prototype.get;HD.prototype.$_a=HD.prototype.add;HD.prototype.$_un=HD.prototype.mc;HD.prototype.$_r=HD.prototype.remove;HD.prototype.$_gs=HD.prototype.na;HD.prototype.$_gos=HD.prototype.Ae;HD.prototype.$_s=HD.prototype.subscribe;HD.prototype.$_ubk=HD.prototype.ra;function mF(){var a=K("MDX_CONFIG")||a;Vs();iD();nF||(nF=new zC(a?a.loungeApiHost:void 0),vD()&&(nF.f="/api/loungedev"));oF||(oF=x("yt.mdx.remote.deferredProxies_")||[],v("yt.mdx.remote.deferredProxies_",oF,void 0));pF();var b=qF();if(!b){var c=new HD(nF);v("yt.mdx.remote.screenService_",c,void 0);b=qF();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);dE(c,function(h){h?rF()&&rE(rF(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){xo("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!x("yt.mdx.remote.initialized_")&&(v("yt.mdx.remote.initialized_",!0,void 0),sF("Initializing: "+Vj(a)),tF.push(R("yt-remote-cast2-availability-change",function(){xo("yt-remote-receiver-availability-change")})),tF.push(R("yt-remote-cast2-receiver-selected",function(){uF();
xo("yt-remote-auto-connect","cast-selector-receiver")})),tF.push(R("yt-remote-cast2-receiver-resumed",function(){xo("yt-remote-receiver-resumed","cast-selector-receiver")})),tF.push(R("yt-remote-cast2-session-change",vF)),tF.push(R("yt-remote-connection-change",function(h){h?rE(rF(),"YouTube TV"):wF()||(rE(null,null),pE())})),d=xF(),a.isAuto&&(d.id+="#dial"),O("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),sF(" -- with channel params: "+Vj(d)),
yF(d),b.start(),rF()||zF())}
function AF(){wo(tF);tF.length=0;gg(BF);BF=null;oF&&(B(oF,function(a){a(null)}),oF.length=0,oF=null,v("yt.mdx.remote.deferredProxies_",null,void 0));
nF=null}
function CF(){var a=rF();if(!a)return null;var b=qF().na();return XC(b,a)}
function vF(a){sF("remote.onCastSessionChange_: "+TC(a));if(a){var b=CF();b&&b.id==a.id?rE(b.id,"YouTube TV"):(b&&DF(),EF(a,1))}else FF()&&DF()}
function DF(){sE()?mE().stopSession():jE("stopSession called before API ready.");var a=FF();a&&(a.disconnect(1),GF(null))}
function HF(){var a=FF();return a&&3!=a.getProxyState()?new HE(FF(),void 0):null}
function sF(a){LC("remote",a)}
function qF(){if(!BF){var a=x("yt.mdx.remote.screenService_");BF=a?new lF(a):null}return BF}
function rF(){return x("yt.mdx.remote.currentScreenId_")}
function IF(a){v("yt.mdx.remote.currentScreenId_",a,void 0)}
function uF(){v("yt.mdx.remote.connectData_",null,void 0)}
function FF(){return x("yt.mdx.remote.connection_")}
function GF(a){var b=FF();uF();a||IF("");v("yt.mdx.remote.connection_",a,void 0);oF&&(B(oF,function(c){c(a)}),oF.length=0);
b&&!a?xo("yt-remote-connection-change",!1):!b&&a&&xo("yt-remote-connection-change",!0)}
function wF(){var a=lD();if(!a)return null;var b=qF();if(!b)return null;b=b.na();return XC(b,a)}
function EF(a,b){CF()&&CF();IF(a.id);var c=new SE(nF,a,xF());c.connect(b,x("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){xo("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){FF()&&GF(null)});
GF(c)}
function zF(){var a=wF();a?(sF("Resume connection to: "+TC(a)),EF(a,0)):(uD(),pE(),sF("Skipping connecting because no session screen found."))}
var nF=null,oF=null,BF=null;function pF(){var a=xF();if(Lb(a)){a=kD();var b=Ts("yt-remote-session-name")||"",c=Ts("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};v("yt.mdx.remote.channelParams_",a,void 0)}}
function xF(){return x("yt.mdx.remote.channelParams_")||{}}
function yF(a){a?(Qs("yt-remote-session-app",a.app),Qs("yt-remote-session-name",a.name)):(Us("yt-remote-session-app"),Us("yt-remote-session-name"));v("yt.mdx.remote.channelParams_",a,void 0)}
var tF=[];var JF;function KF(a,b){this.type=a;this.videoIds=b||[]}
function LF(a,b,c){var d=[];0==d.length?c&&c():"string"===typeof a?MF(a,b,c):MF(d,b,c)}
function MF(a,b,c){var d="";"string"===typeof a&&(d=a,a=[d]);var e=new KF(0,a);JF&&NF(function(){d?JF.Wc(d):JF.Xc(a)},e,b,c)}
function OF(a,b,c){"string"===typeof a&&(a=[a]);var d=new KF(1,a);JF&&NF(function(){B(a,function(e){JF.me(e)})},d,b,c)}
function PF(a,b,c){var d=new KF(2);JF?NF(function(){JF.Vc(a)},d,b,c):c&&P(function(){c("Not implemented")},0)}
function QF(a,b){var c=new KF(2);JF?NF(function(){},c,a,b):b&&P(function(){b("Not implemented")},0)}
function RF(a){JF=a;JF.subscribe("remoteQueueChange",function(){S("queue-change",new KF(2))})}
function SF(){var a=HF();gg(JF);JF=null;a?RF(a):S("queue-change",new KF(2))}
function NF(a,b,c,d){JF&&1==JF.D?(a.call(r),c&&P(function(){c()},0),void 0!==b&&S("queue-change",b)):d&&P(function(){d()},0)}
var TF=[];function UF(a,b){var c=K("RESUME_COOKIE_NAME",void 0);if(c){var d=fo(c,"").split(",");d=hb(d,function(e){return 0!=e.indexOf(a)&&!!e.length});
4<=d.length&&d.shift();d.push(a+":"+b);eo(c,d.join(","),1814400,"/")}}
function VF(a){var b=K("RESUME_COOKIE_NAME",void 0);if(b){var c=fo(b,"").split(",");c=hb(c,function(d){return 0!=d.indexOf(a)});
0==c.length?go(b):eo(b,c.join(","),1814400,"/")}}
;function WF(){mF();TF.push(R("yt-remote-connection-change",SF));var a=HF();a&&RF(a);et("addto-watch-queue-button","click",XF);et("addto-tv-queue-button","click",XF);et("addto-watch-queue-button-success","click",YF);et("addto-watch-queue-menu-choice","click",ZF);$F.push(R("watch-queue-update",aG));aG()}
function bG(a){return"tv-queue"==L(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function XF(a){var b=bG(a);Hj(a,b,"addto-watch-queue-button-loading");var c=L(a,"video-ids"),d=L(a,"list-id"),e=fw(dw.getInstance(),a);d?PF(d,function(){cG(a)},function(f){dG(a,b,e,f)}):LF(c,function(){cG(a)},function(f){dG(a,b,e,f)})}
function ZF(a){var b=L(a,"action");b=eG[b];var c=L(a,"video-ids");c&&("string"===typeof c&&(c=[c]),0==c.length&&b(a))}
function YF(a){Hj(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=L(a,"video-ids"),c=L(a,"list-id"),d=fw(dw.getInstance(),a);c?QF(function(){fG(a)},function(e){dG(a,"addto-watch-queue-button-success",d,e)}):OF(b,function(){fG(a)},function(e){dG(a,"addto-watch-queue-button-success",d,e)})}
function cG(a){Hj(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=sn("ADDTO_WATCH_QUEUE_ADDED");iw(dw.getInstance(),a,b);L(a,"list-id")?S("watch-queue-addto-playlist-added"):S("watch-queue-addto-video-added")}
function fG(a){var b=bG(a);Hj(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?sn("ADDTO_WATCH_QUEUE"):sn("ADDTO_TV_QUEUE");iw(dw.getInstance(),a,b);L(a,"list-id")?S("watch-queue-addto-playlist-removed"):S("watch-queue-addto-video-removed")}
function dG(a,b,c,d){Hj(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||sn("ADDTO_WATCH_QUEUE_ERROR");iw(dw.getInstance(),a,d);P(function(){Hj(a,"addto-watch-queue-button-error",b);iw(dw.getInstance(),a,c)},5E3)}
function aG(){var a=xC();if(!Ab(gG,a)){gG=a;var b={};B(gG,function(c){b[c]=!0});
a=pf("addto-queue-button");B(a,function(c){var d=L(c,"video-ids");if(d&&"string"===typeof d){var e=bG(c);b[d]?(Hj(c,e,"addto-watch-queue-button-success"),d=sn("ADDTO_WATCH_QUEUE_ADDED")):(Hj(c,"addto-watch-queue-button-success",e),d="addto-watch-queue-button"==e?sn("ADDTO_WATCH_QUEUE"):sn("ADDTO_TV_QUEUE"));iw(dw.getInstance(),c,d)}})}}
var eG={"play-next":function(a){var b=L(a,"list-id");a=L(a,"video-ids");b?S("watch-queue-addto-playlist-play-next",b,a):S("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=L(a,"list-id");a=L(a,"video-ids");b?S("watch-queue-addto-playlist-play-now",b,a):S("watch-queue-addto-video-play-now",a)}},$F=[],gG=[];var hG=[];var iG=[],jG=!1;function kG(a){var b=K("YPC_LOADER_CSS",void 0),c=K("YPC_LOADER_JS",void 0);jG&&(c="www/ypc_core");iG.length||(iG.push(new Zg(function(d){Io(b,d)})),iG.push(new Zg(function(d){Co(c,d)})));
hh(iG).then(function(){a&&a()})}
;function lG(a,b,c,d,e,f,g,h,l,m,n,u,t){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(g||h)b={},g&&(b.jwt=g),h&&(b.encryptedPurchaseParams=h),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);m&&(a.transactionAction=m);n&&(a.transactionParams=n);u&&(a.transactionLoggingParams=u);t&&(a.gtmData=t);return a}
function mG(a,b){if(!a)return null;var c=L(a,"ypc-item-type"),d=L(a,"ypc-item-id"),e=L(a,"ypc-offer-id"),f=L(a,"coupon-code"),g=L(a,"ypc-from-purchase-ids"),h=L(a,"ypc-gtm-data"),l=L(a,"ypc-offer-jwt"),m=L(a,"ypc-offer-encrypted-purchase-params"),n=L(a,"ypc-irp"),u=L(a,"ypc-transaction-action"),t=L(a,"ypc-transaction-params"),w=L(a,"ypc-serialized-transaction-flow-logging-params");return lG(e,c,d,b,f,g,l,m,n,u,t,w,h)}
function nG(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,g={};g.ypc_it=a.itemData.itemType;g.ypc_ii=b;g.ypc_ft=c;e&&(g.ypc_irp=e);d&&(g.ypc_oi=d);f&&(g.ypc_ta=f);return g}
;function oG(a,b,c,d,e){if(JB())kG(function(){x("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=pG(f);fs(f)}}
function qG(a){if(JB())kG(function(){x("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=pG({});fs(b)}}
function rG(a,b){if(JB())kG(function(){x("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=pG({ypc_ft:a,ypc_irp:b});fs(c)}}
function sG(a,b,c){JB()?kG(function(){x("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=pG(b),fs(b))}
function tG(a,b){if(JB())kG(function(){x("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function pG(a){a=yn(window.location.href,a);var b=K("YPC_SIGNIN_URL",void 0),c=xn(b)["continue"];c=yn(c,{next:a});return yn(b,{"continue":c})}
;var uG=[],vG=[];function wG(a){if(a=a.currentTarget)xG(a),(a=L(a,"ytr-prepurchase-html"))&&qG(td(a))}
function yG(a){var b=a.currentTarget;if(b)if(a=L(b,"ypc-transaction-action"),b=mG(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&zG("inline-offer-button-click",b.itemData);sG(b,nG(b),a);setTimeout(Dr,0)}else en(Error("ypc-offer-button does not contain purchaseFlowData."))}
function AG(a){(a=a.currentTarget)&&BG(a)}
function CG(a){kG(a.callback)}
function DG(a){zG("container-button-click-attempt");var b=F("ypc-checkout-button",a.container);(a=F("ytr-purchase-button",a.container))?(b=H(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&BG(b)}
function EG(a){var b=a.f;a=b.itemId;var c=b.itemType;b=b.flowType;zG("paid-subscribe-button-click",{itemType:c,itemId:a});oG(c,a,b)}
function BG(a){var b=L(a,"ypc-item-type"),c=L(a,"ypc-item-id"),d=L(a,"ypc-flow-type");a=L(a,"ypc-irp")||void 0;JB()?zG("purchase-button-click",{itemId:c,itemType:b}):zG("signin-button-click");oG(b,c,d,a)}
function FG(a){var b=a.currentTarget;a=L(b,"ypc-item-type");b=L(b,"ypc-item-id");a&&b&&(zG("unsubscribe-button-click",{itemId:b,itemType:a}),tG(a,b))}
function GG(a){var b=a.f;a=b.itemType;b=b.itemId;zG("paid-unsubscribe-button-click",{itemType:a,itemId:b});tG(a,b)}
function zG(a,b){var c={};Rb(c,{label:a,pageName:K("PAGE_NAME")});b&&Rb(c,b);bt("ypc-checkout",Ld(c))}
function xG(a){var b;H(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":H(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=K(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function HG(a){a=a.currentTarget;var b=L(a,"tab-id");if(b){for(var c=pf("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=pf("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");E(b).classList.add("active-tab");a.classList.add("active-tab")}}
function IG(a){if(a=a.currentTarget){xG(a);var b=mG(a,"U");b?(kG(function(){x("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(Dr,0)):en(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
function JG(a){a=a.currentTarget;var b=L(a,"feedback-token");b&&(a={itct:L(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},Wn("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){d&&d.actions&&od(d.actions.url_endpoint.url,window,$b("_self"))},
R:a}))}
;var KG=D&&8<=document.documentMode||me&&Ce("1.9.2")||ne&&Ce("532.1"),LG=D&&!KG;function MG(){var a=NG,b=E("legacy-history-iframe");this.j=this.i=this.f=null;this.g=a;this.A=LG?b:null;this.H=window;this.l=this.H.location;this.C=this.l.href.split("#")[0];this.G=y(this.K,this)}
MG.prototype.F=function(a,b){this.i&&(N(this.i),delete this.i);this.j&&(Nn(this.j),delete this.j);if(a){this.f=OG(this);if(LG){var c=this.A.contentWindow.document.body;c&&c.innerHTML||PG(this,this.f)}b||this.g(this.f);KG?this.i=M(this.H,"hashchange",this.G):this.j=Mn(this.G,200)}};
MG.prototype.K=function(){if(LG){var a=(a=this.A.contentWindow.document.body)?rd(Wf(a).substring(1)):"";a!=this.f?(this.f=a,QG(this,a),this.g(a)):(a=OG(this),a!=this.f&&(this.f=a,PG(this,a),this.g(a)))}else a=OG(this),a!=this.f&&(this.f=a,this.g(a))};
function OG(a){a=a.l.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function QG(a,b){var c=a.C+"#"+b,d=a.l.href;d!=c&&d+"#"!=c&&nd(a.l,c)}
function PG(a,b){var c=a.A.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+qd(b);if(d!=e){d=window.document.title||"";bd("title");d=fd("title",{},d);bd("body");var f=fd("body",void 0,void 0);d=ed(d,f);c.open("text/html");c.write(Wc(d));Of(c.body,e);c.close()}}
MG.prototype.add=function(a,b,c){this.f=""+a;LG&&PG(this,a);QG(this,a);c||this.g(this.f)};function RG(){var a=NG;this.l=this.A=this.f=null;this.i=a;this.j=window;this.g=this.j.location;this.G=y(this.H,this)}
RG.prototype.C=function(a,b){this.l&&(N(this.l),delete this.l);this.A&&(Nn(this.A),delete this.A);a&&SG&&(this.f=this.g.href,b||this.i(this.f),this.l=M(this.j,"popstate",this.G))};
RG.prototype.H=function(a){var b=this.g.href;if((a=a.state)||b!=this.f)this.f=b,this.i(b,a)};
RG.prototype.add=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.pushState(b,"",a),this.f=a,c||this.i(a,b)};
RG.prototype.replace=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.replaceState(b,"",a),this.f=a,c||this.i(a,b)};
var SG=!!window.history.pushState&&(!ne||ne&&Ce("534.11"));function TG(){var a=UG("state");a.setEnabled.call(a,!0,!0)}
function VG(a){var b=null,c=UG();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function UG(a){var b=x("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new RG,RG.prototype.setEnabled=RG.prototype.C,RG.prototype.add=RG.prototype.add,RG.prototype.replace=RG.prototype.replace):(b=new MG,MG.prototype.setEnabled=MG.prototype.F,MG.prototype.add=MG.prototype.add,MG.prototype.replace=MG.prototype.add),v("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function NG(a,b){S("navigate",a,b)}
;var WG={fi:"ypc_cc",ji:"ypc_ft",li:"ypc_irp",mi:"ypc_ii",ni:"ypc_it"};function XG(){var a=xn(window.location.href);if(SG){Eb(WG,function(c){c in a&&delete a[c]});
var b=Nd(window.location.href.split("?",2)[0],a);TG();VG(b)}}
;function YG(a){jG=!!a;F("ypc-delayedloader-target")&&kG();a=xn(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,g=a.ypc_cc,h=a.ypc_ta;"channel"==K("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=K("CHANNEL_ID",void 0));if(f||c&&b)XG(),"start_payment"==h?(a=lG(e,b,c,d,g,null,"","",f,h),sG(a,nG(a),!0)):c&&b?oG(b,c,d,f,g):rG(d,f);uG.push(nn(document.body,"click",AG,"ypc-checkout-button"),nn(document.body,"click",yG,"ypc-offer-button"),nn(document.body,"click",IG,"ypc-complete-transaction-button"),
nn(document.body,"click",wG,"ytr-pre-purchase-button"),nn(document.documentElement,"click",FG,"ypc-unsubscribe-link"),nn(document.documentElement,"click",FG,"ypc-unsubscribe-button"),nn(document.documentElement,"click",HG,"offer-module-tab"),nn(document.documentElement,"click",JG,"yt-unlimited-more-offer-button"));vG.push(Ls(uA,CG),Ls(tA,DG),Ls(zA,EG),Ls(xA,GG))}
;window.onload=function(){rC()};
window.onunload=function(){K("TIMING_REPORT_ON_UNLOAD")&&FB(!0);if(AB(void 0))EB("_start",void 0)&&DB("aa",void 0,void 0);else if(!kB(void 0)){var a=K("CSI_SERVICE_NAME","youtube");K("TIMING_ACTION",void 0)&&a&&(DB("aa",void 0,void 0),CB("ap",1,void 0),CB("yt_fss","u",void 0),GB(void 0))}if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"!=aC){aC="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";a=-1;$B&&(a=Math.round(ap()-$B));var b=x("_fact",window);vp("foregroundHeartbeat",{firstActivityMs:String(null==
b||-1==b?-1:Math.max(z()-b,0)),clientDocumentNonce:Wr,index:String(ZB),lastEventDeltaMs:String(a),trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"},Br);v("_fact",-1,window);ZB++;$B=ap()}a=(a=$r(0))?new Xr({veType:a,youtubeData:void 0}):null;(b=bs())&&a&&Bv(b,[a]);mp();a=vC;b=0;for(var c=a.length;b<c;b++)Ro(a[b]);vC.length=0;qC();tC&&(tC.cancel(),tC=null);(a=K("PAGE_NAME",void 0))&&xo("dispose-"+a);xo("dispose");xo("pageunload")};
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g;if((g=(g=Lm.EXPERIMENT_FLAGS)?g.log_window_onerror_fraction:void 0)&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,l=g.length;h<l;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new Ar(g),e.name="UnhandledWindowError",
e.message=g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Mr(e):Nr(e))};
window.yt=window.yt||{};v("_gel",E,void 0);v("_hasclass",H,void 0);v("_addclass",J,void 0);v("_removeclass",Ej,void 0);v("_toggleclass",Ij,void 0);v("_showdiv",Zs,void 0);v("_hidediv",$s,void 0);v("_ajax",Xn,void 0);v("yt.style.show",Zs,void 0);v("yt.style.hide",$s,void 0);v("goog.bind",y,void 0);v("goog.dom.getElementByClass",F,void 0);v("goog.dom.getElementsByTagNameAndClass",nf,void 0);v("goog.dom.getFirstElementChild",Jf,void 0);v("goog.array.forEach",B,void 0);v("goog.array.indexOf",fb,void 0);
v("goog.array.contains",pb,void 0);v("yt.setConfig",Mm,void 0);v("yt.config.set",Mm,void 0);v("yt.getConfig",K,void 0);v("yt.config.get",K,void 0);v("yt.logging.errors.log",Mr,void 0);v("yt.setTimeout",P,void 0);v("yt.setInterval",Mn,void 0);v("yt.clearTimeout",Q,void 0);v("yt.clearInterval",Nn,void 0);v("yt.timers.setTimeout",P,void 0);v("yt.timers.setInterval",Mn,void 0);v("yt.timers.clearTimeout",Q,void 0);v("yt.timers.clearInterval",Nn,void 0);v("yt.setMsg",rn,void 0);v("yt.setGoogMsg",tn,void 0);
v("yt.getMsg",sn,void 0);v("yt.msgs.set",rn,void 0);v("yt.msgs.setGoog",tn,void 0);v("yt.msgs.get",sn,void 0);v("yt.events.listen",M,void 0);v("yt.events.unlisten",function(a,b,c,d){d=void 0===d?{}:d;(a=jn(a,b,c,d))&&N(a)},void 0);
v("yt.events.stopPropagation",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()},void 0);
v("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
v("yt.events.getTarget",mn,void 0);v("yt.events.clear",function(){for(var a in gn)N(a)},void 0);
v("yt.events.Event",Sm,void 0);Sm.prototype.preventDefault=Sm.prototype.preventDefault;Sm.prototype.stopPropagation=Sm.prototype.stopPropagation;v("yt.pubsub.subscribe",R,void 0);v("yt.pubsub.unsubscribeByKey",wo,void 0);v("yt.pubsub.publish",S,void 0);v("yt.pubsub2.publish",U,void 0);
R("init",function(){By=new Uo(yy);Iy.push(M(window,"resize",Cy));Iy.push(M(window,"scroll",Fy));J(document.body,"page-loaded");var a=Uw.getInstance(),b=Xw(119),c=1<window.devicePixelRatio;document.body&&H(document.body,"exp-invert-logo")&&(c&&!H(document.body,"inverted-hdpi")?J(document.body,"inverted-hdpi"):!c&&H(document.body,"inverted-hdpi")&&Ej(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=Yw(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Tw[b]:(c=d.toString(16),Tw[b]=
c.toString());a.save()}});
R("dispose",Vs);R("init",Vs);tx("keyboard");v("yt.uix.FormInput.selectOnChangeActionIE",function(a){mu.getInstance().Ua(a)},void 0);
R("init",function(){pu()});
v("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";bc.test(c)?d="rtl":bc.test(c)||(d="ltr");b.dir=d},void 0);
v("yt.style.toggle",at,void 0);v("yt.style.setDisplayed",Ws,void 0);v("yt.style.isDisplayed",Xs,void 0);v("yt.style.setVisible",function(a,b){if(a=E(a))a.style.visibility=b?"visible":"hidden"},void 0);
v("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return Wn(a,{format:b.format,method:b.method,postBody:b.postBody,onSuccess:b.onSuccess})},void 0);
v("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);v("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);v("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);v("yt.net.ajax.getRootNode",co,void 0);v("yt.net.ajax.getNodeValue",bo,void 0);v("yt.net.scriptloader.load",Co,void 0);v("yt.net.styleloader.load",Io,void 0);
v("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c.item(e);e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=Mj(d);if(null!=d)for(var g,h=0;g=d[h];h++)Lj(b,f,g);break;default:g=Mj(d),null!=g&&Lj(b,f,g)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,Lj(b,f,d.value),Lj(b,f+".x","0"),
Lj(b,f+".y","0"));return b.join("&")},void 0);
v("yt.uri.buildQueryData",Ld,void 0);v("yt.uri.appendQueryData",Nd,void 0);v("yt.www.feedback.init",jx,void 0);v("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=mx(b),e=nx();O("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,Im(e,d.productData)):Bh(c,d).i(e);return!1}catch(f){return!0}},void 0);
v("yt.www.feedback.startHelp",lx,void 0);v("yt.www.feedback.displayLink",px,void 0);R("init",jx);R("init",px);R("dispose",function(){wo(hx);N(fx);hx.length=0;fx.length=0;gx={}});
v("yt.net.cookies.set",eo,void 0);v("yt.net.cookies.get",fo,void 0);v("yt.net.cookies.remove",go,void 0);v("yt.window.redirect",fs,void 0);
v("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof sc?a:zc("undefined"!=typeof a.href?a.href:String(a))||Bc;var f=c.target||a.target,g=[],h;for(h in c)switch(h){case "width":case "height":case "top":case "left":g.push(h+"="+c[h]);break;case "target":case "noopener":case "noreferrer":break;default:g.push(h+"="+(c[h]?1:0))}g=g.join(",");fe()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(g=Bf("A"),kd(g,e),g.setAttribute("target",f),c.noreferrer&&g.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(c),d={}):c.noreferrer?(d=od("",d,f,g),c=uc(e),d&&(le&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=hd($b("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+sd(c)+'">'),(e=d.document)&&e.write&&(e.write(Wc(c)),
e.close()))):(d=od(e,d,f,g))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
v("yt.window.navigate",gs,void 0);R("init",function(){Rv.getInstance().lc();bx.getInstance().lc()});
R("init",function(){var a=!!F("guide-module-loading");window.spf&&spf.load&&a&&(K("GUIDE_DELAY_LOAD")||Ax(),Bx.push(R("appbar-show-guide",Ax)))});
mw(lt);mw(Nu);mw(Zt);mw(Qu);mw(Ru);mw(mu);mw($t);mw(Ft);mw(Tu);mw(Kt);mw(Cv);mw(Fu);mw(Hu);mw(Nv);mw(Ov);mw(Pv);mw(KB);mw(bx);mw(Rv);mw(RB);mw(WB);mw($v);mw(bw);mw(dw);
v("yt.player.instances.create",function(a,b){var c=a;var d=void 0===d?!0:d;c="string"===typeof c?mf(c):c;var e=Bs+"_"+Ta(c),f=As[e];f&&d?b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(b.args||null):f.loadNewVideoConfig(b):(f=new ks(c,e,b,void 0),As[e]=f,S("player-added",f.api),fg(f,Ya(Cs,f)));c=f.api;return c},void 0);
v("yt.www.watch.player.seekTo",function(){},void 0);
v("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=K("PAGE_NAME"))&&"watch"!=b?(Nr(new Ar("getPlayer called on:",b)),b=null):b=Ds();if(b&&b.isReady()){a&&Mm("RESUME_COOKIE_NAME",a);a=K("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?VF(a):UF(a,Math.floor(b))}},void 0);
v("yt.www.lists.data.addto.saveToWatchLater",gy,void 0);v("yt.www.lists.addtowatchlater.init",ly,void 0);R("init",ly);R("dispose",function(){ft("addto-watch-later-button","click",my);ft("addto-watch-later-button-success","click",ny);ft("addto-watch-later-button-remove","click",oy);ft("addto-watch-later-button-sign-in","click",py);N(jy);jy=[]});
v("yt.www.watchqueue.addtowatchqueue.init",WF,void 0);R("init",WF);R("dispose",function(){wo($F);$F.length=0;gG=[];ft("addto-watch-queue-button","click",XF);ft("addto-tv-queue-button","click",XF);ft("addto-watch-queue-button-success","click",YF);ft("addto-watch-queue-menu-choice","click",ZF);gg(JF);JF=null;wo(TF);TF.length=0;AF()});
v("yt.dom.datasets.get",L,void 0);v("yt.dom.datasets.set",Nm,void 0);v("yt.abuse.player.botguardInitialized",x("yt.abuse.player.botguardInitialized")||Sr,void 0);v("yt.abuse.player.invokeBotguard",x("yt.abuse.player.invokeBotguard")||Tr,void 0);v("yt.abuse.dclkstatus.checkDclkStatus",x("yt.abuse.dclkstatus.checkDclkStatus")||So,void 0);v("yt.player.exports.navigate",x("yt.player.exports.navigate")||hs,void 0);v("yt.util.activity.init",x("yt.util.activity.init")||Wo,void 0);
v("yt.util.activity.getTimeSinceActive",x("yt.util.activity.getTimeSinceActive")||Zo,void 0);v("yt.util.activity.setTimestamp",x("yt.util.activity.setTimestamp")||Xo,void 0);
var ZG=R("init",function(){Ry();x("yt.www.page.visibilitymonitor.delegateByClass")(null,x("yt.www.page.visibilitymonitor.States.VISIBLE"),IB,"yt-thumb");x("yt.www.page.visibilitymonitor.delegateByClass")(null,x("yt.www.page.visibilitymonitor.States.VISIBLE"),IB,"yt-uix-simple-thumb-wrap");x("yt.www.page.visibilitymonitor.refresh")();DB("tdl");wo(ZG)});
R("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<hG.length;c++)document.forms[a].name==hG[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==K("XSRF_FIELD_NAME")&&(b=!0);b||(b=K("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",K("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
v("yt.www.ads.MastheadAd",Zw,void 0);Zw.prototype.collapse_ad=Zw.prototype.Me;Zw.prototype.expand_ad=Zw.prototype.Kh;Zw.prototype.userCollapsePremiumYva=Zw.prototype.xe;v("yt.www.feed.ui.ads.workaroundIE",function(a){!dx&&cx&&(dx=!0,P(function(){a.focus()},0))},void 0);
v("yt.www.feed.ui.ads.workaroundLoad",function(){cx=!0},void 0);
v("yt.net.ping.send",no,void 0);v("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+qd(K("DBLCLK_ADVERTISER_ID"))+";type="+qd(a)+";cat="+qd(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+qd(d)+"="+qd(c[d]);a+=";num="+z();c=Bf("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
v("yt.tracking.track",bt,void 0);v("yt.tracking.share",function(a,b,c,d,e,f){var g={};b&&(g.v=b);c&&(g.list=c);d&&(g.url=d);a={name:a,locale:e,feature:f};for(var h in g)a[h]=g[h];g=Nd("/sharing_services",a);no(g)},void 0);
v("yt.www.subscription.autoaction.continueAction",function(a,b,c){U(Kz,new Ez(a,{itemType:b,itemId:c}))},void 0);
R("init",function(a){a=!!a;AA.push(Ls(Kz,BA),Ls(Pz,EA));a||AA.push(Ls(Oz,BA),Ls(Tz,EA),Ls(Hz,HA),Ls(Iz,JA),Ls(Wz,LA),Ls(wA,NA),Ls(yA,PA),Ls(vA,OA))});
R("init",function(){Zz.push(Ls(Jz,kA),Ls(Yz,dA),Ls(Xz,cA))});
R("dispose",function(){Ps(Zz);Zz.length=0;N($z);$z.length=0;su&&(Ff(su),su=null)});
R("init",function(){});
R("dispose",function(){N(TA);TA.length=0;Object.keys(SA).forEach(function(a){Ff(SA[a])});
SA={}});
R("init",function(){K("CREATE_CHANNEL_LIGHTBOX")&&Aw();if(K("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=xw(Cw);var b=K("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=K("IDENTITY_PROMPT_AUTHUSER",void 0),d=K("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}K("SHOW_MCNA_YPE_MODAL")&&new Sw("")});
R("dispose",function(){});
v("yt.www.account.AddNewChannelLoader.init",function(){var a=xw(yw);a.l=K("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(K("ADD_NEW_CHANNEL_CSS_URL",void 0),K("ADD_NEW_CHANNEL_JS_URL",void 0),!a.l,E("body-container"),"add-secondary-channel")},void 0);
v("yt.www.account.CreateChannelLoader.show",function(a,b,c,d){Aw(!0,a,b,c,d)},void 0);
R("init",YG);v("yt.ypc.bootstrap.init",YG,void 0);var $G=R("init",function(){K("PAGEFRAME_JS")&&Co(K("PAGEFRAME_JS",void 0),function(){x("ytbin.www.pageframe.setup")()});
wo($G)});}).call(this);
