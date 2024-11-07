import{_ as c,d as W,s as Et,g as gt,c as kt,b as Rt,p as Ot,q as bt,l as X,v as xt,u as Nt,j as Tt,A as At}from"./mermaid.core-D-7ZtuBl.js";import{G as Mt}from"./graph-Du9NTTXJ.js";import{s as rt,c as vt}from"./isEmpty-DVc1NNx0.js";import{l as St}from"./layout-DWHSlPwW.js";import{v as wt}from"./v5-DhYbOkY1.js";import{l as It}from"./line-DXtxjsEH.js";import"./index-vtFYCCwT.js";import"./owner-CGzhp8Ob.js";import"./StyledButton-D_mDAIdz.js";import"./proxy-C75VZz0P.js";import"./_baseUniq-Su2bbkL-.js";import"./union-BrCZxpHF.js";import"./zipObject-CztN56XO.js";import"./_basePickBy-DfnWw-Wj.js";import"./has-BhlPWlhe.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var at=function(){var t=c(function(v,a,i,s){for(i=i||{},s=v.length;s--;i[v[s]]=a);return i},"o"),r=[6,8,10,20,22,24,26,27,28],l=[1,10],p=[1,11],h=[1,12],m=[1,13],f=[1,14],d=[1,15],u=[1,21],w=[1,22],R=[1,23],O=[1,24],b=[1,25],x=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],A=[1,34],T=[27,28,46,47],C=[41,42,43,44,45],Y=[17,34],Z=[1,54],N=[1,53],M=[17,34,36,38],E={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:c(function(a,i,s,o,y,e,K){var n=e.length-1;switch(y){case 1:break;case 2:this.$=[];break;case 3:e[n-1].push(e[n]),this.$=e[n-1];break;case 4:case 5:this.$=e[n];break;case 6:case 7:this.$=[];break;case 8:o.addEntity(e[n-4]),o.addEntity(e[n-2]),o.addRelationship(e[n-4],e[n],e[n-2],e[n-3]);break;case 9:o.addEntity(e[n-3]),o.addAttributes(e[n-3],e[n-1]);break;case 10:o.addEntity(e[n-2]);break;case 11:o.addEntity(e[n]);break;case 12:o.addEntity(e[n-6],e[n-4]),o.addAttributes(e[n-6],e[n-1]);break;case 13:o.addEntity(e[n-5],e[n-3]);break;case 14:o.addEntity(e[n-3],e[n-1]);break;case 15:case 16:this.$=e[n].trim(),o.setAccTitle(this.$);break;case 17:case 18:this.$=e[n].trim(),o.setAccDescription(this.$);break;case 19:case 43:this.$=e[n];break;case 20:case 41:case 42:this.$=e[n].replace(/"/g,"");break;case 21:case 29:this.$=[e[n]];break;case 22:e[n].push(e[n-1]),this.$=e[n];break;case 23:this.$={attributeType:e[n-1],attributeName:e[n]};break;case 24:this.$={attributeType:e[n-2],attributeName:e[n-1],attributeKeyTypeList:e[n]};break;case 25:this.$={attributeType:e[n-2],attributeName:e[n-1],attributeComment:e[n]};break;case 26:this.$={attributeType:e[n-3],attributeName:e[n-2],attributeKeyTypeList:e[n-1],attributeComment:e[n]};break;case 27:case 28:case 31:this.$=e[n];break;case 30:e[n-2].push(e[n]),this.$=e[n-2];break;case 32:this.$=e[n].replace(/"/g,"");break;case 33:this.$={cardA:e[n],relType:e[n-1],cardB:e[n-2]};break;case 34:this.$=o.Cardinality.ZERO_OR_ONE;break;case 35:this.$=o.Cardinality.ZERO_OR_MORE;break;case 36:this.$=o.Cardinality.ONE_OR_MORE;break;case 37:this.$=o.Cardinality.ONLY_ONE;break;case 38:this.$=o.Cardinality.MD_PARENT;break;case 39:this.$=o.Identification.NON_IDENTIFYING;break;case 40:this.$=o.Identification.IDENTIFYING;break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:l,22:p,24:h,26:m,27:f,28:d},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:16,11:9,20:l,22:p,24:h,26:m,27:f,28:d},t(r,[2,5]),t(r,[2,6]),t(r,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:u,42:w,43:R,44:O,45:b}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(r,[2,18]),t(x,[2,19]),t(x,[2,20]),t(r,[2,4]),{11:29,27:f,28:d},{16:30,17:[1,31],29:32,30:33,34:A},{11:35,27:f,28:d},{40:36,46:[1,37],47:[1,38]},t(T,[2,34]),t(T,[2,35]),t(T,[2,36]),t(T,[2,37]),t(T,[2,38]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),{13:[1,39]},{17:[1,40]},t(r,[2,10]),{16:41,17:[2,21],29:32,30:33,34:A},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:u,42:w,43:R,44:O,45:b},t(C,[2,39]),t(C,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(r,[2,9]),{17:[2,22]},t(Y,[2,23],{32:50,33:51,35:52,37:Z,38:N}),t([17,34,37,38],[2,28]),t(r,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(r,[2,8]),t(r,[2,41]),t(r,[2,42]),t(r,[2,43]),t(Y,[2,24],{33:56,36:[1,57],38:N}),t(Y,[2,25]),t(M,[2,29]),t(Y,[2,32]),t(M,[2,31]),{16:58,17:[1,59],29:32,30:33,34:A},t(Y,[2,26]),{35:60,37:Z},{17:[1,61]},t(r,[2,13]),t(M,[2,30]),t(r,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:c(function(a,i){if(i.recoverable)this.trace(a);else{var s=new Error(a);throw s.hash=i,s}},"parseError"),parse:c(function(a){var i=this,s=[0],o=[],y=[null],e=[],K=this.table,n="",U=0,st=0,pt=2,ot=1,ft=e.slice.call(arguments,1),k=Object.create(this.lexer),z={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(z.yy[J]=this.yy[J]);k.setInput(a,z.yy),z.yy.lexer=k,z.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var $=k.yylloc;e.push($);var _t=k.options&&k.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function mt(I){s.length=s.length-2*I,y.length=y.length-I,e.length=e.length-I}c(mt,"popStack");function lt(){var I;return I=o.pop()||k.lex()||ot,typeof I!="number"&&(I instanceof Array&&(o=I,I=o.pop()),I=i.symbols_[I]||I),I}c(lt,"lex");for(var S,H,L,tt,G={},j,F,ct,q;;){if(H=s[s.length-1],this.defaultActions[H]?L=this.defaultActions[H]:((S===null||typeof S>"u")&&(S=lt()),L=K[H]&&K[H][S]),typeof L>"u"||!L.length||!L[0]){var et="";q=[];for(j in K[H])this.terminals_[j]&&j>pt&&q.push("'"+this.terminals_[j]+"'");k.showPosition?et="Parse error on line "+(U+1)+`:
`+k.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[S]||S)+"'":et="Parse error on line "+(U+1)+": Unexpected "+(S==ot?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(et,{text:k.match,token:this.terminals_[S]||S,line:k.yylineno,loc:$,expected:q})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+H+", token: "+S);switch(L[0]){case 1:s.push(S),y.push(k.yytext),e.push(k.yylloc),s.push(L[1]),S=null,st=k.yyleng,n=k.yytext,U=k.yylineno,$=k.yylloc;break;case 2:if(F=this.productions_[L[1]][1],G.$=y[y.length-F],G._$={first_line:e[e.length-(F||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(F||1)].first_column,last_column:e[e.length-1].last_column},_t&&(G._$.range=[e[e.length-(F||1)].range[0],e[e.length-1].range[1]]),tt=this.performAction.apply(G,[n,st,U,z.yy,L[1],y,e].concat(ft)),typeof tt<"u")return tt;F&&(s=s.slice(0,-1*F*2),y=y.slice(0,-1*F),e=e.slice(0,-1*F)),s.push(this.productions_[L[1]][0]),y.push(G.$),e.push(G._$),ct=K[s[s.length-2]][s[s.length-1]],s.push(ct);break;case 3:return!0}}return!0},"parse")},g=function(){var v={EOF:1,parseError:c(function(i,s){if(this.yy.parser)this.yy.parser.parseError(i,s);else throw new Error(i)},"parseError"),setInput:c(function(a,i){return this.yy=i||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var i=a.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:c(function(a){var i=a.length,s=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===o.length?this.yylloc.first_column:0)+o[o.length-s.length].length-s[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(a){this.unput(this.match.slice(a))},"less"),pastInput:c(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var a=this.pastInput(),i=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+i+"^"},"showPosition"),test_match:c(function(a,i){var s,o,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),o=a[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var e in y)this[e]=y[e];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,i,s,o;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),e=0;e<y.length;e++)if(s=this._input.match(this.rules[y[e]]),s&&(!i||s[0].length>i[0].length)){if(i=s,o=e,this.options.backtrack_lexer){if(a=this.test_match(s,y[e]),a!==!1)return a;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(a=this.test_match(i,y[o]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var i=this.next();return i||this.lex()},"lex"),begin:c(function(i){this.conditionStack.push(i)},"begin"),popState:c(function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:c(function(i){this.begin(i)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(i,s,o,y){switch(o){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return s.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return s.yytext[0];case 55:return 6}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return v}();E.lexer=g;function D(){this.yy={}}return c(D,"Parser"),D.prototype=E,E.Parser=D,new D}();at.parser=at;var Dt=at,V=new Map,nt=[],Lt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Bt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},dt=c(function(t,r=void 0){return V.has(t)?!V.get(t).alias&&r&&(V.get(t).alias=r,X.info(`Add alias '${r}' to entity '${t}'`)):(V.set(t,{attributes:[],alias:r}),X.info("Added new entity :",t)),V.get(t)},"addEntity"),Pt=c(()=>V,"getEntities"),Ct=c(function(t,r){let l=dt(t),p;for(p=r.length-1;p>=0;p--)l.attributes.push(r[p]),X.debug("Added attribute ",r[p].attributeName)},"addAttributes"),Yt=c(function(t,r,l,p){let h={entityA:t,roleA:r,entityB:l,relSpec:p};nt.push(h),X.debug("Added new relationship :",h)},"addRelationship"),Zt=c(()=>nt,"getRelationships"),Ft=c(function(){V=new Map,nt=[],xt()},"clear"),Wt={Cardinality:Lt,Identification:Bt,getConfig:c(()=>W().er,"getConfig"),addEntity:dt,addAttributes:Ct,getEntities:Pt,addRelationship:Yt,getRelationships:Zt,clear:Ft,setAccTitle:Et,getAccTitle:gt,setAccDescription:kt,getAccDescription:Rt,setDiagramTitle:Ot,getDiagramTitle:bt},B={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},zt=c(function(t,r){let l;t.append("defs").append("marker").attr("id",B.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",B.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",B.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",B.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),l=t.append("defs").append("marker").attr("id",B.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),l=t.append("defs").append("marker").attr("id",B.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",B.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",B.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),l=t.append("defs").append("marker").attr("id",B.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),l=t.append("defs").append("marker").attr("id",B.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"insertMarkers"),P={ERMarkers:B,insertMarkers:zt},Ht=/[^\dA-Za-z](\W)*/g,_={},Q=new Map,Vt=c(function(t){const r=Object.keys(t);for(const l of r)_[l]=t[l]},"setConf"),Gt=c((t,r,l)=>{const p=_.entityPadding/3,h=_.entityPadding/3,m=_.fontSize*.85,f=r.node().getBBox(),d=[];let u=!1,w=!1,R=0,O=0,b=0,x=0,A=f.height+p*2,T=1;l.forEach(N=>{N.attributeKeyTypeList!==void 0&&N.attributeKeyTypeList.length>0&&(u=!0),N.attributeComment!==void 0&&(w=!0)}),l.forEach(N=>{const M=`${r.node().id}-attr-${T}`;let E=0;const g=At(N.attributeType),D=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",m+"px").text(g),v=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",m+"px").text(N.attributeName),a={};a.tn=D,a.nn=v;const i=D.node().getBBox(),s=v.node().getBBox();if(R=Math.max(R,i.width),O=Math.max(O,s.width),E=Math.max(i.height,s.height),u){const o=N.attributeKeyTypeList!==void 0?N.attributeKeyTypeList.join(","):"",y=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",m+"px").text(o);a.kn=y;const e=y.node().getBBox();b=Math.max(b,e.width),E=Math.max(E,e.height)}if(w){const o=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",m+"px").text(N.attributeComment||"");a.cn=o;const y=o.node().getBBox();x=Math.max(x,y.width),E=Math.max(E,y.height)}a.height=E,d.push(a),A+=E+p*2,T+=1});let C=4;u&&(C+=2),w&&(C+=2);const Y=R+O+b+x,Z={width:Math.max(_.minEntityWidth,Math.max(f.width+_.entityPadding*2,Y+h*C)),height:l.length>0?A:Math.max(_.minEntityHeight,f.height+_.entityPadding*2)};if(l.length>0){const N=Math.max(0,(Z.width-Y-h*C)/(C/2));r.attr("transform","translate("+Z.width/2+","+(p+f.height/2)+")");let M=f.height+p*2,E="attributeBoxOdd";d.forEach(g=>{const D=M+p+g.height/2;g.tn.attr("transform","translate("+h+","+D+")");const v=t.insert("rect","#"+g.tn.node().id).classed(`er ${E}`,!0).attr("x",0).attr("y",M).attr("width",R+h*2+N).attr("height",g.height+p*2),a=parseFloat(v.attr("x"))+parseFloat(v.attr("width"));g.nn.attr("transform","translate("+(a+h)+","+D+")");const i=t.insert("rect","#"+g.nn.node().id).classed(`er ${E}`,!0).attr("x",a).attr("y",M).attr("width",O+h*2+N).attr("height",g.height+p*2);let s=parseFloat(i.attr("x"))+parseFloat(i.attr("width"));if(u){g.kn.attr("transform","translate("+(s+h)+","+D+")");const o=t.insert("rect","#"+g.kn.node().id).classed(`er ${E}`,!0).attr("x",s).attr("y",M).attr("width",b+h*2+N).attr("height",g.height+p*2);s=parseFloat(o.attr("x"))+parseFloat(o.attr("width"))}w&&(g.cn.attr("transform","translate("+(s+h)+","+D+")"),t.insert("rect","#"+g.cn.node().id).classed(`er ${E}`,"true").attr("x",s).attr("y",M).attr("width",x+h*2+N).attr("height",g.height+p*2)),M+=g.height+p*2,E=E==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else Z.height=Math.max(_.minEntityHeight,A),r.attr("transform","translate("+Z.width/2+","+Z.height/2+")");return Z},"drawAttributes"),Kt=c(function(t,r,l){const p=[...r.keys()];let h;return p.forEach(function(m){const f=yt(m,"entity");Q.set(m,f);const d=t.append("g").attr("id",f);h=h===void 0?f:h;const u="text-"+f,w=d.append("text").classed("er entityLabel",!0).attr("id",u).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",W().fontFamily).style("font-size",_.fontSize+"px").text(r.get(m).alias??m),{width:R,height:O}=Gt(d,w,r.get(m).attributes),x=d.insert("rect","#"+u).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",R).attr("height",O).node().getBBox();l.setNode(f,{width:x.width,height:x.height,shape:"rect",id:f})}),h},"drawEntities"),Xt=c(function(t,r){r.nodes().forEach(function(l){l!==void 0&&r.node(l)!==void 0&&t.select("#"+l).attr("transform","translate("+(r.node(l).x-r.node(l).width/2)+","+(r.node(l).y-r.node(l).height/2)+" )")})},"adjustEntities"),ut=c(function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},"getEdgeName"),Qt=c(function(t,r){return t.forEach(function(l){r.setEdge(Q.get(l.entityA),Q.get(l.entityB),{relationship:l},ut(l))}),t},"addRelationships"),ht=0,Ut=c(function(t,r,l,p,h){ht++;const m=l.edge(Q.get(r.entityA),Q.get(r.entityB),ut(r)),f=It().x(function(T){return T.x}).y(function(T){return T.y}).curve(vt),d=t.insert("path","#"+p).classed("er relationshipLine",!0).attr("d",f(m.points)).style("stroke",_.stroke).style("fill","none");r.relSpec.relType===h.db.Identification.NON_IDENTIFYING&&d.attr("stroke-dasharray","8,8");let u="";switch(_.arrowMarkerAbsolute&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),r.relSpec.cardA){case h.db.Cardinality.ZERO_OR_ONE:d.attr("marker-end","url("+u+"#"+P.ERMarkers.ZERO_OR_ONE_END+")");break;case h.db.Cardinality.ZERO_OR_MORE:d.attr("marker-end","url("+u+"#"+P.ERMarkers.ZERO_OR_MORE_END+")");break;case h.db.Cardinality.ONE_OR_MORE:d.attr("marker-end","url("+u+"#"+P.ERMarkers.ONE_OR_MORE_END+")");break;case h.db.Cardinality.ONLY_ONE:d.attr("marker-end","url("+u+"#"+P.ERMarkers.ONLY_ONE_END+")");break;case h.db.Cardinality.MD_PARENT:d.attr("marker-end","url("+u+"#"+P.ERMarkers.MD_PARENT_END+")");break}switch(r.relSpec.cardB){case h.db.Cardinality.ZERO_OR_ONE:d.attr("marker-start","url("+u+"#"+P.ERMarkers.ZERO_OR_ONE_START+")");break;case h.db.Cardinality.ZERO_OR_MORE:d.attr("marker-start","url("+u+"#"+P.ERMarkers.ZERO_OR_MORE_START+")");break;case h.db.Cardinality.ONE_OR_MORE:d.attr("marker-start","url("+u+"#"+P.ERMarkers.ONE_OR_MORE_START+")");break;case h.db.Cardinality.ONLY_ONE:d.attr("marker-start","url("+u+"#"+P.ERMarkers.ONLY_ONE_START+")");break;case h.db.Cardinality.MD_PARENT:d.attr("marker-start","url("+u+"#"+P.ERMarkers.MD_PARENT_START+")");break}const w=d.node().getTotalLength(),R=d.node().getPointAtLength(w*.5),O="rel"+ht,b=r.roleA.split(/<br ?\/>/g),x=t.append("text").classed("er relationshipLabel",!0).attr("id",O).attr("x",R.x).attr("y",R.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",W().fontFamily).style("font-size",_.fontSize+"px");if(b.length==1)x.text(r.roleA);else{const T=-(b.length-1)*.5;b.forEach((C,Y)=>{x.append("tspan").attr("x",R.x).attr("dy",`${Y===0?T:1}em`).text(C)})}const A=x.node().getBBox();t.insert("rect","#"+O).classed("er relationshipLabelBox",!0).attr("x",R.x-A.width/2).attr("y",R.y-A.height/2).attr("width",A.width).attr("height",A.height)},"drawRelationshipFromLayout"),jt=c(function(t,r,l,p){_=W().er,X.info("Drawing ER diagram");const h=W().securityLevel;let m;h==="sandbox"&&(m=rt("#i"+r));const d=(h==="sandbox"?rt(m.nodes()[0].contentDocument.body):rt("body")).select(`[id='${r}']`);P.insertMarkers(d,_);let u;u=new Mt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:_.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const w=Kt(d,p.db.getEntities(),u),R=Qt(p.db.getRelationships(),u);St(u),Xt(d,u),R.forEach(function(T){Ut(d,T,u,w,p)});const O=_.diagramPadding;Nt.insertTitle(d,"entityTitleText",_.titleTopMargin,p.db.getDiagramTitle());const b=d.node().getBBox(),x=b.width+O*2,A=b.height+O*2;Tt(d,A,x,_.useMaxWidth),d.attr("viewBox",`${b.x-O} ${b.y-O} ${x} ${A}`)},"draw"),qt="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function yt(t="",r=""){const l=t.replace(Ht,"");return`${it(r)}${it(l)}${wt(t,qt)}`}c(yt,"generateId");function it(t=""){return t.length>0?`${t}-`:""}c(it,"strWithHyphen");var Jt={setConf:Vt,draw:jt},$t=c(t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,"getStyles"),te=$t,Ee={parser:Dt,db:Wt,renderer:Jt,styles:te};export{Ee as diagram};
