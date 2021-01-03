import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img
                className= 'header__icon'
                // Airbnb logo
                src='https://i.pinimg.com/236x/1a/dd/e8/1adde8bf514c8868d662ac5897891417.jpg'
            />
            </Link>
           
            <div className='header__center'>
                <input type='text'/>
                {/* <SearchIcon/> */}
                <SearchIcon/>
            </div>
            <div className='header__right' >
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
