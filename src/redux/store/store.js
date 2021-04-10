import { combineReducers } from "redux";
import contactReducer from "../contacts/contacts-reducer";
import { configureStore } from "@reduxjs/toolkit";

// const logger = (store) => (next) => (action) => {
//   console.log("action:", action);

//   next(action);
// };

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
