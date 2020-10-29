import React from 'react';
import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import FormControl from '@material-ui/core/FormControl';

const TextInput = ({name, type, label,props}) => {
    return (
        <React.Fragment>
            <FormControl
            >
                <Field
                component={TextField}
                name={name}
                type={type}
                label={label}
                variant='outlined'
                multiline
                rows={6}/>  
            </FormControl>
            
        </React.Fragment>
    );
};

export default TextInput;