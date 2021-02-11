import authReducer from "./authReducer";
import spotReducer from "./spotReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  spot: spotReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
