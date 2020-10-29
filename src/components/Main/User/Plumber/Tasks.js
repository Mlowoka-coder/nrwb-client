import React from 'react';
import Table from '../Table/Table';
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Grid from '@material-ui/core/Grid';
import MainHeading from '../../Headings/MainHeading';
import ReportTask from '../../Form/Tasks/ReportTask';
import Typography from '@material-ui/core/Typography';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../../Button/OutlinePrimary';
import Input from '../../Inputs/Input';

const Tasks = () => {
    const data = [
        {
            reference: 'nrwb2020nc6197',
            type: 'New Connection',
            name: 'Lackness Kamanga',
            date: 'Sept 6, 2020',
            mobile: '0889564742',
            due: 'Sept 9, 2020',
            status: 'Unattended',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
        {
            reference: 'nrwb2020nc3867',
            type: 'Disconnection',
            name: 'Jenala Kumwenda',
            date: 'Sept 1, 2020',
            mobile: '0889753685',
            due: 'Sept 3, 2020',
            status: 'Attended',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
        {
            reference: 'nrwb2020nc3977',
            type: 'Maintenance',
            name: 'Matrida Pondamali',
            date: 'Aug 27, 2020',
            mobile: '0886893247',
            due: 'Aug 30, 2020',
            status: 'Attended',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
        {
            reference: 'nrwb2020nc1477',
            type: 'Reconnection',
            name: 'Mabuchi Chirwa',
            date: 'Aug 5, 2020',
            mobile: '0882053066',
            due: 'Aug 8, 2020',
            status: 'Attended',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
        {
            reference: 'nrwb2020nc9977',
            type: 'Maintenance',
            name: 'Steven Chirwa',
            date: 'July 17, 2020',
            mobile: '0885484756',
            due: 'July 20, 2020',
            status: 'Attended',
            details: [
                { label: 'Latitude', value: 938242432.23 },
                { label: 'Longtude', value: 832043412.39 },
            ],
        },
    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Type', field: 'type', },
        { title: 'Customer Name', field: 'name', },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Status', field: 'status', },
    ]

    return (
        <React.Fragment>
            <MainHeading title='Tasks' buttonTitle='Add Task'>
                <ReportTask />
            </MainHeading>
            <Table
                data={data}
                columns={columns}
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
                                        <DetailsPaneLabelValue title='Ref. No.' data={rowData.reference} />
                                        <DetailsPaneLabelValue title='Type' data={rowData.type} />
                                        <DetailsPaneLabelValue title='Customer Name' data={rowData.name} />
                                        <DetailsPaneLabelValue title='Date Issued' data={rowData.date} />
                                        <DetailsPaneLabelValue title='Phone Number' data={rowData.mobile} />
                                        <DetailsPaneLabelValue title='Due Date' data={rowData.due} />
                                        <DetailsPaneTitleSubtile
                                            title='Coordinates Detaails'
                                            items={rowData.details} />
                                    </Grid>
                                    {(rowData.type) === 'New Connection' ?
                                        (
                                            <Grid
                                                container
                                                direction='row'
                                                style={{
                                                    padding: '20px',
                                                    backgroundColor: 'rgba(250,250,250,0.8)'
                                                }}>
                                                <Grid
                                                    item
                                                    sm={4}>
                                                    <Typography
                                                        variant='caption'><br />
                                            Enter distance measurements:
                                        </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    sm={8}>
                                                    <Formik
                                                        initialValues={{
                                                            measure: '',
                                                            ref: 'jjdow'
                                                        }}
                                                        validationSchema={Yup.object({
                                                            measure: Yup.number()
                                                                .required('Required*')
                                                                .integer('Must be an integer')
                                                                .positive('Must be a positive number*')
                                                        })}>
                                                        {({ submitForm, isSubmitting }) => (
                                                            <Form>
                                                                <Grid
                                                                    container
                                                                    direction='row'>
                                                                    <Grid
                                                                        item
                                                                        sm={6}>
                                                                        <Input
                                                                            name='measure'
                                                                            type='text'
                                                                            label='Meters' />
                                                                        <Input
                                                                            name='ref'
                                                                            type='hidden'
                                                                            label='' />
                                                                    </Grid>
                                                                    <Grid
                                                                        item
                                                                        sm={6}
                                                                        style={{
                                                                            padding: '20px 0 0 0'
                                                                        }}>
                                                                        <Button title='Submit' onClick={submitForm} />
                                                                    </Grid>
                                                                </Grid>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </Grid>
                                            </Grid>
                                        ) : null}
                                </React.Fragment>
                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Tasks;