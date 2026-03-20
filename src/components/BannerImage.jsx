import React from "react";
import banner_1 from "../assets/images/banner_1.jpg";
import banner_2 from "../assets/images/banner_2.jpg";

function BannerImage() {
  return (
    <div className="heros-banner">
      <div className="banner-item"  id="banner_1">
        <img src={banner_1} alt="Banner picture"/>
      </div>
      <div className="banner-item" id="banner_2">
         <img src={banner_2} alt="Banner picture" />
      </div>
    </div>
  );
}
export default BannerImage;
