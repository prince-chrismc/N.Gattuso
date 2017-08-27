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
    this.time = $('#timestamp' + this.id);

    this.audio[0].volume = 0.8;
    this.pause_btn.hide();
    this.range.hide();



    /* Member Functions */
    this.play = function() {
        this.audio.trigger('play');
    }
    this.pause = function() {
        this.audio.trigger('pause');
    }

    this.stop = function() {
        this.audio.trigger('pause');
        this.audio.currentTime = 0;
    }


    // utilit
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
        obj.root.innerHTML += '<div class="col-sm-6    col-md-8">';
        obj.root.innerHTML += '<h2 class="media-heading">' + obj.title + ' by <i>N.Gattuso</i></h2><h4>' + obj.desc + '</h4>';
        obj.root.innerHTML += '<div class="menu-controls"><i id="play_btn' + obj.id + '" class="fa fa-play fa-3x" data-toggle="tooltip" title="Play"></i><i id="pause_btn' + obj.id + '" class="fa fa-pause fa-3x" data-toggle="tooltip" title="Pause"></i><i id="volume_btn' + obj.id + '" class="fa fa-volume-down fa-3x" data-toggle="tooltip" title="Volume Adjust"></i><div id="range' + obj.id + '" class="range-slider" data-toggle="tooltip" title="Volume Adjust"><input id="slider' + obj.id + '" class="range-slider__range" type="range" value="80" min="0" max="100" step="5" for="#s2"><span class="range-slider__value">0</span></div></div><div id="prog' + obj.id + '" class="progress" data-toggle="tooltip" title="." data-trigger="manual"><div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div><div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div></div><div class="row"><p id="timestamp' + obj.id + '" style="float: right">0:00</p></div><audio id="audio' + obj.id + '" src="' + src_audio + '" preload="metadata"></audio></div>';
    }
}
