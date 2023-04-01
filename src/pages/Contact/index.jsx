import React from "react";
import BackButton from "../../components/BackButton";
import ContactForm from "../../components/ContactForm";

export const Contact = () => {
  return (
    <main className="main-global-styling">
      <BackButton />
      <h1>Contact</h1>
      <ContactForm />
    </main>
  );
};
