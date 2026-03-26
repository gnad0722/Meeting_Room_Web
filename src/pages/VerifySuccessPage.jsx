import React from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
function VerifySuccessPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-title">
            <span className="main">Verification Email Sent!</span>
          </div>
          <span className="verify-noti">Please check your email for a link to reset your password.</span>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="Banner for web" />
      </div>
    </div>
  );
}
export default VerifySuccessPage;
