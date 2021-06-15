import React, { useState } from 'react';
import { primary } from '../../../theme/colors';
import * as classes from './UserInfo.module.css';
import UserMessage from './UserMessage/UserMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCommentAlt, faComments, faUserCog } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../../Form/CustomInput/SearchInput';

// try passing a component as props

const UserInfo = props => {
    const profilePictureLink = 'https://picsum.photos/id/1005/200/300';

    const [sidebarClosed, setSidebarStatus] = useState(false);

    const changeSidebarView = () => {
        setSidebarStatus(!sidebarClosed);
    }

    const renderSidebar = () => {
        if(sidebarClosed) {
            return (
                <div className={classes.wrapperClosed} style={{ backgroundColor: primary.dark3 }}>
                    <div className={classes.dpcontainerClosed}>
                        <img src={profilePictureLink} alt="" />
                    </div>
                    <p onClick={changeSidebarView} className={classes.menuBarClosed}><FontAwesomeIcon icon={faBars} /></p>
                    <p><FontAwesomeIcon icon={faComments} /></p>
                </div>
            )
        } else {
            return (
                <div className={classes.wrapper}>
                    <p onClick={changeSidebarView} className={classes.menuBar}><FontAwesomeIcon icon={faBars} /></p>
                    <div className={classes.top}>
                        <div className={classes.dpcontainer}>
                            <img src={profilePictureLink} alt="" />
                            <p className={classes.username}>Chimaobi Wogu</p>
                        </div>
                        <div className={classes.searchbarContainer}>
                            <SearchInput type="text" />
                            <p><FontAwesomeIcon icon={faUserCog} /></p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.contentList}>
                            <li>
                            <UserMessage letter="M" />  
                            </li>
                            <li>
                            <UserMessage letter="C" />  
                            </li>
                            <li>
                            <UserMessage letter="D" />  
                            </li>
                            <li>
                            <UserMessage letter="O" />  
                            </li>
                        </ul>
                    </div>
             </div> 
            )
        }
    }

    return (
        <>
            {renderSidebar()}
        </>
    )
}

export default UserInfo