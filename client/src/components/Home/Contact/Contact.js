import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contuctAction } from "../../reducers/action/ContuctAction";
import "./Contact.css";
const Contact = () => {
  const dispatch=useDispatch()
  const[email,setEmail]=useState('')
  const[subject,setSubject]=useState('')
  const[message,setMessage]=useState('')
  const contuct=useSelector(state=>state.contuct)
  const {send}=contuct
  const submitHandle=(e)=>{
    e.preventDefault()
    dispatch(contuctAction(email,subject,message))
  }
  return (
    <section id="contuct" className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-primary">Contact</h5>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={submitHandle}>
            <div className="form-group">
              <input
                type="text"
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                onChange={(e)=>setSubject(e.target.value)}
                className="form-control"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                onChange={(e)=>setMessage(e.target.value)}
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
                required
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
            <div>
              {
                send && <h1 style={{color:"white"}} className="text-center">Send Successfuly</h1>
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
