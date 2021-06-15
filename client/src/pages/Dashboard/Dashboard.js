import React from 'react';
import UserCategories from '../../components/Sidebar/UserCategories/UserCategories';
import UserInfo from '../../components/Sidebar/UserInfo/UserInfo';
import { primary } from '../../theme/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import * as classes from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/Form/CustomInput/CustomInput';
import { Button } from '@material-ui/core';
import CoverSection from '../../components/ProfileComponents/CoverSection/CoverSection';
import AboutSection from '../../components/ProfileComponents/AboutSection/AboutSection';
import FriendsBox from '../../components/ProfileComponents/FriendsBox/FriendsBox';

const Dashboard = props => {

    return (
        <div className={classes.wrapper}>
            <div id="sidebarLeft" className={classes.sidebarLeft} style={{ backgroundColor: primary.dark1 }}>
                <UserInfo />
            </div>
            <div className={classes.mainContent}>
                <nav className={classes.topNav} style={{ backgroundColor: primary.dark2 }}>
                    <ul>
                        <li><Link style={{ color: primary.textWhite2 }} to="/">Home</Link></li>
                        <li><Link style={{ color: primary.textWhite2 }} to="/">Profile</Link></li>
                        <li><Link style={{ color: primary.textWhite2 }} to="/">Groups</Link></li>
                        <li><Link style={{ color: primary.textWhite2 }} to="/">Photos</Link></li>
                        <li><Link style={{ color: primary.textWhite2 }} to="/">Contacts</Link></li>
                    </ul>

                    <div className={classes.searchContainer}>
                        <CustomInput placeholder="Search..." type="search" />
                        <Button variant="contained" color="default"><FontAwesomeIcon icon={faSearch} /></Button>
                    </div>
                </nav>
                <div className={classes.contentBox}>
                    <div className={classes.feedContainer}>
                        <div className={classes.coverPictureContainer}>
                            <CoverSection />
                        </div>
                        <div className={classes.sectionContainer}>
                          <div className={classes.leftSection}>
                              <div className={classes.aboutSection} style={{ backgroundColor: primary.dark1 }}>
                                <AboutSection />
                              </div>
                              <div className={classes.friendsBox} style={{ backgroundColor: primary.dark1 }}>
                                <FriendsBox />
                              </div>
                          </div>
                          <div className={classes.rightSection}></div>
                        </div>
                    </div>
                    <div className={classes.sidebarRight} style={{ backgroundColor: primary.dark1 }}>
                        <UserCategories />
                    </div>
                </div>
            </div>
 
        </div>
    )
}

export default Dashboard