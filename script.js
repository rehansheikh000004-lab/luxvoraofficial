function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

function loadProject(project) {
  const frame = document.getElementById("projectFrame");
  frame.src = project + ".html";
  showTab("projects");
}

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeBtn");
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    btn.textContent = "🌙 Dark Mode";
  } else {
    btn.textContent = "☀️ Light Mode";
  }
}

// ✨ Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ⬆ Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ✨ Typing Animation
const typingElement = document.getElementById("typing");
const words = ["Web Developer", "Creator", "Innovator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 80 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500; // pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

// start typing when page loads
document.addEventListener("DOMContentLoaded", typeEffect);
