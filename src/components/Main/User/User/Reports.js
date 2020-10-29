import React from 'react';
import Table from '../Table/Table'
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Grid from '@material-ui/core/Grid';
import MainHeading from '../../Headings/MainHeading';
import ReportFault from './ReportFault';

const Reports = () => {
    const data = [
        {
            reference: 'nrwb2020fr0001',
            type: 'Pipe Burst',
            time: '1 Month ago',
            status: 'Attended',
            date: 'Sept 6, 2020',
            reminder: 'Yes',
            details: [
                { label: 'Replied', value: 'Not Yet' },
                { label: 'Replied Date', value: 'Not Yet' },
                { label: 'Reply Due Date', value: 'Sept 12, 2020' },
                { label: 'Your Mobile Number', value: '0882053066' },
            ],
        },
        {
            reference: 'nrwb2020fr0002',
            type: 'Pipe Burst',
            time: 'Less than 24 hours',
            status: 'Attended',
            date: 'Aug 16, 2020',
            reminder: 'No',
            details: [
                { label: 'Replied', value:'Yes' },
                { label: 'Replied Date', value: 'Aug 17, 2020' },
                { label: 'Reply Due Date', value: 'Aug 12, 2020' },
                { label: 'Your Mobile Number', value: '0882053066' },
            ],
        },
        {
            reference: 'nrwb2020fr0003',
            type: 'Pipe Break',
            time: 'Less than 48 hours',
            status: 'Attended',
            date: 'July 6, 2020',
            reminder: 'No',
            details: [
                { label: 'Replied', value: 'Yes' },
                { label: 'Replied Date', value: 'July 6,2020' },
                { label: 'Reply Due Date', value: 'July 7, 2020' },
                { label: 'Your Mobile Number', value: '0882053066' },
            ],
        },
        {
            reference: 'nrwb2020fr0005',
            type: 'Pipe Burst',
            time: 'less than 24 hours',
            status: 'Attended',
            date: 'June 1, 2020',
            reminder: 'No',
            details: [
                { label: 'Replied', value: 'Not Yet' },
                { label: 'Replied Date', value: 'Not Yet' },
                { label: 'Reply Due Date', value: 'June 2, 2020' },
                { label: 'Your Mobile Number', value: '0882053066' },
            ],
        },
        {
            reference: 'nrwb2020fr0008',
            type: 'Pipe Burst',
            time: '3 Days ago',
            status: 'Attended',
            date: 'Dec 6, 2019',
            reminder: 'No',
            details: [
                { label: 'Replied', value: 'Yes' },
                { label: 'Replied Date', value: 'Dec 6,2019' },
                { label: 'Reply Due Date', value: 'Dec 7, 2019' },
                { label: 'Your Mobile Number', value: '0882053066' },
            ],
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Fault Type', field: 'type', },
        { title: 'Status', field: 'status', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Reminder', field: 'reminder',},
    ]

    return (
        <React.Fragment>
            <MainHeading title='Fault Reports' buttonTitle='Add Report' width='1000px'>
                <ReportFault/>
            </MainHeading>
            <Table
                data={data}
                columns={columns}
                title='Filed Water Fault Reports'
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
                                    <DetailsPaneLabelValue title='Reference Number' data={rowData.reference} />
                                    <DetailsPaneLabelValue title='Fault Type' data={rowData.type} />
                                    <DetailsPaneLabelValue title='Time of Occurance' data={rowData.time} />
                                    <DetailsPaneLabelValue title='Date Issued' data={rowData.date} />
                                    <DetailsPaneLabelValue title='Reminder' data={rowData.reminder} />
                                    <DetailsPaneTitleSubtile
                                        title='Report Details'
                                        items={rowData.details} />
                                </Grid>

                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Reports;