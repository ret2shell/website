import{g as t,s as q}from"./game-nYWJIA85.js";import{p as A,T as D}from"./header-C4_4FixI.js";import{x as G,w as I,c as N,b as S,D as P,m as z,j as n,e as l,l as y,i as f,S as C,r as d,t as g,a as M,k as _,q as R}from"./index-D-4Ec2E9.js";import{L as B}from"./logo-animate-Dsq31Qvw.js";import{b as L}from"./bg-game-default-CaNjxZx0.js";import{m as v}from"./media-D4EZZSPo.js";import{L as F}from"./loading-tips-CriPG-RJ.js";import"./user-DLuZu1WC.js";import"./datetime-P2UEB0PT.js";import"./index-CDuUghHV.js";import"./spin-Cv0qhUOt.js";import"./loading-tips-Bo-x9fE6.js";var H=g('<img class="w-full h-full object-contain">'),J=g('<div class="absolute left-6 bottom-4">'),K=g('<div><div class="w-screen h-screen relative"><img alt=Cover><div class="absolute top-0 left-0 w-screen h-screen bg-layer/80 flex flex-col items-center justify-center"><div></div><div><h1 class="text-4xl font-bold"></h1><p class="text-base opacity-60">');function O(i){const h=G(),T=I(),[a,p]=N(!1),j=new Image;return j.src=L,S(()=>{t.current&&(h.pathname==="/games"||h.pathname==="/games/")&&p(!0)}),S(()=>{t.current&&a()&&(setTimeout(()=>{T(`/games/${t.current?.id}`)},2e3),setTimeout(()=>{p(!1)},3e3))}),(()=>{var c=K(),b=c.firstChild,m=b.firstChild,E=m.nextSibling,u=E.firstChild,x=u.nextSibling,$=x.firstChild,k=$.nextSibling;return P(c,z(i,{get class(){return`fixed w-full top-0 left-0 overflow-hidden lg:overflow-clip transition-all ease-in-out z-50 duration-500 ${a()?"h-full":"h-0"} ${i.class}`}}),!1,!0),n(u,l(C,{get when(){return t.current?.logo},get fallback(){return l(B,{class:"w-full h-full object-contain"})},get children(){var e=H();return y(r=>{var o=v(t.current.logo),s=t.current?.name;return o!==r.e&&f(e,"src",r.e=o),s!==r.t&&f(e,"alt",r.t=s),r},{e:void 0,t:void 0}),e}})),n($,()=>t.current?.name),n(k,()=>t.current?.brief),n(b,l(C,{get when(){return a()},get children(){var e=J();return n(e,l(F,{})),e}}),null),y(e=>{var r=`w-screen h-screen transition-all ease-out duration-[2000ms] ${a()?"scale-125 blur-md":""}`,o=t.preload?.cover&&v(t.preload.cover)||t.current?.cover&&v(t.current.cover)||L,s=`aspect-square h-48 transition-all ease-out duration-500 delay-500 ${a()?"":"scale-150 blur-xl opacity-0 rotate-90"}`,w=`flex flex-col items-center space-y-4 transition-all ease-out duration-500 delay-1000 overflow-hidden mt-8 ${a()?"h-32":"h-0"}`;return r!==e.e&&d(m,e.e=r),o!==e.t&&f(m,"src",e.t=o),s!==e.a&&d(u,e.a=s),w!==e.o&&d(x,e.o=w),e},{e:void 0,t:void 0,a:void 0,o:void 0}),c})()}function oe(i){return M(()=>{q({current:null,games:[],preload:null})}),[l(D,{get title(){return`${_("game.title")} - ${A.config.name||_("platform.name")}`}}),R(()=>i.children),l(O,{})]}export{oe as default};