// import { gsap } from "gsap/dist/gsap";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  initGASP();
  scrollGASP();
});


function initGASP() {

    let item = document.querySelectorAll('.stagger-item');
    gsap.set(item, {
        yPercent: 50,
        opacity: 0,
    })
}

function scrollGASP() {
    let item = document.querySelectorAll('.stagger-item');
    let title = document.querySelectorAll('.title');
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".container",
            trigger: ".content__profile__sec2",
            // pin: true,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
            ease: 'linear',
            toggleActions: "restart none none reverse",
            markers: true
            }
    })
    console.log(tl);
    tl.to(item, {
        duration: 0.5,
        opacity: 1,
        yPercent: 0,
        stagger: .5,
    })


    ScrollTrigger.addEventListener("scrollStart", function() {

    console.log('scrollStart ScrollTrigger', ScrollTrigger.isScrolling());
    //     console.log('scrollStart');
    //     tl.play();
    });
    // ScrollTrigger.addEventListener("scrollEnd", function() {
    //     console.log('scrollEnd');
    //     tl.reverse();
    // });
    console.log('ScrollTrigger', ScrollTrigger.isScrolling());

}