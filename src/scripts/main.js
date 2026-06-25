'use strict';

function toggleMenu() {
  const openButton = document.getElementById('headerBurger');
  const closeButton = document.getElementById('burgerClose');
  const burgerMenu = document.getElementById('burgerMenu');

  const openMenu = () => {
    burgerMenu.classList.add('active');
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('active');
  };

  openButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', closeMenu);
}

toggleMenu();
