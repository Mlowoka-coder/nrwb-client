import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '../../Divider/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Advocation = () => {
    const items=[
        'Online Application',
        'Online Payment',
        'Trace transactions remotely',
        'Trace report progress and replies',
        'Never miss tariff changes'
    ]
    return (
        <React.Fragment>
            <Typography
            variant='h5'
            color='primary'>
                Open an Online Account Now
            </Typography>
            <Divider/>
            <List
            variant=''>
                {
                    items.map((item,id)=> <Item key={id} script={item}/>)
                }
                <ListItem>
                    
                </ListItem>
            </List>
        </React.Fragment>
    );
};

const Item = ({script})=>{
    return(
        <React.Fragment>
            <ListItem>
                <ListItemText secondary={script}/>
            </ListItem>
            
        </React.Fragment>
        
    )
}

export default Advocation;