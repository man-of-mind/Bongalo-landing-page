import React from "react";
import Header from "../Header/header";
import NavBar from "../Navbar/Navbar";
import styles from './homepage.module.scss';

const Home = () => {
    return (
        <div className={styles['homepage']}>
            <div className={styles['hero-section']}>
                <NavBar />
                <Header />
                <div className={styles['floating-container']}>
                    <div className={styles['feature-container']}>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;