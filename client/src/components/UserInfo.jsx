import { Link } from "react-router-dom";
import "../styles/UserInfo.css";
import { useState } from "react";

function UserInfo() {
  const [hoverElement, setHoverElement] = useState(false);

  const checkAuth = () => {
    return false;
  }

  const signContainer = () => {
    return (
      <>
        <div className="sign-container">
          <Link
            to={"/sign-in"}
          >
            <button 
              className="sign-in"
              onMouseOut={() => {
                setHoverElement(true);
              }}
              onMouseLeave={() => {
                setHoverElement(false);
              }}
              style={{
                border: hoverElement ? "2px solid var(--header-border-bg)" : "none",
                zIndex: hoverElement ? "2" : "1"
              }}
            >
              <span>Sign In</span>
            </button>
          </Link>
          <Link 
            to={"/sign-up"}
          >
            <button 
              className="sign-up"
              style={{
                border: hoverElement ? "none" : "2px solid var(--header-border-bg)",
              }}
            >
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </>
    );
  }

  const userContainer = () => {
    return (
      <>
        <div className="user-container"></div>
      </>
    );
  }

  return (
    <>
      { checkAuth() ? userContainer() : signContainer() }
    </>
  );
}

export default UserInfo;