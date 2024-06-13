import{g as l}from"./_commonjsHelpers-Cpj98o6Y.js";function s(o,c){for(var a=0;a<c.length;a++){const n=c[a];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in o)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(o,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}};(function(o,c){ace.define("ace/theme/mono_industrial-css",["require","exports","module"],function(a,n,e){e.exports=`.ace-mono-industrial .ace_gutter {
  background: #1d2521;
  color: #C5C9C9
}

.ace-mono-industrial .ace_print-margin {
  width: 1px;
  background: #555651
}

.ace-mono-industrial {
  background-color: #222C28;
  color: #FFFFFF
}

.ace-mono-industrial .ace_cursor {
  color: #FFFFFF
}

.ace-mono-industrial .ace_marker-layer .ace_selection {
  background: rgba(145, 153, 148, 0.40)
}

.ace-mono-industrial.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #222C28;
}

.ace-mono-industrial .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-mono-industrial .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(102, 108, 104, 0.50)
}

.ace-mono-industrial .ace_marker-layer .ace_active-line {
  background: rgba(12, 13, 12, 0.25)
}

.ace-mono-industrial .ace_gutter-active-line {
  background-color: rgba(12, 13, 12, 0.25)
}

.ace-mono-industrial .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(145, 153, 148, 0.40)
}

.ace-mono-industrial .ace_invisible {
  color: rgba(102, 108, 104, 0.50)
}

.ace-mono-industrial .ace_string {
  background-color: #151C19;
  color: #FFFFFF
}

.ace-mono-industrial .ace_keyword,
.ace-mono-industrial .ace_meta {
  color: #A39E64
}

.ace-mono-industrial .ace_constant,
.ace-mono-industrial .ace_constant.ace_character,
.ace-mono-industrial .ace_constant.ace_character.ace_escape,
.ace-mono-industrial .ace_constant.ace_numeric,
.ace-mono-industrial .ace_constant.ace_other {
  color: #E98800
}

.ace-mono-industrial .ace_entity.ace_name.ace_function,
.ace-mono-industrial .ace_keyword.ace_operator,
.ace-mono-industrial .ace_variable {
  color: #A8B3AB
}

.ace-mono-industrial .ace_invalid {
  color: #FFFFFF;
  background-color: rgba(153, 0, 0, 0.68)
}

.ace-mono-industrial .ace_support.ace_constant {
  color: #C87500
}

.ace-mono-industrial .ace_fold {
  background-color: #A8B3AB;
  border-color: #FFFFFF
}

.ace-mono-industrial .ace_support.ace_function {
  color: #588E60
}

.ace-mono-industrial .ace_entity.ace_name,
.ace-mono-industrial .ace_support.ace_class,
.ace-mono-industrial .ace_support.ace_type {
  color: #5778B6
}

.ace-mono-industrial .ace_storage {
  color: #C23B00
}

.ace-mono-industrial .ace_variable.ace_language,
.ace-mono-industrial .ace_variable.ace_parameter {
  color: #648BD2
}

.ace-mono-industrial .ace_comment {
  color: #666C68;
  background-color: #151C19
}

.ace-mono-industrial .ace_entity.ace_other.ace_attribute-name {
  color: #909993
}

.ace-mono-industrial .ace_entity.ace_name.ace_tag {
  color: #A65EFF
}

.ace-mono-industrial .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ1NbwZfALD/4PAAlTArlEC4r/AAAAAElFTkSuQmCC) right repeat-y
}

.ace-mono-industrial .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/mono_industrial",["require","exports","module","ace/theme/mono_industrial-css","ace/lib/dom"],function(a,n,e){n.isDark=!0,n.cssClass="ace-mono-industrial",n.cssText=a("./mono_industrial-css");var r=a("../lib/dom");r.importCssString(n.cssText,n.cssClass,!1)}),function(){ace.require(["ace/theme/mono_industrial"],function(a){o&&(o.exports=a)})}()})(t);var i=t.exports;const u=l(i),m=s({__proto__:null,default:u},[i]);export{m as t};
