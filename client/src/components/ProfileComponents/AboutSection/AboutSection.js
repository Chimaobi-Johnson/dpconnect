import { faBriefcase, faEllipsisV, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React from 'react';
import * as classes from './AboutSection.module.css';

const AboutSection = props => {

    return (
        <div className={classes.wrapper}>
            <h4>Brief Information</h4>
            <p className={classes.options}><FontAwesomeIcon icon={faEllipsisV} /></p>
            <table>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={faBriefcase} /></td>
                        <td>Software Developer at Marvtech</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faGraduationCap} /></td>
                        <td>Birmingham City University</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
                        <td>Selly Oak, Birmingham</td>
                    </tr>
                </tbody>
            </table>
            <Button className={classes.addButton} variant="outlined" color="default">Add Hobby</Button>

        </div>
    )
}

export default AboutSection;