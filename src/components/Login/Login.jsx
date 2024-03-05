import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";

export default function Login({ theme }) {
  const navigation = useNavigate();
  return (
    <>
      <form>


        <div className={`w-100 min-vh-100 d-flex justify-content-center bg-dark ${theme ? "dark text-white" : "light text-dark"}`}>

          <div
            id="login-div"
            className={`${style.login_card}  h-75 m-auto p-2 pt-4 `}
          >
            <div className={`${style.loginheader} ${theme ? "text-white" : "text-dark"}`}>
              <h2>Login</h2>
            </div>
            <div class="row">
              <div class="col-xs-4 col-xs-offset-4">
                <div class="floating-label-group">
                  <input type="email" id="email" class="form-controls inputArea" autocomplete="off" autofocus required />
                  <label class="floating-label">Email</label>
                </div>

                <div class="floating-label-group">
                  <input type="password" id="password" class="form-controls inputArea" autocomplete="off" required />
                  <label class="floating-label">Password</label>
                </div>
                <button type="submit" className="form-btn">
                  LOGIN
                </button>

                <div className="login-footer d-block m-5">
                  <div className="text-center">
                    <h4 className={`fs-6 ${theme ? "text-white" : "text-dark"}`}>Don't have an account ?</h4>
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
        </div>
      </form>
    </>
  );
}
