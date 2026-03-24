import React,{useContext} from "react";
import Header from "../components/Header";
import BannerImage from "../components/BannerImage";
import BannerContent from "../components/BannerContent";
import "../assets/styles/herospage.css"
import { AuthContext } from "../context/AuthContext";
function HerosPage(){
    const {user,loading}=useContext(AuthContext);
    return <div className="heros-page">
            <Header user={user}/>
            <div className="heros-container">
                <BannerContent/>
                <BannerImage/>
            </div>
    </div>
}
export default HerosPage;