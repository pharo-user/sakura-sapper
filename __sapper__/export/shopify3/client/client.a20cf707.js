function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function u(t,e,n,r,o,s,i){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=l(e,n,r,i);t.p(o,c)}}let f,d=!1;function p(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function h(t,e){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=p(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[s]+1;const i=s+1;n[i]=t,o=Math.max(i,o)}const s=[],i=[];let c=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);c>=t;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<s.length&&i[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function m(t,e,n){d&&!n?h(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function x(){return b("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){for(const n in e)E(t,n,e[n])}function N(t){return Array.from(t.childNodes)}function P(t,e,n,r,o=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s))return n(s),t.splice(r,1),o||(t.claim_info.last_index=r),s}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s))return n(s),t.splice(r,1),o?t.claim_info.last_index--:t.claim_info.last_index=r,s}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function R(t,e,n,r){return P(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?y(e):_(e)))}function A(t,e){return P(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>b(e)),!0)}function L(t){return A(t," ")}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function O(t,e,n){t.classList[n?"add":"remove"](e)}function k(t,e=document.body){return Array.from(e.querySelectorAll(t))}function T(t){f=t}function I(){if(!f)throw new Error("Function called outside component initialization");return f}const q=[],U=[],B=[],J=[],M=Promise.resolve();let K=!1;function D(t){B.push(t)}function H(t){J.push(t)}let V=!1;const z=new Set;function F(){if(!V){V=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];T(e),G(e.$$)}for(T(null),q.length=0;U.length;)U.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];z.has(e)||(z.add(e),e())}B.length=0}while(q.length);for(;J.length;)J.pop()();K=!1,V=!1,z.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const Y=new Set;let Q;function W(){Q={r:0,c:[],p:Q}}function X(){Q.r||o(Q.c),Q=Q.p}function Z(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function tt(t,e,n,r){if(t&&t.o){if(Y.has(t))return;Y.add(t),Q.c.push((()=>{Y.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const et="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function nt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function rt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function st(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ct(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),i||D((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(D)}function at(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(q.push(t),K||(K=!0,M.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,s,i,c,a,l=[-1]){const u=f;T(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&lt(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){d=!0;const t=N(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&Z(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),d=!1,F()}T(u)}class ft{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function pt(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!dt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ht={};function mt(t){let e,n;const r=t[1].default,o=a(r,t,t[0],null);return{c(){e=_("main"),o&&o.c(),this.h()},l(t){e=R(t,"MAIN",{class:!0});var n=N(e);o&&o.l(n),n.forEach(g),this.h()},h(){E(e,"class","svelte-1uhnsl8")},m(t,r){m(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&u(o,r,t,t[0],n?e:-1,null,null)},i(t){n||(Z(o,t),n=!0)},o(t){tt(o,t),n=!1},d(t){t&&g(e),o&&o.d(t)}}}function gt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class $t extends ft{constructor(t){super(),ut(this,t,gt,mt,i,{})}}function _t(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=b(r)},l(t){e=R(t,"PRE",{});var o=N(e);n=A(o,r),o.forEach(g)},m(t,r){m(t,e,r),h(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&j(n,r)},d(t){t&&g(e)}}}function yt(e){let n,r,o,s,i,c,a,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&_t(e);return{c(){r=v(),o=_("h1"),s=b(e[0]),i=v(),c=_("p"),a=b(f),l=v(),d&&d.c(),u=x(),this.h()},l(t){k('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(g),r=L(t),o=R(t,"H1",{class:!0});var n=N(o);s=A(n,e[0]),n.forEach(g),i=L(t),c=R(t,"P",{class:!0});var p=N(c);a=A(p,f),p.forEach(g),l=L(t),d&&d.l(t),u=x(),this.h()},h(){E(o,"class","svelte-8od9u6"),E(c,"class","svelte-8od9u6")},m(t,e){m(t,r,e),m(t,o,e),h(o,s),m(t,i,e),m(t,c,e),h(c,a),m(t,l,e),d&&d.m(t,e),m(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(s,t[0]),2&e&&f!==(f=t[1].message+"")&&j(a,f),t[2]&&t[1].stack?d?d.p(t,e):(d=_t(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&g(r),t&&g(o),t&&g(i),t&&g(c),t&&g(l),d&&d.d(t),t&&g(u)}}}function bt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class vt extends ft{constructor(t){super(),ut(this,t,bt,yt,i,{status:0,error:1})}}function xt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&st(n.$$.fragment),r=x()},l(t){n&&it(n.$$.fragment,t),r=x()},m(t,e){n&&ct(n,t,e),m(t,r,e),o=!0},p(t,e){const o=16&e?nt(s,[rt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){W();const t=n;tt(t.$$.fragment,1,0,(()=>{at(t,1)})),X()}i?(n=new i(c()),st(n.$$.fragment),Z(n.$$.fragment,1),ct(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&Z(n.$$.fragment,t),o=!0)},o(t){n&&tt(n.$$.fragment,t),o=!1},d(t){t&&g(r),n&&at(n,t)}}}function wt(t){let e,n;return e=new vt({props:{error:t[0],status:t[1]}}),{c(){st(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){ct(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function Et(t){let e,n,r,o;const s=[wt,xt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),m(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(W(),tt(i[a],1,1,(()=>{i[a]=null})),X(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),Z(n,1),n.m(r.parentNode,r))},i(t){o||(Z(n),o=!0)},o(t){tt(n),o=!1},d(t){i[e].d(t),t&&g(r)}}}function St(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Et]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new $t({props:s}),{c(){st(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){ct(n,t,e),r=!0},p(t,[e]){const r=12&e?nt(o,[4&e&&{segment:t[2][0]},8&e&&rt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Z(n.$$.fragment,t),r=!0)},o(t){tt(n.$$.fragment,t),r=!1},d(t){at(n,t)}}}function Nt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,d;return u=l,I().$$.after_update.push(u),f=ht,d=r,I().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class Pt extends ft{constructor(t){super(),ut(this,t,Nt,St,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Rt=[],At=[{js:()=>Promise.all([import("./index.8e6d8ef2.js"),__inject_styles(["client-1890402d.css","index-ea8cb081.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./dashboard.e42add95.js"),__inject_styles(["client-1890402d.css","dashboard-94b3f808.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./login.5feac0f3.js"),__inject_styles(["client-1890402d.css","login-d4aa463f.css"])]).then((function(t){return t[0]}))}],Lt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/dashboard\/?$/,parts:[{i:1}]},{pattern:/^\/login\/?$/,parts:[{i:2}]}];
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
function jt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Ct(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ot,kt=1;const Tt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},It={};let qt,Ut;function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(qt))return null;let e=t.pathname.slice(qt.length);if(""===e&&(e="/"),!Rt.some((t=>t.test(e))))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],o=r.pattern.exec(e);if(o){const n=Bt(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Mt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Ct(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Ht(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Tt.pushState({id:Ot},"",o.href)}}function Kt(){return{x:pageXOffset,y:pageYOffset}}function Dt(t){if(It[Ot]=Kt(),t.state){const e=Jt(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else kt=kt+1,function(t){Ot=t}(kt),Tt.replaceState({id:Ot},"",location.href)}function Ht(t,e,n,r){return jt(this,void 0,void 0,(function*(){const o=!!e;if(o)Ot=e;else{const t=Kt();It[Ot]=t,Ot=e=++kt,It[Ot]=n?t:{x:0,y:0}}if(yield Ut(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=It[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),It[Ot]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Vt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let zt,Ft=null;function Gt(t){const e=Ct(t.target);e&&"prefetch"===e.rel&&function(t){const e=Jt(new URL(t,Vt(document)));if(e)Ft&&t===Ft.href||(Ft={href:t,promise:fe(e)}),Ft.promise}(e.href)}function Yt(t){clearTimeout(zt),zt=setTimeout((()=>{Gt(t)}),20)}function Qt(t,e={noscroll:!1,replaceState:!1}){const n=Jt(new URL(t,Vt(document)));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Ht(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Wt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Xt,Zt,te,ee=!1,ne=[],re="{}";const oe={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:pt(null),session:pt(Wt&&Wt.session)};let se,ie,ce;function ae(t,e){const{error:n}=t;return Object.assign({error:n},e)}function le(t){return jt(this,void 0,void 0,(function*(){Xt&&oe.preloading.set(!0);const e=function(t){return Ft&&Ft.href===t.href?Ft.promise:fe(t)}(t),n=Zt={},r=yield e,{redirect:o}=r;if(n===Zt)if(o)yield Qt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ue(n,e,ae(e,t.page))}}))}function ue(t,e,n){return jt(this,void 0,void 0,(function*(){oe.page.set(n),oe.preloading.set(!1),Xt?Xt.$set(e):(e.stores={page:{subscribe:oe.page.subscribe},preloading:{subscribe:oe.preloading.subscribe},session:oe.session},e.level0={props:yield te},e.notify=oe.page.notify,Xt=new Pt({target:ce,props:e,hydrate:!0})),ne=t,re=JSON.stringify(n.query),ee=!0,ie=!1}))}function fe(t){return jt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!te){const t=()=>({});te=Wt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},se)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>jt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==re)return!0;const o=ne[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const d=a++;if(!ie&&!u&&ne[c]&&ne[c].part===e.i)return ne[c];u=!1;const{default:p,preload:h}=yield At[e.i].js();let m;return m=ee||!Wt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},se):{}:Wt.preloaded[c+1],s[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}oe.session.subscribe((t=>jt(void 0,void 0,void 0,(function*(){if(se=t,!ee)return;ie=!0;const e=Jt(new URL(location.href)),n=Zt={},{redirect:r,props:o,branch:s}=yield fe(e);n===Zt&&(r?yield Qt(r.location,{replaceState:!0}):yield ue(s,o,ae(o,e.page)))}))));const de=function(){const{subscribe:t,set:e}=pt(0);return{subscribe:t,setShop:t=>e(t)}}(),pe=new URLSearchParams(window.location.search);var he,me,ge;(he={target:document.querySelector("#sapper")},me=he.target,ce=me,ge=Wt.baseUrl,qt=ge,Ut=le,"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Tt.scrollRestoration="auto"})),addEventListener("load",(()=>{Tt.scrollRestoration="manual"})),addEventListener("click",Mt),addEventListener("popstate",Dt),addEventListener("touchstart",Gt),addEventListener("mousemove",Yt),Wt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Wt;te||(te=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:te},level1:{props:{status:s,error:i},component:vt},segments:o},a=Bt(n);ue([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Tt.replaceState({id:kt},"",e);const n=Jt(new URL(location.href));if(n)return Ht(n,kt,!0,t)}))).then((()=>{console.log("client-side app has started");let t=pe.get("shop");null==t&&(t="demo/myshopify.com"),de.setShop(t),console.log("shop "+t)}));export{S as A,nt as B,a as C,O as D,u as E,x as F,W as G,X as H,$ as I,H as J,U as K,ot as L,C as M,w as N,o as O,et as P,Qt as Q,ft as S,v as a,R as b,L as c,g as d,_ as e,N as f,A as g,E as h,ut as i,m as j,h as k,j as l,c as m,t as n,de as o,st as p,k as q,it as r,i as s,b as t,ct as u,Z as v,tt as w,at as x,e as y,y as z};

import __inject_styles from './inject_styles.5607aec6.js';