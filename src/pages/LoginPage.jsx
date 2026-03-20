import React from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate=useNavigate();
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-title">
            <span className="main">Welcome back!</span>
            <span>Enter your Credentials to access your account</span>
          </div>
          <div className="login-input">
            <span>Email address</span>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="login-input">
            <span className="d-flex">
              Password
              <span className="ms-auto mt-auto forgot-pass">
                {" "}
                Forgot password
              </span>
            </span>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex flex-column w-100 justify-content-between mb-2">
            <div class="form-check">
              <input
                class="form-check-input custom-check"
                type="checkbox"
                value=""
                id="checkDefault"
              />
              <label
                id="titleRecurrence"
                class="form-check-label"
                for="checkRecurrence"
              >
                Remember me for 30 days
              </label>
            </div>
          </div>
          <div className="login-btn">
            <button type="button" class="btn btn-primary w-100">
              Login
            </button>
          </div>
          <span className="title-signup">
            Don't have an account?<span onClick={()=>{navigate("/signup")}}> Sign up</span>
          </span>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="Banner for web" />
      </div>
    </div>
  );
}
export default LoginPage;
