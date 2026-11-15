// Progressive enhancement: without JavaScript, the navigation stays visible.
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-navigation');

if (menuButton && nav) {
  const mobileMenu = window.matchMedia('(max-width: 760px)');
  const isOpen = () => menuButton.getAttribute('aria-expanded') === 'true';

  const closeMenu = (restoreFocus = false) => {
    if (!isOpen()) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const open = !isOpen();
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen()) closeMenu(true);
  });

  document.addEventListener('click', event => {
    if (isOpen() && !nav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  // Discard stale expanded state after orientation changes or resizing to desktop.
  mobileMenu.addEventListener('change', () => closeMenu());
}

const copyrightYear = document.querySelector('#copyright-year');
if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());
