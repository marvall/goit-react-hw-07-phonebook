import * as actions from "./contacts-actions";
import * as api from "../../api/api";

export const contactAdd = (contact) => (dispatch) => {
  dispatch(actions.contactAddRequest());
  api
    .addContact(contact)
    .then((data) => dispatch(actions.contactAddSuccess(data)))
    .catch((error) => dispatch(actions.contactAddError(error.message)));
};

export const contactGet = () => (dispatch) => {
  dispatch(actions.contactGetRequest());
  api
    .getContact()
    .then((data) => dispatch(actions.contactGetSuccess(data)))
    .catch((error) => dispatch(actions.contactGetError(error.message)));
};

export const contactDelete = (contactId) => (dispatch) => {
  dispatch(actions.contactDeleteRequest());
  api
    .deleteContact(contactId)
    .then(() => dispatch(actions.contactDeleteSuccess(contactId)))
    .catch((error) => dispatch(actions.contactDeleteError(error.message)));
};
