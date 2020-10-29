import React from 'react';
import ContactForm from '../Form/Contact/Contact';
import Grid from '@material-ui/core/Grid';
import ContactDetails from './ContactDetails';
import MainHeading from '../Headings/MainHeading';

const Contact = () => {
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <MainHeading title='Contact Us (email: visitors@nrwb.mw)'/>
                <Grid item sm={1}/>
                <Grid
                item
                sm={5}>                    
                    <ContactForm/>
                </Grid>
                <Grid
                item
                sm={6}>
                   <ContactDetails/>
                </Grid>
            </Grid>            
        </React.Fragment>
    );
};

export default Contact;