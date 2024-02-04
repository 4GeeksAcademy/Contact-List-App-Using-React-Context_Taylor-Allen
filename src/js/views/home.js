import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="text-center mt-4">
      <div className="card-container">
        <div className="row">
          {store.contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              className="contact-card col-xl-4 col-sm-6 mb-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
