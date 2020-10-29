import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Phone from '@material-ui/icons/Phone';

const ContactDetails = () => {
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={12}>
                    <Grid
                    container
                    direction='column'>
                        <Grid
                        item
                        sm={12}>
                            <Typography
                            variant='overline'
                            color='textSecondary'>
                                Northern Region Water Board<br/>
                                Bloemwater Street,<br/>
                                Kawiluwilu House,<br/>
                                Private Bag 94,<br/>
                                Mzuzu
                            </Typography>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid   
                item
                sm={12}
                style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <Facebook
                    color='primary'
                    fontSize='small'/>
                    <Typography
                    variant='caption'>
                        &nbsp;
                        Northern Region Water Board
                    </Typography>
                </Grid>
                <Grid
                item
                sm={12}
                style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <Twitter
                    color='primary'
                    fontSize='small'/>
                    <Typography
                    variant='caption'>
                        &nbsp;
                        @Kawiluwilu
                    </Typography>
                </Grid>
                <Grid
                item
                sm={12}
                style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <Phone
                    fontSize='small'/>
                    <Typography
                    variant='caption'>
                        &nbsp;
                        (+265) 1 310 254/255
                    </Typography>
                </Grid>
                <Grid
                item
                sm={12}
                style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <Phone
                    fontSize='small'/>
                    <Typography
                    variant='caption'>
                        &nbsp;
                        (+265) 1 310 082 
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ContactDetails;