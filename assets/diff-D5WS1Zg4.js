import{g as f}from"./_commonjsHelpers-Cpj98o6Y.js";function a(n,i){for(var t=0;t<i.length;t++){const e=i[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const p=Object.getOwnPropertyDescriptor(e,r);p&&Object.defineProperty(n,r,p.get?p:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}};(function(n,i){ace.define("ace/snippets/diff.snippets",["require","exports","module"],function(t,e,r){r.exports='# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header\nsnippet header DEP-3 style header\n	Description: ${1}\n	Origin: ${2:vendor|upstream|other}, ${3:url of the original patch}\n	Bug: ${4:url in upstream bugtracker}\n	Forwarded: ${5:no|not-needed|url}\n	Author: ${6:`g:snips_author`}\n	Reviewed-by: ${7:name and email}\n	Last-Update: ${8:`strftime("%Y-%m-%d")`}\n	Applied-Upstream: ${9:upstream version|url|commit}\n\n'}),ace.define("ace/snippets/diff",["require","exports","module","ace/snippets/diff.snippets"],function(t,e,r){e.snippetText=t("./diff.snippets"),e.scope="diff"}),function(){ace.require(["ace/snippets/diff"],function(t){n&&(n.exports=t)})}()})(o);var s=o.exports;const d=f(s),c=a({__proto__:null,default:d},[s]);export{c as d};
