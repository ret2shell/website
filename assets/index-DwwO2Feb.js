import{e as a,J as U,m as _,S as Y,U as A,q as $,k as p,t as m,c as V,j as i,l as j,i as L,F as D}from"./index-DHCM5LJk.js";import{g as w}from"./game-AtpgpTlS.js";import{C as M}from"./card-D1oJOCbi.js";import{c as q,b as F,d as f,e as B,f as J,g as I,B as W,k as G,m as C,a as x,q as k,u as H,l as K,o as Q}from"./use-environment-context-CrE27ks0.js";import"./user-DLuZu1WC.js";import"./datetime-P2UEB0PT.js";import"./index-DzhbeeeD.js";var X=q("clipboard").parts("root","control","trigger","indicator","input","label"),g=X.build(),s=F({getRootId:e=>e.ids?.root??`clip-${e.id}`,getInputId:e=>e.ids?.input??`clip-input-${e.id}`,getLabelId:e=>e.ids?.label??`clip-label-${e.id}`,getInputEl:e=>s.getById(e,s.getInputId(e)),writeToClipboard:e=>ee(s.getDoc(e),e.value)});function Z(e,r){const t=e.createElement("pre");return Object.assign(t.style,{width:"1px",height:"1px",position:"fixed",top:"5px"}),t.textContent=r,t}function z(e){const t=W(e).getSelection();if(t==null)return Promise.reject(new Error);t.removeAllRanges();const n=e.ownerDocument,o=n.createRange();return o.selectNodeContents(e),t.addRange(o),n.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function ee(e,r){const t=e.defaultView||window;if(t.navigator.clipboard?.writeText!==void 0)return t.navigator.clipboard.writeText(r);if(!e.body)return Promise.reject(new Error);const n=Z(e,r);return e.body.appendChild(n),z(n),e.body.removeChild(n),Promise.resolve()}function te(e,r,t){const n=e.matches("copied");return{copied:n,value:e.context.value,setValue(o){r({type:"VALUE.SET",value:o})},copy(){r({type:"COPY"})},getRootProps(){return t.element({...g.root.attrs,"data-copied":f(n),id:s.getRootId(e.context)})},getLabelProps(){return t.label({...g.label.attrs,htmlFor:s.getInputId(e.context),"data-copied":f(n),id:s.getLabelId(e.context)})},getControlProps(){return t.element({...g.control.attrs,"data-copied":f(n)})},getInputProps(){return t.input({...g.input.attrs,defaultValue:e.context.value,"data-copied":f(n),readOnly:!0,"data-readonly":"true",id:s.getInputId(e.context),onFocus(o){o.currentTarget.select()},onCopy(){r({type:"INPUT.COPY"})}})},getTriggerProps(){return t.button({...g.trigger.attrs,"aria-label":n?"Copied to clipboard":"Copy to clipboard","data-copied":f(n),onClick(){r({type:"COPY"})}})},getIndicatorProps(o){return t.element({...g.indicator.attrs,hidden:o.copied!==n})}}}function ne(e){const r=B(e);return J({id:"clipboard",initial:"idle",context:{value:"",timeout:3e3,...r},watch:{value:["syncInputElement"]},on:{"VALUE.SET":{actions:["setValue"]},COPY:{target:"copied",actions:["copyToClipboard","invokeOnCopy"]}},states:{idle:{on:{"INPUT.COPY":{target:"copied",actions:["invokeOnCopy"]}}},copied:{after:{COPY_TIMEOUT:"idle"},on:{COPY:{target:"copied",actions:["copyToClipboard","invokeOnCopy"]},"INPUT.COPY":{actions:["invokeOnCopy"]}}}}},{actions:{setValue(t,n){t.value=n.value},copyToClipboard(t){s.writeToClipboard(t)},invokeOnCopy(t){t.onStatusChange?.({copied:!0})},syncInputElement(t){s.setValue(s.getInputEl(t),t.value)}},delays:{COPY_TIMEOUT:t=>t.timeout}})}I()(["getRootNode","id","ids","value","timeout","onStatusChange"]);I()(["copied"]);const[re,h]=G({hookName:"useClipboardContext",providerName:"<ClipboardProvider />"}),oe=e=>{const r=h(),t=C(()=>r().getControlProps(),e);return a(x.div,t)},ae=e=>{const[r,t]=k()(e,["copied"]),n=h(),o=C(n().getIndicatorProps({copied:n().copied}),t),b=U(()=>t.children);return a(x.div,_(o,{get children(){return a(Y,{get when(){return n().copied},get fallback(){return b()},get children(){return r.copied}})}}))},ie=e=>{const r=h(),t=C(()=>r().getInputProps(),e);return a(x.input,t)},le=e=>{const r=H(),t=A(),n=$(()=>({id:t,getRootNode:r().getRootNode,...e})),[o,b]=K(ne(n()),{context:n});return $(()=>te(o,b,Q))},se=e=>{const[r,t]=k()(e,["id","ids","onStatusChange","timeout","value"]),n=le(r),o=C(()=>n().getRootProps(),t);return a(re,{value:n,get children(){return a(x.div,o)}})},ce=e=>{const r=h(),t=C(()=>r().getTriggerProps(),e);return a(x.button,t)};var pe=m('<span class="icon-[fluent--copy-20-regular] w-5 h-5">'),de=m('<span class="icon-[fluent--checkmark-20-regular] w-5 h-5 text-success">');function ue(e){return a(se,_(e,{get children(){return a(oe,{class:"w-full flex flex-row space-x-2",get children(){return[a(ie,{class:"input flex-1"}),a(ce,{class:"btn btn-md flex items-center justify-center btn-square",get title(){return p("form.copy")},get children(){return a(ae,{class:"flex items-center justify-center",get copied(){return de()},get children(){return pe()}})}})]}})}}))}var ge=m('<p class="opacity-60 inline"><span></span><span>&nbsp;</span><a href=/docs/events class="inline-flex flex-row space-x-2 items-center hover:underline"target=_blank rel=noreferrer><span></span><span class="icon-[fluent--open-16-regular] w-4 h-4 text-primary"></span></a><span>.&nbsp;</span><span>'),me=m('<div class="flex-1 flex flex-col items-center"><div class="flex-1 flex flex-col w-full max-w-5xl p-3 lg:p-6"><h2 class="h-12 flex items-center border-b border-b-layer-content/10 font-bold space-x-2"><span class="icon-[fluent--cloud-flow-20-regular] w-5 h-5"></span><span> API</span></h2><div class=h-4></div><h2 class="h-12 flex items-center border-b border-b-layer-content/10 font-bold space-x-2"><span class="icon-[fluent--developer-board-lightning-20-regular] w-5 h-5"></span><span>'),be=m('<div class="flex-1 flex flex-col items-center justify-center space-y-8 opacity-60"><span class="icon-[fluent--desktop-20-regular] w-24 h-24"></span><span>'),fe=m('<div class="h-12 border-b border-b-layer-content/10 flex flex-row items-center space-x-4 px-2"><span class=font-bold></span><span class="flex-1 opacity-60 truncate"></span><span class=flex-shrink-0>');function we(){const[e,r]=V([]);return(()=>{var t=me(),n=t.firstChild,o=n.firstChild,b=o.firstChild,P=b.nextSibling,S=P.firstChild,v=o.nextSibling,T=v.nextSibling,O=T.firstChild,E=O.nextSibling;return i(P,()=>p("game.admin.automate.title"),S),i(n,a(M,{level:"info",class:"mt-2",contentClass:"py-2 px-4",get children(){var l=ge(),c=l.firstChild,d=c.nextSibling,u=d.nextSibling,y=u.firstChild,R=u.nextSibling,N=R.nextSibling;return i(c,()=>p("game.admin.automate.tips1")),i(y,()=>p("docs.title")),i(N,()=>p("game.admin.automate.tips2")),l}}),v),i(n,a(ue,{class:"w-full mt-2",get value(){return`${window.origin.replace("http","ws")}/api/event/connect?game_id=${w.current?.id}&token=${w.current?.token||void 0}`}}),v),i(E,()=>p("game.admin.automate.linkedDevices")),i(n,a(D,{get each(){return e()},get fallback(){return(()=>{var l=be(),c=l.firstChild,d=c.nextSibling;return i(d,()=>p("game.admin.automate.noDevicesLinked")),l})()},children:l=>(()=>{var c=fe(),d=c.firstChild,u=d.nextSibling,y=u.nextSibling;return i(d,()=>l.ip),i(u,()=>l.ua),i(y,()=>l.time),j(()=>L(u,"title",l.ua)),c})()}),null),t})()}export{we as default};