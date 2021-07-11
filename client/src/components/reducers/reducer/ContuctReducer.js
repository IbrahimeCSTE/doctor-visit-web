import { CONTUCT_FAIL, CONTUCT_LOADING, CONTUCT_SUCCESS } from "../Type"

const initialState={
    contuct:[],
    error:[],
    send:false,

}
export const contuctReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case CONTUCT_LOADING:
        return{send:false}
        case CONTUCT_SUCCESS:
        return{
            contuct:payload,
            send:true
        }
        case CONTUCT_FAIL:
        return{
            error:payload,
            send:false
        }
        
        default:
            return state
    }

}