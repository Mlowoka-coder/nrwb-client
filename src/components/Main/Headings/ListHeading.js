import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '../../Divider/Divider'


const ListHeading = ({title}) => {
    return (
        <React.Fragment>
            <Typography
            color='primary'>
                {title}
            </Typography>
            <Divider/>
        </React.Fragment>
    );
};

export default ListHeading;