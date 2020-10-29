import React from 'react';
import Grid from '@material-ui/core/Grid';
import RegisterCrimesForm from '../../Form/Crimes/PlumberSalesCrime';
import MainHeading from '../../Headings/MainHeading';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';

const Crimes = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            mobile: '0882053066',
            due:'Sept 9, 2020',
            status:'Verified',
            task:'yeuw828',
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Plumber Name', field: 'name',},
        { title: 'Satus ', field: 'status'}
    ]
    return (
        <React.Fragment>
            <MainHeading title='Crimes' buttonTitle='Add New Crime' width='600px'>
                
            <MainHeading title='Enter Plumbing or Sales Representative Crimes'/>
            <Grid 
            container
            direction='row'>
                <Grid item sm={4}/>
                <Grid
                item
                sm={4}>
                    <RegisterCrimesForm personnel='Supervisor'/>
                </Grid>
            </Grid>
            </MainHeading>
            <Table
                data={data}
                columns={columns}
                title='Crimes Filed'
                detailPanel={
                    [
                        {
                            tooltip: 'View',
                            render: rowData => (
                                <Grid
                                    container
                                    direction='row'
                                    style={{
                                        padding: '20px',
                                        backgroundColor: 'rgba(250,250,250,0.8)'
                                    }}>
                                    <DetailsPaneLabelValue title='Reference Number' data={rowData.reference}/>
                                    <DetailsPaneLabelValue title='Date Issued' data={rowData.date}/>
                                    <DetailsPaneLabelValue title='Phone Number' data={rowData.mobile}/>                                   
                                </Grid>

                            )
                        }
                    ]
                } />
                
        </React.Fragment>
    );
};

export default Crimes;