import React from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const navigate=useNavigate();
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-title">
            <span className="main">Get Started Now</span>
          </div>
          <div className="login-input">
            <span>Name</span>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
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
            <span className="d-flex">Password</span>
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
                I agree to the terms & policy
              </label>
            </div>
          </div>
          <div className="login-btn">
            <button type="button" class="btn btn-primary w-100">
              Sign up
            </button>
          </div>
          <span className="title-signup">
            Have an account?<span onClick={()=>{navigate("/login")}}> Sign in</span>
          </span>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="Banner for web" />
      </div>
    </div>
  );
}
export default SignupPage;
