// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import '../styles/checkoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [paymentMessage, setPaymentMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentMessage('Payment processed!');
      navigate('/video'); // Navigate to the success page
    }, 2000); // 2 seconds delay
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      <h2>Payment Information</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay'}
      </button>
      {paymentMessage && <p>{paymentMessage}</p>}
    </form>
  );
};

export default CheckoutForm;
