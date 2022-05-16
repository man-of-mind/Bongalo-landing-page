import React from "react";
import Header from "../Header/header";
import NavBar from "../Navbar/Navbar";
import styles from './homepage.module.scss';
import location from "../../assets/images/location.svg";
import calendar from "../../assets/images/calendar.svg";
import guest from "../../assets/images/guest.svg";
import kigali from "../../assets/images/kigali.svg";
import yaonde from "../../assets/images/yaonde.svg";
import rubavu from "../../assets/images/rubavu.svg";
import duola from "../../assets/images/duola.svg";
import butare from "../../assets/images/butare.svg";
import CityCard from "../../Cards/card";

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
                            <div className={styles['img-container']}>
                            <img src={calendar} alt="calendar icon"></img>
                            </div>
                            <span>Arrival - Departure</span>
                            <select name="places" id="places">
                                <option value="Kigali">Kigali, Riwanda</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['feature']}>
                            <div className={styles['img-container']}>
                                <img src={guest} alt="guest icon"></img>
                            </div>
                            <span>Guest</span>
                            <select name="places" id="places">
                                <option value="Kigali">Kigali, Riwanda</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['search']}>Search</div>
                    </div>
                </div>
                <div className={styles['featured-cities']}>Featured Cities</div>
                <div className={styles['featured-cities-images']}>
                    <div className={styles['first-grid-items']}>
                        <div className={styles['flex-items']}>
                            <CityCard bgImage={kigali} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)'>
                                <div className={styles['detail']}>
                                    <p className={styles['city-name']}>Kigali</p>
                                    <span>25 properties</span>
                                </div>
                            </CityCard>
                            <CityCard bgImage={yaonde} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)'>
                               <div className={styles['detail']}>
                                <p className={styles['city-name']}>Yaounde</p>
                                <span>15 properties</span>
                               </div>
                            </CityCard>
                        </div>
                    </div>
                    <CityCard bgImage={rubavu} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)'>
                        <div className={styles['detail']}>
                            <p className={styles['city-name']}>Rubavu</p>
                            <span>32 properties</span>
                       </div>
                    </CityCard>
                    <CityCard bgImage={duola} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)'>
                        <div className={styles['detail']}>
                            <p className={styles['city-name']}>Duola</p>
                            <span>16 properties</span>
                       </div>
                    </CityCard>
                    <CityCard bgImage={butare} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)'>
                        <div className={styles['detail']}>
                            <p className={styles['city-name']}>Butare</p>
                            <span>32 properties</span>
                       </div>
                    </CityCard>
                </div>
                <div className={styles['featured-place']}>Featured Places</div>
            </div>
            
        </div>
    );
}

export default Home;