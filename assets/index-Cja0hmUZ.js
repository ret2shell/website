import{j as r,e as t,A as S,O as w,t as m,c as g,z as y,w as C,k as p,v as T,M as h}from"./index-D-4Ec2E9.js";import{d as k,e as A}from"./index-CDuUghHV.js";import{S as j}from"./sidebar-layout-Bu_uU4Ep.js";import{p as L,T as D}from"./header-C4_4FixI.js";import{A as I}from"./article-B5D9jRlm.js";import{L as M}from"./loading-tips-CriPG-RJ.js";import{A as N}from"./avatar-C8VLBfIW.js";import{D as O}from"./divider-CRTXR2Ng.js";import"./datetime-P2UEB0PT.js";import"./index-CqttnvLX.js";import"./index-Oj2p9cu_.js";import"./toast-RiaHQnvP.js";import"./card-r-C9G86U.js";import"./popover-DNwyEML6.js";import"./use-environment-context-C2cuRCHg.js";import"./popover-root-C7Ww2Kgi.js";import"./use-presence-context-DB1lc17V.js";import"./use-locale-context-Cw8uL8t2.js";import"./spin-Cv0qhUOt.js";import"./loading-tips-Bo-x9fE6.js";async function U(e){return await k.get(`${A}/user/${e}`).json()}var z=m('<div class="flex flex-col space-y-2 p-3 lg:p-6"><div class="flex flex-row space-x-4 lg:space-x-6 p-2 lg:p-4 items-center"><div class="flex-1 flex flex-col space-y-1 justify-center"><h2 class=font-bold></h2><p class=opacity-60><span></span><span>#</span><span>'),B=m('<div class="w-full h-full overflow-hidden">');function G(e){return(()=>{var a=B();return r(a,t(w,{get options(){return{scrollbars:{theme:`os-theme-${S()}`,autoHide:"scroll"}}},class:"relative w-full h-full print:h-auto print:overflow-auto",defer:!0,get children(){var l=z(),i=l.firstChild,s=i.firstChild,o=s.firstChild,c=o.nextSibling,n=c.firstChild,f=n.nextSibling,u=f.nextSibling;return r(i,t(N,{class:"w-12 h-12",get src(){return e.user?.avatar||void 0},get fallback(){return e.user?.nickname},get loading(){return e.loading}}),s),r(o,()=>e.user?.nickname),r(n,()=>e.user?.account),r(u,()=>e.user?.id.toString(16).padStart(6,"0")),r(l,t(O,{}),null),l}})),a})()}var H=m('<div class="flex-1 flex flex-col items-center"><div class="flex flex-col w-full max-w-5xl p-3 lg:p-6"><h3 class="h-12 flex items-center border-b border-b-layer-content/10 font-bold space-x-2"><span class="icon-[fluent--person-20-regular] w-5 h-5"></span><span></span></h3><section></section><h3 class="h-12 flex items-center border-b border-b-layer-content/10 font-bold space-x-2"><span class="icon-[fluent--flag-20-regular] w-5 h-5"></span><span>');function se(){const[e,a]=g(null),[l,i]=g(!0),s=y(),o=C(),c=Number.parseInt(s.user)||null;return c?(U(c).then(a).finally(()=>i(!1)),[t(D,{get title(){return`${e()?.nickname} - ${L.config.name||p("platform.name")}`}}),t(j,{get leftBar(){return t(G,{get user(){return e()},get loading(){return l()}})},get children(){var n=H(),f=n.firstChild,u=f.firstChild,x=u.firstChild,$=x.nextSibling,d=u.nextSibling,b=d.nextSibling,v=b.firstChild,_=v.nextSibling;return r($,()=>p("user.introductionTitle")),r(d,t(T,{get children(){return[t(h,{get when(){return l()},get children(){return t(M,{})}}),t(h,{when:!0,get children(){return t(I,{get content(){return e()?.description||p("user.noDescription")}})}})]}})),r(_,()=>p("user.joinedGamesTitle")),n}})]):(o("/sigtrap/404",{replace:!0}),null)}export{se as default};
