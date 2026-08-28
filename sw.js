/*
 * Service Worker — أطلس اللغات السامية (Semitic Languages Academic Atlas)
 * Provides the offline "app shell" caching required for PWA installability
 * (Chrome/Edge/Android installability checks require a registered SW with
 * a fetch handler, alongside the existing manifest.webmanifest).
 *
 * IMPORTANT — on every deploy that changes any file below, bump
 * CACHE_VERSION (e.g. keep it in step with version.json's "version").
 * Old caches are deleted automatically on activate, so bumping the
 * version is what pushes updated files to returning users.
 */
"use strict";

const CACHE_VERSION = "v1.1.0";
const CACHE_NAME = `semitic-atlas-${CACHE_VERSION}`;

// App-shell files pre-cached on install. Keep this list in sync with the
// files actually shipped at the project root.
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./styles.css",
  "./version.json",
  "./js/webintoapp.js",
  "./js/data.js",
  "./js/expanded-data.js",
  "./js/app.js",
  "./js/sw-register.js",
  "./assets/app-icon.svg",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/splash.svg",
  "./assets/splash-1080x1920.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only ever handle simple GET requests.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Cross-origin requests (e.g. Wikimedia-hosted images allowed by the
  // page's img-src) are left completely alone — the browser handles them
  // natively, online or not.
  if (url.origin !== self.location.origin) return;

  // Navigation requests (opening/reloading the app): try the network
  // first so users online get the latest index.html, falling back to the
  // cached app shell when there is no connection.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Everything else same-origin (css/js/manifest/icons): cache-first for
  // instant, offline-capable loads, topping up the cache with anything
  // fetched that wasn't already precached.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
