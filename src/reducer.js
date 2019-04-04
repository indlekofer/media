import { Map } from 'immutable';
import {
  TYPE_CHANGE,
  TYPE_CHANGE_ALL
} from './constants';

var initialState = Map({});

export default (state = initialState, action) => {
  switch (action.type) {
  case TYPE_CHANGE:
    if (
      typeof action.payload != 'undefined' &&
      typeof action.payload.key != 'undefined' && 
      typeof action.payload.value != 'undefined'
    ) return state.set(action.payload.key, action.payload.value);
    break;
  case TYPE_CHANGE_ALL:
    return state.merge(action.payload);
  }
  return state;
};
