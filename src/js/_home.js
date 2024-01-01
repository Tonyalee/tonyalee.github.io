// import { gsap } from "gsap/dist/gsap";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  initGASP();
  scrollGASP();
});


function initGASP() {

    let item = document.querySelectorAll('.stagger-item');
    gsap.set(item, {
        y: 100,
        opacity: 0,
    })
}

function scrollGASP() {
    let itemsSec2 = document.querySelectorAll('.content__profile__sec2 .stagger-item');
    let title = document.querySelectorAll('.title');
    gsap.registerPlugin(ScrollTrigger);

    const tlSec2 = gsap.timeline({
        scrollTrigger: {
            scroller: ".container",
            trigger: ".content__profile__sec2",
            // pin: true,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
            ease: 'linear',
            toggleActions: "restart none none reverse",
            // markers: true
            }
    })
    // console.log(tlSec2);
    tlSec2.to(itemsSec2, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: .5,
    })

    let itemsSec3 = document.querySelectorAll('.content__profile__sec3 .stagger-item');
    const tlSec3 = gsap.timeline({
        scrollTrigger: {
            scroller: ".container",
            trigger: ".content__profile__sec3",
            // pin: true,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
            ease: 'linear',
            toggleActions: "restart none none reverse",
            // markers: true
            }
    })
    // console.log(tl);
    tlSec3.to(itemsSec3, {
        duration: 0.5,
        opacity: 1,
        y: 0,
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
    // console.log('ScrollTrigger', ScrollTrigger.isScrolling());

}