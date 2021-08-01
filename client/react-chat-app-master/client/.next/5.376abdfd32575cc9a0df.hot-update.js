webpackHotUpdate(5,{

/***/ "./components/AuthenticatedUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_redirect__ = __webpack_require__("./lib/redirect.js");
var _jsxFileName = "Y:\\Projects\\react-chat-app-master\\client\\components\\AuthenticatedUser.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query me {\n    me {\n      id\n      username\n    }\n  }\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ME = Object(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__["a" /* default */])(_templateObject);

var AuthenticatedUser = function AuthenticatedUser(_ref) {
  var children = _ref.children;

  var _logout = function logout(apolloClient) {
    document.cookie = __WEBPACK_IMPORTED_MODULE_3_cookie___default.a.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately

    }); // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.

    apolloClient.cache.reset().then(function () {
      // Redirect to a more useful page when signed out
      Object(__WEBPACK_IMPORTED_MODULE_4__lib_redirect__["a" /* default */])({}, "/");
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["a" /* ApolloConsumer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, function (client) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
      query: ME,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, function (_ref2) {
      var loading = _ref2.loading,
          error = _ref2.error,
          data = _ref2.data;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, children({
        isAuthenticated: !loading && !error && data,
        logout: function logout() {
          return _logout(client);
        },
        loading: loading,
        error: error,
        data: data
      }));
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (AuthenticatedUser);

/***/ }),

/***/ "./node_modules/react-apollo/react-apollo.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloConsumer; });
/* unused harmony export ApolloContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Query; });
/* unused harmony export RenderPromises */
/* unused harmony export Subscription */
/* unused harmony export compose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDataFromTree; });
/* unused harmony export getMarkupFromTree */
/* unused harmony export graphql */
/* unused harmony export renderToStringWithData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return withApollo; });
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


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AuthenticatedUser__ = __webpack_require__("./components/AuthenticatedUser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ui_Avatar__ = __webpack_require__("./components/ui/Avatar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_SearchInput__ = __webpack_require__("./components/SearchInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ConversationList__ = __webpack_require__("./components/ConversationList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_UserList__ = __webpack_require__("./components/UserList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Conversation__ = __webpack_require__("./components/Conversation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_randomEmoji__ = __webpack_require__("./utils/randomEmoji.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_queries_myConversations__ = __webpack_require__("./graphql/queries/myConversations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graphql_queries_users__ = __webpack_require__("./graphql/queries/users.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__graphql_mutations_createConversation__ = __webpack_require__("./graphql/mutations/createConversation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__graphql_mutations_sendTextMessage__ = __webpack_require__("./graphql/mutations/sendTextMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__graphql_subscriptions_text__ = __webpack_require__("./graphql/subscriptions/text.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__graphql_subscriptions_user__ = __webpack_require__("./graphql/subscriptions/user.js");

var _jsxFileName = "Y:\\Projects\\react-chat-app-master\\client\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var contexts = {
  CONVERSATION: "CONVERSATION",
  USER: "USER"
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      searchInput: "",
      context: {
        name: null,
        id: null,
        data: {}
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: "renderHeader",
    value: function renderHeader() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_AuthenticatedUser__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, function (_ref) {
        var logout = _ref.logout,
            me = _ref.data.me;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
          className: "my-16 w-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "flex flex-col items-center text-grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "Logged in as ", me.username), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "block text-black mt-2",
          href: "#",
          onClick: function onClick(e) {
            e.preventDefault();
            logout();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Logout")));
      });
    }
  }, {
    key: "renderSearchInput",
    value: function renderSearchInput() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_SearchInput__["a" /* default */], {
        onChange: function onChange(searchInput) {
          _this2.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              searchInput: searchInput
            });
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }
  }, {
    key: "renderConversationList",
    value: function renderConversationList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
        query: __WEBPACK_IMPORTED_MODULE_14__graphql_queries_myConversations__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data,
            subscribeToMore = _ref2.subscribeToMore;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ConversationList__["a" /* default */], _extends({
          onClick: function onClick(conversation) {
            _this3.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                context: {
                  name: contexts.CONVERSATION,
                  id: conversation.id,
                  data: conversation
                }
              });
            });
          }
        }, {
          loading: loading,
          error: error,
          conversations: data.me.conversations.filter(function (conversation) {
            return _this3.state.searchInput !== "" ? conversation.name.toUpperCase().includes(_this3.state.searchInput.toUpperCase()) : conversation;
          })
        }, {
          subscribeToNewConversationMessages: function subscribeToNewConversationMessages() {
            return subscribeToMore({
              document: __WEBPACK_IMPORTED_MODULE_18__graphql_subscriptions_text__["a" /* default */],
              variables: {},
              updateQuery: function updateQuery(prev, _ref3) {
                var subscriptionData = _ref3.subscriptionData;
                if (!subscriptionData.data) return prev;
                var newText = subscriptionData.data.text.node;
                var conversationExists = prev.me.conversations.find(function (conversation) {
                  return conversation.id === newText.conversation.id;
                });

                if (conversationExists) {
                  // Add message to an existing conversation
                  var conversations = prev.me.conversations.map(function (conversation) {
                    if (conversation.id === conversationExists.id) {
                      var chat = newText.conversation;
                      return _objectSpread({}, conversation, {
                        texts: chat.texts
                      });
                    }

                    return conversation;
                  });
                  return _objectSpread({}, prev, {
                    me: _objectSpread({}, prev.me, {
                      conversations: conversations
                    })
                  });
                } else {
                  // Add a new conversation to conversations along with the new message
                  var conversation = newText.conversation;
                  return _objectSpread({}, prev, {
                    me: _objectSpread({}, prev.me, {
                      conversations: _toConsumableArray(prev.me.conversations).concat([conversation])
                    })
                  });
                }
              }
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }));
      });
    }
  }, {
    key: "renderUserList",
    value: function renderUserList() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
        query: __WEBPACK_IMPORTED_MODULE_15__graphql_queries_users__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, function (_ref4) {
        var loading = _ref4.loading,
            error = _ref4.error,
            data = _ref4.data,
            subscribeToMore = _ref4.subscribeToMore;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_UserList__["a" /* default */], _extends({
          onClick: function onClick(user) {
            _this4.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                context: {
                  name: contexts.USER,
                  id: user.id,
                  data: user
                }
              });
            });
          }
        }, {
          loading: loading,
          error: error,
          users: data.users.filter(function (user) {
            return _this4.state.searchInput !== "" ? user.username.toUpperCase().includes(_this4.state.searchInput.toUpperCase()) : user;
          })
        }, {
          subscribeToNewUsers: function subscribeToNewUsers() {
            return subscribeToMore({
              document: __WEBPACK_IMPORTED_MODULE_19__graphql_subscriptions_user__["a" /* default */],
              variables: {},
              updateQuery: function updateQuery(prev, _ref5) {
                var subscriptionData = _ref5.subscriptionData;
                if (!subscriptionData.data) return prev;
                var newUser = subscriptionData.data.user.node;
                return _objectSpread({}, prev, {
                  users: _toConsumableArray(prev.users).concat([newUser])
                });
              }
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }));
      });
    }
  }, {
    key: "renderTextMessageList",
    value: function renderTextMessageList() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
        query: __WEBPACK_IMPORTED_MODULE_14__graphql_queries_myConversations__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, function (_ref6) {
        var loading = _ref6.loading,
            error = _ref6.error,
            data = _ref6.data;
        var conversations = data.me.conversations.map(function (conversation) {
          return _objectSpread({}, conversation, {
            texts: conversation.texts.filter(function (textMessage) {
              return _this5.state.searchInput !== "" ? textMessage.text.toUpperCase().includes(_this5.state.searchInput.toUpperCase()) : false;
            })
          });
        });
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
          className: ["list-reset", _this5.state.searchInput === "" && "hidden"].join(" "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          className: "font-bold m-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, "Messages"), conversations.map(function (conversation) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
            key: conversation.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            }
          }, conversation.texts.map(function (textMessage) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
              key: textMessage.id,
              className: "px-4 py-2 hover:bg-grey-lightest cursor-pointer flex items-center",
              onClick: function onClick(e) {
                _this5.setState(function (prevState) {
                  return _objectSpread({}, prevState, {
                    context: {
                      name: contexts.CONVERSATION,
                      id: conversation.id,
                      data: conversation
                    }
                  });
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 247
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "mr-3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 261
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ui_Avatar__["a" /* default */], {
              initials: conversation.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 262
              }
            })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "text-sm flex-1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 264
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "font-bold",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 265
              }
            }, conversation.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "flex justify-between text-grey-dark",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 266
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "mt-1 w-32 overflow-hidden whitespace-no-wrap",
              style: {
                textOverflow: "ellipsis"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_AuthenticatedUser__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 273
              }
            }, function (_ref7) {
              var isAuthenticated = _ref7.isAuthenticated,
                  me = _ref7.data.me;
              var author = isAuthenticated && me.id === textMessage.author.id ? "You" : textMessage.author.username;
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 281
                }
              }, author, ": ", textMessage.text);
            })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              className: "text-xs text-grey-dark",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 290
              }
            }, __WEBPACK_IMPORTED_MODULE_3_moment___default()(textMessage.createdAt).fromNow()));
          }));
        }));
      });
    }
  }, {
    key: "renderConversationNotSelected",
    value: function renderConversationNotSelected() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "flex-1 flex flex-col h-full items-center justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-5xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, Object(__WEBPACK_IMPORTED_MODULE_13__utils_randomEmoji__["a" /* default */])()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mt-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, "Coding is awesome!"));
    }
  }, {
    key: "renderConversations",
    value: function renderConversations() {
      var context = this.state.context;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["c" /* Mutation */], {
        mutation: __WEBPACK_IMPORTED_MODULE_17__graphql_mutations_sendTextMessage__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, function (sendTextMessage, _ref8) {
        var loading = _ref8.loading,
            error = _ref8.error,
            data = _ref8.data;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
          query: __WEBPACK_IMPORTED_MODULE_14__graphql_queries_myConversations__["a" /* default */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        }, function (_ref9) {
          var loading = _ref9.loading,
              error = _ref9.error,
              data = _ref9.data;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            }
          }, data.me.conversations.map(function (conversation) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
              key: conversation.id,
              className: ["h-full", context.name === contexts.CONVERSATION && context.id === conversation.id ? "block" : "hidden"].join(" "),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 322
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Conversation__["a" /* default */], {
              conversation: conversation,
              onTextMessageSend: function onTextMessageSend(text) {
                sendTextMessage({
                  variables: {
                    conversationId: conversation.id,
                    text: text
                  }
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 332
              }
            }));
          }));
        });
      });
    }
  }, {
    key: "renderWindowsFromContext",
    value: function renderWindowsFromContext(_ref10) {
      var _this6 = this;

      var me = _ref10.me;
      var renderWindow;
      var context = this.state.context;

      if (!context.name) {
        renderWindow = this.renderConversationNotSelected();
      }

      if (context.name === contexts.USER) {
        var conversationExists = me.conversations.find(function (conversation) {
          return conversation.participants.length === 2 && conversation.participants.find(function (participant) {
            return participant.id === context.id;
          });
        });

        if (conversationExists) {
          this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              context: {
                name: contexts.CONVERSATION,
                id: conversationExists.id,
                data: conversationExists
              }
            });
          });
        } else {
          renderWindow = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["c" /* Mutation */], {
            mutation: __WEBPACK_IMPORTED_MODULE_16__graphql_mutations_createConversation__["a" /* default */],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 381
            }
          }, function (createConversation, _ref11) {
            var loading = _ref11.loading,
                error = _ref11.error,
                data = _ref11.data;
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Conversation__["a" /* default */], {
              conversation: {
                id: null,
                name: context.data.username,
                participants: [],
                texts: []
              },
              onTextMessageSend: function onTextMessageSend(text) {
                createConversation({
                  variables: {
                    name: null,
                    participantIds: [context.id],
                    text: text
                  }
                }).then(function (_ref12) {
                  var data = _ref12.data;

                  _this6.setState(function (prevState) {
                    return _objectSpread({}, prevState, {
                      context: {
                        name: contexts.CONVERSATION,
                        id: data.createConversation.id,
                        data: data.createConversation
                      }
                    });
                  });
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 383
              }
            });
          });
        }
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, renderWindow, this.renderConversations());
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "flex flex-col justify-center items-center h-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, this.renderHeader(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "w-2/3 rounded border flex bg-white overflow-hidden",
        style: {
          height: 500
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "leftTile",
        className: "w-1/3 border-r flex flex-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "search",
        className: "h-16 border-b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, this.renderSearchInput()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "flex-1 overflow-y-scroll scrolling-touch py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, this.renderConversationList(), this.renderUserList(), this.renderTextMessageList())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "rightTile",
        className: "w-2/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["d" /* Query */], {
        query: __WEBPACK_IMPORTED_MODULE_14__graphql_queries_myConversations__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, function (_ref13) {
        var loading = _ref13.loading,
            error = _ref13.error,
            data = _ref13.data;
        return _this7.renderWindowsFromContext({
          me: data.me
        });
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context, apolloClient) {
        var _ref14, me;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__lib_checkLoggedIn__["a" /* default */])(context.apolloClient);

              case 2:
                _ref14 = _context.sent;
                me = _ref14.me;

                if (!me) {
                  // If not signed in, send them somewhere more useful
                  Object(__WEBPACK_IMPORTED_MODULE_4__lib_redirect__["a" /* default */])(context, "/signup");
                }

                return _context.abrupt("return", {
                  me: me
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x, _x2) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.376abdfd32575cc9a0df.hot-update.js.map