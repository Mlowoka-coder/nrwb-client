import React from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Number = ({ title, number, percentage, width }) => {
    const determine = (n) => {
        if (n === 0)
            return <span style={{ color: 'gray' }}>{n}%</span>
        else if (n <= 50)
            return <span style={{ color: '#f50057' }}>{n}%</span>
        else if (n <= 99)
            return <span style={{ color: '#3f51b5' }}>{n}%</span>
        else if (n === 100)
            return <span style={{ color: 'green' }}>{n}%</span>
    }

    return (
        <React.Fragment>
            <Grid
                item
                sm={width}
                style={{
                    padding: '2px'
                }}>
                <Card
                    variant='outlined'>
                    <CardHeader
                        title={
                            <React.Fragment>
                                <Typography
                                    variant='caption'>
                                    {title}
                                </Typography>
                                <hr />
                            </React.Fragment>

                        }
                        style={{
                            padding: '10px 10px 0 10px'
                        }} />
                    <CardContent
                        style={{
                            padding: '0',
                            overflowX: 'auto'
                        }}>
                        <Typography
                            variant='h6'
                            style={{
                                textAlign: 'center'
                            }}>
                            {percentage ?
                                (determine(number)) : (
                                    <span style={{ color: 'gray' }}>{number}</span>
                                )}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    );
};

export default Number;