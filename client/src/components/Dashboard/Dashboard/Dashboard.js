import React from "react";
import AppointmentList from "../AppointmentList/AppointmentList";
import Sidebar from "../Sidebar/Sidebar";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {

  return (
    <div className="row container-fluid">
      <div className="sideMenu col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <AppointmentList></AppointmentList>
      </div>
    </div>
  );
};

export default Dashboard;
