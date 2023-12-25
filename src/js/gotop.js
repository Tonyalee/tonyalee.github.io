
//---------------------- GOTOP
(function () {
  // Amount of scrolling before button is shown/hidden.
  var offset = 50;
  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $('.container').on('scroll',function(){
    if ($(this).scrollTop() > offset) {
      $('.topLink').addClass('show');
      $('.header-work').addClass('header-work--min');
    } else {
      $('.topLink').removeClass('show');
      $('.header-work').removeClass('header-work--min');
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
