import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { appointmentList } from "../../reducers/action/AppoinmentAction";
import { logoutAction } from "../../reducers/action/AppoinmentAction";

const Sidebar = () => {
  const dispatch=useDispatch()
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
         
            <FontAwesomeIcon style={{cursor:'pointer'}} icon={faGripHorizontal} /> <span style={{cursor:'pointer'}}>Dashboard</span>
          
        </li>
        <li>
          <Link to="/appointment" className="text-white">
            <FontAwesomeIcon icon={faCalendar}  /> <span>Appointment</span>
          </Link>
        </li>
        <li>
            
          <h5 style={{cursor:'pointer',color:'white'}} onClick={()=>dispatch(appointmentList())}><FontAwesomeIcon icon={faFileAlt} /><small>Patients</small></h5>
          
        </li>
        <li>
          <Link to="/doctor/patients" className="text-white">
            <FontAwesomeIcon icon={faUsers} /> <span>Prescriptions</span>
          </Link>
        </li>
        <li>
          <Link to="/doctor/setting" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          
          <Link onClick={()=>dispatch(logoutAction())} className="nav-link mr-5 text-white" to="/">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
