import '../../styles/continue.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Plans() {
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();
    let {email} = useParams();

    const handleDivClick = (id) => {
        setSelectedId(id);
    };

    const handleNextClick = () => {
        if (selectedId !== null) {
          navigate(`/choose/${selectedId}/${email}`);
        }
    };

    const divs = [
        { id: 1, title: 'Mobile', resolution: '480p' },
        { id: 2, title: 'Basic', resolution: '720p' },
        { id: 3, title: 'Standard', resolution: '1080p' },
        { id: 4, title: 'Premium', resolution: '4K + HDR' },
      ];
      
  return (
    <div>
        <div class="container">
            <a href="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" className='logo'/></a>
            <a href="/login" className='text-decoration-none text-dark mt-2'>Sign in</a>
        </div>
        <div className='hr'></div>
        <div className='text-dark margin'>
            <div>STEP 2 OF 3</div>
            <h1 className='size'>Choose the plan that’s right for you</h1>
        </div>
        <div className='d-flex justify-content-between text-dark margin'>
      {divs.map((div) => (
        <div key={div.id} className="boxes mid-gap" onClick={() => handleDivClick(div.id)}>
          <div className={`lgbox box${div.id}`}>
            <h5>{div.title}</h5>
            <div className='d-flex justify-content-between'>
                {div.resolution}
                <div className='mt-2'>
                    {selectedId === div.id && (
                    <FontAwesomeIcon
                        icon={faCheckCircle}/>
                    )}  
                </div> 
            </div>
          </div>
          <div className='details'>
            <div className='gap'>
              <span className='topic'>Monthly price</span> <br />
              USD 2.99
            </div>
            <div className='hr'></div>
            <div className="gap">
              <span className='topic'>Video and sound quality</span> <br />
              Fair
            </div>
            <div className='hr'></div>
            <div className="gap">
              <span className='topic'>Resolution</span> <br />
              {div.resolution}
            </div>
            <div className='hr'></div>
            <div className="gap">
              <span className='topic'>Supported devices <br />
              Mobile phone, tablet</span>
            </div>
            <div className='hr'></div>
            <div className="gap">
              <span className='topic'>Devices your household can watch at <br />
              the same time <br /></span>
              1
            </div>
            <div className='hr'></div>
            <div className="gap">
              <span className='topic'>Download devices </span><br />
              1
            </div>
          </div>
        </div>
      ))}
    </div>
        <div className='margin'>
            <span className='para justify'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <Link to={'/'} className='link'>Terms of Use</Link> for more details.
            Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</span>
        </div>
        <div className='d-flex justify-content-center'>
            <button className="next-button text-decoration-none text-center" onClick={handleNextClick}>Next</button>
        </div>
    </div>
  )
}
