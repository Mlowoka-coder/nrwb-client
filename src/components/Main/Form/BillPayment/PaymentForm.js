import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import Select from '../../Inputs/Select';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';

const PaymentForm = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    type:'',
                    reference:'',
                    amount:'',
                }}
                validationSchema={Yup.object({
                    type:Yup.string()
                    .required('Required*'),
                    reference:Yup.string()
                    .required('Required*')
                    .matches(/^[a-z0-9]+$/i,'Can not contain symbols*'),
                    amount:Yup.number()
                    .required('Required*')
                    .positive('Must be a positive number'),
                })
                }>
                    {({submitForm,isSubmitting})=>(
                        <Form>
                            <Grid
                            container
                            direction='row'>
                                <Grid
                                item
                                sm={10}>
                                <Select
                                name='type'
                                items={[
                                    {label:'Mpamba',value:'TNM Mpamba'},
                                    {label:'Airtel',value:'Airtel Money'}
                                ]}
                                label='Service Type'/>
                                </Grid>
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='reference'
                                type='text'
                                label='Reference Number'
                                style={{width:'110%'}}/>
                                </Grid>
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='amount'
                                type='text'
                                label='Amount Paid'
                                style={{width:'110%'}}/>
                                </Grid>                               
                                <Grid item sm={6}/>
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

export default PaymentForm;