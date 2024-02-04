import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    agenda_slug: "taylor-allen",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actions.addContacts(contactData);
      await actions.getContacts();
      navigate("/");
    } catch (error) {
      console.error("Error adding contact", error);
    }
  };

  return (
    <div className="contact-card-container mt-0">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>

        {/* if contact.id doesn't exist, Add Contact button and vice versa*/}
        <button type="submit">
          {contactData.id ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};
