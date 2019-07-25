import { combineReducers } from 'redux';

const RootReducer = {
    reducerOne : ( state = { login : true } , action ) => {
        return state;
    } 
}

export default combineReducers(RootReducer);