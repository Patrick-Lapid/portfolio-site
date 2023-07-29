import React, { useCallback, useContext, useState } from "react";
import { processDirectory } from "./utils/processDirectory";
import { LINKS, Process, ProcessContextInterface, Processes } from "./types";

type ProcessContextType = ProcessContextInterface;
const ProcessContext = React.createContext<ProcessContextType>(
    {} as ProcessContextInterface,
);

export function useProcessContext() {
    return useContext(ProcessContext);
}

const ProcessContextProvider = ({ children }: any) => {
    const [processes, setProcesses] = useState<Processes>(processDirectory);
    const [focusedWindow, setFocusedWindow] = useState<string>(LINKS.BIOGRAPHY);

    const setProcessSettings = useCallback(
        (processId: string, settings: Partial<Process>) => {
            const { ...newProcesses } = processes;

            if (newProcesses[processId]) {
                newProcesses[processId] = {
                    ...newProcesses[processId],
                    ...settings,
                };
            }

            setProcesses(newProcesses);
        },
        [processes],
    );

    const updateActiveWindow = useCallback(
        (processId: string) => {
            setProcessSettings(processId, {
                minimized: false,
            });
            setFocusedWindow(processId);
        },
        [setProcessSettings],
    );

    const maximize = useCallback(
        (processId: string) => {
            console.log("Maximized", processId);

            updateActiveWindow(processId);

            setProcessSettings(processId, {
                maximized: !processes[processId].maximized,
            });
        },
        [processes, setProcessSettings, updateActiveWindow],
    );

    const minimize = useCallback(
        (processId: string) => {
            console.log("Minimized : ", processId);

            setProcessSettings(processId, {
                minimized: !processes[processId].minimized,
            });
        },
        [processes, setProcessSettings],
    );

    const close = useCallback(
        (processID: string) => {
            console.log("Closed: ", processID);

            const { [processID]: _closedProcess, ...remainingProcesses } =
                processes;
            setProcesses(remainingProcesses);
        },
        [processes],
    );

    const value: ProcessContextInterface = {
        processes: processes,
        focusedWindow: focusedWindow,
        setFocusedWindow: updateActiveWindow,
        maximize: maximize,
        minimize: minimize,
        close: close,
    };

    return (
        <ProcessContext.Provider value={value}>
            {children}
        </ProcessContext.Provider>
    );
};

export default ProcessContextProvider;
