import ScrollReveal from "scrollreveal";

export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 100,
    easing: "ease-in-out",
    opacity: 0,
    reset: true,
    viewFactor: 0.1,
    cleanup: true,
    container: '#container',
  });

  sr.reveal(".sr", { interval: 200 });
  console.log("ScrollReveal initialized");
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
});

document.addEventListener("astro:after-swap", () => {
  initScrollReveal();
});
