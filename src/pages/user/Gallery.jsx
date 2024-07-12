import React, { useState, useEffect } from 'react'
import '../../styles/landing.css';
import logo from '../../images/logo.png';
import image2 from '../../images/image2.png';
import sampleVideo from '../../video/video.mp4';
import VideoGallery from '../../components/VideoGallery';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Gallery() {
    const[message, setMessage] = useState(null);
    const [video, setVideo] = useState('');
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/video")
    };

    const searchById = async () => {
        try {
          const response = await axios.get('http://localhost:8080/video/searchAll');
          setVideo(response.data); 
        } catch (error) {
          setMessage({ text: 'Error sloading videos', color: 'red' });
        }
      };
    
      useEffect(() => {
        searchById();
      }, []);

  return (
        <div style={{position: 'relative'}} className='bg-dark'>
            <nav className="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right">
                <div className="container-fluid">
                <div className="netflix-row">
                    <div className="left d-flex align-items-center">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="hi"/>
                    </a>
                    <div  className="netflix-nav">
                        <section>
                            <button onClick={handleNavigate}>Video</button>
                            <button className='mx-2'>Profile</button>
                            <button>Filmes</button>
                            <button className='mx-2'>Bombando</button>
                            <button>Minha Lista</button>
                            <button className='mx-2'>Navegar por Idiomas</button>
                        </section>
                    </div>
                    <div className="netflix-dropdown-box dropdown">
                        <button className="netflix-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Navegar
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Início</a></li>
                            <li><a className="dropdown-item" href="/">Séries</a></li>
                            <li><a className="dropdown-item" href="/">Filmes</a></li>
                            <li><a className="dropdown-item" href="/">Bombando</a></li>
                            <li><a className="dropdown-item" href="/">Minha Lista</a></li>
                            <li><a className="dropdown-item" href="/">Navegar por Idiomas</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="right d-flex align-items-center">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-bell-fill"></i>
                    <section className="netflix-profile">

                    </section>
                    </div>
                </div>
                </div>
            </nav>

            <div>
                <section className="netflix-home-video">
                <div className="top"></div>
                <div className="bottom"></div>
                <video src={sampleVideo} autoPlay loop muted></video>
                <div className="content">
                    <section className="left">
                        <img src={image2} alt="hi"/>

                        <div className="d-flex mt-2">
                            <button className="btn btn-light m-2" > <i className="bi bi-play-fill" style={{color: 'black',  padding: '0%'}}></i> Assista Agora </button>
                            <button className="btn btn-secondary m-2"><i className="bi bi-info-circle" style={{padding: '0%'}}></i> Mais Informações</button>
                        </div>
                    </section>
                </div>
                </section>
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <VideoGallery videoId="il_t1WVLNxk" />
                    </div>
                </div>
            </div> 
            <footer>
        <div className="footer__row__1">
            <h4>Questions? Call 000-800-040-1843</h4>
        </div>
        <div className="footer__row__2">
            <div className="column__1">
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className="column__2">
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className="column__3">
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>
            <div className="column__4">
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="footer__row__3">
            <div className="dropdown__container">
                <i className="fas fa-globe"></i>
                <select
                        name="languages"
                        className="language__drop__down"
                >
                    <option value="english" selected>English</option>
                    <option value="hindi">हिन्दी</option>
                </select>
            </div>
        </div>
        <div className="footer__row__4">
            <p>Netflix India</p>
        </div>
    </footer>
    </div>
  )
}
