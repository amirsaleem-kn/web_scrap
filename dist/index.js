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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar app = __webpack_require__(/*! ./public/app */ \"./public/app/index.js\");\nvar port = Object({\"NODE_ENV\":'development'}).PORT || 5000;\nvar Logger = __webpack_require__(/*! ./lib/logger */ \"./lib/logger/index.js\");\n__webpack_require__(/*! ./public/routes */ \"./public/routes/index.js\");\n__webpack_require__(/*! ./public/middlewares */ \"./public/middlewares/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\napp.use(express.static('public'));\napp.listen(port, function () {\n    Logger.generic('Server listening to port: ' + port);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/logger/index.js":
/*!*****************************!*\
  !*** ./lib/logger/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\nvar environment = 'development';\nvar _error = chalk.bold.red;\nvar _warning = chalk.keyword('orange');\n\nvar Logger = function () {\n    function Logger() {\n        _classCallCheck(this, Logger);\n    }\n\n    _createClass(Logger, null, [{\n        key: 'generic',\n        value: function generic(message) {\n            console.log(message);\n        }\n    }, {\n        key: 'log',\n        value: function log(message) {\n            if (environment != 'production') {\n                console.log(message);\n            }\n        }\n    }, {\n        key: 'highlight',\n        value: function highlight(message) {\n            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'green';\n\n            if (environment != 'production') {\n                console.log(chalk.keyword(color)(message));\n            }\n        }\n    }, {\n        key: 'error',\n        value: function error(message) {\n            if (typeof message == 'string') {\n                console.error(_error('[Error]: ' + message));\n            } else {\n                console.error(_error(message));\n            }\n        }\n    }, {\n        key: 'warning',\n        value: function warning(message) {\n            if (environment != 'production') {\n                console.log(_warning('[Warning]: ' + message));\n            }\n        }\n    }]);\n\n    return Logger;\n}();\n\nmodule.exports = Logger;\n\n//# sourceURL=webpack:///./lib/logger/index.js?");

/***/ }),

/***/ "./public/app/index.js":
/*!*****************************!*\
  !*** ./public/app/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\nmodule.exports = app;\n\n//# sourceURL=webpack:///./public/app/index.js?");

/***/ }),

/***/ "./public/client/src/actions/index.js":
/*!********************************************!*\
  !*** ./public/client/src/actions/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.handleAdminLogin = handleAdminLogin;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction handleAdminLogin(username, password) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n            var url, res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            url = '/auth/admin';\n                            _context.next = 3;\n                            return _axios2.default.post(url);\n\n                        case 3:\n                            res = _context.sent;\n\n                            dispatch({ type: 'ADMIN_LOGIN', payload: res });\n\n                        case 5:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, this);\n        }));\n\n        return function (_x) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n}\n\n//# sourceURL=webpack:///./public/client/src/actions/index.js?");

/***/ }),

/***/ "./public/client/src/index.js":
/*!************************************!*\
  !*** ./public/client/src/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./modules/containers/App */ \"./public/client/src/modules/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (typeof window !== 'undefined') _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./public/client/src/index.js?");

/***/ }),

/***/ "./public/client/src/modules/components/Test.js":
/*!******************************************************!*\
  !*** ./public/client/src/modules/components/Test.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Test = function (_Component) {\n    _inherits(Test, _Component);\n\n    function Test() {\n        _classCallCheck(this, Test);\n\n        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));\n    }\n\n    _createClass(Test, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'Hello World'\n            );\n        }\n    }]);\n\n    return Test;\n}(_react.Component);\n\nexports.default = Test;\n\n//# sourceURL=webpack:///./public/client/src/modules/components/Test.js?");

/***/ }),

/***/ "./public/client/src/modules/containers/AdminLogin.js":
/*!************************************************************!*\
  !*** ./public/client/src/modules/containers/AdminLogin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./public/client/src/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AdminLogin = function (_Component) {\n    _inherits(AdminLogin, _Component);\n\n    function AdminLogin(props) {\n        _classCallCheck(this, AdminLogin);\n\n        var _this = _possibleConstructorReturn(this, (AdminLogin.__proto__ || Object.getPrototypeOf(AdminLogin)).call(this, props));\n\n        _this.state = {\n            username: 'amirsaleem96',\n            password: null\n        };\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n        return _this;\n    }\n\n    _createClass(AdminLogin, [{\n        key: 'onFormChange',\n        value: function onFormChange(e, type) {\n            console.log(type);\n            if (type == 'username') {\n                this.setState({ username: e.target.value });\n            } else if (type == 'password') {\n                this.setState({ password: e.target.value });\n            }\n        }\n    }, {\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            console.log('here');\n            e.preventDefault();\n            this.props.handleAdminLogin(this.state.username, this.state.password);\n            alert('something went wrong');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: this.handleSubmit },\n                    _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: function onChange(e) {\n                            return _this2.onFormChange.bind(_this2, e, 'username');\n                        } }),\n                    _react2.default.createElement('input', { type: 'password', value: this.state.password, onChange: function onChange(e) {\n                            return _this2.onFormChange.bind(_this2, e, 'password');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            alert('yes');\n                        } },\n                    'Login'\n                )\n            );\n        }\n    }]);\n\n    return AdminLogin;\n}(_react.Component);\n\nfunction mapDispatchToProps(dispatch) {\n    return (0, _redux.bindActionCreators)({ handleAdminLogin: _actions.handleAdminLogin }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(AdminLogin);\n\n//# sourceURL=webpack:///./public/client/src/modules/containers/AdminLogin.js?");

/***/ }),

/***/ "./public/client/src/modules/containers/App.js":
/*!*****************************************************!*\
  !*** ./public/client/src/modules/containers/App.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reduxPromise = __webpack_require__(/*! redux-promise */ \"redux-promise\");\n\nvar _reduxPromise2 = _interopRequireDefault(_reduxPromise);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ../../reducers */ \"./public/client/src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _Test = __webpack_require__(/*! ../components/Test */ \"./public/client/src/modules/components/Test.js\");\n\nvar _Test2 = _interopRequireDefault(_Test);\n\nvar _AdminLogin = __webpack_require__(/*! ../containers/AdminLogin */ \"./public/client/src/modules/containers/AdminLogin.js\");\n\nvar _AdminLogin2 = _interopRequireDefault(_AdminLogin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRedux.Provider,\n                { store: createStoreWithMiddleware(_reducers2.default) },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Header Menu'\n                    ),\n                    _react2.default.createElement(\n                        _reactRouterDom.Switch,\n                        null,\n                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Test2.default }),\n                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/auth/admin', component: _AdminLogin2.default })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./public/client/src/modules/containers/App.js?");

/***/ }),

/***/ "./public/client/src/reducers/index.js":
/*!*********************************************!*\
  !*** ./public/client/src/reducers/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar rootReducers = (0, _redux.combineReducers)({\n    blank: function blank(state, action) {\n        if (state == null) state = [];return state;\n    }\n});\n\nexports.default = rootReducers;\n\n//# sourceURL=webpack:///./public/client/src/reducers/index.js?");

/***/ }),

/***/ "./public/client/views/Html.js":
/*!*************************************!*\
  !*** ./public/client/views/Html.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Html = function Html(_ref) {\n  var body = _ref.body,\n      title = _ref.title,\n      scriptSrc = _ref.scriptSrc;\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\" + title + \"</title>\\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n    <script src = \\\"/public/client/dist/bundle.js\\\"></script>\\n  </html>\\n\";\n};\n\nexports.default = Html;\n\n//# sourceURL=webpack:///./public/client/views/Html.js?");

/***/ }),

/***/ "./public/middlewares/index.js":
/*!*************************************!*\
  !*** ./public/middlewares/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar app = __webpack_require__(/*! ../app */ \"./public/app/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n//app.use('/public', express.static(`../client`));\n\n//# sourceURL=webpack:///./public/middlewares/index.js?");

/***/ }),

/***/ "./public/routes/index.js":
/*!********************************!*\
  !*** ./public/routes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = __webpack_require__(/*! ../app */ \"./public/app/index.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _Html = __webpack_require__(/*! ../client/views/Html */ \"./public/client/views/Html.js\");\n\nvar _Html2 = _interopRequireDefault(_Html);\n\nvar _App = __webpack_require__(/*! ../client/src/modules/containers/App */ \"./public/client/src/modules/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n_app2.default.get('/', function (req, res) {\n  var body = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: {} },\n    _react2.default.createElement(_App2.default, null)\n  ));\n  var title = 'Server side Rendering with Styled Components';\n  res.send((0, _Html2.default)({\n    body: body,\n    title: title,\n    scriptSrc: '/public/client/dist/bundle.js'\n  }));\n});\n\n//# sourceURL=webpack:///./public/routes/index.js?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./index.js ./public/client/src/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.js */\"./index.js\");\nmodule.exports = __webpack_require__(/*! ./public/client/src/index.js */\"./public/client/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js_./public/client/src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-promise\");\n\n//# sourceURL=webpack:///external_%22redux-promise%22?");

/***/ })

/******/ });