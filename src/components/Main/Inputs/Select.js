import React from 'react';
import {Field, ErrorMessage} from 'formik';
import {Select} from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SelectFunc = ({name, label, items}) => {
    return (
        <React.Fragment>
            <FormControl
            style={{
                width:'100%'
            }}>
                <InputLabel>{label}</InputLabel>
                <Field
                component={Select}
                name={name}
                >
                    {items.map((item,id)=>{
                        return <MenuItem value={item.value} key={id}>{item.label}</MenuItem>
                    })}
                </Field>
                <div
                style={{
                    color:'#f44336',
                    fontFamily:'sans-serif',
                    fontSize:'0.75rem'
                }}>
                    <ErrorMessage 
                    name={name}
                    color='secondary'/>
                </div>
                
            </FormControl>
            
        </React.Fragment>
    );
};

export default SelectFunc;