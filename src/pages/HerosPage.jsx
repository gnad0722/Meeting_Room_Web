import React from "react";
import Header from "../components/Header";
import BannerImage from "../components/BannerImage";
import BannerContent from "../components/BannerContent";
import "../assets/styles/herospage.css"
function HerosPage(){
    return <div className="heros-page">
            <Header/>
            <div className="heros-container">
                <BannerContent/>
                <BannerImage/>
            </div>
    </div>
}
export default HerosPage;