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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./etc/keys/dev.js":
/*!*************************!*\
  !*** ./etc/keys/dev.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * [Warning] This file contains protected keys\n */\n\nvar keys = {\n    mysql: {\n        //password: 'JChKzRqFbvFUaSB/FGSth9Ll/UAGcrEbC28LDELYfECWOIKzZ7ZjtCGAaOzx9Fi8/ynyvjiKoA+pOqMnWURiEfzmsTlrrYok1wHRLPMFB6tLVEz/CrMgVF2a2IYZshjDE2SEXa81JAsbP3ya85QkcI1pmfQlsxkrpMFCjGjvP28='\n        password: 'amirsaleem96'\n    },\n    server_key: '*lj35344k%32kkdjf3'\n};\n\nmodule.exports = keys;\n\n//# sourceURL=webpack:///./etc/keys/dev.js?");

/***/ }),

/***/ "./etc/keys/index.js":
/*!***************************!*\
  !*** ./etc/keys/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./dev */ \"./etc/keys/dev.js\");\n}\n\n//# sourceURL=webpack:///./etc/keys/index.js?");

/***/ }),

/***/ "./etc/settings/dev.js":
/*!*****************************!*\
  !*** ./etc/settings/dev.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys = __webpack_require__(/*! ../keys */ \"./etc/keys/index.js\");\nvar application_settings = {\n    mysql: {\n        user: 'root',\n        password: keys.mysql.password,\n        database: 'testdb',\n        host: 'localhost',\n        connectionTimeout: 2 * 60 * 1000,\n        timeout: 120000,\n        multipleStatements: true,\n        connectionLimit: 20\n    },\n    authExpiry: 2 * 60 * 1000\n};\n\nmodule.exports = application_settings;\n\n//# sourceURL=webpack:///./etc/settings/dev.js?");

/***/ }),

/***/ "./etc/settings/index.js":
/*!*******************************!*\
  !*** ./etc/settings/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./dev */ \"./etc/settings/dev.js\");\n}\n\n//# sourceURL=webpack:///./etc/settings/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar app = __webpack_require__(/*! ./public/app */ \"./public/app/index.js\");\nvar port = Object({\"NODE_ENV\":'development'}).PORT || 5000;\nvar Logger = __webpack_require__(/*! ./lib/logger */ \"./lib/logger/index.js\");\nvar Database = __webpack_require__(/*! ./public/services/database */ \"./public/services/database/index.js\");\n__webpack_require__(/*! ./public/routes */ \"./public/routes/index.js\");\n__webpack_require__(/*! ./public/middlewares */ \"./public/middlewares/index.js\");\napp.listen(port, function () {\n    Logger.generic('Server listening to port: ' + port);\n});\n\n//# sourceURL=webpack:///./index.js?");

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

/***/ "./public/client/src/components/App.js":
/*!*********************************************!*\
  !*** ./public/client/src/components/App.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reduxPromise = __webpack_require__(/*! redux-promise */ \"redux-promise\");\n\nvar _reduxPromise2 = _interopRequireDefault(_reduxPromise);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ../reducers */ \"./public/client/src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _Test = __webpack_require__(/*! ./Test */ \"./public/client/src/components/Test.js\");\n\nvar _Test2 = _interopRequireDefault(_Test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRedux.Provider,\n                { store: createStoreWithMiddleware(_reducers2.default) },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Header Menu'\n                    ),\n                    _react2.default.createElement(\n                        _reactRouterDom.Switch,\n                        null,\n                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Test2.default })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./public/client/src/components/App.js?");

/***/ }),

/***/ "./public/client/src/components/Test.js":
/*!**********************************************!*\
  !*** ./public/client/src/components/Test.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Test = function (_Component) {\n    _inherits(Test, _Component);\n\n    function Test() {\n        _classCallCheck(this, Test);\n\n        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));\n    }\n\n    _createClass(Test, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'Hello World'\n            );\n        }\n    }]);\n\n    return Test;\n}(_react.Component);\n\nexports.default = Test;\n\n//# sourceURL=webpack:///./public/client/src/components/Test.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Html = function Html(_ref) {\n  var body = _ref.body,\n      title = _ref.title;\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\" + title + \"</title>\\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n  </html>\\n\";\n};\n\nexports.default = Html;\n\n//# sourceURL=webpack:///./public/client/views/Html.js?");

/***/ }),

/***/ "./public/middlewares/index.js":
/*!*************************************!*\
  !*** ./public/middlewares/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar app = __webpack_require__(/*! ../app */ \"./public/app/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\napp.use('../client', express.static(__dirname + '/public/client'));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./public/middlewares/index.js?");

/***/ }),

/***/ "./public/routes/index.js":
/*!********************************!*\
  !*** ./public/routes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = __webpack_require__(/*! ../app */ \"./public/app/index.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _Html = __webpack_require__(/*! ../client/views/Html */ \"./public/client/views/Html.js\");\n\nvar _Html2 = _interopRequireDefault(_Html);\n\nvar _App = __webpack_require__(/*! ../client/src/components/App */ \"./public/client/src/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_app2.default.get('*', function (req, res) {\n  var body = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: {} },\n    _react2.default.createElement(_App2.default, null)\n  ));\n  var title = 'Server side Rendering with Styled Components';\n  res.send((0, _Html2.default)({\n    body: body,\n    title: title\n  }));\n});\n\n//# sourceURL=webpack:///./public/routes/index.js?");

/***/ }),

/***/ "./public/services/database/index.js":
/*!*******************************************!*\
  !*** ./public/services/database/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar Logger = __webpack_require__(/*! ../../../lib/logger */ \"./lib/logger/index.js\");\nvar settings = __webpack_require__(/*! ../../../etc/settings */ \"./etc/settings/index.js\");\nvar Email = __webpack_require__(/*! ../email */ \"./public/services/email/index.js\");\nvar poolConfig = {\n    user: settings.mysql.user,\n    password: settings.mysql.password,\n    database: settings.mysql.database,\n    host: settings.mysql.host,\n    connectionTimeout: settings.mysql.connectionTimeout,\n    timeout: settings.mysql.timeout,\n    multipleStatements: settings.mysql.multipleStatements,\n    connectionLimit: settings.mysql.connectionLimit\n};\n\nvar pool = mysql.createPool(poolConfig);\n\nvar Database = function () {\n    function Database() {\n        _classCallCheck(this, Database);\n    }\n\n    _createClass(Database, null, [{\n        key: 'getConnection',\n        value: function getConnection(callback, retryCount) {\n            var _this = this;\n\n            retryCount ? retryCount = retryCount : retryCount = 0;\n            var retryErrorCodes = ['PROTOCOL_CONNECTION_LOST', 'PROTOCOL_SEQUENCE_TIMEOUT'];\n            pool.getConnection(function (err, connection) {\n                if (err) {\n                    if (retryErrorCodes.indexOf(err.code > -1) && retryCount <= 3) {\n                        retryCount += 1;\n                        return _this.getConnection(callback, retryCount);\n                    }\n                    handleDBError(err);\n                    callback(err);\n                    return;\n                }\n                callback(null, connection);\n            });\n        }\n    }, {\n        key: 'executeQuery',\n        value: function executeQuery(options, callback) {\n            var connection = options.connection,\n                query = options.query,\n                queryArray = options.queryArray;\n\n            connection.query(query, queryArray, function (err, data) {\n                if (err) {\n                    handleDBError(err, connection);\n                    callback(err);\n                    return;\n                }\n                callback(null, data);\n            });\n        }\n    }, {\n        key: 'transactionService',\n        value: function transactionService(connection, callback) {\n            connection.beginTransaction(function (err) {\n                if (err) {\n                    handleDBError(err, connection);\n                    callback(err);\n                    return;\n                }\n                callback(null);\n            });\n        }\n    }, {\n        key: 'commitTransaction',\n        value: function commitTransaction(connection, callback) {\n            connection.commit(function (err) {\n                if (err) {\n                    handleDBError(err, connection);\n                    callback(err);\n                    return;\n                }\n                callback(null);\n            });\n        }\n    }, {\n        key: 'rollbackTransaction',\n        value: function rollbackTransaction(connection, callback) {\n            connection.rollback(function (err) {\n                if (err) {\n                    handleDBError(err, connection);\n                    callback(err);\n                    return;\n                }\n                callback();\n            });\n        }\n    }]);\n\n    return Database;\n}();\n\nfunction handleDBError(err, connection) {\n    Logger.error(err);\n    if (connection) {\n        connection.release();\n    }\n    var mailOptions = {\n        from: 'developer.amirsaleem@gmail.com',\n        cc: 'amirsaleem96@gmail.com',\n        to: 'developer.amirsaleem@gmail.com',\n        subject: 'Database Error',\n        text: err\n    };\n    //Email.sendMail(mailOptions);\n}\n\nmodule.exports = Database;\n\n//# sourceURL=webpack:///./public/services/database/index.js?");

/***/ }),

/***/ "./public/services/email/index.js":
/*!****************************************!*\
  !*** ./public/services/email/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Logger = __webpack_require__(/*! ../../../lib/logger */ \"./lib/logger/index.js\");\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar transporter = nodemailer.createTransport({\n    service: 'gmail',\n    auth: {\n        user: 'developer.amirsaleem@gmail.com',\n        pass: '#Lm%d0642cd'\n    }\n});\n\n// transporter.verify(function(error, success) {\n//     if (error) {\n//         Logger.error(error);\n//     } else {\n//          Logger.log('Server is ready to take our messages');\n//     }\n// });\n\nvar Email = function () {\n    function Email() {\n        _classCallCheck(this, Email);\n    }\n\n    _createClass(Email, null, [{\n        key: 'sendMail',\n        value: function sendMail(mailOptions) {\n            transporter.sendMail(mailOptions, function (err, info) {\n                if (err) {\n                    console.log(err);\n                } else {\n                    console.log(info);\n                }\n            });\n        }\n    }]);\n\n    return Email;\n}();\n\nmodule.exports = Email;\n\n//# sourceURL=webpack:///./public/services/email/index.js?");

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

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

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