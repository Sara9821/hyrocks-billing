import React from "react";
import { createRoot } from "react-dom/client";
import App, { PublicBill } from "./App.jsx";

// If the URL has ?bill=... show the public bill page (no login); otherwise the app.
const isBill = new URLSearchParams(window.location.search).has("bill");

createRoot(document.getElementById("root")).render(
  isBill ? <PublicBill /> : <App />
);

// Register the service worker so the app is installable on phones & laptops.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
