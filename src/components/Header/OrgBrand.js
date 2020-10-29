import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Logo from './logo.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const OrgBrand = () => {
    return (
        <React.Fragment>
            <Grid
            direction='row'
            container
            alignItems='center'>
                <Grid item sm={5}/>
                <Grid item sm={1}>
                    <Avatar src={Logo}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography 
                    variant='h6'
                    color='primary'>
                        Northern Region Water Board
                    </Typography>
                </Grid>
                
                
            </Grid>
                
        </React.Fragment>
    );
};

export default OrgBrand;