import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "../Type"

const initialState={
            login:[],
            error:[],
            loading:false,
            isAuth:false
}
export const loginReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case LOGIN_LOADING:
        return{loading:true}
        case LOGIN_SUCCESS:
        return{
            login:payload,
            loading:false,
            isAuth:true
        }
        case LOGOUT:
            return{
                login:[],
                error:[],
                loading:false,
                isAuth:false               
               
            }
        case LOGIN_FAIL:
        return{
            error:payload,
            loading:false
        }
        
        default:
            return state
    }

}