import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import CoordIcon from '@material-ui/icons/AccountTree';

const SchemeCoordinatorNav = () => {
    const items = [
        {title:'Review Tariff Rates',to:'/user/scheme-coordinator/tariffs'},
        {title:'Enter Meter Boxes',to:'/user/scheme-coordinator/meter-boxes'},
        {title:'Register Crimes',to:'/user/scheme-coordinator/crimes'},
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
           topic='Scheme Coord.'
           onClick={handleClick}>
            <CoordIcon/>
            </UserNavItem>
           <Menu
           items={items}
           anchorE1={anchorE1}
           onClose={handleClose}/>
           <Divider/>
        </React.Fragment>)
};

export default SchemeCoordinatorNav;