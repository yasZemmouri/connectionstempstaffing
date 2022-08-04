"use strict";

const parallax = document.getElementById("hero");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY=offset * 0.9 + "px";

})