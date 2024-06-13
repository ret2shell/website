import{g as b}from"./_commonjsHelpers-Cpj98o6Y.js";function w(x,k){for(var r=0;r<k.length;r++){const d=k[r];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in x)){const p=Object.getOwnPropertyDescriptor(d,m);p&&Object.defineProperty(x,m,p.get?p:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}};(function(x,k){ace.define("ace/mode/vala_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,d,m){var p=r("../lib/oop"),h=r("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:["meta.using.vala","keyword.other.using.vala","meta.using.vala","storage.modifier.using.vala","meta.using.vala","punctuation.terminator.vala"],regex:"^(\\s*)(using)\\b(?:(\\s*)([^ ;$]+)(\\s*)((?:;)?))?"},{include:"#code"}],"#all-types":[{include:"#primitive-arrays"},{include:"#primitive-types"},{include:"#object-types"}],"#annotations":[{token:["storage.type.annotation.vala","punctuation.definition.annotation-arguments.begin.vala"],regex:"(@[^ (]+)(\\()",push:[{token:"punctuation.definition.annotation-arguments.end.vala",regex:"\\)",next:"pop"},{token:["constant.other.key.vala","text","keyword.operator.assignment.vala"],regex:"(\\w*)(\\s*)(=)"},{include:"#code"},{token:"punctuation.seperator.property.vala",regex:","},{defaultToken:"meta.declaration.annotation.vala"}]},{token:"storage.type.annotation.vala",regex:"@\\w*"}],"#anonymous-classes-and-new":[{token:"keyword.control.new.vala",regex:"\\bnew\\b",push_disabled:[{token:"text",regex:"(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:"(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)",next:"pop"},{token:["storage.type.vala","text"],regex:"(\\w+)(\\s*)(?=\\[)",push:[{token:"text",regex:"}|(?=;|\\))",next:"pop"},{token:"text",regex:"\\[",push:[{token:"text",regex:"\\]",next:"pop"},{include:"#code"}]},{token:"text",regex:"{",push:[{token:"text",regex:"(?=})",next:"pop"},{include:"#code"}]}]},{token:"text",regex:"(?=\\w.*\\()",push:[{token:"text",regex:"(?<=\\))",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:"(?<=\\))",next:"pop"},{include:"#object-types"},{token:"text",regex:"\\(",push:[{token:"text",regex:"\\)",next:"pop"},{include:"#code"}]}]},{token:"meta.inner-class.vala",regex:"{",push:[{token:"meta.inner-class.vala",regex:"}",next:"pop"},{include:"#class-body"},{defaultToken:"meta.inner-class.vala"}]}]}],"#assertions":[{token:["keyword.control.assert.vala","meta.declaration.assertion.vala"],regex:"\\b(assert|requires|ensures)(\\s)",push:[{token:"meta.declaration.assertion.vala",regex:"$",next:"pop"},{token:"keyword.operator.assert.expression-seperator.vala",regex:":"},{include:"#code"},{defaultToken:"meta.declaration.assertion.vala"}]}],"#class":[{token:"meta.class.vala",regex:"(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum|struct|namespace)\\s+\\w+)",push:[{token:"paren.vala",regex:"}",next:"pop"},{include:"#storage-modifiers"},{include:"#comments"},{token:["storage.modifier.vala","meta.class.identifier.vala","entity.name.type.class.vala"],regex:"(class|(?:@)?interface|enum|struct|namespace)(\\s+)([\\w\\.]+)"},{token:"storage.modifier.extends.vala",regex:":",push:[{token:"meta.definition.class.inherited.classes.vala",regex:"(?={|,)",next:"pop"},{include:"#object-types-inherited"},{include:"#comments"},{defaultToken:"meta.definition.class.inherited.classes.vala"}]},{token:["storage.modifier.implements.vala","meta.definition.class.implemented.interfaces.vala"],regex:"(,)(\\s)",push:[{token:"meta.definition.class.implemented.interfaces.vala",regex:"(?=\\{)",next:"pop"},{include:"#object-types-inherited"},{include:"#comments"},{defaultToken:"meta.definition.class.implemented.interfaces.vala"}]},{token:"paren.vala",regex:"{",push:[{token:"paren.vala",regex:"(?=})",next:"pop"},{include:"#class-body"},{defaultToken:"meta.class.body.vala"}]},{defaultToken:"meta.class.vala"}],comment:"attempting to put namespace in here."}],"#class-body":[{include:"#comments"},{include:"#class"},{include:"#enums"},{include:"#methods"},{include:"#annotations"},{include:"#storage-modifiers"},{include:"#code"}],"#code":[{include:"#comments"},{include:"#class"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#code"}]},{include:"#assertions"},{include:"#parens"},{include:"#constants-and-special-vars"},{include:"#anonymous-classes-and-new"},{include:"#keywords"},{include:"#storage-modifiers"},{include:"#strings"},{include:"#all-types"}],"#comments":[{token:"punctuation.definition.comment.vala",regex:"/\\*\\*/"},{include:"text.html.javadoc"},{include:"#comments-inline"}],"#comments-inline":[{token:"punctuation.definition.comment.vala",regex:"/\\*",push:[{token:"punctuation.definition.comment.vala",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.vala"}]},{token:["text","punctuation.definition.comment.vala","comment.line.double-slash.vala"],regex:"(\\s*)(//)(.*$)"}],"#constants-and-special-vars":[{token:"constant.language.vala",regex:"\\b(?:true|false|null)\\b"},{token:"variable.language.vala",regex:"\\b(?:this|base)\\b"},{token:"constant.numeric.vala",regex:"\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:[LlFfUuDd]|UL|ul)?\\b"},{token:["keyword.operator.dereference.vala","constant.other.vala"],regex:"((?:\\.)?)\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b"}],"#enums":[{token:"text",regex:"^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))",push:[{token:"text",regex:"(?=;|})",next:"pop"},{token:"constant.other.enum.vala",regex:"\\w+",push:[{token:"meta.enum.vala",regex:"(?=,|;|})",next:"pop"},{include:"#parens"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#class-body"}]},{defaultToken:"meta.enum.vala"}]}]}],"#keywords":[{token:"keyword.control.catch-exception.vala",regex:"\\b(?:try|catch|finally|throw)\\b"},{token:"keyword.control.vala",regex:"\\?|:|\\?\\?"},{token:"keyword.control.vala",regex:"\\b(?:return|break|case|continue|default|do|while|for|foreach|switch|if|else|in|yield|get|set|value)\\b"},{token:"keyword.operator.vala",regex:"\\b(?:typeof|is|as)\\b"},{token:"keyword.operator.comparison.vala",regex:"==|!=|<=|>=|<>|<|>"},{token:"keyword.operator.assignment.vala",regex:"="},{token:"keyword.operator.increment-decrement.vala",regex:"\\-\\-|\\+\\+"},{token:"keyword.operator.arithmetic.vala",regex:"\\-|\\+|\\*|\\/|%"},{token:"keyword.operator.logical.vala",regex:"!|&&|\\|\\|"},{token:"keyword.operator.dereference.vala",regex:"\\.(?=\\S)",originalRegex:"(?<=\\S)\\.(?=\\S)"},{token:"punctuation.terminator.vala",regex:";"},{token:"keyword.operator.ownership",regex:"owned|unowned"}],"#methods":[{token:"meta.method.vala",regex:"(?!new)(?=\\w.*\\s+)(?=[^=]+\\()",push:[{token:"paren.vala",regex:"}|(?=;)",next:"pop"},{include:"#storage-modifiers"},{token:["entity.name.function.vala","meta.method.identifier.vala"],regex:"([\\~\\w\\.]+)(\\s*\\()",push:[{token:"meta.method.identifier.vala",regex:"\\)",next:"pop"},{include:"#parameters"},{defaultToken:"meta.method.identifier.vala"}]},{token:"meta.method.return-type.vala",regex:"(?=\\w.*\\s+\\w+\\s*\\()",push:[{token:"meta.method.return-type.vala",regex:"(?=\\w+\\s*\\()",next:"pop"},{include:"#all-types"},{defaultToken:"meta.method.return-type.vala"}]},{include:"#throws"},{token:"paren.vala",regex:"{",push:[{token:"paren.vala",regex:"(?=})",next:"pop"},{include:"#code"},{defaultToken:"meta.method.body.vala"}]},{defaultToken:"meta.method.vala"}]}],"#namespace":[{token:"text",regex:"^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))",push:[{token:"text",regex:"(?=;|})",next:"pop"},{token:"constant.other.namespace.vala",regex:"\\w+",push:[{token:"meta.namespace.vala",regex:"(?=,|;|})",next:"pop"},{include:"#parens"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#code"}]},{defaultToken:"meta.namespace.vala"}]}],comment:"This is not quite right. See the class grammar right now"}],"#object-types":[{token:"storage.type.generic.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,\\?<\\[()\\]]",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:">|[^\\w\\s,\\?<\\[(?:[,]+)\\]]",next:"pop"},{include:"#object-types"},{token:"storage.type.generic.vala",regex:"<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,\\[\\]<]",next:"pop"},{defaultToken:"storage.type.generic.vala"}],comment:"This is just to support <>'s with no actual type prefix"},{defaultToken:"storage.type.generic.vala"}]},{token:"storage.type.object.array.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*(?=\\[)",push:[{token:"storage.type.object.array.vala",regex:"(?=[^\\]\\s])",next:"pop"},{token:"text",regex:"\\[",push:[{token:"text",regex:"\\]",next:"pop"},{include:"#code"}]},{defaultToken:"storage.type.object.array.vala"}]},{token:["storage.type.vala","keyword.operator.dereference.vala","storage.type.vala"],regex:"\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*\\b)"}],"#object-types-inherited":[{token:"entity.other.inherited-class.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<",push:[{token:"entity.other.inherited-class.vala",regex:">|[^\\w\\s,<]",next:"pop"},{include:"#object-types"},{token:"storage.type.generic.vala",regex:"<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,<]",next:"pop"},{defaultToken:"storage.type.generic.vala"}],comment:"This is just to support <>'s with no actual type prefix"},{defaultToken:"entity.other.inherited-class.vala"}]},{token:["entity.other.inherited-class.vala","keyword.operator.dereference.vala","entity.other.inherited-class.vala"],regex:"\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*)"}],"#parameters":[{token:"storage.modifier.vala",regex:"final"},{include:"#primitive-arrays"},{include:"#primitive-types"},{include:"#object-types"},{token:"variable.parameter.vala",regex:"\\w+"}],"#parens":[{token:"text",regex:"\\(",push:[{token:"text",regex:"\\)",next:"pop"},{include:"#code"}]}],"#primitive-arrays":[{token:"storage.type.primitive.array.vala",regex:"\\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|int8|int16|int32|int64|uint8|uint16|uint32|uint64)(?:\\[\\])*\\b"}],"#primitive-types":[{token:"storage.type.primitive.vala",regex:"\\b(?:var|bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64)\\b",comment:"var is not really a primitive, but acts like one in most cases"}],"#storage-modifiers":[{token:"storage.modifier.vala",regex:"\\b(?:public|private|protected|internal|static|final|sealed|virtual|override|abstract|readonly|volatile|dynamic|async|unsafe|out|ref|weak|owned|unowned|const)\\b",comment:"Not sure about unsafe and readonly"}],"#strings":[{token:"punctuation.definition.string.begin.vala",regex:'@"',push:[{token:"punctuation.definition.string.end.vala",regex:'"',next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\.|%[\\w\\.\\-]+|\\$(?:\\w+|\\([\\w\\s\\+\\-\\*\\/]+\\))"},{defaultToken:"string.quoted.interpolated.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:'"',push:[{token:"punctuation.definition.string.end.vala",regex:'"',next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\."},{token:"constant.character.escape.vala",regex:"%[\\w\\.\\-]+"},{defaultToken:"string.quoted.double.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:"'",push:[{token:"punctuation.definition.string.end.vala",regex:"'",next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\."},{defaultToken:"string.quoted.single.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:'"""',push:[{token:"punctuation.definition.string.end.vala",regex:'"""',next:"pop"},{token:"constant.character.escape.vala",regex:"%[\\w\\.\\-]+"},{defaultToken:"string.quoted.triple.vala"}]}],"#throws":[{token:"storage.modifier.vala",regex:"throws",push:[{token:"meta.throwables.vala",regex:"(?={|;)",next:"pop"},{include:"#object-types"},{defaultToken:"meta.throwables.vala"}]}],"#values":[{include:"#strings"},{include:"#object-types"},{include:"#constants-and-special-vars"}]},this.normalizeRules()};s.metaData={comment:`Based heavily on the Java bundle's language syntax. TODO:
* Closures
* Delegates
* Properties: Better support for properties.
* Annotations
* Error domains
* Named arguments
* Array slicing, negative indexes, multidimensional
* construct blocks
* lock blocks?
* regex literals
* DocBlock syntax highlighting. (Currently importing javadoc)
* Folding rule for comments.
`,fileTypes:["vala"],foldingStartMarker:"(\\{\\s*(//.*)?$|^\\s*// \\{\\{\\{)",foldingStopMarker:"^\\s*(\\}|// \\}\\}\\}$)",name:"Vala",scopeName:"source.vala"},p.inherits(s,h),d.ValaHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,d,m){var p=r("../../lib/oop"),h=r("../../range").Range,s=r("./fold_mode").FoldMode,u=d.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};p.inherits(u,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,a,e){var n=t.getLine(e);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var i=this._getFoldWidgetBase(t,a,e);return!i&&this.startRegionRe.test(n)?"start":i},this.getFoldWidgetRange=function(t,a,e,n){var i=t.getLine(e);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(t,i,e);var o=i.match(this.foldingStartMarker);if(o){var l=o.index;if(o[1])return this.openingBracketBlock(t,o[1],e,l);var c=t.getCommentFoldRange(e,l+o[0].length,1);return c&&!c.isMultiLine()&&(n?c=this.getSectionRange(t,e):a!="all"&&(c=null)),c}if(a!=="markbegin"){var o=i.match(this.foldingStopMarker);if(o){var l=o.index+o[0].length;return o[1]?this.closingBracketBlock(t,o[1],e,l):t.getCommentFoldRange(e,l,-1)}}},this.getSectionRange=function(t,a){var e=t.getLine(a),n=e.search(/\S/),i=a,l=e.length;a=a+1;for(var c=a,o=t.getLength();++a<o;){e=t.getLine(a);var v=e.search(/\S/);if(v!==-1){if(n>v)break;var g=this.getFoldWidgetRange(t,"all",a);if(g){if(g.start.row<=i)break;if(g.isMultiLine())a=g.end.row;else if(n==v)break}c=a}}return new h(i,l,c,t.getLine(c).length)},this.getCommentRegionBlock=function(t,a,e){for(var n=a.search(/\s*$/),i=t.getLength(),l=e,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++e<i;){a=t.getLine(e);var v=c.exec(a);if(v&&(v[1]?o--:o++,!o))break}var g=e;if(g>l)return new h(l,n,g,a.length)}}.call(u.prototype)}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,d,m){var p=r("../range").Range,h=function(){};(function(){this.checkOutdent=function(s,u){return/^\s+$/.test(s)?/^\s*\}/.test(u):!1},this.autoOutdent=function(s,u){var t=s.getLine(u),a=t.match(/^(\s*\})/);if(!a)return 0;var e=a[1].length,n=s.findMatchingBracket({row:u,column:e});if(!n||n.row==u)return 0;var i=this.$getIndent(s.getLine(n.row));s.replace(new p(u,0,u,e-1),i)},this.$getIndent=function(s){return s.match(/^\s*/)[0]}}).call(h.prototype),d.MatchingBraceOutdent=h}),ace.define("ace/mode/vala",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/vala_highlight_rules","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],function(r,d,m){var p=r("../lib/oop"),h=r("./text").Mode,s=r("./vala_highlight_rules").ValaHighlightRules,u=r("./folding/cstyle").FoldMode,t=r("./matching_brace_outdent").MatchingBraceOutdent,a=function(){this.HighlightRules=s,this.$outdent=new t,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new u};p.inherits(a,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,n,i){var l=this.$getIndent(n),c=this.getTokenizer().getLineTokens(n,e),o=c.tokens,v=c.state;if(o.length&&o[o.length-1].type=="comment")return l;if(e=="start"||e=="no_regex"){var g=n.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);g&&(l+=i)}else if(e=="doc-start"){if(v=="start"||v=="no_regex")return"";var g=n.match(/^\s*(\/?)\*/);g&&(g[1]&&(l+=" "),l+="* ")}return l},this.checkOutdent=function(e,n,i){return this.$outdent.checkOutdent(n,i)},this.autoOutdent=function(e,n,i){this.$outdent.autoOutdent(n,i)},this.$id="ace/mode/vala",this.snippetFileId="ace/snippets/vala"}.call(a.prototype),d.Mode=a}),function(){ace.require(["ace/mode/vala"],function(r){x&&(x.exports=r)})}()})(f);var y=f.exports;const R=b(y),M=w({__proto__:null,default:R},[y]);export{M as m};
