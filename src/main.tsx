import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");
if (!root) {
    console.error("No root element found - panic?");
} else {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
