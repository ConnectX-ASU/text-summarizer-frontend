import style from "./Register.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const navigation = useNavigate();
  let [errorMsg, setErrormsg] = useState("");
  let [isLoading, setisLoading] = useState(false);
  async function register() {
    setErrormsg("");
    setisLoading(true);
    try {
      let { data } = await axios.post(
        // "http://localhost:3000/signUp",
        formik.values
      );

      if (data.message === "success") {
        setisLoading(true);
        navigation("/Login");
      }
    } catch (errorMsg) {
      setErrormsg(errorMsg.response.data.message);
      setisLoading(false);
    }
  }

  let validate = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters or more")
      .required("User Name Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    password: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one special character, and one number with a minimum length of 8 characters"
      ),
    rePassword: Yup.string()
      .required("RePassword is required")
      .oneOf([Yup.ref("password")], "passorwd and repasswd must match"),
  });

  let formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: register,
    validationSchema: validate,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
                    <input
                      type="text"
                      id="userName"
                      class="form-controls inputArea"
                      autoComplete="off"
                      autoFocus
                      value={formik.values.userName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      required
                    />
                    <label class="floating-label">User Name</label>

                    <label class="floating-label">User Name</label>
                  </div>
                  {formik.errors.userName && formik.touched.userName ? (
                    <div className="alert alert-danger">
                      {formik.errors.userName}
                    </div>
                  ) : null}

                  <div class="floating-label-group">
                    <input
                      type="text"
                      id="email"
                      class="form-controls inputArea"
                      autocomplete="off"
                      autofocus
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      required
                    />
                    <label class="floating-label">Email</label>
                  </div>
                  {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger">
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <div class="floating-label-group">
                    <input
                      type="password"
                      id="password"
                      class="form-controls inputArea"
                      autoComplete="off"
                      required
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <label class="floating-label">Password</label>
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger">
                      {formik.errors.password}
                    </div>
                  ) : null}

                  <div class="floating-label-group">
                    <input
                      type="password"
                      id="rePassword"
                      class="form-controls inputArea"
                      autoComplete="off"
                      required
                      value={formik.values.rePassword}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <label class="floating-label">RePassword</label>
                  </div>
                  {formik.errors.rePassword && formik.touched.rePassword ? (
                    <div className="alert alert-danger">
                      {formik.errors.rePassword}
                    </div>
                  ) : null}
                </div>
              </div>
              {!isLoading ? (
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="form-btn"
                  type="submit"
                >
                  SIGN UP
                </button>
              ) : (
                <button disabled className="form-btn">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </button>
              )}
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
