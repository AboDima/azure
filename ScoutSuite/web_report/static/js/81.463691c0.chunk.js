(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[81],{557:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(669));n(80);t.default=function(e){return e.data?Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Informations"}),Object(a.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(r.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(r.c,{label:"Architecture",valuePath:"Architecture"}),Object(a.jsx)(r.c,{label:"Public",valuePath:"Public"})]}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),o=n(7),l=n.n(o),u=n(13),s=n.n(u),b=n(10),d=n.n(b),v=n(666),f=n(80),j=n(88),p=(n(670),n(659)),h=n(201),x=n.n(h),O=n(671),m=n.n(O),P=n(202),g=n(140),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,u=o.addException,b=o.removeException,d=Object(P.b)().enqueueSnackbar,v=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:v?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:v?function(){b(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:v?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},A=n(29),E=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,b=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(A.g)(),E=Object(c.useContext)(v.a),_=Object(c.useContext)(v.b),N=Object(c.useContext)(v.c),k=Object(f.a)(P||_,u),w=m(e.value||s()(E.item,k,e.value));("boolean"===typeof w&&(w=String(w)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(f.a)(P||_,e)})):t=[k];var z=t.some((function(e){return E.path_to_issues.includes(e)})),D=E.level;if(Object(c.useEffect)((function(){z&&N(D)}),[D]),void 0===w||null===w)return null;var R=Object(r.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(E.path,".").concat(t[0])}),y=Object(r.jsxs)("span",{className:l()(z&&l()("issue",D)),children:[w,z&&R]});return Object(r.jsx)(j.a,{className:l()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},O),{},{children:y})):y})};E.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=E},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i}}]);
//# sourceMappingURL=81.463691c0.chunk.js.map