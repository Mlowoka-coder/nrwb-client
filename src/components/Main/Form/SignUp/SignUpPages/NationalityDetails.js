import React from 'react';
import Input from '../../../Inputs/Input';
import Select from '../../../Inputs/Select';
import Grid from '@material-ui/core/Grid';
import Heading from '../../Heading';
import Home from '@material-ui/icons/HomeOutlined';
import Typography from '@material-ui/core/Typography';

const ThirdStep = () => {
    return (
        <React.Fragment>
          <Heading title='Nationality Details'>
                <Home fontSize='small'/>
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
                            name='nationality'
                            type='text'
                            label='Nationality'/>                            
                        </Grid>
                        <Grid item sm={1}/>
                        <Grid
                        item
                        sm={5}>
                            <Select 
                                name='home'
                                label='Home District'
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
                                    value:'lilongwe',
                                    label:'Lilongwe'
                                },{
                                    value:'dowa',
                                    label:'Dowa'
                                },{
                                    value:'dedza',
                                    label:'Dedza'
                                },{
                                    value:'nkhotakota',
                                    label:'Nkhotakota'
                                },{
                                    value:'mchinji',
                                    label:'Mchinji'
                                },{
                                    value:'ntchisi',
                                    label:'Ncthisi'
                                },{
                                    value:'salima',
                                    label:'Salima'
                                },{
                                    value:'ntcheu',
                                    label:'Ntcheu'
                                },{
                                    value:'mwanza',
                                    label:'Mwanza'
                                },{
                                    value:'neno',
                                    label:'Neno'
                                },]}/>
                        </Grid>
                    </Grid><Grid
                    container
                    direction='row'>                        
                        <Grid
                        item
                        sm={5}>
                            <Input 
                            name='idNo'
                            type='text'
                            label='National ID Number'/>
                        </Grid>
                        <Grid item sm={1}/>
                        <Grid
                        item
                        sm={5}>
                            <Input 
                            name='idEx'
                            type='text'
                            label='ID Expiry Date'/>                            
                        </Grid>
                    </Grid>
    </React.Fragment>
    );
};

export default ThirdStep;