AOS.init();

const tl1 = gsap.timeline({
    defaults: {
        ease: "power2.inOut",
        duration: 1
    }
});

tl1.from('img', {
        x: '10',
        opacity: 0
    })
    .from('.heading-box', {
        x: '-100',
        opacity: 0
    }, "-=1")
    .from('h1', {
        y: 20,
        clipPath: 'inset(0 0 100% 0)'
    }, "-=2")
    .from('.heading-secondary-text', { y: 20, clipPath: 'inset(0 0 100% 0)' }, "-=.8")
    .from('p', {
        x: '10',
        opacity: 0
    }, "-=2")



// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.container',
//         ease: "power1.inOut",
//         start: "top top", // when the top of the trigger hits the top of the viewport
//     }
// });

// tl.from("#whatIDo", { x: 50, opacity: 1, duration: 1 })
//     .from("#skills", { x: -50, opacity: 1, duration: 1 })
//     .from("#about", { x: 50, opacity: 1, duration: 1 })
//     .from("#contact", { x: -50, opacity: 1, duration: 1 })
//     .from(".copyright-text", { y: 50, opacity: 1, duration: 1 })