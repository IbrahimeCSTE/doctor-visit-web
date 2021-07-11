import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppointmentList = () => {
  const appointment=useSelector(state=>state.appoint.appointList)

  return (
      <div>
        {
          appointment && 
          <div>
          <h1><Link to="/"><i className="fa fa-home"></i> Back Home</Link></h1>
          <h2>Appointment List({appointment.length})</h2>
          <br />
          <div className="row">
            <div className="col-md-2">
              <h5>Name</h5>
              {appointment.map((result) => (
                <p key={result._id}>{result.name}</p>
              ))}
            </div>
            <div className="col-md-4">
              <h5>Phone</h5>
              {appointment.map((result) => (
                <p key={result._id}>{result.phone}</p>
              ))}
            </div>
            <div className="col-md-6">
              <h5>AppointDate:</h5>
              {appointment.map((result) => (
                <p key={result._id}>{result.appointDate}</p>
              ))}
            </div>
          </div>
        </div>
        }
      </div>
  
    
  );
};

export default AppointmentList;
