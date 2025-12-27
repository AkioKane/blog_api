import type React from 'react';
import { HeaderHome } from '../components/Header';
import scrollArrow from "../assets/scrollArrow.svg";
import data from "../data/home.json";
import styles from './Home.module.css';
import StarButton from '../components/StarButton';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <HeaderHome />
        
        <div className={styles.heroContainer}>
          <div className={styles.scrollContainer}>
            <img src={scrollArrow} alt="scroll" />

            <h3>{data.scroll}</h3>
          </div>

          <div className={styles.welcomeContainer}>
            <h1>{data.title}</h1>
            <span className={styles.aboutSpan}>{data.about}</span>
            <StarButton text={data.btnBlog} />
          </div>
        </div>

        <div className={styles.blackSection}>
          
        </div>
      </div>
    </>
  );
};

export default Home;