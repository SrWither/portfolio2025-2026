const STORAGE_KEY = "theme";
const htmlEl = document.documentElement;

function setTheme(theme: "dark" | "light") {
  htmlEl.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

function initTheme() {
  const saved =
    localStorage.getItem(STORAGE_KEY) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  setTheme(saved as "dark" | "light");
}

function setupThemeButton(buttonId: string) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    setTheme(next);
  });
}

function setupThemeToggles() {
  // Desktop
  setupThemeButton("theme-toggle");
  // Mobile
  setupThemeButton("theme-toggle-mobile");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupThemeToggles();
});

document.addEventListener("astro:after-swap", () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") {
    htmlEl.classList.add("dark");
  } else {
    htmlEl.classList.remove("dark");
  }
  setupThemeToggles();
});
