import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import SalesIcon from '@material-ui/icons/Timeline';

const SalesRepresentativeNav = () => {
    const items = [
        {title:'All Meters',to:'/user/sales-representative/all-meters'},
        {title:'Crimes',to:'/user/sales-representative/crimes'},
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
           topic='Sales Rep.'
           onClick={handleClick}>
            <SalesIcon fontSize='small'/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>)
};

export default SalesRepresentativeNav;