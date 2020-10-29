import React from 'react';
import Table from '../Table/Table';
import Adjust from '@material-ui/icons/Adjust';
import Restore from '@material-ui/icons/Restore';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

const ConnectionAccounts = () => {
    const data=[
        {
            accNum:37324,
            name:'John Chirwa',
            location:'Mzuzu',
            status:'Active',
            purpose:'Dwelling',
        },
        {
            accNum:56782,
            name:'John Chirwa',
            location:'Mzuzu',
            status:'Active',
            purpose:'Dwelling',
        },
        {
            accNum:93724,
            name:'John Chirwa',
            location:'Mzuzu',
            status:'Disconnected',
            purpose:'Dwelling',
        },
    ]

    const columns=[
        {title:'Meter No.',field:'accNum', type:'numeric'},
        {title:'Acc Name',field:'name',removable:true},
        {title:'Location',field:'location'},
        {title:'Status',field:'status',},
        {title:'Purpose',field:'purpose'},
    ]
    return (
        <React.Fragment>               
            <Table 
            actions={[
                {
                    icon:()=><Adjust color='primary'/>,
                    tooltip:'Change Class'
                },
                {
                    icon:()=><Restore color='primary'/>,
                    tooltip:'Reconnect'
                },
                {
                    icon:()=><RemoveCircle color='primary'/>,
                    tooltip:'Disconnect'
                }
            ]}
            data={data} 
            columns={columns} 
            title='Customer Water Connection Accounts'/>
        </React.Fragment>
    );
};

export default ConnectionAccounts;