import slick from 'slick-carousel';

$(".center").slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
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