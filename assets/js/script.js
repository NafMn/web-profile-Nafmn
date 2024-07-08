// Script untuk menyesuaikan tema antara lightmode dan darkmode
// darkmode and lightmode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Setel tema berdasarkan preferensi pengguna yang disimpan di localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.classList.add(savedTheme);
} else {
  // Pilihan tambahan: Setel mode berdasarkan preferensi sistem
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlElement.classList.add("dark");
  }
}
