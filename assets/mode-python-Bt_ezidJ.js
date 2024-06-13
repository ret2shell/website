import{g as M}from"./_commonjsHelpers-Cpj98o6Y.js";function z(c,m){for(var t=0;t<m.length;t++){const a=m[t];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in c)){const l=Object.getOwnPropertyDescriptor(a,u);l&&Object.defineProperty(c,u,l.get?l:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(c,m){ace.define("ace/mode/python_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,a,u){var l=t("../lib/oop"),f=t("./text_highlight_rules").TextHighlightRules,p=function(){var s="and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|async|await|nonlocal",h="True|False|None|NotImplemented|Ellipsis|__debug__",g="abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|bin|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|apply|delattr|help|next|setattr|set|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern|ascii|breakpoint|bytes",d=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":g,"variable.language":"self|cls","constant.language":h,keyword:s},"identifier"),e="[uU]?",i="[rR]",n="[fF]",r="(?:[rR][fF]|[fF][rR])",o="(?:(?:[1-9]\\d*)|(?:0))",k="(?:0[oO]?[0-7]+)",q="(?:0[xX][\\dA-Fa-f]+)",R="(?:0[bB][01]+)",y="(?:"+o+"|"+k+"|"+q+"|"+R+")",P="(?:[eE][+-]?\\d+)",T="(?:\\.\\d+)",v="(?:\\d+)",b="(?:(?:"+v+"?"+T+")|(?:"+v+"\\.))",w="(?:(?:"+b+"|"+v+")"+P+")",$="(?:"+w+"|"+b+")",x=`\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})`;this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string",regex:e+'"{3}',next:"qqstring3"},{token:"string",regex:e+'"(?=.)',next:"qqstring"},{token:"string",regex:e+"'{3}",next:"qstring3"},{token:"string",regex:e+"'(?=.)",next:"qstring"},{token:"string",regex:i+'"{3}',next:"rawqqstring3"},{token:"string",regex:i+'"(?=.)',next:"rawqqstring"},{token:"string",regex:i+"'{3}",next:"rawqstring3"},{token:"string",regex:i+"'(?=.)",next:"rawqstring"},{token:"string",regex:n+'"{3}',next:"fqqstring3"},{token:"string",regex:n+'"(?=.)',next:"fqqstring"},{token:"string",regex:n+"'{3}",next:"fqstring3"},{token:"string",regex:n+"'(?=.)",next:"fqstring"},{token:"string",regex:r+'"{3}',next:"rfqqstring3"},{token:"string",regex:r+'"(?=.)',next:"rfqqstring"},{token:"string",regex:r+"'{3}",next:"rfqstring3"},{token:"string",regex:r+"'(?=.)",next:"rfqstring"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|@|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"punctuation",regex:",|:|;|\\->|\\+=|\\-=|\\*=|\\/=|\\/\\/=|%=|@=|&=|\\|=|^=|>>=|<<=|\\*\\*="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:["keyword","text","entity.name.function"],regex:"(def|class)(\\s+)([\\u00BF-\\u1FFF\\u2C00-\\uD7FF\\w]+)"},{token:"text",regex:"\\s+"},{include:"constants"}],qqstring3:[{token:"constant.language.escape",regex:x},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:x},{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:x},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:x},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],rawqqstring3:[{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],rawqstring3:[{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],rawqqstring:[{token:"string",regex:"\\\\$",next:"rawqqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],rawqstring:[{token:"string",regex:"\\\\$",next:"rawqstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],fqqstring3:[{token:"constant.language.escape",regex:x},{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring3:[{token:"constant.language.escape",regex:x},{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqqstring:[{token:"constant.language.escape",regex:x},{token:"string",regex:"\\\\$",next:"fqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring:[{token:"constant.language.escape",regex:x},{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring3:[{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring3:[{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring:[{token:"string",regex:"\\\\$",next:"rfqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring:[{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstringParRules:[{token:"paren.lparen",regex:"[\\[\\(]"},{token:"paren.rparen",regex:"[\\]\\)]"},{token:"string",regex:"\\s+"},{token:"string",regex:"'[^']*'"},{token:"string",regex:'"[^"]*"'},{token:"function.support",regex:"(!s|!r|!a)"},{include:"constants"},{token:"paren.rparen",regex:"}",next:"pop"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"}],constants:[{token:"constant.numeric",regex:"(?:"+$+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:$},{token:"constant.numeric",regex:y+"[lL]\\b"},{token:"constant.numeric",regex:y+"\\b"},{token:["punctuation","function.support"],regex:"(\\.)([a-zA-Z_]+)\\b"},{token:d,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};l.inherits(p,f),a.PythonHighlightRules=p}),ace.define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(t,a,u){var l=t("../../lib/oop"),f=t("./fold_mode").FoldMode,p=a.FoldMode=function(s){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+s+")(?:\\s*)(?:#.*)?$")};l.inherits(p,f),function(){this.getFoldWidgetRange=function(s,h,g){var d=s.getLine(g),e=d.match(this.foldingStartMarker);if(e)return e[1]?this.openingBracketBlock(s,e[1],g,e.index):e[2]?this.indentationBlock(s,g,e.index+e[2].length):this.indentationBlock(s,g)}}.call(p.prototype)}),ace.define("ace/mode/python",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/python_highlight_rules","ace/mode/folding/pythonic","ace/range"],function(t,a,u){var l=t("../lib/oop"),f=t("./text").Mode,p=t("./python_highlight_rules").PythonHighlightRules,s=t("./folding/pythonic").FoldMode,h=t("../range").Range,g=function(){this.HighlightRules=p,this.foldingRules=new s("\\:"),this.$behaviour=this.$defaultBehaviour};l.inherits(g,f),function(){this.lineCommentStart="#",this.$pairQuotesAfter={"'":/[ruf]/i,'"':/[ruf]/i},this.getNextLineIndent=function(e,i,n){var r=this.$getIndent(i),o=this.getTokenizer().getLineTokens(i,e),k=o.tokens;if(k.length&&k[k.length-1].type=="comment")return r;if(e=="start"){var q=i.match(/^.*[\{\(\[:]\s*$/);q&&(r+=n)}return r};var d={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(e,i,n){if(n!==`\r
`&&n!=="\r"&&n!==`
`)return!1;var r=this.getTokenizer().getLineTokens(i.trim(),e).tokens;if(!r)return!1;do var o=r.pop();while(o&&(o.type=="comment"||o.type=="text"&&o.value.match(/^\s+$/)));return o?o.type=="keyword"&&d[o.value]:!1},this.autoOutdent=function(e,i,n){n+=1;var r=this.$getIndent(i.getLine(n)),o=i.getTabString();r.slice(-o.length)==o&&i.remove(new h(n,r.length-o.length,n,r.length))},this.$id="ace/mode/python",this.snippetFileId="ace/snippets/python"}.call(g.prototype),a.Mode=g}),function(){ace.require(["ace/mode/python"],function(t){c&&(c.exports=t)})}()})(_);var F=_.exports;const A=M(F),B=z({__proto__:null,default:A},[F]);export{B as m};