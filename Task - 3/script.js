document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById("projectList");
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn?.addEventListener("click", () => {
    const isVisible = projectList.style.display === "block";
    projectList.style.display = isVisible ? "none" : "block";
    toggleBtn.textContent = isVisible ? "Show Projects" : "Hide Projects";
  });

  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks! Your message has been received.');
    this.reset();
  });

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});
