//forcing fullscreen view
$(document).ready(function () {
    HandlePadding();
});

$(window).resize(function () {
    HandlePadding();
});

var HandlePadding = function () {
    $('body').css("height", "auto");
    var dif = $(window).height() - $('body').height();
    //console.log("win: " + $(window).height() +   '   doc: ' + $(document).height() + " - body: " + $('body').height() + " = " + dif);
    var padding = $('.main-content').innerHeight() - $('.main-content').height();
    if (dif + padding >= 0)
        $('.main-content').css("padding", (dif + padding) / 2 + 'px 0');
    else
        $('.main-content').css("padding", "");
    $('body').css("height", "");
}