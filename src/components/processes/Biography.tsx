import React, { FC } from "react";
import Window from "../Window";
import profilePic from "../../imgs/profile_picture.png";
import { ComponentProcessProps } from "../../context/types";

const Biography: FC<ComponentProcessProps> = ({ id, name }) => {
    return (
        <Window
            id={id}
            name={name}
        >
            <div className="content">
                <p className="my-2 mx-2 text-dark">
                    Please wake up, we've been trying to reach you
                </p>
            </div>
        </Window>
    );
};

export default Biography;
