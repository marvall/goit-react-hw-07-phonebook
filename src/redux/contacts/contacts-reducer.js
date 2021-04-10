import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const initialState = [];
const contactReducer = createReducer(initialState, {
  [actions.contactGetSuccess]: (_, action) => action.payload,
  [actions.contactAddSuccess]: (state, action) => [...state, action.payload],
  [actions.contactDeleteSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [actions.contactAddRequest]: () => true,
  [actions.contactAddSuccess]: () => false,
  [actions.contactAddError]: () => false,
  [actions.contactGetRequest]: () => true,
  [actions.contactGetSuccess]: () => false,
  [actions.contactGetError]: () => false,
});

const contactFilterReducer = createReducer("", {
  [actions.contactFiletr]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactReducer,
  filter: contactFilterReducer,
  loading,
});
