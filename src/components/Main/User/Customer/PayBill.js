import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PaymentForm from '../../Form/BillPayment/PaymentForm';
import NumberCard from './../Home/NumberCard';
import MainHeading from '../../Headings/MainHeading';

const PayBill = () => {
    const items=[
        'Only TNM Mpamba or Airtel Money can be used as payment means',
        'On TNM Mpamba dial *444# or *211# on Airtel Money. Select Payment option and proceed to deposit into our account',
        'Your payment transaction will be documented and kept for future use',
        'The Northern Region Water Board will Not be held reliable with any payment mistake by the user'
    ]
    return (
        <React.Fragment>
            <MainHeading title='Pay Water Bills'/>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={4}>
                    <PaymentForm/>
                </Grid>
                <Grid
                item
                sm={4}>
                    <Grid>
                        <Typography
                        variant='subtitle2'>
                            Our Billing Policies:
                        </Typography>
                        <ul>
                            {items.map((item,id)=>(
                               <li key={id}>
                                <Typography variant='caption'>
                                    {item}<br/><br/>
                                </Typography>
                            </li> 
                            ))}
                        </ul>
                    </Grid>
                </Grid>
                <Grid item sm={1}/>
                <Grid
                item
                sm={2}>
                    <NumberCard
                    title='Bill Balance'
                    number='123,820.38'
                    percentage={false}/>
                </Grid>
                
            </Grid>
        </React.Fragment>
    );
};

export default PayBill;