import { APPOINTMENT_FAIL, APPOINTMENT_LIST, APPOINTMENT_LOADING, APPOINTMENT_SUCCESS } from "../Type"

const initialState={

       appointment:[],
       error:[],
       loading:false,
       getAppoint:false

}
export const appointmentReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case APPOINTMENT_LOADING:
        return{loading:true}
        case APPOINTMENT_SUCCESS:
        return{
            ...state,
            appointment:[payload],
            loading:false,
            getAppoint:true
        }
        case APPOINTMENT_LIST:
            return{
                
                appointList:payload,
                loading:false,
                getAppoint:true
            }
        case APPOINTMENT_FAIL:
        return{
            error:payload,
            loading:false
        }
        
        default:
            return state
    }

}