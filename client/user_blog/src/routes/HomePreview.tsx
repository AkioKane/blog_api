import type React from 'react';
import { HeaderHome } from '../components/Header';
import StarButton from '../components/StarButton';
import scrollArrow from "../assets/scrollArrow.svg";
import data from "../data/home.json";
import styles from './HomePreview.module.css';

interface HomePreviewProps { }

const HomePreview: React.FC<HomePreviewProps> = () => {
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
          <div className={styles.userContainer}></div>

          <div className={styles.aboutContainer}></div>

          <div className={styles.postsContainer}></div>
        </div>
      </div>
    </>
  );
};

export default HomePreview;