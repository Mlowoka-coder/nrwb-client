import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '../../Button/OutlinePrimary';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton'

const MainHeading = ({ title, buttonTitle, children, width }) => {
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => { setOpen(!open) };

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
                        direction='row'>
                        <Grid
                            item
                            sm={9}>
                            <Typography>
                                {title}
                            </Typography>
                        </Grid>
                        {buttonTitle ?
                            <React.Fragment>
                                <Grid
                                    item
                                    sm={3}>
                                    <Button title={buttonTitle} onClick={handleToggle} variant="outlined" />
                                    <Backdrop
                                        style={{ zIndex: '11' }}
                                        open={open}>
                                        <Paper
                                            style={{
                                                width: width,
                                                padding: '16px'
                                            }}>
                                            <Paper
                                                variant='outlined'
                                                style={{
                                                    textAlign: 'center'
                                                }}>
                                                <IconButton
                                                    onClick={handleToggle}
                                                    style={{
                                                        padding: '3px'
                                                    }}>
                                                    <Clear color='secondary' />
                                                </IconButton>
                                            </Paper>
                                            <br />
                                            {children}
                                        </Paper>
                                    </Backdrop>
                                </Grid>
                            </React.Fragment> :
                            null}

                    </Grid>
                    <hr />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MainHeading;