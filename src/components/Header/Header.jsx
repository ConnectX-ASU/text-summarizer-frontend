import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function CustomNavbar({ theme, onThemeChange }) {
  const navigation = useNavigate();
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme ? "dark bg-dark" : "light bg-light"
      }`}
    >
      <div className="container">
        <span className={`navbar-brand ${theme ? "text-white" : "text-dark"}`}>
          ConnectX AI Summarizer
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="icon" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                className={`nav-link p-lg-3 n-l ${
                  theme ? "text-white" : "text-dark"
                }`}
                onClick={() => navigation("/")}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link p-lg-3 ${
                  theme ? "text-white" : "text-dark"
                }`}
                onClick={() => navigation("/login")}
              >
                Login
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link p-lg-3 ${
                  theme ? "text-white" : "text-dark"
                }`}
                onClick={() => navigation("/profile")}
              >
                Profile
              </span>
            </li>
            <li className="nav-item">
              <span>
                <FontAwesomeIcon
                  className="icon"
                  onClick={onThemeChange}
                  icon={theme ? faSun : faMoon}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
