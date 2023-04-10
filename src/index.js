import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/win98.ttf";
import "./index.css";
import NavigationProvider from "./context/navigate.tsx";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </React.StrictMode>
);
