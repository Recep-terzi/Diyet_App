import React, { useRef, useState } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import contact from "../../assets/contact.png";
import "./Contact.Module.css";
import emailjs from "@emailjs/browser";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const mailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sl7gx4j",
        "template_sinu99p",
        form.current,
        "PpZTOFvtkDXZuH1A6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    alertify.success("Mail'iniz başarıyla gönderildi. :)");
  };
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="contact-container">
        <div className="row contact-row">
          <div className="col-md-6 contact-image">
            <img src={contact} alt="" />
          </div>
          <div className="col-md-6">
            <div className="contact-title">
              Bize ulaşın, uygun programı size sunalım.
            </div>
            <div className="contact-form">
              <form onSubmit={mailSubmit} ref={form}>
                <div className="username-form">
                  <label>Adınız :</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email-form">
                  <label>Email Adresiniz:</label>

                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="username-form">
                  <label>Konu :</label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="message-form">
                  <label>Mesajınız:</label>

                  <textarea
                    id=""
                    cols="20"
                    rows="3"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
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
