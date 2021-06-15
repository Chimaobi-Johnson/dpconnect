import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as classes from './SearchInput.module.css';

const SearchInput = props => (
    <div className={classes.wrapper}>
         <input {...props} className={classes.input} />
         <p className={classes.searchIcon}><FontAwesomeIcon icon={faSearch} /></p>
    </div>
)

export default SearchInput;