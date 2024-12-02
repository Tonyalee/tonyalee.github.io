
//---------------------- GO TO PAGE
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menuCloseBtn');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('#menu');
    let isAnimation = false

    const toggleMenu = (action) => {
      if (action === 'open') {
        isAnimation = true
        menuIcon.classList.add('menu-open');
        menu.classList.add('menu--opening');
        setTimeout(() => {
          menu.classList.remove('menu--opening');
          menu.classList.add('menu--show');
          isAnimation = false
        }, 300); // 動畫結束
      } else if (action === 'close') {
        isAnimation = true
        menuIcon.classList.remove('menu-open');
        menu.classList.add('menu--closing');
        setTimeout(() => {
          menu.classList.remove('menu--closing');
          menu.classList.remove('menu--show');
          isAnimation = false
        }, 300); // 動畫結束
      }
    };

    menuButton.addEventListener('click', () => {
      if (isAnimation) return;
      if (!menu.classList.contains('menu--show')) {
        toggleMenu('open');
      } else {
        toggleMenu('close');
      }
    });
  });
})();
