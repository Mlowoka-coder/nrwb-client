import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = () => {
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <Grid
                item
                sm={5}>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Organization Overview
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                            We are wholly owned by the Government of Malawi under the Water Works Act 
                            (No. 17 of 1995). Our customers consist of individual households, institutions, 
                            commercial entities and communal water points.
                            We have developed and launched our new strategic plan for the period 2015-2020 
                            which has redefined our Motto, Vision and Mission. In line with our ambitious vision, 
                            we have redeveloped our core values and key strategic goals to match the direction 
                            we are taking.
                        </div>
                    </Typography>
                    <br/>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Our Mandate
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                            Our mandate is to supply potable water and waste borne sanitation service to urban 
                            and peri-urban areas of the Northern Region of Malawi. Our water source consists of 
                            surface and ground water. With this mandate, we are currently supplying potable 
                            water to the following areas: Mzuzu, Ekwendeni, Chintheche, Nkhatabay, Mzimba, 
                            Rumphi, Chilumba, Karonga, Songwe and Chitipa. At this point, it should be noted 
                            that the waterborne sanitation component is in the process of being transferred to 
                            us. we are taking.
                        </div>
                    </Typography>
                </Grid>


                <Grid item sm={1}/>
                <Grid
                item
                sm={5}>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Our Motto
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                        From Basics to Excellence
                        </div>
                    </Typography>
                    <br/>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Our Vision
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                        Potable Water for All
                        </div>
                    </Typography>
                    <br/>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Our Mission Statement
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                        ‘To ensure that all people have safe drinking water’
                        We shall sustainably develop, construct, maintain and operate water works as 
                        well as protect water catchment areas.
                        </div>
                    </Typography>
                    <br/>
                    <Typography
                    color='primary'
                    variant='subtitle2'>
                        Our Core Values
                    </Typography>
                    <Typography
                    variant='caption'
                    >
                        <div style={{textAlign:'justify'}}>
                        We believe that the following business values engender a spirit of commitment and 
                        focus on high quality service delivery by the Board’s employees to its customers:<br/><br/>
                        <div style={{
                            padding:'0 0 0 5px'
                        }}>
                            &bull; <Typography color='primary' variant='caption'>Customer First</Typography><br/>
                            &bull; <Typography color='primary' variant='caption'>Focus on Quality</Typography><br/>
                            &bull; <Typography color='primary' variant='caption'>Culture of 4Es (ethics, efficiency, effectiveness, excellence)</Typography><br/>
                            &bull; <Typography color='primary' variant='caption'>Forward Thinking</Typography>
                        </div>
                        </div>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default About;