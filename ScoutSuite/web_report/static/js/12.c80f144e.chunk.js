(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12,93],{508:function(e,t,n){"use strict";n.r(t);var r=n(1),i=(n(0),n(640)),o=n(103);t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.c,{label:"ID",valuePath:"id"}),Object(r.jsx)(i.c,{label:"ARN",valuePath:"arn"}),Object(r.jsx)(i.c,{label:"Description",valuePath:"description",renderValue:o.n}),Object(r.jsx)(i.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:o.h}),Object(r.jsx)(i.c,{label:"Status",valuePath:"key_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Origin",valuePath:"origin",renderValue:o.n}),Object(r.jsx)(i.c,{label:"Key Manager",valuePath:"key_manager",renderValue:o.n}),Object(r.jsx)(i.c,{label:"Rotation",valuePath:"rotation_enabled",renderValue:o.c})]})}},547:function(e,t,n){"use strict";n.r(t);var r=n(1),i=(n(0),n(15)),o=n.n(i),a=n(64),s=n.n(a),c=(n(103),n(640)),l=n(645),u=n(642),p=n(508),h=n(648);t.default=function(e){var t=e.data;if(!t)return null;var n=o()(t,["item","aliases"]),i=o()(t,["item","policy"]);return Object(r.jsxs)(c.a,{data:t,children:[Object(r.jsx)(u.a,{children:Object(r.jsx)(p.default,{})}),Object(r.jsxs)(l.b,{children:[Object(r.jsx)(l.a,{title:"Aliases",disabled:s()(n),children:Object(r.jsx)("ul",{children:n.map((function(e,t){return Object(r.jsx)("li",{children:e.name},t)}))})}),Object(r.jsx)(l.a,{title:"Key Policy",disabled:s()(i),children:Object(r.jsx)(h.a,{policy:i})})]})]})}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n(0),i=n.n(r),o={path_to_issue:[],item:{}},a=i.a.createContext(o),s=i.a.createContext(""),c=i.a.createContext((function(){}))},638:function(e,t,n){"use strict";var r=n(19),i=n(1),o=n(0),a=n(633),s=n(7),c=n.n(s),l=n(15),u=n.n(l),p=n(10),h=n.n(p),f=n(637),d=n(103),g=n(83),b=(n(641),n(624)),O=n(191),m=n.n(O),j=n(192),v=n(130),y=function(e){var t=e.service,n=e.finding,r=e.path,s=Object(o.useContext)(v.a),c=s.exceptions,l=s.addException,p=Object(j.b)().enqueueSnackbar,h=u()(c,[t,n],[]).includes(r);return Object(i.jsx)(a.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(i.jsx)(b.a,{disabled:h,size:"small",startIcon:Object(i.jsx)(m.a,{}),className:"exception-btn",onClick:function(){l(t,n,r),p("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},x=n(29),C=function(e){var t,n=e.label,s=e.separator,l=e.valuePath,p=e.errorPath,b=e.className,O=e.inline,m=e.tooltip,j=e.tooltipProps,v=e.renderValue,C=e.basePathOverwrite,T=Object(x.g)(),P=Object(o.useContext)(f.a),S=Object(o.useContext)(f.b),N=Object(o.useContext)(f.c),_=Object(d.a)(C||S,l),w=v(e.value||u()(P.item,_,e.value));("boolean"===typeof w&&(w=String(w)),p)?t=(h()(p)?p:[p]).map((function(e){return Object(d.a)(C||S,e)})):t=[_];var E=t.some((function(e){return P.path_to_issues.includes(e)})),k=P.level;if(Object(o.useEffect)((function(){E&&N(k)}),[k]),void 0===w||null===w)return null;var R=Object(i.jsx)(y,{service:T.service,finding:T.finding,path:"".concat(P.path,".").concat(t[0])}),I=Object(i.jsxs)("span",{className:c()(E&&c()("issue",k)),children:[w,E&&R]});return Object(i.jsx)(g.a,{className:c()(b,"partial-value",{inline:O}),label:n,separator:s,value:m?Object(i.jsx)(a.a,Object(r.a)(Object(r.a)({title:w},j),{},{children:I})):I})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},639:function(e,t,n){"use strict";var r=n(1),i=n(0),o=n(637),a=n(103);t.a=function(e){var t=e.path,n=e.children,s=Object(i.useContext)(o.b);return Object(r.jsx)(o.b.Provider,{value:Object(a.a)(s,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a.a})),n.d(t,"c",(function(){return s.a}));var r=n(1),i=(n(0),n(637)),o=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(i.a.Provider,{value:t,children:n})}),a=n(639),s=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var r=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return c.b}));var r=n(1),i=n(18),o=n(0),a=n(7),s=n.n(a),c=n(104),l=n(637),u=n(56),p=(n(644),function(e){var t=e.title,n=e.isSelected,a=e.disabled,p=e.onClick,h=e.children,f=Object(o.useState)(""),d=Object(i.a)(f,2),g=d[0],b=d[1],O=g?Object(r.jsxs)(r.Fragment,{children:[t,u.a[g].icon]}):t;return Object(r.jsx)(l.c.Provider,{value:b,children:Object(r.jsx)(c.a,{title:O,className:s()("partial-tab-pane",g),isSelected:n,disabled:a,onClick:p,children:h})})})},648:function(e,t,n){"use strict";var r=n(1),i=n(18),o=(n(0),n(649)),a=n.n(o),s=n(651),c=n.n(s),l=n(652),u=n.n(l),p=n(193),h=n.n(p),f=n(64),d=n.n(f),g=n(638),b=n(103),O=(n(650),function(e){var t=e.name,n=e.policy,o=e.policyPath,s=e.defaultOpen;if(d()(n))return null;var l=function(e){return JSON.stringify(e,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")},p=Object(r.jsx)("h4",{className:"policy-title",children:t}),f=Object(r.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var s=Object(i.a)(e,2),p=s[0],f=s[1];return Object(r.jsxs)("div",{children:['"'.concat(p,'":\xa0'),"Statement"===p?Object(r.jsxs)(r.Fragment,{children:["[",Object(r.jsx)("br",{}),f.map((function(e,t){return Object(r.jsx)(a.a,{trigger:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{fontSize:"inherit"}),Object(r.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(r.jsx)(u.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:Object(r.jsx)(g.a,{value:l(e),errorPath:"".concat(o,".PolicyDocument.Statement.").concat(t),renderValue:function(e){return Object(b.m)(e)}})},t)})),"]"]}):Object(r.jsx)(r.Fragment,{children:Object(b.m)(l(f))}),t!==h()(n)-1&&",",Object(r.jsx)("br",{})]},t)})),"}"]});return Object(r.jsx)("div",{className:"policy",children:t?Object(r.jsx)(a.a,{trigger:Object(r.jsxs)(r.Fragment,{children:[p,Object(r.jsx)(c.a,{fontSize:"inherit"})]}),triggerWhenOpen:Object(r.jsxs)(r.Fragment,{children:[p,Object(r.jsx)(u.a,{fontSize:"inherit"})]}),transitionTime:1,open:s,children:f}):f})});O.defaultProps={defaultOpen:!1},t.a=O},649:function(e,t,n){var r;e.exports=(r=n(0),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(3);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),a=n.n(o),s=function(e){return 0!==e};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o=h(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),b(d(t=o.call(this,e)),"continueOpenCollapsible",(function(){var e=d(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:s(e.scrollHeight),shouldOpenOnNextCycle:!1})})),b(d(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),b(d(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),b(d(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=a,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:s(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:s(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?i.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?i.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.contentContainerTagName,s=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,u="".concat(this.props.classParentString,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),p="".concat(this.props.classParentString," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),h="".concat(this.props.classParentString,"__contentOuter ").concat(this.props.contentOuterClassName),f="".concat(this.props.classParentString,"__contentInner ").concat(this.props.contentInnerClassName);return i.a.createElement(a,l({className:p.trim()},this.props.containerElementProps),i.a.createElement(s,l({className:u.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),i.a.createElement("div",{className:h.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},i.a.createElement("div",{className:f.trim()},c)))}}])&&u(t.prototype,n),r&&u(t,r),a}(r.Component);O.propTypes={transitionTime:a.a.number,transitionCloseTime:a.a.number,triggerTagName:a.a.string,easing:a.a.string,open:a.a.bool,containerElementProps:a.a.object,triggerElementProps:a.a.object,classParentString:a.a.string,openedClassName:a.a.string,triggerStyle:a.a.object,triggerClassName:a.a.string,triggerOpenedClassName:a.a.string,contentOuterClassName:a.a.string,contentInnerClassName:a.a.string,accordionPosition:a.a.oneOfType([a.a.string,a.a.number]),handleTriggerClick:a.a.func,onOpen:a.a.func,onClose:a.a.func,onOpening:a.a.func,onClosing:a.a.func,onTriggerOpening:a.a.func,onTriggerClosing:a.a.func,trigger:a.a.oneOfType([a.a.string,a.a.element]),triggerWhenOpen:a.a.oneOfType([a.a.string,a.a.element]),triggerDisabled:a.a.bool,lazyRender:a.a.bool,overflowWhenOpen:a.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:a.a.bool,triggerSibling:a.a.oneOfType([a.a.element,a.a.func]),tabIndex:a.a.number,contentContainerTagName:a.a.string},O.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=O}]))},650:function(e,t,n){},651:function(e,t,n){"use strict";var r=n(35),i=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(38)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=a},652:function(e,t,n){"use strict";var r=n(35),i=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(38)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=a}}]);
//# sourceMappingURL=12.c80f144e.chunk.js.map