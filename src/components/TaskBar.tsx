import React, { useEffect, useState } from "react";
import "./TaskBar.css";
import { useProcessContext } from "../context/process";
import start from "../imgs/win95.png";
import startupSound from "../imgs/startup.mp3";
import { LINKS } from "../context/process";

const TaskBar = () => {
    const { processMap, focusedWindow, setFocusedWindow } =
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
        Object.keys(processMap).map((key : string) =>  console.log(key, processMap.get(key)));
    }, [])

    

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

                {[...processMap].map(([key, process]) => {
                    return (
                        <button
                            id={key}
                            className={`navbar-item ${
                                focusedWindow === process.name
                                    ? "navbar-item-depressed"
                                    : ""
                            }`}
                            onClick={() => {
                                setFocusedWindow(process.name);
                            }}
                        >
                            {process.name}
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
