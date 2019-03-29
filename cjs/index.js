"use strict";

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
Object.defineProperty(exports, "handleChange", {
  enumerable: true,
  get: function get() {
    return _actions.handleChange;
  }
});
Object.defineProperty(exports, "handleChangeAll", {
  enumerable: true,
  get: function get() {
    return _actions.handleChangeAll;
  }
});

var _reduxStore = _interopRequireDefault(require("@indlekofer/redux-store"));

var _constants = require("./constants");

var _reducer = _interopRequireDefault(require("./reducer"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reduxStore.default.inject(_constants.REDUCER, _reducer.default);