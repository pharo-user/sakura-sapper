function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a=o((function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function b(){}var _={};_[i]=function(){return this};var x=Object.getPrototypeOf,$=x&&x(x(O([])));$&&$!==r&&o.call($,i)&&(_=$);var w=b.prototype=y.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=w.constructor=b,b.constructor=g,g.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),f(w,u,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}var f=o((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(n)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}));function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?s(t):e}function p(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(){}function m(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function g(){return Object.create(null)}function b(t){t.forEach(y)}function _(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function $(t,e,n,r){return t[1]&&r?m(n.ctx.slice(),t[1](r(e))):n.ctx}function w(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var f=$(n,r,o,c);e.p(f,u)}}var E,S=!1;function k(){S=!0}function L(){S=!1}function R(t,e,n,r){for(;t<e;){var o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function j(t,e){S?(!function(t){if(!t.hydrate_init){t.hydrate_init=!0;var e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;for(var o=0,a=0;a<e.length;a++){var i=R(1,o+1,(function(t){return e[n[t]].claim_order}),e[a].claim_order)-1;r[a]=n[i]+1;var c=i+1;n[c]=a,o=Math.max(c,o)}for(var u=[],f=[],s=e.length-1,l=n[o]+1;0!=l;l=r[l-1]){for(u.push(e[l-1]);s>=l;s--)f.push(e[s]);s--}for(;s>=0;s--)f.push(e[s]);u.reverse(),f.sort((function(t,e){return t.claim_order-e.claim_order}));for(var p=0,h=0;p<f.length;p++){for(;h<u.length&&f[p].claim_order>=u[h].claim_order;)h++;var d=h<u.length?u[h]:null;t.insertBefore(f[p],d)}}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function O(t,e,n){S&&!n?j(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function A(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function T(){return I(" ")}function C(){return I("")}function B(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function q(t){return Array.from(t.childNodes)}function U(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});var a=function(){for(var a=t.claim_info.last_index;a<t.length;a++){var i=t[a];if(e(i))return n(i),t.splice(a,1),o||(t.claim_info.last_index=a),i}for(var c=t.claim_info.last_index-1;c>=0;c--){var u=t[c];if(e(u))return n(u),t.splice(c,1),o?t.claim_info.last_index--:t.claim_info.last_index=c,u}return r()}();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function G(t,e,n,r){return U(t,(function(t){return t.nodeName===e}),(function(t){for(var e=[],r=0;r<t.attributes.length;r++){var o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((function(e){return t.removeAttribute(e)}))}),(function(){return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):N(e)}))}function M(t,e){return U(t,(function(t){return 3===t.nodeType}),(function(t){t.data=""+e}),(function(){return I(e)}),!0)}function J(t){return M(t," ")}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function V(t){E=t}function Y(){if(!E)throw new Error("Function called outside component initialization");return E}var D=[],H=[],z=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){z.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<D.length;t+=1){var e=D[t];V(e),rt(e.$$)}for(V(null),D.length=0;H.length;)H.pop()();for(var n=0;n<z.length;n+=1){var r=z[n];et.has(r)||(et.add(r),r())}z.length=0}while(D.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),b(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,at=new Set;function it(){ot={r:0,c:[],p:ot}}function ct(){ot.r||b(ot.c),ot=ot.p}function ut(t,e){t&&t.i&&(at.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(at.has(t))return;at.add(t),ot.c.push((function(){at.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function st(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function lt(e){return"object"===t(e)&&null!==e?e:{}}function pt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function dt(t,e,n,r){var o=t.$$,a=o.fragment,i=o.on_mount,c=o.on_destroy,u=o.after_update;a&&a.m(e,n),r||Z((function(){var e=i.map(y).filter(_);c?c.push.apply(c,p(e)):b(e),t.$$.on_mount=[]})),u.forEach(Z)}function vt(t,e){var n=t.$$;null!==n.fragment&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(D.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=E;V(t);var u=t.$$={fragment:null,ctx:null,props:a,update:v,not_equal:o,bound:g(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:e.context||[]),callbacks:g(),dirty:i,skip_bound:!1},f=!1;if(u.ctx=n?n(t,e.props||{},(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return u.ctx&&o(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),f&&mt(t,e)),n})):[],u.update(),f=!0,b(u.before_update),u.fragment=!!r&&r(u.ctx),e.target){if(e.hydrate){k();var s=q(e.target);u.fragment&&u.fragment.l(s),s.forEach(P)}else u.fragment&&u.fragment.c();e.intro&&ut(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),L(),nt()}V(c)}var gt=function(){function t(){h(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=v}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),bt=[];function _t(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!bt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),bt.push(i,t)}if(o){for(var c=0;c<bt.length;c+=2)bt[c][0](bt[c+1]);bt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||v),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var xt={};function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function wt(t){var e,n,o,a,i,c,u,f,s,l,p,h,d,m,y,g;return{c:function(){e=N("nav"),n=N("ul"),o=N("li"),a=N("a"),i=I("home"),u=T(),f=N("li"),s=N("a"),l=I("about"),h=T(),d=N("li"),m=N("a"),y=I("blog"),this.h()},l:function(t){var r=q(e=G(t,"NAV",{class:!0})),c=q(n=G(r,"UL",{class:!0})),p=q(o=G(c,"LI",{class:!0})),v=q(a=G(p,"A",{"aria-current":!0,href:!0,class:!0}));i=M(v,"home"),v.forEach(P),p.forEach(P),u=J(c);var g=q(f=G(c,"LI",{class:!0})),b=q(s=G(g,"A",{"aria-current":!0,href:!0,class:!0}));l=M(b,"about"),b.forEach(P),g.forEach(P),h=J(c);var _=q(d=G(c,"LI",{class:!0})),x=q(m=G(_,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));y=M(x,"blog"),x.forEach(P),_.forEach(P),c.forEach(P),r.forEach(P),this.h()},h:function(){B(a,"aria-current",c=void 0===t[0]?"page":void 0),B(a,"href","."),B(a,"class","svelte-1dbd5up"),B(o,"class","svelte-1dbd5up"),B(s,"aria-current",p="about"===t[0]?"page":void 0),B(s,"href","about"),B(s,"class","svelte-1dbd5up"),B(f,"class","svelte-1dbd5up"),B(m,"rel","prefetch"),B(m,"aria-current",g="blog"===t[0]?"page":void 0),B(m,"href","blog"),B(m,"class","svelte-1dbd5up"),B(d,"class","svelte-1dbd5up"),B(n,"class","svelte-1dbd5up"),B(e,"class","svelte-1dbd5up")},m:function(t,r){O(t,e,r),j(e,n),j(n,o),j(o,a),j(a,i),j(n,u),j(n,f),j(f,s),j(s,l),j(n,h),j(n,d),j(d,m),j(m,y)},p:function(t,e){var n=r(e,1)[0];1&n&&c!==(c=void 0===t[0]?"page":void 0)&&B(a,"aria-current",c),1&n&&p!==(p="about"===t[0]?"page":void 0)&&B(s,"aria-current",p),1&n&&g!==(g="blog"===t[0]?"page":void 0)&&B(m,"aria-current",g)},i:v,o:v,d:function(t){t&&P(e)}}}function Et(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var St=function(t){u(n,gt);var e=$t(n);function n(t){var r;return h(this,n),yt(s(r=e.call(this)),t,Et,wt,x,{segment:0}),r}return n}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Lt(t){var e,n,o,a;e=new St({props:{segment:t[0]}});var i=t[2].default,c=function(t,e,n,r){if(t){var o=$(t,e,n,r);return t[0](o)}}(i,t,t[1],null);return{c:function(){pt(e.$$.fragment),n=T(),o=N("main"),c&&c.c(),this.h()},l:function(t){ht(e.$$.fragment,t),n=J(t);var r=q(o=G(t,"MAIN",{class:!0}));c&&c.l(r),r.forEach(P),this.h()},h:function(){B(o,"class","svelte-1uhnsl8")},m:function(t,r){dt(e,t,r),O(t,n,r),O(t,o,r),c&&c.m(o,null),a=!0},p:function(t,n){var o=r(n,1)[0],u={};1&o&&(u.segment=t[0]),e.$set(u),c&&c.p&&(!a||2&o)&&w(c,i,t,t[1],a?o:-1,null,null)},i:function(t){a||(ut(e.$$.fragment,t),ut(c,t),a=!0)},o:function(t){ft(e.$$.fragment,t),ft(c,t),a=!1},d:function(t){vt(e,t),t&&P(n),t&&P(o),c&&c.d(t)}}}function Rt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var jt=function(t){u(n,gt);var e=kt(n);function n(t){var r;return h(this,n),yt(s(r=e.call(this)),t,Rt,Lt,x,{segment:0}),r}return n}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Pt(t){var e,n,r=t[1].stack+"";return{c:function(){e=N("pre"),n=I(r)},l:function(t){var o=q(e=G(t,"PRE",{}));n=M(o,r),o.forEach(P)},m:function(t,r){O(t,e,r),j(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&F(n,r)},d:function(t){t&&P(e)}}}function At(t){var e,n,o,a,i,c,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Pt(t);return{c:function(){n=T(),o=N("h1"),a=I(t[0]),i=T(),c=N("p"),u=I(l),f=T(),p&&p.c(),s=C(),this.h()},l:function(e){K('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(P),n=J(e);var r=q(o=G(e,"H1",{class:!0}));a=M(r,t[0]),r.forEach(P),i=J(e);var h=q(c=G(e,"P",{class:!0}));u=M(h,l),h.forEach(P),f=J(e),p&&p.l(e),s=C(),this.h()},h:function(){B(o,"class","svelte-8od9u6"),B(c,"class","svelte-8od9u6")},m:function(t,e){O(t,n,e),O(t,o,e),j(o,a),O(t,i,e),O(t,c,e),j(c,u),O(t,f,e),p&&p.m(t,e),O(t,s,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&F(a,t[0]),2&o&&l!==(l=t[1].message+"")&&F(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Pt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:v,o:v,d:function(t){t&&P(n),t&&P(o),t&&P(i),t&&P(c),t&&P(f),p&&p.d(t),t&&P(s)}}}function Nt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var It=function(t){u(n,gt);var e=Ot(n);function n(t){var r;return h(this,n),yt(s(r=e.call(this)),t,Nt,At,x,{status:0,error:1}),r}return n}();function Tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Ct(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=m(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&pt(e.$$.fragment),n=C()},l:function(t){e&&ht(e.$$.fragment,t),n=C()},m:function(t,o){e&&dt(e,t,o),O(t,n,o),r=!0},p:function(t,r){var c=16&r?st(o,[lt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){it();var u=e;ft(u.$$.fragment,1,0,(function(){vt(u,1)})),ct()}a?(pt((e=new a(i())).$$.fragment),ut(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o:function(t){e&&ft(e.$$.fragment,t),r=!1},d:function(t){t&&P(n),e&&vt(e,t)}}}function Bt(t){var e,n;return e=new It({props:{error:t[0],status:t[1]}}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){dt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function qt(t){var e,n,r,o,a=[Bt,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=C()},l:function(t){n.l(t),r=C()},m:function(t,n){i[e].m(t,n),O(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(it(),ft(i[u],1,1,(function(){i[u]=null})),ct(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),ut(n,1),n.m(r.parentNode,r))},i:function(t){o||(ut(n),o=!0)},o:function(t){ft(n),o=!1},d:function(t){i[e].d(t),t&&P(r)}}}function Ut(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[qt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=m(a,o[i]);return e=new jt({props:a}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){dt(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?st(o,[4&a&&{segment:t[2][0]},8&a&&lt(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Gt(t,e,n){var r,o,a,i=e.stores,c=e.error,u=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,Y().$$.after_update.push(r),o=xt,a=i,Y().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[c,u,f,s,p,i,h]}var Mt,Jt=function(t){u(n,gt);var e=Tt(n);function n(t){var r;return h(this,n),yt(s(r=e.call(this)),t,Gt,Ut,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Ft=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Kt=[{js:function(){return Promise.all([import("./index.966fbde4.js"),__inject_styles(["client-e118e612.css","index-39716d32.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.001d5364.js"),__inject_styles(["client-e118e612.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.960ef7af.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].1e51b725.js"),__inject_styles(["client-e118e612.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}}],Vt=(Mt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Mt(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Yt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Ht,zt=1;var Wt,Xt,Qt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Zt={};function te(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(c):n[a]=c})),n}function ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt))return null;var e=t.pathname.slice(Wt.length);if(""===e&&(e="/"),!Ft.some((function(t){return t.test(e)})))for(var n=0;n<Vt.length;n+=1){var r=Vt[n],o=r.pattern.exec(e);if(o){var a=te(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ne(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Dt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ee(a);if(i)ae(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Qt.pushState({id:Ht},"",a.href)}}}else location.hash||e.preventDefault()}}}function re(){return{x:pageXOffset,y:pageYOffset}}function oe(t){if(Zt[Ht]=re(),t.state){var e=ee(new URL(location.href));e?ae(e,t.state.id):location.href=location.href}else(function(t){Ht=t})(zt=zt+1),Qt.replaceState({id:Ht},"",location.href)}function ae(t,e,n,r){return Yt(this,void 0,void 0,a.mark((function o(){var i,c,u,f;return a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Ht=e:(c=re(),Zt[Ht]=c,Ht=e=++zt,Zt[Ht]=n?c:{x:0,y:0}),o.next=4,Xt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Zt[e],r&&(f=document.getElementById(r.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),Zt[Ht]=u,i||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function ie(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ce,ue=null;function fe(t){return ue&&ue.href===t.href?ue.promise:Pe(t)}function se(t){var e=Dt(t.target);e&&"prefetch"===e.rel&&function(t){var e=ee(new URL(t,ie(document)));if(e)ue&&t===ue.href||(ue={href:t,promise:Pe(e)}),ue.promise}(e.href)}function le(t){clearTimeout(ce),ce=setTimeout((function(){se(t)}),20)}function pe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=ee(new URL(t,ie(document)));return n?(Qt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),ae(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var he,de,ve,me,ye,ge,be,_e,xe,$e="undefined"!=typeof __SAPPER__&&__SAPPER__,we=!1,Ee=[],Se="{}",ke={page:function(t){var e=_t(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:_t(null),session:_t($e&&$e.session)};function Le(t,e){var n=t.error;return Object.assign({error:n},e)}function Re(t){return Yt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he&&ke.preloading.set(!0),n=fe(t),r=de={},e.next=5,n;case 5:if(o=e.sent,i=o.redirect,r===de){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,pe(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=o.props,u=o.branch,e.next=17,je(u,c,Le(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function je(t,e,n){return Yt(this,void 0,void 0,a.mark((function r(){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ke.page.set(n),ke.preloading.set(!1),!he){r.next=6;break}he.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},r.next=9,ve;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ke.page.notify,he=new Jt({target:ge,props:e,hydrate:!0});case 13:Ee=t,Se=JSON.stringify(n.query),we=!0,ye=!1;case 17:case"end":return r.stop()}}),r)})))}function Oe(t,e,n,r){if(r!==Se)return!0;var o=Ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Pe(t){return Yt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u,f,s,l,p,h,d,v=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},ve||(f=function(){return{}},ve=$e.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},me)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),d=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Yt(v,void 0,void 0,a.mark((function i(){var f,s,v,m,y,g;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=o[n],Oe(n,f,h,p)&&(d=!0),c.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:f});case 5:if(s=l++,ye||d||!Ee[n]||Ee[n].part!==e.i){a.next=8;break}return a.abrupt("return",Ee[n]);case 8:return d=!1,a.next=11,Kt[e.i].js();case 11:if(v=a.sent,m=v.default,y=v.preload,!we&&$e.preloaded[n+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},me);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=$e.preloaded[n+1];case 26:return a.abrupt("return",c["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return a.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}ke.session.subscribe((function(t){return Yt(void 0,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me=t,we){e.next=3;break}return e.abrupt("return");case 3:return ye=!0,n=ee(new URL(location.href)),r=de={},e.next=8,Pe(n);case 8:if(o=e.sent,i=o.redirect,c=o.props,u=o.branch,r===de){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,pe(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,je(u,c,Le(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),be={target:document.querySelector("#sapper")},_e=be.target,ge=_e,xe=$e.baseUrl,Wt=xe,Xt=Re,"scrollRestoration"in Qt&&(Qt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Qt.scrollRestoration="auto"})),addEventListener("load",(function(){Qt.scrollRestoration="manual"})),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",se),addEventListener("mousemove",le),$e.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=$e.session,a=$e.preloaded,i=$e.status,c=$e.error;ve||(ve=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:ve},level1:{props:{status:i,error:c},component:It},segments:a},f=te(r);je([],u,{host:e,path:n,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Qt.replaceState({id:zt},"",n);var r=ee(new URL(location.href));if(r)return ae(r,zt,!0,e)}));export{gt as S,u as _,i as a,l as b,h as c,s as d,T as e,N as f,P as g,J as h,yt as i,G as j,q as k,M as l,B as m,O as n,j as o,v as p,K as q,F as r,x as s,I as t,r as u,A as v,a as w};

import __inject_styles from './inject_styles.fe622066.js';