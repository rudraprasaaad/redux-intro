import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store.js";

store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());

createRoot(document.getElementById("root")).render(<App />);
