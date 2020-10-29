import React from 'react';
import Table from '../Table/Table'
import DetailsPaneLabelValue from '../Table/DetailsPaneLabelValue';
import DetailsPaneTitleSubtile from '../Table/DetailsPaneTitleSubtitle';
import Grid from '@material-ui/core/Grid';
import MainHeading from '../../Headings/MainHeading';
import PayBill from './PayBill';

const Transactions = () => {
    const data = [
        {
            reference: 'nrwb202010001',
            type: 'Payment',
            amount: 10000.00,
            date: 'Sept 6, 2020',
            balance: -10981.53,
            billCalc: [
                { label: 'Before', value: -981.51 },
                { label: 'After', value: -10981.53 }
            ],
            details: [
                { label: 'Service', value: 'TNM Mpamba' },
                { label: 'Ref. Number', value: 'jffkle12l3l3' },
                { label: 'Amount', value: '10000.00' },
                { label: 'Date', value: 'Sept 6, 2020' },
            ],
        },
        {
            reference: 'nrwb202010002',
            type: 'Charge',
            amount: 3098.26,
            date: 'June 6, 2000',
            balance: -981.51,
            billCalc: [
                { label: 'Old Balance', value: -981.51 },
                { label: 'New Balance', value: 1081.53 }
            ],
            details: [
                { label: 'Old Reading', value: '129304' },
                { label: 'New Reading', value: '129498' },
                { label: 'Charge', value: '10000.00' },
                { label: 'Date', value: 'Sept 1, 2020' },
            ],
        },
        {
            reference: 'nrwb202010003',
            type: 'Charge',
            amount: 2745.97,
            date: 'Jan 2, 2009',
            balance: -4053.53,
            billCalc: [
                { label: 'Old Balance', value: -981.51 },
                { label: 'New Balance', value: 1081.53 }
            ],
            details: [
                { label: 'Old Reading', value: '129304' },
                { label: 'New Reading', value: '129498' },
                { label: 'Charge', value: '10000.00' },
                { label: 'Date', value: 'Sept 1, 2020' },
            ],
        },
        {
            reference: 'nrwb202010004',
            type: 'Payment',
            amount: 7000.00,
            date: 'Jan 2, 2009',
            balance: -6799.50,
            billCalc: [
                { label: 'Before', value: -981.51 },
                { label: 'After', value: -10981.53 }
            ],
            details: [
                { label: 'Service', value: 'TNM Mpamba' },
                { label: 'Ref. Number', value: 'jffkle12l3l3' },
                { label: 'Amount', value: '10000.00' },
                { label: 'Date', value: 'Sept 6, 2020' },
            ],
        },
        {
            reference: 'nrwb202010005',
            type: 'Payment',
            amount: 3400.50,
            date: 'Jan 2, 2009',
            balance: 200.50,
            billCalc: [
                { label: 'Before', value: -981.51 },
                { label: 'After', value: -10981.53 }
            ],
            details: [
                { label: 'Service', value: 'TNM Mpamba' },
                { label: 'Ref. Number', value: 'jffkle12l3l3' },
                { label: 'Amount', value: '10000.00' },
                { label: 'Date', value: 'Sept 6, 2020' },
            ],
        },

    ]

    const columns = [
        { title: 'Ref. Number', field: 'reference', },
        { title: 'Transaction Type', field: 'type', },
        { title: 'Amount', field: 'amount', type: 'numeric' },
        { title: 'Date Issued', field: 'date', type: 'date' },
        { title: 'Balance', field: 'balance', type: 'numeric' },
    ]

    return (
        <React.Fragment>
            <MainHeading title='Financial Transactions' buttonTitle='Add Transaction' width='1000px'>
                <PayBill/>
            </MainHeading>
            <Table
                data={data}
                columns={columns}
                detailPanel={
                    [
                        {
                            tooltip: 'View',
                            render: rowData => (
                                <Grid
                                    container
                                    direction='row'
                                    style={{
                                        padding: '20px',
                                        backgroundColor: 'rgba(250,250,250,0.8)'
                                    }}>
                                    <DetailsPaneLabelValue title='Reference Number' data={rowData.reference} />
                                    <DetailsPaneLabelValue title='Transaction Type' data={rowData.type} />
                                    <DetailsPaneLabelValue title='Date Issued' data={rowData.date} />
                                    <DetailsPaneTitleSubtile
                                        title='Bill Calculation'
                                        items={rowData.billCalc} />
                                    {(rowData.type === 'Payment') ?
                                        <DetailsPaneTitleSubtile title='Payment Details' items={rowData.details} /> :
                                        <DetailsPaneTitleSubtile title='Meter Reading Details' items={rowData.details} />
                                    }
                                </Grid>

                            )
                        }
                    ]
                } />
        </React.Fragment>
    );
};

export default Transactions;