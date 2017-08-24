function Sample(obj, title, desc, src_audio, src_cover) {

    // safety check for myself...
    if( ! obj.hasClass('audio_box') ) {
        alert('dumn ass u need to pass a .audio_box!!');
    }
    this.root = obj;
    this.title = title;
    this.desc = desc;
    this.id = hash(src_audio);

    generateHTML(this.root, src_audio, src_cover);

    this.audio = $('#audio' + this.id);
    this.play_btn = $('play_btn' + this.id);
    this.pause_btn = $('pause_btn' + this.id);
    this.volume_btn = $('volume_btn' + this.id);
    this.range = $('range' + this.id);
    this.slider = $('slider' + this.id);
    this.prog = $('prog' + this.id);
    this.time = $('timestamp' + this.id);

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

    function generateHTML(root, src_audio, src_cover) {
        root.innerHTML += "<div class='col-sm-6    col-md-4'>";
        root.innerHTML += "<img class='media-object' src='" + src_cover + "'";
        root.innerHTML += "alt='...' style='height: 250px; width: auto; max-width: 100%; margin: auto;'></div>";
        root.innerHTML += '<div class="col-sm-6    col-md-8">';
        root.innerHTML += '<h2 class="media-heading">' + this.title + ' by <i>N.Gattuso</i></h2><h4>' + this.desc + '</h4>';
        root.innerHTML += '<div class="menu-controls">';
        root.innerHTML += '<i id="play_btn' + this.id + '" class="fa fa-play fa-3x" data-toggle="tooltip" title="Play"></i>';
        root.innerHTML += '<i id="pause_btn' + this.id + '" class="fa fa-pause fa-3x" data-toggle="tooltip" title="Pause"></i>';
        root.innerHTML += '<i id="volume_btn' + this.id + '" class="fa fa-volume-down fa-3x" data-toggle="tooltip" title="Volume Adjust"></i>';
        root.innerHTML += '<div id="range' + this.id + '" class="range-slider" data-toggle="tooltip" title="Volume Adjust">';
        root.innerHTML += '<input id="slider' + this.id + '" class="range-slider__range" type="range" value="80" min="0" max="100" step="5" for="#s2">';
        root.innerHTML += '<span class="range-slider__value">0</span></div></div>';
        root.innerHTML += '<div id="prog' + this.id + '" class="progress" data-toggle="tooltip" title="." data-trigger="manual">';
        root.innerHTML += '<div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>';
        root.innerHTML += '<div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>';
        root.innerHTML += '</div><div class="row">';
        root.innerHTML += '<p id="timestamp' + this.id + '" style="float: right">0:00</p>';
        root.innerHTML += '</div>';
        root.innerHTML += '<audio id="audio' + this.id + '" src="' + src_audio + '" preload="metadata"></audio>';
        root.innerHTML += '</div>';
    }
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
