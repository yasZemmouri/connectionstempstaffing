"use strict";

const heroEl = document.getElementById("hero");

//parallax function
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    heroEl.style.backgroundPositionY=offset * 0.5 + "px";
    console.log('offcet: '+offset);
    console.log('position: '+offset*0.5);


})