import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Heading from '../../Headings/ListHeading';
import SignUpStepButtons from './SignUpStepButtons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '../../../Divider/Divider';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import PersonalDetails from './SignUpPages/PersonalDetails'
import LocationDetails from './SignUpPages/LocationDetails'
import NationalityDetails from './SignUpPages/NationalityDetails'
import PasswordSetup from './SignUpPages/PasswordSetup'

const SignUpRender = ({changeView,onClose}) => {
    let [index, changeIndex] = React.useState(0);
    const closeSignUp=()=>{
        onClose();
        changeIndex(0);
    }
    return (
        <React.Fragment>
            <Formik
            initialValues={{
                firstname:'',lastname:'',initial:'',dob:'',
                gender:'',status:'',phone:'',email:'',
                area:'',district:'',nationality:'Malawian',home:'',
                idNo:'',idEx:'',password1:'',password2:'',
            }}
            validationSchema={Yup.object({
                home:Yup.string()
                .required('Required*'),
                firstname:Yup.string()
                .required('Required*')
                .max(15,'Must be 15 letters less*')
                .matches(/^[a-z]+$/i,'Must be letters only*'),
                lastname:Yup.string()
                .required('Required*')
                .max(15,'Must be 15 letters less*')
                .matches(/^[a-z]+$/i,'Must be letters only*'),
                dob:Yup.string()
                .required('Required*'),
                gender:Yup.string()
                .required('Required*'),
                status:Yup.string()
                .required('Required*'),
                initial:Yup.string()
                .max(15,'Must be 15 letters less*')
                .matches(/^[a-z]+$/i,'Must be letters only*'),
                phone:Yup.number()
                .required('Required*')
                .integer('Must be an Integer*'),
                email:Yup.string()                
                .email('Invalid Email Format'),
                location:Yup.string()
                .required('Required*'),
                area:Yup.string()
                .required('Required*'),                 
                idNo:Yup.string().length(8,'Must be  8 Characters*').required('Required*'),
                idEx:Yup.string().max(15,'Must be 15 letters less').required('Required*'),
                password1:Yup.string()
                .max(16,'Cannot Exceed 16 Characters')
                .required('Required*'),
                password2:Yup.string()
                .max(16,'Cannot Exceed 16 Characters')
                .required('Required*'),               
            })

            }
            onSubmit={(values,{setSubmitting})=>{
                setTimeout(()=>{
                    setSubmitting();
                    alert(JSON.stringify(values,null,2))
                },500)
            }}>
                {({submitForm, isSubmitting})=>(
                    <Form>
                    <Card 
                    style={{
                        width:'500px'
                    }}>
                        <CardHeader
                        title={<Heading title='Sign Up'/>}/>
                        <CardContent>
                            <Determine index={index}/>
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
                                        Already A member?
                                        <Link
                                        onClick={changeView}>
                                            Log In
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid
                                item
                                sm={6}>
                                    <SignUpStepButtons
                                    index={index}
                                    changeIndex={changeIndex}
                                    onClose={closeSignUp}
                                    submitForm={submitForm}/>
                                </Grid>
                            </Grid> 
                        </CardActions>
                    </Card>
                    </Form>
                )}            
            </Formik>            
        </React.Fragment>
    );
};

const Determine = ({index})=>{
    switch(index){
        case 0:
            return <PersonalDetails/>
        case 1:
            return <LocationDetails/>
        case 2: 
            return <NationalityDetails/>
        case 3:
            return <PasswordSetup/>
        default:
            return 'No Such Step'
    }
}

export default SignUpRender; 