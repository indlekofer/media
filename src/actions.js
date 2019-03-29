import { TYPE_CHANGE } from './constants';

export const handleChange = (key, value) => {
  return {type: TYPE_CHANGE, payload: {key, value}};
}
export const handleChangeAll = (value) => {
  return {type: TYPE_CHANGE, payload: value};
}
