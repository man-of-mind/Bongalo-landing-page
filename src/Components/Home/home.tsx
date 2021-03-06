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
import place1 from "../../assets/images/place1.svg";
import place2 from "../../assets/images/place2.svg";
import place3 from "../../assets/images/place3.svg";
import place4 from "../../assets/images/place4.svg";
import kigaliCity from "../../assets/images/kigaliCity.svg";
import mountain from "../../assets/images/mountain.svg";
import paradise from "../../assets/images/paradise.svg";
import nirvana from "../../assets/images/nirvana.svg";
import availability from "../../assets/images/availability.svg";
import client from "../../assets/images/client.svg";
import support from "../../assets/images/support.svg";
import googleCloud from "../../assets/images/googleCloud.svg";
import digitalOcean from "../../assets/images/digitalOcean.svg";
import sendGrid from "../../assets/images/sendGrid.svg";
import nkap from "../../assets/images/nkap.svg";
import Footer from "../Footer/footer";
import useWindowDimensions from "../hook";
import { Carousel } from "../Carousel/carousel";
import { Carousel2 } from "../Carousel/carousel2";


const Home = () => {
    const data = [ place1, place2, place3, place4 ];
    const amazingData = [
        {
            img: kigaliCity,
            text: "Kigali Genocie Memorial"
        },
        {
            img: mountain,
            text: "Mountain View"
        },
        {
            img: paradise,
            text: "Anastasia Paradise"
        },
        {
            img: nirvana,
            text: "Nirvana Heights"
        }
    ]

    const { width } = useWindowDimensions();
    let cardHeight = "0";
    let top = "0";
    width <= 768 ? cardHeight = "145px" : (width >= 800 && width <= 1100) ? cardHeight = "312px" : cardHeight = "348px";
   
    if (width <= 768) {
        if (width >= 592 && width < 768) {
            top = "540px";
        } 
        else if (width >= 470 && width < 592) {
            top = "620px";
        } else if (width >= 444 && width < 470) {
            top = "700px";
        }
        else if (width >= 390 && width < 444) {
            top = "780px"
        }
        else top = "850px"
    }
    else {
        top = "746px";
    }

    return (
        <div className={styles['homepage']}>
            <div className={styles['hero-section']}>
                <NavBar />
                <Header />
                <div className={styles['floating-container']} style={{top: top}}>
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
                                <option value="week 10">Wed, Oct 1 - Tue, Dec 10</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>
                        <div className={styles['feature']}>
                            <div className={styles['img-container']}>
                                <img src={guest} alt="guest icon"></img>
                            </div>
                            <span>Guest</span>
                            <select name="places" id="places">
                                <option value="5">5 Guests</option>
                                <option value="10">10 Guests</option>
                            </select>
                        </div>
                        <div className={styles['search']}>Search</div>
                    </div>
                </div>
                <div className={styles['featured-cities']}>Featured Cities</div>
                <div className={styles['featured-cities-images']}>
                    <div className={styles['first-grid-items']}>
                        <div className={styles['flex-items-desktop']}>
                            <CityCard bgImage={kigali} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)' width="100%" height={cardHeight}>
                                <div className={styles['detail']}>
                                    <p className={styles['city-name']}>Kigali</p>
                                    <span>25 properties</span>
                                </div>
                            </CityCard>
                            <CityCard bgImage={yaonde} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)' width="100%" height={cardHeight}>
                               <div className={styles['detail']}>
                                <p className={styles['city-name']}>Yaounde</p>
                                <span>15 properties</span>
                               </div>
                            </CityCard>
                        </div>
                    </div>
                    <div className={styles['second-grid-items']}>
                        <div className={styles['desktop-card-city']}>
                            <CityCard bgImage={rubavu} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)' width="100%" height={cardHeight}>
                                <div className={styles['detail']}>
                                    <p className={styles['city-name']}>Rubavu</p>
                                    <span>32 properties</span>
                                </div>
                            </CityCard>
                            <CityCard bgImage={duola} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)' width="100%" height={cardHeight}>
                                <div className={styles['detail']}>
                                    <p className={styles['city-name']}>Duola</p>
                                    <span>16 properties</span>
                                </div>
                            </CityCard>
                            <CityCard bgImage={butare} startGradient='rgba(18, 23, 30, 0.654531)' endGradient='rgba(62, 148, 254, 0.22)' width="100%" height={cardHeight}>
                                <div className={styles['detail']}>
                                    <p className={styles['city-name']}>Butare</p>
                                    <span>32 properties</span>
                                </div>
                            </CityCard>
                        </div>
                    </div>
                </div>
                <div className={styles['featured-place']}>Featured Places</div>
                <Carousel sliders={data} />
                <div className={styles['featured-place']}>Some Amazing Experiences</div>
                <Carousel2 sliders={amazingData}/>
                <div className={styles['availability']}>
                    <div className={styles['item']}>
                        <img src={availability} alt="availabilty icon"></img>
                        <span>Availability</span>
                        <p>We know how hard it can be finding a perfect home to rent, 
                            especially when moving to a new country; so we are available 24/7 
                            for your inquiries about the best places to stay. 
                            You???ll find the best places to stay on our platform without stress.</p>
                    </div>
                    <div className={styles['item']}>
                        <img src={client} alt="client icon"></img>
                        <span>Client Satisfaction</span>
                        <p>Whether you are on a budget or travelling for a; conference, seminar, 
                            vacation, we got you covered. Plus, you can pay easily with your mobile 
                            wallet from any country in Africa in addition to the other payment methods 
                            available on our system.
                        </p>
                    </div>
                    <div className={styles['item']}>
                        <img src={support} alt="support icon"></img>
                        <span>Support</span>
                        <p>We???re available to support you as you book and set out on your trip 
                            across the continent. Our experienced support team ensures your experience 
                            stays awesome all the way on your trip and even beyond. 
                            Count on us for our 24/7 support service.
                        </p>
                    </div>
                </div>
                <div className={styles["powered-by"]}>Powered By</div>
                <div className={styles['wrap']}>
                    <div className={styles['partners']}>
                        <img src={digitalOcean} alt="digital ocean logo"></img>
                        <img src={sendGrid} alt="sendGrip logo"></img>
                        <img src={googleCloud} alt="google cloud logo"></img>
                        <img src={nkap} alt="nkap logo"></img>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}


export default Home;