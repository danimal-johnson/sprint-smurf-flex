import { combineReducers } from 'redux';
import smurfReducer from './smurfReducer';

export const allReducers = combineReducers({
  smurfs: smurfReducer,
})

export default allReducers;