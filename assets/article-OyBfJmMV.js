const __vite__fileDeps=["assets/index-1Yu4C9hY.js","assets/index-DHCM5LJk.js","assets/index-bAZe5k1w.css","assets/_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as x,c as d,b as $,d as m,e as r,D as u,m as h,j as P,S as i,q as b,O as k,A as y,l as T,t as s,_ as A}from"./index-DHCM5LJk.js";import{a as C}from"./toast-Bmssr5_f.js";import{C as E}from"./card-D1oJOCbi.js";import{L as M}from"./loading-tips-D8Ukv1g_.js";import{P as I}from"./popover-C_nceKuQ.js";var L=s("<article>"),R=s("<div class=h-64>"),S=s("<div class=p-3>"),H=s("<article><p>"),O=s('<span class="icon-[fluent--navigation-20-regular] w-5 h-5">');function U(p){const[t,o]=x(p,["content","extra","headingAnchors","toc","noExtraPaddings"]),[c,l]=d(!1),[a,g]=d(null),f=async()=>{const{Markdown:e}=await A(async()=>{const{Markdown:n}=await import("./index-1Yu4C9hY.js").then(_=>_.j);return{Markdown:n}},__vite__mapDeps([0,1,2,3]));if(!a()){const n=new e;await n.init({type:"html",options:{prism:t.extra,katex:t.extra,headingAnchors:t.headingAnchors,toc:t.toc}}),g(n)}},w=async e=>{await f(),await a().renderContent(e)};function v(){setTimeout(()=>{location.hash.replace("#","").length>0&&document.getElementById(decodeURI(location.hash.replace("#","")))?.scrollIntoView({behavior:"smooth"})},100)}return $(()=>{t.content?(l(!1),m(()=>{w(t.content).then(()=>{l(!0),v()}).catch(e=>{C({level:"error",description:e.message,duration:5e3})})})):m(()=>{a()?.reset(),l(!0)})}),r(i,{get when(){return c()},get fallback(){return(()=>{var e=H(),n=e.firstChild;return u(e,h(o,{get class(){return`article !max-w-5xl w-full ${o.class}`}}),!1,!0),P(n,r(M,{})),e})()},get children(){return[(()=>{var e=L();return u(e,h(o,{get class(){return`article !max-w-5xl w-full ${o.class}`},get innerHTML(){return a()?.html()}}),!1,!1),e})(),r(i,{get when(){return!t.noExtraPaddings},get children(){return R()}}),r(i,{get when(){return b(()=>!!(t.toc&&c()))()&&a()?.toc()},get children(){return r(I,{class:"fixed right-3 bottom-16 lg:bottom-3 print:hidden",square:!0,type:"button",get btnContent(){return O()},get children(){return r(E,{class:"m-1",get children(){return r(k,{class:"w-full relative max-h-[60vh]",get options(){return{scrollbars:{theme:`os-theme-${y()}`,autoHide:"scroll"}}},defer:!0,get children(){var e=S();return T(()=>e.innerHTML=a()?.toc()||void 0),e}})}})}})}})]}})}export{U as A};
