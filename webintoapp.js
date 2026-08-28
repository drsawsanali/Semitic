(function () {
  "use strict";
  window.__WEBINTOAPP_BUILD__ = true;
  document.documentElement.classList.add("webintoapp-build");

  window.addEventListener("error", function (event) {
    if (event.target && event.target.tagName === "IMG") return;
    console.warn("Recovered interface error:", event.message || "unknown");
  }, true);

  window.addEventListener("unhandledrejection", function (event) {
    console.warn("Recovered async operation:", event.reason || "unknown");
    event.preventDefault();
  });

  if (!window.matchMedia) {
    window.matchMedia = function () {
      return { matches:false, media:"", addListener:function(){}, removeListener:function(){} };
    };
  }
})();
