import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const AccountantInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Accountant Information' />
                <NumberCard
                    title='Financial Req.'
                    number='9'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default AccountantInformation;