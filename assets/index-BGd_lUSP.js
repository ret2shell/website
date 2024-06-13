import{c as D,k as i,e as a,j as s,q as _,S as b,t as $}from"./index-D-4Ec2E9.js";import{a as B}from"./platform-B4gXhAik.js";import{L as E}from"./logo-animate-Dsq31Qvw.js";import{S as v}from"./spin-Cv0qhUOt.js";import{H as r}from"./game-Ct7CExFT.js";import{p as q,T as I}from"./header-C4_4FixI.js";import{a as J}from"./toast-RiaHQnvP.js";import{C as S}from"./card-r-C9G86U.js";import{C as y}from"./chart-O6gbh7SX.js";import{D as K}from"./divider-CRTXR2Ng.js";import{D as p}from"./datetime-P2UEB0PT.js";import"./index-CDuUghHV.js";import"./index-Oj2p9cu_.js";var w=$('<div class="h-full aspect-square flex items-center justify-center">'),N=$('<div class="flex-1 flex flex-col space-y-2 lg:space-y-4"><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--emoji-sparkle-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl text-info"></span><span class=opacity-60></span></div><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--person-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl"></span><span class=opacity-60>'),O=$('<div class="flex-1 flex flex-col space-y-2 lg:space-y-4"><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--code-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl text-warning"></span><span class=opacity-60></span></div><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--target-edit-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl"></span><span class=opacity-60>'),Q=$('<div class="flex-1 flex flex-col space-y-2 lg:space-y-4"><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--checkmark-starburst-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl text-success"></span><span class=opacity-60></span></div><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--text-bullet-list-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl"></span><span class=opacity-60>'),R=$('<div class="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-3 lg:p-6 gap-3 lg:gap-6"><div class="hidden xl:flex xl:col-span-2 items-center justify-start space-x-12 px-12"><h1 class="text-5xl font-bold"></h1></div><div class="col-span-1 h-48 p-6 flex flex-row items-center space-x-8"><div class="flex-1 flex flex-col space-y-4"><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--dumbbell-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl text-info"></span><span class=opacity-60></span></div><div class="flex flex-row space-x-4 items-center flex-1"><span class="icon-[fluent--flag-20-regular] w-8 h-8 opacity-80"></span><span class="font-bold text-3xl text-error"></span><span class=opacity-60></span></div></div><div class="h-full aspect-square flex items-center justify-center">');function ce(){const[m,C]=D(!1),[t,A]=D(null);return C(!0),B().then(n=>{A(n)}).catch(n=>{n.response.text().then(d=>{J({level:"error",description:`${i("admin.statistics.fetchFailed")}: ${d}`,duration:5e3})})}).finally(()=>C(!1)),[a(I,{get title(){return`${i("admin.statistics.title")} - ${q.config.name||i("platform.name")}`}}),(()=>{var n=R(),d=n.firstChild,T=d.firstChild,L=d.nextSibling,G=L.firstChild,F=G.firstChild,U=F.firstChild,k=U.nextSibling,H=k.nextSibling,M=F.nextSibling,P=M.firstChild,j=P.nextSibling,W=j.nextSibling,z=G.nextSibling;return s(d,a(E,{class:"w-36 h-36"}),T),s(T,()=>q.config.name||i("platform.name")),s(k,()=>t()?.games.filter(e=>e.host_type===r.CTFTraining).length),s(H,()=>i("admin.statistics.trainings")),s(j,()=>t()?.games.filter(e=>e.host_type===r.CTFGame).length),s(W,()=>i("admin.statistics.totalGames")),s(z,a(b,{get when(){return _(()=>!!t())()&&!m()},get fallback(){return a(v,{width:24,height:24})},get children(){return a(y,{get option(){return{grid:{left:"16px",right:"16px",bottom:"16px",top:"16px"},tooltip:{show:!0},series:{type:"sunburst",emphasis:{focus:"ancestor"},label:{show:!1},name:i("game.title"),data:[{value:t().games.length===0?1:0,itemStyle:{color:"#808080"}},{value:t().games.filter(e=>e.host_type===r.CTFTraining).length*t().games.filter(e=>e.host_type===r.CTFGame).reduce((e,l)=>e+l.teams,0)/t().games.length,name:i("admin.statistics.trainings"),itemStyle:{color:"#0991ed"}},{value:t().games.filter(e=>e.host_type===r.CTFGame).reduce((e,l)=>e+l.teams,0),name:i("admin.statistics.games"),itemStyle:{color:"#e05864"},children:[{itemStyle:{color:"#0991ed"},name:i("admin.statistics.pendingGames"),value:t().games.filter(e=>e.host_type===r.CTFGame&&e.start_at>p.now()).reduce((e,l)=>e+l.teams,0),children:t().games.filter(e=>e.host_type===r.CTFGame&&e.start_at>p.now()).map(e=>({value:e.teams,name:e.name}))},{itemStyle:{color:"#17a750"},name:i("admin.statistics.inProgressGames"),value:t().games.filter(e=>e.host_type===r.CTFGame&&e.start_at<p.now()&&e.end_at>p.now()).reduce((e,l)=>e+l.teams,0),children:t().games.filter(e=>e.host_type===r.CTFGame&&e.start_at<p.now()&&e.end_at>p.now()).map(e=>({value:e.teams,name:e.name}))},{itemStyle:{color:"#808080"},name:i("admin.statistics.endedGames"),value:t().games.filter(e=>e.host_type===r.CTFGame&&e.end_at<p.now()).reduce((e,l)=>e+l.teams,0),children:t().games.filter(e=>e.host_type===r.CTFGame&&e.end_at<p.now()).map(e=>({value:e.teams,name:e.name}))}]}],levels:[{},{r0:"20%",r:"50%"},{r0:"50%",r:"70%"},{r0:"70%",r:"80%"}]}}}})}})),s(n,a(K,{class:"hidden xl:flex col-span-3"}),null),s(n,a(S,{class:"col-span-1 h-32 lg:h-48",contentClass:"p-3 lg:p-6 flex flex-row items-center space-x-8",get children(){return[(()=>{var e=w();return s(e,a(b,{get when(){return _(()=>!!t())()&&!m()},get fallback(){return a(v,{width:24,height:24})},get children(){return a(y,{get option(){return{grid:{left:"16px",right:"16px",bottom:"16px",top:"16px"},series:{type:"sunburst",emphasis:{focus:"ancestor"},data:[{itemStyle:{color:"#0991ed"},value:t().users.valid},{value:t().users.total-t().users.valid,itemStyle:{color:"#db640e"}}],levels:[{},{r0:"40%",r:"80%"}]}}}})}})),e})(),(()=>{var e=N(),l=e.firstChild,x=l.firstChild,o=x.nextSibling,f=o.nextSibling,u=l.nextSibling,g=u.firstChild,c=g.nextSibling,h=c.nextSibling;return s(o,()=>t()?.users.valid),s(f,()=>i("admin.statistics.validUsers")),s(c,()=>t()?.users.total),s(h,()=>i("admin.statistics.totalUsers")),e})()]}}),null),s(n,a(S,{class:"col-span-1 h-32 lg:h-48",contentClass:"p-3 lg:p-6 flex flex-row items-center space-x-8",get children(){return[(()=>{var e=w();return s(e,a(b,{get when(){return _(()=>!!t())()&&!m()},get fallback(){return a(v,{width:24,height:24})},get children(){return a(y,{get option(){return{grid:{left:"16px",right:"16px",bottom:"16px",top:"16px"},toolbox:{},series:{type:"sunburst",emphasis:{focus:"ancestor"},data:[{itemStyle:{color:"#db640e"},value:t().challenges.in_game},{value:t().challenges.total-t().challenges.in_game,itemStyle:{color:"#0991ed"}},{value:t().challenges.total===0?1:0,itemStyle:{color:"#808080"}}],levels:[{},{r0:"40%",r:"80%"}]}}}})}})),e})(),(()=>{var e=O(),l=e.firstChild,x=l.firstChild,o=x.nextSibling,f=o.nextSibling,u=l.nextSibling,g=u.firstChild,c=g.nextSibling,h=c.nextSibling;return s(o,()=>t()?.challenges.in_game),s(f,()=>i("admin.statistics.inGameChallenges")),s(c,()=>t()?.challenges.total),s(h,()=>i("admin.statistics.totalChallenges")),e})()]}}),null),s(n,a(S,{class:"col-span-1 h-32 lg:h-48",contentClass:"p-3 lg:p-6 flex flex-row items-center space-x-8",get children(){return[(()=>{var e=w();return s(e,a(b,{get when(){return _(()=>!!t())()&&!m()},get fallback(){return a(v,{width:24,height:24})},get children(){return a(y,{get option(){return{grid:{left:"16px",right:"16px",bottom:"16px",top:"16px"},toolbox:{},series:{type:"sunburst",emphasis:{focus:"ancestor"},data:[{itemStyle:{color:"#17a750"},value:t().submissions.solved},{value:t().submissions.total-t().submissions.solved,itemStyle:{color:"#db640e"}},{value:t().submissions.total===0?1:0,itemStyle:{color:"#808080"}}],levels:[{},{r0:"40%",r:"80%"}]}}}})}})),e})(),(()=>{var e=Q(),l=e.firstChild,x=l.firstChild,o=x.nextSibling,f=o.nextSibling,u=l.nextSibling,g=u.firstChild,c=g.nextSibling,h=c.nextSibling;return s(o,()=>t()?.submissions.solved),s(f,()=>i("admin.statistics.solvedSubmissions")),s(c,()=>t()?.submissions.total),s(h,()=>i("admin.statistics.totalSubmissions")),e})()]}}),null),s(n,a(S,{class:"col-span-1 xl:col-span-3 min-h-64 lg:min-h-80",contentClass:"p-3 lg:p-6 flex flex-row items-center",get children(){return a(b,{get when(){return _(()=>!!t())()&&!m()},get fallback(){return a(v,{width:24,height:24})},get children(){return a(y,{get option(){return{grid:{left:"32px",right:"32px",bottom:"32px",top:"48px"},title:{text:i("admin.statistics.instituteUsers"),right:"center"},toolbox:{},xAxis:{type:"category",data:t().users.institutes.map(e=>t().institutes.find(l=>l.id===e[0]).name).concat(i("admin.statistics.others"))},yAxis:{type:"value",min:0},series:{type:"bar",data:t().users.institutes.map(e=>e[1]).concat(t().users.total-t().users.institutes.reduce((e,l)=>e+l[1],0)),barMaxWidth:64}}}})}})}}),null),n})()]}export{ce as default};