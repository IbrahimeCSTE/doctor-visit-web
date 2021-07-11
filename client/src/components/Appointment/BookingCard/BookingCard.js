import React from "react";
import { useSelector } from "react-redux";
import AppointForm from "../AppointmentForm/AppointForm";
import { useHistory} from 'react-router-dom'
const BookingCard = ({ booking, date }) => {
  const logAuth=useSelector(state=>state.login.isAuth)
  const regAuth=useSelector(state=>state.register.isAuth)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history=useHistory()
  function openModal() {
    if(!(logAuth||regAuth)){
      history.push('/login')
    }
    else
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 style={{ color: "blue" }} className="card-title text-brand">
            {booking.subject}
          </h5>
          <h6>{booking.visitingHour}</h6>
          <p>{booking.totalSpace} SPACES AVAILABLE</p>
          <button
            onClick={openModal}
            className="btn btn-primary text-uppercase"
          >
            Book Appointment
          </button>
          <AppointForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            bookingOn={booking.subject}
            date={date}
          ></AppointForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
