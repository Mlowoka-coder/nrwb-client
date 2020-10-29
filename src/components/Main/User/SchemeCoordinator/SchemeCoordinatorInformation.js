import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const SchemeCoordinatorInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Scheme Coordinator Information' />
                <NumberCard
                    title='Water Tariff'
                    number='38.6'
                    percent={false}
                    width={4} />
                <NumberCard
                    title='Distance Tariff'
                    number='4'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default SchemeCoordinatorInformation;