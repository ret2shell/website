import{e as n,A as f,j as l,S as c,k as s,O as d,t as o,C as h,c as g,l as w,r as b}from"./index-DHCM5LJk.js";import{S as k}from"./sidebar-layout-DmqsIU0T.js";import{p as $,T as y}from"./header-C2rgC6oY.js";import{w as m,r as S}from"./wiki-2Ru4Rn3u.js";import{B as x}from"./button-CWvnh7OL.js";import{a as v}from"./index-CcaEcIBT.js";import{P as _}from"./user-DLuZu1WC.js";import{a as T}from"./index-DzhbeeeD.js";import{D as B}from"./divider-D2gFZMAr.js";import{L as C}from"./link-C85afmZZ.js";import{T as L}from"./treeview-B-39UbGg.js";import"./toast-Bmssr5_f.js";import"./datetime-P2UEB0PT.js";import"./spin-B3vkVWkZ.js";import"./index-mQdWiL7h.js";import"./components-Dq7YmzrW.js";var O=o('<span class="icon-[fluent--eye-off-20-regular] w-5 h-5 text-warning">'),P=o('<span class="icon-[fluent--add-20-regular] w-5 h-5">'),N=o("<span>"),j=o('<div class="p-3 lg:p-6 flex flex-col space-y-2 flex-1 min-h-[calc(100%-4rem)]">'),D=o('<a class="sticky bottom-0 h-16 border-t border-t-layer-content/10 flex flex-row items-center justify-center px-4 space-x-2"href=/docs target=_blank rel="noopener noreferrer"><span class="icon-[fluent--book-20-regular] w-5 h-5"></span><span></span><span class="icon-[fluent--open-20-regular] w-5 h-5 text-primary">');function p(i,e,r){let t=i.find(a=>a.type==="category"&&a.name===e[0]);t||(t={id:e[0],type:"category",icon:"icon-[fluent--book-20-regular]",name:e[0],children:[]},i.push(t)),e.length===1?t.children.push({type:"item",id:r.title,icon:r.draft?"icon-[fluent--edit-20-regular] text-primary":"icon-[fluent--document-one-page-20-regular]",name:r.title,link:`/wiki/${r.id}`,extraPart:n(c,{get when(){return!r.published},get children(){return O()}}),children:[]}):p(t.children,e.slice(1),r)}function J(i){const e=[];for(const r of i)p(e,JSON.parse(JSON.stringify(r.path)),r);return e}function W(){const i=()=>J(m.toc);return n(d,{get options(){return{scrollbars:{theme:`os-theme-${f()}`,autoHide:"scroll"}}},class:"relative w-full h-full print:h-auto print:overflow-auto",defer:!0,get children(){return[(()=>{var e=j();return l(e,n(c,{get when(){return T.permissions.includes(_.Wiki)},get children(){return[n(C,{href:"/wiki/create",level:"primary",get children(){return[P(),(()=>{var r=N();return l(r,()=>s("form.create")),r})()]}}),n(B,{class:"!mt-6 !mb-4"})]}}),null),l(e,n(L,{get tree(){return i()},size:"sm",get highlightPaths(){return m.current?.path}}),null),e})(),(()=>{var e=D(),r=e.firstChild,t=r.nextSibling;return l(t,()=>s("docs.titleTips")),e})()]}})}var q=o("<span>");function ee(i){const r=h({lg:"1024px"}),[t,a]=g(!1);return S(),[n(y,{get title(){return`${s("wiki.title")} - ${$.config.name||s("platform.name")}`}}),n(k,{get leftBar(){return n(W,{})},get showLeftBar(){return t()},get children(){return i.children}}),n(v,{name:"slide-fade-right",get children(){return n(c,{get when(){return!r.lg},get children(){return n(x,{class:"fixed bottom-3 right-3",square:!0,onClick:()=>a(!t()),type:"button",get children(){var u=q();return w(()=>b(u,`transition-transform rotate-${t()?"90":"0"} icon-[fluent--${t()?"dismiss":"book"}-20-regular] w-5 h-5`)),u}})}})}})]}export{ee as default};