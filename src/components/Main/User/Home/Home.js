import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberCard from './NumberCard';
import { connect } from 'react-redux';
import Graph from './Graph';
import MainHeading from '../../Headings/MainHeading';
import CustomerInformation from '../Customer/CustomerInformation';
import PlumberInformation from '../Plumber/PlumberInformation';
import SalesRepresentativeInformation from '../SalesRepresentative/SalesRepresentativeInformation';
import StoresClerkInformation from '../StoresClerk/StoresClerkInformation';
import SupervisorInformation from '../Supervisor/SupervisorInformation';
import SchemeCoordinatorInformation from '../SchemeCoordinator/SchemeCoordinatorInformation';
import AccountantInformation from '../Accountant/AccountantInformation';
import AdminInformation from '../Admin/AdminInformation';

const Home = ({ role }) => {
    return (
        <React.Fragment>
            <Grid
                container
                direction='row'>
                <Grid
                    item
                    sm={
                        role[0] ?
                            5 :
                            12
                    }>
                    {role[1] === 0 && <PlumberInformation/>}
                    {role[1] === 1 && <SalesRepresentativeInformation/>}
                    {role[1] === 2 && <StoresClerkInformation/>}
                    {role[1] === 3 && <SupervisorInformation/>}
                    {role[1] === 4 && <SchemeCoordinatorInformation/>}
                    {role[1] === 5 && <AccountantInformation/>}
                    {role[1] === 6 && <AdminInformation/>}
                    {(role[1] != null) && <br />}
                    {role[0] && <CustomerInformation/>}
                    {role[0] && <br />}
                    <Grid
                        container
                        direction='row'>

                        <MainHeading title='Connection Information' />
                        <NumberCard
                            title='Applications'
                            number='1'
                            percent={false}
                            width={4} />
                        <NumberCard
                            title='Reports'
                            number='3'
                            percentage={false}
                            width={4} />
                        <NumberCard
                            title='App Progress'
                            number='45'
                            percentage={true}
                            width={4} />
                    </Grid>
                </Grid>{role[0] &&
                    <Grid
                        item
                        sm={7}>
                        <Grid
                            container
                            direction='row'>
                            <Grid
                                item
                                sm={12}
                                style={{
                                    padding: '0px 0px 10px 10px'
                                }}>
                                <Graph />
                            </Grid>
                        </Grid>
                    </Grid>}
            </Grid>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        role: state.role
    }
}

export default connect(mapStateToProps)(Home);