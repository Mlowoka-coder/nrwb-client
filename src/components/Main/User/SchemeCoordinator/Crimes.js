import React from 'react';
import Grid from '@material-ui/core/Grid';
import RegisterCrimesForm from '../../Form/Crimes/PlumberSalesCrime';
import MainHeading from '../../Headings/MainHeading';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Alarm from '@material-ui/icons/Alarm';


const Crimes = () => {
    return (
       <React.Fragment>
            <MainHeading title='Supervision Crimes' buttonTitle='Add Crime' width='1000px'>
                <MainHeading title='Enter Supervisor Crime'/>
                <Grid
                container
                direction='row'>
                    <Grid
                    item
                    sm={3}>
                       <RegisterCrimesForm personnel='Scheme Coordinator'/> 
                    </Grid>
                    <Grid item sm={9}>
                    <Table
                data={ [
                    {
                        reference: 'nrwb2020nc6197',
                        name: 'John Chirwa',
                        date: 'Sept 6, 2020',
                        mobile: '0882053066',
                        due:'Sept 9, 2020',
                        status:'Verified',
                        task:'yeuw828',
                    },
                ]}
                columns={ [
                    { title: 'Ref. Number', field: 'reference', },
                    { title: 'Date Issued', field: 'date', type: 'date' },
                    { title: 'Plumber Name', field: 'name',},
                    { title: 'Satus ', field: 'status'}
                ]}
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
                    </Grid>
                </Grid>                
            </MainHeading>
           <Grid
            container
            direction='row'>
                <Grid
                item
                sm={12}
                style={{
                    padding:'0 0 0 20px'
                }}>
                    <Table
                    actions={[
                        rowData=>({
                        icon:()=><Alarm color={(rowData.unattended === 0)? '':'primary'}/>,
                        tooltip:'Remind',
                        onClick:(event, rowData)=>{
                        },
                        disabled: rowData.unattended === 0,
                        })
                    ]}
                    title='Your Supervisors'
                    columns={[
                        {title:'ID', field:'id'},
                        {title:'Location', field:'location'},
                        {title:'Unattended Supervision',field:'unattended',type:'numeric'}
                    ]}
                    data={[
                        {id:'jdkwi332', 
                        location:'Lubinga',
                        unattended:1,
                        details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]},
                        {id:'jdkwi532',
                        location:'Chimaliro',
                        unattended:0,
                        details:[{label:'Task Id',value:'fswew345'},{label:'Task Type',value:'Plumber Late Task Accomplishment'}]}
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
                                    <DetailsPaneLabelValue title='Supervisor Id' data={rowData.id} />
                                    <DetailsPaneLabelValue title='Location' data={rowData.location} />
                                    <DetailsPaneLabelValue title='Unattended' data={rowData.unattended} />
                                    <DetailsPaneTitleSubtile
                                        title='Task Details'
                                        items={rowData.details} />
                                </Grid>
    
                            )
                        }
                    ]}/>
                </Grid>
            </Grid>
       </React.Fragment>
    );
};

export default Crimes;