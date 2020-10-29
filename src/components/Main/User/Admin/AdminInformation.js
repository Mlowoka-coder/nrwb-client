import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const AdminInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='System Administrator Information' />
                <NumberCard
                    title='Active User'
                    number='386'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default AdminInformation;