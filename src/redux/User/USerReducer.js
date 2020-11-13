import {
    LOG_IN,
    LOG_OUT
} from './UserTypes';

const initialState = {
    loggedIn: false,
    accID:'',
    role:[false, null],
    customerID:'',
    employeeID:'', 
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                loggedIn: true,
                role:[action.customer,action.employee],
                customerID:action.customerID,
                employeeID:action.employeeID
            }
        case LOG_OUT:
            return{
                ...state,
                loggedIn: false,
                role:[false,null],
                customerID:'',
                employeeID:''
            }
        default: return state;
    }
}