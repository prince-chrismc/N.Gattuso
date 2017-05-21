var audio = $('#s1');
var play = $('.fa-play');
var pause = $('.fa-pause');
var vup = $('.fa-volume-up');
var vdown = $('.fa-volume-down');
var vmute = $('.fa-volume-off');

audio[0].volume = 0.8;
pause.hide();

play.click(function() {
   audio.trigger('play');
    pause.toggle();
    play.toggle();
});

pause.click(function() {
   audio.trigger('pause');
    play.toggle();
    pause.toggle();
});

vup.click(volumeUp);
vdown.click(volumeDown);
vmute.click(toggleMuteAudio);

audio[0].addEventListener('ended', function() {
    audio[0].currentTime = 0;
    pause.hide();
    play.show();
});

function update() {
    //console.log('timeupdate');
    $('.progress-bar').css('width', ((audio[0].currentTime / audio[0].duration)*100) + '%').attr('aria-valuenow', (audio[0].currentTime / audio[0].duration)*100);
};

function volumeUp(){
    var volume = audio.prop("volume")+0.2;
    if(volume >= 1){
        volume = 1;
    }
    audio.prop("volume",volume);
}

function volumeDown(){
    var volume = audio.prop("volume")-0.2;
    if(volume <= 0){
        volume = 0;
    }
    audio.prop("volume",volume);
}

function toggleMuteAudio(){
    audio.prop("muted",!audio.prop("muted"));
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({delay: {show: 500, hide: 100}});
});
