import React from 'react';
import API from '../../../utils/API';

const Dashboard = () => {
  const disconnect = () => {
    API.logout();
    window.location = '/';
  };

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <button onClick={() => disconnect()} type="submit">
        Se deconnecter
      </button>
    </div>
  );
};

export default Dashboard;
