import React from "react";
import { LINKS, Processes } from "../types";
import Biography from "../../components/processes/Biography";

// const defaultMap = new Map<string, process>([
//     ["biography", {name : LINKS.BIOGRAPHY, minimized: false, maximized: false}],
//     ["photo", {name : LINKS.PHOTOS, minimized: false, maximized: false}],
//     ["resume", {name : LINKS.RESUME, minimized: false, maximized: false}],
//     ["paint", {name : LINKS.PAINT, minimized: false, maximized: false}],
// ])

export const processDirectory : Processes = {
    Biography : {
        Component : ({id, name}) => <Biography id={id} name={name}/>,
        name : LINKS.BIOGRAPHY
    },
    MSPaint : {
        Component : ({id, name}) => <Biography id={id} name={name}/>,
        name : LINKS.PAINT
    },
    Photo : {
        Component : ({id, name}) => <Biography id={id} name={name}/>,
        name : LINKS.PHOTOS
    }
}
