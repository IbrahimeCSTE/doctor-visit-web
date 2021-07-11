import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { appointmentReducer } from "./reducer/AppointmentReducer";
import { contuctReducer } from "./reducer/ContuctReducer";
import { loginReducer } from "./reducer/LoginReducer";
import { registerReducer } from "./reducer/RegisterReducer";
const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  contuct:contuctReducer,
  login:loginReducer,
  register:registerReducer,
  appoint:appointmentReducer
});
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
