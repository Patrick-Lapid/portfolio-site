import "./WebBrowser.css";
import profilePic from "../imgs/profile_picture.png";
import React from "react";

const WebBrowser = () => {
    return (
        <>
            <div className="frame">
                {/* Draggable Window */}
                <div className="window">
                    <div className="inner">
                        {/* Draggable Header */}
                        <div
                            className="header d-flex flex-row align-content-center justify-content-between"
                            draggable
                        >
                            Biography
                            <div className="header-buttons">
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div>

                        {/* AddressBar */}
                        <div className="top-section d-flex flex-row align-content-center">
                            <div className="address-text mx-1 my-auto">
                                Address
                            </div>
                            <div className="address-wrapper flex-grow-1">
                                <div className="address-bar px-2">
                                    localhost:8000/api
                                </div>
                            </div>
                        </div>

                        <div className="content row">
                            <div className="profile-col col-2">
                                <div className="profile-card d-flex flex-column align-items-center">
                                    <img src={profilePic} alt="" />
                                    <p>profile.png</p>
                                </div>
                            </div>
                            <div className="content-col col-10">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vitae ornare purus. Ut
                                laoreet diam ut sapien accumsan, non placerat
                                neque rhoncus. Nam placerat euismod tincidunt.
                                Nulla magna nulla, dictum et aliquet eget,
                                tristim turpis, interdum non leo a, consequat
                                ultrices elit. Fusce eget felis ut mauris
                                posuere dictum in sed augue. Sed at leo
                                consequat, bibendum lorem ac, faucibus lectus.
                                Aenean hendrerit, lacus eget faucibus hendrerit,
                                sapien purus pellentesque nunc, at fringilla
                                felis ex quis neque. Sed aliquet luctus purus,
                                quis euismod nisi accumsan eu. Morbi non
                                convallis nibh. Nunc in lacus non nisi dignissim
                                faucibus sed ut ligula. Vestibulum lobortis
                                felis vel neque sollicitudin feugiat.
                            </div>
                            <p className="my-2 mx-2 text-dark">
                                Please wake up, we've been trying to reach you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebBrowser;
