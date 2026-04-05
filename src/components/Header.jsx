import React, { useState, useContext, useRef, useEffect, useCallback } from "react";
import logo from "../assets/images/logoweb.png";
import { MdLogout } from "react-icons/md";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../assets/styles/header.css";
import utils from "../utils/utils";
import authService from "../services/auth.service";
import NotificationPopup from "./NotificationPopup";
import notiService from "../services/noti.service";
import { socket } from "../services/socket.js";
function Header(props) {
  const { setUserinfo, user } = useContext(AuthContext);
  const location = useLocation();
  const currPage = utils.getPageName(location.pathname);
  const navigate = useNavigate();
  const authed = user ? true : false;
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const wrapperRef = useRef();
  const [unreadCount, setUnreadCount] = useState(0);
  const fetchUnreadCount = useCallback(async () => {
    try {
      const notifications = await notiService.getNotifications(1);
      const count = utils.countUnread(notifications);
      setUnreadCount(count);
    } catch (err) {
      console.error(err);
    }
  }, []);
  useEffect(() => {
    fetchUnreadCount();
    socket.on("newNotification", fetchUnreadCount);
    return () => socket.off("newNotification", fetchUnreadCount);
  }, []);

  async function handleLogout() {
    try {
      await authService.logout();
      setUserinfo(null);
      navigate("/");
    } catch (Err) {
      console.error(Err);
    }
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
          <span>Roomify</span>
        </div>
        {authed ? (
          <div className="header-feature">
            <div className="pages">
              <div
                className={`page-item ${currPage === "Dashboard" ? "choosed" : ""}`}
                onClick={() => {
                  navigate("/home");
                }}
              >
                Dashboard
              </div>
              <div
                className={`page-item ${currPage === "Meeting Room" ? "choosed" : ""}`}
                onClick={() => {
                  if (user.role === "customer") navigate("/room");
                  else navigate("/admin/room");
                }}
              >
                Meeting Room
              </div>
            </div>
            <div ref={wrapperRef} className="notification">
              <FaBell
                style={{ cursor: "pointer" }}
                onClick={() => setOpen((prev) => !prev)}
              />
              {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
              <NotificationPopup
                open={open}
                onClose={() => setOpen(false)}
                wrapperRef={wrapperRef}
                setUnreadCount={setUnreadCount}
              />
            </div>
            <div className="profile">
              <FaUserCircle className="avatar" />

              <span>{user.username}</span>
              <MdLogout style={{ cursor: "pointer" }} onClick={handleLogout} />
            </div>
          </div>
        ) : (
          <div className="header-feature">
            <div className="pages">
              <div
                className={`page-item ${currPage === "About us" ? "choosed" : ""}`}
                onClick={() => {
                  navigate("/about-us");
                }}
              >
                About us
              </div>
              <div
                className={`page-item`}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </div>
              <div
                className={`page-item`}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
