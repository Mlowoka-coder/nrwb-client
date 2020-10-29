import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    Title,
    AreaSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
import Typography from '@material-ui/core/Typography'

const data =[
    {argument:'Jan',value:100},
    {argument:'Feb',value:130},
    {argument:'Mar',value:140},
    {argument:'Apr',value:115},
    {argument:'May',value:115},
    {argument:'Jun',value:100},
    {argument:'Jul',value:85},
    {argument:'Aug',value:90},
    {argument:'Sept',value:110},
    {argument:'Oct',value:190},
    {argument:'Nov',value:200},
    {argument:'Dec',value:160},
];

const Graph = () => {
    return (
        <React.Fragment>
                <Chart
                data={data} 
                height={455}         
                >
                    <ArgumentAxis/>
                    <ValueAxis/>
                    <AreaSeries 
                    valueField='value'
                    argumentField='argument'/>
                    <Title text={<Typography
                    variant='overline'
                    color='textSecondary'>
                        Customers Water Usage
                    </Typography>}/>
                    <Animation/>

                </Chart>
        </React.Fragment>
    );
};

export default Graph;