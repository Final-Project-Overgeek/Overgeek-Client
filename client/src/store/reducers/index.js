import { combineReducers } from 'redux';
import lecturerReducer from './lecturerReducer';

const reducer = combineReducers({ lecturerReducer });

export default reducer;