const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const panels = document.querySelectorAll(".tab-panel");
    panels.forEach(panel => panel.classList.remove("active"));
    const targetId = button.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});