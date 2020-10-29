import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import PersonPinCircle from '@material-ui/icons/PersonPinCircle';

const UserNav = () => {
    const items = [
        {title:'Connection Accounts',to:'/user/customer/connection-accounts'},
        {title:'Transactions',to:'/user/customer/transactions'},
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
           topic='Customer'
           onClick={handleClick}>
            <PersonPinCircle/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>
    );
};

export default UserNav;