var audio1 = $('#s1');
var play1 = $('.main-content').find('.fa-play').first();
var pause1 = $('.main-content').find('.fa-pause').first();
var vup1 = $('.main-content').find('.fa-volume-up').first();
var vdown1 = $('.main-content').find('.fa-volume-down').first();
var vmute1 = $('.main-content').find('.fa-volume-off').first();

var audio2 = $('#s2');
var play2 = $('.main-content').find('.fa-play').last();
var pause2 = $('.main-content').find('.fa-pause').last();
var vup2 = $('.main-content').find('.fa-volume-up').last();
var vdown2 = $('.main-content').find('.fa-volume-down').last();
var vmute2 = $('.main-content').find('.fa-volume-off').last();

audio1[0].volume = 0.8;
pause1.hide();

play1.click(function() {
   audio1.trigger('play');
    pause1.toggle();
    play1.toggle();
});

pause1.click(function() {
   audio1.trigger('pause');
    play1.toggle();
    pause1.toggle();
});

vup1.click(volumeUp);
vdown1.click(volumeDown);
vmute1.click(toggleMuteAudio);

audio1[0].addEventListener('ended', function() {
    audio1[0].currentTime = 0;
    pause1.hide();
    play1.show();
});

function update() {
    //console.log('timeupdate');
    $('.main-content').find('.progress-bar').first().css('width', ((audio1[0].currentTime / audio1[0].duration)*100) + '%').attr('aria-valuenow', (audio1[0].currentTime / audio1[0].duration)*100);
};

function volumeUp(){
    var volume = audio1.prop("volume")+0.2;
    if(volume >= 1){
        volume = 1;
    }
    audio1.prop("volume",volume);
}

function volumeDown(){
    var volume = audio1.prop("volume")-0.2;
    if(volume <= 0){
        volume = 0;
    }
    audio1.prop("volume",volume);
}

function toggleMuteAudio(){
    audio1.prop("muted",!audio1.prop("muted"));
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({delay: {show: 500, hide: 100}});
});
