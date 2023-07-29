import React, { ReactNode, useCallback, useEffect, useState } from "react";
import "../styles/Window.css";
import { Rnd, RndResizeCallback } from "react-rnd";
import { useProcessContext } from "../context/processes";
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

interface Size {
    height: string;
    width: string;
}

const useResizable = (maximized = false) => {
    const [{ height, width }, setSize] = useState<Size>({
        height: "400px",
        width: "650px",
    });

    const updateSize = useCallback<RndResizeCallback>(
        (
            _event,
            _direction,
            { style: { height: elementHeight, width: elementWidth } },
        ) => {
            setSize({ height: elementHeight, width: elementWidth });
        },
        [],
    );

    console.log(maximized);

    return {
        height: maximized ? "96vh" : height,
        width: maximized ? "100vw" : width,
        updateSize,
    };
};

const Window = (props: WindowProps) => {
    const { maximize, minimize, close } = useProcessContext();

    const {
        processes: {
            [props.id]: { maximized, minimized },
        },
    } = useProcessContext();

    const { theme } = useThemeContext();

    const { height, width, updateSize } = useResizable(maximized);

    useEffect(() => {
        console.log(maximized, minimized);
    }, [maximized, minimized]);

    return (
        <>
            <Rnd
                size={{ width: width, height: height }}
                minHeight={400}
                minWidth={650}
                style={{ display: minimized ? "none" : "" }}
                enableResizing={!maximized}
                onResizeStop={updateSize}
                // position={{
                //     x: Math.floor(Math.random() * 500 + 1),
                //     y: Math.floor(Math.random() * 200 + 1),
                // }}
                dragHandleClassName="header"
                cancel=".header-buttons"

                // style={{ overflow: "hidden" }}
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
                                <button onClick={() => minimize(props.id)}>
                                    <svg
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs></defs>
                                        <rect
                                            x="1"
                                            y="7"
                                            width="6"
                                            height="1.5"
                                        ></rect>
                                    </svg>
                                </button>
                                <button onClick={() => maximize(props.id)}>
                                    <svg
                                        viewBox="0 0 9 9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs></defs>
                                        <rect
                                            x="0"
                                            y="0"
                                            width="1"
                                            height="9"
                                        ></rect>
                                        <rect
                                            x="0"
                                            y="0"
                                            width="9"
                                            height="2"
                                        ></rect>
                                        <rect
                                            x="8"
                                            y="0"
                                            width="1"
                                            height="9"
                                        ></rect>
                                        <rect
                                            x="0"
                                            y="8"
                                            width="9"
                                            height="1"
                                        ></rect>
                                    </svg>
                                </button>
                                <button onClick={() => close(props.id)}>
                                    {/* <svg
                                        viewBox="0 0 9 9"
                                        width="9"
                                        height="9"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs></defs>
                                        <line
                                            x1="1"
                                            y1="1"
                                            x2="8"
                                            y2="8"
                                        ></line>
                                        <line
                                            x1="8"
                                            y1="1"
                                            x2="1"
                                            y2="8"
                                        ></line>
                                    </svg> */}
                                </button>
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
