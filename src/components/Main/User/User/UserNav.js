import React from 'react';
import UserNavItem from '../Menu/MenuItem';
import Divider from '@material-ui/core/Divider';
import Menu from '../Menu/MenuTitle';
import Waves from '@material-ui/icons/Waves';

const UserNav = () => {
    const items = [
        {title:' Connection Application',to:'/user/new-water-connection'},
        {title:'Report',to:'/user/water-connection-fault-report'},
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
           topic='Connection'
           onClick={handleClick}>
               <Waves/>
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