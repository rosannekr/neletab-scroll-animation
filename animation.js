gsap.registerPlugin(ScrollTrigger);

const backToTopButton = document.querySelector("#scrollToTopBtn");

// Avoid Flash Of Unstyled Content

const init = () => {
  gsap.from(".scroll-container", { autoAlpha: 0 });
};

// Initialize timeline

const tl = gsap.timeline({
  defaults: { ease: "linear", duration: 1 },
  scrollTrigger: {
    trigger: ".scroll-container",
    scrub: true,
    start: "top top",
    end: "+=1000%",
    markers: true,
    pin: true,
    snap: {
      snapTo: "labelsDirectional",
      ease: "power1.out",
      delay: 0,
    },
    onLeave: () => {
      backToTopButton.style.display = "block";
    },
    onEnterBack: () => {
      backToTopButton.style.display = "none";
    },
  },
});

// Scale text with rotating words down on desktop

const textResize = () => {
  if (window.innerWidth > 600) {
    gsap.to("#tablet-text", { scale: 0.8, transformOrigin: "50% 50%" });
  } else {
    gsap.to("#tablet-text", { scale: 1.2, transformOrigin: "50% 50%" });
  }
};

textResize();

// Scale tablet image down depending on screen size

let tabletScale = 1;

const tabletResize = () => {
  let width = window.innerWidth;

  if (width > 700) tabletScale = 0.45;
  else if (width > 650) tabletScale = 0.5;
  else if (width > 600) tabletScale = 0.4;
  else if (width > 550) tabletScale = 0.45;
  else if (width > 500) tabletScale = 0.5;
  else if (width > 400) tabletScale = 0.6;
  else if (width > 350) tabletScale = 0.65;
  else if (width > 300) tabletScale = 0.7;
  else if (width > 280) tabletScale = 0.8;
  else if (width > 260) tabletScale = 0.9;
};

tabletResize();

// Move tablet image down depending on screen size

let tabletPosition = 0;

const tabletPositioning = () => {
  if (window.innerWidth > 600) {
    tabletPosition = 100;
  }
};

tabletPositioning();

// Timeline

tl.to("#tablets-svg .text", { y: 10, opacity: 0 })
  .to(".tablet.bathroom", {
    x: 250,
    duration: 2,
  })
  .to(
    ".tablet.bathroom",
    { scaleX: 0.7, transformOrigin: "100% 50%", duration: 2 },
    "<"
  )
  .to(
    ".tablet.multi",
    {
      x: -250,
      duration: 2,
    },
    "<"
  )
  .to(
    ".tablet.multi",
    { scaleX: 0.7, transformOrigin: "0% 50%", duration: 2 },
    "<"
  )
  .to(".tablet.multi, .tablet.bathroom", { opacity: 0 }, "-=0.8")
  .to(".tablet.window", { opacity: 0 })
  .from("#tablet-img", { opacity: 0 }, "<")
  .from("#tablet-title", { opacity: 0, y: 20, ease: "power1" })
  .from("#tablet-text", { opacity: 0, y: 20, ease: "power1" })
  .add("tabletText")
  .to("#tablet-text .word.one", { opacity: 0, y: -15 }, "+=0.5")
  .from("#tablet-text .word.two", { opacity: 0, y: 15 }, "-=0.5")
  .add("word1")
  .to("#tablet-text .word.two", { opacity: 0, y: -15 }, "+=0.5")
  .from("#tablet-text .word.three", { opacity: 0, y: 15 }, "-=0.5")
  .add("word2")
  .to("#tablet-text .word.three", { opacity: 0, y: -15 }, "+=0.5")
  .from("#tablet-text .word.four", { opacity: 0, y: 15 }, "-=0.5")
  .add("word3")
  .to("#tablet-text .word.four", { opacity: 0, y: -15 }, "+=0.5")
  .from("#tablet-text .word.five", { opacity: 0, y: 15 }, "-=0.5")
  .add("word4")
  .to("#tablet-title", { opacity: 0, y: -20, ease: "power1" }, "+=0.5")
  .to("#tablet-text", { opacity: 0, y: -10, ease: "power1" }, "<")
  .to(
    "#tablet-img",
    { scale: tabletScale, transformOrigin: "50% 50%", y: tabletPosition },
    "<"
  )
  .from(".panel.two", { yPercent: 100, duration: 1.5 }, "-=0.5")
  .from("#step1", {
    y: 20,
    opacity: 0,
  })
  .from(
    "#tip1",
    {
      opacity: 0,
    },
    "+=0.5"
  )
  .add("step1")
  .to(
    "#step1, #tip1",
    {
      y: -10,
      opacity: 0,
    },
    "+=0.5"
  )
  .from("#step2", {
    y: 20,
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
  .to("#wave-light-mask .wave-rotate, #wave-dark-mask .wave-rotate", {
    y: -30,
  })
  .from("#tip2", {
    opacity: 0,
  })
  .from("#waves", { opacity: 0.7 }, "<")
  .to("#tablet-img", { opacity: 0 }, "<")
  .add("step2")
  .to(
    "#step2, #tip2",
    {
      y: -10,
      opacity: 0,
    },
    "+=0.5"
  )
  .from("#step3", {
    y: 20,
    opacity: 0,
  })
  .from("#bottle-cap", { yPercent: -100, opacity: 0 }, "<")
  .from("#cap-mask-rect", { y: -500 }, "<")
  .to("#bottle-cap", { x: -8 }, "<")
  .fromTo("#bottle-cap", { x: -8 }, { x: 0, duration: 0.5 }, "-=0.5")
  .from(
    "#tip3",
    {
      opacity: 0,
    },
    "+=0.5"
  )
  .add("step3")
  .to(
    "#step3, #tip3",
    {
      y: -10,
      opacity: 0,
    },
    "+=0.5"
  )
  .from("#bottle-blue", { opacity: 0 })
  .to("#bottle-cap, #bottle, #waves", { opacity: 0 }, "<")
  .to("#bottle-svg", {
    attr: { viewBox: "-105 -50 425 670" },
    height: "60%",
  })
  .from("#bottle-green, #bottle-yellow", { opacity: 0, duration: 0.1 }, "<")
  .to(
    "#bottle-yellow",
    { xPercent: -33, y: -11, scale: 0.9, transformOrigin: "50% 50%" },
    "<"
  )
  .to(
    "#bottle-green",
    { xPercent: 34.5, y: -12, scale: 0.9, transformOrigin: "50% 50%" },
    "<"
  )
  .from("#tablet-images", { opacity: 0 }, "<")
  .from(
    ".animation-cta",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  )
  .add("final");

window.addEventListener("load", () => {
  init();
});

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
