import React, { useContext, useState } from "react";

export const LINKS = {
    START     : "Start",
    BIOGRAPHY : "Biography",
    PHOTOS    : "Photos",
    RESUME    : "Resume",
    PAINT     : "Microsoft Paint"
}

export interface process {
    name : string;
    minimized : boolean;
    maximized : boolean;
}

type ProcessContextInterface = {
    processMap : Map<string, any>;
    focusedWindow : string;
    setFocusedWindow : React.Dispatch<React.SetStateAction<string>>;
}

const defaultMap = new Map<string, process>([
    ["biography", {name : LINKS.BIOGRAPHY, minimized: false, maximized: false}],
    ["photo", {name : LINKS.PHOTOS, minimized: false, maximized: false}],
    ["resume", {name : LINKS.RESUME, minimized: false, maximized: false}],
    ["paint", {name : LINKS.PAINT, minimized: false, maximized: false}],

])

type ProcessContextType = ProcessContextInterface;
const ProcessContext = React.createContext<ProcessContextType>({} as ProcessContextInterface);

export function useProcessContext() {
    return useContext(ProcessContext);
}

const NavigationProvider = ({children} : any) => {

    const [processMap, updateProcessMap] = useState<Map<string, process>>(defaultMap); // eslint-disable-line no-unused-vars
    const [focusedWindow, setFocusedWindow] = useState<string>(LINKS.BIOGRAPHY);

    const value : ProcessContextInterface = {
        processMap : processMap,
        focusedWindow : focusedWindow,
        setFocusedWindow : setFocusedWindow
    }

    return(
        <ProcessContext.Provider value={value}>
            {children}
        </ProcessContext.Provider>
    )
}

export default NavigationProvider;