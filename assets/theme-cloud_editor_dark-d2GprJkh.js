import{g as t}from"./_commonjsHelpers-Cpj98o6Y.js";function l(a,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in a)){const r=Object.getOwnPropertyDescriptor(e,c);r&&Object.defineProperty(a,c,r.get?r:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(a,n){ace.define("ace/theme/cloud_editor_dark-css",["require","exports","module"],function(o,e,c){c.exports=`
.ace-cloud_editor_dark .ace_gutter {
    background: #282c34;
    color: #8e96a9;
}

.ace-cloud_editor_dark.ace_dark .ace_tooltip-marker-error.ace_tooltip-marker {
    background-color: #ff5d64;
}
.ace-cloud_editor_dark.ace_dark .ace_tooltip-marker-warning.ace_tooltip-marker {
    background-color: #e0ca57;
}

.ace-cloud_editor_dark .ace_print-margin {
    width: 1px;
    background: #e8e8e8;
}

.ace-cloud_editor_dark {
    background-color: #282c34;
    color: #dcdfe4;
}

.ace-cloud_editor_dark .ace_cursor {
    color: #66b2f0;
}

.ace-cloud_editor_dark .ace_marker-layer .ace_selection {
    background: #4376bd;
}

.ace-cloud_editor_dark.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #8e96a9;
    border-radius: 2px;
}

.ace-cloud_editor_dark .ace_marker-layer .ace_step {
    background: #6fb342;
}

.ace-cloud_editor_dark .ace_marker-layer .ace_bracket {
    margin: 0 0 0 -1px;
    border: 1px solid #e8e8e8;
}

.ace-cloud_editor_dark .ace_marker-layer .ace_active-line {
    box-sizing: border-box;
    border-top: 1px solid #75777a;
    border-bottom: 1px solid #75777a;
}

.ace-cloud_editor_dark .ace_gutter-cell_svg-icons {
    box-sizing: border-box;
    border-top: 1px solid #282c34;
    border-bottom: 1px solid #282c34;
}

.ace-cloud_editor_dark .ace_gutter-active-line {
    background-repeat: no-repeat;
    box-sizing: border-box;
    border-top: 1px solid #75777a;
    border-bottom: 1px solid #75777a;
}

.ace-cloud_editor_dark .ace_marker-layer .ace_selected-word {
    border: 1px solid #9bd0f7;
}

.ace-cloud_editor_dark .ace_fold {
    background-color: #66b2f0;
    border-color: #dcdfe4;
}

.ace-cloud_editor_dark .ace_keyword {
    color: #c674dc;
}

.ace-cloud_editor_dark .ace_constant {
    color: #e5c383;
}

.ace-cloud_editor_dark .ace_constant.ace_numeric {
    color: #e5c383;
}

.ace-cloud_editor_dark .ace_constant.ace_character.ace_escape {
    color: #71ccc7;
}

.ace-cloud_editor_dark .ace_support.ace_function {
    color: #e96a71;
}

.ace-cloud_editor_dark .ace_support.ace_class {
    color: #e5c383;
}

.ace-cloud_editor_dark .ace_storage {
    color: #c674dc;
}

.ace-cloud_editor_dark .ace_invalid.ace_illegal {
    color: #dcdfe4;
    background-color:#66b2f0;
}

.ace-cloud_editor_dark .ace_invalid.ace_deprecated {
    color: #dcdfe4;
    background-color: #e5c383;
}

.ace-cloud_editor_dark .ace_string {
    color: #6fb342;
}

.ace-cloud_editor_dark .ace_string.ace_regexp {
    color: #6fb342;
}

.ace-cloud_editor_dark .ace_comment,
.ace-cloud_editor_dark .ace_ghost_text {
    color: #b5bac0;
    opacity: 1;
}

.ace-cloud_editor_dark .ace_variable {
    color:#66b2f0;
}

.ace-cloud_editor_dark .ace_meta.ace_selector {
    color: #c674dc;
}

.ace-cloud_editor_dark .ace_entity.ace_other.ace_attribute-name {
    color: #e5c383;
}

.ace-cloud_editor_dark .ace_entity.ace_name.ace_function {
    color: #e96a71;
}

.ace-cloud_editor_dark .ace_entity.ace_name.ace_tag {
    color:#66b2f0;
}
.ace-cloud_editor_dark .ace_heading {
    color: #e96a71;
}

.ace-cloud_editor_dark .ace_xml-pe {
    color: #e5c383;
}
.ace-cloud_editor_dark .ace_doctype {
    color:#66b2f0;
}

.ace-cloud_editor_dark .ace_entity.ace_name.ace_tag,
.ace-cloud_editor_dark .ace_entity.ace_other.ace_attribute-name,
.ace-cloud_editor_dark .ace_meta.ace_tag,
.ace-cloud_editor_dark .ace_string.ace_regexp,
.ace-cloud_editor_dark .ace_variable {
    color:#66b2f0;
}

.ace-cloud_editor_dark .ace_tooltip {
    background-color: #282c34;
    color: #dcdfe4;
}

.ace-cloud_editor_dark .ace_icon_svg.ace_error,
.ace-cloud_editor_dark .ace_icon_svg.ace_error_fold {
    background-color: #ff5d64;
}
.ace-cloud_editor_dark .ace_icon_svg.ace_warning,
.ace-cloud_editor_dark .ace_icon_svg.ace_warning_fold {
    background-color: #e0ca57;
}
.ace-cloud_editor_dark .ace_icon_svg.ace_info {
    background-color: #44b9d6;
}
.ace-cloud_editor_dark .ace_highlight-marker {
    background: none;
    border: #66b2f0 1px solid;
}
.ace-cloud_editor_dark .ace_tooltip.ace_hover-tooltip:focus > div {
    outline: 1px solid #44b9d6;
}
.ace-cloud_editor_dark .ace_snippet-marker {
    background-color: #434650;
    border: 0;
}

.ace-cloud_editor_dark.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #272A30;
    border: #299FBC 1.5px solid;
}
.ace-cloud_editor_dark.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #d5dbdb;
    background: #272A30;
}
.ace-cloud_editor_dark.ace_dark.ace_editor.ace_autocomplete .ace_completion-meta {
    color: #95a5a6;
    opacity: 1;
}
.ace-cloud_editor_dark.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2AA0BC;
}
.ace-cloud_editor_dark.ace_dark.ace_editor.ace_autocomplete {
    box-shadow: 0 1px 1px 0 #001c244d, 1px 1px 1px 0 #001c2426, -1px 1px 1px 0 #001c2426;
    line-height: 1.5;
    border: 1px solid #2a2e33;
    background: #050506;
    color: #ffffff;
}

`}),ace.define("ace/theme/cloud_editor_dark",["require","exports","module","ace/theme/cloud_editor_dark-css","ace/lib/dom"],function(o,e,c){e.isDark=!0,e.cssClass="ace-cloud_editor_dark",e.cssText=o("./cloud_editor_dark-css");var r=o("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/cloud_editor_dark"],function(o){a&&(a.exports=o)})}()})(d);var _=d.exports;const i=t(_),k=l({__proto__:null,default:i},[_]);export{k as t};
