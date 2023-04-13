import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/win98.ttf";
import "./index.css";
import NavigationProvider from "./context/navigate.tsx";
import App from "./components/App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </React.StrictMode>
);
