import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";

export default function Login() {
  const navigation = useNavigate();
  return (
    <>
      <form>
        <div className="w-100 min-vh-100 d-flex justify-content-center bg-dark">
          <div
            id="login-div"
            className={`${style.login_card} bg-white h-75 m-auto p-2 pt-4 `}
          >
            <div className={`${style.loginheader}`}>
              <h2>Login</h2>
            </div>
            <div className="login-body">
              <div className="inputBox d-flex justify-content-center">
                <input
                  id="userEmail"
                  name="email"
                  type="text"
                  className="inputArea"
                />
                <span className="span-box">Email</span>
              </div>

              <div className="inputBox d-flex justify-content-center">
                <input
                  id="userPassword"
                  name="password"
                  type="password"
                  className="inputArea"
                />
                <span className="span-box">password</span>
              </div>

              <button type="submit" className="form-btn">
                LOGIN
              </button>
              <div className="login-footer d-block m-5">
                <div className="text-center">
                  <h4 className="fs-6">Don't have an account ?</h4>
                  <h6
                    className="m-color cursor"
                    onClick={() => navigation("/Register")}
                  >
                    SIGN UP
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
