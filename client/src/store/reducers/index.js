import { combineReducers } from 'redux';
import lecturerReducer from './lecturerReducer';
import userReducer from "./userReducer";
import paymentsReducer from './paymentsReducer';

const reducer = combineReducers({
  lecturerReducer,
  userReducer,
  paymentsReducer
});

export default reducer;