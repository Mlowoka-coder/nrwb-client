import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import AddItemForm from '../../Form/Tools/ToolsForm';

const AddItem = () => {
    return (
        <React.Fragment>
        <MainHeading title='Add Items'/>
        <AddItemForm/>            
        </React.Fragment>
    );
};

export default AddItem;