import React from "react";
import WebBrowser from "./WebBrowser";
import TaskBar from "./TaskBar";
import { useProcessContext, LINKS } from "../context/process";
import { StartMenu } from "./StartMenu";

function App() {
    const { focusedWindow, processMap } = useProcessContext();

    return (
        <div className="body">
            <div className="desktop">

                {[...processMap].map(([key, process]) => {
                    return (
                        <WebBrowser id={key} key={key} />
                    );
                })}
                

                {focusedWindow === LINKS.START && <StartMenu />}
                <TaskBar />
            </div>
        </div>
    );
}

export default App;
