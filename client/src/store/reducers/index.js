import { combineReducers } from 'redux';
import lecturerReducer from './lecturerReducer';
import paymentsReducer from './paymentsReducer'

const reducer = combineReducers({ lecturerReducer, paymentsReducer });

export default reducer;