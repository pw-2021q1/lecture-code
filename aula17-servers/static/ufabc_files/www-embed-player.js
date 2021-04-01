(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function oa(){this.m=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.j=0;this.u=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.o=function(a){this.i=a};
function qa(a,b){a.u={va:b,Pa:!0};a.h=a.j||a.A}
oa.prototype.return=function(a){this.u={return:a};this.h=this.A};
function x(a,b,c){a.h=c;return{value:b}}
function ra(a){a.j=0;var b=a.u.va;a.u=null;return b}
function sa(a){this.h=new oa;this.i=a}
function ta(a,b){pa(a.h);var c=a.h.l;if(c)return ua(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return va(a)}
function ua(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.m=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),va(a)}a.h.l=null;d.call(a.h,f);return va(a)}
function va(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.m=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.m=!1;if(a.h.u){b=a.h.u;a.h.u=null;if(b.Pa)throw b.va;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function wa(a){this.next=function(b){pa(a.h);a.h.l?b=ua(a,a.h.l.next,b,a.h.o):(a.h.o(b),b=va(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=ua(a,a.h.l["throw"],b,a.h.o):(qa(a.h,b),b=va(a));return b};
this.return=function(b){return ta(a,b)};
this[Symbol.iterator]=function(){return this}}
function xa(a,b){b=new wa(new sa(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function ya(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
function za(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Aa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)za(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Aa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(p){k||(k=!0,l.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.u)}};
b.prototype.J=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.S(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.m(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.T(h,g):this.m(g)};
b.prototype.u=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.C()};
b.prototype.K=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.S=function(g){var h=this.l();g.ca(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(y){p(y)}}:r}
var l,p,n=new b(function(q,r){l=q;p=r});
this.ca(k(g,l),k(h,p));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),p=l.next();!p.done;p=l.next())d(p.value).ca(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,p){function n(w){return function(y){q[w]=y;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ca(n(q.length-1),p),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ya(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push([d,b[d]]);return c}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ba(this,function(b,c){return c})}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!za(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p.delete(k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!za(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&za(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.i[l];if(p&&za(h.i,l))for(h=0;h<p.length;h++){var n=p[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:p,index:h,G:n}}return{id:l,list:p,index:-1,G:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.G?l.G.value=k:(l.G={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.G),this.h.previous.next=l.G,this.h.previous=l.G,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.G&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.G.previous.next=h.G.next,h.G.next.previous=h.G.previous,h.G.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).G};
e.prototype.get=function(h){return(h=d(this,h).G)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ca(a){if(a&&a!=z)return Da(a.document);null===Ea&&(Ea=Da(z.document));return Ea}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ea=null;function Da(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function B(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ga(){}
function Ha(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E=Na:E=Oa;return E.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Qa(a,b){A(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Sa,Error);Sa.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ua(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function $a(a,b){b=Va(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(){var a=H("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;function ob(){if(void 0===nb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(c){z.console&&z.console.error(c.message)}nb=a}else nb=a}return nb}
;function pb(a,b){this.h=b===qb?a:""}
m=pb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h+""};
function rb(a){if(a instanceof pb&&a.constructor===pb)return a.h;Ia(a);return"type_error:TrustedResourceUrl"}
var qb={};var sb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function tb(a,b){if(b)a=a.replace(ub,"&amp;").replace(vb,"&lt;").replace(wb,"&gt;").replace(xb,"&quot;").replace(yb,"&#39;").replace(zb,"&#0;");else{if(!Ab.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;"))}return a}
var ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function I(a,b){this.h=b===Bb?a:""}
m=I.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h.toString()};
function Cb(a){if(a instanceof I&&a.constructor===I)return a.h;Ia(a);return"type_error:SafeUrl"}
var Db=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Eb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Gb(a){if(a instanceof I)return a;a="object"==typeof a&&a.W?a.V():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return new I(a,Bb)}
var Bb={},Hb=new I("about:invalid#zClosurez",Bb);var Ib;a:{var Jb=z.navigator;if(Jb){var Kb=Jb.userAgent;if(Kb){Ib=Kb;break a}}Ib=""}function J(a){return-1!=Ib.indexOf(a)}
;function Lb(a,b,c){this.h=c===Mb?a:"";this.i=b}
m=Lb.prototype;m.ka=!0;m.ha=function(){return this.i};
m.W=!0;m.V=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Mb={};function Nb(a,b){var c=ob();a=c?c.createHTML(a):a;return new Lb(a,b,Mb)}
;function Ob(a,b){b=b instanceof I?b:Gb(b);a.href=Cb(b)}
function Pb(a,b){a.src=rb(b);(b=Ca(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
;function Qb(a){return a=tb(a,void 0)}
function Rb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Sb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Tb(a){return a?decodeURI(a):a}
function Ub(a){return Tb(a.match(Sb)[3]||null)}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
function Xb(a,b){b=Wb(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var Yb=/#|$/;function Zb(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function $b(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=Ga;var bc=J("Opera"),cc=J("Trident")||J("MSIE"),dc=J("Edge"),ec=J("Gecko")&&!(-1!=Ib.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),fc=-1!=Ib.toLowerCase().indexOf("webkit")&&!J("Edge");function gc(){var a=z.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Ib;if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var lc=hc,mc;if(z.document&&cc){var nc=gc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=$b()||J("iPod"),qc=J("iPad"),rc=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!($b()||J("iPad")||J("iPod"));var sc={},tc=null;
function uc(a){var b=3;Ja(a);void 0===b&&(b=0);if(!tc){tc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===tc[h]&&(tc[h]=g)}}}b=sc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var vc=!cc||9<=Number(oc);function wc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=wc.prototype;m.clone=function(){return new wc(this.x,this.y)};
m.equals=function(a){return a instanceof wc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function xc(a,b){this.width=a;this.height=b}
m=xc.prototype;m.clone=function(){return new xc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function yc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function zc(a,b){cb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ac.hasOwnProperty(d)?a.setAttribute(Ac[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Bc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!vc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Qb(g.name),'"');if(g.type){f.push(' type="',Qb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Cc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):zc(f,g));2<d.length&&Dc(e,f,d);return f}
function Dc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ja(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?ab(f):f,d)}}}
function Cc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ec(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fc(a){var b=Gc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Hc(){var a=[];Fc(function(b){a.push(b)});
return a}
var Gc={rb:"allow-forms",sb:"allow-modals",tb:"allow-orientation-lock",ub:"allow-pointer-lock",vb:"allow-popups",wb:"allow-popups-to-escape-sandbox",xb:"allow-presentation",yb:"allow-same-origin",zb:"allow-scripts",Ab:"allow-top-navigation",Bb:"allow-top-navigation-by-user-activation"},Ic=Ua(function(){return Hc()});
function Jc(){var a=Cc(document,"IFRAME"),b={};G(Ic(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Kc(a){Lc();var b=ob();a=b?b.createScriptURL(a):a;return new pb(a,qb)}
var Lc=Ga;function Mc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Nc=(new Date).getTime();function Oc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Pc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var q=g,r=0;64>r;r+=4)q[r/4]=n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3];for(r=16;80>r;r++)n=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],y=e[2],C=e[3],T=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var M=C^w&(y^C);var X=1518500249}else M=w^y^C,X=1859775393;else 60>r?(M=w&y|C&(w|y),X=2400959708):(M=w^y^C,X=3395469782);M=((n<<5|n>>>27)&4294967295)+M+T+X+q[r]&4294967295;T=C;C=y;y=(w<<30|w>>>2)&4294967295;w=n;n=M}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+T&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var r=[],w=0,y=n.length;w<y;++w)r.push(n.charCodeAt(w));n=r}q||(q=n.length);r=0;if(0==l)for(;r+64<q;)b(n.slice(r,r+64)),r+=64,p+=64;for(;r<q;)if(f[l++]=n[r++],p++,64==l)for(l=0,b(f);r+64<q;)b(n.slice(r,r+64)),r+=64,p+=64}
function d(){var n=[],q=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)n[q++]=e[r]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ea:function(){for(var n=d(),q="",r=0;r<n.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(n[r]/16))+"0123456789ABCDEF".charAt(n[r]%16);return q}}}
;function Qc(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Rc(Oc(d),a,c||null)].join(" "):null}
function Rc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Sc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Sc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Sc(a){var b=Pc();b.update(a);return b.Ea().toLowerCase()}
;var Tc={};function Uc(a){this.h=a||{cookie:""}}
m=Uc.prototype;m.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ma:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Dk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vc=new Uc("undefined"==typeof document?null:document);function Wc(a){return!!Tc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Xc(a,b,c,d){(a=z[a])||(a=(new Uc(document)).get(b));return a?Qc(a,c,d):null}
function Yc(a){var b=void 0===b?!1:b;var c=Oc(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;Wc(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new Uc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Wc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new Uc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Qc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Wc(b)&&((b=Xc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Xc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Zc(){this.h=[];this.i=-1}
Zc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
Zc.prototype.get=function(a){return!!this.h[a]};
function $c(a){-1==a.i&&(a.i=Ya(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function ad(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ad.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function bd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var cd;
function dd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Cc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=E(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ra;c.ra=null;e()}};
return function(e){d.next={ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function ed(a){z.setTimeout(function(){throw a;},0)}
;function fd(){this.i=this.h=null}
fd.prototype.add=function(a,b){var c=gd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gd=new ad(function(){return new hd},function(a){return a.reset()});
function hd(){this.next=this.scope=this.h=null}
hd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hd.prototype.reset=function(){this.next=this.scope=this.h=null};function id(a,b){jd||kd();ld||(jd(),ld=!0);md.add(a,b)}
var jd;function kd(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);jd=function(){a.then(nd)}}else jd=function(){var b=nd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!J("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(cd||(cd=dd()),cd(b)):z.setImmediate(b)}}
var ld=!1,md=new fd;function nd(){for(var a;a=md.remove();){try{a.h.call(a.scope)}catch(b){ed(b)}bd(gd,a)}ld=!1}
;function od(){this.i=-1}
;function pd(){this.i=64;this.h=[];this.m=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.u=this.j=0;this.reset()}
F(pd,od);pd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.u=this.j=0};
function qd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
pd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)qd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){qd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){qd(this,e);f=0;break}}this.j=f;this.u+=b}};
pd.prototype.digest=function(){var a=[],b=8*this.u;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;qd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function rd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=sd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,td[c])c=td[c];else{c=String(c);if(!td[c]){var f=/function\s+([^\(]+)/m.exec(c);td[c]=f?f[1]:"[Anonymous]"}c=td[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function sd(a,b){b||(b={});b[ud(a)]=!0;var c=a.stack||"";(a=a.wk)&&!b[ud(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=sd(a,b));return c}
function ud(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var td={};function vd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ja(d)?wd.apply(null,d):vd(d)}}
;function L(){this.h=this.h;this.u=this.u}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.B())};
function xd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
L.prototype.B=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function yd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ad(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yd(a).match(/\S+/g)||[],b=0<=Va(a,b));return b}
function Bd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ad(a,"inverted-hdpi")&&zd(a,Wa(a.classList?a.classList:yd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Cd="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Dd(){}
Dd.prototype.next=function(){throw Cd;};
Dd.prototype.L=function(){return this};
function Ed(a){if(a instanceof Dd)return a;if("function"==typeof a.L)return a.L(!1);if(Ja(a)){var b=0,c=new Dd;c.next=function(){for(;;){if(b>=a.length)throw Cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Fd(a,b){if(Ja(a))try{G(a,b,void 0)}catch(c){if(c!==Cd)throw c;}else{a=Ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Cd)throw c;}}}
function Gd(a){if(Ja(a))return ab(a);a=Ed(a);var b=[];Fd(a,function(c){b.push(c)});
return b}
;function Hd(a,b){this.i={};this.h=[];this.N=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hd)for(c=Id(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Id(a){Jd(a);return a.h.concat()}
m=Hd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Kd;Jd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Kd(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.N=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.N++,this.h.length>2*this.j&&Jd(this),!0):!1};
function Jd(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.N++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Id(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Hd(this)};
m.L=function(a){Jd(this);var b=0,c=this.N,d=this,e=new Dd;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Cd;var f=d.h[b++];return a?f:d.i[f]};
return e};var Ld=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ga,b),z.removeEventListener("test",Ga,b)}catch(c){}return a}();function Md(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Md.prototype.stopPropagation=function(){this.j=!0};
Md.prototype.preventDefault=function(){this.defaultPrevented=!0};function Nd(a,b){Md.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(Nd,Md);var Od={2:"touch",3:"pen",4:"mouse"};
Nd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ec){a:{try{ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Od[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Nd.H.preventDefault.call(this)};
Nd.prototype.stopPropagation=function(){Nd.H.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Nd.prototype.preventDefault=function(){Nd.H.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pd="closure_listenable_"+(1E6*Math.random()|0);var Qd=0;function Rd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Qd;this.Y=this.ba=!1}
function Sd(a){a.Y=!0;a.listener=null;a.h=null;a.src=null;a.da=null}
;function Td(a){this.src=a;this.listeners={};this.h=0}
Td.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ud(a,b,d,e);-1<g?(b=a[g],c||(b.ba=!1)):(b=new Rd(b,this.src,f,!!d,e),b.ba=c,a.push(b));return b};
Td.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ud(e,b,c,d);return-1<b?(Sd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Vd(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(Sd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ud(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return-1}
;var Wd="closure_lm_"+(1E6*Math.random()|0),Xd={},Yd=0;function Zd(a,b,c,d,e){if(d&&d.once)$d(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Zd(a,b[f],c,d,e);else c=ae(c),a&&a[Pd]?be(a,b,c,D(d)?!!d.capture:!!d,e):ce(a,b,c,!1,d,e)}
function ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=de(a);h||(a[Wd]=h=new Td(a));c=h.add(b,c,d,g,f);if(!c.h){d=ee();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Ld||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yd++}}
function ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=ge;return a}
function $d(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$d(a,b[f],c,d,e);else c=ae(c),a&&a[Pd]?a.i.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):ce(a,b,c,!0,d,e)}
function he(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=ae(c),a&&a[Pd])?a.i.remove(String(b),c,d,e):a&&(a=de(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ud(b,c,d,e)),(c=-1<a?b[a]:null)&&ie(c))}
function ie(a){if("number"!==typeof a&&a&&!a.Y){var b=a.src;if(b&&b[Pd])Vd(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yd--;(c=de(b))?(Vd(c,a),0==c.h&&(c.src=null,b[Wd]=null)):Sd(a)}}}
function fe(a){return a in Xd?Xd[a]:Xd[a]="on"+a}
function ge(a,b){if(a.Y)a=!0;else{b=new Nd(b,this);var c=a.listener,d=a.da||a.src;a.ba&&ie(a);a=c.call(d,b)}return a}
function de(a){a=a[Wd];return a instanceof Td?a:null}
var je="__closure_events_fn_"+(1E9*Math.random()>>>0);function ae(a){if("function"===typeof a)return a;a[je]||(a[je]=function(b){return a.handleEvent(b)});
return a[je]}
;function ke(){L.call(this);this.i=new Td(this);this.F=this;this.m=null}
F(ke,L);ke.prototype[Pd]=!0;ke.prototype.addEventListener=function(a,b,c,d){Zd(this,a,b,c,d)};
ke.prototype.removeEventListener=function(a,b,c,d){he(this,a,b,c,d)};
function le(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}a=a.F;c=b.type||b;"string"===typeof b?b=new Md(b,a):b instanceof Md?b.target=b.target||a:(e=b,b=new Md(c,a),mb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=me(g,c,!0,b)&&e}b.j||(g=b.h=a,e=me(g,c,!0,b)&&e,b.j||(e=me(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=me(g,c,!1,b)&&e}
ke.prototype.B=function(){ke.H.B.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Sd(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function be(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function me(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Y&&g.capture==c){var h=g.listener,k=g.da||g.src;g.ba&&Vd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ne(a){var b=[];oe(new pe,a,b);return b.join("")}
function pe(){}
function oe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),oe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qe(d,c),c.push(":"),oe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var re={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},se=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function qe(a,b){b.push('"',a.replace(se,function(c){var d=re[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),re[c]=d);return d}),'"')}
;function te(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){ue(b,2,c)},function(c){ue(b,3,c)})}catch(c){ue(this,3,c)}}
function ve(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
ve.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var we=new ad(function(){return new ve},function(a){a.reset()});
function xe(a,b,c){var d=we.get();d.i=a;d.onRejected=b;d.context=c;return d}
function ye(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return ze(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
N.prototype.$goog_Thenable=!0;function Ae(a,b){return ze(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.h){var b=new Be(a);id(function(){Ce(this,b)},this)}};
function Ce(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ce(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):De(c),Ee(c,e,3,b)))}a.j=null}else ue(a,3,b)}
function Fe(a,b){a.i||2!=a.h&&3!=a.h||Ge(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ze(a,b,c,d){var e=xe(null,null,null);e.h=new N(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Be?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Fe(a,e);return e.h}
N.prototype.C=function(a){this.h=0;ue(this,2,a)};
N.prototype.F=function(a){this.h=0;ue(this,3,a)};
function ue(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof N){Fe(d,xe(e||Ga,f||null,a));var g=!0}else if(te(d))d.then(e,f,a),g=!0;else{if(D(d))try{var h=d.then;if("function"===typeof h){He(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Ge(a),3!=b||c instanceof Be||Ie(a,c))}}
function He(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ge(a){a.m||(a.m=!0,id(a.A,a))}
function De(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
N.prototype.A=function(){for(var a;a=De(this);)Ee(this,a,this.h,this.o);this.m=!1};
function Ee(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,Je(b,c,d);else try{b.j?b.i.call(b.context):Je(b,c,d)}catch(e){Ke.call(null,e)}bd(we,b)}
function Je(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ie(a,b){a.u=!0;id(function(){a.u&&Ke.call(null,b)})}
var Ke=ed;function Be(a){Sa.call(this,a)}
F(Be,Sa);Be.prototype.name="cancel";function O(a){L.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
F(O,L);m=O.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Le(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=Za(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.X(b)}}
m.X=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ga):(c&&$a(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Me(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.X(c)}}return 0!=e}return!1};
function Me(a,b,c){id(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(G(b,this.X,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.B=function(){O.H.B.call(this);this.clear();this.l.length=0};function Ne(a){this.h=a}
Ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,ne(b))};
Ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ne.prototype.remove=function(a){this.h.remove(a)};function Oe(a){this.h=a}
F(Oe,Ne);function Pe(a){this.data=a}
function Qe(a){return void 0===a||a instanceof Pe?a:new Pe(a)}
Oe.prototype.set=function(a,b){Oe.H.set.call(this,a,Qe(b))};
Oe.prototype.i=function(a){a=Oe.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Re(a){this.h=a}
F(Re,Oe);Re.prototype.set=function(a,b,c){if(b=Qe(b)){if(c){if(c<Date.now()){Re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Re.H.set.call(this,a,b)};
Re.prototype.i=function(a){var b=Re.H.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Re.prototype.remove.call(this,a);else return b}};function Se(){}
;function Te(){}
F(Te,Se);Te.prototype.clear=function(){var a=Gd(this.L(!0)),b=this;G(a,function(c){b.remove(c)})};function Ue(a){this.h=a}
F(Ue,Te);m=Ue.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.L=function(a){var b=0,c=this.h,d=new Dd;d.next=function(){if(b>=c.length)throw Cd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(Ve,Ue);function We(a,b){this.i=a;this.h=null;if(cc&&!(9<=Number(oc))){Xe||(Xe=new Hd);this.h=Xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xe.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(We,Te);var Ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xe=null;function Ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ye[b]})}
m=We.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ze(a),b);$e(this)};
m.get=function(a){a=this.h.getAttribute(Ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ze(a));$e(this)};
m.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Dd;d.next=function(){if(b>=c.length)throw Cd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$e(this)};
function $e(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function af(a,b){this.i=a;this.h=b+"::"}
F(af,Te);af.prototype.set=function(a,b){this.i.set(this.h+a,b)};
af.prototype.get=function(a){return this.i.get(this.h+a)};
af.prototype.remove=function(a){this.i.remove(this.h+a)};
af.prototype.L=function(a){var b=this.i.L(!0),c=this,d=new Dd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function bf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var cf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",cf,void 0);function P(a){bf(cf,arguments)}
function H(a,b){return a in cf?cf[a]:b}
;var df=[];function ef(a){df.forEach(function(b){return b(a)})}
function ff(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gf(b),ef(b)}}:a}
function gf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function hf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;var jf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",jf,void 0);function kf(a){bf(jf,arguments)}
;function Q(a){a=lf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mf(a,b){a=lf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function lf(a){var b=H("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:H("EXPERIMENT_FLAGS",{})[a]}
;var nf=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++nf},void 0);var of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in of||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function qf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",eb,void 0);var rf=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",rf,void 0);
function sf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var tf=Ua(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function uf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=sf(a,b,c,d);if(e)return e;e=++rf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pf(h);if(!Ec(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pf(h);
h.currentTarget=a;return c.call(a,h)};
g=ff(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function vf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var wf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function R(a,b){"function"===typeof a&&(a=ff(a));return window.setTimeout(a,b)}
function xf(a){window.clearTimeout(a)}
;function yf(a){this.C=a;this.i=null;this.m=0;this.A=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=uf(window,"mousemove",E(this.J,this));a=E(this.F,this);"function"===typeof a&&(a=ff(a));this.K=window.setInterval(a,25)}
F(yf,L);yf.prototype.J=function(a){void 0===a.h&&qf(a);var b=a.h;void 0===a.i&&qf(a);this.i=new wc(b,a.i)};
yf.prototype.F=function(){if(this.i){var a=wf();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
yf.prototype.B=function(){window.clearInterval(this.K);vf(this.I)};function zf(){}
function Af(a,b){return Bf(a,1,b)}
;function Cf(){zf.apply(this,arguments)}
v(Cf,zf);function Bf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
function Df(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):xf(a)}}
Cf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Cf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ha(Cf);Cf.getInstance();var Ef={};
function Ff(a){var b=void 0===a?{}:a;a=void 0===b.Ha?!0:b.Ha;b=void 0===b.Ua?!1:b.Ua;if(null==B("_lact",window)){var c=parseInt(H("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Gf();uf(document,"keydown",Gf);uf(document,"keyup",Gf);uf(document,"mousedown",Gf);uf(document,"mouseup",Gf);a&&(b?uf(window,"touchmove",function(){Hf("touchmove",200)},{passive:!0}):(uf(window,"resize",function(){Hf("resize",200)}),uf(window,"scroll",function(){Hf("scroll",200)})));
new yf(function(){Hf("mouse",100)});
uf(document,"touchstart",Gf,{passive:!0});uf(document,"touchend",Gf,{passive:!0})}}
function Hf(a,b){Ef[a]||(Ef[a]=!0,Af(function(){Gf();Ef[a]=!1},b))}
function Gf(){null==B("_lact",window)&&Ff();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function If(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Jf(){var a=Kf;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Lf(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Mf=/^[\w.]*$/,Nf={q:!0,search_query:!0};function Of(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Pf(f[0]||""),h=Pf(f[1]||"");g in c?Array.isArray(c[g])?bb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],p=String(Of);k.args=[{key:l,value:f[1],query:a,method:Qf==p?"unchanged":p}];Nf.hasOwnProperty(l)||hf(k)}}return c}
var Qf=String(Of);function Rf(a){var b=[];cb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Sf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Of(a,"&")}
function Tf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Sf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Xb(a,e)+d}
function Uf(a){if(!b)var b=window.location.href;var c=a.match(Sb)[1]||null,d=Ub(a);c&&d?(a=a.match(Sb),b=b.match(Sb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ub(b)==d&&(Number(b.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;return a}
function Pf(a){return a&&a.match(Mf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Vf(a){var b=Wf;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Nc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(T){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(T){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(T){}try{var p=h.outerWidth;var n=h.outerHeight}catch(T){}try{var q=h.innerWidth;var r=h.innerHeight}catch(T){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,p,n,q,r];
l=b.h.top;try{var w=(l||window).document,y="CSS1Compat"==w.compatMode?w.documentElement:w.body;var C=(new xc(y.clientWidth,y.clientHeight)).round()}catch(T){C=new xc(-12245933,-12245933)}w=C;C={};y=new Zc;z.SVGElement&&z.document.createElementNS&&y.set(0);l=Jc();l["allow-top-navigation-by-user-activation"]&&y.set(1);l["allow-popups-to-escape-sandbox"]&&y.set(2);z.crypto&&z.crypto.subtle&&y.set(3);z.TextDecoder&&z.TextEncoder&&y.set(4);y=$c(y);C.bc=y;C.bih=w.height;C.biw=w.width;C.brdim=k.join();b=
b.i;b=(C.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,C.wgl=!!K.WebGLRenderingContext,C);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wf=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Rf(Vf(a))},void 0);var Xf="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Yf(){if(!Xf)return null;var a=Xf();return"open"in a?a:null}
function Zf(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var $f={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
ag="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),bg=!1;
function cg(a,b){b=void 0===b?{}:b;var c=Uf(a),d=Q("web_ajax_ignore_global_headers_if_set"),e;for(e in $f){var f=H($f[e]);!f||!c&&Ub(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ub(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Ub(a))b["X-YouTube-Ad-Signals"]=Rf(Vf(void 0));return b}
function dg(a){var b=window.location.search,c=Ub(a);Q("debug_handle_relative_url_for_query_forward_killswitch")||c||!Uf(a)||(c=document.location.hostname);var d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Sf(b),f={};G(ag,function(g){e[g]&&(f[g]=e[g])});
return Tf(a,f||{},!1)}
function eg(a,b){var c=b.format||"JSON";a=fg(a,b);var d=gg(a,b),e=!1,f=hg(a,function(k){if(!e){e=!0;h&&xf(h);var l=Zf(k),p=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)p=ig(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(p&&p.return_code,10);break a;case "RAW":l=!0;break a}l=!!p}p=p||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,p):b.onError&&b.onError.call(n,k,p);b.onFinish&&b.onFinish.call(n,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=R(function(){e||(e=!0,f.abort(),xf(h),g.call(b.context||z,f))},b.timeout)}return f}
function fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=H("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Tf(a,b||{},!0);return a}
function gg(a,b){var c=H("XSRF_FIELD_NAME",void 0),d=H("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=H("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Sf(e),mb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));f=e||f&&!fb(f);!bg&&f&&
"POST"!=b.method&&(bg=!0,gf(Error("AJAX request with postData should use POST")));return e}
function ig(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jg(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=kg(g)})}d&&lg(e);
return e}
function lg(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b],null);a[c]=d}else lg(a[b])}}
function jg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kg(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function hg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ff(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Yf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var mg=pc||qc;function ng(a){var b=Ib;return b?0<=b.toLowerCase().indexOf(a):!1}
;var og={},pg=0;
function qg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ng("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.W?a.V():String(a),Fb.test(a)?a=new I(a,Bb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Eb))&&Db.test(b[1])?new I(a,Bb):null));a=Cb(a||Hb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Lb)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Nb(tb(b&&a.W?a.V():String(a)),f)}a instanceof Lb&&a.constructor===Lb?a=a.h:(Ia(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(ne(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Bc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)hg(a,b,"POST",e,d);else if(H("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)hg(a,b,"GET","",d);else{b:{try{var g=new Ta({url:a});if(g.j&&g.i||g.l){var h=Tb(a.match(Sb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Yb);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var p=a.charCodeAt(c-1);if(38==p||63==p){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(y){}f=!1}f?rg(a)?(b&&b(),f=!0):f=!1:f=!1;f||sg(a,b)}}
function tg(a){var b=void 0===b?"":b;rg(a,b)||qg(a,void 0,void 0,void 0,b)}
function rg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function sg(a,b){var c=new Image,d=""+pg++;og[d]=c;c.onload=c.onerror=function(){b&&og[d]&&b();delete og[d]};
c.src=a}
;var ug=z.ytPubsubPubsubInstance||new O,vg=z.ytPubsubPubsubSubscribedKeys||{},wg=z.ytPubsubPubsubTopicToKeys||{},xg=z.ytPubsubPubsubIsSynchronous||{};function yg(a,b){var c=zg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xg[a]?f():R(f,0)}catch(g){gf(g)}},void 0);
vg[d]=!0;wg[a]||(wg[a]=[]);wg[a].push(d);return d}return 0}
function Ag(a){var b=zg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete vg[c]}))}
function Bg(a,b){var c=zg();c&&c.publish.apply(c,arguments)}
function Cg(a){var b=zg();if(b)if(b.clear(a),a)Dg(a);else for(var c in wg)Dg(c)}
function zg(){return z.ytPubsubPubsubInstance}
function Dg(a){wg[a]&&(a=wg[a],G(a,function(b){vg[b]&&delete vg[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.X;O.prototype.publish=O.prototype.O;O.prototype.clear=O.prototype.clear;A("ytPubsubPubsubInstance",ug,void 0);A("ytPubsubPubsubTopicToKeys",wg,void 0);A("ytPubsubPubsubIsSynchronous",xg,void 0);A("ytPubsubPubsubSubscribedKeys",vg,void 0);var Eg=window,S=Eg.ytcsi&&Eg.ytcsi.now?Eg.ytcsi.now:Eg.performance&&Eg.performance.timing&&Eg.performance.now&&Eg.performance.timing.navigationStart?function(){return Eg.performance.timing.navigationStart+Eg.performance.now()}:function(){return(new Date).getTime()};var Fg=mf("initial_gel_batch_timeout",1E3),Gg=Math.pow(2,16)-1,Hg=null,Ig=0,Jg=void 0,Kg=0,Lg=0,Mg=0,Ng=!0,Og=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Og,void 0);var Pg=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Pg,void 0);
function Qg(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Pg[a.D.token]=Rg(a.D),c=a.D.token);var d=Og.get(c)||[];Og.set(c,d);d.push(a.payload);b&&(Jg=new b);a=mf("web_logging_max_batch")||100;b=S();d.length>=a?Sg({writeThenSend:!0}):10<=b-Mg&&(Tg(),Mg=b)}}
function Ug(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Pg[a.D.token]=Rg(a.D),c=a.D.token);var d=new Map;d.set(c,[a.payload]);b&&(Jg=new b);return new N(function(e){Jg&&Jg.isReady()?Vg(d,e,{bypassNetworkless:!0}):e()})}}
function Sg(a){a=void 0===a?{}:a;return new N(function(b){xf(Kg);xf(Lg);Lg=0;Jg&&Jg.isReady()?(Vg(Og,b,a),Og.clear()):(Tg(),b())})}
function Tg(){Q("web_gel_timeout_cap")&&!Lg&&(Lg=R(Sg,6E4));xf(Kg);var a=H("LOGGING_BATCH_TIMEOUT",mf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Ng&&(a=Fg);Kg=R(function(){Sg({writeThenSend:!0})},a)}
function Vg(a,b,c){var d=Jg;c=void 0===c?{}:c;var e=Math.round(S()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:Wg(d.h||Xg())});h.events=k;(k=Pg[g])&&Yg(h,g,k);delete Pg[g];Zg(h,e);Q("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&tg("/generate_204");$g(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Ig=Math.round(S()-e)},
onError:function(){f--;f||b()},
ya:c});Ng=!1}}
function Zg(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);if(b=H("EVENT_ID",void 0)){var c=H("BATCH_CLIENT_COUNTER",void 0)||0;c||(c=Math.floor(Math.random()*Gg/2));c++;c>Gg&&(c=1);P("BATCH_CLIENT_COUNTER",c);b={serializedEventId:b,clientCounter:String(c)};a.serializedClientEventId=b;Hg&&Ig&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Hg,roundtripMs:String(Ig)});Hg=b;Ig=0}}
function Yg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Rg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var ah=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",ah,void 0);function bh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||S());e[a]=b;a=If();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,ah[b]=b in ah?ah[b]+1:0,a.sequence={index:ah[b],groupKey:b},d.Fa&&delete ah[d.M]);(d.Ek?Ug:Qg)({endpoint:"log_event",payload:e,D:d.D},c)}
;function ch(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function dh(a,b,c,d,e){Vc.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var U=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",U,void 0);function eh(){this.h=H("ALT_PREF_COOKIE_NAME","PREF");this.i=H("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Vc.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(U[d]=c.toString())}}}
eh.prototype.get=function(a,b){fh(a);gh(a);a=void 0!==U[a]?U[a].toString():null;return null!=a?a:b?b:""};
eh.prototype.set=function(a,b){fh(a);gh(a);if(null==b)throw Error("ExpectedNotNull");U[a]=b.toString()};
eh.prototype.remove=function(a){fh(a);gh(a);delete U[a]};
eh.prototype.clear=function(){for(var a in U)delete U[a]};
function gh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function fh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function hh(a){a=void 0!==U[a]?U[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ha(eh);var ih={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},jh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function kh(){var a=z.navigator;return a?a.connection:void 0}
;function lh(){return"INNERTUBE_API_KEY"in cf&&"INNERTUBE_API_VERSION"in cf}
function Xg(){return{innertubeApiKey:H("INNERTUBE_API_KEY",void 0),innertubeApiVersion:H("INNERTUBE_API_VERSION",void 0),Ia:H("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ja:H("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),La:H("INNERTUBE_CONTEXT_HL",void 0),Ka:H("INNERTUBE_CONTEXT_GL",void 0),Ma:H("INNERTUBE_HOST_OVERRIDE",void 0)||"",Oa:!!H("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Na:!!H("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:H("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Wg(a){var b={client:{hl:a.La,gl:a.Ka,clientName:a.Ja,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ia}},c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=H("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=H("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=H("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!Q("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=ch()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!Q("music_web_display_mode_killswitch")){var h;b.client.xa=null!=(h=b.client.xa)?h:{};b.client.xa.webDisplayMode=ch()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
H("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:H("DELEGATED_SESSION_ID")});a:{if(h=kh()){a=ih[h.type||"unknown"]||"CONN_UNKNOWN";h=ih[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);Q("web_log_effective_connection_type")&&(a=kh(),a=null!==a&&void 0!==a&&a.effectiveType?jh.hasOwnProperty(a.effectiveType)?jh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Sf(H("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function mh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||H("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.uk||H("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().tk:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=H("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=H("DELEGATED_SESSION_ID")));return d}
;function nh(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new pd;c.update(H("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=uc(c.digest())}return a}
;function oh(a){var b=new Ve;(b=b.isAvailable()?a?new af(b,a):b:null)||(a=new We(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Re(a):null;this.i=document.domain||window.location.hostname}
oh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ne(b))}catch(f){return}else e=escape(b);dh(a,e,c,this.i)};
oh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Vc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
oh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Vc.remove(""+a,"/",void 0===b?"youtube.com":b)};var ph;function qh(){ph||(ph=new oh("yt.innertube"));return ph}
function rh(a,b,c,d){if(d)return null;d=qh().get("nextId",!0)||1;var e=qh().get("requests",!0)||{};e[d]={method:a,request:b,authState:nh(c),requestTime:Math.round(S())};qh().set("nextId",d+1,86400,!0);qh().set("requests",e,86400,!0);return d}
function sh(a){var b=qh().get("requests",!0)||{};delete b[a];qh().set("requests",b,86400,!0)}
function th(a){var b=qh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=nh(mh(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),$g(a,d.method,e,{}));delete b[c]}}qh().set("requests",b,86400,!0)}}
;function uh(a,b){this.version=a;this.args=b}
;function vh(a,b){this.topic=a;this.h=b}
vh.prototype.toString=function(){return this.topic};var wh=B("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.X;O.prototype.publish=O.prototype.O;O.prototype.clear=O.prototype.clear;A("ytPubsub2Pubsub2Instance",wh,void 0);var xh=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",xh,void 0);var yh=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",yh,void 0);var zh=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",zh,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ah(a,b){var c=Bh();c&&c.publish.call(c,a.toString(),a,b)}
function Ch(a){var b=Dh,c=Bh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(xh[d])try{if(f&&b instanceof vh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var p=h.N}catch(n){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ab(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){gf(n)}},zh[b.toString()]?B("yt.scheduler.instance")?Af(g):R(g,0):g())});
xh[d]=!0;yh[b.toString()]||(yh[b.toString()]=[]);yh[b.toString()].push(d);return d}
function Eh(){var a=Fh,b=Ch(function(c){a.apply(void 0,arguments);Gh(b)});
return b}
function Gh(a){var b=Bh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete xh[c]}))}
function Bh(){return B("ytPubsub2Pubsub2Instance")}
;var Hh=[],Ih=!1;function Jh(a,b){Ih||(Hh.push({type:"EVENT",eventType:a,payload:b}),10<Hh.length&&Hh.shift())}
;var Kh=function(){var a;return function(){a||(a=new oh("ytidb"));return a}}();
function Lh(a,b,c){var d;this.i=void 0===a?!1:a;this.failureMessage=b;this.j=c;this.h=null===(d=Kh())||void 0===d?void 0:d.get("LAST_RESULT_ENTRY_KEY",!0);this.h||(this.h={createdTimestampMs:S(),isSupported:this.i,resultCount:0});var e;if(Mh()){var f;this.h.isSupported===this.i?f=Object.assign(Object.assign({},this.h),{resultCount:this.h.resultCount+1}):f={isSupported:this.i,resultCount:1,createdTimestampMs:S()};null===(e=Kh())||void 0===e?void 0:e.set("LAST_RESULT_ENTRY_KEY",f,2592E3,!0)}}
function Nh(a,b){return new Lh(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
Lh.prototype.isSupported=function(){return this.i};
Lh.prototype.log=function(){Mh()&&Jh("IS_SUPPORTED_COMPLETED",{isSupported:this.i,lastIsSupported:this.h.isSupported,failureMessage:this.failureMessage,sameResultCount:this.h.resultCount,sameResultDurationMs:Math.floor(S()-this.h.createdTimestampMs),canDetectDataOnFailure:this.j})};
function Mh(){var a;return!!(Q("ytidb_analyze_is_supported")&&(null===(a=Kh())||void 0===a?0:a.h))}
;function V(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(V,Error);function Oh(a){return a.substr(0,a.indexOf(":"))||a}
;var Ph={},Qh=(Ph.AUTH_INVALID="No user identifier specified.",Ph.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ph.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ph.MISSING_OBJECT_STORE="Object store not created.",Ph.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ph.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ph.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ph.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",Ph),Rh={},Sh=(Rh.AUTH_INVALID="ERROR",Rh.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Rh.EXPLICIT_ABORT="IGNORED",Rh.IDB_NOT_SUPPORTED="ERROR",Rh.MISSING_OBJECT_STORE="ERROR",Rh.QUOTA_EXCEEDED="WARNING",Rh.QUOTA_MAYBE_EXCEEDED="WARNING",Rh.UNKNOWN_ABORT="WARNING",Rh),Th={},Uh=(Th.AUTH_INVALID=!1,Th.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Th.EXPLICIT_ABORT=!1,Th.IDB_NOT_SUPPORTED=!1,Th.MISSING_OBJECT_STORE=!1,Th.QUOTA_EXCEEDED=!1,Th.QUOTA_MAYBE_EXCEEDED=!0,
Th.UNKNOWN_ABORT=!0,Th);function W(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Qh[a]:c;d=void 0===d?Sh[a]:d;e=void 0===e?Uh[a]:e;V.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,W.prototype)}
v(W,V);function Vh(a){W.call(this,"MISSING_OBJECT_STORE",{zk:a},Qh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Vh.prototype)}
v(Vh,W);var Wh=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Xh(a,b,c){b=Oh(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof W)return d;if("QuotaExceededError"===d.name)return new W("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(rc&&"UnknownError"===d.name)return new W("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Wh.some(function(e){return d.message.includes(e)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new W("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ak:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Yh(a){if(!a)throw Error();throw a;}
function Zh(a){return a}
function Y(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
Y.all=function(a){return new Y(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={R:0};f.R<a.length;f={R:f.R},++f.R)$h(Y.resolve(a[f.R]).then(function(g){return function(h){d[g.R]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
Y.resolve=function(a){return new Y(function(b,c){a instanceof Y?a.then(b,c):b(a)})};
Y.reject=function(a){return new Y(function(b,c){c(a)})};
Y.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Zh,e=null!==b&&void 0!==b?b:Yh;return new Y(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ai(c,c,d,f,g)}),c.onRejected.push(function(){bi(c,c,e,f,g)})):"FULFILLED"===c.state.status?ai(c,c,d,f,g):"REJECTED"===c.state.status&&bi(c,c,e,f,g)})};
function $h(a,b){a.then(void 0,b)}
function ai(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Y?ci(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Y?ci(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ci(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Y?ci(a,b,f,d,e):d(f)},function(f){e(f)})}
;function di(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ei(a){return new Promise(function(b,c){di(a,b,c)})}
function fi(a){return new Y(function(b,c){di(a,b,c)})}
;function gi(a,b){return new Y(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function hi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
m=hi.prototype;m.add=function(a,b,c){return ii(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return ji(d,a).add(b,c)})};
m.clear=function(a){return ii(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(b){return ji(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ii(this,[a],{mode:"readonly",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ji(c,a).count(b)})};
m.delete=function(a,b){return ii(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ji(c,a).delete(b)})};
m.get=function(a,b){return ii(this,[a],{mode:"readonly",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ji(c,a).get(b)})};
function ii(a,b,c,d){return Zb(a,function f(){var g=this,h,k,l,p,n,q,r,w,y,C,T;return xa(f,function(M){switch(M.h){case 1:var X={mode:"readonly",U:!1};"string"===typeof c?X.mode=c:X=c;h=X;g.transactionCount++;k=h.U?mf("ytidb_transaction_try_count",1):1;case 2:if(l){M.h=3;break}k--;p=Math.round(S());M.j=4;n=g.h.transaction(b,h.mode);X=new ki(n);X=li(X,d);return x(M,X,6);case 6:return q=M.i,r=Math.round(S()),mi(g,p,r,void 0,b.join(),h),M.return(q);case 4:w=ra(M);y=Math.round(S());C=Xh(w,g.h.name,b.join());
if((T=C instanceof W&&!C.h)||0>=k)mi(g,p,y,C,b.join(),h),l=C;M.h=2;break;case 3:return M.return(Promise.reject(l))}})})}
function mi(a,b,c,d,e,f){b=c-b;d?(d instanceof W&&("QUOTA_EXCEEDED"===d.type||"QUOTA_MAYBE_EXCEEDED"===d.type)&&Jh("QUOTA_EXCEEDED",{dbName:Oh(a.h.name),objectStoreNames:e,transactionCount:a.transactionCount,transactionMode:f.mode}),d instanceof W&&"UNKNOWN_ABORT"===d.type&&(Jh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:e,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),ni(a,!1,e,b),Ih||(Hh.push({type:"ERROR",payload:d}),10<Hh.length&&Hh.shift())):ni(a,
!0,e,b)}
function ni(a,b,c,d){Jh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function oi(a){this.h=a}
m=oi.prototype;m.add=function(a,b){return fi(this.h.add(a,b))};
m.clear=function(){return fi(this.h.clear()).then(function(){})};
m.count=function(a){return fi(this.h.count(a))};
function pi(a,b){return qi(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?pi(this,a):fi(this.h.delete(a))};
m.get=function(a){return fi(this.h.get(a))};
m.index=function(a){return new ri(this.h.index(a))};
m.getName=function(){return this.h.name};
function qi(a,b,c){a=a.h.openCursor(b.query,b.direction);return si(a).then(function(d){return gi(d,c)})}
function ki(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=W;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function li(a,b){var c=new Promise(function(d,e){$h(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
ki.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new W("EXPLICIT_ABORT");};
ki.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function ji(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new oi(b),a.i.set(b,c));return c}
function ri(a){this.h=a}
ri.prototype.count=function(a){return fi(this.h.count(a))};
ri.prototype.delete=function(a){return ti(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
ri.prototype.get=function(a){return fi(this.h.get(a))};
ri.prototype.getKey=function(a){return fi(this.h.getKey(a))};
function ti(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return si(a).then(function(d){return gi(d,c)})}
function ui(a,b){this.request=a;this.cursor=b}
function si(a){return fi(a).then(function(b){return null===b?null:new ui(a,b)})}
m=ui.prototype;m.advance=function(a){this.cursor.advance(a);return si(this.request)};
m.continue=function(a){this.cursor.continue(a);return si(this.request)};
m.delete=function(){return fi(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return fi(this.cursor.update(a))};function vi(a,b,c){return Zb(this,function e(){var f,g,h,k,l,p,n,q,r,w;return xa(e,function(y){if(1==y.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.fb,p=g.upgrade,n=g.closed,r=function(){q||(q=new hi(f.result,{closed:n}));return q},f.addEventListener("upgradeneeded",function(C){if(null===C.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");C.dataLoss&&"none"!==C.dataLoss&&Jh("IDB_DATA_CORRUPTED",{reason:C.dataLossMessage||"unknown reason",dbName:Oh(a)});var T=r(),M=new ki(f.transaction);p&&p(T,C.oldVersion,C.newVersion,M)}),h&&f.addEventListener("blocked",function(){h()}),x(y,ei(f),2);
w=y.i;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){Jh("IDB_UNEXPECTEDLY_CLOSED",{dbName:Oh(a),dbVersion:w.version});l&&l()});
return y.return(r())})})}
function wi(a,b){b=void 0===b?{}:b;return Zb(this,function d(){var e,f,g;return xa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,ei(e),0)})})}
;function xi(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function yi(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return vi(a,b,c)}
xi.prototype.delete=function(a){a=void 0===a?{}:a;return wi(this.name,a)};
xi.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,fb:c,upgrade:this.options.upgrade},e=function(){return Zb(a,function g(){var h=this,k,l,p;return xa(g,function(n){switch(n.h){case 1:return n.j=2,x(n,yi(h.name,h.options.version,d),4);case 4:k=n.i;a:{var q=u(Object.keys(h.options.Ra));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){n.h=5;break}if(h.i){n.h=6;break}h.i=!0;return x(n,h.delete(),7);case 7:return n.return(e());case 6:throw new Vh(l);case 5:return n.return(k);
case 2:p=ra(n);if(p instanceof DOMException?"VersionError"===p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"===p.name:p instanceof Object&&"message"in p&&"An attempt was made to open a database using a lower version than the existing version."===p.message)return n.return(yi(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw p;}})})};
this.h=b=e()}return this.h};var zi=new xi({Ra:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Ai(a){return Zb(this,function c(){var d;return xa(c,function(e){if(1==e.h)return x(e,zi.open(),2);d=e.i;return e.return(ii(d,["databases"],"readwrite",function(f){var g=ji(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return fi(g.h.put(a,void 0)).then(function(){})})}))})})}
function Bi(){return Zb(this,function b(){var c;return xa(b,function(d){if(1==d.h)return x(d,zi.open(),2);c=d.i;return d.return(c.delete("databases","yt-idb-test-do-not-use"))})})}
function Ci(){return Zb(this,function b(){var c,d;return xa(b,function(e){if(1==e.h)return x(e,zi.open(),2);if(3!=e.h)return c=e.i,x(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
;var Di;
function Ei(){return Zb(this,function b(){var c,d,e,f;return xa(b,function(g){switch(g.h){case 1:var h;if(h=mg)h=/WebKit\/([0-9]+)/.exec(Ib),h=!!(h&&600<=parseInt(h[1],10));h&&(h=/WebKit\/([0-9]+)/.exec(Ib),h=!(h&&602<=parseInt(h[1],10)));if(h)return g.return(Nh(Error("YtIdb is not supported on iOS 8 or 9")));if(dc)return g.return(Nh(Error("YtIdb is not supported on Edge")));try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return g.return(Nh(Error("Non-prefixed indexedDB APIs are missing")))}catch(k){return g.return(Nh(k))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return g.return(Nh(Error("IDBTransaction.prototype.objectStoreNames is missing")));g.j=2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(g,Ai(d),4);case 4:return x(g,Bi(),5);case 5:return g.return(new Lh(!0));case 2:e=ra(g);if(!Mh()){g.h=6;break}g.j=7;return x(g,Ci(),9);case 9:return f=g.i,g.return(Nh(e,f));case 7:return ra(g),g.return(Nh(e));case 6:return g.return(Nh(e))}})})}
function Fi(){if(void 0!==Di)return Di;Ih=!0;return Di=Ei().then(function(a){Ih=!1;a.log();return a.isSupported()})}
;var Gi;function Hi(){Gi||(Gi=new oh("yt.offline"));return Gi}
;function Ii(){ke.call(this);this.o=this.A=this.C=this.l=!1;this.j=Ji();this.o=Q("validate_network_status");Ki(this);Li(this)}
v(Ii,ke);function Ji(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Li(a){window.addEventListener("online",function(){return Zb(a,function c(){var d=this;return xa(c,function(e){if(1==e.h){if(!d.o){d.j=!0;e.h=2;return}return x(e,Mi(d),3)}2!=e.h&&(d.j=e.i);d.l&&d.j&&le(d,"ytnetworkstatus-online");Ni(d);if(d.A&&Q("offline_error_handling")){var f=Hi().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new V(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;gf(h)}Hi().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Ki(a){window.addEventListener("offline",function(){return Zb(a,function c(){var d=this;return xa(c,function(e){if(1==e.h){if(!d.o){d.j=!1;e.h=2;return}return x(e,Mi(d),3)}2!=e.h&&(d.j=e.i);d.l&&!d.j&&le(d,"ytnetworkstatus-offline");Ni(d);e.h=0})})})}
function Ni(a){a.C&&(hf(new V("NetworkStatusManager state did not match poll",S()-0)),a.C=!1)}
function Mi(a){return Zb(a,function c(){var d;return xa(c,function(e){switch(e.h){case 1:return e.j=2,x(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;e.h=3;e.j=0;break;case 2:ra(e),d=!1;case 3:return e.return(d)}})})}
;function Oi(a){a=void 0===a?{}:a;ke.call(this);var b=this;this.l=this.A=0;Ii.h||(Ii.h=new Ii);this.j=Ii.h;this.j.l=!0;a.Qa&&(this.j.A=!0);a.ea?(this.ea=a.ea,be(this.j,"ytnetworkstatus-online",function(){Pi(b,"publicytnetworkstatus-online")}),be(this.j,"ytnetworkstatus-offline",function(){Pi(b,"publicytnetworkstatus-offline")})):(be(this.j,"ytnetworkstatus-online",function(){le(b,"publicytnetworkstatus-online")}),be(this.j,"ytnetworkstatus-offline",function(){le(b,"publicytnetworkstatus-offline")}))}
v(Oi,ke);function Pi(a,b){a.ea?a.l?(Df(a.A),a.A=Af(function(){a.o!==b&&(le(a,b),a.o=b,a.l=S())},a.ea-(S()-a.l))):(le(a,b),a.o=b,a.l=S()):le(a,b)}
;var Qi;function Ri(a,b){b=void 0===b?{}:b;Fi().then(function(){Qi||(Qi=new Oi({Qa:!0}));Qi.j.j!==Ji()&&hf(new V("NetworkStatusManager isOnline does not match window status"));eg(a,b)})}
function Si(a,b){b=void 0===b?{}:b;Fi().then(function(){eg(a,b)})}
;function Ti(a){var b=this;this.h=null;a?this.h=a:lh()&&(this.h=Xg());Bf(function(){th(b)},0,5E3)}
Ti.prototype.isReady=function(){!this.h&&lh()&&(this.h=Xg());return!!this.h};
function $g(a,b,c,d){!H("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&hf(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new V("innertube xhrclient not ready",b,c,d);gf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,q){if(d.onError)d.onError(q)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Ma)&&(g=e);var h=a.h.Oa||!1,k=mh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Na&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var p=Tf(""+g+e,l||{},!0);(function(n){n=void 0===n?!1:n;var q;if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g&&(n||(q=rh(b,c,k,h)),q)){var r=f.onSuccess,w=f.onFetchSuccess;
f.onSuccess=function(y,C){sh(q);r(y,C)};
c.onFetchSuccess=function(y,C){sh(q);w(y,C)}}try{n&&d.retry&&!d.ya.bypassNetworkless?(f.method="POST",!d.ya.writeThenSend&&Q("nwl_send_fast_on_unload")?Si(p,f):Ri(p,f)):(f.method="POST",f.postParams||(f.postParams={}),eg(p,f))}catch(y){if("InvalidAccessError"==y.name)q&&(sh(q),q=0),hf(Error("An extension is blocking network request."));
else throw y;}q&&Bf(function(){th(a)},0,5E3)})(!1)}
;function Ui(a,b,c){c=void 0===c?{}:c;var d=Ti;H("ytLoggingEventsDefaultDisabled",!1)&&Ti==Ti&&(d=null);bh(a,b,d,c)}
;var Vi=[{wa:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{wa:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Wi(){this.h=[];this.i=[]}
var Xi;function Yi(){Xi||(Xi=new Wi);return Xi}
;var Zi=new O;function $i(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=aj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=aj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=aj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function aj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function bj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=$i(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cj(f+".ve",g,h,k):0;d+=f;d+=cj(e,a[e],b,c);if(500<d)break}}else c[b]=dj(a),d+=c[b].length;else c[b]=dj(a),d+=c[b].length;return d}
function cj(a,b,c,d){c+="."+a;a=dj(b);d[c]=a;return c.length+a.length}
function dj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ej=new Set,fj=0,gj=0,hj=0,ij=[],jj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function kj(a){lj(a,"WARNING")}
function lj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||H("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.level&&(b=a.level),Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+a.fileName),
d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=fj))){var g=rd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=bj(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;
if("object"===typeof a.params)for(l in p){if(p[l]){var n="params."+l,q=dj(p[l]);c[n]=q;k+=n.length+q.length;if(500<k)break}}else c.params=dj(p)}if(ij.length)for(l=0;l<ij.length&&!(k=bj(ij[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Yi();
c=u(a.i);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.yk)){a=d.weight;break a}a=u(a.h);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Vi);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.na[l.name])for(e=u(c.na[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=d[g+
1];l.message=c.wa(f);break}l.params||(l.params={});a=Yi();l.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;l.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!ej.has(l.message)){"ERROR"===b?(Zi.O("handleError",l),Q("record_app_crashed_web")&&0===hj&&1===l.sampleWeight&&
(hj++,Ui("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),gj++):"WARNING"===b&&Zi.O("handleWarning",l);if(Q("kevlar_gel_error_routing")){c=b;b:{a=u(jj);for(d=a.next();!d.done;d=a.next())if(ng(d.value.toLowerCase())){a=!0;break b}a=!1}if(a)a=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);a=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),
d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===c?a.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,kvPairs:[]};H("FEXP_EXPERIMENTS")&&(d.experimentIds=H("FEXP_EXPERIMENTS"));if(e=l.params)for(f=u(Object.keys(e)),g=f.next();!g.done;g=f.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});
e=H("SERVER_NAME",void 0);f=H("SERVER_VERSION",void 0);e&&f&&(d.kvPairs.push({key:"server.name",value:e}),d.kvPairs.push({key:"server.version",value:f}));a={errorMetadata:d,stackTrace:c,logMessage:a}}a&&(Ui("clientError",a),Sg())}if(!Q("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:H("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=H("SERVER_NAME",void 0);c=H("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}eg(H("ECATCHER_REPORT_HOST","")+"/error_204",b)}ej.add(l.message);
fj++}}}
function mj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;function nj(a){a&&(a.dataset?a.dataset[oj("loaded")]="true":a.setAttribute("data-loaded","true"))}
function pj(a,b){return a?a.dataset?a.dataset[oj(b)]:a.getAttribute("data-"+b):null}
var qj={};function oj(a){return qj[a]||(qj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var rj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,sj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function tj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(rj,""),c=c.replace(sj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else uj(a,b,c)}
function uj(a,b,c){c=void 0===c?null:c;var d=vj(a),e=document.getElementById(d),f=e&&pj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yg(d,b),b=""+Ka(b),wj[b]=f),g||(e=xj(a,d,function(){pj(e,"loaded")||(nj(e),Bg(d),R(Pa(Cg,d),0))},c)))}
function xj(a,b,c,d){d=void 0===d?null:d;var e=Cc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Pb(e,Kc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function yj(a){a=vj(a);var b=document.getElementById(a);b&&(Cg(a),b.parentNode.removeChild(b))}
function zj(a,b){a&&b&&(a=""+Ka(b),(a=wj[a])&&Ag(a))}
function vj(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Rb(a)}
var wj={};var Aj=[],Bj=!1;function Cj(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Vc.get("CONSENT","").startsWith("YES+"))&&"1"!=hb()){var a=function(){Bj=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
try{tj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Aj.push(Af(function(){if(!(Bj||"google_ad_status"in window)){try{zj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Bj=!0;P("DCLKSTAT",3)}},5E3))}}
function Dj(){var a=Number(H("DCLKSTAT",0));return isNaN(a)?0:a}
;function Ej(){this.i=!1;this.h=null}
Ej.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,tj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Fj(g,c,!!f,h,d):(yj(b),kj(new V("Unable to load Botguard","from "+b)))},e)):a&&(e=Cc(document,"SCRIPT"),e.textContent=a,e.nonce=Ca(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Fj(this,c,!!f,a,d):kj(Error("Unable to load Botguard from JS")))};
function Fj(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{Gj(a,new d(b,e?function(){return e(b)}:Ga))}catch(h){h instanceof Error&&kj(h)}else{try{Gj(a,new d(b))}catch(h){h instanceof Error&&kj(h)}e&&e(b)}else kj(Error("Failed to finish initializing VM"))}
Ej.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
Ej.prototype.dispose=function(){this.h=null};
function Gj(a,b){a.h=b}
;var Hj=new Ej;function Ij(){return!!Hj.h}
function Jj(a){a=void 0===a?{}:a;return Hj.invoke(a)}
;var Kj={Lb:29434,Nb:3611,Be:3854,Tf:42993,Ei:4724,pj:96370,gb:27686,hb:85013,ib:23462,kb:42016,lb:62407,mb:26926,jb:43781,nb:51236,ob:79148,pb:50160,qb:77504,Cb:87907,Db:18630,Eb:54445,Fb:80935,Gb:105675,Hb:37521,Ib:47786,Jb:98349,Kb:6827,Mb:7282,Qb:32276,Pb:76278,Rb:93911,Sb:106531,Tb:27259,Ub:27262,Vb:27263,Xb:21759,Yb:27107,Zb:62936,ac:49568,cc:38408,dc:80637,ec:68727,fc:68728,hc:80353,ic:80356,jc:74610,kc:45707,lc:83962,mc:83970,nc:46713,oc:89711,pc:74612,qc:93265,sc:74611,uc:113533,wc:93252,
xc:99357,zc:94521,Ac:114252,Bc:113532,Cc:94522,yc:94583,Dc:88E3,Ec:93253,Fc:93254,Gc:94387,Hc:94388,Ic:93255,Jc:97424,tc:72502,Kc:110111,Lc:76019,Nc:117092,Oc:117093,Mc:89431,Pc:110466,Qc:77240,Rc:60508,Sc:105350,Tc:73393,Uc:113534,Vc:92098,Wc:84517,Xc:83759,Yc:80357,Zc:86113,bd:72598,cd:72733,dd:107349,ed:118203,fd:117431,gd:117429,hd:117430,jd:117432,kd:120080,ld:117259,md:121692,nd:97615,od:31402,pd:84774,qd:95117,rd:98930,sd:98931,td:98932,ud:43347,vd:45474,wd:100352,xd:84758,yd:98443,zd:117985,
Ad:74613,Bd:74614,Cd:64502,Dd:74615,Ed:74616,Fd:74617,Gd:77820,Hd:74618,Id:93278,Jd:93274,Kd:93275,Ld:93276,Md:22110,Nd:29433,Pd:120541,Rd:82047,Sd:113550,Td:75836,Ud:75837,Vd:42352,Wd:84512,Xd:76065,Yd:75989,Zd:16623,ae:32594,be:27240,ce:32633,de:74858,ge:3945,ee:16989,he:45520,ie:25488,je:25492,ke:25494,le:55760,me:14057,ne:18451,oe:57204,pe:57203,qe:17897,re:57205,se:18198,te:17898,ue:17909,we:43980,xe:46220,ye:11721,ze:49954,Ae:96369,Ce:56251,De:25624,Ee:16906,Fe:99999,Ge:68172,He:27068,Ie:47973,
Je:72773,Ke:26970,Le:26971,Me:96805,Ne:17752,Oe:73233,Pe:109512,Qe:22256,Re:14115,Se:22696,Te:89278,Ue:89277,Ve:109513,We:43278,Xe:43459,Ye:43464,Ze:89279,af:43717,bf:55764,cf:22255,df:89281,ef:40963,ff:43277,gf:43442,hf:91824,jf:120137,kf:96367,lf:36850,mf:72694,nf:37414,pf:36851,qf:121343,rf:73491,sf:54473,tf:43375,uf:46674,vf:32473,wf:72901,xf:72906,yf:50947,zf:50612,Af:50613,Bf:50942,Cf:84938,Df:84943,Ef:84939,Ff:84941,Gf:84944,Hf:84940,If:84942,Jf:35585,Kf:51926,Lf:79983,Mf:63238,Nf:18921,Of:63241,
Pf:57893,Qf:41182,Rf:33424,Sf:22207,Uf:36229,Vf:22206,Wf:22205,Xf:18993,Yf:19001,Zf:18990,ag:18991,cg:18997,dg:18725,eg:19003,fg:36874,gg:44763,hg:33427,jg:67793,kg:22182,lg:37091,mg:34650,ng:50617,og:47261,pg:22287,qg:25144,rg:97917,sg:62397,tg:36961,ug:108035,vg:27426,wg:27857,xg:27846,yg:27854,zg:69692,Ag:61411,Bg:39299,Cg:38696,Dg:62520,Eg:36382,Fg:108701,Gg:50663,Hg:36387,Ig:14908,Jg:37533,Kg:105443,Lg:61635,Mg:62274,Ng:65702,Og:65703,Pg:65701,Qg:76256,Rg:37671,Sg:49953,Ug:36216,Vg:28237,Wg:39553,
Xg:29222,Yg:26107,Zg:38050,ah:26108,dh:120745,bh:26109,eh:26110,fh:66881,gh:28236,hh:14586,ih:57929,jh:74723,kh:44098,lh:44099,mh:23528,nh:61699,oh:59149,ph:101951,qh:97346,rh:118051,sh:95102,uh:64882,vh:119505,wh:63595,xh:63349,yh:95101,zh:75240,Ah:27039,Bh:68823,Ch:21537,Dh:83464,Eh:75707,Fh:83113,Gh:101952,Hh:101953,Jh:79610,Kh:24402,Lh:24400,Mh:32925,Nh:57173,Oh:122502,Ph:64423,Qh:64424,Rh:33986,Sh:100828,Th:21409,Uh:11070,Vh:11074,Wh:17880,Xh:14001,Zh:30709,ai:30707,bi:30711,ci:30710,di:30708,
Yh:26984,fi:63648,gi:63649,hi:51879,ii:111059,ji:5754,ki:20445,li:110386,mi:113746,ni:66557,oi:17310,ri:28631,si:21589,ti:68012,vi:60480,wi:31571,xi:76980,yi:41577,zi:45469,Ai:38669,Bi:13768,Ci:13777,Di:62985,Fi:59369,Gi:43927,Hi:43928,Ii:12924,Ji:100355,Mi:56219,Ni:27669,Oi:10337,Li:47896,Pi:122629,Qi:121258,Ri:107598,Si:96639,Ti:107536,Ui:96661,Vi:96658,Wi:116646,Xi:121122,Yi:96660,Zi:104443,aj:96659,bj:106442,cj:63667,dj:63668,ej:63669,fj:78314,gj:55761,hj:96368,ij:67374,jj:48992,kj:49956,lj:31961,
mj:26388,nj:23811,oj:5E4,qj:47355,rj:47356,sj:37935,tj:45521,uj:21760,vj:83769,wj:49977,xj:49974,yj:93497,zj:93498,Aj:34325,Bj:115803,Cj:100081,Dj:35309,Ej:68314,Fj:25602,Gj:100339,Hj:59018,Ij:18248,Jj:50625,Kj:9729,Lj:37168,Mj:37169,Nj:21667,Oj:16749,Pj:18635,Qj:39305,Rj:18046,Sj:53969,Tj:8213,Uj:93926,Vj:102852,Wj:110099,Xj:22678,Yj:69076,ak:100856,bk:17736,ck:3832,dk:55759,ek:64031,fk:93044,gk:93045,hk:34388,ik:17657,jk:17655,kk:39579,lk:39578,mk:77448,nk:8196,pk:11357,qk:69877,rk:8197,sk:82039};function Lj(a,b,c){L.call(this);var d=this;c=c||H("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Va(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.A)}
v(Lj,L);Lj.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){hf(d)}}};
Lj.prototype.B=function(){window.removeEventListener("message",this.A);L.prototype.B.call(this)};function Mj(){var a=this.i=new Lj(!!H("WIDGET_ID_ENFORCE")),b=E(this.Va,this);a.m=b;a.o=null;this.i.channel="widget";if(a=H("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.m=!1;this.u={}}
m=Mj.prototype;m.Va=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.u[a]||"onReady"==a||(this.addEventListener(a,Nj(this,a)),this.u[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function Nj(a,b){return E(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ga=function(){this.m=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");G(this.l,this.Aa,this);this.l=[]};
m.ja=function(){return null};
function Oj(a,b){a.sendMessage("infoDelivery",b)}
m.Aa=function(a){this.m?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function Pj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Rj(a)}
function Rj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Sj(a,b,c,d){if(D(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Tj(a){Mj.call(this);this.h=a;this.j=[];this.addEventListener("onReady",E(this.Sa,this));this.addEventListener("onVideoProgress",E(this.bb,this));this.addEventListener("onVolumeChange",E(this.cb,this));this.addEventListener("onApiChange",E(this.Wa,this));this.addEventListener("onPlaybackQualityChange",E(this.Ya,this));this.addEventListener("onPlaybackRateChange",E(this.Za,this));this.addEventListener("onStateChange",E(this.ab,this));this.addEventListener("onWebglSettingsChanged",E(this.eb,
this))}
v(Tj,Mj);m=Tj.prototype;m.oa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Pj(a)){var d=b;if(D(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Rj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Qj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Sj.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Pj(a)&&Oj(this,this.ja())}};
m.Sa=function(){var a=E(this.Ga,this);this.i.i=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ja=function(){if(!this.h)return null;var a=this.h.getApiInterface();$a(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.ab=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Oj(this,a)};
m.Ya=function(a){Oj(this,{playbackQuality:a})};
m.Za=function(a){Oj(this,{playbackRate:a})};
m.Wa=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.cb=function(){Oj(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.bb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Oj(this,a)};
m.eb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Oj(this,a)};
m.dispose=function(){Mj.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Uj(a){a=void 0===a?!1:a;L.call(this);this.i=new O(a);xd(this,Pa(vd,this.i))}
F(Uj,L);Uj.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Uj.prototype.l=function(a,b){this.h||this.i.O.apply(this.i,arguments)};function Vj(a,b,c){Uj.call(this);this.j=a;this.destination=b;this.id=c}
v(Vj,Uj);Vj.prototype.P=function(a,b){this.h||this.j.P(this.destination,this.id,a,b)};
Vj.prototype.B=function(){this.destination=this.j=null;Uj.prototype.B.call(this)};function Wj(a,b,c){L.call(this);this.i=a;this.l=c;this.o=uf(window,"message",E(this.m,this));this.j=new Vj(this,a,b);xd(this,Pa(vd,this.j))}
v(Wj,L);Wj.prototype.P=function(a,b,c,d){this.h||a!=this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(ne(a),this.l))};
Wj.prototype.m=function(a){var b;if(b=!this.h)if(b=a.origin==this.l)a:{b=this.i;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.h||c.l("command",b.command,b.data,a.origin))}};
Wj.prototype.B=function(){vf(this.o);this.i=null;L.prototype.B.call(this)};function Xj(){var a=jb(Yj),b;return Ae(new N(function(c,d){a.onSuccess=function(e){Zf(e)?c(e):d(new Zj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Zj("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Zj("Request timed out","net.timeout",e))};
b=eg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Be&&b.abort();
return ye(c)})}
function Zj(a,b,c){Sa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Zj,Sa);function ak(){this.i=0;this.h=null}
ak.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),te(a)?a:bk(a)):2===this.i&&b?(a=b.call(c,this.h),te(a)?a:ck(a)):this};
ak.prototype.getValue=function(){return this.h};
ak.prototype.$goog_Thenable=!0;function ck(a){var b=new ak;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function bk(a){var b=new ak;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function dk(a){Sa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ek;this.isTimeout=a instanceof Zj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Be}
v(dk,Sa);dk.prototype.name="BiscottiError";function ek(){Sa.call(this,"Biscotti ID is missing from server")}
v(ek,Sa);ek.prototype.name="BiscottiMissingError";var Yj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},fk=null;
function Kf(){if(Q("disable_biscotti_fetch_on_html5_clients"))return ye(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Vc.get("CONSENT","").startsWith("YES+"))return ye(Error("User has not consented - not fetching biscotti id."));if("1"==hb())return ye(Error("Biscotti ID is not available in private embed mode"));fk||(fk=Ae(Xj().then(gk),function(a){return hk(2,a)}));
return fk}
function gk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ek;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ek;a=a.id;Lf(a);fk=bk(a);ik(18E5,2);return a}
function hk(a,b){b=new dk(b);Lf("");fk=ck(b);0<a&&ik(12E4,a-1);throw b;}
function ik(a,b){R(function(){Ae(Xj().then(gk,function(c){return hk(b,c)}),Ga)},a)}
function jk(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Kf()}catch(b){return ye(b)}}
;function kk(a){if("1"!=hb()){a&&Jf();try{jk().then(function(){},function(){}),R(kk,18E5)}catch(b){gf(b)}}}
;var lk=Date.now().toString();
function mk(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(lk)for(a=1,b=0;b<lk.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^lk.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var nk,ok=z.ytLoggingDocDocumentNonce_;ok||(ok=mk(),Qa("ytLoggingDocDocumentNonce_",ok));nk=ok;var pk={Od:0,Ob:1,Wb:2,Tg:3,Qd:4,Zj:5,Ih:6,Ki:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function qk(a){this.h=a}
function rk(a){return new qk({trackingParams:a})}
qk.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
qk.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
qk.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function sk(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function tk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function uk(a){return H(tk(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",uk,void 0);function vk(a){return(a=uk(void 0===a?0:a))?new qk({veType:a,youtubeData:void 0}):null}
function wk(){var a=H("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function xk(a){a=void 0===a?0:a;var b=H(sk(a));if(!b&&!H("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",xk,void 0);function yk(a,b,c){var d=wk();(c=xk(c))&&delete d[c];b&&(d[a]=b)}
function zk(a){return wk()[a]}
A("yt_logging_screen.getCttAuthInfo",zk,void 0);function Ak(a,b,c,d){c=void 0===c?0:c;if(a!==H(sk(c))||b!==H(tk(c)))yk(a,d,c),P(sk(c),a),P(tk(c),b),b=function(){setTimeout(function(){a&&bh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:nk,clientScreenNonce:a},Ti)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",Ak,void 0);function Bk(a){uh.call(this,1,arguments);this.csn=a}
v(Bk,uh);var Dh=new vh("screen-created",Bk),Ck=[],Ek=Dk,Fk=0;function Gk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Xa(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&kj(Error("Child VE logged with no data"));d={D:zk(b),M:b};"UNDEFINED_CSN"==b?Hk("visualElementAttached",c,d):a?bh("visualElementAttached",c,a,d):Ui("visualElementAttached",c,d)}
function Dk(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return uc(b)}
function Hk(a,b,c){Ck.push({payloadName:a,payload:b,options:c});Fk||(Fk=Eh())}
function Fh(a){if(Ck){for(var b=u(Ck),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,bh(c.payloadName,c.payload,null,c.options));Ck.length=0}Fk=0}
;function Ik(){this.i=new Set;this.h=new Set;this.j=new Map}
Ik.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ha(Ik);function Jk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Kk(a)||c.some(function(e){return!Kk(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Lk(a,d.value);return a}
function Lk(a,b){for(var c in b)if(Kk(b[c])){if(c in a&&!Kk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Lk(a[c],b[c])}else if(Mk(b[c])){if(c in a&&!Mk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Nk(a[c],b[c])}else a[c]=b[c];return a}
function Nk(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Kk(c)?a.push(Lk({},c)):Mk(c)?a.push(Nk([],c)):a.push(c);return a}
function Kk(a){return"object"===typeof a&&!Array.isArray(a)}
function Mk(a){return"object"===typeof a&&Array.isArray(a)}
;function Ok(a,b){uh.call(this,1,arguments)}
v(Ok,uh);function Pk(a,b){uh.call(this,1,arguments)}
v(Pk,uh);var Qk=new vh("aft-recorded",Ok),Rk=new vh("timing-sent",Pk);var Sk=window;function Tk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Uk=Sk.performance||Sk.mozPerformance||Sk.msPerformance||Sk.webkitPerformance||new Tk;var Vk=!1;E(Uk.clearResourceTimings||Uk.webkitClearResourceTimings||Uk.mozClearResourceTimings||Uk.msClearResourceTimings||Uk.oClearResourceTimings||Ga,Uk);function Wk(a){var b=Xk(a);if(b.aft)return b.aft;a=H((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Yk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Qa("ytcsi."+(a||"")+"data_",b));return b}
function Zk(a){a=Yk(a);a.info||(a.info={});return a.info}
function Xk(a){a=Yk(a);a.tick||(a.tick={});return a.tick}
function $k(a){var b=Yk(a).nonce;b||(b=mk(),Yk(a).nonce=b);return b}
function al(a){var b=Xk(a||""),c=Wk(a);c&&!Vk&&(Ah(Qk,new Ok(Math.round(c-b._start),a)),Vk=!0)}
;function bl(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function cl(a){a=a||"";var b=B("ytcsi.reference");b||(bl(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=bl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var dl=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",dl,void 0);function el(){this.h=0}
function fl(){el.h||(el.h=new el);return el.h}
el.prototype.tick=function(a,b,c){gl(this,"tick_"+a+"_"+b)||Ui("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
el.prototype.info=function(a,b){var c=Object.keys(a).join("");gl(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ui("latencyActionInfo",a))};
el.prototype.span=function(a,b){var c=Object.keys(a).join("");gl(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Ui("latencyActionSpan",a))};
function gl(a,b){dl[b]=dl[b]||{count:0};var c=dl[b];c.count++;c.time=S();a.h||(a.h=Bf(function(){var d=S(),e;for(e in dl)dl[e]&&6E4<d-dl[e].time&&delete dl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||kj(c)),!0):!1}
;var Z={},hl=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.br_trs=
"tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid=
"requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),il="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),jl={},kl=(jl.ccs="CANARY_STATE_",jl.mver="MEASUREMENT_VERSION_",
jl.pis="PLAYER_INITIALIZED_STATE_",jl.yt_pt="LATENCY_PLAYER_",jl.pa="LATENCY_ACTION_",jl.yt_vst="VIDEO_STREAM_TYPE_",jl),ll="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ml(a){return!!H("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!Yk(a).useGel}
function nl(a){a=Yk(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function ol(a,b,c){if(null!==b)if(Zk(c)[a]=b,ml(c)){var d=b;b=nl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in hl){b=hl[a];0<=Va(il,b)&&(d=!!d);a in kl&&"string"===typeof d&&(d=kl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Jk({},e)}else 0<=Va(ll,a)||kj(new V("Unknown label logged with GEL CSI",
a)),f=void 0;f&&ml(c)&&(b=cl(c||""),Jk(b.info,f),b=nl(c),b.gelInfos||(b.gelInfos={}),Jk(b.gelInfos,f),c=$k(c),fl().info(f,c))}else cl(c||"").info[a]=b}
function pl(a,b,c){var d=Xk(c);if(!b&&"_"!==a[0]){var e=a;Uk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Uk.mark(e))}e=b||S();d[a]=e;e=nl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||S();if(ml(c)){cl(c||"").tick[a]=b||S();e=$k(c);if("_start"===a){var f=fl();gl(f,"baseline_"+e)||Ui("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else fl().tick(a,e,b);al(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&(f=H((c||"")+"TIMING_ACTION",void 0),e=
Xk(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&"_start"in Xk(void 0)&&Wk(c)))if(al(c),c)ql(c);else{f=!0;var g=H("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&ql(c)}cl(c||"").tick[a]=b||S()}return d[a]}
function ql(a){if(!ml(a)){var b=Xk(a),c=Zk(a),d=b._start,e=H("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:H((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Wk(a);var h=Xk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Zk(a).yt_pvis&&"youtube"===e&&(ol("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var p in c)"_"!==p.charAt(0)&&(f[p]=c[p]);b.ps=S();p={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),p[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||Q("always_send_csi_204_with_beacon"))?tg(f):qg(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Ah(Rk,new Pk(p.aft+(Number(g)||0),a))}}
var rl=window;rl.ytcsi&&(rl.ytcsi.info=ol,rl.ytcsi.tick=pl);function sl(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function tl(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=xk(c),h=vk(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Gk(a.client,g,h,[rk(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Gk(a.client,g,h,[rk(d.playerResponse.trackingParams)]))})}
function ul(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=xk(d);c=c||vk(d);e&&c&&Gk(a.client,e,c,[b])}}
sl.prototype.clickCommand=function(a,b,c){c=xk(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:rk(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={D:zk(c),M:c};"UNDEFINED_CSN"==c?Hk("visualElementGestured",a,b):d?bh("visualElementGestured",a,d,b):Ui("visualElementGestured",a,b);return!0};
function vl(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){wl(a,b,c);var f=vk(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,ul(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=xk(g);var l=k[0]||vk(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={D:zk(h),M:h},"UNDEFINED_CSN"==h?Hk("visualElementStateChanged",k,l):g?bh("visualElementStateChanged",k,g,l):Ui("visualElementStateChanged",
k,l))}}};
xk(c.layer)||a.j();if(c.ta)for(var d=u(c.ta),e=d.next();!e.done;e=d.next())tl(a,e.value,c.layer);else lj(Error("Delayed screen needs a data promise."))}
function wl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Ta?c.Ta:c.layer;var e=xk(d);d=vk(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.sa,l=c.D,p=Ek(),n={csn:p,pageVe:(new qk({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?n.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&kj(new V("newScreen() parent element does not have a VE - rootVe",
b));k&&(n.cloneCsn=k);k={D:l,M:p};g?bh("screenCreated",n,g,k):Ui("screenCreated",n,k);Ah(Dh,new Bk(p));var q=p}catch(r){mj(r,{Ck:b,rootVe:d,parentVisualElement:void 0,xk:e,Bk:f,sa:c.sa});lj(r);return}Ak(q,b,c.layer,c.D);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=Q("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(pk));for(f=b.next();!f.done;f=b.next())if(xk(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={D:zk(e),M:e,
Fa:f},"UNDEFINED_CSN"==e?Hk("visualElementHidden",d,f):b?bh("visualElementHidden",d,b,f):Ui("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");ol("csn",q);Ik.getInstance().clear();d=vk(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&(e=q,q=Q("use_default_events_client")?void 0:Ti,b={csn:e,ve:d.getAsJson(),eventType:1},f={D:zk(e),M:e},"UNDEFINED_CSN"==e?Hk("visualElementShown",b,f):q?bh("visualElementShown",
b,q,f):Ui("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&ul(a,b,d,c.layer)}
;function xl(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.za,this)}
v(xl,L);m=xl.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.P("RECEIVING"))};
m.P=function(a,b){this.started&&!this.h&&this.connection.P(a,b)};
m.za=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=yl(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=zl(a,c))&&this.P(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Xa.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Xa=function(a,b){this.started&&!this.h&&this.connection.P(a,this.ia(a,b))};
m.ia=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.B=function(){var a=this.connection;a.h||Le(a.i,"command",this.za,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.B.call(this)};function Al(a,b){xl.call(this,b);this.api=a;this.start()}
v(Al,xl);Al.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Al.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function yl(a,b){switch(a){case "loadVideoById":return a=Rj(b),[a];case "cueVideoById":return a=Rj(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Sj(b),[a];case "cuePlaylist":return a=Sj(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function zl(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Al.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return xl.prototype.ia.call(this,a,b)};
Al.prototype.B=function(){xl.prototype.B.call(this);delete this.api};function Bl(){L.call(this);this.i=[]}
v(Bl,L);Bl.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Da)}L.prototype.B.call(this)};function Cl(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Cl.prototype.clone=function(){var a=new Cl,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ia(c)?a[b]=jb(c):a[b]=c}return a};var Dl=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function El(a){a=a||"";if(window.spf){var b=a.match(Dl);spf.style.load(a,b?b[1]:"",void 0)}else Fl(a)}
function Fl(a){var b=Gl(a),c=document.getElementById(b),d=c&&pj(c,"loaded");d||c&&!d||(c=Hl(a,b,function(){pj(c,"loaded")||(nj(c),Bg(b),R(Pa(Cg,b),0))}))}
function Hl(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Kc(a);d.rel="stylesheet";d.href=rb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Gl(a){var b=Cc(document,"A");Ob(b,new I(a,Bb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Rb(a)}
;function Il(a,b,c,d){L.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.fa=!1;this.api={};this.T=this.m=null;this.I=new O;this.i={};this.K=this.Z=this.elementId=this.ga=this.config=null;this.J=!1;this.l=this.A=null;this.aa={};this.Ba=["onReady"];this.lastError=null;this.qa=NaN;this.C={};this.Ca=new Bl(this);this.S=0;this.j=this.o=a;xd(this,Pa(vd,this.I));Jl(this);Kl(this);xd(this,Pa(vd,this.Ca));c?this.S=R(function(){e.loadNewVideoConfig(c)},0):d&&(Ll(this),Ml(this))}
v(Il,L);m=Il.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.S&&(xf(this.S),this.S=0);var b=a||{};b instanceof Cl||(b=new Cl(b));this.config=b;this.setConfig(a);Ml(this);this.isReady()&&Nl(this)}};
function Ll(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ga=a;this.config=Ol(a);Ll(this);this.Z||(this.Z=Pl(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Mc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Mc(Number(a)||a))};
function Nl(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Ql(a){var b=!0,c=Rl(a);c&&a.config&&(a=Sl(a),b=pj(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Ml(a){if(!a.h&&!a.J){var b=Ql(a);if(b&&"html5"===(Rl(a)?"html5":null))a.K="html5",a.isReady()||Tl(a);else if(Ul(a),a.K="html5",b&&a.l&&a.o)a.o.appendChild(a.l),Tl(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Vl(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Ol(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Tl(a)};
a.J=!0;b?a.A():(tj(Sl(a),a.A),(b=Wl(a))&&El(b),Xl(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function Rl(a){var b=yc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Tl(a){var b;if(!a.h){var c=Rl(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.J=!1,!Vl(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Yl(a)):a.qa=R(function(){Tl(a)},50)}}
function Yl(a){Jl(a);a.fa=!0;var b=Rl(a);if(b){a.m=Zl(a,b,"addEventListener");a.T=Zl(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Zl(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Nl(a);a.Z&&a.Z(a.api);a.I.O("onReady",a.api)}
function Zl(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,hf(h))}}}
function Jl(a){a.fa=!1;if(a.T)for(var b in a.i)a.i.hasOwnProperty(b)&&a.T(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&xf(Number(c));a.C={};a.m=null;a.T=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ga};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.fa};
function Kl(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bg("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bg("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Bg("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Pl(this,b);d&&(0<=Va(this.Ba,a)||this.i[a]||(b=$l(this,a),this.m&&this.m(a,b)),this.I.subscribe(a,d),"onReady"===a&&this.isReady()&&R(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Pl(this,b))&&Le(this.I,a,b)};
function Pl(a,b){var c=b;if("string"===typeof b){if(a.aa[b])return a.aa[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];(f=B(b))&&f.apply(z,e)};
a.aa[b]=c}return c?c:null}
function $l(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;z[c]=function(d){var e=R(function(){if(!a.h){a.I.O(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
gb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.K||(Rl(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Ul(a){a.cancel();Jl(a);a.K=null;a.config&&(a.config.loaded=!1);var b=Rl(a);b&&(Ql(a)||!Xl(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&zj(Sl(this),this.A);xf(this.qa);this.J=!1};
m.B=function(){Ul(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){gf(b)}this.aa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(z[this.i[a]]=null);this.ga=this.config=this.api=null;delete this.o;delete this.j;L.prototype.B.call(this)};
function Xl(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Sl(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Wl(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Vl(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Of(d||"","&")[b]}
function Ol(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?jb(e):e}return b}
;var am={},bm="player_uid_"+(1E9*Math.random()>>>0);function cm(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?yc(d):d;var e=bm+"_"+Ka(d),f=am[e];if(f&&c)return dm(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Il(d,e,a,b);am[e]=f;Bg("player-added",f.api);xd(f,function(){delete am[f.getId()]});
return f.api}
function dm(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var em=null,fm=null,gm=null;function hm(){var a=em.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function im(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=H("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Ub(window.location.href);g&&f.push(g);g=Ub(d);if(0<=Va(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Ob(f,d),d=f.href),d){g=d.match(Sb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:xk()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Rb(d).toString(36),e=e?Wb(e):"",dh(b,e,k||5))}else k=b,e="ST-"+Rb(d).toString(36),k=k?Wb(k):"",dh(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var p=void 0===p?"":p;var n=void 0===n?window:n;c=n.location;a=Xb(a,l)+p;a=a instanceof I?a:Gb(a);c.href=Cb(a)}return!0}
;A("yt.setConfig",P,void 0);A("yt.config.set",P,void 0);A("yt.setMsg",kf,void 0);A("yt.msgs.set",kf,void 0);A("yt.logging.errors.log",lj,void 0);
A("writeEmbed",function(){var a=H("PLAYER_CONFIG",void 0);if(!a){var b=H("PLAYER_VARS",void 0);b&&(a={args:b})}kk(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=H("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=H("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=Sf(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}em=cm(a,c,!1)}else em=cm(a);em.addEventListener("onVideoDataChange",hm);a=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?gm=new Tj(em):H("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(fm=new Wj(window.parent,a,b),gm=new Al(em,fm.j));Cj()},void 0);
var jm=ff(function(){pl("ol");var a=eh.getInstance(),b=!!((hh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Ad(document.body,"exp-invert-logo"))if(c&&!Ad(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ad(d,"inverted-hdpi")){var e=yd(d);zd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ad(document.body,"inverted-hdpi")&&Bd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=hh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete U[b]:(c=d.toString(16),U[b]=c.toString());c=!0;Q("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in U)d.push(f+"="+encodeURIComponent(String(U[f])));dh(b,d.join("&"),63072E3,a.i,c)}sl.h||(sl.h=new sl);a=sl.h;f=16623;var g=void 0===g?{}:g;Object.values(Kj).includes(f)||(kj(new V("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.u=[];g.ta?vl(a,f,g):wl(a,f,g)}),km=ff(function(){em&&
em.sendAbandonmentPing&&em.sendAbandonmentPing();
H("PL_ATT")&&Hj.dispose();for(var a=0,b=Aj.length;a<b;a++)Df(Aj[a]);Aj.length=0;yj("//static.doubleclick.net/instream/ad_status.js");Bj=!1;P("DCLKSTAT",0);wd(gm,fm);em&&(em.removeEventListener("onVideoDataChange",hm),em.destroy())});
window.addEventListener?(window.addEventListener("load",jm),window.addEventListener("unload",km)):window.attachEvent&&(window.attachEvent("onload",jm),window.attachEvent("onunload",km));Qa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Ij);Qa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Jj);Qa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Dj);
Qa("yt.player.exports.navigate",B("yt.player.exports.navigate")||im);Qa("yt.util.activity.init",B("yt.util.activity.init")||Ff);Qa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||If);Qa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Gf);}).call(this);
