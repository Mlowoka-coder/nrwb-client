import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import Radio from '../../Inputs/Radio';
import Select from '../../Inputs/Select';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Typography from '@material-ui/core/Typography';

const ReportFault = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    type:'',
                    time:'',
                    reminder:'',
                    contact:'',
                }}
                validationSchema={Yup.object({
                    type:Yup.string()
                    .required('Required*'),
                    time:Yup.string()
                    .required('Required*'),
                    reminder:Yup.string()
                    .required('Required*'),
                    contact:Yup.number()
                    .required('Required*')
                })
                }>
                    {({submitForm,isSubmitting})=>(
                        <Form>
                            <Grid
                            container
                            direction='row'>
                                <Grid
                                item
                                sm={9}>
                                <Select
                                name='type'
                                items={[
                                    {label:'burst',value:'Pipe Burst'},
                                    {label:'break',value:'Meter Break'}
                                ]}
                                label='Fault Type'/>
                                </Grid>
                                <Grid item sm={3}/>
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='time'
                                type='text'
                                label='Time of Fault Occurance'
                                style={{width:'110%'}}/>
                                </Grid>
                                <Grid
                                item
                                sm={12}>
                                <Typography
                                variant='caption'>
                                    <br/>
                                    Ever reported this case before?
                                </Typography>
                                <Radio
                                name='reminder'
                                isSubmitting={isSubmitting}
                                items={[{value:'yes',label:'Yes'},{value:'no',label:'No'}]}/>
                                </Grid> 
                                <Grid
                                item
                                sm={12}>
                                <Input
                                name='contact'
                                type='text'
                                label='Phone Number'
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

export default ReportFault;