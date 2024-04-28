
function navigateToPage(pageUrl) {
  const currentPage = document.querySelector('.page-transition');
  currentPage.classList.add('page-transition-leave');

  setTimeout(() => {
      currentPage.remove();

      fetch(pageUrl)
          .then(response => response.text())
          .then(html => {
              const newPage = document.createElement('div');
              newPage.innerHTML = html;
              newPage.classList.add('page-transition');

              document.body.appendChild(newPage);
          })
          .catch(error => console.error('Error loading page:', error));
  }, 500);
}

document.getElementById('homebtn').addEventListener('click', function(event) {
  event.preventDefault();
  navigateToPage('home.html');
});

document.getElementById('aboutbtn').addEventListener('click', function(event) {
  event.preventDefault();
  navigateToPage('about.html');
});
