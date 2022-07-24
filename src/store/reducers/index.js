/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from '../../screens/counterReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});
// Exports
export default rootReducer;