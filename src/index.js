document.addEventListener('DOMContentLoaded', function() {
  const pageLinks = document.querySelectorAll('.page-link');

  pageLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          navigateToPage(link.href);
      });
  });

  function navigateToPage(pageUrl) {
      const currentPage = document.querySelector('.container');
      currentPage.classList.add('page-transition');

      setTimeout(function() {
          window.location.href = pageUrl;
      }, 500);
  }
});