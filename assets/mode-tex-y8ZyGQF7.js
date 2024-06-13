import{g as f}from"./_commonjsHelpers-Cpj98o6Y.js";function m(a,s){for(var e=0;e<s.length;e++){const r=s[e];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in a)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(a,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}};(function(a,s){ace.define("ace/mode/tex_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,r,i){var o=e("../lib/oop");e("../lib/lang");var c=e("./text_highlight_rules").TextHighlightRules,n=function(t){t||(t="text"),this.$rules={start:[{token:"comment",regex:"%.*$"},{token:t,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:t,regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell."+t,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell."+t,regex:"\\s+"},{token:"nospell."+t,regex:"\\w+"}]}};o.inherits(n,c),r.TexHighlightRules=n}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,r,i){var o=e("../range").Range,c=function(){};(function(){this.checkOutdent=function(n,t){return/^\s+$/.test(n)?/^\s*\}/.test(t):!1},this.autoOutdent=function(n,t){var h=n.getLine(t),g=h.match(/^(\s*\})/);if(!g)return 0;var l=g[1].length,u=n.findMatchingBracket({row:t,column:l});if(!u||u.row==t)return 0;var d=this.$getIndent(n.getLine(u.row));n.replace(new o(t,0,t,l-1),d)},this.$getIndent=function(n){return n.match(/^\s*/)[0]}}).call(c.prototype),r.MatchingBraceOutdent=c}),ace.define("ace/mode/tex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/tex_highlight_rules","ace/mode/matching_brace_outdent"],function(e,r,i){var o=e("../lib/oop"),c=e("./text").Mode,n=e("./text_highlight_rules").TextHighlightRules,t=e("./tex_highlight_rules").TexHighlightRules,h=e("./matching_brace_outdent").MatchingBraceOutdent,g=function(l){l?this.HighlightRules=n:this.HighlightRules=t,this.$outdent=new h,this.$behaviour=this.$defaultBehaviour};o.inherits(g,c),function(){this.lineCommentStart="%",this.getNextLineIndent=function(l,u,d){return this.$getIndent(u)},this.allowAutoInsert=function(){return!1},this.$id="ace/mode/tex",this.snippetFileId="ace/snippets/tex"}.call(g.prototype),r.Mode=g}),function(){ace.require(["ace/mode/tex"],function(e){a&&(a.exports=e)})}()})(p);var x=p.exports;const k=f(x),b=m({__proto__:null,default:k},[x]);export{b as m};
