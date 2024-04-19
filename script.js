console.log("hello");
// Store scroll position in localStorage when page is unloaded
window.addEventListener("beforeunload", function () {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// On first load, get scroll position from localStorage and set it
window.addEventListener("load", function () {
  if (localStorage.getItem("scrollPosition") !== null) {
    window.scrollTo(0, localStorage.getItem("scrollPosition"));
  }
});
