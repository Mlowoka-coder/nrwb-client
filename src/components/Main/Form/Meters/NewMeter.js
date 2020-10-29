import React, { Component } from 'react';
import Select from '../../Inputs/Select';
import Input from '../../Inputs/Input';
import { Formik, Form } from 'formik';
import Button from '../../../Button/OutlinePrimary';
import Grid from '@material-ui/core/Grid';
import Table from '../../User/Table/Table';
import * as Yup from 'yup';

class ToolsForm extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            list:[],
        }
    }
    
    render() {

        const categories=[
            {label:'A', value:'a'},
            {label:'B', value:'b'},
            {label:'C', value:'c'}
        ]

        return (
            <React.Fragment>
           <Grid
           container
           direction='row'>
               <Grid
               item
               sm={3}>
                   <Formik
                   initialValues={{
                        number:'',
                        class:'',
                   }}
                   validationSchema={Yup.object({
                       number:Yup.string()
                       .required('Required*'),
                       class:Yup.string()
                       .required('Required*')
                   })}
                   onSubmit={(values,{setSubmitting})=>{
                        let newList = [...this.state.list,values];
                        setSubmitting(false)
                        this.setState({
                            list:newList
                        })
                   }}>
                       {({submitForm,isSubmitting})=>(
                           <Form>
                               <Grid
                               container
                               direction='row'>
                                   <Grid
                                   item
                                   sm={12}>
                                       <Select
                                       name='class'
                                       label='Select Meter Category'
                                       items={categories}/>
                                   </Grid>
                                   <Grid
                                   item
                                   sm={12}>
                                       <br/>
                                       <Input
                                       name='number'
                                       label='Meter Number'
                                       type='text'/>
                                   </Grid>
                                   <Grid item sm={5}/>
                                   <Grid
                                   item
                                   sm={7}>
                                       <br/>
                                       <Button title='Add Meter' onClick={submitForm}/>
                                   </Grid>
                               </Grid>
                           </Form>
                       )}
                   </Formik>
               </Grid>
               <Grid
               item
               sm={9}
               style={{
                   padding:'0 0 0 20px'
               }}>
                   <Table
                   title='Items List'
                   columns={[
                       {title:'Meter Number', field:'number'},
                       {title:'Class', field:'class'},
                   ]}
                   data={this.state.list}/>
               </Grid>
           </Grid>
        </React.Fragment>    
        );
    }
}

export default ToolsForm;