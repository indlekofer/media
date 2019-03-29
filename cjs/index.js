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
exports.handleChangeAll = exports.handleChange = exports.remove = exports.inject = void 0;

var _reduxStore = _interopRequireDefault(require("@indlekofer/redux-store"));

var _constants = require("./constants");

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inject = function inject() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  _reduxStore.default.inject(_constants.REDUCER, _reducer.default, force);
};

exports.inject = inject;

var remove = function remove() {
  _reduxStore.default.remove(_constants.REDUCER);
};

exports.remove = remove;
inject(false);

var handleChange = function handleChange(key, value) {
  _reduxStore.default.dispatch({
    type: _constants.TYPE_CHANGE,
    payload: {
      key: key,
      value: value
    }
  });
};

exports.handleChange = handleChange;

var handleChangeAll = function handleChangeAll(value) {
  _reduxStore.default.dispatch({
    type: _constants.TYPE_CHANGE,
    payload: value
  });
};

exports.handleChangeAll = handleChangeAll;