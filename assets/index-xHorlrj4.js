import{g as t,c as r}from"./game-AtpgpTlS.js";import{T as i}from"./header-C2rgC6oY.js";import{w as o,b as n,k as e,e as m}from"./index-DHCM5LJk.js";import{a as c}from"./toast-Bmssr5_f.js";import"./user-DLuZu1WC.js";import"./datetime-P2UEB0PT.js";import"./index-DzhbeeeD.js";function T(){const a=o();return n(()=>{t.current&&!r()&&(c({level:"warning",description:e("game.canNotParticipate"),duration:5e3}),a(`/games/${t.current.id}`,{replace:!0}))}),m(i,{get title(){return`${e("game.team.join.title")} - ${t.current?.name||"CTF"}`}})}export{T as default};