import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import MonetizationOn from '@material-ui/icons/MonetizationOn';

const AccountantNav = () => {
    const items = [
        {title:'Finacial Requests',to:'/user/accountant/financial-request'},
        {title:'Tariff Change',to:'/user/accountant/tariff-change'},
        {title:'Billing',to:'/user/accountant/billing'},
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
           topic='Accoutant'
           onClick={handleClick}>
            <MonetizationOn/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>
    );
};

export default AccountantNav;