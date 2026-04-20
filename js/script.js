/* script.js - Interactive behaviors */

document.addEventListener('DOMContentLoaded', function() {
  // 1. Form Submission (Contact)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Tu mensaje ha sido enviado exitosamente! Nos pondremos en contacto contigo pronto.');
      contactForm.reset();
    });
  }

  // 2. Calendar day selection
  const calDays = document.querySelectorAll('.cal-day:not(.head):not(.empty)');
  calDays.forEach(day => {
    day.addEventListener('click', function() {
      calDays.forEach(d => d.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // 3. Smooth scrolling for anchor links (Bootstrap handles mostly, but extra polish)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Close navbar on mobile after click
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
});
