import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import SupervisorIcon from '@material-ui/icons/AssignmentInd';

const SupervisorNav = () => {
    const items = [
        {title:'Plumber Tasks',to:'/user/supervisor/tasks'},
        {title:'Sales Rep.',to:'/user/supervisor/sales-rep'},
        {title:'Register Crimes',to:'/user/supervisor/crimes'},
    ]

    const [anchorE1, setAnchorE1] = React.useState(null);

    const handleClick =(event)=>{
        setAnchorE1(event.currentTarget);
    }

    const handleClose =()=>{
        setAnchorE1(null)
    }

    return (
        <React.Fragment>
           <UserNavItem
           topic='Supervisor'
           onClick={handleClick}>
            <SupervisorIcon/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>)
};

export default SupervisorNav;