// Script untuk menyesuaikan tema antara lightmode dan darkmode
// darkmode and lightmode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const logoTheme = document.getElementById("logo-theme");
const animeIcon = document.getElementById("anime-icon");
const textMode = document.getElementById("text-mode");
const logoMode = document.getElementById("logo-mode");

themeToggleBtn.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    logoTheme.src = "assets/images/logo-black.png";
    logoMode.src = "assets/images/logo-black.png";
    animeIcon.src = "assets/images/hitori-black.png";
    textMode.innerHTML = "Light Mode";

  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    logoTheme.src = "assets/images/logo.png";
    logoMode.src = "assets/images/logo.png";
    animeIcon.src = "assets/images/hitori.webp";
    textMode.innerHTML = "Dark Mode";
    
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

// experient
document.querySelectorAll('.experience-card').forEach(card => {
  card.addEventListener('click', function() {
      const description = this.querySelector('.description');
      if (description.style.display === 'none' || description.style.display === '') {
          description.style.display = 'block';
      } else {
          description.style.display = 'none';
      }
  });
});

