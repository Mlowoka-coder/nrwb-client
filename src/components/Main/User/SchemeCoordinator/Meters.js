import React from 'react';
import MainHeading from '../../Headings/MainHeading';
import NewMeterForm from '../../Form/Meters/NewMeter';
import TableListHead from '../TableList/TableListHead';
import TableListBody from '../TableList/TableListBody';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

const Meters = () => {
    return (
        <React.Fragment>
            <MainHeading title='Meters' buttonTitle='Add New Meter'>
                <MainHeading title='New Meters'/>
                <NewMeterForm/>
            </MainHeading>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={12}>
                    <Table>
                        <TableListHead items={['Class','Total Amount','Amount in Store','Active','Deactive']}/>
                        <TableBody>
                            <TableListBody items={['A','1783','56','1901','78']}/>
                            <TableListBody items={['B','183','56','11','78']}/>
                            <TableListBody items={['C','123','6','11','78']}/>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Meters;