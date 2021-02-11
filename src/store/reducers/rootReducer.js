import authReducer from "./authReducer";
import spotReducer from "./spotReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  spot: spotReducer,
});

export default rootReducer;
