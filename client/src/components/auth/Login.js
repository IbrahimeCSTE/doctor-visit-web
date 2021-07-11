import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginAction } from '../reducers/action/LoginAction';
import Spinner from '../spinner/Spinner';
import "./Style.css"
const Login = () => {
    const history=useHistory()
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.login.loading)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const logAuth=useSelector(state=>state.login.isAuth)
    const regAuth=useSelector(state=>state.register.isAuth)
    const submitHandle=(e)=>{
        e.preventDefault()
        dispatch(loginAction(email,password))
    }
    if(logAuth||regAuth){
        history.push('/')
      }
    return (
        <Fade left>
        
        {
            loading?<Spinner />:<div className="form">
                <Link style={{fontSize:"20px"}} to="/"><i className="fa fa-home"></i>Back Home</Link>
            <h1 className="loginHeading" ><i className="fa fa-user"></i> Login Form</h1>
            <form  onSubmit={submitHandle}>
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
                  <button className="btn btn-primary mb-4">Submit</button>

            </form>
            New User?<Link to="/register">Register</Link>
        </div>
        }
        </Fade>
    );
};

export default Login;