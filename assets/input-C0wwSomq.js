import{e as r,s as y,c as b,S as i,j as l,l as h,i as _,r as g,D as C,m as j,P as k,t as c,f as B}from"./index-D-4Ec2E9.js";import{m as L,a as I}from"./use-environment-context-C2cuRCHg.js";import{u as z,P as A,a as O,b as S}from"./popover-root-C7Ww2Kgi.js";const p=e=>{const a=z(),s=L(()=>a().getAnchorProps(),e);return r(I.div,s)};var E=c("<label class=label>"),R=c("<div>"),D=c("<button type=button><span>"),F=c('<div class="flex flex-row"><input>'),N=c('<p class="card-content px-4 p-2">');function H(e){const a=e.size||"md",[s,u]=y(e,["icon","extraBtn","size","error","noLabel"]),v=()=>`input w-0 flex-1 input-${a} ${s.icon?"!rounded-l-none":""} ${u.type==="password"||s.extraBtn?"!rounded-r-none":""} ${s.error?"input-error":""}`,x=()=>`flex flex-col relative space-y-1 ${e.class?`${e.class}`:""} ${e.classList&&Object.keys(e.classList).filter(t=>e.classList?.[t]).join(" ")}`,[d,w]=b(e.type);return r(S,{autoFocus:!1,get open(){return!!e.error},closeOnInteractOutside:!1,get children(){return[r(p,{get class(){return x()},get children(){return[r(i,{get when(){return!s.noLabel&&(e.title||e.name)},get children(){var t=E();return l(t,()=>e.title||e.name),h(()=>_(t,"for",e.name)),t}}),(()=>{var t=F(),m=t.firstChild;return l(t,r(i,{get when(){return e.icon},get children(){var n=R();return g(n,`rounded-l-${a==="md"?"lg":"md"} flex flex-shrink-0 flex-row items-center justify-center ${a==="md"?"h-12 w-12":"h-8 w-8"} bg-layer-content/10`),l(n,()=>e.icon),n}}),m),C(m,j({get id(){return e.name}},u,{get value(){return u.value||""},get class(){return v()},get type(){return d()}}),!1,!1),l(t,r(i,{get when(){return e.type==="password"},get children(){var n=D(),P=n.firstChild;return n.$$click=()=>w(d()==="password"?"text":"password"),h(o=>{var f=`btn !rounded-l-none btn-${a} justify-center ${e.extraBtn?"!rounded-none":""}`,$=`icon-[fluent--${d()==="password"?"eye":"eye-off"}-20-regular] w-5 h-5`;return f!==o.e&&g(n,o.e=f),$!==o.t&&g(P,o.t=$),o},{e:void 0,t:void 0}),n}}),null),l(t,r(i,{get when(){return e.extraBtn},get children(){return e.extraBtn}}),null),t})()]}}),r(k,{get children(){return r(A,{get children(){return r(O,{get class(){return`card ${e.error?"card-error":""}`},get children(){var t=N();return l(t,()=>e.error),t}})}})}})]}})}B(["click"]);export{H as I,p as P};
