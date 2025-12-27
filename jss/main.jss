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
gsap.from(".ph-title", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".ph-highlight", {
  y: 80,
  opacity: 0,
  delay: 0.4
});

gsap.from(".ph-text", {
  y: 40,
  opacity: 0,
  delay: 0.8
});
gsap.from(".services-title", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".service-card", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 0.4
});
// PAGE 4: WORK
gsap.from(".work-title", {y:80, opacity:0, duration:1, ease:"power4.out"});
gsap.from(".work-item", {y:120, opacity:0, duration:1.2, stagger:0.3});

// PAGE 5: CASE STUDY
gsap.from(".case-title", {y:80, opacity:0, duration:1, ease:"power4.out"});
gsap.from(".case-block", {y:60, opacity:0, duration:1, stagger:0.3});

// PAGE 6: ABOUT
gsap.from(".about h1", {y:80, opacity:0, duration:1, ease:"power4.out"});
gsap.from(".about p", {y:40, opacity:0, duration:1, delay:0.4});

// PAGE 7: CONTACT
gsap.from(".contact h1", {y:80, opacity:0, duration:1, ease:"power4.out"});
gsap.from(".contact .cta", {y:40, opacity:0, duration:1, delay:0.4});

// PAGE 8: END
gsap.from(".end h1", {y:60, opacity:0, duration:1, ease:"power4.out"});
gsap.from(".end p", {y:40, opacity:0, duration:1, delay:0.3});
gsap.from(".end small", {y:20, opacity:0, duration:1, delay:0.5});
