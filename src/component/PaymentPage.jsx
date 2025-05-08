import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillAlt, FaPaypal, FaRegCreditCard, FaPhoneAlt } from "react-icons/fa";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("Pending");
  const [onlinePaymentOption, setOnlinePaymentOption] = useState(null); 
  const navigate = useNavigate();

  const handlePayment = (method) => {
    setPaymentMethod(method);

    if (method === "cod") {
      setTransactionStatus("Cash Pending");
      setTimeout(() => {
        navigate("/order-success"); 
      }, 2000); 
    } else {
      setTransactionStatus("Payment Done");
    }
  };

  const handleOnlinePaymentSelect = (option) => {
    setOnlinePaymentOption(option);
    setTransactionStatus("Payment Done");
  };

  const handleFinishTransaction = () => {
    setTimeout(() => {
      navigate("/order-success"); 
    }, 2000); 
  };

  return (
    <div className="payment-page container mt-5">
      <h2 className="text-center">Choose Your Payment Method</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-4 mb-3">
          <button
            className="btn btn-outline-primary w-100 py-3"
            onClick={() => handlePayment("cod")}
          >
            <FaMoneyBillAlt className="me-2" /> Cash on Delivery
          </button>
        </div>
        
        <div className="col-12 col-md-4 mb-3">
          <button
            className="btn btn-outline-success w-100 py-3"
            onClick={() => handlePayment("online")}
          >
            <FaPaypal className="me-2" /> Pay Online (GPay/UPI/Paytm)
          </button>
        </div>
      </div>

      {paymentMethod && (
        <div className="payment-status mt-4 text-center">
          {paymentMethod === "online" && !onlinePaymentOption && (
            <div className="payment-options">
              <h5 className="mb-3">Select Your Payment Option</h5>
              <div className="d-flex justify-content-center gap-3">
                <button
                  className={`btn btn-info ${onlinePaymentOption === "gpay" ? "active" : ""}`}
                  onClick={() => handleOnlinePaymentSelect("gpay")}
                >
                  <FaPaypal className="me-2" /> GPay
                </button>
                <button
                  className={`btn btn-info ${onlinePaymentOption === "upi" ? "active" : ""}`}
                  onClick={() => handleOnlinePaymentSelect("upi")}
                >
                  <FaPhoneAlt className="me-2" /> UPI
                </button>
                <button
                  className={`btn btn-info ${onlinePaymentOption === "paytm" ? "active" : ""}`}
                  onClick={() => handleOnlinePaymentSelect("paytm")}
                >
                  <FaRegCreditCard className="me-2" /> Paytm
                </button>
              </div>
            </div>
          )}

          {onlinePaymentOption && (
            <div className="mt-4">
              <h5>Selected Payment Option: {onlinePaymentOption.toUpperCase()}</h5>
              <button className="btn btn-dark w-100 py-3" onClick={handleFinishTransaction}>
                Finish Payment
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
