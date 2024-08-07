import React from 'react'
import '../../styles/continue.css'
import { Link, useParams } from 'react-router-dom'

export default function Continue() {
  let {email} = useParams();
  return (
    <div>
        <div class="container">
            <a href="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" className='logo'/></a>
            <a href="/login" className='text-decoration-none text-dark mt-2'>Sign in</a>
        </div>
        <div className='hr'></div>
        <div className='continue'>
            <div>
                <img src='/images/image.png' alt="Devices Image" className="devices"/><br /><br />
                <Link className="next-button text-decoration-none" to={`/plans/${email}`}>Next</Link>
            </div>
        </div>
    </div>
  )
}
