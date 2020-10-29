import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import ListHeading from '../Headings/ListHeading';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import TopicsIcon from '@material-ui/icons/NotesOutlined';
import TopNavItem from './TopNavItem';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination';
import Divider from '@material-ui/core/Divider';

const TopNav = ({bool}) => {
    return (
        <React.Fragment>
            <Card variant='outlined'>
                <CardHeader
                    avatar={
                        bool?
                        <NotificationsIcon color='primary' fontSize='small'/>
                        :<TopicsIcon color='primary' fontSize='small'/>
                    }
                    title={
                        bool? 
                        <ListHeading title={'Notifications'} bool={true}/>:
                        <ListHeading title={'Popular Topics'} bool={false}/>
                    }
                />
                <CardContent style={{padding:'0px'}}>
                    
                    <List component='nav' dense>
                        <TopNavItem topic='NRWB Tarrif Raise Revolted' date='September 2, 2020'/>
                        <TopNavItem topic='Manager Caught with bribery' date='August 26, 2020'/>
                        <TopNavItem topic='Tarrif Raise' date='August 7, 2020'/>
                        <TopNavItem topic='New Water Scheme Abolis...' date='June 2, 2020'/>
                        <TopNavItem topic='NRWB Bankrupt Rumour' date='July 17, 2020'/>
                        {bool &&  
                        <React.Fragment>
                            <TopNavItem topic='NRWB Bankrupt Rumour' date='July 17, 2020'/>
                            <Divider/>
                            <Pagination 
                            count={5} 
                            size='small' 
                            shape='rounded'
                            color='primary'
                            style={{
                                padding:'10px 0 0 12px'
                            }}/>
                        </React.Fragment>}                                               
                    </List>                    
                </CardContent>   
            </Card>
        </React.Fragment>
    );
};

export default TopNav;