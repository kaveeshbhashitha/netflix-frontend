import React, { useState, useEffect} from 'react'
import '../../styles/landing.css';
import logo from '../../images/logo.png';
import image2 from '../../images/image2.png';
import sampleVideo from '../../video/video.mp4';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';
import useAuthCheck from '../../AuthCheck';
import { Link } from 'react-router-dom';

export default function PlayList() {
    useAuthCheck();

    const [video, setVideo] = useState('');
    let navigate = useNavigate();
    const [player, setPlayer] = useState(null);
    const [user, setUser] = useState('');
    const {userEmail} = useParams();
    var userId = user.userId;

    const handleNavigateVideo = () => {
        navigate("/video")
    };
    const handleNavigateLogin = () => {
        navigate("/login")
    };
    const handleNavigateRegister = () => {
        navigate("/register")
    };

    const opts = {
        height: 'auto',
        width: 'auto',
        playerVars: {
          autoplay: 0,
        },
    };

    const onReady = (event) => {
        setPlayer(event.target);
    };

    const handleVideoClick = async (videoID) => {
        try {
            const response = await axios.post('http://localhost:8080/view/add', {
                userId: userId,
                videoId: videoID
            });
            if (response.status === 200) {
                console.log('View added successfully');
                    if (player) {
                      player.playVideo();
                      const iframe = player.getIframe();
                      if (iframe.requestFullscreen) {
                        iframe.requestFullscreen();
                      } else if (iframe.mozRequestFullScreen) { 
                        iframe.mozRequestFullScreen();
                      } else if (iframe.webkitRequestFullscreen) {
                        iframe.webkitRequestFullscreen();
                      } else if (iframe.msRequestFullscreen) { 
                        iframe.msRequestFullscreen();
                      }
                    }
                };
        } catch (error) {
            console.error('Error adding view:', error);
        }
    };

    const searchById = async () => {
        try {
          const response = await axios.get('http://localhost:8080/video/searchAll');
          setVideo(response.data); 
        } catch (error) {
          console.log("Error")
        }
    };
    
    useEffect(() => {
        searchById();
    }, []);

    useEffect(() => {
        const loadUser = async () => {
          try {
            const result = await axios.get(`http://localhost:8080/user/searchByEmail/${userEmail}`);
            if (result.status === 200) {
              const userData = result.data;
              const initials = userData.userName
                .split(' ')
                .map(name => name.charAt(0))
                .join(' ');
              setUser({ ...userData, initials });
            } else {
              console.log('Error loading user');
            }
          } catch (error) {
            console.error('Error loading user', error);
          }
        };
    
        loadUser();
      }, [userEmail]);
  return (
    <div style={{position: 'relative'}} className='bg-dark'>
            <nav className="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right">
                <div className="container-fluid">
                <div className="netflix-row">
                    <div className="left d-flex align-items-center">
                    <a className="navbar-brand" href="/test">
                        <img src={logo} alt="hi"/>
                    </a>
                    <div  className="netflix-nav">
                        <section>
                            <button onClick={handleNavigateVideo}>Video</button>
                            <button className='mx-2' onClick={handleNavigateLogin}>Login</button>
                            <button onClick={handleNavigateRegister}>Register</button>
                            <button className='mx-2'>Bombando</button>
                            <button>Minha Lista</button>
                            <button className='mx-2'>hello</button>
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
                        {user &&<Link to={`/video/${user.userEmail}`}><div className="btn btn-danger btn-circle"> <p>{user.initials}</p></div></Link>}
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
            {video.length > 0 && (
            <div className="container mt-2">
                <div className="row">

                {video.map((video) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
                        <YouTube videoId={video.youtubeId} opts={opts} onReady={onReady}/>
                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-danger btn-sm mx-2" onClick={() => handleVideoClick(video.videoId)}><FontAwesomeIcon icon={faPlayCircle}/></button>
                        </div>
                    </div>
                ))}

                </div>
            </div> 
            )}
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
