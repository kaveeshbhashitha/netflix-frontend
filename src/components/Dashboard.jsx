import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:8080/user/searchAll')
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch view data
    axios.get('http://localhost:8080/view/searchViewData')
      .then(response => setViewData(response.data))
      .catch(error => console.error('Error fetching view data:', error));

    // Fetch video data
    axios.get('http://localhost:8080/video/searchAll')
      .then(response => setVideoData(response.data))
      .catch(error => console.error('Error fetching video data:', error));
  }, []);

  // Prepare data for the charts
  const prepareUserChartData = () => {
    const data = [['User Role', 'Count']];
    const userRoleCounts = userData.reduce((acc, user) => {
      acc[user.userRole] = (acc[user.userRole] || 0) + 1;
      return acc;
    }, {});

    for (const role in userRoleCounts) {
      data.push([role, userRoleCounts[role]]);
    }
    return data;
  };

  const prepareVideoChartData = () => {
    const data = [['Category', 'Count']];
    const videoCategoryCounts = videoData.reduce((acc, video) => {
      acc[video.category] = (acc[video.category] || 0) + 1;
      return acc;
    }, {});

    for (const category in videoCategoryCounts) {
      data.push([category, videoCategoryCounts[category]]);
    }
    return data;
  };

  const prepareViewChartData = () => {
    const data = [['Week', 'Views']];
    const viewWeekCounts = viewData.reduce((acc, view) => {
      const date = new Date(view.dateViewed);
      const week = `${date.getFullYear()}-W${Math.ceil((date.getDate() - 1) / 7)}`;
      acc[week] = (acc[week] || 0) + 1;
      return acc;
    }, {});

    for (const week in viewWeekCounts) {
      data.push([week, viewWeekCounts[week]]);
    }
    return data;
  };

  // Helper functions to get the most, least, and moderately viewed videos
  const getVideoViewCounts = () => {
    const videoViewCounts = viewData.reduce((acc, view) => {
      acc[view.videoTitle] = (acc[view.videoTitle] || 0) + 1;
      return acc;
    }, {});
    return videoViewCounts;
  };

  const getUserViewCounts = () => {
    const userViewCounts = viewData.reduce((acc, view) => {
      acc[view.userName] = (acc[view.userName] || 0) + 1;
      return acc;
    }, {});
    return userViewCounts;
  };

  const sortedVideoViewCounts = Object.entries(getVideoViewCounts()).sort((a, b) => b[1] - a[1]);
  const mostViewedVideo = sortedVideoViewCounts.length > 0 ? sortedVideoViewCounts[0] : ['N/A', 0];
  const leastViewedVideo = sortedVideoViewCounts.length > 0 ? sortedVideoViewCounts[sortedVideoViewCounts.length - 1] : ['N/A', 0];
  const moderateViewedVideo = sortedVideoViewCounts.length > 0 ? sortedVideoViewCounts[Math.floor(sortedVideoViewCounts.length / 2)] : ['N/A', 0];

  const sortedUserViewCounts = Object.entries(getUserViewCounts()).sort((a, b) => b[1] - a[1]);
  const mostActiveUser = sortedUserViewCounts.length > 0 ? sortedUserViewCounts[0] : ['N/A', 0];
  const leastActiveUser = sortedUserViewCounts.length > 0 ? sortedUserViewCounts[sortedUserViewCounts.length - 1] : ['N/A', 0];
  const moderateActiveUser = sortedUserViewCounts.length > 0 ? sortedUserViewCounts[Math.floor(sortedUserViewCounts.length / 2)] : ['N/A', 0];

  const videoCategoryCounts = videoData.reduce((acc, video) => {
    acc[video.category] = (acc[video.category] || 0) + 1;
    return acc;
  }, {});

  const videoTypeCounts = videoData.reduce((acc, video) => {
    acc[video.type] = (acc[video.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h1>Netflix Dashboard</h1>

      <div className="chart-container">
        <Chart
          chartType="PieChart"
          data={prepareUserChartData()}
          options={{ title: 'User Roles Distribution' }}
          width="100%"
          height="400px"
        />
      </div>

      <div className="chart-container">
        <Chart
          chartType="BarChart"
          data={prepareVideoChartData()}
          options={{ title: 'Video Categories Distribution' }}
          width="100%"
          height="400px"
        />
      </div>

      <div className="chart-container">
        <Chart
          chartType="LineChart"
          data={prepareViewChartData()}
          options={{ title: 'Views Over Time (Weekly)' }}
          width="100%"
          height="400px"
        />
      </div>

      <div className="chart-container">
        <Chart
          chartType="GeoChart"
          data={[
            ['Country', 'Popularity'],
            ['Sri Lanka', 100],
          ]}
          options={{
            title: 'User Locations',
            region: 'world',
            displayMode: 'regions',
            colorAxis: { colors: ['#e7711c', '#4374e0'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
          }}
          width="100%"
          height="400px"
        />
      </div>

      <div className="stats-container">
        <div className="stats-item text-dark">
          <h3>Most Viewed Video</h3>
          <p>{mostViewedVideo[0]} ({mostViewedVideo[1]} views)</p>
        </div>
        <div className="stats-item text-dark">
          <h3>Least Viewed Video</h3>
          <p>{leastViewedVideo[0]} ({leastViewedVideo[1]} views)</p>
        </div>
        <div className="stats-item text-dark">
          <h3>Moderate Viewed Video</h3>
          <p>{moderateViewedVideo[0]} ({moderateViewedVideo[1]} views)</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-item text-dark">
          <h3>Most Active User</h3>
          <p>{mostActiveUser[0]} ({mostActiveUser[1]} views)</p>
        </div>
        <div className="stats-item text-dark">
          <h3>Least Active User</h3>
          <p>{leastActiveUser[0]} ({leastActiveUser[1]} views)</p>
        </div> 
        <div className="stats-item text-dark">
          <h3>Moderate Active User</h3>
          <p>{moderateActiveUser[0]} ({moderateActiveUser[1]} views)</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-item text-dark">
          <h3>Videos by Category</h3>
          {Object.entries(videoCategoryCounts).map(([category, count]) => (
            <p key={category}>{category}: {count}</p>
          ))}
        </div>
        <div className="stats-item text-dark">
          <h3>Videos by Type</h3>
          {Object.entries(videoTypeCounts).map(([type, count]) => (
            <p key={type}>{type}: {count}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
