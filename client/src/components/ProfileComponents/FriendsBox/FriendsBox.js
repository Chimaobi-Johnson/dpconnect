import React from 'react';
import * as classes from './FriendsBox.module.css';


const FriendsBox = props => {

    return (    
        <div className={classes.wrapper}>
            <div className={classes.heading}>
                <h4>Friends <span>1042</span></h4>
                <p>All</p>
            </div>
        </div>
    )
}

export default FriendsBox