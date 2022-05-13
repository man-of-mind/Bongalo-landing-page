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
            </div>
            <div>what is going on here</div>
        </div>
    );
}

export default Home;