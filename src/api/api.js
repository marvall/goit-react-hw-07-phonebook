import axios from "axios";

axios.defaults.baseURL = "http://localhost:3050";

export const getContact = () => {
  return axios
    .get("/contacts")
    .then(({ data }) => data)
    .catch((error) => error);
};
export const addContact = (contact) => {
  return axios
    .post("/contacts", contact)
    .then(({ data }) => data)
    .catch((error) => error);
};
export const deleteContact = (contactId) => {
  return axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data)
    .catch((error) => error);
};
// export const updateContact = (contactId, update) => {
//   return axios
//     .patch(`/contacts/${contactId}`, update)
//     .then(({ data }) => data)
//     .catch((error) => error);
// };
