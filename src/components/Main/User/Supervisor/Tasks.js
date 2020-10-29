import React from 'react';
import Table from '../Table/Table';
import Alarm from '@material-ui/icons/Alarm';
import Grid from '@material-ui/core/Grid';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';

const Tasks = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            type: 'New Connection',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            status: 0,
            due: 'Sept 9, 2020',
            details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]
        },
        {
            reference: 'nrwb2020nc1829',
            type: 'New Connection',
            name: 'Joy Mbatha',
            date: 'Aug 23, 2020',
            status: 0,
            due: 'Aug 26, 2020',
            details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]
        },
        {
            reference: 'nrwb2020nc0819',
            type: 'New Connection',
            name: 'Jane Mwale',
            date: 'July 10, 2020',
            status: 0,
            due: 'July 13, 2020',
            details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]
        },
        {
            reference: 'nrwb2020nc0582',
            type: 'New Connection',
            name: 'Mbabazo Chirwa',
            date: 'June 6, 2020',
            status: 1,
            due: 'June 9, 2020',
            details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]
        },
        {
            reference: 'nrwb2020nc0483',
            type: 'New Connection',
            name: 'Violet Ndhlovu',
            date: 'Feb 24, 2020',
            status: 1,
            due: 'Feb 27, 2020',
            details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]
        },
    ]

    const columns = [
        { title: 'Task ID', field: 'reference', },
        { title: 'Application Type', field: 'type', },
        { title: 'Plumber Name', field: 'name', },
        { title: 'Due Date', field: 'due', type: 'date' },
        { title: 'Status', field: 'status',lookup:{0:'Unaccomplished', 1:'Accomplished'} },
    ]

    return (
        <React.Fragment>
            <Table
                data={data}
                columns={columns}
                title='Plumbing Tasks'
                actions={[
                    rowData=>({
                    icon:()=><Alarm color={(rowData.status === 0)? 'primary':''}/>,
                    tooltip:'Remind',
                    onClick:(event, rowData)=>{
                    },
                    disabled: rowData.status === 1,
                    })
                ]}
                detailPanel={[
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
                                <DetailsPaneLabelValue title='Task Id' data={rowData.reference} />
                                <DetailsPaneLabelValue title='Plumber' data={rowData.name} />
                                <DetailsPaneLabelValue title='Due Date' data={rowData.due} />
                                <DetailsPaneTitleSubtile
                                    title='Task Details'
                                    items={rowData.details} />
                            </Grid>

                        )
                    }
                ]}/>
        </React.Fragment>
    );
};

export default Tasks;