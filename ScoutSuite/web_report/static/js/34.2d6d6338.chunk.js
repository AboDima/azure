(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[34,133],{591:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(13),a=(c(0),c(29)),r=c.n(a),s=c(47),l=c(44);t.default=function(e){var t=e.connectionInfos;return Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{label:"Account ID",value:t.OwnerId})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{label:"VPC ID",value:t.VpcId})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{label:"CIDR",value:t.CidrBlock})}),!r()(t.PeeringOptions)&&Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{label:"Peering Options",value:Object(n.jsx)("ul",{children:Object.entries(t.PeeringOptions).map((function(e,t){var c=Object(i.a)(e,2),a=c[0],r=c[1];return Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{label:a,value:Object(l.c)(r)})},t)}))})})})]})}},644:function(e,t,c){"use strict";c.r(t);var n=c(1),i=(c(0),c(14)),a=c.n(i),r=c(29),s=c.n(r),l=c(44),j=c(55),b=c(769),u=c(766),d=c(591);t.default=function(e){var t=e.data;if(!t)return null;var c=a()(t,["item","RequesterVpcInfo"]),i=a()(t,["item","AccepterVpcInfo"]),r=a()(t,["item","Tags"],[]);return Object(n.jsxs)(j.a,{data:t,children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(j.c,{label:"Status",valuePath:"Status.Message"})}),Object(n.jsxs)(b.b,{children:[Object(n.jsx)(b.a,{title:"Requester VPC",children:Object(n.jsx)(d.default,{connectionInfos:c})}),Object(n.jsx)(b.a,{title:"Accepter VPC",children:Object(n.jsx)(d.default,{connectionInfos:i})}),!s()(r)&&Object(n.jsx)(b.a,{title:"Tags",children:Object(l.j)(r)})]})]})}},766:function(e,t,c){"use strict";var n=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return u})),c.d(t,"b",(function(){return l.b}));var n=c(1),i=c(13),a=c(0),r=c(8),s=c.n(r),l=c(79),j=c(80),b=c(63),u=(c(768),function(e){var t=e.title,c=e.isSelected,r=e.disabled,u=e.onClick,d=e.children,o=Object(a.useState)(""),O=Object(i.a)(o,2),f=O[0],x=O[1],h=f?Object(n.jsxs)(n.Fragment,{children:[t,b.a[f].icon]}):t;return Object(n.jsx)(j.c.Provider,{value:x,children:Object(n.jsx)(l.a,{title:h,className:s()("partial-tab-pane",f),isSelected:c,disabled:r,onClick:u,children:d})})})}}]);
//# sourceMappingURL=34.2d6d6338.chunk.js.map