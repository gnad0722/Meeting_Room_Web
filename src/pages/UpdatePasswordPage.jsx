import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import banner from "../assets/images/banner.jpg";
import authService from "../services/auth.service";
function UpdatePasswordPage() {
  const [newPassword, setPassword] = useState("");
  const[verifyParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [mess, setMess] = useState({
    newPassword: "",
  });
  async function handleUpdatePassword(e) {
    e.preventDefault();
    const response = await authService.resetPassword(email, newPassword);
    if (response.success) {
      navigate("/login");
    } else {
      const errors = {};
      response.listErr.forEach((err) => {
        errors[err.path] = err.msg;
      });
      setMess(errors);
    }
  }
  async function getEmailVerify(rawToken) {
    const response = await authService.getEmailByToken(rawToken);
    if (response.success) {
      setEmail(response.email);
    }
  }
  useEffect(() => {
    const rawToken = verifyParams.get("token");
    getEmailVerify(rawToken);
    setLoading(false);
  }, []);
  if (loading) return <div>Loading....</div>;
  return (
    <div className="login-page">
      <div className="login-container">
        {email !== "" ? (
          <div className="login-form">
            <div className="login-title">
              <span className="main">Create New Password</span>
              <span>
                Enter your new password below to reset your account password.
              </span>
            </div>
            <div className="login-input">
              <span>New Password</span>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span id="error-msg">{mess.newPassword}</span>
            </div>
            <div className="login-btn">
              <button
                type="button"
                class="btn btn-primary w-100"
                onClick={(e) => {
                  handleUpdatePassword(e);
                }}
              >
                Reset Password
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
        ) : (
          <div className="login-form">
            <div className="login-title">
              <span className="main">Invalid or Expired Link</span>
            </div>
            <span className="verify-noti">
              This password reset link is invalid or has expired. Please request
              a new one.
            </span>
          </div>
        )}
      </div>
      <div className="banner">
        <img src={banner} alt="Banner for web" />
      </div>
    </div>
  );
}
export default UpdatePasswordPage;
