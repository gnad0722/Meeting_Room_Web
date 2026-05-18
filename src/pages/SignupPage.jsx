import React, { useState, useContext } from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { AuthContext } from "../context/AuthContext";
function SignupPage() {
  const {setUserinfo}=useContext(AuthContext)
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [userInfo, setUser] = useState({
    username: "",
    email: "",
    phone: null,
    password: "",
    role: "customer",
  });
  const [mess, setMess] = useState({
    username: "",
    email: "",
    password: "",
    policy: "",
  });
  async function handleSignup(e) {
    e.preventDefault();
    if (!checked) {
      setMess({
        ...mess,
        policy: "You must agree to the Terms and Privacy Policy to continue.",
      });
    } else {
      const response = await authService.signup(userInfo);
      if (response.success) {
        setUserinfo(response.data);
        navigate("/home");
      } else {
        const errors = {};
        response.listErr.forEach((err) => {
          errors[err.path] = err.msg;
        });
        setMess(errors);
      }
    }
  }
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
              value={userInfo.username}
              onChange={(e) => setUser({ ...userInfo, username: e.target.value })}
            />
            <span id="error-msg">{mess.username}</span>
          </div>

          <div className="login-input">
            <span>Email address</span>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={userInfo.email}
              onChange={(e) => setUser({ ...userInfo, email: e.target.value })}
            />
            <span id="error-msg">{mess.email}</span>
          </div>
          <div className="login-input">
            <span>Role</span>
            <select
              class="form-select"
              aria-label="Default select example"
              value={userInfo.role}
              onChange={(e) => {
                setUser({ ...userInfo, role: e.target.value });
              }}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="login-input">
            <span className="d-flex">Phone</span>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your phone (Optional)"
              value={userInfo.phone}
              onChange={(e) => setUser({ ...userInfo, phone: e.target.value })}
            />
          </div>
          <div className="login-input">
            <span className="d-flex">Password</span>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your password"
              value={userInfo.password}
              onChange={(e) =>
                setUser({ ...userInfo, password: e.target.value })
              }
            />
            <span id="error-msg">{mess.password}</span>
          </div>
          <div className="d-flex flex-column w-100 justify-content-between mb-2">
            <div class="form-check">
              <input
                class="form-check-input custom-check"
                type="checkbox"
                checked={checked}
                id="checkDefault"
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label
                id="titleRecurrence"
                class="form-check-label"
                for="checkRecurrence"
              >
                I agree to the terms & policy
              </label>
            </div>
            <span id="error-msg">{mess.policy}</span>
          </div>
          <div className="login-btn">
            <button
              type="button"
              class="btn btn-primary w-100"
              onClick={(e) => handleSignup(e)}
            >
              Sign up
            </button>
          </div>
          <span className="title-signup">
            Have an account?
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
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
export default SignupPage;
