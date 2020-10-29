import React from 'react';
import SignUp from '../Main/Form/SignUp/SignUp';
import LogIn from './LogIn';

const ModalFunction = ({onClick}) => {
    const [loggingIn, changeView] = React.useState(true);
    const onChangeView =()=>{
        changeView(!loggingIn)
    }
    return (
        <React.Fragment>
            {
                loggingIn?
                <LogIn changeView={onChangeView} onClose={onClick}/>:
                <SignUp changeView={onChangeView} onClose={onClick}/>
            }            
        </React.Fragment>
    );
};

export default ModalFunction;
