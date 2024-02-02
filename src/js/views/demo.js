import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(name, phone, email, address);
    navigate("/home");
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Contact Form</h1>
        <form>
          <div className="mx-5 px-5">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="form-control"
              id="fullName"
              placeholder="Jane Doe"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mx-5 px-5">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="address"
              placeholder="100 North Tryon Street"
            />
          </div>
          <div className="mx-5 px-5">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="202-555-5555"
            />
          </div>
          <div className="mx-5 px-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
        </form>
      </div>
      <div className="container-button d-flex justify-content-around">
        <div>
          <Link to="/">
            <button className="btn btn-outline-secondary">Back home</button>
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
