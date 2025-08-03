import icon from "../assets/blog.svg";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={icon} alt="icon" />
          <h3>Blog API</h3>
        </div>

        <div className="navigation"></div>

        <div className="user-container"></div>
      </header>
    </>
  );
}

export default Header;