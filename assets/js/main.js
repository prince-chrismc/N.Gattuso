/* video background */
(function($) {
    $(".video").background({
        source: {
            poster: "./images/camera.jpg",
            webm: "./images/bg-video.webm",
            ogg: "./images/bg-video.ogv",
            mp4: "./images/bg-video.mp4"
    }});
})(jQuery);

/* slideshow */
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#slideshow');
}, 5000);