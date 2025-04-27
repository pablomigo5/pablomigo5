function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  if (sectionId === 'home') {
    animateCounters();
  }
}

function animateCounters() {
  animateCounter('experienceCounter', 5, 0);
  animateCounter('projectsCounter', 5, 0);
  animateCounter('coursesCounter', 0, 5);
}

function animateCounter(id, start, end) {
  const element = document.getElementById(id);
  let current = start;
  const increment = start > end ? -1 : 1;
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if ((increment < 0 && current <= end) || (increment > 0 && current >= end)) {
      clearInterval(timer);
    }
  }, 200);
}
