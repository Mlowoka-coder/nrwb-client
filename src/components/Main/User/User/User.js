import React from 'react';
import NRWB from '../../NRWB';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Contact from '../../Contact/Contact';
import TopNav from '../../TopNav/TopNav';
import UserSettings from './UserSettings';
import Home from '../Home/Home';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UserNav from './UserNav';
import { connect } from 'react-redux';
import CustomerNav from '../Customer/CustomerNav';
import ConnectionAccounts from '../Customer/ConnectionAccounts';
import Transactions from '../Customer/Transactions'
import PlumberNav from '../Plumber/PlumberNav'
import PendingApplications from './Applications';
import CustomerCrimes from '../Plumber/Crimes.js';
import Reports from './Reports';
import RequestTools from '../Plumber/RequestTools';
import Tasks from '../Plumber/Tasks';
import SalesRepresentativeNav from '../SalesRepresentative/SalesRepresentativeNav';
import ConfirmedCrimes from '../SalesRepresentative/ConfirmedCrimes';
import AllMeters from '../SalesRepresentative/AllMeters';
import StoresClerkNav from "../StoresClerk/StoresClerkNav";
import RequestFinance from "../StoresClerk/RequestFinance";
import ToolsRequests from "../StoresClerk/ToolsRequest";
import Stores from "../StoresClerk/Stores";
import AddItem from "../StoresClerk/AddItem";
import SupervisorNav from '../Supervisor/SupervisorNav';
import SupervisorTasks from '../Supervisor/Tasks';
import SupervisorSalesRep from '../Supervisor/SalesRep';
import SchemeCoordinatorNav from '../SchemeCoordinator/SchemeCoordinatorNav';
import Tariffs from '../SchemeCoordinator/Tariffs';
import Meters from '../SchemeCoordinator/Meters';
import CoordCrimesRegister from '../SchemeCoordinator/Crimes';
import SupervisorCrimesRegister from '../Supervisor/Crimes';
import AccountantNav from '../Accountant/AccountantNav';
import FinancialRequests from '../Accountant/FinancialRequests';
import TariffChange from '../Accountant/TariffChange';
import Billing from '../Accountant/Billing';
import AdminNav from '../Admin/AdminNav';
import AddEmployee from '../Admin/AddEmployee';
import ChangeStatus from '../Admin/ChangeStatus';

const User = ({ role }) => {
  const determine = (number) => {
    switch (number) {
      case 0:
        return <PlumberNav/>;
      case 1:
        return <SalesRepresentativeNav/>;
      case 2:
          return <StoresClerkNav/>;
      case 3:
          return <SupervisorNav/>;
      case 4:
          return <SchemeCoordinatorNav/>;
      case 5:
            return <AccountantNav/>;
      case 6:
          return <AdminNav/>;
      default:
        return null;
    }
  }
  return (
    <React.Fragment>
      <br />
      <Grid
        container
        direction='row'>
        <Grid item sm={2}>
          <NRWB />
          <Card
            variant='outlined'
          >
            <CardContent style={{ padding: '0px' }}>
              {determine(role[1])}
              {role[0] ?
                <CustomerNav /> :
                null
              }
              <UserNav />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          sm={8}
          style={{ padding: '0 20px 0 20px' }}>
          <Switch>
            <Route path='/user/admin/add-employee'>
              <AddEmployee/>
            </Route>
            <Route path='/user/admin/change-status'>
              <ChangeStatus/>
            </Route>
            <Route path='/user/accountant/financial-request'>
              <FinancialRequests/>
            </Route>
            <Route path='/user/accountant/tariff-change'>
              <TariffChange/>
            </Route>
            <Route path='/user/accountant/billing'>
              <Billing/>
            </Route>
            <Route path='/user/scheme-coordinator/crimes'>
              <CoordCrimesRegister/>
            </Route>
            <Route path='/user/supervisor/crimes'>
              <SupervisorCrimesRegister/>
            </Route>
            <Route path='/user/scheme-coordinator/tariffs'>
              <Tariffs/>
            </Route>
            <Route path='/user/scheme-coordinator/meter-boxes'>
              <Meters/>
            </Route>
            <Route path='/user/supervisor/tasks'>
              <SupervisorTasks/>
            </Route>
            <Route path='/user/supervisor/sales-rep'>
              <SupervisorSalesRep/>
            </Route>
            <Route path='/user/stores-clerk/requests'>
              <ToolsRequests/>
            </Route>
            <Route path='/user/stores-clerk/contact-finance'>
              <RequestFinance/>
            </Route>
            <Route path='/user/stores-clerk/view-stores'>
              <Stores/>
            </Route>
            <Route path='/user/stores-clerk/add-item'>
              <AddItem/>
            </Route>
          <Route path='/user/sales-representative/all-meters'>
              <AllMeters/>
            </Route>
            <Route path='/user/sales-representative/crimes'>
              <ConfirmedCrimes/>
            </Route>
            <Route path='/user/plumber/request-tools'>
              <RequestTools/>
            </Route>
            <Route path='/user/plumber/customer-crimes'>
              <CustomerCrimes/>
            </Route>
            <Route path='/user/plumber/tasks'>
              <Tasks/>
            </Route>
            <Route path='/user/customer/connection-accounts'>
              <ConnectionAccounts/>
            </Route>
            <Route path='/user/customer/transactions'>
              <Transactions/>
            </Route>
            <Route path='/user/settings'>
              <UserSettings/>
            </Route>
            <Route path='/user/new-water-connection'>
              <PendingApplications/>
            </Route>
            <Route path='/user/water-connection-fault-report'>
              <Reports/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Route path='/user'>
              <Home/>
            </Route>
          </Switch>
        </Grid>
        <Grid
          item
          sm={2}>
          <TopNav bool={true} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    role: state.role
  }
}

export default connect(mapStateToProps)(User);