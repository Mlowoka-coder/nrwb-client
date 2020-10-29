import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const StoresClerkInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Clerk Information' />
                <NumberCard
                    title='Requests'
                    number='15'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default StoresClerkInformation;