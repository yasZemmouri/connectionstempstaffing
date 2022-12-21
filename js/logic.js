
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const heroEl = document.getElementById("hero");
    const bannerEl = document.getElementById('banner')

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
});
