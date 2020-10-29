import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const DetailsPaneTitleSubtitle = ({title, items}) => {
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <Grid
                container
                direction='row'>
                    <Grid
                    item
                    sm={12}>
                        <Typography
                        variant='caption'>
                            <br/>
                            <b>{title}</b>
                        </Typography><hr/>
                    </Grid>
                </Grid>
                <Grid
                container
                direction='row'
                style={{
                    padding:'0 0 0 40px'
                }}>
                        {items.map((item,id)=>(
                            <React.Fragment>
                                <Grid
                                item
                                sm={2}>
                                    <Typography
                                    variant='caption'>
                                        {item.label}
                                    </Typography>
                                </Grid>
                                <Grid
                                item
                                sm={10}>
                                    <Typography
                                    variant='caption'>
                                        {item.value}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                            
                        ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default DetailsPaneTitleSubtitle;