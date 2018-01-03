//https://stackoverflow.com/a/20548330/8480874

var g_SongPlaying = false;
var g_PauseEvent = new CustomEvent("Pause Song", { "detail": "Event to let any playing song know it needs to pause" });

function Sample(obj, title, desc, src_audio, src_cover) {

    // safety check for myself...
    if( ! $(obj).hasClass('audio_box') ) {
        alert('dumn ass u need to pass a .audio_box!!');
    }
    this.root = $(obj)[0];
    this.title = title;
    this.desc = desc;
    this.id = hash(src_audio);

    generateHTML(this, src_audio, src_cover);

    this.audio = $('#audio' + this.id);
    this.play_btn = $('#play_btn' + this.id);    
    this.pause_btn = $('#pause_btn' + this.id);
    this.volume_btn = $('#volume_btn' + this.id);
    this.range = $('#range' + this.id);
    this.slider = $('#slider' + this.id);
    this.prog = $('#prog' + this.id);
    this.prog.tooltip_shown = false;
    this.prog_bar = $('#prog_bar' + this.id);
    this.time = $('#timestamp' + this.id);

    /* init members */
    this.audio[0].volume = 0.8;
    this.pause_btn.hide();
    this.range.hide();

    /* Member Functions */
    this.play = function() {
        document.dispatchEvent(g_PauseEvent);
        while(g_SongPlaying) { }
        $(this).toggle();
        $('#' + this.id.replace('play', 'pause')).toggle();
        g_SongPlaying = true;
        $('#' + this.id.replace('play_btn', 'audio')).trigger('play');
    }

    this.pause = function() {
        this.audio.trigger('pause');
        g_SongPlaying = false;
        this.play_btn.show();
        this.pause_btn.hide();
    }

    this.stop = function() {
        this.audio.trigger('pause');
        this.audio.currentTime = 0;
        g_SongPlaying = false;
        this.play_btn.show();
        this.pause_btn.hide();
    }

    this.setTooltip = function(e) {
        var offset = this.offsetWidth;
        if( ! this.tooltip_shown ) {
            this.tooltip_shown = true;
            $(this).tooltip('show');
            $('.tooltip').css('margin-top', '-5px');
        }
        $('.tooltip').css('left', (e.offsetX - 6).toString() + 'px');
        $('.tooltip-inner').text( track(e,offset, this.id.replace('prog', '')) );
    }

    this.removeTooltip = function() {
        $(this).tooltip('hide');
        this.tooltip_shown = false;
    }

    this.seek = function(e) {
        //console.log("pb1 cliked!",e);
        var percent = e.offsetX / this.prog.offsetWidth;
        //console.log(percent);
        this.audio[0].currentTime = Math.floor(percent * this.audio[0].duration);
    }

    this.update = function() {
        //console.log('timeupdate');
        this.prog_bar.css('width', ((this.audio[0].currentTime / this.audio[0].duration)*100) + '%').attr('aria-valuenow', (this.audio[0].currentTime / this.audio[0].duration)*100);

        var rem = parseInt(this.audio[0].duration - this.audio[0].currentTime, 10),
        mins = Math.floor(rem/60,10),
        secs = rem - mins*60;

        this.time.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
    }

    this.showVolumeButton = function(id) {
        $('#range' + id).hide();
        $('#volume_btn' + id).show();
    }

    this.showVolumeSlider = function() {
        $('#volume_btn' + this.id).hide();
        $('#range' + this.id).show();
    }

    /* event listeners */
    this.play_btn.click(this.play);
    this.pause_btn.click(this.pause);
    this.root.addEventListener(g_PauseEvent, this.pause);
    this.volume_btn.hover(this.showVolumeSlider(this.id));
    this.range.mouseleave(this.showVolumeButton(this.id));
    this.audio[0].addEventListener('ended', this.stop);
    this.audio[0].addEventListener('ontimeupdate', this.update);
    this.prog.click(this.seek);
    this.prog.mousemove(this.setTooltip);
    this.prog.mouseleave(this.removeTooltip);

    // utility functions
    function hash(str) {
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
            chr   = str.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    function generateHTML(obj, src_audio, src_cover) {
        obj.root.innerHTML += '<div class="col-sm-6    col-md-4"><img class="media-object" src="' + src_cover + '" alt="..." style="height: 250px; width: auto; max-width: 100%; margin: auto;"></div>';
        obj.root.innerHTML += '<div class="col-sm-6    col-md-8"><h2 class="media-heading">' + obj.title + ' by <i>N.Gattuso</i></h2><h4>' + obj.desc + '</h4><div class="menu-controls"><i id="play_btn' + obj.id + '" class="fa fa-play fa-3x" data-toggle="tooltip" title="Play"></i><i id="pause_btn' + obj.id + '" class="fa fa-pause fa-3x" data-toggle="tooltip" title="Pause"></i><i id="volume_btn' + obj.id + '" class="fa fa-volume-down fa-3x" data-toggle="tooltip" title="Volume Adjust"></i><div id="range' + obj.id + '" class="range-slider" data-toggle="tooltip" title="Volume Adjust"><input id="slider' + obj.id + '" class="range-slider__range" type="range" value="80" min="0" max="100" step="5" for="#s2"><span class="range-slider__value">0</span></div></div><div id="prog' + obj.id + '" class="progress" data-toggle="tooltip" title="." data-trigger="manual"><div id="prog_bar' + obj.id + '" class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div><div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div></div><div class="row"><p id="timestamp' + obj.id + '" style="float: right">0:00</p></div><audio id="audio' + obj.id + '" src="' + src_audio + '" preload="metadata"></audio></div></div>';
    }
    
    function track(e, offset, id) {
        var percent = e.offsetX / offset;
        var audio = $('#audio' + id);
        var time = percent * audio[0].duration;
        mins = Math.floor(time/60,10),
        secs = Math.floor(time - mins*60);
        var text = '' + mins.toString() + ':';
        text += secs > 9 ? secs.toString() : '0' + secs.toString();
        //console.log(text);

        return text;
    }
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            show: 500,
            hide: 100
        }
    });
});
