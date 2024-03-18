import "./profile.css";
import { React, useState } from "react";

import CustomNavbar from "../Header/Header";

export default function Profile({ theme, onThemeChange }) {
  const [name, setName] = useState("Mahmoud Ahmed");
  const words = name.split(" ");
  const [email, setEmail] = useState(`${name}@gmail.com`);
  const [phone, setPhone] = useState("01010101010");
  const [edit, setEdit] = useState(false);
  return (
    <>
      <CustomNavbar onThemeChange = {onThemeChange} theme={theme}></CustomNavbar>
      <div
        className={`profile bg-dark w-100 min-vh-100 ${
          theme ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className={`card p-lg-2 ${theme ? "text-white" : "text-dark"}`}
              >
                <div className="card-body">
                  <h2 className="card-title">Hello {words[0]}</h2>
                  <div className="mt-4 mb-3">
                    <p className="card-text">
                        Welcome to your profile page! Here, you can view your
                        previous summarizations and customize your profile
                        settings
                    </p>
                  </div>
                  <button className="btn btn-primary mt-4" onClick={() => setEdit(!edit)}>Edit Profile</button>
                  <div className={`col-md-6 edit ${edit ? "" : "d-none"}`}>
                    <input placeholder="Name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Phone"></input>
                    <button className="btn btn-primary mt-4" onClick={() => setEdit(!edit)}>Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className={`col-md-5 profile-card ${theme ? "text-white" : "text-dark"}`}>
              <div className="avatar">
                {name.charAt(0)}
              </div>
              <div className="profile-info">
                <h3 className="name">{name}</h3>
                <div className="row mx-auto mt-5">
                  <div className="col-md-5">
                    <div className="row info">Email</div>
                    <div className="row sub-info mt-3">{email}</div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 ">
                    <div className="row info">Phone</div>
                    <div className="row sub-info mt-3">{phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
