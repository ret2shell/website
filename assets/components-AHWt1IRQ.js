import{m as c,s as u,Q as v,R as h,x as m,q as C,T as l,D as g,t as d}from"./index-D-4Ec2E9.js";var L=d("<a>");function _(t){t=c({inactiveClass:"inactive",activeClass:"active"},t);const[,i]=u(t,["href","state","class","activeClass","inactiveClass","end"]),n=v(()=>t.href),o=h(n),f=m(),r=C(()=>{const e=n();if(e===void 0)return[!1,!1];const a=l(e.split(/[?#]/,1)[0]).toLowerCase(),s=l(f.pathname).toLowerCase();return[t.end?a===s:s.startsWith(a+"/")||s===a,a===s]});return(()=>{var e=L();return g(e,c(i,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!r()[0],[t.activeClass]:r()[0],...i.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1,!1),e})()}export{_ as A};
