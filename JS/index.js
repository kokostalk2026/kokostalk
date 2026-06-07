const allNavLinks = document.querySelectorAll('.nav-links li a');

allNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    allNavLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    link.style.transform = 'scale(0.96)';
    setTimeout(() => {
      link.style.transform = '';
    }, 120);
  });
});

const navbarContainer = document.querySelector('.navbar-container');
if (navbarContainer) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
      navbarContainer.style.backdropFilter = 'blur(12px)';
      navbarContainer.style.transition = 'all 0.25s ease';
    } else {
      navbarContainer.style.background = 'transparent';
      navbarContainer.style.backdropFilter = 'blur(0px)';
    }
  });
  if (window.scrollY > 10) {
    navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
    navbarContainer.style.backdropFilter = 'blur(12px)';
  }
}