import { ComponentType } from "react";

export type ProcessContextInterface = {
    processes: Processes;
    focusedWindow: string;
    setFocusedWindow: any;
    maximize : any;
    minimize : any;
    close    : any;
};

export type ComponentProcessProps = {
    id: string;
    name: string;
};

export type Process = {
    Component: ComponentType<ComponentProcessProps>;
    name: string;
    maximized : boolean;
    minimized : boolean;
};

export type Processes = {
    [id: string]: Process;
};

export const LINKS = {
    START: "Start",
    BIOGRAPHY: "Biography",
    PHOTOS: "Photos",
    RESUME: "Resume",
    PAINT: "Microsoft Paint",
};

export type Theme = {
    primaryColor: string;
    tlWindowOuter: string;
    rbWindowOuter: string;
    tlWindowInner: string;
    rbWindowInner: string;

    gradient1: string;
    gradient2: string;

    tlContentOuter: string;
    rbContentOuter: string;
    tlContentInner: string;
    rbContentInner: string;
};