import React, { useContext, useState } from "react";

export const LINKS = {
    START     : "Start",
    BIOGRAPHY : "Biography",
    PHOTOS    : "Photos",
    RESUME    : "Resume",
    PAINT     : "Microsoft Paint"
}

type NavigateContextInterface = {
    activeWindows : string[];
    setActiveWindows : React.Dispatch<React.SetStateAction<string[]>>;
    focusedWindow : string;
    setFocusedWindow : React.Dispatch<React.SetStateAction<string>>;
}

type NavigateContextType = NavigateContextInterface;
const NavigateContext = React.createContext<NavigateContextType>({} as NavigateContextInterface);

export function useNavigateContext() {
    return useContext(NavigateContext);
}

const NavigationProvider = ({children} : any) => {

    const [activeWindows, updateActiveWindows] = useState<string[]>([LINKS.BIOGRAPHY, LINKS.PHOTOS, LINKS.RESUME, LINKS.PAINT]);
    const [focusedWindow, setFocusedWindow] = useState<string>(LINKS.BIOGRAPHY);

    const value : NavigateContextInterface = {
        activeWindows : activeWindows,
        setActiveWindows : updateActiveWindows,
        focusedWindow : focusedWindow,
        setFocusedWindow : setFocusedWindow
    }

    return(
        <NavigateContext.Provider value={value}>
            {children}
        </NavigateContext.Provider>
    )
}

export default NavigationProvider;