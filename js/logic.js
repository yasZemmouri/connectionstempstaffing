// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A different event, load , should be used only to detect a fully-loaded page. I think if you put the script in the footer you wouldn't need to use dom content loaded since the script will be triggered after html content

// document.addEventListener('DOMContentLoaded', () => {
"use strict";
const preloaderEl = document.getElementById('preloader');
const heroEl = document.getElementById("hero");
const bannerEl = document.getElementById('banner');

// Preloader
if (preloaderEl) {
    window.addEventListener('load', () => {
        // remove an entire element from the dom 
        preloaderEl.remove();
    });
}

//parallax function
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    if (bannerEl) {
        bannerEl.style.transform = `perspective(1000px) rotateX(${offset * 0.14}deg)`;
    } else if (heroEl) {
        heroEl.style.backgroundPositionY = offset * 0.5 + "px";
    }
    console.log('offset: ' + offset);
    console.log('position: ' + offset * 0.5);
})
// });
