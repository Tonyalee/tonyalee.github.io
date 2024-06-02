
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
