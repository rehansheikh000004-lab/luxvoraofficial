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
    const revealPoint = 100; // trigger when 100px visible

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
