import React from 'react'
import '../../styles/videolist.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCoins, faFeed, faFlag, faGear, faHouse, faInfoCircle, faList, faPlay, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthCheck from '../../AuthCheck';

export default function Subscriber() {
    useAuthCheck();
    
    const[isNavOpen, setIsNavOpen] = useState(false);
    const[message, setMessage] = useState(null);
    const[user, setUser] = useState([]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleDelete = async (userId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/user/delete/${userId}`);
          if (response.status === 200) {
            setMessage({ text: 'User was deleted successfully', class: 'alert alert-success' });
            searchById();
          } else {
            setMessage({ text: 'Failed to delete User', class: 'alert alert-danger' });
            searchById();
          }
        } catch (error) {
          setMessage({ text: 'Error deleting User', class: 'alert alert-danger' });
        }
      };

    const searchById = async () => {
        try {
            const response = await axios.get('http://localhost:8080/user/searchAll');
            if (response.data.length === 0) {
                setMessage({ text: 'No User found', class: 'alert alert-warning' });
            } else {
                setUser(response.data);
            }
        } catch (error) {
            setMessage({ text: 'Error loading User', class: 'alert alert-danger' });
        }
    };
    
    useEffect(() => {
        searchById();
    }, []);

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
                    <a href="/subscriber" className="side-link text-danger"><div className="d-flex"><FontAwesomeIcon icon={faBell} /><div className="link-text">Subscription</div></div></a>
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
                    <a className="nav-link text-dark mx-3" href="/"><h4>Subscribers</h4></a>
                </div>
                <div className="">
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" value={null} onChange={null}/>
                        <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={null}>Search</button>
                    </form>
                </div>
            </div>
            <div>{ message && <div class={ message.class }>{message.text}</div>}</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Password</th>
                        <th>UserRole</th>
                        <th>Added Date</th>
                        <th>Added Time</th>
                        <th>More Actions</th>
                    </tr>
                </thead>
                {user.length > 0 && (
                <tbody>
                    {user.map((user) => (
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.password}</td>
                            <td>{user.userRole}</td>
                            <td>{user.dateViewed}</td>
                            <td>{user.timeViewed}</td>
                            <td>
                                <button onClick={() => handleDelete(user.userId)} className="btn btn-outline-danger btn-sm">Delete</button>
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
