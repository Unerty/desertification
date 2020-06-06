webpackJsonp([0xc956abe28b23],{99:function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=b.hasOwnProperty(t)?b[t]:null;N.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(c)&&v.mixins(e,n.mixins);for(var s in n)if(n.hasOwnProperty(s)&&s!==c){var u=n[s],l=r.hasOwnProperty(s);if(o(l,s),v.hasOwnProperty(s))v[s](e,u);else{var p=b.hasOwnProperty(s),d="function"==typeof u,y=d&&!p&&!l&&n.autobind!==!1;if(y)a.push(s,u),r[s]=u;else if(l){var E=b[s];i(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,s),"DEFINE_MANY_MERGED"===E?r[s]=f(r[s],u):"DEFINE_MANY"===E&&(r[s]=m(r[s],u))}else r[s]=u}}}else;}function l(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in v;i(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var s=g.hasOwnProperty(n)?g[n]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],r))}e[n]=r}}}function p(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function d(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=d(e,o)}}function E(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=r,this.refs=u,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;i("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new S,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(a.bind(null,t)),a(t,_),a(t,e),a(t,I),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)t.prototype[o]||(t.prototype[o]=null);return t}var h=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},I={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},S=function(){};return s(S.prototype,e.prototype,N),E}var a,s=n(5),u=n(35),i=n(1),c="mixins";a={},e.exports=o},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,i=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)a.call(r,l)&&(i[l]=r[l]);if(o){u=o(r);for(var p=0;p<u.length;p++)s.call(r,u[p])&&(i[u[p]]=r[u[p]])}}return i}},52:function(e,t){"use strict";function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case m:case u:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case p:case d:case b:case h:case l:return e;default:return t}}case s:return t}}}function r(e){return n(e)===m}var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,m=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,_=o?Symbol.for("react.responder"):60118,I=o?Symbol.for("react.scope"):60119;t.AsyncMode=f,t.ConcurrentMode=m,t.ContextConsumer=p,t.ContextProvider=l,t.Element=a,t.ForwardRef=d,t.Fragment=u,t.Lazy=b,t.Memo=h,t.Portal=s,t.Profiler=c,t.StrictMode=i,t.Suspense=y,t.isAsyncMode=function(e){return r(e)||n(e)===f},t.isConcurrentMode=r,t.isContextConsumer=function(e){return n(e)===p},t.isContextProvider=function(e){return n(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return n(e)===d},t.isFragment=function(e){return n(e)===u},t.isLazy=function(e){return n(e)===b},t.isMemo=function(e){return n(e)===h},t.isPortal=function(e){return n(e)===s},t.isProfiler=function(e){return n(e)===c},t.isStrictMode=function(e){return n(e)===i},t.isSuspense=function(e){return n(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===m||e===c||e===i||e===y||e===E||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===l||e.$$typeof===p||e.$$typeof===d||e.$$typeof===v||e.$$typeof===_||e.$$typeof===I||e.$$typeof===g)},t.typeOf=n},120:function(e,t,n){"use strict";e.exports=n(52)},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card water-color"},r.createElement("span",null,"AdditionalWatering: ",r.createElement("strong",null," ",e.additionalWatering," mm/year")),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"additionalWateringSelector",name:"additionalWateringSelector",min:"0",max:"2000000",step:"1000",value:e.additionalWatering,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card bush-color"},r.createElement("span",null,"Amount of bushess: ",r.createElement("strong",null," ",e.cactooAmount)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"bushesAmountSelector",name:"bushesAmountSelector",min:"0",max:"2000000",step:"1",value:e.cactooAmount,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},196:function(e, t, n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card water-color"},r.createElement("span",null,"Precipation: ",r.createElement("strong",null," ",e.precipation," mm/year")),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"precipationSelector",name:"precipationSelector",min:"0",max:"2000000",step:"1000",value:e.precipation,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Temperature: ",r.createElement("strong",null," ",e.temperature," °C")),r.createElement("input",{style:{width:"max-content"},type:"range",id:"temperatureSelector",name:"temperatureSelector",min:"-30",max:"70",step:"1",onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card"},r.createElement("span",null,"Territory area: ",r.createElement("strong",null," ",e.territory," km²")),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"territorySelector",name:"territorySelector",min:"0",max:"2000000",step:"1",value:e.territory,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card tree-color"},r.createElement("span",null,"Amount of trees: ",r.createElement("strong",null," ",e.treeAmount)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"treeAmountSelector",name:"treeAmountSelector",min:"0",max:"2000000",step:"1",value:e.treeAmount,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card tree-color"},r.createElement("span",null,"Trees cut every year: ",r.createElement("strong",null," ",e.treeCutting)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"treeCuttingSelector",name:"treeCuttingSelector",min:"0",max:"2000000",step:"1",value:e.treeCutting,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return r.createElement("div",{className:"input-card tree-color"},r.createElement("span",null,"Trees planted every year: ",r.createElement("strong",null," ",e.treePlanting)),r.createElement("input",{style:{borderStyle:"unset",borderRadius:"10px"},type:"number",id:"treePlantingSelector",name:"treePlantingSelector",min:"0",max:"2000000",step:"1",value:e.treePlanting,onInput:function(t){return e.onInput(t)},onChange:function(t){return e.onInput(t)}}))};t.default=o},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(206);t.saturationVaporDensity=function(e){if(r.default.has(e))return r.default.get(e);var t=Math.floor(e),n=Math.ceil(e),o=e-t;try{var a=r.default.get(t),s=r.default.get(n),u=s-a,i=a+u*o;return i}catch(e){throw e}}},205:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),u=n(202),i=n(197),c=n(198),l=n(199),p=n(195),f=n(200),m=n(201),d=n(196),y=n(194),E=function(e){function t(n,a){r(this,t);var s=o(this,e.call(this,n,a));return s.countRelativeHumidity=function(){return s.state.absoluteHumidity/u.saturationVaporDensity(s.state.averageTemperature)},s.countVolatility=function(){return.0018*(Math.pow(25+s.state.averageTemperature,2)*(100-s.state.relativeHumidity))},s.countAbsoluteHumidity=function(){return(365.25*s.state.treeAmount*1e6+365.25*s.state.cactooAmount*1e6)/(1e8*s.state.territory)},s.state={territory:124e3,averageTemperature:25,treeAmount:3e3,treeCutting:0,treePlanting:0,cactooAmount:5e3,precipation:150,additionalWatering:0,relativeHumidity:0,volatility:0,absoluteHumidity:0},s}return a(t,e),t.prototype.render=function(){var e=this;return s.createElement("div",null,s.createElement("h1",null,"Input Data"),s.createElement("div",{className:"inputs"},s.createElement(c.default,{territory:this.state.territory,onInput:function(t){return e.setState({territory:t.target.value})}}),s.createElement(i.default,{temperature:this.state.averageTemperature,onInput:function(t){return e.setState({averageTemperature:t.target.value})}}),s.createElement(d.default,{precipation:this.state.precipation,onInput:function(t){return e.setState({precipation:t.target.value})}}),s.createElement(y.default,{additionalWatering:this.state.additionalWatering,onInput:function(t){return e.setState({additionalWatering:t.target.value})}}),s.createElement(l.default,{treeAmount:this.state.treeAmount,onInput:function(t){return e.setState({treeAmount:t.target.value})}}),s.createElement(f.default,{treeCutting:this.state.treeCutting,onInput:function(t){return e.setState({treeCutting:t.target.value})}}),s.createElement(m.default,{treePlanting:this.state.treePlanting,onInput:function(t){return e.setState({treePlanting:t.target.value})}}),s.createElement(p.default,{cactooAmount:this.state.cactooAmount,onInput:function(t){return e.setState({cactooAmount:t.target.value})}})),s.createElement("h1",null,"Counted Results"),s.createElement("div",{className:"counted-results"}))},t}(s.Component);t.default=E},206:function(e, t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=new Map;n.set(-30,.33),n.set(-29,.37),n.set(-28,.41),n.set(-27,.46),n.set(-26,.51),n.set(-25,.55),n.set(-24,.6),n.set(-23,.66),n.set(-22,.73),n.set(-21,.8),n.set(-20,.88),n.set(-19,.96),n.set(-18,1.05),n.set(-17,1.15),n.set(-16,1.27),n.set(-15,1.38),n.set(-14,1.51),n.set(-13,1.6),n.set(-12,1.8),n.set(-11,1.96),n.set(-10,2.14),n.set(-9,2.33),n.set(-8,2.54),n.set(-7,2.76),n.set(-6,2.99),n.set(-5,3.24),n.set(-4,3.51),n.set(-3,3.81),n.set(-2,4.31),n.set(-1,4.47),n.set(0,4.84),n.set(1,5.22),n.set(2,5.6),n.set(3,5.98),n.set(4,6.4),n.set(5,6.84),n.set(6,7.3),n.set(7,7.8),n.set(8,8.3),n.set(9,8.8),n.set(10,9.4),n.set(11,10.1),n.set(12,10.7),n.set(13,11.4),n.set(14,12.1),n.set(15,12.8),n.set(16,13.6),n.set(17,14.5),n.set(18,15.4),n.set(19,16.3),n.set(20,17.3),n.set(21,18.3),n.set(22,19.4),n.set(23,20.6),n.set(24,21.8),n.set(25,23),n.set(26,24.4),n.set(27,25.8),n.set(28,27.2),n.set(29,28.7),n.set(30,30.3),n.set(31,32.1),n.set(32,33.9),n.set(33,35.7),n.set(34,37.6),n.set(35,39.6),n.set(36,41.8),n.set(37,44),n.set(38,46.3),n.set(39,48.7),n.set(40,65.4),n.set(41,68.6),n.set(42,71.8),n.set(43,75.3),n.set(44,78.82),n.set(45,83),n.set(46,87.26),n.set(47,91.52),n.set(48,95.78),n.set(49,100.04),n.set(50,104.3),n.set(51,109.44),n.set(52,114.58),n.set(53,119.72),n.set(54,124.86),n.set(55,130),n.set(56,136.2),n.set(57,142.4),n.set(58,148.6),n.set(59,154.8),n.set(60,161),n.set(61,168.4),n.set(62,175.8),n.set(63,183.2),n.set(64,190.6),n.set(65,198),n.set(66,206.8),n.set(67,215.6),n.set(68,224.4),n.set(69,233.2),n.set(70,242),t.default=n}});
//# sourceMappingURL=component---src-pages-index-tsx-0931d7c37d580cfc1bff.js.map
