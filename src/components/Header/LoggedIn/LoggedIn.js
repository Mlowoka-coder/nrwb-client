import React from 'react';
import Button from '../../Button/OutlinePrimary'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import {NavLink} from 'react-router-dom'

const LoggedIn = () => {
    return (
        <React.Fragment>
            <NavLink to='/user' exact>
                <Button title={'Home'}/>
            </NavLink>
            <NavLink to='/contact'>
                <Button title={'Contact'}/>
            </NavLink>
            <NavLink to='/user/settings'>
                <Button title={'John (Plumber)'}>
                <SettingsOutlined
                style={{marginLeft:'5px'}}
                fontSize='small'/>
                </Button>
            </NavLink>
            <Button title={'Log Out'}/>
        </React.Fragment>
    );
};

export default LoggedIn;