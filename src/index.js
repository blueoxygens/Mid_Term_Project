document.addEventListener('DOMContentLoaded', function() {
  const pageLinks = document.querySelectorAll('.page-link');

  pageLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          navigateToPage(link.href);
      });
  });

  function navigateToPage(pageUrl) {
      // Add leave animation to current page
      const currentPage = document.querySelector('.container');
      currentPage.classList.add('page-transition');

      // Load new page after animation completes
      setTimeout(function() {
          window.location.href = pageUrl;
      }, 500); // Change this delay to match the duration of your animation
  }
});

