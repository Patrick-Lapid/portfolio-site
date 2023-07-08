import { ComponentType } from "react";

export type Process = {
    Component: ComponentType<any>;
    name : string;
};

export type Processes = {
    [id : string] : Process
};

export const LINKS = {
    START     : "Start",
    BIOGRAPHY : "Biography",
    PHOTOS    : "Photos",
    RESUME    : "Resume",
    PAINT     : "Microsoft Paint"
}