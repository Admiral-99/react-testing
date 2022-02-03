import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm"
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!duplicate) {
      addContact({
        name: name,
        phone: phone,
        email: email
      });

      setName("");
      setPhone("");
      setEmail("");
    }
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  useEffect(() => {
    contacts.filter(contact => {
      if(contact.name === name) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }
    });
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>

        <ContactForm name={name} phone={phone} email={email} duplicate={duplicate} setName={handleNameChange} setPhone={handlePhoneChange} setEmail={handleEmailChange} handleSubmit={handleSubmit} />
      </section>

      <hr />
      
      <section>
        <h2>Contacts</h2>

        <TileList contacts={contacts} />
      </section>
    </div>
  );
};