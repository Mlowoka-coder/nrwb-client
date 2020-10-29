import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';


const SupervisorInformation = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <MainHeading title='Supervisor Information' />
                <NumberCard
                    title='Plumber Task'
                    number='8'
                    percent={false}
                    width={4} />
                <NumberCard
                    title='Sales Rep.'
                    number='1'
                    percent={false}
                    width={4} />
            </Grid>
        </React.Fragment>
    );
};

export default SupervisorInformation;