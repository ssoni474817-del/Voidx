gsap.from(".logo", {
  opacity: 0,
  y: -20,
  duration: 1
});

gsap.from(".hero-title", {
  y: 120,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

gsap.from(".hero-sub", {
  y: 40,
  opacity: 0,
  delay: 0.6
});

gsap.from(".cta", {
  opacity: 0,
  y: 30,
  delay: 1,
  stagger: 0.2
});

gsap.from(".scroll-hint", {
  opacity: 0,
  delay: 1.8
});
