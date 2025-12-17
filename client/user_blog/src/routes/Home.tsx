import type React from 'react';
import { HeaderHome } from '../components/Header';
import scrollArrow from "../assets/scrollArrow.svg";
import styles from './Home.module.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <HeaderHome />
        
        <div className={styles.heroContainer}>
          <div className={styles.scrollContainer}>
            <img src={scrollArrow} alt="scroll" />

            <h3>scroll down</h3>
          </div>
        </div>

        <div className={styles.blackSection}></div>
      </div>
    </>
  );
};

export default Home;