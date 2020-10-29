import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import Grid from '@material-ui/core/Grid';
import Table from '../Table/Table';
import Typography from '@material-ui/core/Typography';
import PButton from '../../../Button/OutlinePrimary';
import SButton from '../../../Button/OutlineSecondary';

const TariffChange = () => {
    return (
        <React.Fragment>
            <MainHeading title='Tariffs'/>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={3}><br/>
                    <Typography variant='subtitle2'>                        
                        Confirm Tariff Change
                    </Typography>
                    <hr/>
                    <Grid
                    container
                    direction='row'
                    style={{
                        padding:'16px 0 0 0'
                    }}>
                        <Grid
                        item
                        sm={6}>
                            <Typography variant='caption'>
                                <b>Water Usage:</b>
                            </Typography>                            
                        </Grid>
                        <Grid
                        item
                        sm={6}>
                            <Typography variant='caption'>
                                6483.4
                            </Typography>
                        </Grid>
                        <Grid
                        item
                        sm={7}>
                            <br/>
                            <PButton title='Confirm'/>
                        </Grid>
                        <Grid
                        item
                        sm={5}>
                            <br/>
                            <SButton title='Decline'/>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid
                item
                sm={9}
                style={{
                    padding:'0 0 0 20px'
                }}>
                    <Table
                    title='Items List'
                    columns={[
                        {title:'Tariff', field:'tariff'},
                        {title:'Rate', field:'rate'},
                        {title:'Date Changed', field:'date',type:'Date'}
                    ]}
                    data={[
                        {tariff:'Minimum Connection',
                        rate:'36.8',
                        date:'Sept 9, 2020'}
                    ]}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TariffChange;