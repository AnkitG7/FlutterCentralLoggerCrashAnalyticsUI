import React, {  useState } from 'react';
import './MyComponent.css';


const CentralLoggerData = () => {
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [uname, setUname] = useState('');
  const [userType, setUserType] = useState('');
  const [logLevel, setlogLevel] = useState('');
  const [statusCode, setstatusCode] = useState('');
  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/centrallogger/centralLoggerData";
    const payload = {};

    if (fromTime !== '') {
      payload.from_time = fromTime;
    }
    if (toTime !== '') {
      payload.to_time = toTime;
    }
    if (identifier !== '') {
      payload.identifier = identifier;
    }
    if (uname !== '') {
      payload.uname = uname;
    }
    if (userType !== '') {
      payload.userType = userType;
    }
    if (logLevel !== '') {
      payload.logLevel = logLevel;
    }
    if (statusCode !== '') {
      payload.statusCode = statusCode;
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
      setResponseData(data); // Update the state with the response data
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
          <label className="form-label">Identifier:</label>
          <input className="form-input" type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Uname:</label>
          <input className="form-input" type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">User Type:</label>
          <input className="form-input" type="text" value={userType} onChange={(e) => setUserType(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">logLevel:</label>
          <input className="form-input" type="text" value={logLevel} onChange={(e) => setlogLevel(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">StatusCode:</label>
          <input className="form-input" type="text" value={statusCode} onChange={(e) => setstatusCode(e.target.value)} />
        </div>
        <button className="form-button" type="submit">Submit</button>
      </form>

      <h1 className="title">API Response:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Uname</th>
            <th>User Type</th>
            <th>Timetaken</th>
            <th>Date</th>
            <th>Log Level</th>
            <th>Time</th>
            <th>Service</th>
            {/* <th>JWT</th> */}
            <th>StatusCode</th>
            {/* <th>Service ID</th> */}
            {/* <th>Thread</th> */}
            <th>Datetime</th>
          </tr>
        </thead>
        <tbody>
        {responseData.error ? (
  <tr>
    <td colSpan="11">{responseData.error}</td>
  </tr>
) : (
  responseData.map((entry, index) => (
    <tr key={index}>
      <td>{entry.identifier}</td>
      <td>{entry.uname}</td>
      <td>{entry.userType}</td>
      <td>{entry.timetaken}</td>
      <td>{entry.date}</td>
      <td>{entry.logLevel}</td>
      <td>{entry.time}</td>
      <td>{entry.service}</td>
      {/* <td>{entry.jwt}</td> */}
      <td>{entry.statusCode}</td>
      {/* <td>{entry.serviceid}</td> */}
      {/* <td>{entry.thread}</td> */}
      <td>{entry.datetime}</td>
    </tr>
  ))
)}

          {/* {responseData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.identifier}</td>
              <td>{entry.uname}</td>
              <td>{entry.userType}</td>
              <td>{entry.timetaken}</td>
              <td>{entry.date}</td>
              <td>{entry.logLevel}</td>
              <td>{entry.time}</td>
              <td>{entry.service}</td>
              {/* <td>{entry.jwt}</td> 
              <td>{entry.statusCode}</td>
              {/* <td>{entry.serviceid}</td>
              {/* <td>{entry.thread}</td> 
              <td>{entry.datetime}</td>
            </tr>
          ))} */}

        </tbody>
      </table>
    </div>
  );
}

export default CentralLoggerData;
