import React from "react";
import styles from './header.module.scss';
import Previous from '../../assets/images/previousIcon.svg';
import Next from '../../assets/images/nextIcon.svg';
import DownIcon from '../../assets/images/downIcon.svg';


const Header = () => {
    return(
        <div className={styles['header']}>
            <div className={styles['hero-texts']}>
                <img src={Previous} alt="view previous text"></img>
                <div className={styles['hero-text']}>
                    Travelling Africa for business or leisure? <span>Book</span> a place to stay.
                </div>
                <img src={Next} alt="view next text"></img>
            </div>
            <img src={Next} alt="view next text" className={styles['down-pic']}></img>
        </div>
    );
}

export default Header;