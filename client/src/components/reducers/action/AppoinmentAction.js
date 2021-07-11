import axios from 'axios'
import { APPOINTMENT_FAIL, APPOINTMENT_LIST, APPOINTMENT_LOADING, APPOINTMENT_SUCCESS, LOGOUT } from '../Type'

export const appointmentAction=(appointDate,name,phone,email,male,age,weight)=>async(dispatch)=>{
    dispatch({type:APPOINTMENT_LOADING})
    try{
        const res=await axios.post('/api/users/appointment',{appointDate,name,phone,email,male,age,weight})
        dispatch({type:APPOINTMENT_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:APPOINTMENT_FAIL,payload:error.message})

    }

}

export const appointmentList=()=>async(dispatch)=>{
    dispatch({type:APPOINTMENT_LOADING})
    try{
        const res=await axios.get('/api/users/appointment')
        dispatch({type:APPOINTMENT_LIST,payload:res.data})

    }catch(error){
        dispatch({type:APPOINTMENT_FAIL,payload:error.message})

    }

}


export const logoutAction=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('user')
}