$(document).ready(function () {
    setCarousel();
});

function setCarousel() {
    $('.carousel').carousel({
        duration: 200,
        dist: 0,
        fullWidth: false,
        indicators: false,
        shift: 0,
        padding: 10,
        numVisible: 5,
    });
}

$(window).resize(function () {
    setCarousel();
});

setInterval(function () {
    $('.carousel').carousel('next');
}, 4500);