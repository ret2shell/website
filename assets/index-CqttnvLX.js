import{d as L,c as y,K as F,L as M,q as k,$ as D,N as q}from"./index-D-4Ec2E9.js";import{r as P,a as b}from"./index-Oj2p9cu_.js";var A=()=>{},S=(t,n)=>n();function G(t,n){const e=L(t),u=e?[e]:[],{onEnter:x=S,onExit:f=S}=n,[m,c]=y(n.appear?[]:u),[i]=q();let s,v=!1;function r(o,d){if(!o)return d&&d();v=!0,f(o,()=>{M(()=>{v=!1,c(T=>T.filter(E=>E!==o)),d&&d()})})}function a(o){const d=s;if(!d)return o&&o();s=void 0,c(T=>[d,...T]),x(d,o??A)}const l=n.mode==="out-in"?o=>v||r(o,a):n.mode==="in-out"?o=>a(()=>r(o)):o=>{r(o),a()};return F(o=>{const d=t();return L(i)?(i(),o):(d!==o&&(s=d,M(()=>L(()=>l(o)))),d)},n.appear?void 0:e),m}function H(t,n){const e=L(t),{onChange:u}=n;let x=new Set(n.appear?void 0:e);const f=new WeakSet,[m,c]=y([],{equals:!1}),[i]=q(),s=n.exitMethod==="remove"?A:r=>{c(a=>(a.push.apply(a,r),a));for(const a of r)f.delete(a)},v=n.exitMethod==="remove"?A:n.exitMethod==="keep-index"?(r,a,l)=>r.splice(l,0,a):(r,a)=>r.push(a);return k(r=>{const a=m(),l=t();if(l[D],L(i))return i(),r;if(a.length){const o=r.filter(d=>!a.includes(d));return a.length=0,u({list:o,added:[],removed:[],unchanged:o,finishRemoved:s}),o}return L(()=>{const o=new Set(l),d=l.slice(),T=[],E=[],R=[];for(const h of l)(x.has(h)?R:T).push(h);let C=!T.length;for(let h=0;h<r.length;h++){const g=r[h];o.has(g)||(f.has(g)||(E.push(g),f.add(g)),v(d,g,h)),C&&g!==d[h]&&(C=!1)}return!E.length&&C?r:(u({list:d,added:T,removed:E,unchanged:R,finishRemoved:s}),x=o,d)})},n.appear?[]:e.slice())}function N(t){return k(()=>{const n=t.name||"s";return{enterActive:(t.enterActiveClass||n+"-enter-active").split(" "),enter:(t.enterClass||n+"-enter").split(" "),enterTo:(t.enterToClass||n+"-enter-to").split(" "),exitActive:(t.exitActiveClass||n+"-exit-active").split(" "),exit:(t.exitClass||n+"-exit").split(" "),exitTo:(t.exitToClass||n+"-exit-to").split(" "),move:(t.moveClass||n+"-move").split(" ")}})}function w(t){requestAnimationFrame(()=>requestAnimationFrame(t))}function $(t,n,e,u){const{onBeforeEnter:x,onEnter:f,onAfterEnter:m}=n;x?.(e),e.classList.add(...t.enter),e.classList.add(...t.enterActive),queueMicrotask(()=>{if(!e.parentNode)return u?.();f?.(e,()=>c())}),w(()=>{e.classList.remove(...t.enter),e.classList.add(...t.enterTo),(!f||f.length<2)&&(e.addEventListener("transitionend",c),e.addEventListener("animationend",c))});function c(i){(!i||i.target===e)&&(u?.(),e.removeEventListener("transitionend",c),e.removeEventListener("animationend",c),e.classList.remove(...t.enterActive),e.classList.remove(...t.enterTo),m?.(e))}}function B(t,n,e,u){const{onBeforeExit:x,onExit:f,onAfterExit:m}=n;if(!e.parentNode)return u?.();x?.(e),e.classList.add(...t.exit),e.classList.add(...t.exitActive),f?.(e,()=>c()),w(()=>{e.classList.remove(...t.exit),e.classList.add(...t.exitTo),(!f||f.length<2)&&(e.addEventListener("transitionend",c),e.addEventListener("animationend",c))});function c(i){(!i||i.target===e)&&(u?.(),e.removeEventListener("transitionend",c),e.removeEventListener("animationend",c),e.classList.remove(...t.exitActive),e.classList.remove(...t.exitTo),m?.(e))}}var I={inout:"in-out",outin:"out-in"},_=t=>{const n=N(t);return G(P(()=>t.children),{mode:I[t.mode],appear:t.appear,onEnter(e,u){$(n(),t,e,u)},onExit(e,u){B(n(),t,e,u)}})},p=t=>{const n=N(t);return H(b(()=>t.children).toArray,{appear:t.appear,exitMethod:"keep-index",onChange({added:e,removed:u,finishRemoved:x,list:f}){const m=n();for(const i of e)$(m,t,i);const c=[];for(const i of f)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&c.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{const i=[];for(const{el:s,rect:v}of c)if(s.isConnected){const r=s.getBoundingClientRect(),a=v.left-r.left,l=v.top-r.top;(a||l)&&(s.style.transform=`translate(${a}px, ${l}px)`,s.style.transitionDuration="0s",i.push(s))}document.body.offsetHeight;for(const s of i){let v=function(r){(r.target===s||/transform$/.test(r.propertyName))&&(s.removeEventListener("transitionend",v),s.classList.remove(...m.move))};s.classList.add(...m.move),s.style.transform=s.style.transitionDuration="",s.addEventListener("transitionend",v)}});for(const i of u)B(m,t,i,()=>x([i]))}})};export{p as T,_ as a};
