import React from "react";

export default function ContactCard(props) {
  return (
    <div>
      <h1>Name</h1>
      <h2>{props.name}</h2>
      <h1>Email</h1>
      <h2>{props.email}</h2>
      <h1>Address</h1>
      <h2>{props.address}</h2>
      <h1>Phone</h1>
      <h2>{props.phone}</h2>
    </div>
  );
}
