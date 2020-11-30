import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import Radio from '../../Inputs/Radio';
import Select from '../../Inputs/Select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Typography from '@material-ui/core/Typography';

const ReportFault = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    type: '',
                    time: '',
                    reminder: '',
                    contact: '',
                    meter: '',
                }}
                validationSchema={Yup.object({
                    type: Yup.string()
                        .required('Required*'),
                    time: Yup.string()
                        .required('Required*'),
                    reminder: Yup.string()
                        .required('Required*'),
                    contact: Yup.number()
                        .required('Required*')
                })
                }>
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Grid
                            container
                            direction='row'>
                            <Grid
                                item
                                sm={12}>
                                <Select
                                    name='type'
                                    items={[
                                        { label: 'Pipe Burst', value: 'burst' },
                                        { label: 'Meter Break', value: 'break' }
                                    ]}
                                    label='Fault Type' />
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                <Select
                                    name='meter'
                                    items={[
                                        { label: '57895', value: '57895' },
                                        { label: '66435', value: '66435' }
                                    ]}
                                    label='Meter Number' />
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                <Select
                                    name='time'
                                    items={[
                                        { label: 'Today', value: 'today' },
                                        { label: 'yesterday', value: 'yesterday' },
                                        { label: 'Three days ago', value: 'three days ago' },
                                        { label: 'This Week', value: 'current week' },
                                        { label: 'Last Week', value: 'last week' },
                                        { label: 'This Month', value: 'this month' }
                                    ]}
                                    label='Time of Occurence' />
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                <Typography
                                    variant='caption'>
                                    <br />
                                    Ever reported this case before?
                                </Typography>
                                <Radio
                                    name='reminder'
                                    isSubmitting={isSubmitting}
                                    items={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                            </Grid>
                            <Grid
                                item
                                sm={12}>
                                <Input
                                    name='contact'
                                    type='text'
                                    label='Phone Number'
                                    style={{ width: '110%' }} />
                            </Grid>
                            <Grid item sm={6} />
                            <Grid
                                item
                                sm={4}><br />
                                <Button
                                    title='Submit'
                                    onClick={submitForm} />
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default ReportFault;