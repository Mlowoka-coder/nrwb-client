import React from 'react';
import Grid from '@material-ui/core/Grid'
import Search from '../Inputs/Search';
import HomeImage1 from './Images/1.jpg';
import HomeImage2 from './Images/2.jpg';
import HomeImage3 from './Images/3.jpg';
import HomeImage4 from './Images/4.jpg';
import HomeImage5 from './Images/5.jpg';
import Carousel from 'react-material-ui-carousel';

const ContentBar = () => {
    const items =[HomeImage1,HomeImage2,HomeImage3,HomeImage4,HomeImage5];
    return (
        <React.Fragment>
            <Grid
            container
            direction='row'>
                <Grid item sm={7} style={{margin:'auto auto auto 24%'}}>
                    <Search/>
                </Grid>
            </Grid>
            <Grid
            container
            direction='row'
            style={{padding:'20px',height:'400px'}}>
               <Grid item sm={12}>
                   <Carousel>
                       {items.map((item,i)=> <Item key={i} item={item}/>)}
                   </Carousel>                    
               </Grid>
            </Grid>
        </React.Fragment>
    );
};
const Item = (props)=>{
    return <img src={props.item} style={{width:'100%', marginTop:'28px'}} alt='Home'/>
}
export default ContentBar;