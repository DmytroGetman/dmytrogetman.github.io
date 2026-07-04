const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const settingsBtn = document.getElementById("settings-btn");
const panel = document.getElementById("settings-panel");

settingsBtn.addEventListener("click", function () {
  panel.classList.toggle("hidden");
});