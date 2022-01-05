import { gsap, ScrollTrigger } from "./node_modules/gsap/all.js";

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".scroll-container");
const containerWidth = container.offsetWidth;

let duration = 0.5,
  sections = gsap.utils.toArray(".section"),
  sectionIncrement = duration / (sections.length - 1),
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: `+=${containerWidth * (sections.length - 1)}`,
    },
  });

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none",
});

sections.forEach((section, index) => {
  const title = section.querySelector(".title");

  gsap.to(title, {
    xPercent: -100 * (sections.length - 1),
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
      trigger: section,
      containerAnimation: tl,
      start: "left center",
      toggleActions: "play none none reverse",
      id: index,
    },
  });
});
