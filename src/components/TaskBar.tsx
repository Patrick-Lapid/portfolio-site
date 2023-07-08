import React, { useEffect, useState } from "react";
import "../styles/TaskBar.css";
import { useProcessContext } from "../context/processes";
import start from "../imgs/win95.png";
import startupSound from "../imgs/startup.mp3";
import { LINKS } from "../context/types";

const TaskBar = () => {
    const { processes, focusedWindow, setFocusedWindow } =
        useProcessContext();
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

    useEffect(() => {
        // console.log(processMap)
        Object.keys(processes).map((key : string) =>  console.log(key));
    }, [processes])

    

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

                {Object.entries(processes).map(([key, {name}]) => {
                    return (
                        <button
                            key={key}
                            className={`navbar-item ${
                                focusedWindow === name
                                    ? "navbar-item-depressed"
                                    : ""
                            }`}
                            onClick={() => {
                                setFocusedWindow(name);
                            }}
                        >
                            {name}
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
