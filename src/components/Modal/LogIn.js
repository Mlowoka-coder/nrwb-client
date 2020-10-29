import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Heading from '../Main/Headings/ListHeading';
import LogIn from '../Button/OutlinePrimary';
import Cancel from '../Button/OutlineSecondary';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '../Main/Inputs/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '../Divider/Divider';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

const LogInRender = ({changeView,onClose}) => {
    
    
    return (
        <Formik
        initialValues={{
            idNo:'',
            password:'',
        }}
        validationSchema={Yup.object({
            idNo:Yup.string().max(8,'Must be Eight letters').required('Required*'),
            password:Yup.string().required('Required*')
        })}
        onSubmit={(values, {setSubmitting})=>{
            setTimeout(()=>{
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2))
            },500)
        }}>
            {({submitForm,isSubmitting})=>(
                <Form>
                    <Card>
                <CardHeader
                title={<Heading title='Log In'/>}/>
                <CardContent>
                    <Grid
                    container
                    direction='row'>
                        <Grid
                        item
                        sm={5}>
                            <Input 
                            name='idNo'
                            type='text'
                            label='National ID Number'/>                            
                        </Grid>
                        <Grid item sm={1}/>
                        <Grid
                        item
                        sm={5}>
                            <Input 
                            name='password'
                            type='password'
                            label='Password'/>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Grid
                    container
                    direction='row'
                    alignItems='center'>
                        <Grid
                        item
                        sm={6}
                        style={{padding:'10px'}}>
                            <Typography
                            variant='caption'>
                                Not A member?
                                <Link
                                onClick={changeView}>
                                    Sign Up
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid
                        item
                        sm={6}>
                            <ButtonGroup
                            style={{float:'right'}}>
                                <LogIn title='Log In' onClick={submitForm}/>
                                <Cancel title='Cancel' onClick={onClose}/>
                            </ButtonGroup>
                        </Grid>
                    </Grid> 
                </CardActions>
            </Card>
                </Form>
            )}
        </Formik>
    );
};

export default LogInRender;