import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Checkbox from '../../Inputs/Checkbox';

const RegisterCrime = ({personnel}) => {
    const items = [
        {name:'pipe', label:'Pipe'},
        {name:'con', label:'Connector'},
        {name:'rub', label:'Rubber'},
        {name:'tap', label:'Tap'}
    ]
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <Grid item sm={4}/>
                <Grid
                item
                sm={4}>
                <Typography variant='subtitle2'><br/>Customer Destruction of Property</Typography>
                
                       <Formik
                       initialValues={{
                           id:'',
                           task:''
                       }}
                       validationSchema={Yup.object({
                        id:Yup.string()
                        .required('Required*'),
                        task:Yup.string()
                           .required('Required*')
                       })}>
                           {({submitForm,isSubmitting})=>(
                               <Form>
                                   <Grid
                                    container
                                    direction='row'>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Input
                                            name='id'
                                            type='text'
                                            label='Customer ID'/>
                                        </Grid>
                                        <Grid
                                        item
                                        sm={12}>
                                            <Typography
                                        variant='caption'>
                                            <br/>
                                        Select items ruined:<br/><br/>
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
                                        sm={3}>
                                            <br/>
                                            <Button
                                            title='Submit' 
                                            onClick={submitForm}/>
                                        </Grid>
                                    </Grid>
                               </Form>
                           )}
                       </Formik>


                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default RegisterCrime;