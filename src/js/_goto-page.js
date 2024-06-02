
//---------------------- GO TO PAGE
(function () {
  const pages = [
    '/index.html',
    '/uiux.html',
    '/game.html',
    '/data.html',
    '/team.html',
    '/branding.html'
  ];

  const headerClass = [
    '.header-work-content__item.linkHome',
    '.header-work-content__item.linkUIUX',
    '.header-work-content__item.linkGame',
    '.header-work-content__item.linkData',
    '.header-work-content__item.linkTeam',
    '.header-work-content__item.linkBranding',
  ]

  let currentIdx = pages.findIndex((page) => page === location.pathname);

  let header = document.querySelector(headerClass[currentIdx]);
  header.classList.add('active');
  
  function switchPage(idx) {
    if (idx > 5) {
      idx = 0;
    } else if (idx < 0) {
      idx = 5;
    }

    location.href = pages[idx];
  }

  // 
  $('#goPrev').on('click',function(event) {
    event.preventDefault();
    switchPage(currentIdx-1);
  });
  $('#goNext').on('click',function(event) {
    event.preventDefault();
    switchPage(currentIdx+1);
  });
})();
