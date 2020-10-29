import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Input from '../../Inputs/Input';
import Grid from '@material-ui/core/Grid';
import MainHeading from '../../Headings/MainHeading';

const ReportTask = () => {
    return (
        <React.Fragment>
            <MainHeading title='Accomplished Task'/>
            <Formik
            initialValues={{
                id:'',
                date:''
            }}
            validationSchema={Yup.object({
                id:Yup.string()
                .required('Required*'),
                date:Yup.string()
                .required('Required*')
            })}>
                {({submitForm,isSubmitting})=>(
                    <Form>
                        <Grid
                        container
                        direction='row'>
                            <Grid item sm={4}/>
                            <Grid
                            item
                            sm={4}>
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
                                                            label='Task ID' />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            sm={12}>
                                                            <Input
                                                            name='date'
                                                            type='text'
                                                            label='Date Accomplished' />
                                                        </Grid>
                                                        <Grid
                                                        item
                                                        sm={12}
                                                        style={{
                                                            padding:'20px 0 0 0'
                                                        }}>
                                                            <Button title='Submit' onClick={submitForm} />
                                                        </Grid>
                                                    </Grid>
                                                    
                                                </Form>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default ReportTask;