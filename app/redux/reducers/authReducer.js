import { INITIAL_STATE } from "../store/UserStore";
import { REGISTER_USER } from "../actions/types/inscriptionTypes";



export const authReducer = (state= {
    user : "Anonymous",
    isLoggedIn:false,
    newuser:{
        firstName:'firstname',
        lastName:'',
        phoneNumber:'',
    }
} , action)=>
    {
        switch(action.type){
            case REGISTER_USER:
                return {
                    ...state,
                    loading:true,
                    
                }
           
            default:
                return state
        }

}

