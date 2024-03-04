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
              <div class="row">
                <div class="col-xs-4 col-xs-offset-4">
                  <div class="floating-label-group">
                    <input type="text" id="User Name" class="form-controls inputArea" autocomplete="off" autofocus required />
                    <label class="floating-label">User Name</label>
                  </div>

                  <div class="floating-label-group">
                    <input type="text" id="email" class="form-controls inputArea" autocomplete="off" autofocus required />
                    <label class="floating-label">Email</label>
                  </div>

                  <div class="floating-label-group">
                    <input type="password" id="password" class="form-controls inputArea" autocomplete="off" required />
                    <label class="floating-label">Password</label>
                  </div>

                  <div class="floating-label-group">
                    <input type="password" id="password" class="form-controls inputArea" autocomplete="off" required />
                    <label class="floating-label">RePassword</label>
                  </div>

                </div>
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
      </form >
    </>
  );
}
