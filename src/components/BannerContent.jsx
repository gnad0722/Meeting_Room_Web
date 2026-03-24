import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function BannerContent() {
  const navigate=useNavigate();
  const {user,loading}=useContext(AuthContext);
  function handleRedirect(){
    if (user){
      navigate("/home");
    }
    else navigate("/login");
  }
  if (loading) return <div>Loading...</div>
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
          onClick={handleRedirect}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
export default BannerContent;
