// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/checkoutForm.css';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  let {id, email} = useParams();
  const [paymentMessage, setPaymentMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentMessage('Payment processed!');
      navigate('/login'); 
    }, 2000); 
  };

  const handleSubmitDetails = () => {
    if (subscription) {
        const paymentData = {
            userEmail: email,
            packageId: id,
            packagePrice: subscription.price,
            packageName: subscription.title,
        };

        axios.post('http://localhost:8080/payment/add', paymentData)
            .then(response => {
                console.log('Payment data stored successfully:', response.data);
                setSubmitted(true);
            })
            .catch(error => {
                console.error('Error storing payment data:', error);
            });
    }
};

  const divs = [
    { id: 1, title: 'Mobile', price: '2.99' },
    { id: 2, title: 'Basic', price: '3.99' },
    { id: 3, title: 'Standard', price: '7.99' },
    { id: 4, title: 'Premium', price: '9.99' },
  ];

  const subscription = divs.find((item) => item.id === parseInt(id));

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="text-dark">
        <div>Step 3 of 3</div>
        <h1 className='size'>Set up your credit or debit card</h1>
      </div>
      <div className="d-flex text-left icons">
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
        <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
      </div>
      <CardElement />
      
      <div className='text-dark mt-3 border rounded p-3'>
        <div className="d-flex justify-content-between"><div className='font-weight-bold'>USD {subscription.price}/Month</div><a href="/" className='link'>Change</a></div>
        <span className='type'>{subscription.title}</span>
      </div>
      <div className='text-dark text-small'>
        By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently USD 2.99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
      </div>
      <div className='text-dark d-flex'>
          <input type="checkbox" name="check" id="" className='large'/>
          <label className='lavbel'>I agree</label>
      </div>
      <button type="submit" disabled={!stripe || isProcessing} onClick={handleSubmitDetails}>
        {isProcessing ? 'Processing...' : 'Pay'}
      </button>
      {paymentMessage && <p>{paymentMessage}</p>}
      <div className='text-dark text-small'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
      </div>
    </form>
  );
};

export default CheckoutForm;
