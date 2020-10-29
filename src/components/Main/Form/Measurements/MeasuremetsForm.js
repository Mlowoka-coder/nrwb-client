import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '../../Inputs/Select';
import Input from '../../Inputs/Input';
import Button from '../../../Button/OutlinePrimary';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

const Measuremets = () => {
    return (
        <React.Fragment>
            <Formik
            initialValues={{
                measure:'',
                reference:'',
            }}
            validationSchema={Yup.object({
                measure:Yup.number()
                .required('Required*')
                .integer('Must be an Integer*')
                .positive('Must be a positive number*'),
                reference:Yup.string()
                .required('Required*'),
            })}>
                {({submitForm,isSubmitting}) => (
                    <Form>
                        <Grid
                            container
                            direction='row'>
                            <Grid
                                item
                                sm={12}>
                                <Input
                                    name='measure'
                                    type='text'
                                    label='Measurements in meters' 
                                    style={{
                                        width:'110%'
                                    }}/>
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                <Select
                                    name='reference'
                                    label="Customer's Ref. No"
                                    items={[
                                        {label:'hjfoejs',value:'hjdksk'}
                                    ]}/>
                            </Grid>
                            <Grid item sm={7}/>
                            <Grid
                            item
                            sm={2}
                            style={{
                                padding:'16px 0 0 0 '
                            }}>
                                <Button title='Submit' onClick={submitForm}/>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>

        </React.Fragment>
    );
};

export default Measuremets;