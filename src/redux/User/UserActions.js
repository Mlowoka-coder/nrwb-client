import {LOG_IN, LOG_OUT} from './UserTypes';

export const logIn = (details)=>{
    return {
        type: LOG_IN,
        customer:(details.customerID)?true:false,
        employee:(details.employeeID)?details.position:null,
        customerID:details.customerID,
        employeeID:details.employeeID
    }
}

export const logOut =()=>{
    return {
        type: LOG_OUT,
    }
}

