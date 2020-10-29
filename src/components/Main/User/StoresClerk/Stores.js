import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import TableListHead from '../TableList/TableListHead';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import RequestFinance from './AddItem';

const Stores = () => {
    return (
        <React.Fragment>
            <MainHeading title='Available Equipment' buttonTitle='Add Item'>
                <RequestFinance/>
            </MainHeading>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={12}>
                    <Table>
                        <TableListHead items={['Item','Size','Amount in Store']}/>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                    variant='caption'>
                                        Pipe
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                <Typography
                                    variant='caption'>
                                        5m
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                    variant='caption'>
                                        5
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Stores;