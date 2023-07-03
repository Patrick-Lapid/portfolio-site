import React from "react";
import WebBrowser from "./WebBrowser";
import TaskBar from "./TaskBar";
import { useProcessContext, LINKS } from "../context/process";
import { StartMenu } from "./StartMenu";

function App() {
    const { focusedWindow } = useProcessContext();

    return (
        <div className="body">
            <div className="desktop">
                
                <WebBrowser />

                {focusedWindow === LINKS.START && <StartMenu />}
                <TaskBar />
            </div>
        </div>
    );
}

export default App;
