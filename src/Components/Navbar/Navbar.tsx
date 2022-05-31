import React, { useState } from "react";
import styles from './navbar.module.scss';
import BangoloLogo from '../../assets/images/bangolo_logo.svg';
import navIcon from "../../assets/images/navbar.svg";
import close from "../../assets/images/close-icon.svg";

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <div className={styles['navbar']}>
            <div className={styles['desktop-view']}>
                <img src={BangoloLogo} alt="bangolo logo" />
                <span className={styles['bangolo']}>Bangolo</span>
                <div>Home</div>
                <div>List a property</div>
                <div>Blog</div>
                <div>FAQs</div>
                <div>Login</div>
            </div>
            <div className={styles['mobile-view']}>
                <button className={styles['nav']} onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                    <img src={navIcon} alt="bongalo logo"></img>
                </button>
                <img src={BangoloLogo} alt="bangolo logo" width={39} height={39}/>
                <span>Bangolo</span>
                <button className={styles['button']}>Login</button>
                <div className={ isNavExpanded ? styles["navigation-menu"] : styles["expanded"]}>
                    <div onClick={() => setIsNavExpanded(!isNavExpanded)}><img src={close} alt="close icon"/></div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            List a property
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;