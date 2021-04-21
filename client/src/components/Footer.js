import React from "react";
import { Link, useHistory } from "react-router-dom";
import LogoOverGeek from "../assets/images/OVERGEEK_LOGO_WHITE.svg";

const Footer = () => {
  const history = useHistory();

  const toGame = (event, title) => {
    event.preventDefault();
    history.push(`/game/${title}`);
  };

  return (
    <footer className="text-white pt-5 pb-4">
      <hr></hr>
      <div className="container-fluid text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <Link to="/">
              <img
                src={LogoOverGeek}
                alt="Logo OverGeek"
                height="125"
                className="mt-5"
              />
            </Link>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#f15a24", fontSize: "18px" }}
            >
              Games
            </h5>
            <p>
              <a
                href="/games"
                className="text-white"
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  toGame(event, "League of Legends: Wild Rift");
                }}
              >
                League of Legends: Wild Rift
              </a>
            </p>
            <p>
              <a
                href="/games"
                className="text-white"
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  toGame(event, "PlayerUnknown's Battlegrounds Mobile");
                }}
              >
                PlayerUnknown's Battlegrounds Mobile
              </a>
            </p>
            <p>
              <a
                href="/games"
                className="text-white"
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  toGame(event, "Free Fire Battlegrounds");
                }}
              >
                Free Fire Battlegrounds
              </a>
            </p>
            <p>
              <a
                href="/games"
                className="text-white"
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  toGame(event, "Mobile Legends");
                }}
              >
                Mobile Legends
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#f15a24", fontSize: "18px" }}
            >
              Resources
            </h5>
            <p>
              <p className="text-white" style={{ textDecoration: "none" }}>
                Privacy Policy
              </p>
              <p className="text-white" style={{ textDecoration: "none" }}>
                Terms of Use
              </p>
              <p className="text-white" style={{ textDecoration: "none" }}>
                Frequently Asked Questions
              </p>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#f15a24", fontSize: "18px" }}
            >
              Contact
            </h5>
            <p>
              <i className="bi bi-house-door-fill mr-2"></i>Jakarta, Indonesia
            </p>
            <p>
              <i className="bi bi-envelope-fill mr-2"></i>overgeek@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p>Copyright © 2021 Overgeek. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
