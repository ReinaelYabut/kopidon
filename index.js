document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
  
    // Show or hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
  
    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });