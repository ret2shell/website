import{g as A}from"./_commonjsHelpers-Cpj98o6Y.js";function I(f,R){for(var l=0;l<R.length;l++){const d=R[l];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in f)){const L=Object.getOwnPropertyDescriptor(d,m);L&&Object.defineProperty(f,m,L.get?L:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var C={exports:{}};(function(f,R){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(l,d,m){var L=l("../lib/oop"),u=l("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},c.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};L.inherits(c,u),c.getTagRule=function(i){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},c.getStartRule=function(i){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:i}},c.getEndRule=function(i){return{token:"comment.doc",regex:"\\*\\/",next:i}},d.JsDocCommentHighlightRules=c}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(l,d,m){var L=l("../lib/oop"),u=l("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,c=l("./text_highlight_rules").TextHighlightRules,i="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",T=function(_){var e={"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},r=this.createKeywordMapper(e,"identifier"),n="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)",o="(function)(\\s*)(\\*?)",g={token:["identifier","text","paren.lparen"],regex:"(\\b(?!"+Object.values(e).join("|")+"\\b)"+i+")(\\s*)(\\()"};this.$rules={no_regex:[u.getStartRule("doc-start"),a("no_regex"),g,{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+i+")(\\s*)(=)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))("+i+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+i+")(\\s*)(:)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+n+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:r,regex:i},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:/=/},{token:["storage.type","text","storage.type","text","paren.lparen"],regex:o+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:"prototype"},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:i},{regex:"",token:"empty",next:"no_regex"}],start:[u.getStartRule("doc-start"),a("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[a("function_arguments"),{token:"variable.parameter",regex:i},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!_||!_.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(p,h,K){if(this.next=p=="{"?this.nextState:"",p=="{"&&K.length)K.unshift("start",h);else if(p=="}"&&K.length&&(K.shift(),this.next=K.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return p=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+i+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=[^\\(]+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!_||_.jsx!=!1)&&s.call(this)),this.embedRules(u,"doc-",[u.getEndRule("no_regex")]),this.normalizeRules()};L.inherits(T,c);function s(){var _=i.replace("\\d","\\d\\-"),e={onMatch:function(n,t,o){var g=n.charAt(1)=="/"?2:1;return g==1?(t!=this.nextState?o.unshift(this.next,this.nextState,0):o.unshift(this.next),o[2]++):g==2&&t==this.nextState&&(o[1]--,(!o[1]||o[1]<0)&&(o.shift(),o.shift())),[{type:"meta.tag.punctuation."+(g==1?"":"end-")+"tag-open.xml",value:n.slice(0,g)},{type:"meta.tag.tag-name.xml",value:n.substr(g)}]},regex:"</?(?:"+_+"|(?=>))",next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(e);var r={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[r,e,{include:"reference"},{defaultToken:"string.xml"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(n,t,o){return t==o[0]&&o.shift(),n.length==2&&(o[0]==this.nextState&&o[1]--,(!o[1]||o[1]<0)&&o.splice(0,2)),this.next=o[0]||"start",[{type:this.token,value:n}]},nextState:"jsx"},r,a("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:_},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},e],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function a(_){return[{token:"comment",regex:/\/\*/,next:[u.getTagRule(),{token:"comment",regex:"\\*\\/",next:_||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[u.getTagRule(),{token:"comment",regex:"$|^",next:_||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}d.JavaScriptHighlightRules=T}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(l,d,m){var L=l("../range").Range,u=function(){};(function(){this.checkOutdent=function(c,i){return/^\s+$/.test(c)?/^\s*\}/.test(i):!1},this.autoOutdent=function(c,i){var T=c.getLine(i),s=T.match(/^(\s*\})/);if(!s)return 0;var a=s[1].length,_=c.findMatchingBracket({row:i,column:a});if(!_||_.row==i)return 0;var e=this.$getIndent(c.getLine(_.row));c.replace(new L(i,0,i,a-1),e)},this.$getIndent=function(c){return c.match(/^\s*/)[0]}}).call(u.prototype),d.MatchingBraceOutdent=u}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],function(l,d,m){var L=l("../../lib/oop"),u=l("../behaviour").Behaviour,c=l("../../token_iterator").TokenIterator;function i(s,a){return s&&s.type.lastIndexOf(a+".xml")>-1}var T=function(){this.add("string_dquotes","insertion",function(s,a,_,e,r){if(r=='"'||r=="'"){var n=r,t=e.doc.getTextRange(_.getSelectionRange());if(t!==""&&t!=="'"&&t!='"'&&_.getWrapBehavioursEnabled())return{text:n+t+n,selection:!1};var o=_.getCursorPosition(),g=e.doc.getLine(o.row),p=g.substring(o.column,o.column+1),h=new c(e,o.row,o.column),K=h.getCurrentToken();if(p==n&&(i(K,"attribute-value")||i(K,"string")))return{text:"",selection:[1,1]};if(K||(K=h.stepBackward()),!K)return;for(;i(K,"tag-whitespace")||i(K,"whitespace");)K=h.stepBackward();var F=!p||p.match(/\s/);if(i(K,"attribute-equals")&&(F||p==">")||i(K,"decl-attribute-equals")&&(F||p=="?"))return{text:n+n,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(s,a,_,e,r){var n=e.doc.getTextRange(r);if(!r.isMultiLine()&&(n=='"'||n=="'")){var t=e.doc.getLine(r.start.row),o=t.substring(r.start.column+1,r.start.column+2);if(o==n)return r.end.column++,r}}),this.add("autoclosing","insertion",function(s,a,_,e,r){if(r==">"){var n=_.getSelectionRange().start,t=new c(e,n.row,n.column),o=t.getCurrentToken()||t.stepBackward();if(!o||!(i(o,"tag-name")||i(o,"tag-whitespace")||i(o,"attribute-name")||i(o,"attribute-equals")||i(o,"attribute-value"))||i(o,"reference.attribute-value"))return;if(i(o,"attribute-value")){var g=t.getCurrentTokenColumn()+o.value.length;if(n.column<g)return;if(n.column==g){var p=t.stepForward();if(p&&i(p,"attribute-value"))return;t.stepBackward()}}if(/^\s*>/.test(e.getLine(n.row).slice(n.column)))return;for(;!i(o,"tag-name");)if(o=t.stepBackward(),o.value=="<"){o=t.stepForward();break}var h=t.getCurrentTokenRow(),K=t.getCurrentTokenColumn();if(i(t.stepBackward(),"end-tag-open"))return;var F=o.value;return h==n.row&&(F=F.substring(0,n.column-K)),this.voidElements&&this.voidElements.hasOwnProperty(F.toLowerCase())?void 0:{text:"></"+F+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(s,a,_,e,r){if(r==`
`){var n=_.getCursorPosition(),t=e.getLine(n.row),o=new c(e,n.row,n.column),g=o.getCurrentToken();if(i(g,"")&&g.type.indexOf("tag-close")!==-1){if(g.value=="/>")return;for(;g&&g.type.indexOf("tag-name")===-1;)g=o.stepBackward();if(!g)return;var p=g.value,h=o.getCurrentTokenRow();if(g=o.stepBackward(),!g||g.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[p]||!this.voidElements){var K=e.getTokenAt(n.row,n.column+1),t=e.getLine(h),F=this.$getIndent(t),x=F+e.getTabString();return K&&K.value==="</"?{text:`
`+x+`
`+F,selection:[1,x.length,1,x.length]}:{text:`
`+x}}}}})};L.inherits(T,u),d.XmlBehaviour=T}),ace.define("ace/mode/behaviour/javascript",["require","exports","module","ace/lib/oop","ace/token_iterator","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml"],function(l,d,m){var L=l("../../lib/oop"),u=l("../../token_iterator").TokenIterator,c=l("../behaviour/cstyle").CstyleBehaviour,i=l("../behaviour/xml").XmlBehaviour,T=function(){var s=new i({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(s),this.inherit(c),this.add("autoclosing-fragment","insertion",function(a,_,e,r,n){if(n==">"){var t=e.getSelectionRange().start,o=new u(r,t.row,t.column),g=o.getCurrentToken()||o.stepBackward();if(!g)return;if(g.value=="<")return{text:"></>",selection:[1,1]}}})};L.inherits(T,c),d.JavaScriptBehaviour=T}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,d,m){var L=l("../../lib/oop"),u=l("../../range").Range,c=l("./fold_mode").FoldMode,i=d.FoldMode=function(a,_){c.call(this),this.voidElements=a||{},this.optionalEndTags=L.mixin({},this.voidElements),_&&L.mixin(this.optionalEndTags,_)};L.inherits(i,c);var T=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function s(a,_){return a.type.lastIndexOf(_+".xml")>-1}(function(){this.getFoldWidget=function(a,_,e){var r=this._getFirstTagInLine(a,e);return r?r.closing||!r.tagName&&r.selfClosing?_==="markbeginend"?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())||this._findEndTagInLine(a,e,r.tagName,r.end.column)?"":"start":this.getCommentFoldWidget(a,e)},this.getCommentFoldWidget=function(a,_){return/comment/.test(a.getState(_))&&/<!-/.test(a.getLine(_))?"start":""},this._getFirstTagInLine=function(a,_){for(var e=a.getTokens(_),r=new T,n=0;n<e.length;n++){var t=e[n];if(s(t,"tag-open")){if(r.end.column=r.start.column+t.value.length,r.closing=s(t,"end-tag-open"),t=e[++n],!t)return null;if(r.tagName=t.value,t.value===""){if(t=e[++n],!t)return null;r.tagName=t.value}for(r.end.column+=t.value.length,n++;n<e.length;n++)if(t=e[n],r.end.column+=t.value.length,s(t,"tag-close")){r.selfClosing=t.value=="/>";break}return r}else if(s(t,"tag-close"))return r.selfClosing=t.value=="/>",r;r.start.column+=t.value.length}return null},this._findEndTagInLine=function(a,_,e,r){for(var n=a.getTokens(_),t=0,o=0;o<n.length;o++){var g=n[o];if(t+=g.value.length,!(t<r-1)&&s(g,"end-tag-open")&&(g=n[o+1],s(g,"tag-name")&&g.value===""&&(g=n[o+2]),g&&g.value==e))return!0}return!1},this.getFoldWidgetRange=function(a,_,e){var r=this._getFirstTagInLine(a,e);if(!r)return this.getCommentFoldWidget(a,e)&&a.getCommentFoldRange(e,a.getLine(e).length);var n=a.getMatchingTags({row:e,column:0});if(n)return new u(n.openTag.end.row,n.openTag.end.column,n.closeTag.start.row,n.closeTag.start.column)}}).call(i.prototype)}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,d,m){var L=l("../../lib/oop"),u=l("../../range").Range,c=l("./fold_mode").FoldMode,i=d.FoldMode=function(T){T&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+T.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+T.end)))};L.inherits(i,c),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(T,s,a){var _=T.getLine(a);if(this.singleLineBlockCommentRe.test(_)&&!this.startRegionRe.test(_)&&!this.tripleStarBlockCommentRe.test(_))return"";var e=this._getFoldWidgetBase(T,s,a);return!e&&this.startRegionRe.test(_)?"start":e},this.getFoldWidgetRange=function(T,s,a,_){var e=T.getLine(a);if(this.startRegionRe.test(e))return this.getCommentRegionBlock(T,e,a);var t=e.match(this.foldingStartMarker);if(t){var r=t.index;if(t[1])return this.openingBracketBlock(T,t[1],a,r);var n=T.getCommentFoldRange(a,r+t[0].length,1);return n&&!n.isMultiLine()&&(_?n=this.getSectionRange(T,a):s!="all"&&(n=null)),n}if(s!=="markbegin"){var t=e.match(this.foldingStopMarker);if(t){var r=t.index+t[0].length;return t[1]?this.closingBracketBlock(T,t[1],a,r):T.getCommentFoldRange(a,r,-1)}}},this.getSectionRange=function(T,s){var a=T.getLine(s),_=a.search(/\S/),e=s,r=a.length;s=s+1;for(var n=s,t=T.getLength();++s<t;){a=T.getLine(s);var o=a.search(/\S/);if(o!==-1){if(_>o)break;var g=this.getFoldWidgetRange(T,"all",s);if(g){if(g.start.row<=e)break;if(g.isMultiLine())s=g.end.row;else if(_==o)break}n=s}}return new u(e,r,n,T.getLine(n).length)},this.getCommentRegionBlock=function(T,s,a){for(var _=s.search(/\s*$/),e=T.getLength(),r=a,n=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++a<e;){s=T.getLine(a);var o=n.exec(s);if(o&&(o[1]?t--:t++,!t))break}var g=a;if(g>r)return new u(r,_,g,s.length)}}.call(i.prototype)}),ace.define("ace/mode/folding/javascript",["require","exports","module","ace/lib/oop","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(l,d,m){var L=l("../../lib/oop"),u=l("./xml").FoldMode,c=l("./cstyle").FoldMode,i=d.FoldMode=function(T){T&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+T.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+T.end))),this.xmlFoldMode=new u};L.inherits(i,c),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(T,s,a){var _=this.getFoldWidgetBase(T,s,a);return _||this.xmlFoldMode.getFoldWidget(T,s,a)},this.getFoldWidgetRange=function(T,s,a,_){var e=this.getFoldWidgetRangeBase(T,s,a,_);return e||this.xmlFoldMode.getFoldWidgetRange(T,s,a)}}.call(i.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/javascript","ace/mode/folding/javascript"],function(l,d,m){var L=l("../lib/oop"),u=l("./text").Mode,c=l("./javascript_highlight_rules").JavaScriptHighlightRules,i=l("./matching_brace_outdent").MatchingBraceOutdent,T=l("../worker/worker_client").WorkerClient,s=l("./behaviour/javascript").JavaScriptBehaviour,a=l("./folding/javascript").FoldMode,_=function(){this.HighlightRules=c,this.$outdent=new i,this.$behaviour=new s,this.foldingRules=new a};L.inherits(_,u),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(e,r,n){var t=this.$getIndent(r),o=this.getTokenizer().getLineTokens(r,e),g=o.tokens,p=o.state;if(g.length&&g[g.length-1].type=="comment")return t;if(e=="start"||e=="no_regex"){var h=r.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);h&&(t+=n)}else if(e=="doc-start"){if(p=="start"||p=="no_regex")return"";var h=r.match(/^\s*(\/?)\*/);h&&(h[1]&&(t+=" "),t+="* ")}return t},this.checkOutdent=function(e,r,n){return this.$outdent.checkOutdent(r,n)},this.autoOutdent=function(e,r,n){this.$outdent.autoOutdent(r,n)},this.createWorker=function(e){var r=new T(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return r.attachToDocument(e.getDocument()),r.on("annotate",function(n){e.setAnnotations(n.data)}),r.on("terminate",function(){e.clearAnnotations()}),r},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(_.prototype),d.Mode=_}),ace.define("ace/mode/gobstones_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(l,d,m){var L=l("../lib/oop"),u=l("./text_highlight_rules").TextHighlightRules,c=function(){var i={standard:"program|procedure|function|interactive|return|let",type:"type|is|variant|record|field|case"},T={commands:{repetitions:"repeat|while|foreach|in",alternatives:"if|elseif|else|switch"},expressions:{alternatives:"choose|when|otherwise|matching|select|on"}},s={colors:"Verde|Rojo|Azul|Negro",cardinals:"Norte|Sur|Este|Oeste",booleans:"True|False",numbers:/([-]?)([0-9]+)\b/,strings:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},a={commands:"Poner|Sacar|Mover|IrAlBorde|VaciarTablero|BOOM",expressions:"nroBolitas|hayBolitas|puedeMover|siguiente|previo|opuesto|minBool|maxBool|minDir|maxDir|minColor|maxColor|primero|sinElPrimero|esVacía|boom",keys:"K_A|K_B|K_C|K_D|K_E|K_F|K_G|K_G|K_H|K_I|K_J|K_K|K_L|K_M|K_N|K_Ñ|K_O|K_P|K_Q|K_R|K_S|K_T|K_U|K_V|K_W|K_X|K_Y|K_Z|K_0|K_1|K_2|K_3|K_4|K_5|K_6|K_7|K_8|K_9|K_F1|K_F2|K_F3|K_F4|K_F5|K_F6|K_F7|K_F8|K_F9|K_F10|K_F11|K_12|K_UP|K_DOWN|K_LEFT|K_RIGHT|K_RETURN|K_BACKSPACE|K_TAB|K_SPACE|K_ESCAPEK_CTRL_A|K_CTRL_B|K_CTRL_C|K_CTRL_D|K_CTRL_E|K_CTRL_F|K_CTRL_G|K_CTRL_G|K_CTRL_H|K_CTRL_I|K_CTRL_J|K_CTRL_K|K_CTRL_L|K_CTRL_M|K_CTRL_N|K_CTRL_Ñ|K_CTRL_O|K_CTRL_P|K_CTRL_Q|K_CTRL_R|K_CTRL_S|K_CTRL_T|K_CTRL_U|K_CTRL_V|K_CTRL_W|K_CTRL_X|K_CTRL_Y|K_CTRL_Z|K_CTRL_0|K_CTRL_1|K_CTRL_2|K_CTRL_3|K_CTRL_4|K_CTRL_5|K_CTRL_6|K_CTRL_7|K_CTRL_8|K_CTRL_9|K_CTRL_F1|K_CTRL_F2|K_CTRL_F3|K_CTRL_F4|K_CTRL_F5|K_CTRL_F6|K_CTRL_F7|K_CTRL_F8|K_CTRL_F9|K_CTRL_F10|K_CTRL_F11|K_CTRL_F12|K_CTRL_UP|K_CTRL_DOWN|K_CTRL_LEFT|K_CTRL_RIGHT|K_CTRL_RETURN|K_CTRL_BACKSPACE|K_CTRL_TAB|K_CTRL_SPACE|K_CTRL_ESCAPEK_ALT_A|K_ALT_B|K_ALT_C|K_ALT_D|K_ALT_E|K_ALT_F|K_ALT_G|K_ALT_G|K_ALT_H|K_ALT_I|K_ALT_J|K_ALT_K|K_ALT_L|K_ALT_M|K_ALT_N|K_ALT_Ñ|K_ALT_O|K_ALT_P|K_ALT_Q|K_ALT_R|K_ALT_S|K_ALT_T|K_ALT_U|K_ALT_V|K_ALT_W|K_ALT_X|K_ALT_Y|K_ALT_Z|K_ALT_0|K_ALT_1|K_ALT_2|K_ALT_3|K_ALT_4|K_ALT_5|K_ALT_6|K_ALT_7|K_ALT_8|K_ALT_9|K_ALT_F1|K_ALT_F2|K_ALT_F3|K_ALT_F4|K_ALT_F5|K_ALT_F6|K_ALT_F7|K_ALT_F8|K_ALT_F9|K_ALT_F10|K_ALT_F11|K_ALT_F12|K_ALT_UP|K_ALT_DOWN|K_ALT_LEFT|K_ALT_RIGHT|K_ALT_RETURN|K_ALT_BACKSPACE|K_ALT_TAB|K_ALT_SPACE|K_ALT_ESCAPEK_SHIFT_A|K_SHIFT_B|K_SHIFT_C|K_SHIFT_D|K_SHIFT_E|K_SHIFT_F|K_SHIFT_G|K_SHIFT_G|K_SHIFT_H|K_SHIFT_I|K_SHIFT_J|K_SHIFT_K|K_SHIFT_L|K_SHIFT_M|K_SHIFT_N|K_SHIFT_Ñ|K_SHIFT_O|K_SHIFT_P|K_SHIFT_Q|K_SHIFT_R|K_SHIFT_S|K_SHIFT_T|K_SHIFT_U|K_SHIFT_V|K_SHIFT_W|K_SHIFT_X|K_SHIFT_Y|K_SHIFT_Z|K_SHIFT_0|K_SHIFT_1|K_SHIFT_2|K_SHIFT_3|K_SHIFT_4|K_SHIFT_5|K_SHIFT_6|K_SHIFT_7|K_SHIFT_8|K_SHIFT_9|K_SHIFT_F1|K_SHIFT_F2|K_SHIFT_F3|K_SHIFT_F4|K_SHIFT_F5|K_SHIFT_F6|K_SHIFT_F7|K_SHIFT_F8|K_SHIFT_F9|K_SHIFT_F10|K_SHIFT_F11|K_SHIFT_F12|K_SHIFT_UP|K_SHIFT_DOWN|K_SHIFT_LEFT|K_SHIFT_RIGHT|K_SHIFT_RETURN|K_SHIFT_BACKSPACE|K_SHIFT_TAB|K_SHIFT_SPACE|K_SHIFT_ESCAPEK_CTRL_ALT_A|K_CTRL_ALT_B|K_CTRL_ALT_C|K_CTRL_ALT_D|K_CTRL_ALT_E|K_CTRL_ALT_F|K_CTRL_ALT_G|K_CTRL_ALT_G|K_CTRL_ALT_H|K_CTRL_ALT_I|K_CTRL_ALT_J|K_CTRL_ALT_K|K_CTRL_ALT_L|K_CTRL_ALT_M|K_CTRL_ALT_N|K_CTRL_ALT_Ñ|K_CTRL_ALT_O|K_CTRL_ALT_P|K_CTRL_ALT_Q|K_CTRL_ALT_R|K_CTRL_ALT_S|K_CTRL_ALT_T|K_CTRL_ALT_U|K_CTRL_ALT_V|K_CTRL_ALT_W|K_CTRL_ALT_X|K_CTRL_ALT_Y|K_CTRL_ALT_Z|K_CTRL_ALT_0|K_CTRL_ALT_1|K_CTRL_ALT_2|K_CTRL_ALT_3|K_CTRL_ALT_4|K_CTRL_ALT_5|K_CTRL_ALT_6|K_CTRL_ALT_7|K_CTRL_ALT_8|K_CTRL_ALT_9|K_CTRL_ALT_F1|K_CTRL_ALT_F2|K_CTRL_ALT_F3|K_CTRL_ALT_F4|K_CTRL_ALT_F5|K_CTRL_ALT_F6|K_CTRL_ALT_F7|K_CTRL_ALT_F8|K_CTRL_ALT_F9|K_CTRL_ALT_F10|K_CTRL_ALT_F11|K_CTRL_ALT_F12|K_CTRL_ALT_UP|K_CTRL_ALT_DOWN|K_CTRL_ALT_LEFT|K_CTRL_ALT_RIGHT|K_CTRL_ALT_RETURN|K_CTRL_ALT_BACKSPACE|K_CTRL_ALT_TAB|K_CTRL_ALT_SPACE|K_CTRL_ALT_ESCAPEK_CTRL_SHIFT_A|K_CTRL_SHIFT_B|K_CTRL_SHIFT_C|K_CTRL_SHIFT_D|K_CTRL_SHIFT_E|K_CTRL_SHIFT_F|K_CTRL_SHIFT_G|K_CTRL_SHIFT_G|K_CTRL_SHIFT_H|K_CTRL_SHIFT_I|K_CTRL_SHIFT_J|K_CTRL_SHIFT_K|K_CTRL_SHIFT_L|K_CTRL_SHIFT_M|K_CTRL_SHIFT_N|K_CTRL_SHIFT_Ñ|K_CTRL_SHIFT_O|K_CTRL_SHIFT_P|K_CTRL_SHIFT_Q|K_CTRL_SHIFT_R|K_CTRL_SHIFT_S|K_CTRL_SHIFT_T|K_CTRL_SHIFT_U|K_CTRL_SHIFT_V|K_CTRL_SHIFT_W|K_CTRL_SHIFT_X|K_CTRL_SHIFT_Y|K_CTRL_SHIFT_Z|K_CTRL_SHIFT_0|K_CTRL_SHIFT_1|K_CTRL_SHIFT_2|K_CTRL_SHIFT_3|K_CTRL_SHIFT_4|K_CTRL_SHIFT_5|K_CTRL_SHIFT_6|K_CTRL_SHIFT_7|K_CTRL_SHIFT_8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_F1|K_CTRL_SHIFT_F2|K_CTRL_SHIFT_F3|K_CTRL_SHIFT_F4|K_CTRL_SHIFT_F5|K_CTRL_SHIFT_F6|K_CTRL_SHIFT_F7|K_CTRL_SHIFT_F8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_10|K_CTRL_SHIFT_11|K_CTRL_SHIFT_12|K_CTRL_SHIFT_UP|K_CTRL_SHIFT_DOWN|K_CTRL_SHIFT_LEFT|K_CTRL_SHIFT_RIGHT|K_CTRL_SHIFT_RETURN|K_CTRL_SHIFT_BACKSPACE|K_CTRL_SHIFT_TAB|K_CTRL_SHIFT_SPACE|K_CTRL_SHIFT_ESCAPEK_ALT_SHIFT_A|K_ALT_SHIFT_B|K_ALT_SHIFT_C|K_ALT_SHIFT_D|K_ALT_SHIFT_E|K_ALT_SHIFT_F|K_ALT_SHIFT_G|K_ALT_SHIFT_G|K_ALT_SHIFT_H|K_ALT_SHIFT_I|K_ALT_SHIFT_J|K_ALT_SHIFT_K|K_ALT_SHIFT_L|K_ALT_SHIFT_M|K_ALT_SHIFT_N|K_ALT_SHIFT_Ñ|K_ALT_SHIFT_O|K_ALT_SHIFT_P|K_ALT_SHIFT_Q|K_ALT_SHIFT_R|K_ALT_SHIFT_S|K_ALT_SHIFT_T|K_ALT_SHIFT_U|K_ALT_SHIFT_V|K_ALT_SHIFT_W|K_ALT_SHIFT_X|K_ALT_SHIFT_Y|K_ALT_SHIFT_Z|K_ALT_SHIFT_0|K_ALT_SHIFT_1|K_ALT_SHIFT_2|K_ALT_SHIFT_3|K_ALT_SHIFT_4|K_ALT_SHIFT_5|K_ALT_SHIFT_6|K_ALT_SHIFT_7|K_ALT_SHIFT_8|K_ALT_SHIFT_9|K_ALT_SHIFT_F1|K_ALT_SHIFT_F2|K_ALT_SHIFT_F3|K_ALT_SHIFT_F4|K_ALT_SHIFT_F5|K_ALT_SHIFT_F6|K_ALT_SHIFT_F7|K_ALT_SHIFT_F8|K_ALT_SHIFT_9|K_ALT_SHIFT_10|K_ALT_SHIFT_11|K_ALT_SHIFT_12|K_ALT_SHIFT_UP|K_ALT_SHIFT_DOWN|K_ALT_SHIFT_LEFT|K_ALT_SHIFT_RIGHT|K_ALT_SHIFT_RETURN|K_ALT_SHIFT_BACKSPACE|K_ALT_SHIFT_TAB|K_ALT_SHIFT_SPACE|K_ALT_SHIFT_ESCAPEK_CTRL_ALT_SHIFT_A|K_CTRL_ALT_SHIFT_B|K_CTRL_ALT_SHIFT_C|K_CTRL_ALT_SHIFT_D|K_CTRL_ALT_SHIFT_E|K_CTRL_ALT_SHIFT_F|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_H|K_CTRL_ALT_SHIFT_I|K_CTRL_ALT_SHIFT_J|K_CTRL_ALT_SHIFT_K|K_CTRL_ALT_SHIFT_L|K_CTRL_ALT_SHIFT_M|K_CTRL_ALT_SHIFT_N|K_CTRL_ALT_SHIFT_Ñ|K_CTRL_ALT_SHIFT_O|K_CTRL_ALT_SHIFT_P|K_CTRL_ALT_SHIFT_Q|K_CTRL_ALT_SHIFT_R|K_CTRL_ALT_SHIFT_S|K_CTRL_ALT_SHIFT_T|K_CTRL_ALT_SHIFT_U|K_CTRL_ALT_SHIFT_V|K_CTRL_ALT_SHIFT_W|K_CTRL_ALT_SHIFT_X|K_CTRL_ALT_SHIFT_Y|K_CTRL_ALT_SHIFT_Z|K_CTRL_ALT_SHIFT_0|K_CTRL_ALT_SHIFT_1|K_CTRL_ALT_SHIFT_2|K_CTRL_ALT_SHIFT_3|K_CTRL_ALT_SHIFT_4|K_CTRL_ALT_SHIFT_5|K_CTRL_ALT_SHIFT_6|K_CTRL_ALT_SHIFT_7|K_CTRL_ALT_SHIFT_8|K_CTRL_ALT_SHIFT_9|K_CTRL_ALT_SHIFT_F1|K_CTRL_ALT_SHIFT_F2|K_CTRL_ALT_SHIFT_F3|K_CTRL_ALT_SHIFT_F4|K_CTRL_ALT_SHIFT_F5|K_CTRL_ALT_SHIFT_F6|K_CTRL_ALT_SHIFT_F7|K_CTRL_ALT_SHIFT_F8|K_CTRL_ALT_SHIFT_F9|K_CTRL_ALT_SHIFT_F10|K_CTRL_ALT_SHIFT_F11|K_CTRL_ALT_SHIFT_F12|K_CTRL_ALT_SHIFT_UP|K_CTRL_ALT_SHIFT_DOWN|K_CTRL_ALT_SHIFT_LEFT|K_CTRL_ALT_SHIFT_RIGHT|K_CTRL_ALT_SHIFT_RETURN|K_CTRL_ALT_SHIFT_BACKSPACE|K_CTRL_ALT_SHIFT_TAB|K_CTRL_ALT_SHIFT_SPACE|K_CTRL_ALT_SHIFT_ESCAPE"},_={commands:":=",expressions:{numeric:"\\+|\\-|\\*|\\^|div|mod",comparison:">=|<=|==|\\/=|>|<",boolean:"\\|\\||&&|not",other:"\\+\\+|<\\-|\\[|\\]|\\_|\\->"}},e={line:{double_slash:"\\/\\/.*$",double_dash:"\\-\\-.*$",number_sign:"#.*$"},block:{start:"\\/\\*",end:"\\*\\/"},block_alt:{start:"\\{\\-",end:"\\-\\}"}};this.$rules={start:[{token:"comment.line.double-slash.gobstones",regex:e.line.double_slash},{token:"comment.line.double-dash.gobstones",regex:e.line.double_dash},{token:"comment.line.number-sign.gobstones",regex:e.line.number_sign},{token:"comment.block.dash-asterisc.gobstones",regex:e.block.start,next:"block_comment_end"},{token:"comment.block.brace-dash.gobstones",regex:e.block_alt.start,next:"block_comment_alt_end"},{token:"constant.numeric.gobstones",regex:s.numbers},{token:"string.quoted.double.gobstones",regex:s.strings},{token:"keyword.operator.other.gobstones",regex:_.expressions.other},{token:"keyword.operator.numeric.gobstones",regex:_.expressions.numeric},{token:"keyword.operator.compare.gobstones",regex:_.expressions.comparison},{token:"keyword.operator.boolean.gobstones",regex:_.expressions.boolean},{token:this.createKeywordMapper({"storage.type.definitions.gobstones":i.standard,"storage.type.types.gobstones":i.type,"keyword.control.commands.repetitions.gobstones":T.commands.repetitions,"keyword.control.commands.alternatives.gobstones":T.commands.alternatives,"keyword.control.expressions.alternatives.gobstones":T.expressions.alternatives,"constant.language.colors.gobstones":s.colors,"constant.language.cardinals.gobstones":s.cardinals,"constant.language.boolean.gobstones":s.booleans,"support.function.gobstones":a.commands,"support.variable.gobstones":a.expressions,"variable.language.gobstones":a.keys},"identifier.gobstones"),regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"comma.gobstones",regex:","},{token:"semicolon.gobstones",regex:";"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],block_comment_end:[{token:"comment.block.dash-asterisc.gobstones",regex:e.block.end,next:"start"},{defaultToken:"comment.block.dash-asterisc.gobstones"}],block_comment_alt_end:[{token:"comment.block.brace-dash.gobstones",regex:e.block_alt.end,next:"start"},{defaultToken:"comment.block.brace-dash.gobstones"}]}};L.inherits(c,u),d.GobstonesHighlightRules=c}),ace.define("ace/mode/gobstones",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/gobstones_highlight_rules"],function(l,d,m){var L=l("../lib/oop"),u=l("./javascript").Mode,c=l("./gobstones_highlight_rules").GobstonesHighlightRules,i=function(){u.call(this),this.HighlightRules=c,this.$behaviour=this.$defaultBehaviour};L.inherits(i,u),function(){this.createWorker=function(){return null},this.$id="ace/mode/gobstones",this.snippetFileId="ace/snippets/gobstones"}.call(i.prototype),d.Mode=i}),function(){ace.require(["ace/mode/gobstones"],function(l){f&&(f.exports=l)})}()})(C);var S=C.exports;const v=A(S),b=I({__proto__:null,default:v},[S]);export{b as m};