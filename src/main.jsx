import React from "react";
import { createRoot } from "react-dom/client";
import App, { PublicFeedback } from "./App.jsx";

const isFeedback = new URLSearchParams(window.location.search).has("fb");

createRoot(document.getElementById("root")).render(
  isFeedback ? <PublicFeedback /> : <App />
);
