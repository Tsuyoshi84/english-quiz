import{S,i as x,s as H,k as f,r as _,a as k,l as d,m as g,u as v,h as u,c as q,b as m,H as h,v as $,n as E,I as y}from"../chunks/index.7c114c24.js";import{s as C}from"../chunks/singletons.013ffa3d.js";const I=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return I().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=k(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(u),n=q(e),i=d(e,"P",{});var p=g(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function w(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let B=class extends S{constructor(t){super(),x(this,t,w,j,H,{})}};export{B as default};
