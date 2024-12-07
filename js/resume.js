(function() {
  "use strict"; // Start of use strict

  // Smooth scrolling using native JavaScript
  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();

      const pathname = window.location.pathname.replace(/^\//, '');
      const hostname = window.location.hostname;

      if (pathname === anchor.pathname.replace(/^\//, '') && hostname === anchor.hostname) {
        const target = document.querySelector(anchor.hash) || document.querySelector(`[name="${anchor.hash.slice(1)}"]`);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
  document.querySelectorAll('.js-scroll-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Activate scrollspy to add active class to navbar items on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#sideNav a');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(function(section) {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        const activeLink = document.querySelector(`#sideNav a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });

})(); // End of use strict
