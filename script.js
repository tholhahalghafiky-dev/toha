// MULAI UNTUK MENAMPILKAN SECTION PERTAMA
const startBtn = document.getElementById("startBtn");
const storySection = document.getElementById("story");
const secretBtn = document.getElementById("secretBtn");
const surpriseSection = document.getElementById("surprise");

startBtn.addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  showSection(storySection);
  secretBtn.classList.remove("hidden");
});

// MENAMPILKAN SECTION DENGAN DELAY SCROLL
const sections = [...document.querySelectorAll(".section")];
let current = 0;

function showSection(elem) {
  elem.classList.add("fade-in");
  elem.classList.remove("hidden");
}

// JALANKAN SCROLL OTOMATIS KE BAGIAN BERIKUTNYA
window.addEventListener("scroll", () => {
  if (current < sections.length) {
    const sec = sections[current];
    const rect = sec.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      showSection(sec);
      current++;
    }
  }
});

// RAHSIA BUTTON UNTUK MEMUNCULKAN SURPRISE
secretBtn.addEventListener("click", () => {
  showSection(surpriseSection);
  surpriseSection.scrollIntoView({ behavior: "smooth" });
  secretBtn.style.display = "none";
});