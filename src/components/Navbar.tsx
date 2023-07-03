import "..styles/Navbar.css";
import backBtn from "../imgs/back.png";
import refreshBtn from "../imgs/refresh.png";
import homeBtn from "../imgs/home.png";
import stopBtn from "../imgs/stop.png";
import forwardBtn from "../imgs/forward.png";
import React from "react";

const NavBar = () => {
    return (
        <div className="nav-bar d-flex flex-row align-content-center justify-content-start py-1">
            <div className="    icon text-center ms-1">
                <div className="icon-img">
                    <img src={backBtn} className="" alt="backBtn" height="15" />
                </div>
                <div className="icon-text">Back</div>
            </div>

            <div className="icon text-center">
                <div className="icon-img">
                    <img
                        src={forwardBtn}
                        className=""
                        alt="backBtn"
                        height="15"
                    />
                </div>
                <div className="icon-text">Forward</div>
            </div>

            <div className="icon  text-center me-1">
                <div className="icon-img">
                    <img src={stopBtn} alt="refreshBtn" height="28.5" />
                </div>
                <div className="icon-text">Stop</div>
            </div>

            <div className="icon text-center me-1">
                <div className="icon-img">
                    <img src={refreshBtn} alt="refreshBtn" height="28.5" />
                </div>
                <div className="icon-text">Refresh</div>
            </div>
            <div className="icon text-center ">
                <div className="icon-img">
                    <img src={homeBtn} alt="refreshBtn" height="28.5" />
                </div>
                <div className="icon-text">Home</div>
            </div>
        </div>
    );
};

export default NavBar;
