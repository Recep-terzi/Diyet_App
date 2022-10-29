import React, { useState } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Payment.Module.css";
import bank from "../../assets/bank.png";
const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardFirstDate, setCardFirstDate] = useState("");
  const [cardLastDate, setCardLastDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="payment-container">
        <div className="row payment-row">
          <div className="col-md-7 payment-image">
            <span className="card-number-text">
              {cardNumber ? (
                <>{`${cardNumber.substring(0, 4)} | ${cardNumber.substring(
                  4,
                  8
                )}| ${cardNumber.substring(8, 12)} | ${cardNumber.substring(
                  12,
                  16
                )} `}</>
              ) : (
                <>XXXX XXXX XXXX XXXX</>
              )}
            </span>
            <div className="card-date">
              <span className="card-first-date">
                {cardFirstDate ? <>{`${cardFirstDate} /`}</> : <></>}
              </span>
              <span className="card-last-date">
                {cardLastDate ? <>{` ${cardLastDate} `}</> : <></>}
              </span>
            </div>
            <span className="card-holdername">
              {cardHolderName ? (
                <>{cardHolderName}</>
              ) : (
                <> Kart Kullanıcı ismi</>
              )}
            </span>

            <img src={bank} alt="" />
          </div>
          <div className="col-md-5">
            <form className="payment-form">
              <div className="payment-title">Payment Details</div>
              <div className="payment-card-number">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength="16"
                />
              </div>
              <div className="payment-card-holdername">
                <input
                  type="text"
                  placeholder="Card Holdername"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
              </div>
              <div className="payment-card-detail">
                <input
                  type="text"
                  placeholder="12"
                  value={cardFirstDate}
                  onChange={(e) => setCardFirstDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="2028"
                  value={cardLastDate}
                  onChange={(e) => setCardLastDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                />
              </div>
              <div className="payment-submit">
                <button className="confirm-button">Confirm</button>
                <button className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
