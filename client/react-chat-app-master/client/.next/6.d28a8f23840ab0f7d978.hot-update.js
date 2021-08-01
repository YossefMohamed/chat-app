webpackHotUpdate(6,{

/***/ "./components/SignupForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_mutations_signup__ = __webpack_require__("./graphql/mutations/signup.js");
var _jsxFileName = "Y:\\Projects\\react-chat-app-master\\client\\components\\SignupForm.js";







var Signup = function Signup(_ref) {
  var client = _ref.client;
  var input;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["b" /* Mutation */], {
    mutation: __WEBPACK_IMPORTED_MODULE_4__graphql_mutations_signup__["a" /* default */],
    onCompleted: function onCompleted(data) {
      // Store the token in cookie
      document.cookie = __WEBPACK_IMPORTED_MODULE_2_cookie___default.a.serialize("token", data.signup.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days

      }); // Force a reload of all the current queries now that the user is
      // logged in

      client.cache.reset().then(function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__lib_redirect__["a" /* default */])({}, "/");
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, function (signup, _ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();

        if (input.value !== "") {
          signup({
            variables: {
              username: input.value
            }
          });
          input.value = "";
        } else {
          console.log("Please, type a username.");
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
      type: "text",
      className: "block w-full bg-grey-lighter p-4 rounded mb-4",
      placeholder: "Type your username",
      ref: function ref(node) {
        input = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
      className: "gradient-primary text-white p-4 rounded font-bold block w-full uppercase text-sm",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, !loading && !data && "Let's chat!", loading && "Signing up...", !loading && data && "Redirecting..."), error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "text-red mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, "Opss! Something went wrong."));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["d" /* withApollo */])(Signup));

/***/ }),

/***/ "./node_modules/react-apollo/react-apollo.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ApolloConsumer */
/* unused harmony export ApolloContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mutation; });
/* unused harmony export Query */
/* unused harmony export RenderPromises */
/* unused harmony export Subscription */
/* unused harmony export compose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDataFromTree; });
/* unused harmony export getMarkupFromTree */
/* unused harmony export graphql */
/* unused harmony export renderToStringWithData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return withApollo; });
/* unused harmony export withMutation */
/* unused harmony export withQuery */
/* unused harmony export withSubscription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/react-apollo/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_invariant__ = __webpack_require__("./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_client__ = __webpack_require__("./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isequal__ = __webpack_require__("./node_modules/lodash.isequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics__ = __webpack_require__("./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics__);








var ApolloContext = __WEBPACK_IMPORTED_MODULE_0_react__["createContext"] &&
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createContext"])(undefined);

var ApolloConsumer = function (props, legacyContext) {
    function finish(context) {
        if (!context || !context.client) {
            throw  false ? new InvariantError() : new __WEBPACK_IMPORTED_MODULE_2_ts_invariant__["a" /* InvariantError */]('Could not find "client" in the context of ApolloConsumer. ' +
                'Wrap the root component in an <ApolloProvider>.');
        }
        return props.children(context.client);
    }
    return ApolloContext ? (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ApolloContext.Consumer, null, finish)) : (finish(legacyContext));
};
ApolloConsumer.contextTypes = {
    client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
};
ApolloConsumer.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
};

var ApolloProvider = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(ApolloProvider, _super);
    function ApolloProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.operations = new Map();
         false ? invariant(props.client) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(props.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        if (!props.client.__operations_cache__) {
            props.client.__operations_cache__ = _this.operations;
        }
        return _this;
    }
    ApolloProvider.prototype.getChildContext = function () {
        return {
            client: this.props.client,
            operations: this.props.client.__operations_cache__,
        };
    };
    ApolloProvider.prototype.render = function () {
        return ApolloContext ? (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ApolloContext.Provider, { value: this.getChildContext() }, this.props.children)) : (this.props.children);
    };
    ApolloProvider.propTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
        children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired,
    };
    ApolloProvider.childContextTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
        operations: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    };
    return ApolloProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? invariant(!!document && !!document.kind) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
    var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
    var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
     false ? invariant(
        !fragments.length || (queries.length || mutations.length || subscriptions.length)
    ) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? invariant(queries.length + mutations.length + subscriptions.length <= 1) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
     false ? invariant(definitions.length === 1) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}

function getClient(props, context) {
    var client = props.client || context.client;
     false ? invariant(!!client) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(!!client, 'Could not find "client" in the context or passed in as a prop. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ' +
        'ApolloClient instance in via props.');
    return client;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
}
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
    if (!isObject(objA) || !isObject(objB)) {
        return false;
    }
    var keys = Object.keys(objA);
    if (keys.length !== Object.keys(objB).length) {
        return false;
    }
    return keys.every(function (key) { return hasOwnProperty.call(objB, key) && is(objA[key], objB[key]); });
}

function observableQueryFields(observable) {
    var fields = {
        variables: observable.variables,
        refetch: observable.refetch.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable),
    };
    return fields;
}
var Query = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(Query, _super);
    function Query(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasMounted = false;
        _this.lastRenderedResult = null;
        _this.startQuerySubscription = function () {
            if (_this.querySubscription)
                return;
            _this.querySubscription = _this.queryObservable.subscribe({
                next: function (result) {
                    if (_this.lastRenderedResult &&
                        _this.lastRenderedResult.loading === result.loading &&
                        _this.lastRenderedResult.networkStatus === result.networkStatus &&
                        shallowEqual(_this.lastRenderedResult.data, result.data)) {
                        return;
                    }
                    _this.updateCurrentData();
                },
                error: function (error) {
                    _this.resubscribeToQuery();
                    if (!error.hasOwnProperty('graphQLErrors'))
                        throw error;
                    _this.updateCurrentData();
                },
            });
        };
        _this.removeQuerySubscription = function () {
            if (_this.querySubscription) {
                _this.querySubscription.unsubscribe();
                delete _this.lastRenderedResult;
                delete _this.querySubscription;
            }
        };
        _this.updateCurrentData = function () {
            _this.handleErrorOrCompleted();
            if (_this.hasMounted)
                _this.forceUpdate();
        };
        _this.handleErrorOrCompleted = function () {
            var result = _this.queryObservable.currentResult();
            var data = result.data, loading = result.loading, error = result.error;
            var _a = _this.props, onCompleted = _a.onCompleted, onError = _a.onError;
            if (onCompleted && !loading && !error) {
                onCompleted(data);
            }
            else if (onError && !loading && error) {
                onError(error);
            }
        };
        _this.getQueryResult = function () {
            var result = { data: Object.create(null) };
            Object.assign(result, observableQueryFields(_this.queryObservable));
            if (_this.props.skip) {
                result = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, result, { data: undefined, error: undefined, loading: false });
            }
            else {
                var currentResult = _this.queryObservable.currentResult();
                var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                var error = currentResult.error;
                if (errors && errors.length > 0) {
                    error = new __WEBPACK_IMPORTED_MODULE_4_apollo_client__["b" /* ApolloError */]({ graphQLErrors: errors });
                }
                var fetchPolicy = _this.queryObservable.options.fetchPolicy;
                Object.assign(result, { loading: loading, networkStatus: networkStatus, error: error });
                var previousData = _this.lastRenderedResult ? _this.lastRenderedResult.data : {};
                if (loading) {
                    Object.assign(result.data, previousData, currentResult.data);
                }
                else if (error) {
                    Object.assign(result, {
                        data: (_this.queryObservable.getLastResult() || {}).data,
                    });
                }
                else if (fetchPolicy === 'no-cache' &&
                    Object.keys(currentResult.data).length === 0) {
                    result.data = previousData;
                }
                else {
                    var partialRefetch = _this.props.partialRefetch;
                    if (partialRefetch &&
                        currentResult.data !== null &&
                        typeof currentResult.data === 'object' &&
                        Object.keys(currentResult.data).length === 0 &&
                        partial &&
                        fetchPolicy !== 'cache-only') {
                        Object.assign(result, { loading: true, networkStatus: __WEBPACK_IMPORTED_MODULE_4_apollo_client__["c" /* NetworkStatus */].loading });
                        result.refetch();
                        _this.lastRenderedResult = result;
                        return result;
                    }
                    Object.assign(result.data, currentResult.data);
                }
            }
            if (!_this.querySubscription) {
                var oldRefetch_1 = result.refetch;
                result.refetch = function (args) {
                    if (_this.querySubscription) {
                        return oldRefetch_1(args);
                    }
                    else {
                        return new Promise(function (r, f) {
                            _this.refetcherQueue = { resolve: r, reject: f, args: args };
                        });
                    }
                };
            }
            setTimeout(function () {
                if (_this.queryObservable.resetQueryStoreErrors) {
                    _this.queryObservable.resetQueryStoreErrors();
                }
                else {
                    var _a = _this.queryObservable, queryManager = _a.queryManager, queryId = _a.queryId;
                    var queryStore = queryManager.queryStore.get(queryId);
                    if (queryStore) {
                        queryStore.networkError = null;
                        queryStore.graphQLErrors = [];
                    }
                }
            });
            result.client = _this.client;
            _this.lastRenderedResult = result;
            return result;
        };
        _this.client = getClient(props, context);
        _this.initializeQueryObservable(props);
        return _this;
    }
    Query.prototype.fetchData = function () {
        if (this.props.skip)
            return false;
        var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, onCompleted = _a.onCompleted, onError = _a.onError, partialRefetch = _a.partialRefetch, opts = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__rest"])(_a, ["children", "ssr", "displayName", "skip", "client", "onCompleted", "onError", "partialRefetch"]);
        var fetchPolicy = opts.fetchPolicy;
        if (ssr === false)
            return false;
        if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
            fetchPolicy = 'cache-first';
        }
        var observable = this.client.watchQuery(Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, opts, { fetchPolicy: fetchPolicy }));
        if (this.context && this.context.renderPromises) {
            this.context.renderPromises.registerSSRObservable(this, observable);
        }
        var result = this.queryObservable.currentResult();
        return result.loading ? observable.result() : false;
    };
    Query.prototype.componentDidMount = function () {
        this.hasMounted = true;
        if (this.props.skip)
            return;
        this.startQuerySubscription();
        if (this.refetcherQueue) {
            var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
            this.queryObservable.refetch(args)
                .then(resolve)
                .catch(reject);
        }
    };
    Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (nextProps.skip && !this.props.skip) {
            this.queryObservable.resetLastResults();
            this.removeQuerySubscription();
            return;
        }
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.removeQuerySubscription();
            this.queryObservable = null;
        }
        if (this.props.query !== nextProps.query) {
            this.queryObservable.resetLastResults();
            this.removeQuerySubscription();
        }
        this.updateQuery(nextProps);
        if (nextProps.skip)
            return;
        this.startQuerySubscription();
    };
    Query.prototype.componentWillUnmount = function () {
        this.removeQuerySubscription();
        this.hasMounted = false;
    };
    Query.prototype.componentDidUpdate = function (prevProps) {
        var isDiffRequest = !__WEBPACK_IMPORTED_MODULE_5_lodash_isequal___default()(prevProps.query, this.props.query) ||
            !__WEBPACK_IMPORTED_MODULE_5_lodash_isequal___default()(prevProps.variables, this.props.variables);
        if (isDiffRequest) {
            this.handleErrorOrCompleted();
        }
    };
    Query.prototype.render = function () {
        var _this = this;
        var context = this.context;
        var finish = function () { return _this.props.children(_this.getQueryResult()); };
        if (context && context.renderPromises) {
            return context.renderPromises.addQueryPromise(this, finish);
        }
        return finish();
    };
    Query.prototype.extractOptsFromProps = function (props) {
        this.operation = parser(props.query);
         false ? invariant(this.operation.type === DocumentType.Query) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(this.operation.type === DocumentType.Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === DocumentType.Mutation ? 'mutation' : 'subscription') + ".");
        var displayName = props.displayName || 'Query';
        return Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, { displayName: displayName, context: props.context || {}, metadata: { reactComponent: { displayName: displayName } } });
    };
    Query.prototype.initializeQueryObservable = function (props) {
        var opts = this.extractOptsFromProps(props);
        this.setOperations(opts);
        if (this.context && this.context.renderPromises) {
            this.queryObservable = this.context.renderPromises.getSSRObservable(this);
        }
        if (!this.queryObservable) {
            this.queryObservable = this.client.watchQuery(opts);
        }
    };
    Query.prototype.setOperations = function (props) {
        if (this.context.operations) {
            this.context.operations.set(this.operation.name, {
                query: props.query,
                variables: props.variables,
            });
        }
    };
    Query.prototype.updateQuery = function (props) {
        if (!this.queryObservable) {
            this.initializeQueryObservable(props);
        }
        else {
            this.setOperations(props);
        }
        this.queryObservable.setOptions(this.extractOptsFromProps(props))
            .catch(function () { return null; });
    };
    Query.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.queryObservable.getLastError();
        var lastResult = this.queryObservable.getLastResult();
        this.queryObservable.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
    };
    Query.contextTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        operations: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        renderPromises: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    };
    Query.propTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
        fetchPolicy: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
        notifyOnNetworkStatusChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
        onCompleted: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        onError: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        pollInterval: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
        query: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
        variables: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        ssr: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
        partialRefetch: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
        returnPartialData: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
    };
    return Query;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var initialState = {
    loading: false,
    called: false,
    error: undefined,
    data: undefined,
};
var Mutation = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(Mutation, _super);
    function Mutation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasMounted = false;
        _this.runMutation = function (options) {
            if (options === void 0) { options = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(options)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (e) {
                _this.onMutationError(e, mutationId);
                if (!_this.props.onError)
                    throw e;
            });
        };
        _this.mutate = function (options) {
            var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
            var mutateOptions = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, options);
            var refetchQueries = mutateOptions.refetchQueries || _this.props.refetchQueries;
            if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                refetchQueries = refetchQueries.map(function (x) {
                    if (typeof x === 'string' && _this.context.operations)
                        return _this.context.operations.get(x) || x;
                    return x;
                });
                delete mutateOptions.refetchQueries;
            }
            var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
            delete mutateOptions.variables;
            return _this.client.mutate(Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({ mutation: mutation,
                optimisticResponse: optimisticResponse,
                refetchQueries: refetchQueries,
                awaitRefetchQueries: awaitRefetchQueries,
                update: update,
                context: context,
                fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
        };
        _this.onMutationStart = function () {
            if (!_this.state.loading && !_this.props.ignoreResults) {
                _this.setState({
                    loading: true,
                    error: undefined,
                    data: undefined,
                    called: true,
                });
            }
        };
        _this.onMutationCompleted = function (response, mutationId) {
            var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
            var data = response.data, errors = response.errors;
            var error = errors && errors.length > 0 ? new __WEBPACK_IMPORTED_MODULE_4_apollo_client__["b" /* ApolloError */]({ graphQLErrors: errors }) : undefined;
            var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
            if (_this.hasMounted && _this.isMostRecentMutation(mutationId) && !ignoreResults) {
                _this.setState({ loading: false, data: data, error: error }, callOncomplete);
            }
            else {
                callOncomplete();
            }
        };
        _this.onMutationError = function (error, mutationId) {
            var onError = _this.props.onError;
            var callOnError = function () { return (onError ? onError(error) : null); };
            if (_this.hasMounted && _this.isMostRecentMutation(mutationId)) {
                _this.setState({ loading: false, error: error }, callOnError);
            }
            else {
                callOnError();
            }
        };
        _this.generateNewMutationId = function () {
            _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
            return _this.mostRecentMutationId;
        };
        _this.isMostRecentMutation = function (mutationId) {
            return _this.mostRecentMutationId === mutationId;
        };
        _this.verifyDocumentIsMutation = function (mutation) {
            var operation = parser(mutation);
             false ? invariant(operation.type === DocumentType.Mutation) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(operation.type === DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === DocumentType.Query ? 'query' : 'subscription') + ".");
        };
        _this.client = getClient(props, context);
        _this.verifyDocumentIsMutation(props.mutation);
        _this.mostRecentMutationId = 0;
        _this.state = initialState;
        return _this;
    }
    Mutation.prototype.componentDidMount = function () {
        this.hasMounted = true;
    };
    Mutation.prototype.componentWillUnmount = function () {
        this.hasMounted = false;
    };
    Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.props.mutation !== nextProps.mutation) {
            this.verifyDocumentIsMutation(nextProps.mutation);
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.setState(initialState);
        }
    };
    Mutation.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
        var result = {
            called: called,
            loading: loading,
            data: data,
            error: error,
            client: this.client,
        };
        return children(this.runMutation, result);
    };
    Mutation.contextTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        operations: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    };
    Mutation.propTypes = {
        mutation: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
        variables: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        optimisticResponse: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        refetchQueries: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([
            Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]])),
            __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        ]),
        awaitRefetchQueries: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
        update: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
        onCompleted: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        onError: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        fetchPolicy: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    };
    return Mutation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var Subscription = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(Subscription, _super);
    function Subscription(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initialize = function (props) {
            if (_this.queryObservable)
                return;
            _this.queryObservable = _this.client.subscribe({
                query: props.subscription,
                variables: props.variables,
                fetchPolicy: props.fetchPolicy,
            });
        };
        _this.startSubscription = function () {
            if (_this.querySubscription)
                return;
            _this.querySubscription = _this.queryObservable.subscribe({
                next: _this.updateCurrentData,
                error: _this.updateError,
                complete: _this.completeSubscription
            });
        };
        _this.getInitialState = function () { return ({
            loading: true,
            error: undefined,
            data: undefined,
        }); };
        _this.updateCurrentData = function (result) {
            var _a = _this, client = _a.client, onSubscriptionData = _a.props.onSubscriptionData;
            _this.setState({
                data: result.data,
                loading: false,
                error: undefined,
            });
            if (onSubscriptionData)
                onSubscriptionData({ client: client, subscriptionData: result });
        };
        _this.updateError = function (error) {
            _this.setState({
                error: error,
                loading: false,
            });
        };
        _this.completeSubscription = function () {
            var onSubscriptionComplete = _this.props.onSubscriptionComplete;
            if (onSubscriptionComplete)
                onSubscriptionComplete();
            _this.endSubscription();
        };
        _this.endSubscription = function () {
            if (_this.querySubscription) {
                _this.querySubscription.unsubscribe();
                delete _this.querySubscription;
            }
        };
        _this.client = getClient(props, context);
        _this.initialize(props);
        _this.state = _this.getInitialState();
        return _this;
    }
    Subscription.prototype.componentDidMount = function () {
        this.startSubscription();
    };
    Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props.variables, nextProps.variables) &&
            this.client === nextClient &&
            this.props.subscription === nextProps.subscription) {
            return;
        }
        var shouldResubscribe = nextProps.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
        }
        var shouldNotResubscribe = shouldResubscribe === false;
        if (this.client !== nextClient) {
            this.client = nextClient;
        }
        if (!shouldNotResubscribe) {
            this.endSubscription();
            delete this.queryObservable;
            this.initialize(nextProps);
            this.startSubscription();
            this.setState(this.getInitialState());
            return;
        }
        this.initialize(nextProps);
        this.startSubscription();
    };
    Subscription.prototype.componentWillUnmount = function () {
        this.endSubscription();
    };
    Subscription.prototype.render = function () {
        var renderFn = this.props.children;
        if (!renderFn)
            return null;
        var result = Object.assign({}, this.state, {
            variables: this.props.variables,
        });
        return renderFn(result);
    };
    Subscription.contextTypes = {
        client: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    };
    Subscription.propTypes = {
        subscription: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
        variables: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        onSubscriptionData: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        onSubscriptionComplete: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        shouldResubscribe: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]]),
    };
    return Subscription;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var defaultMapPropsToOptions = function () { return ({}); };
var defaultMapPropsToSkip = function () { return false; };
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function calculateVariablesFromProps(operation, props) {
    var variables = {};
    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
        var _b = _a[_i], variable = _b.variable, type = _b.type;
        if (!variable.name || !variable.name.value)
            continue;
        var variableName = variable.name.value;
        var variableProp = props[variableName];
        if (typeof variableProp !== 'undefined') {
            variables[variableName] = variableProp;
            continue;
        }
        if (type.kind !== 'NonNullType') {
            variables[variableName] = undefined;
        }
    }
    return variables;
}
var GraphQLBase = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(GraphQLBase, _super);
    function GraphQLBase(props) {
        var _this = _super.call(this, props) || this;
        _this.withRef = false;
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
    }
    GraphQLBase.prototype.getWrappedInstance = function () {
         false ? invariant(this.withRef) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
        return this.wrappedInstance;
    };
    GraphQLBase.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
    };
    return GraphQLBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

function withQuery(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') {
        mapPropsToOptions = function () { return options; };
    }
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') {
        mapPropsToSkip = function () { return skip; };
    }
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, mapPropsToOptions(props));
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Query, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                    var _b, _c;
                    var _ = _a.client, data = _a.data, r = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__rest"])(_a, ["client", "data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip) {
                        return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics___default()(GraphQL, WrappedComponent, {});
    };
}

function withMutation(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var props = this.props;
                var opts = mapPropsToOptions(props);
                if (operationOptions.withRef) {
                    this.withRef = true;
                    props = Object.assign({}, props, {
                        ref: this.setWrappedInstance,
                    });
                }
                if (!opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Mutation, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _a) {
                    var _b, _c;
                    var data = _a.data, r = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__rest"])(_a, ["data"]);
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'mutate';
                    var resultName = operationOptions.name ? name + "Result" : 'result';
                    var childProps = (_b = {}, _b[name] = mutate, _b[resultName] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = mutate,
                            _c[resultName] = result,
                            _c.ownProps = props,
                            _c);
                        childProps = operationOptions.props(newResult);
                    }
                    return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics___default()(GraphQL, WrappedComponent, {});
    };
}

function withSubscription(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(GraphQL, _super);
            function GraphQL(props) {
                var _this = _super.call(this, props) || this;
                _this.state = { resubscribe: false };
                return _this;
            }
            GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                if (!shouldResubscribe)
                    return;
                this.setState({
                    resubscribe: shouldResubscribe(this.props, nextProps),
                });
            };
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Subscription, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                    var _b, _c;
                    var data = _a.data, r = Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__rest"])(_a, ["data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip) {
                        return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics___default()(GraphQL, WrappedComponent, {});
    };
}

function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (parser(document).type) {
        case DocumentType.Mutation:
            return withMutation(document, operationOptions);
        case DocumentType.Subscription:
            return withSubscription(document, operationOptions);
        case DocumentType.Query:
        default:
            return withQuery(document, operationOptions);
    }
}

function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(WithApollo, _super);
        function WithApollo(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
             false ? invariant(operationOptions.withRef) : Object(__WEBPACK_IMPORTED_MODULE_2_ts_invariant__["b" /* invariant */])(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var _this = this;
            return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ApolloConsumer, null, function (client) {
                var props = Object.assign({}, _this.props, {
                    client: client,
                    ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                });
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, props));
            }));
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        return WithApollo;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
    return __WEBPACK_IMPORTED_MODULE_6_hoist_non_react_statics___default()(WithApollo, WrappedComponent, {});
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null,
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (queryInstance, observable) {
        this.lookupQueryInfo(queryInstance).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (queryInstance) {
        return this.lookupQueryInfo(queryInstance).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance);
        if (!info.seen) {
            this.queryPromises.set(queryInstance, new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (queryInstance) {
        var queryInfoTrie = this.queryInfoTrie;
        var _a = queryInstance.props, query = _a.query, variables = _a.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());
function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__("./node_modules/react-dom/server.browser.js").renderToStaticMarkup,
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__("./node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new RenderPromises();
    var RenderPromisesProvider = (function (_super) {
        Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(RenderPromisesProvider, _super);
        function RenderPromisesProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderPromisesProvider.prototype.getChildContext = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__assign"])({}, context, { renderPromises: renderPromises });
        };
        RenderPromisesProvider.prototype.render = function () {
            return tree;
        };
        RenderPromisesProvider.childContextTypes = {
            renderPromises: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        };
        return RenderPromisesProvider;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
    Object.keys(context).forEach(function (key) {
        RenderPromisesProvider.childContextTypes[key] = __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"];
    });
    function process() {
        var html = renderFunction(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(RenderPromisesProvider));
        return renderPromises.hasPromises()
            ? renderPromises.consumeAndAwaitPromises().then(process)
            : html;
    }
    return Promise.resolve().then(process);
}

function renderToStringWithData(component) {
    return getMarkupFromTree({
        tree: component,
        renderFunction: __webpack_require__("./node_modules/react-dom/server.browser.js").renderToString,
    });
}

function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    var functions = funcs.reverse();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var firstFunction = functions[0], restFunctions = functions.slice(1);
        var result = firstFunction.apply(null, args);
        restFunctions.forEach(function (fnc) {
            result = fnc.call(null, result);
        });
        return result;
    };
}


//# sourceMappingURL=react-apollo.esm.js.map


/***/ })

})
//# sourceMappingURL=6.d28a8f23840ab0f7d978.hot-update.js.map