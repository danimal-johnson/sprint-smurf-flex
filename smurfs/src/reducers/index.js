import { combineReducers } from 'redux';
import smurfsReducer from './smurfsReducer';

export const allReducers = combineReducers({
  smurfs: smurfsReducer,
})

export default allReducers;