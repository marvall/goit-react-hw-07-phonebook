import { createSelector } from "@reduxjs/toolkit";

export const getContactsItems = (state) => state.contacts.items;
export const getContactsFilter = (state) => state.contacts.filter;
export const getContactsLoading = (state) => state.contacts.loading;

export const getfilteredContacts = createSelector(
  [getContactsFilter, getContactsItems],
  (filter, items) => {
    if (filter !== "") {
      return items.filter(({ name }) => name.includes(filter));
    } else {
      return items;
    }
  }
);
