import React, { useContext } from "react";
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Trash3Fill } from "react-bootstrap-icons";

const ContactCard = (props) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const deleteContact = () => {
    actions.deleteContact(props.id);
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
            <Trash3Fill size={20} />
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
