import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/win98.ttf";
import "./index.css";
import ProcessContextProvider from "./context/processes";
import App from "./components/App.tsx";
import ThemeContextProvider from "./context/theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <ProcessContextProvider>
                <App />
            </ProcessContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
);
