(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[78],{552:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(80)),c=n(669);t.default=function(e){var t=e.data;return t?Object(a.jsx)(c.a,{data:t,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Informations"}),Object(a.jsx)(c.c,{label:"Enabled",valuePath:"enabled"}),Object(a.jsx)(c.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(c.c,{label:"Role ARN",valuePath:"role_ARN"}),Object(a.jsx)(c.c,{label:"Last Status",valuePath:"last_status"}),Object(a.jsx)(c.c,{label:"Last Status Time",valuePath:"last_start_time",renderValue:r.h}),Object(a.jsx)(c.c,{label:"Last Status Change Time",valuePath:"last_status_change_time",renderValue:r.h})]})}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),o=n(7),l=n.n(o),s=n(13),u=n.n(s),b=n(10),d=n.n(b),j=n(666),v=n(80),f=n(88),h=(n(670),n(659)),p=n(201),x=n.n(p),O=n(671),m=n.n(O),P=n(202),g=n(140),_=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,s=o.addException,b=o.removeException,d=Object(P.b)().enqueueSnackbar,j=u()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{size:"small",className:"exception-btn",onClick:j?function(){b(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){s(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},C=n(29),A=function(e){var t,n=e.label,o=e.separator,s=e.valuePath,b=e.errorPath,h=e.className,p=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(C.g)(),A=Object(c.useContext)(j.a),E=Object(c.useContext)(j.b),R=Object(c.useContext)(j.c),N=Object(v.a)(P||E,s),S=m(e.value||u()(A.item,N,e.value));("boolean"===typeof S&&(S=String(S)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(v.a)(P||E,e)})):t=[N];var k=t.some((function(e){return A.path_to_issues.includes(e)})),w=A.level;if(Object(c.useEffect)((function(){k&&R(w)}),[w]),void 0===S||null===S)return null;var z=Object(r.jsx)(_,{service:g.service,finding:g.finding,path:"".concat(A.path,".").concat(t[0])}),L=Object(r.jsxs)("span",{className:l()(k&&l()("issue",w)),children:[S,k&&z]});return Object(r.jsx)(f.a,{className:l()(h,"partial-value",{inline:p}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:S},O),{},{children:L})):L})};A.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=A},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i}}]);
//# sourceMappingURL=78.7d103a3d.chunk.js.map