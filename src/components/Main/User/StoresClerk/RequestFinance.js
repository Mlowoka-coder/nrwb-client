import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import Grid from '@material-ui/core/Grid';
import RequestFinanceForm from '../../Form/RequestFinance/RequestFinanceForm';

const RequestFinance = () => {   
    return (
        <React.Fragment>
            <MainHeading title='Contact Finance' />
            <Grid
            container
            direction='row'>
                <Grid item sm={4} />
                <Grid item sm={4} >
                    <RequestFinanceForm/>
                </Grid>
                <Grid item sm={4} />
            </Grid>
        </React.Fragment>
    );
};

export default RequestFinance;