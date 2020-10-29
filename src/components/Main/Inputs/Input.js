import React from 'react';
import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import FormControl from '@material-ui/core/FormControl';

const TextInput = ({name, type, label,style}) => {
    return (
        <React.Fragment>
            <FormControl
            >
                <Field
                component={TextField}
                name={name}
                type={type}
                label={label}
                style={style}/>  
            </FormControl>
            
        </React.Fragment>
    );
};

export default TextInput;