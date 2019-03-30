import assert from 'assert';
import store from '@indlekofer/redux-store';
import { setup, unset, handleChange, handleChangeAll, REDUCER } from '../src/index';

describe('dispatch', () => {
  var unsubscribe;
  function handleChangeTest(done, c, key, value) {
    assert.equal(value, store.getState()[REDUCER].get(key));
    done();
  }
  function removeTest(done, c) {
    assert.equal(typeof store.getState()[REDUCER] === 'undefined', true);
    done();
  }

  beforeEach(() => {
    setup();
  });

  afterEach(() => {
    unsubscribe();
    unset();
  });
  
  it('check dispatch handleChange', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, "test1", "test2"));
    handleChange("test1", "test2");
  });
  it('check dispatch handleChangeAll', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, "test1", "test2"));
    handleChangeAll({test1: "test2"});
  });
  it('check dispatch', (done) => {
    unset();
    unsubscribe = store.subscribe(removeTest.bind(null, done));
    handleChangeAll({test1: "test2"});
  });
});

