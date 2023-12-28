// import { gsap } from "gsap/dist/gsap";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  scrollGASP();
});


function scrollGASP() {
    let item = document.querySelectorAll('.stagger-item');
    let title = document.querySelectorAll('.title');

    // gsap.to(item, {
    //     opacity: 0, duration: 0.5,
    // });

    // gsap.set('.stagger-item', {
    //     yPercent: 50,
    //     opacity: 1,
    // });
    // // gsap.to(item, {
    // //     yPercent: 0,
    // //     opacity: 1,
    // //     stagger: 0.05,
    // //     ease: "back-out",
    // //     duration: 0.5,
    // //     scrollTrigger: {
    // //         trigger: ".content__profile__sec1",
    // //         start: "top top",
    // //         markers: true,
    // //         toggleActions: "restart none none reverse"
    // //     }
    // // });

    //   const tlEE = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: title,
    //     start: 'top center',
    //     end: 'bottom top',
    //     scrub: true,
    //     markers: true
    //   }
    // })

    // tlEE
    //   .to('.stagger-item', { opacity: 1, 
    //     yPercent: 100, duration: 0.5 })
    //   .to(sidebar, { opacity: 1, duration: 0.5 })
    //   .to(content, { opacity: 1, duration: 0.5 })

    // gsap.to(title, {
    // x: 700,
    // duration: 3,
    // scrollTrigger: { trigger: title,
    // start: 'top top',
    // end: 'bottom top',
    //     }
    // });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        scroller: ".content" // this is what you're missing
        // your other options
    });


    const tl = gsap.timeline({
    scrollTrigger: {
        scroller: ".content",
        trigger: '.content__profile__sec2',
        // pin: true,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        ease: 'linear',
        toggleActions: "restart reverse none none",
        }
    })
    console.log(tl);
    tl.to(item, {
        duration: 1,
        opacity: 0,
        // stagger: .5,
    })
    tl.to(title, {
        x: 700,
        duration: 3,
        scrollTrigger: { trigger: title,
        start: 'top top',
        end: 'bottom top',
        }
    });

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
    // tl.to('.stagger-item', {
    
    // marginBottom: -15,
    // stagger: .5,
    // }, '<')

}