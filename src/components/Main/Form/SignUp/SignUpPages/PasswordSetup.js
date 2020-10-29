import React from 'react';
import Input from '../../../Inputs/Input';
import Grid from '@material-ui/core/Grid';
import Heading from '../../Heading';
import Lock from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const FourthStep = () => {
    return (
        <React.Fragment><
            Heading title='Password Setup'>
        <Lock fontSize='small'/>
    </Heading>
    <Typography
    variant='caption'
    color='secondary'>
        *All fields are required*
    </Typography>
    <Grid
            container
            direction='row'>
                <Grid
                item
                sm={5}>
                    <Input 
                    name='password1'
                    type='password'
                    label='Password'/>                            
                </Grid>
                <Grid item sm={1}/>
                <Grid
                item
                sm={5}>
                    <Input 
                    name='password2'
                    type='password'
                    label='Confirm Password'/>
                </Grid>
            </Grid>
    </React.Fragment>
    );
};

export default FourthStep;