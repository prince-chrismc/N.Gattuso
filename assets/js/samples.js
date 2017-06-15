var audio1 = $('#s1');
var play1 = $('.main-content').find('.fa-play').first();
var pause1 = $('.main-content').find('.fa-pause').first();
var vup1 = $('.main-content').find('.fa-volume-up').first();
var vdown1 = $('.main-content').find('.fa-volume-down').first();
var vmute1 = $('.main-content').find('.fa-volume-off').first();
var tminus1 = $('.main-content').find('p').first();
var prog1 = $('#prog1');
var tooltip1_shown = false;

var audio2 = $('#s2');
var play2 = $('.main-content').find('.fa-play').last();
var pause2 = $('.main-content').find('.fa-pause').last();
var vup2 = $('.main-content').find('.fa-volume-up').last();
var vdown2 = $('.main-content').find('.fa-volume-down').last();
var vmute2 = $('.main-content').find('.fa-volume-off').last();
var tminus2 = $('.main-content').find('p').last();
var prog2 = $('#prog2');
var tooltip2_shown = false;


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

pause1.click(pausesong1);

play2.click(function() {
    if(isPlaying(audio1)) {
        pausesong1();
    }
    playsong2();
});

pause2.click(pausesong2);

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

prog1.click(seek1);
prog2.click(seek2);
prog1.mousemove(function(e){
    var offset = this.offsetWidth;
    if(!tooltip1_shown){
        tooltip1_shown = true;
        $('#prog1').tooltip('show');
        $('.tooltip').css('margin-top', '-5px');
    }
    $('.tooltip').css('left', e.offsetX.toString() + 'px');
    $('.tooltip-inner').text(track1(e,offset));
});
prog1.mouseleave(function(){
    $('#prog1').tooltip('hide');
    tooltip1_shown = false;
})

prog2.mousemove(function(e){
    var offset = this.offsetWidth;
    if(!tooltip2_shown){
        tooltip2_shown = true;
        $('#prog2').tooltip('show');
        $('.tooltip').css('margin-top', '-5px');
    }
    $('.tooltip').css('left', e.offsetX.toString() + 'px');
    $('.tooltip-inner').text(track2(e,offset));
});
prog2.mouseleave(function(){
    $('#prog2').tooltip('hide');
    tooltip2_shown = false;
})

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

    var rem = parseInt(audio1[0].duration - audio1[0].currentTime, 10),
    mins = Math.floor(rem/60,10),
    secs = rem - mins*60;

    tminus1.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
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

function seek1(e){
    //console.log("pb1 cliked!",e);
    var percent = e.offsetX / this.offsetWidth;
    //console.log(percent);
    audio1[0].currentTime = Math.floor(percent * audio1[0].duration);
}

function track1(e,offset) {
    var percent = e.offsetX / offset;
    var time = percent * audio1[0].duration;
    mins = Math.floor(time/60,10),
    secs = Math.floor(time - mins*60);
    var text = '' + mins.toString() + ':';
    text += secs > 9 ? secs.toString() : '0' + secs.toString();
    //console.log(text);

    return text;
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

    var rem = parseInt(audio2[0].duration - audio2[0].currentTime, 10),
    mins = Math.floor(rem/60,10),
    secs = rem - mins*60;

    tminus2.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
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

function seek2(e){
    //console.log("pb2 cliked!",e);
    var percent = e.offsetX / this.offsetWidth;
    //console.log(percent);
    audio2[0].currentTime = Math.floor(percent * audio2[0].duration);
}

function track2(e,offset) {
    //console.log(e);

    //console.log(e.offsetX);
    //console.log(offset);

    var percent = e.offsetX / offset;
    //console.log(percent);
    var time = percent * audio2[0].duration;
    mins = Math.floor(time/60,10),
    secs = Math.floor(time - mins*60);

    var text = '' + mins.toString() + ':';
    text += secs > 9 ? secs.toString() : '0' + secs.toString();
    //console.log(text);

    return text;
}

/* --------------------------------------------------------------------------------------------- */

function isPlaying(audelem) { return !audelem[0].paused; }

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({delay: {show: 500, hide: 100}});
});
