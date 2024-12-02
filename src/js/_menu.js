
//---------------------- GO TO PAGE
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menuCloseBtn');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('#menu');


    const toggleMenu = (action) => {
      if (action === 'open') {
        menuIcon.classList.add('menu-open');
        menu.classList.add('menu--opening');
        setTimeout(() => {
          menu.classList.remove('menu--opening');
          menu.classList.add('menu--show');
        }, 700); // 動畫結束
      } else if (action === 'close') {
        menuIcon.classList.remove('menu-open');
        menu.classList.add('menu--closing');
        setTimeout(() => {
          menu.classList.remove('menu--closing');
          menu.classList.remove('menu--show');
        }, 700); // 動畫結束
      }
    };

    menuButton.addEventListener('click', () => {
      if (!menu.classList.contains('menu--show')) {
        toggleMenu('open');
      } else {
        toggleMenu('close');
      }
    });
  });
})();
