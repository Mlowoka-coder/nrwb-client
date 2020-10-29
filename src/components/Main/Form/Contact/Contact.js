import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import TextField from '../../Inputs/TextField';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary'

const Contact = () => {
    return (
        <React.Fragment>            
                <Formik
                initialValues={{
                    email:'',
                    message:'',
                    name:'',
                }}
                validationSchema={Yup.object({
                    email:Yup.string()
                    .required('Required*')
                    .email('Invalid Email*'),
                    message:Yup.string()
                    .required('Required*'),
                    name:Yup.string()
                    .required('Required*')
                    .matches(/^[a-z ]+$/i,'Must be letters only*')
                })
                }>
                    {({submitForm,isSubmitting})=>(
                        <Form>
                            <Grid
                            container
                            direction='row'>
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='email'
                                type='text'
                                label='Email Account'
                                style={{
                                    width:'120%'
                                }}/>
                                </Grid>
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='name'
                                type='text'
                                label='Full Name'
                                style={{
                                    width:'120%'
                                }}/>
                                </Grid>
                                <Grid
                                item
                                sm={12}>
                                    <br/>
                                <TextField
                                name='message'
                                type='text'
                                label='Enter Message'/>
                                </Grid> 
                                
                                <Grid item sm={5}/>
                                <Grid
                                item
                                sm={4}><br/>
                                    <Button
                                    title='Submit'
                                    onClick={submitForm}/>
                                </Grid>                               
                            </Grid>
                        </Form>
                    )}
                </Formik>
        </React.Fragment>
    );
};

export default Contact;