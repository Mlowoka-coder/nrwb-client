import React from 'react';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Grid from '@material-ui/core/Grid';

const Crimes = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            mobile: '0882053066',
            due:'Sept 9, 2020',
            status:'Verified',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Customer Name', field: 'name',},
        { title: 'Satus ', field: 'status'}
    ]

    return ( 
        <React.Fragment>
            <Table
                data={data}
                columns={columns}
                title='Confirmed Crimes'
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
                                    <DetailsPaneTitleSubtile
                                    title='Tools Detaails'
                                    items={rowData.details} />                                    
                                </Grid>

                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Crimes;