import type React from "react";
import styles from "./HomeDetails.module.css";
import { useEffect, useState } from "react";

interface HomeDetailsProps {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({ setHome }) => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLocked(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // +-100 scroll units

    if (isLocked) return;

    if (event.deltaY < 0) {
      setTimeout(() => {
        setHome(true);
      }, 500);
    } else if (event.deltaY > 0) {
      setTimeout(() => {
        setHome(false);
      }, 500);
    }
  };

  return (
    <>
      <div onWheel={handleWheel} className={styles.homeDetails}></div>
    </>
  );
};

export default HomeDetails;
