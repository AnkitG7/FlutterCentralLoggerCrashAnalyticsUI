import React, { useState } from 'react';
import './MyComponent.css';
const CrashAnalyticsData = () => {
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [message, setMessage] = useState('');
  const [logLevel, setlogLevel] = useState('');
  const [responseData, setResponseData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8081/crashanalytics/crashAnalyticsData";
    const payload = {};
    if (fromTime !== '') {
      payload.from_time = fromTime;
    }
    if (toTime !== '') {
      payload.to_time = toTime;
    }
    if (logLevel !== '') {
      payload.logLevel = logLevel;
    }
    if (message !== '') {
      payload.message = message;
    }
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      setResponseData(data);
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
          <input className="form-input" type="text" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">To Time:</label>
          <input className="form-input" type="text" value={toTime} onChange={(e) => setToTime(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <input className="form-input" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">logLevel:</label>
          <input className="form-input" type="text" value={logLevel} onChange={(e) => setlogLevel(e.target.value)} />
        </div>
        <button className="form-button" type="submit">Submit</button>
      </form>
      <h1 className="title">API Response:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Log Level</th>
            <th>Time</th>
            <th>Message</th>
            <th>Service ID</th>
            <th>Thread</th>
            <th>Datetime</th>
          </tr>
        </thead>
        <tbody>
          {responseData.error ? (
            <tr>
              <td colSpan="7">{responseData.error}</td>
            </tr>
          ) : (
            responseData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.logLevel}</td>
                <td>{entry.time}</td>
                <td>{entry.message}</td>
                <td>{entry.serviceid}</td>
                <td>{entry.thread}</td>
                <td>{entry.datetime}</td>
              </tr>
            ))
          )}

          {/* {responseData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.logLevel}</td>
              <td>{entry.time}</td>
              <td>{entry.message}</td>
              <td>{entry.serviceid}</td>
              <td>{entry.thread}</td>
              <td>{entry.datetime}</td>
            </tr>
          )
          )} */}
        </tbody>
      </table>
    </div>
  );
}
export default CrashAnalyticsData;
