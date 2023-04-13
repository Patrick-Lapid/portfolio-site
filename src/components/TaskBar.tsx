import React, { useEffect, useState } from "react";
import "./TaskBar.css";
import { useNavigateContext } from "../context/navigate";
import start from "../imgs/win95.png";
import startupSound from "../imgs/startup.mp3";
import { LINKS } from "../context/navigate";

const TaskBar = () => {
    const { activeWindows, focusedWindow, setFocusedWindow } =
        useNavigateContext();
    const [clockState, setClockState] = useState<any>();
    const audio = new Audio(startupSound)

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    const startup = () => {
        console.log(audio.currentTime);
        if(!audio.currentTime){
            audio.play();
        }
        
    }

    return (
        <>
            <div className="navbar-container">
                <div
                    className={`start-menu ${
                        focusedWindow === LINKS.START
                            ? "start-menu-depressed"
                            : ""
                    }`}
                    onClick={() => {
                        setFocusedWindow(LINKS.START);
                        startup();
                    }}
                >
                    <img src={start} className="start-icon" alt="startIcon" />
                    <div className="start-text">Start</div>
                </div>
                {activeWindows.map((window) => {
                    return (
                        <button
                            id={window}
                            className={`navbar-item ${
                                focusedWindow === window
                                    ? "navbar-item-depressed"
                                    : ""
                            }`}
                            onClick={() => {
                                setFocusedWindow(window);
                            }}
                        >
                            {window}
                        </button>
                    );
                })}
                <div className="spacer"></div>
                <div className="time">{clockState}</div>
            </div>
        </>
    );
};

export default TaskBar;
