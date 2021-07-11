import axios from 'axios'
import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../Type'

export const registerAction=(name,email,password)=>async(dispatch)=>{
    dispatch({type:REGISTER_LOADING})
    try{
        const res=await axios.post('/api/users/register',{name,email,password})
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        localStorage.setItem('user',res.data)
    }catch(error){
        dispatch({type:REGISTER_FAIL,payload:error.message})

    }

}