import React, { useEffect, useState } from "react";
import "./TaskBar.css";
import { useNavigateContext } from "../context/navigate.tsx";
import start from "../imgs/win95.png";
import { LINKS } from "../context/navigate.tsx";

const TaskBar = () => {
    const { activeWindows, focusedWindow, setFocusedWindow } =
        useNavigateContext();
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

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
