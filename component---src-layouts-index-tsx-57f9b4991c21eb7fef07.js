webpackJsonp([22676092666560,60335399758886],{102:function(e,t){e.exports={layoutContext:{}}},191:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(5),a=r(i),u=n(197),c=r(u),f=n(102),s=r(f);t.default=function(e){return a.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},202:function(e,t,n){e.exports={default:n(212),__esModule:!0}},204:function(e,t,n){e.exports={default:n(214),__esModule:!0}},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(202),i=r(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},209:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},212:function(e,t,n){n(237),e.exports=n(12).Object.assign},214:function(e,t,n){n(239),e.exports=n(12).Object.keys},227:function(e,t,n){"use strict";var r=n(21),o=n(43),i=n(80),a=n(57),u=n(59),c=n(131),f=Object.assign;e.exports=!f||n(28)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=f({},e)[n]||Object.keys(f({},t)).join("")!=r})?function(e,t){for(var n=u(e),f=arguments.length,s=1,l=i.f,T=a.f;f>s;)for(var p,d=c(arguments[s++]),E=l?o(d).concat(l(d)):o(d),A=E.length,h=0;A>h;)p=E[h++],r&&!T.call(d,p)||(n[p]=d[p]);return n}:f},231:function(e,t,n){var r=n(27),o=n(12),i=n(28);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},237:function(e,t,n){var r=n(27);r(r.S+r.F,"Object",{assign:n(227)})},239:function(e,t,n){var r=n(59),o=n(43);n(231)("keys",function(){return function(e){return o(r(e))}})},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return i(R+e)}function i(e){return e.replace(/^\/\//g,"/")}function a(e,t){var n=(0,O.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=t.replace=t.push=void 0;var u=n(208),c=r(u),f=n(204),s=r(f),l=n(209),T=r(l),p=n(55),d=r(p),E=n(75),A=r(E),h=n(74),y=r(h);t.withPrefix=o;var _=n(5),S=r(_),m=n(72),b=n(7),v=r(b),O=n(15),R="/";R="/desertification";var P={activeClassName:v.default.string,activeStyle:v.default.object,exact:v.default.bool,strict:v.default.bool,isActive:v.default.func,location:v.default.object},M=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},g=function(e){function t(n,r){(0,d.default)(this,t);var o=(0,A.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var u=r.router.history,c=a(n.to,u);return o.state={path:(0,O.createPath)(c),to:c,IOSupported:i},o.handleRef=o.handleRef.bind(o),o}return(0,y.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=a(e.to,history);this.setState({path:(0,O.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&M(e,function(){___loader.enqueue(t.state.to.pathname)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,T.default)(t,["onClick"]),o=void 0;return o=(0,s.default)(P).some(function(t){return e.props[t]})?m.NavLink:m.Link,S.default.createElement(o,(0,c.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(e.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(S.default.Component);g.propTypes=(0,c.default)({},P,{innerRef:v.default.func,onClick:v.default.func,to:v.default.oneOfType([v.default.string,v.default.object]).isRequired}),g.contextTypes={router:v.default.object},t.default=g;var w=t.push=function(e){window.___push(e)};t.replace=function(e){window.___replace(e)},t.navigateTo=w},389:function(e,t){"use strict";function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var u,c,f,s=r(e),l=r(t);if(s&&l){if(c=e.length,c!=t.length)return!1;for(u=c;0!==u--;)if(!n(e[u],t[u]))return!1;return!0}if(s!=l)return!1;var T=e instanceof Date,p=t instanceof Date;if(T!=p)return!1;if(T&&p)return e.getTime()==t.getTime();var d=e instanceof RegExp,E=t instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==t.toString();var A=o(e);if(c=A.length,c!==o(t).length)return!1;for(u=c;0!==u--;)if(!i.call(t,A[u]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(u=c;0!==u--;)if(f=A[u],!("_owner"===f&&e.$$typeof||n(e[f],t[f])))return!1;return!0}return e!==e&&t!==t}var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return n(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},390:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),l=r(s),T=n(7),p=r(T),d=n(409),E=r(d),A=n(389),h=r(A),y=n(391),_=n(176),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case _.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case _.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case _.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case _.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case _.TAG_NAMES.LINK:case _.TAG_NAMES.META:case _.TAG_NAMES.NOSCRIPT:case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),l.default.createElement(e,i)},f(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(l.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},m=function(){return null},b=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(m),v=S(b);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},176:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},391:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(5),u=r(a),c=n(4),f=r(c),s=n(176),l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},A=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,f.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:d(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(s.ATTRIBUTE_NAMES.HTML,e),linkTags:A(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:A(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:A(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:d(s.ATTRIBUTE_NAMES.TITLE,e)}},_=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){_(t)},0)}}(),S=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,R=function(e){O&&b(O),e.defer?O=m(function(){P(e,function(){O=null})}):(P(e),O=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,l=e.styleTags,T=e.title,p=e.titleAttributes;w(s.TAG_NAMES.BODY,r),w(s.TAG_NAMES.HTML,o),g(T,p);var d={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,i),metaTags:C(s.TAG_NAMES.META,a),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,f),styleTags:C(s.TAG_NAMES.STYLE,l)},E={},A={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=d[e].oldTags)}),t&&t(),c(e,E,A)},M=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),w(s.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],f=t[c]||"";n.getAttribute(c)!==f&&n.setAttribute(c,f),o.indexOf(c)===-1&&o.push(c);var l=i.indexOf(c);l!==-1&&i.splice(l,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=M(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=G(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,f=e.styleTags,l=e.title,T=void 0===l?"":l,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,o,r),link:x(s.TAG_NAMES.LINK,i,r),meta:x(s.TAG_NAMES.META,a,r),noscript:x(s.TAG_NAMES.NOSCRIPT,u,r),script:x(s.TAG_NAMES.SCRIPT,c,r),style:x(s.TAG_NAMES.STYLE,f,r),title:x(s.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=R,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=m,t.warn=v}).call(t,function(){return this}())},409:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){function l(){T=e(p.map(function(e){return e.props})),d.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var T,p=[],d=function(e){function t(){return e.apply(this,arguments)||this}i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e};var n=t.prototype;return n.shouldComponentUpdate=function(e){return!f(e,this.props)},n.componentWillMount=function(){p.push(this),l()},n.componentDidUpdate=function(){l()},n.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),l()},n.render=function(){return c.createElement(a,this.props)},t}(u.Component);return o(d,"displayName","SideEffect("+r(a)+")"),o(d,"canUseDOM",s),d}}var u=n(5),c=r(u),f=r(n(427)),s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=a},427:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var f=i[c];if(!u(f))return!1;var s=e[f],l=t[f];if(o=n?n.call(r,s,l,f):void 0,o===!1||void 0===o&&s!==l)return!1}return!0}},286:function(e,t){},197:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=n(299),c=n(390);n(286);var f=function(){return a.createElement("div",{className:"header",style:{background:"sandybrown"}},a.createElement("h1",{style:{margin:0}},a.createElement(u.default,{to:"/",style:{color:"white",textDecoration:"none"}},"Desertification")))},s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(c.default,{title:"Desertification",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.createElement(f,null),a.createElement("div",{className:"wrapper"},this.props.children()))},t}(a.PureComponent);t.default=s}});
//# sourceMappingURL=component---src-layouts-index-tsx-57f9b4991c21eb7fef07.js.map