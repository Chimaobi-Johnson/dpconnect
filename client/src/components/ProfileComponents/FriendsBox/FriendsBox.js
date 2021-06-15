import React from 'react';
import friendImage1 from '../../../images/clarke-sanders-HOQpBGL95Z8-unsplash.jpg';
import friendImage2 from '../../../images/disruptivo-DokE5D4GbDk-unsplash.jpg';
import friendImage3 from '../../../images/dusan-jovic-2V4Qhq55maY-unsplash.jpg';
import friendImage4 from '../../../images/etty-fidele-J1jYLLlRpA4-unsplash.jpg';
import friendImage5 from '../../../images/mike-von-BBtNiV8EKYc-unsplash.jpg';
import friendImage6 from '../../../images/pexels-godisable-jacob-718978.jpg';
import friendImage7 from '../../../images/pexels-joão-1080213.jpg';
import * as classes from './FriendsBox.module.css';


const FriendsBox = props => {

    return (    
        <div className={classes.wrapper}>
            <div className={classes.heading}>
                <h4>Friends <span>1042</span></h4>
                <p>All</p>
            </div>
            <div className={classes.container}>
                <div className={classes.box}>
                    <img src={friendImage1} alt="" />
                    <h5>Clarke Sanders</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage2} alt="" />
                    <h5>Selma Tatisha</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage3} alt="" />
                    <h5>Joyce Santa</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage4} alt="" />
                    <h5>Sarah Palin</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage5} alt="" />
                    <h5>Trina Blue</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage6} alt="" />
                    <h5>Jessica Elbow</h5>
                </div>
                <div className={classes.box}>
                    <img src={friendImage7} alt="" />
                    <h5>Sam Geez</h5>
                </div>
            </div>
        </div>
    )
}

export default FriendsBox