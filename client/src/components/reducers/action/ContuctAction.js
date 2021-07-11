import axios from 'axios'
import { CONTUCT_FAIL, CONTUCT_LOADING, CONTUCT_SUCCESS } from "../Type"

export const contuctAction=(email,subject,message)=>async(dispatch)=>{
    dispatch({type:CONTUCT_LOADING})
    try{
        const res=await axios.post('/api/users/contuct',{email,subject,message})
        dispatch({type:CONTUCT_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:CONTUCT_FAIL,payload:error.message})

    }

}