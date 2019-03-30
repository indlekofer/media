import store from '@indlekofer/redux-store';

import { TYPE_CHANGE, TYPE_CHANGE_ALL, REDUCER } from './constants';
import Reducer from './reducer';

export const setup = (force = true) => {
  store.inject(REDUCER, Reducer, force);
}

export const unset = () => {
  store.remove(REDUCER);
}

setup(false);

export const handleChange = (key, value) => {
  store.dispatch({type: TYPE_CHANGE, payload: {key, value}});
}
export const handleChangeAll = (value) => {
  store.dispatch({type: TYPE_CHANGE, payload: value});
}

export {
  TYPE_CHANGE,
  TYPE_CHANGE_ALL,
  REDUCER
}
