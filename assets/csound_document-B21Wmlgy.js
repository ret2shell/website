import{g as p}from"./_commonjsHelpers-Cpj98o6Y.js";function i(o,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in o)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}};(function(o,s){ace.define("ace/snippets/csound_document.snippets",["require","exports","module"],function(t,e,n){n.exports=`# <CsoundSynthesizer>
snippet synth
	<CsoundSynthesizer>
	<CsInstruments>
	\${1}
	</CsInstruments>
	<CsScore>
	e
	</CsScore>
	</CsoundSynthesizer>
`}),ace.define("ace/snippets/csound_document",["require","exports","module","ace/snippets/csound_document.snippets"],function(t,e,n){e.snippetText=t("./csound_document.snippets"),e.scope="csound_document"}),function(){ace.require(["ace/snippets/csound_document"],function(t){o&&(o.exports=t)})}()})(c);var u=c.exports;const d=p(u),f=i({__proto__:null,default:d},[u]);export{f as c};
