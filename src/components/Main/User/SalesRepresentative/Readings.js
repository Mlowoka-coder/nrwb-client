import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import ReadingsForm from '../../Form/Readings/ReadingsForm.js';
import Grid from '@material-ui/core/Grid';
import Table from '../Table/Table';
import Typography from '@material-ui/core/Typography';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Input from '../../Inputs/Input';

const Readings = () => {
    const data = [
        {
            meterNo: '73929',
            meterName: 'John Chirwa',
            class: 'A'
        }
    ]

    const columns = [
        { title: 'Meter Number', field: 'meterNo' },
        { title: 'Meter Name', field: 'meterName' },
        { title: 'Class', field: 'class' }
    ]
    return (
        <React.Fragment>
            <MainHeading title='Meter Readings' />
            <Grid
                container
                direction='row'>
                <Grid
                    item
                    sm={3}>
                    <ReadingsForm />
                </Grid>
                <Grid item sm={9}
                    style={{
                        padding: '0 0 0 16px'
                    }}>
                    <Table
                        title='Unread Meters'
                        data={data}
                        columns={columns}
                        detailPanel={
                            [
                                {
                                    tooltip: 'View',
                                    render: (rowData) => (<React.Fragment>
                                        <Grid
                                            container
                                            direction='row'
                                            style={{
                                                padding: '20px',
                                                backgroundColor: 'rgba(250,250,250,0.8)'
                                            }}>
                                            <Grid
                                                item
                                                sm={4}>
                                                <Typography
                                                    variant='caption'><br />
                                            Enter meter readings:
                                        </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                sm={8}>
                                                <Formik
                                                    initialValues={{
                                                        reading: '',
                                                        ref: 'jjdow'
                                                    }}
                                                    validationSchema={Yup.object({
                                                        reading: Yup.number()
                                                            .required('Required*')
                                                            .integer('Must be an integer')
                                                            .positive('Must be a positive number*')
                                                    })}>
                                                    {({ submitForm, isSubmitting }) => (
                                                        <Form>
                                                            <Grid
                                                                container
                                                                direction='row'>
                                                                <Grid
                                                                    item
                                                                    sm={6}>
                                                                    <Input
                                                                        name='reading'
                                                                        type='text'
                                                                        label='Meter Reading' />
                                                                    <Input
                                                                        name='ref'
                                                                        type='hidden'
                                                                        label='' />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    sm={6}
                                                                    style={{
                                                                        padding: '20px 0 0 0'
                                                                    }}>
                                                                    <Button title='Submit' onClick={submitForm} />
                                                                </Grid>
                                                            </Grid>

                                                        </Form>
                                                    )}
                                                </Formik>
                                            </Grid>

                                        </Grid>
                                        <hr />
                                    </React.Fragment>
                                    )
                                }
                            ]
                        } />
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

export default Readings;