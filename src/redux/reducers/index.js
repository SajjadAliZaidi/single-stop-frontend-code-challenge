import { combineReducers } from 'redux';
import commentReducer from './commentReducer';

const reducers = combineReducers({
  comments: commentReducer
});

export default reducers;