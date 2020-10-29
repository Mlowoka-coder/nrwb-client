import React from 'react';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Grid from '@material-ui/core/Grid';
import MainHeading from '../../Headings/MainHeading';
import ConnectionApplication from '../../Form/ConnectionApplication/ConnectionApplication';
 
const Applications = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            type: 'New Connection',
            date: 'Sept 6, 2020',
            mobile: '0882053066',
            due:'Sept 9, 2020',
            status:'Plumber',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Application Type', field: 'type', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Phone Number', field: 'mobile',},
        { title: 'Progress', field:'status'}
    ]

    return ( 
        <React.Fragment>
            <MainHeading title='New Water Connections' buttonTitle='Apply Connection' width='1000px'>
                <ConnectionApplication/>
            </MainHeading>
            <Table
                data={data}
                columns={columns}
                title='Pending Water Connection Applications'
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
                                    <DetailsPaneLabelValue title='Application Type' data={rowData.type}/>
                                    <DetailsPaneLabelValue title='Date Issued' data={rowData.date}/>
                                    <DetailsPaneLabelValue title='Phone Number' data={rowData.mobile}/>
                                    <DetailsPaneLabelValue title='Due Date' data={rowData.due}/>
                                    <DetailsPaneTitleSubtile
                                    title='Coordinates Detaails'
                                    items={rowData.details} />                                    
                                </Grid>

                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Applications;