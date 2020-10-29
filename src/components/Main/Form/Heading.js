import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';

const Heading = ({title,children}) => {
    return (
        <React.Fragment>
            <React.Fragment>
            <Paper
            variant='outlined'
            style={{
                padding:'0px',
                display:'flex',
                alignItems:'center',
                border:'none'
            }}>
                <Icon
                fontSize='small'
                style={{
                    padding:'0 10px 2px 0'
                }}>
                    {children}
                </Icon>
                <Typography 
                variant='subtitle1'>
                    {title}
                </Typography>
            </Paper>
            <hr/>
        </React.Fragment>
        </React.Fragment>
    );
};

export default Heading;