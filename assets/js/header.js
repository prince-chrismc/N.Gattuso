/* to change menu add/rm text */
$(document).ready(function() {
    if($(document).width() <= 768)
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
    else
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");
});

$(window).resize(function() {
    if($(document).width() <= 768)
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
    else
        $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");
});
