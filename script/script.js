gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ repeat: -1 });

gsap.to('#feuille-1', {
    x: "110vw", repeat: -1, duration: 5, rotation: 180
})

gsap.to('#feuille-2', {
    x: "110vw", repeat: -1, duration: 5, rotation: 180
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

