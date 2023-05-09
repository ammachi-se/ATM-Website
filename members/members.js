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





// --------Animation des titres

// Récupérez toutes les images que vous souhaitez animer
const images = document.querySelectorAll('.content-section-right img');

// Récupérez la liste de titres
const titles = document.querySelectorAll('.content-section-left ul li');

// Ajoutez un écouteur d'événement sur le hover pour chaque titre
titles.forEach((title, index) => {
  title.addEventListener('mouseover', () => {
    // Changez l'opacité de toutes les images en fonction de l'index du titre survolé
    images.forEach((image, imageIndex) => {
      image.style.opacity = imageIndex === index ? '1' : '0';
    });
  });
});

// Ajoutez un écouteur d'événement pour le mouseleave sur la liste de titres
document.querySelector('.content-section-left ul').addEventListener('mouseleave', () => {
  // Réinitialisez l'opacité de toutes les images à 0
  images.forEach((image) => {
    image.style.opacity = '0';
  });
});

