gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ repeat: -1 });

gsap.to("#feuille-1", {
  x: "110vw",
  repeat: -1,
  duration: 5,
  rotation: 180,
});

gsap.to("#feuille-2", {
  x: "150vw",
  repeat: -1,
  duration: 5,
  rotation: 180,
});



timeline
  .to(".fleche-01", {
    opacity: 1,
    duration: 0.5,
  })
  .to(".fleche-01", {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
  });

timeline
  .to(".fleche-02", {
    opacity: 1,
    duration: 0.5,
  })
  .to(".fleche-02", {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
  });

timeline
  .to(".fleche-03", {
    opacity: 1,
    duration: 0.5,
  })
  .to(".fleche-03", {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
  });

// Chapitre 1
let chapter1 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=12000",
      pin: true,
      trigger: "#chap-1",
    },
  })
  .to("#chap-1", { opacity: 1, duration: 20 })
  .to("#chap-titre-1", { opacity: 1, duration: 10 })
  .to("#chap-titre-1", { opacity: 0, duration: 10 })
  .to("#date-1", { opacity: 1, duration: 10 })
  .to("#date-1", { opacity: 0, duration: 10 })
  .to(".jack", { x: "5vw", duration: 10, opacity: 1 })
  .to(".dialog-1", { opacity: 1, duration: 10 })
  .to(".dialog-1", { opacity: 0, duration: 10 })
  .to(".micro-big", { scale: 1, duration: 25 })
  .to("#micro-text-1", { duration: 10, opacity: 1 })
  .to("#micro-text-1", { duration: 10, opacity: 0 })
  .to("#micro-text-2", { duration: 10, opacity: 1 })
  .to(".dialog-2", { opacity: 1, duration: 10 })
  .to(".dialog-2", { opacity: 0, duration: 10 })
  .to("#cercle-transition", { scale: 12, duration: 10 });

// Chapitre 2
let chapter2 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      start: "90% bottom",
      end: "+=12000",
      pin: true,
      trigger: "#chap-2",
    },
  })
  .to("#cercle-transition-2", { scale: 0, duration: 10 })
  .to("#chap-titre-2", { opacity: 1, duration: 30 })
  .to("#chap-titre-2", { opacity: 0, duration: 30 })
  .to("#date-2", { opacity: 1, duration: 10 })
  .to("#date-2", { opacity: 0, duration: 10 })
  .to(".dialog-3", { opacity: 1, duration: 10 })
  .to(".dialog-3", { opacity: 0, duration: 10 })
  .to("#dinosaure", { x: "5vw", opacity: 1, duration: 10 })
  .to(".danger", { opacity: 1, duration: 10 })
  .to(".dialog-4", { opacity: 1, duration: 10 })
  .to(".dialog-4", { opacity: 0, duration: 10 })
  .to(".marche", { opacity: 1, duration: 10 })
  .to("#cercle-transition-2", { scale: 12, duration: 10 })
  .to("#cercle-transition-3", { scale: 12, duration: 10 });

//Chapitre 3
let chapter3 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=12000",
      pin: true,
      trigger: "#chap-3",
    },
  })
  .to("#cercle-transition-3", { scale: 0, duration: 10 })
  .to("#cercle-transition-2", { scale: 0, duration: 10 })
  .to("#chap-titre-3", { opacity: 1, duration: 10 })
  .to("#chap-titre-3", { opacity: 0, duration: 10 })
  .to("#date-3", { opacity: 1, duration: 10 })
  .to("#date-3", { opacity: 0, duration: 10 })
  .to(".dialog-5", { opacity: 1, duration: 10 })
  .to(".dialog-5", { opacity: 0, duration: 10 })
  .to("#bg-2", { opacity: 1, duration: 15 })
  .to(".jack-3", { opacity: 1, duration: 10 })
  .to("#soldat_rome", { x: "5vw", duration: 5, opacity: 1 })
  .to(".dialog-6", { opacity: 1, duration: 10 })
  .to("#transition-slide-1", { x: "-250vw", duration: 15 });

//Chapitre 4
gsap.registerPlugin(DrawSVGPlugin);
let chapter4 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=8000",
      pin: true,
      trigger: "#chap-4",
    },
  })
  .to("#transition-slide-1", { x: "-550vw"})
  .fromTo("#ligne", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
  .to("#cercle-transition-2", { scale: 12, duration: 10 });
  gsap.to("#cloud-1", {x: "-20vw", scrollTrigger: {trigger: "#chap-4", scrub: true, end: "+=8000"} });
  gsap.to("#cloud-2", {x: "-20vw", scrollTrigger: {trigger: "#chap-4", scrub: true, end: "+=8000"} });
  gsap.to("#soldat_future", {x: "-25vw", scrollTrigger: {trigger: "#chap-4", scrub: true, end: "+=6000"} });
  gsap.to(".jack-4", {x: "-25vw", scrollTrigger: {trigger: "#chap-4", scrub: true}, end: "+=6000"});
  gsap.to("#ours", {x: "-25vw", scrollTrigger: {trigger: "#chap-4", scrub: true}, end: "+=6000"});
//Chapitre 5

gsap.registerPlugin(MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, polygon");
gsap.to("#cercle", {
  morphSVG: "#etoile",
  repeat: -1,
  duration: 2,
  //rotation: '360deg'
});

let chapter5 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=6000",
      pin: true,
      trigger: "#chap-5",
    },
  })
  .to("#cercle-transition-2", { scale: 0, duration: 10 });

  let chapter52 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=3600",
      pin: true,
      trigger: "#chap-5-2",
    },
  })
  .to("#grand_pere", {
    x: "5vw",
    duration: 5,
    opacity: 1
  });

  let chapter6 = gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      end: "+=6000",
      pin: true,
      trigger: "#chap-6",
    },
  })
  .to(".dialog-10", { opacity: 1, duration: 10 })
  .to(".dialog-10", { opacity: 0, duration: 10 })
  .to(".fin", { opacity: 1, duration: 10 })
  .to(".fin", { opacity: 0, duration: 10 });
