import React from "react";
import logo from "../assets/images/logoweb.png";
import "../assets/styles/aboutus.css";
import MyTeamCard from "../components/MyTeamCard.jsx";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Header from "../components/Header.jsx";
function AboutUs() {
  return (
    <div className="about-us">
      <Header/>
      <section className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="72"
          height="auto"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">About Us</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Roomify - Book smart, Meet better</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Meet our team
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Join with us
            </button>
          </div>
        </div>
      </section>
      <section className="about-product px-4 py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-3">Meeting Room Booking System</h2>
          <p className="text-muted col-lg-8 mx-auto">
            Our Meeting Room Booking platform is designed to simplify the
            process of reserving and managing meeting spaces within
            organizations. Users can easily browse available rooms, check
            schedules in real-time, and make bookings with just a few clicks.
            The system also supports features such as recurring bookings,
            rescheduling, and room management for administrators, helping teams
            stay organized and avoid scheduling conflicts.
          </p>
        </div>
      </section>
      <section className="our-team px-4 py-3 my-5 text-center">
        <h2>Our Team</h2>
        <p>The passionate individuals behind our success</p>
        <div className="row">
          <div className="col-md-4">
            <MyTeamCard name="Nguyễn Ngọc Hải Đăng" title="Developer" />
          </div>
          <div className="col-md-4">
            <MyTeamCard
              name="Nguyễn Phạm Mạnh Dũng"
              title="Developer"
            />
          </div>
          <div className="col-md-4">
            <MyTeamCard name="Phạm Duy Quý" title="Developer" />
          </div>
        </div>
      </section>
      <section className="get-in-touch px-4 py-3 my-5 text-center bg-light">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you!</p>
        <div className="row">
          <div className="col-md-4">
            <MyTeamCard name={<FiMail />} title="roomifyservice@gmail.com" show={false} />
          </div>
          <div className="col-md-4">
            <MyTeamCard name={<FiPhone />} title="(123) 456-7890" show={false} />
          </div>
          <div className="col-md-4">
            <MyTeamCard name={<FiMapPin />} title="HCMUT" show={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
