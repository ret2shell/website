import{a as m}from"./game-BJt-HAOr.js";import{s as a,g as n}from"./game-nYWJIA85.js";import{T as i}from"./header-C4_4FixI.js";import{w as p,a as u,z as c,e as g,q as l}from"./index-D-4Ec2E9.js";import"./index-CDuUghHV.js";import"./datetime-P2UEB0PT.js";import"./user-DLuZu1WC.js";function N(r){const s=p();u(()=>{a({current:null})});const o=c(),t=Number.parseInt(o.game);return t&&m(t).then(e=>{a({current:e})}).catch(e=>{s(`/sigtrap/${e.response.status}`,{replace:!0})}),[g(i,{get title(){return n.current?.name||"CTF"}}),l(()=>r.children)]}export{N as default};