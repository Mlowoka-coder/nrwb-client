import React, { Component } from 'react';
import Select from '../../Inputs/Select';
import Input from '../../Inputs/Input';
import { Formik, Form } from 'formik';
import Button from '../../../Button/OutlinePrimary';
import Grid from '@material-ui/core/Grid';
import Table from '../../User/Table/Table';
import * as Yup from 'yup'

class ToolsForm extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            list:[],
        }
    }
    
    render() {

        const items=[
            {label:'Pipe', value:'pipe'},
            {label:'Connector', value:'con'}
        ]
    
        const size=[
            {label:'5m', value:'5m'},
            {label:'10m', value:'10m'}
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
                        item:'',
                        size:'',
                        amount:'5'
                   }}
                   validationSchema={Yup.object({
                       item:Yup.string()
                       .required('Required*'),
                       size:Yup.string()
                       .required('Required*'),
                       amount:Yup.number()
                       .required('Required')
                       .integer('Must be an integer*')
                       .positive('Must be a positive number*')
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
                                       name='item'
                                       label='Select Item'
                                       items={items}/>
                                   </Grid>
                                   <Grid
                                   item
                                   sm={12}>
                                       <br/>
                                       <Select
                                       name='size'
                                       label='Choose Size'
                                       items={size}/>
                                   </Grid>
                                   <Grid
                                   item
                                   sm={12}>
                                       <br/>
                                       <Input
                                       name='amount'
                                       label='Amount'
                                       type='number'/>
                                   </Grid>
                                   <Grid item sm={6}/>
                                   <Grid
                                   item
                                   sm={6}>
                                       <br/>
                                       <Button title='Add Item' onClick={submitForm}/>
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
                       {title:'Item', field:'item'},
                       {title:'Size', field:'size'},
                       {title:'Amount', field:'amount'}
                   ]}
                   data={this.state.list}/>
               </Grid>
           </Grid>
        </React.Fragment>    
        );
    }
}

export default ToolsForm;