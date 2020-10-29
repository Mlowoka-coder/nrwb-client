import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const CustomerInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Customer Information' />
                <NumberCard
                    title='Bill Balance'
                    number='123,820.38'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default CustomerInformation;