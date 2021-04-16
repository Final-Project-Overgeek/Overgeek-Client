import React from "react";
import LogoOverGeek from "../assets/images/OVERGEEK_LOGO_WHITE.svg";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{
        backgroundImage: "transparent",
      }}
    >
      <div className="container">
        <p className="navbar-brand">
          <Link to="/">
            <img
              src={LogoOverGeek}
              alt="Logo OverGeek"
              className="mt-4"
              height="125"
            />
          </Link>
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            {page === "login" ? (
              <li>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link signup-loginpage"
                    href="/signup"
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Sign up
                  </a>
                </Link>
              </li>
            ) : page === "signup" ? (
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link login-signuppage"
                    href="/login"
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Log in
                  </a>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link"
                      href="false"
                      style={{
                        color: "#fff",
                        fontWeight: "600",
                        textDecoration: "none",
                        padding: "10px 30px",
                      }}
                    >
                      Log in
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link button-signup"
                      href="/signup"
                      style={{ color: "#fff", padding: "10px 20px" }}
                    >
                      Sign up
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
