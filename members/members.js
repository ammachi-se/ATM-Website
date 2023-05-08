let parent = document.querySelectorAll("[data-collapse]");
parent.forEach((element) => {
let clickTarget = element.querySelector("*");
let collapseElement = element.nextElementSibling;
let collapseElementChildren = collapseElement.children;

let tl = gsap.timeline({
    reversed: true,
    paused: true,
});

  tl.from(
    collapseElement,
    {
      height: 0,
      duration: 1.6,
      ease: "expo.inOut",
    },
    "open"
  );
  tl.staggerFrom(
    collapseElementChildren,
    1,
    {
      autoAlpha: 0,
      y: "40%",
      ease: "expo.inOut",
    },
    0.08,
    "open+=.1"
  );

  clickTarget.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
});


