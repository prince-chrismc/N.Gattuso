/* video background */
(function($) {
    $(".video").background({
        source: {
            poster: "./images/ex_equip.jpg",
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
$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('loading');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
    preLoader();
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log('image is ' + result + ' for ' + image.img.src );
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
