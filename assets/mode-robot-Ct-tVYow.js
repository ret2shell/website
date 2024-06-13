import{g as h}from"./_commonjsHelpers-Cpj98o6Y.js";function f(a,c){for(var e=0;e<c.length;e++){const t=c[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in a)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(a,c){ace.define("ace/mode/robot_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,r){var n=e("../lib/oop"),l=e("./text_highlight_rules").TextHighlightRules,s=function(){var o=new RegExp(/\$\{CURDIR\}|\$\{TEMPDIR\}|\$\{EXECDIR\}|\$\{\/\}|\$\{\:\}|\$\{\\n\}|\$\{true\}|\$\{false\}|\$\{none\}|\$\{null\}|\$\{space(?:\s*\*\s+[0-9]+)?\}|\$\{empty\}|&\{empty\}|@\{empty\}|\$\{TEST NAME\}|@\{TEST[\s_]TAGS\}|\$\{TEST[\s_]DOCUMENTATION\}|\$\{TEST[\s_]STATUS\}|\$\{TEST[\s_]MESSAGE\}|\$\{PREV[\s_]TEST[\s_]NAME\}|\$\{PREV[\s_]TEST[\s_]STATUS\}|\$\{PREV[\s_]TEST[\s_]MESSAGE\}|\$\{SUITE[\s_]NAME\}|\$\{SUITE[\s_]SOURCE\}|\$\{SUITE[\s_]DOCUMENTATION\}|&\{SUITE[\s_]METADATA\}|\$\{SUITE[\s_]STATUS\}|\$\{SUITE[\s_]MESSAGE\}|\$\{KEYWORD[\s_]STATUS\}|\$\{KEYWORD[\s_]MESSAGE\}|\$\{LOG[\s_]LEVEL\}|\$\{OUTPUT[\s_]FILE\}|\$\{LOG[\s_]FILE\}|\$\{REPORT[\s_]FILE\}|\$\{DEBUG[\s_]FILE\}|\$\{OUTPUT[\s_]DIR\}/);this.$rules={start:[{token:"string.robot.header",regex:/^\*{3}\s+(?:settings?|metadata|(?:user )?keywords?|test ?cases?|tasks?|variables?)/,caseInsensitive:!0,push:[{token:"string.robot.header",regex:/$/,next:"pop"},{defaultToken:"string.robot.header"}],comment:"start of a table"},{token:"comment.robot",regex:/(?:^|\s{2,}|\t|\|\s{1,})(?=[^\\])#/,push:[{token:"comment.robot",regex:/$/,next:"pop"},{defaultToken:"comment.robot"}]},{token:"comment",regex:/^\s*\[?Documentation\]?/,caseInsensitive:!0,push:[{token:"comment",regex:/^(?!\s*\.\.\.)/,next:"pop"},{defaultToken:"comment"}]},{token:"storage.type.method.robot",regex:/\[(?:Arguments|Setup|Teardown|Precondition|Postcondition|Template|Return|Timeout)\]/,caseInsensitive:!0,comment:"testcase settings"},{token:"storage.type.method.robot",regex:/\[Tags\]/,caseInsensitive:!0,push:[{token:"storage.type.method.robot",regex:/^(?!\s*\.\.\.)/,next:"pop"},{token:"comment",regex:/^\s*\.\.\./},{defaultToken:"storage.type.method.robot"}],comment:"test tags"},{token:"constant.language",regex:o,caseInsensitive:!0},{token:"entity.name.variable.wrapper",regex:/[$@&%]\{\{?/,push:[{token:"entity.name.variable.wrapper",regex:/\}\}?(\s?=)?/,next:"pop"},{include:"$self"},{token:"entity.name.variable",regex:/./},{defaultToken:"entity.name.variable"}]},{token:"keyword.control.robot",regex:/^[^\s\t*$|]+|(?=^\|)\s+[^\s\t*$|]+/,push:[{token:"keyword.control.robot",regex:/(?=\s{2})|\t|$|\s+(?=\|)/,next:"pop"},{defaultToken:"keyword.control.robot"}]},{token:"constant.numeric.robot",regex:/\b[0-9]+(?:\.[0-9]+)?\b/},{token:"keyword",regex:/\s{2,}(for|in range|in|end|else if|if|else|with name)(\s{2,}|$)/,caseInsensitive:!0},{token:"storage.type.function",regex:/^(?:\s{2,}\s+)[^ \t*$@&%[.|]+/,push:[{token:"storage.type.function",regex:/(?=\s{2})|\t|$|\s+(?=\|)/,next:"pop"},{defaultToken:"storage.type.function"}]}]},this.normalizeRules()};s.metadata={fileTypes:["robot"],name:"Robot",scopeName:"source.robot"},n.inherits(s,l),t.RobotHighlightRules=s}),ace.define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(e,t,r){var n=e("../../lib/oop"),l=e("./fold_mode").FoldMode,s=t.FoldMode=function(o){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+o+")(?:\\s*)(?:#.*)?$")};n.inherits(s,l),function(){this.getFoldWidgetRange=function(o,d,g){var m=o.getLine(g),i=m.match(this.foldingStartMarker);if(i)return i[1]?this.openingBracketBlock(o,i[1],g,i.index):i[2]?this.indentationBlock(o,g,i.index+i[2].length):this.indentationBlock(o,g)}}.call(s.prototype)}),ace.define("ace/mode/robot",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/robot_highlight_rules","ace/mode/folding/pythonic"],function(e,t,r){var n=e("../lib/oop"),l=e("./text").Mode,s=e("./robot_highlight_rules").RobotHighlightRules,o=e("./folding/pythonic").FoldMode,d=function(){this.HighlightRules=s,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};n.inherits(d,l),function(){this.lineCommentStart="#",this.$id="ace/mode/robot",this.snippetFileId="ace/snippets/robot"}.call(d.prototype),t.Mode=d}),function(){ace.require(["ace/mode/robot"],function(e){a&&(a.exports=e)})}()})(u);var p=u.exports;const T=h(p),$=f({__proto__:null,default:T},[p]);export{$ as m};
