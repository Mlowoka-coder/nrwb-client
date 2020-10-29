import React from 'react';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import Button from '../../../Button/OutlinePrimary';
import Input from '../../Inputs/Input';

const FinacialRequests = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            mobile: '0882053066',
            due: 'Sept 9, 2020',
            status: 'Ungranted',
            amount: '25,000',
            equipments:'Pipes, Connectors,'
        },
        {
            reference: 'nrwb2020nc1829',
            name: 'Joy Mbatha',
            date: 'Aug 23, 2020',
            mobile: '0884873888',
            due: 'Aug 26, 2020',
            status: 'Ungranted',
            amount: '25,000',
            equipments:'Pipes, Connectors,'
        },
        {
            reference: 'nrwb2020nc0819',
            name: 'Jane Mwale',
            date: 'July 10, 2020',
            mobile: '0995530034',
            due: 'July 13, 2020',
            status: 'Ungranted',
            amount: '25,000',
            equipments:'Pipes, Connectors,'
        },
        {
            reference: 'nrwb2020nc0582',
            name: 'Mbabazo Chirwa',
            date: 'June 6, 2020',
            mobile: '0998212466',
            due: 'June 9, 2020',
            status: 'Granted',
            amount: '25,000',
            equipments:'Pipes, Connectors,'
        },
        {
            reference: 'nrwb2020nc0483',
            name: 'Violet Ndhlovu',
            date: 'Feb 24, 2020',
            mobile: '0994988998',
            status: 'Granted',
            due: 'Feb 27, 2020',
            amount: '25,000',
            equipments:'Pipes, Connectors,'            
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Clerk Name', field: 'name', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Phone Number', field: 'mobile', },
    ]

    return (
        <React.Fragment>
            <Table
                data={data}
                columns={columns}
                title='Stores Clerk Financial Requests'
                detailPanel={
                    [
                        {
                            tooltip: 'View',
                            render: rowData => (
                                <React.Fragment>
                                    <Grid
                                    container
                                    direction='row'
                                    style={{
                                        padding: '20px 20px 0 20px',
                                        backgroundColor: 'rgba(250,250,250,0.8)'
                                    }}>
                                    <DetailsPaneLabelValue title='Reference Number' data={rowData.reference} />
                                    <DetailsPaneLabelValue title='Clerks Name' data={rowData.name}/>
                                    <DetailsPaneLabelValue title='Date Issued' data={rowData.date}/>
                                    <DetailsPaneLabelValue title='Phone Number' data={rowData.mobile}/>
                                    <DetailsPaneLabelValue title='Amount' data={rowData.amount}/>
                                    <DetailsPaneLabelValue title='Equipment' data={rowData.equipments}/>                                    
                                </Grid>
                                    <Grid
                                            container
                                            direction='row'
                                        >
                                            <Grid item sm={1} />
                                            <Formik
                                                initialValues={{
                                                    reference: rowData.reference
                                                }}>
                                                {(({ submitForm, isSubmitting }) => (
                                                    <Form>
                                                        <Grid
                                                            item
                                                            sm={3}>
                                                            <Input
                                                                name='reference'
                                                                type='hidden' />
                                                            <Button title='Grant'/>
                                                        </Grid>
                                                    </Form>
                                                ))}
                                            </Formik>
                                        </Grid>
                                </React.Fragment>                           
                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default FinacialRequests;