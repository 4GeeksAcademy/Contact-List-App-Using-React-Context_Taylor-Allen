import React, { useContext } from "react";
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ContactCard = (props) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const deleteContact = () => {
    actions.deleteContacts(props);
    navigate("/home");
  };

  return (
    <div>
      <ul>
        <li>
          {props.name} - {props.email} - {props.phone} - {props.address}
          <button
            type="submit"
            className="btn"
            onClick={() => deleteContact(props)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

ContactCard.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
};

export default ContactCard;
