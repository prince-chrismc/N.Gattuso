/* video background */
(function($) {
    $(".video").background({
        source: {
            poster: "./images/bg-soundboard_side.jpg",
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

// image loader
$('#slideshow').imagesLoaded()
    .done( function( instance ) {
        console.log('all images successfully loaded');
        preLoader();
    })
    .fail( function() {
        console.log('all images loaded, at least one is broken');
        preLoader();
    })
    .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src );
    })
    .always( function( instance ) {
        console.log('loading');
    });


// preload
$(document).ready(function() {
    "use strict";
    $('#preload').css({
        display: 'table'
    });
});


function preLoader() {
    setTimeout(function() {
        $('#preload').delay(1000).fadeOut(1000);
    });
};
