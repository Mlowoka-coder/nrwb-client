import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReportForm from '../../Form/ReportFault/ReportFault';
import NumberCard from '../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const ReportFault = () => {
    const items = [
        'Report will be answered within 24 hours of submission',
        'Ensure you are reporting a fault of your meter',
        'If a reply is delayed directly contact the NRWB at  (+265) 1 310 254/255',
        'Your reported will be documented and kept for future use'
    ]
    return (
        <React.Fragment>
            <MainHeading title='Report Water Connection Fault' />
            <Grid
                container
                direction='row'>
                <Grid
                    item
                    sm={4}>
                    <ReportForm />
                </Grid>
                <Grid
                    item
                    sm={4}>
                    <Grid>
                        <Typography
                            variant='subtitle2'>
                            Things to know when reporting:
                        </Typography>
                        <ul>
                            {items.map((item, id) => (
                                <li key={id}>
                                    <Typography variant='caption'>
                                        {item}<br /><br />
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
                <Grid item sm={1} />
                <Grid
                    item
                    sm={2}>
                    <NumberCard
                        title='Reports'
                        number='3'
                        percentage={false}
                        width={12} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ReportFault;