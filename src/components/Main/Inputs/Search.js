import React from 'react';
import Icon from '@material-ui/core/Icon';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SeachIcon from '@material-ui/icons/Search';

const Search = () => {
    return (
        <React.Fragment>
            <Paper 
            component='form'
            variant='outlined'
            style={{
                padding:'1px 2px',
                display: 'flex',
                alignItems: 'center',
                width: '70%',
                height: '30px',
                border: '1px solid #3f51b5'
            }}>
                <Icon
                style={{
                    padding:10
                }}>
                    <SeachIcon 
                    fontSize='small'
                    color='primary'/>
                </Icon>
                <InputBase
                placeholder='Search'
                style={{width:'100%'}}/>
            </Paper>
        </React.Fragment>
    );
};

export default Search;