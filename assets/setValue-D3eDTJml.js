import{L as o}from"./index-D-4Ec2E9.js";import{a as l,u as n,b as c}from"./Form-DGUtLwyz.js";function h(t,i,u,{shouldTouched:a=!0,shouldDirty:r=!0,shouldValidate:s=!0,shouldFocus:d=!0}={}){o(()=>{const e=l(t,i);e.value.set(()=>u),a&&(e.touched.set(!0),t.internal.touched.set(!0)),r&&n(t,e),s&&c(t,e,i,{on:["touched","input"],shouldFocus:d})})}export{h as s};
