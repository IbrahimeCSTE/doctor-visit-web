import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registerAction } from '../reducers/action/RegisterAction';
import "./Style.css"
import Spinner from '../spinner/Spinner';
const Register = (props) => {
    const history=useHistory()
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.register.loading)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [password1,setPassword1]=useState('')
    const logAuth=useSelector(state=>state.login.isAuth)
    const regAuth=useSelector(state=>state.register.isAuth)
    const submitHandle=(e)=>{
        console.log(name,email,password,password1)
        e.preventDefault()
        if(password!==password1)
        alert("password mismatch")
        else
        dispatch(registerAction(name,email,password))
    }
    if(logAuth||regAuth){
       history.push('/')
      }
    return (
        <Fade left>
        {
            loading?<Spinner />:<div className="form">
                                <Link style={{fontSize:"20px"}} to="/"><i className="fa fa-home"></i>Back Home</Link>

            <h1 className="loginHeading" ><i className="fa fa-user"></i> Register Form</h1>
            <form  onSubmit={submitHandle}>
            <input type="text" value={name}
                 placeholder="Name" 
                 onChange={(e)=>setName(e.target.value)}
                 required
                 /><br />
                <input type="text" value={email}
                 placeholder="Email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 required
                 /><br />
                  <input type="password" value={password}
                 placeholder="Password" 
                 onChange={(e)=>setPassword(e.target.value)}
                  required
                  /><br />
                  <input type="password" value={password1}
                 placeholder="conform Password" 
                 onChange={(e)=>setPassword1(e.target.value)}
                  required
                  /><br />
                  <button className="btn btn-primary mb-4">Submit</button>

            </form>
            Already User?<Link to="/login">Login</Link>
        </div>
        }
        </Fade>
    );
};

export default Register;