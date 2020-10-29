import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const DetailsPaneLabelValue = ({title,data}) => {
    return (
        <React.Fragment>
            <Grid container direction='row'>
                <Grid
                    item
                    sm={2}>
                    <Typography variant='caption'><b>{title}</b></Typography>
                </Grid>
                <Grid
                    item
                    sm={8}>
                    <Typography
                        variant='caption'>
                        {data}<br />
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default DetailsPaneLabelValue;