import React, { useState } from 'react';
import './MyComponent.css';

const CrashAnalyticsSummary = () => {
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [logLevel, setLogLevel] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/crashanalytics/crashAnalyticsSummary";
    const payload = {};

    if (fromTime !== '') {
      payload.from_time = fromTime;
    }
    if (toTime !== '') {
      payload.to_time = toTime;
    }
    if (key !== '') {
      payload.key = key;
    }
    if (logLevel !== '') {
      payload.logLevel = logLevel;
    }
    if (message !== '') {
      payload.message = message;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setResponseData(data);
      setTableHeaders(data[0] ? Object.keys(data[0]) : []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">API Request</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">From Time:</label>
          <input
            className="form-input"
            
            type="text"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">To Time:</label>
          <input
            className="form-input"
            type="text"
            
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Key:</label>
          <input
            className="form-input"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message:</label>
          <input
            className="form-input"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">logLevel:</label>
          <input
            className="form-input"
            type="text"
            value={logLevel}
            onChange={(e) => setLogLevel(e.target.value)}
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>

      {/* <h1 className="title">API Response:</h1> */}
      {/* <h1 className="title">API Response:</h1> */}

<h1 className="title">API Response:</h1>
<table className="table">
  <thead>
    <tr>
      <th>Data</th>
      <th>Count</th>
    </tr>
  </thead>
  <tbody>
    {Object.entries(responseData).map(([Data, count]) => (
      <tr key={logLevel}>
        <td>{Data}</td>
        <td>{count}</td>
      </tr>
    ))}
  </tbody>
</table>


      
    </div>
  );
};

export default CrashAnalyticsSummary;


