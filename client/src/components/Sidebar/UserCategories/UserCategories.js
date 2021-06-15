import React, { useState } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import * as classes from './UserCategories.module.css';
import { primary } from '../../../theme/colors';

const UserCategories = props => {

    const [open, setOpen] = useState(true);
    const [openSchool, setOpenSchool] = useState(true);
    const [openLocation, setOpenLocation] = useState(true);

    const handleClick = () => {
    setOpen(!open);
    };

    const handleClick2 = () => {
        setOpenSchool(!openSchool);
    };

    const handleClick3 = () => {
        setOpenLocation(!openLocation);
    };


    return (
    <div className={classes.wrapper}>
     <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader className={classes.subheader} component="div" id="nested-list-subheader">
                CATEGORIES
            </ListSubheader>
        }
        className={classes.root}
        >
            <ListItem button>
                <ListItemText primary="Music" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sports" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Parties" />
            </ListItem>
            <ListSubheader className={classes.subheader} component="div" id="nested-list-subheader">
                SORTING
            </ListSubheader>
            {/* HOME COUNTRY */}
            <ListItem style={{ backgroundColor: primary.dark0 }} button onClick={handleClick}>
                <ListItemText primary="Home Country" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Nigeria" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="France" />
                </ListItem>
                </List>
            </Collapse>

            {/* SCHOOL */}

            <ListItem style={{ backgroundColor: primary.dark0 }} button onClick={handleClick2}>
                <ListItemText primary="School" />
                {openSchool ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSchool} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Birmingham City University" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Aston University" />
                </ListItem>
                </List>
            </Collapse>

            {/* CURRENT LOCATION */}

            <ListItem style={{ backgroundColor: primary.dark0 }} button onClick={handleClick3}>
                <ListItemText primary="Current Location" />
                {openLocation ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openLocation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Birmingham" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="London" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="New Castle" />
                </ListItem>
                </List>
            </Collapse>

            </List>
    </div>
)

}

export default UserCategories