import { Link, useNavigate } from "react-router-dom";
import style from "./Register.module.css";

export default function Register() {
  const navigation = useNavigate();
  return (
    <>
      <form>
        <div className="w-100 min-vh-100 d-flex justify-content-center bg-dark">
          <div
            id="register-div"
            className={`${style.registerCard} h-75 text-center m-auto `}
          >
            <div className={`${style.registerHeader} p-2 pt-4`}>
              <h2>Sign Up</h2>
            </div>
            <div className="register-body">
              <div className="inputBox d-flex justify-content-center">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  className="inputArea"
                />
                <span className="span-box">User Name</span>
              </div>

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
                <span className="span-box text-center">Password</span>
              </div>

              <div className="inputBox d-flex justify-content-center">
                <input
                  id="userRePassword"
                  name="rePassword"
                  type="password"
                  className="inputArea"
                />
                <span className="span-box">Repassword</span>
              </div>

              <button type="submit" className="form-btn">
                SIGN UP
              </button>
              <div className="register-footer d-block m-5">
                <div className="text-center">
                  <h4 className="fs-6 text-white">Already have an account ?</h4>
                  <h6
                    className="m-color cursor"
                    onClick={() => navigation("/Login")}
                  >
                    LOGIN
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
