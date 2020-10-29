import React from 'react';
import Grid from '@material-ui/core/Grid';
import NRWB from './NRWB';
import Motto from './Motto';
import TopNav from './TopNav/TopNav';
import Home from './Home/Home';
import Advocation from './Advocation/Advocation';
import {Switch, Route} from 'react-router-dom';
import About from './About.js/About';
import Contact from './Contact/Contact';

const Main = () => {
  return (
    <React.Fragment>
      <br/>
      <Grid 
      container 
      direction='row'>
        <Grid item sm={2}>
          <NRWB/>
          <Motto style={{paddingBottom:'10px'}}/>
          <TopNav bool={false}/>
        </Grid>
        <Grid 
        item 
        sm={8} 
        style={{padding:'0 20px 0 20px'}}>
            <Switch>
            <Route path='/about'>
                <About/>
              </Route> 
              <Route path='/contact'>
                <Contact/>
              </Route> 
              <Route path='/' exact>
                <Home/>
              </Route> 
              </Switch>             
        </Grid>
        <Grid
        item
        sm={2}>
          <Advocation/>
        </Grid>
      </Grid> 
    </React.Fragment>
  );
};

export default Main;