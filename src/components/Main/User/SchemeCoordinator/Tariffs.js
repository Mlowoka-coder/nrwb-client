import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import Grid from '@material-ui/core/Grid';
import ChangeTariffsForm from '../../Form/Tariffs/ChangeTariffs';
import Table from '../Table/Table';

const Tariffs = () => {
    return (
        <React.Fragment>
            <MainHeading title='Tariffs'/>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={3}>
                    <ChangeTariffsForm/>
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
                        date:'Sept 9, 2020'},
                        {tariff:'Distance',
                        rate:'36.8',
                        date:'Sept 9, 2020'},
                        {tariff:'Water Usage',
                        rate:'36.8',
                        date:'Sept 9, 2020'},
                        {tariff:'Reconnection',
                        rate:'36.8',
                        date:'Sept 9, 2020'},
                    ]}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Tariffs;