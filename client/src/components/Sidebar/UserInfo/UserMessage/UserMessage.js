import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import * as classes from './UserMessage.module.css';

const UserMessage = props => {
    const { letter } = props;
    return (
        <div className={classes.wrapper}>
            <div className={classes.userAvater}>
                <Avatar>{letter}</Avatar>
            </div>
            <div className={classes.messageContent}>
                <h4>Mellisa</h4>
                <p>Hello, I tried to reach you on phone today...</p>
                <div className={classes.messageCount}>
                    2
                </div>
            </div>

        </div>
    )
}
   

export default UserMessage