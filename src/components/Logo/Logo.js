import React from 'react';

import logo from '../../assets/images/metro.png';
import classes from './Logo.css';

const logo = (props) => (
    <div classname ={classes.logo} style = {{height: props.height}}>
        <img src={logo} alt="METRO" />
    </div>
);

export default logo;