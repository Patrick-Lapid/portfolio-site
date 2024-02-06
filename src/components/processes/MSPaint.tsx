import React, { FC } from "react";
import Window from "../Window";
import profilePic from "../../imgs/profile_picture.png";
import { ComponentProcessProps } from "../../context/types";

const MSPaint: FC<ComponentProcessProps> = ({ id, name }) => {
    return (
        <Window
            id={id}
            name={name}
        >
            <div className="content">
                <div className="content-col col-10">Paint</div>
            </div>
        </Window>
    );
};

export default MSPaint;
