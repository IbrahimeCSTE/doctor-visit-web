import React from "react";
import chair from "../../../images/Mask Group 1.png";
import { useHistory } from "react-router-dom";
const HeaderMain = () => {
  let history = useHistory();
  const getAppointment = () => {
    history.push("/appointment");
  };

  return (
    <main style={{ height: "600px" }} className="row mt-5 p-2 d-flex align-items-center">
      <div className="col-md-4  offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <button onClick={getAppointment} className="btn btn-primary">
          GET APPOINTMENT
        </button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
