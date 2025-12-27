import type React from "react";
import styles from "./HomeDetails.module.css";

interface HomeDetailsProps {
  setHome: React.Dispatch<React.SetStateAction<boolean>>
}

const HomeDetails: React.FC<HomeDetailsProps> = ({ setHome }) => {
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // +-100 scroll units

    if (event.deltaY < 0) {
      setHome(true)
    }

    else if (event.deltaY > 0) {
      setHome(false)
    }
  };

  return (
    <>
      <div onWheel={handleWheel} className={styles.homeDetails}></div>
    </>
  );
};

export default HomeDetails;