import{L as V}from"./index-DHCM5LJk.js";import{s as F}from"./setValue-Bf_BOLWD.js";import{v as O,i as j,g as I}from"./Form-CGI4Segl.js";function z(t,i,d,h){const n=typeof i=="string",f=n?d:i,u=(n?h:d)||{},{shouldTouched:p=!0,shouldDirty:A=!0,shouldValidate:b=!0,shouldFocus:m=!0}=u,c=n?[i]:[];V(()=>{const l=(a,o)=>{const s=j(t,a);s.items.set(o.map(()=>I())),p&&(s.touched.set(!0),t.internal.touched.set(!0)),A&&(s.dirty.set(!0),t.internal.dirty.set(!0))},y=(a,o)=>Object.entries(a).forEach(([s,e])=>{const r=o?`${o}.${s}`:s;(!e||typeof e!="object"||Array.isArray(e))&&(F(t,r,e,{...u,shouldValidate:!1}),c.push(r)),Array.isArray(e)&&l(r,e),e&&typeof e=="object"&&y(e,r)});n&&l(i,d),y(f,n?i:void 0),b&&["touched","input"].includes(t.internal.validateOn==="submit"&&t.submitted?t.internal.revalidateOn:t.internal.validateOn)&&O(t,c,{shouldFocus:m})})}export{z as s};