import { INITIAL_STATE } from "../store/UserStore";
import { FIRST_NAME_CHANGED, HANDLE_INPUT, SEND_SMS, INPUT_ERROR, NEXT_INPUT, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, SMS_VALIDATION_SUCCESS, SMS_VALIDATION_FAILURE } from "../actions/types/inscriptionTypes";
const keys=["firstname","lastname","phonenumber"];
export const formReducer=(state = {
    firstname:"mitto",
    lastname : "daaaa",
    phonenumber: "",
    currentposition:0,
    sending:false,
    key:"firstname",
    value:""    ,
    errormessage:""

}, action) => {
    switch(action.type){
        case HANDLE_INPUT:
            return {

                ...state,[action.payload.key]:action.payload.value,
                key:action.payload.key,
                value:action.payload.value
            }
        case SEND_SMS:
            return {
                ...state,
                currentposition:action.payload.position,
                key:keys[action.payload.position],
                value:"",
                errormessage:null
            }
        case NEXT_INPUT:{
            return {
                ...state,
                sending:true
            }
        }
        case SMS_VALIDATION_SUCCESS:
        console.warn("SMS validation succes");
            return {
                ...state,
                sending:false

        }
        case SMS_VALIDATION_FAILURE:
            alert("failure")
            return {
                ...state,
                sending:false
            }

        case INPUT_ERROR:
            return {
                ...state,
                errormessage:action.payload.error
            }
        default:
            return state
    }
}
