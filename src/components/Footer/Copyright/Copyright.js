import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Copyright extends Component{
  render(){
    return(
      <React.Fragment>
        <Grid sm={1} item style={{padding:'10px 0 0 0'}}>
            <Typography variant='subtitle2' color='primary' style={{float:'right'}}>
                &copy; 2020 NRWB
            </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}