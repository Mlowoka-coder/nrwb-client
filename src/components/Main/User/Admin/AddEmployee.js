import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import NationalityDetails from '../../Form/SignUp/SignUpPages/NationalityDetails';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import Select from '../../Inputs/Select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';

const AddEmployee = () => {
    let [index, changeIndex] = React.useState(0);
    const increment = () => {
        changeIndex(1)
    }
    return (
        <React.Fragment>
            <MainHeading title='Add New Employee' />
            <Grid
                container
                direction='row'>
                <Grid
                    item
                    sm={3} />
                <Grid
                    item
                    sm={6}>
                    <Grid
                        container
                        direction='row'>
                        <Grid
                            item
                            sm={12}>
                            <Formik
                                initialValues={{
                                    positon: '',
                                    idNo: '',
                                    idEx: '',
                                    nationality: 'Malawian',
                                    home: ''
                                }}

                                validationSchema={Yup.object({
                                    positon: Yup.string()
                                        .required('Required*')
                                })}

                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting();
                                    alert(JSON.stringify(values, null, 2))
                                }}>
                                {({ submitForm, isSubmitting }) => (
                                    <Form>
                                        <Grid
                                            container
                                            direction='row'>
                                            <Grid
                                                item
                                                sm={12}>
                                                <Select
                                                    name='position'
                                                    label='Employee Positon'
                                                    items={[{
                                                        value: 'plumber',
                                                        label: 'Plumber'
                                                    },
                                                    {
                                                        value: 'sales',
                                                        label: 'Sales Representative'
                                                    },
                                                    {
                                                        value: 'clerk',
                                                        label: 'Stores Clerk'
                                                    },
                                                    {
                                                        value: 'supervisor',
                                                        label: 'Supervisor'
                                                    },
                                                    {
                                                        value: 'coordinator',
                                                        label: 'Scheme Coordinator'
                                                    },
                                                    {
                                                        value: 'accountant',
                                                        label: 'Accountant'
                                                    },]} />
                                            </Grid>
                                            <Grid
                                                item
                                                sm={6}>
                                                <Input
                                                    label='Zone'
                                                    type='text'
                                                    name='zone' />
                                            </Grid>
                                            <Grid
                                                item
                                                sm={6}>
                                                <Input
                                                    label='District'
                                                    type='text'
                                                    name='district' />
                                            </Grid>
                                            <Grid
                                                item
                                                sm={12}>
                                                <br /><br /><br />
                                                <NationalityDetails />
                                            </Grid>
                                            <Grid item sm={4} />
                                            <Grid
                                                item
                                                sm={4}>
                                                <br />
                                                <Button title='Submit' onClick={submitForm} />
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={3} />

            </Grid>
        </React.Fragment>
    );
};

export default AddEmployee;