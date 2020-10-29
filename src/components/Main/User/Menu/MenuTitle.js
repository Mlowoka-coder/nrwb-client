import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

const MenuFunc = ({items,anchorE1,onClose}) => {
    return (
        <React.Fragment>
            <Menu
           anchorEl={anchorE1}
           keepMounted
           open={Boolean(anchorE1)}
           onClose={onClose}>
               {items.map((item,id)=>(
                    <NavLink
                        to={`${item.to}`}
                        style={{
                            textDecoration:'none'
                        }}>
                    <MenuItem 
                    onClick={onClose} 
                    key={id}>
                       
                            <Typography
                            variant='caption'
                            color='primary'>
                                {item.title}
                            </Typography>
                        
                        
                    </MenuItem>
                    </NavLink>
               ))}
           </Menu>
        </React.Fragment>
    );
};

export default MenuFunc;