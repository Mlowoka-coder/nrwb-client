import React from 'react';
import Table from '../Table/Table';
import Alarm from '@material-ui/icons/Alarm';

const SalesRep = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            status: 0,
            due: 'Sept 9, 2020',
        },
        {
            reference: 'nrwb2020nc1829',
            name: 'Joy Mbatha',
            date: 'Aug 23, 2020',
            status: 0,
            due: 'Aug 26, 2020',
        },
        {
            reference: 'nrwb2020nc0819',
            name: 'Jane Mwale',
            date: 'July 10, 2020',
            status: 0,
            due: 'July 13, 2020',
        },
        {
            reference: 'nrwb2020nc0582',
            name: 'Mbabazo Chirwa',
            date: 'June 6, 2020',
            status: 1,
            due: 'June 9, 2020',
        },
        {
            reference: 'nrwb2020nc0483',
            name: 'Violet Ndhlovu',
            date: 'Feb 24, 2020',
            status: 1,
            due: 'Feb 27, 2020',
        },
    ]

    const columns = [
        { title: 'Task ID', field: 'reference', },
        { title: 'Sales Rep.', field: 'name', },
        { title: 'Due Date', field: 'due', type: 'date' },
        { title: 'Status', field: 'status',lookup:{0:'Unaccomplished', 1:'Accomplished'} },
    ]

    return (
        <React.Fragment>
            <Table
                data={data}
                columns={columns}
                title='Sales Representative Tasks'
                actions={[
                    rowData=>({
                    icon:()=><Alarm color={(rowData.status === 0)? 'primary':''}/>,
                    tooltip:'Remind',
                    onClick:(event, rowData)=>{
                    },
                    disabled: rowData.status === 1,
                    })
                ]}/>
        </React.Fragment>
    );
};

export default SalesRep;