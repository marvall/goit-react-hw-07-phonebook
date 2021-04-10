import { useState } from "react";
import { connect } from "react-redux";
import { contactAdd } from "../redux/contacts/contacts-operations";
import Style from "./ContactForm.module.scss";
import * as selectors from "../redux/contacts/contacts-selectors";

const isContactExist = (contactName, contacts) => {
  let contactExist = true;

  contacts.forEach(({ name }) => {
    if (name.toLowerCase() === contactName.toLowerCase()) {
      alert(`${contactName} is already in contacts`);
      contactExist = false;
    }
  });

  return contactExist;
};

function ContactForm({ items, addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(items);
    if (isContactExist(name, items)) {
      addContact({ name, number });
      reset();
    }
  };
  const handleChange = (event) => {
    if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === "number") {
      setNumber(event.currentTarget.value);
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={Style.form}>
        <label className={Style.label}>
          Name{" "}
          <input
            className={Style.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={Style.label}>
          Number{" "}
          <input
            className={Style.input}
            type="tel"
            placeholder="999-99-99"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={Style.button}>
          add contact
        </button>
      </form>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    items: selectors.getContactsItems(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContact: ({ name, number }) => dispatch(contactAdd({ name, number })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
