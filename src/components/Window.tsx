import React, { ReactNode } from "react";
import "../styles/Window.css";
import { Rnd } from "react-rnd";
import { useThemeContext } from "../context/theme";
import {
    StyledAddress,
    StyledHeader,
    StyledWindow,
} from "../styles/styledComponents";

interface WindowProps {
    id: string;
    name: string;
    children: ReactNode;
}

const Window = (props: WindowProps) => {
    const { theme } = useThemeContext();

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
                <StyledWindow theme={theme}>
                    <div className="inner">
                        {/* Draggable Header */}
                        {/* <div className="header d-flex flex-row align-content-center justify-content-between"> */}
                        <StyledHeader
                            className="header"
                            theme={theme}
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
                        {/* <div className="top-section d-flex flex-row align-content-center"> */}
                        <StyledAddress theme={theme}>
                            <div className="address-text mx-1 my-auto">
                                Address
                            </div>
                            <div className="address-wrapper flex-grow-1">
                                <div className="address-bar px-2">
                                    localhost:8000/{props.id}
                                </div>
                            </div>
                        </StyledAddress>
                        {/* </div> */}

                        {/* render children */}
                        {props.children}
                    </div>
                </StyledWindow>
            </Rnd>
        </>
    );
};

export default Window;
