import React from "react";
import chair from "../../../images/Mask Group 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ ChangeDate }) => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center mb-5">
      <div className="col-md-4  offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <div className='ml-5'>
          <Calendar onChange={ChangeDate} value={new Date()} />
        </div>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
