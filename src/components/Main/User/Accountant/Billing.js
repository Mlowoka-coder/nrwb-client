import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import Grid from '@material-ui/core/Grid';
import Table from '../Table/Table';
import Typography from '@material-ui/core/Typography';
import PButton from '../../../Button/OutlinePrimary';
import Alarm from '@material-ui/icons/Alarm';

const Billing = () => {
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
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Sales Rep.', field: 'name', },
        { title: 'Due Date', field: 'due', type: 'date' },
        { title: 'Status', field: 'status',lookup:{0:'Unaccomplished', 1:'Accomplished'} },
    ]

    return (
       <React.Fragment>
           <MainHeading title='Monthly Billing'/>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={3}><br/>
                    <Typography variant='subtitle2'>                        
                        Current Tariff Rate
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
                        sm={8}>
                            <Typography variant='caption'>
                                <b>Water Usage Tariff:</b>
                            </Typography>                            
                        </Grid>
                        <Grid
                        item
                        sm={4}>
                            <Typography variant='caption'>
                                6483.4
                            </Typography>
                        </Grid>
                        <Grid
                        item
                        sm={7}/>
                        <Grid
                        item
                        sm={5}>
                            <br/>
                            <PButton title='Start'/>
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
                </Grid>
            </Grid>
       </React.Fragment>
    );
};

export default Billing;