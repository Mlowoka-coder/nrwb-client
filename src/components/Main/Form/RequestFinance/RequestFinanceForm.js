import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Input from '../../Inputs/Input';
import Checkbox from '../../Inputs/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const RequestFinanceForm = () => {
    const items = [
        {name:'pipe', label:'Pipe'},
        {name:'con', label:'Connector'},
        {name:'rub', label:'Rubber'},
        {name:'tap', label:'Tap'}
    ]
    
    return (
        <React.Fragment>
            <Formik
                    initialValues={{
                        amount:'',
                    }}
                    validationSchema={Yup.object({
                        amount:Yup.number()
                        .required('Required*')
                        .positive('Must be a positive number*')
                        .integer('Must be an Integer*')
                    })}
                    onSubmit={(values)=>alert(JSON.stringify(values,null,2))}>
                        {(({submitForm, isSubmitting})=>(
                            <Form>
                                <Grid
                                container                                
                                direction='column'>
                                    <Grid
                                    item
                                    sm={12}>
                                        <Input
                                        type='text'
                                        name='amount'
                                        label='Amount in MWK'/>
                                    </Grid>
                                    <Grid
                                    item
                                    sm={12}>
                                        <Typography
                                        variant='caption'>
                                            <br/>
                                        Select items to be purchased:<br/><br/>
                                        <Typography
                                        color='secondary'
                                        variant='caption'>
                                            Atleast one item must be selected*
                                        </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid
                                    item
                                    sm={12}>
                                        {items.map((item,id)=>(
                                            <Checkbox 
                                            name={item.name} 
                                            label={<Typography variant='caption'>{item.label}</Typography>}
                                            style={{
                                                color:'blue'
                                            }}/>
                                        ))}
                                    </Grid>
                                    <Grid
                                    item
                                    sm={12}>
                                        <Grid
                                        container
                                        direction='row'>
                                            <Grid item sm={3}/>
                                            <Grid item sm={9}>
                                                <Button title='Submit' onClick={submitForm}/>
                                            </Grid>
                                        </Grid>                                       
                                    </Grid>
                                </Grid>
                            </Form>
                        ))}
                    </Formik>
        </React.Fragment>
    );
};

export default RequestFinanceForm;