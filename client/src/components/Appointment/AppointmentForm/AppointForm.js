import React, { useState } from "react";
import Modal from "react-modal";

import {useDispatch, useSelector} from 'react-redux'
import { appointmentAction } from "../../reducers/action/AppoinmentAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointForm = ({ modalIsOpen, closeModal, bookingOn, date }) => {
  const dispatch=useDispatch()
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [male,setMale]=useState('male')
  const [age,setAge]=useState('')
  const [weight,setWeight]=useState('')
  const [appointDate,setAppointDate]=useState('')
  const appoint=useSelector(state=>state.appoint)
  const{loading}=appoint
  
  const handleSubmit=(e)=>{
    e.preventDefault()    
    dispatch(appointmentAction(appointDate,name,phone,email,male,age,weight))
    if(!loading){
      closeModal()
    }

  }
  
  return ( 
    <>
    {
      loading?<h1>Successfully</h1>:<div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{bookingOn}</h2>
        <h4 className="text-center">On {date.toDateString()}</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          
          <input
              type="text"
              value={appointDate}
              onChange={(e)=>setAppointDate(e.target.value)}
              placeholder="DD/MM/YYYY"
              className="form-control"
              required
            />

            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              className="form-control"
              required
            />
    
          </div>
          <div className="form-group">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Phone Number"
              className="form-control"
              required
            />
            
          </div>
          <div className="form-group">
            <input
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              className="form-control"
              required
            />
            
          </div>
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                value={male}
               onChange={(e)=>setMale(e.target.value)}
              >
                <option disabled={true}>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              
            </div>
            <div className="col-4">
              <input
                className="form-control"
                value={age}
              onChange={(e)=>setAge(e.target.value)}
                placeholder="Your Age"
                type="number"
                required
              />
              
            </div>
            <div className="col-4">
              <input
                className="form-control"
                value={weight}
              onChange={(e)=>setWeight(e.target.value)}
                placeholder="Weight"
                type="number"
                required
              />
              
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
    }
    </>
  );
};

export default AppointForm;
