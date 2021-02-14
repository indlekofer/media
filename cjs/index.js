"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TYPE_CHANGE", {
  enumerable: true,
  get: function get() {
    return _constants.TYPE_CHANGE;
  }
});
Object.defineProperty(exports, "TYPE_CHANGE_ALL", {
  enumerable: true,
  get: function get() {
    return _constants.TYPE_CHANGE_ALL;
  }
});
Object.defineProperty(exports, "REDUCER", {
  enumerable: true,
  get: function get() {
    return _constants.REDUCER;
  }
});
exports.handleChangeAll = exports.handleChange = exports.unset = exports.setup = void 0;

var _reduxStore = _interopRequireWildcard(require("@indlekofer/redux-store"));

var _constants = require("./constants");

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var setup = function setup() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0, _reduxStore.injectReducer)(_reducer["default"], _constants.REDUCER, force);
};

exports.setup = setup;

var unset = function unset() {
  (0, _reduxStore.removeReducer)(_constants.REDUCER);
};

exports.unset = unset;
setup(false);

var handleChange = function handleChange(key, value) {
  _reduxStore["default"].dispatch({
    type: _constants.TYPE_CHANGE,
    payload: {
      key: key,
      value: value
    }
  });
};

exports.handleChange = handleChange;

var handleChangeAll = function handleChangeAll(value) {
  _reduxStore["default"].dispatch({
    type: _constants.TYPE_CHANGE_ALL,
    payload: value
  });
};

exports.handleChangeAll = handleChangeAll;