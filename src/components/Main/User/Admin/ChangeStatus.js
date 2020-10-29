import React from 'react';
import Table from '../Table/Table';
import Switch from '@material-ui/core/Switch'

const ChangeStatus = () => {
    return (
        <React.Fragment>
            <Table
                    title='Your Supervisors'
                    columns={[
                        {title:'ID', field:'id'},
                        {title:'Name',field:'name'},
                        {title:'Location', field:'location'},
                        {title:'Role',field:'role'},
                        {title:'Status', field:'status'}
                    ]}
                    data={[
                        {id:'jdkwi332',
                        name:'John Chirwa',
                        location:'Jenda',
                        role:'Customer',
                        status:'Active'},
                        {id:'jdkwi332',
                        name:'Joy Mbatha',
                        location:'Jenda',
                        role:'Plumber',
                        status:'Active'},
                        {id:'jdkwi332',
                        name:'Jane Mwale',
                        location:'Jenda',
                        role:'Sales Representative',
                        status:'Inactive'},
                        
                    ]}
                    actions={[
                        rowData=>({
                        icon:()=>
                        <Switch checked={(rowData.status==='Active')?true:false}
                        onChange={(rowData)=>rowData.status= !rowData.status}
                        color='primary'
                        name="checkedA"/>,
                        tooltip:'Remind',
                        onClick:(event, rowData)=>{
                        },
                        disabled: rowData.status === 1,
                        })
                    ]}/>
        </React.Fragment>
    );
};

export default ChangeStatus;