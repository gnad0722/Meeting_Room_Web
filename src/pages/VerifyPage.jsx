import React, { useState } from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function VerifyPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [mess, setMess] = useState({
    email: "",
  });
  async function handleVerify(e) {
    e.preventDefault();
    const response = await authService.sendVerifyEmail(email);
    if (response.success) {
      navigate("/verify/success");
    } else {
      const errors = {};
      response.listErr.forEach((err) => {
        errors[err.path] = err.msg;
      });
      setMess(errors);
    }
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-title">
            <span className="main">Forgot Password!</span>
            <span>
              Enter your registered email to receive a password reset link
            </span>
          </div>
          <div className="login-input">
            <span>Email address</span>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span id="error-msg">{mess.email}</span>
          </div>
          <div className="login-btn">
            <button
              type="button"
              class="btn btn-primary w-100"
              onClick={(e) => {
                handleVerify(e);
              }}
            >
              Send Verify Mail
            </button>
          </div>
          <span className="title-signup">
            Remember your password?
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              Back to login
            </span>
          </span>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="Banner for web" />
      </div>
    </div>
  );
}
export default VerifyPage;
