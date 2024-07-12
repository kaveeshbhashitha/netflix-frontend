import React from 'react'
import '../../styles/videolist.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCoins, faFeed, faFlag, faGear, faHouse, faInfoCircle, faList, faPlay, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function AddVideo() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
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
                    <a href="/" className="side-link text-danger"><div className="d-flex"><FontAwesomeIcon icon={faPlay}/><div className="link-text">Video</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faBell} /><div className="link-text">Subscription</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faCoins} /><div className="link-text">Financial</div></div></a>
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faUpDown}/><div className="link-text">Trending</div></div></a>
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

            <div className='p-4 border rounded'>
            <h5 className="mt-4 mb-4 text-danger">Add New Video</h5>
                <form action="#" method="post">
                    <div className="form-group mb-3">
                        <label for="name" className='text-dark mb-2'>YouTube Video ID</label>
                        <input type="text" id="name" name="name" placeholder='Enter youtube ID' className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="title" className='text-dark mb-2'>Video Title</label>
                        <input type="text" id="title" name="title" placeholder='Enter video title' className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="category" className='text-dark mb-2'>Video Category</label>
                        <select type="text" id="category" name="category" className="form-control">
                            <option value="">-- Select movie category --</option>
                            <option value="horror">Horror</option>
                            <option value="action">Action</option>
                            <option value="anime">Anime</option>
                            <option value="hindi">Hindi</option>
                            <option value="hollywwod">Hollywood</option>
                            <option value="chineese">Chineese</option>
                            <option value="kdrama">K-Drama</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label for="category" className='text-dark mb-2'>Video Type</label>
                        <select type="text" id="category" name="videoType" className="form-control">
                            <option value="">-- Select movie type --</option>
                            <option value="movie">Movie</option>
                            <option value="documentry">Documentry</option>
                            <option value="anime">TV- Series</option>
                            <option value="hindi">Drama</option>
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
