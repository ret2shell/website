import{g as b}from"./_commonjsHelpers-Cpj98o6Y.js";function u(n,o){for(var r=0;r<o.length;r++){const a=o[r];if(typeof a!="string"&&!Array.isArray(a)){for(const e in a)if(e!=="default"&&!(e in n)){const c=Object.getOwnPropertyDescriptor(a,e);c&&Object.defineProperty(n,e,c.get?c:{enumerable:!0,get:()=>a[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(n,o){ace.define("ace/theme/gruvbox_dark_hard-css",["require","exports","module"],function(r,a,e){e.exports=`.ace-gruvbox-dark-hard .ace_gutter {
  background: #1d2021;
  color: rgb(132,126,106)
}

.ace-gruvbox-dark-hard .ace_print-margin {
  width: 1px;
  background: #e8e8e8
}

.ace-gruvbox-dark-hard {
  background-color: #1d2021;
  color: rgba(235, 219, 178, 0.50)
}

.ace-gruvbox-dark-hard .ace_cursor {
  color: #a89984
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_selection {
  background: #3c3836
}

.ace-gruvbox-dark-hard.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1d2021;
  border-radius: 2px
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(235, 219, 178, 0.15)
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_active-line {
  background: #3c3836
}

.ace-gruvbox-dark-hard .ace_gutter-active-line {
  background-color: #3c3836
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_selected-word {
  border: 1px solid #3c3836
}

.ace-gruvbox-dark-hard .ace_fold {
  background-color: #b8bb26;
  border-color: rgba(235, 219, 178, 0.50)
}

.ace-gruvbox-dark-hard .ace_keyword {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_keyword.ace_operator {
  color: #8ec07c
}

.ace-gruvbox-dark-hard .ace_keyword.ace_other.ace_unit {
  color: #b16286
}

.ace-gruvbox-dark-hard .ace_constant {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_constant.ace_numeric {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_constant.ace_character.ace_escape {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_constant.ace_other {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_support.ace_function {
  color: #8ec07c
}

.ace-gruvbox-dark-hard .ace_support.ace_constant {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_support.ace_constant.ace_property-value {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_support.ace_class {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_support.ace_type {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_storage {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_invalid {
  color: #f9f5d7;
  background-color: #fb4934
}

.ace-gruvbox-dark-hard .ace_string {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_string.ace_regexp {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_comment {
  font-style: italic;
  color: #928374
}

.ace-gruvbox-dark-hard .ace_variable {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_variable.ace_language {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_variable.ace_parameter {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_meta.ace_tag {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_entity.ace_other.ace_attribute-name {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_entity.ace_name.ace_function {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_entity.ace_name.ace_tag {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_markup.ace_heading {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_markup.ace_list {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/gruvbox_dark_hard",["require","exports","module","ace/theme/gruvbox_dark_hard-css","ace/lib/dom"],function(r,a,e){a.isDark=!0,a.cssClass="ace-gruvbox-dark-hard",a.cssText=r("./gruvbox_dark_hard-css");var c=r("../lib/dom");c.importCssString(a.cssText,a.cssClass)}),function(){ace.require(["ace/theme/gruvbox_dark_hard"],function(r){n&&(n.exports=r)})}()})(d);var t=d.exports;const _=b(t),l=u({__proto__:null,default:_},[t]);export{l as t};
