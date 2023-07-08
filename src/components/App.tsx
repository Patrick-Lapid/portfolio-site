import React from "react";
import TaskBar from "./TaskBar";
import { useProcessContext } from "../context/processes";
import { StartMenu } from "./StartMenu";
import { LINKS } from "../context/types";
import WindowManager from "./WindowManager";

function App() {
    const { focusedWindow } = useProcessContext();

    return (
        <div className="body">
            <div className="desktop">
                {/* Window Renderer */}
                <WindowManager />

                {focusedWindow === LINKS.START && <StartMenu />}
                <TaskBar />
            </div>
        </div>
    );
}

export default App;
