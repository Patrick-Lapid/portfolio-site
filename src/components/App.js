import WebBrowser from "./WebBrowser";
import TaskBar from "./TaskBar";
import { useNavigateContext, LINKS } from "../context/navigate.tsx";
import sidebar from "../imgs/sidebar-image.png";
import linkedin from "../imgs/Linkedin.webp";
import instagram from "../imgs/Instagram.webp";
import github from "../imgs/Github.webp";
import resume from "../imgs/resume.png";
import youtube from "../imgs/youtube.webp";

function App() {
    const { focusedWindow } = useNavigateContext();

    return (
        <div className="body">
            <div className="desktop">
                <WebBrowser />
                {focusedWindow === LINKS.START && (
                    <div class="menu" style={{ zIndex: "1000000" }}>
                        <div class="sidebar">
                            <img
                                class="sidebar-image"
                                src={sidebar}
                                alt="sideBar"
                            />
                        </div>
                        <div class="socials">
                            <a
                                href="https://www.instagram.com/patrickk.ml/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="bar">
                                    <img
                                        className="social-image"
                                        src={instagram}
                                        alt="instagram"
                                    />
                                    <div class="social-text">
                                        <u>I</u>nstagram
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/patrickk.ml/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="bar">
                                    <img
                                        className="social-image"
                                        src={youtube}
                                        alt="youtube"
                                    />
                                    <div class="social-text">
                                        <u>Y</u>outube
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/patrickml86/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="bar">
                                    <img
                                        className="social-image"
                                        src={linkedin}
                                        alt="linkedin"
                                    />
                                    <u>L</u>inkedIn
                                </div>
                            </a>
                            <a
                                href="https://github.com/Patrick-Lapid/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="bar">
                                    <img
                                        className="social-image"
                                        src={github}
                                        alt="github"
                                    />
                                    <u>G</u>itHub
                                </div>
                            </a>
                            <div className="divider"></div>
                            <a href="/files/resume.pdf" target="_blank">
                                <div className="bar">
                                    <img
                                        className="social-image"
                                        src={resume}
                                        alt="resume"
                                    />
                                    <u>R</u>ésumé
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <div className="taskbar">
                <TaskBar />
            </div>
        </div>
    );
}

export default App;
