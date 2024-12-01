
//---------------------- GOTOP
(function () {
  // Amount of scrolling before button is shown/hidden.
  const offset = 50;
  // Fade duration
  const duration = 500;
  const screenHeight = document.body.offsetHeight;
  const totalHeight = document.querySelector(".content").offsetHeight;
  const r = document.querySelector(':root');

  // Toggle view of button when scrolling.
  $('.container').on('scroll',function(){
    const scrollPosition = $(this).scrollTop();
    const containerHeight = $(this).height();
    const contentHeight = totalHeight;

    //- header
    if (scrollPosition > offset) {
      $('.header-work').addClass('header-work--min');
    } else {
      $('.header-work').removeClass('header-work--min');
    }

    //- gotop
    if (scrollPosition > (totalHeight - (screenHeight + screenHeight))) {
      $('.topLink').addClass('show');
    } else {
      $('.topLink').removeClass('show');
    }

    //- footer
    if (scrollPosition + containerHeight >= contentHeight - 20) {
      $('.footer-work').addClass('footer-work--show');
    } else {
      $('.footer-work').removeClass('footer-work--show');
    }

  });

  // Scroll to top when button is clicked.
  $('.topLink').on('click',function(event) {
    event.preventDefault();
    $('.container').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
})();
