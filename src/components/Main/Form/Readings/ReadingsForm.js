import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '../../Inputs/Select';
import Input from '../../Inputs/Input';
import Button from '../../../Button/OutlinePrimary';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

const ReadingsForm = () => {
    return (
        <React.Fragment>
            <Formik
            initialValues={{
                reading:'',
                reference:'',
            }}
            validationSchema={Yup.object({
                reading:Yup.number()
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
                                    name='reading'
                                    type='text'
                                    label='Meter Readings' 
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

export default ReadingsForm;