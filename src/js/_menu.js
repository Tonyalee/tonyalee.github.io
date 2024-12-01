
//---------------------- GO TO PAGE
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menuCloseBtn');
    const menu = document.querySelector('#menu');

    const toggleMenu = (action) => {
      if (action === 'open') {
        menu.classList.add('menu--opening');
        setTimeout(() => {
          menu.classList.remove('menu--opening');
          menu.classList.add('menu--show');
        }, 1000); // 1秒動畫結束
      } else if (action === 'close') {
        menu.classList.add('menu--closing');
        setTimeout(() => {
          menu.classList.remove('menu--closing');
          menu.classList.remove('menu--show');
        }, 1000); // 1秒動畫結束
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
