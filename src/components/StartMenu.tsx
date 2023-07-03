import * as React from 'react';
import { useProcessContext } from '../context/process';
import sidebar from "../imgs/sidebar-image.png";
import linkedin from "../imgs/Linkedin.webp";
import instagram from "../imgs/Instagram.webp";
import github from "../imgs/Github.webp";
import resume from "../imgs/resume.png";
import youtube from "../imgs/youtube.webp";

export interface IStartMenuProps {
}

export function StartMenu (props: IStartMenuProps) {

    return (
        <div className="menu" style={{ zIndex: "300000" }}>
            <div className="sidebar">
                <img
                    className="sidebar-image"
                    src={sidebar}
                    alt="sideBar"
                />
            </div>
            <div className="socials">
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
                        <div className="social-text">
                            <u>I</u>nstagram
                        </div>
                    </div>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCr350j-4YOjQPIphYWrcbQQ/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="bar">
                        <img
                            className="social-image"
                            src={youtube}
                            alt="youtube"
                        />
                        <div className="social-text">
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
    );
}
