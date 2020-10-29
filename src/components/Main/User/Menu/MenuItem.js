import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const UserNav = ({topic, onClick, children}) => {
    return (
        <React.Fragment>
            <ListItem
            button
            onClick={onClick}>
                <ListItemIcon>
                    <span style={{color:'#3f51b5'}}>{children}</span>
                </ListItemIcon>
                <ListItemText primary={
                    <Typography 
                    variant='body2'
                    color='primary'>
                        {topic}
                    </Typography>
                }/>                
            </ListItem>
        </React.Fragment>
    );
};

export default UserNav;