import React, { useEffect } from 'react'
import '../../styles/videolist.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCoins, faFeed, faFlag, faGear, faHouse, faInfoCircle, faList, faPlay, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAuthCheck from '../../AuthCheck';

export default function UpdateVideo() {

    useAuthCheck();

    const [isNavOpen, setIsNavOpen] = useState(false);
    const {id} = useParams();
    const[video, setVideo] = useState([]);
    const[message, setMessage] = useState(null);

    useEffect(() => {
        loadUser()
    }, []);
    
      const loadUser=async () => {
        const result = await axios.get(`http://localhost:8080/video/searchById/${id}`)
        if (result.status === 200) {
            setVideo(result.data)
        }else{
            setMessage({ text: 'Error loading videos', class: 'alert alert-danger' });
        }
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVideo({ ...video, [name]: value });
    };

    const updateVideo = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/video/update/${id}`, video);
            if (response.status === 200) {
                setMessage({ text: 'Updated successfully', class: 'alert alert-success' });
            } else {
                setMessage({ text: 'Error updating video', class: 'alert alert-danger' });
            }
        } catch (error) {
            setMessage({ text: 'Error with backend', class: 'alert alert-danger' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateVideo();
    };


  return (
    <div>
        <div id="mySidenav" style={{ width: isNavOpen ? '0' : '250px' }} className="sidenav">
            <div className="logo">
                <img src={logo} style={{width:'auro', height: '40px'}} alt="Logo"/>
            </div>
            <div className="d-flex justify-content-center py-3">
                <div className="mt-2">
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faHouse}/> <div className="link-text">Home</div></div></a>
                    <a href="/video" className="side-link text-danger"><div className="d-flex"><FontAwesomeIcon icon={faPlay}/><div className="link-text">Video</div></div></a>
                    <a href="/subscriber" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faBell} /><div className="link-text">Subscription</div></div></a>
                    <a href="/financial" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faCoins} /><div className="link-text">Financial</div></div></a>
                    <a href="/trending" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faUpDown}/><div className="link-text">Trending</div></div></a>
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
                    <a className="nav-link text-dark mx-3" href="/"><h4>All Video</h4></a>
                </div>
                <div className="">
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search"/>
                        <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div>{ message && <div class={ message.class }>{message.text}</div>}</div>
            <div className='p-4 border rounded'>
                <h5 className="mt-4 mb-4 text-danger">Update Video</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="youtubeId" className='text-dark mb-2'>YouTube Video ID</label>
                        <input type="text" name="youtubeId" placeholder='Enter YouTube ID' className="form-control" value={video.youtubeId} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="videoTitle" className='text-dark mb-2'>Video Title</label>
                        <input type="text" name="videoTitle" placeholder='Enter video title' className="form-control" value={video.videoTitle} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className='text-dark mb-2'>Video Category</label>
                        <select name="category" className="form-control" value={video.category} onChange={handleInputChange}>
                            <option value="">-- Select category --</option>
                            <option value="Horror">Horror</option>
                            <option value="Action">Action</option>
                            <option value="Anime">Anime</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Hollywood">Hollywood</option>
                            <option value="Chinese">Chinese</option>
                            <option value="K-Drama">K-Drama</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="videoType" className='text-dark mb-2'>Video Type</label>
                        <select name="videoType" className="form-control" value={video.videoType} onChange={handleInputChange}>
                            <option value="">-- Select video type --</option>
                            <option value="Movie">Movie</option>
                            <option value="Documentary">Documentary</option>
                            <option value="TV-Series">TV-Series</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button type="submit" className="btn btn-outline-danger mx-1">Save Video</button>
                        <a href="/video" className="btn btn-outline-dark">Back</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
