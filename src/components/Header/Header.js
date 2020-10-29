import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoggedOut from './LoggedOut/LoggedOut'
import LoggedIn from './LoggedIn/LoggedIn'
import Grid from '@material-ui/core/Grid'
import OrgBrand from './OrgBrand';
import Divider from '../Divider/Divider'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid 
        container
        alignItems='center'>
          <Grid item sm={6}>
            <OrgBrand/>
          </Grid>
          <Grid item sm={6}>
            {(this.props.loggedIn) ? <LoggedIn/>:<LoggedOut/>}
          </Grid>
        </Grid>
        <Divider/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Header);