import React from 'react';
import Button from '../../Button/OutlinePrimary'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import {NavLink} from 'react-router-dom'
import {logOut} from '../../../redux/User/UserActions'
import {connect} from 'react-redux';

const LoggedIn = ({logOut}) => {
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
            <Button title={'Log Out'} onClick={logOut}/>
        </React.Fragment>
    );
};


const mapDispatchToProps = (dispatch)=>{
    return{
        logOut:()=>dispatch(logOut()),
    }
}


export default connect(null,mapDispatchToProps)(LoggedIn);