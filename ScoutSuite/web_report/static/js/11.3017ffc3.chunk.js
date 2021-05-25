(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11,115,116],{573:function(e,t,c){"use strict";c.r(t);var a=c(1),n=(c(0),c(55)),i=c(44);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(n.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(n.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(n.c,{label:"Availability Zone",valuePath:"availability_zone"}),Object(a.jsx)(n.c,{label:"VPC",valuePath:"vpc"}),Object(a.jsx)(n.c,{label:"Reservation ID",valuePath:"reservation_id"}),Object(a.jsx)(n.c,{label:"IAM role",valuePath:"iam_role",renderValue:i.q}),Object(a.jsx)(n.c,{label:"Monitoring",valuePath:"monitoring_enabled",renderValue:i.c}),Object(a.jsx)(n.c,{label:"Access Key Name",valuePath:"KeyName"}),Object(a.jsx)(n.c,{label:"State",valuePath:"State.Name"}),Object(a.jsx)(n.c,{label:"Instance Type",valuePath:"InstanceType"}),Object(a.jsx)(n.c,{label:"Up Since",valuePath:"LaunchTime",renderValue:i.h})]})}},574:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(13),i=(c(0),c(29)),s=c.n(i),r=c(44),l=c(47);t.default=function(e){var t=e.interfaces;return Object.entries(t).map((function(e,t){var c=Object(n.a)(e,2),i=c[0],j=c[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{children:i}),Object(a.jsxs)("ul",{children:[j.Description&&Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:"Description",value:j.Description})}),j.Association&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:"Public IP",value:j.Association.PublicIp})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:"Public DNS",value:j.Association.PublicDnsName})})]}),j.Attachment&&Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:"Attached to Instance",value:j.Attachment.InstanceId})}),!s()(j.Ipv6Addresses)&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:"IPv6 Addresses:"}),Object(a.jsx)("ul",{children:j.Ipv6Addresses.map((function(e,t){return Object(a.jsx)("li",{children:e.Ipv6Address},t)}))})]}),j.PrivateIpAddresses.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:e.Primary?"Primary Private IP":"Private IP",value:e.PrivateIpAddress})},t)})),!s()(j.Groups)&&Object(a.jsx)("li",{children:Object(a.jsx)(l.a,{label:"Security Groups",value:Object(r.l)(j.Groups,"",r.o)})})]})]},t)}))}},612:function(e,t,c){"use strict";c.r(t);var a=c(13),n=c(1),i=(c(0),c(14)),s=c.n(i),r=c(29),l=c.n(r),j=c(20),b=c(780),d=c(21),u=c(55),o=(c(44),c(769)),O=c(766),h=c(573),x=c(574);c(792);t.default=function(e){var t=e.data,c=s()(t,["item","path"],""),i=Object(b.a)(c),r=Object(b.b)(c),v=Object(j.a)(Object(d.i)("services.ec2.regions.".concat(i,".vpcs.").concat(r,".name"))),p=v.data,m=v.loading;if(!t||m)return null;var f=s()(t,["item","network_interfaces"]),P=s()(t,["item","metadata_options"]),I=s()(t,["item","user_data"])||"",A=s()(t,["item","user_data_secrets"]);return l()(p)||(t.item.vpc="".concat(p," (").concat(r,")"),t.item.region=i),Object(n.jsxs)(u.a,{data:t,children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(h.default,{})}),Object(n.jsx)("div",{className:"ec2-instances",children:Object(n.jsxs)(o.b,{children:[Object(n.jsx)(o.a,{title:"Network Interfaces",disabled:l()(f),children:Object(n.jsx)(x.default,{interfaces:f})}),Object(n.jsx)(o.a,{title:"Metadata Options",disabled:l()(P),children:Object(n.jsxs)("div",{children:[Object(n.jsx)(u.c,{label:"Endpoint",value:P.HttpEndpoint,errorPath:"metadata_options"}),Object(n.jsx)(u.c,{label:"HTTP Tokens",value:P.HttpTokens,errorPath:"metadata_options"})]})}),Object(n.jsx)(o.a,{title:"User Data",disabled:l()(I),children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{children:"Data"}),I.split("\n").map((function(e,t){return Object(n.jsx)("code",{children:e},t)})),!l()(A)&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{className:"secrets-header",children:Object(n.jsx)(u.c,{value:"Potential Secrets",errorPath:"potential_secrets"})}),Object(n.jsx)("ul",{children:Object.entries(A).map((function(e,t){var c=Object(a.a)(e,2),i=c[0],s=c[1];return Object(n.jsxs)("li",{children:[i,Object(n.jsx)("ul",{children:s.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("code",{children:e})},t)}))})]},t)}))})]})]})})]})})]})}},766:function(e,t,c){"use strict";var a=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return d})),c.d(t,"b",(function(){return l.b}));var a=c(1),n=c(13),i=c(0),s=c(8),r=c.n(s),l=c(79),j=c(80),b=c(63),d=(c(768),function(e){var t=e.title,c=e.isSelected,s=e.disabled,d=e.onClick,u=e.children,o=Object(i.useState)(""),O=Object(n.a)(o,2),h=O[0],x=O[1],v=h?Object(a.jsxs)(a.Fragment,{children:[t,b.a[h].icon]}):t;return Object(a.jsx)(j.c.Provider,{value:x,children:Object(a.jsx)(l.a,{title:v,className:r()("partial-tab-pane",h),isSelected:c,disabled:s,onClick:d,children:u})})})},780:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return s}));var a=c(14),n=c.n(a),i=function(e){return n()(e.match(/regions\.([^.]*)/),1)},s=function(e){return n()(e.match(/vpcs\.([^.]*)/),1)}},792:function(e,t,c){}}]);
//# sourceMappingURL=11.3017ffc3.chunk.js.map