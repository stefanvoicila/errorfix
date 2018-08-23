import React from 'react';

import metrologo from '../../assets/images/metro.png';
import classes from './Logo.css';

const logo = (props) => (
    <div classname ={classes.logo} >
        <img src={metrologo} alt="METRO" />
    </div>
);

export default logo;

 //style = {{height: props.height}}