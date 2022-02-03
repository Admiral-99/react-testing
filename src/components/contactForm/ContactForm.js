import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={setName} />
      <input type="tel" placeholder="Phone Number (123-456-7890)" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" value={phone} onChange={setPhone} />
      <input type="email" placeholder="Email Address" value={email} onChange={setEmail} />
      <input type="submit" value="Add Contact" />
    </form>
  );
};