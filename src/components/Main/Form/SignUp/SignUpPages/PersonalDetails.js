import React from 'react'
import Input from '../../../Inputs/Input'
import Select from '../../../Inputs/Select'
import Grid from '@material-ui/core/Grid'
import Heading from '../../Heading'
import Person from '@material-ui/icons/PersonOutlineOutlined'
import Typography from '@material-ui/core/Typography'
import Label from '@material-ui/core/InputLabel'

const FirstStep = () => {
    return (
        <React.Fragment>
         <Heading title='Personal Details'>
            <Person fontSize='small'/>
          </Heading>          
            <Typography
            variant='caption'
            color='secondary'>
                *All fields are required except initial and email*
            </Typography>
        <Grid
                container
                direction='row'>
                    <Grid
                    item
                    sm={5}>
                        <Input 
                        name='firstname'
                        type='text'
                        label='First Name'/>                            
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid
                    item
                    sm={5}>
                        <Input 
                        name='lastname'
                        type='text'
                        label='Last Name'/>
                    </Grid>
                </Grid><Grid
                container
                direction='row'>
                    <Grid
                    item
                    sm={5}>
                        <Input 
                        name='initial'
                        type='text'
                        label='Initial'/>                            
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid
                    item
                    sm={5}>
                        <Grid
                        container
                        direction='row'>
                            <Grid
                            item
                            sm={3}
                            style={{paddingTop:'27px'}}>
                                <Label>DOB</Label>
                            </Grid>
                            <Grid
                            item
                            sm={9}>
                                <Input 
                                name='dob'
                                type='date'
                                label=' '
                                style={{width:'120%'}}/>
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>
                </Grid><Grid
                container
                direction='row'>                        
                    
                    <Grid
                    item
                    sm={5}>
                        <Select 
                        name='gender'
                        label='Gender'
                        items={[{
                            value:'male',
                            label:'Male'
                        },{
                            value:'female',
                            label:'Female'
                        }]}/>
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid
                    item
                    sm={5}>
                        <Select 
                        name='status'
                        label='Maritial Status'
                        items={[{
                            value:'single',
                            label:'Single'
                        },{
                            value:'married',
                            label:'Married'
                        },{
                            value:'divorced',
                            label:'Divorced'
                        }]}/>                            
                    </Grid>
                </Grid><Grid
                container
                direction='row'>                                              
                    <Grid
                    item
                    sm={5}>
                        <Input 
                        name='phone'
                        type='text'
                        label='Phone Number'/>
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid
                    item
                    sm={5}>
                        <Input 
                        name='email'
                        type='email'
                        label='Email'/>                            
                    </Grid>
                </Grid>
    </React.Fragment>
    );
};

export default FirstStep;