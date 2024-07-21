import React from 'react'
import '../../styles/videolist.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCoins, faFeed, faFlag, faGear, faHouse, faInfoCircle, faList, faPlay, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userAuthCheck from '../../AuthCheck';

export default function Video() {

    userAuthCheck();

    const[isNavOpen, setIsNavOpen] = useState(false);
    const[message, setMessage] = useState(null);
    const[video, setVideo] = useState([]);
    let navigate = useNavigate();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleDelete = async (viewId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/view/delete/${viewId}`);
          if (response.status === 200) {
            setMessage({ text: 'Video was deleted successfully', class: 'alert alert-success' });
          } else {
            setMessage({ text: 'Failed to delete video', class: 'alert alert-danger' });
          }
        } catch (error) {
          setMessage({ text: 'Error deleting video', class: 'alert alert-danger' });
        }
    };

    
    const searchById = async () => {
        try {
            const response = await axios.get('http://localhost:8080/view/searchViewData');
            if (response.data.length === 0) {
                setMessage({ text: 'No videos found', class: 'alert alert-warning' });
            } else {
                setVideo(response.data);
            }
        } catch (error) {
            setMessage({ text: 'Error loading videos', class: 'alert alert-danger' });
        }
    };
    
    useEffect(() => {
        searchById();
    }, []);
    
    

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (!user) {
          navigate('/login');
        }
    }, [navigate]);
    
    const handleLogout = async () => {
        try {
          const response = await axios.post('http://localhost:8080/user/logout');
          setMessage(response.data);
          sessionStorage.removeItem('user');
          navigate('/login');
        } catch (error) {
          setMessage('Error logging out');
        }
    };


    const handleNavigate = () =>{
        navigate('/addVideo');
    }

  return (
    <div classNameName='bg-white'>
        <div id="mySidenav" style={{ width: isNavOpen ? '0' : '250px' }} className="sidenav">
            <div className="logo">
                <img src={logo} style={{width:'auro', height: '40px'}} alt="Logo"/>
            </div>
            <div className="d-flex justify-content-center py-3">
                <div className="mt-2">
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faHouse}/> <div className="link-text">Home</div></div></a>
                    <a href="/video" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faPlay}/><div className="link-text">Video</div></div></a>
                    <a href="/subscriber" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faBell} /><div className="link-text">Subscription</div></div></a>
                    <a href="/financial" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faCoins} /><div className="link-text">Financial</div></div></a>
                    <a href="/trending" className="side-link text-danger"><div className="d-flex"><FontAwesomeIcon icon={faUpDown}/><div className="link-text">Trending</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faGear}/><div className="link-text">Settings</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faInfoCircle}/><div className="link-text">Help</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faFlag}/><div className="link-text">Report</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faFeed}/><div className="link-text">Feedback</div></div></a>
                </div>
            </div>
        </div>

        <div id="main" style={{ marginLeft: isNavOpen ? '0' : '250px' }} className='bg-white'>
            <div className='d-flex justify-content-between'>
                <div className="d-flex">
                    <h4 onClick={toggleNav} className="openbtn text-dark"><FontAwesomeIcon icon={faList}/></h4>
                    <a className="nav-link text-dark mx-3" href="/"><h4>Trending</h4></a>
                </div>
                <div className="">
                    <form className="d-flex">
                        <button onClick={handleNavigate} className="btn btn-danger my-2 my-sm-0 mx-2">Add</button>
                        <button className="btn btn-primary my-2 my-sm-0" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </div>
            <div>{ message && <div class={ message.class }>{message.text}</div>}</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Record ID</th>
                        <th>Record ID</th>
                        <th>Video ID</th>
                        <th>Video Title</th>
                        <th>Type</th>
                        <th>Added Date</th>
                        <th>Added Time</th>
                        <th>More Actions</th>
                    </tr>
                </thead>
                {video.length > 0 && (
                <tbody>
                    {video.map((video) => (
                        <tr>
                            <td>{video.viewId}</td>
                            <td>{video.videoName}</td>
                            <td>{video.videoTitle}</td>
                            <td>{video.userName}</td>
                            <td>{video.userEmail}</td>
                            <td>{video.dateViewed}</td>
                            <td>{video.timeViewed}</td>
                            <td>
                                <button onClick={() => handleDelete(video.viewId)} className="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}    
                </tbody>
                )}
            </table>
            <div>
        </div>
        </div>
    </div>
  )
}
