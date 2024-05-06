

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ repeat: -1 });

gsap.to('#feuille-1', {
    x: "110vw", repeat: -1, duration: 5, rotation: 180
})

gsap.to('#feuille-2', {
    x: "150vw", repeat: -1, duration: 5, rotation: 180
})


gsap.to('#grand_pere', {
    x: "5vw", repeat: -1, duration: 5,
})

gsap.to('#soldat_rome', {
    x: "5vw", repeat: -1, duration: 5,
})

gsap.to('#soldat_future', {
    x: "-5vw", repeat: -1, duration: 5,
})

gsap.to('#ours', {
    x: "-5vw", repeat: -1, duration: 5,
})



timeline.to('.fleche-01', {
    opacity: 1,
    duration: 0.5, 
}).to('.fleche-01', {
    opacity: 0,
    duration: 0.5, 
    delay: 0.1 
});

timeline.to('.fleche-02', {
    opacity: 1,
    duration: 0.5, 
}).to('.fleche-02', {
    opacity: 0,
    duration: 0.5, 
    delay: 0.1
});

timeline.to('.fleche-03', {
    opacity: 1,
    duration: 0.5, 
}).to('.fleche-03', {
    opacity: 0,
    duration: 0.5, 
    delay: 0.1
});

let chapter1 = gsap.timeline({
    scrollTrigger: {
        markers: true,
        scrub: true,
        end: 'bottom top',
        pin: true,
        trigger: "#chap-1, .jack, #chap-titre-1, .micro-big, #micro-text-1, #micro-text-2, #cercle-transition"
    }
})
.to("#chap-1", {opacity: 1, duration: 5})
.to("#chap-titre-1", {opacity: 1, duration: 10})
.to('.jack', {x: "5vw", duration: 5, opacity: 1})
.to('.micro-big', {scale: 1, duration: 5})
.to('#micro-text-1', {duration: 5, opacity: 1})
.to('#micro-text-1', {duration: 5, opacity: 0})
.to('#micro-text-2', {duration: 5, opacity: 1})
.to('#cercle-transition', {scale: 12, duration: 10});

let chapter2 = gsap.timeline({
    scrollTrigger: {
        markers: true,
        scrub: true,
        pin: true,
        trigger: "#chap-2, #cercle-transition-2"
    }
})
.to('#cercle-transition-2', {scale: 0, duration: 10})
.to('#dinosaure', { x: "5vw", opacity: 1, duration: 5,})
