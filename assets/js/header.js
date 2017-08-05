/* to change menu add/rm text */
var oldWidth;
$(document).ready(function() {
    if($(document).width() <= 768)
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
    else
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");

    oldWidth = $(window).width();
});

$(window).resize(function() {
    if($(document).width() <= 768 && oldWidth > 768)
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
    else if($(document).width() > 768 && oldWidth <= 768)
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");

    oldWidth = $(window).width();
});
