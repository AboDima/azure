(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[21,100],{593:function(e,t,c){"use strict";c.r(t);var r=c(13),n=c(1),s=(c(0),c(55));c(787);t.default=function(e){var t=e.rules,c=e.type;return Object(n.jsxs)("table",{className:"rules-table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Rule Number"}),Object(n.jsx)("th",{children:"Port"}),Object(n.jsx)("th",{children:"Protocol"}),Object(n.jsx)("th",{children:"IP Address"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:Object.entries(t[c]).map((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(s.c,{value:a,errorPath:"".concat(c,".").concat(a)})}),Object(n.jsx)("td",{children:Object(n.jsx)(s.c,{value:i.port_range,errorPath:"".concat(c,".").concat(a)})}),Object(n.jsx)("td",{children:Object(n.jsx)(s.c,{value:i.protocol,errorPath:"".concat(c,".").concat(a)})}),Object(n.jsx)("td",{children:Object(n.jsx)(s.c,{value:i.CidrBlock,errorPath:"".concat(c,".").concat(a)})}),Object(n.jsx)("td",{children:Object(n.jsx)(s.c,{value:i.RuleAction,errorPath:"".concat(c,".").concat(a)})})]},a)}))})]})}},646:function(e,t,c){"use strict";c.r(t);var r=c(1),n=(c(0),c(14)),s=c.n(n),a=c(29),i=c.n(a),l=c(44),j=c(55),u=c(769),d=c(766),o=c(593),b=c(228),h=c(64);t.default=function(e){var t=e.data;if(!t)return null;var c=s()(t,["item","rules"]),n=s()(t,["item","Associations"]);return Object(r.jsxs)(j.a,{data:t,children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)(j.c,{label:"ID",valuePath:"id"}),Object(r.jsx)(j.c,{label:"Default",valuePath:"IsDefault"})]}),Object(r.jsxs)(u.b,{children:[Object(r.jsx)(u.a,{title:"Egress Rules",children:Object(r.jsx)(o.default,{rules:c,type:"egress"})}),Object(r.jsx)(u.a,{title:"Ingress Rules",children:Object(r.jsx)(o.default,{rules:c,type:"ingress"})}),Object(r.jsx)(u.a,{title:"Associated Subnets",children:i()(n)?Object(r.jsx)(j.c,{valuePath:"IsDefault",errorPath:"unused",renderValue:function(e){return!e&&Object(r.jsx)(b.a,{message:"This network ACL is not the VPC's default NACL and is not associated with any existing VPC."})}}):Object(l.l)(n,"SubnetId",(function(e){return Object(r.jsx)(h.a,{service:"vpc",resource:"subnets",id:e})}))})]})]})}},766:function(e,t,c){"use strict";var r=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return d})),c.d(t,"b",(function(){return l.b}));var r=c(1),n=c(13),s=c(0),a=c(8),i=c.n(a),l=c(79),j=c(80),u=c(63),d=(c(768),function(e){var t=e.title,c=e.isSelected,a=e.disabled,d=e.onClick,o=e.children,b=Object(s.useState)(""),h=Object(n.a)(b,2),O=h[0],x=h[1],f=O?Object(r.jsxs)(r.Fragment,{children:[t,u.a[O].icon]}):t;return Object(r.jsx)(j.c.Provider,{value:x,children:Object(r.jsx)(l.a,{title:f,className:i()("partial-tab-pane",O),isSelected:c,disabled:a,onClick:d,children:o})})})},787:function(e,t,c){}}]);
//# sourceMappingURL=21.6bedd079.chunk.js.map