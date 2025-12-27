document.addEventListener("wheel", (e) => {
  e.preventDefault();
  window.scrollBy({
    top: e.deltaY * 0.7,
    behavior: "smooth"
  });
}, { passive: false });
