import { combineReducers } from 'redux';
import commentReducer from './commentReducer';

const reducers = combineReducers({
  comment: commentReducer
});

export default reducers;