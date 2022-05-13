import React from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/header';
import NavBar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className={styles["App"]}>
      <div className={styles['hero']}>
        <NavBar />
        <Header />
      </div>
      Hello there
    </div>
  );
}

export default App;
