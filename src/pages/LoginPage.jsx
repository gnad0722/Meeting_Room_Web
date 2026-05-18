import React, { useState,useContext } from "react";
import banner from "../assets/images/banner.jpg";
import "../assets/styles/loginPage.css";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function LoginPage() {
  const {setUserinfo}=useContext(AuthContext)
  const navigate = useNavigate();
  const [userInfo, setUser] = useState({
    email: "",
    password: "",
  });
  const [mess, setMess] = useState({
    email: "",
    password: "",
    auth: "",
  });
  const [rememberMe,setRemember]=useState(false);
  async function handleLogin(e) {
    e.preventDefault();
    const response = await authService.login(userInfo,rememberMe);
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
              value={userInfo.email}
              onChange={(e) => {
                setUser({ ...userInfo, email: e.target.value });
              }}
            />
            <span id="error-msg">{mess.email}</span>
          </div>
          <div className="login-input">
            <span className="d-flex">
              Password
              <span className="ms-auto mt-auto forgot-pass" onClick={()=>navigate("/verify")}>
                Forgot password
              </span>
            </span>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your password"
              value={userInfo.password}
              onChange={(e) => {
                setUser({ ...userInfo, password: e.target.value });
              }}
            />
            <span id="error-msg">{mess.password}</span>
            <span id="error-msg">{mess.auth}</span>
          </div>
          <div className="d-flex flex-column w-100 justify-content-between mb-2">
            <div class="form-check">
              <input
                class="form-check-input custom-check"
                type="checkbox"
                checked={rememberMe}
                onChange={(e)=>setRemember(e.target.checked)}
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
            <button type="button" class="btn btn-primary w-100" onClick={(e)=>{handleLogin(e)}}>
              Login
            </button>
          </div>
          <span className="title-signup">
            Don't have an account?
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
  
              Sign up
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
export default LoginPage;
