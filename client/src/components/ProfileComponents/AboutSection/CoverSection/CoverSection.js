import React from 'react';
import coverImage from '../../../../images/intricate-explorer-h7L-SRej-sw-unsplash.jpg';
import * as classes from './CoverSection.module.css';

const CoverSection = props => {
// dsd
    return (
        <div className={classes.wrapper}>
            <img className={classes.coverImage} src={coverImage} alt="" />
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src='https://picsum.photos/id/1005/200/300' alt="" />
                </div>
                <div className={classes.infoContainer}>
                    <h3>Chimaobi Johnson Wogu</h3>
                    <ul>
                        <li>Coding</li>
                        <li>Gaming</li>
                        <li>Music</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CoverSection