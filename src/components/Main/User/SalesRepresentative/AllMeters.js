import React from 'react';
import Table from '../Table/Table';
import Grid from '@material-ui/core/Grid';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import MainHeading from '../../Headings/MainHeading';
import Readings from './Readings';

const UnreadMeters = () => {
    const data=[
        {
            meterNo:'73929',
            meterName:'John Chirwa',
            class:'A',
            status:'Read',
            registered: 'Sept 6, 2020',
            mobile: '0882053066',
            details:[
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ]
        },
        {
            meterNo:'73929',
            meterName:'Joy Mbatha',
            class:'A',
            status:'Unread',
            registered: 'Sept 18, 2020',
            mobile: '0882053066',
            details:[
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ]
        },
    ]

    const columns=[
        {title:'Meter Number',field:'meterNo'},
        {title:'Meter Name',field:'meterName'},
        {title:'Class',field:'class'},
        {title:'Status',field:'status'},
    ]
    return (
        <React.Fragment>
            <MainHeading title='Meters' buttonTitle='Add Reading'>
                <Readings/>
            </MainHeading>
            <Table
            data={data}
            columns={columns}
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
                                <DetailsPaneLabelValue title='Meter Number' data={rowData.meterNo} />
                                <DetailsPaneLabelValue title='Meter Name' data={rowData.meterName} />
                                <DetailsPaneLabelValue title='Meter Class' data={rowData.class} />
                                <DetailsPaneLabelValue title='Date Registered' data={rowData.registered} />
                                <DetailsPaneLabelValue title='Phone Number' data={rowData.mobile} />
                                <DetailsPaneTitleSubtile
                                    title='Coordinates Detaails'
                                    items={rowData.details} />
                            </Grid>

                        )
                    }
                ]
            }/>
        </React.Fragment>
    );
};

export default UnreadMeters;