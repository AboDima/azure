(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[63],{624:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(0),n(669)),c=n(80),i=n(114),o=n(672);t.default=function(e){var t=e.data;return t?Object(r.jsxs)(a.a,{data:t,children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)(a.c,{label:"User",valuePath:"name"}),Object(r.jsx)(a.c,{label:"Project ID",errorPath:"project_id",valuePath:"project"})]}),Object(r.jsx)(i.b,{children:Object(r.jsx)(i.a,{title:"Bindings",children:Object(r.jsx)(a.c,{valuePath:"roles",renderValue:c.l})})})]}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),c={path_to_issue:[],item:{}},i=a.a.createContext(c),o=a.a.createContext(""),s=a.a.createContext((function(){}))},667:function(e,t,n){"use strict";var r=n(1),a=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(a.useContext)(c.b);return Object(r.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var r=n(11),a=n(1),c=n(0),i=n(663),o=n(7),s=n.n(o),l=n(13),u=n.n(l),d=n(10),j=n.n(d),b=n(666),f=n(80),v=n(88),p=(n(670),n(659)),h=n(201),x=n.n(h),O=n(671),m=n.n(O),P=n(202),g=n(140),C=function(e){var t=e.service,n=e.finding,r=e.path,o=Object(c.useContext)(g.a),s=o.exceptions,l=o.addException,d=o.removeException,j=Object(P.b)().enqueueSnackbar,b=u()(s,[t,n],[]).includes(r);return Object(a.jsx)(i.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(a.jsx)(p.a,{size:"small",className:"exception-btn",onClick:b?function(){d(t,n,r),j("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){l(t,n,r),j("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(a.jsx)(m.a,{}):Object(a.jsx)(x.a,{})})})},_=n(29),E=function(e){var t,n=e.label,o=e.separator,l=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(_.g)(),E=Object(c.useContext)(b.a),N=Object(c.useContext)(b.b),w=Object(c.useContext)(b.c),A=Object(f.a)(P||N,l),k=m(e.value||u()(E.item,A,e.value));("boolean"===typeof k&&(k=String(k)),d)?t=(j()(d)?d:[d]).map((function(e){return Object(f.a)(P||N,e)})):t=[A];var z=t.some((function(e){return E.path_to_issues.includes(e)})),D=E.level;if(Object(c.useEffect)((function(){z&&w(D)}),[D]),void 0===k||null===k)return null;var y=Object(a.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(E.path,".").concat(t[0])}),I=Object(a.jsxs)("span",{className:s()(z&&s()("issue",D)),children:[k,z&&y]});return Object(a.jsx)(v.a,{className:s()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(a.jsx)(i.a,Object(r.a)(Object(r.a)({title:k},O),{},{children:I})):I})};E.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=E},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var r=n(1),a=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(a.a.Provider,{value:t,children:n})}),i=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var r=n(35),a=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),i=(0,r(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},672:function(e,t,n){"use strict";var r=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){}}]);
//# sourceMappingURL=63.8392bc27.chunk.js.map