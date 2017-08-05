/* video background */
$(document).ready(function() {
    setTimeout(transition, 5000);
});

function transition()
{
    var slideA = $('#slideshow').find('div').last();
    slideA.fadeOut('slow', function(){
        slideA.insertBefore($('#slideshow').find('div').first());
        slideA.show();
        if(slideA.hasClass('video')) { $('#video')[0].play(); }
    });

    setTimeout(transition, 5000);
}

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

function preLoader() {
    setTimeout(function() { $('#preload').fadeOut(1000); }, 500);
};
