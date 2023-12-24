
//---------------------- GOTOP
(function () {
  // Amount of scrolling before button is shown/hidden.
  var offset = 50;
  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $('.wrapper').on('scroll',function(){
    console.log('wwww',$(this).scrollTop());
    if ($(this).scrollTop() > offset) {
      $('.topLink').addClass('show');
    } else {
      $('.topLink').removeClass('show');
    }
  });

  // Scroll to top when button is clicked.
  $('.topLink').on('click',function(event) {
    event.preventDefault();
    $('.wrapper').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
})();
