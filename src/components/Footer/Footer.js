import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Copyright from './Copyright/Copyright';
export default class Footer extends Component{    
  render(){
    return(
      <React.Fragment>
        <Grid 
        container 
        direction='row' 
        alignItems='center' 
        style={{width:'98%',padding:'16px'}}>
            <Copyright/>
            <Grid sm={8} item/>
            <Grid sm={2} item/>
            
            <Grid sm={1} item/>
        </Grid>
      </React.Fragment>
    );
  }
}