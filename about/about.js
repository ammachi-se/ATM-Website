const navMenu = document.querySelector(".navigation");
const menuBtn = document.querySelector(".menu-btn");
const textNavigationReveal = new SplitType('#textNavigationReveal', { types: 'words' });


// masquer la navigation par défaut
gsap.set(navMenu, { visibility: "hidden", opacity: 0 });

// timeline pour l'animation d'ouverture
const tlMenuOpen = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "Power4.easeOut" }
});

tlMenuOpen
  .to(navMenu, { visibility: "visible" })
  .to(navMenu, { opacity: 1 })
  .set(".menu-btn", { background: "none" })
  .set(".menu-text", { textContent: "close" })
  .to(".menu-text", { color: "#F5F5F5" })
  .to(".menu-line", { backgroundColor: "#F5F5F5" }, "-=1")
  .set(".logo img", { attr: { src: "/img/logo3.png" } }, "-=1")
  .to(".navigation-img", { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'})
  .to(".navigation-medias", { y: 0 , opacity: 1})
  .to(".word", { y: 0 , opacity: 1, stagger: 0.05, delay: 0.2}, "-=1")
  .from(".navigation ul li", {
    opacity: 0,
    y: 10,
    stagger: 0.2
  });

// timeline pour l'animation de fermeture
const tlMenuClose = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "Power4.easeIn" }
});

tlMenuClose
  .to(".word", { y: 5 , opacity: 0, stagger: 0.05, delay: 0.2})
  .to(".navigation-medias", { y: 10 , opacity: 0})
  .to(".navigation-img", { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'})
  .to(".navigation ul li", {
    y: 10,
    opacity: 0,
    stagger: -0.2
  })
  .set(".menu-text", { textContent: "menu", color: "#201B1B" })
  .set(".menu-line", { backgroundColor: "#201B1B" })
  .set(".logo img", { attr: { src: "/img/logo.png" } })
  .to(navMenu, { opacity: 0 })
  .to(navMenu, { visibility: "hidden" });




// gestion des clics sur le bouton du menu pour ouvrir/fermer l'animation
menuBtn.addEventListener("click", () => {
  if (tlMenuOpen.isActive() || tlMenuClose.isActive()) {
    return false;
  }

  if (navMenu.classList.contains("is-active")) {
    tlMenuClose.restart().play();
    navMenu.classList.remove("is-active");
  } else {
    tlMenuOpen.restart().play();
    navMenu.classList.add("is-active");
  }
});





