import React from "react";
import styles from './navbar.module.scss';
import BangoloLogo from '../../assets/images/bangolo_logo.svg';

const NavBar = () => {
    return(
        <div className={styles['navbar']}>
            <img src={BangoloLogo} alt="bangolo logo" width={78} height={78}/>
            <span className={styles['bangolo']}>Bangolo</span>
            <div>Home</div>
            <div>List a property</div>
            <div>Blog</div>
            <div>FAQs</div>
            <div>Login</div>
        </div>
    );
}

export default NavBar;