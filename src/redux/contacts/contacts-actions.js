import { createAction } from "@reduxjs/toolkit";

export const contactAddRequest = createAction("contact/addRequest");
export const contactAddSuccess = createAction("contact/addSuccess");
export const contactAddError = createAction("contact/addError");

export const contactGetRequest = createAction("contact/getRequest");
export const contactGetSuccess = createAction("contact/getSuccess");
export const contactGetError = createAction("contact/getError");

export const contactDeleteRequest = createAction("contact/deleteRequest");
export const contactDeleteSuccess = createAction("contact/deleteSuccess");
export const contactDeleteError = createAction("contact/deleteError");

export const contactFiletr = createAction("contact/filter");
