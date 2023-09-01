// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A different event, load , should be used only to detect a fully-loaded page. I think if you put the script in the footer you wouldn't need to use dom content loaded since the script will be triggered after html content

// document.addEventListener('DOMContentLoaded', () => {
"use strict";
const preloaderEl = document.getElementById('preloader');
const heroEl = document.getElementById("hero");
const bannerEl = document.getElementById('banner');
const headerEl = document.getElementsByTagName('header')[0];

// Preloader
if (preloaderEl) {
    window.addEventListener('load', () => {
        // remove an entire element from the dom 
        preloaderEl.remove();
    });
}

//parallax function
window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    if (bannerEl) {
        bannerEl.style.transform = `perspective(1000px) rotateX(${offset * 0.14}deg)`;
    } else if (heroEl) {
        heroEl.style.backgroundPositionY = offset * 0.5 + "px";
    }

    // if (offset > 200) {
    //     headerEl.style.position = "absolute";
    //     headerEl.style.top = "0";
    // } else headerEl.style.position = "fixed";
    console.log('offset: ' + offset);
    console.log('position: ' + offset * 0.5);
})
// });

// function scrollToElement(elementID) {
//     const element = document.getElementById('conclusion');
//     const offset = 180; // Set the offset here
//     const elementPosition = element.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - offset;

//     window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth" // Optional: Smooth scrolling animation
//     });
// }








