import type React from "react";
import { useEffect, useState } from "react";
import HomePreview from "../components/HomePreview";
import HomeDetails from "../components/HomeDetails";

const Home: React.FC = () => {
  const [home, setHome] = useState(true);

  useEffect(() => {
    console.log(home);
  }, [home]);

  return (
    <>
      {home ? <HomePreview setHome={setHome} /> : <HomeDetails setHome={setHome} />}
    </>
  );
};

export default Home;
