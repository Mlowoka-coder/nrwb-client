import React from 'react';
import Select from '../../../Inputs/Select';
import Grid from '@material-ui/core/Grid';
import Heading from '../../Heading';
import Location from '@material-ui/icons/LocationOnOutlined';
import Typography from '@material-ui/core/Typography';

const SecondStep = () => {
    return (
        <React.Fragment>
         <Heading title='Location Details'>
                 
                <Location fontSize='small'/>
            </Heading>
            <Typography
            variant='caption'
            color='secondary'>
                *This location will be used during water application*<br/>
                *All fields are required*
            </Typography>
            <Grid
                    container
                    direction='row'>
                        <Grid
                        item
                        sm={5}>
                            <Select 
                                name='district'
                                label='Current District'
                                items={[{
                                    value:'chitipa',
                                    label:'Chitipa'
                                },{
                                    value:'karonga',
                                    label:'Karonga'
                                },{
                                    value:'rumphi',
                                    label:'Rumphi'
                                },{
                                    value:'nkhatabay',
                                    label:'Nkhatabay'
                                },{
                                    value:'mzimba',
                                    label:'Mzimba'
                                },{
                                    value:'likoma',
                                    label:'Likoma'
                                }]}/>
                        </Grid>
                        <Grid item sm={1}/>
                        <Grid
                        item
                        sm={5}>
                            <Select 
                                name='area'
                                label='Area/Town/City'
                                items={[{
                                    value:'edingeni',
                                    label:'Edingeni'
                                },{
                                    value:'embangweni',
                                    label:'Embangweni'
                                },{
                                    value:'euthini',
                                    label:'Euthini'
                                },{
                                    value:'jenda',
                                    label:'Jenda'
                                },{
                                    value:'mzimba',
                                    label:'Mzimba Boma'
                                },{
                                    value:'mzuzu',
                                    label:'Mzuzu'
                                },]}/>                           
                        </Grid>
                    </Grid>
    </React.Fragment>
    );
};

export default SecondStep;