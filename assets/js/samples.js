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
audio2[0].volume = 0.8;
pause2.hide();

play1.click(function() {
    if(isPlaying(audio2)) {
        pausesong2();
    }
    playsong1();
});

pause1.click(function() {
   pausesong1();
});

play2.click(function() {
    if(isPlaying(audio1)) {
        pausesong1();
    }
    playsong2();
});

pause2.click(function() {
   pausesong2();
});

vup1.click(volumeUp1);
vdown1.click(volumeDown1);
vmute1.click(toggleMuteAudio1);

vup2.click(volumeUp2);
vdown2.click(volumeDown2);
vmute2.click(toggleMuteAudio2);

audio1[0].addEventListener('ended', function() {
    audio1[0].currentTime = 0;
    pause1.hide();
    play1.show();
});

audio2[0].addEventListener('ended', function() {
    audio2[0].currentTime = 0;
    pause2.hide();
    play2.show();
});





/* ----------------------------------------------------------------------- */
/*                             UTILITY CODE !                              */
/* ----------------------------------------------------------------------- */
function playsong1() {
   audio1.trigger('play');
    pause1.toggle();
    play1.toggle();
}

function pausesong1() {
   audio1.trigger('pause');
    play1.toggle();
    pause1.toggle();
}

function update1() {
    //console.log('timeupdate');
    $('.main-content').find('.progress-bar').first().css('width', ((audio1[0].currentTime / audio1[0].duration)*100) + '%').attr('aria-valuenow', (audio1[0].currentTime / audio1[0].duration)*100);
};

function volumeUp1(){
    var volume = audio1.prop("volume")+0.2;
    if(volume >= 1){
        volume = 1;
    }
    audio1.prop("volume",volume);
}

function volumeDown1(){
    var volume = audio1.prop("volume")-0.2;
    if(volume <= 0){
        volume = 0;
    }
    audio1.prop("volume",volume);
}

function toggleMuteAudio1(){
    audio1.prop("muted",!audio1.prop("muted"));
}

/* ----------------------------------------------------------------------- */
function playsong2() {
   audio2.trigger('play');
    pause2.toggle();
    play2.toggle();
}

function pausesong2() {
   audio2.trigger('pause');
    play2.toggle();
    pause2.toggle();
}

function update2() {
    //console.log('timeupdate');
    $('.main-content').find('.progress-bar').last().css('width', ((audio2[0].currentTime / audio2[0].duration)*100) + '%').attr('aria-valuenow', (audio2[0].currentTime / audio2[0].duration)*100);
};

function volumeUp2(){
    var volume = audio2.prop("volume")+0.2;
    if(volume >= 1){
        volume = 1;
    }
    audio2.prop("volume",volume);
}

function volumeDown2(){
    var volume = audio2.prop("volume")-0.2;
    if(volume <= 0){
        volume = 0;
    }
    audio2.prop("volume",volume);
}

function toggleMuteAudio2(){
    audio2.prop("muted",!audio2.prop("muted"));
}


function isPlaying(audelem) { return !audelem[0].paused; }

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({delay: {show: 500, hide: 100}});
});
