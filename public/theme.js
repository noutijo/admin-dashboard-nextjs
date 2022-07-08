(function () {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC(Flash of unstyled content)
  if (localStorage.theme && localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.add("light");
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
  }
})();
