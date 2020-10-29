import React from 'react';
import Button from '@material-ui/core/Button';

const OutlinePrimary = (props) => {
    const variant = props.variant; 
    return (
        <Button
        style={{margin:'0px 10px'}}
        size='small'
        color='primary'
        variant={variant}
        onClick={props.onClick}>
            {props.title}
            {props.children}
        </Button>
    );
};

export default OutlinePrimary;