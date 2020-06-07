webpackJsonp([221374088121123],{

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(5);
	
	var emptyObject = __webpack_require__(35);
	var _invariant = __webpack_require__(1);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(52);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var AbsoluteHumidity = function AbsoluteHumidity(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "Absolute Humidity: ", React.createElement("strong", null, " ", props.absoluteHumidity, " g/m\xB3")));
	};
	exports.default = AbsoluteHumidity;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var HumidificationIndex = function HumidificationIndex(props) {
	    return React.createElement("div", { className: "rounded card" }, React.createElement("span", null, "Humidification Index: ", React.createElement("strong", null, " ", props.humidificationIndex, " ")));
	};
	exports.default = HumidificationIndex;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var RelativeHumidity = function RelativeHumidity(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "Relative Humidity: ", React.createElement("strong", null, " ", props.relativeHumidity, "%")));
	};
	exports.default = RelativeHumidity;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var Volatility = function Volatility(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "Volatility: ", React.createElement("strong", null, " ", props.volatility == 0.01 ? 0 : props.volatility, " mm/year")));
	};
	exports.default = Volatility;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var WaterIncome = function WaterIncome(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "Water Income: ", React.createElement("strong", null, " ", props.waterIncome, " mm/year")));
	};
	exports.default = WaterIncome;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var AdditionalWateringInput = function AdditionalWateringInput(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "AdditionalWatering: ", React.createElement("strong", null, " ", props.additionalWatering, " km\xB3/year")), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "additionalWateringSelector", name: "additionalWateringSelector", min: "0", max: "20000", step: "1", value: props.additionalWatering, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = AdditionalWateringInput;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var CactooAmountInput = function CactooAmountInput(props) {
	    return React.createElement("div", { className: "rounded card cactoo-color" }, React.createElement("span", null, "Amount of cactoo: ", React.createElement("strong", null, " ", props.cactooAmount)), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "cactooAmountSelector", name: "cactooAmountSelector", min: "0", max: "2000000", step: "1", value: props.cactooAmount, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = CactooAmountInput;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var PrecipationInput = function PrecipationInput(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "Precipation: ", React.createElement("strong", null, " ", props.precipation, " mm/year")), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "precipationSelector", name: "precipationSelector", min: "0", max: "2000", step: "1", value: props.precipation, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = PrecipationInput;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var TemperatureInput = function TemperatureInput(props) {
	    return React.createElement("div", { className: "rounded card" }, React.createElement("span", null, "Temperature: ", React.createElement("strong", null, " ", props.temperature, " \xB0C")), React.createElement("input", { style: { width: "max-content" }, type: "range", id: "temperatureSelector", name: "temperatureSelector", min: "-30", max: "70", step: "1", onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = TemperatureInput;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var TerritoryInput = function TerritoryInput(props) {
	    return React.createElement("div", { className: "rounded card" }, React.createElement("span", null, "Territory area: ", React.createElement("strong", null, " ", props.territory, " km\xB2")), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "territorySelector", name: "territorySelector", min: "0", max: "2000000", step: "1", value: props.territory, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = TerritoryInput;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var TreeAmountInput = function TreeAmountInput(props) {
	    return React.createElement("div", { className: "rounded card tree-color" }, React.createElement("span", null, "Amount of trees: ", React.createElement("strong", null, " ", props.treeAmount)), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "treeAmountSelector", name: "treeAmountSelector", min: "0", max: "2000000", step: "1", value: props.treeAmount, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = TreeAmountInput;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var TreePlantingInput = function TreePlantingInput(props) {
	    return React.createElement("div", { className: "rounded card tree-color" }, React.createElement("span", null, "Trees planted every year: ", React.createElement("strong", null, " ", props.treePlanting)), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "treePlantingSelector", name: "treePlantingSelector", min: "0", max: "2000000", step: "1", value: props.treePlanting, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = TreePlantingInput;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var WaterAmountInput = function WaterAmountInput(props) {
	    return React.createElement("div", { className: "rounded card water-color" }, React.createElement("span", null, "WaterAmount area: ", React.createElement("strong", null, " ", props.waterAmount, " km\xB2")), React.createElement("input", { style: { borderStyle: "unset", borderRadius: "10px" }, type: "number", id: "waterAmountSelector", name: "waterAmountSelector", min: "0", max: "20000", step: "1", value: props.waterAmount, onInput: function onInput(event) {
	            return props.onInput(event);
	        }, onChange: function onChange(event) {
	            return props.onInput(event);
	        } }));
	};
	exports.default = WaterAmountInput;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var saturationVaporDensityTable_1 = __webpack_require__(211);
	var WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES = Number(1507752); // grams per year when 30 degrees
	exports.saturationVaporDensity = function (temperature) {
	    if (saturationVaporDensityTable_1.default.has(temperature)) {
	        return saturationVaporDensityTable_1.default.get(temperature);
	    } else {
	        console.log("Temperature: " + temperature + ", SVD: " + saturationVaporDensityTable_1.default.get(Math.floor(temperature)));
	        return saturationVaporDensityTable_1.default.get(Math.floor(temperature));
	    }
	};
	exports.waterVaporizingCoefficient = function (temperature) {
	    return temperature >= 0 ? Number(WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES * exports.saturationVaporDensity(temperature)) / 30.3 : Number(WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES * exports.saturationVaporDensity(temperature)) / (1000000 * 30.3);
	};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	// https://cyberleninka.ru/article/n/dnevnoy-rashod-vody-na-transpiratsiyu-tselym-drevesnym-rasteniem
	// https://studfile.net/preview/5707905/page:3/ - about volatility
	// http://sun.tsu.ru/mminfo/000063105/274/image/274-136.pdf and http://www.kovas.ru/pdf1/40.pdf about water vaporizing
	// the plant dies above 40C https://iplants.ru/temprezim.htm#:~:text=%D0%A3%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D1%85%20%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C,%D0%A1%20%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D0%B7%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F.
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var functions_1 = __webpack_require__(207);
	var TemperatureInput_1 = __webpack_require__(202);
	var TerritoryInput_1 = __webpack_require__(203);
	var TreeAmountInput_1 = __webpack_require__(204);
	var CactooAmountInput_1 = __webpack_require__(200);
	var TreePlantingInput_1 = __webpack_require__(205);
	var PrecipationInput_1 = __webpack_require__(201);
	var AdditionalWateringInput_1 = __webpack_require__(199);
	var RelativeHumidity_1 = __webpack_require__(196);
	var AbsoluteHumidity_1 = __webpack_require__(194);
	var Volatility_1 = __webpack_require__(197);
	var WaterAmountInput_1 = __webpack_require__(206);
	var WaterIncome_1 = __webpack_require__(198);
	var HumidificationIndex_1 = __webpack_require__(195);
	var CACTOO_VAPORIZES_PER_YEAR = 6000; // grams per year https://books.google.com.ua/books?id=cgo0ukOa_gIC&pg=PA9&lpg=PA9&dq=%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE+%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%BE%D0%B2+%D0%B2+%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B5&source=bl&ots=6FQXLOTKi6&sig=ACfU3U3f1b84bYd4NhgYaQFfiwywuMDKxQ&hl=ru&sa=X&ved=2ahUKEwid-7aZ2O3pAhWnk4sKHcG3BW8Q6AEwBXoECAkQAQ#v=onepage&q=%D0%B8%D1%81%D0%BF%D0%B0%D1%80%D1%8F%D0%B5%D1%82%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81&f=false
	var TREE_VAPORIZES_PER_DAY = 400000; //grams per day https://cyberleninka.ru/article/n/dnevnoy-rashod-vody-na-transpiratsiyu-tselym-drevesnym-rasteniem
	var CLOUD_HEIGHT = 5000; // meters https://public.wmo.int/ru/%D0%B2%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-2017-%D0%B3/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2#:~:text=%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D1%8F%D1%80%D1%83%D1%81%D0%B0%2C%20%D0%BA%D0%B0%D0%BA,%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2%20(6%20500%20%D1%84%D1%83%D1%82%D0%BE%D0%B2).
	var DESERT_HUMIDIFICATION_INDEX = 0.1; // something is a desert if (precipation + extra water) / volatility < 0.1  https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%8D%D1%84%D1%84%D0%B8%D1%86%D0%B8%D0%B5%D0%BD%D1%82_%D1%83%D0%B2%D0%BB%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F
	var HALF_DESERT_HUMIDIFICATION_INDEX = 0.3;
	var STEPPE_HUMIDIFICATION_INDEX = 0.6;
	var FOREST_STEPPE_HUMIDIFICATION_INDEX = 0.9;
	var FOREST_HUMIDIFICATION_INDEX = 1.2;
	var VOLGA_RIVER_YEARLY_WATERFLOW = 254; // km3/year (8060 m3/sec) https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%80%D0%B5%D0%BA_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D0%B8
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1(props, context) {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	        _this.countAbsoluteHumidity = _asyncToGenerator(function* () {
	            return (yield Number(_this.state.treeAmount * TREE_VAPORIZES_PER_DAY / CLOUD_HEIGHT * 365.25 + _this.state.cactooAmount * CACTOO_VAPORIZES_PER_YEAR / CLOUD_HEIGHT) + Number(_this.state.waterAmount) * functions_1.waterVaporizingCoefficient(_this.state.averageTemperature) * 50) / (_this.state.territory * CLOUD_HEIGHT); // ((treeAmount * daysInYear * howMuchEachTreeVaporizesPerDayInGrams) + (same for cactoo)) / (height * SQkmToSQmetersCoefficient * desertTerritory)
	        });
	        _this.countRelativeHumidity = _asyncToGenerator(function* () {
	            return yield (yield _this.countAbsoluteHumidity()) / functions_1.saturationVaporDensity(_this.state.averageTemperature);
	        }); // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16
	        _this.countVolatility = _asyncToGenerator(function* () {
	            var addedAverageTemperature = 25 + _this.state.averageTemperature;
	            return yield Math.max(0.01 * Math.pow(addedAverageTemperature, 2) * (100 - (yield _this.countRelativeHumidity())), 0.01); // volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html
	        });
	        _this.countWaterIncome = function () {
	            return Number(_this.state.precipation) + 1000 * (Number(_this.state.additionalWatering) / Number(_this.state.territory)) - Number(_this.state.waterAmount) * functions_1.waterVaporizingCoefficient(Number(_this.state.averageTemperature)) / (Number(_this.state.territory) * 100000);
	        };
	        _this.setAbsoluteHumidity = _asyncToGenerator(function* () {
	            return _this.setState({ absoluteHumidity: yield _this.countAbsoluteHumidity() });
	        });
	        _this.setRelativeHumidity = _asyncToGenerator(function* () {
	            return _this.setState({ relativeHumidity: yield _this.countRelativeHumidity() });
	        });
	        _this.setVolatility = _asyncToGenerator(function* () {
	            return yield _this.setState({ volatility: yield _this.countVolatility() });
	        });
	        _this.setWaterIncome = _asyncToGenerator(function* () {
	            return yield _this.setState({ waterIncome: yield _this.countWaterIncome() });
	        });
	        _this.setCountedResults = function () {
	            _this.setAbsoluteHumidity().then(_this.setRelativeHumidity).then(_this.setVolatility).then(_this.setRelativeHumidity).then(_this.setAbsoluteHumidity).then(_this.setWaterIncome);
	        };
	        _this.state = {
	            territory: 124000,
	            averageTemperature: Number(25),
	            treeAmount: 3000,
	            treePlanting: 0,
	            cactooAmount: 5000,
	            precipation: 300,
	            additionalWatering: VOLGA_RIVER_YEARLY_WATERFLOW,
	            waterAmount: 1300,
	            relativeHumidity: 0,
	            volatility: 0,
	            absoluteHumidity: 0,
	            waterIncome: 0 // non-input
	        };
	        return _this;
	    }
	
	    default_1.prototype.componentDidMount = function componentDidMount() {
	        this.setCountedResults();
	    };
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        var humidificationIndex = this.countWaterIncome() / this.state.volatility; // (precipation + extra water) / volatility < 0.15
	        var backgroundStyle = "";
	        if (this.state.averageTemperature < 1) {
	            backgroundStyle = "cold-desert";
	        }
	        if (this.state.averageTemperature >= 1 && this.state.averageTemperature < 40) {
	            if (humidificationIndex <= DESERT_HUMIDIFICATION_INDEX) {
	                backgroundStyle = "desert";
	            }
	            if (humidificationIndex > DESERT_HUMIDIFICATION_INDEX && humidificationIndex <= HALF_DESERT_HUMIDIFICATION_INDEX) {
	                backgroundStyle = "half-desert";
	            }
	            if (humidificationIndex > HALF_DESERT_HUMIDIFICATION_INDEX && humidificationIndex <= STEPPE_HUMIDIFICATION_INDEX) {
	                backgroundStyle = "steppe";
	            }
	            if (humidificationIndex > STEPPE_HUMIDIFICATION_INDEX && humidificationIndex <= FOREST_STEPPE_HUMIDIFICATION_INDEX) {
	                if (this.state.averageTemperature <= 9) {
	                    backgroundStyle = "cold-forest-steppe";
	                } else {
	                    backgroundStyle = "forest-steppe";
	                }
	            }
	            if (humidificationIndex > FOREST_STEPPE_HUMIDIFICATION_INDEX) {
	                if (this.state.averageTemperature > 22) {
	                    backgroundStyle = "rainforest";
	                }
	                if (this.state.averageTemperature > 9 && this.state.averageTemperature <= 22) {
	                    backgroundStyle = "forest";
	                }
	                if (this.state.averageTemperature <= 9) {
	                    backgroundStyle = "wetland";
	                }
	            }
	        }
	        if (this.state.averageTemperature >= 40) {
	            backgroundStyle = "desert";
	        }
	        return React.createElement("div", null, React.createElement("div", { className: "background-image cold-desert", style: { opacity: backgroundStyle === "cold-desert" ? 1 : 0 } }), React.createElement("div", { className: "background-image desert", style: { opacity: backgroundStyle === "desert" ? 1 : 0 } }), React.createElement("div", { className: "background-image half-desert", style: { opacity: backgroundStyle === "half-desert" ? 1 : 0 } }), React.createElement("div", { className: "background-image steppe", style: { opacity: backgroundStyle === "steppe" ? 1 : 0 } }), React.createElement("div", { className: "background-image forest-steppe", style: { opacity: backgroundStyle === "forest-steppe" ? 1 : 0 } }), React.createElement("div", { className: "background-image cold-forest-steppe", style: { opacity: backgroundStyle === "cold-forest-steppe" ? 1 : 0 } }), React.createElement("div", { className: "background-image rainforest", style: { opacity: backgroundStyle === "rainforest" ? 1 : 0 } }), React.createElement("div", { className: "background-image forest", style: { opacity: backgroundStyle === "forest" ? 1 : 0 } }), React.createElement("div", { className: "background-image wetland", style: { opacity: backgroundStyle === "wetland" ? 1 : 0 } }), React.createElement("h1", null, "Input Data"), React.createElement("div", { className: "group-of-cards" }, React.createElement(TerritoryInput_1.default, { territory: this.state.territory, onInput: function onInput(event) {
	                _this2.setState({ territory: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(WaterAmountInput_1.default, { waterAmount: this.state.waterAmount, onInput: function onInput(event) {
	                _this2.setState({ waterAmount: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(TemperatureInput_1.default, { temperature: this.state.averageTemperature, onInput: function onInput(event) {
	                _this2.setState({ averageTemperature: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(PrecipationInput_1.default, { precipation: this.state.precipation, onInput: function onInput(event) {
	                _this2.setState({ precipation: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(AdditionalWateringInput_1.default, { additionalWatering: this.state.additionalWatering, onInput: function onInput(event) {
	                _this2.setState({ additionalWatering: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(TreeAmountInput_1.default, { treeAmount: this.state.treeAmount, onInput: function onInput(event) {
	                _this2.setState({ treeAmount: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(TreePlantingInput_1.default, { treePlanting: this.state.treePlanting, onInput: function onInput(event) {
	                _this2.setState({ treePlanting: Number(event.target.value) });
	                _this2.setCountedResults();
	            } }), React.createElement(CactooAmountInput_1.default, { cactooAmount: this.state.cactooAmount, onInput: function onInput(event) {
	                _this2.setState({ cactooAmount: Number(event.target.value) });
	                _this2.setCountedResults();
	            } })), React.createElement("h1", null, "Counted Results"), React.createElement("div", { className: "group-of-cards" }, React.createElement(RelativeHumidity_1.default, { relativeHumidity: this.state.relativeHumidity }), React.createElement(AbsoluteHumidity_1.default, { absoluteHumidity: this.state.absoluteHumidity }), React.createElement(Volatility_1.default, { volatility: this.state.volatility }), React.createElement(WaterIncome_1.default, { waterIncome: this.state.waterIncome }), React.createElement(HumidificationIndex_1.default, { humidificationIndex: humidificationIndex })), React.createElement("div", { className: "moderate" }), React.createElement("div", { className: "rain" }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var table = new Map();
	table.set(-30, 0.33);
	table.set(-29, 0.37);
	table.set(-28, 0.41);
	table.set(-27, 0.46);
	table.set(-26, 0.51);
	table.set(-25, 0.55);
	table.set(-24, 0.6);
	table.set(-23, 0.66);
	table.set(-22, 0.73);
	table.set(-21, 0.8);
	table.set(-20, 0.88);
	table.set(-19, 0.96);
	table.set(-18, 1.05);
	table.set(-17, 1.15);
	table.set(-16, 1.27);
	table.set(-15, 1.38);
	table.set(-14, 1.51);
	table.set(-13, 1.6);
	table.set(-12, 1.8);
	table.set(-11, 1.96);
	table.set(0 - 10, 2.14);
	table.set(0 - 9, 2.33);
	table.set(0 - 8, 2.54);
	table.set(0 - 7, 2.76);
	table.set(0 - 6, 2.99);
	table.set(0 - 5, 3.24);
	table.set(0 - 4, 3.51);
	table.set(0 - 3, 3.81);
	table.set(0 - 2, 4.31);
	table.set(0 - 1, 4.47);
	table.set(0, 4.84);
	table.set(1, 5.22);
	table.set(2, 5.6);
	table.set(3, 5.98);
	table.set(4, 6.4);
	table.set(5, 6.84);
	table.set(6, 7.3);
	table.set(7, 7.8);
	table.set(8, 8.3);
	table.set(9, 8.8);
	table.set(10, 9.4);
	table.set(11, 10.1);
	table.set(12, 10.7);
	table.set(13, 11.4);
	table.set(14, 12.1);
	table.set(15, 12.8);
	table.set(16, 13.6);
	table.set(17, 14.5);
	table.set(18, 15.4);
	table.set(19, 16.3);
	table.set(20, 17.3);
	table.set(21, 18.3);
	table.set(22, 19.4);
	table.set(23, 20.6);
	table.set(24, 21.8);
	table.set(25, 23.0);
	table.set(26, 24.4);
	table.set(27, 25.8);
	table.set(28, 27.2);
	table.set(29, 28.7);
	table.set(30, 30.3);
	table.set(31, 32.1);
	table.set(32, 33.9);
	table.set(33, 35.7);
	table.set(34, 37.6);
	table.set(35, 39.6);
	table.set(36, 41.8);
	table.set(37, 44);
	table.set(38, 46.3);
	table.set(39, 48.7);
	table.set(40, 65.4); // 3.52
	table.set(41, 68.6); // 3.52
	table.set(42, 71.8); // 3.52
	table.set(43, 75.3); // 3.52
	table.set(44, 78.82); // 3.52
	table.set(45, 83.0); // 4.26
	table.set(46, 87.26); // 4.26
	table.set(47, 91.52); // 4.26
	table.set(48, 95.78); // 4.26
	table.set(49, 100.04); // 4.26
	table.set(50, 104.3); // 5.14
	table.set(51, 109.44); // 5.14
	table.set(52, 114.58); // 5.14
	table.set(53, 119.72); // 5.14
	table.set(54, 124.86); // 5.14
	table.set(55, 130); // 6.2
	table.set(56, 136.2); // 6.2
	table.set(57, 142.4); // 6.2
	table.set(58, 148.6); // 6.2
	table.set(59, 154.8); // 6.2
	table.set(60, 161); // 7.4
	table.set(61, 168.4); // 7.4
	table.set(62, 175.8); // 7.4
	table.set(63, 183.2); // 7.4
	table.set(64, 190.6); // 7.4
	table.set(65, 198); // 8.8
	table.set(66, 206.8); // 8.8
	table.set(67, 215.6); // 8.8
	table.set(68, 224.4); // 8.8
	table.set(69, 233.2); // 8.8
	table.set(70, 242);
	exports.default = table;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-25c3cf85e565eaa7476b.js.map