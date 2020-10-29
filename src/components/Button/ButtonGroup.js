import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Group = ({children}) => {
    return (
        <ButtonGroup style={{border:'1px solid #3f51b5'}}>
            {children}
        </ButtonGroup>
    );
};

export default Group;