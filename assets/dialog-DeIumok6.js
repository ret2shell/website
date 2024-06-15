import{e as l,S as m,U as y,q as C,s as O,m as v,P as D,j as k,t as b}from"./index-DHCM5LJk.js";import{c as F,b as T,e as S,f as w,g as L,n as B,r as f,j as R,k as $,m as d,a as p,u as N,l as j,o as q,q as G}from"./use-environment-context-CrE27ks0.js";import{t as M,c as _,b as I,u as P,s as A,d as K,R as x,P as U}from"./use-presence-context-C0VfJ-0L.js";import{p as V,c as Z,d as z}from"./popover-root-Bs3_F_Uf.js";import{u as H}from"./use-locale-context-Bwyb0cy2.js";var W=F("dialog").parts("trigger","backdrop","positioner","content","title","description","closeTrigger"),c=W.build(),n=T({getPositionerId:e=>e.ids?.positioner??`dialog:${e.id}:positioner`,getBackdropId:e=>e.ids?.backdrop??`dialog:${e.id}:backdrop`,getContentId:e=>e.ids?.content??`dialog:${e.id}:content`,getTriggerId:e=>e.ids?.trigger??`dialog:${e.id}:trigger`,getTitleId:e=>e.ids?.title??`dialog:${e.id}:title`,getDescriptionId:e=>e.ids?.description??`dialog:${e.id}:description`,getCloseTriggerId:e=>e.ids?.closeTrigger??`dialog:${e.id}:close`,getContentEl:e=>n.getById(e,n.getContentId(e)),getPositionerEl:e=>n.getById(e,n.getPositionerId(e)),getBackdropEl:e=>n.getById(e,n.getBackdropId(e)),getTriggerEl:e=>n.getById(e,n.getTriggerId(e)),getTitleEl:e=>n.getById(e,n.getTitleId(e)),getDescriptionEl:e=>n.getById(e,n.getDescriptionId(e)),getCloseTriggerEl:e=>n.getById(e,n.getCloseTriggerId(e))});function J(e,o,t){const r=e.context["aria-label"],s=e.matches("open"),a=e.context.renderedElements;return{open:s,setOpen(i){i!==s&&o(i?"OPEN":"CLOSE")},getTriggerProps(){return t.button({...c.trigger.attrs,dir:e.context.dir,id:n.getTriggerId(e.context),"aria-haspopup":"dialog",type:"button","aria-expanded":s,"data-state":s?"open":"closed","aria-controls":n.getContentId(e.context),onClick(i){i.defaultPrevented||o("TOGGLE")}})},getBackdropProps(){return t.element({...c.backdrop.attrs,dir:e.context.dir,hidden:!s,id:n.getBackdropId(e.context),"data-state":s?"open":"closed"})},getPositionerProps(){return t.element({...c.positioner.attrs,dir:e.context.dir,id:n.getPositionerId(e.context),style:{pointerEvents:s?void 0:"none"}})},getContentProps(){return t.element({...c.content.attrs,dir:e.context.dir,role:e.context.role,hidden:!s,id:n.getContentId(e.context),tabIndex:-1,"data-state":s?"open":"closed","aria-modal":!0,"aria-label":r||void 0,"aria-labelledby":r||!a.title?void 0:n.getTitleId(e.context),"aria-describedby":a.description?n.getDescriptionId(e.context):void 0})},getTitleProps(){return t.element({...c.title.attrs,dir:e.context.dir,id:n.getTitleId(e.context)})},getDescriptionProps(){return t.element({...c.description.attrs,dir:e.context.dir,id:n.getDescriptionId(e.context)})},getCloseTriggerProps(){return t.button({...c.closeTrigger.attrs,dir:e.context.dir,id:n.getCloseTriggerId(e.context),type:"button",onClick(i){i.defaultPrevented||(i.stopPropagation(),o("CLOSE"))}})}}}function Q(e){const o=S(e);return w({id:"dialog",initial:o.open?"open":"closed",context:{role:"dialog",renderedElements:{title:!0,description:!0},modal:!0,trapFocus:!0,preventScroll:!0,closeOnInteractOutside:!0,closeOnEscape:!0,restoreFocus:!0,...o},created:["checkInitialFocusEl"],watch:{open:["toggleVisibility"]},states:{open:{entry:["checkRenderedElements","syncZIndex"],activities:["trackDismissableElement","trapFocus","preventScroll","hideContentBelow"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["setFinalFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}]}},closed:{on:{"CONTROLLED.OPEN":{target:"open"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}]}}}},{guards:{isOpenControlled:t=>!!t["open.controlled"]},activities:{trackDismissableElement(t,r,{send:s}){return M(()=>n.getContentEl(t),{defer:!0,pointerBlocking:t.modal,exclude:[n.getTriggerEl(t)],onInteractOutside(i){t.onInteractOutside?.(i),(!t.closeOnInteractOutside||t.role==="alertdialog")&&i.preventDefault()},persistentElements:t.persistentElements,onFocusOutside:t.onFocusOutside,onPointerDownOutside:t.onPointerDownOutside,onEscapeKeyDown(i){t.onEscapeKeyDown?.(i),t.closeOnEscape?s({type:"CLOSE",src:"escape-key"}):i.preventDefault()},onDismiss(){s({type:"CLOSE",src:"interact-outside"})}})},preventScroll(t){if(t.preventScroll)return V(n.getDoc(t))},trapFocus(t){if(!t.trapFocus||!t.modal)return;let r;const s=B(()=>{const a=n.getContentEl(t);if(a){r=z(a,{document:n.getDoc(t),escapeDeactivates:!1,preventScroll:!0,returnFocusOnDeactivate:!1,fallbackFocus:a,allowOutsideClick:!0,initialFocus:R({root:a,getInitialEl:t.initialFocusEl})});try{r.activate()}catch{}}});return()=>{r?.deactivate(),s()}},hideContentBelow(t){return t.modal?Z(()=>[n.getContentEl(t)],{defer:!0}):void 0}},actions:{checkInitialFocusEl(t){!t.initialFocusEl&&t.role==="alertdialog"&&(t.initialFocusEl=()=>n.getCloseTriggerEl(t))},checkRenderedElements(t){f(()=>{t.renderedElements.title=!!n.getTitleEl(t),t.renderedElements.description=!!n.getDescriptionEl(t)})},syncZIndex(t){f(()=>{const r=n.getContentEl(t);if(!r)return;const a=n.getWin(t).getComputedStyle(r);[n.getPositionerEl(t),n.getBackdropEl(t)].forEach(g=>{g?.style.setProperty("--z-index",a.zIndex)})})},invokeOnClose(t){t.onOpenChange?.({open:!1})},invokeOnOpen(t){t.onOpenChange?.({open:!0})},toggleVisibility(t,r,{send:s}){s({type:t.open?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:r})},setFinalFocus(t){t.restoreFocus&&queueMicrotask(()=>{(t.finalFocusEl?.()??n.getTriggerEl(t))?.focus({preventScroll:!0})})}}})}L()(["aria-label","closeOnEscape","closeOnInteractOutside","dir","finalFocusEl","getRootNode","getRootNode","id","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open.controlled","open","persistentElements","preventScroll","restoreFocus","role","trapFocus"]);const[X,u]=$({hookName:"useDialogContext",providerName:"<DialogProvider />"}),Y=e=>{const o=u(),t=_(),r=I(d(t,()=>({present:o().open}))),s=d(()=>o().getBackdropProps(),()=>r().presenceProps,e);return l(m,{get when(){return!r().unmounted},get children(){return l(p.div,s)}})},ee=e=>{const o=u(),t=d(()=>o().getCloseTriggerProps(),e);return l(p.button,t)},te=e=>{const o=u(),t=P(),r=d(()=>o().getContentProps(),()=>t().presenceProps,e);return l(m,{get when(){return!t().unmounted},get children(){return l(p.div,r)}})},ne=e=>{const o=u(),t=P(),r=d(()=>o().getPositionerProps(),e);return l(m,{get when(){return!t().unmounted},get children(){return l(p.div,r)}})},oe=e=>{const o=H(),t=N(),r=y(),s=C(()=>({id:r,dir:o().dir,getRootNode:t().getRootNode,open:e.defaultOpen,"open.controlled":e.open!==void 0,...e})),[a,i]=j(Q(s()),{context:s});return C(()=>J(a,i,q))},re=e=>{const[o,t]=A(e),[r]=K(o),[s,a]=G()(t,["aria-label","closeOnEscape","closeOnInteractOutside","defaultOpen","finalFocusEl","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open","persistentElements","preventScroll","restoreFocus","role","trapFocus"]),i=oe(s),g=I(d(o,()=>({present:i().open})));return l(X,{value:i,get children(){return l(x,{value:r,get children(){return l(U,{value:g,get children(){return a.children}})}})}})},se=e=>{const o=u(),t=P(),r=d(()=>o().getTriggerProps(),()=>({"aria-controls":t().unmounted&&null}),e);return l(p.button,r)};var ie=b('<div class="card-content p-3 lg:p-6">'),le=b('<span class="icon-[fluent--dismiss-20-regular] w-5 h-5">');function ue(e){const[o,t]=O(e,["level","size","ghost","bold","justify","uppercase","loading","square"]),[r,s]=O(t,["closeOnEscape","closeOnInteractOutside","defaultOpen","finalFocusEl","id","ids","initialFocusEl","lazyMount","modal","onEscapeKeyDown","onExitComplete","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open","persistentElements","present","preventScroll","restoreFocus","role","trapFocus","unmountOnExit"]),[a,i]=O(s,["btnContent","children"]),g=()=>({btn:!0,[`btn-${o.level}`]:!!o.level,[`btn-${o.size||"md"}`]:!0,"btn-ghost":o.ghost,"btn-bold":o.bold,[`justify-${o.justify||"center"}`]:!0,uppercase:o.uppercase,"btn-square":o.square}),h=()=>Object.keys(g()).filter(E=>g()[E]).join(" ");return l(re,v(r,{lazyMount:!0,unmountOnExit:!0,get children(){return[l(se,v(i,{get class(){return`${h()} ${i.class}`},get title(){return i.title},get children(){return a.btnContent}})),l(D,{get children(){return[l(Y,{class:"fixed backdrop-blur bg-layer/60 top-0 left-0 w-screen h-screen"}),l(ne,{class:"fixed top-0 left-0 w-screen h-screen flex items-center justify-center",get children(){return l(te,{class:"card relative",get children(){return[(()=>{var E=ie();return k(E,()=>a.children),E})(),l(ee,{class:"btn btn-sm btn-square flex items-center justify-center btn-ghost absolute right-2 top-2",get children(){return le()}})]}})}})]}})]}}))}export{ue as D};