import store from '@indlekofer/redux-store';

import { TYPE_CHANGE, TYPE_CHANGE_ALL, REDUCER } from './constants';
import Reducer from './reducer';
import { handleChange, handleChangeAll } from './actions';

store.inject(REDUCER, Reducer);

export {
  TYPE_CHANGE,
  TYPE_CHANGE_ALL,
  REDUCER,
  handleChange,
  handleChangeAll
}
