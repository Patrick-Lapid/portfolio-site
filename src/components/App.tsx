import React from "react";
import Window from "./Window";
import TaskBar from "./TaskBar";
import { useProcessContext, LINKS } from "../context/process";
import { StartMenu } from "./StartMenu";
import profilePic from "../imgs/profile_picture.png";

function App() {
    const { focusedWindow, processMap } = useProcessContext();

    return (
        <div className="body">
            <div className="desktop">

                {/* Window Renderer */}
                {[...processMap].map(([key, process]) => {
                    return (
                        <Window id={key} key={key}>
                            <div className="content">
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
                        </Window>
                    );
                })}
                

                {focusedWindow === LINKS.START && <StartMenu />}
                <TaskBar />
            </div>
        </div>
    );
}

export default App;
