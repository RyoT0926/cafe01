document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburgerMenu.addEventListener('click', () => {
      mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
  });
});
