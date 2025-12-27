import type React from "react";
import { HeaderHome } from "./Header";
import { Link } from "react-router";
import StarButton from "./StarButton";
import scrollArrow from "../assets/scrollArrow.svg";
import avatar from "../assets/avatar.jfif";
import data from "../data/home.json";
import styles from "./HomePreview.module.css";

interface HomePreviewProps {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePreview: React.FC<HomePreviewProps> = ({ setHome }) => {
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // +-100 scroll units

    if (event.deltaY < 0) {
      setHome(true);
    } else if (event.deltaY > 0) {
      setHome(false);
    }
  };

  return (
    <>
      <div onWheel={handleWheel} className={styles.homeContainer}>
        <HeaderHome />

        <div className={styles.heroContainer}>
          <div className={styles.scrollContainer}>
            <img src={scrollArrow} alt="scroll" />

            <h3>{data.scroll}</h3>
          </div>

          <div className={styles.welcomeContainer}>
            <h1>{data.title}</h1>
            <span className={styles.aboutSpan}>{data.about}</span>

            <Link to={"#"}>
              <StarButton text={data.btnBlog} />
            </Link>
          </div>
        </div>

        <div className={styles.blackSection}>
          <div className={styles.userContainer}>
            <img src={avatar} alt="avatar" />

            <h2>{data.user}</h2>
          </div>

          <div className={styles.line}></div>

          <span className={styles.aboutMe}>{data.aboutMe}</span>

          <div className={styles.postsContainer}>
            <h2>{data.postsHead + ":"}</h2>

            <div className={styles.postsItems}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePreview;
