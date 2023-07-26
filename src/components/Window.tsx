import React, { ReactNode } from "react";
import "../styles/WebBrowser.css";
import { Rnd } from "react-rnd";
import { useProcessContext } from "../context/processes";

interface WindowProps {
    id: string;
    name: string;
    children: ReactNode;
}

const Window = (props: WindowProps) => {

    const { maximize, minimize } = useProcessContext()

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
                <div className="window">
                    <div className="inner">
                        {/* Draggable Header */}
                        <div className="header d-flex flex-row align-content-center justify-content-between">
                            {props.name}
                            <div className="header-buttons">
                                <button onClick={() => minimize(props.id)}></button>
                                <button onClick={() => maximize(props.id)}></button>
                                <button></button>
                            </div>
                        </div>

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
                </div>
            </Rnd>
        </>
    );
};

export default Window;
