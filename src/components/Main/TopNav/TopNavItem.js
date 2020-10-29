import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const TopNavItem = ({topic,date}) => {
    return (
        <React.Fragment>
            <ListItem 
            button
            style={{
                padding:'3px 0 3px 10px'
            }}>                
                <ListItemText primary={
                    <React.Fragment>
                        <Typography variant='caption'>
                            {topic}
                        </Typography>
                        <br/>
                    </React.Fragment>                    
                } 
                secondary={
                    <Typography variant='caption'>
                        Date: <span style={{fontStyle:'italic'}}>{date}</span>
                    </Typography>
                }/>
            </ListItem>
        </React.Fragment>
    );
};

export default TopNavItem;