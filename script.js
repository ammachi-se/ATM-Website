// Pre-loader

 const tl=gsap.timeline();

 function revealSite() {
    tl.to(".pre-loader",1,{
        opacity:0,
        display:"none",
        ease:"power2.inOut",
    });

    tl.to(".header-row",0.8,{
        top:"0",
        ease:"power4.inOut",stagger:{
            amount:0.2,
        },
    },
    "-=1.2"
    );

    tl.from(".navbar > *",2,{
        y:40,
        opacity:0,
        ease:"power4.inOut",
        stagger:{
            amount:0.2
        }
    },"-=1")
 }

 tl.to(".header > h1",2,{
    top:0,
    ease:"power3.inOut",
    stagger:{
        amount:0.3,

    }
 }).to(".pre-loader-btn",0.3,{
    opacity:1,
    delay:2,
 });



/* essai
gsap.timeline({
  scrollTrigger: {
    trigger: ".univers-content",
    start: "center center",
    end: "top Bottom",
    markers: true,
    pin: true,
    scrub:true
  }
})
.to(".univers-content-text", {opacity : 0})
.from(".univers-content-item-detail", {opacity: 0, y: "-100px"})
.to(".univers-content-item-detail-img", {clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})

*/


//Citation

var $cursor = $(".cursor"),
        $overlay = $(".project-overlay");

      function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        });
      }

      $(".p-1").hover(function() {
        $(".cursor").css({ "background-image": "url(img/alger6.jpg)" });
      });
      $(".p-2").hover(function() {
        $(".cursor").css({ "background-image": "url(img/alger7.jpg)" });
      });
      $(".p-3").hover(function() {
        $(".cursor").css({ "background-image": "url(img/xavo.jpg)" });
      });
      $(".p-4").hover(function() {
        $(".cursor").css({ "background-image": "url(img/alger5.jpg)" });
      });
      $(".p-5").hover(function() {
        $(".cursor").css({ "background-image": "url(img/alger.jpg)" });
      });

      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });

      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
      });




      
//Navbar sticky

var navbarSticky = document.querySelector('.navbar-sticky');
var windowHeight = window.innerHeight;
var scrollThreshold = 0.3 * windowHeight;

window.addEventListener('scroll', function() {
  if (window.scrollY >= scrollThreshold) {
    navbarSticky.style.visibility = 'visible';
    navbarSticky.style.transition = 'transform 0.3s ease';
    navbarSticky.style.transform = 'translateY(0)';
  } else {
    navbarSticky.style.transition = 'transform 0.3s ease';
    navbarSticky.style.transform = 'translateY(-100%)';
  }
});









      