(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{642:function(e,t,n){"use strict";n.r(t);var c=n(1),r=(n(0),n(14)),a=n.n(r),i=n(29),s=n.n(i),l=n(44),j=n(55),o=n(769),d=n(766),u=n(770);t.default=function(e){var t=e.data;if(!t)return null;var n=a()(t,["item","Policy"]);return Object(c.jsxs)(j.a,{data:t,children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)(j.c,{label:"Region",valuePath:"region"}),Object(c.jsx)(j.c,{label:"ARN",valuePath:"arn"}),Object(c.jsx)(j.c,{label:"KMS Master Key ID",valuePath:"kms_master_key_id",errorPath:"server-side-encryption-disabled",renderValue:l.q}),Object(c.jsx)(j.c,{label:"Creation Time",valuePath:"CreatedTimestamp",renderValue:function(e){return Object(l.h)(parseInt(e))}})]}),Object(c.jsx)(o.b,{children:Object(c.jsx)(o.a,{title:"Access Control Policy",disabled:s()(n.Statement),children:Object(c.jsx)(u.a,{policy:n,policyPath:"Policy"})})})]})}},766:function(e,t,n){"use strict";var c=n(1);n(0),n(767);t.a=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"informations-wrapper",children:[Object(c.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,n){},768:function(e,t,n){},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l.b}));var c=n(1),r=n(13),a=n(0),i=n(8),s=n.n(i),l=n(79),j=n(80),o=n(63),d=(n(768),function(e){var t=e.title,n=e.isSelected,i=e.disabled,d=e.onClick,u=e.children,b=Object(a.useState)(""),O=Object(r.a)(b,2),h=O[0],x=O[1],f=h?Object(c.jsxs)(c.Fragment,{children:[t,o.a[h].icon]}):t;return Object(c.jsx)(j.c.Provider,{value:x,children:Object(c.jsx)(l.a,{title:f,className:s()("partial-tab-pane",h),isSelected:n,disabled:i,onClick:d,children:u})})})},770:function(e,t,n){"use strict";var c=n(1),r=n(13),a=n(0),i=n(8),s=n.n(i),l=n(776),j=n.n(l),o=n(798),d=n(789),u=n(790),b=n(772),O=n.n(b),h=n(777),x=n.n(h),f=n(159),p=n.n(f),m=n(29),v=n.n(m),g=n(80),y=n(227),P=n(44),S=(n(771),function(e){var t=e.name,n=e.policy,i=e.policyPath,l=e.defaultOpen,b=Object(a.useContext)(g.a).path_to_issues.some((function(e){return e.includes(i)}));if(v()(n))return null;var h=Object(c.jsx)("h4",{className:"policy-title",children:t}),f=function(e,t){return Object(c.jsx)(y.a,{value:(n=e,JSON.stringify(n,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:t,renderValue:function(e){return Object(P.p)(e)}});var n},m=Object(c.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var a=Object(r.a)(e,2),l=a[0],o=a[1];return Object(c.jsxs)("div",{className:s()({inline:"string"===typeof o}),children:['"'.concat(l,'":\xa0'),"Statement"===l?Object(c.jsxs)(c.Fragment,{children:["[",Object(c.jsx)("br",{}),o.map((function(e,t){return Object(c.jsx)(j.a,{trigger:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{fontSize:"inherit"}),Object(c.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(c.jsx)(x.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:f(e,"".concat(i,".Statement.").concat(t))},t)})),"]"]}):Object(c.jsx)(c.Fragment,{children:f(o)}),t<p()(n)-1&&",",Object(c.jsx)("br",{})]},t)})),"}"]});return Object(c.jsx)("div",{className:"policy",children:t?Object(c.jsxs)(o.a,{defaultExpanded:l||b,children:[Object(c.jsx)(d.a,{expandIcon:Object(c.jsx)(O.a,{}),children:h}),Object(c.jsx)(u.a,{children:m})]}):m})});S.defaultProps={defaultOpen:!1},t.a=S},771:function(e,t,n){}}]);
//# sourceMappingURL=19.487f5d0e.chunk.js.map