import{S as e,i as t,s as a,a as n,e as o,t as s,q as c,d as i,c as l,b as r,f as u,g as h,h as p,j as d,k as f,v as T,w as g,n as m,x as v}from"./client.ce206499.js";function O(e){let t,a,O,N,E,y,C,S,w,U,b,j,k,A,I;return{c(){t=n(),a=o("h1"),O=s("CONNECT TO SAKURA.ECO"),N=n(),E=o("input"),y=n(),C=o("input"),S=n(),w=o("button"),U=s("Sign In"),b=n(),j=o("button"),k=s("Test"),this.h()},l(e){c('[data-svelte="svelte-1ine71f"]',document.head).forEach(i),t=l(e),a=r(e,"H1",{});var n=u(a);O=h(n,"CONNECT TO SAKURA.ECO"),n.forEach(i),N=l(e),E=r(e,"INPUT",{placeholder:!0}),y=l(e),C=r(e,"INPUT",{placeholder:!0}),S=l(e),w=r(e,"BUTTON",{});var o=u(w);U=h(o,"Sign In"),o.forEach(i),b=l(e),j=r(e,"BUTTON",{});var s=u(j);k=h(s,"Test"),s.forEach(i),this.h()},h(){document.title="About",p(E,"placeholder","enter your email"),p(C,"placeholder","enter your password")},m(n,o){d(n,t,o),d(n,a,o),f(a,O),d(n,N,o),d(n,E,o),T(E,e[0]),d(n,y,o),d(n,C,o),T(C,e[1]),d(n,S,o),d(n,w,o),f(w,U),d(n,b,o),d(n,j,o),f(j,k),A||(I=[g(E,"input",e[4]),g(C,"input",e[5]),g(w,"click",e[3],{once:!0}),g(j,"click",e[2],{once:!0})],A=!0)},p(e,[t]){1&t&&E.value!==e[0]&&T(E,e[0]),2&t&&C.value!==e[1]&&T(C,e[1])},i:m,o:m,d(e){e&&i(t),e&&i(a),e&&i(N),e&&i(E),e&&i(y),e&&i(C),e&&i(S),e&&i(w),e&&i(b),e&&i(j),A=!1,v(I)}}}function N(e,t,a){let n="",o="";return[n,o,function(){console.log("test");let e=async function(e){let t="https://sakura.eco/api/widget/articles/"+e;return await fetch(t,{mode:"cors"}).then((e=>e.json())).then((e=>e))}(123);console.log(e)},function(){console.log("login");let e=async function(e,t){let a={email:e,password:t};return await fetch("https://sakura.eco/api/user/login",{mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.json())).then((e=>e))}(n,o);console.log(e)},function(){n=this.value,a(0,n)},function(){o=this.value,a(1,o)}]}export default class extends e{constructor(e){super(),t(this,e,N,O,a,{})}}
