(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9,98],{582:function(e,t,n){"use strict";n.r(t);var c=n(1),a=(n(0),n(14)),r=n.n(a),i=n(29),s=n.n(i),l=n(44),j=n(55),u=n(47),o=(n(786),n(228));t.default=function(e){var t=e.mfaDevices,n=e.accessKeys,a=e.loginProfile;return Object(c.jsxs)("div",{className:"authentication-methods",children:[Object(c.jsx)(j.c,{label:"Password enabled",valuePath:"LoginProfile",renderValue:function(e){return Object(l.e)(!s()(e))}}),Object(c.jsx)(j.c,{label:"Multi-Factor enabled",valuePath:"MFADevices",errorPath:"mfa_enabled",renderValue:function(e){return Object(l.e)(!s()(e))}}),!s()(t)&&Object(c.jsx)("ul",{children:t.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(u.a,{label:"Serial Number",value:e.SerialNumber})},t)}))}),Object(c.jsx)(j.c,{label:"Access Keys",valuePath:"AccessKeys",errorPath:"multiple_api_keys",renderValue:function(e){return r()(e,"length",0)}}),!s()(n)&&Object(c.jsx)("ul",{children:n.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(j.c,{errorPath:"AccessKeys.".concat(t),renderValue:function(){return Object(c.jsxs)("ul",{className:"key-infos",children:[e.AccessKeyId,Object(c.jsx)("li",{children:e.Status}),Object(c.jsx)("li",{children:"Created on ".concat(Object(l.h)(e.CreateDate))})]})}})},t)}))}),Object(c.jsxs)("div",{className:"warnings",children:[!s()(a)&&n.length>0&&Object(c.jsx)(j.c,{errorPath:"password_and_keys",renderValue:function(){return Object(c.jsx)(o.a,{message:"Review the need for password-based and key-based authentication"})}}),n.length>1&&Object(c.jsx)(j.c,{errorPath:"multiple_active_api_keys",renderValue:function(){return Object(c.jsx)(o.a,{message:"Review the need for multiple active access keys"})}})]})]})}},626:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(13),r=(n(0),n(14)),i=n.n(r),s=n(29),l=n.n(s),j=n(44),u=n(55),o=n(769),d=n(766),b=n(582),O=n(770),h=n(64);t.default=function(e){var t=e.data;if(!t)return null;var n=i()(t,["item","groups"],{}),r=i()(t,["item","inline_policies"],{}),s=i()(t,["item","policies"],{}),f=i()(t,["item","Tags"],[]);return Object(c.jsxs)(u.a,{data:t,children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)(u.c,{label:"ARN",valuePath:"arn",renderValue:j.q}),Object(c.jsx)(u.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:j.h})]}),Object(c.jsxs)(o.b,{children:[Object(c.jsx)(o.a,{title:"Authentication Methods",children:Object(c.jsx)(b.default,{mfaDevices:i()(t,["item","MFADevices"]),accessKeys:i()(t,["item","AccessKeys"]),loginProfile:i()(t,["item","LoginProfile"])})}),Object(c.jsx)(o.a,{title:"Groups",disabled:l()(n),children:Object(j.l)(Object.values(n),"",(function(e){return Object(c.jsx)(h.a,{service:"iam",resource:"groups",id:e})}))}),Object(c.jsx)(o.a,{title:"Inline Policies",disabled:l()(r),children:Object(c.jsx)(c.Fragment,{children:Object.entries(r).map((function(e,t){var n=Object(a.a)(e,2),r=n[0],i=n[1];return Object(c.jsx)(O.a,{name:i.name,policy:i.PolicyDocument,policyPath:"inline_policies.".concat(r,".PolicyDocument")},t)}))})}),Object(c.jsx)(o.a,{title:"Managed Policies",disabled:l()(s),children:Object(j.l)(Object.values(s),"",j.m)}),Object(c.jsx)(o.a,{title:"Tags",disabled:l()(f),children:Object(j.j)(f)})]})]})}},766:function(e,t,n){"use strict";var c=n(1);n(0),n(767);t.a=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"informations-wrapper",children:[Object(c.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,n){},768:function(e,t,n){},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l.b}));var c=n(1),a=n(13),r=n(0),i=n(8),s=n.n(i),l=n(79),j=n(80),u=n(63),o=(n(768),function(e){var t=e.title,n=e.isSelected,i=e.disabled,o=e.onClick,d=e.children,b=Object(r.useState)(""),O=Object(a.a)(b,2),h=O[0],f=O[1],x=h?Object(c.jsxs)(c.Fragment,{children:[t,u.a[h].icon]}):t;return Object(c.jsx)(j.c.Provider,{value:f,children:Object(c.jsx)(l.a,{title:x,className:s()("partial-tab-pane",h),isSelected:n,disabled:i,onClick:o,children:d})})})},770:function(e,t,n){"use strict";var c=n(1),a=n(13),r=n(0),i=n(8),s=n.n(i),l=n(776),j=n.n(l),u=n(798),o=n(789),d=n(790),b=n(772),O=n.n(b),h=n(777),f=n.n(h),x=n(159),m=n.n(x),p=n(29),v=n.n(p),g=n(80),P=n(227),y=n(44),N=(n(771),function(e){var t=e.name,n=e.policy,i=e.policyPath,l=e.defaultOpen,b=Object(r.useContext)(g.a).path_to_issues.some((function(e){return e.includes(i)}));if(v()(n))return null;var h=Object(c.jsx)("h4",{className:"policy-title",children:t}),x=function(e,t){return Object(c.jsx)(P.a,{value:(n=e,JSON.stringify(n,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:t,renderValue:function(e){return Object(y.p)(e)}});var n},p=Object(c.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var r=Object(a.a)(e,2),l=r[0],u=r[1];return Object(c.jsxs)("div",{className:s()({inline:"string"===typeof u}),children:['"'.concat(l,'":\xa0'),"Statement"===l?Object(c.jsxs)(c.Fragment,{children:["[",Object(c.jsx)("br",{}),u.map((function(e,t){return Object(c.jsx)(j.a,{trigger:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{fontSize:"inherit"}),Object(c.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(c.jsx)(f.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:x(e,"".concat(i,".Statement.").concat(t))},t)})),"]"]}):Object(c.jsx)(c.Fragment,{children:x(u)}),t<m()(n)-1&&",",Object(c.jsx)("br",{})]},t)})),"}"]});return Object(c.jsx)("div",{className:"policy",children:t?Object(c.jsxs)(u.a,{defaultExpanded:l||b,children:[Object(c.jsx)(o.a,{expandIcon:Object(c.jsx)(O.a,{}),children:h}),Object(c.jsx)(d.a,{children:p})]}):p})});N.defaultProps={defaultOpen:!1},t.a=N},771:function(e,t,n){},786:function(e,t,n){}}]);
//# sourceMappingURL=9.47a24ab7.chunk.js.map