!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/public/client",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";var n=f(r(0)),o=f(r(3)),u=r(4),i=r(5),c=f(r(6)),l=f(r(8));function f(e){return e&&e.__esModule?e:{default:e}}var a=(0,i.applyMiddleware)(ReduxPromise)(i.createStore);o.default.render(n.default.createElement(u.Provider,{store:a(c.default)},n.default.createElement(l.default,null)),document.getElementById("app"))},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux-promise")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(7).combinedReducers)({});t.default=n},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=l(o),i=r(9),c=l(r(10));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){return u.default.createElement(i.BrowserRouter,null,u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{exact:!0,path:"/",component:c.default})))}}]),t}();t.default=f},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return React.createElement("div",null,"Test")}}]);