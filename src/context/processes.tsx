import React, { useCallback, useContext, useState } from "react";
import { processDirectory } from "./utils/processDirectory";
import { LINKS, Processes } from "./types";


type ProcessContextInterface = {
    processes : Processes;
    focusedWindow : string;
    setFocusedWindow : any;
}

// const defaultMap = new Map<string, process>([
//     ["biography", {name : LINKS.BIOGRAPHY, minimized: false, maximized: false}],
//     ["photo", {name : LINKS.PHOTOS, minimized: false, maximized: false}],
//     ["resume", {name : LINKS.RESUME, minimized: false, maximized: false}],
//     ["paint", {name : LINKS.PAINT, minimized: false, maximized: false}],
// ])

type ProcessContextType = ProcessContextInterface;
const ProcessContext = React.createContext<ProcessContextType>({} as ProcessContextInterface);

export function useProcessContext() {
    return useContext(ProcessContext);
}

const NavigationProvider = ({children} : any) => {

    const [processMap] = useState<Processes>(processDirectory); 
    const [focusedWindow, setFocusedWindow] = useState<string>(LINKS.BIOGRAPHY);

    const updateActiveWindow = useCallback(
        (id : string) => {
            setFocusedWindow(id)
        }, []
    )

    const value : ProcessContextInterface = {
        processes : processMap,
        focusedWindow : focusedWindow,
        setFocusedWindow : updateActiveWindow
    }

    return(
        <ProcessContext.Provider value={value}>
            {children}
        </ProcessContext.Provider>
    )
}

export default NavigationProvider;