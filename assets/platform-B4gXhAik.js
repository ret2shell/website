import{d as t,e as a}from"./index-CDuUghHV.js";async function s(){return await t.get(`${a}/platform/auth`).json()}async function r(){return await t.get(`${a}/platform/statistics`).json()}async function i(n){return n?await t.get(`${a}/platform/logs`,{searchParams:JSON.parse(JSON.stringify({file:n}))}).blob():await t.get(`${a}/platform/logs`).json()}async function e(){return await t.get(`${a}/platform/license`).json()}async function f(){return await t.get(`${a}/platform/config`).json()}async function c(n){return await t.patch(`${a}/platform/config`,{json:n}).json()}export{r as a,f as b,i as c,e as d,s as g,c as u};