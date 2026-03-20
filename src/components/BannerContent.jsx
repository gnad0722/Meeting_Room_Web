import React from "react";
function BannerContent() {
  return (
    <div className="heros-content">
      <span id="slogan">We Make Meetings Simple</span>
      <span id="bigTitle">MEETING ROOM</span>
      <span id="bigTitle"> BOOKING</span>
      <span id="bannerTitle">
        Book professional meeting rooms anytime, anywhere. Easy scheduling,
        real-time availability, and seamless experience.
      </span>
      <div>
        <button
          type="button"
          class="btn btn-success"
          style={{ backgroundColor: "#17af87" }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
export default BannerContent;
