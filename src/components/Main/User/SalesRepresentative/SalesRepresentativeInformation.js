import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const SalesRepresentativeInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Sales Representative Information' />
                <NumberCard
                    title='Unread Meters'
                    number='38'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default SalesRepresentativeInformation;