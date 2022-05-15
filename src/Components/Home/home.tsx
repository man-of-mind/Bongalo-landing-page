import React from "react";
import Header from "../Header/header";
import NavBar from "../Navbar/Navbar";
import styles from './homepage.module.scss';
import location from "../../assets/images/location.svg";

const Home = () => {
    return (
        <div className={styles['homepage']}>
            <div className={styles['hero-section']}>
                <NavBar />
                <Header />
                <div className={styles['floating-container']}>
                    <div className={styles['feature-container']}>
                        <div className={styles['feature']}>
                            <img src={location} alt="location icon"></img>
                            <span>Destination</span>
                            <select name="places" id="places">
                                <option value="Kigali">Kigali, Riwanda</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['feature']}>
                            <img src={location} alt="location icon"></img>
                            <span>Destination</span>
                            <select name="places" id="places">
                                <option value="Kigali">Kigali, Riwanda</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['feature']}>
                            <img src={location} alt="location icon"></img>
                            <span>Destination</span>
                            <select name="places" id="places">
                                <option value="Kigali">Kigali, Riwanda</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['search']}>Search</div>
                    </div>
                </div>
                <div className={styles['new-age']}>Another section</div>
            </div>
            
        </div>
    );
}

export default Home;