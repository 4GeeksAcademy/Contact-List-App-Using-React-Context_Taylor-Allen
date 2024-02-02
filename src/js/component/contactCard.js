import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const ContactCard = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.name} - {props.email} - {props.phone} - {props.address}
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
