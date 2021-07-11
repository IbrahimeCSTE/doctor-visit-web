import {  LOGOUT, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../Type"

const initialState={
           register:{
            register:[],
            error:[],
            loading:false,
            isAuth:false
           }

}
export const registerReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case REGISTER_LOADING:
        return{loading:true}
        case REGISTER_SUCCESS:
        return{
            register:payload,
            loading:false,
            isAuth:true
        }
        case LOGOUT:
            return{
                    register:[],
                    error:[],
                    loading:false,
                    isAuth:false
                   
               
            }
        case REGISTER_FAIL:
        return{
            error:payload,
            loading:false
        }
        
        default:
            return state
    }

}