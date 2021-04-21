import { combineReducers } from "redux";
import lecturerReducer from "./lecturerReducer";
import userReducer from "./userReducer";
import paymentsReducer from "./paymentsReducer";
import subscriptionsReducer from "./subscriptionsReducer";

const reducer = combineReducers({
  lecturerReducer,
  userReducer,
  paymentsReducer,
  subscriptionsReducer,
});

export default reducer;
