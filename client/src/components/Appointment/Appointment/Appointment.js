import React, { useState } from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppontment/BookAppointment";

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const ChangeDate = (date) => {
    setSelectDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppointmentHeader ChangeDate={ChangeDate}></AppointmentHeader>
      <BookAppointment date={selectDate}></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
