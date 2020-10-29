import React from 'react';
import Button from '../../Button/OutlinePrimary';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '../../Modal/Modal';
import {NavLink} from 'react-router-dom';

const LoggedOut = () => {
    const [open,setOpen] = React.useState(false);
    const handleToggle = ()=> {setOpen(!open)};
    return (
        <React.Fragment>
                <NavLink to='/' exact>
                <Button title={'Home'}/>
                </NavLink>
                <NavLink to='/contact'>
                <Button title={'Contact'}/>
                </NavLink>
                <NavLink to='/about'>
                <Button title={'About'}/>
                </NavLink>
                <Button title={'Log In'} onClick={handleToggle}/>
                <Backdrop
                style={{zIndex:'2'}}
                open={open}>
                    <Modal onClick={handleToggle}/>
                </Backdrop>
            
        </React.Fragment>
    );
};

export default LoggedOut;