import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';

const RegisterCrime = ({personnel}) => {
    return (
        <React.Fragment>
            {(personnel === 'Scheme Coordinator')?
            <React.Fragment>
                <Typography variant='subtitle2'><br/>Late Supervision</Typography>
                
                       <Formik
                       initialValues={{
                           id:'',
                           task:''
                       }}
                       validationSchema={Yup.object({
                        id:Yup.string()
                        .required('Required*'),
                        task:Yup.string()
                           .required('Required*')
                       })}>
                           {({submitForm,isSubmitting})=>(
                               <Form>
                                   <Grid
                                    container
                                    direction='row'>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Input
                                            name='id'
                                            type='text'
                                            label='Supervisor ID'/>
                                        </Grid>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Input
                                            name='task'
                                            type='text'
                                            label='Enter Task ID'/>
                                        </Grid>
                                        <Grid item sm={2}/>
                                        <Grid
                                        item
                                        sm={3}>
                                            <br/>
                                            <Button
                                            title='Submit' 
                                            onClick={submitForm}/>
                                        </Grid>
                                    </Grid>
                               </Form>
                           )}
                       </Formik>
            </React.Fragment>
            :
            <React.Fragment>
                <Typography variant='subtitle2'><br/>Late Task Accomplishment</Typography>
                
                       <Formik
                       initialValues={{
                           id:'',
                           task:''
                       }}
                       validationSchema={Yup.object({
                        id:Yup.string()
                        .required('Required*'),
                        task:Yup.string()
                           .required('Required*')
                       })}>
                           {({submitForm,isSubmitting})=>(
                               <Form>
                                   <Grid
                                    container
                                    direction='row'>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Input
                                            name='id'
                                            type='text'
                                            label='Plumber or Sales ID'/>
                                        </Grid>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Input
                                            name='task'
                                            type='text'
                                            label='Enter Task ID'/>
                                        </Grid>
                                        <Grid item sm={2}/>
                                        <Grid
                                        item
                                        sm={3}>
                                            <br/>
                                            <Button
                                            title='Submit' 
                                            onClick={submitForm}/>
                                        </Grid>
                                    </Grid>
                               </Form>
                           )}
                       </Formik>
            </React.Fragment>}
        </React.Fragment>
    );
};

export default RegisterCrime;