module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SignupForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_mutations_signup__ = __webpack_require__("./graphql/mutations/signup.js");
var _jsxFileName = "Y:\\Projects\\react-chat-app-master\\client\\components\\SignupForm.js";







var Signup = function Signup(_ref) {
  var client = _ref.client;
  var input;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["withApollo"])(Signup));

/***/ }),

/***/ "./graphql/mutations/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation signup($username: String!) {\n    signup(username: $username) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n        query me {\n          me {\n            id\n            username\n          }\n        }\n      "]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["a"] = (function (apolloClient) {
  return apolloClient.query({
    query: __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject)
  }).then(function (_ref) {
    var data = _ref.data;
    return {
      me: data.me
    };
  }).catch(function () {
    // Fail gracefully
    return {
      me: null
    };
  });
});

/***/ }),

/***/ "./lib/redirect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);

/* harmony default export */ __webpack_exports__["a"] = (function (context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace(target);
  }
});

/***/ }),

/***/ "./pages/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SignupForm__ = __webpack_require__("./components/SignupForm.js");

var _jsxFileName = "Y:\\Projects\\react-chat-app-master\\client\\pages\\signup.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SignupPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignupPage, _React$Component);

  function SignupPage(props) {
    _classCallCheck(this, SignupPage);

    return _possibleConstructorReturn(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).call(this, props));
  }

  _createClass(SignupPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "flex flex-col justify-center items-center h-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "w-1/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_SignupForm__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context, apolloClient) {
        var _ref, me;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__["a" /* default */])(context.apolloClient);

              case 2:
                _ref = _context.sent;
                me = _ref.me;

                if (me) {
                  Object(__WEBPACK_IMPORTED_MODULE_2__lib_redirect__["a" /* default */])(context, "/");
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

  return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/signup.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cookie":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map