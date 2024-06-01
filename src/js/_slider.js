import slick from 'slick-carousel';

$(".slider").slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  initialSlide: 0,
  arrows: true,
  prevArrow: '<div class="prev slick_arrow"><svg viewBox="0 0 133 95" class="svgSprite svgSprite--arrowLeft"><use xlink:href="/images/svg-sprite.svg#arrowLeft"></use></svg></div>',
  nextArrow: '<div class="next slick_arrow"><svg viewBox="0 0 133 95" class="svgSprite svgSprite--arrowRight"><use xlink:href="/images/svg-sprite.svg#arrowRight"></use></svg></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});


document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

function initSlider() {
    // $('.center').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 3,
    //     arrows: true,
    //     responsive: [
    //         {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: true,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //         },
    //         {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: true,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //         }
    //     ]
    // });
        
};