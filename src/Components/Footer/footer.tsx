import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/images/bangolo_logo.svg";
import email from "../../assets/images/email.svg";
import youtube from "../../assets/images/youtube.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import pay from "../../assets/images/pay.svg";
import visa from "../../assets/images/visa.svg";


const Footer = () => {
    return(
        <footer>
            <div className={styles['footer-logo-section']}>
                <img src={logo} alt="bangolo logo"></img>
                <span>Bongalo</span>
                <div className={styles['newsletter']}>
                    <div className={styles['text']}>Enter your email to subscribe to our newsletter</div>
                    <div className={styles['input-button']}>
                        <div className={styles['input-container']}>
                            <img src={email} alt="email logo"></img>
                            <input
                                type="text"
                                placeholder="Enter your email address"></input>
                        </div>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={styles['footer-table']}>
                <table>
                    <tr>
                        <th>ABOUT BONGALO</th>
                        <th>LINKS</th>
                        <th>CONTACT</th>
                    </tr>
                    <tr>
                        <td>About us</td>
                        <td>Blog</td>
                        <td>4th Floor, Fairview Building</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>Privacy Policy</td>
                        <td>KG 622 St, Kigali, Rwanda</td>
                    </tr>
                    <tr>
                        <td>Career</td>
                        <td>Terms &#38; Conditions</td>
                    </tr>
                    <tr>
                        <td>Press Release</td>
                        <td></td>
                        <td>6th Floor CamCull Building</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Comm Ave, Bamenda, Cameroon</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>info@bongalo.co</td>
                    </tr>
                </table>
                <div className={styles['join-us']}>
                    <div>JOIN US</div>
                    <div className={styles['social-media-icons']}>
                        <img src={youtube} alt="youtube icon"></img>
                        <img src={twitter} alt="twitter icon"></img>
                        <img src={facebook} alt="facebbok icon"></img>
                        <img src={instagram} alt="instagram icon" className={styles['ig']}></img>
                    </div>
                </div>
            </div>
            <div className={styles['copyright-section']}>
                <span>Copyright &#169; 2021 Bongal.co. All rights reserved</span>
                <div className={styles['payment-option']}>
                    <span>PAYMENT METHODS</span>
                    <img src={pay} alt="visa logo"></img>
                    <img src={visa} alt="visa"></img>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
