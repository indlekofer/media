"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChangeAll = exports.handleChange = void 0;

var _constants = require("./constants");

var handleChange = function handleChange(key, value) {
  return {
    type: _constants.TYPE_CHANGE,
    payload: {
      key: key,
      value: value
    }
  };
};

exports.handleChange = handleChange;

var handleChangeAll = function handleChangeAll(value) {
  return {
    type: _constants.TYPE_CHANGE,
    payload: value
  };
};

exports.handleChangeAll = handleChangeAll;