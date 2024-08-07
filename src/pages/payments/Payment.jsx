import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm';
import '../../styles/checkoutForm.css';
import '../../styles/continue.css'

const stripePromise = loadStripe('pk_test_51NHnWuSCKBfIrcyXTDjnlJ02Q1NrzvaXIcxUYJnMzxhs6m3YlOI6086oNufEMnQd76GPnFYFp3F4tpj74rShq3lH00L3MDtZ5i');

const Payment = () => {
  return (

      <div>
        <div class="container">
            <a href="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" className='logo'/></a>
            <a href="/login" className='text-decoration-none text-dark mt-2'>Sign in</a>
        </div>
        <div className='hr'></div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
  );
};

export default Payment;