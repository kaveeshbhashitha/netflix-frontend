import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import '../styles/video.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCheck, faUserCircle, faUserShield, faUserTimes} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [categorizedPayments, setCategorizedPayments] = useState({
        Mobile: [],
        Basic: [],
        Standard: [],
        Premium: []
    });

    useEffect(() => {
        axios.get('http://localhost:8080/payment/searchAll')
            .then(response => {
                categorizePayments(response.data);
            })
            .catch(error => {
                console.error('Error fetching payment data:', error);
            });
    }, []);

    const categorizePayments = (data) => {
        const categories = {
            Mobile: [],
            Basic: [],
            Standard: [],
            Premium: []
        };

        data.forEach(payment => {
            if (payment.packageName in categories) {
                categories[payment.packageName].push(payment);
            }
        });

        setCategorizedPayments(categories);
    };

    const data = [
        ['Package', 'Number of Records'],
        ['Mobile', categorizedPayments.Mobile.length],
        ['Basic', categorizedPayments.Basic.length],
        ['Standard', categorizedPayments.Standard.length],
        ['Premium', categorizedPayments.Premium.length]
    ];

    const options = {
        title: 'Number of Records by Package',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Total Records',
            minValue: 0,
        },
        vAxis: {
            title: 'Package',
        },
    };

  return (
    <div className="dashboard">
        <div className='d-flex justify-content-between px-2'>
            <div className="stats-item-1 text-dark p-3 shadow">
                <h4 className='d-flex text-light'>Mobile Packege<div className='mx-3'></div><div><FontAwesomeIcon icon={faUserShield }/></div></h4>
                <p className='text-light'>({categorizedPayments.Mobile.length} subscribers)</p>
            </div>
            <div className="stats-item-2 text-dark p-3 shadow">
                <h4 className='d-flex text-light'>Basic Package<div className='mx-3'></div><div><FontAwesomeIcon icon={faUserTimes }/></div></h4>
                <p className='text-light'>({categorizedPayments.Basic.length} subscribers)</p>
                
            </div> 
            <div className="stats-item-3 text-dark p-3 shadow">
                <h4 className='d-flex text-light'>Standard Package<div className='mx-3'></div><div><FontAwesomeIcon icon={faUserCheck }/></div></h4>
                <p className='text-light'>({categorizedPayments.Standard.length} subscribers)</p>
            </div>
            <div className="stats-item-4 text-dark p-3 shadow">
                <h3 className='d-flex text-light'>Premium Package<div className='mx-3'></div><div><FontAwesomeIcon icon={faUserCircle }/></div></h3>
                <p className='text-light'>({categorizedPayments.Premium.length} subscribers)</p>
            </div>
        </div>
        
        <div>
            <h1>Payment Records Categorized by Package</h1>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    </div>
  );
};

export default Dashboard;
