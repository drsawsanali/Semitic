// Registers the offline "app shell" service worker for the PWA.
// Kept in its own same-origin file (not inline) because index.html's CSP
// has no 'unsafe-inline' on script-src.
"use strict";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
}
