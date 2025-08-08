import { Link } from "react-router-dom";
import icon from "../assets/blog.svg";
import "../styles/Header.css";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={icon} alt="icon" />
          <h3>Blog API</h3>
        </div>

        <div className="navigation">
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>Posts</Link>
        </div>

        <div className="user-container">
          <UserInfo />
        </div>
      </header>
    </>
  );
}

export default Header;