import type React from "react";
import styles from "./HomeDetails.module.css";
import { useEffect, useRef, useState } from "react";

interface HomeDetailsProps {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({ setHome }) => {
  const [isLocked, setIsLocked] = useState(true);
  const isTransitioning = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // +-100 scroll units

    if (isTransitioning.current) return;

    if (event.deltaY < 0) {
      isTransitioning.current = true;
      setHome(true);
    }
  };

  return (
    <>
      <div onWheel={handleWheel} className={styles.homeDetails}></div>
    </>
  );
};

export default HomeDetails;
