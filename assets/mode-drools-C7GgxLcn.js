import{g as v}from"./_commonjsHelpers-Cpj98o6Y.js";function w(c,k){for(var e=0;e<k.length;e++){const r=k[e];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in c)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(c,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(c,k){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,r,s){var a=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},n.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};a.inherits(n,i),n.getTagRule=function(o){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},n.getStartRule=function(o){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:o}},n.getEndRule=function(o){return{token:"comment.doc",regex:"\\*\\/",next:o}},r.DocCommentHighlightRules=n}),ace.define("ace/mode/java_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,r,s){var a=e("../lib/oop"),i=e("./doc_comment_highlight_rules").DocCommentHighlightRules,n=e("./text_highlight_rules").TextHighlightRules,o=function(){var t="[a-zA-Z_$][a-zA-Z0-9_$]*",l="abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|exports|opens|requires|uses|yield|module|permits|(?:non\\-)?sealed|var|provides|to|when|open|record|transitive|with",x="null|Infinity|NaN|undefined",u="AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object",d=this.createKeywordMapper({"variable.language":"this","constant.language":x,"support.function":u},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},i.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{include:"multiline-strings"},{include:"strings"},{include:"constants"},{regex:"(open(?:\\s+))?module(?=\\s*\\w)",token:"keyword",next:[{regex:"{",token:"paren.lparen",next:[{regex:"}",token:"paren.rparen",next:"start"},{regex:"\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",token:"keyword"}]},{token:"text",regex:"\\s+"},{token:"identifier",regex:"\\w+"},{token:"punctuation.operator",regex:"."},{token:"text",regex:"\\s+"},{regex:"",next:"start"}]},{include:"statements"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],strings:[{token:["punctuation","string"],regex:/(\.)(")/,push:[{token:"lparen",regex:/\\\{/,push:[{token:"text",regex:/$/,next:"start"},{token:"rparen",regex:/}/,next:"pop"},{include:"strings"},{include:"constants"},{include:"statements"}]},{token:"string",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"}],"multiline-strings":[{token:["punctuation","string"],regex:/(\.)(""")/,push:[{token:"string",regex:'"""',next:"pop"},{token:"lparen",regex:/\\\{/,push:[{token:"text",regex:/$/,next:"start"},{token:"rparen",regex:/}/,next:"pop"},{include:"multiline-strings"},{include:"strings"},{include:"constants"},{include:"statements"}]},{token:"constant.language.escape",regex:/\\./},{defaultToken:"string"}]},{token:"string",regex:'"""',push:[{token:"string",regex:'"""',next:"pop"},{token:"constant.language.escape",regex:/\\./},{defaultToken:"string"}]}],constants:[{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/},{token:"constant.language.boolean",regex:"(?:true|false)\\b"}],statements:[{token:["keyword","text","identifier"],regex:"(record)(\\s+)("+t+")\\b"},{token:"keyword",regex:"(?:"+l+")\\b"},{token:"storage.type.annotation",regex:"@"+t+"\\b"},{token:"entity.name.function",regex:t+"(?=\\()"},{token:d,regex:t+"\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]},this.embedRules(i,"doc-",[i.getEndRule("start")]),this.normalizeRules()};a.inherits(o,n),r.JavaHighlightRules=o}),ace.define("ace/mode/drools_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/java_highlight_rules","ace/mode/doc_comment_highlight_rules"],function(e,r,s){var a=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,n=e("./java_highlight_rules").JavaHighlightRules,o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,t="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",l="[a-zA-Z\\$_¡-￿][\\.a-zA-Z\\d\\$_¡-￿]*",x=function(){var u="date|effective|expires|lock|on|active|no|loop|auto|focus|activation|group|agenda|ruleflow|duration|timer|calendars|refract|direct|dialect|salience|enabled|attributes|extends|template|function|contains|matches|eval|excludes|soundslike|memberof|not|in|or|and|exists|forall|over|from|entry|point|accumulate|acc|collect|action|reverse|result|end|init|instanceof|extends|super|boolean|char|byte|short|int|long|float|double|this|void|class|new|case|final|if|else|for|while|do|default|try|catch|finally|switch|synchronized|return|throw|break|continue|assert|modify|static|public|protected|private|abstract|native|transient|volatile|strictfp|throws|interface|enum|implements|type|window|trait|no-loop|str",d="AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object",h=this.createKeywordMapper({"variable.language":"this",keyword:u,"constant.language":"null","support.class":d,"support.function":"retract|update|modify|insert"},"identifier"),m=function(){return[{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"}]},g=function(E){return[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:E},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"}]},f=function(E){return[{token:"comment.block",regex:"\\*\\/",next:E},{defaultToken:"comment.block"}]},p=function(){return[{token:h,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]};this.$rules={start:[].concat(g("block.comment"),[{token:"entity.name.type",regex:"@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:["keyword","text","entity.name.type"],regex:"(package)(\\s+)("+l+")"},{token:["keyword","text","keyword","text","entity.name.type"],regex:"(import)(\\s+)(function)(\\s+)("+l+")"},{token:["keyword","text","entity.name.type"],regex:"(import)(\\s+)("+l+")"},{token:["keyword","text","entity.name.type","text","variable"],regex:"(global)(\\s+)("+l+")(\\s+)("+t+")"},{token:["keyword","text","keyword","text","entity.name.type"],regex:"(declare)(\\s+)(trait)(\\s+)("+t+")"},{token:["keyword","text","entity.name.type"],regex:"(declare)(\\s+)("+t+")"},{token:["keyword","text","entity.name.type"],regex:"(extends)(\\s+)("+l+")"},{token:["keyword","text"],regex:"(rule)(\\s+)",next:"asset.name"}],m(),[{token:["variable.other","text","text"],regex:"("+t+")(\\s*)(:)"},{token:["keyword","text"],regex:"(query)(\\s+)",next:"asset.name"},{token:["keyword","text"],regex:"(when)(\\s*)"},{token:["keyword","text"],regex:"(then)(\\s*)",next:"java-start"},{token:"paren.lparen",regex:/[\[({]/},{token:"paren.rparen",regex:/[\])}]/}],p()),"block.comment":f("start"),"asset.name":[{token:"entity.name",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"entity.name",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"entity.name",regex:t},{regex:"",token:"empty",next:"start"}]},this.embedRules(o,"doc-",[o.getEndRule("start")]),this.embedRules(n,"java-",[{token:"support.function",regex:"\\b(insert|modify|retract|update)\\b"},{token:"keyword",regex:"\\bend\\b",next:"start"}])};a.inherits(x,i),r.DroolsHighlightRules=x}),ace.define("ace/mode/folding/drools",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(e,r,s){var a=e("../../lib/oop"),i=e("../../range").Range,n=e("./fold_mode").FoldMode,o=e("../../token_iterator").TokenIterator,t=r.FoldMode=function(){};a.inherits(t,n),function(){this.foldingStartMarker=/\b(rule|declare|query|when|then)\b/,this.foldingStopMarker=/\bend\b/,this.getFoldWidgetRange=function(l,x,u){var d=l.getLine(u),h=d.match(this.foldingStartMarker);if(h&&(h.index,h[1])){var m={row:u,column:d.length},g=new o(l,m.row,m.column),f="end",p=g.getCurrentToken();for(p.value=="when"&&(f="then");p;){if(p.value==f)return i.fromPoints(m,{row:g.getCurrentTokenRow(),column:g.getCurrentTokenColumn()});p=g.stepForward()}}}}.call(t.prototype)}),ace.define("ace/mode/drools",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/drools_highlight_rules","ace/mode/folding/drools"],function(e,r,s){var a=e("../lib/oop"),i=e("./text").Mode,n=e("./drools_highlight_rules").DroolsHighlightRules,o=e("./folding/drools").FoldMode,t=function(){this.HighlightRules=n,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};a.inherits(t,i),function(){this.lineCommentStart="//",this.$id="ace/mode/drools",this.snippetFileId="ace/snippets/drools"}.call(t.prototype),r.Mode=t}),function(){ace.require(["ace/mode/drools"],function(e){c&&(c.exports=e)})}()})(b);var y=b.exports;const _=v(y),C=w({__proto__:null,default:_},[y]);export{C as m};
