import React from 'react';
import * as classes from './CustomInput.module.css';

const CustomInput = props => (
    <input {...props} className={classes.input} />
)

export default CustomInput;