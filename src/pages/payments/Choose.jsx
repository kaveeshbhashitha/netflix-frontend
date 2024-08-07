import React from 'react'
import '../../styles/continue.css'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Choose() {
    let {id, email} = useParams();
  return (
    <div>
        <div class="container">
            <a href="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" className='logo'/></a>
            <a href="/login" className='text-decoration-none text-dark mt-2'>Sign in</a>
        </div>
        <div className='hr'></div>
        <div className='continue'>
            <div>
                <img src='/images/lock.png' alt="Devices Image" className="lock"/><br /><br />
                <Link className='text-decoration-none' to={`/payment/${id}/${email}`}>
                    <div className="payment-button">
                        <div className="button-content">
                            <span className='text-dark'>Credit or Debit Card</span>
                            <div className="card-icons">
                                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
                                <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
                            </div>
                        </div>
                        <div className="arrow-icon">
                            <span><FontAwesomeIcon icon={faArrowRight}/></span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
