function openOverlay(){
  document.querySelector(".my-name").style.opacity = "0";

  document.querySelector(".overlay").style.transitionDelay = "0";
  document.querySelector(".overlay").style.width = "100%";

  console.log(document.querySelector(".overlay-content").style.transitionDelay);

  document.querySelector(".overlay-content").style.transitionDelay = "0.75s";
  document.querySelector(".overlay-content").style.opacity = "1.0";
}

function closeOverlay(){
  document.querySelector(".overlay-content").style.transitionDelay = "0";
  document.querySelector(".overlay").style.transitionDelay = "0.75s";
  document.querySelector(".overlay").style.width = 0;
  document.querySelector(".overlay-content").style.transitionDelay = "0";

  console.log(document.querySelector(".overlay-content").style.transitionDelay);

  document.querySelector(".overlay-content").style.transitionDelay = "0";
  document.querySelector(".overlay-content").style.opacity = "0";

  document.querySelector(".my-name").style.transitionDelay = "0.75s";
  document.querySelector(".my-name").style.opacity = "1.0";
}

function jumpTo(element){
  document.querySelector(element).scrollIntoView({alignToTop: "true", behavior: "auto"});
}

particlesJS.load('particles-js', 'particles.json', function(){
  console.log('callback - particles.js config loaded');
});
