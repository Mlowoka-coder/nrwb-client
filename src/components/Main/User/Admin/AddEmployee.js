import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import SignUpForm from '../../Form/SignUp/SignUp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '../../Inputs/Select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';

const AddEmployee = () => {
    let [index, changeIndex] = React.useState(0);
    const increment=()=>{
        changeIndex(1)
    }
    return (
        <React.Fragment>
            <MainHeading title='Add New Employee' />
            <Grid
                container
                direction='row'>
                <Grid item sm={2} />
                <Grid
                    item
                    sm={10}>
                    <Determine index={index} increment={increment} />
                    <br />
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

const Determine = ({index, increment}) => {
    switch (index) {
        case 0:
            return <Position increment={increment}/>
        case 1:
            return <SignUpForm />
        default:
            return 'No Such Step'
    }
}

const Position = ({increment}) => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <Grid
                    item
                    sm={12}>
                    <Typography
                        variant='subtitle2'>
                        Select the personnel position
            </Typography>
                </Grid>
                <Grid
                    item
                    sm={6}>
                    <Formik
                    initialValues={{
                        positon:'',
                    }}

                    validationSchema={Yup.object({
                        positon:Yup.string()
                        .required('Required*')
                    })}
                    
                    onSubmit={(values,{setSubmitting})=>{
                        setSubmitting();
                        alert(JSON.stringify(values,null,2))
                    }}>
                        {({submitForm, isSubmitting }) => (
                            <Form>
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
                                    <br/>
                                    <Button title='Next' onClick={submitForm}/>
                            </Form>
                        )}
                    </Formik>

                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default AddEmployee;