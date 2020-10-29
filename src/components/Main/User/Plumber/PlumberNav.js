import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import PlumberIcon from '@material-ui/icons/Build';

const Plumber = () => {
    const items = [
        {title:'Plumbing Tasks',to:'/user/plumber/tasks'},
        {title:'Request Tools',to:'/user/plumber/request-tools'},
        {title:'Customer Crimes',to:'/user/plumber/customer-crimes'},
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
           topic='Plumber'
           onClick={handleClick}>
            <PlumberIcon fontSize='small'/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>)
};

export default Plumber;