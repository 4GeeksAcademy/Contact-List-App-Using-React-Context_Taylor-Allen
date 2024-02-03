import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const updateContact = () => {
  const { store, actions } = useContext(Context);
  const contactId = store.specificContactToChange;
  const theContact = store.contactInformation.find(
    (contact) => contact.id === contactId
  );

  const handleInputChange = (attribute, event) => {
    actions.updateContactAttribute(contactId, attribute, event.target.value);
    console.log(theContact.full_name);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={theContact.full_name}
        onChange={(event) => handleInputChange("full_name", event)}
      ></input>
      <input
        type="text"
        value={theContact.email}
        onChange={(event) => handleInputChange("email", event)}
      ></input>
      <input
        type="text"
        value={theContact.address}
        onChange={(event) => handleInputChange("address", event)}
      ></input>
      <input
        type="text"
        value={theContact.phone}
        onChange={(event) => handleInputChange("phone", event)}
      ></input>
      <button
        onClick={() =>
          actions.saveUpdatedContact(
            contactId,
            theContact.full_name,
            theContact.email,
            theContact.address,
            theContact.phone
          )
        }
      >
        Save Contact Information
      </button>
    </div>
  );
};
