import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; 

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="order-success container mt-5">
      <div className="text-center">
        <FaCheckCircle className="text-success mb-3" style={{ fontSize: '80px' }} />
        <h2 className="mb-3 text-success">Order Completed Successfully!</h2>
        <p className="lead mb-4">
          Your order is being processed. Thank you for shopping with us!
        </p>

        <button 
          className="btn btn-primary btn-lg" 
          onClick={handleGoHome}
          style={{ padding: '10px 30px', fontSize: '18px' }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
