import React from 'react';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import { Formik, Form } from 'formik';
import Button from '../../../Button/OutlinePrimary';
import Grid from '@material-ui/core/Grid';
import Input from '../../Inputs/Input';
import Typography from '@material-ui/core/Typography'

const Applications = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            name: 'John Chirwa',
            date: 'Sept 6, 2020',
            due: 'Sept 9, 2020',
            details: [
                { item: 'Pipe', size: '10m', amount: '6', }
            ]
        },
        {
            reference: 'nrwb2020nc1829',
            name: 'Joy Mbatha',
            date: 'Aug 23, 2020',
            due: 'Aug 26, 2020',
            details: [
                { item: 'Pipe', size: '10m', amount: '6', }
            ]
        },
        {
            reference: 'nrwb2020nc0819',
            name: 'Jane Mwale',
            date: 'July 10, 2020',
            due: 'July 13, 2020',
            details: [
                { item: 'Pipe', size: '10m', amount: '6', }
            ]
        },
        {
            reference: 'nrwb2020nc0582',
            name: 'Mbabazo Chirwa',
            date: 'June 6, 2020',
            due: 'June 9, 2020',
            details: [
                { item: 'Pipe', size: '10m', amount: '6', }
            ]
        },
        {
            reference: 'nrwb2020nc0483',
            name: 'Violet Ndhlovu',
            date: 'Feb 24, 2020',
            due: 'Feb 27, 2020',
            details: [
                { item: 'Pipe', size: '10m', amount: '6', }
            ]
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Plumber Name', field: 'name', },
        { title: 'Date Issued', field: 'date', type: 'date' },
    ]

    return (
        <React.Fragment>
            <Table
                data={data}
                columns={columns}
                title='Plumber Tools Request'
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
                                            padding: '20px',
                                            backgroundColor: 'rgba(250,250,250,0.8)'
                                        }}>
                                        <DetailsPaneLabelValue title='Reference Number' data={rowData.reference} />
                                        <DetailsPaneLabelValue title='Plumber Name' data={rowData.name} />
                                        <DetailsPaneLabelValue title='Date Issued' data={rowData.date} />
                                        <DetailsPaneLabelValue title='Due Date' data={rowData.due} />
                                        <React.Fragment>
                                            <Grid
                                                container
                                                direction='row'>
                                                <Grid
                                                    container
                                                    direction='row'>
                                                    <Grid
                                                        item
                                                        sm={12}>
                                                        <Typography
                                                            variant='caption'>
                                                            <br />
                                                            <b>Requested Items List</b>
                                                        </Typography><hr />
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    container
                                                    direction='row'
                                                    style={{
                                                        padding: '0 0 0 40px'
                                                    }}>
                                                        <Grid
                                                                item
                                                                sm={2}>
                                                                <Typography
                                                                    variant='caption'>
                                                                        <b>Item</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                sm={1}>
                                                                <Typography
                                                                    variant='caption'>
                                                                        <b>Size</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                sm={1}>
                                                                <Typography
                                                                    variant='caption'>
                                                                        <b>Amount</b>
                                                                </Typography>
                                                            </Grid>
                                                                    <Grid item sm={8}/>
                                                    {rowData.details.map((item, id) => (
                                                        <React.Fragment>
                                                            <Grid
                                                                item
                                                                sm={2}>
                                                                <Typography
                                                                    variant='caption'>
                                                                    {item['item']}:
                                                                </Typography>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                sm={1}>
                                                                <Typography
                                                                    variant='caption'>
                                                                    {item['size']}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                sm={1}>
                                                                <Typography
                                                                    variant='caption'>
                                                                    {item['amount']}
                                                                </Typography>
                                                            </Grid>
                                                        </React.Fragment>

                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </React.Fragment>


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
                                    </Grid>
                                </React.Fragment>
                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Applications;