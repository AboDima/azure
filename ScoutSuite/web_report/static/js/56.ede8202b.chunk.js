(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[56],{614:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(13)),c=n.n(r),i=n(669),l=n(80),o=n(114),u=n(672);t.default=function(e){var t,n=e.data,r=c()(n,["item"],{});return n?Object(a.jsxs)(i.a,{data:n,children:[Object(a.jsxs)(u.a,{children:[Object(a.jsx)(i.c,{label:"Project ID",valuePath:"project_id"}),Object(a.jsx)(i.c,{label:"Automatic Backups",valuePath:"automatic_backup_enabled",renderValue:l.c}),Object(a.jsx)(i.c,{label:"Last Backup",valuePath:"last_backup_timestamp",renderValue:l.h}),Object(a.jsx)(i.c,{label:"Logs",valuePath:"log_enabled",renderValue:l.c}),Object(a.jsx)(i.c,{label:"SSL Required",valuePath:"ssl_required",renderValue:l.c}),Object(a.jsx)(i.c,{label:"Public IP Address",valuePath:"public_ip",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Private IP Address",valuePath:"private_ip",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Authorized Networks",valuePath:"authorized_networks",renderValue:l.q})]}),Object(a.jsx)(o.b,{children:Object(a.jsx)(o.a,{title:"Authorized Networks",children:(t=r.authorized_networks,t&&0!==t.length?Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{errorPath:"authorized_networks.".concat(t,".open_to_the_world"),value:e})},t)}))}):Object(a.jsx)("span",{children:"None"}))})})]}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),o=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),l=n(7),o=n.n(l),u=n(13),s=n.n(u),d=n(10),b=n.n(d),j=n(666),h=n(80),v=n(88),p=(n(670),n(659)),f=n(201),x=n.n(f),O=n(671),m=n.n(O),P=n(202),_=n(140),g=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(c.useContext)(_.a),o=l.exceptions,u=l.addException,d=l.removeException,b=Object(P.b)().enqueueSnackbar,j=s()(o,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},k=n(29),w=function(e){var t,n=e.label,l=e.separator,u=e.valuePath,d=e.errorPath,p=e.className,f=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,_=Object(k.g)(),w=Object(c.useContext)(j.a),A=Object(c.useContext)(j.b),z=Object(c.useContext)(j.c),C=Object(h.a)(P||A,u),N=m(e.value||s()(w.item,C,e.value));("boolean"===typeof N&&(N=String(N)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(h.a)(P||A,e)})):t=[C];var V=t.some((function(e){return w.path_to_issues.includes(e)})),q=w.level;if(Object(c.useEffect)((function(){V&&z(q)}),[q]),void 0===N||null===N)return null;var E=Object(r.jsx)(g,{service:_.service,finding:_.finding,path:"".concat(w.path,".").concat(t[0])}),I=Object(r.jsxs)("span",{className:o()(V&&o()("issue",q)),children:[N,V&&E]});return Object(r.jsx)(v.a,{className:o()(p,"partial-value",{inline:f}),label:n,separator:l,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:N},O),{},{children:I})):I})};w.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=w},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),l=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},672:function(e,t,n){"use strict";var a=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){}}]);
//# sourceMappingURL=56.ede8202b.chunk.js.map