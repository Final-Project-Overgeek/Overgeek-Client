import { combineReducers } from 'redux';
import lecturerReducer from './lecturerReducer';
import userReducer from './userReducer';

const reducer = combineReducers({ 
  lecturerReducer,
  userReducer
});

export default reducer;