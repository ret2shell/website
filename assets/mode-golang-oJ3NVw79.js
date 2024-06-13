import{g as _}from"./_commonjsHelpers-Cpj98o6Y.js";function b(k,v){for(var i=0;i<v.length;i++){const s=v[i];if(typeof s!="string"&&!Array.isArray(s)){for(const f in s)if(f!=="default"&&!(f in k)){const h=Object.getOwnPropertyDescriptor(s,f);h&&Object.defineProperty(k,f,h.get?h:{enumerable:!0,get:()=>s[f]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(k,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,s,f){var h=i("../lib/oop"),d=i("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},a.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};h.inherits(a,d),a.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},a.getStartRule=function(c){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:c}},a.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},s.DocCommentHighlightRules=a}),ace.define("ace/mode/golang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(i,s,f){var h=i("../lib/oop"),d=i("./doc_comment_highlight_rules").DocCommentHighlightRules,a=i("./text_highlight_rules").TextHighlightRules,c=function(){var t="else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var",n="string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error",e="new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append",o="nil|true|false|iota",r=this.createKeywordMapper({keyword:t,"constant.language":o,"support.function":e,"support.type":n},""),u=`\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(/\\h/g,"[a-fA-F\\d]");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},d.getStartRule("doc-start"),{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"`",next:"bqstring"},{token:"constant.numeric",regex:"'(?:[^\\'\uD800-\uDBFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|"+u.replace('"',"")+")'"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:["keyword","text","entity.name.function"],regex:"(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"},{token:function(g){return g[g.length-1]=="("?[{type:r(g.slice(0,-1))||"support.function",value:g.slice(0,-1)},{type:"paren.lparen",value:g.slice(-1)}]:r(g)||"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],bqstring:[{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]},this.embedRules(d,"doc-",[d.getEndRule("start")])};h.inherits(c,a),s.GolangHighlightRules=c}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,s,f){var h=i("../range").Range,d=function(){};(function(){this.checkOutdent=function(a,c){return/^\s+$/.test(a)?/^\s*\}/.test(c):!1},this.autoOutdent=function(a,c){var t=a.getLine(c),n=t.match(/^(\s*\})/);if(!n)return 0;var e=n[1].length,o=a.findMatchingBracket({row:c,column:e});if(!o||o.row==c)return 0;var r=this.$getIndent(a.getLine(o.row));a.replace(new h(c,0,c,e-1),r)},this.$getIndent=function(a){return a.match(/^\s*/)[0]}}).call(d.prototype),s.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,s,f){var h=i("../../lib/oop"),d=i("../../range").Range,a=i("./fold_mode").FoldMode,c=s.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};h.inherits(c,a),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,n,e){var o=t.getLine(e);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(t,n,e);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(t,n,e,o){var r=t.getLine(e);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(t,r,e);var l=r.match(this.foldingStartMarker);if(l){var u=l.index;if(l[1])return this.openingBracketBlock(t,l[1],e,u);var g=t.getCommentFoldRange(e,u+l[0].length,1);return g&&!g.isMultiLine()&&(o?g=this.getSectionRange(t,e):n!="all"&&(g=null)),g}if(n!=="markbegin"){var l=r.match(this.foldingStopMarker);if(l){var u=l.index+l[0].length;return l[1]?this.closingBracketBlock(t,l[1],e,u):t.getCommentFoldRange(e,u,-1)}}},this.getSectionRange=function(t,n){var e=t.getLine(n),o=e.search(/\S/),r=n,u=e.length;n=n+1;for(var g=n,l=t.getLength();++n<l;){e=t.getLine(n);var m=e.search(/\S/);if(m!==-1){if(o>m)break;var p=this.getFoldWidgetRange(t,"all",n);if(p){if(p.start.row<=r)break;if(p.isMultiLine())n=p.end.row;else if(o==m)break}g=n}}return new d(r,u,g,t.getLine(g).length)},this.getCommentRegionBlock=function(t,n,e){for(var o=n.search(/\s*$/),r=t.getLength(),u=e,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++e<r;){n=t.getLine(e);var m=g.exec(n);if(m&&(m[1]?l--:l++,!l))break}var p=e;if(p>u)return new d(u,o,p,n.length)}}.call(c.prototype)}),ace.define("ace/mode/golang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/golang_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(i,s,f){var h=i("../lib/oop"),d=i("./text").Mode,a=i("./golang_highlight_rules").GolangHighlightRules,c=i("./matching_brace_outdent").MatchingBraceOutdent,t=i("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=a,this.$outdent=new c,this.foldingRules=new t,this.$behaviour=this.$defaultBehaviour};h.inherits(n,d),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,o,r){var u=this.$getIndent(o),g=this.getTokenizer().getLineTokens(o,e),l=g.tokens;if(g.state,l.length&&l[l.length-1].type=="comment")return u;if(e=="start"){var m=o.match(/^.*[\{\(\[]\s*$/);m&&(u+=r)}return u},this.checkOutdent=function(e,o,r){return this.$outdent.checkOutdent(o,r)},this.autoOutdent=function(e,o,r){this.$outdent.autoOutdent(o,r)},this.$id="ace/mode/golang"}.call(n.prototype),s.Mode=n}),function(){ace.require(["ace/mode/golang"],function(i){k&&(k.exports=i)})}()})(x);var R=x.exports;const y=_(R),$=b({__proto__:null,default:y},[R]);export{$ as m};