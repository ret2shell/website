import{P as a}from"./user-DLuZu1WC.js";import{a as t}from"./index-DzhbeeeD.js";import{g as r}from"./game-AtpgpTlS.js";import{w as i,b as o,d as n,k as s}from"./index-DHCM5LJk.js";import{a as m}from"./toast-Bmssr5_f.js";import{D as c}from"./datetime-P2UEB0PT.js";function h(){const e=i();return o(()=>{r.current?.archive_at&&!t.permissions.includes(a.Game)&&n(()=>{r.current?.archive_at&&r.current.archive_at>c.now()&&(m({level:"warning",description:s("game.writeupsOnlyOpenWhenArchived"),duration:10*1e3}),e(`/games/${r.current.id}`))})}),[]}export{h as default};