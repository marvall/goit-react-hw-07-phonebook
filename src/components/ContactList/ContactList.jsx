/* eslint-disable react-hooks/exhaustive-deps */
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "./Contact";
import Style from "./ContactList.module.scss";
import * as selectors from "../../redux/contacts/contacts-selectors";
import { contactGet } from "../../redux/contacts/contacts-operations";

function ContactList({ items, loading }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactGet());
  }, []);

  return (
    <ul className={Style.contacrList}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        items.map((contact) => {
          console.log(contact);
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })
      )}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectors.getfilteredContacts(state),
    loading: selectors.getContactsLoading(state),
  };
};

export default connect(mapStateToProps, null)(ContactList);
