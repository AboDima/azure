(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[35],{599:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n(672),i=n(669),o=n(80),s=n(674),l=n(81);t.default=function(e){var t=e.data,n=e.item,u=Object(a.useMemo)((function(){return Object.values(n.network_interfaces).map((function(e){return e.id}))}),[n.network_interfaces]);return t?Object(r.jsxs)(i.a,{data:t,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.c,{label:"Name",valuePath:"name",renderValue:o.q}),Object(r.jsx)(i.c,{label:"Location",valuePath:"location",renderValue:o.q}),Object(r.jsx)(i.c,{label:"Provisioning State",valuePath:"provisioning_state",renderValue:o.q}),Object(r.jsx)(i.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(o.l)(e,o.q)}}),Object(r.jsx)(i.c,{label:"Resource group",valuePath:"resource_group_name",renderValue:o.q})]}),Object(r.jsx)(s.b,{children:Object(r.jsx)(s.a,{title:"Attached Network Interfaces",children:Object(o.l)(u,"",(function(e){return t=e,Object(r.jsx)(l.a,{service:"network",resource:"network_interfaces",id:t});var t}))})})]}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),c={path_to_issue:[],item:{}},i=a.a.createContext(c),o=a.a.createContext(""),s=a.a.createContext((function(){}))},667:function(e,t,n){"use strict";var r=n(1),a=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(a.useContext)(c.b);return Object(r.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var r=n(11),a=n(1),c=n(0),i=n(663),o=n(7),s=n.n(o),l=n(13),u=n.n(l),d=n(10),b=n.n(d),j=n(666),f=n(80),v=n(88),h=(n(670),n(659)),p=n(201),O=n.n(p),x=n(671),m=n.n(x),g=n(202),P=n(140),_=function(e){var t=e.service,n=e.finding,r=e.path,o=Object(c.useContext)(P.a),s=o.exceptions,l=o.addException,d=o.removeException,b=Object(g.b)().enqueueSnackbar,j=u()(s,[t,n],[]).includes(r);return Object(a.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(a.jsx)(h.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,r),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){l(t,n,r),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(a.jsx)(m.a,{}):Object(a.jsx)(O.a,{})})})},k=n(29),C=function(e){var t,n=e.label,o=e.separator,l=e.valuePath,d=e.errorPath,h=e.className,p=e.inline,O=e.tooltip,x=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(k.g)(),C=Object(c.useContext)(j.a),w=Object(c.useContext)(j.b),N=Object(c.useContext)(j.c),V=Object(f.a)(g||w,l),q=m(e.value||u()(C.item,V,e.value));("boolean"===typeof q&&(q=String(q)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(f.a)(g||w,e)})):t=[V];var A=t.some((function(e){return C.path_to_issues.includes(e)})),E=C.level;if(Object(c.useEffect)((function(){A&&N(E)}),[E]),void 0===q||null===q)return null;var S=Object(a.jsx)(_,{service:P.service,finding:P.finding,path:"".concat(C.path,".").concat(t[0])}),z=Object(a.jsxs)("span",{className:s()(A&&s()("issue",E)),children:[q,A&&S]});return Object(a.jsx)(v.a,{className:s()(h,"partial-value",{inline:p}),label:n,separator:o,value:O?Object(a.jsx)(i.a,Object(r.a)(Object(r.a)({title:q},x),{},{children:z})):z})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var r=n(1),a=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(a.a.Provider,{value:t,children:n})}),i=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var r=n(35),a=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),i=(0,r(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},672:function(e,t,n){"use strict";var r=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s.b}));var r=n(1),a=n(17),c=n(0),i=n(7),o=n.n(i),s=n(114),l=n(666),u=n(58),d=(n(675),function(e){var t=e.title,n=e.isSelected,i=e.disabled,d=e.onClick,b=e.children,j=Object(c.useState)(""),f=Object(a.a)(j,2),v=f[0],h=f[1],p=v?Object(r.jsxs)(r.Fragment,{children:[t,u.a[v].icon]}):t;return Object(r.jsx)(l.c.Provider,{value:h,children:Object(r.jsx)(s.a,{title:p,className:o()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:d,children:b})})})},675:function(e,t,n){}}]);
//# sourceMappingURL=35.18c24016.chunk.js.map