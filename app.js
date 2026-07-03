// PANEL SWITCHING
const navLinks = document.querySelectorAll(".nav-link");
const panels = document.querySelectorAll(".panel");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-panel");

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    panels.forEach(panel => {
      panel.dataset.active = panel.id === target ? "true" : "false";
      panel.style.display = panel.id === target ? "block" : "none";
    });
  });
});

// PROOF OF LIFE ANIMATION
setInterval(() => {
  document.body.style.boxShadow =
    "0 0 " + (Math.random() * 20) + "px rgba(245,210,106,0.3)";
}, 500);

// BUTTON FEEDBACK
const buttons = document.querySelectorAll(".command-button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});
