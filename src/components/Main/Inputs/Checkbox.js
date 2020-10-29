import React from 'react';
import {Field} from 'formik';
import {CheckboxWithLabel} from 'formik-material-ui';
import FormControl from '@material-ui/core/FormControl';

const TextInput = ({name, label,style}) => {
    return (
        <React.Fragment>
            <FormControl
            >
                <Field
                component={CheckboxWithLabel}
                name={name}
                type='checkbox'
                Label={{label: label}}
                style={style}/>  
            </FormControl>
            
        </React.Fragment>
    );
};

export default TextInput;