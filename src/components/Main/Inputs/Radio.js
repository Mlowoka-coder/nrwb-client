import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {Field} from 'formik';
import {RadioGroup} from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';

const RadioFunc = ({name, isSubmitting, items}) => {
    return (
        <React.Fragment>
            <Field
            component={RadioGroup}
            name={name}
            style={{
                padding:'0px 20px 0px 20px'
            }}>
                {items.map((item,id)=>(
                    <FormControlLabel 
                    value={item.value} 
                    control={<Radio disabled={isSubmitting} size='small' color='primary' style={{height:'0px'}}/>}
                    label={<Typography
                    variant='caption'>
                        {item.label}
                    </Typography>}
                    disabled={isSubmitting}/>))
                }
            </Field>
        </React.Fragment>
    );
};

export default RadioFunc;