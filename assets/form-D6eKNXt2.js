import{c as E,b as F,d as $,e as n,k as r,m as d,D as h,l as f,r as g,q as C,t as m}from"./index-DHCM5LJk.js";import{u as D,c as R}from"./wiki-2Ru4Rn3u.js";import{A}from"./article-DsbJ-ALU.js";import{a as W}from"./index-DzhbeeeD.js";import{a as B}from"./toast-Bmssr5_f.js";import{B as s}from"./button-CWvnh7OL.js";import{E as N}from"./editor-CCtxy95a.js";import{I as y}from"./input-Cs8V4IvD.js";import{D as S}from"./datetime-P2UEB0PT.js";import{c as I}from"./Form-CGI4Segl.js";import{s as x}from"./setValues-D24qEHVO.js";import{r as p}from"./required-C9pyDEac.js";import{s as v}from"./setValue-Bf_BOLWD.js";var M=m('<span class="icon-[fluent--book-20-regular] w-5 h-5">'),b=m("<input type=checkbox>"),k=m("<span>"),T=m('<span class="icon-[fluent--code-20-regular] w-5 h-5">');function Z(a){const[o,{Form:q,Field:u}]=I(),[w,_]=E(!1);F(()=>{a.editSource?$(()=>{x(o,{title:a.editSource.title,path:a.editSource.path.join("/"),content:a.editSource.content||"",enable_comment:a.editSource.enable_comment,draft:a.editSource.draft,published:a.editSource.published})}):$(()=>{x(o,{title:void 0,path:void 0,content:void 0,enable_comment:!0,draft:!0,published:!1})})});function P(l){_(!0);const c={...l,path:l.path.split("/"),id:a.editSource?.id||0,created_at:a.editSource?.created_at||S.now(),updated_at:S.now(),publisher_id:a.editSource?.publisher_id||W.id,access_policy:A.Wiki,weight:0};(a.editSource?D:R)(c).then(e=>a.onDone(e)).catch(e=>{e.response.text().then(i=>{B({level:"error",description:`${a.editSource?r("form.saveFailed"):r("form.createFailed")}: ${i}`,duration:5e3})})}).finally(()=>{_(!1)})}return n(q,{onSubmit:P,class:"flex flex-col space-y-2 self-center w-full max-w-5xl flex-1 p-3 lg:p-6",get children(){return[n(u,{name:"title",get validate(){return[p(r("wiki.titleRequired"))]},children:(l,c)=>n(y,d({get icon(){return M()},get placeholder(){return r("wiki.titlePlaceholder")},get title(){return r("wiki.titlePlaceholder")}},c,{get value(){return l.value},get error(){return l.error},required:!0,get extraBtn(){return[n(u,{name:"enable_comment",type:"boolean",children:(e,i)=>[(()=>{var t=b();return h(t,d(i,{name:"enable_comment",get checked(){return e.value},class:"hidden"}),!1,!1),t})(),n(s,{class:"!rounded-none",get title(){return r("wiki.enableComment")},type:"button",onClick:()=>{v(o,"enable_comment",!e.value)},get children(){var t=k();return f(()=>g(t,`w-5 h-5 icon-[fluent--chat-20-${e.value?"filled":"regular"}] ${e.value?"text-primary":""}`)),t}})]}),n(u,{name:"draft",type:"boolean",children:(e,i)=>[(()=>{var t=b();return h(t,d(i,{name:"draft",get checked(){return e.value},class:"hidden"}),!1,!1),t})(),n(s,{class:"!rounded-none",get title(){return r("wiki.draft")},type:"button",onClick:()=>{v(o,"draft",!e.value)},get children(){var t=k();return f(()=>g(t,`w-5 h-5 icon-[fluent--edit-20-${e.value?"filled":"regular"}] ${e.value?"text-primary":""}`)),t}})]}),n(u,{name:"published",type:"boolean",children:(e,i)=>[(()=>{var t=b();return h(t,d(i,{name:"published",get checked(){return e.value},class:"hidden"}),!1,!1),t})(),n(s,{class:"!rounded-l-none",get title(){return r("wiki.published")},type:"button",onClick:()=>{v(o,"published",!e.value)},get children(){var t=k();return f(()=>g(t,`w-5 h-5 icon-[fluent--megaphone-loud-20-${e.value?"filled":"regular"}] ${e.value?"text-primary":""}`)),t}})]})]}}))}),n(u,{name:"path",get validate(){return[p(r("wiki.pathRequired"))]},children:(l,c)=>n(y,d({get icon(){return T()},get placeholder(){return r("wiki.pathPlaceholder")},get title(){return r("wiki.pathPlaceholder")}},c,{get value(){return l.value},get error(){return l.error},required:!0}))}),n(u,{name:"content",get validate(){return[p(r("wiki.contentRequired"))]},children:l=>n(N,{form:o,lineNumbers:!0,class:"flex-1",lang:"markdown",placeholder:"MARKDOWN",get title(){return r("wiki.contentPlaceholder")},name:"content",get value(){return l.value},get error(){return l.error}})}),n(s,{type:"submit",level:"primary",class:"!mt-4",get loading(){return w()},get disabled(){return w()},get children(){return C(()=>!!a.editSource)()?r("form.save"):r("form.create")}})]}})}export{Z as E};
