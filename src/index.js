import store, { injectReducer, removeReducer } from '@indlekofer/redux-store';

import { TYPE_CHANGE, TYPE_CHANGE_ALL, REDUCER } from './constants';
import Reducer from './reducer';

export const setup = (force = true) => {
  injectReducer(Reducer, REDUCER, force);
};

export const unset = () => {
  removeReducer(REDUCER);
};

setup(false);

export const handleChange = (key, value) => {
  store.dispatch({type: TYPE_CHANGE, payload: {key, value}});
};
export const handleChangeAll = (value) => {
  store.dispatch({type: TYPE_CHANGE_ALL, payload: value});
};

export {
  TYPE_CHANGE,
  TYPE_CHANGE_ALL,
  REDUCER
};
