import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const PlumberInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Plumber Information' />
                <NumberCard
                    title='Tasks'
                    number='8'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default PlumberInformation;