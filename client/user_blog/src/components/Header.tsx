import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import styles from "./Header.module.css";

interface HeaderHomeProps {}

const Header: React.FC = () => {
  return (<></>);
};

const HeaderHome: React.FC<HeaderHomeProps> = () => {
  const [activeElement, setActiveElement] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveElement("home");
        break;
      case "/about":
        setActiveElement("about");
        break;
      case "/blog":
        setActiveElement("blog");
        break;
      default:
        setActiveElement("home");
    }
  }, []);

  return (
    <>
      <div className={styles.headerHomeContainer}>
        <div className={styles.logo}>
          <h1>Blog API</h1>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.elementNav}>
            <Link to={"/"}>
              Home
            </Link>
            <div
              className={styles.lineLink}
              style={{
                display: activeElement === "home" ? "block" : "none",
              }}
            ></div>
          </div>

          <div className={styles.elementNav}>
            <Link to={"/about"}>
              About
            </Link>
            <div
              className={styles.lineLink}
              style={{
                display: activeElement === "about" ? "auto" : "none",
              }}
            ></div>
          </div>

          <div className={styles.elementNav}>
            <Link to={"/blog"}>
              Blog
            </Link>
            <div
              className={styles.lineLink}
              style={{
                display: activeElement === "blog" ? "auto" : "none",
              }}
            ></div>
          </div>
        </nav>

        <div className={styles.loginContainer}>
          <Link className={styles.docsLink} to={"/docs"}>
            Docs
            <img src={arrow} alt="arrow" />
          </Link>
          <button className={styles.loginBtn}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export { HeaderHome };
export default Header;
