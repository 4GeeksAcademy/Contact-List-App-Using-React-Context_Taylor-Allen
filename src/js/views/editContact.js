import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  // This stores the current contact information
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Need this to run for when depedencies change
  useEffect(() => {
    // This finds the contact in the store that matches the ID from the URL params
    const contactData = store.contacts.find(
      (c) => c.id === parseInt(params.id)
    );

    // if the contact is found, updates the local status with their info
    if (contactData) {
      setContact(contactData);
    }
  }, [params.id, store.contacts]);

  // event handler for input field changes
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // this calls the editContact with the contact id and info
    actions.editContact(params.id, contact);

    navigate("/");
  };

  // edit form
  return (
    <div className="contact-card-container mt-0">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={contact.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-group d-flex justify-content-between">
          <Link to={"/"}>
            <button>Back</button>
          </Link>
          <button type="submit">
            {/* if contact.id exists, Update Contact button and vice versa*/}
            {contact.id ? "Update Contact" : "Add Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

// props for the edit contact component
EditContact.propTypes = {
  match: PropTypes.object,
};
