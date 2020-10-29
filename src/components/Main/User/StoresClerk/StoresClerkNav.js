import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import ClerkIcon from '@material-ui/icons/BusinessCenter';

const StoresClerkNav = () => {
    const items = [
        {title:'Requests',to:'/user/stores-clerk/requests'},
        {title:'Stores',to:'/user/stores-clerk/view-stores'},
        {title:'Contact Finace',to:'/user/stores-clerk/contact-finance'},
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
           topic='Stores Clerk'
           onClick={handleClick}>
            <ClerkIcon/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>)
};

export default StoresClerkNav;