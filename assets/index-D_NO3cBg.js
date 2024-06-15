import{c as h,b as xe,d as Q,e as r,k as l,y as Ie,a as Ae,j as n,q as x,S as u,l as ze,i as De,F as Ee,M as p,v as W,t as i,u as ce}from"./index-DHCM5LJk.js";import{b as Re,s as qe,T as Ne,u as oe,d as Me}from"./game-C-24t-6X.js";import{d as Oe,e as Be,m as He,a as d}from"./index-DzhbeeeD.js";import{L as Je}from"./logo-animate-DwzBVVhL.js";import{S as ue}from"./spin-B3vkVWkZ.js";import{r as Ke}from"./loading-tips-CelvmSQ5.js";import{m as de}from"./media-DKWJ99ov.js";import{P as T}from"./user-DLuZu1WC.js";import{g as e,i as Ve,c as ge,s as D}from"./game-AtpgpTlS.js";import{T as We}from"./header-C2rgC6oY.js";import{a as $}from"./toast-Bmssr5_f.js";import{A as Qe}from"./article-OyBfJmMV.js";import{B as X}from"./button-CWvnh7OL.js";import{C as me}from"./card-D1oJOCbi.js";import{L as k}from"./link-C85afmZZ.js";import{P as Xe}from"./picture-BcVmyKAE.js";import{T as P}from"./tag-Chhr92Vq.js";import{T as Ye}from"./timer-DxgOX93i.js";import{b as Ze}from"./bg-game-default-CaNjxZx0.js";import{D as c}from"./datetime-P2UEB0PT.js";import{A as et}from"./article-DsbJ-ALU.js";import{E as tt}from"./editor-CCtxy95a.js";import{c as rt}from"./Form-CGI4Segl.js";import{s as pe}from"./setValues-D24qEHVO.js";import{r as nt}from"./required-C9pyDEac.js";import"./loading-tips-D8Ukv1g_.js";import"./popover-C_nceKuQ.js";import"./use-environment-context-CrE27ks0.js";import"./popover-root-Bs3_F_Uf.js";import"./use-presence-context-C0VfJ-0L.js";import"./use-locale-context-Bwyb0cy2.js";import"./components-Dq7YmzrW.js";import"./index-CcaEcIBT.js";import"./index-mQdWiL7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./setValue-Bf_BOLWD.js";async function fe(f,w){const S=new FormData;return S.append("file",f),await Oe.post(`${Be}/media`,{body:S,searchParams:JSON.parse(JSON.stringify({thumbnail:w}))}).json()}function lt(f){const[w,{Form:S,Field:R}]=rt(),[U,j]=h(!1);xe(()=>{f.editSource?Q(()=>{pe(w,{content:f.editSource.content||""})}):Q(()=>{pe(w,{content:void 0})})});function q(C){j(!0),f.onDone({id:f.editSource?.id||0,content:C.content,created_at:f.editSource?.created_at||c.now(),updated_at:f.editSource?.updated_at||c.now(),publisher_id:0,access_policy:et.Game,draft:!1,published:!0,title:e.current?.name||"",path:[],enable_comment:!1,weight:0}).catch(()=>j(!1))}return r(S,{onSubmit:q,class:"flex flex-col space-y-2 self-center w-full max-w-5xl flex-1 p-3 lg:p-6",get children(){return[r(R,{name:"content",get validate(){return[nt(l("game.introRequired"))]},children:C=>r(tt,{form:w,lineNumbers:!0,class:"flex-1",lang:"markdown",placeholder:"MARKDOWN",get title(){return l("game.introPlaceholder")},name:"content",get value(){return C.value},get error(){return C.error}})}),r(X,{type:"submit",level:"primary",class:"!mt-4",get loading(){return U()},get disabled(){return U()},get children(){return l("form.save")}})]}})}var he=i("<input type=file class=hidden>"),_e=i('<span class="icon-[fluent--cloud-arrow-up-20-regular] w-5 h-5 text-primary">'),at=i('<div class="flex flex-row space-x-2">'),it=i('<img width=64 height=64 alt="Logo Broken">'),st=i('<div class="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-end z-10 p-3 lg:p-6 space-y-2"><h2 class="font-bold p-4 rounded-lg bg-layer/50 backdrop-blur flex flex-row space-x-2 w-full"><div class=mx-4></div><div class="flex flex-col space-y-2"><span class=text-3xl></span><span class=opacity-80>'),ct=i('<h3 class="text-xl font-bold opacity-60">'),ot=i('<p class="text-3xl font-bold">'),L=i("<span>"),ut=i('<div class="lg:p-2 flex items-center justify-center"><span class="icon-[fluent--flag-20-filled] w-5 h-5 lg:w-10 lg:h-10 text-primary opacity-60">'),dt=i('<div class="flex flex-col justify-center flex-1"><h3 class="font-bold lg:text-xl px-2"><span></span><span>&nbsp;</span><span class=text-primary>#</span><span class=opacity-60></span></h3><p class="flex-row flex-wrap hidden lg:flex space-x-2 px-2 opacity-60"><span></span><span class="opacity-60 text-primary">-</span><span></span><span class="opacity-60 text-primary">-</span><span> pts'),gt=i('<p class="flex items-center justify-center font-bold lg:text-xl"><span class=opacity-60>No.</span><span class=text-primary>'),mt=i('<span class="icon-[fluent--edit-20-regular] w-5 h-5">'),pt=i('<span class="icon-[fluent--settings-20-regular] w-5 h-5">'),ve=i('<span class="icon-[fluent--people-team-20-regular] w-5 h-5">'),y=i('<span class="flex-1 text-start">'),E=i('<span class="icon-[fluent--chevron-double-right-20-regular] w-5 h-5">'),ft=i('<span class="icon-[fluent--code-20-filled] w-5 h-5">'),ht=i('<span class="icon-[fluent--person-20-regular] w-5 h-5">'),_t=i('<div class="flex-1 flex flex-col items-center justify-center space-y-8 opacity-60"><span>'),vt=i('<div class="flex-1 flex flex-col items-center justify-center space-y-8 opacity-60"><span class="icon-[fluent--thumb-dislike-20-regular] w-24 h-24"></span><span>'),xt=i('<div class="flex-1 flex flex-col lg:flex-row-reverse"><div class="lg:w-1/3 max-h-[calc(100vh-4rem)] lg:sticky lg:top-16 lg:left-0 flex flex-col backdrop-blur border-b border-b-layer-content/10 lg:border-b-0 lg:backdrop-blur-none p-3 lg:p-6 space-y-2"><div class="flex flex-col space-y-2 items-center py-4 lg:py-8 print:hidden"></div><div class="flex-1 hidden lg:flex flex-col print:hidden"><div class="flex flex-row flex-wrap items-start justify-center"></div></div><div class="flex flex-row space-x-2 print:hidden"></div></div><div class="flex-1 flex flex-col space-y-2"><h1 class="text-center text-3xl font-bold mt-4 lg:mt-8">'),$t=i('<span class="icon-[fluent--draw-image-20-regular] w-5 h-5">'),wt=i('<span class="icon-[fluent--flag-20-regular] w-5 h-5">'),bt=i('<span class="text-3xl font-bold text-warning">');function ar(){He();const[f,w]=Ie(),S=()=>f.edit==="true",R=()=>e.current?.register_at&&e.current.register_at>c.now()?l("game.register"):e.current?.start_at&&e.current.start_at>c.now()?l("game.start"):e.current?.end_at&&e.current.end_at>c.now()?l("game.end"):e.current?.archive_at&&e.current.archive_at>c.now()?l("game.archive"):"",U=()=>e.current?.register_at&&e.current.register_at>c.now()?e.current.register_at:e.current?.start_at&&e.current.start_at>c.now()?e.current.start_at:e.current?.end_at&&e.current.end_at>c.now()?e.current.end_at:e.current?.archive_at&&e.current.archive_at>c.now()?e.current.archive_at:c.now(),[j,q]=h(!0),C=setInterval(()=>{q(!!(e.current?.archive_at&&e.current.archive_at>c.now()))},1e3);Ae(()=>clearInterval(C));const[N,F]=h(null),[M,G]=h(!0);xe(()=>{e.current?.introduction_id?Q(()=>{e.current?.introduction_id?Re(e.current.id).then(a=>{F(a),G(!1)}).catch(a=>{a.response.text().then(s=>{$({level:"error",description:`${l("game.introduction.fetchFailed")}: ${s}`,duration:5e3})}),F(null),G(!1)}):(F(null),G(!1))}):(F(null),G(!1))});let O;const[B,Y]=h(!1),[Z,ee]=h(null),[$e,we]=h(!1);function be(){O.click()}function ye(a){a.target&&a.target.files&&a.target.files.length>0&&(e.current&&D({current:{...e.current,cover:URL.createObjectURL(a.target.files[0])}}),ee(a.target.files[0]),Y(!0))}function Se(){Z()&&fe(Z(),!1).then(a=>{e.current&&oe(e.current.id,{...e.current,cover:a.hash}).then(s=>{D({current:s}),$({level:"success",description:l("game.cover.uploaded"),duration:5e3})}).catch(s=>{s.response.text().then(_=>{$({level:"error",description:`${l("game.cover.uploadFailed")}: ${_}`,duration:5e3})})}).finally(()=>{we(!1),ee(null),Y(!1)})}).catch(a=>{a.response.text().then(s=>{$({level:"error",description:`${l("game.cover.uploadFailed")}: ${s}`,duration:5e3})})})}const[H,te]=h(!1),[re,ne]=h(null),[Ce,ke]=h(!1);let J;function Le(){J.click()}function Fe(a){a.target&&a.target.files&&a.target.files.length>0&&(e.current&&D({current:{...e.current,logo:URL.createObjectURL(a.target.files[0])}}),ne(a.target.files[0]),te(!0))}function Te(){re()&&fe(re(),!1).then(a=>{e.current&&oe(e.current.id,{...e.current,logo:a.hash}).then(s=>{D({current:s}),$({level:"success",description:l("game.logo.uploaded"),duration:5e3})}).catch(s=>{s.response.text().then(_=>{$({level:"error",description:`${l("game.logo.uploadFailed")}: ${_}`,duration:5e3})})}).finally(()=>{ke(!1),ne(null),te(!1)})}).catch(a=>{a.response.text().then(s=>{$({level:"error",description:`${l("game.logo.uploadFailed")}: ${s}`,duration:5e3})})})}async function Pe(a){try{const s=await Me(e.current.id,a);F(s),w({edit:null})}catch(s){const _=await s.response.text();$({level:"error",description:`${l("game.introduction.updateFailed")}: ${_}`,duration:5e3})}}return[r(We,{get title(){return e.current?.name||"CTF"}}),(()=>{var a=xt(),s=a.firstChild,_=s.firstChild,le=_.nextSibling,I=le.firstChild,A=le.nextSibling,ae=s.nextSibling,Ue=ae.firstChild;return n(s,r(me,{contentClass:"relative",get children(){return[r(Xe,{class:"aspect-video",get src(){return x(()=>!!e.current?.cover)()&&de(e.current.cover)||Ze}}),(()=>{var t=st(),o=t.firstChild,m=o.firstChild,K=m.nextSibling,z=K.firstChild,V=z.nextSibling;return n(t,r(u,{get when(){return Ve()},get children(){var v=at();return n(v,r(X,{square:!0,size:"sm",class:"bg-layer/50 print:hidden",onClick:()=>B()?Se():be(),get loading(){return $e()},get disabled(){return H()},get children(){return[(()=>{var g=he();g.addEventListener("change",ye);var b=O;return typeof b=="function"?ce(b,g):O=g,g})(),r(u,{get when(){return B()},get fallback(){return $t()},get children(){return _e()}})]}}),null),n(v,r(X,{square:!0,size:"sm",class:"bg-layer/50 print:hidden",onClick:()=>H()?Te():Le(),get loading(){return Ce()},get disabled(){return B()},get children(){return[(()=>{var g=he();g.addEventListener("change",Fe);var b=J;return typeof b=="function"?ce(b,g):J=g,g})(),r(u,{get when(){return H()},get fallback(){return wt()},get children(){return _e()}})]}}),null),v}}),o),n(m,r(u,{get when(){return e.current?.logo},get fallback(){return r(u,{get when(){return M()},get fallback(){return r(Je,{width:64,height:64})},get children(){return r(ue,{width:64,height:64})}})},get children(){var v=it();return ze(()=>De(v,"src",de(e.current.logo))),v}})),n(z,()=>e.current?.name),n(V,()=>e.current?.brief),t})()]}}),_),n(_,r(u,{get when(){return j()},get fallback(){return(()=>{var t=bt();return n(t,()=>l("game.ended")),t})()},get children(){return[(()=>{var t=ct();return n(t,()=>l("game.timerTips",{period:R()})),t})(),(()=>{var t=ot();return n(t,r(Ye,{get end(){return U()}})),t})()]}})),n(I,r(P,{level:"info",class:"m-2",get children(){return r(u,{get when(){return e.current?.team_size&&e.current.team_size>1},get fallback(){return(()=>{var t=L();return n(t,()=>l("game.team.solo")),t})()},get children(){var t=L();return n(t,()=>l("game.team.collab",{size:e.current?.team_size||0})),t}})}}),null),n(I,r(u,{get when(){return e.current?.access_policy.restrict},get fallback(){return r(P,{level:"success",class:"m-2",get children(){var t=L();return n(t,()=>l("game.accessPolicy.open")),t}})},get children(){return r(Ee,{get each(){return e.current?.access_policy.institutes},children:t=>r(P,{level:"success",class:"m-2",get children(){var o=L();return n(o,()=>d.institutes.find(m=>m.id===t)?.name),o}})})}}),null),n(I,r(u,{get when(){return e.current?.hidden},get children(){return r(P,{level:"warning",class:"m-2",get children(){var t=L();return n(t,()=>l("game.hidden")),t}})}}),null),n(I,r(u,{get when(){return e.current?.frozen},get children(){return r(P,{level:"warning",class:"m-2",get children(){var t=L();return n(t,()=>l("game.frozen")),t}})}}),null),n(s,r(u,{get when(){return e.team},get children(){return r(me,{contentClass:"p-3 lg:p-6 flex flex-row space-x-2 lg:space-x-4 print:hidden",get children(){return[ut(),(()=>{var t=dt(),o=t.firstChild,m=o.firstChild,K=m.nextSibling,z=K.nextSibling,V=z.nextSibling,v=o.nextSibling,g=v.firstChild,b=g.nextSibling,ie=b.nextSibling,je=ie.nextSibling,se=je.nextSibling,Ge=se.firstChild;return n(m,()=>e.team?.name),n(V,()=>e.team?.id.toString(16).padStart(6,"0")),n(g,()=>qe(e.team?.state||Ne.Pending)),n(ie,()=>e.team?.institute_name||l("account.institute.none")),n(se,()=>e.team?.score||0,Ge),t})(),(()=>{var t=gt(),o=t.firstChild,m=o.nextSibling;return n(m,()=>e.rank||"NULL"),t})()]}})}}),A),n(A,r(u,{get when(){return x(()=>!!d.id)()&&(e.current?.admins.includes(d.id)&&d.permissions.includes(T.Game)||d.permissions.includes(T.Host))},get children(){return r(k,{get href(){return`/games/${e.current?.id}?edit=true`},square:!0,level:"primary",get children(){return mt()}})}}),null),n(A,r(u,{get when(){return x(()=>!!d.id)()&&(e.current?.admins.includes(d.id)&&d.permissions.includes(T.Game)||d.permissions.includes(T.Host))},get children(){return r(k,{get href(){return`/games/${e.current?.id}/admin`},square:!0,level:"primary",get children(){return pt()}})}}),null),n(A,r(W,{get children(){return[r(p,{get when(){return e.team},get children(){return r(k,{get href(){return`/games/${e.current?.id}/challenges`},class:"flex-1",level:"success",get disabled(){return x(()=>!!e.current?.archive_at)()&&e.current.archive_at<c.now()||e.current?.start_at&&e.current.start_at>c.now()},get children(){return[ve(),r(W,{get children(){return[r(p,{get when(){return x(()=>!!e.current?.archive_at)()&&e.current.archive_at<c.now()},get children(){var t=y();return n(t,()=>l("game.archivedGotoTraining")),t}}),r(p,{get when(){return x(()=>!!e.current?.start_at)()&&e.current.start_at>c.now()},get children(){var t=y();return n(t,()=>l("game.challenge.notStarted")),t}}),r(p,{when:!0,get children(){var t=y();return n(t,()=>l("game.challenge.enter")),t}})]}}),E()]}})}}),r(p,{get when(){return x(()=>!!(d.id&&d.permissions.includes(T.Game)))()&&e.current?.admins.includes(d.id)},get children(){return r(k,{level:"success",class:"flex-1",get href(){return`/games/${e.current?.id}/challenges`},justify:"start",get children(){return[ft(),(()=>{var t=y();return n(t,()=>l("game.admin.manageChallenges")),t})(),E()]}})}}),r(p,{get when(){return d.id&&!e.team},get children(){return r(k,{get href(){return`/games/${e.current?.id}/teams/create`},class:"flex-1",level:"info",get disabled(){return!ge()},get children(){return[ve(),r(u,{get when(){return ge()},get fallback(){return(()=>{var t=y();return n(t,()=>l("game.canNotParticipate")),t})()},get children(){var t=y();return n(t,()=>l("game.team.create.title")),t}}),E()]}})}}),r(p,{get when(){return!d.id},get children(){return r(k,{get href(){return`/account/login?redirect=${encodeURI(`/games/${e.current?.id}/teams/create`)}`},class:"flex-1",level:"warning",get children(){return[ht(),(()=>{var t=y();return n(t,()=>l("game.team.loginThenBack")),t})(),E()]}})}})]}}),null),n(Ue,()=>l("game.introduction.title")),n(ae,r(W,{get children(){return[r(p,{get when(){return S()},get children(){return r(lt,{onDone:Pe,get editSource(){return N()||void 0}})}}),r(p,{get when(){return x(()=>!!N())()&&!M()},get children(){return r(Qe,{class:"self-center",get content(){return N().content},extra:!0,headingAnchors:!0})}}),r(p,{get when(){return M()},get children(){var t=_t(),o=t.firstChild;return n(t,r(ue,{width:32,height:32}),o),n(o,Ke),t}}),r(p,{when:!0,get children(){var t=vt(),o=t.firstChild,m=o.nextSibling;return n(m,()=>l("game.introduction.empty")),t}})]}}),null),a})()]}export{ar as default};