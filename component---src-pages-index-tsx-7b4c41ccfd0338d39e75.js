webpackJsonp([0xc956abe28b23],{99:function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=b.hasOwnProperty(e)?b[e]:null;M.hasOwnProperty(e)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function s(t,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,s=r.__reactAutoBindPairs;n.hasOwnProperty(c)&&_.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var i=n[a],l=r.hasOwnProperty(a);if(o(l,a),_.hasOwnProperty(a))_[a](t,i);else{var p=b.hasOwnProperty(a),y="function"==typeof i,d=y&&!p&&!l&&n.autobind!==!1;if(d)s.push(a,i),r[a]=i;else if(l){var E=b[a];u(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,a),"DEFINE_MANY_MERGED"===E?r[a]=f(r[a],i):"DEFINE_MANY"===E&&(r[a]=m(r[a],i))}else r[a]=i}}}else;}function l(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in _;u(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var s=n in t;if(s){var a=v.hasOwnProperty(n)?v[n]:null;return u("DEFINE_MANY_MERGED"===a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],r))}t[n]=r}}}function p(t,e){u(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(u(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function y(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=y(t,o)}}function E(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=r,this.refs=i,this.updater=o||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;u("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=s});e.prototype=new A,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],h.forEach(s.bind(null,e)),s(e,g),s(e,t),s(e,N),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),u(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)e.prototype[o]||(e.prototype[o]=null);return e}var h=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)s(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=a({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=a({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=a({},t.propTypes,e)},statics:function(t,e){l(t,e)},autobind:function(){}},g={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},A=function(){};return a(A.prototype,t.prototype,M),E}var s,a=n(5),i=n(35),u=n(1),c="mixins";s={},t.exports=o},5:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,i,u=n(t),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)s.call(r,l)&&(u[l]=r[l]);if(o){i=o(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(u[i[p]]=r[i[p]])}}return u}},52:function(t,e){"use strict";function n(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case s:switch(t=t.type){case f:case m:case i:case c:case u:case d:return t;default:switch(t=t&&t.$$typeof){case p:case y:case b:case h:case l:return t;default:return e}}case a:return e}}}function r(t){return n(t)===m}var o="function"==typeof Symbol&&Symbol.for,s=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,m=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v=o?Symbol.for("react.block"):60121,_=o?Symbol.for("react.fundamental"):60117,g=o?Symbol.for("react.responder"):60118,N=o?Symbol.for("react.scope"):60119;e.AsyncMode=f,e.ConcurrentMode=m,e.ContextConsumer=p,e.ContextProvider=l,e.Element=s,e.ForwardRef=y,e.Fragment=i,e.Lazy=b,e.Memo=h,e.Portal=a,e.Profiler=c,e.StrictMode=u,e.Suspense=d,e.isAsyncMode=function(t){return r(t)||n(t)===f},e.isConcurrentMode=r,e.isContextConsumer=function(t){return n(t)===p},e.isContextProvider=function(t){return n(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===s},e.isForwardRef=function(t){return n(t)===y},e.isFragment=function(t){return n(t)===i},e.isLazy=function(t){return n(t)===b},e.isMemo=function(t){return n(t)===h},e.isPortal=function(t){return n(t)===a},e.isProfiler=function(t){return n(t)===c},e.isStrictMode=function(t){return n(t)===u},e.isSuspense=function(t){return n(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===m||t===c||t===u||t===d||t===E||"object"==typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===h||t.$$typeof===l||t.$$typeof===p||t.$$typeof===y||t.$$typeof===_||t.$$typeof===g||t.$$typeof===N||t.$$typeof===v)},e.typeOf=n},120:function(t,e,n){"use strict";t.exports=n(52)},194:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Amount of bushess: ",r.createElement("strong",null," ",t.cactooAmount)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"bushesAmountSelector",name:"bushesAmountSelector",min:"0",max:"2000000",step:"1",value:t.cactooAmount,onInput:function(e){return t.onInput(e)},onChange:function(e){return t.onInput(e)}}))};e.default=o},195:function(t, e, n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Temperature: ",r.createElement("strong",null," ",t.temperature," °C")),r.createElement("input",{style:{width:"max-content"},type:"range",id:"temperatureSelector",name:"temperatureSelector",min:"-30",max:"70",step:"1",onInput:function(e){return t.onInput(e)},onChange:function(e){return t.onInput(e)}}))};e.default=o},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Territory area: ",r.createElement("strong",null," ",t.territory," m²")),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"territorySelector",name:"territorySelector",min:"0",max:"2000000",step:"1000",value:t.territory,onInput:function(e){return t.onInput(e)},onChange:function(e){return t.onInput(e)}}))};e.default=o},197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Amount of trees: ",r.createElement("strong",null," ",t.treeAmount)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"treeAmountSelector",name:"treeAmountSelector",min:"0",max:"2000000",step:"1",value:t.treeAmount,onInput:function(e){return t.onInput(e)},onChange:function(e){return t.onInput(e)}}))};e.default=o},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(202);e.saturationVaporDensity=function(t){if(r.default.has(t))return r.default.get(t);var e=Math.floor(t),n=Math.ceil(t),o=t-e;try{var s=r.default.get(e),a=r.default.get(n),i=a-s,u=s+i*o;return u}catch(t){throw t}}},201:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n(198),u=n(195),c=n(196),l=n(197),p=n(194),f=function(t){function e(n,s){r(this,e);var a=o(this,t.call(this,n,s));return a.countRelativeHumidity=function(){return a.state.absoluteHumidity/i.saturationVaporDensity(a.state.averageTemperature)},a.countVolatility=function(){return.0018*(Math.pow(25+a.state.averageTemperature,2)*(100-a.state.relativeHumidity))},a.countAbsoluteHumidity=function(){return(365.25*a.state.treeAmount*1e6+365.25*a.state.cactooAmount*1e6)/(1e8*a.state.territory)},a.state={territory:35e3,averageTemperature:25,treeAmount:3e3,cactooAmount:5e3,treeCutting:0,treePlanting:0,precipation:150,additionalWatering:0,relativeHumidity:0,volatility:0,absoluteHumidity:0},a}return s(e,t),e.prototype.render=function(){var t=this;return a.createElement("div",null,a.createElement("h1",null,"Input Data"),a.createElement("div",{className:"inputs"},a.createElement(c.default,{territory:this.state.territory,onInput:function(e){return t.setState({territory:e.target.value})}}),a.createElement(l.default,{treeAmount:this.state.treeAmount,onInput:function(e){return t.setState({treeAmount:e.target.value})}}),a.createElement(p.default,{cactooAmount:this.state.cactooAmount,onInput:function(e){return t.setState({cactooAmount:e.target.value})}}),a.createElement(u.default,{temperature:this.state.averageTemperature,onInput:function(e){return t.setState({averageTemperature:e.target.value})}})))},e}(a.Component);e.default=f},202:function(t, e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new Map;n.set(-30,.33),n.set(-29,.37),n.set(-28,.41),n.set(-27,.46),n.set(-26,.51),n.set(-25,.55),n.set(-24,.6),n.set(-23,.66),n.set(-22,.73),n.set(-21,.8),n.set(-20,.88),n.set(-19,.96),n.set(-18,1.05),n.set(-17,1.15),n.set(-16,1.27),n.set(-15,1.38),n.set(-14,1.51),n.set(-13,1.6),n.set(-12,1.8),n.set(-11,1.96),n.set(-10,2.14),n.set(-9,2.33),n.set(-8,2.54),n.set(-7,2.76),n.set(-6,2.99),n.set(-5,3.24),n.set(-4,3.51),n.set(-3,3.81),n.set(-2,4.31),n.set(-1,4.47),n.set(0,4.84),n.set(1,5.22),n.set(2,5.6),n.set(3,5.98),n.set(4,6.4),n.set(5,6.84),n.set(6,7.3),n.set(7,7.8),n.set(8,8.3),n.set(9,8.8),n.set(10,9.4),n.set(11,10.1),n.set(12,10.7),n.set(13,11.4),n.set(14,12.1),n.set(15,12.8),n.set(16,13.6),n.set(17,14.5),n.set(18,15.4),n.set(19,16.3),n.set(20,17.3),n.set(21,18.3),n.set(22,19.4),n.set(23,20.6),n.set(24,21.8),n.set(25,23),n.set(26,24.4),n.set(27,25.8),n.set(28,27.2),n.set(29,28.7),n.set(30,30.3),n.set(31,32.1),n.set(32,33.9),n.set(33,35.7),n.set(34,37.6),n.set(35,39.6),n.set(36,41.8),n.set(37,44),n.set(38,46.3),n.set(39,48.7),n.set(40,65.4),n.set(41,68.6),n.set(42,71.8),n.set(43,75.3),n.set(44,78.82),n.set(45,83),n.set(46,87.26),n.set(47,91.52),n.set(48,95.78),n.set(49,100.04),n.set(50,104.3),n.set(51,109.44),n.set(52,114.58),n.set(53,119.72),n.set(54,124.86),n.set(55,130),n.set(56,136.2),n.set(57,142.4),n.set(58,148.6),n.set(59,154.8),n.set(60,161),n.set(61,168.4),n.set(62,175.8),n.set(63,183.2),n.set(64,190.6),n.set(65,198),n.set(66,206.8),n.set(67,215.6),n.set(68,224.4),n.set(69,233.2),n.set(70,242),e.default=n}});
//# sourceMappingURL=component---src-pages-index-tsx-7b4c41ccfd0338d39e75.js.map
