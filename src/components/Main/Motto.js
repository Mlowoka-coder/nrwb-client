import React from 'react';
import Typography from '@material-ui/core/Typography';

const Motto = (props) => {
    return (
        <Typography variant='subtitle2' color='primary' {...props}>
            From<br/>
            Basics<br/>
            To Excellence
        </Typography>
    );
};

export default Motto;