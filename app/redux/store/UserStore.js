import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from '../reducers'
const client = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json'
  });

export const store=createStore(reducers,applyMiddleware(thunk,axiosMiddleware(client)));

export const INITIAL_STATE={
    user : "Anonymous",
    isLoggedIn:false,
    newuser:{
        firstName:'firstname',
        lastName:'',
        phoneNumber:'',
    }
    
};