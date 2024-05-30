import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Зв'яжіться з нами"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
