import React from 'react';
import Button from '@material-ui/core/Button';

const OutlinePrimary = (props) => {
    return (
        <Button
        style={{margin:'0px 10px'}}
        size='small'
        color='secondary'
        variant='outlined'
        onClick={props.onClick}>
            {props.title}   
            {props.children}
        </Button>
    );
};

export default OutlinePrimary;