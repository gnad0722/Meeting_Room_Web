import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
function MyTeamCard(props) {
    return (
        <div className="team-card">
            <img src="https://picsum.photos/400/300" alt="Team Member" className="team-photo" />
            <h3 className="team-name">{props.name}</h3>
            <p>{props.title}</p>
            <div className="team-social">
                <a href="#" className="social-link">
                    <FaInstagram />
                </a>
                <a href="#" className="social-link">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}
export default MyTeamCard;