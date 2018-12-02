import { HANDLE_INPUT, SEND_SMS, INPUT_ERROR, NEXT_INPUT, REGISTER_USER  } from './types/inscriptionTypes'
import validate from '../../utils/formValidation';
import  { API, baseUrl, register } from '../../utils/api';
import axios from "axios";
export const handleInput=(key,value)=>{
    
    return {
        type: HANDLE_INPUT,
        payload: {
            key: key,
            value:value,
        }
    }
}
export const validateInput=(key,value)=>{
    const error=validate(key,value)
    if(error){
        return {
            type: INPUT_ERROR,
            payload:{
                error:error
            } 
        }
    }else{
        return {
            type:INPUT_ERROR,
            payload:{
                error:null
            }

        }
    }
}

export const nextInput=(position,key,value)=>{
   const error=validate(key,value)



    if(error){
        return{
            type:INPUT_ERROR,
            payload:{
                
                error:error
            }
        }
    }else{
        if(position==2){
                return (dispatch,getState)=>{
                    console.warn(getState().form);
                  /*  axios.post(baseUrl+register,getState().form).then((data)=>{
                        console.warn(data)
                    }).catch(error=>{
                        alert("erreur");
                        console.warn(error)
                    })*/
                    axios.get(baseUrl).then(data=> alert("succes")).catch(err=>console.warn(err))
                    dispatch({
                        type:REGISTER_USER,
                        payload:{
                            request:{
                                url:"/"
                            }
                        }
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:SEND_SMS,
                            payload:{
                                position:1
                            }
                        })
                    },2000)
                }
               

        }else{
            return{
                type:SEND_SMS,
                payload:{
                    position:position+1
                }
            }
        }
       
    }
}
