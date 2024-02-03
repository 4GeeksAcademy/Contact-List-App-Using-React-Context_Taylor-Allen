import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactList";
import {} from 'react-bootstrap-icons'
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container text-center">
      <div>
        <h1 className="header">Contact List</h1>
        {store.contacts?.map((contact, index) => (
          <ContactCard
            name={contact.full_name}
            phone={contact.phone}
            address={contact.address}
            email={contact.email}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
};
