import React from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import contact from "../../assets/contact.png";
import "./Contact.Module.css";
const Contact = () => {
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="contact-container">
        <div className="row contact-row">
          <div className="col-md-6">
            <img src={contact} alt="" />
          </div>
          <div className="col-md-6">
            <div className="contact-title">
              Bize ulaşın, uygun programı size sunalım.
            </div>
            <div className="contact-form">
              <form>
                <div className="username-form">
                  <label>Adınız :</label>
                  <input type="text" />
                </div>
                <div className="email-form">
                  <label>Email Adresiniz:</label>

                  <input type="text" />
                </div>
                <div className="message-form">
                  <label>Mesajınız:</label>

                  <textarea name="" id="" cols="20" rows="3"></textarea>
                </div>
                <div className="contact-button">
                  <button>Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
