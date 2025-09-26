import type React from 'react';
import { HeaderHome } from '../components/Header';
import styles from './Home.module.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <HeaderHome />
        
        <div className={styles.heroContainer}></div>

        <div className={styles.blackSection}></div>
      </div>
    </>
  );
};

export default Home;