"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var _constants = require("./constants");

var initialState = (0, _immutable.Map)({});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.TYPE_CHANGE:
      if (typeof action.payload != 'undefined' && typeof action.payload.key != 'undefined' && typeof action.payload.value != 'undefined') return state.set(action.payload.key, action.payload.value);
      break;

    case _constants.TYPE_CHANGE_ALL:
      return state.merge(action.payload);
  }

  return state;
};

exports.default = _default;