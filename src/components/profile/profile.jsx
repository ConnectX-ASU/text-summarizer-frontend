import style from "./profile.module.css";
import React from "react";

import CustomNavbar from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

export default function Profile({ theme }) {
  const navigation = useNavigate();
  return (
    <>
      <CustomNavbar theme={theme}></CustomNavbar>
      <div
        className={`profile bg-dark w-100 min-vh-100 ${
          theme ? "dark text-white" : "light text-dark"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">
                    <span className="text-muted">Name:</span> John Doe
                  </p>
                  <p className="card-text">
                    <span className="text-muted">Email:</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
