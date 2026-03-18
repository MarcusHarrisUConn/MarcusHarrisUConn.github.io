(function () {
  var storageKey = "site-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (_error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (_error) {
      return;
    }
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("quarto-dark", theme === "dark");
    document.body.classList.toggle("quarto-light", theme === "light");
    document.querySelectorAll("[data-bs-theme]").forEach(function (node) {
      node.setAttribute("data-bs-theme", theme);
    });
  }

  function renderToggle(theme) {
    var tools = document.querySelector(".quarto-navbar-tools");
    if (!tools || document.querySelector(".theme-toggle")) {
      return;
    }

    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Toggle light and dark mode");

    var label = document.createElement("span");
    label.className = "theme-toggle-label";

    var track = document.createElement("span");
    track.className = "theme-toggle-track";

    var thumb = document.createElement("span");
    thumb.className = "theme-toggle-thumb";
    track.appendChild(thumb);

    button.appendChild(label);
    button.appendChild(track);

    function sync(nextTheme) {
      label.textContent = nextTheme === "dark" ? "Dark" : "Light";
      button.setAttribute("aria-pressed", nextTheme === "dark" ? "true" : "false");
    }

    button.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
      sync(next);
    });

    sync(theme);
    tools.prepend(button);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var theme = getPreferredTheme();
    applyTheme(theme);
    renderToggle(theme);
  });
})();
