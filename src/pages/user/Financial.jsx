import React, {useEffect} from 'react'
import '../../styles/videolist.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faBell, faCoins, faFeed, faFlag, faGear, faHouse, faInfoCircle, faList, faPlay, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Financials from '../../components/Financial';
import useAuthCheck from '../../AuthCheck';
import axios from 'axios';

export default function Financial() {
    useAuthCheck();
    const[isNavOpen, setIsNavOpen] = useState(false);
    const[payData, setPayData] = useState([]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/payment/searchAll')
            .then(response => {
                setPayData(response.data);
            })
            .catch(error => {
                console.error('Error fetching payment data:', error);
            });
    }, []);

  return (
    <div>
        <div id="mySidenav" style={{ width: isNavOpen ? '0' : '250px' }} className="sidenav">
            <div className="logo">
                <img src={logo} style={{width:'auro', height: '40px'}} alt="Logo"/>
            </div>
            <div className="d-flex justify-content-center py-3">
                <div className="mt-2">
                    <a href="/" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faHouse}/> <div className="link-text">Home</div></div></a>
                    <a href="/video" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faPlay}/><div className="link-text">Video</div></div></a>
                    <a href="/subscriber" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faBell} /><div className="link-text">Subscription</div></div></a>
                    <a href="/financial" className="side-link text-danger"><div className="d-flex"><FontAwesomeIcon icon={faCoins} /><div className="link-text">Financial</div></div></a>
                    <a href="/trending" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faUpDown}/><div className="link-text">Trending</div></div></a>
                    <a href="/statistical" className="side-link"><div className="d-flex"><FontAwesomeIcon icon={faBarChart}/><div className="link-text">Statistics</div></div></a>
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
                    <a className="nav-link text-dark mx-3" href="/"><h4>Financial Data</h4></a>
                </div>
                <div className="">
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search"/>
                        <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className='p-4 border rounded'>
                <Financials />
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>User Email</th>
                        <th>Package ID</th>
                        <th>Package Name</th>
                        <th>Amount</th>
                        <th>Added Date</th>
                        <th>Added Time</th>
                    </tr>
                </thead>
                {payData.length > 0 && (
                <tbody>
                    {payData.map((pay) => (
                        <tr>
                            <td>{pay.paymentId}</td>
                            <td>{pay.userEmail}</td>
                            <td>{pay.packageId}</td>
                            <td>{pay.packageName}</td>
                            <td>USD {pay.packagePrice}/Month</td>
                            <td>{pay.datePaid}</td>
                            <td>{pay.timePaid}</td>

                        </tr>
                    ))}    
                </tbody>
                )}
            </table>
            <div></div>
        </div>
    </div>
  )
}
