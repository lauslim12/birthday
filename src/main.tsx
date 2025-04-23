import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element is not defined.");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
