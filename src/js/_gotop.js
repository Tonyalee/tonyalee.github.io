
//---------------------- GOTOP
(function () {
  // Amount of scrolling before button is shown/hidden.
  const offset = 50;
  // Fade duration
  const duration = 500;
  const screenHeight = document.querySelector(".container").offsetHeight;
  const totalHeight = document.querySelector(".content").offsetHeight;
  const r = document.querySelector(':root');

  // Toggle view of button when scrolling.
  $('.container').on('scroll',function(){

    // console.log('screenHeight', screenHeight, 'and totalHeight', totalHeight)
    // console.log('$(this).scrollTop()', $(this).scrollTop())
    //- header
    if ($(this).scrollTop() > offset) {
      $('.header-work').addClass('header-work--min');
    } else {
      $('.header-work').removeClass('header-work--min');
    }
    //- gotop
    if ($(this).scrollTop() > (totalHeight - (screenHeight + screenHeight))) {
      $('.topLink').addClass('show');
    } else {
      $('.topLink').removeClass('show');
    }
    // if ($(this).scrollTop() > (totalHeight - 612)) {
    //   r.style.setProperty('--footer-height', '120px');
    // } else {
    //   r.style.setProperty('--footer-height', '60px');
    // }
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
