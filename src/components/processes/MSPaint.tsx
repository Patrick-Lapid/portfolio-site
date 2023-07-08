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
                <div className="profile-col col-2">
                    <div className="profile-card d-flex flex-column align-items-center">
                        <img
                            src={profilePic}
                            alt=""
                        />
                        <p>profile.png</p>
                    </div>
                </div>
                <div className="content-col col-10">Paint</div>
            </div>
        </Window>
    );
};

export default MSPaint;
