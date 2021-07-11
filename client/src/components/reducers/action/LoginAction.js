import axios from 'axios'
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from '../Type'

export const loginAction=(email,password)=>async(dispatch)=>{
    dispatch({type:LOGIN_LOADING})
    try{
        const res=await axios.post('/api/users/login',{email,password})
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
       localStorage.setItem('user',res.data)
    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.message})

    }

}