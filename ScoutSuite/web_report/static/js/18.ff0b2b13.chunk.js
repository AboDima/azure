(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{641:function(e,t,c){"use strict";c.r(t);var n=c(13),i=c(1),r=(c(0),c(14)),a=c.n(r),l=c(29),s=c.n(l),j=(c(44),c(55)),o=c(769),b=c(766),d=c(770);t.default=function(e){var t=e.data;if(!t)return null;var c=a()(t,["item","Policy"]),r=a()(t,["item","DeliveryPolicy"]),l=a()(t,["item","EffectiveDeliveryPolicy"]),u=a()(t,["item","subscriptions"]);return Object(i.jsxs)(j.a,{data:t,children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(j.c,{label:"Region",valuePath:"region"}),Object(i.jsx)(j.c,{label:"ARN",valuePath:"arn"}),Object(i.jsx)(j.c,{label:"Display Name",valuePath:"DisplayName"})]}),Object(i.jsxs)(o.b,{children:[Object(i.jsx)(o.a,{title:"Access Control Policy",disabled:s()(c),children:Object(i.jsx)(d.a,{policy:c,policyPath:"Policy"})}),Object(i.jsx)(o.a,{title:"Delivery Policy",disabled:s()(r),children:Object(i.jsx)(d.a,{policy:r,policyPath:"DeliveryPolicy"})}),Object(i.jsx)(o.a,{title:"Effective Delivery Policy",disabled:s()(l),children:Object(i.jsx)(d.a,{policy:l,policyPath:"EffectiveDeliveryPolicy"})}),Object(i.jsx)(o.a,{title:"Subscriptions",disabled:s()(u.protocol),children:Object(i.jsx)("ul",{children:Object.entries(u.protocol).map((function(e,t){var c=Object(n.a)(e,2),r=c[0],a=c[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("li",{children:r}),Object(i.jsx)("ul",{children:a.map((function(e,t){return Object(i.jsx)("li",{children:"Endpoint: ".concat(e.Endpoint)},t)}))})]},t)}))})})]})]})}},766:function(e,t,c){"use strict";var n=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return s.b}));var n=c(1),i=c(13),r=c(0),a=c(8),l=c.n(a),s=c(79),j=c(80),o=c(63),b=(c(768),function(e){var t=e.title,c=e.isSelected,a=e.disabled,b=e.onClick,d=e.children,u=Object(r.useState)(""),O=Object(i.a)(u,2),h=O[0],p=O[1],x=h?Object(n.jsxs)(n.Fragment,{children:[t,o.a[h].icon]}):t;return Object(n.jsx)(j.c.Provider,{value:p,children:Object(n.jsx)(s.a,{title:x,className:l()("partial-tab-pane",h),isSelected:c,disabled:a,onClick:b,children:d})})})},770:function(e,t,c){"use strict";var n=c(1),i=c(13),r=c(0),a=c(8),l=c.n(a),s=c(776),j=c.n(s),o=c(798),b=c(789),d=c(790),u=c(772),O=c.n(u),h=c(777),p=c.n(h),x=c(159),f=c.n(x),v=c(29),m=c.n(v),y=c(80),P=c(227),g=c(44),N=(c(771),function(e){var t=e.name,c=e.policy,a=e.policyPath,s=e.defaultOpen,u=Object(r.useContext)(y.a).path_to_issues.some((function(e){return e.includes(a)}));if(m()(c))return null;var h=Object(n.jsx)("h4",{className:"policy-title",children:t}),x=function(e,t){return Object(n.jsx)(P.a,{value:(c=e,JSON.stringify(c,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:t,renderValue:function(e){return Object(g.p)(e)}});var c},v=Object(n.jsxs)("code",{children:["{",Object.entries(c).map((function(e,t){var r=Object(i.a)(e,2),s=r[0],o=r[1];return Object(n.jsxs)("div",{className:l()({inline:"string"===typeof o}),children:['"'.concat(s,'":\xa0'),"Statement"===s?Object(n.jsxs)(n.Fragment,{children:["[",Object(n.jsx)("br",{}),o.map((function(e,t){return Object(n.jsx)(j.a,{trigger:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O.a,{fontSize:"inherit"}),Object(n.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(n.jsx)(p.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:x(e,"".concat(a,".Statement.").concat(t))},t)})),"]"]}):Object(n.jsx)(n.Fragment,{children:x(o)}),t<f()(c)-1&&",",Object(n.jsx)("br",{})]},t)})),"}"]});return Object(n.jsx)("div",{className:"policy",children:t?Object(n.jsxs)(o.a,{defaultExpanded:s||u,children:[Object(n.jsx)(b.a,{expandIcon:Object(n.jsx)(O.a,{}),children:h}),Object(n.jsx)(d.a,{children:v})]}):v})});N.defaultProps={defaultOpen:!1},t.a=N},771:function(e,t,c){}}]);
//# sourceMappingURL=18.ff0b2b13.chunk.js.map