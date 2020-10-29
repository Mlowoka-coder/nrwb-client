import React from 'react';
import Input from '../../Inputs/Input';
import Select from '../../Inputs/Select';
import Button from '../../../Button/OutlinePrimary';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';

const ChangeTariffs = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    tariff: '',
                    rate: '20.4'
                }}
                validationSchema={Yup.object({
                    tariff:Yup.string()
                    .required('Required*'),
                    rate:Yup.number()
                    .required('Must be a number*')
                    .positive('Must be positive*')
                })}>
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Grid
                            container
                            direction='row'>

                            <Grid
                                item
                                sm={12}>
                                <Input
                                    name='rate'
                                    type='number'
                                    label='Rate' />
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                    <br/>
                                <Select
                                    name='tariff'
                                    label='Select the tariff to change'
                                    items={[
                                        { label: 'Minimum Connection', value: 'minCon' },
                                        { label: 'Distance Rate', value: 'distance' },
                                        { label: 'Water Usage', value: 'waterUsage' },
                                        { label: 'Disconnection', value: 'discon' }
                                    ]} />
                                <Grid item sm={7} />
                                <Grid item sm={12}
                                    style={{
                                        padding: '16px 0 0 0 ',
                                        float:'right'
                                    }}>
                                    <Button title='Update' onClick={submitForm}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default ChangeTariffs;

