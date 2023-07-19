import { ComponentType } from "react";

export type ComponentProcessProps = {
    id: string;
    name: string;
};

export type Process = {
    Component: ComponentType<ComponentProcessProps>;
    name: string;
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