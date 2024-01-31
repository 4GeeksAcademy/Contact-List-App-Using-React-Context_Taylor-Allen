import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PersonAdd } from "react-bootstrap-icons";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
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
        <h1 className="text-center">CONTACT FORM</h1>
        <form>
          <div className="mx-5 px-5">
            <label for="fullName" className="form-label">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="email"
              className="form-control"
              id="fullName"
              placeholder="Mary Jane"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mx-5 px-5">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="address"
              placeholder="420 Flower Avenue"
            />
          </div>
          <div className="mx-5 px-5">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="305-555-5555"
            />
          </div>
          <div className="mx-5 px-5">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
        </form>
      </div>
      <div className="container-button mt-3 d-flex justify-content-between">
        <Link to="/home">
          <button className="btn btn-secondary">Back home</button>
        </Link>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          <PersonAdd size={25} />
        </button>
      </div>
    </div>
  );
};
