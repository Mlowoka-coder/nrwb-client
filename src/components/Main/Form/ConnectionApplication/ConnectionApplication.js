import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import RadioGroup from '../../Inputs/Radio';
import Input from '../../Inputs/Input';
// import Map from './Map';

const ConnectionApplication = () => {
    const items=[
        {value:'dwelling',label:'Dwelling House'},
        {value:'business',label:'Business e.g Hotel/Lodge/Motel etc'},
        {value:'institution',label:'Institution e.g Church/Hospital/School etc'},
    ]
    return (
        <React.Fragment>
            <Formik
            initialValues={{
                location:'',
                purpose:'',
                latitude:'',
                longtude:'',
            }}
            validationSchema={Yup.object({
                location:Yup.string()
                .required('Required*'),
                purpose:Yup.string()
                .required('Required*'),
                latitude:Yup.number()
                .positive('Latitude must be a positive'),
                longtude:Yup.number()
                .required('Required*')
                .positive('Longtude must be a positive number')
            })}>
                {(submitForm,isSubmitting)=>(
                    <Form>
                        <Grid
                        container
                        direction='row'>
                            <Grid
                            item 
                            sm={12}>
                                <Typography>
                                    New Water Connection Application
                                </Typography>
                                <hr/>                                
                            </Grid>
                        </Grid>
                        <Grid
                        container
                        direction='row'>
                            <Grid
                            item
                            sm={5}>
                                <Input
                                name='location'
                                label='Enter Location'
                                type='text'
                                style={{
                                    width:'150%'
                                }}/><br/><br/>
                                <Typography
                                variant='subtitle2'>
                                    purpose of the water applied for
                                </Typography>                                
                                    <RadioGroup
                                    name='purpose'
                                    isSubmitting={isSubmitting}
                                    items={items}/>
                            </Grid>
                            <Grid
                            item
                            sm={7}>
                                {/* <div
                                style={{height:'100px',width:'100px'}}>
                                    <Map/> 
                                </div>
                                */}
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default ConnectionApplication;