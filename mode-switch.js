(function () {
  var buttons = document.querySelectorAll(".mode-btn");
  var panels = document.querySelectorAll(".mode-panel");

  function setMode(mode) {
    buttons.forEach(function (btn) {
      var active = btn.dataset.mode === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.modePanel !== mode;
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var mode = btn.dataset.mode;
      setMode(mode);
      history.replaceState(null, "", "#" + mode);
    });
  });

  var initial = window.location.hash.replace("#", "");
  if (initial === "video" || initial === "acting") {
    setMode(initial);
  }
})();
