gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  defaults: { ease: "linear", duration: 1 },
  scrollTrigger: {
    trigger: ".container",
    scrub: true,
    start: "top top",
    end: "+=1000%",
    markers: true,
    pin: true,
    // toggleActions: "play pause reverse pause",
  },
});

// gsap.set("#wave-right", { xPercent: 97 });
// gsap.set("#waves", { scaleX: 2, transformOrigin: "0 50%" });

// Wave rotation

// const waveDarkRotation = gsap.to("#wave-dark-mask .wave-rotate", {
//   rotate: 360,
//   transformOrigin: "50% 50%",
//   duration: 6,
//   ease: "linear",
//   repeat: -1,
// });

// const waveLightRotation = gsap.from("#wave-light-mask .wave-rotate", {
//   rotate: 360,
//   transformOrigin: "50% 50%",
//   duration: 6,
//   ease: "linear",
//   repeat: -1,
// });

// Timeline

tl.to("#tablets-svg .text", { y: 20, opacity: 0 })
  .add("tabletMorph")
  .to(".tablet.bathroom", {
    x: 250,
    duration: 2,
  })
  .to(
    ".tablet.bathroom",
    { scaleX: 0.7, transformOrigin: "100% 50%", duration: 2 },
    "tabletMorph"
  )
  .to(
    ".tablet.multi",
    {
      x: -250,
      duration: 2,
    },
    "tabletMorph"
  )
  .to(
    ".tablet.multi",
    { scaleX: 0.7, transformOrigin: "0% 50%", duration: 2 },
    "tabletMorph"
  )
  .to(".tablet", { opacity: 0 })
  .from("#tablet-img", { opacity: 0 }, "<")
  .from("#tablet-title", { opacity: 0, y: 20, ease: "power1" })
  .from("#tablet-text", { opacity: 0, y: 20, ease: "power1" })
  .to("#tablet-title", { opacity: 0, y: -20, ease: "power1" })
  .to("#tablet-text", { opacity: 0, y: -20, ease: "power1" }, "<")
  .to("#tablet-img", { scale: 0.5, yPercent: 100, transformOrigin: "50% 50%" })
  .from(".panel.two", { yPercent: 100 }, "<")
  .from("#step1", {
    y: 50,
    opacity: 0,
  })
  .from("#tip1", {
    opacity: 0,
  })
  .to("#step1, #tip1", {
    y: -20,
    opacity: 0,
  })
  .from("#step2", {
    y: 50,
    opacity: 0,
  })
  .to(
    "#wave-dark-mask .wave-rotate",
    {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 2,
      ease: "linear",
      repeat: 0.5,
    },
    "<"
  )
  .from(
    "#wave-light-mask .wave-rotate",
    {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 2,
      ease: "linear",
      repeat: 0.5,
    },
    "<"
  )
  .from("#waves", { yPercent: 100, duration: 3 }, "<")
  .from("#tip2", {
    opacity: 0,
  })
  //   .add(waveDarkRotation.pause())
  //   .add(waveLightRotation.pause())
  //   .to(waveDarkRotation, { paused: true })
  //   .to(waveLightRotation, { paused: true })
  //   .call(() => waveDarkRotation.pause())
  //   .call(() => waveLightRotation.pause())
  .from("#waves", { opacity: 0.7 }, "<")
  .to("#tablet-img", { opacity: 0 }, "<")
  .to("#step2, #tip2", {
    y: -20,
    opacity: 0,
  })
  .from("#step3", {
    y: 50,
    opacity: 0,
  })
  .add("cap")
  .from("#bottle-cap", { yPercent: -100, opacity: 0 }, "<")
  .to("#bottle-cap", { x: -8 }, "<")
  .fromTo("#bottle-cap", { x: -8 }, { x: 0, duration: 0.5 }, "-=0.5")

  .from("#tip3", {
    opacity: 0,
  })
  .to("#step3, #tip3", {
    y: -20,
    opacity: 0,
  });
