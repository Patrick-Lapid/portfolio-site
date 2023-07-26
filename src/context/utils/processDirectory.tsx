import React from "react";
import { LINKS, Processes } from "../types";
import Biography from "../../components/processes/Biography";
import MSPaint from "../../components/processes/MSPaint";
import Photos from "../../components/processes/Photos";
import Resume from "../../components/processes/Resume";

export const processDirectory: Processes = {
    Biography: {
        Component: ({ id, name }) => (
            <Biography
                id={id}
                name={name}
            />
        ),
        name: LINKS.BIOGRAPHY,
        maximized : false,
        minimized : false,
    },
    MSPaint: {
        Component: ({ id, name }) => (
            <MSPaint
                id={id}
                name={name}
            />
        ),
        name: LINKS.PAINT,
        maximized : false,
        minimized : false,
    },
    Photo: {
        Component: ({ id, name }) => (
            <Photos
                id={id}
                name={name}
            />
        ),
        name: LINKS.PHOTOS,
        maximized : false,
        minimized : false,
    },
    Resume: {
        Component: ({ id, name }) => (
            <Resume
                id={id}
                name={name}
            />
        ),
        name: LINKS.RESUME,
        maximized : false,
        minimized : false,
    },
};
