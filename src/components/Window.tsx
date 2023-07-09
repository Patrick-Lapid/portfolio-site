import React, { ReactNode } from "react";
import "../styles/Window.css";
import { Rnd } from "react-rnd";
import styled from "styled-components";

interface WindowProps {
    id: string;
    name: string;
    children: ReactNode;
}

const StyledWindow = styled.div`
    height: 100%;
    border-top: 1px ${props => props.theme.tlWindowOuter} solid;
    border-left: 1px ${props => props.theme.tlWindowOuter} solid;
    border-bottom: 1px ${props => props.theme.rbWindowOuter} solid;
    border-right: 1px ${props => props.theme.rbWindowOuter} solid;
    background: ${props => props.theme.primaryColor};

    box-shadow:
        inset -1px 0 ${props => props.theme.rbWindowInner},
        inset -1px 1px ${props => props.theme.tlWindowInner},
        inset -1px -1px ${props => props.theme.rbWindowInner},
        inset 0 0 0 1px ${props => props.theme.tlWindowInner};
`;

// background: linear-gradient(to right, #000080, #1084d0);

const StyledHeader = styled.div`
    background: linear-gradient(
        to right,
        ${props => props.theme.gradient1},
        ${props => props.theme.gradient2}
    );
    margin: 1px;
    padding: 2px;
    color: #fff;
    position: relative;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
`;

type Theme = {
    primaryColor: string;
    tlWindowOuter: string;
    rbWindowOuter: string;
    tlWindowInner: string;
    rbWindowInner: string;

    gradient1: string;
    gradient2: string;

    tlContentOuter: string;
    rbContentOuter: string;
    tlContentInner: string;
    rbContentInner: string;
};

// windows standard theme
const defaultTheme: Theme = {
    primaryColor: "rgb(200, 196, 196)",
    tlWindowOuter: "rgba(128,128,128,255)",
    rbWindowOuter: "rgba(1, 1, 0, 255)",
    tlWindowInner: "rgba(255,255,255,255)",
    rbWindowInner: "rgba(128,128,128,255)",

    gradient1: "#000080",
    gradient2: "#1084d0",

    tlContentOuter: "rgba(128,128,128,255)",
    rbContentOuter: "rgba(255,255,255,255)",
    tlContentInner: "rgba(0,0,0,255)",
    rbContentInner: "rgba(128,128,128,255)",
};

const Window = (props: WindowProps) => {
    return (
        <>
            <Rnd
                size={{ width: 850, height: 600 }}
                minHeight={600}
                minWidth={850}
                position={{
                    x: Math.floor(Math.random() * 500 + 1),
                    y: Math.floor(Math.random() * 200 + 1),
                }}
                dragHandleClassName="header"
                cancel=".header-buttons"
                style={{ overflow: "hidden" }}
            >
                {/* Draggable Window */}
                <StyledWindow theme={defaultTheme}>
                    <div className="inner">
                        {/* Draggable Header */}
                        {/* <div className="header d-flex flex-row align-content-center justify-content-between"> */}
                        <StyledHeader
                            className="header"
                            theme={defaultTheme}
                        >
                            {props.name}
                            <div className="header-buttons">
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </StyledHeader>
                        {/* </div> */}

                        {/* AddressBar */}
                        <div className="top-section d-flex flex-row align-content-center">
                            <div className="address-text mx-1 my-auto">
                                Address
                            </div>
                            <div className="address-wrapper flex-grow-1">
                                <div className="address-bar px-2">
                                    localhost:8000/{props.id}
                                </div>
                            </div>
                        </div>

                        {/* render children */}
                        {props.children}
                    </div>
                </StyledWindow>
            </Rnd>
        </>
    );
};

export default Window;
