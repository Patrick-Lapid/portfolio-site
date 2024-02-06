import React, { FC } from "react";
import Window from "../Window";
import profilePic from "../../imgs/profile_picture.png";
import { ComponentProcessProps } from "../../context/types";

const Photos: FC<ComponentProcessProps> = ({ id, name }) => {
    return (
        <Window
            id={id}
            name={name}
        >
            <div className="content">
                <div className="content-col col-10">Photos</div>
            </div>
        </Window>
    );
};

export default Photos;
