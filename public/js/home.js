function openOverlay(){
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
}
