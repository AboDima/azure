(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[49],{604:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(672)),i=n(669);n(80);t.default=function(e){var t=e.data;return t?Object(a.jsx)(i.a,{data:t,children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(i.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(i.c,{label:"Auto Provisioning",valuePath:"auto_provision"})]})}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),i={path_to_issue:[],item:{}},c=r.a.createContext(i),o=r.a.createContext(""),s=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n(666),c=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(i.b);return Object(a.jsx)(i.b.Provider,{value:Object(c.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),i=n(0),c=n(663),o=n(7),s=n.n(o),u=n(13),l=n.n(u),d=n(10),f=n.n(d),v=n(666),b=n(80),j=n(88),p=(n(670),n(659)),h=n(201),x=n.n(h),O=n(671),m=n.n(O),P=n(202),g=n(140),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(i.useContext)(g.a),s=o.exceptions,u=o.addException,d=o.removeException,f=Object(P.b)().enqueueSnackbar,v=l()(s,[t,n],[]).includes(a);return Object(r.jsx)(c.a,{title:v?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:v?function(){d(t,n,a),f("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),f("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:v?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},N=n(29),_=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(N.g)(),_=Object(i.useContext)(v.a),A=Object(i.useContext)(v.b),E=Object(i.useContext)(v.c),w=Object(b.a)(P||A,u),k=m(e.value||l()(_.item,w,e.value));("boolean"===typeof k&&(k=String(k)),d)?t=(f()(d)?d:[d]).map((function(e){return Object(b.a)(P||A,e)})):t=[w];var z=t.some((function(e){return _.path_to_issues.includes(e)})),y=_.level;if(Object(i.useEffect)((function(){z&&E(y)}),[y]),void 0===k||null===k)return null;var D=Object(r.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(_.path,".").concat(t[0])}),R=Object(r.jsxs)("span",{className:s()(z&&s()("issue",y)),children:[k,z&&D]});return Object(r.jsx)(j.a,{className:s()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(c.a,Object(a.a)(Object(a.a)({title:k},O),{},{children:R})):R})};_.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=_},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(666)),i=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),c=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),c=(0,a(n(38)).default)(i.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},672:function(e,t,n){"use strict";var a=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){}}]);
//# sourceMappingURL=49.6c8928fc.chunk.js.map