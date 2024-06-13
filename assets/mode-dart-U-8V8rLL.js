import{g as b}from"./_commonjsHelpers-Cpj98o6Y.js";function _(x,k){for(var t=0;t<k.length;t++){const l=k[t];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in x)){const m=Object.getOwnPropertyDescriptor(l,u);m&&Object.defineProperty(x,u,m.get?m:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}};(function(x,k){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,l,u){var m=t("../lib/oop"),g=t("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},i.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};m.inherits(i,g),i.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(s){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:s}},i.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},l.DocCommentHighlightRules=i}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,l,u){var m=t("../lib/oop"),g=t("./doc_comment_highlight_rules").DocCommentHighlightRules,i=t("./text_highlight_rules").TextHighlightRules,s=l.cFunctions="hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",e=function(n){var r="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",o="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",c="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",f="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",d="NULL|true|false|TRUE|FALSE|nullptr",a=this.$keywords=this.createKeywordMapper(Object.assign({"keyword.control":r,"storage.type":o,"storage.modifier":c,"keyword.operator":f,"variable.language":"this","constant.language":d,"support.function.C99.c":s},n),"identifier"),p=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,h="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},g.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+p+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:p},{token:"constant.language.escape",regex:h},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:a,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(g,"doc-",[g.getEndRule("start")]),this.normalizeRules()};m.inherits(e,i),l.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,l,u){var m=t("../range").Range,g=function(){};(function(){this.checkOutdent=function(i,s){return/^\s+$/.test(i)?/^\s*\}/.test(s):!1},this.autoOutdent=function(i,s){var e=i.getLine(s),n=e.match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,o=i.findMatchingBracket({row:s,column:r});if(!o||o.row==s)return 0;var c=this.$getIndent(i.getLine(o.row));i.replace(new m(s,0,s,r-1),c)},this.$getIndent=function(i){return i.match(/^\s*/)[0]}}).call(g.prototype),l.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,l,u){var m=t("../../lib/oop"),g=t("../../range").Range,i=t("./fold_mode").FoldMode,s=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};m.inherits(s,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,r){var o=e.getLine(r);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var c=this._getFoldWidgetBase(e,n,r);return!c&&this.startRegionRe.test(o)?"start":c},this.getFoldWidgetRange=function(e,n,r,o){var c=e.getLine(r);if(this.startRegionRe.test(c))return this.getCommentRegionBlock(e,c,r);var a=c.match(this.foldingStartMarker);if(a){var f=a.index;if(a[1])return this.openingBracketBlock(e,a[1],r,f);var d=e.getCommentFoldRange(r,f+a[0].length,1);return d&&!d.isMultiLine()&&(o?d=this.getSectionRange(e,r):n!="all"&&(d=null)),d}if(n!=="markbegin"){var a=c.match(this.foldingStopMarker);if(a){var f=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],r,f):e.getCommentFoldRange(r,f,-1)}}},this.getSectionRange=function(e,n){var r=e.getLine(n),o=r.search(/\S/),c=n,f=r.length;n=n+1;for(var d=n,a=e.getLength();++n<a;){r=e.getLine(n);var p=r.search(/\S/);if(p!==-1){if(o>p)break;var h=this.getFoldWidgetRange(e,"all",n);if(h){if(h.start.row<=c)break;if(h.isMultiLine())n=h.end.row;else if(o==p)break}d=n}}return new g(c,f,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,n,r){for(var o=n.search(/\s*$/),c=e.getLength(),f=r,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++r<c;){n=e.getLine(r);var p=d.exec(n);if(p&&(p[1]?a--:a++,!a))break}var h=r;if(h>f)return new g(f,o,h,n.length)}}.call(s.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(t,l,u){var m=t("../lib/oop"),g=t("./text").Mode,i=t("./c_cpp_highlight_rules").c_cppHighlightRules,s=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=i,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};m.inherits(n,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,o,c){var f=this.$getIndent(o),d=this.getTokenizer().getLineTokens(o,r),a=d.tokens,p=d.state;if(a.length&&a[a.length-1].type=="comment")return f;if(r=="start"){var h=o.match(/^.*[\{\(\[]\s*$/);h&&(f+=c)}else if(r=="doc-start"){if(p=="start")return"";var h=o.match(/^\s*(\/?)\*/);h&&(h[1]&&(f+=" "),f+="* ")}return f},this.checkOutdent=function(r,o,c){return this.$outdent.checkOutdent(o,c)},this.autoOutdent=function(r,o,c){this.$outdent.autoOutdent(o,c)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}.call(n.prototype),l.Mode=n}),ace.define("ace/mode/dart_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,l,u){var m=t("../lib/oop"),g=t("./doc_comment_highlight_rules").DocCommentHighlightRules,i=t("./text_highlight_rules").TextHighlightRules,s=function(){var e="true|false|null",n="this|super",r="try|catch|finally|throw|rethrow|assert|break|case|continue|default|do|else|for|if|in|return|switch|while|new|deferred|async|await",o="abstract|class|extends|external|factory|implements|get|native|operator|set|typedef|with|enum",c="static|final|const",f="void|bool|num|int|double|dynamic|var|String",d=this.createKeywordMapper({"constant.language.dart":e,"variable.language.dart":n,"keyword.control.dart":r,"keyword.declaration.dart":o,"storage.modifier.dart":c,"storage.type.primitive.dart":f},"identifier"),a=[{token:"constant.language.escape",regex:/\\./},{token:"text",regex:/\$(?:\w+|{[^"'}]+})?/},{defaultToken:"string"}];this.$rules={start:[{token:"comment",regex:/\/\/.*$/},g.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:["meta.preprocessor.script.dart"],regex:"^(#!.*)$"},{token:"keyword.other.import.dart",regex:"(?:\\b)(?:library|import|export|part|of|show|hide)(?:\\b)"},{token:["keyword.other.import.dart","text"],regex:"(?:\\b)(prefix)(\\s*:)"},{regex:"\\bas\\b",token:"keyword.cast.dart"},{regex:"\\?|:",token:"keyword.control.ternary.dart"},{regex:"(?:\\b)(is\\!?)(?:\\b)",token:["keyword.operator.dart"]},{regex:"(<<|>>>?|~|\\^|\\||&)",token:["keyword.operator.bitwise.dart"]},{regex:"((?:&|\\^|\\||<<|>>>?)=)",token:["keyword.operator.assignment.bitwise.dart"]},{regex:"(===?|!==?|<=?|>=?)",token:["keyword.operator.comparison.dart"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.dart"]},{regex:"=",token:"keyword.operator.assignment.dart"},{token:"string",regex:"'''",next:"qdoc"},{token:"string",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{regex:"(\\-\\-|\\+\\+)",token:["keyword.operator.increment-decrement.dart"]},{regex:"(\\-|\\+|\\*|\\/|\\~\\/|%)",token:["keyword.operator.arithmetic.dart"]},{regex:"(!|&&|\\|\\|)",token:["keyword.operator.logical.dart"]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:d,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qdoc:[{token:"string",regex:"'''",next:"start"}].concat(a),qqdoc:[{token:"string",regex:'"""',next:"start"}].concat(a),qstring:[{token:"string",regex:"'|$",next:"start"}].concat(a),qqstring:[{token:"string",regex:'"|$',next:"start"}].concat(a)},this.embedRules(g,"doc-",[g.getEndRule("start")])};m.inherits(s,i),l.DartHighlightRules=s}),ace.define("ace/mode/dart",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/dart_highlight_rules","ace/mode/folding/cstyle"],function(t,l,u){var m=t("../lib/oop"),g=t("./c_cpp").Mode,i=t("./dart_highlight_rules").DartHighlightRules,s=t("./folding/cstyle").FoldMode,e=function(){g.call(this),this.HighlightRules=i,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};m.inherits(e,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/dart",this.snippetFileId="ace/snippets/dart"}.call(e.prototype),l.Mode=e}),function(){ace.require(["ace/mode/dart"],function(t){x&&(x.exports=t)})}()})(w);var v=w.exports;const y=b(v),$=_({__proto__:null,default:y},[v]);export{$ as m};
