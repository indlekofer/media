import assert from 'assert';

import reducer from '../src/reducer';
import { TYPE_CHANGE, TYPE_CHANGE_ALL } from '../src/constants';

describe("reducer", () => {
  it("should change", () => {
    let state = reducer(undefined, {type: TYPE_CHANGE, payload: {key: "test", value: "tested"}});
    assert.equal("tested", state.get("test"));
  });
  it("should be empty map - payload missing", () => {
    let state = reducer(undefined, {type: 'unknown', key: "test", value: "tested"});
    assert.equal(0, state.size);
  });
  it("should be empty map - payload.key missing", () => {
    let state = reducer(undefined, {type: TYPE_CHANGE, payload: {keyX: "test", value: "tested"}});
    assert.equal(0, state.size);
  });
  it("should be empty map - payload.value missing", () => {
    let state = reducer(undefined, {type: TYPE_CHANGE, payload: {key: "test", valueX: "tested"}});
    assert.equal(0, state.size);
  });
  it("should change all", () => {
    let state = reducer(undefined, {type: TYPE_CHANGE_ALL, payload: {test: "test2", value: "tested"}});
    assert.equal("test2", state.get("test"));
    assert.equal("tested", state.get("value"));
  });
  it("should be empty map", () => {
    let state = reducer(undefined, {type: 'unknown', payload: {key: "test", value: "tested"}});
    assert.equal(0, state.size);
  });
  it("should return given state", () => {
    let state = reducer({key: 'asd'}, {type: 'unknown', payload: {key: "test", value: "tested"}});
    assert.equal('asd', state.key);
  });
});
